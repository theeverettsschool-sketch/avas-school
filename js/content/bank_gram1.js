/* Grammar topic banks, weeks 1-19 (Georgia ELA grade 4 language standards ELAGSE4L1-L5). 20 practice items per week. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;
  function exact(q) { q.exact = true; return q; } // capital letters matter

  // ---------------------------------------------------------------- Week 1
  C.unit('grammar', 1, {
    title: 'Complete sentences, fragments, and run-ons',
    standard: 'ELAGSE4L1f',
    learn: [
      { h: 'Two parts make a sentence', p: "Every complete sentence needs a subject (who or what) and a predicate (what the subject does or is). “Birds sing.” is only two words, but it is complete: “Birds” is the subject and “sing” is the predicate." },
      { h: 'Fragments are missing pieces', p: "A fragment is only part of a thought. It might be missing the subject (“Jumped in the creek.”), missing the predicate (“My cousin from Macon.”), or start with a word like because, when, or after and never finish (“When the bus came.”)." },
      { h: 'Run-ons need a stop or a joiner', p: "A run-on squeezes two sentences together. “The sun came out we went outside.” Fix it with a period (“The sun came out. We went outside.”) or with a comma plus and, but, or so (“The sun came out, so we went outside.”). A comma all by itself is not enough." }
    ],
    demo: {
      q: "Fix the run-on: “The baby was sleeping we whispered.”",
      steps: [
        "Step 1: Find the two complete thoughts. “The baby was sleeping” is one. “We whispered” is another.",
        "Step 2: Notice that nothing separates them. That makes it a run-on.",
        "Step 3: Choose a fix. Use a period, or a comma with a joining word that makes sense. Here “so” shows the reason.",
        "Step 4: Write it: “The baby was sleeping, so we whispered.”"
      ],
      a: "The baby was sleeping, so we whispered. (Or: The baby was sleeping. We whispered.)"
    },
    items: [
      Q("“The kittens chased a ball of yarn.” What is this?", ['Fragment', 'Complete sentence', 'Run-on'], 1, "It has a subject (“The kittens”) and a predicate (“chased a ball of yarn”). It is one finished thought, so it is a complete sentence.", 'Who did something? What did they do?'),
      Q("“After lunch on Sunday.” What is this?", ['Complete sentence', 'Run-on', 'Fragment'], 2, "There is no subject and no verb. We are left asking, “What happened after lunch?” That makes it a fragment. Fix: “After lunch on Sunday, we rode bikes.”", 'Can you find someone doing something?'),
      Q("“We went to the lake we caught three fish.” What is this?", ['Run-on', 'Fragment', 'Complete sentence'], 0, "There are two complete thoughts: “We went to the lake” and “we caught three fish.” Nothing separates them, so it is a run-on. Fix: “We went to the lake. We caught three fish.”", 'Count the complete thoughts.'),
      Q('Which one is a complete sentence?', ["The red wagon in the garage.", "Grandma baked a peach pie.", "Jumping over puddles all morning.", "When the bell rang."], 1, "“Grandma baked a peach pie.” has a subject (Grandma) and a predicate (baked a peach pie). The others are fragments: one has no verb, one has no subject, and one starts with “When” but never finishes.", 'Look for who AND what they did.'),
      Q('Which one is a fragment?', ["Birds sing.", "The tired puppy fell asleep.", "Hiding under the porch steps.", "Dad smiled."], 2, "“Hiding under the porch steps” never tells WHO is hiding, so it is a fragment. “Birds sing.” and “Dad smiled.” are short, but short does not mean incomplete. Each has a subject and a verb.", 'Short sentences can still be complete.'),
      Q("Which is the best fix for the run-on “It started to rain we ran inside.”?", ["It started to rain, we ran inside.", "It started to rain. We ran inside.", "It started to rain we. Ran inside.", "Started to rain we ran inside."], 1, "A period between the two thoughts makes two correct sentences. Using only a comma is tempting, but a comma by itself cannot join two sentences. The other choices break the sentences in the wrong places.", 'A comma alone is not strong enough.'),
      Q("What is missing from “Climbed the tall oak tree.”?", ['A subject (who climbed)', 'A predicate (what happened)', 'Nothing. It is complete.'], 0, "We know the action (climbed the tall oak tree), but not WHO climbed. A missing subject makes it a fragment. Fix: “My brother climbed the tall oak tree.”", 'Ask: who did it?'),
      Q("What is missing from “The girl in the yellow raincoat.”?", ['A subject (who it is about)', 'A predicate (what she did or is)', 'Nothing. It is complete.'], 1, "We know WHO, the girl in the yellow raincoat, but not what she did. There is no verb. Fix: “The girl in the yellow raincoat splashed in a puddle.”", 'Is there an action or a being word?'),
      Q("Which joining word fits best? “I wanted to play outside, ___ it was too cold.”", ['but', 'so', 'or'], 0, "“But” shows a surprise or a contrast: she wanted to go out, but something stopped her. “So” would mean the cold was the reason she wanted to play, which does not make sense.", 'The second part goes against the first part.'),
      T("How many complete sentences are in this group? Type a number. “Mom planted tomatoes. They grew tall. By the fence.”", ['2', 'two'], "“Mom planted tomatoes.” and “They grew tall.” are complete. “By the fence.” has no subject and no verb, so it is a fragment. That makes 2 complete sentences.", 'Check each one for a subject and a verb.'),
      Q('Which one is a run-on?', ["My brother plays soccer, and he scores lots of goals.", "My brother plays soccer.", "My brother plays soccer he scores lots of goals.", "He scores lots of goals."], 2, "“My brother plays soccer he scores lots of goals” jams two sentences together with nothing between them. The sentence with “, and he scores” is correct because it uses a comma AND the word “and.”", 'Look for two thoughts with nothing in between.'),
      Q("“Sarah forgot her lunch, so her dad brought it to her.” What is this?", ['Run-on', 'Complete sentence', 'Fragment'], 1, "This has two complete thoughts, but they are joined the right way: a comma plus the joining word “so.” That makes one correct sentence, not a run-on.", 'Is there a comma AND a joining word?'),
      Q("Which choice fixes the fragment “Because the bridge was closed.”?", ["Because the bridge was closed.", "Because the bridge. Was closed.", "Because the bridge was closed, we took a different road.", "The bridge because closed."], 2, "A “because” group needs a partner that tells what happened. Adding “we took a different road” finishes the thought, so now it is complete.", 'What happened because of it?'),
      T("Type the one-word simple subject: “The little squirrel buried an acorn.”", ['squirrel'], "The complete subject is “The little squirrel.” The simple subject is the main word inside it: squirrel. That is who did the burying.", 'Who buried the acorn? Drop the describing words.'),
      T("Type the verb (the action word): “Ava painted a sunflower.”", ['painted'], "“Painted” tells what Ava did, so it is the verb. Every complete sentence needs a verb in its predicate.", 'What did Ava do?'),
      Q("“Look at the rainbow.” What is this?", ['A fragment, because there is no subject', 'A complete sentence, because the subject “you” is understood', 'A run-on'], 1, "Commands are complete sentences. The subject is “you,” even though it is not written: (You) look at the rainbow. So this is not a fragment.", 'Who is being told to look?'),
      Q("“The movie was long, it was funny.” What is wrong with it?", ['Nothing is wrong.', 'It is a run-on, because a comma alone cannot join two sentences.', 'It is a fragment, because there is no verb.'], 1, "Both parts are complete sentences, and only a comma sits between them. That is a kind of run-on. Fix it: “The movie was long, but it was funny.”", 'Is there a joining word after the comma?'),
      Q('Which group has NO fragments?', ["After we ate. We read.", "We ate. Then read.", "We ate. Then we read.", "We ate. And then."], 2, "“We ate.” and “Then we read.” both have a subject and a verb. In the other groups, “After we ate.”, “Then read.”, and “And then.” are fragments.", 'Check every piece, not just the first one.'),
      Q("Which word works as a SUBJECT to fix “___ swam across the pond.”?", ['Quickly', 'The duck', 'Across', 'Wet'], 1, "A subject names who or what did the action. “The duck” names who swam. “Quickly” tells how, and “across” and “wet” do not name anyone.", 'Who or what can swim?'),
      Q("Which ending makes a complete sentence? “When we got home from church, ___”", ['and the dog.', 'we ate lunch together.', 'after that.'], 1, "“When we got home from church” makes us wait. “We ate lunch together” has a subject (we) and a verb (ate) and finishes the thought.", 'The ending needs its own subject and verb.')
    ]
  });

  // ---------------------------------------------------------------- Week 2
  C.unit('grammar', 2, {
    title: 'Common and proper nouns; capitalization',
    standard: 'ELAGSE4L2a',
    learn: [
      { h: 'Common vs. proper', p: "A noun names a person, place, thing, or idea. A common noun is a general name: girl, city, river, holiday. A proper noun is the special name of one exact one: Ava, Savannah, Chattahoochee River, Thanksgiving. Proper nouns always start with a capital letter." },
      { h: 'What gets a capital', p: "Capitalize the first word of a sentence, the word I, names of people and pets, days and months, holidays, cities, states, countries, streets, and names of particular schools, churches, and businesses. Titles before a name are capitalized too: Dr. Lee, Aunt Ruth." },
      { h: 'What does NOT get a capital', p: "Seasons stay lowercase (spring, summer). General words stay lowercase (my aunt, the doctor, a park). In a book title, capitalize the first word and the important words, but not small words like a, the, of, and, or in unless they come first." }
    ],
    demo: {
      q: "Fix the capitals: “last july my uncle took me to stone mountain.”",
      steps: [
        "Step 1: The first word of a sentence gets a capital: Last.",
        "Step 2: Months are proper nouns: July.",
        "Step 3: “uncle” is not used as a name here (it follows “my”), so it stays lowercase.",
        "Step 4: Stone Mountain is the name of one exact place, so both words get capitals."
      ],
      a: "Last July my uncle took me to Stone Mountain."
    },
    items: [
      Q('Which word is a COMMON noun?', ['Georgia', 'Tuesday', 'river', 'Ava'], 2, "“River” is a general word for any river. Georgia, Tuesday, and Ava each name one exact place, day, or person, so they are proper nouns.", 'Which one could mean any one of many?'),
      Q('Which word is a PROPER noun?', ['country', 'Mexico', 'mountain', 'teacher'], 1, "Mexico names one particular country, so it is proper and starts with a capital. Country, mountain, and teacher are general words.", 'Look for the special name.'),
      Q("“we visited aunt joy in the spring.” Which words need capital letters?", ['aunt, joy', 'we, aunt, joy', 'we, spring', 'we, aunt, joy, spring'], 1, "“We” starts the sentence. “Aunt Joy” is a title plus a name, so both words get capitals. Spring is a season, and seasons stay lowercase.", 'Seasons are not proper nouns.'),
      Q("“My mom works at the hospital on elm street.” Which words need capital letters?", ['mom, hospital', 'elm, street', 'hospital, elm, street', 'mom, elm, street'], 1, "Elm Street is the name of one exact street, so both words get capitals. “Hospital” is a general word here, and “mom” after “my” is not being used as her name.", 'Is it a name or a general word?'),
      Q('Which pair matches a common noun with a proper noun?', ['holiday : Easter', 'Easter : Christmas', 'holiday : celebration', 'city : town'], 0, "“Holiday” is the general (common) word, and “Easter” is the name of one exact holiday (proper). The other pairs are both proper or both common.", 'General word, then special name.'),
      T("Type the proper noun in this sentence: “Our dog Biscuit sleeps on the porch.”", ['Biscuit'], "A pet's name is a proper noun, so Biscuit gets a capital letter. Dog and porch are common nouns.", 'Which word is a name?'),
      Q("In the book title “the girl and the lion,” which words should be capitalized?", ['only the first word', 'the first the, girl, and lion', 'every word', 'only girl and lion'], 1, "Capitalize the first word of a title and the important words (Girl, Lion): The Girl and the Lion. Small words like “and” and “the” stay lowercase unless they come first.", 'Small words in the middle stay small.'),
      Q("Which word in this sentence should be capitalized? “we will go to the zoo on saturday.”", ['zoo and saturday', 'we and saturday', 'we and zoo', 'go and saturday'], 1, "“We” starts the sentence, and Saturday is a day of the week, which is a proper noun. “Zoo” is a general place word, so it stays lowercase.", 'Sentence starts and days of the week.'),
      Q('In which sentence should the word “dad” be capitalized?', ["My dad likes to fish.", "Can you help me, dad?", "Her dad is tall."], 1, "When you use Dad as his name (talking right to him), it is capitalized: “Can you help me, Dad?” After words like my or her, it is a common noun and stays lowercase.", 'Could you swap in his first name?'),
      Q('Which group has ONLY proper nouns?', ['Atlanta, Monday, Jesus', 'Atlanta, city, Monday', 'boy, girl, school', 'July, summer, Ohio'], 0, "Atlanta is a city's name, Monday is a day, and Jesus is a person's name, so all are proper. Summer is a season, which is common, so the last group does not work.", 'Watch out for seasons.'),
      T("Type the common noun: “Dr. Patel fixed the tooth.”", ['tooth'], "“Tooth” is a general thing. “Dr. Patel” is a title and a name, so it is a proper noun.", 'Which word is just a thing?'),
      exact(T("Write the word with the correct capitals: “savannah”", ['Savannah'], "Savannah is the name of a city in Georgia, so it is a proper noun and must start with a capital S.", 'It is a city name.')),
      Q("“My friend and i baked cookies.” What is the mistake?", ['Friend needs a capital.', 'The word i should be a capital I.', 'Cookies needs a capital.', 'There is no mistake.'], 1, "The word I is always capitalized, no matter where it is in a sentence. Friend and cookies are common nouns, so they stay lowercase.", 'One small word is always capitalized.'),
      Q('Which word should NOT be capitalized?', ['Thanksgiving', 'November', 'autumn', 'Thursday'], 2, "Seasons such as autumn are common nouns, so they stay lowercase. Thanksgiving (a holiday), November (a month), and Thursday (a day) are proper nouns.", 'Holidays, months, and days are names. Seasons are not.'),
      Q('Which one names a specific place?', ['the library', 'Lake Lanier', 'a lake', 'the park'], 1, "Lake Lanier is the name of one exact lake in Georgia, so it is a proper noun with capitals. The others could mean any library, lake, or park.", 'Which one has a name?'),
      T("How many proper nouns are in this sentence? Type a number. “On Sunday, Grace and Leo walked to First Baptist Church.”", ['4', 'four'], "There are 4: Sunday (a day), Grace (a person), Leo (another person), and First Baptist Church (the name of one church). Three words make up the church's name, but it is one proper noun.", 'Count each name separately.'),
      Q('Which sentence has a capitalization mistake?', ["We crossed the Savannah River.", "We crossed the river by boat.", "We crossed the savannah river at dawn.", "The river was wide."], 2, "The Savannah River is the name of one river, so BOTH words need capitals. In the other sentences, “river” is a general word, so it stays lowercase.", 'Every word of a place name gets a capital.'),
      Q("“My favorite holiday is christmas.” What should be fixed?", ['Nothing needs fixing.', 'holiday needs a capital H', 'christmas needs a capital C', 'favorite needs a capital F'], 2, "Christmas is the name of one holiday, so it is a proper noun and needs a capital C. “Holiday” is a general word, so it stays lowercase.", 'Holidays are names.'),
      Q('Which word is a common noun that names an IDEA?', ['kindness', 'Friday', 'Georgia', 'Grace'], 0, "Nouns can name ideas or feelings you cannot touch, like kindness, joy, or courage. Kindness is general, so it is common. The others are proper names.", 'Something you cannot touch.'),
      Q("“we read about ruth in the bible on sunday.” Which words need capitals?", ['we, ruth, bible, sunday', 'ruth, sunday', 'we, ruth, sunday', 'we, read, ruth, bible, sunday'], 0, "We starts the sentence. Ruth is a person's name, the Bible is the name of a special book, and Sunday is a day of the week. “Read” is a verb, so it stays lowercase.", 'Names, days, and the first word.'),
    ]
  });

  // ---------------------------------------------------------------- Week 3
  C.unit('grammar', 3, {
    title: 'Action and linking verbs; progressive tenses; modal verbs',
    standard: 'ELAGSE4L1b',
    learn: [
      { h: 'Action or linking?', p: "An action verb shows what someone does: run, bake, whisper, think. A linking verb does not show action. It links the subject to a word that names or describes it: “The soup is hot.” Common linking verbs are am, is, are, was, were, seem, and become." },
      { h: 'Progressive tenses', p: "Progressive verbs show an action that keeps going. Use a form of “be” plus a verb ending in -ing. Past: “I was walking.” Present: “I am walking.” Future: “I will be walking.” Use was for one person or thing, and were for more than one (and for you)." },
      { h: 'Modal (helper) verbs', p: "Modal verbs help another verb and change its meaning. Can shows ability (“I can swim.”). May shows permission or a maybe (“You may go.” “It may rain.”). Must shows something that has to happen (“We must buckle up.”)." }
    ],
    demo: {
      q: "Change “Lily reads.” to the future progressive.",
      steps: [
        "Step 1: Future progressive means an action that will be going on later.",
        "Step 2: The pattern is will be + verb-ing.",
        "Step 3: Add -ing to read: reading.",
        "Step 4: Put it together: “Lily will be reading.”"
      ],
      a: "Lily will be reading."
    },
    items: [
      Q("Which word is a LINKING verb? “The pancakes were fluffy.”", ['pancakes', 'were', 'fluffy', 'the'], 1, "“Were” does not show action. It links the subject (pancakes) to a word that describes them (fluffy). That is the job of a linking verb.", 'Which word connects the subject to the describing word?'),
      Q("Which word is an ACTION verb? “Grandpa whistled a tune.”", ['Grandpa', 'whistled', 'tune', 'a'], 1, "“Whistled” is something Grandpa did, so it is an action verb. Grandpa and tune are nouns.", 'What did he do?'),
      Q('In which sentence is the verb a LINKING verb?', ["The dog chewed a stick.", "My sister seems sleepy.", "We jumped into the pool.", "Mom wrote a letter."], 1, "“Seems” links “sister” to “sleepy.” Nobody is doing an action. In the other sentences, chewed, jumped, and wrote are all actions.", 'Find the verb that works like an equal sign.'),
      Q('Which sentence uses the PRESENT progressive?', ["I am baking bread.", "I was baking bread.", "I will be baking bread.", "I baked bread."], 0, "“Am baking” uses a present form of be (am) plus an -ing verb. It shows something happening right now. “Was baking” is past, and “will be baking” is future.", 'Present means right now.'),
      Q('Which sentence uses the FUTURE progressive?', ["We were singing at church.", "We are singing at church.", "We will be singing at church on Sunday.", "We sang at church."], 2, "Future progressive uses will be plus an -ing verb: “will be singing.” It shows an action that will be going on at a later time.", 'Look for will be.'),
      Q("Choose the correct verb: “Yesterday, the girls ___ jump rope when it started to rain.”", ['was', 'were', 'is'], 1, "The subject “the girls” is more than one, so it takes “were”: “were jumping.” “Was” is for one person or thing. “Is” is present, but the word yesterday tells us it is past.", 'One girl or many girls?'),
      T("Fill in with the past progressive of “swing”: “Ben ___ on the tire swing when Dad called him.” (two words)", ['was swinging'], "Past progressive is was or were plus an -ing verb. Ben is one person, so we use “was swinging.” It shows Ben was in the middle of swinging when something else happened.", 'was or were + -ing'),
      T("Fill in with the present progressive of “paint”: “Right now, I ___ a picture of a horse.” (two words)", ['am painting'], "“Right now” tells us it is present, and the subject is I, so we use “am.” Add -ing to paint: “am painting.”", 'I + am + verb-ing'),
      Q("Which modal verb shows PERMISSION? “Mom said we ___ have one cookie.”", ['must', 'may', 'can'], 1, "“May” is the polite word for permission. “Must” would mean we HAVE to eat a cookie. “Can” is mostly about being able to do something.", 'Mom is allowing it.'),
      Q("Which modal verb shows that something HAS to happen? “Everyone ___ wear a helmet on the bike trail.”", ['must', 'may', 'can'], 0, "“Must” shows a rule or something required. “May” would mean wearing a helmet is just allowed, which is not the point of a safety rule.", 'It is a rule.'),
      Q("Which modal verb shows ABILITY? “My little brother ___ tie his shoes now.”", ['must', 'may', 'can'], 2, "“Can” tells what someone is able to do. He has learned how to tie his shoes, so he can do it.", 'He knows how.'),
      Q('Which sentence uses a progressive verb correctly?', ["They is playing tag.", "They are playing tag.", "They am playing tag.", "They be playing tag."], 1, "“They” takes “are,” so the present progressive is “are playing.” Is goes with he, she, or it, and am goes only with I.", 'Which be-word goes with “they”?'),
      Q("What does “may” mean in “It may snow tonight.”?", ['It must snow.', 'It is allowed to snow.', 'It might snow; we are not sure.'], 2, "“May” can show permission, but it can also show that something is possible. Here no one is giving the weather permission. It means it might happen.", 'Can anyone give the sky permission?'),
      Q("Which word is the main verb in “We are building a fort.”?", ['are', 'building', 'fort', 'We'], 1, "“Building” is the main verb because it tells the action. “Are” is the helping verb that makes it progressive.", 'Which word shows the action?'),
      T("Type the linking verb: “I am excited about the trip.”", ['am'], "“Am” links the subject I to the describing word excited. Being excited is a feeling, not an action.", 'It is a small form of “be.”'),
      Q('Which sentence uses the PAST progressive?', ["The wind is blowing.", "The wind was blowing hard all night.", "The wind will blow.", "The wind blows."], 1, "Past progressive is was or were plus an -ing verb. “Was blowing” shows an action that kept going in the past.", 'was or were + -ing'),
      Q("Choose the best modal verb: “You ___ not touch the stove. It is hot!”", ['can', 'may', 'must'], 2, "“Must not” gives a strong warning about something that is not allowed because it is dangerous. “May not” is also possible but is softer; “must” fits a safety warning best.", 'It is a strong warning.'),
      Q('Change “Emma rides her bike.” to the FUTURE progressive.', ["Emma will rode her bike.", "Emma will be riding her bike.", "Emma was riding her bike.", "Emma will riding her bike."], 1, "Future progressive is will be plus an -ing verb. “Will be riding” is correct. “Will riding” leaves out be, and “will rode” mixes up tenses.", 'will + be + -ing'),
      Q("In “The cake smells delicious,” is “smells” an action verb or a linking verb?", ['Action verb', 'Linking verb', 'It is not a verb'], 1, "The cake is not doing any smelling. “Smells” links the cake to how it is (delicious). Test it: swap in “is.” “The cake is delicious” still makes sense, so smells is linking here.", 'Try swapping in “is.”'),
      T("Fill in with the future progressive of “wait”: “We ___ for you at the gate.” (three words)", ['will be waiting'], "Future progressive needs three parts: will + be + verb-ing. So “wait” becomes “will be waiting.”", 'will + be + -ing')
    ]
  });

  // ---------------------------------------------------------------- Week 4
  C.unit('grammar', 4, {
    title: 'Adjectives, adverbs, and prepositional phrases',
    standard: 'ELAGSE4L1e',
    learn: [
      { h: 'Adjectives describe nouns', p: "An adjective tells more about a noun: what kind (shiny, sour), how many (three, several), or which one (this, that). In “The fluffy cat slept,” fluffy describes the cat." },
      { h: 'Adverbs describe verbs', p: "An adverb tells more about a verb. It answers how (gently), when (yesterday, soon), or where (outside, here). Many adverbs end in -ly, but not all of them: fast, later, and often are adverbs too." },
      { h: 'Prepositional phrases', p: "A preposition shows how a noun is related to something else, often in place or time: in, on, under, behind, after, during, with, across. A prepositional phrase starts with the preposition and ends with a noun: “under the table,” “after supper.”" }
    ],
    demo: {
      q: "Label the adjective, adverb, and prepositional phrase: “The hungry bird sang loudly in the tree.”",
      steps: [
        "Step 1: Find the nouns: bird, tree. Which word describes bird? “hungry” is the adjective.",
        "Step 2: Find the verb: sang. How did it sing? “loudly” is the adverb.",
        "Step 3: Look for a preposition: “in.” The phrase runs from “in” to the noun “tree.”",
        "Step 4: So the prepositional phrase is “in the tree.”"
      ],
      a: "Adjective: hungry. Adverb: loudly. Prepositional phrase: in the tree."
    },
    items: [
      Q("Which word is an ADJECTIVE? “A gentle breeze moved the leaves.”", ['gentle', 'moved', 'breeze', 'leaves'], 0, "“Gentle” describes the noun breeze. It tells what kind of breeze. Moved is a verb, and breeze and leaves are nouns.", 'Which word describes a noun?'),
      Q("Which word is an ADVERB? “Mia carefully poured the milk.”", ['Mia', 'carefully', 'poured', 'milk'], 1, "“Carefully” tells HOW Mia poured. Words that describe a verb are adverbs.", 'How did she pour?'),
      Q("Which word is an adverb that tells WHERE? “The children played outside.”", ['children', 'played', 'outside', 'the'], 2, "“Outside” tells where they played. Adverbs can tell how, when, or where. Not every adverb ends in -ly.", 'Where did they play?'),
      Q("Which word is an adverb that tells WHEN? “We will visit Grandma tomorrow.”", ['visit', 'Grandma', 'will', 'tomorrow'], 3, "“Tomorrow” tells when we will visit. It describes the verb visit, so it is an adverb.", 'When will it happen?'),
      T("Type the prepositional phrase (3 words): “The frog jumped into the pond.”", ['into the pond'], "“Into” is the preposition, and the phrase ends with the noun pond: “into the pond.” It tells where the frog jumped.", 'Start with the position word.'),
      Q("Which group of words is a prepositional phrase?", ['ran very fast', 'during the storm', 'a big dog', 'sang and danced'], 1, "“During” is a preposition, and “the storm” finishes the phrase. The others have no preposition: one is a verb with adverbs, one is a noun with adjectives, and one is two verbs.", 'Look for a word like in, on, during, or with.'),
      Q('Which sentence uses an adverb correctly?', ["She sings beautiful.", "She sings beautifully.", "She sings beauty.", "She beautiful sings."], 1, "To describe HOW she sings (a verb), we need the adverb “beautifully.” “Beautiful” is an adjective, which describes a noun, like “a beautiful song.”", 'Describing an action? Use -ly here.'),
      Q('Which sentence uses an adjective correctly?', ["That was a quickly race.", "That was a quick race.", "That was a quicker raced.", "That was quickly."], 1, "“Race” is a noun, so it needs an adjective: “quick.” “Quickly” is an adverb, which describes verbs, not nouns.", 'Race is a thing, not an action here.'),
      T("Type the adjective that tells HOW MANY: “Four ducks waddled to the water.”", ['four', 'Four'], "Number words like four describe how many ducks there are, so they work as adjectives.", 'Count it.'),
      Q("What does the prepositional phrase tell in “We sang songs after supper.”?", ['where', 'when', 'how'], 1, "“After supper” tells WHEN we sang. Prepositional phrases can tell when (after supper, during lunch) or where (under the bed, on the shelf).", 'Is supper a place or a time?'),
      Q("Which word is the PREPOSITION? “The key is under the mat.”", ['key', 'is', 'under', 'mat'], 2, "“Under” shows where the key is compared to the mat. It begins the phrase “under the mat.”", 'Which word shows position?'),
      Q("Which word does the adverb “softly” describe? “The nurse spoke softly to the baby.”", ['nurse', 'spoke', 'baby'], 1, "“Softly” tells how the nurse spoke, so it describes the verb “spoke.” Adverbs describe verbs.", 'Softly tells how someone did something.'),
      Q("Which word does the adjective “muddy” describe? “Take off your muddy boots.”", ['take', 'off', 'boots'], 2, "“Muddy” tells what kind of boots. Boots is a noun, and adjectives describe nouns.", 'What is muddy?'),
      Q('Which word is NOT an adverb?', ['slowly', 'happy', 'never', 'here'], 1, "“Happy” is an adjective: a happy girl. Slowly (how), never (when), and here (where) all describe verbs, so they are adverbs.", 'Which one describes a noun?'),
      T("Fill in the blank with the adverb form of “brave”: “The firefighter acted ___.”", ['bravely'], "To describe how the firefighter acted (a verb), change the adjective brave to the adverb bravely by adding -ly.", 'Add an ending.'),
      Q("How many prepositional phrases are in “The cat on the fence stared at the bird.”?", ['one', 'two', 'three'], 1, "There are two: “on the fence” and “at the bird.” Each one starts with a preposition (on, at) and ends with a noun (fence, bird).", 'Look for on and at.'),
      Q('Choose the sentence with the best describing words.', ["The dog ran.", "The dog ran fast.", "The muddy dog ran wildly through the kitchen.", "The dog ran good."], 2, "Adjectives (muddy), adverbs (wildly), and a prepositional phrase (through the kitchen) help the reader picture the scene. “Ran good” is incorrect; it should be “ran well.”", 'Which one paints a picture?'),
      Q("“Good” or “well”? “Ava read the poem very ___.”", ['good', 'well', 'goodly'], 1, "“Well” is the adverb that tells how she read. “Good” is an adjective, used with nouns: “a good poem.”", 'You need a word that tells how.'),
      T("Type the preposition: “We walked across the bridge.”", ['across'], "“Across” shows how the walking relates to the bridge. It starts the prepositional phrase “across the bridge.”", 'Which word shows direction?'),
      Q("Which phrase tells WHERE? “At noon, Sam ate lunch beside the creek.”", ['At noon', 'ate lunch', 'beside the creek'], 2, "“Beside the creek” tells where Sam ate. “At noon” is also a prepositional phrase, but it tells when.", 'One phrase is a time, one is a place.')
    ]
  });

  // ---------------------------------------------------------------- Week 5
  C.unit('grammar', 5, {
    title: 'Plural nouns',
    standard: 'ELAGSE4L1',
    learn: [
      { h: 'Add -s or -es', p: "Most nouns just add -s: cat to cats, book to books. Nouns that end in s, x, z, ch, or sh add -es, because it gives you an extra sound to say: bus to buses, box to boxes, lunch to lunches, dish to dishes." },
      { h: 'Words ending in y and f', p: "If a word ends in a consonant plus y, change the y to i and add -es: puppy to puppies, city to cities. If a vowel comes before the y, just add -s: day to days, toy to toys. Many words ending in f or fe change to v and add -es: leaf to leaves, knife to knives, wolf to wolves." },
      { h: 'Irregular plurals', p: "Some nouns break the rules. You just have to learn them: child to children, mouse to mice, tooth to teeth, foot to feet, man to men, woman to women, goose to geese. A few stay the same: one sheep, two sheep; one deer, two deer; one fish, many fish." }
    ],
    demo: {
      q: "Make these plural: berry, monkey, wolf.",
      steps: [
        "Step 1: berry ends in r + y. A consonant comes before y, so change y to i and add -es: berries.",
        "Step 2: monkey ends in e + y. A vowel comes before y, so just add -s: monkeys.",
        "Step 3: wolf ends in f. It changes f to v and adds -es: wolves."
      ],
      a: "berries, monkeys, wolves"
    },
    items: [
      T("Type the plural of “box.”", ['boxes'], "Words that end in x add -es: boxes. You can hear the extra sound when you say it.", 'Ends in x.'),
      T("Type the plural of “baby.”", ['babies'], "Baby ends in a consonant (b) plus y, so change the y to i and add -es: babies.", 'Look at the letter before y.'),
      T("Type the plural of “child.”", ['children'], "Child is irregular. Instead of adding -s, the whole ending changes: one child, two children.", 'It does not follow the -s rule.'),
      T("Type the plural of “mouse.”", ['mice'], "Mouse is irregular. One mouse, two mice. (When we mean computer mice, people say mice too.)", 'The word changes completely.'),
      T("Type the plural of “leaf.”", ['leaves'], "Leaf ends in f, so change f to v and add -es: leaves. Think of “autumn leaves.”", 'f changes to v.'),
      Q('Which plural is spelled correctly?', ['foxs', 'foxes', 'foxies', 'foxen'], 1, "Fox ends in x, so add -es: foxes. “Foxs” would be hard to say.", 'Ends in x.'),
      Q('Which plural is spelled correctly?', ['keies', 'keyes', 'keys', 'kies'], 2, "Key ends in a vowel (e) plus y, so just add -s: keys. Only change y to i when a consonant comes before the y.", 'Is the letter before y a vowel?'),
      Q('Which plural is spelled correctly?', ['tooths', 'teeth', 'teeths', 'toothes'], 1, "Tooth is irregular: one tooth, many teeth. “Teeths” is wrong because teeth is already plural.", 'Irregular!'),
      Q('Which sentence is correct?', ["Three gooses swam in the pond.", "Three geese swam in the pond.", "Three geeses swam in the pond.", "Three goose swam in the pond."], 1, "Goose is irregular: one goose, two geese. It is a lot like tooth and teeth.", 'Think of tooth and teeth.'),
      Q('Which word stays the SAME when it is plural?', ['dog', 'deer', 'horse', 'bird'], 1, "One deer, two deer. Deer, sheep, and moose stay the same. Dog, horse, and bird just add -s.", 'Which animal never adds -s?'),
      Q("Find the mistake: “The ladys packed six lunches and two knives.”", ['ladys', 'lunches', 'knives'], 0, "Lady ends in d + y, so change y to i and add -es: ladies. Lunches (ch adds -es) and knives (f to v) are already correct.", 'Check the y rule.'),
      T("Type the plural of “wish.”", ['wishes'], "Wish ends in sh, so add -es: wishes.", 'sh words need an extra sound.'),
      T("Type the plural of “foot.”", ['feet'], "Foot is irregular. The oo changes to ee: foot becomes feet. The same pattern happens with goose and geese.", 'oo turns into ee.'),
      Q('Which plural is spelled correctly?', ['citys', 'cityes', 'cities', 'citties'], 2, "City ends in t + y. A consonant comes before y, so change y to i and add -es: cities.", 'Consonant + y.'),
      Q('Which word changes f to v in the plural?', ['roof', 'chief', 'half', 'cliff'], 2, "Half becomes halves. Roof, chief, and cliff just add -s (roofs, chiefs, cliffs). Not every f word changes, so check a dictionary when you are not sure.", 'Two halves make a whole.'),
      T("Type the plural of “woman.”", ['women'], "Woman is irregular: one woman, two women. Like man and men, the a changes to e.", 'Think of man and men.'),
      Q("Which word correctly fills the blank? “Mom bought two loaves of bread and three ___ of corn.”", ['ears', 'earies', 'earses'], 0, "Ear is a regular noun, so just add -s: ears. Notice loaf became loaves using the f to v rule.", 'Regular nouns are easy.'),
      Q('Which group is all spelled correctly?', ['buses, dishes, toys', 'busses, dishs, toies', 'buses, dishs, toys', 'bus, dishes, toies'], 0, "Bus adds -es (buses), dish adds -es (dishes), and toy has a vowel before y, so it adds only -s (toys).", 'Check each word with its rule.'),
      T("Type the plural of “wolf.”", ['wolves'], "Wolf ends in f, so it changes to v and adds -es: wolves.", 'f to v.'),
      Q("Which sentence uses plurals correctly?", ["The mans fixed the fences.", "The men fixed the fences.", "The men fixed the fencies.", "The mens fixed the fences."], 1, "Man is irregular (men), and fence just adds -s (fences). “Mens” is wrong because men is already plural.", 'Men is already plural.')
    ]
  });

  // ---------------------------------------------------------------- Week 6
  C.unit('grammar', 6, {
    title: 'Possessive nouns',
    standard: 'ELAGSE4L2',
    learn: [
      { h: 'Showing who owns something', p: "A possessive noun shows that something belongs to someone. We use an apostrophe ('). For ONE owner, add 's: the dog's bone, Ava's book, the teacher's desk." },
      { h: 'More than one owner', p: "If the plural already ends in s, just add an apostrophe after the s: the dogs' bones, the girls' room. If the plural does NOT end in s (children, men, women, mice), add 's: the children's toys, the men's hats." },
      { h: 'Plural or possessive?', p: "Do not use an apostrophe just to make a word plural. “The cats are sleeping” has no apostrophe because nothing belongs to the cats. Ask yourself: does something belong to this noun? If not, no apostrophe." }
    ],
    demo: {
      q: "Write the possessive: the nests that belong to the birds (more than one bird).",
      steps: [
        "Step 1: Write the owner as a plural first: birds.",
        "Step 2: Does the plural end in s? Yes.",
        "Step 3: So add only an apostrophe after the s: birds'.",
        "Step 4: Add the thing owned: the birds' nests."
      ],
      a: "the birds' nests"
    },
    items: [
      Q('Which shows a bone that belongs to ONE dog?', ["the dogs bone", "the dog's bone", "the dogs' bone", "the dog bone's"], 1, "For one owner, add 's to the noun: dog's. “dogs'” would mean more than one dog, and the apostrophe never goes on the thing being owned.", 'One owner: add apostrophe + s.'),
      Q('Which shows bones that belong to SEVERAL dogs?', ["the dog's bones", "the dogs bones'", "the dogs's bones", "the dogs' bones"], 3, "The plural is dogs, which already ends in s. So add just an apostrophe after the s: dogs'. Writing dogs's adds an extra s you do not need.", 'Plural ending in s: add only an apostrophe.'),
      Q('Which shows toys that belong to the children?', ["the childrens' toys", "the children's toys", "the childrens toys", "the child's toys'"], 1, "Children is already plural, but it does not end in s. So add 's: children's. The spelling childrens' is never correct because “childrens” is not a word.", 'Does the plural end in s?'),
      Q("Choose the correct word. (One bird) “The ___ nest was in the oak tree.”", ['birds', "bird's", "birds'"], 1, "There is one bird, and the nest belongs to it, so add 's: bird's. “Birds” with no apostrophe is just a plural, not a possessive.", 'One owner.'),
      Q("Choose the correct word. (Two puppies) “The two ___ tails were wagging.”", ["puppy's", "puppies'", 'puppies'], 1, "First make the plural: puppies. It ends in s, so add only an apostrophe: puppies'. “Puppy's” would mean just one puppy.", 'Make it plural first.'),
      exact(T("Write the possessive phrase for “the hat that belongs to Sam.” (two words)", ["Sam's hat"], "Sam is one person, so add 's to his name: Sam's hat. The apostrophe shows the hat belongs to him.", 'Name + apostrophe + s.')),
      Q("In “The dogs barked at the mail truck,” is “dogs” plural or possessive?", ['Plural', 'Possessive', 'Both'], 0, "Nothing in the sentence belongs to the dogs. “Dogs” just means more than one dog, so it is plural and needs no apostrophe.", 'Does anything belong to the dogs?'),
      Q("Which word is a possessive noun? “Lily's kite flew above the trees.”", ["Lily's", 'kite', 'trees', 'above'], 0, "“Lily's” has an apostrophe + s and shows the kite belongs to Lily. “Trees” is a plain plural.", 'Look for the apostrophe.'),
      Q('Which shows coats that belong to the women?', ["the womans' coats", "the womens coats", "the woman coats", "the women's coats"], 3, "Women is an irregular plural that does not end in s, so add 's: women's coats.", 'Women does not end in s.'),
      Q("Find the mistake: “The girls's bikes were in the garage.”", ["“girls's” should be “girls'”", "“bikes” should be “bike's”", "“garage” should be “garage's”", "There is no mistake."], 0, "Girls is a plural ending in s, so it needs only an apostrophe: girls'. Bikes is a plain plural, and nothing belongs to the garage.", 'Plural ending in s.'),
      Q("What does “my sisters' room” tell you?", ['One sister owns the room.', 'Two or more sisters share the room.', 'The room has no owner.'], 1, "The apostrophe comes AFTER the s in sisters', so there is more than one sister. If it were one sister, it would be “my sister's room.”", 'Where is the apostrophe?'),
      exact(T("Write the possessive word: the cheese that belongs to the mice. “the ___ cheese”", ["mice's"], "Mice is an irregular plural that does not end in s, so add 's: mice's.", 'Mice does not end in s.')),
      Q('Which sentence uses an apostrophe correctly?', ["The cat's are sleeping.", "The cat's bowl is empty.", "The cats bowl is empty.", "The cats' is sleeping."], 1, "In “The cat's bowl,” the bowl belongs to the cat, so the apostrophe is needed. “The cat's are sleeping” is wrong because cats there is just a plural.", 'Something must be owned.'),
      Q('Which shows desks that belong to many teachers?', ["teacher's desks", "teachers' desks", "teachers desk's", "teacheres' desks"], 1, "The plural of teacher is teachers, which ends in s. Add only an apostrophe: teachers'.", 'Plural, then apostrophe.'),
      exact(T("Write the possessive phrase for “the leaves of the tree” (one tree). (two words)", ["tree's leaves"], "One tree owns the leaves, so add 's: tree's leaves.", 'One owner.')),
      Q('Which shows hats that belong to the men?', ["mens' hats", "men's hats", "mans' hats", "mens hats"], 1, "Men is an irregular plural without an s, so add 's: men's hats. “Mens” is not a word.", 'Like children and women.'),
      Q("In “Grandma's garden has tall sunflowers,” who owns the garden?", ['the sunflowers', 'Grandma', 'many grandmas'], 1, "The apostrophe + s on Grandma's shows the garden belongs to Grandma. Since it is 's, there is one owner.", 'Find the word with the apostrophe.'),
      Q("How do you make the possessive of a plural noun that ends in s, like “horses”?", ["Add 's", 'Add only an apostrophe', "Add s'"], 1, "When a plural already ends in s, just add an apostrophe: horses' stalls. Adding another s makes it hard to say and is not correct.", 'Do not add another s.'),
      Q("Choose the correct sentence. (One brother)", ["My brothers' shoes are muddy.", "My brother's shoes are muddy.", "My brothers shoe's are muddy.", "My brother shoes' are muddy."], 1, "With one brother, the possessive is brother's. The plural shoes needs no apostrophe because the shoes do not own anything.", 'Only the owner gets the apostrophe.'),
      Q("Choose the correct word. “All three ___ wings were bright orange.” (three butterflies)", ["butterfly's", "butterflies'", "butterflys'"], 1, "Make the plural first: butterfly becomes butterflies (y to i, add -es). It ends in s, so add only an apostrophe: butterflies'.", 'Plural first, then the apostrophe.')
    ]
  });

  // ---------------------------------------------------------------- Week 7
  C.unit('grammar', 7, {
    title: 'Pronouns and relative pronouns',
    standard: 'ELAGSE4L1a',
    learn: [
      { h: 'Pronouns stand in for nouns', p: "A pronoun takes the place of a noun so we do not repeat it. Subject pronouns do the action: I, you, he, she, it, we, they. Object pronouns receive the action or come after words like to and with: me, you, him, her, it, us, them. Tip: with two people, cover up the other name and see which sounds right." },
      { h: 'Relative pronouns', p: "A relative pronoun begins a group of words that tells more about a noun. Who is for people doing something (the girl who sang). Whom is for people receiving the action (the man whom we thanked). Whose shows ownership (the boy whose dog ran away)." },
      { h: 'Which and that', p: "Which is for animals and things (our van, which is blue). That can be used for people, animals, or things (the cake that Mom baked). Do not use who for things: say “the pencil that broke,” not “the pencil who broke.”" }
    ],
    demo: {
      q: "Combine with a relative pronoun: “I met a girl. Her horse won a ribbon.”",
      steps: [
        "Step 1: Find the noun both sentences are about: a girl.",
        "Step 2: The second sentence tells that the horse belongs to her. Ownership needs whose.",
        "Step 3: Replace “Her” with “whose” and attach it right after “girl.”"
      ],
      a: "I met a girl whose horse won a ribbon."
    },
    items: [
      Q("Choose the pronoun to replace the repeated noun: “Mia lost Mia's shoe at the park.”", ['her', 'she', 'hers'], 0, "“Her” shows the shoe belongs to Mia: “Mia lost her shoe.” “She” is a subject pronoun, and “hers” stands alone (“The shoe is hers”).", 'Whose shoe?'),
      Q("Choose the correct pronoun: “___ and I went fishing.”", ['Him', 'He', 'Them'], 1, "This pronoun is part of the subject, so use a subject pronoun: He. Cover up “and I”: “He went fishing” sounds right, “Him went fishing” does not.", 'Cover up “and I.”'),
      Q("Choose the correct pronoun: “Grandpa gave the puzzle to Leo and ___.”", ['I', 'me', 'myself'], 1, "After “to,” use an object pronoun: me. Cover up “Leo and”: “Grandpa gave the puzzle to me.” You would never say “gave the puzzle to I.”", 'Cover up “Leo and.”'),
      Q("Choose the relative pronoun: “The girl ___ won the race is my cousin.”", ['which', 'who', 'whose'], 1, "The girl is a person doing the action (won), so use who. Which is for things and animals, and whose shows ownership.", 'A person doing something.'),
      Q("Choose the relative pronoun: “The book ___ I borrowed is overdue.”", ['who', 'that', 'whose'], 1, "A book is a thing, so use that (or which). Who is only for people.", 'Is a book a person?'),
      Q("Choose the relative pronoun: “That is the boy ___ dog chased our cat.”", ['who', 'whom', 'whose'], 2, "The dog belongs to the boy, so we need the ownership word whose. “Who dog” and “whom dog” do not show ownership.", 'Whose dog is it?'),
      Q("Choose the relative pronoun: “The lady to ___ I gave the flowers smiled.”", ['whom', 'who', 'which'], 0, "After the word “to,” the person is receiving something, so use whom. A trick: if you could answer with “him” or “her,” use whom. (I gave the flowers to her.)", 'him/her = whom, he/she = who'),
      Q("Choose the relative pronoun: “Our van, ___ is twenty years old, still runs.”", ['who', 'whose', 'which'], 2, "A van is a thing, so use which. Notice the commas: “which is twenty years old” is extra information about the van.", 'The van is a thing.'),
      T("Type the relative pronoun: “The man who fixed our roof was friendly.”", ['who'], "“Who fixed our roof” tells which man we mean. It starts with the relative pronoun who because the man is a person doing an action.", 'It starts the describing part.'),
      T("Type the relative pronoun: “I love the scarf that Grandma knitted.”", ['that'], "“That Grandma knitted” tells more about the scarf. It begins with the relative pronoun that.", 'Which word begins “___ Grandma knitted”?'),
      Q('Which sentence uses pronouns correctly?', ["Me and Ella baked bread.", "Ella and I baked bread.", "Ella and me baked bread.", "Ella and myself baked bread."], 1, "The subject needs a subject pronoun: I. Cover up “Ella and”: “I baked bread” sounds right. “Me baked bread” and “Myself baked bread” do not. It is also polite to name the other person first.", 'Try it with just the pronoun.'),
      Q("“The twins said they were hungry.” Who does “they” mean?", ['the speakers listening', 'the twins', 'nobody'], 1, "A pronoun refers back to a noun that came before it. Here “they” refers to the twins.", 'Look back at the nouns.'),
      Q("Choose the relative pronoun: “We fed the horse ___ lives next door.”", ['who', 'that', 'whose'], 1, "A horse is an animal, so use that (or which), not who. Whose would show ownership, and nothing is owned here.", 'Animals are not who.'),
      Q("Choose the correct word: “___ jacket is this?”", ["Who's", 'Whose', 'Whom'], 1, "Whose asks about ownership. “Who's” is short for “who is,” and “Who is jacket is this?” makes no sense.", "Read “who's” as “who is.”"),
      T("Type the pronoun that can replace “Sam”: “Give the ball to Sam.”", ['him'], "After “to,” use an object pronoun. Sam is a boy, so the pronoun is him: “Give the ball to him.”", 'Object pronoun for a boy.'),
      Q("Which word is the relative pronoun? “The puppy, which was very small, slept in a basket.”", ['puppy', 'which', 'small', 'basket'], 1, "“Which” begins the extra describing part about the puppy: “which was very small.”", 'It starts the describing part.'),
      Q("Choose the correct word: “That red bike is ___.”", ['mine', "mine's", 'my'], 0, "Mine is a pronoun that shows ownership and can stand alone. “Mine's” is not correct here, and “my” must come before a noun (my bike).", 'Which one can stand at the end?'),
      Q("Choose the correct word: “___ did you invite to your party?”", ["Who's", 'Whose', 'Whom'], 2, "You invited HIM or HER, so the answer is an object. That means whom: “Whom did you invite?” Who's means “who is.”", 'You invited him or her.'),
      Q('Which sentence uses “who” correctly?', ["The pencil who broke was mine.", "The pilot who flew the plane waved.", "The tree who fell was old.", "The rock who rolled was huge."], 1, "Who is used for people. A pilot is a person. For pencils, trees, and rocks, use that or which.", 'Who is for people.'),
      Q("Which choice correctly joins “I have a friend. She speaks Spanish.”?", ["I have a friend which speaks Spanish.", "I have a friend who speaks Spanish.", "I have a friend whose speaks Spanish.", "I have a friend whom speaks Spanish."], 1, "The friend is a person doing the action (speaks), so use who. Which is for things, whose shows ownership, and whom is for someone receiving the action.", 'A person doing something.')
    ]
  });

  // ---------------------------------------------------------------- Week 8
  C.unit('grammar', 8, {
    title: 'Relative adverbs: where, when, why',
    standard: 'ELAGSE4L1a',
    learn: [
      { h: 'What a relative adverb does', p: "A relative adverb starts a group of words that tells more about a noun. There are three: where (for a place), when (for a time), and why (for a reason). “This is the pond where we fish.” The words “where we fish” tell more about the pond." },
      { h: 'Match the word to the noun', p: "Use where after a place noun (house, park, town, room). Use when after a time noun (day, year, night, moment). Use why after the word reason. “Saturday is the day where we clean” is wrong. A day is a time, so it should be “the day when we clean.”" },
      { h: 'Joining sentences', p: "Relative adverbs help you join two short sentences. “We visited the farm. Grandpa grew up there.” becomes “We visited the farm where Grandpa grew up.” Your writing sounds smoother this way." }
    ],
    demo: {
      q: "Join: “I remember the night. The power went out.”",
      steps: [
        "Step 1: Find the noun the second sentence tells about: the night.",
        "Step 2: Night is a time, so choose the relative adverb when.",
        "Step 3: Join them: put “when” right after “night” and add the second sentence."
      ],
      a: "I remember the night when the power went out."
    },
    items: [
      Q("Choose the relative adverb: “This is the park ___ we had our picnic.”", ['when', 'where', 'why'], 1, "A park is a place, so use where. When is for times, and why is for reasons.", 'Is a park a place, a time, or a reason?'),
      Q("Choose the relative adverb: “I remember the day ___ my sister was born.”", ['where', 'why', 'when'], 2, "A day is a time, so use when. “The day where” is a common mistake.", 'A day is a time.'),
      Q("Choose the relative adverb: “Do you know the reason ___ the store closed early?”", ['why', 'where', 'when'], 0, "After the word reason, use why. It tells the cause.", 'Look at the noun right before the blank.'),
      T("Type the relative adverb: “Summer is the season when we swim the most.”", ['when'], "“When we swim the most” tells more about the season, which is a time. It starts with the relative adverb when.", 'Season is a time.'),
      T("Type the relative adverb: “That is the house where my dad grew up.”", ['where'], "“Where my dad grew up” tells more about the house, which is a place. It starts with where.", 'A house is a place.'),
      T("Type the relative adverb: “The reason why the dog barked is a mystery.”", ['why'], "“Why the dog barked” tells more about the reason, so it begins with why.", 'It comes right after reason.'),
      Q("What kind of noun does “where” usually describe?", ['a time', 'a place', 'a reason'], 1, "Where goes with place nouns like room, town, or field.", 'Where are you?'),
      Q("What kind of noun does “when” usually describe?", ['a time', 'a place', 'a reason'], 0, "When goes with time nouns like day, year, morning, or moment.", 'When did it happen?'),
      Q("What does “why” tell about in a relative adverb clause?", ['a place', 'a time', 'a reason'], 2, "Why goes with the noun reason. It explains the cause of something.", 'Why did it happen?'),
      Q('Which sentence uses a relative adverb correctly?', ["This is the kitchen when Mom bakes.", "This is the kitchen where Mom bakes.", "This is the kitchen why Mom bakes."], 1, "A kitchen is a place, so “where Mom bakes” is correct. The kitchen is not a time or a reason.", 'Kitchen = place.'),
      Q("Find the mistake: “Saturday is the day where we clean the house.”", ["“where” should be “when”", "“day” should be “place”", "“clean” should be “cleans”", "There is no mistake."], 0, "Saturday is a time, not a place, so the relative adverb should be when: “the day when we clean the house.”", 'Is Saturday a place?'),
      Q("Find the mistake: “The library is the place why I study best.”", ["“why” should be “where”", "“library” needs a capital", "“study” should be “studies”", "There is no mistake."], 0, "Place nouns go with where: “the place where I study best.” Why is only for reasons.", 'Match the noun.'),
      Q("Which choice correctly joins: “We visited the farm. Grandpa raised cows there.”?", ["We visited the farm when Grandpa raised cows.", "We visited the farm where Grandpa raised cows.", "We visited the farm why Grandpa raised cows.", "We visited where the farm Grandpa raised cows."], 1, "The farm is a place, so use where, placed right after farm. “When” would change the meaning to a time.", 'Farm = place.'),
      Q("Which choice correctly joins: “I love the early morning. The birds sing loudest then.”?", ["I love the early morning where the birds sing loudest.", "I love the early morning why the birds sing loudest.", "I love the early morning when the birds sing loudest.", "I love when the early morning the birds sing loudest."], 2, "Morning is a time, and “then” is a time word, so use when.", 'The word “then” is a clue.'),
      Q("Which choice correctly joins: “Tell me the reason. You are upset for that reason.”?", ["Tell me the reason why you are upset.", "Tell me the reason where you are upset.", "Tell me the reason when you are upset.", "Tell me why the reason you are upset."], 0, "Reason goes with why: “the reason why you are upset.” It is short and clear.", 'Reason + why.'),
      Q("In “Grandma lives in the town where she was born,” which noun does “where she was born” describe?", ['Grandma', 'town', 'she'], 1, "The clause comes right after town and tells which town, the one she was born in. Relative adverb clauses describe the noun right before them.", 'Look at the word just before “where.”'),
      Q("Which word is the relative adverb? “I miss the summer when we lived near the beach.”", ['summer', 'when', 'lived', 'near'], 1, "“When” starts the clause “when we lived near the beach,” which tells more about the summer. Near is a preposition.", 'It starts the describing group.'),
      T("Fill in the relative adverb: “That was the moment ___ I knew I could ride without training wheels.”", ['when'], "A moment is a time, so use when.", 'Moment is a time word.'),
      T("Fill in the relative adverb: “Can you show me the spot ___ you found the arrowhead?”", ['where'], "A spot is a place, so use where.", 'A spot is a place.'),
      Q("Choose the relative adverb: “The rain is the reason ___ the game was canceled.”", ['where', 'when', 'why'], 2, "After reason, use why. The rain explains the cause of the canceled game.", 'What noun is before the blank?')
    ]
  });

  // ---------------------------------------------------------------- Week 9
  C.unit('grammar', 9, {
    title: 'Subject-verb agreement',
    standard: 'ELAGSE4L1',
    learn: [
      { h: 'Subjects and verbs must match', p: "A singular subject (one) takes a singular verb, and a plural subject (more than one) takes a plural verb. In the present tense, singular verbs usually end in -s: “The bird sings.” Plural verbs usually do not: “The birds sing.” It is the opposite of nouns!" },
      { h: 'Tricky subjects', p: "Two subjects joined by and are plural: “Ava and Grace play.” Words like each, everyone, and nobody are singular: “Everyone is here.” Use is or was with one, and are or were with more than one. I and you are special: I am, you are." },
      { h: 'Ignore the in-between words', p: "Sometimes words come between the subject and the verb. Find the real subject. In “The box of crayons is on the shelf,” the subject is box (one), not crayons. Cover up the phrase “of crayons” to check: “The box is on the shelf.”" }
    ],
    demo: {
      q: "Choose: “The flowers in the pot (need / needs) water.”",
      steps: [
        "Step 1: Find the subject. What needs water? The flowers.",
        "Step 2: Ignore the in-between phrase “in the pot.” Pot is not the subject.",
        "Step 3: Flowers is plural, so use the plural verb without -s: need."
      ],
      a: "The flowers in the pot need water."
    },
    items: [
      Q("Choose the verb: “The dog ___ at the mail carrier.”", ['bark', 'barks', 'barking'], 1, "Dog is one (singular), so the verb takes -s: barks. Remember, singular verbs often end in s.", 'One dog.'),
      Q("Choose the verb: “The dogs ___ at the mail carrier.”", ['barks', 'bark', 'is barks'], 1, "Dogs is plural, so use the verb without -s: bark. The s moved to the noun.", 'More than one dog.'),
      Q("Choose the verb: “My brother and sister ___ in the choir.”", ['sings', 'sing', 'singing'], 1, "Two subjects joined by and make a plural subject, so use sing. “Singing” alone is not a complete verb here.", 'Two people.'),
      Q("Choose the verb: “Each of the girls ___ a lunchbox.”", ['have', 'has', 'having'], 1, "Each means every single one, so the subject is singular: has. Do not be fooled by “girls.”", 'Each = one at a time.'),
      Q("Choose the verb: “The box of crayons ___ on the shelf.”", ['are', 'is', 'were'], 1, "The subject is box, not crayons. Cover up “of crayons”: “The box is on the shelf.” One box takes is.", 'Cover up “of crayons.”'),
      Q("Choose the verb: “The flowers in the garden ___ blooming.”", ['is', 'are', 'was'], 1, "The subject is flowers, which is plural, so use are. “Garden” is in the in-between phrase, so it is not the subject.", 'What is blooming?'),
      Q('Which sentence is correct?', ["She don't like rain.", "She doesn't like rain.", "She do not likes rain.", "She don't likes rain."], 1, "Doesn't (does not) goes with he, she, and it. Don't (do not) goes with I, you, we, and they.", 'Use “does not” for she.'),
      T("Fill in is or are: “There ___ three apples on the table.”", ['are'], "In a sentence starting with There, the subject comes after the verb. The subject is apples, which is plural, so use are.", 'What is on the table?'),
      T("Fill in the correct form of “wash”: “Mom ___ the dishes every night.”", ['washes'], "Mom is one person, so the verb needs -es: washes. Verbs ending in sh add -es, just like nouns do.", 'Ends in sh.'),
      T("Fill in was or were: “Ava and Grace ___ at the park.”", ['were'], "Ava and Grace is two people, so the subject is plural. Plural subjects take were.", 'Two girls.'),
      Q("Find the mistake: “The puppies plays in the yard.”", ["“plays” should be “play”", "“puppies” should be “puppys”", "“yard” should be “yards”", "There is no mistake."], 0, "Puppies is plural, so the verb should not end in s: play. The plural spelling “puppies” is correct.", 'Plural subject, no s on the verb.'),
      Q("Choose the verb: “One of my friends ___ a pony.”", ['have', 'has', 'having'], 1, "The subject is One, not friends. One is singular, so use has.", 'How many own a pony?'),
      Q("Choose the verb: “You ___ my best friend.”", ['is', 'are', 'am'], 1, "The pronoun you always takes are, even when it means just one person.", 'You is special.'),
      Q("Choose the verb: “Our team ___ on the field now.”", ['is', 'are', 'were'], 0, "A team is one group, so it takes the singular verb is. The same goes for words like class, family, and flock.", 'One team.'),
      T("Fill in the correct form of “go”: “He ___ to bed at eight o'clock.”", ['goes'], "He is singular, so the verb needs an ending. Go becomes goes.", 'Add -es.'),
      Q('Which sentence has correct subject-verb agreement?', ["The cookies smells good.", "The cookie smell good.", "The cookies smell good.", "The cookie smelling good."], 2, "Cookies is plural, so use smell (no s). With one cookie it would be “The cookie smells good.”", 'Match one with one, many with many.'),
      Q("Choose the verb: “Here ___ your library books.”", ['is', 'are', 'was'], 1, "The subject comes after the verb here. Books is plural, so use are.", 'What is here?'),
      Q("Choose the verb: “Nobody ___ the answer to the riddle.”", ['know', 'knows', 'knowing'], 1, "Nobody means not one person, so it is singular: knows. Everyone, somebody, and nobody all take singular verbs.", 'Nobody = not one body.'),
      T("Fill in the correct form of “buzz”: “The bees ___ around the hive.”", ['buzz'], "Bees is plural, so the verb has no ending: buzz. One bee buzzes.", 'More than one bee.'),
      Q("Choose the verb: “Neither my mom nor my aunt ___ spiders.”", ['like', 'likes', 'liking'], 1, "With neither...nor, look at the subject closest to the verb. Aunt is singular, so use likes.", 'Look at the closest subject.')
    ]
  });

  // ---------------------------------------------------------------- Week 10
  C.unit('grammar', 10, {
    title: 'Verb tenses and irregular verbs',
    standard: 'ELAGSE4L1',
    learn: [
      { h: 'Past, present, future', p: "Tense tells WHEN an action happens. Present: “I walk.” Past: “I walked.” Future: “I will walk.” Most verbs make the past by adding -ed. Future tense uses will before the verb." },
      { h: 'Irregular verbs', p: "Irregular verbs do not add -ed in the past. They change in their own way: go to went, see to saw, bring to brought, swim to swam, eat to ate, run to ran, take to took, write to wrote, think to thought, catch to caught. Never say “goed” or “bringed.”" },
      { h: 'Keep tenses steady', p: "In a story, stay in the same tense unless the time really changes. “Yesterday I go to the store and bought milk” mixes present and past. Fix: “Yesterday I went to the store and bought milk.” Time words like yesterday, now, and tomorrow are clues." }
    ],
    demo: {
      q: "Fix: “Last week we swimmed in the lake and catched a turtle.”",
      steps: [
        "Step 1: “Last week” tells us we need past tense.",
        "Step 2: Swim is irregular. Its past is swam, not swimmed.",
        "Step 3: Catch is irregular too. Its past is caught, not catched.",
        "Step 4: Rewrite with the correct forms."
      ],
      a: "Last week we swam in the lake and caught a turtle."
    },
    items: [
      T("Type the past tense of “go.”", ['went'], "Go is irregular. Its past tense is went, not goed: “Yesterday we went to the zoo.”", 'It does not use -ed.'),
      T("Type the past tense of “see.”", ['saw'], "See is irregular. The past tense is saw: “I saw a deer.” (Seen needs a helper: “I have seen.”)", 'Not “seed.”'),
      T("Type the past tense of “bring.”", ['brought'], "Bring is irregular: today I bring, yesterday I brought. “Bringed” is not a word.", 'It rhymes with thought.'),
      T("Type the past tense of “swim.”", ['swam'], "Swim is irregular. The i changes to a: swim becomes swam.", 'Change one vowel.'),
      T("Type the past tense of “catch.”", ['caught'], "Catch is irregular. Its past tense is caught: “She caught the ball.”", 'Rhymes with taught.'),
      T("Type the past tense of “write.”", ['wrote'], "Write is irregular. The i changes to o: write becomes wrote.", 'Change the vowel.'),
      Q("What tense is this sentence? “The choir will sing on Sunday.”", ['past', 'present', 'future'], 2, "The helping verb will shows something that has not happened yet, so this is future tense.", 'Look for will.'),
      Q("What tense is this sentence? “Dad drove us to the library.”", ['past', 'present', 'future'], 0, "Drove is the past tense of drive. It already happened.", 'Did it already happen?'),
      Q("What tense is this sentence? “My cat sleeps in the sun.”", ['past', 'present', 'future'], 1, "Sleeps is present tense. It tells what happens now or usually happens.", 'Is it happening now?'),
      Q('Which sentence is correct?', ["Yesterday we eated pancakes.", "Yesterday we ate pancakes.", "Yesterday we eat pancakes.", "Yesterday we will eat pancakes."], 1, "Yesterday means past tense, and eat is irregular: its past is ate. “Eated” is not a word.", 'Yesterday = past.'),
      Q("Find the mistake: “Last night I think about my dream and wrote it down.”", ["“think” should be “thought”", "“wrote” should be “write”", "“dream” should be “dreamed”", "There is no mistake."], 0, "“Last night” and “wrote” are both past, so think must be past too: thought. Keep tenses steady.", 'Keep the whole sentence in the past.'),
      Q("Choose the future tense: “Tomorrow Grandma ___ us a story.”", ['told', 'tells', 'will tell'], 2, "Tomorrow is a future time, so use will + tell.", 'Tomorrow is not here yet.'),
      Q('Which is the correct past tense of “run”?', ['runned', 'ran', 'runs', 'run'], 1, "Run is irregular. Today I run; yesterday I ran.", 'It does not add -ed.'),
      T("Type the past tense of “take.”", ['took'], "Take is irregular: take becomes took. “Taked” is not a word.", 'Rhymes with book.'),
      T("Type the past tense of “buy.”", ['bought'], "Buy is irregular: buy becomes bought. It is spelled with -ought, like brought and thought.", 'Ends in -ought.'),
      Q("Which verb fits? “Last summer we ___ a sand castle.”", ['build', 'built', 'builded'], 1, "Last summer is past tense. Build is irregular: its past is built, not builded.", 'Last summer = past.'),
      Q('Which sentence keeps the tense steady?', ["She opens the door and saw a puppy.", "She opened the door and sees a puppy.", "She opened the door and saw a puppy.", "She will open the door and saw a puppy."], 2, "Both verbs are past: opened and saw. The other choices mix present, past, and future.", 'Both verbs should match.'),
      Q("Which verb fits? “Every morning, Ava ___ her Bible verse.”", ['reads', 'will reads', 'readed'], 0, "Every morning is a habit, so use present tense: reads. “Readed” is not a word, and “will reads” is incorrect.", 'Something she does again and again.'),
      T("Type the past tense of “sing.”", ['sang'], "Sing is irregular. The i changes to a: sing becomes sang. (Sung needs a helper: “have sung.”)", 'Just like swim and swam.'),
      Q("Change to future tense: “We planted tulips.”", ["We plant tulips.", "We will plant tulips.", "We will planted tulips.", "We planting tulips."], 1, "Future tense is will + the base verb: will plant. Do not add -ed after will.", 'will + base verb')
    ]
  });

  // ---------------------------------------------------------------- Week 11
  C.unit('grammar', 11, {
    title: 'Order of adjectives',
    standard: 'ELAGSE4L1d',
    learn: [
      { h: 'Adjectives line up in order', p: "When you use more than one adjective, English speakers put them in a usual order: opinion, size, age, shape, color, origin (where it is from), material (what it is made of), purpose (what it is for). Then comes the noun. “A pretty little red bird” sounds right. “A red little pretty bird” sounds strange." },
      { h: 'A memory trick', p: "Try the silly sentence “Oh, Sam And Sally Can Often Make Pies” for Opinion, Size, Age, Shape, Color, Origin, Material, Purpose. You will rarely use more than two or three adjectives at once, but they still follow this order." },
      { h: 'Examples', p: "a delicious big pizza (opinion, size); an old brown dog (age, color); a round wooden table (shape, material); a tiny Mexican clay pot (size, origin, material); a red sleeping bag (color, purpose). Notice that purpose words like sleeping, running, or baking sit right next to the noun." }
    ],
    demo: {
      q: "Put in order: cotton, blue, soft (describing a blanket).",
      steps: [
        "Step 1: Sort each word. Soft is an opinion (how it feels to you). Blue is a color. Cotton is a material.",
        "Step 2: The order is opinion, then color, then material.",
        "Step 3: Write them in that order before the noun."
      ],
      a: "a soft blue cotton blanket"
    },
    items: [
      Q('Which phrase has the adjectives in the correct order?', ['a red big balloon', 'a big red balloon', 'a balloon big red'], 1, "Size (big) comes before color (red). “A big red balloon” follows the order.", 'Size before color.'),
      Q('Which phrase has the adjectives in the correct order?', ['an old beautiful house', 'a house beautiful old', 'a beautiful old house'], 2, "Opinion (beautiful) comes before age (old).", 'Opinion goes first.'),
      Q('Which phrase has the adjectives in the correct order?', ['a wooden round table', 'a round wooden table', 'a table round wooden'], 1, "Shape (round) comes before material (wooden).", 'Shape, then material.'),
      Q('Which phrase has the adjectives in the correct order?', ['a little gray kitten', 'a gray little kitten', 'a kitten gray little'], 0, "Size (little) comes before color (gray).", 'Size before color.'),
      Q("What KIND of adjective is “silver” in “a silver necklace”?", ['size', 'color or material', 'purpose', 'age'], 1, "Silver can name the color or what the necklace is made of (material). Either way, it comes near the end, close to the noun.", 'Is it about how big or what it is like?'),
      Q("What kind of adjective is “young” in “a young horse”?", ['age', 'shape', 'origin'], 0, "Young tells how old the horse is, so it is an age adjective. Age adjectives come after size: a big young horse.", 'How old?'),
      Q("What kind of adjective is “Italian” in “Italian bread”?", ['material', 'origin', 'opinion'], 1, "Italian tells where the bread style comes from, so it is an origin adjective. Origin comes after color and before material.", 'Where is it from?'),
      Q("What kind of adjective is “fishing” in “a fishing pole”?", ['color', 'purpose', 'size'], 1, "Fishing tells what the pole is used for, so it is a purpose word. Purpose goes last, right before the noun.", 'What is it for?'),
      Q('Which phrase has the adjectives in the correct order?', ['a plastic small green cup', 'a small green plastic cup', 'a green plastic small cup', 'a small plastic green cup'], 1, "Size (small), then color (green), then material (plastic): a small green plastic cup.", 'Size, color, material.'),
      Q('Which phrase has the adjectives in the correct order?', ['a lovely new pink dress', 'a pink lovely new dress', 'a new pink lovely dress', 'a new lovely pink dress'], 0, "Opinion (lovely), then age (new), then color (pink).", 'Opinion, age, color.'),
      Q('Which phrase has the adjectives in the correct order?', ['a leather brown old saddle', 'a brown old leather saddle', 'an old brown leather saddle', 'an old leather brown saddle'], 2, "Age (old), then color (brown), then material (leather).", 'Age, color, material.'),
      Q("Which adjective should come FIRST in a list with these words? (huge, wonderful, square)", ['huge', 'wonderful', 'square'], 1, "Opinion comes first. Wonderful is an opinion. Then size (huge), then shape (square): a wonderful huge square cake.", 'O comes first in the order.'),
      Q("Which adjective should come LAST, right before the noun? (running, new, white) ___ shoes", ['new', 'white', 'running'], 2, "Running tells the purpose of the shoes, and purpose goes last: new white running shoes.", 'What are the shoes for?'),
      Q("Fill in the blank with the best order: “Grandma hung a ___ painting.”", ['beautiful large', 'large beautiful', 'painting beautiful'], 0, "Opinion comes before size: beautiful (opinion) large (size) painting.", 'Opinion, then size.'),
      Q('Which sentence uses the correct order?', ["We saw a black huge bear.", "We saw a huge black bear.", "We saw a bear black huge.", "We saw a huge bear black."], 1, "Size (huge) before color (black). Adjectives usually go before the noun.", 'Size before color.'),
      Q('Which phrase has the adjectives in the correct order?', ['a Japanese tiny teacup', 'a tiny Japanese teacup', 'a teacup tiny Japanese'], 1, "Size (tiny) comes before origin (Japanese).", 'Size before origin.'),
      Q('Which phrase has the adjectives in the correct order?', ['a cozy little cabin', 'a little cozy cabin', 'a cabin cozy little'], 0, "Opinion (cozy) comes before size (little).", 'Opinion first.'),
      Q("Put the adjectives in order: (oval, glass, small) ___ mirror", ['small oval glass', 'glass small oval', 'oval glass small', 'small glass oval'], 0, "Size (small), shape (oval), material (glass): a small oval glass mirror.", 'Size, shape, material.'),
      T("Type the word that belongs in the blank: “a soft red ___ scarf” (choose from: wool, warm)", ['wool'], "The blank comes right after a color word and right before the noun, which is the material spot. Wool is a material. Warm is an opinion word, and opinion words go first, before color: a warm red wool scarf.", 'Which word tells what it is made of?'),
      Q('Which phrase sounds correct?', ['a metal old rusty bucket', 'a rusty old metal bucket', 'an old metal rusty bucket'], 1, "Rusty describes how it looks (an opinion word), old is age, and metal is material. Opinion, age, material: a rusty old metal bucket.", 'Material sits close to the noun.')
    ]
  });

  // ---------------------------------------------------------------- Week 12
  C.unit('grammar', 12, {
    title: 'Coordinating conjunctions and compound sentences',
    standard: 'ELAGSE4L2c',
    learn: [
      { h: 'FANBOYS', p: "Coordinating conjunctions join words, phrases, or whole sentences. There are seven, and FANBOYS helps you remember them: For, And, Nor, But, Or, Yet, So. And adds; but and yet show a contrast; or gives a choice; so shows a result; for means because; nor means “and not.”" },
      { h: 'Compound sentences', p: "A compound sentence joins two complete sentences with a comma and a FANBOYS word. “The rain stopped, and the sun came out.” Put the comma BEFORE the conjunction. Both sides must be complete sentences that could stand alone." },
      { h: 'When not to use a comma', p: "If the conjunction only joins two words or a list (bread and butter, ran and jumped), you do not need a comma. Check: is there a subject AND a verb on both sides? If yes, use the comma. If no, skip it." }
    ],
    demo: {
      q: "Join with a comma and a FANBOYS word: “I studied hard. I passed the test.”",
      steps: [
        "Step 1: Both are complete sentences, so this will be a compound sentence.",
        "Step 2: The second part is a result of the first. The conjunction for a result is so.",
        "Step 3: Put a comma after the first sentence, then the word so, then the second sentence."
      ],
      a: "I studied hard, so I passed the test."
    },
    items: [
      Q('Which word is a coordinating conjunction?', ['because', 'but', 'when', 'very'], 1, "But is one of the FANBOYS: for, and, nor, but, or, yet, so. Because and when are subordinating conjunctions, a different kind.", 'Think FANBOYS.'),
      Q("Which conjunction shows a CHOICE? “Do you want apples ___ grapes?”", ['or', 'so', 'yet'], 0, "Or offers a choice between two things.", 'Pick one or the other.'),
      Q("Which conjunction shows a RESULT? “It was dark outside, ___ we turned on the porch light.”", ['but', 'or', 'so'], 2, "So shows that the second part happened because of the first. The dark caused the light to be turned on.", 'What happened because it was dark?'),
      Q("Which conjunction shows a CONTRAST? “The puppy is small, ___ it is very strong.”", ['and', 'but', 'or'], 1, "But shows that the second part is surprising compared to the first. Small puppies are not usually strong.", 'Something unexpected.'),
      Q('Which compound sentence is punctuated correctly?', ["We went to the beach and, we built a sand castle.", "We went to the beach, and we built a sand castle.", "We went to the beach and we, built a sand castle.", "We went, to the beach and we built a sand castle."], 1, "In a compound sentence the comma goes right BEFORE the conjunction: “beach, and we built.”", 'Comma before the FANBOYS word.'),
      Q('Which sentence needs a comma before “and”?', ["I like peas and carrots.", "Mia ran and jumped.", "Mia ran to the gate and her brother followed her.", "We need milk and eggs."], 2, "Only “Mia ran to the gate and her brother followed her” has a complete sentence on both sides of “and.” The others join just words, so no comma.", 'Look for a subject and verb on both sides.'),
      T("Type the coordinating conjunction: “I wanted to swim, but the pool was closed.”", ['but'], "But is the FANBOYS word that joins the two sentences. It shows a contrast.", 'Find the FANBOYS word.'),
      T("Type the missing FANBOYS word that means “because”: “She wore a coat, ___ it was freezing outside.”", ['for'], "For can mean “because.” It is the F in FANBOYS. It sounds a little old-fashioned, but it is correct.", 'The first letter of FANBOYS.'),
      Q("Which choice correctly joins: “The bell rang. The students went inside.”?", ["The bell rang the students went inside.", "The bell rang, the students went inside.", "The bell rang, so the students went inside.", "The bell rang so, the students went inside."], 2, "Use a comma AND a conjunction. A comma alone makes a run-on, and the comma goes before so, not after.", 'Comma + FANBOYS.'),
      Q('Is this a compound sentence? “Ella baked muffins, and Leo washed the dishes.”', ['Yes', 'No', 'Only if it has two commas'], 0, "Yes. “Ella baked muffins” and “Leo washed the dishes” are both complete sentences joined by a comma and “and.”", 'Can both sides stand alone?'),
      Q('Is this a compound sentence? “Ella baked muffins and cookies.”', ['Yes', 'No', 'Only if you add a comma'], 1, "No. “And” only joins two nouns (muffins and cookies). There is only one subject and one verb, so it is a simple sentence. Do not add a comma.", 'Is there a second subject and verb?'),
      Q("Which conjunction fits best? “Grandpa is ninety years old, ___ he still walks two miles a day.”", ['so', 'or', 'yet'], 2, "Yet works like but. It shows something surprising: he is old, but he still walks far.", 'It means “but still.”'),
      Q("Which conjunction fits best? “We can play a board game, ___ we can read a book together.”", ['or', 'for', 'nor'], 0, "Or gives a choice between two activities.", 'One choice or another.'),
      Q("Where does the comma go? “The baby smiled and everyone laughed.”", ['after “baby”', 'after “smiled”', 'after “and”', 'after “everyone”'], 1, "Both sides are sentences (The baby smiled / everyone laughed). Put the comma before “and,” which is right after “smiled.”", 'Before the conjunction.'),
      Q("Which conjunction means “and not”? “She did not eat the beans, ___ did she eat the squash.”", ['nor', 'for', 'yet'], 0, "Nor adds a second “not.” She did not eat the beans, and she did not eat the squash either.", 'The N in FANBOYS.'),
      T("How many coordinating conjunctions are in FANBOYS? Type a number.", ['7', 'seven'], "There are seven: for, and, nor, but, or, yet, so. Each letter of FANBOYS stands for one.", 'Count the letters.'),
      Q('Which sentence is a run-on that needs a comma and a conjunction?', ["The wind blew, and the leaves fell.", "The wind blew the leaves fell.", "The wind blew hard.", "The leaves fell."], 1, "“The wind blew the leaves fell” has two sentences with nothing between them. Fix: “The wind blew, and the leaves fell.”", 'Two sentences with nothing in between.'),
      Q("Which conjunction fits best? “The store was out of bread, ___ we bought crackers instead.”", ['so', 'or', 'nor'], 0, "So shows the result. Because there was no bread, they bought crackers.", 'What happened as a result?'),
      Q('Which compound sentence makes the most sense?', ["I was tired, so I went to bed early.", "I was tired, but I went to bed early.", "I was tired, or I went to bed early."], 0, "So shows a result: being tired led to going to bed. But would suggest a surprise, which does not fit here. Or offers a choice, which does not fit either.", 'Does the second part happen because of the first?'),
      Q('Which sentence uses the comma correctly?', ["My sister plays piano, and I play violin.", "My sister plays piano and, I play violin.", "My sister, plays piano and I play violin.", "My sister plays, piano and I play violin."], 0, "The comma belongs right before the conjunction “and,” because both sides are complete sentences.", 'Comma comes before and.')
    ]
  });

  // ---------------------------------------------------------------- Week 13
  C.unit('grammar', 13, {
    title: 'Complex sentences and subordinating conjunctions',
    standard: 'ELAGSE4L1f',
    learn: [
      { h: 'Two kinds of clauses', p: "A clause is a group of words with a subject and a verb. An independent clause can stand alone as a sentence: “We stayed inside.” A dependent clause cannot stand alone because it starts with a word that makes you wait: “because it was raining.”" },
      { h: 'Subordinating conjunctions', p: "Words like because, although, when, if, since, after, before, until, and while begin dependent clauses. Because and since tell why. Although shows a surprise. When, after, before, and until tell time. If tells a condition (what has to happen first)." },
      { h: 'Building a complex sentence', p: "A complex sentence has one independent clause and at least one dependent clause. If the dependent clause comes FIRST, put a comma after it: “When the bell rang, we lined up.” If it comes second, you usually need no comma: “We lined up when the bell rang.”" }
    ],
    demo: {
      q: "Join with “although”: “The hike was long. We enjoyed every minute.”",
      steps: [
        "Step 1: Although shows a surprise. A long hike might be tiring, but we enjoyed it.",
        "Step 2: Put although in front of the first idea: “Although the hike was long.” That is now a dependent clause.",
        "Step 3: The dependent clause comes first, so add a comma before the independent clause."
      ],
      a: "Although the hike was long, we enjoyed every minute."
    },
    items: [
      Q('Which word is a subordinating conjunction?', ['and', 'because', 'but', 'or'], 1, "Because begins a dependent clause that tells why. And, but, and or are coordinating conjunctions (FANBOYS).", 'Not one of the FANBOYS.'),
      Q('Which group of words is a dependent clause?', ['the dog wagged its tail', 'if it rains tomorrow', 'we ate supper', 'Mom laughed'], 1, "“If it rains tomorrow” has a subject and verb, but it cannot stand alone. It makes you ask, “Then what?”", 'Which one leaves you waiting?'),
      Q('Which is a complex sentence?', ["The dog barked.", "The dog barked, and the cat ran.", "The dog barked because a squirrel ran by.", "The dog and the cat."], 2, "It has an independent clause (The dog barked) and a dependent clause (because a squirrel ran by). “The dog barked, and the cat ran” is compound, not complex, because it uses “and.”", 'Look for a word like because or when.'),
      Q("Choose the best conjunction: “___ I finish my chores, I can play outside.”", ['After', 'Although', 'Because'], 0, "After shows time order: first chores, then play. Although would mean the two ideas do not match, which is not the case here.", 'Which happens first?'),
      Q("Choose the best conjunction: “We brought umbrellas ___ the sky was gray.”", ['although', 'because', 'until'], 1, "Because tells the reason: the gray sky is why we brought umbrellas.", 'Why did we bring them?'),
      Q("Choose the best conjunction: “___ the movie was sad, I loved it.”", ['Although', 'Because', 'If'], 0, "Although shows a surprise or contrast. You might expect a sad movie to be disliked, but she loved it.", 'Two ideas that do not match.'),
      Q("Choose the best conjunction: “___ you mix blue and yellow paint, you get green.”", ['Until', 'If', 'Although'], 1, "If tells a condition: when this happens, that is the result. Mixing blue and yellow paint does make green.", 'What has to happen first?'),
      Q('Which sentence is punctuated correctly?', ["When the sun set we went inside.", "When the sun set, we went inside.", "When, the sun set we went inside.", "When the sun, set we went inside."], 1, "The dependent clause “When the sun set” comes first, so put a comma right after it.", 'Comma after the opening clause.'),
      Q('Which sentence is punctuated correctly?', ["We went inside, when the sun set.", "We went inside when the sun set.", "We went, inside when the sun set.", "We, went inside when the sun set."], 1, "When the dependent clause comes at the END, you usually do not need a comma.", 'Is the dependent clause first or last?'),
      T("Type the subordinating conjunction: “Since it was Grandma's birthday, we baked a cake.”", ['since'], "Since begins the dependent clause and tells why we baked a cake. Here it means “because.”", 'It is the first word.'),
      T("Type the subordinating conjunction: “I will wait here until you come back.”", ['until'], "Until begins the dependent clause “until you come back” and tells how long the waiting lasts.", 'It tells how long.'),
      Q("Which part is the INDEPENDENT clause? “Although it was cold, the children played outside.”", ['Although it was cold', 'the children played outside', 'Although'], 1, "“The children played outside” can stand alone as a sentence. “Although it was cold” cannot.", 'Which part could be its own sentence?'),
      Q("Which part is the DEPENDENT clause? “Dad smiled when he saw my drawing.”", ['Dad smiled', 'when he saw my drawing', 'my drawing'], 1, "“When he saw my drawing” starts with the subordinating conjunction when and cannot stand alone.", 'Find the clause that starts with a conjunction.'),
      Q("Which choice correctly joins: “I was hungry. I ate an apple.”?", ["Because I was hungry I ate an apple.", "Because I was hungry, I ate an apple.", "Because, I was hungry I ate an apple.", "I was hungry because, I ate an apple."], 1, "Because tells the reason, and since the dependent clause comes first, a comma follows it. Putting “because” in the middle the wrong way changes the meaning.", 'Reason first, then a comma.'),
      Q("“Because the road was icy.” Why is this NOT a complete sentence?", ['It has no verb.', 'It is a dependent clause that needs an independent clause.', 'It is too short.'], 1, "It has a subject (road) and verb (was), but “because” makes it depend on another idea. Fix: “Because the road was icy, school was canceled.”", 'What happened because of it?'),
      Q("Choose the best conjunction: “Please brush your teeth ___ you go to bed.”", ['before', 'although', 'because'], 0, "Before shows time order: brush first, then bed.", 'Which comes first?'),
      Q("Choose the best conjunction: “Ava hummed ___ she washed the dishes.”", ['while', 'unless', 'although'], 0, "While means at the same time. She hummed and washed at once.", 'Both at the same time.'),
      Q('Is this sentence compound or complex? “We planted seeds, and the rain watered them.”', ['compound', 'complex', 'neither'], 0, "It is compound: two independent clauses joined by a comma and the FANBOYS word “and.” A complex sentence uses a word like because, when, or if.", 'Which kind of joining word is used?'),
      Q('Is this sentence compound or complex? “If we hurry, we can catch the bus.”', ['compound', 'complex', 'neither'], 1, "It is complex. “If we hurry” is a dependent clause, and “we can catch the bus” is independent.", 'Look at the first word.'),
      T("Fill in a conjunction that shows a surprise: “___ the test was hard, I finished it on time.” (starts with A)", ['Although'], "Although shows that the second idea is surprising compared to the first. A hard test might take longer, but she still finished on time.", 'It starts with A.')
    ]
  });

  // ---------------------------------------------------------------- Week 14
  C.unit('grammar', 14, {
    title: 'Commas: series, dates, addresses, introductory words',
    standard: 'ELAGSE4L2',
    learn: [
      { h: 'Items in a series', p: "When you list three or more things, put commas between them: “We packed sandwiches, apples, and water.” The comma before “and” is used by many writers and helps keep things clear. Do not put a comma after the last item." },
      { h: 'Dates and addresses', p: "Put a comma between the day and the year: “October 7, 2026.” Put a comma between a city and a state: “Macon, Georgia.” If the date or place keeps going in the sentence, add a comma after it too: “On May 2, 2026, we moved.”" },
      { h: 'Introductory words', p: "Put a comma after a word or short phrase that starts a sentence before the main idea: “Yes, I can help.” “Well, that was funny.” “First, wash your hands.” “After lunch, we read.” The comma tells the reader to pause." }
    ],
    demo: {
      q: "Add commas: “On June 5 2026 we drove to Savannah Georgia to see turtles dolphins and pelicans.”",
      steps: [
        "Step 1: Date: comma between day and year, and after the year because the sentence continues: June 5, 2026, we...",
        "Step 2: Place: comma between city and state: Savannah, Georgia.",
        "Step 3: Series: commas between the three animals: turtles, dolphins, and pelicans."
      ],
      a: "On June 5, 2026, we drove to Savannah, Georgia, to see turtles, dolphins, and pelicans."
    },
    items: [
      Q('Which sentence uses commas in a series correctly?', ["I like red blue, and green.", "I like red, blue, and green.", "I like, red, blue, and green.", "I like red, blue, and, green."], 1, "Put commas between the items in the list: red, blue, and green. Do not put a comma right after “like” or after “and.”", 'Commas go between the items.'),
      Q('Which date is written correctly?', ['July 4 1776', 'July, 4 1776', 'July 4, 1776', 'July 4 1776,'], 2, "Put a comma between the day and the year: July 4, 1776. That is the day the Declaration of Independence was approved.", 'Comma between day and year.'),
      Q('Which place is written correctly?', ['Atlanta Georgia', 'Atlanta, Georgia', 'Atlanta Georgia,', ', Atlanta Georgia'], 1, "Put a comma between a city and its state: Atlanta, Georgia.", 'Comma between city and state.'),
      Q('Which sentence uses a comma correctly after an introductory word?', ["Yes I would like more soup.", "Yes, I would like more soup.", "Yes I, would like more soup.", "Yes I would, like more soup."], 1, "Yes is an introductory word, so put a comma right after it.", 'Pause after the first word.'),
      Q('Which sentence needs a comma?', ["We ate lunch.", "First wash the carrots.", "The carrots are orange.", "Mom peeled the carrots."], 1, "“First” is an introductory word, so it needs a comma: “First, wash the carrots.”", 'Which one starts with a signal word?'),
      Q('Where should the comma go? “After the storm we picked up branches.”', ['after “After”', 'after “storm”', 'after “picked”', 'after “up”'], 1, "“After the storm” is an introductory phrase. Put the comma after it: “After the storm, we picked up branches.”", 'Where does the opening phrase end?'),
      Q('Which sentence is correct?', ["We need eggs, milk, and flour.", "We need eggs milk and flour.", "We need, eggs, milk, and flour.", "We need eggs, milk, and flour,."], 0, "Commas separate the three items. No comma goes after “need,” and none at the very end.", 'Only between the items.'),
      Q('Which sentence is punctuated correctly?', ["On March 3, 2025 we planted a tree.", "On March 3 2025, we planted a tree.", "On March 3, 2025, we planted a tree.", "On March, 3, 2025, we planted a tree."], 2, "Put a comma between the day and year, and another after the year because the sentence keeps going.", 'Two commas around the year.'),
      T("How many commas does this need? Type a number. “We saw cows pigs goats and sheep.”", ['3', 'three'], "There are four items: cows, pigs, goats, and sheep. Put a comma after cows, after pigs, and after goats. That is 3 commas.", 'Count the items, then the spaces between them.'),
      Q('Which sentence uses commas correctly?', ["Well, that was a surprise!", "Well that, was a surprise!", "Well that was, a surprise!", "Well that was a surprise,!"], 0, "Well is an introductory word, so the comma comes right after it.", 'Pause after the first word.'),
      Q('Which is correct?', ["My cousin lives in Dallas Texas.", "My cousin lives in Dallas, Texas.", "My cousin lives in, Dallas Texas.", "My cousin, lives in Dallas Texas."], 1, "City and state are separated by a comma: Dallas, Texas.", 'City, State'),
      Q('Which sentence does NOT need any commas?', ["No I am not tired.", "We bought apples and pears.", "On Friday June 6 we swam.", "Next turn left."], 1, "“Apples and pears” is only two items, so no comma is needed. A series needs three or more items for commas.", 'Two items do not need a comma.'),
      Q('Which is the best way to write this list? “I packed a toothbrush a towel and a book.”', ["I packed a toothbrush, a towel, and a book.", "I packed a toothbrush a towel, and a book.", "I packed, a toothbrush a towel and a book.", "I packed a toothbrush, a towel and, a book."], 0, "Each item (a toothbrush, a towel, a book) is separated by a comma.", 'Find the three items.'),
      Q('Where does the comma go? “Oh I forgot my jacket!”', ['after “Oh”', 'after “forgot”', 'after “my”', 'no comma needed'], 0, "Oh is an introductory word that shows feeling, so it gets a comma: “Oh, I forgot my jacket!”", 'After the first word.'),
      Q('Which date is written correctly?', ['Saturday, November 8, 2025', 'Saturday November 8 2025', 'Saturday, November, 8 2025', 'Saturday November, 8, 2025'], 0, "Put a comma after the day of the week and between the date and year: Saturday, November 8, 2025.", 'Day of the week, date, year.'),
      T("Type the word that should have a comma after it: “Finally we reached the top of the hill.”", ['Finally', 'finally'], "Finally is an introductory word that tells time order. It needs a comma: “Finally, we reached the top.”", 'It is the first word.'),
      Q('Which sentence is correct?', ["Ava, Grace, and Leo sang a song.", "Ava Grace, and Leo sang a song.", "Ava, Grace and, Leo sang a song.", "Ava Grace and Leo, sang a song."], 0, "The three names are a series, so commas go between them. No comma goes between the subject and the verb (Leo sang).", 'Do not split the subject from the verb.'),
      Q('Which one is written correctly?', ["We moved to Columbus, Georgia, in 2024.", "We moved to Columbus Georgia in 2024.", "We moved to Columbus, Georgia in, 2024.", "We moved, to Columbus Georgia, in 2024."], 0, "Put a comma between the city and state, and another after the state when the sentence keeps going.", 'Commas around the state.'),
      Q('Which sentence needs a comma after the first word?', ["Sadly the game was canceled.", "Sam lost his hat.", "Dogs bark.", "Birds fly south."], 0, "Sadly is an introductory word that comes before the main idea. Write it as “Sadly, the game was canceled.”", 'Look for a word that sets up the sentence.'),
      Q('Which list is punctuated correctly?', ["We hiked, swam, and fished.", "We hiked swam and fished.", "We, hiked, swam, and fished.", "We hiked, swam and, fished."], 0, "The three actions (hiked, swam, fished) are a series, so separate them with commas. No comma between “We” and “hiked.”", 'Commas between the actions only.')
    ]
  });

  // ---------------------------------------------------------------- Week 15
  C.unit('grammar', 15, {
    title: 'Quotation marks and punctuating dialogue',
    standard: 'ELAGSE4L2b',
    learn: [
      { h: 'Quotation marks hold the exact words', p: "Quotation marks “ ” go around the exact words someone says. The speaker tag (Mom said, Leo asked) stays outside the marks. Example: Mom said, “Time for supper.” Begin the quote with a capital letter." },
      { h: 'Commas and end marks go inside', p: "When the tag comes first, put a comma after the tag: Ava said, “I am ready.” When the quote comes first, use a comma inside the closing mark instead of a period: “I am ready,” Ava said. Question marks and exclamation points also go inside: “Can I help?” asked Leo." },
      { h: 'New speaker, new paragraph', p: "Each time a different person speaks, start a new paragraph (indent). This helps the reader keep track of who is talking." }
    ],
    demo: {
      q: "Punctuate: Grandpa asked do you want to go fishing",
      steps: [
        "Step 1: Find the exact words he said: do you want to go fishing.",
        "Step 2: The tag comes first, so put a comma after asked.",
        "Step 3: Put quotation marks around his words and capitalize the first word: “Do...",
        "Step 4: It is a question, so put the question mark inside the closing quotation mark."
      ],
      a: "Grandpa asked, “Do you want to go fishing?”"
    },
    items: [
      Q('Which sentence is punctuated correctly?', ["Mom said, “Please set the table.”", "Mom said “Please set the table.”", "Mom said, “please set the table”.", "“Mom said, Please set the table.”"], 0, "There is a comma after the tag (Mom said), the quote starts with a capital letter, and the period goes inside the closing quotation mark.", 'Comma after the tag, period inside.'),
      Q('Which sentence is punctuated correctly?', ["“I found a frog” said Leo.", "“I found a frog,” said Leo.", "“I found a frog.” said Leo.", "“I found a frog”, said Leo."], 1, "When the quote comes first and it is a statement, end it with a comma inside the quotation marks, not a period.", 'Comma, not period, before the tag.'),
      Q('Which sentence is punctuated correctly?', ["“Where is my shoe?” asked Ava.", "“Where is my shoe”? asked Ava.", "“Where is my shoe,” asked Ava?", "“Where is my shoe?,” asked Ava."], 0, "The question mark belongs to the spoken words, so it goes inside the closing mark. You do not add a comma after a question mark.", 'The question mark goes inside.'),
      Q("Which words are the exact words spoken? Dad said, “We leave at noon.”", ['Dad said', 'We leave at noon', 'Dad said we leave'], 1, "The words inside the quotation marks are the exact words: We leave at noon. “Dad said” is the speaker tag.", 'Look inside the marks.'),
      Q('Which sentence is punctuated correctly?', ["“Watch out!” yelled Sam.", "“Watch out” yelled Sam!", "“Watch out!,” yelled Sam.", "Watch out! “yelled Sam.”"], 0, "The exclamation point belongs with the shouted words, so it goes inside the quotation marks. No extra comma is needed.", 'Keep the ! with the words.'),
      Q('Which sentence needs quotation marks?', ["Mia said that she was hungry.", "Mia said, I am hungry.", "Mia was hungry."], 1, "“I am hungry” are Mia's exact words, so they need quotation marks: Mia said, “I am hungry.” The first sentence only tells about what she said, using the word that, so no marks are needed.", 'Which one has her exact words?'),
      Q("Where does the comma go? Grace whispered “The baby is asleep.”", ['after Grace', 'after whispered', 'after baby', 'no comma'], 1, "When the tag comes before the quote, put a comma after the tag: Grace whispered, “The baby is asleep.”", 'After the tag.'),
      Q("What is the capitalization mistake? Leo said, “my turn is next.”", ['“my” should be “My”', '“said” should be “Said”', '“next” should be “Next”', 'There is no mistake.'], 0, "The first word of a quotation starts with a capital letter, even in the middle of a sentence: Leo said, “My turn is next.” The word said is not a name, so it stays lowercase.", 'How does the quote begin?'),
      Q('When should you start a new paragraph in dialogue?', ['every time a new person speaks', 'after every three sentences', 'only when the story ends'], 0, "Start a new paragraph whenever the speaker changes. It shows the reader that someone new is talking.", 'Think about the reader.'),
      Q('Which sentence is punctuated correctly?', ["“Let's go,” said Grandma, “before it rains.”", "“Let's go” said Grandma “before it rains.”", "“Let's go,” said Grandma. “before it rains.”", "“Let's go said Grandma, before it rains.”"], 0, "When a quote is split by a tag, put commas on both sides of the tag. Since “before it rains” finishes the same sentence, it starts with a lowercase letter.", 'Commas on both sides of the tag.'),
      Q('Which part is the speaker tag? “I love this song,” said Mom.', ['I love this song', 'said Mom', 'this song'], 1, "The speaker tag tells who is talking: said Mom. It stays outside the quotation marks.", 'Who said it?'),
      Q('Which sentence is punctuated correctly?', ["Ben asked, “Can we have pizza?”", "Ben asked “Can we have pizza”?", "Ben asked, “Can we have pizza.”", "Ben asked, Can we have “pizza?”"], 0, "Comma after the tag, quotation marks around all the spoken words, and the question mark inside because Ben is asking.", 'All the spoken words go inside.'),
      Q("What is wrong? “It is my birthday.” said Ella.", ['The period should be a comma.', 'It needs a question mark.', 'Ella should be lowercase.', 'Nothing is wrong.'], 0, "When a statement comes before the speaker tag, end it with a comma, not a period: “It is my birthday,” said Ella. The sentence is not over yet.", 'The sentence keeps going after the quote.'),
      Q("Which shows Ava's EXACT words?", ["Ava said she liked the book.", "Ava said, “I liked the book.”", "Ava told us about the book."], 1, "Only the sentence with quotation marks gives exactly what Ava said. The others retell it in different words.", 'Look for quotation marks.'),
      Q('Which sentence is punctuated correctly?', ["“Is it time to go?” Sam asked.", "“Is it time to go,” Sam asked?", "“Is it time to go?” Sam asked?", "Is it time to go? “Sam asked.”"], 0, "The question mark goes inside the quotation marks at the end of the question. The sentence then ends with a period after the tag.", 'Only one question mark.'),
      Q("Which mark goes at the blank? “We won ___” shouted the team.", ['!', '.', ',.'], 0, "The team is shouting with excitement, so use an exclamation point inside the quotation marks: “We won!” shouted the team.", 'They are shouting.'),
      Q("Where do the quotation marks go? The teacher said, Open your books.", ['around “The teacher said”', 'around “Open your books.”', 'around the whole sentence'], 1, "Only the exact spoken words get quotation marks: The teacher said, “Open your books.”", 'Only the spoken words.'),
      Q('Which sentence uses a comma correctly?', ["“Thank you” Ava, said.", "“Thank you,” Ava said.", "“Thank you”, Ava said.", "“Thank you,” Ava, said."], 1, "The comma goes inside the closing quotation mark, and no comma goes between Ava and said.", 'Inside the marks.'),
      Q('In dialogue, which is the speaker tag? Leo laughed and said, “That tickles!”', ['That tickles!', 'Leo laughed and said', 'tickles'], 1, "The speaker tag tells who is speaking and how: Leo laughed and said. The quote is “That tickles!”", 'The part outside the marks.'),
      Q('Which sentence is punctuated correctly?', ["“Come here,” called Mom “and see the rainbow.”", "“Come here,” called Mom, “and see the rainbow.”", "“Come here” called Mom, “and see the rainbow.”", "“Come here,” called Mom. “And see the rainbow.”"], 1, "In a split quote, put a comma inside the first part and another comma after the tag. The second part continues the same sentence, so it starts lowercase.", 'One comma before and one after the tag.')
    ]
  });

  // ---------------------------------------------------------------- Week 16
  C.unit('grammar', 16, {
    title: 'Frequently confused words',
    standard: 'ELAGSE4L1g',
    learn: [
      { h: 'to, too, two', p: "To shows direction or comes before a verb: go to the store, I like to read. Too means also or more than enough: me too, too hot. (Too has an extra o, like it has too many.) Two is the number 2." },
      { h: 'there, their, they’re', p: "There is a place (over there) or starts a sentence (There is a frog). Their means belonging to them (their house). They're is short for they are. Test it: if “they are” fits, use they're." },
      { h: 'your/you’re and its/it’s', p: "Your means belonging to you (your coat). You're means you are. Its means belonging to it (The dog wagged its tail). It's means it is or it has. The apostrophe in a contraction stands for missing letters. Say the long form to check: “The dog wagged it is tail” does not work, so use its." }
    ],
    demo: {
      q: "Choose: “(Their / There / They're) going to bring (their / there / they're) dog over (their / there / they're).”",
      steps: [
        "Step 1: First blank: does “They are going” fit? Yes, so use They're.",
        "Step 2: Second blank: the dog belongs to them, so use their.",
        "Step 3: Third blank: “over ___” is a place, so use there."
      ],
      a: "They're going to bring their dog over there."
    },
    items: [
      Q("Choose the correct word: “I have ___ sisters.”", ['to', 'too', 'two'], 2, "Two is the number 2. To shows direction, and too means also.", 'It is a number.'),
      Q("Choose the correct word: “This soup is ___ hot to eat.”", ['to', 'too', 'two'], 1, "Too means more than enough. The soup has more heat than you want. Notice the sentence also uses “to eat,” which comes before a verb.", 'More than enough.'),
      Q("Choose the correct word: “We are going ___ the library.”", ['to', 'too', 'two'], 0, "To shows direction, where we are going.", 'Where are we going?'),
      Q("Choose the correct word: “The children put on ___ coats.”", ['there', 'their', "they're"], 1, "The coats belong to the children, so use their. It shows ownership.", 'Whose coats?'),
      Q("Choose the correct word: “Put the box over ___.”", ["they're", 'their', 'there'], 2, "There tells a place. Hint: the word “here” is hiding inside “there,” and both are places.", 'Here and there.'),
      Q("Choose the correct word: “___ coming to dinner at six.”", ['Their', "They're", 'There'], 1, "They're means “they are.” Test it: “They are coming to dinner” makes sense.", 'Try saying “they are.”'),
      Q("Choose the correct word: “Is this ___ backpack?”", ['your', "you're", 'yours'], 0, "Your shows that the backpack belongs to you, and it comes right before the noun. “Is this you are backpack?” makes no sense, so it cannot be you're. Yours stands alone: “Is this backpack yours?”", 'Try “you are” in the blank.'),
      Q("Choose the correct word: “___ my best friend!”", ['Your', "You're", 'Yours'], 1, "You're means “you are.” “You are my best friend!” makes sense.", 'Say “you are.”'),
      Q("Choose the correct word: “The bird flapped ___ wings.”", ["it's", 'its', "its'"], 1, "Its (no apostrophe) shows the wings belong to the bird. “It's” means “it is,” and “its'” is never correct.", 'Does “it is” fit?'),
      Q("Choose the correct word: “___ going to rain today.”", ['Its', "It's", "Its'"], 1, "It's means “it is.” “It is going to rain today” makes sense.", 'Say “it is.”'),
      T("Type the correct word (to, too, or two): “May I come ___?” (meaning also)", ['too'], "Too means also. “May I come too?” means “May I also come?”", 'Also = the one with extra o.'),
      T("Type the correct word (to, too, or two): “Sam ate ___ slices of pie.”", ['two'], "Two is the number 2. Sam ate 2 slices.", 'A number.'),
      T("Type the correct word (there or their): “___ is a deer in the yard!”", ['There'], "There can start a sentence to say that something exists or is in a place. Their would mean belonging to them, which does not fit.", 'Nothing belongs to anyone here.'),
      Q("Find the mistake: “Their going to the beach on Saturday.”", ["“Their” should be “They're”", "“going” should be “goes”", "“beach” should be “beaches”", "There is no mistake."], 0, "The sentence means “They are going,” so it should be They're.", 'Read it with “they are.”'),
      Q("Find the mistake: “Your welcome to stay for supper.”", ["“Your” should be “You're”", "“stay” should be “stays”", "“supper” needs a capital", "There is no mistake."], 0, "It means “You are welcome,” so the contraction You're is correct. Your shows ownership, and nothing is owned here.", 'Say “you are.”'),
      Q("Find the mistake: “The puppy chased it's tail.”", ["“it's” should be “its”", "“chased” should be “chases”", "“tail” should be “tale”", "There is no mistake."], 0, "The tail belongs to the puppy, so use its with no apostrophe. “Chased it is tail” does not make sense.", 'Does “it is” fit?'),
      Q('Which sentence is correct?', ["They're house is near there church.", "Their house is near their church.", "There house is near they're church.", "Their house is near they're church."], 1, "Both the house and the church belong to them, so use their both times.", 'Both show ownership.'),
      Q('Which sentence is correct?', ["It's time to give the cat its food.", "Its time to give the cat it's food.", "It's time to give the cat it's food.", "Its time to give the cat its food."], 0, "It's means “it is” (It is time). Its shows the food belongs to the cat. Check each with “it is.”", 'Test both blanks with “it is.”'),
      Q('Which sentence is correct?', ["I want to go too.", "I want too go to.", "I want two go too.", "I want to go two."], 0, "To comes before the verb go. Too at the end means also.", 'One means “also.”'),
      Q('Which sentence is correct?', ["You're dog is in you're yard.", "Your dog is in your yard.", "You're dog is in your yard.", "Your dog is in you're yard."], 1, "The dog and the yard both belong to you, so use your both times. You're would mean “you are.”", 'Ownership both times.')
    ]
  });

  // ---------------------------------------------------------------- Week 17
  C.unit('grammar', 17, {
    title: 'Synonyms, antonyms, and precise word choice',
    standard: 'ELAGSE4L5c',
    learn: [
      { h: 'Synonyms and antonyms', p: "Synonyms are words with the same or almost the same meaning: big and large, happy and glad. Antonyms are words with opposite meanings: hot and cold, early and late. A thesaurus is a book or tool that lists synonyms and antonyms." },
      { h: 'Shades of meaning', p: "Synonyms are not always exactly alike. Warm, hot, and scorching all mean high temperature, but scorching is the hottest. Nibble, eat, and gobble are all ways to eat, but each paints a different picture. Pick the word that fits best." },
      { h: 'Precise words make writing strong', p: "Precise words are exact. Instead of “The dog went across the yard,” try “The dog dashed across the yard.” Instead of “nice,” you might say kind, cheerful, or generous. Replace tired words like good, bad, said, and went with words that show exactly what you mean." }
    ],
    demo: {
      q: "Make this sentence more precise: “The girl said, ‘Help!’”",
      steps: [
        "Step 1: Find the plain word: said.",
        "Step 2: Think about how someone says “Help!” Probably loudly and with fear.",
        "Step 3: Choose a synonym of said that shows that: screamed, shouted, or cried.",
        "Step 4: Rewrite the sentence with the precise word."
      ],
      a: "The girl screamed, “Help!”"
    },
    items: [
      Q('Which word is a SYNONYM for “happy”?', ['sad', 'joyful', 'angry', 'tired'], 1, "Joyful means nearly the same as happy. Sad is an antonym (opposite).", 'Same meaning.'),
      Q('Which word is an ANTONYM for “ancient”?', ['old', 'modern', 'historic', 'aged'], 1, "Ancient means very, very old. Modern means new or of today, so it is the opposite. The other words are synonyms.", 'Opposite meaning.'),
      Q('Which pair are synonyms?', ['tiny / huge', 'quick / fast', 'open / closed', 'loud / quiet'], 1, "Quick and fast mean almost the same thing. The other pairs are opposites, so they are antonyms.", 'Same or nearly the same.'),
      Q('Which pair are antonyms?', ['begin / start', 'shout / yell', 'brave / fearful', 'smart / clever'], 2, "Brave means facing fear with courage, and fearful means full of fear. They are opposites. The other pairs are synonyms.", 'Opposite meanings.'),
      T("Type an antonym for “wet.” (one word, starts with d)", ['dry'], "Wet and dry are opposites, so they are antonyms.", 'Starts with d.'),
      T("Type an antonym for “float.” (one word, starts with s)", ['sink'], "Things that float stay on top of the water. Things that sink go down. Float and sink are antonyms.", 'A rock does this in water.'),
      Q("Which word is the MOST precise replacement for “went”? “The rabbit went into its hole when it saw the hawk.”", ['moved', 'darted', 'traveled', 'was'], 1, "Darted means moved suddenly and fast. It shows the rabbit was scared and quick. Moved and traveled are still very general.", 'Which word shows speed and fear?'),
      Q('Which word means the HOTTEST?', ['warm', 'hot', 'scorching', 'mild'], 2, "Scorching means extremely hot, hot enough to burn. Warm and mild are less hot. These are shades of meaning.", 'Think of the hottest summer day.'),
      Q("Which word best replaces “big” to describe a whale? “We saw a big whale.”", ['enormous', 'tall', 'wide', 'large-ish'], 0, "Enormous means very, very big, which fits a whale. Tall and wide describe only one direction.", 'Whales are really, really big.'),
      Q("Which word is a better choice than “said”? “‘I lost my puppy,’ Ella ___ with tears in her eyes.”", ['laughed', 'sobbed', 'cheered', 'giggled'], 1, "Sobbed means cried loudly. It matches the tears and the sad news. Laughed, cheered, and giggled are happy words.", 'How do you talk when you are crying?'),
      Q('Which word does NOT belong with the others?', ['glad', 'cheerful', 'gloomy', 'delighted'], 2, "Glad, cheerful, and delighted are synonyms for happy. Gloomy means sad or dark, so it is an antonym of the others.", 'Find the opposite.'),
      T("Type a synonym for “begin.” (one word, starts with s)", ['start'], "Begin and start mean the same thing, so they are synonyms.", 'Starts with s.'),
      Q('Put these words in order from least to most: “nibble, eat, gobble.” Which is the MOST hungry way to eat?', ['nibble', 'eat', 'gobble'], 2, "Gobble means to eat very fast and in big bites. Nibble means tiny bites. Eat is in the middle.", 'Which one is fast and big?'),
      Q("Which sentence uses the most precise words?", ["The dog did a thing.", "The dog was good.", "The golden retriever fetched the stick.", "The animal went somewhere."], 2, "“Golden retriever” is more exact than dog, and “fetched the stick” tells exactly what happened. The others are vague.", 'Which one paints a clear picture?'),
      Q('Which word is a SYNONYM for “difficult”?', ['easy', 'simple', 'hard', 'fun'], 2, "Difficult and hard both mean not easy. Easy and simple are antonyms.", 'Same meaning.'),
      Q('Which word is an ANTONYM for “generous”?', ['kind', 'selfish', 'giving', 'helpful'], 1, "Generous means happy to share. Selfish means caring only about yourself. They are opposites.", 'Someone who will not share.'),
      Q("Which word best replaces “nice”? “Thank you for the ___ card. It made me smile.”", ['thoughtful', 'loud', 'heavy', 'angry'], 0, "Thoughtful means showing care for someone's feelings. It explains WHY the card was nice.", 'Which word shows care?'),
      Q('Which word shows the most COLD?', ['cool', 'chilly', 'freezing', 'room temperature'], 2, "Freezing is the coldest, cold enough to turn water to ice. Cool and chilly are only a little cold.", 'Ice forms.'),
      T("Type an antonym for “arrive.” (one word, starts with l)", ['leave'], "Arrive means to come to a place, and leave means to go away from it. They are antonyms.", 'The opposite of coming.'),
      Q("Which word best replaces “walked” to show the boy was tired? “After the long hike, the boy ___ home.”", ['skipped', 'raced', 'trudged', 'hopped'], 2, "Trudged means walked slowly and heavily, as if tired. Skipped, raced, and hopped all show lots of energy.", 'Slow, heavy steps.')
    ]
  });

  // ---------------------------------------------------------------- Week 18
  C.unit('grammar', 18, {
    title: 'Similes, metaphors, idioms, adages, and proverbs',
    standard: 'ELAGSE4L5a',
    learn: [
      { h: 'Similes and metaphors', p: "Both compare two different things. A simile uses like or as: “Her smile was as bright as the sun.” A metaphor says one thing IS another, without like or as: “The classroom was a zoo.” The class was not really full of animals; it was wild and noisy." },
      { h: 'Idioms', p: "An idiom is a saying that means something different from its words. “It's raining cats and dogs” means it is raining very hard. “That test was a piece of cake” means it was easy. You have to learn what idioms mean, because the words alone do not tell you." },
      { h: 'Adages and proverbs', p: "Adages and proverbs are short, old sayings that give advice or share a truth. “Practice makes perfect” means doing something again and again helps you get better. “Look before you leap” means think before you act." }
    ],
    demo: {
      q: "Is “The snow was a soft white blanket” a simile or a metaphor? What does it mean?",
      steps: [
        "Step 1: Look for like or as. There are none.",
        "Step 2: The sentence says the snow WAS a blanket. That is a metaphor.",
        "Step 3: Think about how the two are alike. A blanket covers things smoothly and evenly.",
        "Step 4: So the snow covered the ground smoothly, like a blanket covers a bed."
      ],
      a: "It is a metaphor. It means the snow covered everything evenly and softly."
    },
    items: [
      Q("“The baby's cheeks were as soft as rose petals.” What is this?", ['simile', 'metaphor', 'idiom', 'proverb'], 0, "It compares cheeks to rose petals using the word “as,” so it is a simile.", 'Look for like or as.'),
      Q("“My brother is a night owl.” What is this?", ['simile', 'metaphor', 'proverb'], 1, "It says the brother IS a night owl, without like or as, so it is a metaphor. It means he likes to stay up late.", 'Is there a like or as?'),
      Q("“Ava ran like the wind.” What is this?", ['metaphor', 'simile', 'adage'], 1, "It uses “like” to compare Ava's running to the wind, so it is a simile. It means she ran very fast.", 'Find the comparing word.'),
      Q("What does the idiom “a piece of cake” mean? “The spelling test was a piece of cake.”", ['It was delicious.', 'It was very easy.', 'It was a dessert.', 'It was very hard.'], 1, "The idiom “a piece of cake” means something was easy. There is no real cake!", 'Was it hard or easy?'),
      Q("What does “It's raining cats and dogs” mean?", ['Animals are falling.', 'It is raining very hard.', 'It is a little sprinkly.', 'Pets are outside.'], 1, "This idiom means a very heavy rain. The words are silly on purpose; animals are not falling.", 'Think about the weather.'),
      Q("What does “under the weather” mean? “Grandpa is feeling under the weather.”", ['He is outside in the rain.', 'He is feeling sick.', 'He is happy.', 'He is standing under a cloud.'], 1, "Under the weather is an idiom that means a little sick.", 'How does he feel?'),
      Q("What does “spill the beans” mean?", ['make a mess in the kitchen', 'tell a secret', 'cook supper', 'drop something'], 1, "To spill the beans means to tell a secret, often by accident.", 'Think about a surprise party.'),
      Q("What does “hit the hay” mean? “I am tired, so I will hit the hay.”", ['go to bed', 'feed the horses', 'play in a barn', 'get angry'], 0, "Hit the hay is an idiom for going to bed. Long ago, some mattresses were stuffed with hay or straw.", 'She is tired.'),
      Q("What does the proverb “Practice makes perfect” mean?", ['You should never practice.', 'Doing something again and again helps you get better.', 'Perfect people do not need practice.'], 1, "This proverb teaches that practicing helps you improve.", 'Think about learning piano.'),
      Q("What does “Look before you leap” mean?", ['Always jump high.', 'Think carefully before you act.', 'Look at frogs.'], 1, "This adage gives advice: stop and think before doing something, so you do not make a mistake.", 'It is advice.'),
      Q("What does “The early bird catches the worm” mean?", ['Birds eat worms in the morning.', 'People who start early often succeed.', 'You should sleep in.', 'Worms wake up late.'], 1, "This proverb means that getting started early gives you an advantage.", 'It is about people, not birds.'),
      Q("What does “Don't count your chickens before they hatch” mean?", ['Do not count chickens.', 'Do not depend on something good until it really happens.', 'Eggs are fragile.'], 1, "This proverb warns not to plan on something before it is sure. Not every egg hatches!", 'Not every egg turns into a chick.'),
      Q("“Actions speak louder than words.” What does this mean?", ['What you do shows more than what you say.', 'Being loud is good.', 'Words are better than actions.'], 0, "This adage means people believe what you DO more than what you SAY. Helping shows kindness better than just talking about it.", 'Doing vs. saying.'),
      Q("Which sentence has a SIMILE?", ["The stars were diamonds in the sky.", "The stars twinkled like diamonds.", "The stars were bright.", "Stars shine at night."], 1, "“Twinkled like diamonds” uses like to compare, so it is a simile. “The stars were diamonds in the sky” is a metaphor because it says the stars WERE diamonds.", 'Look for like.'),
      Q("Which sentence has a METAPHOR?", ["Her voice was music to my ears.", "Her voice was like music.", "Her voice was as sweet as honey.", "She sang a song."], 0, "It says her voice WAS music, with no like or as, so it is a metaphor. The choices with like and as are similes.", 'No like or as.'),
      Q("What does “break the ice” mean? “At the new class, Mia told a joke to break the ice.”", ['to smash frozen water', 'to make people feel less shy and start talking', 'to be very cold'], 1, "To break the ice means to do something that helps people relax and start talking when they first meet.", 'Why tell a joke at a new class?'),
      Q("What does “cost an arm and a leg” mean?", ['It was very expensive.', 'It hurt.', 'It was free.'], 0, "This idiom means something cost a lot of money. No one really pays with arms or legs!", 'Think about money.'),
      T("Type the word that makes this a simile: “The kitten was ___ quiet as a mouse.”", ['as'], "Similes use like or as. Here the pattern is “as quiet as a mouse.”", 'It appears twice in the pattern.'),
      Q("“Two heads are better than one.” What does this mean?", ['It is better to have two heads.', 'Working together can help solve problems.', 'One person is always right.'], 1, "This proverb means two people thinking together often find better answers than one person alone.", 'Teamwork.'),
      Q("“Time is a thief.” What does this metaphor mean?", ['Time steals money.', 'Time seems to slip away quickly before we notice.', 'Clocks are stolen.'], 1, "The metaphor compares time to a thief because time seems to sneak away. Days go by fast before we notice.", 'What does a thief take without you noticing?')
    ]
  });

  // ---------------------------------------------------------------- Week 19
  C.unit('grammar', 19, {
    title: 'Prefixes, suffixes, and Greek and Latin roots',
    standard: 'ELAGSE4L4b',
    learn: [
      { h: 'Prefixes go in front', p: "A prefix is a word part added to the beginning of a word. It changes the meaning. un- and dis- mean not (unhappy, dislike). re- means again (reread). pre- means before (preview). mis- means wrongly (misspell). sub- means under (submarine). tri- means three (tricycle)." },
      { h: 'Suffixes go at the end', p: "A suffix is added to the end of a word. -ful means full of (hopeful). -less means without (careless). -er can mean a person who (teacher). -ness turns a describing word into a thing (kindness). -able means can be (washable). -ly often makes an adverb (quickly)." },
      { h: 'Greek and Latin roots', p: "Many English words are built on old Greek or Latin roots. Greek: tele (far), photo (light), graph (write), bio (life), geo (earth), micro (small), therm (heat). Latin: port (carry), spect (look), aud (hear), dict (say), struct (build), rupt (break), vis (see). Knowing roots helps you figure out new words." }
    ],
    demo: {
      q: "Use word parts to figure out “unbreakable.”",
      steps: [
        "Step 1: Find the base word: break.",
        "Step 2: The suffix -able means can be. Breakable means can be broken.",
        "Step 3: The prefix un- means not.",
        "Step 4: Put it together: not able to be broken."
      ],
      a: "Unbreakable means it cannot be broken."
    },
    items: [
      Q("What does the prefix “re-” mean in “rewrite”?", ['not', 'again', 'before', 'under'], 1, "Re- means again, so rewrite means write again. Other examples: reread, refill, rebuild.", 'Think of reread.'),
      Q("What does “unkind” mean?", ['very kind', 'kind again', 'not kind', 'kind before'], 2, "The prefix un- means not, so unkind means not kind.", 'un- = not'),
      Q("What does the suffix “-less” mean in “fearless”?", ['full of', 'without', 'again', 'a person who'], 1, "-less means without. Fearless means without fear, very brave.", 'Opposite of -ful.'),
      Q("What does “preheat” mean? “Preheat the oven before baking.”", ['heat it after', 'heat it again', 'heat it before', 'do not heat it'], 2, "The prefix pre- means before. You heat the oven before you put the food in.", 'pre- = before'),
      T("Add a prefix to make a word that means “spell wrongly.”", ['misspell'], "The prefix mis- means wrongly. Mis + spell = misspell. Notice it keeps both s letters.", 'mis- means wrongly.'),
      T("Add a suffix to “help” to make a word that means “full of help.”", ['helpful'], "The suffix -ful means full of. Help + ful = helpful. The suffix has only one l.", '-ful = full of'),
      Q("What does “tricycle” mean?", ['a bike with one wheel', 'a bike with two wheels', 'a bike with three wheels', 'a broken bike'], 2, "Tri- means three. A tricycle has three wheels. A triangle has three angles.", 'Think of triangle.'),
      Q("The Greek root “tele” means far, and “scope” means look at. What is a telescope?", ['a tool for looking at faraway things', 'a tool for hearing', 'a kind of phone', 'a small picture'], 0, "Tele (far) + scope (look) = a tool for looking at things far away, like stars and planets.", 'far + look'),
      Q("The Latin root “port” means carry. Which word means “able to be carried”?", ['portable', 'report', 'airport', 'porch'], 0, "Port (carry) + -able (can be) = portable, able to be carried. A portable speaker can be carried around.", 'Look for -able too.'),
      Q("The Latin root “aud” means hear. Which word is about hearing?", ['audience', 'automobile', 'author', 'autumn'], 0, "An audience is a group of people who listen to or watch a show. It has the root aud. The other words just start with similar letters.", 'aud- not auto-.'),
      Q("The Greek root “bio” means life, and “-logy” means the study of. What is biology?", ['the study of rocks', 'the study of living things', 'the study of stars', 'the study of numbers'], 1, "Bio (life) + logy (study of) = the study of living things, like plants and animals.", 'life + study'),
      Q("The Greek root “graph” means write. Which word means a person's written name?", ['autograph', 'photograph', 'telephone', 'geography'], 0, "Auto means self, so an autograph is your name written by yourself. Photograph and geography also use graph, but they mean other things.", 'auto = self'),
      Q("What does “disagree” mean?", ['agree again', 'not agree', 'agree before', 'agree a lot'], 1, "The prefix dis- means not or the opposite. Disagree means to not agree.", 'dis- = not'),
      Q("The Latin root “rupt” means break. When a volcano “erupts,” what happens?", ['It falls asleep.', 'It breaks open and lava bursts out.', 'It grows taller.'], 1, "Erupt has the root rupt (break). The volcano bursts or breaks open. Interrupt means to break into a conversation.", 'rupt = break'),
      T("Add a suffix to “dark” to make the noun that means “the state of being dark.”", ['darkness'], "The suffix -ness turns a describing word into a noun: dark becomes darkness. Kindness and sadness follow the same pattern.", '-ness'),
      Q("The Greek root “geo” means earth. Which subject studies the earth's land, maps, and places?", ['geography', 'biology', 'music', 'grammar'], 0, "Geo (earth) + graph (write or describe) = geography, the study of the earth's places and features.", 'geo = earth'),
      Q("The Latin root “spect” means look. A “spectator” is someone who ___.", ['builds things', 'watches an event', 'writes books', 'carries things'], 1, "Spect means look, and -or means a person who. A spectator is a person who watches, like a fan at a game.", 'spect = look'),
      Q("What does “submarine” mean, if “sub-” means under and “marine” means sea?", ['a ship that goes under the sea', 'a ship above the clouds', 'a beach toy', 'a sea animal'], 0, "Sub (under) + marine (sea) = a ship that travels under the water.", 'under + sea'),
      Q('Which word has BOTH a prefix and a suffix?', ['unhelpful', 'helper', 'help', 'helped'], 0, "Unhelpful has the prefix un- (not), the base word help, and the suffix -ful (full of). It means not full of help.", 'Look at the front and the end.'),
      T("The Latin root “struct” means build. Type the word (starts with c) that means “to build something”: con___", ['construct'], "Con + struct makes construct, which means to build. A construction worker builds things.", 'con + struct')
    ]
  });


  // Spread correct answers across positions (deterministic rotation; the app also shuffles at play time).
  for (var wk = 1; wk <= 19; wk++) {
    C.bank.grammar[wk].items.forEach(function (q, i) {
      if (q.kind !== 'choice') return;
      var n = q.options.length, r = (i * 7 + wk) % n;
      if (!r) return;
      q.options = q.options.slice(r).concat(q.options.slice(0, r));
      q.a = (q.a - r + n) % n;
    });
  }

})(typeof window !== 'undefined' ? window : globalThis);
