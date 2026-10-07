/* Grammar topics, weeks 20-37: grade 5 language standards (ELAGSE5L1-L5), accelerated. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  // ---------------------------------------------------------------- Week 20
  C.unit('grammar', 20, {
    title: 'Conjunctions, prepositions, and interjections',
    standard: 'ELAGSE5L1a',
    learn: [
      { h: 'Conjunctions join', p: "A conjunction is a joining word. Coordinating conjunctions (for, and, nor, but, or, yet, so — remember FANBOYS) join words or two equal sentences: “I wanted to swim, but the pool was closed.” Subordinating conjunctions such as because, when, although, if, and since start a part that depends on the rest: “We stayed in because it rained.”" },
      { h: 'Prepositions show relationships', p: "A preposition shows how a noun or pronoun is related to another word, often by place or time: in, on, under, behind, after, during, with, across. The preposition plus its noun makes a prepositional phrase: “under the porch,” “after lunch.” The noun at the end is called the object of the preposition." },
      { h: 'Interjections show feeling', p: "An interjection is a word or short phrase that shows sudden feeling: Wow! Oops! Hooray! Oh, well. A strong interjection usually stands alone with an exclamation point. A mild one is followed by a comma: “Oh, I forgot my pencil.”" }
    ],
    demo: {
      q: "Label the conjunction, preposition, and interjection: “Wow, the cat jumped onto the table and knocked over a cup.”",
      steps: [
        "Step 1: Look for a word that only shows feeling. “Wow” shows surprise and is set off by a comma, so it is the interjection.",
        "Step 2: Look for a word that links a noun to the rest of the sentence. “Onto” tells where the cat jumped in relation to “the table,” so it is a preposition.",
        "Step 3: Look for a joining word. “And” joins two actions, jumped and knocked, so it is a conjunction."
      ],
      a: "Wow = interjection, onto = preposition, and = conjunction."
    },
    items: [
      Q("Which word is the conjunction? “Mia likes peaches, but her brother likes plums.”", ["likes", "but", "her", "plums"], 1, "“But” joins two complete sentences and shows a contrast. It is one of the FANBOYS coordinating conjunctions.", "Look for the joining word after the comma."),
      Q("Which word is the preposition? “The puppy slept under the kitchen table.”", ["slept", "kitchen", "under", "puppy"], 2, "“Under” shows where the puppy slept in relation to the table. “Under the kitchen table” is the prepositional phrase.", "Which word tells position?"),
      Q("Which word is the interjection? “Yikes! The milk is spilling.”", ["Yikes", "milk", "is", "spilling"], 0, "“Yikes” shows sudden alarm and does no other job in the sentence. That makes it an interjection.", "Which word only shows a feeling?"),
      Q("What is the object of the preposition in “We hiked across the bridge”?", ["hiked", "across", "We", "bridge"], 3, "The object of the preposition is the noun that ends the prepositional phrase. In “across the bridge,” the object is “bridge.”", "Find the preposition first, then the noun after it."),
      Q("Which sentence uses “because” as a subordinating conjunction?", ["Because.", "We left early because the storm was coming.", "Because of you.", "Is it because?"], 1, "In “because the storm was coming,” the word “because” starts a part that depends on the main sentence “We left early.” That is the job of a subordinating conjunction.", "Look for a full sentence with a part that explains why."),
      Q("Choose the best conjunction: “I was tired, ___ I kept reading my book.”", ["so", "or", "yet", "for"], 2, "“Yet” shows a surprising contrast: she was tired but kept reading anyway. “So” would mean being tired caused her to keep reading, which does not make sense.", "Being tired and still reading is a contrast."),
      Q("Choose the best conjunction: “It started to rain, ___ we went inside.”", ["so", "but", "nor", "yet"], 0, "“So” shows a result: the rain caused us to go inside. “But” and “yet” show contrast, which does not fit here.", "Is the second part a result of the first?"),
      Q("Which word is a preposition used to show TIME?", ["quickly", "during", "although", "hooray"], 1, "“During” is a preposition that shows time, as in “during the movie.” “Although” is a conjunction, “quickly” is an adverb, and “hooray” is an interjection.", "Which word fits before “the game”?"),
      Q("Which sentence punctuates the mild interjection correctly?", ["Oh I see what you mean.", "Oh. I see what you mean.", "Oh, I see what you mean.", "Oh I, see what you mean."], 2, "A mild interjection like “Oh” is followed by a comma when it starts a sentence. The comma marks a small pause before the rest of the thought.", "A mild feeling gets a comma."),
      Q("How is the word “but” used in “Everyone came but Sam”?", ["As a conjunction", "As an interjection", "As a preposition meaning “except”", "As a verb"], 2, "Here “but” means “except” and is followed by the noun “Sam,” so it works as a preposition. In “I came, but Sam stayed home,” it would join two sentences as a conjunction. A word's job decides its part of speech.", "Is it joining two sentences, or followed by just one noun?"),
      Q("How is “up” used in “The squirrel ran up the tree”?", ["Conjunction", "Preposition", "Interjection", "Noun"], 1, "“Up” links the squirrel's running to “the tree,” forming the phrase “up the tree.” That is a prepositional phrase.", "Does it have a noun after it?"),
      Q("Which sentence has a prepositional phrase?", ["Dad laughed.", "The bird sang sweetly.", "Grandma baked bread for the neighbors.", "Hooray!"], 2, "“For the neighbors” is a prepositional phrase: the preposition “for” plus its object “neighbors.” The other choices have no preposition.", "Look for a small word followed by a noun phrase."),
      Q("Which choice is a coordinating conjunction?", ["since", "nor", "when", "if"], 1, "“Nor” is one of the FANBOYS: for, and, nor, but, or, yet, so. The others are subordinating conjunctions that start dependent parts.", "Think FANBOYS."),
      T("Type the interjection: “Ouch, that thorn is sharp!”", ["Ouch"], "“Ouch” shows sudden pain. It is set off with a comma and does no other job in the sentence, so it is an interjection.", "Which word is a feeling sound?"),
      T("Type the preposition: “Lena hid the gift behind the couch.”", ["behind"], "“Behind” shows where the gift was hidden in relation to the couch. “Behind the couch” is the prepositional phrase.", "Which word tells where?"),
      T("Type the conjunction: “Do you want soup or salad?”", ["or"], "“Or” joins two choices, soup and salad. It is a coordinating conjunction that shows a choice.", "Which word joins the two foods?"),
      T("Fill in a subordinating conjunction that shows time: “We will eat ___ Dad gets home.” (Hint: it starts with w.)", ["when", "whenever"], "“When” is a subordinating conjunction that shows time. It starts the dependent part “when Dad gets home.” (“After” or “once” could also work in real writing.)", "It is a w-word that tells time."),
      Q("Which sentence uses an interjection correctly with strong feeling?", ["Hooray! We won the game.", "Hooray, we won the game?", "We hooray won the game.", "Hooray we, won the game."], 0, "A strong interjection like “Hooray” can stand alone with an exclamation point, followed by the rest of the sentence. The other choices place the word or the punctuation in odd spots.", "Strong feeling gets an exclamation point."),
      Q("In “The book on the shelf is mine,” what does the phrase “on the shelf” tell?", ["Which book", "When it happened", "Why it happened", "How many books"], 0, "The prepositional phrase “on the shelf” describes the noun “book.” It tells which book is mine. Prepositional phrases can describe nouns or verbs.", "What word does the phrase describe?"),
      Q("Which word is NOT a preposition?", ["between", "toward", "beneath", "although"], 3, "“Although” is a subordinating conjunction: “Although it was cold, we played outside.” Between, toward, and beneath show position or direction, so they are prepositions.", "Which one could start a whole clause?")
    ]
  });

  // ---------------------------------------------------------------- Week 21
  C.unit('grammar', 21, {
    title: 'Perfect verb tenses',
    standard: 'ELAGSE5L1b',
    learn: [
      { h: 'Present perfect: have/has + past participle', p: "The present perfect tells about an action that began in the past and connects to now, or happened at an unknown time before now. “I have walked to the park many times.” “She has finished her chores.” Use has with he, she, it, or one person; use have with I, you, we, they." },
      { h: 'Past perfect: had + past participle', p: "The past perfect tells about an action that was finished BEFORE another past action. “By the time we arrived, the movie had started.” First the movie started, then we arrived. Had is the same for every subject." },
      { h: 'Future perfect: will have + past participle', p: "The future perfect tells about an action that will be finished before a certain time in the future. “By Friday, I will have read the whole book.” Watch out for irregular past participles: gone, eaten, written, seen, taken, flown." }
    ],
    demo: {
      q: "Which perfect tense fits? “By the time Mom called, I ___ (finish) my homework.”",
      steps: [
        "Step 1: Find the time clue. “By the time Mom called” is in the past.",
        "Step 2: Decide the order. The homework was done before Mom called, so one past action finished before another.",
        "Step 3: That is the past perfect: had + past participle. The past participle of finish is finished."
      ],
      a: "had finished (past perfect)"
    },
    items: [
      Q("What tense is “have walked”?", ["Past perfect", "Present perfect", "Future perfect", "Simple past"], 1, "Have or has plus a past participle makes the present perfect. It links a past action to the present.", "Look at the helping verb: have."),
      Q("What tense is “had walked”?", ["Past perfect", "Present perfect", "Future perfect", "Simple present"], 0, "Had plus a past participle makes the past perfect. It shows an action finished before another past action.", "Look at the helping verb: had."),
      Q("What tense is “will have walked”?", ["Simple future", "Present perfect", "Past perfect", "Future perfect"], 3, "Will have plus a past participle makes the future perfect. It shows an action that will be done before a future time.", "Will + have."),
      Q("Choose the correct verb: “By next summer, we ___ in this house for five years.”", ["have lived", "will have lived", "had lived", "lived"], 1, "“By next summer” is a future time, and the living will be complete by then. That calls for the future perfect: will have lived.", "The deadline is in the future."),
      Q("Choose the correct verb: “Before the storm hit, the farmer ___ his cows into the barn.”", ["had led", "will have led", "has led", "leads"], 0, "Leading the cows happened before the storm hit, and both are in the past. One past action finished before another uses the past perfect: had led.", "Which past action came first?"),
      Q("Choose the correct verb: “She ___ three books this month so far.”", ["had read", "will have read", "has read", "have read"], 2, "“So far” connects the past to now, so use the present perfect. With the subject “she,” use has: has read.", "She = has or have?"),
      Q("Which sentence uses the present perfect correctly?", ["They has visited Savannah.", "They have visited Savannah.", "They have visit Savannah.", "They having visited Savannah."], 1, "With “they,” the helping verb is have, and it needs the past participle “visited.” “Has” goes with he, she, or it, and “visit” is not a past participle.", "Check both the helper and the main verb."),
      Q("Which is the correct past participle in “I have ___ that movie twice”?", ["saw", "seed", "seen", "seeing"], 2, "See is irregular: see, saw, seen. Perfect tenses always use the past participle, so the answer is “have seen.” “Have saw” is a common mistake.", "See, saw, ___."),
      Q("Which sentence has an error?", ["He has eaten lunch.", "We had gone home.", "She has wrote a letter.", "They will have flown to Texas."], 2, "Write is irregular: write, wrote, written. The perfect tense needs the past participle, so it should be “She has written a letter.”", "Check each past participle."),
      Q("Which sentence shows one past action finished before another past action?", ["I have cleaned my room.", "When Dad got home, I had cleaned my room.", "I will have cleaned my room by noon.", "I clean my room on Saturdays."], 1, "The cleaning was finished before Dad got home, and both are in the past. The past perfect “had cleaned” shows that order.", "Look for two past events."),
      T("Fill in the past participle of “take”: “Someone has ___ my seat.”", ["taken"], "Take is irregular: take, took, taken. After has, use the past participle “taken.”", "Take, took, ___."),
      T("Fill in the past participle of “go”: “By sunset, the birds had ___ to their nests.”", ["gone"], "Go is irregular: go, went, gone. After had, use “gone,” not “went.”", "Go, went, ___."),
      T("Type the helping verb that makes the past perfect: “The bus ___ left before we reached the stop.”", ["had"], "The past perfect always uses “had” plus a past participle. The bus left before we reached the stop, so “had left” shows the earlier past action.", "It is the same for every subject."),
      T("Type the two helping words for the future perfect: “By June, I ___ ___ learned all my multiplication facts.”", ["will have"], "The future perfect uses “will have” plus a past participle. It shows the learning will be complete before June.", "Two words: future + perfect."),
      Q("Change to the past perfect: “The baby sleeps.”", ["The baby has slept.", "The baby had slept.", "The baby will have slept.", "The baby slept."], 1, "Past perfect = had + past participle. The past participle of sleep is slept, so the answer is “had slept.” “Has slept” is present perfect.", "Use had."),
      Q("Change to the future perfect: “We finish the puzzle.”", ["We will have finished the puzzle.", "We have finished the puzzle.", "We had finished the puzzle.", "We will finish the puzzle."], 0, "Future perfect = will have + past participle: will have finished. “Will finish” is simple future; it does not show completion before a time.", "Will + have + participle."),
      Q("Which sentence uses “has” correctly?", ["I has drawn a map.", "You has drawn a map.", "My sister has drawn a map.", "We has drawn a map."], 2, "“Has” goes with one person or thing that is not I or you, such as “my sister.” I, you, we, and they use “have.”", "Has goes with he, she, it."),
      Q("Which sentence is correct?", ["By the time we got there, the pie had been eaten.", "By the time we got there, the pie will have been eaten.", "By the time we got there, the pie has be eaten.", "By the time we got there, the pie had ate."], 0, "The pie was eaten before we got there, both in the past, so use the past perfect. “Had been eaten” is correct. “Had ate” uses the wrong verb form.", "The time clue is in the past."),
      Q("What does the present perfect in “Grandpa has lived in Macon since 1990” tell us?", ["He moved away in 1990.", "He started living there in 1990 and still lives there.", "He will move there in 1990.", "He lived there only one day."], 1, "The present perfect connects past to present. “Has lived ... since 1990” means it started then and is still true now.", "Present perfect reaches up to now."),
      T("Fill in the past participle of “fly”: “The geese have ___ south for the winter.”", ["flown"], "Fly is irregular: fly, flew, flown. After have, use “flown,” not “flew.”", "Fly, flew, ___.")
    ]
  });

  // ---------------------------------------------------------------- Week 22
  C.unit('grammar', 22, {
    title: 'Verb tense to show time; fixing tense shifts',
    standard: 'ELAGSE5L1c',
    learn: [
      { h: 'Tense tells when', p: "Verb tense tells when something happens: past (walked), present (walks), future (will walk). Perfect tenses show order: “After I had eaten, I played.” Writers choose tenses to show time, order, and even conditions: “If it rains, we will stay inside.”" },
      { h: 'Stay in one tense', p: "Once you start telling a story in one tense, stay there unless the time really changes. A wrong switch is called an inappropriate tense shift: “Yesterday I walked to the store and buy milk.” Fix: “Yesterday I walked to the store and bought milk.”" },
      { h: 'Good shifts have a reason', p: "Some shifts are correct because the time truly changes: “Last year I lived in Athens, but now I live in Atlanta.” The words last year and now signal the change. If there is no time signal, keep the verbs matching." }
    ],
    demo: {
      q: "Fix the shift: “The dog chased the ball and brings it back to me.”",
      steps: [
        "Step 1: Find the verbs: chased (past) and brings (present).",
        "Step 2: Ask if the time changed. Nothing signals a new time; it is one quick event.",
        "Step 3: Match the tense of the first verb. Change brings to brought."
      ],
      a: "The dog chased the ball and brought it back to me."
    },
    items: [
      Q("Which sentence has an inappropriate tense shift?", ["She opened the door and stepped inside.", "She opens the door and steps inside.", "She opened the door and steps inside.", "She will open the door and step inside."], 2, "“Opened” is past and “steps” is present, with no reason for the time to change. Both verbs should be past (opened, stepped) or both present.", "Look for verbs that do not match."),
      Q("Fix the shift: “Last night we watched a movie and eat popcorn.”", ["eat → ate", "watched → watch", "eat → will eat", "No change needed"], 0, "“Last night” tells us the story is in the past. “Watched” is already past, so “eat” must become “ate.”", "What does “last night” tell you?"),
      Q("Which sentence uses tense correctly to show a real change in time?", ["Yesterday I am sick, but today I felt better.", "Yesterday I was sick, but today I feel better.", "Yesterday I was sick, but today I felt better yesterday.", "Yesterday I will be sick, but today I feel better."], 1, "“Yesterday” goes with past tense (was) and “today” goes with present tense (feel). The shift is correct because the time words signal it.", "Match each verb to its time word."),
      Q("Choose the verb that keeps the tense steady: “Every morning, Jada feeds the chickens and ___ the eggs.”", ["collected", "collects", "will have collected", "had collected"], 1, "“Every morning” and “feeds” show a habit in the present tense. “Collects” matches.", "Feeds is present."),
      Q("Which verb best completes: “Tomorrow, the class ___ the science museum.”", ["visited", "visits", "will visit", "had visited"], 2, "“Tomorrow” points to the future, so use the future tense: will visit.", "When is tomorrow?"),
      Q("Which sentence has NO tense shift error?", ["He kicks the ball and it flew over the fence.", "He kicked the ball, and it flew over the fence.", "He kicked the ball, and it flies over the fence.", "He kick the ball, and it flew over the fence."], 1, "“Kicked” and “flew” are both past tense. The other choices mix present and past, or use the wrong form “kick.”", "Both verbs should be from the same time."),
      T("Fix the verb in caps so the tense matches: “When the bell rang, the students GRAB their backpacks.”", ["grabbed"], "“Rang” is past tense, and grabbing happened at the same time. So “grab” should be the past tense “grabbed.”", "The bell rang in the past."),
      T("Fix the verb in caps: “Tomorrow we will pack a lunch and HIKED up the trail.”", ["hike"], "“Will pack” is future, so the second action should also be future: “will pack ... and hike.” The word “will” carries over to both verbs.", "Will pack and will ___."),
      T("Fix the verb in caps: “Each summer my cousins come to visit, and we SWAM in the lake.”", ["swim"], "“Each summer” and “come” describe a present habit. To match, use the present tense “swim.”", "This happens every summer."),
      Q("Which shows the correct order of two past events?", ["After she has finished dinner, she read.", "After she had finished dinner, she read.", "After she will finish dinner, she read.", "After she finishes dinner, she read."], 1, "Dinner came first and reading came second, both in the past. The past perfect “had finished” marks the earlier event, and “read” is simple past.", "Which event came first?"),
      Q("Read: “Tom runs to the window. He saw a deer. It is eating apples.” Which verb shifts incorrectly?", ["runs", "saw", "is eating", "None"], 1, "The story is told in the present (runs, is eating). “Saw” jumps to the past for no reason; it should be “sees.”", "Two verbs are present. One is not."),
      Q("Choose the correct verb: “If it snows tomorrow, school ___ closed.”", ["was", "will be", "had been", "has been"], 1, "This sentence shows a condition about the future. “If it snows” uses present tense, and the result uses future tense: will be. This is a normal, correct pattern.", "What will happen if it snows?"),
      Q("Which paragraph keeps one tense?", ["I walk to the pond. I saw a frog. It jumps away.", "I walked to the pond. I saw a frog. It jumped away.", "I walked to the pond. I see a frog. It jumped away.", "I will walk to the pond. I saw a frog. It jumps away."], 1, "All three verbs (walked, saw, jumped) are past tense. The other paragraphs switch tenses without a reason.", "Check every verb."),
      T("Fix the verb in caps: “Grandma smiled and HANDS me a warm cookie.”", ["handed"], "“Smiled” is past tense, and both actions happened together. “Hands” should be “handed.”", "Match smiled."),
      Q("Which sentence correctly uses tense to show a condition?", ["If you study, you passed.", "If you study, you will pass.", "If you studied, you will passed.", "If you will study, you passing."], 1, "For a likely future result, use present tense after “if” and future tense in the result: “If you study, you will pass.”", "If + present, then will + verb."),
      Q("What is wrong with: “The knight rode to the castle. He knocks on the gate.”", ["Nothing is wrong.", "The tense shifts from past to present.", "The tense shifts from future to past.", "Knight should be plural."], 1, "“Rode” is past tense and “knocks” is present. Nothing signals a new time, so “knocks” should be “knocked.”", "Compare the two verbs."),
      T("Fix the verb in caps: “Right now my brother is sleeping, and the house WAS quiet.”", ["is"], "“Right now” and “is sleeping” are present. The house being quiet is also happening now, so use “is.”", "Right now = present."),
      Q("Which time word would make this shift correct? “I ___ hated broccoli, but now I love it.”", ["once", "tomorrow", "soon", "always will"], 0, "“Once” means at some time in the past, so “once hated” (past) and “now love” (present) makes a sensible change in time.", "You need a past time word."),
      Q("Choose the verb that fits: “By the time the sun rose, the baker ___ fifty loaves.”", ["bakes", "had baked", "will bake", "has baked"], 1, "The sun rose in the past, and the baking was done before that. Use the past perfect: had baked.", "Baking finished before sunrise."),
      Q("Which sentence is written all in the future tense?", ["We will plant seeds and water them daily.", "We planted seeds and will water them daily.", "We plant seeds and watered them daily.", "We will plant seeds and watered them daily."], 0, "“Will plant” and “(will) water” are both future. The word “will” carries over to the second verb, so nothing shifts.", "Look for will on both actions.")
    ]
  });

  // ---------------------------------------------------------------- Week 23
  C.unit('grammar', 23, {
    title: 'Correlative conjunctions',
    standard: 'ELAGSE5L1e',
    learn: [
      { h: 'Conjunctions that come in pairs', p: "Correlative conjunctions are partners that work together: either/or, neither/nor, both/and, not only/but also, whether/or. “Either we walk or we ride bikes.” “Neither the cat nor the dog was hungry.” Always use the correct partner: either goes with or, and neither goes with nor." },
      { h: 'Keep the parts balanced', p: "The words after each partner should match in form. “She is not only kind but also funny” (two adjectives). Not balanced: “She not only is kind but also funny.” Move the first partner so both sides match." },
      { h: 'Verb agreement with or/nor', p: "With either/or and neither/nor, the verb agrees with the subject closer to it. “Neither my sisters nor my brother is home.” “Either Dad or the boys are cooking.” With both/and, the subject is plural: “Both Ava and Lily are here.”" }
    ],
    demo: {
      q: "Fix: “Neither the teacher or the students knew the answer.”",
      steps: [
        "Step 1: Find the first partner: neither.",
        "Step 2: Neither always pairs with nor, not or.",
        "Step 3: Check the verb. “Knew” is past tense, so it works with any subject."
      ],
      a: "Neither the teacher nor the students knew the answer."
    },
    items: [
      Q("Which pair is a correlative conjunction?", ["and/but", "either/or", "because/so", "if/when"], 1, "Either/or is a matched pair that work together in one sentence. The other choices are separate conjunctions, not set pairs.", "Which two words always travel together?"),
      Q("Choose the partner: “Neither the milk ___ the juice was cold.”", ["or", "and", "nor", "but"], 2, "Neither always pairs with nor. “Neither ... or” is a common mistake.", "N goes with N."),
      Q("Choose the partner: “You can have either a banana ___ an apple.”", ["nor", "or", "and", "also"], 1, "Either always pairs with or. It shows a choice between two things.", "Either goes with ___."),
      Q("Choose the partner: “Both the parrot ___ the hamster need fresh water.”", ["and", "or", "nor", "but also"], 0, "Both always pairs with and. It joins two things that are both true.", "Both ... ___."),
      Q("Complete: “Jonah is not only a fast runner ___ a strong swimmer.”", ["or also", "but also", "and so", "nor"], 1, "Not only pairs with but also. Together they add a second, often surprising, fact.", "Not only ... ___ ___."),
      Q("Which sentence uses a correlative conjunction correctly?", ["Either we leave now nor we miss the bus.", "Neither Sam or Kai brought a lunch.", "Both Maria and Luis sang in the choir.", "Not only did it rain but snowed."], 2, "Both/and is used correctly. The others mix up partners (either/nor, neither/or) or leave out a partner (not only ... but also).", "Check that each partner matches."),
      Q("Choose the verb: “Neither the puppies nor the kitten ___ asleep.”", ["are", "is", "were", "be"], 1, "With neither/nor, the verb agrees with the closer subject. “Kitten” is singular, so use “is.”", "Look at the subject nearest the verb."),
      Q("Choose the verb: “Either my aunt or my cousins ___ bringing dessert.”", ["is", "was", "are", "has"], 2, "The subject closest to the verb is “cousins,” which is plural. So the verb is “are.”", "Which subject is nearest the blank?"),
      Q("Which sentence is better balanced?", ["She not only plays piano but also the violin.", "She plays not only piano but also violin.", "Not only she plays piano but also violin.", "She plays piano not only but also violin."], 1, "Balanced means the same kind of word follows each partner. Here “not only piano” and “but also violin” both name an instrument.", "What word comes right after each partner?"),
      T("Type the missing word: “Whether it rains ___ shines, the game will go on.”", ["or"], "Whether pairs with or. “Whether ... or” shows that the result is the same in either case.", "Whether ... ___."),
      T("Type the missing word: “___ my mom nor my dad likes spicy food.”", ["Neither"], "Nor pairs with neither. The sentence says that both parents do not like spicy food.", "It begins with N."),
      T("Type the missing word: “___ the beach and the mountains are fun in summer.”", ["Both"], "The “and” in the middle tells you the partner is “both.” “Both ... and” shows that two things share the same idea.", "Two things are fun."),
      Q("Fix the error: “Not only did we see deer, but we also seen a fox.”", ["seen → saw", "Not only → Neither", "but → and", "No error"], 0, "The correlative pair is used correctly, but “seen” needs a helping verb. The simple past is “saw”: “but we also saw a fox.”", "Check the last verb."),
      Q("What does “neither ... nor” mean in “Neither Ella nor Zoe was late”?", ["Both girls were late.", "Only Ella was late.", "Not Ella and not Zoe; no one was late.", "One of them was late."], 2, "Neither/nor makes the statement negative for both people. So neither girl was late.", "Neither = not this one; nor = not that one."),
      Q("Which sentence offers exactly two choices?", ["Both pizza and tacos sound good.", "Either pizza or tacos will be dinner.", "Not only pizza but also tacos are hot.", "Neither pizza nor tacos are left."], 1, "Either/or presents a choice between two options. Both/and and not only/but also add things together; neither/nor rules both out.", "Which pair means “one of the two”?"),
      Q("Choose the correct sentence.", ["Both Ty and his dad is fishing.", "Both Ty and his dad are fishing.", "Both Ty or his dad are fishing.", "Both Ty nor his dad are fishing."], 1, "Both ... and makes a plural subject, two people, so the verb is “are.” Both never pairs with or or nor.", "Two people = plural verb."),
      T("Combine with either/or and type only the first missing word: “___ you clean your room or you cannot go outside.”", ["Either"], "Or partners with either. “Either ... or” shows only two possible outcomes.", "Partner of or."),
      Q("Which sentence uses not only/but also correctly?", ["Not only is the cake sweet but also moist.", "The cake is not only sweet but also moist.", "The cake not only sweet but also is moist.", "Not only the cake is sweet, moist also."], 1, "“Not only sweet” and “but also moist” both end with an adjective, so the sentence is balanced and uses both partners correctly.", "Look for matching describing words."),
      Q("Which word pairs with “whether”?", ["nor", "and", "or", "so"], 2, "Whether pairs with or: “Whether you win or lose, play fair.”", "It also partners with either."),
      Q("Choose the verb: “Neither the coach nor the players ___ happy with the score.”", ["was", "is", "were", "has been"], 2, "With neither/nor, match the verb to the closer subject. “Players” is plural, so use “were.”", "Look at the word next to the verb.")
    ]
  });

  // ---------------------------------------------------------------- Week 24
  C.unit('grammar', 24, {
    title: 'Commas: introductions, yes/no, tag questions, direct address',
    standard: 'ELAGSE5L2b',
    learn: [
      { h: 'After an introductory element', p: "Put a comma after a word, phrase, or clause that comes before the main part of a sentence. “Finally, the rain stopped.” “After the long game, we ate pizza.” “When the bell rang, everyone cheered.” The comma tells the reader where the main sentence begins." },
      { h: 'Yes, no, and tag questions', p: "Use a comma to set off yes and no: “Yes, I finished.” “No, thank you.” A tag question is a short question added to the end of a statement. Put a comma before it: “It's cold today, isn't it?” “You fed the fish, didn't you?”" },
      { h: 'Direct address', p: "When you speak directly to someone by name, set the name off with commas. “Ava, please close the door.” “Thank you, Mom.” “I think, Grandpa, that you are right.” If the name is in the middle, it needs a comma on both sides." }
    ],
    demo: {
      q: "Add commas: “Yes Coach we practiced our drills didn't we?”",
      steps: [
        "Step 1: “Yes” starts the sentence, so a comma goes after it: Yes,",
        "Step 2: “Coach” is the person being spoken to (direct address), so set it off: Yes, Coach,",
        "Step 3: “didn't we?” is a tag question, so a comma goes before it."
      ],
      a: "Yes, Coach, we practiced our drills, didn't we?"
    },
    items: [
      Q("Which sentence is punctuated correctly?", ["Yes I would like more soup.", "Yes, I would like more soup.", "Yes I, would like more soup.", "Yes I would, like more soup."], 1, "Yes at the start of a sentence is followed by a comma. That small pause separates the answer word from the rest of the sentence.", "Where would you pause?"),
      Q("Which sentence uses commas for direct address correctly?", ["Liam can you help me?", "Liam, can you help me?", "Liam can, you help me?", "Liam can you, help me?"], 1, "Liam is the person being spoken to. A name in direct address is set off with a comma.", "Who is being talked to?"),
      Q("Which sentence uses a comma before a tag question correctly?", ["You packed the tent didn't you?", "You packed, the tent didn't you?", "You packed the tent, didn't you?", "You, packed the tent didn't you?"], 2, "“Didn't you?” is a tag question added to the end of a statement. A comma goes right before it.", "Find the little question at the end."),
      Q("Which sentence needs a comma after an introductory phrase?", ["We swam all afternoon.", "After lunch we went swimming.", "The lake was cold.", "I like to swim."], 1, "“After lunch” is an introductory phrase that comes before the main sentence. It should be “After lunch, we went swimming.”", "Which one starts with a lead-in phrase?"),
      Q("Where do the commas go? “I hope Grandma that you can visit soon.”", ["I hope, Grandma that you can visit soon.", "I hope Grandma, that you can visit soon.", "I hope, Grandma, that you can visit soon.", "I, hope Grandma that you can visit soon."], 2, "Grandma is being spoken to in the middle of the sentence. A name in the middle needs commas on both sides.", "A name in the middle gets two commas."),
      Q("Which sentence is correct?", ["No thank you, I am full.", "No, thank you. I am full.", "No thank, you I am full.", "No thank you I am, full."], 1, "Set off “No” with a comma: “No, thank you.” Then “I am full” is its own sentence.", "No is followed by a comma."),
      Q("Which sentence does NOT need a comma for direct address?", ["Mom please pass the salt.", "Thanks Dad.", "My mom passed the salt.", "Come here Rex."], 2, "In “My mom passed the salt,” we are talking ABOUT Mom, not TO her. Direct address commas are only for the person being spoken to.", "Who is being spoken TO?"),
      Q("Which sentence uses a comma after an introductory word correctly?", ["Unfortunately the bus was late.", "Unfortunately, the bus was late.", "Unfortunately the, bus was late.", "Unfortunately the bus, was late."], 1, "“Unfortunately” is an introductory word. A comma after it shows where the main sentence starts.", "Pause after the first word."),
      Q("Which sentence uses commas correctly after an introductory clause?", ["When the alarm rang, we lined up outside.", "When, the alarm rang we lined up outside.", "When the alarm, rang we lined up outside.", "When the alarm rang we lined, up outside."], 0, "“When the alarm rang” is an introductory clause; it has a subject and verb but cannot stand alone. Put the comma right after it.", "Find the end of the “when” part."),
      T("Type the word that comes right before the missing comma: “Well I think we should go home.”", ["Well"], "“Well” is an introductory word here, so the comma goes after it: “Well, I think we should go home.”", "Where is the first pause?"),
      T("Type the word that comes right before the missing comma: “Your dog is friendly isn't he?”", ["friendly"], "“Isn't he?” is a tag question, so the comma goes before it: “Your dog is friendly, isn't he?”", "The comma goes before the tag."),
      T("Type the name that should be set off by commas: “Can you hand me the scissors Noah?”", ["Noah"], "Noah is being spoken to, so the sentence should read “Can you hand me the scissors, Noah?” A name at the end gets a comma before it.", "Who is being asked?"),
      Q("How many commas does this need? “Yes Mr. Lee I read the chapter.”", ["0", "1", "2", "3"], 2, "One comma after “Yes” and one after “Mr. Lee” (direct address): “Yes, Mr. Lee, I read the chapter.”", "Count the yes and the name."),
      Q("Which sentence is punctuated correctly?", ["In the morning, we feed the goats.", "In the morning we, feed the goats.", "In, the morning we feed the goats.", "In the morning we feed, the goats."], 0, "“In the morning” is an introductory prepositional phrase. The comma goes right after it.", "Where does the main sentence start?"),
      Q("Why is there a comma in “Let's eat, Grandpa”?", ["To separate items in a list", "To set off a name in direct address", "To join two sentences", "Before a tag question"], 1, "The speaker is talking to Grandpa. Without the comma, “Let's eat Grandpa” sounds like Grandpa is the meal! The comma marks direct address.", "Who is being spoken to?"),
      Q("Which sentence has a tag question?", ["Is it raining?", "It's raining, isn't it?", "Why is it raining?", "Rain is wet."], 1, "A tag question is a short question tagged onto the end of a statement. “It's raining” is a statement, and “isn't it?” is the tag.", "Look for a statement plus a tiny question."),
      Q("Which sentence is correct?", ["Sadie, did you finish your chores?", "Sadie did, you finish your chores?", "Sadie did you finish, your chores?", "Sadie did you finish your chores?"], 0, "Sadie is being spoken to at the start of the sentence, so a comma comes right after her name.", "Set off the name."),
      T("Type the word that comes right before the missing comma: “Oh no it's raining again!”", ["no"], "“Oh no” is an introductory interjection, so a comma follows it: “Oh no, it's raining again!”", "Pause after the feeling words."),
      Q("Which sentence uses commas correctly?", ["No Ellie, the store is closed.", "No, Ellie, the store is closed.", "No Ellie the store, is closed.", "No, Ellie the store is closed."], 1, "“No” needs a comma after it, and “Ellie” is in direct address, so she needs a comma on both sides.", "Two jobs, two commas."),
      Q("Which choice punctuates the tag question correctly? “We can bring snacks right”", ["We can bring snacks, right?", "We can, bring snacks right?", "We, can bring snacks right?", "We can bring, snacks right?"], 0, "“Right?” works like a tag question added to a statement. Put a comma before it and a question mark at the end.", "Where does the statement end?")
    ]
  });

  // ---------------------------------------------------------------- Week 25
  C.unit('grammar', 25, {
    title: 'Titles: italics or quotation marks',
    standard: 'ELAGSE5L2d',
    learn: [
      { h: 'Big works: italics or underline', p: "Titles of long, whole works are written in italics when you type and underlined when you write by hand. These include books, movies, magazines, newspapers, TV series, plays, music albums, and video games. Example: I read Charlotte's Web (underlined on paper)." },
      { h: 'Small parts: quotation marks', p: "Titles of shorter works, or parts of a bigger work, go in quotation marks. These include short stories, poems, songs, chapters, articles, and single TV episodes. Example: My favorite chapter is “The Big Storm.”" },
      { h: 'A helpful test', p: "Ask: Could this sit on a shelf or be a whole show by itself? If yes, use italics or underlining. Is it a piece inside something bigger? Use quotation marks. Also capitalize the first, last, and important words in every title." }
    ],
    demo: {
      q: "How should these be written? A poem called The Tall Oak in a magazine called Kids Nature.",
      steps: [
        "Step 1: The poem is a short work that appears inside the magazine. Short works get quotation marks: “The Tall Oak.”",
        "Step 2: The magazine is a whole, long work. Long works get italics, or underlining by hand.",
        "Step 3: Put it together: I read “The Tall Oak” in Kids Nature (with Kids Nature in italics)."
      ],
      a: "Poem in quotation marks; magazine in italics or underlined."
    },
    items: [
      Q("How should a book title be written by hand?", ["In quotation marks", "Underlined", "In all capital letters", "With no special marks"], 1, "A book is a long, whole work. By hand you underline it; when typing you use italics.", "Books are big works."),
      Q("How should a poem title be written?", ["Underlined", "In italics", "In quotation marks", "In bold"], 2, "A poem is a short work, so its title goes in quotation marks.", "Is a poem big or small?"),
      Q("Which one should be in quotation marks?", ["a movie", "a newspaper", "a song", "a TV series"], 2, "A song is a short work, often one part of a whole album. Short works go in quotation marks. Movies, newspapers, and TV series get italics.", "Which is the shortest piece?"),
      Q("Which one should be italicized or underlined?", ["a magazine", "a magazine article", "a chapter", "a short story"], 0, "A magazine is the whole, long work. An article inside it would go in quotation marks.", "Which one holds the others?"),
      Q("Which sentence is written correctly by hand? (_ _ means underlined)", ["I read the chapter _Lost in the Woods_ last night.", "I read the chapter “Lost in the Woods” last night.", "I read the chapter Lost in the Woods last night.", "I read the chapter 'LOST IN THE WOODS' last night."], 1, "A chapter is a part of a book, so its title goes in quotation marks.", "A chapter is a part of a book."),
      Q("A newspaper called The Daily Gazette has an article called Town Fair Opens. Which is correct?", ["Both in quotation marks", "Both underlined", "Newspaper underlined; article in quotation marks", "Article underlined; newspaper in quotation marks"], 2, "The newspaper is the big, whole work (underline or italics). The article is a short part inside it (quotation marks).", "Big holds small."),
      Q("Which should be in italics?", ["a short story", "an episode of a show", "a full-length movie", "a poem"], 2, "A full-length movie is a whole, long work, so its title is in italics (or underlined by hand).", "Which is a whole thing by itself?"),
      Q("Which words in the title “the wind in the willows” should be capitalized?", ["The, Wind, Willows", "every word", "only The", "Wind and Willows only"], 0, "Capitalize the first word, the last word, and important words. Small words like in and the are lowercase in the middle of a title.", "Small middle words stay lowercase."),
      T("Type ONE word: should a short story title be in italics or quotation marks? (Type italics or quotation.)", ["quotation", "quotation marks", "quotes"], "A short story is a short work, so its title goes in quotation marks. Long books get italics.", "Short works..."),
      T("Type ONE word: should a play title be in italics or quotation marks? (Type italics or quotation.)", ["italics", "italic", "underline", "underlined"], "A play is a whole work performed on its own, so its title is italicized, or underlined by hand.", "A play is a whole show."),
      T("Type ONE word: should a TV series name be in italics or quotation marks? (Type italics or quotation.)", ["italics", "italic", "underline", "underlined"], "A TV series is the whole show, so its name is italicized. A single episode of that series would go in quotation marks.", "Series = whole; episode = part."),
      Q("An album named Sunny Days has a song named Blue Skies. Which is correct?", ["“Sunny Days” and Blue Skies underlined", "Sunny Days underlined and “Blue Skies”", "Both in quotation marks", "Both underlined"], 1, "The album is the whole work (underline or italics). The song is one part of it (quotation marks).", "Album = whole, song = part."),
      Q("Which item is NOT treated the same as the others?", ["a book", "a magazine", "an article", "a movie"], 2, "An article is a short work and goes in quotation marks. Books, magazines, and movies are whole works in italics.", "Which one is small?"),
      Q("Which sentence is correct when typing?", ["We sang “America the Beautiful” at the fair.", "We sang America the Beautiful (in italics) at the fair.", "We sang AMERICA THE BEAUTIFUL at the fair.", "We sang 'america the beautiful' at the fair."], 0, "A song title goes in quotation marks, with the important words capitalized.", "Songs are short works."),
      Q("Mia wrote a poem titled “Rain on the Roof.” Why is it in quotation marks?", ["It is a long book.", "Poems are short works.", "It is a newspaper.", "All titles use quotation marks."], 1, "Poems are short works, so their titles go in quotation marks. Not all titles do; long works use italics.", "Size of the work matters."),
      Q("Which should be underlined when handwritten?", ["the encyclopedia set", "an encyclopedia entry", "a chapter in it", "an article in it"], 0, "The whole encyclopedia set is the large work. Entries, chapters, and articles inside it go in quotation marks.", "The biggest one."),
      Q("A TV series called Ocean Explorers has an episode called Into the Deep. Which is correct?", ["Ocean Explorers in italics; “Into the Deep”", "“Ocean Explorers”; Into the Deep in italics", "Both in italics", "Both in quotation marks"], 0, "The series is the whole work (italics). One episode is a part of it (quotation marks).", "Series holds episodes."),
      T("How many words in the title “A Walk in the Park” should be capitalized? Type the number.", ["3", "three"], "Capitalize A (first word), Walk, and Park. The small middle words in and the stay lowercase. That makes 3.", "First word, last word, important words."),
      Q("Which sentence is written correctly by hand?", ["My class read the novel _Hatchet_ (underlined).", "My class read the novel “Hatchet.”", "My class read the novel 'Hatchet.'", "My class read the novel HATCHET."], 0, "A novel is a book, a long work, so by hand it is underlined. Typing would use italics instead.", "Novels are books."),
      Q("Which one goes in quotation marks?", ["a video game", "a newspaper", "a newspaper headline article", "a magazine"], 2, "A single article in a newspaper is a short part of a bigger work, so its title goes in quotation marks.", "Which is a part?")
    ]
  });

  // ---------------------------------------------------------------- Week 26
  C.unit('grammar', 26, {
    title: 'Context clues',
    standard: 'ELAGSE5L4a',
    learn: [
      { h: 'Use the words around it', p: "When you meet an unknown word, look at the words and sentences around it for clues. Four common kinds: DEFINITION (the sentence tells the meaning, often after a comma, dash, or the words “which means”), EXAMPLE (words like such as or including list examples), ANTONYM (words like but, unlike, or however show the opposite), and CAUSE/EFFECT (because, so, or as a result show what led to what)." },
      { h: 'Try it out', p: "“The hike was arduous, but the walk home was easy.” The word but signals an opposite, so arduous must mean hard. After guessing, put your meaning in place of the word and reread. If it makes sense, your guess is probably right." }
    ],
    demo: {
      q: "What does “parched” mean? “After hours in the hot sun with no water, the hikers were parched.”",
      steps: [
        "Step 1: Look for clues: hot sun, hours, no water.",
        "Step 2: This is a cause/effect clue. The heat and lack of water caused the hikers to feel a certain way.",
        "Step 3: Try a meaning: “the hikers were very thirsty.” It makes sense."
      ],
      a: "Parched means very thirsty or very dry."
    },
    items: [
      Q("“The hare was swift, but the turtle was slow.” What does swift mean?", ["tired", "fast", "small", "clever"], 1, "The word but signals an opposite (antonym clue). Swift is the opposite of slow, so it means fast.", "What is the opposite of slow?"),
      Q("“A botanist, a scientist who studies plants, visited our garden.” What is a botanist?", ["a person who fixes cars", "a scientist who studies plants", "a gardener's helper", "a plant seller"], 1, "This is a definition clue. The meaning is given right after the word, set off by commas.", "Look between the commas."),
      Q("“Grandma loves citrus fruits such as oranges, lemons, and limes.” What are citrus fruits?", ["sweet berries", "juicy fruits like oranges and lemons", "fruits with large pits", "dried fruits"], 1, "“Such as” introduces examples. Oranges, lemons, and limes are all citrus fruits, so citrus fruits are juicy fruits in that family.", "Look after “such as.”"),
      Q("“Because the bridge was unstable, the town closed it to traffic.” What does unstable mean?", ["new and shiny", "not steady or safe", "very wide", "painted"], 1, "This is a cause/effect clue. The town closed the bridge because of how it was, so unstable must mean not steady or safe.", "Why would a bridge be closed?"),
      Q("What kind of clue is in this sentence? “Unlike her timid brother, Rosa was bold.”", ["Definition", "Example", "Antonym", "Cause and effect"], 2, "“Unlike” signals an opposite. Bold is the opposite of timid, so this is an antonym clue.", "What does unlike signal?"),
      Q("“The room was immaculate—spotless and perfectly tidy.” What does immaculate mean?", ["messy", "very clean", "very large", "dark"], 1, "The dash introduces a definition: spotless and perfectly tidy. So immaculate means very clean.", "Look after the dash."),
      Q("“The puppy was so lethargic that it slept all day and would not play.” What does lethargic mean?", ["full of energy", "sleepy and slow", "hungry", "noisy"], 1, "A puppy that sleeps all day and will not play has very little energy. Lethargic means sleepy and sluggish.", "What does the puppy do all day?"),
      Q("“Amphibians, including frogs, toads, and salamanders, live part of their lives in water.” Which kind of clue helps here?", ["Antonym", "Example", "Cause and effect", "No clue"], 1, "“Including” lists examples of amphibians. Example clues help you picture what the word means.", "What word comes right after amphibians?"),
      Q("“The soup was bland, not spicy or salty at all.” What does bland mean?", ["full of flavor", "without much flavor", "very hot", "cold"], 1, "The clue “not spicy or salty at all” explains that the soup had little flavor. Bland means mild or tasteless.", "What was the soup NOT?"),
      Q("“The crowd was jubilant; everyone cheered and hugged after the win.” What does jubilant mean?", ["very joyful", "angry", "bored", "frightened"], 0, "Cheering and hugging after a win show great happiness. Jubilant means very joyful.", "How do people act when they win?"),
      T("Type a one-word meaning: “Most of the class was present, but two students were absent.” Absent means ___.", ["away", "missing", "gone", "not here", "not present", "out"], "But signals an opposite. Absent is the opposite of present, so it means away or not there.", "Opposite of present."),
      T("Type a one-word meaning: “The giant tortoise is enormous; it can weigh more than a grown man.” Enormous means ___.", ["huge", "big", "giant", "large", "gigantic", "massive"], "Weighing more than a grown man tells us the tortoise is very big. Enormous means huge.", "How big is it?"),
      Q("“Since the rope was frayed, it snapped when we pulled.” What does frayed mean?", ["brand new", "worn and coming apart", "very long", "tied in a knot"], 1, "Cause/effect: the rope snapped because it was frayed. A rope that is worn and coming apart would snap.", "Why did the rope snap?"),
      Q("“Ella is usually talkative, but today she was reticent.” What does reticent mean?", ["chatty", "quiet", "silly", "sick"], 1, "But shows contrast with talkative. So reticent means quiet or not wanting to speak.", "Opposite of talkative."),
      Q("Which sentence has a DEFINITION clue for the word “nocturnal”?", ["Owls are nocturnal.", "Owls are nocturnal, which means they are active at night.", "Owls are nocturnal, like bats.", "Owls are nocturnal, so I like them."], 1, "“Which means” gives the exact meaning of the word. That is a definition clue.", "Which one tells the meaning directly?"),
      Q("“The old map was so fragile that it tore when I unfolded it.” What does fragile mean?", ["easily broken", "very colorful", "heavy", "important"], 0, "Cause/effect: the map tore just from unfolding. Fragile means easily broken or damaged.", "What happened when it was unfolded?"),
      Q("“Rodents such as mice, squirrels, and beavers have strong front teeth.” Which animal is most likely a rodent?", ["a robin", "a rat", "a snake", "a trout"], 1, "The examples (mice, squirrels, beavers) are small, furry gnawing animals. A rat fits that group. Robins, snakes, and trout do not.", "Which is like a mouse?"),
      T("Type the signal word that shows an antonym clue: “The first test was simple, however the second was complex.”", ["however"], "“However” signals a contrast, so complex means the opposite of simple: hard or complicated.", "Which word shows a turn?"),
      Q("“The hikers were famished after missing lunch, so they ate everything.” What does famished mean?", ["very hungry", "very tired", "very cold", "very lost"], 0, "Missing lunch and then eating everything shows they were very hungry.", "What happens after you skip lunch?"),
      Q("“The garden was barren—not one plant grew there.” What does barren mean?", ["full of flowers", "unable to grow anything", "wet and muddy", "newly planted"], 1, "The dash gives a definition clue: not one plant grew there. Barren means empty, unable to grow plants.", "Read after the dash.")
    ]
  });

  // ---------------------------------------------------------------- Week 27
  C.unit('grammar', 27, {
    title: 'Fixing fragments and run-ons',
    standard: 'ELAGSE5L1',
    learn: [
      { h: 'Fragments', p: "A fragment is missing a subject, a verb, or a complete thought. Watch for pieces that start with words like because, when, after, if, or although: “When the movie ended.” Fix it by joining it to a nearby sentence (“When the movie ended, we went home.”) or adding the missing part." },
      { h: 'Run-ons and comma splices', p: "A run-on puts two complete sentences together with nothing between them: “The wind blew the door slammed.” A comma splice uses only a comma: “The wind blew, the door slammed.” Both are errors." },
      { h: 'Four fixes for run-ons', p: "1) Make two sentences: “The wind blew. The door slammed.” 2) Add a comma and a FANBOYS word: “The wind blew, and the door slammed.” 3) Use a subordinating word: “When the wind blew, the door slammed.” 4) Use a semicolon between two closely related sentences: “The wind blew; the door slammed.”" }
    ],
    demo: {
      q: "Fix: “I wanted to bake cookies, we had no eggs.”",
      steps: [
        "Step 1: Check each side of the comma. “I wanted to bake cookies” and “we had no eggs” are both complete sentences.",
        "Step 2: Two sentences joined by only a comma is a comma splice.",
        "Step 3: The ideas contrast, so add the conjunction but after the comma."
      ],
      a: "I wanted to bake cookies, but we had no eggs."
    },
    items: [
      Q("What is this? “Although we practiced every day.”", ["Complete sentence", "Fragment", "Run-on", "Comma splice"], 1, "“Although” makes us wait for the rest of the idea. What happened even though we practiced? The thought is incomplete, so it is a fragment.", "Does it leave you waiting?"),
      Q("What is this? “The sun set the sky turned orange.”", ["Complete sentence", "Fragment", "Run-on", "Question"], 2, "“The sun set” and “the sky turned orange” are two complete sentences smashed together with no punctuation. That is a run-on.", "How many complete thoughts?"),
      Q("What is this? “My cat is fluffy, she sleeps on my bed.”", ["Fragment", "Comma splice", "Complete sentence", "Interjection"], 1, "Two complete sentences joined only by a comma make a comma splice. A comma alone is not strong enough to join them.", "Check both sides of the comma."),
      Q("Which is the best fix for: “We went to the zoo we saw a giraffe.”", ["We went to the zoo, we saw a giraffe.", "We went to the zoo, and we saw a giraffe.", "We went to the zoo and, we saw a giraffe.", "We went. To the zoo we saw a giraffe."], 1, "A comma plus the conjunction “and” correctly joins the two sentences. A comma alone would still be a comma splice.", "Comma + FANBOYS."),
      Q("Which choice fixes the fragment? “After the game ended.”", ["After the game ended, we shook hands.", "After the game ended.", "After. The game ended.", "The game after ended."], 0, "Joining the fragment to a main clause, “we shook hands,” completes the thought.", "Add what happened next."),
      Q("Which is a complete sentence?", ["Running through the sprinkler.", "Because the water was cold.", "The children ran through the sprinkler.", "The cold water and the green grass."], 2, "It has a subject (“The children”) and a verb (“ran”) and a complete thought. The others are missing a subject, a verb, or a finished idea.", "Find who did what."),
      Q("Which sentence uses a semicolon correctly to fix a run-on?", ["The bell rang; we went to lunch.", "The bell; rang we went to lunch.", "The bell rang we; went to lunch.", "The; bell rang we went to lunch."], 0, "A semicolon can join two closely related complete sentences. Each side, “The bell rang” and “we went to lunch,” is complete.", "Both sides must be complete."),
      Q("Which is a fragment?", ["Birds sing.", "The tall oak tree in our yard.", "We planted tomatoes.", "It rained."], 1, "“The tall oak tree in our yard” has a subject but no verb telling what the tree does or is. It is a fragment.", "Which one has no verb?"),
      Q("Fix this comma splice using a subordinating conjunction: “It was late, we went to bed.”", ["Because it was late, we went to bed.", "It was late, so, we went to bed.", "It was late we went to bed.", "It was, late we went to bed."], 0, "“Because” turns the first part into a dependent clause, so the sentence is now one complete thought with a comma after the introductory clause.", "Which choice adds a reason word?"),
      T("Type the subordinating word that makes this a fragment: “If you finish your chores.”", ["If"], "“If” starts a condition that needs a result. Without “then what happens,” the thought is not complete.", "It is the first word."),
      T("Type the FANBOYS word that best fixes: “I called Lily, ___ she did not answer.”", ["but", "yet"], "The ideas contrast: I called, but she did not answer. “But” (or “yet”) joins two sentences with a contrast.", "Shows a contrast."),
      T("Type the FANBOYS word that best fixes: “The road was icy, ___ we drove slowly.”", ["so"], "The icy road caused us to drive slowly. “So” shows a result.", "Shows a result."),
      Q("Which group of words is a run-on?", ["I love reading I read every night.", "I love reading, and I read every night.", "I love reading. I read every night.", "Because I love reading, I read every night."], 0, "“I love reading” and “I read every night” are joined with no punctuation or conjunction. The other choices show correct fixes.", "Which one has no break between thoughts?"),
      Q("Which fix keeps the meaning best? “We were hungry we ate an early dinner.”", ["We were hungry, so we ate an early dinner.", "We were hungry, but we ate an early dinner.", "We were hungry, or we ate an early dinner.", "We were hungry, nor we ate an early dinner."], 0, "Being hungry caused the early dinner, so “so” (result) keeps the meaning. “But” would wrongly suggest a contrast.", "Cause and result."),
      Q("Which is a fragment?", ["Ate breakfast quickly.", "Mom ate breakfast quickly.", "We ate breakfast.", "Did you eat breakfast?"], 0, "“Ate breakfast quickly” has no subject. Who ate? Add a subject to fix it.", "Who did it?"),
      Q("Read: “We hiked to the top. Because the view was amazing.” How should it be fixed?", ["We hiked to the top because the view was amazing.", "We hiked. To the top because the view was amazing.", "We hiked to the top, the view was amazing because.", "Leave it as is."], 0, "“Because the view was amazing” is a fragment. Join it to the sentence before it to complete the thought.", "Join the pieces."),
      Q("Which sentence is a comma splice?", ["When it snowed, we built a fort.", "It snowed, we built a fort.", "It snowed, so we built a fort.", "It snowed. We built a fort."], 1, "“It snowed” and “we built a fort” are both complete sentences joined by just a comma. That is a comma splice.", "Only a comma between two sentences."),
      T("How many complete sentences are in this run-on? Type the number. “The dog barked the baby woke up Mom sighed.”", ["3", "three"], "There are three: “The dog barked.” “The baby woke up.” “Mom sighed.” Each has a subject and a verb.", "Count subject-verb pairs."),
      Q("Which is the best way to fix this fragment? “Such as apples, pears, and plums.”", ["Such as apples, pears, and plums!", "We grow fruit such as apples, pears, and plums.", "Such as apples. Pears and plums.", "Apples such as, pears, and plums."], 1, "The fragment lists examples but has no subject or verb. Attaching it to “We grow fruit” makes a complete sentence.", "Examples of what?"),
      Q("Which sentence is correct?", ["The puppy wagged its tail it was happy.", "The puppy wagged its tail, it was happy.", "The puppy wagged its tail because it was happy.", "Because the puppy wagged its tail."], 2, "“Because it was happy” is joined correctly to a complete main clause. The others are a run-on, a comma splice, and a fragment.", "Only one is error-free.")
    ]
  });

  // ---------------------------------------------------------------- Week 28
  C.unit('grammar', 28, {
    title: 'Pronoun–antecedent agreement; vague pronouns',
    standard: 'ELAGSE5L1',
    learn: [
      { h: 'Pronouns must match', p: "An antecedent is the noun a pronoun stands for. The pronoun must match it in number (one or more than one) and gender. “The girls packed their bags.” (girls → their) “The bird flapped its wings.” (bird → its). Words like each, everyone, and nobody are singular in formal writing: “Each boy brought his lunch.”" },
      { h: 'Vague pronouns', p: "A pronoun is vague when the reader cannot tell which noun it means. “Kim told Jen that she won.” Who won? Fix it by naming the person: “Kim told Jen, ‘You won!’” or “Kim told Jen that Jen won.”" },
      { h: 'Watch “it,” “they,” and “this”', p: "“They said it will rain” — who are they? Say “The weather report said it will rain.” If a pronoun has no clear noun to point to, replace it with the noun." }
    ],
    demo: {
      q: "Fix: “Every student must bring their own pencil.” (formal writing)",
      steps: [
        "Step 1: Find the antecedent: “Every student.”",
        "Step 2: “Every student” means one student at a time, so it is singular.",
        "Step 3: Use a singular pronoun, or rewrite with a plural noun."
      ],
      a: "Every student must bring his or her own pencil. (Or: All students must bring their own pencils.)"
    },
    items: [
      Q("Choose the pronoun: “The dogs wagged ___ tails.”", ["its", "his", "their", "her"], 2, "“Dogs” is plural, so the pronoun must be plural: their.", "One dog or many?"),
      Q("Choose the pronoun: “The tree dropped ___ leaves in the fall.”", ["their", "its", "his", "they"], 1, "“Tree” is one thing and not a person, so use its. (No apostrophe: its shows ownership.)", "One tree."),
      Q("What is the antecedent of “she” in “Grandma said she would bake a pie”?", ["pie", "Grandma", "said", "would"], 1, "“She” refers back to Grandma. Grandma is the antecedent.", "Who is she?"),
      Q("Which sentence has a vague pronoun?", ["Leo gave Sam his book, and he thanked him.", "Leo gave Sam a book, and Sam thanked Leo.", "Leo gave his sister a book.", "Leo read his book."], 0, "In “he thanked him,” we cannot tell who thanked whom. Both Leo and Sam are boys, so “he” and “him” are unclear.", "Can you tell who “he” is?"),
      Q("Which is the best fix? “When Mom talked to Aunt Rose, she was laughing.”", ["When Mom talked to Aunt Rose, Aunt Rose was laughing.", "When Mom talked to Aunt Rose, they was laughing.", "When Mom talked to Aunt Rose, she were laughing.", "When she talked to her, she was laughing."], 0, "Naming the person who was laughing makes the meaning clear. “She” could have meant either woman.", "Replace the unclear pronoun with a name."),
      Q("Choose the pronoun for formal writing: “Each girl hung up ___ coat.”", ["their", "her", "them", "its"], 1, "“Each girl” means one girl at a time, so it is singular. Use her.", "Each = one at a time."),
      Q("Choose the pronoun: “Marcus and Tia finished ___ project early.”", ["his", "her", "their", "its"], 2, "Two people joined by “and” make a plural antecedent. Use their.", "Two people."),
      Q("Which sentence has correct agreement?", ["The boys lost his shoes.", "The kittens drank its milk.", "The kittens drank their milk.", "The kitten drank their milk."], 2, "“Kittens” is plural, and “their” is plural. They agree. One kitten would use its.", "Match plural with plural."),
      Q("Which sentence has a vague pronoun?", ["They say this park is haunted.", "The park ranger says this park is haunted.", "My brother says this park is haunted.", "The sign says this park is closed."], 0, "“They” does not point to any noun. Who says it? Naming the speaker fixes it.", "Who are they?"),
      T("Type the antecedent: “The baby threw her rattle on the floor.”", ["baby", "the baby"], "“Her” refers back to the baby, so “baby” is the antecedent.", "Whose rattle?"),
      T("Type the correct pronoun: “The students raised ___ hands.”", ["their"], "“Students” is plural, so the pronoun is plural: their.", "Plural owner word."),
      T("Type the correct pronoun: “The lion shook ___ mane.” (The lion is male.)", ["his", "its"], "One male lion: use his. Many writers also use its for animals. Either matches a singular antecedent.", "One lion."),
      Q("What is unclear in: “Put the cup on the table and wash it”?", ["Wash the table or the cup?", "Which cup?", "Who should put it?", "Nothing is unclear."], 0, "“It” could mean the cup or the table. Fix: “Put the cup on the table and wash the cup.”", "What could it be?"),
      Q("Which sentence fixes the vague pronoun? “Jess called Mia after she got home.”", ["Jess called Mia after Mia got home.", "Jess called Mia after they got home.", "She called her after she got home.", "Jess called Mia after it got home."], 0, "Naming Mia shows exactly who got home.", "Use a name."),
      Q("Choose the pronoun: “Neither of the boys forgot ___ homework.” (formal)", ["their", "his", "them", "its"], 1, "“Neither” means not one and not the other, so it is singular. Use his.", "Neither = one at a time."),
      Q("Which sentence has correct agreement?", ["Everyone should wash his or her hands.", "Everyone should wash their hand.", "Everyone should wash them hands.", "Everyone should wash its hands."], 0, "In formal writing, everyone is singular, so his or her agrees. (In everyday speech many people say “their.”)", "Everyone = each person."),
      T("Type the antecedent of “it”: “Dad found the key and put it on the hook.”", ["key", "the key"], "“It” stands for the key; that is what Dad put on the hook.", "What was put on the hook?"),
      Q("Which sentence is clear?", ["When the vase hit the shelf, it broke.", "When the vase hit the shelf, the vase broke.", "When it hit it, it broke.", "It hit the shelf and it broke it."], 1, "Repeating “the vase” makes it clear which object broke. In the first choice, “it” could be the vase or the shelf.", "Which one names what broke?"),
      Q("Choose the pronoun: “The flock of geese changed ___ direction.”", ["its", "their", "his", "her"], 0, "Here the flock moves as one group, so the collective noun “flock” is treated as singular: its.", "Flock = one group."),
      Q("Which sentence has a vague “this”?", ["I forgot my coat and missed the bus. This made me late.", "I forgot my coat. This coat is blue.", "This book is long.", "This is my sister, Ruth."], 0, "“This” could mean forgetting the coat, missing the bus, or both. Fix: “Missing the bus made me late.”", "What does this point to?")
    ]
  });

  // ---------------------------------------------------------------- Week 29
  C.unit('grammar', 29, {
    title: 'Personification and hyperbole',
    standard: 'ELAGSE5L5a',
    learn: [
      { h: 'Personification', p: "Personification gives human actions or feelings to something that is not human. “The wind whispered through the pines.” Wind cannot really whisper, but the words help us hear a soft sound. “The old car groaned up the hill.”" },
      { h: 'Hyperbole', p: "Hyperbole (say hi-PUR-buh-lee) is huge exaggeration for effect. It is not meant to be taken as true. “I have a million chores.” “This backpack weighs a ton.” Writers use it to show strong feelings or to be funny." },
      { h: 'Figurative vs. literal', p: "Both are figurative language: words that mean more than their exact dictionary meaning. Ask: Is a non-human thing acting human? That is personification. Is something stretched far beyond what is possible? That is hyperbole." }
    ],
    demo: {
      q: "Name the figure of speech: “The thunder grumbled, and I waited forever for the storm to pass.”",
      steps: [
        "Step 1: “The thunder grumbled.” Thunder is not a person, but grumbling is something people do. That is personification.",
        "Step 2: “I waited forever.” No one can wait forever; it is a big exaggeration. That is hyperbole.",
        "Step 3: Explain the meaning: the thunder made a low rumble, and the storm felt very long."
      ],
      a: "“Thunder grumbled” = personification; “waited forever” = hyperbole."
    },
    items: [
      Q("Which sentence uses personification?", ["The flowers danced in the breeze.", "The flowers are red.", "I picked a million flowers.", "Flowers need water."], 0, "Flowers cannot really dance. Giving them a human action is personification.", "Which nonhuman thing acts human?"),
      Q("Which sentence uses hyperbole?", ["I ran two miles.", "I'm so hungry I could eat a horse.", "The horse ate hay.", "My stomach growled."], 1, "No one could eat a whole horse. It is a huge exaggeration to show great hunger.", "Which is impossible?"),
      Q("What is “The alarm clock screamed at me” an example of?", ["Hyperbole", "Personification", "Simile", "Literal language"], 1, "An alarm clock cannot scream like a person. Giving it a human action is personification.", "Can a clock scream?"),
      Q("What is “This bag weighs a ton” an example of?", ["Personification", "Hyperbole", "Simile", "Fact"], 1, "A bag that weighs a ton (2,000 pounds) is a huge exaggeration. The writer means it is very heavy.", "Is it really a ton?"),
      Q("What does “The sun smiled down on the picnic” mean?", ["The sun has a face.", "It was a bright, pleasant, sunny day.", "It was cloudy.", "The sun was angry."], 1, "The personification makes the sunshine seem warm and friendly. It means it was a sunny, pleasant day.", "How does a smile make you feel?"),
      Q("What does “I've told you a thousand times!” mean?", ["Exactly 1,000 times", "Many, many times", "Only once", "Never"], 1, "It is hyperbole. The speaker has said it many times and is frustrated, but not literally 1,000.", "Is the number real?"),
      Q("Which is NOT personification?", ["The leaves whispered secrets.", "The car coughed and stopped.", "The cat chased a mouse.", "The stars winked at us."], 2, "Cats really do chase mice, so this is literal. The others give human actions (whispering, coughing, winking) to non-human things.", "Which one is something the thing really does?"),
      Q("Which is NOT hyperbole?", ["My homework took a hundred years.", "I walked to the mailbox.", "He's taller than a skyscraper.", "I have a mountain of laundry."], 1, "Walking to the mailbox is a normal, literal statement. The others are wild exaggerations.", "Which one could really be true?"),
      T("Type ONE word, personification or hyperbole: “The kettle sang on the stove.”", ["personification"], "A kettle cannot sing like a person. It makes a whistling sound, and the writer gives it a human action.", "A kettle acting human?"),
      T("Type ONE word, personification or hyperbole: “I'm so tired I could sleep for a year.”", ["hyperbole"], "No one sleeps for a year. This big exaggeration shows how tired the speaker is.", "Is it possible?"),
      T("Type ONE word, personification or hyperbole: “The waves crashed angrily against the rocks.”", ["personification"], "Waves do not feel anger. Giving them a human feeling is personification. It shows how rough the water was.", "Can waves be angry?"),
      T("Type ONE word, personification or hyperbole: “The line at the store was a mile long.”", ["hyperbole"], "A line a mile long would be enormous. It is exaggeration meaning the line was very long.", "Was it really a mile?"),
      Q("Which sentence uses BOTH personification and hyperbole?", ["The hungry stove ate a million pancakes.", "The stove is hot.", "I made ten pancakes.", "The pancakes were tasty."], 0, "A stove that “ate” pancakes is personification, and “a million” is hyperbole.", "Look for a human action AND an exaggeration."),
      Q("Why might a writer use hyperbole?", ["To give exact facts", "To show strong feelings or add humor", "To list steps", "To define a word"], 1, "Hyperbole is not meant literally. It makes a feeling or description stronger, or makes the reader laugh.", "Exaggeration does what?"),
      Q("Complete with personification: “The old floorboards ___ under my feet.”", ["were brown", "complained", "were made of wood", "were ten feet long"], 1, "“Complained” gives the floor a human action, describing a creaky sound. The others are literal descriptions.", "Which choice is a human action?"),
      Q("Complete with hyperbole: “My little brother's room is so messy that ___.”", ["there are toys on the floor", "you need a map to find the bed", "he should clean it", "the bed is unmade"], 1, "Needing a map to find a bed is a funny exaggeration. The other choices could be literally true.", "Which is too big to be true?"),
      Q("What does “The tired computer finally gave up” mean?", ["The computer stopped working.", "The computer went to bed.", "The computer is a person.", "The computer won a game."], 0, "This personification gives the computer human tiredness. It means the computer stopped working or shut down.", "What happens when a computer gives up?"),
      Q("Which line describes a hot day using hyperbole?", ["It was 92 degrees.", "It was hot enough to fry an egg on the sidewalk.", "The sun peeked out.", "The breeze cooled us off."], 1, "Saying you could fry an egg on the sidewalk is an exaggeration meaning it was extremely hot.", "Which is stretched beyond true?"),
      Q("“Opportunity knocked on my door.” What does this mean?", ["Someone knocked on the door.", "A good chance came my way.", "The door was broken.", "I knocked on a door."], 1, "Opportunity is an idea, not a person. Personifying it means a good chance arrived.", "Can an idea knock?"),
      Q("Which phrase is personification?", ["as fast as lightning", "the jealous moon", "a ton of homework", "ten feet tall"], 1, "A moon cannot feel jealous. Giving it a human feeling is personification. “As fast as lightning” is a simile, and the others are hyperbole.", "Which one gives a feeling to an object?")
    ]
  });

  // ---------------------------------------------------------------- Week 30
  C.unit('grammar', 30, {
    title: 'Word relationships and analogies',
    standard: 'ELAGSE5L5c',
    learn: [
      { h: 'How words relate', p: "Words can be connected in many ways: synonyms (big/large), antonyms (hot/cold), part to whole (page/book), tool to user (hammer/carpenter), item to category (robin/bird), cause to effect (rain/flood), and young to adult (puppy/dog). Seeing these links helps you understand and remember words." },
      { h: 'Reading an analogy', p: "An analogy compares two pairs that share the same relationship. “Hot is to cold as up is to down” is written hot : cold :: up : down. The first pair are opposites, so the second pair must be opposites too." },
      { h: 'Solve it in a sentence', p: "Make a sentence for the first pair, then test it on the second. “A finger is part of a hand.” Finger : hand :: toe : ___. “A toe is part of a ... foot.” If your sentence works for both pairs, you have it." }
    ],
    demo: {
      q: "Solve: kitten : cat :: calf : ___",
      steps: [
        "Step 1: Make a sentence for the first pair: “A kitten is a young cat.”",
        "Step 2: Use the same sentence for the second pair: “A calf is a young ___.”",
        "Step 3: A calf is a young cow. Check: the relationship (young to adult) matches."
      ],
      a: "cow"
    },
    items: [
      Q("happy : sad :: full : ___", ["glad", "empty", "large", "plate"], 1, "Happy and sad are antonyms (opposites). The opposite of full is empty.", "First pair are opposites."),
      Q("big : large :: quick : ___", ["slow", "fast", "small", "quiet"], 1, "Big and large are synonyms (same meaning). A synonym for quick is fast.", "First pair mean the same."),
      Q("petal : flower :: wheel : ___", ["round", "road", "bicycle", "spin"], 2, "A petal is part of a flower. A wheel is part of a bicycle (part to whole).", "Part to whole."),
      Q("brush : painter :: stethoscope : ___", ["doctor", "heart", "hospital", "listen"], 0, "A brush is a tool used by a painter. A stethoscope is a tool used by a doctor (tool to user).", "Who uses it?"),
      Q("oak : tree :: rose : ___", ["red", "thorn", "flower", "garden"], 2, "An oak is a kind of tree. A rose is a kind of flower (item to category).", "What group does it belong to?"),
      Q("What is the relationship in pen : write?", ["Part to whole", "Tool to its use", "Synonyms", "Young to adult"], 1, "A pen is a tool used to write. The relationship is a tool and what it does.", "What do you do with a pen?"),
      Q("What is the relationship in tadpole : frog?", ["Antonyms", "Young to adult", "Tool to user", "Part to whole"], 1, "A tadpole is a young frog. The relationship is young to adult.", "What does a tadpole become?"),
      Q("Which pair has the SAME relationship as fish : swim?", ["bird : fly", "cat : fur", "dog : bone", "cow : farm"], 0, "A fish swims, and a bird flies. Both pairs show an animal and how it moves.", "Make a sentence: A fish can ___."),
      Q("chapter : book :: verse : ___", ["poem", "word", "write", "letter"], 0, "A chapter is a section of a book. A verse is a section of a poem or song (part to whole).", "Part of what?"),
      T("Type the missing word: day : night :: early : ___", ["late"], "Day and night are opposites. The opposite of early is late.", "Think opposites."),
      T("Type the missing word: puppy : dog :: foal : ___", ["horse"], "A puppy is a young dog. A foal is a young horse.", "Young to adult."),
      T("Type the missing word: finger : hand :: toe : ___", ["foot"], "A finger is part of a hand. A toe is part of a foot.", "Part to whole."),
      T("Type the missing word: bee : hive :: bird : ___", ["nest"], "A bee lives in a hive. A bird lives in a nest (animal to home).", "Where does it live?"),
      Q("rain : flood :: spark : ___", ["water", "fire", "light", "cloud"], 1, "Too much rain can cause a flood. A spark can cause a fire (cause to effect).", "What can it cause?"),
      Q("Which pair are synonyms?", ["shout : whisper", "tiny : little", "hot : cold", "begin : end"], 1, "Tiny and little mean almost the same thing. The others are antonyms.", "Same meaning."),
      Q("Which word belongs with: carrot, potato, onion?", ["apple", "celery", "grape", "banana"], 1, "Carrots, potatoes, and onions are vegetables. Celery is a vegetable; the others are fruits.", "What category?"),
      Q("author : book :: composer : ___", ["piano", "music", "orchestra", "audience"], 1, "An author creates a book. A composer creates music (creator to creation).", "What does a composer make?"),
      Q("Which word shows the strongest feeling? cool, cold, freezing, chilly", ["cool", "chilly", "freezing", "cold"], 2, "These words are related but show different strengths, called shades of meaning. Freezing is the coldest.", "Line them up from mild to extreme."),
      T("Type the missing word: teacher : school :: chef : ___", ["kitchen", "restaurant"], "A teacher works in a school. A chef works in a kitchen or restaurant (worker to workplace).", "Where does a chef work?"),
      Q("glove : hand :: sock : ___", ["shoe", "foot", "warm", "drawer"], 1, "A glove covers a hand. A sock covers a foot.", "What does it cover?")
    ]
  });

  // ---------------------------------------------------------------- Week 31
  C.unit('grammar', 31, {
    title: 'Combining sentences for variety',
    standard: 'ELAGSE5L3a',
    learn: [
      { h: 'Why combine?', p: "Too many short sentences sound choppy: “I have a dog. He is brown. He is friendly.” Combining makes writing smoother: “I have a friendly brown dog.” Good writers mix short and long sentences so readers stay interested." },
      { h: 'Ways to combine', p: "1) Join subjects or verbs: “Ben ran. Lia ran.” → “Ben and Lia ran.” 2) Move describing words: “The hat is red. It is new.” → “The new hat is red.” 3) Use a conjunction: and, but, so, because, when, although. 4) Add a phrase: “We ate lunch. We ate at the park.” → “We ate lunch at the park.”" },
      { h: 'Keep the meaning', p: "A combined sentence must say everything the short sentences said, and the joining word must fit the meaning. Use but for contrast, so for a result, and because for a reason." }
    ],
    demo: {
      q: "Combine: “The river was deep. The river was cold. We did not swim.”",
      steps: [
        "Step 1: The first two sentences both describe the river. Combine the adjectives: “The river was deep and cold.”",
        "Step 2: The third sentence is a result of the first two. Use so.",
        "Step 3: Put it together with a comma before so."
      ],
      a: "The river was deep and cold, so we did not swim."
    },
    items: [
      Q("Combine: “Maya likes art. Leo likes art.”", ["Maya likes art, Leo likes art.", "Maya and Leo like art.", "Maya likes art and Leo.", "Maya likes Leo and art."], 1, "Both sentences have the same predicate, so join the subjects with and. With two people, the verb becomes like.", "Join the subjects."),
      Q("Combine: “The kitten is small. The kitten is gray.”", ["The kitten is small, the kitten is gray.", "The small kitten is gray kitten.", "The kitten is small and gray.", "Small is the kitten gray."], 2, "Both sentences describe the same kitten. Join the two adjectives with and.", "Join the describing words."),
      Q("Combine: “We went to the beach. It was sunny.”", ["We went to the beach because it was sunny.", "We went to the beach, it was sunny.", "We went it was sunny to the beach.", "Because we went to the beach it sunny."], 0, "“Because” joins the ideas and shows the reason. A comma alone would make a comma splice.", "Which joining word shows a reason?"),
      Q("Combine: “I wanted to play outside. It was raining.”", ["I wanted to play outside, so it was raining.", "I wanted to play outside, but it was raining.", "I wanted to play outside, and so raining.", "I wanted to play outside or it was raining."], 1, "The ideas contrast: she wanted to play, but rain got in the way. “So” would wrongly mean wanting to play caused the rain.", "Contrast word."),
      Q("Combine: “Dad cooked dinner. Dad washed the dishes.”", ["Dad cooked dinner and washed the dishes.", "Dad cooked dinner, Dad washed the dishes.", "Dad and Dad cooked and washed.", "Dad cooked dinner washed the dishes."], 0, "The subject is the same, so join the two verbs with and.", "Join the verbs."),
      Q("Combine: “We saw a deer. It was in our backyard.”", ["We saw a deer, it was in our backyard.", "We saw a deer in our backyard.", "In a deer we saw our backyard.", "We saw our backyard deer it was."], 1, "Turn the second sentence into a phrase, “in our backyard,” and add it to the first.", "Add a phrase."),
      Q("Which is the smoothest combined sentence? “The game ended. We went home. We were tired.”", ["The game ended, we went home, we were tired.", "When the game ended, we went home tired.", "The game ended and we went and we were tired home.", "We were tired the game ended we went home."], 1, "“When” connects the first two ideas, and “tired” is tucked in as a describing word. It keeps all the meaning in one smooth sentence.", "Which reads easily?"),
      Q("Combine with “although”: “The test was hard. I passed.”", ["Although I passed the test was hard.", "Although the test was hard, I passed.", "The test was although hard, I passed.", "Although, the test was hard I passed."], 1, "“Although” starts the contrast clause, and a comma follows the introductory clause.", "Comma after the although part."),
      T("Type the joining word that best combines: “The road was closed. We took a detour.” → “The road was closed, ___ we took a detour.”", ["so"], "Taking a detour is a result of the closed road. “So” shows result.", "Result."),
      T("Type the joining word: “You can ride the bus. You can walk.” → “You can ride the bus ___ walk.”", ["or"], "There are two choices, so use “or.”", "Choice word."),
      T("Type the joining word: “I studied hard. I wanted a good grade.” → “I studied hard ___ I wanted a good grade.”", ["because", "since"], "Wanting a good grade is the reason for studying, so “because” (or “since”) shows the reason.", "Reason word."),
      Q("Which combined sentence keeps ALL the information? “The bird is blue. It sat on the fence. It sang.”", ["The bird sang.", "The blue bird sat on the fence and sang.", "The blue bird sat.", "The bird sat on the fence."], 1, "It includes blue, sat on the fence, and sang. The other choices drop some details.", "Check every fact."),
      Q("Which paragraph has the most sentence variety?", ["I woke up. I ate. I left.", "I woke up early. After a quick breakfast of eggs and toast, I rushed out the door. I made it!", "I woke up and I ate and I left and I ran.", "Woke. Ate. Left."], 1, "It mixes a short sentence, a long sentence with an introductory phrase, and a very short exclamation. Varied lengths keep writing interesting.", "Look for mixed lengths."),
      Q("Combine: “Ruby plays soccer. Ruby plays the piano.” Which is best?", ["Ruby plays soccer and the piano.", "Ruby plays soccer, Ruby plays the piano.", "Ruby, soccer, and piano.", "Ruby plays soccer piano."], 0, "The subject and verb are the same, so just join the two objects with and.", "Join what she plays."),
      Q("Combine: “The cake was chocolate. Grandma baked it.”", ["Grandma baked a chocolate cake.", "The cake was chocolate, Grandma baked it.", "Chocolate Grandma baked cake.", "Grandma was chocolate and baked."], 0, "Moving the adjective “chocolate” in front of “cake” combines the ideas in one clear sentence.", "Move the describing word."),
      Q("Which sentence was combined INCORRECTLY?", ["Sam and Pia went home.", "The tall, old tree fell.", "I like apples, and I like pears.", "I was cold, I put on a coat."], 3, "“I was cold, I put on a coat” joins two sentences with only a comma (a comma splice). Fix: “I was cold, so I put on a coat.”", "Look for a comma splice."),
      Q("Combine with “who”: “My aunt lives in Savannah. She is a nurse.”", ["My aunt, who lives in Savannah, is a nurse.", "My aunt who, lives in Savannah is a nurse.", "My aunt lives who in Savannah is a nurse.", "Who lives in Savannah, my aunt is a nurse."], 0, "“Who lives in Savannah” adds extra information about the aunt. It is set off with commas.", "Who tells more about the aunt."),
      T("Type the joining word that shows time: “The bell rang. We lined up.” → “___ the bell rang, we lined up.”", ["When", "After", "As", "Once", "As soon as"], "“When” (or “after”) shows time and joins the ideas. A comma follows the introductory clause.", "A time word."),
      Q("Combine: “The puppy barked. The puppy was excited.”", ["The excited puppy barked.", "The puppy barked excited the puppy.", "The puppy was barked excited.", "Excited, barked, the puppy."], 0, "Use “excited” as an adjective before puppy. One sentence now holds both facts.", "Move the feeling word."),
      Q("Why do writers combine short sentences?", ["To make writing smoother and more interesting", "To make every sentence long", "To use more commas", "To remove details"], 0, "Combining fixes choppy writing. Good writers still keep some short sentences for variety and punch.", "Think about how it sounds.")
    ]
  });

  // ---------------------------------------------------------------- Week 32
  C.unit('grammar', 32, {
    title: 'Formal and informal English',
    standard: 'ELAGSE5L3b',
    learn: [
      { h: 'Two ways to talk', p: "Informal English is relaxed. We use it with friends and family: slang, contractions, and short phrases like “Hey, what's up?” Formal English is careful and polite. We use it in reports, letters to adults we do not know well, speeches, and job or school writing: “Good morning. How are you today?”" },
      { h: 'Signs of formal writing', p: "Formal writing uses complete sentences, proper grammar, precise words, and no slang. It often avoids contractions. Instead of “gonna,” write “going to.” Instead of “kids,” write “children” or “students.” Instead of “a lot of stuff,” name the things." },
      { h: 'Choose for your audience', p: "Ask: Who will read or hear this, and why? A text to your cousin can be informal. A letter to the mayor or a science report should be formal." }
    ],
    demo: {
      q: "Make it formal: “Hey, the park's super gross. Can ya fix it?” (a letter to the city)",
      steps: [
        "Step 1: Replace the casual greeting “Hey” with a polite one: “Dear City Council.”",
        "Step 2: Replace slang with precise words: “super gross” → “has a lot of litter.”",
        "Step 3: Write the request in full, polite words: “Could you please help clean it?”"
      ],
      a: "Dear City Council, The park has a lot of litter. Could you please help clean it?"
    },
    items: [
      Q("Which sentence is formal?", ["Gonna grab some food.", "I am going to eat lunch now.", "Yo, food time!", "Lemme eat."], 1, "It uses full words, correct grammar, and no slang. The others are casual.", "Which has no slang?"),
      Q("Where should you use formal English?", ["A text to your best friend", "A science report", "A joke with your brother", "A note to your mom"], 1, "A science report is schoolwork for a teacher, so it calls for formal English.", "Which is for school?"),
      Q("Which is the formal way to say “kids”?", ["guys", "children", "folks", "peeps"], 1, "“Children” is the formal word. The others are informal.", "A word for a report."),
      Q("Which greeting fits a letter to a museum director?", ["Hey there!", "Dear Dr. Brown,", "Yo, Dr. Brown!", "What's up, Doc?"], 1, "A polite, formal greeting starts with “Dear” and the person's title and name.", "Be polite."),
      Q("Which word is informal?", ["excellent", "awesome", "impressive", "outstanding"], 1, "“Awesome” is often used as casual slang. In formal writing, “excellent” or “impressive” is better.", "Which would you say to a friend?"),
      Q("Change “gonna” to formal English.", ["going to", "goin", "will gonna", "gotta"], 0, "“Gonna” is how “going to” sounds in fast, casual speech. Write “going to” in formal writing.", "Two words."),
      Q("Which sentence is best for a speech to the school board?", ["This lunch stuff is totally bad.", "The school lunches need more fruits and vegetables.", "Lunches are kinda gross, ya know?", "Ugh, lunch."], 1, "It is a clear, complete sentence with precise words and no slang. That fits a formal audience.", "Clear and respectful."),
      Q("Which sentence is informal?", ["The experiment was successful.", "We observed the plants daily.", "That experiment was so cool!", "The results were surprising."], 2, "“So cool” is casual language. A formal report would say something like “The results were interesting.”", "Which sounds like talking to a friend?"),
      T("Type the formal word for “yeah.”", ["yes"], "“Yeah” is casual. In formal speaking or writing, say “yes.”", "A three-letter word."),
      T("Type the two formal words for “wanna.”", ["want to"], "“Wanna” is casual speech for “want to.” Write the full words in formal writing.", "Two words."),
      T("Type the formal word to replace “kinda” in “The water was kinda cold.”", ["somewhat", "rather", "fairly", "slightly", "a little", "quite"], "“Kinda” is casual for “kind of.” Formal words like “somewhat” or “rather” sound more precise.", "A word meaning a little."),
      Q("Which closing fits a formal letter?", ["Later!", "Sincerely,", "Bye bye!", "TTYL"], 1, "“Sincerely,” is a standard formal closing. The others are informal.", "Which would go on a business letter?"),
      Q("Who would you most likely write to in informal English?", ["The governor", "Your cousin", "A company asking for a refund", "A newspaper editor"], 1, "Your cousin is family, so a relaxed, friendly tone is fine.", "Who do you know well?"),
      Q("Which is the formal version of “Thanks a bunch for the stuff!”?", ["Thank you for the books you sent.", "Thx for stuff.", "Thanks, bunches!", "Ty for the books lol."], 0, "It uses “Thank you,” full words, and names the exact thing (books) instead of “stuff.”", "Name the exact thing."),
      Q("Why is slang a poor choice in a report?", ["It is always rude.", "It may be unclear and too casual for the audience.", "It is too long.", "Reports must rhyme."], 1, "Slang can change quickly and may not be understood by every reader. Reports need clear, exact language.", "Think about the reader."),
      Q("Which sentence uses formal English in a book report?", ["The main character is super brave, like totally.", "The main character shows great courage.", "This guy is brave.", "Main dude = brave."], 1, "“Shows great courage” is precise and formal. The others use slang or shortcuts.", "Which would a teacher expect?"),
      T("Type the formal word for “nope.”", ["no"], "“Nope” is casual. The formal answer is simply “no.”", "Two letters."),
      Q("A text to a friend says: “c u at 3.” What is the formal version?", ["See you at three o'clock.", "C ya at 3.", "See u at 3.", "Cya!"], 0, "Formal writing spells out every word and does not use texting shortcuts.", "Spell every word."),
      Q("Which situation calls for formal speech?", ["Playing a game with a sibling", "Giving a presentation at church to the whole congregation", "Chatting at a sleepover", "Joking at recess"], 1, "Speaking to a large group in a presentation calls for clear, formal speech.", "Who is listening?"),
      Q("Which word is more formal than “get” in “I will get the book”?", ["grab", "obtain", "snag", "nab"], 1, "“Obtain” is a formal word meaning to get. Grab, snag, and nab are casual.", "A school-report word.")
    ]
  });

  // ---------------------------------------------------------------- Week 33
  C.unit('grammar', 33, {
    title: 'Homographs and homophones',
    standard: 'ELAGSE5L5c',
    learn: [
      { h: 'Homophones: sound the same', p: "Homophones sound alike but have different spellings and meanings: their / there / they're, to / too / two, your / you're, its / it's, hear / here, knew / new, whole / hole. Spell check will not catch them, so think about the meaning." },
      { h: 'Homographs: spelled the same', p: "Homographs are spelled the same but have different meanings, and sometimes different sounds. “Bat” (a flying animal) and “bat” (for baseball). “Lead” (LEED: to guide) and “lead” (LED: a metal). “Wind” (WIND: moving air) and “wind” (WYND: to turn a crank). Use context to decide the meaning." },
      { h: 'Quick tricks', p: "They're = they are. You're = you are. It's = it is. If you can swap in the two words, use the apostrophe form. Here has “here” inside “where”: it is a place. Hear has an ear in it." }
    ],
    demo: {
      q: "Choose: “___ going to put ___ coats over ___.” (there, their, they're)",
      steps: [
        "Step 1: The first blank means “they are going,” so use they're.",
        "Step 2: The second blank shows ownership (the coats belong to them), so use their.",
        "Step 3: The third blank is a place, so use there."
      ],
      a: "They're going to put their coats over there."
    },
    items: [
      Q("Choose the correct word: “___ backpack is on the bus.”", ["Your", "You're", "Yore", "Youre"], 0, "“Your” shows ownership. “You're” means “you are,” which does not fit: “You are backpack” makes no sense.", "Try you are."),
      Q("Choose the correct word: “The dog wagged ___ tail.”", ["it's", "its", "its'", "it is"], 1, "“Its” shows ownership. “It's” means “it is,” and “it is tail” makes no sense.", "Owner word."),
      Q("Choose the correct word: “I ate ___ many cookies.”", ["to", "two", "too", "tow"], 2, "“Too” means more than enough or also. “Two” is a number and “to” shows direction.", "More than enough."),
      Q("Choose the correct word: “Can you ___ the birds singing?”", ["here", "hear", "heer", "hare"], 1, "“Hear” is what your ear does, and it has the word ear inside it. “Here” is a place.", "Ear inside."),
      Q("What are homophones?", ["Words spelled the same with different meanings", "Words that sound the same but have different spellings and meanings", "Words that mean the same", "Words that are opposites"], 1, "Homo means same, and phone means sound. Homophones sound the same but are spelled differently and mean different things.", "Phone = sound."),
      Q("What are homographs?", ["Words spelled the same that have different meanings", "Words that rhyme", "Words that mean the opposite", "Words with prefixes"], 0, "Graph means writing. Homographs are written (spelled) the same but have different meanings.", "Graph = written."),
      Q("In “Please wind the clock,” how is wind pronounced and what does it mean?", ["WIND: moving air", "WYND: to turn or twist", "WEND: to walk", "WAND: a stick"], 1, "Here wind is a verb rhyming with find. It means to turn a key or knob, like winding a clock.", "Can you turn moving air?"),
      Q("Which sentence uses “lead” to mean a metal?", ["She will lead the parade.", "The pipe was made of lead.", "Lead the way!", "Who will lead the team?"], 1, "In “made of lead,” lead is a heavy metal and rhymes with bed. In the others, lead rhymes with need and means to guide.", "Something a pipe is made of."),
      Q("Which sentence is correct?", ["Their going to the fair.", "There going to the fair.", "They're going to the fair.", "Theyre going to the fair."], 2, "“They're” means “they are”: They are going to the fair. Their shows ownership and there is a place.", "Try they are."),
      Q("In “The bat flew out of the cave,” what does bat mean?", ["A wooden stick for baseball", "A flying animal", "To hit something", "To blink"], 1, "A bat that flies out of a cave is the animal. Bat is a homograph; context tells which meaning fits.", "What lives in caves?"),
      T("Type the correct homophone (knew or new): “I got a ___ bike for my birthday.”", ["new"], "“New” means not old. “Knew” is the past tense of know.", "Not old."),
      T("Type the correct homophone (whole or hole): “The squirrel dug a ___ in the yard.”", ["hole"], "A hole is an opening or empty space. Whole means all of something.", "An opening."),
      T("Type the correct homophone (it's or its): “___ going to be a sunny day.”", ["it's", "its"], "“It's” means “it is”: It is going to be a sunny day. (The checker ignores the apostrophe, but in writing you need it here.)", "Try it is."),
      T("Type the correct homophone (to, too, or two): “We have ___ cats and a dog.”", ["two"], "“Two” is the number 2. “Too” means also or more than enough, and “to” shows direction, as in “to the store.”", "A number."),
      Q("Which word is a homograph?", ["tear", "teach", "tree", "tall"], 0, "Tear can mean a drop from your eye (rhymes with ear) or to rip (rhymes with air). Same spelling, different meanings and sounds.", "Which one has two meanings?"),
      Q("Which pair are homophones?", ["right / write", "run / ran", "big / bag", "soft / hard"], 0, "Right and write sound the same but are spelled differently and mean different things.", "Same sound, different spelling."),
      Q("“The soldier did not desert his post. He walked across the desert.” Which is true?", ["Both deserts mean the same.", "The first means to leave; the second means a dry, sandy place.", "Both mean a dry place.", "Both mean to leave."], 1, "Desert is a homograph. As a verb (de-ZERT) it means to abandon or leave. As a noun (DEZ-ert) it means a dry land.", "One is an action, one is a place."),
      Q("Choose the correct words: “Put the box over ___ by ___ door.”", ["their, there", "there, their", "they're, their", "there, they're"], 1, "The first blank is a place (there). The second shows the door belongs to them (their).", "Place, then owner."),
      Q("Which sentence uses a homophone incorrectly?", ["The wind blew hard.", "I ate a pear.", "The bare climbed the tree.", "We rode the bus."], 2, "The animal is spelled bear. “Bare” means uncovered, as in bare feet.", "Which animal is misspelled?"),
      Q("Which sentence uses “close” to mean NEAR?", ["Please close the window.", "The store is close to our house.", "Close your eyes.", "They close at noon."], 1, "In “close to our house,” close (rhymes with dose) means near. In the others, close (rhymes with nose) means to shut.", "Which one tells distance?")
    ]
  });

  // ---------------------------------------------------------------- Week 34
  C.unit('grammar', 34, {
    title: 'Editing: find and fix the error',
    standard: 'ELAGSE5L2',
    learn: [
      { h: 'Read like an editor', p: "Editors read slowly, one sentence at a time, and check a list: capital letters, end marks, commas, spelling (watch homophones), verb tense, subject-verb agreement, and pronouns. Reading aloud helps, because your ear often catches what your eyes miss." },
      { h: 'COPS checklist', p: "C = Capitals (first word, names, I). O = Overall look and order (complete sentences, no run-ons). P = Punctuation (end marks, commas, apostrophes, quotation marks). S = Spelling (including your/you're, their/there)." },
      { h: 'One change at a time', p: "In these practice items, each passage has exactly one error. Find it, decide what kind it is, and choose the fix that leaves everything else correct." }
    ],
    demo: {
      q: "Find the error: “On saturday, my family drove to Stone Mountain. We hiked to the top and ate lunch.”",
      steps: [
        "Step 1: Check capitals. Days of the week are proper nouns. “saturday” should be “Saturday.”",
        "Step 2: Check the rest: Stone Mountain is capitalized, end marks are correct, and verbs are all past tense.",
        "Step 3: Fix the one error."
      ],
      a: "On Saturday, my family drove to Stone Mountain."
    },
    items: [
      Q("Find the error: “My brother and I goes to the library every Tuesday. We love the reading corner.”", ["brother → Brother", "goes → go", "Tuesday → tuesday", "love → loves"], 1, "“My brother and I” is a plural subject, so the verb should be “go,” not “goes.”", "Check subject-verb agreement."),
      Q("Find the error: “The bird built it's nest in our mailbox. Dad put up a sign so no one would bother it.”", ["it's → its", "mailbox → mail box", "sign → sine", "bother → bothers"], 0, "“It's” means “it is.” The nest belongs to the bird, so use the possessive “its.”", "Can you say “it is nest”?"),
      Q("Find the error: “Yesterday we planted beans. Today we water them and see tiny sprouts. Tomorrow we measured them.”", ["planted → plant", "see → saw", "measured → will measure", "water → watered"], 2, "Yesterday goes with past (planted), today with present (water, see), and tomorrow with future. “Tomorrow we measured” mixes a future time word with a past verb, so it should be “will measure.”", "Match each verb to its time word."),
      Q("Find the error: “Have you ever seen a hummingbird. They can fly backward!”", ["hummingbird. → hummingbird?", "They → It", "backward! → backward.", "seen → saw"], 0, "“Have you ever seen a hummingbird” asks a question, so it needs a question mark.", "Check the end marks."),
      Q("Find the error: “Mrs. Lopez said, “Please line up quietly.” Everyone lined up quick.”", ["Mrs. → Mrs", "said, → said", "quick → quickly", "Everyone → Every one"], 2, "“Quick” is an adjective. To describe how they lined up (the verb), use the adverb “quickly.”", "How did they line up?"),
      Q("Find the error: “We visited Savannah, Georgia, last spring. Their are many old squares with big oak trees.”", ["Savannah → savannah", "Their → There", "spring → Spring", "oak → oaks"], 1, "“There are” tells that something exists. “Their” shows ownership and does not fit here.", "Which homophone shows existence?"),
      Q("Find the error: “My favorite fruits are apples, grapes and, peaches.”", ["fruits → fruit's", "grapes and, peaches → grapes, and peaches", "apples → Apples", "are → is"], 1, "The comma should come before “and,” not after it: apples, grapes, and peaches.", "Look at the list commas."),
      Q("Find the error: “The puppies chased there tails. Mom laughed.”", ["puppies → puppy's", "there → their", "chased → chases", "laughed → laughs"], 1, "The tails belong to the puppies, so use the possessive “their.”", "Whose tails?"),
      Q("Find the error: “I read a book called the secret garden. It was about a hidden garden.”", ["read → red", "the secret garden → The Secret Garden (underlined)", "hidden → hiden", "about → abuot"], 1, "A book title needs capital letters on important words, and it should be underlined or italicized.", "Check the title."),
      Q("Find the error: “Neither the cat or the dog wanted to go outside in the rain.”", ["or → nor", "wanted → want", "rain → rains", "outside → out side"], 0, "Neither pairs with nor. The correlative conjunction must be “neither ... nor.”", "Neither's partner."),
      T("Type the misspelled word, spelled correctly: “We recieved a letter from Grandpa.”", ["received"], "The rule “i before e except after c” applies: received.", "i before e except after c."),
      T("Type the word that should be capitalized: “Last week my family went to atlanta to see the aquarium.”", ["Atlanta"], "Atlanta is the name of a specific city, so it is a proper noun and needs a capital letter.", "Names of places."),
      T("Type the correct verb to fix the error: “The kids was excited for the field trip.”", ["were"], "“Kids” is plural, so the verb should be “were,” not “was.”", "Plural subject."),
      Q("Find the error: “When we got home Mom had already made dinner.”", ["home → home,", "Mom → mom", "had already made → already makes", "dinner → diner"], 0, "“When we got home” is an introductory clause, so a comma belongs after it.", "Pause after the when part."),
      Q("Find the error: “Each of the girls brought their own lunch.” (formal writing)", ["Each → Every", "their → her", "brought → brung", "lunch → lunches"], 1, "“Each” is singular in formal writing, so the pronoun should be “her.”", "Each = one at a time."),
      Q("Find the error: “The storm knocked down three tree's in our yard.”", ["storm → Storm", "knocked → knock", "tree's → trees", "yard → yards"], 2, "“Trees” is a simple plural. An apostrophe is used for possession or contractions, not plurals.", "Plural or owner?"),
      Q("Find the error: “Yes I finished my math, Mom.”", ["Yes I → Yes, I", "finished → finish", "math, Mom → math Mom", "No error"], 0, "“Yes” at the start of a sentence is followed by a comma.", "Check after yes."),
      Q("Find the error: “The class had finish the project before the bell rang.”", ["had finish → had finished", "class → Class", "rang → rung", "bell → Bell"], 0, "The past perfect needs had plus the past participle: had finished.", "Had + ___ed."),
      Q("Find the error: “Wow, that was the most best pie I have ever eaten!”", ["Wow, → Wow", "most best → best", "eaten → ate", "have → has"], 1, "“Best” already means the most good. “Most best” doubles it up. Just say “best.”", "Best is already the top."),
      T("Type the misspelled word, spelled correctly: “Our neighbor's dog is very freindly.”", ["friendly"], "Friendly is spelled f-r-i-e-n-d-l-y. A trick: a friend is there to the end, and friend has the word “end” in it.", "Look inside the word.")
    ]
  });

  // ---------------------------------------------------------------- Week 35
  C.unit('grammar', 35, {
    title: 'Punctuation review',
    standard: 'ELAGSE5L2',
    learn: [
      { h: 'End marks and commas', p: "Every sentence ends with a period (statement or command), a question mark (question), or an exclamation point (strong feeling). Commas separate items in a series (red, white, and blue), come before a FANBOYS word joining two sentences, follow introductory parts, and set off yes, no, names, and tag questions." },
      { h: 'Apostrophes', p: "Apostrophes do two jobs. Contractions: do not → don't, I am → I'm. Possessives: one dog's bone; the girl's hat. For a plural ending in s, add only the apostrophe: the girls' hats. Never use an apostrophe just to make a plural." },
      { h: 'Quotation marks', p: "Put quotation marks around a speaker's exact words. Commas and periods go inside the closing quotation mark: “I'm ready,” said Ava. A comma separates the speaker tag from the quote: Mom said, “Time for bed.”" }
    ],
    demo: {
      q: "Punctuate: Grandpa asked do you want to go fishing",
      steps: [
        "Step 1: “Grandpa asked” is the speaker tag. Put a comma after it.",
        "Step 2: Grandpa's exact words are “do you want to go fishing.” Put quotation marks around them and capitalize Do.",
        "Step 3: It is a question, so the question mark goes inside the closing quotation mark."
      ],
      a: "Grandpa asked, “Do you want to go fishing?”"
    },
    items: [
      Q("Which sentence is punctuated correctly?", ["We need eggs milk and bread.", "We need eggs, milk, and bread.", "We need, eggs milk and bread.", "We need eggs milk, and, bread."], 1, "Items in a series are separated by commas, including one before “and.”", "List commas."),
      Q("Which shows the possessive for ONE cat?", ["the cats toy", "the cat's toy", "the cats' toy", "the cat,s toy"], 1, "For one owner, add apostrophe + s: the cat's toy.", "One cat owns it."),
      Q("Which shows the possessive for MANY dogs?", ["the dog's bowls", "the dogs bowls", "the dogs' bowls", "the dogs's bowls"], 2, "For a plural ending in s, add just the apostrophe after the s: the dogs' bowls.", "More than one dog."),
      Q("Which sentence is punctuated correctly?", ["“Let's go!” shouted Ben.", "“Let's go,” shouted Ben!", "Let's go! “shouted Ben.”", "“Let's go” shouted Ben."], 0, "The exclamation point belongs to Ben's words, so it goes inside the quotation marks.", "The end mark belongs to the quote."),
      Q("Which end mark fits: “Watch out for that bee”", ["a period", "an exclamation point", "a question mark", "a comma"], 1, "This is an urgent warning with strong feeling, so an exclamation point fits best.", "How would someone say it?"),
      Q("Which contraction is correct for “will not”?", ["willn't", "won't", "wo'nt", "wont'"], 1, "“Will not” becomes “won't.” It is an unusual contraction that changes spelling.", "It changes spelling."),
      Q("Which sentence uses a comma correctly before a conjunction?", ["I like to draw, and my sister likes to paint.", "I like, to draw and my sister likes to paint.", "I like to draw and, my sister likes to paint.", "I like to draw and my sister, likes to paint."], 0, "When “and” joins two complete sentences, a comma comes before it.", "Comma before FANBOYS."),
      Q("Which sentence uses quotation marks correctly?", ["Dad said “we're almost there.”", "Dad said, “We're almost there.”", "Dad said, we're almost there.", "“Dad said, we're almost there.”"], 1, "A comma follows the speaker tag, the quote begins with a capital letter, and the period goes inside the closing mark.", "Comma, capital, period inside."),
      T("Type the contraction for “they are.”", ["they're"], "They + are → they're. The apostrophe replaces the letter a.", "They + are."),
      T("Type the contraction for “should not.”", ["shouldn't"], "Should + not → shouldn't. The apostrophe replaces the o in not.", "Should + not."),
      T("Type the possessive form: the hat belonging to James", ["James's hat", "James' hat", "James's", "James'"], "For a singular name ending in s, many style guides add 's (James's), and some add only an apostrophe (James'). Either is accepted here.", "One owner named James."),
      Q("Where does the question mark go? Mom asked, “Did you feed the fish”", ["Inside the closing quotation mark", "Outside the closing quotation mark", "After Mom", "No question mark is needed"], 0, "The quoted words are a question, so the question mark goes inside the quotation marks.", "Whose words are the question?"),
      Q("Which sentence is punctuated correctly?", ["The childrens' books are on the shelf.", "The children's books are on the shelf.", "The childrens books are on the shelf.", "The children,s books are on the shelf."], 1, "“Children” is already plural and does not end in s, so add apostrophe + s: children's.", "Children has no s at the end."),
      Q("Which sentence has an apostrophe error?", ["I can't find my shoes.", "We bought three apple's.", "The bird's wing is blue.", "She's my friend."], 1, "“Apples” is just a plural. Apostrophes do not make plurals.", "Look for a plural with an apostrophe."),
      Q("Which sentence uses commas correctly?", ["On Monday, June 3, 2024, we started camp.", "On Monday June 3 2024 we started camp.", "On Monday, June 3 2024, we started camp.", "On, Monday June 3, 2024 we started camp."], 0, "Commas separate the day from the date, the date from the year, and the year from the rest of the sentence.", "Day, date, year, rest."),
      Q("Which sentence uses a comma in a split quotation correctly?", ["“After lunch” said Lia “let's play tag.”", "“After lunch,” said Lia, “let's play tag.”", "“After lunch, said Lia, let's play tag.”", "After lunch, “said Lia,” let's play tag."], 1, "When a quote is split by the speaker tag, put commas on both sides of the tag, inside the first quote and after the tag.", "Commas around the speaker tag."),
      T("Type the correct end mark (period, question, or exclamation): “Please hand me the glue”", ["period", "."], "This is a polite command, so it ends with a period.", "A calm request."),
      Q("Which sentence is correct?", ["Its raining, so bring an umbrella.", "It's raining, so bring an umbrella.", "Its' raining, so bring an umbrella.", "It's raining so, bring an umbrella."], 1, "“It's” means “it is.” A comma comes before “so” when it joins two sentences.", "It is raining."),
      Q("Which shows the girls in the choir sharing one room?", ["the girl's room", "the girls' room", "the girls room", "the girls's room"], 1, "Many girls share it, and girls ends in s, so add only an apostrophe: girls'.", "Plural owner."),
      Q("Which sentence uses all punctuation correctly?", ["“Wow!” said Grandma. “You grew so much this year.”", "“Wow” said Grandma! “You grew so much this year.”", "Wow! said Grandma, “You grew so much this year”", "“Wow!” said Grandma “you grew so much this year.”"], 0, "Each quote has its end mark inside the quotation marks, and a new sentence of dialogue starts with a capital letter.", "Check every mark.")
    ]
  });

  // ---------------------------------------------------------------- Week 36
  C.unit('grammar', 36, {
    title: 'Parts of speech review',
    standard: 'ELAGSE5L1',
    learn: [
      { h: 'The eight parts of speech', p: "Noun: person, place, thing, or idea (girl, Georgia, kindness). Pronoun: takes the place of a noun (she, it, they). Verb: action or state of being (run, is). Adjective: describes a noun (blue, three). Adverb: describes a verb, adjective, or other adverb (quickly, very). Preposition: shows a relationship (under, after). Conjunction: joins (and, because). Interjection: shows feeling (Wow!)." },
      { h: 'The job decides', p: "A word's part of speech depends on how it is used. “I can run fast” (fast = adverb). “The fast runner won” (fast = adjective). “We will fast before the feast” (fast = verb). Ask what job the word is doing in the sentence." }
    ],
    demo: {
      q: "Name the part of speech of each word: “Wow, she quickly climbed the tall tree.”",
      steps: [
        "Step 1: Wow = interjection (feeling). She = pronoun (stands for a girl).",
        "Step 2: Quickly = adverb (tells how she climbed). Climbed = verb (action).",
        "Step 3: The = article (a kind of adjective). Tall = adjective (describes tree). Tree = noun (a thing)."
      ],
      a: "interjection, pronoun, adverb, verb, adjective (the), adjective, noun"
    },
    items: [
      Q("What part of speech is “happiness”?", ["Adjective", "Noun", "Verb", "Adverb"], 1, "Happiness is an idea, and ideas are nouns. (Happy is the adjective form.)", "Is it a person, place, thing, or idea?"),
      Q("What part of speech is “gently” in “She gently held the bird”?", ["Adjective", "Verb", "Adverb", "Noun"], 2, "“Gently” tells how she held the bird, so it describes the verb. That makes it an adverb.", "It tells how."),
      Q("What part of speech is “they”?", ["Noun", "Pronoun", "Verb", "Preposition"], 1, "“They” takes the place of a noun naming more than one person or thing, so it is a pronoun.", "It stands in for a noun."),
      Q("What part of speech is “beneath”?", ["Conjunction", "Adverb", "Preposition", "Interjection"], 2, "“Beneath” shows position, as in “beneath the bridge.” It is a preposition.", "Where?"),
      Q("What part of speech is “fast” in “The fast car zoomed by”?", ["Adjective", "Adverb", "Verb", "Noun"], 0, "Here “fast” describes the noun car (what kind of car?), so it is an adjective.", "What does it describe?"),
      Q("What part of speech is “fast” in “She ran fast”?", ["Adjective", "Adverb", "Noun", "Pronoun"], 1, "Here “fast” tells how she ran, so it describes the verb. That makes it an adverb.", "How did she run?"),
      Q("What part of speech is “is” in “The sky is blue”?", ["Adjective", "Noun", "Verb", "Preposition"], 2, "“Is” is a linking (state-of-being) verb. It links sky to blue.", "Being verbs count too."),
      Q("Which word is a conjunction?", ["although", "across", "awful", "always"], 0, "“Although” joins a dependent clause to a sentence. The others are a preposition, adjective, and adverb.", "Which joins ideas?"),
      Q("Which word is an interjection?", ["Hurray", "Hurry", "Happy", "Hungry"], 0, "“Hurray” shows sudden happy feeling. Hurry is a verb; happy and hungry are adjectives.", "A feeling word."),
      Q("Which word is an adjective in “Seven ducks swam across the pond”?", ["Seven", "swam", "across", "pond"], 0, "“Seven” tells how many ducks, so it describes the noun. Number words that describe nouns are adjectives.", "How many?"),
      T("Type the verb: “The choir sang beautifully on Sunday.”", ["sang"], "“Sang” is the action the choir did.", "What did the choir do?"),
      T("Type the adverb: “The turtle moved slowly across the road.”", ["slowly"], "“Slowly” tells how the turtle moved. Many adverbs end in -ly.", "How did it move?"),
      T("Type the preposition: “The cat hid inside the box.”", ["inside"], "“Inside” shows where the cat hid in relation to the box.", "Where?"),
      T("Type the pronoun: “Dad gave us a ride.”", ["us"], "“Us” takes the place of the names of the people who got the ride.", "Who got a ride?"),
      Q("What part of speech is “very” in “It was very cold”?", ["Adjective", "Adverb", "Noun", "Verb"], 1, "“Very” describes the adjective cold, telling how cold. Words that describe adjectives are adverbs.", "It describes cold."),
      Q("What part of speech is “Georgia”?", ["Common noun", "Proper noun", "Adjective", "Pronoun"], 1, "Georgia is the name of a specific place, so it is a proper noun and is capitalized.", "A specific name."),
      Q("What part of speech is “dance” in “The dance lasted an hour”?", ["Verb", "Noun", "Adjective", "Adverb"], 1, "Here “dance” is the thing that lasted an hour, so it is a noun. In “We dance,” it would be a verb.", "Is it a thing or an action here?"),
      Q("Which sentence uses “light” as a verb?", ["The light is bright.", "This box is light.", "Please light the candle.", "She wore a light jacket."], 2, "In “Please light the candle,” light is an action. In the others it is a noun or an adjective.", "Which one is an action?"),
      Q("Which list has one word from each: noun, verb, adjective?", ["dog, run, green", "happy, sad, glad", "and, or, but", "quickly, softly, loudly"], 0, "Dog is a noun, run is a verb, and green is an adjective. The other lists all share one part of speech.", "Three different jobs."),
      Q("In “Oh, the old barn and the shed fell down,” which word is the conjunction?", ["Oh", "old", "and", "down"], 2, "“And” joins the two subjects, the old barn and the shed. Oh is an interjection, old is an adjective, and down is an adverb here.", "The joining word.")
    ]
  });

  // ---------------------------------------------------------------- Week 37
  C.unit('grammar', 37, {
    title: 'Year review',
    standard: 'ELAGSE5L1',
    learn: [
      { h: 'Sentences and verbs', p: "Complete sentences need a subject and a predicate. Fix fragments by adding what is missing; fix run-ons with a period, a comma plus FANBOYS, a subordinating word, or a semicolon. Keep verb tenses steady, and use perfect tenses (have/had/will have + past participle) to show order in time." },
      { h: 'Punctuation and usage', p: "Use commas in a series, after introductory parts, with yes/no, names, and tag questions. Use apostrophes for contractions and possession. Italicize long works and put short works in quotation marks. Choose the right homophone and match pronouns to their antecedents." },
      { h: 'Words and meaning', p: "Use context clues to figure out new words. Recognize figurative language like personification and hyperbole. Choose formal or informal English for your audience, and understand relationships between words in analogies." }
    ],
    demo: {
      q: "Find and fix two errors: “Yes I have went to the zoo before, its fun.”",
      steps: [
        "Step 1: “Yes” at the start needs a comma after it: “Yes, I...”",
        "Step 2: “Have went” is wrong; the past participle is gone: “have gone.”",
        "Step 3: “its fun” is a second sentence joined with a comma, and its should be it's. Fix: “It's fun.” as a new sentence."
      ],
      a: "Yes, I have gone to the zoo before. It's fun."
    },
    items: [
      Q("Which is a complete sentence?", ["Under the big oak tree.", "The children played under the big oak tree.", "Because the oak tree was big.", "Playing under the tree."], 1, "It has a subject (children), a verb (played), and a complete thought.", "Who did what?"),
      Q("Choose the correct verb: “By the time we arrived, the parade ___.”", ["has ended", "had ended", "will have ended", "ends"], 1, "The parade ended before we arrived, both in the past. Use the past perfect: had ended.", "Which came first?"),
      Q("Which sentence uses commas correctly?", ["Mia, can you help me, carry this box?", "Mia, can you help me carry this box?", "Mia can you, help me carry this box?", "Mia can you help me carry, this box?"], 1, "Mia is being spoken to, so her name is set off with a comma. No other commas are needed.", "Direct address."),
      Q("How should a magazine title be written when typing?", ["In quotation marks", "In italics", "In all capitals", "With no marks"], 1, "A magazine is a long, whole work, so its title is italicized when typing.", "Big works."),
      Q("“The fox was cunning, but the hen was even cleverer.” What does cunning mean?", ["slow", "clever and sneaky", "friendly", "hungry"], 1, "The phrase “even cleverer” shows that the fox was also clever. Cunning means clever, often in a sneaky way.", "Even cleverer than what?"),
      Q("Which sentence uses personification?", ["The moon is round.", "The moon peeked through the clouds.", "The moon is a million miles away.", "We saw the moon."], 1, "The moon cannot really peek. Giving it a human action is personification. The third choice is hyperbole, not personification.", "A human action."),
      Q("Choose the correct pair: “___ my sister ___ my brother likes broccoli.”", ["Either, nor", "Neither, nor", "Both, or", "Neither, or"], 1, "Neither pairs with nor. With neither/nor the verb agrees with the closer subject, brother, so “likes” is correct.", "Correct partners."),
      Q("Which sentence is formal?", ["The results of our experiment were surprising.", "Our experiment was super weird lol.", "Dude, the experiment rocked.", "The experiment was kinda neat."], 0, "It uses precise words with no slang, which fits a report.", "No slang."),
      Q("Choose the correct homophone: “Is that ___ jacket on the chair?”", ["you're", "your", "yore", "you are"], 1, "“Your” shows the jacket belongs to you. “You're” means you are.", "Owner word."),
      Q("Which sentence fixes the comma splice? “The snow melted, the river rose.”", ["The snow melted, and the river rose.", "The snow melted the river rose.", "The snow, melted the river rose.", "The snow melted, the river, rose."], 0, "A comma plus the conjunction “and” correctly joins two complete sentences.", "Comma + FANBOYS."),
      T("Type the missing word: seed : plant :: egg : ___", ["chick", "bird", "chicken", "hen"], "A seed grows into a plant, and an egg hatches into a chick or bird. The relationship is beginning to what it becomes.", "What comes out of an egg?"),
      T("Type the past participle: “She has ___ (write) three stories.”", ["written"], "Write is irregular: write, wrote, written. After has, use written.", "Write, wrote, ___."),
      T("Type the correct pronoun: “The team cheered for ___ captain.”", ["its", "their"], "When a team acts as one group, many writers use its. In everyday writing their is also common. Either is accepted here.", "Team as one group."),
      T("Type the contraction for “does not.”", ["doesn't"], "Does + not → doesn't. The apostrophe replaces the o in not.", "Does + not."),
      Q("Fix the tense shift: “We hiked to the falls and take pictures.”", ["hiked → hike", "take → took", "falls → fall", "No error"], 1, "“Hiked” is past tense, so “take” should become “took” to match.", "Match the first verb."),
      Q("Which word is an adverb in “The baby cried loudly at night”?", ["baby", "cried", "loudly", "night"], 2, "“Loudly” tells how the baby cried, so it is an adverb.", "How?"),
      Q("Which sentence is punctuated correctly?", ["“Can we go now?” asked Kai.", "“Can we go now,” asked Kai?", "“Can we go now”? asked Kai.", "Can we go now? “asked Kai.”"], 0, "The question mark belongs to Kai's words, so it goes inside the quotation marks.", "End mark inside."),
      Q("What is “My suitcase weighs a thousand pounds” an example of?", ["Personification", "Hyperbole", "Simile", "Fact"], 1, "It is an extreme exaggeration meaning the suitcase is very heavy.", "Is it possible?"),
      Q("Which is the best way to combine? “The cookie was warm. The cookie was soft. I ate it.”", ["The cookie was warm, the cookie was soft, I ate it.", "I ate the warm, soft cookie.", "Warm soft cookie ate I.", "The cookie I ate warm it."], 1, "Putting the adjectives warm and soft in front of cookie combines all three ideas smoothly.", "Move the describing words."),
      Q("In “The present was wrapped in red paper,” what does present mean?", ["right now", "a gift", "to show", "here, not absent"], 1, "Present is a homograph. Something wrapped in paper is a gift.", "What gets wrapped?")
    ]
  });

})(typeof window !== 'undefined' ? window : globalThis);
