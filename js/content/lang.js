/* Language Arts — Weeks 1-4: grammar, spelling (study + blind test), writing workshop. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;
  function exact(q) { q.exact = true; return q; } // case-sensitive answer

  function lesson(week, role, subject, key, o) {
    o.id = 'w' + week + '-' + role + '-' + key; o.subject = subject; C.add(o);
    var wk = C.weeks[week] = C.weeks[week] || {}; (wk[role] = wk[role] || []).push(o.id); return o.id;
  }

  // =========================== GRAMMAR ===========================
  // W1 (Tue): complete sentences, fragments, run-ons          ELAGSE4L1f
  lesson(1, 'tue', 'grammar', 'grammar', {
    type: 'lesson', title: 'Complete sentences, fragments, and run-ons', mins: 20, standard: 'ELAGSE4L1f',
    learn: [
      { h: 'What makes a sentence complete?', p: 'A complete sentence has TWO jobs done: (1) a SUBJECT, which tells who or what the sentence is about, and (2) a PREDICATE, which tells what the subject does or is. Together they make one complete thought.' },
      { h: 'Fragment', p: 'A fragment is a piece of a sentence. It is missing a subject, a predicate, or it leaves you waiting for more. "Ran across the yard." (Who ran?) and "Because it was raining." (What happened because of it?) are fragments.' },
      { h: 'Run-on', p: 'A run-on mashes two complete sentences together with no punctuation or joining word. "I like pizza my brother likes tacos." You can fix it by splitting it into two sentences or joining with a comma and a word like and, but, or so.' }
    ],
    demo: { q: 'Is "Running down the hill." a complete sentence?', steps: ['Step 1: Look for the SUBJECT. Who or what is running? The sentence never says. There is no subject.', 'Step 2: Look for a complete thought. "Running down the hill" leaves us wondering who. The thought is not finished.', 'Step 3: Decide. A sentence needs both a subject and a predicate. This one is missing the subject, so it is a FRAGMENT.', 'Step 4: Fix it by adding a subject: "The puppy was running down the hill." Now we know who, and the thought is complete.'], a: 'Fragment (no subject)' },
    items: [
      Q('"The dog barked loudly." What is this?', ['Complete sentence', 'Fragment', 'Run-on'], 0, 'Subject: "The dog." Predicate: "barked loudly." Both parts are there and the thought is complete, so it is a complete sentence.', 'Find who or what, then what they did.'),
      Q('"Because it was raining." What is this?', ['Complete sentence', 'Fragment', 'Run-on'], 1, 'It has a subject ("it") and a verb ("was raining"), but the word "Because" makes us wait for the rest. What happened because of the rain? The thought is unfinished, so it is a fragment. Fix: "Because it was raining, we stayed inside."', 'Does it leave you waiting?'),
      Q('"Ran across the yard." What is this?', ['Complete sentence', 'Fragment', 'Run-on'], 1, 'We do not know WHO ran. There is no subject, so it is a fragment. Fix: "The cat ran across the yard."', 'Who ran?'),
      Q('"I like pizza my brother likes tacos." What is this?', ['Complete sentence', 'Fragment', 'Run-on'], 2, 'There are TWO complete thoughts (I like pizza. My brother likes tacos.) stuck together with nothing between them. That is a run-on. Fix: "I like pizza, but my brother likes tacos."', 'Count the complete thoughts.'),
      Q('"My sister and I went to the park." What is this?', ['Complete sentence', 'Fragment', 'Run-on'], 0, 'Subject: "My sister and I." Predicate: "went to the park." The thought is complete.'),
      Q('Which choice fixes the fragment "Under the old bridge."?', ['Under the old bridge, a troll lived.', 'Under the old bridge and the.', 'Under the old bridge near.', 'Old bridge under.'], 0, 'Only the first choice adds a subject ("a troll") and a verb ("lived") to make a complete thought.'),
      Q('In "The tall girl waved." what is the complete SUBJECT?', ['The tall girl', 'waved', 'tall', 'girl waved'], 0, 'The subject is who or what the sentence is about, with all its describing words: "The tall girl." The predicate is "waved."'),
      Q('In "The bright moon rose over the hills." what is the complete PREDICATE?', ['The bright moon', 'rose over the hills', 'bright moon rose', 'the hills'], 1, 'The predicate tells what the subject did: "rose over the hills." Everything after the subject, "The bright moon," belongs to the predicate.')
    ]
  });

  // W2 (Mon): common & proper nouns, capitalization          ELAGSE4L2a
  lesson(2, 'mon', 'grammar', 'grammar', {
    type: 'lesson', title: 'Common and proper nouns: when to use capital letters', mins: 20, standard: 'ELAGSE4L2a',
    learn: [
      { h: 'Nouns name things', p: 'A noun names a person, place, thing, or idea. A COMMON noun is general: girl, city, river, holiday. A PROPER noun is the exact name of one: Ava, Atlanta, Chattahoochee River, Thanksgiving. Proper nouns always start with a capital letter.' },
      { h: 'Things that get capital letters', p: 'Names of people and pets (Max), days and months (Tuesday, October), holidays (Christmas), cities and states (Atlanta, Georgia), rivers, mountains, and the first and important words in titles (Charlotte\'s Web).' },
      { h: 'Tricky one: Mom and Dad', p: 'If you use Mom or Dad as a NAME, capitalize it: "I asked Mom for help." If a word like my, your, or her comes first, it is just a common noun, so use lowercase: "I asked my mom for help."' }
    ],
    demo: { q: 'Which words need capital letters? "my cousin lives in savannah and loves the river."', steps: ['Step 1: Underline each noun: cousin, savannah, river.', 'Step 2: Ask, "Is this the exact name of one particular one?" "cousin" is a general word. A person\'s name would be capitalized, but no name is used here. Lowercase.', 'Step 3: "savannah" is the exact name of one city. It is a proper noun, so capitalize: Savannah.', 'Step 4: "river" is general (no name like Savannah River given). Lowercase.', 'Step 5: Do not forget the first word of the sentence: My. Final: "My cousin lives in Savannah and loves the river."'], a: 'My cousin lives in Savannah and loves the river.' },
    items: [
      Q('Which word is a PROPER noun?', ['city', 'Atlanta', 'river', 'holiday'], 1, 'Atlanta is the exact name of one city. The other words are general (common) nouns.', 'Which one names one exact place?'),
      Q('Which sentence is correct?', ['We visit grandma in july.', 'We visit Grandma in July.', 'we visit grandma in July.', 'we visit Grandma in july.'], 1, 'Months always get capital letters (July). Grandma is used as a name here, so it is capitalized. The sentence also starts with a capital.', 'Months and names.'),
      Q('Which sentence is correct?', ['I helped my Mom.', 'I helped my mom.', 'i helped my mom.', 'I helped My mom.'], 1, '"My" comes before "mom," so it is a common noun and stays lowercase.', 'Look for "my."'),
      Q('Which sentence is correct?', ['I asked mom to help.', 'I asked Mom to help.', 'I asked MOM to help.', 'i asked Mom to help.'], 1, 'Here "Mom" is used as her NAME (nothing like "my" before it), so it gets a capital letter.'),
      Q('Which title is capitalized correctly?', ['charlotte\'s web', 'Charlotte\'s Web', 'charlotte\'s Web', 'CHARLOTTE\'S web'], 1, 'The important words in a title begin with capital letters. Charlotte\'s and Web are both important.'),
      Q('Which group has ALL proper nouns?', ['Georgia, Tuesday, Thanksgiving', 'state, day, holiday', 'Georgia, day, holiday', 'state, Tuesday, holiday'], 0, 'Georgia (a state), Tuesday (a day), and Thanksgiving (a holiday) are all exact names. The other groups mix in general words.'),
      exact(T('Rewrite with correct capitals: "we drove to atlanta on friday."', ['We drove to Atlanta on Friday.'], 'Capitalize the first word (We), the city (Atlanta), and the day (Friday). Capital letters are the whole point here, so your answer must match exactly.', 'Three capitals needed.')),
      Q('Which one is a COMMON noun?', ['Ava', 'Thanksgiving', 'mountain', 'Georgia'], 2, 'Mountain is a general word for any mountain. A particular one, like Stone Mountain, would be proper.')
    ]
  });

  // W3 (Mon): verbs, progressive tenses, modals               ELAGSE4L1b,c
  lesson(3, 'mon', 'grammar', 'grammar', {
    type: 'lesson', title: 'Verbs: action, progressive tenses, and helper words', mins: 20, standard: 'ELAGSE4L1b-c',
    learn: [
      { h: 'Verbs show action or being', p: 'Verbs tell what someone does (run, build) or is (is, are, was). The tense tells WHEN: past (walked), present (walks), future (will walk).' },
      { h: 'Progressive tenses show "in progress"', p: 'Use a form of "to be" plus a verb ending in -ing to show an action that goes on for a while. Past: was walking. Present: is walking. Future: will be walking.' },
      { h: 'Helper (modal) verbs', p: 'Words like can, may, must, should, could, would go in front of a verb and show ability, permission, or need. "You should wash your hands." "May I go?" "She can swim."' }
    ],
    demo: { q: 'Choose the right verb: "Yesterday at 4:00, I ___ my bike."  (rode / was riding / will be riding)', steps: ['Step 1: Find the time clue. "Yesterday" means PAST.', 'Step 2: "At 4:00" suggests the action was happening at that moment, in progress.', 'Step 3: Past + in progress = PAST PROGRESSIVE: "was" + verb-ing = "was riding."', 'Step 4: Check: "Yesterday at 4:00, I was riding my bike." It sounds right. "Rode" is past but not "in progress." "Will be riding" is future.'], a: 'was riding' },
    items: [
      Q('Which sentence uses PAST progressive?', ['She is baking cookies.', 'She was baking cookies.', 'She will bake cookies.', 'She baked cookies.'], 1, 'Past progressive = was/were + verb-ing: "was baking." "Is baking" is present progressive, "will bake" is future, and "baked" is simple past.', 'Look for was/were + -ing.'),
      Q('Choose the correct verb: "Right now, the birds ___ outside."', ['sang', 'are singing', 'will be singing', 'were singing'], 1, '"Right now" means present and in progress, so use is/are + -ing. Birds is plural, so "are singing."'),
      Q('Choose the correct verb: "Tomorrow at noon, we ___ at the zoo."', ['are walking', 'were walking', 'will be walking', 'walked'], 2, '"Tomorrow" is future. Future progressive = will be + verb-ing.'),
      Q('Which is a helper (modal) verb?', ['jump', 'should', 'quickly', 'green'], 1, 'Should is a helper verb that shows what is a good idea. Jump is an action verb, quickly is an adverb, green is an adjective.'),
      Q('Which sentence is correct?', ['I can to swim.', 'I can swim.', 'I can swims.', 'I cans swim.'], 1, 'After a helper verb like can, use the plain verb with no "to" and no -s: "can swim."'),
      Q('Which helper verb fits best? "You ___ look both ways before crossing the street."', ['might', 'must', 'could not', 'may not'], 1, '"Must" shows something that is necessary for safety. "Might" is too weak.'),
      Q('Which sentence uses PRESENT progressive?', ['They played soccer.', 'They are playing soccer.', 'They will play soccer.', 'They were playing soccer.'], 1, 'Present progressive = am/is/are + -ing: "are playing."'),
      T('Fill in with the correct progressive form of "read": "Last night I ___ a book when the lights went out."', ['was reading'], 'It happened in the PAST and was in progress, so "was reading."', 'was/were + -ing')
    ]
  });

  // W4 (Mon): adjectives, adverbs, prepositional phrases      ELAGSE4L1d,e
  lesson(4, 'mon', 'grammar', 'grammar', {
    type: 'lesson', title: 'Adjectives, adverbs, and prepositional phrases', mins: 20, standard: 'ELAGSE4L1d-e',
    learn: [
      { h: 'Adjectives describe nouns', p: 'An adjective answers: What kind? How many? Which one? In "the fluffy white cat," fluffy and white are adjectives. When you use more than one, they usually go in this order: opinion, size, age, shape, color, then material. Say "a lovely small round red ball," not "a red round small lovely ball."' },
      { h: 'Adverbs describe verbs', p: 'An adverb tells HOW, WHEN, or WHERE something happens. Many end in -ly: quickly, softly. "She ran quickly." "He arrived early." "The dog sat nearby."' },
      { h: 'Prepositional phrases', p: 'A preposition shows where or when (in, on, under, over, after, during, behind). A prepositional phrase starts with the preposition and ends with a noun: "under the table," "after school," "behind the barn."' }
    ],
    demo: { q: 'Find the adjective, adverb, and prepositional phrase: "The tiny kitten slept quietly under the porch."', steps: ['Step 1: ADJECTIVE. Which word describes a noun? "tiny" describes "kitten" (what kind?).', 'Step 2: ADVERB. Which word describes how the kitten slept? "quietly" tells HOW.', 'Step 3: PREPOSITIONAL PHRASE. Find the preposition + noun: "under the porch" tells WHERE the kitten slept.', 'Step 4: Check each answer: tiny (adjective), quietly (adverb), under the porch (prepositional phrase).'], a: 'tiny; quietly; under the porch' },
    items: [
      Q('Find the ADJECTIVE: "The brave knight rode away."', ['brave', 'rode', 'away', 'knight'], 0, 'Brave describes the noun "knight" (what kind of knight?).'),
      Q('Find the ADVERB: "The snow fell softly."', ['snow', 'fell', 'softly', 'The'], 2, 'Softly tells HOW the snow fell. Many adverbs end in -ly.'),
      Q('Which phrase has the adjectives in the correct order?', ['a red small ball', 'a small red ball', 'a ball small red', 'red a small ball'], 1, 'Size comes before color: "a small red ball."'),
      Q('Which is a prepositional phrase in "We ate lunch after the game."?', ['We ate', 'ate lunch', 'after the game', 'lunch after'], 2, '"After" is the preposition and "the game" is the noun. Together they tell WHEN we ate.'),
      Q('Which word is an adverb? "He ran quickly to the store."', ['He', 'ran', 'quickly', 'store'], 2, 'Quickly tells HOW he ran.'),
      Q('Choose the best adjective order: "She wore a ___ dress."', ['pretty long blue', 'blue long pretty', 'long pretty blue', 'pretty blue long'], 0, 'Opinion (pretty), then size (long), then color (blue): "a pretty long blue dress."'),
      T('Write one prepositional phrase from this sentence: "The cat hid behind the couch." (3 words)', ['behind the couch'], 'The preposition is "behind" and the noun is "couch," so the phrase is "behind the couch."', 'preposition + the + noun'),
      Q('Which sentence has an adverb that tells WHEN?', ['She sang loudly.', 'We will go tomorrow.', 'He is very tall.', 'The big dog barked.'], 1, '"Tomorrow" tells WHEN we will go. "Loudly" tells how.')
    ]
  });

  // =========================== SPELLING ===========================
  var SP = {
    1: { name: 'Everyday words', rule: 'Words we use all the time that are easy to misspell.', words: [
      ['because', 'We stayed inside because it was raining.', 'Big Elephants Can Always Understand Small Elephants (b-e-c-a-u-s-e).'],
      ['friend', 'My best friend lives down the street.', 'A friend is there until the END: fri-END.'],
      ['again', 'Please read the story again.', 'a-GAIN: you want to gain another try.'],
      ['people', 'Many people came to the picnic.', 'People Eat Oranges, Peel Lemons, Eat: p-e-o-p-l-e.'],
      ['school', 'We walk to school together.', 'There is a double o: two eyes looking at the school.'],
      ['thought', 'I thought about it all night.', 'ough + t at the end: thou-GHT.'],
      ['through', 'We drove through the tunnel.', 'th-ROUGH: the "ough" sounds like "oo" here.'],
      ['different', 'Her shoes are different from mine.', 'dif-FER-ent: the middle part is FER.'],
      ['favorite', 'Blue is my favorite color.', 'Say it slowly: fa-vor-ite (3 parts).'],
      ['beautiful', 'The sunset was beautiful.', 'BEAU-ti-ful: beau is French for pretty.']] },
    2: { name: 'Words that sound alike', rule: 'Homophones sound the same but have different spellings and meanings.', words: [
      ['their', 'The kids put their coats on the hooks.', 'their = belonging to them (there is an I in their, like "heir").'],
      ['there', 'Put the book over there.', 'there = a place, like HERE and THERE.'],
      ["they're", "They're going to the park after lunch.", "they're = they are. The apostrophe replaces the a."],
      ['your', 'Is this your jacket?', 'your = belonging to you.'],
      ["you're", "You're doing a great job.", "you're = you are."],
      ['to', 'We walked to the library.', 'to = toward a place.'],
      ['too', 'I want to go, too.', 'too has too many o\'s: it means also or more than enough.'],
      ['two', 'I have two cats.', 'two = the number 2 (it has a w like "twin").'],
      ['here', 'Come here, please.', 'here is a place: it has the word "ere" in it, like where.'],
      ['hear', 'I can hear the music.', 'You hear with your EAR: h-EAR.']] },
    3: { name: 'Adding -ing and -ed', rule: 'Drop the silent e before -ing/-ed (make → making). With one short vowel and one consonant, double the consonant (hop → hopped).', words: [
      ['hoping', 'I am hoping for sunny weather.', 'hope → drop the e → hoping.'],
      ['hopped', 'The rabbit hopped across the yard.', 'hop → double the p → hopped.'],
      ['making', 'She is making a card.', 'make → drop the e → making.'],
      ['stopped', 'The bus stopped at the corner.', 'stop → double the p → stopped.'],
      ['running', 'He is running in the race.', 'run → double the n → running.'],
      ['writing', 'I am writing a story.', 'write → drop the e → writing.'],
      ['taking', 'We are taking a trip.', 'take → drop the e → taking.'],
      ['planned', 'They planned a surprise party.', 'plan → double the n → planned.'],
      ['smiled', 'She smiled at her friend.', 'smile ends in e, so just add d.'],
      ['carried', 'He carried the box upstairs.', 'carry: change y to i, then add -ed.']] },
    4: { name: 'Science and history words', rule: 'Words you will use in science and social studies this month.', words: [
      ['planet', 'Earth is a planet.', 'plan-ET: a planet is a world.'],
      ['orbit', 'The moon makes an orbit around Earth.', 'or-BIT: a path in a circle.'],
      ['gravity', 'Gravity keeps us on the ground.', 'grav-I-ty: the pull toward Earth.'],
      ['universe', 'The universe is very big.', 'uni means one: one big everything.'],
      ['colony', 'Georgia was a British colony.', 'col-O-ny: a place ruled by another country.'],
      ['liberty', 'The Statue of Liberty stands in New York.', 'lib-ER-ty: freedom.'],
      ['freedom', 'The colonists wanted freedom.', 'free + dom: being free.'],
      ['patriot', 'A patriot loves their country.', 'PAT-ri-ot.'],
      ['continent', 'Africa is a continent.', 'con-ti-NENT: a very large land mass.'],
      ['equator', 'The equator is an imaginary line around Earth.', 'e-QUA-tor: it makes things "equal" north and south.']] }
  };
  C.spelling = SP;
  Object.keys(SP).forEach(function (w) {
    w = +w;
    var role = w === 1 ? 'tue' : 'tue', test = 'fri';
    // study on Tuesday, blind test on Friday
    lesson(w, role, 'spelling', 'spell-study', { type: 'spell-study', title: 'Spelling study: ' + SP[w].name, mins: 15, words: SP[w].words.map(function (x) { return { w: x[0], s: x[1], tip: x[2] }; }), rule: SP[w].rule, list: w });
    lesson(w, test, 'spelling', 'spell-test', { type: 'spell-test', title: 'Friday spelling test', mins: 10, words: SP[w].words.map(function (x) { return { w: x[0], s: x[1] }; }), list: w });
  });

  // =========================== WRITING WORKSHOP ===========================
  var CHECK = ['Every sentence starts with a capital letter.', 'Every sentence ends with . ? or !', 'Names of people and places are capitalized.', 'I read it out loud and it sounds right.'];
  lesson(1, 'thu', 'writing', 'write', {
    type: 'write', title: 'Writing workshop: choose a small moment', mins: 30, project: 'Personal narrative',
    intro: 'This month you will write a true story about one small moment from your life, from planning to a finished final copy. A "small moment" is a few minutes that you can describe in detail, like the day you lost a tooth, a first bike ride, or a fun trip.',
    demo: { q: 'How do I pick a good small moment?', steps: ['Step 1: List three moments. Mine: (a) my first day at a new school, (b) when my kite got stuck in a tree, (c) the time I baked cookies with Grandma.', 'Step 2: Ask for each one: "Can I remember what I saw, heard, and felt?" The kite: I remember the wind, the string, the whoosh, and being upset.', 'Step 3: Ask: "Does it have a beginning, middle, and end?" Kite: flying, stuck, rescued. Yes!', 'Step 4: Choose the moment with the most details you remember, and write a first sentence that grabs attention: "The wind grabbed my kite and did not let go."'], a: 'Choose a moment with details and a beginning, middle, and end.' },
    fields: [
      { id: 'm1', label: 'Moment #1 (one sentence)', min: 6 }, { id: 'm2', label: 'Moment #2 (one sentence)', min: 6 }, { id: 'm3', label: 'Moment #3 (one sentence)', min: 6 },
      { id: 'pick', label: 'Which one will you write about, and why? (2 sentences)', min: 12 },
      { id: 'hook', label: 'Write the FIRST SENTENCE of your story. Make the reader want to keep reading.', min: 6 }
    ], checklist: CHECK, stars: 'writingSubmitted'
  });
  lesson(2, 'thu', 'writing', 'write', {
    type: 'write', title: 'Writing workshop: write the draft', mins: 35, project: 'Personal narrative',
    intro: 'Today you write your first draft. A draft does not have to be perfect. Get the whole story down: beginning (what is happening and where), middle (the problem or exciting part), and end (how it turned out and how you felt).',
    demo: { q: 'How do I turn my moment into a draft?', steps: ['Step 1: Beginning. Tell WHERE and WHEN, and what you were doing. "It was a windy Saturday at the park. I was flying my new red kite."', 'Step 2: Middle. Tell the problem or the exciting part and add what you saw, heard, and felt. "Suddenly the wind gusted and my kite crashed into a tall oak tree. My heart dropped."', 'Step 3: End. Tell how it ended and what you learned or felt. "Dad climbed up and rescued it. I learned that kites need a little room."', 'Step 4: Do not worry about mistakes yet. We fix them in Week 4.'], a: 'Beginning, middle, end with details.' },
    fields: [
      { id: 'begin', label: 'BEGINNING: Where and when were you? What was happening? (3–4 sentences)', min: 25 },
      { id: 'middle', label: 'MIDDLE: What was the problem or exciting part? Tell it step by step. (5–7 sentences)', min: 50 },
      { id: 'end', label: 'END: How did it turn out? How did you feel? (3–4 sentences)', min: 25 }
    ], checklist: ['I told the story in order.', 'I used "I" because it is MY story.', 'I included a beginning, a middle, and an end.'], stars: 'writingSubmitted'
  });
  lesson(3, 'thu', 'writing', 'write', {
    type: 'write', title: 'Writing workshop: revise (make it better)', mins: 35, project: 'Personal narrative', carryFrom: 'w2-thu-write',
    intro: 'Revising means making the writing better, not just fixing spelling. Good writers add the five senses (see, hear, smell, taste, touch), exact words, and sometimes talking (dialogue). Look at your draft below and add to it.',
    demo: { q: 'How do I revise a plain sentence?', steps: ['Plain: "I was scared."', 'Step 1: Show it with the body. "My knees shook."', 'Step 2: Add a sense. "I heard the wind roar."', 'Step 3: Add talking. "\'Stay calm,\' Dad said."', 'Revised: "My knees shook as I heard the wind roar. \'Stay calm,\' Dad said."', 'Notice how the revised version SHOWS the feeling rather than just saying it.'], a: 'Add senses, exact words, and dialogue.' },
    fields: [
      { id: 'senses', label: 'Write 3 new sentences with the senses (what you saw, heard, felt, smelled, or tasted) that you can add to your story.', min: 25 },
      { id: 'dialogue', label: 'Write 2–3 lines of dialogue (what someone said). Use quotation marks and say who spoke.', min: 12 },
      { id: 'strong', label: 'Pick one boring word from your draft (like "nice," "big," or "said") and write 3 stronger words to replace it.', min: 6 },
      { id: 'revised', label: 'Rewrite your MIDDLE with your new details added.', min: 60 }
    ], checklist: ['I added at least 3 sense details.', 'I added dialogue with quotation marks.', 'I replaced at least one boring word.'], stars: 'writingSubmitted'
  });
  lesson(4, 'thu', 'writing', 'write', {
    type: 'write', title: 'Writing workshop: edit and publish', mins: 40, project: 'Personal narrative', carryFrom: 'w3-thu-write',
    intro: 'Editing means fixing mistakes: capitals, punctuation, and spelling. Then you publish: write your best final copy. Use the checklist and read your writing out loud, slowly, one sentence at a time.',
    demo: { q: 'How do I edit one sentence?', steps: ['Sentence: "yesterday me and dad went to the park we flew a kite"', 'Step 1: CAPITALS. First word and names: "Yesterday."', 'Step 2: PUNCTUATION. This is two thoughts stuck together (a run-on). Split it: "...to the park. We flew a kite."', 'Step 3: GRAMMAR. "me and dad" should be "Dad and I."', 'Final: "Yesterday Dad and I went to the park. We flew a kite."'], a: 'Yesterday Dad and I went to the park. We flew a kite.' },
    fields: [
      { id: 'final', label: 'FINAL COPY: Type your finished story here with a title on the first line. Fix capitals, punctuation, and spelling as you type.', min: 120 },
      { id: 'feel', label: 'One sentence: What are you proudest of in this story?', min: 6 }
    ], checklist: CHECK.concat(['I used a strong beginning and a strong ending.', 'I gave my story a title.']), stars: 'writingSubmitted', publish: true
  });

  var api = { SP: SP };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.LangContent = api;
})(typeof window !== 'undefined' ? window : globalThis);
