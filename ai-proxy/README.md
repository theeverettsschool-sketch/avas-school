# Ava's School writing helper (optional AI grading proxy)

The app works fully without this. When the parent pastes this Worker's URL into **Parent → Settings → Finish my day review → AI writing grading URL**, the "Finish my day" review sends each writing piece here and shows the feedback. If the helper is down, slow (12 s), or errors, the app silently uses its own local checks.

The API key lives **only** in Cloudflare as a secret. Nothing secret is in this folder or in the public site. The Worker only answers requests whose `Origin` is the GitHub Pages site, caps text at 4,000 characters, and rate-limits (20/min, 300/day per IP, best effort).

## What you need
1. A free **Cloudflare** account (https://dash.cloudflare.com/sign-up). The Workers free plan (100,000 requests/day) is plenty.
2. An **API key** from an OpenAI-compatible provider, for example OpenAI (https://platform.openai.com/api-keys, prepaid billing, set a monthly limit such as $5). Any provider with an OpenAI-style `/chat/completions` endpoint works; set `AI_BASE_URL` and `AI_MODEL` to match.
3. Node.js 18+ on the computer you deploy from.

## Deploy (about 10 minutes)
```bash
cd ai-proxy
npx wrangler login                     # opens the browser to sign in to Cloudflare
npx wrangler secret put AI_API_KEY     # paste the API key when asked (stored encrypted at Cloudflare)
npx wrangler deploy                    # prints the URL, e.g. https://ava-grader.<your-subdomain>.workers.dev
```
Then in the app: **Parent → Settings → Finish my day review**, paste that URL, tap **Test URL** (it should say "Works: score …"), then **Save**. Do this on one device; it syncs.

To change provider/model, edit `[vars]` in `wrangler.toml` (e.g. `AI_MODEL = "gpt-4o-mini"`) and run `npx wrangler deploy` again. To turn AI grading off, clear the URL in the app.

## Cost
A day has about 2–6 writing pieces of 50–200 words. With a small model (e.g. gpt-4o-mini) each check is about 600 tokens in / 150 out, roughly $0.0002, so a whole school year is well under $1. Larger models cost more (still a few dollars a year). Set a monthly spending limit with the provider. Cloudflare's free plan costs nothing.

## Request / response
POST JSON `{ prompt, text, grade: 4, kind, minWords, rubric }` → `{ score: 1-4, strengths, fixes: [], redo: boolean, feedbackForStudent }`.

## Privacy
Only the prompt and her writing (no name, no account data) are sent to the provider. Check the provider's data policy (OpenAI's API does not train on API data by default).
