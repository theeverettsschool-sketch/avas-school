/* Reading bank — Weeks 5-21: one original close-reading passage per week with skill lessons, questions, evidence, and summary. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  // ======================= WEEK 5: main idea and details (informational) =======================
  C.unit('reading', 5, {
    title: 'The Land of Trembling Earth',
    genre: 'informational',
    skill: 'main idea and supporting details',
    learn: [
      { h: 'What is the main idea?', p: "The main idea is the most important point the author wants you to understand. It is what the WHOLE passage is mostly about, not just one part. Try to say it in one sentence. If your sentence only fits one paragraph, it is a detail, not the main idea." },
      { h: 'Supporting details hold it up', p: "Supporting details are facts, examples, and descriptions that prove or explain the main idea. Think of a table: the main idea is the tabletop, and the details are the legs. Each paragraph often has its own smaller main idea, and its details support that one." }
    ],
    passage: [
      "Deep in the southeast corner of Georgia lies a place that looks like something from a storybook. Dark water stretches between tall cypress trees. Gray moss hangs from the branches like old lace. Herons stand as still as statues in the shallow water. This is the Okefenokee Swamp, one of the largest blackwater swamps in North America, and it is home to an amazing community of plants and animals.",
      "The Okefenokee is enormous. It covers nearly 700 square miles, mostly in Georgia, with a small part reaching into Florida. If you tried to walk all the way across it, you would need days, and you would get very wet! Two rivers begin in the swamp. The Suwannee River flows southwest toward the Gulf of Mexico, and the St. Marys River winds east toward the Atlantic Ocean.",
      "The swamp's name holds a clue to one of its secrets. Many people say the name comes from a Native American word meaning “land of trembling earth.” The floor of the swamp is covered with peat, a thick, spongy layer of dead plants that rot very slowly underwater. Sometimes gas bubbles push big chunks of peat up to the surface, where they float like rafts. Grasses, shrubs, and even small trees take root on these floating islands. If a person steps on one, the ground wobbles, and the nearby trees seem to tremble.",
      "The water is another surprise. It is dark brown, like a cup of strong tea. That does not mean it is dirty. As leaves and plants slowly break down, they release tannins, natural chemicals that stain the water. Tannins are the same thing that gives tea its color. On a calm day, the dark water works like a mirror, reflecting the trees and clouds so perfectly that it can be hard to tell which way is up.",
      "Animals of every kind make their homes here. Thousands of American alligators glide through the channels and sun themselves on the banks. Sandhill cranes, tall gray birds with bright red caps, fill the air with rattling calls. Black bears wander the drier islands looking for berries. Turtles, otters, frogs, and snakes share the water, and bird watchers have spotted more than two hundred kinds of birds.",
      "Some of the swamp's most surprising residents are plants that eat insects. The soil in the Okefenokee does not have many nutrients, so these plants have found another way to get food. Pitcher plants have leaves shaped like tall, slippery tubes. An insect crawls inside, slides down, and cannot climb back out. Sundews are tiny plants covered with sticky drops that trap gnats like glue.",
      "In 1937, most of the swamp became the Okefenokee National Wildlife Refuge, a place set aside to protect wild animals and their homes. Today, visitors can paddle canoes along quiet water trails and watch wildlife up close, though they must always keep a safe distance from the alligators. The Okefenokee is still wild, mysterious, and full of life, one of Georgia's greatest natural treasures."
    ],
    vocab: [
      ['enormous', 'very, very large in size'],
      ['peat', 'a thick, spongy layer of dead plants that rot slowly underwater'],
      ['tannins', 'natural chemicals from breaking-down leaves that stain water brown, like tea'],
      ['residents', 'the living things that make their home in a place'],
      ['refuge', 'a place set aside where animals and their homes are protected']
    ],
    demo: {
      q: 'What is the main idea of paragraph 4, the paragraph about the water?',
      steps: [
        'Step 1: Read the paragraph and list the details: the water is dark brown like tea; it is not dirty; tannins from plants stain it; it reflects like a mirror.',
        'Step 2: Ask, "What do all of these details have in common?" Every one of them describes the swamp\'s dark water and why it looks that way.',
        'Step 3: Say it in one sentence. Check that every detail fits under it. The mirror detail fits too, because it is about how the dark water looks.'
      ],
      a: 'The main idea of paragraph 4 is that the swamp\'s water is dark brown because of natural tannins, not because it is dirty.'
    },
    items: [
      Q('Which sentence BEST states the main idea of the whole passage?', ['The Okefenokee is a huge, unusual Georgia swamp full of amazing plants and animals.', 'Alligators are the most dangerous animals in Georgia.', 'Pitcher plants trap insects inside slippery leaves.', 'Visitors can paddle canoes through the swamp.'], 0, 'The main idea must cover the WHOLE passage. The passage talks about the swamp\'s size, name, water, animals, plants, and protection, so the best choice is the one about the swamp as a whole. Pitcher plants and canoes are only small details.', 'Which choice is big enough to cover every paragraph?'),
      Q('Which detail supports the idea that the Okefenokee is enormous?', ['Its water is the color of tea.', 'Sundews have sticky drops.', 'It covers nearly 700 square miles.', 'Sandhill cranes have red caps.'], 2, 'Paragraph 2 says the swamp is enormous, and the detail that proves it is its size: nearly 700 square miles. The other details are true, but they describe the water, plants, and birds, not the size.'),
      Q('What is the main idea of paragraph 3?', ['Gas bubbles are dangerous.', 'Floating islands of peat make the ground tremble, which may explain the swamp\'s name.', 'Native Americans lived in Georgia.', 'Trees cannot grow in swamps.'], 1, 'Paragraph 3 explains the name "land of trembling earth" by describing floating peat islands that wobble when stepped on. Every detail in the paragraph supports that idea. Trees actually DO grow on the peat, so that choice is wrong.'),
      Q('In paragraph 6, which detail does NOT support the main idea that some swamp plants eat insects?', ['Pitcher plants have slippery, tube-shaped leaves.', 'Sundews trap gnats with sticky drops.', 'Insects slide down and cannot climb out.', 'Black bears look for berries on drier islands.'], 3, 'The black bear detail is from paragraph 5, about animals. It has nothing to do with plants that eat insects. The other three details all describe how the plants catch their food.', 'Which one is about a different topic?'),
      Q('Read this sentence: "The Okefenokee is enormous." Then the author tells you its size and that walking across it would take days. What do those sentences do?', ['They change the topic.', 'They give the author\'s opinion about rivers.', 'They support the main idea of the paragraph.'], 2, 'The first sentence states the paragraph\'s main idea, and the sentences after it are supporting details that prove it. This is a common pattern: main idea first, details after.'),
      Q('In paragraph 4, the author says tannins "stain the water." What does stain mean here?', ['to change the color of something', 'to clean something', 'to make something cold', 'to make something taste sweet'], 0, 'The paragraph explains that tannins make the water brown "like tea." So stain means to change the color of something. Nothing in the paragraph is about cleaning, cold, or sweetness.', 'What happens to the water\'s color?'),
      Q('The passage calls insect-eating plants some of the swamp\'s most surprising "residents." Which word means about the same as residents?', ['visitors', 'enemies', 'strangers', 'inhabitants'], 3, 'Residents are the living things that live in a place, and inhabitants means the same thing. Visitors and strangers only pass through, and enemies has nothing to do with where something lives.'),
      Q('Why do pitcher plants and sundews catch insects?', ['They are protecting the alligators.', 'The soil does not have many nutrients, so they need extra food.', 'Insects are poisonous to the swamp water.', 'Visitors feed them insects.'], 1, 'Paragraph 6 says the soil "does not have many nutrients, so these plants have found another way to get food." Catching insects gives them the nutrients the soil is missing.'),
      Q('Why does the author compare the water to a mirror?', ['To help you picture how the calm, dark water reflects trees and clouds.', 'To show the water is frozen.', 'To show the water is very shallow.', 'To show the water is clear like glass.'], 0, 'A mirror reflects images. The author says the dark water reflects trees and clouds so well that it is hard to tell which way is up. The water is dark, not clear, so the glass choice is a tempting but wrong answer.'),
      Q('What happened to the Okefenokee in 1937?', ['It was drained to make farmland.', 'The St. Marys River was built.', 'Most of it became a national wildlife refuge.', 'Alligators were first brought there.'], 2, 'The last paragraph says that in 1937, most of the swamp became the Okefenokee National Wildlife Refuge, a protected place. The rivers are natural, and alligators already lived there.')
    ],
    evidence: [
      'Why is the swamp\'s water brown even though it is not dirty? Explain in 2–3 sentences and copy the sentence that gives the reason.',
      'How can the ground in a swamp "tremble"? Explain in your own words, then copy a sentence from paragraph 3 that supports your answer.',
      'Which animal or plant in the Okefenokee did you find most interesting, and why? Copy a sentence from the passage that describes it.'
    ],
    summary: 'Write a 3–4 sentence summary of "The Land of Trembling Earth." Start with the main idea of the whole passage, then give two or three of the most important supporting details.'
  });

  // ======================= WEEK 6: character traits and motivation (realistic fiction) =======================
  C.unit('reading', 6, {
    title: 'The Telescope Fund',
    genre: 'realistic fiction',
    skill: 'character traits and motivation',
    learn: [
      { h: 'Character traits', p: "A character trait is a word that describes what a character is like on the inside, such as patient, stubborn, generous, or brave. Authors rarely just tell you. Instead, they SHOW you through what a character says, does, thinks, and how others react. You figure out the trait from the clues." },
      { h: 'Motivation: the why', p: "Motivation is the reason a character does something. It is what they want or need. Ask, \"Why did she do that?\" A character's motivation can change during a story, and that change is often the most important part." }
    ],
    passage: [
      "Ruby Hargrove had been saving for a telescope since the first week of summer. She kept a picture of it taped inside her closet door: a shiny white tube on three silver legs, with a price tag of eighty-nine dollars. Under the picture, in purple marker, she had written THE TELESCOPE FUND. Every time she earned a dollar, she added a tally mark.",
      "By the middle of July, she had forty-one marks. She had walked the Pattersons' dog every morning, even when it rained. She had pulled weeds for her grandmother until her fingers were green. Now she had one more plan, a lemonade stand at the corner of Magnolia Street on the Saturday of the neighborhood yard sale.",
      "“Hundreds of people will walk by,” she told her little brother, Theo. “And it's supposed to be ninety-five degrees. I can't lose.”",
      "Theo was six and wanted to help with everything. “Can I pour?” he asked.",
      "Ruby looked at his small hands and then at her neat rows of paper cups. “You can hold the sign,” she said.",
      "Saturday morning was as hot as promised. Ruby had squeezed the lemons herself and made a sign with a smiling sun. By ten o'clock, she had sold twenty-two cups. She was counting coins when Theo, tired of holding the sign, reached for the pitcher to help. It slipped. Lemonade splashed across the table, soaked the cups, and dripped into the money jar.",
      "“Theo!” Ruby shouted. Her face went hot. Theo's chin started to shake, and he ran toward the house.",
      "Ruby stood alone, sticky and furious, staring at the mess. Then she noticed Mrs. Delgado from across the street watching from her porch. Mrs. Delgado did not say anything. She only lifted her eyebrows a tiny bit, the way Ruby's grandmother did when she was waiting for someone to do the right thing.",
      "Ruby sighed. She wiped the table and set the wet coins in the sun to dry. Then she walked inside and found Theo hiding behind the couch.",
      "“I wanted to help you get the tele-thing,” he whispered. “So you could show me the moon.”",
      "Ruby's anger melted like an ice cube on hot pavement. She sat down beside him. “I'm sorry I yelled,” she said. “Want to learn how to pour? You hold the pitcher with two hands, and I'll hold the cup.”",
      "They made a new batch together. Theo poured slowly, his tongue poking out in concentration, and only spilled a little. Customers who saw the small boy working so carefully bought two cups instead of one. One man gave Theo a whole dollar just for his smile.",
      "That night, Ruby added eighteen tally marks to the chart. She was still thirty dollars short, but she did not feel disappointed. She had learned something that was not on any chart. When the telescope finally arrived in late August, Ruby carried it to the backyard, pointed it at the bright half-moon, and lifted Theo onto a step stool.",
      "“You first,” she said."
    ],
    vocab: [
      ['tally', 'a short line drawn to count something, one mark for each'],
      ['furious', 'extremely angry'],
      ['concentration', 'paying very close attention to one thing'],
      ['customers', 'people who buy something'],
      ['disappointed', 'sad because something did not turn out the way you hoped']
    ],
    demo: {
      q: 'What character trait does Ruby show at the beginning of the story?',
      steps: [
        'Step 1: Look for what Ruby DOES. She saves all summer, walks a dog every morning "even when it rained," and pulls weeds until her fingers are green.',
        'Step 2: Ask what kind of person acts this way. Someone who keeps working toward a goal even when it is hard.',
        'Step 3: Choose a precise trait word and back it up with a clue: determined, because she keeps earning money even in the rain.'
      ],
      a: 'Ruby is determined. She keeps working toward her telescope all summer, even walking the dog in the rain.'
    },
    items: [
      Q('What is Ruby\'s main motivation at the beginning of the story?', ['She wants to make new friends.', 'She wants to earn enough money to buy a telescope.', 'She wants to teach Theo how to pour.', 'She wants to win a contest.'], 1, 'The story opens with Ruby\'s "Telescope Fund" and her tally marks. Everything she does at first, walking dogs, pulling weeds, the lemonade stand, is to earn money for the telescope. Teaching Theo comes later.'),
      Q('When Ruby tells Theo he can only hold the sign, what trait does she show?', ['She is lazy.', 'She is shy around strangers.', 'She is generous with her money.', 'She is impatient and wants things done her own way.'], 3, 'Ruby looks at Theo\'s small hands and her "neat rows of paper cups" and keeps the important job for herself. That shows she is impatient and likes things done her way. Nothing shows she is lazy or shy.', 'Why doesn\'t she let him pour?'),
      Q('Why did Theo reach for the pitcher?', ['He wanted to help Ruby get the telescope so she could show him the moon.', 'He wanted to drink all the lemonade.', 'He was trying to ruin the stand.', 'Mrs. Delgado told him to.'], 0, 'Theo\'s motivation is revealed when he whispers, "I wanted to help you get the tele-thing... So you could show me the moon." He was trying to help, not cause trouble.'),
      Q('What does Mrs. Delgado\'s lifted eyebrow cause Ruby to do?', ['Close the stand and give up.', 'Shout at Mrs. Delgado.', 'Stop and think about doing the right thing.', 'Call her grandmother.'], 2, 'The eyebrow reminds Ruby of her grandmother "waiting for someone to do the right thing." Right after, Ruby sighs, cleans up, and goes to find Theo. The look pushed her to make a better choice.'),
      Q('How does Ruby change from the beginning of the story to the end?', ['She goes from kind to mean.', 'She goes from caring only about her goal to caring about her brother too.', 'She stops wanting a telescope.', 'She does not change at all.'], 1, 'At first Ruby only cares about her money and neat cups. By the end, she teaches Theo to pour and lets him look through the telescope FIRST. She still wants the telescope, but now she cares about sharing it.'),
      Q('Which action BEST shows that Ruby has become generous?', ['She squeezes lemons herself.', 'She counts her coins.', 'She makes a sign with a smiling sun.', 'She says, "You first," and lets Theo look through the telescope.'], 3, 'Generous means willing to share. Letting Theo be the first to use the telescope she worked all summer for is a generous act. The other choices show hard work, not sharing.'),
      Q('Ruby felt "furious" after the spill. What does furious mean?', ['a little bit sleepy', 'very excited', 'extremely angry', 'slightly confused'], 2, 'Right before, Ruby shouts "Theo!" and her face goes hot. Those clues show she is extremely angry. Furious is a stronger word than just "mad."'),
      Q('Theo poured "with his tongue poking out in concentration." What does concentration mean?', ['paying very close attention', 'being silly', 'feeling tired', 'being afraid'], 0, 'Theo is pouring slowly and carefully so he will not spill. Concentration means paying close attention to one thing. Many people poke out their tongues without noticing when they are focused.'),
      Q('Why did customers buy two cups instead of one after Theo started pouring?', ['The lemonade was free.', 'The cups were smaller.', 'Ruby lowered the price.', 'They were charmed by the small boy working so carefully.'], 3, 'The story says customers "who saw the small boy working so carefully" bought two cups, and one man gave Theo a dollar "just for his smile." Watching Theo made people want to support the stand.'),
      Q('The story says Ruby "had learned something that was not on any chart." What did she most likely learn?', ['How to make lemonade.', 'That being patient and kind to family matters more than doing everything perfectly.', 'How to count coins quickly.', 'That telescopes are expensive.'], 1, 'Ruby already knew how to make lemonade and count money. What she learned that day was about people: being patient with Theo turned a bad moment into a good one and even helped the stand. That lesson can\'t be counted with tally marks.')
    ],
    evidence: [
      'What trait does Ruby show when she walks back into the house to find Theo? Explain and copy a sentence that supports your answer.',
      'What was Theo\'s motivation for reaching for the pitcher? Copy the sentence where the reader finds out.',
      'Do you think Ruby is a good big sister by the end of the story? Give your opinion with a reason, and copy one sentence from the last part of the story as evidence.'
    ],
    summary: 'Write a 3–4 sentence summary of "The Telescope Fund." Tell what Ruby wanted, what went wrong at the lemonade stand, and how she changed by the end.'
  });

  // ======================= WEEK 7: sequence and summarizing (historical fiction) =======================
  C.unit('reading', 7, {
    title: 'Bess and the Bluff',
    genre: 'historical fiction',
    skill: 'sequence of events and summarizing',
    learn: [
      { h: 'Sequence: the order of events', p: "Sequence is the order in which things happen. Authors give signal words to help you follow it: first, then, next, after, finally, by the time, and dates or seasons like \"in November\" or \"by spring.\" Keeping events in order helps you understand why things happen." },
      { h: 'Summarizing', p: "A summary retells only the MOST important events, in order, in your own words. Leave out small details like what color something was. A good test: if you removed this event, would the story still make sense? If not, it belongs in the summary." }
    ],
    passage: [
      "Bess Carter was ten years old when her family boarded a ship called the Anne in November of 1732. The ship was leaving England for a new colony across the ocean, a colony that would be called Georgia. Its leader was a man named James Oglethorpe. Bess's father was a carpenter, and Mr. Oglethorpe needed people who could build.",
      "The voyage lasted about two months. The Anne rocked and creaked through gray winter storms. Bess shared a cramped space below deck with her mother, father, and baby brother, Will. She passed the days by counting the waves and listening to Mr. Oglethorpe, who walked among the families asking if anyone was ill. Bess decided he was a kind man, though a very serious one.",
      "In January, the Anne finally reached the colony of South Carolina. The colonists rested there while Mr. Oglethorpe went ahead to choose a spot for the new town. Then they traveled down the coast in smaller boats, threading between marshy islands that smelled of salt and mud.",
      "At last, in February of 1733, the boats arrived at a tall bluff above the Savannah River. A bluff is a high, steep bank. Bess climbed the narrow path with her family, gripping roots so she would not slip. At the top, she turned around and gasped. The wide river shone below her, and tall pines and live oaks stretched as far as she could see.",
      "The colonists were not alone. The land was already home to the Yamacraw people, and their leader was a wise older man named Tomochichi. Bess watched from behind her mother's skirt as Tomochichi and Mr. Oglethorpe greeted each other. A woman named Mary Musgrove, who spoke both English and the Creek language, helped them understand one another. Tomochichi agreed to let the colonists settle on the bluff. Bess thought the two leaders looked as if they truly wanted to be friends.",
      "That first night, the colonists slept in tents. The next morning, the real work began. Mr. Oglethorpe had planned the town carefully. Men marked out straight streets and open squares with stakes and string. Bess's father began sawing boards for the first houses, and Bess carried water and handed him nails. Her hands blistered, but she was proud to help build a town from nothing.",
      "By summer, the first wooden houses were rising around the squares. The colonists also planted a garden to test which crops would grow in the warm, damp land. Among the young plants were little mulberry trees. Bess learned that silkworms eat mulberry leaves, and the leaders hoped Georgia would one day produce silk for England.",
      "One evening, Bess sat at the edge of the bluff with Will in her lap. The sun sank orange behind the trees, and the river turned to gold. Only a few months earlier, she had been shivering on a stormy ship, wondering what this place would be like. Now she knew. It was hard, and it was home.",
      "“This is Savannah,” she told her brother. “We helped make it.”"
    ],
    vocab: [
      ['colony', 'a settlement in a new land that is ruled by a faraway country'],
      ['voyage', 'a long trip, especially by ship'],
      ['cramped', 'crowded, with very little room to move'],
      ['bluff', 'a high, steep bank beside a river or the sea'],
      ['blistered', 'got small, sore bubbles on the skin from rubbing or hard work']
    ],
    demo: {
      q: 'What three events happen in order once the colonists reach the top of the bluff?',
      steps: [
        'Step 1: Find the signal words: "That first night," "The next morning," "By summer."',
        'Step 2: List what happens at each one: they sleep in tents; they mark out streets and squares and begin building; the first houses rise around the squares and they plant a garden.',
        'Step 3: Check the order. The signal words go from night, to the next morning, to summer, so the events must stay in that order.'
      ],
      a: 'First the colonists slept in tents, next they began marking streets and building houses, and by summer the first houses were rising and they had planted a garden.'
    },
    items: [
      Q('Which event happened FIRST?', ['The Anne left England.', 'The colonists arrived at the bluff.', 'The Anne reached South Carolina.', 'Bess\'s father built houses.'], 0, 'The story begins in November 1732 when the family boards the Anne in England. Next came South Carolina in January, then the bluff in February 1733, then building.', 'Look at the dates.'),
      Q('What happened right AFTER the colonists rested in South Carolina?', ['The colonists planted mulberry trees.', 'Tomochichi greeted Mr. Oglethorpe.', 'The colonists traveled down the coast in smaller boats.', 'The family boarded the ship.'], 2, 'Paragraph 3 says the colonists rested in South Carolina while Oglethorpe chose a spot, and "Then they traveled down the coast in smaller boats." The word "then" signals the next event.'),
      Q('Which signal words in paragraph 6 help you follow the sequence?', ['"wise older man"', '"That first night" and "The next morning"', '"Bess\'s father"', '"stakes and string"'], 1, 'Signal words tell WHEN things happen. "That first night" and "The next morning" show time passing. The other choices describe people or things, not time.'),
      Q('Which event happened LAST in the story?', ['Bess climbed the narrow path.', 'Mary Musgrove helped the leaders understand each other.', 'The colonists slept in tents.', 'Bess sat on the bluff and told Will, "This is Savannah."'], 3, 'The final scene is "One evening" months later, after the first houses are built, when Bess sits with Will at sunset. All the other events happened earlier, in February.'),
      Q('Which sentence is the BEST summary of the story?', ['Bess sailed from England to Georgia in 1732–33, watched Oglethorpe and Tomochichi agree on a settlement, and helped build Savannah, which became her home.', 'Bess had a baby brother named Will, and her hands got blisters.', 'The sun sank orange behind the trees.', 'Mulberry leaves are food for silkworms.'], 0, 'A summary gives the most important events in order. The best choice covers the voyage, the meeting, and the building of Savannah. The others are small details that leave out the main events.'),
      Q('Which detail is LEAST important to include in a summary?', ['The colonists sailed from England on the Anne.', 'Tomochichi agreed to let the colonists settle on the bluff.', 'The marshy islands smelled of salt and mud.', 'The colonists built a town with streets and squares.'], 2, 'The smell of the islands is a vivid detail that helps you picture the scene, but the story makes sense without it. The other three are key events that a summary needs.'),
      Q('What was Mary Musgrove\'s role when the leaders met?', ['She was the captain of the Anne.', 'She spoke English and Creek and helped the leaders understand each other.', 'She planted the mulberry trees.', 'She was Bess\'s mother.'], 1, 'Paragraph 5 says Mary Musgrove "spoke both English and the Creek language" and helped Tomochichi and Oglethorpe understand one another. Someone who does this is called an interpreter.'),
      Q('The story says the space below deck was "cramped." What does cramped mean?', ['dark and cold', 'wet and leaky', 'quiet and peaceful', 'crowded with very little room'], 3, 'Bess shared the space with her mother, father, and baby brother, and the word describes a ship full of families. Cramped means crowded, with hardly any room to move.'),
      Q('In paragraph 4, the author explains what a bluff is. Which meaning fits?', ['a trick to fool someone', 'a flat, sandy beach', 'a high, steep bank', 'a kind of boat'], 2, 'The author tells you right in the paragraph: "A bluff is a high, steep bank." Bess had to climb a narrow path and grip roots to get up it. The word bluff can also mean a trick, but that meaning does not fit here.'),
      Q('Why were mulberry trees planted in the colony?', ['The colonists hoped to feed silkworms and produce silk.', 'They gave shade for the houses.', 'Their wood was used to build boats.', 'Tomochichi asked for them.'], 0, 'Paragraph 7 says silkworms eat mulberry leaves and the leaders hoped Georgia would produce silk for England. This was a real hope of early Georgia\'s leaders.')
    ],
    evidence: [
      'How did Bess feel when she first reached the top of the bluff? Explain and copy the sentence that shows her reaction.',
      'How did the meeting between Tomochichi and Mr. Oglethorpe help the colony? Explain in 2–3 sentences and copy a supporting sentence.',
      'At the end, Bess says Georgia "was hard, and it was home." What made it hard? Give two examples, and copy one sentence that shows hard work.'
    ],
    summary: 'Write a 3–4 sentence summary of "Bess and the Bluff." Tell the most important events in order, using signal words such as first, next, then, and finally.'
  });

  // ======================= WEEK 8: cause and effect (informational: weather) =======================
  C.unit('reading', 8, {
    title: 'Why Summer Storms Boom',
    genre: 'informational',
    skill: 'cause and effect',
    learn: [
      { h: 'Cause and effect', p: "A cause is WHY something happens. An effect is WHAT happens because of it. To find the effect, ask \"What happened?\" To find the cause, ask \"Why did it happen?\" Signal words include because, so, since, as a result, when, if... then, and causes." },
      { h: 'Chains of causes', p: "In science, one effect often becomes the cause of the next thing, like dominoes falling. Heat causes rising air, rising air causes clouds, clouds cause rain. Following the chain step by step helps you explain how something works." }
    ],
    passage: [
      "On a summer afternoon in Georgia, the morning can start out bright and blue. By three o'clock, though, the sky may turn dark, the wind may gust, and a crack of thunder may send everyone running indoors. Why do summer storms appear so quickly? The answer is a chain of causes and effects that begins with the sun.",
      "All morning, the hot sun beats down on the ground. The warm ground heats the air just above it. Because warm air is lighter than cool air, it begins to rise, the same way a hot-air balloon floats upward. Georgia summers are also very humid, which means the air holds a lot of invisible water vapor. So the rising air carries plenty of moisture with it.",
      "As the warm, wet air climbs higher into the sky, it cools. Cool air cannot hold as much water vapor as warm air. As a result, the vapor condenses, which means it changes into tiny drops of liquid water. Billions of these drops crowd together to form a cloud. If the air keeps rising quickly, the cloud keeps growing taller and taller, until it becomes a towering storm cloud called a cumulonimbus. Some of these clouds stretch more than eight miles high, and their tops are so cold that the water freezes into ice.",
      "Inside the storm cloud, strong winds toss raindrops and bits of ice up and down. When the pieces bump and rub against each other, they build up electric charges, a little like the static you feel when you rub your feet on a carpet and touch a doorknob. Over time, the charges become enormous. When they grow strong enough, electricity suddenly jumps through the air. That giant spark is lightning.",
      "Lightning is astonishingly hot. A single bolt can heat the air around it to about 50,000 degrees Fahrenheit, which is several times hotter than the surface of the sun. This sudden heat makes the air expand so fast that it explodes outward. The result is a shock wave of sound that we hear as thunder. In other words, lightning is the cause, and thunder is the effect.",
      "Have you ever noticed that you see lightning before you hear thunder? That is because light travels much faster than sound. You can use this fact to estimate how far away a storm is. Count the seconds between the flash and the boom. Every five seconds equals about one mile. If you count to ten, the lightning was roughly two miles away.",
      "Even a storm that seems far away can be dangerous, because lightning can strike miles from the rain. Weather experts have a simple rule: When thunder roars, go indoors. Stay inside until thirty minutes after the last thunder you hear.",
      "By evening, the ground has cooled, the rising air slows down, and the storm often fades away. The sky clears, the air smells fresh, and frogs begin to sing. Tomorrow, if the sun shines hot again, the whole chain may start over."
    ],
    vocab: [
      ['humid', 'full of water vapor, so the air feels damp and sticky'],
      ['condenses', 'changes from a gas into tiny drops of liquid'],
      ['cumulonimbus', 'a very tall, towering cloud that makes thunderstorms'],
      ['expand', 'to spread out and take up more space'],
      ['estimate', 'to make a careful guess about a number or amount']
    ],
    demo: {
      q: 'What causes thunder?',
      steps: [
        'Step 1: Find the effect you are asking about: thunder. Look for the paragraph that explains it (paragraph 5).',
        'Step 2: Ask "Why does it happen?" Lightning heats the air to about 50,000 degrees, so the air expands so fast that it explodes outward.',
        'Step 3: Find the signal words: "This sudden heat makes the air expand" and "The result is... thunder." Put it together in a cause-and-effect sentence.'
      ],
      a: 'Lightning heats the air so suddenly that the air expands with a boom, and that sound is thunder.'
    },
    items: [
      Q('According to the passage, what is the FIRST cause in the chain that makes a summer storm?', ['Frogs begin to sing.', 'Lightning strikes.', 'Ice forms at the top of clouds.', 'The hot sun heats the ground.'], 3, 'The passage says the chain "begins with the sun." The sun heats the ground, the ground heats the air, and the air rises. Everything else comes later in the chain.'),
      Q('What is the EFFECT of warm air rising and cooling?', ['The ground gets hotter.', 'The water vapor condenses into drops and forms a cloud.', 'Thunder happens first.', 'The air becomes lighter.'], 1, 'Paragraph 3 says that as the rising air cools, "As a result, the vapor condenses" into tiny drops that crowd together to form a cloud. "As a result" is a signal for an effect.'),
      Q('What causes electric charges to build up inside a storm cloud?', ['Raindrops and ice bumping and rubbing against each other.', 'The sun shining on the cloud.', 'Frogs croaking below.', 'Thunder shaking the cloud.'], 0, 'Paragraph 4 explains that strong winds toss rain and ice up and down, and when the pieces bump and rub, they build up charges, like static from rubbing your feet on carpet.'),
      Q('Which sentence from the passage shows a cause-and-effect relationship?', ['"The sky clears, the air smells fresh, and frogs begin to sing."', '"Have you ever noticed that you see lightning before you hear thunder?"', '"Because warm air is lighter than cool air, it begins to rise."', '"On a summer afternoon in Georgia, the morning can start out bright and blue."'], 2, 'The word "because" signals a cause: warm air is lighter (cause), so it rises (effect). The other sentences describe or ask a question but do not explain why something happens.', 'Look for a signal word.'),
      Q('Why do we see lightning BEFORE we hear thunder?', ['Lightning happens first and thunder happens an hour later.', 'Light travels much faster than sound.', 'Thunder comes from a different cloud.', 'Our eyes work better than our ears.'], 1, 'Lightning and thunder happen at almost the same moment, but light reaches your eyes much faster than sound reaches your ears. That gap is what lets you estimate the storm\'s distance.'),
      Q('If you count 15 seconds between a flash and its thunder, about how far away was the lightning?', ['1 mile', '15 miles', '5 miles', '3 miles'], 3, 'The passage says every five seconds equals about one mile. 15 ÷ 5 = 3, so the lightning was about 3 miles away.', 'Divide by five.'),
      Q('Why do storms often fade away in the evening?', ['The ground cools, so the rising air slows down.', 'The moon pushes the clouds away.', 'Lightning uses up all the rain.', 'Frogs scare the storm away.'], 0, 'The last paragraph says that by evening the ground has cooled and the rising air slows down. Without warm rising air, the storm loses its "fuel" and fades.'),
      Q('The passage says Georgia summers are "humid." Which clue tells you what humid means?', ['"the hot sun beats down"', '"a hot-air balloon floats upward"', '"the air holds a lot of invisible water vapor"', '"the morning can start out bright and blue"'], 2, 'Right after the word humid, the author explains it: "which means the air holds a lot of invisible water vapor." The word "which means" is a strong context clue.'),
      Q('In paragraph 5, the heat makes the air "expand so fast that it explodes outward." What does expand mean?', ['to shrink down', 'to spread out and take up more space', 'to turn into ice', 'to stay perfectly still'], 1, 'Something that "explodes outward" is getting bigger fast. Expand means to spread out and take up more space. Shrink is the opposite.'),
      Q('Why does the author include the rule "When thunder roars, go indoors"?', ['To show that thunder itself is harmful to hear.', 'To explain how clouds form.', 'To tell readers to count seconds.', 'To warn readers that lightning can strike even when a storm seems far away.'], 3, 'The paragraph says lightning "can strike miles from the rain," so if you can hear thunder, you are close enough to be struck. The rule is a safety warning.')
    ],
    evidence: [
      'Explain in 2–3 sentences how the sun helps cause a summer thunderstorm. Copy one sentence from paragraph 2 that supports your answer.',
      'Lightning is the cause and thunder is the effect. Explain why, and copy the sentence from paragraph 5 that shows this.',
      'Why should you stay indoors even if a storm seems far away? Explain and copy the sentence that gives the reason.'
    ],
    summary: 'Write a 3–4 sentence summary of "Why Summer Storms Boom." Explain the chain of causes and effects from the hot sun to lightning and thunder, in order.'
  });

  // ======================= WEEK 9: theme (realistic fiction, Christmas giving) =======================
  C.unit('reading', 9, {
    title: 'The Tag on the Giving Tree',
    genre: 'realistic fiction',
    skill: 'theme',
    learn: [
      { h: 'What is a theme?', p: "A theme is the big lesson or message about life that a story teaches. It is not the same as the topic. The topic might be \"Christmas,\" but the theme is a full sentence, like \"Giving to others can bring more joy than getting.\" A theme could fit many different stories." },
      { h: 'How to find it', p: "Watch how the main character CHANGES and what she learns. Look at the choices she makes, what happens because of them, and how she feels at the end. Then ask, \"What does the author want me to learn from this?\" Use clues from the story to support your answer." }
    ],
    passage: [
      "Clara Jensen had twenty dollars folded inside her sock drawer. It was birthday money from her aunt, and she had already decided exactly what to buy with it: the Deluxe Bead Studio at Harmon's Toy Shop, with three hundred glass beads, a sorting tray, and a tiny pair of pliers. She had visited it in the store window four times.",
      "On the first Sunday of December, the church lobby had a new Christmas tree. Instead of ornaments, it was covered with paper tags. Pastor Reed explained that each tag held a wish from a family in their town who was having a hard year. “Take one if you'd like,” he said, “and bring the gift back by Christmas Eve.”",
      "Clara's little cousin grabbed a tag right away. Clara hung back. She did not want to spend her twenty dollars on anyone else. Still, when everyone walked away, she found herself reaching for a tag near the bottom. It said: Girl, age 9. Warm mittens and a book. Loves horses.",
      "“She's my age,” Clara said quietly.",
      "All week, the tag sat on her dresser next to her sock drawer. Clara tried not to look at it. On Wednesday morning, the weather turned bitter, and frost covered the grass like powdered sugar. Waiting for the car to warm up, Clara shoved her hands deep into her own thick mittens, and she wondered whether the girl on the tag was standing at a bus stop with bare, red fingers.",
      "On Saturday, Dad drove her downtown. At Harmon's, the Deluxe Bead Studio sparkled in the window. Clara stared at it for a long minute. Then she turned and walked to the bookstore next door. She chose a chapter book about a girl who trained a wild pony. At the department store, she found mittens the color of cranberries, lined with soft fleece. Together they cost nineteen dollars and fifty cents.",
      "Clara expected to feel sad. Instead, as the clerk wrapped the gifts, she felt a warm, fizzy happiness spreading through her chest, like the feeling of Christmas morning, only she was the one giving.",
      "On Christmas Eve, she carried the package to church and set it beneath the tree with dozens of others. During the service, the candles glowed, and everyone sang about the baby born in Bethlehem. Clara thought about how God had given the world the very best gift of all. Her small package seemed like a way of saying thank you.",
      "Christmas morning was full of good things: a new sweater, a puzzle, and a chocolate orange. There was no bead kit, and Clara found that she did not mind at all.",
      "In January, Pastor Reed handed Clara an envelope. Inside was a crayon drawing of a girl riding a brown horse. The girl was wearing bright red mittens. At the bottom, in careful letters, someone had written: Thank you. They are the warmest mittens I ever had.",
      "Clara taped the drawing inside her closet door, right where she would see it every day."
    ],
    vocab: [
      ['deluxe', 'fancy and of extra-high quality'],
      ['bitter', 'very cold in a way that stings (said of weather)'],
      ['fleece', 'a soft, fuzzy fabric that keeps you warm'],
      ['clerk', 'a person who helps customers in a store'],
      ['package', 'a wrapped box or bundle, like a present']
    ],
    demo: {
      q: 'What is a theme of "The Tag on the Giving Tree"?',
      steps: [
        'Step 1: Notice how Clara changes. At first she "did not want to spend her twenty dollars on anyone else." At the end, she gives her money away and treasures the thank-you drawing.',
        'Step 2: Look at her feelings. She "expected to feel sad," but instead she felt "a warm, fizzy happiness." Feelings at the turning point are a big clue.',
        'Step 3: Turn the lesson into a sentence about life that could fit other stories, not just Clara\'s.'
      ],
      a: 'A theme is that giving to others can bring more joy than getting something for yourself.'
    },
    items: [
      Q('Which sentence BEST states the theme of the story?', ['Bead kits are expensive.', 'Always save your birthday money.', 'Giving to others can bring more joy than getting something for yourself.', 'Winter in Georgia can be cold.'], 2, 'A theme is a lesson about life. Clara learns that giving made her happier than the bead kit would have. "Bead kits are expensive" and "winter can be cold" are facts from the story, not lessons.'),
      Q('What is the TOPIC of the story, rather than the theme?', ['A girl buys a Christmas gift for a child in need.', 'Giving makes people joyful.', 'Kindness is its own reward.', 'Thinking of others changes your heart.'], 0, 'The topic is what the story is about, said simply. The theme is the lesson. The other three choices are all lessons, so they are themes, not the topic.', 'Which choice is not a lesson?'),
      Q('What event makes Clara begin to change her mind?', ['Her cousin tells her to buy the gift.', 'Dad says she has to.', 'The bead kit is sold out.', 'She sees frost and wonders if the girl on the tag has bare, cold hands.'], 3, 'On the cold Wednesday morning, Clara puts on her own warm mittens and imagines the girl at a bus stop with "bare, red fingers." Thinking about someone else\'s needs is the turning point.'),
      Q('How does Clara feel when the clerk wraps the gifts?', ['angry and jealous', 'a warm, fizzy happiness', 'bored and tired', 'sad that she had no money left'], 1, 'The story says Clara "expected to feel sad. Instead... she felt a warm, fizzy happiness." The word "instead" shows her feelings surprised her. This moment is a key clue to the theme.'),
      Q('How does the Christmas Eve service connect to the theme?', ['Clara thinks of God giving the best gift of all, and her gift feels like a way of saying thank you.', 'It shows Clara was bored at church.', 'It shows that candles are important.', 'It explains where the bead kit came from.'], 0, 'Clara connects her small gift to God\'s great gift of Jesus. This deepens the theme: giving is a way to show thankfulness for what we have been given.'),
      Q('Why does Clara tape the drawing inside her closet door?', ['To cover a hole in the door.', 'Because her mom told her to.', 'Because the drawing means more to her now than the bead kit did.', 'To remember to buy a horse.'], 2, 'At the beginning, Clara visited the bead kit in the window "four times." Now she puts the thank-you drawing where she will see it every day. That shows what she treasures has changed. This ending supports the theme.'),
      Q('The story says the weather "turned bitter." What does bitter mean here?', ['tasting sour', 'very cold and stinging', 'very windy and warm', 'angry and upset'], 1, 'Bitter can describe a taste or a feeling, but here it describes weather. Right after, the story says frost covered the grass, so bitter means very cold.', 'What happened to the grass?'),
      Q('The mittens were "lined with soft fleece." What is fleece?', ['a kind of plastic', 'a thin paper wrapping', 'a shiny metal', 'a soft, fuzzy warm fabric'], 3, 'The mittens are meant to be warm, and the word "soft" describes the fleece. Fleece is a fuzzy fabric that keeps hands and bodies warm.'),
      Q('How much money did Clara have left after buying the gifts?', ['fifty cents', 'nothing', 'one dollar', 'ten dollars'], 0, 'She had twenty dollars, and the book and mittens "cost nineteen dollars and fifty cents." $20.00 − $19.50 = $0.50, or fifty cents.', 'Subtract.'),
      Q('Clara "did not mind at all" that there was no bead kit. What can you infer from this?', ['She forgot about the kit completely.', 'She was secretly upset.', 'Her happiness from giving mattered more to her than getting the kit.', 'She planned to buy it in January.'], 2, 'Since Clara had wanted the kit so much at the beginning, not minding shows how much she changed. The joy of giving filled the place where the wish for the kit used to be.')
    ],
    evidence: [
      'At the beginning, how did Clara feel about spending her money on someone else? Copy the sentence that shows it.',
      'What is the theme of the story? State it in a complete sentence and copy one sentence from the story that supports it.',
      'Why do you think the author ended the story with the thank-you drawing? Explain in 2–3 sentences and copy a sentence from the last two paragraphs.'
    ],
    summary: 'Write a 3–4 sentence summary of "The Tag on the Giving Tree." Tell what Clara wanted at first, what choice she made, and how she felt at the end. Finish with the story\'s theme.'
  });

  // ======================= WEEK 10: point of view (fiction told two ways) =======================
  C.unit('reading', 10, {
    title: 'The Kite in the Pecan Tree',
    genre: 'realistic fiction',
    skill: 'point of view (first person and third person)',
    learn: [
      { h: 'First-person point of view', p: "In first person, a character inside the story is telling it. You will see the words I, me, my, we, and us outside of the dialogue. You only know what that one character sees, thinks, and feels, so the narrator might not know the whole truth." },
      { h: 'Third-person point of view', p: "In third person, a narrator OUTSIDE the story tells it. Characters are called he, she, they, or by name. A third-person narrator can often tell you what a character is thinking and feeling, even things the other characters do not know." }
    ],
    passage: [
      "PART ONE: Nora Tells It",
      "My grandfather built the best kite in all of Peach County. It was shaped like a red dragon, with a tail of yellow ribbons that snapped in the wind. On Saturday, he let me fly it at the park, and I asked my little brother, Sam, to hold the spool while I fixed a tangle in the tail.",
      "I had told him a hundred times. “Hold on with both hands. Don't let go, no matter what.”",
      "I bent over the ribbons for about five seconds. When I looked up, the spool was bouncing across the grass, and the dragon was sailing straight toward the giant pecan tree by the fence. It stuck there, high in the branches, flapping like it was trying to escape.",
      "“Sam!” I yelled. “You let go on purpose!”",
      "He didn't say anything. He just stared at his hand. I stomped over to Grandpa's bench, sure that my brother had ruined the whole day because he was bored. I didn't even look back to see where he went.",
      "PART TWO: The Same Afternoon",
      "Sam had been holding the spool with both hands, just as Nora told him. He was proud of the job. The string hummed and tugged like a living thing. Then a bee landed on his knuckle.",
      "Sam froze. Last summer, a bee sting had made his whole arm swell up like a balloon, and he had spent an afternoon at the doctor's office. He tried to stay still. He tried to be brave. But when the bee began to crawl toward his wrist, his hands flew open all by themselves.",
      "The bee buzzed away. So did the kite.",
      "When Nora shouted at him, Sam felt his throat squeeze shut. He wanted to explain, but the words got stuck. So he did the only thing he could think of. He walked to Grandpa's truck and pulled out the long garden rake from the back.",
      "Grandpa saw him and understood right away. Together, they carried the rake to the pecan tree. Grandpa lifted Sam onto his shoulders, and Sam stretched the rake as high as he could. On the third try, the metal teeth caught the dragon's tail. Slowly, gently, he worked it free. The kite floated down into Grandpa's arms with only one small tear.",
      "Nora watched from the bench with her mouth open. Sam carried the kite over and held it out to her.",
      "“A bee was on me,” he said quietly. “I'm sorry.”",
      "Nora felt her face turn hot, but this time it was not from anger. She remembered the doctor's office and the swollen arm. She knelt down so she could look him in the eye.",
      "“I'm the one who should be sorry,” she said. “I didn't even ask what happened.”",
      "Grandpa smiled and pulled a roll of tape from his pocket. “Good thing kites can be fixed,” he said, winking at both of them. “Same as most things.”",
      "That afternoon, the red dragon flew again, higher than before. This time, Sam and Nora held the spool together."
    ],
    vocab: [
      ['spool', 'a round holder that string or thread is wound around'],
      ['tangle', 'a twisted, knotted mess of string or hair'],
      ['knuckle', 'a bony bump where a finger bends'],
      ['swell', 'to become bigger and puffy, often from an injury or sting'],
      ['knelt', 'went down on one or both knees']
    ],
    demo: {
      q: 'What point of view is Part One told in, and how can you tell?',
      steps: [
        'Step 1: Look at the narration (the words NOT inside quotation marks). "My grandfather built the best kite..." and "I asked my little brother..."',
        'Step 2: The narrator uses I, me, and my. That means a character in the story is telling it.',
        'Step 3: Name who it is. The narrator calls Sam "my little brother," so the narrator is Nora.'
      ],
      a: 'Part One is in first-person point of view, told by Nora, because the narrator uses I, me, and my.'
    },
    items: [
      Q('From what point of view is Part One told?', ['third person, by an outside narrator', 'first person, by Nora', 'first person, by Sam', 'first person, by Grandpa'], 1, 'Part One uses "I," "me," and "my" in the narration, and the narrator calls Sam "my little brother." That makes it first person, told by Nora.'),
      Q('From what point of view is Part Two told?', ['third person, by a narrator outside the story', 'first person, by Sam', 'first person, by Nora'], 0, 'Part Two calls the characters "Sam," "he," "Nora," and "Grandpa." No character says "I" in the narration, only inside the quotation marks. That is third person.', 'Ignore the words inside quotation marks.'),
      Q('Which sentence from the story is written in first-person point of view?', ['"Sam froze."', '"Grandpa saw him and understood right away."', '"I stomped over to Grandpa\'s bench."', '"The bee buzzed away."'], 2, 'Only "I stomped over to Grandpa\'s bench" uses "I" in the narration. The others use names or "the bee," which are third person.'),
      Q('What does the reader learn in Part Two that Nora did NOT know in Part One?', ['A bee landed on Sam\'s hand, and he was afraid of being stung.', 'The kite was red.', 'The kite got stuck in a pecan tree.', 'Grandpa built the kite.'], 0, 'Nora was looking at the tail and did not see the bee. Because Part Two is in third person and follows Sam, we learn about the bee and his fear. This is why point of view matters: a first-person narrator can be wrong.'),
      Q('Why did Nora think Sam let go on purpose?', ['Sam told her he did.', 'Grandpa told her so.', 'Sam laughed when the kite flew away.', 'She only saw what happened from her point of view and did not see the bee.'], 3, 'In first person, we only know what Nora saw and thought. She "bent over the ribbons" and missed the bee, so she guessed wrong. Sam never laughed or said he did it on purpose.'),
      Q('If Part Two were rewritten in first person from Sam\'s point of view, which sentence would fit?', ['"Sam had been holding the spool with both hands."', '"I had been holding the spool with both hands."', '"Nora had been holding the spool."', '"He had been holding the spool with both hands."'], 1, 'In first person from Sam\'s view, Sam would call himself "I." The other choices still use a name or "he," which is third person.'),
      Q('What does the word spool mean in the story?', ['a round holder that string is wound around', 'a kind of kite tail', 'a garden tool', 'a pile of leaves'], 0, 'Sam "held the spool," and when he let go, it bounced across the grass while the kite flew away. The kite string was wound around it, so a spool is a round holder for string.'),
      Q('Sam\'s arm had swelled up "like a balloon" after a sting. What does swell mean?', ['to turn blue', 'to become cold', 'to become bigger and puffy', 'to shrink'], 2, 'The comparison "like a balloon" is the clue. A balloon gets bigger as it fills, so swell means to become larger and puffy.'),
      Q('How did Sam show he was sorry, even before he said it?', ['He ran away and hid.', 'He got the rake and worked with Grandpa to rescue the kite.', 'He bought a new kite.', 'He yelled back at Nora.'], 1, 'When the words "got stuck," Sam took action: he got the rake from the truck and freed the kite. His actions spoke before his words did.'),
      Q('What does Grandpa mean when he says kites can be fixed, "Same as most things"?', ['Kites are hard to break.', 'He likes to use tape.', 'He will buy a new kite next week.', 'Mistakes and hurt feelings between people can be fixed too.'], 3, 'Grandpa is talking about more than the kite. Nora and Sam just made up after a misunderstanding. He means relationships can be repaired, just like the torn kite.')
    ],
    evidence: [
      'How did Nora feel toward Sam in Part One? Explain and copy a sentence from Part One that shows her feelings.',
      'Why did Sam let go of the spool? Explain in 2–3 sentences and copy the sentence from Part Two that tells the reason.',
      'Why do you think the author told the story from two points of view instead of one? Explain, and copy a sentence from either part that helps prove your idea.'
    ],
    summary: 'Write a 3–4 sentence summary of "The Kite in the Pecan Tree." Tell what happened to the kite, what Nora thought, what really happened, and how the story ends. Write your summary in third person.'
  });

  // ======================= WEEK 11: poetry (three original poems) =======================
  C.unit('reading', 11, {
    title: 'Three Poems from Home',
    genre: 'poem set',
    skill: 'poetry: stanza, rhyme, rhythm, and line breaks',
    learn: [
      { h: 'Stanzas and line breaks', p: "Poems are written in LINES, not paragraphs. The poet chooses where each line ends, and a line break can make you pause or notice a word. A group of lines together is a STANZA, like a paragraph in a poem. A blank space separates one stanza from the next." },
      { h: 'Rhyme and rhythm', p: "Rhyme is when words end with the same sound, like moon and tune. A rhyme scheme uses letters to show the pattern: in ABAB, lines 1 and 3 rhyme and lines 2 and 4 rhyme. In AABB, lines rhyme in pairs. Rhythm is the beat you hear when you read aloud. Free verse poems do not rhyme or keep a steady beat." }
    ],
    passage: [
      "POEM 1: The Porch Swing",
      "When supper's done and dishes dry,\nI slip out through the squeaky door,\nWhere crickets hum their lullaby\nAnd moonlight spills across the floor.",
      "The porch swing sways and creaks a tune;\nIts chains go forward, then go back.\nI stretch my toes to touch the moon,\nThen float back down. Tick-tack, tick-tack.",
      "The fireflies blink their tiny lights\nLike stars that wandered from the sky.\nThey write their names on summer nights\nIn glowing letters, flying by.",
      "My grandma hums an old, old hymn;\nHer rocking chair keeps time with me.\nThe pines grow black, the sky grows dim,\nAnd one bright star winks out at me.",
      "I'll stay until Mama calls me in,\nUntil the crickets go to bed.\nTomorrow it will start again,\nBut now the stars are overhead.",
      "POEM 2: What the Creek Knows",
      "The creek behind our house\ndoes not hurry\nand does not wait.",
      "It knows the shape\nof every stone,\nthe smooth gray ones\nit has been polishing\nsince before my grandfather\nwas a boy.",
      "It knows where the crawdads hide,\nscooting backward\nunder the roots of the sycamore.\nIt knows the deer\nthat come down at dawn\nto drink,\nstepping soft as whispers.",
      "In summer it is a trickle,\nthin as a ribbon,\nsinging a small, bright song.\nAfter a storm\nit roars,\nbrown and wide and wild,\ncarrying sticks like tiny boats\ntoward the river,\ntoward the sea.",
      "I sit on the big flat rock\nand dip my feet in,\ncold as a secret.\nI tell the creek my questions.\nIt does not answer,\nbut it listens,\nand it keeps going,\nand somehow\nthat is an answer, too.",
      "POEM 3: Saturday Pancakes",
      "On Saturday the house is still;\nThe sun peeks through the windowsill.\nThen Daddy's voice comes up the stairs:\n“It's pancake time, you sleepy bears!”",
      "We tumble down in fuzzy socks.\nMy brother trips on building blocks.\nThe kitchen smells of butter, sweet;\nThe griddle sizzles in the heat.",
      "Dad pours the batter, round and wide,\nThen tilts the bowl and lets it slide:\nA bunny ear! A lumpy star!\nA wobbly thing he calls a car!",
      "He flips one high. It spins! It twirls!\nIt lands right on my sister's curls!\nWe laugh so hard we nearly cry.\nSays Mom, “Well, that's one way to fly.”",
      "Our puppy sits beside my chair;\nHe thumps his tail and sniffs the air.\nI slip him one small bite, and then\nHe begs and thumps his tail again.",
      "We drizzle syrup, gold and slow;\nIt puddles like a pond below.\nWe stack them in a tower tall,\nAnd somehow, still, we eat them all.",
      "The plates are sticky, crumbs are spread,\nThere's syrup on my brother's head,\nBut if you asked me, I would say\nThat Saturday's the finest day."
    ],
    vocab: [
      ['lullaby', 'a soft, gentle song sung to help someone fall asleep'],
      ['hymn', 'a song of praise to God, often sung in church'],
      ['trickle', 'a very thin, slow stream of water'],
      ['griddle', 'a flat, heavy pan used for cooking pancakes'],
      ['drizzle', 'to pour a liquid in a thin, light stream']
    ],
    demo: {
      q: 'What is the rhyme scheme of the first stanza of "The Porch Swing"?',
      steps: [
        'Step 1: Write the last word of each line: dry, door, lullaby, floor.',
        'Step 2: Give the first ending sound the letter A (dry). Door is a new sound, so it is B. Lullaby rhymes with dry, so it is A. Floor rhymes with door, so it is B.',
        'Step 3: Read the letters in order: A, B, A, B.'
      ],
      a: 'The rhyme scheme is ABAB: lines 1 and 3 rhyme (dry, lullaby), and lines 2 and 4 rhyme (door, floor).'
    },
    items: [
      Q('How many stanzas are in "The Porch Swing"?', ['five', 'four', 'six', 'twenty'], 0, 'Each group of four lines, separated by a space, is one stanza. "The Porch Swing" has five groups, so five stanzas. Twenty is the number of LINES, not stanzas.', 'Count the groups, not the lines.'),
      Q('What is the rhyme scheme of each stanza in "Saturday Pancakes"?', ['ABAB', 'ABCD', 'AABB', 'It does not rhyme.'], 2, 'In "Saturday Pancakes," lines rhyme in pairs: still/windowsill, stairs/bears. When lines 1 and 2 rhyme and lines 3 and 4 rhyme, the scheme is AABB. These rhyming pairs are called couplets.'),
      Q('Which poem is written in free verse?', ['The Porch Swing', 'What the Creek Knows', 'Saturday Pancakes'], 1, '"What the Creek Knows" has no rhyme pattern and no steady beat, and its lines are different lengths. That is free verse. The other two poems rhyme and have a regular rhythm.'),
      Q('Why might the poet put "it roars," on a line all by itself in "What the Creek Knows"?', ['Because the poet ran out of space.', 'To make the words rhyme.', 'Because roars is a hard word.', 'To make the reader pause and feel how sudden and strong the creek becomes.'], 3, 'A short line by itself makes you stop and notice it. After quiet lines about a "trickle," the lonely line "it roars," hits hard, just like the stormy creek. Line breaks are a tool poets use on purpose.'),
      Q('In "The Porch Swing," what does the line "Tick-tack, tick-tack" add to the poem?', ['It names a kind of clock.', 'It tells the time of day.', 'It copies the sound and back-and-forth rhythm of the swing.', 'It is a word that rhymes with moon.'], 2, 'Read it aloud: "tick-tack, tick-tack" sounds like the steady creak of a swing moving forward and back. Poets use sounds and rhythm to help you hear what is happening.'),
      Q('Which pair of words RHYMES in "Saturday Pancakes"?', ['socks and blocks', 'butter and griddle', 'syrup and slow', 'Mom and fly'], 0, 'Socks and blocks end with the same "-ocks" sound and come at the ends of two lines. The other pairs do not end with the same sound.'),
      Q('In "The Porch Swing," the crickets "hum their lullaby." What is a lullaby?', ['a loud marching song', 'a sad song about leaving', 'a fast dance', 'a soft song that helps someone fall asleep'], 3, 'The poem takes place at bedtime, and the crickets will soon "go to bed." A lullaby is a gentle sleepy-time song, which matches the quiet mood.'),
      Q('In "What the Creek Knows," the creek in summer is "a trickle, thin as a ribbon." What is a trickle?', ['a huge flood', 'a very thin, slow stream of water', 'a waterfall', 'a frozen pond'], 1, 'The phrase "thin as a ribbon" is the clue. A trickle is a small, thin flow of water. The poem contrasts it with the creek that "roars" after a storm.'),
      Q('How is the MOOD of "Saturday Pancakes" different from the mood of "What the Creek Knows"?', ['"Saturday Pancakes" is noisy and funny; "What the Creek Knows" is quiet and thoughtful.', 'Both poems are scary.', '"Saturday Pancakes" is sad; "What the Creek Knows" is silly.', 'They have exactly the same mood.'], 0, 'The pancake poem is full of laughing, flipping, and syrup on heads, so it feels noisy and funny. The creek poem is calm, with the speaker quietly thinking about her questions. Mood is the feeling a poem gives you.'),
      Q('At the end of "What the Creek Knows," what does the speaker mean when she says the creek\'s listening "is an answer, too"?', ['The creek can talk.', 'She is angry at the creek.', 'She feels comforted by the creek, which keeps going steadily, even without words.', 'She wants to swim in the creek.'], 2, 'The creek "does not answer" in words, but it listens and "keeps going." The speaker feels peace from its steadiness. That calm feeling helps her, so it is a kind of answer.')
    ],
    evidence: [
      'Choose one stanza from any poem and explain its rhyme scheme. Copy the stanza\'s first two lines as evidence.',
      'How does the creek change after a storm? Explain in 2–3 sentences and copy the lines from the poem that show the change.',
      'Which poem is your favorite, and why? Give a reason about its rhyme, rhythm, or line breaks, and copy two lines that you like best.'
    ],
    summary: 'Write a 3–4 sentence summary that tells what each of the three poems is about. Then name one way the poems are written differently (for example, rhyme or free verse).'
  });

  // ======================= WEEK 12: compare and contrast (informational: two animals) =======================
  C.unit('reading', 12, {
    title: 'Alligator or Crocodile?',
    genre: 'informational',
    skill: 'compare and contrast',
    learn: [
      { h: 'Compare and contrast', p: "To COMPARE is to tell how two things are alike. To CONTRAST is to tell how they are different. Signal words for alike: both, also, too, similar, in the same way. Signal words for different: but, however, unlike, while, on the other hand." },
      { h: 'Organize with a Venn diagram', p: "A Venn diagram is two overlapping circles. Write things only true of the first item in its circle, things only true of the second in the other circle, and things true of BOTH in the middle where they overlap. It is a great way to sort details from an informational text." }
    ],
    passage: [
      "At first glance, an alligator and a crocodile look almost exactly alike. Both have long, scaly bodies, powerful tails, short legs, and mouths full of sharp teeth. Many people use the two names as if they mean the same animal. However, these reptiles are more like cousins than twins. If you know what to look for, you can tell them apart.",
      "First, let's look at how they are similar. Both alligators and crocodiles belong to a group of animals called crocodilians, which have lived on Earth since the time of the dinosaurs. Both are cold-blooded, which means their body temperature changes with their surroundings. That is why both spend hours basking in the sun on riverbanks, soaking up warmth, and slipping into the water to cool off.",
      "Both animals are also patient hunters. They float with only their eyes and nostrils above the surface, as still as a log. When a fish, turtle, or bird comes close, they lunge with lightning speed. Both lay eggs in nests on land, and the mothers guard their nests carefully. Surprisingly, the temperature of the nest helps decide whether each baby will be a male or a female.",
      "Now for the differences. The easiest one to spot is the snout. An alligator has a wide, rounded snout shaped like the letter U. A crocodile's snout is long and narrow, more like the letter V. You can also look at the teeth. When an alligator closes its mouth, its wide upper jaw hides most of its lower teeth. When a crocodile closes its mouth, a big tooth on each side of its lower jaw sticks up in plain view, giving it a toothy grin.",
      "Color is another clue. Alligators are usually dark, almost black or deep gray. Crocodiles tend to be lighter, often olive green or tan.",
      "The two animals also prefer different homes. Alligators live mostly in fresh water, such as swamps, lakes, ponds, and slow rivers. Crocodiles, on the other hand, can live comfortably in salty water near the coast. They have special glands on their tongues that help remove extra salt from their bodies. Alligators have these glands too, but theirs do not work nearly as well, so alligators usually stay away from salty water for long periods.",
      "Where in the world can you find them? The American alligator lives in the southeastern United States, including the swamps and rivers of Georgia. Crocodiles live in warm places all around the world, in parts of Africa, Asia, Australia, and the Americas. In the United States, the American crocodile is found only in the southern tip of Florida. In fact, South Florida is the only place on Earth where alligators and crocodiles live naturally side by side.",
      "So the next time you see one of these toothy reptiles at a zoo, look closely. Check the snout, the teeth, and the color. Then you will know whether you are face to face with an alligator or a crocodile."
    ],
    vocab: [
      ['reptiles', 'cold-blooded animals with scaly skin that usually lay eggs, such as snakes, turtles, and alligators'],
      ['basking', 'lying in warm sunshine to soak up heat'],
      ['lunge', 'to move forward suddenly and with great force'],
      ['snout', 'the long nose and jaws that stick out from an animal\'s face'],
      ['glands', 'small body parts that make or remove certain substances']
    ],
    demo: {
      q: 'What is one way alligators and crocodiles are alike, and one way they are different?',
      steps: [
        'Step 1: Find a "compare" paragraph. Paragraph 2 starts "let\'s look at how they are similar" and uses the word "Both." Both are cold-blooded and bask in the sun.',
        'Step 2: Find a "contrast" paragraph. Paragraph 4 starts "Now for the differences." The alligator\'s snout is U-shaped; the crocodile\'s is V-shaped.',
        'Step 3: Put them together in one sentence with signal words: "Both... but..."'
      ],
      a: 'Both alligators and crocodiles are cold-blooded and bask in the sun, but an alligator has a U-shaped snout while a crocodile has a V-shaped snout.'
    },
    items: [
      Q('Which sentence tells how alligators and crocodiles are ALIKE?', ['Alligators are usually darker in color.', 'Both lay eggs in nests and guard them.', 'Crocodiles can live in salty water.', 'An alligator has a U-shaped snout.'], 1, 'The word "Both" signals a similarity. Laying eggs in nests and guarding them is true of both animals. The other choices describe only one animal, so they are differences.'),
      Q('What is the easiest difference to spot, according to the passage?', ['the length of the tail', 'the number of legs', 'how they hunt', 'the shape of the snout'], 3, 'Paragraph 4 says, "The easiest one to spot is the snout." Alligators have a wide U-shaped snout, and crocodiles have a narrow V-shaped one.'),
      Q('Which signal word in paragraph 6 shows a CONTRAST?', ['"on the other hand"', '"such as"', '"mostly"', '"too"'], 0, '"On the other hand" introduces a difference: alligators live mostly in fresh water, while crocodiles can live in salty water. "Too" is used for something that is alike.'),
      Q('You see a reptile with a narrow snout, light olive skin, and a big lower tooth showing when its mouth is closed. What is it most likely?', ['an alligator', 'a turtle', 'a crocodile'], 2, 'A narrow V-shaped snout, lighter color, and a visible lower tooth are all crocodile clues from the passage. An alligator would have a wide snout, darker skin, and hidden lower teeth.', 'Check the snout, teeth, and color.'),
      Q('Why can crocodiles live in salty water better than alligators can?', ['Crocodiles drink only fresh water.', 'Crocodiles have glands on their tongues that work well to remove extra salt.', 'Alligators are afraid of the ocean.', 'Crocodiles have thicker scales.'], 1, 'Paragraph 6 explains that crocodiles have special glands that remove salt. Alligators have them too, "but theirs do not work nearly as well." That difference is the reason.'),
      Q('In a Venn diagram, where would you write "cold-blooded"?', ['only in the alligator circle', 'only in the crocodile circle', 'outside both circles', 'in the middle, where the circles overlap'], 3, 'Paragraph 2 says BOTH animals are cold-blooded. Facts true of both go in the overlapping middle part of a Venn diagram.'),
      Q('What makes South Florida special for these animals?', ['It has no alligators.', 'It is where all crocodiles come from.', 'It is the only place on Earth where alligators and crocodiles live naturally side by side.', 'It is too cold for crocodiles.'], 2, 'The passage says South Florida "is the only place on Earth where alligators and crocodiles live naturally side by side," because both the American alligator and American crocodile live there.'),
      Q('The passage says the animals spend hours "basking in the sun." What does basking mean?', ['lying in warm sunshine to soak up heat', 'hiding in the shade', 'swimming quickly', 'digging a nest'], 0, 'The same sentence says they are "soaking up warmth" on riverbanks. Basking means lying in the sun to get warm, which cold-blooded animals need to do.'),
      Q('When a fish comes close, the reptiles "lunge with lightning speed." What does lunge mean?', ['to fall asleep', 'to sink slowly', 'to swim away', 'to move forward suddenly and forcefully'], 3, 'The phrase "with lightning speed" and the idea of catching a fish tell you this is a sudden, powerful forward movement. That is what lunge means.'),
      Q('Why does the author compare the two animals to "cousins" instead of "twins"?', ['They live in the same family home.', 'They are related and similar, but not exactly the same.', 'They are exactly alike.', 'They were born at the same time.'], 1, 'Twins look almost exactly alike, but cousins are related and share some features while still being different. The author uses this comparison to show the animals are similar but can be told apart.')
    ],
    evidence: [
      'Explain how to tell an alligator from a crocodile by looking at its teeth. Copy the sentence from the passage that describes the crocodile\'s teeth.',
      'Name two ways alligators and crocodiles are alike. Copy one sentence that uses the word "Both."',
      'How are the homes of alligators and crocodiles different? Explain in 2–3 sentences and copy a supporting sentence from paragraph 6.'
    ],
    summary: 'Write a 3–4 sentence summary of "Alligator or Crocodile?" Tell how the two animals are alike and give at least two ways they are different.'
  });

  // ======================= WEEK 13: context clues (informational: inventions) =======================
  C.unit('reading', 13, {
    title: 'Two Brothers and a Flying Machine',
    genre: 'informational',
    skill: 'context clues',
    learn: [
      { h: 'What are context clues?', p: "Context clues are hints in the words and sentences around an unfamiliar word that help you figure out what it means. Good readers do not stop at a hard word. They read the whole sentence, and sometimes the sentences before and after, looking for clues." },
      { h: 'Kinds of clues', p: "DEFINITION: the author tells you the meaning (\"which means...\" or \"A glider is...\"). SYNONYM: a word nearby means the same thing. ANTONYM: a word nearby means the opposite, often after but or unlike. EXAMPLE: the author lists examples (\"such as...\"). After you guess, plug your meaning into the sentence to see if it makes sense." }
    ],
    passage: [
      "For thousands of years, people watched birds soar across the sky and dreamed of flying. Many inventors tried and failed. Then, in the early 1900s, two brothers from Dayton, Ohio, found the answer. Their names were Wilbur and Orville Wright.",
      "The brothers became fascinated by flight when they were boys. Their father brought home a small toy flying machine powered by a twisted rubber band. Wilbur and Orville were so interested that they played with it until it broke, and then they built their own copies.",
      "As young men, the Wrights opened a bicycle shop. Fixing bicycles taught them to be meticulous. They checked every bolt, measured every part, and never rushed a job. This careful way of working would become their greatest strength.",
      "The brothers spent hours watching buzzards and other large birds. They noticed something that other inventors had overlooked, or missed. When a bird tipped to one side, it twisted the tips of its wings to balance itself. The Wrights figured out a way to make the wings of a flying machine twist in the same way. They called it wing warping.",
      "Before trying to fly with an engine, the brothers built gliders. A glider is an aircraft with no motor that rides on the wind. In 1900, they carried their gliders to Kitty Hawk, North Carolina. They chose the spot because of its strong, steady winds and its soft sand dunes, which made landings much safer than hard ground.",
      "Their early gliders were disappointing. They did not lift as well as the brothers expected. Instead of giving up, the Wrights persevered. Back in Dayton, they built a wind tunnel, a long box with a fan that blew air across small model wings. They tested about two hundred different wing shapes and wrote down every result. Their next glider flew far better than any before it.",
      "Now they needed an engine. Car engines of the time were far too heavy, so the brothers and their mechanic, Charlie Taylor, built a lightweight engine of their own. The Wrights also designed propellers, spinning blades that push or pull an aircraft through the air.",
      "On December 14, 1903, the brothers flipped a coin to decide who would try first. Wilbur won, but the machine stalled and bumped into the sand. After repairs, it was Orville's turn. On the cold, windy morning of December 17, 1903, Orville lay on the lower wing, started the engine, and rose into the air. The flight lasted only twelve seconds and covered about 120 feet, but it was the first time a person had flown a powered airplane that took off under its own power and stayed under control. That same day, Wilbur flew for 59 seconds.",
      "At first, many people were skeptical. Newspapers doubted the story, and some people refused to believe it until they saw the brothers fly with their own eyes. Within a few years, though, the whole world knew the names of the Wright brothers. Their patience, careful work, and refusal to quit had carried humans into the sky."
    ],
    vocab: [
      ['fascinated', 'extremely interested in something'],
      ['meticulous', 'very careful and exact about every detail'],
      ['overlooked', 'missed or failed to notice'],
      ['persevered', 'kept trying even when things were hard'],
      ['skeptical', 'doubtful; not ready to believe something']
    ],
    demo: {
      q: 'Use context clues to figure out what "meticulous" means in paragraph 3.',
      steps: [
        'Step 1: Read the sentences around the word. "They checked every bolt, measured every part, and never rushed a job."',
        'Step 2: Look for the next clue. "This careful way of working..." The author repeats the idea with the word careful.',
        'Step 3: Make a guess and test it in the sentence: "Fixing bicycles taught them to be very careful about every detail." It makes sense.'
      ],
      a: 'Meticulous means very careful and exact about every detail. The examples and the word "careful" are the clues.'
    },
    items: [
      Q('In paragraph 2, the brothers were "fascinated" by flight. Which clue BEST helps you understand fascinated?', ['"Wilbur and Orville were so interested that they played with it until it broke."', '"Their father brought home a small toy."', '"powered by a twisted rubber band"', '"when they were boys"'], 0, 'The next sentence says they were "so interested" that they played with the toy until it broke and then built copies. That shows fascinated means extremely interested. The other choices tell about the toy, not their feelings.'),
      Q('Paragraph 4 says other inventors had "overlooked, or missed" something. What kind of context clue is "or missed"?', ['an antonym (opposite)', 'an example', 'a synonym (same meaning)', 'a picture'], 2, 'The word "or" followed by "missed" gives a word that means the same as overlooked. That is a synonym clue. Authors often use "or" this way to explain a harder word.'),
      Q('What does "persevered" mean in paragraph 6?', ['gave up quickly', 'kept trying even when things were hard', 'became very angry', 'went on vacation'], 1, 'The sentence begins "Instead of giving up, the Wrights persevered." "Instead of giving up" is an antonym clue: persevered means the opposite of giving up. Then the paragraph shows them working harder.', 'What did they do instead of giving up?'),
      Q('Which sentence gives a DEFINITION clue for the word glider?', ['"Before trying to fly with an engine, the brothers built gliders."', '"In 1900, they carried their gliders to Kitty Hawk."', '"Their early gliders were disappointing."', '"A glider is an aircraft with no motor that rides on the wind."'], 3, 'A definition clue tells you exactly what a word means, often with "is." "A glider is an aircraft with no motor..." does that. The other sentences use the word without explaining it.'),
      Q('In paragraph 9, many people were "skeptical." Which words from the paragraph are clues?', ['"Newspapers doubted the story" and "refused to believe it"', '"the whole world knew"', '"their patience, careful work"', '"carried humans into the sky"'], 0, 'Doubting and refusing to believe are what a skeptical person does. Those nearby words explain the meaning: skeptical means doubtful.'),
      Q('Paragraph 7 says propellers are "spinning blades that push or pull an aircraft through the air." What kind of context clue is this?', ['antonym', 'example', 'definition', 'there is no clue'], 2, 'The author explains the word right after it, separated by a comma. When the sentence directly tells what a word means, it is a definition clue.'),
      Q('Why did the Wright brothers choose Kitty Hawk to test their gliders?', ['It was close to their home in Dayton.', 'It had strong, steady winds and soft sand for safer landings.', 'It had many tall trees.', 'Other inventors told them to go there.'], 1, 'Paragraph 5 says they chose it "because of its strong, steady winds and its soft sand dunes." Kitty Hawk is in North Carolina, far from Ohio, so being close to home is wrong.'),
      Q('How did the brothers get the idea for wing warping?', ['From a book about engines.', 'From a toy helicopter.', 'From Charlie Taylor.', 'By watching birds twist their wingtips to balance.'], 3, 'Paragraph 4 explains that birds twist the tips of their wings to balance when they tip. The Wrights copied this idea for their flying machine.'),
      Q('What did the wind tunnel help the brothers do?', ['Keep their bicycle shop cool.', 'Start the engine.', 'Test many wing shapes and find which ones worked best.', 'Fly to Kitty Hawk.'], 2, 'The wind tunnel blew air across small model wings so the brothers could test about two hundred shapes and record results. Their next glider flew much better because of this testing.'),
      Q('Which sentence BEST describes Orville\'s first flight on December 17, 1903?', ['It lasted about twelve seconds and went about 120 feet.', 'It lasted an hour and crossed the ocean.', 'It crashed before leaving the ground.', 'Wilbur was the pilot.'], 0, 'The passage says the flight "lasted only twelve seconds and covered about 120 feet." It was short, but it was the first controlled, powered airplane flight. Wilbur\'s 59-second flight came later that same day.')
    ],
    evidence: [
      'What does the word "meticulous" mean? Tell what clues helped you, and copy the sentence that contains the best clue.',
      'How did the Wright brothers show they did not give up? Explain in 2–3 sentences and copy a supporting sentence.',
      'Find one more hard word in the passage that was NOT on the vocabulary list. Tell what you think it means and copy the sentence with the context clue that helped you.'
    ],
    summary: 'Write a 3–4 sentence summary of "Two Brothers and a Flying Machine." Tell who the Wright brothers were, the most important steps they took, and what happened on December 17, 1903.'
  });

  // ======================= WEEK 14: figurative language (fiction) =======================
  C.unit('reading', 14, {
    title: 'Morning on Heron Lake',
    genre: 'realistic fiction',
    skill: 'figurative language (similes and metaphors)',
    learn: [
      { h: 'Similes', p: "Figurative language means words that say something in a creative way, not exactly as it is. A SIMILE compares two different things using the word like or as. \"The lake was as smooth as glass\" does not mean the lake is glass. It means the water is very flat and still." },
      { h: 'Metaphors', p: "A METAPHOR compares two different things WITHOUT using like or as. It says one thing IS another. \"The lake was a mirror\" means it reflected everything clearly. To understand any comparison, ask: what do these two things have in common?" }
    ],
    passage: [
      "Grandpa knocked on June's door while the house was still as dark as the inside of a pocket. “Lake's waiting,” he whispered. June was out of bed in two seconds flat. Fishing with Grandpa at Heron Lake was the best thing about visiting him, and she would not miss it for anything.",
      "Outside, the air was cool and damp, like a washcloth wrung out and left on the sink. The truck's headlights cut two yellow tunnels through the fog. June held the bait bucket on her lap. Inside, the crickets chirped like a tiny, nervous choir.",
      "By the time they reached the dock, the sky was turning the color of peach ice cream. The lake was a sheet of glass, so still that the cattails along the edge stood upside down in the water below them. Grandpa rowed the old green boat out to his favorite spot near a fallen oak. His oars dipped in and out, soft as a whisper.",
      "June baited her hook the way Grandpa had taught her and cast her line. The red-and-white bobber landed with a plip and sat there, a tiny lighthouse on the dark water. She stared at it. She waited. She stared some more.",
      "“Patience is a fishing pole,” Grandpa said, leaning back on his seat. “The longer you hold it, the more you catch.”",
      "June wasn't sure that was how patience worked, but she tried. The sun climbed higher and spilled gold across the water. A great blue heron stood in the shallows on legs as thin as pencils, watching for fish just like she was. A turtle poked its head up, looked around like a grumpy old man, and sank back down.",
      "Then the bobber dipped. It popped back up, then disappeared completely.",
      "“Now!” said Grandpa.",
      "June yanked the pole. The line went tight as a guitar string, and the tip of the pole bent toward the water. Something on the other end was a freight train, pulling with all its might. June's heart was a drum, pounding so loudly she was sure the fish could hear it. She reeled and pulled and reeled again while Grandpa coached her in a calm, low voice.",
      "At last, a fish burst out of the water, flashing like a silver coin in the sunlight. It was a largemouth bass, the biggest one June had ever seen. Grandpa scooped it up with the net, and they both laughed out loud, their voices bouncing across the lake.",
      "June held the bass while Grandpa took a picture with his old phone. Its scales were cool and slick, and its eyes were shiny black buttons. Then, as they always did, she slipped it gently back into the water. With a flick of its tail, it was gone.",
      "On the ride home, June leaned her head against the window. Her arms felt like cooked noodles, and her face hurt from smiling. Grandpa hummed along with the radio.",
      "“Same time tomorrow?” he asked.",
      "June grinned. “The lake will be waiting.”"
    ],
    vocab: [
      ['damp', 'slightly wet'],
      ['cast', 'to throw a fishing line out into the water'],
      ['bobber', 'a small float on a fishing line that dips under when a fish bites'],
      ['shallows', 'the parts of a lake or river where the water is not deep'],
      ['coached', 'gave help and advice to someone while they were doing something']
    ],
    demo: {
      q: 'Is "June\'s heart was a drum" a simile or a metaphor, and what does it mean?',
      steps: [
        'Step 1: Find the two things being compared: June\'s heart and a drum.',
        'Step 2: Check for "like" or "as." There is neither. The sentence says her heart WAS a drum, so it is a metaphor.',
        'Step 3: Ask what they have in common. A drum makes loud, strong beats. The next words, "pounding so loudly," confirm it.'
      ],
      a: 'It is a metaphor. It means June\'s heart was beating hard and fast with excitement.'
    },
    items: [
      Q('Which sentence from the story contains a SIMILE?', ['"The lake was a sheet of glass."', '"Something on the other end was a freight train."', '"June\'s heart was a drum."', '"Inside, the crickets chirped like a tiny, nervous choir."'], 3, 'A simile uses "like" or "as." The crickets chirped LIKE a choir, so that is a simile. The other three say one thing WAS another, which makes them metaphors.', 'Look for like or as.'),
      Q('Which sentence contains a METAPHOR?', ['"The line went tight as a guitar string."', '"The lake was a sheet of glass."', '"legs as thin as pencils"', '"flashing like a silver coin"'], 1, '"The lake was a sheet of glass" compares the lake to glass without using like or as. The other choices all use "like" or "as," so they are similes.'),
      Q('What does the simile "as dark as the inside of a pocket" tell you?', ['The house was completely dark.', 'June\'s pockets were full.', 'The house was small.', 'Grandpa lost something.'], 0, 'The inside of a pocket is a place where no light gets in. Comparing the house to it shows that it was very, very dark because it was so early.'),
      Q('The fish on the line "was a freight train." What does this metaphor show?', ['The fish was making train noises.', 'The fish was traveling on tracks.', 'The fish was pulling with great strength.', 'The fish was very slow.'], 2, 'A freight train is huge and powerful. The sentence goes on to say it was "pulling with all its might." The metaphor shows how strong the fish felt on the line.'),
      Q('Grandpa says, "Patience is a fishing pole." What does he mean?', ['Fishing poles are hard to hold.', 'The longer you stay patient, the more good things you can get.', 'June should buy a new pole.', 'Patience is not important.'], 1, 'Grandpa explains his own metaphor: "The longer you hold it, the more you catch." He means sticking with something patiently pays off, just as it did when June finally caught the bass.'),
      Q('June\'s arms "felt like cooked noodles." How did her arms feel?', ['strong and stiff', 'hot and burned', 'wet and slimy', 'tired, weak, and floppy'], 3, 'Cooked noodles are limp and floppy. After fighting a big fish, June\'s arms were tired and weak. This is a simile because it uses "like."'),
      Q('Why does the author describe the bobber as "a tiny lighthouse on the dark water"?', ['It stood out, small and bright, on the dark lake, and June kept her eyes on it.', 'It was shining a bright light.', 'It was made of stone.', 'It was guiding ships.'], 0, 'A lighthouse is a bright thing you watch on dark water. The red-and-white bobber stands out the same way, and June stares at it waiting for a bite. The metaphor helps you picture it.'),
      Q('The heron stood "in the shallows." What are shallows?', ['the deepest part of the lake', 'the dock', 'places where the water is not deep', 'the sky'], 2, 'A heron stands in water on its thin legs, so the water must not be deep. Shallows are areas of shallow, or not-deep, water.'),
      Q('In the story, what does it mean that Grandpa "coached" June?', ['He drove her to a game.', 'He gave her calm help and advice while she reeled in the fish.', 'He took the pole away from her.', 'He yelled at her.'], 1, 'The sentence says Grandpa coached her "in a calm, low voice" while she reeled. A coach gives guidance while someone does the work. He did not take over or yell.'),
      Q('What does June do with the bass, and what does it show about her and Grandpa?', ['She keeps it for dinner, showing they are hungry.', 'She gives it to the heron.', 'She drops it by accident.', 'She gently lets it go, showing they care about the lake and fish.'], 3, 'June "slipped it gently back into the water," and the story says "as they always did." This shows they fish for the fun and respect the fish and the lake.')
    ],
    evidence: [
      'Find a simile that describes something June SAW. Copy it, and explain in 2–3 sentences what two things are being compared and what it helps you picture.',
      'Find a metaphor that shows how June FELT. Copy it and explain what it means.',
      'How do you know June loves fishing with Grandpa? Explain and copy a sentence from the story that shows it.'
    ],
    summary: 'Write a 3–4 sentence summary of "Morning on Heron Lake." Tell where June goes, what happens while she fishes, and how the morning ends. Include one simile or metaphor from the story in your summary.'
  });

  // ======================= WEEK 15: drama (short original play) =======================
  C.unit('reading', 15, {
    title: 'The Bake Sale Mix-Up',
    genre: 'drama',
    skill: 'drama: cast of characters, dialogue, and stage directions',
    learn: [
      { h: 'Parts of a play', p: "A play, or drama, is a story written to be acted out. It begins with a CAST OF CHARACTERS, a list of everyone in the play. The SETTING tells where and when it happens. Plays are often split into SCENES, which are like chapters. Instead of paragraphs, a play is made mostly of DIALOGUE: the words the characters say, written after each character's name." },
      { h: 'Stage directions', p: "STAGE DIRECTIONS are instructions for the actors, usually written in parentheses or italics. They tell how to move, what to do, and how to say a line, such as (whispering) or (runs to the door). Stage directions are NOT spoken aloud. They help readers picture the action." }
    ],
    passage: [
      "CAST OF CHARACTERS: MAYA, a ten-year-old girl who likes to be in charge. LEO, her eight-year-old brother. GRANDMA ROSE, their grandmother. MR. FINCH, the friendly neighbor next door.",
      "SETTING: Grandma Rose's kitchen on a Saturday afternoon. A bowl, measuring cups, and two canisters sit on the counter.",
      "SCENE 1",
      "(MAYA enters wearing an apron that is much too big. LEO follows, carrying a wooden spoon like a sword.)",
      "MAYA: (in a loud whisper) Shh! Grandma is napping. We are going to bake the cookies for the church bake sale all by ourselves and surprise her.",
      "LEO: (waving the spoon) Can I be the chef?",
      "MAYA: I'm the chef. You're the assistant. Hand me the sugar.",
      "(LEO looks at the two canisters. Neither has a label. He shrugs and hands her one.)",
      "MAYA: (reading from a recipe card) Two cups of sugar. (She dumps two cups into the bowl.) Eggs, butter, flour. This is easy.",
      "(They stir, mix, and drop spoonfuls onto a pan. MAYA slides it into the oven.)",
      "LEO: (sniffing the air) Smells good. Can I taste one?",
      "MAYA: Not until they cool. Professional bakers have rules.",
      "(A knock at the door. MR. FINCH pokes his head in.)",
      "MR. FINCH: I thought I smelled cookies! I'm on my way to the church to help set up the tables.",
      "MAYA: (proudly) They're almost done. You can be our first customer!",
      "(MAYA pulls the pan out of the oven and hands MR. FINCH a warm cookie. He takes a big bite. He stops chewing. His eyes grow wide. He swallows slowly.)",
      "MR. FINCH: (coughing) My, that is... very... interesting.",
      "LEO: (grabbing a cookie and biting it) Bleh! (He spits into a napkin.) It tastes like the ocean!",
      "MAYA: (horrified, tasting a crumb) Salt! Leo, you gave me the SALT!",
      "LEO: You said sugar! They look exactly the same!",
      "SCENE 2",
      "(GRANDMA ROSE enters, rubbing her eyes. She looks at the messy counter, the cookies, and the three guilty faces.)",
      "GRANDMA ROSE: Well, what do we have here?",
      "(MAYA and LEO look at each other. LEO hides the spoon behind his back.)",
      "MAYA: (taking a deep breath) Grandma, we wanted to surprise you. But I didn't check which canister was which. It's my fault, not Leo's. I'm sorry.",
      "LEO: (quietly) I'm sorry too. I should have asked.",
      "GRANDMA ROSE: (smiling and putting an arm around each of them) Do you know how many times I've mixed up salt and sugar? At least three. Telling the truth right away is the best thing you could have done.",
      "MR. FINCH: (chuckling) And now I know to drink a big glass of water before I taste anything in this kitchen.",
      "(Everyone laughs. GRANDMA ROSE takes a marker and writes SUGAR on one canister and SALT on the other.)",
      "GRANDMA ROSE: Now. Shall we try again, together this time?",
      "MAYA: (tying the apron tighter) Yes! And Leo can be the chef.",
      "LEO: (holding the spoon high) Finally!",
      "(Lights fade as the three of them begin measuring, side by side.)",
      "THE END"
    ],
    vocab: [
      ['canisters', 'containers with lids, used to store things like flour or sugar'],
      ['assistant', 'a person who helps someone else do a job'],
      ['professional', 'doing a job with skill, like an expert who is paid for it'],
      ['horrified', 'very shocked and upset'],
      ['guilty', 'showing that you know you did something wrong']
    ],
    demo: {
      q: 'In the line "MR. FINCH: (coughing) My, that is... very... interesting," which part is dialogue and which part is a stage direction?',
      steps: [
        'Step 1: Find the character name followed by a colon. MR. FINCH is the one speaking.',
        'Step 2: Find the words in parentheses: (coughing). That tells the actor what to DO, so it is a stage direction. It is not said out loud.',
        'Step 3: Everything else after the name is what he says: "My, that is... very... interesting."'
      ],
      a: '"(coughing)" is a stage direction that tells how Mr. Finch acts, and "My, that is... very... interesting" is his dialogue.'
    },
    items: [
      Q('What is the purpose of the CAST OF CHARACTERS at the beginning?', ['To tell the moral of the play.', 'To give the stage directions.', 'To list and briefly describe everyone in the play.', 'To show where the play ends.'], 2, 'The cast of characters lists every character with a short description, like "LEO, her eight-year-old brother." It helps readers and actors know who is who before the play begins.'),
      Q('Which line from the play is a STAGE DIRECTION?', ['"(LEO looks at the two canisters. Neither has a label.)"', '"MAYA: I\'m the chef."', '"LEO: Finally!"', '"GRANDMA ROSE: Well, what do we have here?"'], 0, 'Stage directions are written in parentheses and describe actions. They are not spoken. The other choices are dialogue, the words characters say after their names.'),
      Q('What is the setting of the play?', ['a church on Sunday morning', 'Mr. Finch\'s house', 'a bakery downtown', 'Grandma Rose\'s kitchen on a Saturday afternoon'], 3, 'The SETTING line tells us: "Grandma Rose\'s kitchen on a Saturday afternoon." Mr. Finch mentions the church, but the play never moves there.'),
      Q('In the stage direction "He stops chewing. His eyes grow wide. He swallows slowly," what does the playwright want the audience to understand?', ['Mr. Finch loves the cookie.', 'Something is very wrong with the cookie.', 'Mr. Finch is sleepy.', 'The cookie is too hot.'], 1, 'An actor following these directions would show surprise and dislike without words. Then Mr. Finch coughs and calls the cookie "interesting," a polite way of hiding that it tastes bad. Stage directions can reveal what characters do not say.'),
      Q('Why does the play have two scenes?', ['Scene 2 begins when the time or situation changes: Grandma wakes up and enters.', 'Because the first scene was too funny.', 'Because the play moves to a different town.', 'Scene 2 is a different story.'], 0, 'Playwrights start a new scene when something important changes. In Scene 2, Grandma Rose wakes up and the problem must be faced. It is the same story, in the same kitchen.'),
      Q('How would an actor say the line marked "(in a loud whisper)"?', ['by shouting as loudly as possible', 'by singing it', 'by whispering in a way the audience can still hear', 'by saying nothing'], 2, 'Maya is trying not to wake Grandma, so she whispers, but the audience must hear her, so it is a loud whisper. This stage direction tells the actor HOW to deliver the line.'),
      Q('Maya says, "Professional bakers have rules." What does professional mean?', ['a person who bakes only at home', 'someone skilled who does a job like an expert', 'someone who never follows rules', 'a beginner'], 1, 'Maya is pretending to be an expert baker, like someone who bakes for a job. Professional means skilled at a job, the way an expert is.'),
      Q('Maya is "horrified" when she tastes the cookie. What does horrified mean?', ['calm and relaxed', 'proud and happy', 'sleepy', 'very shocked and upset'], 3, 'Maya just discovered she used salt instead of sugar, after promising a perfect surprise. Horrified means very shocked and upset, which fits her shout: "Salt!"'),
      Q('What does Maya do that shows she has changed by the end of the play?', ['She takes responsibility and lets Leo be the chef.', 'She blames Leo for the mistake.', 'She leaves the kitchen.', 'She hides the cookies.'], 0, 'At the start, Maya insisted, "I\'m the chef." By the end, she says the mistake was her fault and says, "Leo can be the chef." She learned to be honest and to share.'),
      Q('Which lesson does Grandma Rose want Maya and Leo to learn?', ['Never bake without a grown-up.', 'Salt is better than sugar.', 'Telling the truth right away is the best thing to do after a mistake.', 'Bake sales are not important.'], 2, 'Grandma says, "Telling the truth right away is the best thing you could have done." She is not angry about the mistake. She is proud that they were honest.')
    ],
    evidence: [
      'How does Mr. Finch react when he tastes the cookie? Use the stage directions to explain, and copy one stage direction that shows his reaction.',
      'How is Maya different at the end of the play than at the beginning? Explain in 2–3 sentences and copy one line of her dialogue as evidence.',
      'Why do you think Grandma Rose labels the canisters? Explain, and copy the stage direction that shows her doing it.'
    ],
    summary: 'Write a 3–4 sentence summary of "The Bake Sale Mix-Up." Tell who the main characters are, what problem happens in Scene 1, and how it is solved in Scene 2.'
  });

  // ======================= WEEK 16: fables and morals (two original fables) =======================
  C.unit('reading', 16, {
    title: 'Two Fables from the Forest',
    genre: 'fable',
    skill: 'fable and its moral',
    learn: [
      { h: 'What is a fable?', p: "A fable is a short story that teaches a lesson. The characters are usually animals that talk and act like people, and each animal often stands for one kind of behavior, such as a boastful animal or a wise one. The most famous fables were told long ago by a storyteller from ancient Greece named Aesop." },
      { h: 'The moral', p: "The lesson of a fable is called its MORAL. Sometimes it is written at the end, and sometimes you have to figure it out. To find the moral, look at what the main character does wrong or right and what happens because of it. A moral is a short rule for living, like \"Slow and steady wins the race.\"" }
    ],
    passage: [
      "FABLE 1: The Woodpecker and the Owl",
      "In a tall pine forest lived a Woodpecker who loved to be noticed. From sunrise to sunset, he drummed on the trunks of trees. Rat-a-tat-tat! Rat-a-tat-tat! The sound echoed through the whole forest.",
      "“Listen to me work!” he called out. “No one in this forest works as hard as I do!”",
      "The Squirrels and the Rabbits nodded. “He must be the hardest worker of all,” they said to one another. “Just listen to all that noise.”",
      "In a hollow of the oldest oak lived an Owl. All day she rested quietly, and the other animals hardly knew she was there. But each night, while the forest slept, she flew silently over the meadow and caught mice for her family. She never said a word about it.",
      "One afternoon, the Woodpecker landed near her hollow. “You lazy thing,” he said. “All day long you sit and do nothing. Why don't you work like me?”",
      "The Owl blinked. “Work is not measured by how loud it is,” she said, and she closed her eyes again.",
      "Winter came early that year. The Woodpecker had spent so much time drumming on dead branches just to be heard that he had stored very little food. Soon he was hungry and cold. One snowy evening, he saw the Owl's hollow, where her well-fed owlets slept snugly in a nest of feathers.",
      "Ashamed, the Woodpecker asked for help. The kind Owl shared a little of what she had, and the Woodpecker learned to drum a bit less and search a bit more.",
      "Moral: Noise is not the same as hard work.",
      "FABLE 2: The Firefly Who Wanted to Shine Alone",
      "On warm summer nights, a meadow at the edge of the woods twinkled with a thousand fireflies. One small Firefly wished that everyone would look only at her.",
      "“If the others would stop glowing,” she thought, “then my light would be the most beautiful thing in the meadow.”",
      "So she flew from firefly to firefly. “Your light is too dim,” she told one. “Yours blinks too slowly,” she told another. “Why don't you all rest tonight and let me shine?”",
      "One by one, the fireflies grew discouraged and dimmed their lights. At last, only the small Firefly was glowing. She flashed proudly, waiting for the meadow to admire her.",
      "But without the others, the meadow was almost completely dark. A young Rabbit hopping home lost her way and began to cry. A lost Moth fluttered in circles, bumping into the grass. Nobody noticed the one small light at all.",
      "The Firefly felt foolish. She flew to her friends and said, “I was wrong. Please shine again.” As their lights blinked on, the meadow glowed like a sky full of stars. The Rabbit found her path home, and the Moth found its way. The small Firefly shone among them, and she had never felt happier.",
      "Moral: We shine brightest when we shine together."
    ],
    vocab: [
      ['echoed', 'sounded again and again as it bounced off things'],
      ['hollow', 'an empty space inside something, like a hole inside a tree'],
      ['ashamed', 'feeling bad and embarrassed about something you did'],
      ['discouraged', 'having lost hope or the wish to keep trying'],
      ['admire', 'to look at with delight and respect']
    ],
    demo: {
      q: 'How does the moral "Noise is not the same as hard work" fit Fable 1?',
      steps: [
        'Step 1: Look at what the main character does. The Woodpecker drums loudly all day so others will think he is a hard worker.',
        'Step 2: Look at what happens because of it. He stores little food and goes hungry in winter. The quiet Owl, who worked silently each night, has plenty.',
        'Step 3: Connect the two. The loud one was not truly the hardest worker. The quiet one was.'
      ],
      a: 'The Woodpecker made the most noise, but the quiet Owl did the real work, so the moral teaches that being loud is not the same as working hard.'
    },
    items: [
      Q('What makes both stories fables?', ['They are long books with chapters.', 'They are short stories with talking animals that teach a lesson.', 'They are true stories about real animals.', 'They are poems that rhyme.'], 1, 'Fables are short, have animal characters who talk and act like people, and teach a moral. Both stories have all three. Real woodpeckers and fireflies do not talk, so these are not true stories.'),
      Q('Why did the Squirrels and Rabbits believe the Woodpecker was the hardest worker?', ['They had seen how much food he stored.', 'The Owl told them so.', 'He helped them build homes.', 'He made the most noise.'], 3, 'The animals said, "Just listen to all that noise." They judged him by how loud he was, not by what he actually got done. That mistake is exactly what the moral warns against.'),
      Q('What does the Owl mean when she says, "Work is not measured by how loud it is"?', ['She wants the Woodpecker to be quieter so she can sleep.', 'Owls do not like work.', 'The value of work is in what gets done, not how much attention it gets.', 'Loud work is always better.'], 2, 'The Owl does important work silently at night. Her words are a hint to the moral: what matters is the result, not how much noise you make about it.'),
      Q('What is the moral of Fable 2?', ['We shine brightest when we shine together.', 'Fireflies only come out at night.', 'Always go home before dark.', 'Moths are easily lost.'], 0, 'The moral is written at the end: "We shine brightest when we shine together." The Firefly\'s single light was not enough, but all the lights together lit the whole meadow.'),
      Q('What mistake did the Firefly make?', ['She flew too far from home.', 'She forgot how to glow.', 'She ate the Moth\'s food.', 'She wanted all the attention, so she talked the others into turning off their lights.'], 3, 'The Firefly told the others their lights were "too dim" so that she alone would be admired. Her selfish wish caused the meadow to go dark and others to get lost.'),
      Q('Which other moral would ALSO fit "The Firefly Who Wanted to Shine Alone"?', ['Look before you leap.', 'Trying to make others look small does not make you shine more.', 'Save food for the winter.', 'Slow and steady wins the race.'], 1, 'The Firefly put down the others to make herself stand out, and it backfired. "Save food for winter" fits Fable 1 better, and the other two morals do not fit either story.'),
      Q('How are the Woodpecker and the Firefly ALIKE?', ['Both want attention, and both learn a lesson.', 'Both live in tree hollows.', 'Both are night hunters.', 'Both never change.'], 0, 'The Woodpecker wants to be noticed for his noise, and the Firefly wants to be noticed for her light. Each one realizes the mistake by the end and changes.'),
      Q('The Woodpecker\'s drumming "echoed through the whole forest." What does echoed mean?', ['became silent', 'grew softer and softer', 'sounded again and again, bouncing off things', 'turned into music'], 2, 'In a forest of tall trees, a loud sound bounces and repeats, so the whole forest hears it. That repeating, bouncing sound is an echo.'),
      Q('The fireflies "grew discouraged and dimmed their lights." What does discouraged mean?', ['excited and proud', 'having lost hope or the wish to keep going', 'very sleepy', 'angry and loud'], 1, 'The Firefly told them their lights were too dim and too slow. Hearing that made them lose heart, so they stopped glowing. Discouraged means losing the hope or will to keep trying.'),
      Q('In Fable 1, why did the Woodpecker feel "ashamed"?', ['He lost a drumming contest.', 'He broke a tree.', 'The Owl was rude to him.', 'He had called the Owl lazy, but now he needed her help because she had worked harder.'], 3, 'The Woodpecker had insulted the Owl, but when winter came, she had food and he did not. Needing help from the one he called lazy made him feel embarrassed about how he acted.')
    ],
    evidence: [
      'How did the Owl show kindness even after the Woodpecker was rude? Explain and copy the sentence that shows it.',
      'What happened in the meadow when only one Firefly was glowing? Explain in 2–3 sentences and copy a sentence that describes it.',
      'Which fable\'s moral do you think is more important for kids your age, and why? Give a reason and copy the moral, plus one sentence from that fable that supports it.'
    ],
    summary: 'Write a 3–4 sentence summary of BOTH fables. For each one, tell the main character\'s mistake and the moral. Then tell one way the two fables are alike.'
  });

  // ======================= WEEK 17: text features (informational: honeybees) =======================
  C.unit('reading', 17, {
    title: 'Inside the Hive',
    genre: 'informational',
    skill: 'text features (headings, captions, bold words, sidebars)',
    learn: [
      { h: 'What are text features?', p: "Text features are the parts of a nonfiction text that help you find and understand information. HEADINGS tell what a section is about. BOLD WORDS are important vocabulary, usually explained in a GLOSSARY, which is a mini-dictionary at the end. CAPTIONS are sentences that explain a picture or diagram." },
      { h: 'Sidebars and how to use features', p: "A SIDEBAR is a box set off to the side with extra, interesting information connected to the topic. Before you read, skim the headings to preview what you will learn. If you need one fact, use the headings to jump to the right section instead of rereading everything." }
    ],
    passage: [
      "(In this article, words in CAPITAL LETTERS are bold words. Look for their meanings in the glossary at the end.)",
      "HEADING: A City of Bees",
      "A honeybee hive is like a busy city. A strong hive can hold tens of thousands of bees, and every one of them has a job. There are three kinds of honeybees in a COLONY. The queen is the mother of the hive, and her main job is laying eggs. In summer, she can lay more than a thousand eggs in a single day. The drones are male bees, and their only job is to mate with a queen. All the rest are worker bees, which are female. The workers do almost everything else.",
      "CAPTION: A diagram shows the three kinds of honeybees side by side. The queen has the longest body, the drone has very large eyes, and the worker is the smallest.",
      "HEADING: A Job for Every Age",
      "A worker bee's job changes as she grows older. When she first comes out of her cell, she cleans the hive. A few days later, she feeds the young bees, called LARVAE. Next, she builds the comb, using wax that her own body makes. After that, she may guard the entrance, checking every bee that tries to come in. Finally, in the last part of her life, she becomes a FORAGER and flies outside to gather food. In summer, a worker bee lives only about six weeks, so she stays busy every day.",
      "HEADING: Why Bees Dance",
      "When a forager finds a patch of flowers full of NECTAR, she hurries home to tell the others. But bees cannot talk, so she dances! If the flowers are close by, she does a round dance, circling one way and then the other. If the flowers are far away, she does the waggle dance. She runs forward in a straight line, wiggling her body from side to side, then loops around and does it again. The direction of her straight run shows the other bees which way to fly compared to the sun. The longer she waggles, the farther away the flowers are.",
      "CAPTION: In a drawing, arrows trace the figure-eight path of a waggle dance on the honeycomb.",
      "SIDEBAR: Meet the Bee Detective. An Austrian scientist named Karl von Frisch spent many years watching bees and figured out what their dances mean. His discovery was so important that he shared a Nobel Prize, one of the highest awards in science, in 1973.",
      "HEADING: From Flower to Honey",
      "Foragers sip nectar from flowers and carry it home in a special stomach. Back at the hive, worker bees pass the nectar along and store it in the wax cells. Then they fan their wings over the cells to dry it out. As the water disappears, the nectar thickens into honey. When it is ready, the bees seal each cell with a cap of wax. It takes a lot of bees to make honey. In her whole life, one worker makes only about one-twelfth of a teaspoon!",
      "HEADING: Why Bees Matter to You",
      "As bees travel from flower to flower, yellow dust called pollen sticks to their fuzzy bodies and rubs off on the next flower. This is called POLLINATION, and it helps plants make fruits and seeds. Apples, blueberries, peaches, and many other foods depend on pollinators like bees.",
      "SIDEBAR: Georgia's State Insect. In 1975, Georgia named the honeybee its official state insect.",
      "GLOSSARY: COLONY: a group of bees that live and work together in one hive. LARVAE: young bees that look like small white grubs. FORAGER: a worker bee that flies out to gather food. NECTAR: a sweet liquid made by flowers. POLLINATION: moving pollen from one flower to another so plants can make seeds."
    ],
    vocab: [
      ['colony', 'a group of bees that live and work together in one hive'],
      ['larvae', 'young bees that look like small white grubs'],
      ['forager', 'a worker bee that flies out to gather food'],
      ['nectar', 'a sweet liquid made by flowers'],
      ['pollination', 'moving pollen from one flower to another so plants can make seeds']
    ],
    demo: {
      q: 'You want to find out how bees tell each other where flowers are. How do the text features help?',
      steps: [
        'Step 1: Skim the headings: "A City of Bees," "A Job for Every Age," "Why Bees Dance," "From Flower to Honey," "Why Bees Matter to You."',
        'Step 2: Pick the heading that matches your question. Telling others where flowers are fits "Why Bees Dance."',
        'Step 3: Read that section, plus its caption and the sidebar next to it, which add information about the waggle dance and the scientist who studied it.'
      ],
      a: 'The heading "Why Bees Dance" leads you straight to the answer: bees do a round dance or waggle dance to show where flowers are.'
    },
    items: [
      Q('Under which heading would you find out what a worker bee does when she is very young?', ['A Job for Every Age', 'A City of Bees', 'Why Bees Dance', 'From Flower to Honey'], 0, 'The section "A Job for Every Age" explains how a worker\'s jobs change as she grows, starting with cleaning the hive. Headings let you jump straight to the part you need.'),
      Q('What is the purpose of the GLOSSARY at the end of the article?', ['to list the bees\' names', 'to tell a story about bees', 'to explain the meanings of the bold words', 'to show a map of Georgia'], 2, 'A glossary is a mini-dictionary of the important bold words in a text. The article tells you to look up the words in capital letters there.'),
      Q('What extra information does the sidebar "Meet the Bee Detective" give?', ['how honey is made', 'who discovered what bee dances mean', 'how long worker bees live', 'which foods need bees'], 1, 'The sidebar tells about Karl von Frisch, the scientist who figured out what bee dances mean. A sidebar adds interesting facts connected to the nearby section, here "Why Bees Dance."'),
      Q('What does the caption after "A City of Bees" help you understand?', ['how bees make honey', 'where hives are built', 'how to keep bees', 'how the three kinds of honeybees look different from each other'], 3, 'The caption describes a diagram comparing the queen, drone, and worker: the queen is longest, the drone has big eyes, and the worker is smallest. Captions explain what a picture shows.'),
      Q('Why are some words, like COLONY and NECTAR, written in capital letters in this article?', ['They are names of bees.', 'They are the headings.', 'They are bold words that are important and appear in the glossary.', 'The author made a mistake.'], 2, 'The note at the start of the article explains it: words in capital letters are bold words. Bold words are key vocabulary, and their meanings are in the glossary.'),
      Q('A forager does a waggle dance with a LONG waggle. What does this tell the other bees?', ['The flowers are far away.', 'The flowers are very close.', 'The hive is in danger.', 'The queen is hungry.'], 0, 'The section "Why Bees Dance" says, "The longer she waggles, the farther away the flowers are." A round dance would mean the flowers are close by.'),
      Q('According to the article, what is a forager?', ['the queen bee', 'a young bee still in its cell', 'a male bee', 'a worker bee that flies out to gather food'], 3, 'The glossary defines forager as "a worker bee that flies out to gather food." The article explains that workers become foragers in the last part of their lives.'),
      Q('Which word from the article means "a sweet liquid made by flowers"?', ['pollen', 'nectar', 'wax', 'comb'], 1, 'Nectar is the sweet liquid bees collect from flowers to make honey. Pollen is the yellow dust that helps flowers make seeds, which is a different thing.'),
      Q('How do bees turn nectar into honey?', ['They fan their wings to dry it until it thickens.', 'They freeze it.', 'They mix it with pollen and sand.', 'They leave it in the sun outside.'], 0, 'Under "From Flower to Honey," the article says bees fan their wings over the cells to dry the nectar, and "as the water disappears, the nectar thickens into honey."'),
      Q('Why does the author include the section "Why Bees Matter to You"?', ['To explain how bees dance.', 'To warn readers about bee stings.', 'To show that bees help grow many foods people eat.', 'To describe the queen bee.'], 2, 'This section explains that bees carry pollen between flowers, which helps plants make fruits like apples, blueberries, and peaches. It connects bees to the reader\'s own life.')
    ],
    evidence: [
      'How does a worker bee\'s job change during her life? Use the heading "A Job for Every Age" to find the section, explain in 2–3 sentences, and copy one sentence as evidence.',
      'What is the difference between the round dance and the waggle dance? Copy the sentence that explains what the waggle dance shows.',
      'Choose one text feature (a heading, caption, sidebar, or the glossary). Explain how it helped you understand the article, and copy the text feature as your evidence.'
    ],
    summary: 'Write a 3–4 sentence summary of "Inside the Hive." Use the headings to help you: tell one main point from at least three different sections.'
  });

  // ======================= WEEK 18: author's purpose; fact and opinion (persuasive letter) =======================
  C.unit('reading', 18, {
    title: 'A Garden for Elm Street',
    genre: 'persuasive letter',
    skill: 'author\'s purpose and fact vs. opinion',
    learn: [
      { h: 'Author\'s purpose', p: "Authors write for a reason. Remember P.I.E.: to PERSUADE (convince you to think or do something), to INFORM (teach you facts), or to ENTERTAIN (tell a story for enjoyment). A persuasive letter states the writer's opinion, gives reasons and evidence, and ends by asking the reader to take action." },
      { h: 'Fact or opinion?', p: "A FACT can be proven true by checking, measuring, or looking it up: \"The lot is 80 feet wide.\" An OPINION tells what someone thinks or feels and cannot be proven: \"The lot is ugly.\" Watch for opinion words such as best, worst, beautiful, should, I think, and I believe. Good persuasive writers support opinions with facts." }
    ],
    passage: [
      "March 3",
      "Dear Members of the Cedar Springs City Council,",
      "My name is Lily Thompson, and I am in fourth grade. I have lived on Elm Street my whole life, two houses down from the empty lot at the corner of Elm and Third. I am writing to ask you to turn that lot into a community garden where neighbors can grow vegetables and flowers together. I believe it would be the best thing to happen to our neighborhood in years.",
      "Right now, the lot is not a nice place. It has been empty for three years. Last month, my dad and I counted eleven plastic bottles, two old tires, and a broken shopping cart there. The weeds are taller than I am. It is the saddest-looking spot on our whole street.",
      "A community garden would change that. First, it would give families a place to grow fresh food. The lot gets sunlight almost all day, because there are no tall buildings or trees blocking it. Vegetables like tomatoes, peppers, squash, and okra grow well in Georgia's long, hot summers. Fresh vegetables are much tastier than the ones at the store, and growing them yourself is more fun, too.",
      "Second, a garden would bring neighbors together. On our street, many people wave hello, but they do not really know each other. In a garden, people work side by side, trade tips, and share what they grow. I think it would make Elm Street feel like one big family.",
      "Third, a garden would help kids learn. My friends and I could see how a tiny seed becomes a plant we can eat. We could learn about soil, water, and insects in real life instead of just reading about them. Also, gardening is a great way to get outside instead of staring at a screen. Twelve kids in my school's science club have already signed up to help water the plants this summer.",
      "Some people might say a garden would cost too much. But I have already talked to Mr. Alvarez, who owns the hardware store on Main Street, and he offered to donate six bags of soil and some old boards for raised beds. Pastor Kim said the youth group from our church would help clean up the trash on a Saturday. Mrs. Okafor, who has gardened for forty years, said she would teach a class for beginners. So the town would not have to pay for everything.",
      "I know you have many important decisions to make, and I thank you for reading my letter. Please vote to turn the empty lot on Elm Street into a community garden. I promise I will be the first one there with a shovel. If you say yes, I will even save you the very first tomato.",
      "Sincerely,",
      "Lily Thompson"
    ],
    vocab: [
      ['council', 'a group of people chosen to make decisions for a town or city'],
      ['community', 'a group of people who live in the same area and share it'],
      ['donate', 'to give something to help others, without being paid'],
      ['raised beds', 'garden boxes built up above the ground and filled with soil'],
      ['decisions', 'choices that someone makes after thinking']
    ],
    demo: {
      q: 'Is "It has been empty for three years" a fact or an opinion?',
      steps: [
        'Step 1: Ask, "Can this be proven?" Someone could check town records or ask neighbors how long the lot has been empty.',
        'Step 2: Look for opinion words like best, saddest, should, or I think. There are none.',
        'Step 3: Compare it with a nearby sentence: "It is the saddest-looking spot on our whole street." That one uses an opinion word (saddest) and cannot be proven.'
      ],
      a: '"It has been empty for three years" is a fact, because it can be checked and proven true.'
    },
    items: [
      Q('What is Lily\'s main purpose for writing this letter?', ['to entertain the council with a funny story', 'to persuade the council to turn the empty lot into a community garden', 'to inform readers about the history of Cedar Springs', 'to describe her family'], 1, 'Lily clearly states her request at the start and repeats it at the end: "Please vote to turn the empty lot... into a community garden." A letter that tries to get someone to do something is written to persuade.'),
      Q('Which sentence from the letter is a FACT?', ['"It is the saddest-looking spot on our whole street."', '"I believe it would be the best thing to happen to our neighborhood in years."', '"I think it would make Elm Street feel like one big family."', '"Last month, my dad and I counted eleven plastic bottles, two old tires, and a broken shopping cart there."'], 3, 'Counting bottles and tires can be checked, so it is a fact. The other sentences use opinion words: saddest, I believe, best, I think.'),
      Q('Which sentence from the letter is an OPINION?', ['"Fresh vegetables are much tastier than the ones at the store."', '"The lot gets sunlight almost all day."', '"Mr. Alvarez... offered to donate six bags of soil."', '"It has been empty for three years."'], 0, '"Tastier" is about what someone likes, and people can disagree about taste, so it is an opinion. The others can be checked: you could watch the sunlight, ask Mr. Alvarez, or check records.', 'Could someone disagree?'),
      Q('Which word is a clue that a sentence might be an opinion?', ['counted', 'eleven', 'best', 'corner'], 2, '"Best" is a judgment word that shows what someone thinks. Words like counted and eleven usually appear in facts that can be measured.'),
      Q('How does Lily support her opinion that the garden would not cost the town too much?', ['She says money is not important.', 'She lists people who have offered soil, boards, cleanup help, and a class.', 'She says the council should raise taxes.', 'She does not give any support.'], 1, 'Lily answers the argument "a garden would cost too much" with facts: Mr. Alvarez will donate soil and boards, the youth group will clean up, and Mrs. Okafor will teach. Answering the other side is a strong persuasive move.'),
      Q('Why does Lily include the fact that the lot "gets sunlight almost all day"?', ['To complain about the heat.', 'To show the lot needs more trees.', 'To entertain the reader.', 'To show the lot would be a good place for plants to grow.'], 3, 'Plants need sunlight to grow. This fact supports Lily\'s reason that the lot could be used to grow fresh food. Good persuasive writers use facts to back up their reasons.'),
      Q('What does Lily ask the council to DO at the end of the letter?', ['visit her house', 'buy her a shovel', 'vote to turn the lot into a community garden', 'plant tomatoes themselves'], 2, 'The call to action is a request for the reader to act: "Please vote to turn the empty lot on Elm Street into a community garden." Most persuasive letters end this way.'),
      Q('Mr. Alvarez offered to "donate" soil. What does donate mean?', ['to give something to help, without being paid', 'to sell for a high price', 'to borrow for a short time', 'to throw away'], 0, 'Lily uses this detail to show the town "would not have to pay for everything." So Mr. Alvarez is giving the soil for free to help. That is what donate means.'),
      Q('What is a "council" in this letter?', ['a kind of garden tool', 'a store on Main Street', 'a classroom', 'a group of people who make decisions for a town'], 3, 'Lily writes to the "City Council" and asks them to vote and make "important decisions." A council is a group chosen to make decisions for a community.'),
      Q('Why does Lily offer to save the council "the very first tomato"?', ['She is trying to sell tomatoes.', 'She wants to end on a friendly, memorable note that makes the council smile.', 'She does not like tomatoes.', 'The council asked for one.'], 1, 'This playful promise is not a reason or a fact. It is a friendly closing that shows Lily\'s excitement and makes the readers like her request. Persuasive writers sometimes end with a personal touch.')
    ],
    evidence: [
      'What are Lily\'s three reasons for wanting a community garden? List them and copy the sentence that begins her FIRST reason.',
      'Find one fact and one opinion in paragraph 4 (the one that begins "Right now"). Copy each and explain how you knew which was which.',
      'Do you think Lily\'s letter would convince the council? Explain your opinion with a reason, and copy the sentence you think is most persuasive.'
    ],
    summary: 'Write a 3–4 sentence summary of Lily\'s letter. Tell who she is writing to, what she wants, and the main reasons and facts she uses to persuade them.'
  });

  // ======================= WEEK 19: making inferences (mystery, grade 5) =======================
  C.unit('reading', 19, {
    title: 'The Case of the Midnight Music',
    genre: 'realistic fiction (mystery)',
    skill: 'making inferences',
    learn: [
      { h: 'What is an inference?', p: "An inference is a smart conclusion you reach by combining clues from the text with what you already know. Authors do not always state everything directly; they leave clues and trust readers to connect them. A simple formula: Text Clues + What I Know = Inference." },
      { h: 'Inferences in a mystery', p: "Mysteries are built for inferring. As you read, notice small details that seem unimportant, because they are often clues. Make a guess, then test it against new evidence and change your mind if the clues point elsewhere. A strong inference fits ALL the clues, not just one." }
    ],
    passage: [
      "The first time Eliza heard the music, she thought she was dreaming. It was nearly midnight at Aunt Ruth's farmhouse, and the old house was silent except for the ticking of the hall clock. Then, from somewhere downstairs, came a low, rumbling note on the piano. A pause. Then another note, a little higher, and another, each one climbing up the keyboard. Then silence.",
      "Eliza sat straight up in bed. Across the room, her cousin Ben was already awake, his eyes as round as quarters.",
      "“Did you hear that?” he whispered.",
      "The next morning, they told Aunt Ruth at breakfast. She only laughed and passed the biscuits. “This old house makes all kinds of peculiar noises,” she said. “I've lived here thirty years, and I quit trying to explain them long ago.”",
      "But Eliza was not satisfied. She intended to become a detective someday, and a real detective did not ignore evidence. After breakfast, she and Ben examined the parlor where the piano stood. The heavy wooden lid that covered the keys was open. Ben pointed out that Aunt Ruth always closed it before bed to keep the dust off, though last night she had been tired and gone to sleep early. Eliza leaned close to the keys. Caught between two of the lowest ones was a single strand of soft gray fluff.",
      "“Dust?” Ben suggested.",
      "Eliza shook her head slowly. She tucked the fluff into an envelope and wrote CLUE #1 on the front.",
      "That evening, Aunt Ruth closed the piano lid as usual. The house stayed perfectly quiet all night.",
      "“So the music only happens when the lid is open,” Eliza said the next morning, writing in her notebook. “Our ghost can't lift a heavy lid.”",
      "Ben grinned. “A weak ghost.”",
      "On the third night, the cousins devised an experiment. While Aunt Ruth was washing dishes, they quietly raised the piano lid. Then Eliza sprinkled a thin, even layer of flour on the wooden floor in front of the piano bench, the way she had seen in an old detective movie. Before bed, she made sure the parlor door was left open a crack.",
      "At 11:52, the music began again. Low note. Pause. Higher note. Higher still. Then a soft thump, like something landing on the rug.",
      "At dawn, the cousins crept downstairs in their socks. In the flour were tracks: small, round prints, each with four little toe marks, crossing the floor from the bench toward the hallway and fading out at the edge of the rug.",
      "Ben's mouth fell open. Eliza only smiled, because she had suspected this answer since CLUE #1.",
      "They followed the hallway to the kitchen. There, curled in a patch of early sunlight on the windowsill, was Duchess, Aunt Ruth's fluffy gray cat. She was busily licking one paw, which was still dusted with white.",
      "When Aunt Ruth came in to start the coffee, she found two detectives grinning at her and a very innocent-looking cat.",
      "“Case closed,” Eliza announced. “Your ghost has whiskers.”",
      "Aunt Ruth laughed so hard she had to sit down. “Well, I'll be,” she said, scratching Duchess behind the ears. “All these years, and I had a musician in the family.”"
    ],
    vocab: [
      ['peculiar', 'strange or unusual'],
      ['intended', 'planned or meant to do something'],
      ['evidence', 'facts or clues that help prove something is true'],
      ['devised', 'thought up or invented a plan'],
      ['suspected', 'believed something was probably true without being certain']
    ],
    demo: {
      q: 'Why did the notes go from low to high each night? Make an inference.',
      steps: [
        'Step 1: Gather text clues. The notes start "low" and climb "up the keyboard." The prints lead away from the BENCH. Duchess, a cat, is the musician.',
        'Step 2: Add what you know. Low notes are on the left end of a piano and high notes are on the right. A cat stepping onto the keys from one end would press them in order as it walked.',
        'Step 3: Combine them: Duchess must climb onto the low end of the keyboard and walk along it toward the high end before jumping down with "a soft thump."'
      ],
      a: 'The notes climbed from low to high because Duchess was walking across the keys from the low end toward the high end.'
    },
    items: [
      Q('What can you infer the "single strand of soft gray fluff" really was?', ['a hair from Duchess, the gray cat', 'dust from the old house', 'a piece of Ben\'s sweater', 'cotton from a pillow'], 0, 'The fluff was gray and soft, and later we learn Duchess is a "fluffy gray cat" who walks on the piano. Ben guessed dust, but Eliza shook her head because the clue pointed to something else.'),
      Q('Why did the house stay quiet on the second night?', ['Duchess was sleeping outside.', 'The ghost left.', 'Aunt Ruth closed the piano lid, so the cat could not reach the keys.', 'Eliza stayed awake all night.'], 2, 'Eliza writes, "the music only happens when the lid is open." A cat cannot lift a heavy wooden lid, which is why her joke about a "weak ghost" is actually a smart clue.'),
      Q('What does Eliza mean when she says, "Our ghost can\'t lift a heavy lid"?', ['She is sure there is a real ghost.', 'She is hinting that the "musician" is something small and not very strong.', 'She thinks Aunt Ruth is playing the piano.', 'She wants to buy a lighter piano.'], 1, 'Eliza does not really believe in a ghost. She is inferring that whatever plays the music is too weak to open the lid, which points to a small animal.'),
      Q('Why did Eliza sprinkle flour in front of the piano bench?', ['To clean the floor.', 'To bake biscuits.', 'To keep Duchess away.', 'So whatever made the music would leave tracks she could study.'], 3, 'Flour shows footprints clearly. Eliza wanted evidence of who or what was at the piano, so she set up an experiment to capture tracks.'),
      Q('Why did Eliza leave the parlor door open a crack?', ['So Duchess would be able to get into the parlor at night.', 'To let in fresh air.', 'So she could hear Aunt Ruth snoring.', 'Because the door was broken.'], 0, 'Eliza already suspected the cat. If the door were shut, Duchess could not reach the piano and the experiment would not work. This detail shows her careful planning.'),
      Q('What can you infer from the paw that was "still dusted with white"?', ['Duchess had been playing in snow.', 'Duchess was sick.', 'Duchess had been in the flour, so she made the tracks.', 'Aunt Ruth painted the cat.'], 2, 'The white dust matches the flour on the parlor floor. Combined with the small four-toed prints, it proves Duchess walked through the flour after her midnight performance.'),
      Q('Eliza says she "had suspected this answer since CLUE #1." What does suspected mean?', ['knew for certain', 'believed was probably true without being sure', 'forgot completely', 'was afraid of'], 1, 'Eliza had a strong guess after finding the gray fluff, but she needed more evidence to be sure. Suspected means believing something is likely true without proof yet.'),
      Q('The cousins "devised an experiment." What does devised mean?', ['broke', 'forgot about', 'cancelled', 'thought up or planned'], 3, 'Right after this, the cousins carry out a clever plan with the lid, flour, and door. Devised means invented or thought up a plan.'),
      Q('Which character trait does Eliza show MOST in this story?', ['She is careless.', 'She is easily frightened.', 'She is curious and logical, like a real detective.', 'She is lazy.'], 2, 'Eliza collects clues in an envelope, writes notes, tests an idea, and sets up an experiment. Those actions show curiosity and logical thinking, not fear or carelessness.'),
      Q('When Aunt Ruth says, "I had a musician in the family," what does she mean?', ['She is joking that her cat has been "playing" the piano.', 'She has a relative who plays in a band.', 'She wants to take piano lessons.', 'She is upset with the children.'], 0, 'Aunt Ruth is laughing and scratching Duchess when she says it. She is joking that the cat, who is part of her "family," is the mysterious piano player.')
    ],
    evidence: [
      'At what point did you first infer that an animal was making the music? Explain your thinking and copy the sentence with the clue that helped you most.',
      'How do the tracks in the flour support the solution to the mystery? Explain in 2–3 sentences and copy the sentence that describes the tracks.',
      'Why do you think Aunt Ruth never solved the mystery in thirty years? Make an inference, and copy a sentence about Aunt Ruth that supports it.'
    ],
    summary: 'Write a 3–4 sentence summary of "The Case of the Midnight Music." Tell what the mystery was, the most important clues Eliza and Ben found, and how they solved it.'
  });

  // ======================= WEEK 20: theme of hope and new beginnings (realistic fiction, grade 5) =======================
  C.unit('reading', 20, {
    title: 'Grandma\'s Zinnias',
    genre: 'realistic fiction',
    skill: 'theme (hope and new beginnings)',
    learn: [
      { h: 'Themes grow through a story', p: "A theme is the message about life that the author wants readers to take away. Themes about hope and new beginnings often follow a pattern: a character faces a loss or a hard change, holds on to something small, and slowly discovers that good things can grow again. Watch for how the character's feelings change from the beginning to the end." },
      { h: 'Symbols carry themes', p: "Sometimes an object in a story stands for a bigger idea. This is called a SYMBOL. A seed might stand for hope, or a sunrise for a fresh start. When an object appears again and again, or when a character cares about it deeply, ask yourself what idea it might represent." }
    ],
    passage: [
      "Grace Whitfield moved from Ohio to Georgia in January, which she decided was the worst possible month to move anywhere. Her dad had a new job in Macon. Their new house was nice enough, but its yard was a square of brown grass and gray clay, and Grace did not know a single person on Hawthorne Lane.",
      "On the morning they left Ohio, Grandma had pressed a small paper envelope into her hand. On the front, in Grandma's loopy handwriting, it said: Zinnias, saved from our garden. Plant after the last frost.",
      "“Every summer of your life, you've helped me pick these,” Grandma had said, hugging her tight. “Now you can grow them wherever you are.”",
      "For two months, the envelope stayed in Grace's desk drawer. She video-chatted with her best friend, Molly, every Saturday, but each call ended with a lump in her throat. At her new church, she sat quietly through Sunday school, too shy to say much. Some nights she prayed that God would help her feel at home, and some nights she was too sad to know what to pray.",
      "Then, at the end of March, the weather changed. The sun grew warm, the dogwood trees down the street burst into white blossoms, and the air smelled like cut grass. Dad checked the forecast and announced that the last frost had passed.",
      "Grace took out the envelope. The seeds inside were dry and gray, shaped like tiny arrowheads. It was hard to believe anything could grow from them.",
      "She was hacking at the hard clay with a trowel when a voice called over the fence. “You're going to need compost for that dirt.” A girl about her age, with a gap-toothed grin and muddy sneakers, was peering at her. “I'm Priya. My mom has a whole pile of it. Want some?”",
      "That afternoon, the two girls hauled three buckets of dark, crumbly compost and mixed it into the clay. Grace explained about Grandma's garden and the zinnias they had picked every summer. Priya listened, then told her about the tomatoes her grandfather grew in India. Together, they pressed the seeds into neat rows and watered them gently.",
      "For five days, nothing happened. Grace checked the bed every morning before school. On the sixth morning, which happened to be Easter Sunday, she ran outside in her church dress and gasped. Dozens of tiny green sprouts had pushed up through the soil, each one unfolding two small, round leaves like hands opening to the sun.",
      "She thought about the Easter story she would hear at church that morning, about how life came back when everything had seemed lost. She thought about the dry, gray seeds that had looked so lifeless. Something warm and light rose in her chest, something she had not felt since January.",
      "By June, the zinnias stood taller than her knees, bursting with flowers in orange, magenta, and gold. Butterflies visited them every afternoon. Priya came over so often that Mom started setting an extra plate at dinner.",
      "One evening, Grace picked the brightest orange zinnia, pressed it flat inside a heavy book, and mailed it to Ohio with a letter.",
      "Dear Grandma, it began. They grew. And so did I."
    ],
    vocab: [
      ['frost', 'a thin layer of ice that forms on plants and the ground on very cold nights'],
      ['trowel', 'a small garden shovel held in one hand'],
      ['compost', 'rotted plant scraps that make soil rich and good for growing'],
      ['sprouts', 'young plants that have just started growing from seeds'],
      ['lifeless', 'seeming to have no life at all']
    ],
    demo: {
      q: 'What do the zinnia seeds symbolize in the story?',
      steps: [
        'Step 1: Notice how the seeds are described. At first they are "dry and gray," and it is "hard to believe anything could grow from them." Grace feels the same way about her new life.',
        'Step 2: Notice what happens to them. With care and help from Priya, they sprout on Easter morning and grow into bright flowers.',
        'Step 3: Connect the seeds to Grace. As the seeds grow, Grace makes a friend and starts to feel at home. Her letter says, "They grew. And so did I."'
      ],
      a: 'The seeds symbolize hope. Like Grace\'s new life, they look lifeless at first but grow into something beautiful with time and care.'
    },
    items: [
      Q('Which sentence BEST states a theme of the story?', ['Moving in January is always a bad idea.', 'Zinnias are the easiest flowers to grow.', 'Ohio is colder than Georgia.', 'Even after a hard change, hope and new beginnings can grow with time and care.'], 3, 'Grace starts out lonely in a new place, and by the end she has a friend, a garden, and joy. That change teaches that hope can grow after hard times. The other choices are opinions or facts, not life lessons.'),
      Q('How does Grace feel at the BEGINNING of the story?', ['excited and confident', 'lonely and sad about her move', 'angry at Priya', 'bored with gardening'], 1, 'Grace calls January "the worst possible month to move," knows no one on her street, and gets a "lump in her throat" after talking to Molly. These clues show she feels lonely and homesick.'),
      Q('Why did Grace leave the envelope in her desk drawer for two months?', ['It was too cold to plant, and she was too sad to think about it.', 'She lost it.', 'Grandma told her not to open it.', 'She did not like zinnias.'], 0, 'The envelope said to plant "after the last frost," so she had to wait for warm weather. Her sadness during those months also suggests she was not ready to start something new yet.'),
      Q('Why is it important that the seeds sprout on Easter Sunday?', ['It is a coincidence with no meaning.', 'Grace has to miss church.', 'It connects the seeds to the Easter message of new life after everything seemed lost.', 'Easter is the only day plants grow.'], 2, 'Grace thinks about how "life came back when everything had seemed lost." The sprouting seeds, the Easter story, and Grace\'s own hope all point to the same idea: new life and new beginnings.'),
      Q('How does Priya help Grace\'s new beginning?', ['She plants the seeds while Grace is at school.', 'She gives Grace compost and becomes her friend.', 'She moves to Ohio.', 'She teaches Grace to speak another language.'], 1, 'Priya offers compost, helps mix it into the clay, and shares stories about her own grandfather. By June, she visits so often that Grace\'s mom sets an extra plate. A friendship has grown alongside the flowers.'),
      Q('What does Grace mean when she writes, "They grew. And so did I"?', ['She got taller over the summer.', 'She wants more seeds.', 'She is planning to move back to Ohio.', 'Just like the zinnias, she has grown happier and more at home in her new life.'], 3, 'The letter connects the flowers to Grace herself. She started out lonely, but now she has a friend and joy. She has "grown" on the inside, just as the seeds grew into flowers.'),
      Q('Priya says Grace will need compost "for that dirt." What is compost?', ['rotted plant scraps that make soil rich', 'a kind of flower', 'a garden fence', 'a type of fertilizer made of rocks'], 0, 'The girls mix "dark, crumbly compost" into the hard gray clay so the seeds can grow. Compost is made from rotted plant material and makes poor soil richer.'),
      Q('The seeds looked "lifeless." What does lifeless mean?', ['full of energy', 'brightly colored', 'seeming to have no life', 'very large'], 2, 'The suffix -less means "without," so lifeless means "without life." The dry, gray seeds did not look like they could ever grow.'),
      Q('How does the setting change from the beginning of the story to the end?', ['From summer to winter', 'From a brown, gray January yard to a bright June garden full of flowers and butterflies', 'From Georgia to Ohio', 'It does not change.'], 1, 'In January, the yard is "brown grass and gray clay." By June, it holds tall zinnias in "orange, magenta, and gold" with butterflies. The changing setting mirrors Grace\'s changing feelings.'),
      Q('What can you infer about Grace\'s relationship with her grandmother?', ['They have never met.', 'Grace is angry with her grandmother.', 'Her grandmother does not like flowers.', 'They are very close and share a love of gardening.'], 3, 'Grace helped Grandma pick zinnias "every summer," Grandma hugged her tight, and Grace mails her the first flower. These details show a loving, close relationship built around their garden.')
    ],
    evidence: [
      'How do Grace\'s feelings change from January to June? Explain in 2–3 sentences and copy one sentence from the beginning and one from the end.',
      'What do the zinnia seeds symbolize? Explain your thinking and copy a sentence that describes the seeds.',
      'What is the theme of the story? Write it as a complete sentence and copy the sentence from the story that you think supports it best.'
    ],
    summary: 'Write a 3–4 sentence summary of "Grandma\'s Zinnias." Tell what problem Grace faces, what she does with the seeds, who helps her, and how the story ends. Finish by stating the theme.'
  });

  // ======================= WEEK 21: biography (George Washington Carver, grade 5) =======================
  C.unit('reading', 21, {
    title: 'The Plant Doctor: George Washington Carver',
    genre: 'biography',
    skill: 'biography',
    learn: [
      { h: 'What is a biography?', p: "A biography is a true story of a real person's life, written by someone else. (If people write about their own lives, it is an AUTOBIOGRAPHY.) Biographies are usually told in time order, from childhood to later life, and they use facts, dates, and real events. They are told in third person, using he or she." },
      { h: 'Reading a biography well', p: "As you read, track the important events in order and look for the challenges the person faced and how they responded. Ask: What made this person important? What qualities, such as determination or kindness, helped them succeed? A good biography also explains how the person changed the world around them." }
    ],
    passage: [
      "No one knows the exact day George Washington Carver was born, because records were rarely kept for enslaved children. Most historians believe it was around 1864, on a farm near Diamond, Missouri, owned by Moses and Susan Carver. When George was only a baby, raiders kidnapped him and his mother, Mary. George was found and brought back, but his mother was never seen again.",
      "After slavery ended in 1865, Moses and Susan Carver raised George and his older brother, Jim. George was small and often sick, so instead of doing heavy farm work, he helped Susan in the house and garden. He was endlessly curious about plants. He kept a secret garden in the woods, and he became so skilled at nursing sickly plants back to health that neighbors began calling him the “plant doctor.”",
      "George was hungry to learn, but the nearby school did not allow Black children. When he was about eleven or twelve years old, he walked to the town of Neosho to attend a school for Black students. For years afterward, he moved from town to town in Missouri and Kansas, working at whatever jobs he could find—cooking, doing laundry, and farming—so he could keep going to school.",
      "His path was not easy. He was accepted by a college in Kansas, but when he arrived, the school turned him away because he was Black. Carver refused to give up. In 1890, he enrolled at Simpson College in Iowa to study art and piano. His art teacher noticed his remarkable paintings of plants and encouraged him to study agriculture, the science of farming. He transferred to Iowa State Agricultural College, where he became the school's first Black student. He earned his degree in 1894, then a master's degree in 1896, and became the school's first Black faculty member.",
      "That same year, Booker T. Washington, the leader of Tuskegee Institute in Alabama, invited Carver to lead its agriculture department. Carver accepted and spent the rest of his long career there.",
      "In the South, farmers had grown cotton in the same fields year after year, and the soil had become worn out. Carver taught farmers about crop rotation, which means planting different crops in a field in different years. He showed them that peanuts and other plants in the pea family return a nutrient called nitrogen to the soil, helping it recover. To reach farmers who could not come to school, he helped create a “movable school,” a wagon filled with tools and lessons that traveled through the countryside.",
      "Of course, farmers who grew peanuts needed people to buy them. So Carver went to work in his laboratory, developing hundreds of possible uses for peanuts, sweet potatoes, and other crops, from foods to dyes. Many people believe he invented peanut butter, but that is not true; people were making peanut butter before his work became famous.",
      "Carver was a man of deep Christian faith. He often rose before dawn to walk in the woods, studying plants and praying, and he believed that learning about nature was a way of learning about God's creation. He lived simply and cared more about helping people than about becoming rich.",
      "George Washington Carver died at Tuskegee on January 5, 1943. That same year, his birthplace in Missouri became a national monument, the first ever created to honor an African American. The boy once called the “plant doctor” had helped heal the soil of the South."
    ],
    vocab: [
      ['historians', 'people who study and write about the past'],
      ['enrolled', 'signed up to become a student at a school'],
      ['agriculture', 'the science and work of farming'],
      ['crop rotation', 'planting different crops in a field in different years to keep the soil healthy'],
      ['nitrogen', 'a nutrient in the soil that plants need to grow well']
    ],
    demo: {
      q: 'What is one challenge Carver faced, and how did he respond?',
      steps: [
        'Step 1: Look for a moment when something stood in his way. Paragraph 4: a college in Kansas "turned him away because he was Black."',
        'Step 2: Look for his response right after. "Carver refused to give up. In 1890, he enrolled at Simpson College in Iowa."',
        'Step 3: Name the quality the response shows: determination.'
      ],
      a: 'When a college in Kansas turned him away because he was Black, Carver showed determination by enrolling at Simpson College in Iowa instead.'
    },
    items: [
      Q('How can you tell this passage is a biography?', ['It is told by Carver himself using "I."', 'It has talking animals.', 'It is a true story of a real person\'s life, told in time order by another writer.', 'It is a made-up story about a farmer.'], 2, 'The passage uses real facts and dates and goes in order from Carver\'s birth to his death. It is written in third person by someone else. If Carver had written it about himself, it would be an autobiography.'),
      Q('Why don\'t historians know Carver\'s exact birthday?', ['Records were rarely kept for enslaved children.', 'He kept it a secret.', 'His birth certificate was lost in a fire.', 'He was born in another country.'], 0, 'The first sentence explains that records "were rarely kept for enslaved children." That is why historians can only say "around 1864."'),
      Q('Why did neighbors call young George the "plant doctor"?', ['He went to medical school.', 'He sold medicine made from plants.', 'He worked for a doctor.', 'He was skilled at nursing sickly plants back to health.'], 3, 'Paragraph 2 says he "became so skilled at nursing sickly plants back to health" that neighbors gave him the nickname. The title of the biography comes from this.'),
      Q('Which event happened FIRST in Carver\'s life?', ['He joined Tuskegee Institute.', 'He walked to Neosho to attend school.', 'He earned his master\'s degree.', 'He enrolled at Simpson College.'], 1, 'Carver went to school in Neosho when he was about eleven or twelve. Simpson College came in 1890, his master\'s degree in 1896, and Tuskegee after that. Biographies usually follow time order like this.'),
      Q('What quality does Carver show when a college turns him away because of his race?', ['determination', 'laziness', 'anger', 'carelessness'], 0, 'The passage says, "Carver refused to give up," and he enrolled at a different college. Continuing toward a goal despite unfair treatment shows determination.'),
      Q('What problem did crop rotation help solve for Southern farmers?', ['Too much rain', 'Not enough farmers', 'Soil that had become worn out from growing cotton year after year', 'Insects eating peanuts'], 2, 'Growing cotton in the same fields wore out the soil. Rotating to peanuts and other pea-family plants returned nitrogen and helped the soil recover.'),
      Q('According to the passage, which statement about peanut butter is TRUE?', ['Carver invented peanut butter.', 'People made peanut butter before Carver\'s work became famous, so he did not invent it.', 'Carver never worked with peanuts.', 'Peanut butter was invented at Tuskegee.'], 1, 'The passage corrects a common mistake: "Many people believe he invented peanut butter, but that is not true." Good biographies separate facts from myths.'),
      Q('The passage says Carver "enrolled" at Simpson College. What does enrolled mean?', ['visited for a day', 'was turned away', 'became a teacher', 'signed up to become a student'], 3, 'Carver went there "to study art and piano," so he became a student. Enrolled means signed up to attend a school.'),
      Q('What is agriculture, as the passage uses the word?', ['the science of farming', 'the study of art', 'the study of music', 'the history of the South'], 0, 'The passage explains it directly: "agriculture, the science of farming." This is a definition context clue set off by a comma.'),
      Q('Why was Carver\'s birthplace important in 1943?', ['It became a peanut farm.', 'It was where Booker T. Washington lived.', 'It became the first national monument created to honor an African American.', 'It was turned into a college.'], 2, 'The last paragraph says his birthplace became "a national monument, the first ever created to honor an African American." This shows how highly the nation valued his work.')
    ],
    evidence: [
      'What challenges did Carver face as a child and young man? Describe two of them, and copy a sentence that shows one challenge.',
      'How did Carver help farmers in the South? Explain in 2–3 sentences and copy a sentence from paragraph 6 that supports your answer.',
      'What role did faith play in Carver\'s life? Explain, and copy the sentence that tells what he believed about learning from nature.'
    ],
    summary: 'Write a 3–4 sentence summary of Carver\'s life in time order. Include his childhood, his education, his work at Tuskegee, and why he is remembered.'
  });

})(typeof window !== 'undefined' ? window : globalThis);
