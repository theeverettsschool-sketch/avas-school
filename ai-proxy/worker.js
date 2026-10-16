// Ava's School writing helper: a tiny Cloudflare Worker that grades a 4th grader's writing with an
// OpenAI-compatible chat-completions API. The API key is a Worker SECRET (never in the public app).
// env: AI_API_KEY (secret), AI_BASE_URL (e.g. https://api.openai.com/v1), AI_MODEL (e.g. gpt-4o-mini),
//      ALLOWED_ORIGIN (https://theeverettsschool-sketch.github.io), optional RATE_PER_MIN (default 20), RATE_PER_DAY (default 300)
const MAX_TEXT = 4000, MAX_PROMPT = 600;
const hits = new Map(); // per-isolate, best-effort rate limiting (simple on purpose)

function cors(origin) { return { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400', Vary: 'Origin' }; }
function json(obj, status, origin) { return new Response(JSON.stringify(obj), { status: status || 200, headers: Object.assign({ 'Content-Type': 'application/json' }, origin ? cors(origin) : {}) }); }
function limited(key, perMin, perDay) {
  const now = Date.now(), r = hits.get(key) || { m: now, mn: 0, d: now, dn: 0 };
  if (now - r.m > 60000) { r.m = now; r.mn = 0; } if (now - r.d > 86400000) { r.d = now; r.dn = 0; }
  r.mn++; r.dn++; hits.set(key, r); return r.mn > perMin || r.dn > perDay;
}
const SYSTEM = 'You are a warm, encouraging writing coach for a 9-year-old 4th grader in a Christian homeschool. ' +
  'Grade the student writing against the prompt and rubric. Be kind, specific, and simple (short sentences a 4th grader can read). ' +
  'Praise something real first. You may include a short, gentle encouragement in a Christian-friendly tone (for example, God gave you a good mind), but do not preach. ' +
  'Never mention being an AI. Reply ONLY with JSON: {"score":1-4,"strengths":"one sentence","fixes":["up to 3 short, concrete fixes"],"redo":true|false,"feedbackForStudent":"2-3 kind sentences"}. ' +
  'Set redo=true only if the score is 1 or 2 (too short, off topic, not real sentences, or not a real attempt).';

export default {
  async fetch(req, env) {
    const allowed = (env.ALLOWED_ORIGIN || '').replace(/\/$/, ''), origin = req.headers.get('Origin') || '';
    if (!allowed || origin !== allowed) return json({ error: 'origin not allowed' }, 403);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) });
    if (req.method !== 'POST') return json({ error: 'POST only' }, 405, origin);
    if ((+req.headers.get('Content-Length') || 0) > 16000) return json({ error: 'too large' }, 413, origin);
    const ip = req.headers.get('CF-Connecting-IP') || 'x';
    if (limited(ip, +env.RATE_PER_MIN || 20, +env.RATE_PER_DAY || 300)) return json({ error: 'slow down' }, 429, origin);
    let body; try { body = await req.json(); } catch (e) { return json({ error: 'bad json' }, 400, origin); }
    const text = String(body.text || '').slice(0, MAX_TEXT), prompt = String(body.prompt || '').slice(0, MAX_PROMPT), rubric = String(body.rubric || '').slice(0, 600);
    if (!text.trim()) return json({ score: 1, strengths: '', fixes: ['Write your answer first.'], redo: true, feedbackForStudent: 'I could not find any writing yet. Give it a try. You can do it!' }, 200, origin);
    if (!env.AI_API_KEY || !env.AI_BASE_URL || !env.AI_MODEL) return json({ error: 'not configured' }, 500, origin);
    const user = 'Grade: ' + (+body.grade || 4) + '. Kind of writing: ' + String(body.kind || 'writing').slice(0, 80) + '. Minimum words: ' + (+body.minWords || 0) + '.\nRubric: ' + rubric + '\nPrompt: ' + prompt + '\nStudent writing:\n"""' + text + '"""';
    let r;
    try {
      r = await fetch(env.AI_BASE_URL.replace(/\/$/, '') + '/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + env.AI_API_KEY },
        body: JSON.stringify({ model: env.AI_MODEL, temperature: 0.3, max_tokens: 350, response_format: { type: 'json_object' }, messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: user }] }) });
    } catch (e) { return json({ error: 'provider unreachable' }, 502, origin); }
    if (!r.ok) return json({ error: 'provider error ' + r.status }, 502, origin);
    let out; try { const j = await r.json(); out = JSON.parse(j.choices[0].message.content); } catch (e) { return json({ error: 'bad provider reply' }, 502, origin); }
    const score = Math.max(1, Math.min(4, Math.round(+out.score || 1)));
    return json({ score, strengths: String(out.strengths || '').slice(0, 300), fixes: (Array.isArray(out.fixes) ? out.fixes : []).slice(0, 3).map(x => String(x).slice(0, 200)), redo: typeof out.redo === 'boolean' ? out.redo : score <= 2, feedbackForStudent: String(out.feedbackForStudent || '').slice(0, 500) }, 200, origin);
  }
};
