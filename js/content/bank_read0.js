/* Reading bank — Weeks 1-4: one original close-reading passage per week (story elements, character inferences, context clues, theme and summary). */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  // ======================= WEEK 1: story elements (realistic fiction) =======================
  C.unit('reading', 1, {
    title: 'The Last Chair',
    genre: 'realistic fiction',
    skill: 'story elements: characters, setting, problem, solution',
    learn: [
      { h: 'The four big parts of a story', p: "Almost every story is built from the same parts. The CHARACTERS are the people (or animals) in the story. The SETTING is where and when it happens. The PROBLEM is the trouble or challenge the main character faces. The SOLUTION is how the problem gets solved by the end." },
      { h: 'How to find them', p: "Look for the main character first: the one the story follows the most. Clues about setting often hide in describing words, like the smell of a room or the time of day. To find the problem, ask, \"What does the main character want, and what is in the way?\" To find the solution, ask, \"What changed at the end, and who made it change?\"" }
    ],
    passage: [
      "On Monday morning, Josie Carter stood in the doorway of the fellowship hall at Pine Street Church, holding her violin case so tightly that her fingers hurt. The room smelled like coffee and floor polish. Forty folding chairs stood in curved rows, and almost every one already held a kid with an instrument. This was Summer Strings, a one-week music camp, and Josie had only been playing violin for eight months.",
      "The director, Mr. Okafor, was a tall man with a bow tie covered in tiny music notes. He smiled and pointed his pencil toward the very last chair in the violin section. “Welcome, Josie. You’ll sit with Mae.”",
      "Mae was a girl about Josie’s age with a long braid and a violin covered in stickers. She scooted her music stand over so they could share it. “Hi,” she whispered. Josie only nodded. Her voice seemed to be stuck somewhere in her stomach.",
      "On Friday evening, the camp would give a concert for all the families. The last song was called “Galloping Home,” and it was fast. Very fast. The notes in the middle part were packed together like ants on a cookie crumb. When the orchestra played it on Monday, Josie’s bow bumped and scraped. By Tuesday, she had stopped trying. She just moved her bow in the air above the strings so no one could hear her.",
      "That night at home, she sat on her bed and stared at her case. “Maybe I shouldn’t go back,” she told her mom. “Everyone is better than me.”",
      "Her mom sat down beside her. “Is everyone better than you, or has everyone just been playing longer?” she asked. “Those aren’t the same thing.”",
      "Josie thought about that for a long time.",
      "On Wednesday, during the snack break, she did something that made her heart pound. She turned to Mae and said, “I can’t play the fast part of ‘Galloping Home.’ I’ve been faking it.”",
      "Mae laughed, but not in a mean way. “Me too, last year! My teacher showed me a trick. You play it really slowly first, like a turtle, and only speed up when it sounds right.” She pointed to the hardest line. “And look, these four measures are the same notes over and over. Once you learn one, you know all four.”",
      "So that is what they did. Every break on Wednesday and Thursday, the two girls sat in the corner by the piano and played the hard part at turtle speed. Then rabbit speed. Then, finally, horse speed. Mr. Okafor walked by once, raised his eyebrows, and gave them a thumbs-up without saying a word.",
      "On Friday night, the fellowship hall was packed with parents holding phones in the air. When “Galloping Home” began, Josie’s hands were shaking. But when the fast part came, her bow landed on the strings and stayed there. She missed two notes. She played the rest.",
      "When the last chord ended and the audience clapped, Mae bumped Josie’s shoulder with her own. “Same chairs next summer?” she whispered.",
      "Josie grinned. Her voice was not stuck anymore. “Same chairs,” she said."
    ],
    vocab: [
      ['fellowship hall', 'a large room in a church where people gather for meals, meetings, and events'],
      ['director', 'the person in charge who leads the musicians'],
      ['section', 'one group of the same instruments in an orchestra, like all the violins'],
      ['measures', 'small, equal parts of a piece of music, separated by lines on the page'],
      ['chord', 'several musical notes played together at the same time']
    ],
    demo: {
      q: 'What is the PROBLEM in "The Last Chair," and how is it SOLVED?',
      steps: [
        'Step 1: Name the main character. The story follows Josie the most, so she is the main character.',
        'Step 2: Ask what Josie wants and what is in the way. She wants to play in the Friday concert, but she cannot play the fast part of "Galloping Home," so she starts faking it.',
        'Step 3: Look for what changes. On Wednesday, Josie admits the truth to Mae. Mae teaches her to practice slowly first and shows her the repeating measures.',
        'Step 4: Check the ending. On Friday, Josie plays the fast part for real. The problem is solved.'
      ],
      a: 'The problem is that Josie cannot play the fast part and is faking it; it is solved when she asks Mae for help and they practice slowly until she can play it at the concert.'
    },
    items: [
      Q('Who is the MAIN character of the story?', ['Mae', 'Mr. Okafor', 'Josie', 'Josie\'s mom'], 2, 'The story follows Josie from her first nervous morning to the concert, and we learn her thoughts and feelings. Mae and Mr. Okafor are important, but they are supporting characters who help Josie.', 'Whose feelings do we learn about the most?'),
      Q('Which choice BEST describes the setting?', ['A school gym during the winter', 'A church fellowship hall during a one-week summer music camp', 'Josie\'s bedroom on a Saturday', 'A big concert hall in a city'], 1, 'Most of the story happens in the fellowship hall at Pine Street Church during Summer Strings, a one-week camp. Josie\'s bedroom is in one short scene, but it is not where most of the story takes place.'),
      Q('What is Josie\'s main PROBLEM?', ['She lost her violin.', 'She does not like Mae.', 'She cannot play the fast part of "Galloping Home" and starts faking it.', 'Mr. Okafor will not let her play.'], 2, 'The trouble in the story is the fast part of the song. Josie\'s bow "bumped and scraped," so she began moving it in the air. She never lost her violin, and she ends up liking Mae.'),
      Q('How is the problem SOLVED?', ['Mae plays Josie\'s part for her.', 'Josie quits the camp.', 'Mr. Okafor makes the song slower.', 'Josie admits the truth, and Mae helps her practice slowly until she can play it.'], 3, 'The solution comes from Josie being honest and Mae sharing a trick: play at "turtle speed" first, then speed up. Josie still has to do the practicing herself, which is why she can play at the concert.', 'What did Josie do on Wednesday?'),
      Q('What is the TURNING POINT, the moment when things start to change for Josie?', ['When she smells coffee in the fellowship hall', 'When she tells Mae, "I\'ve been faking it."', 'When the parents hold up their phones', 'When Mr. Okafor points to the last chair'], 1, 'Before that moment, Josie is stuck and hiding her problem. After she tells Mae the truth, she gets help and begins to improve. That is why it is the turning point.'),
      Q('In paragraph 4, the notes are "packed together like ants on a cookie crumb." What does this comparison tell you?', ['The notes are very close together, so the part is fast and crowded.', 'The music is about a picnic.', 'The notes are very far apart.', 'The music sheet is dirty.'], 0, 'Ants on a crumb are crowded close together. The author uses that picture to show that the notes come one right after another, which makes the part hard to play fast.'),
      Q('Mae says "these four measures are the same notes over and over." Using clues from the story, what are measures?', ['Rulers for measuring', 'The chairs in a row', 'Small parts of a piece of music', 'The songs in the concert'], 2, 'Mae is pointing to a line of music when she says it, and she says "once you learn one, you know all four." So measures are small sections of the music. In other places "measure" can mean to find a size, but that meaning does not fit here.', 'What is Mae pointing at?'),
      Q('What does Josie\'s mom mean when she says, "Is everyone better than you, or has everyone just been playing longer?"', ['Josie should practice less.', 'The other kids are not very good.', 'Josie should switch instruments.', 'The other kids have had more time to practice, so Josie is not worse, just newer.'], 3, 'Her mom is helping Josie see the difference between being bad at something and being new at it. Josie has only played for eight months, so of course others are ahead.'),
      Q('Which sentence shows that Josie has CHANGED by the end?', ['"Her voice was not stuck anymore."', '"The room smelled like coffee and floor polish."', '"She just moved her bow in the air above the strings."', '"Josie only nodded."'], 0, 'At the beginning, Josie\'s voice "seemed to be stuck somewhere in her stomach." At the end, the author says her voice "was not stuck anymore." The repeated idea shows she has become braver. The other sentences come from earlier in the story.'),
      Q('Why does Mr. Okafor give the girls a thumbs-up "without saying a word"?', ['He is angry that they are not taking a break.', 'He sees them practicing and is proud, but does not want to interrupt.', 'He cannot talk because he has a cold.', 'He wants them to stop playing.'], 1, 'A thumbs-up means "good job." He raised his eyebrows (surprised in a good way) and stayed quiet so the girls could keep working. Nothing in the story says he is angry or sick.')
    ],
    evidence: [
      'How does Josie feel on her first morning at Summer Strings? Explain in 2–3 sentences and copy one sentence from the passage that shows her feelings.',
      'What trick does Mae teach Josie? Explain how it helps, and copy the sentence where Mae describes the trick.',
      'Do you think Josie will come back next summer? Give a reason and copy a sentence from the end of the story that supports your answer.'
    ],
    summary: 'Write a 3–4 sentence summary of "The Last Chair." Tell who the main character is, the setting, the problem she faces, and how the problem is solved.'
  });

  // ======================= WEEK 2: character traits and inferences (fiction with an animal friend) =======================
  C.unit('reading', 2, {
    title: 'Patch and the Brass Key',
    genre: 'realistic fiction',
    skill: 'character traits and inferences',
    learn: [
      { h: 'Character traits', p: "A character trait is a word that describes what a character is like on the inside, such as patient, honest, bossy, or curious. Traits are different from feelings. A feeling, like being sad, can change in a minute. A trait, like being kind, shows up again and again. Authors rarely tell you traits. They SHOW you through what a character says, does, and thinks." },
      { h: 'Making an inference', p: "An inference is a smart conclusion you reach by putting together clues from the text and what you already know. Use this recipe: Text clue + What I know = Inference. For example, if a character slams a door and will not talk, and you know people do that when they are upset, you can infer the character is angry, even though the story never says so." }
    ],
    passage: [
      "Every morning at seven o’clock, Nora Whitfield carried a cup of unsalted peanuts to the end of her backyard and set them, one by one, on top of the fence post. Then she walked back to the porch steps and sat very still.",
      "For the first two weeks, nothing came. Her little brother, Eli, said she was wasting good peanuts. On the fifteenth morning, a crow landed on the pecan tree, tipped its head, and stared at her for a long time. It had one white feather on its left wing, like a patch on a pair of jeans.",
      "“Hello, Patch,” Nora whispered. She did not move. Patch dropped to the post, grabbed a peanut, and flew away.",
      "After that, Patch came every day. By August, the crow would hop along the fence rail while Nora watched, making soft clicking sounds in its throat. Nora kept a notebook titled CROW FACTS. She wrote down what time Patch arrived, what the weather was, and how many peanuts were taken.",
      "Then Patch began to leave things behind.",
      "First it was a green bottle cap. Then a blue button. Then a piece of glass worn smooth and cloudy. Nora lined them up on her windowsill like museum treasures. Eli rolled his eyes. “It’s just trash,” he said. But the next morning, Nora caught him on the porch at seven o’clock, sitting very still, with three peanuts in his hand.",
      "One Saturday, Nora found something new on the fence post. It was a small brass key tied to a faded red ribbon. She turned it over in her palm. It was the nicest gift yet. She already knew exactly where it would go on the windowsill.",
      "But something tugged at her memory. On Thursday, she had seen Mrs. Bell next door walking slowly around her garden, bending over the tomato plants and shaking her head. Mrs. Bell had lived alone since Mr. Bell passed away last winter. When Nora waved, Mrs. Bell had called, “Have you seen a little key, honey? With a red ribbon? It opens Harold’s old toolbox.” Nora had said no, and Mrs. Bell had gone back to searching with her mouth pressed into a thin line.",
      "Nora looked at the key. She looked at the windowsill. She looked at Mrs. Bell’s garden, where a tomato cage stood just a few feet from the fence.",
      "Then she walked next door and knocked.",
      "When Mrs. Bell saw the key, she put one hand over her heart and sat right down on her porch swing. For a moment she did not say anything at all. Then she laughed, a little shaky. “Harold kept his fishing lures in that box,” she said. “I haven’t been able to open it since he died. Where on earth did you find this?”",
      "Nora pointed to the pecan tree, where a black shape with a white feather was watching them both.",
      "“Well,” said Mrs. Bell, wiping her eyes. “Tell your friend I said thank you. And tell him that next time, I’ll trade him a whole bag of peanuts for anything shiny he finds in my garden.”",
      "That afternoon, Mrs. Bell opened the toolbox and gave Nora one bright red fishing lure, with the hook removed, for her windowsill collection. Nora put it right in the middle."
    ],
    vocab: [
      ['unsalted', 'without any salt added'],
      ['patch', 'a small piece of different color or material, like a piece sewn over a hole in jeans'],
      ['museum', 'a building where valuable or interesting objects are kept and shown to people'],
      ['palm', 'the inside part of your hand'],
      ['lures', 'small, shiny, colorful objects that fishermen use to attract fish']
    ],
    demo: {
      q: 'What can you infer about Mrs. Bell when she sits down on her porch swing and does not say anything at all?',
      steps: [
        'Step 1: Find the text clues. She puts a hand over her heart, sits right down, and is silent. Then she laughs "a little shaky" and wipes her eyes.',
        'Step 2: Add what you know. People sometimes need to sit down and cannot speak when they get surprising news that touches their heart. Wiping eyes usually means tears.',
        'Step 3: Add more text clues. The key opens the toolbox of Harold, her husband who died. It is not just any key; it connects her to him.',
        'Step 4: Put it together into an inference.'
      ],
      a: 'Mrs. Bell is overwhelmed with emotion, both happy and sad, because the key brings back a special connection to her husband.'
    },
    items: [
      Q('Nora sat still on the porch every morning for two weeks before any crow came. Which character trait does this show?', ['Patient', 'Bossy', 'Forgetful', 'Lazy'], 0, 'Waiting quietly day after day, even when nothing happens and her brother says she is wasting peanuts, shows patience. A lazy person would not get up every morning at seven to do it.', 'What did she keep doing even when nothing happened?'),
      Q('Nora keeps a notebook called CROW FACTS and writes down the time, weather, and number of peanuts. What trait does this BEST show?', ['Careless', 'Observant and curious', 'Shy', 'Selfish'], 1, 'Writing down careful details about Patch shows that Nora notices things and wants to learn more. That is what observant and curious people do.'),
      Q('Eli says the gifts are "just trash," but the next morning he is sitting on the porch with peanuts. What can you INFER about Eli?', ['He wants to scare the crow away.', 'He is hungry and wants the peanuts.', 'He is more interested in Patch than he wants to admit.', 'He is trying to get Nora in trouble.'], 2, 'Text clue: he copies exactly what Nora does, sitting still at seven with peanuts. What I know: people sometimes tease about things they secretly like. Inference: Eli is curious about the crow too.', 'Look at what he DOES, not just what he says.'),
      Q('Where did Patch most likely find the brass key?', ['In Nora\'s bedroom', 'At a store downtown', 'Inside Harold\'s toolbox', 'In Mrs. Bell\'s garden, near the fence'], 3, 'The author gives clues: Mrs. Bell was searching her garden for the key, and a tomato cage stood "just a few feet from the fence." Nora puts these clues together. The key could not have been in the toolbox, because the toolbox was locked.'),
      Q('Why did Nora walk next door instead of putting the key on her windowsill?', ['She realized the key belonged to Mrs. Bell and knew she should return it.', 'She did not like the key.', 'Her mother told her to.', 'Patch flew to Mrs. Bell\'s house.'], 0, 'Nora remembers Mrs. Bell asking about a key with a red ribbon. Even though it was "the nicest gift yet," she returns it. No one tells her to, which shows the choice was her own.'),
      Q('Which word BEST describes Nora based on her choice to return the key?', ['Greedy', 'Honest', 'Fearful', 'Silly'], 1, 'Nora wanted to keep the key, but she gave it back to its owner without being asked. Doing the right thing even when it costs you something is a sign of honesty.'),
      Q('When Mrs. Bell searches the garden "with her mouth pressed into a thin line," what does this clue suggest?', ['She is about to sing.', 'She is very happy.', 'She is worried and upset.', 'She is eating something sour.'], 2, 'People often press their lips together when they are worried or trying not to cry. Along with "shaking her head," this clue shows she is upset about the lost key.'),
      Q('Paragraph 2 says the crow\'s white feather looked "like a patch on a pair of jeans." What does patch mean here?', ['A garden where vegetables grow', 'A small piece of a different color', 'A sticker on a notebook', 'A large hole'], 1, 'A patch on jeans is a small piece that looks different from the rest. One white feather on a black crow looks the same way. "Patch" can also mean a garden area, like a pumpkin patch, but the jeans clue shows that is not the meaning here.', 'Think about what a patch on jeans looks like.'),
      Q('Nora "lined them up on her windowsill like museum treasures." What does this comparison tell you about how Nora feels about the gifts?', ['She thinks they are worthless.', 'She plans to sell them.', 'She is afraid of them.', 'She thinks they are special and worth showing off.'], 3, 'A museum keeps valuable, interesting objects and displays them carefully. By comparing the windowsill to a museum, the author shows that Nora treasures the gifts, even if Eli calls them trash.'),
      Q('What does Mrs. Bell\'s offer to trade "a whole bag of peanuts" for anything shiny show about her?', ['She is grateful and has a sense of humor.', 'She is angry at the crow.', 'She wants Nora to stop feeding birds.', 'She does not believe Nora\'s story.'], 0, 'Mrs. Bell asks Nora to thank Patch and jokes about trading with a crow. That shows gratitude and a playful sense of humor, even right after crying. She is not angry; the crow helped her.')
    ],
    evidence: [
      'Choose ONE character trait that describes Nora. Explain why it fits her in 2–3 sentences and copy a sentence from the passage that shows the trait.',
      'How do you think Mrs. Bell feels about her husband, Harold? Make an inference and copy a sentence from the passage that gave you a clue.',
      'Does Eli change during the story? Explain your thinking and copy a sentence from the passage that supports your answer.'
    ],
    summary: 'Write a 3–4 sentence summary of "Patch and the Brass Key." Tell how Nora and Patch became friends, what Patch began to do, and what Nora decided to do with the brass key.'
  });

  // ======================= WEEK 3: vocabulary in context (informational) =======================
  C.unit('reading', 3, {
    title: 'Jobs That Disappeared',
    genre: 'informational',
    skill: 'vocabulary in context (context clues)',
    learn: [
      { h: 'Be a word detective', p: "When you meet a word you do not know, do not skip it. The words and sentences around it are called its CONTEXT, and they often hold clues to its meaning. Read the sentence before, the sentence with the word, and the sentence after. Then make a guess and test it by putting your meaning in place of the word. If the sentence still makes sense, you probably cracked it." },
      { h: 'Four kinds of clues', p: "DEFINITION clue: the author tells you the meaning, often after a comma or the word \"or\" (\"tongs, or giant metal pinchers\"). SYNONYM clue: a nearby word means almost the same thing. ANTONYM clue: a nearby word means the opposite, often after words like but or instead (\"at dusk, and again at dawn\"). EXAMPLE clue: the author lists examples, often after such as or like." }
    ],
    passage: [
      "Think about the jobs people have today: doctors, pilots, teachers, video game designers. Now imagine that someday, many of those jobs might not exist at all. That has happened before. Some jobs that were once very common have become obsolete, or no longer needed, because new inventions took their place. Here are a few jobs your great-great-grandparents might have known.",
      "Before most families owned an alarm clock, how did factory workers get up on time? In parts of Britain and Ireland in the 1800s and early 1900s, many paid a knocker-upper. This worker walked through the dark streets before sunrise carrying a long pole. At each customer’s house, the knocker-upper tapped on an upstairs window until someone inside answered. A knocker-upper had to be punctual. If he or she showed up late, a whole house of workers might be late too, and they could lose pay at the factory. Cheap, dependable alarm clocks eventually made the job disappear.",
      "In many cities, the streets at night were once lit by gas lamps, and someone had to light every single one. That person was the lamplighter. At dusk, when the sky began to darken, the lamplighter walked a route from post to post, using a ladder or a long pole to reach the flame. At dawn, when the sun came back up, the lamplighter returned to put each flame out. When electric streetlights spread, the lamps no longer needed a person to light them, and the number of lamplighters dwindled until there were almost none left.",
      "Before electric refrigerators became common, many American homes kept food cold in an icebox. An icebox was a wooden cabinet lined with metal that held a large block of ice. In winter, workers cut ice from frozen lakes and stored it in icehouses packed with sawdust so it would melt slowly. All year long, the iceman drove through town delivering it. He gripped each heavy block with tongs, or giant metal pinchers, and carried it inside. Families often put a card in the window to show how many pounds of ice they wanted that day. Ice was important because perishable foods, such as milk, butter, and meat, spoil quickly when they get warm.",
      "Early telephones could not connect a call by themselves. When you picked up the phone, you reached a switchboard operator, often a young woman sitting in front of a tall board full of holes and cords. You told her who you wanted to call, and she plugged a cord into the correct hole to connect you. Operators had to be nimble, moving their hands quickly and lightly across the board to handle many calls at once. As telephones that could dial numbers on their own spread across the country, fewer operators were needed.",
      "These jobs may be gone, but the people who did them kept their towns running. And somewhere right now, someone is doing a job that your grandchildren will someday read about in a passage just like this one."
    ],
    vocab: [
      ['obsolete', 'no longer used or needed because something newer has taken its place'],
      ['punctual', 'on time; not late'],
      ['dusk', 'the time in the evening when the sky begins to get dark'],
      ['dwindled', 'became smaller and smaller in number'],
      ['perishable', 'able to spoil or go bad quickly']
    ],
    demo: {
      q: 'What does "perishable" mean in paragraph 4?',
      steps: [
        'Step 1: Find the sentence. "Ice was important because perishable foods, such as milk, butter, and meat, spoil quickly when they get warm."',
        'Step 2: Spot the clue type. The words "such as" signal an EXAMPLE clue: milk, butter, and meat. The rest of the sentence adds that these foods "spoil quickly when they get warm."',
        'Step 3: Ask what the examples have in common. All three go bad if they are not kept cold.',
        'Step 4: Test it. "Ice was important because foods that spoil quickly..." The sentence still makes sense.'
      ],
      a: 'Perishable means able to spoil or go bad quickly.'
    },
    items: [
      Q('In paragraph 1, what does "obsolete" mean?', ['Very expensive', 'No longer needed', 'Dangerous', 'Brand new'], 1, 'This is a DEFINITION clue. Right after the word, the author writes "or no longer needed." Brand new is the opposite of obsolete, so it is a tempting trap.', 'Look at the words right after the comma.'),
      Q('"A knocker-upper had to be punctual. If he or she showed up late, a whole house of workers might be late too." What does punctual mean?', ['Strong', 'Quiet', 'Friendly', 'On time'], 3, 'The next sentence explains what would happen if the knocker-upper was late. That is an ANTONYM clue: punctual is the opposite of late, so it means on time.'),
      Q('"At dusk, when the sky began to darken... At dawn, when the sun came back up." Which kind of clue helps you understand dusk?', ['An antonym clue, because dawn is the opposite time of day', 'An example clue', 'There is no clue', 'A clue from the title'], 0, 'Dusk is paired with dawn, its opposite. The author also adds "when the sky began to darken," a definition clue. Both clues show that dusk is evening, when it gets dark.'),
      Q('"The number of lamplighters dwindled until there were almost none left." What does dwindled mean?', ['Grew larger', 'Stayed the same', 'Became smaller and smaller', 'Moved to a new city'], 2, 'The phrase "until there were almost none left" shows the number kept going down. So dwindled means became smaller little by little. "Grew larger" is the opposite.', 'What was left at the end?'),
      Q('In paragraph 5, operators had to be "nimble, moving their hands quickly and lightly." What does nimble mean?', ['Quick and light in movement', 'Slow and careful', 'Loud and bossy', 'Tired and sleepy'], 0, 'The author defines the word right after the comma: "moving their hands quickly and lightly." Slow and tired are the opposite of what operators needed to handle many calls at once.'),
      Q('What are "tongs," according to paragraph 4?', ['Blocks of ice', 'Giant metal pinchers used to grip things', 'Cards put in a window', 'Wooden cabinets'], 1, 'The author gives a DEFINITION clue: "tongs, or giant metal pinchers." The iceman used them to grip heavy blocks of ice. The wooden cabinet is the icebox, not the tongs.'),
      Q('What invention made the knocker-upper\'s job disappear?', ['The electric streetlight', 'The telephone', 'The refrigerator', 'Cheap, dependable alarm clocks'], 3, 'Paragraph 2 ends by saying "Cheap, dependable alarm clocks eventually made the job disappear." Each job in the passage was replaced by a different invention, so be careful to match the right one.'),
      Q('Why did workers pack ice in sawdust in the icehouses?', ['To make the ice taste better', 'To make the ice easier to cut', 'So the ice would melt slowly', 'To color the ice'], 2, 'Paragraph 4 says the ice was stored "in icehouses packed with sawdust so it would melt slowly." Sawdust works like a blanket that keeps warm air away from the ice.'),
      Q('What is the main idea of the whole passage?', ['Lamplighters had the hardest job in history.', 'Some jobs that were once common disappeared when new inventions replaced them.', 'People should not use alarm clocks.', 'Telephones were invented in Britain.'], 1, 'Every paragraph describes a job (knocker-upper, lamplighter, iceman, operator) and the invention that replaced it. The passage never says one job was hardest, and it does not say where telephones were invented.'),
      Q('Why does the author end by saying someone today is doing a job "your grandchildren will someday read about"?', ['To show that jobs are boring', 'To tell you to stop working', 'To prove that ice is still delivered', 'To help you see that jobs will keep changing in the future too'], 3, 'The last paragraph connects the past to the future. Just as old jobs disappeared, some of today\'s jobs may disappear too. That is the idea the author wants you to think about.')
    ],
    evidence: [
      'Choose one of the four jobs. Explain what the worker did and why the job disappeared, and copy a sentence from the passage that supports your answer.',
      'Pick one vocabulary word from the passage. Tell what it means and which kind of context clue helped you (definition, synonym, antonym, or example). Copy the sentence that holds the clue.',
      'Which old-time job would you most like to have tried, and why? Copy a sentence from the passage that describes something about that job you would enjoy.'
    ],
    summary: 'Write a 3–4 sentence summary of "Jobs That Disappeared." Start with the main idea, then name at least two of the jobs and the inventions that replaced them.'
  });

  // ======================= WEEK 4: theme and summary (folktale-style story) =======================
  C.unit('reading', 4, {
    title: 'The Blanket of a Hundred Rows',
    genre: 'folktale (original)',
    skill: 'theme and summary',
    learn: [
      { h: 'Finding the theme', p: "The theme is the big lesson or message of a story, a truth about life that could fit many stories, not just this one. \"Mira learns to weave\" is NOT a theme; it is a plot event. \"Good things take time\" IS a theme. To find it, ask: What does the main character learn? How does she change? What would the author want me to remember?" },
      { h: 'Writing a summary', p: "A summary retells the most important events, in order, in just a few sentences and in your own words. Use the beginning, middle, and end, and connect with words like first, then, and finally. Leave out small details, like what color something was, and do not add your opinion. Folktales often repeat events in threes, which makes them easier to summarize: tell what happened each time." }
    ],
    passage: [
      "Long ago, in a village between two green hills, there lived an old weaver named Grandmother Tal. Her blankets were so warm that people said a baby wrapped in one would never catch a winter cough. Every autumn, travelers came from far away to trade for them at the village market.",
      "One spring, a girl named Mira came to live with Grandmother Tal and learn the weaver’s craft. Mira was quick. She could run to the well and back before the old woman finished tying her shoes. She could name every bird by its song. But Mira did not like waiting for anything.",
      "“In seven days is the spring market,” Mira announced on her first morning. “I will weave a blanket for it, and everyone will praise it.”",
      "Grandmother Tal smiled. “A good blanket has a hundred rows,” she said. “Each row must be pulled snug against the one before it. Weave one row well, and then another.”",
      "But Mira was already at the loom. She pushed the yarn through fast, faster, fastest. She skipped rows. She pulled some threads tight and left others loose. By sunset the blanket was finished, but it was lumpy and full of holes. When she held it up, the wind blew right through it.",
      "Mira pulled it apart and tried again. This time she wove until the moon came up. Her new blanket looked better, but when she tugged one corner, the whole edge came unraveled, coming loose thread by thread until it lay on the floor in a curly pile.",
      "On the third day, Mira did not touch the loom at all. She sat on the doorstep with her chin in her hands. “I am not a weaver,” she said. “I will never be one.”",
      "Grandmother Tal sat down beside her and pointed at the swallows building a nest under the roof. “How did they make that?” she asked.",
      "Mira watched. A swallow flew off and came back with one beakful of mud. It pressed the mud into place. Then it flew off again. One beakful. Then another. Then another.",
      "“One at a time,” Mira said slowly.",
      "“One at a time,” said Grandmother Tal. “And no swallow ever builds a nest by tomorrow.”",
      "So Mira went back to the loom. She wove one row and pressed it snug. She wove another. When her arms ached, she rested. When she wanted to hurry, she watched the swallows. The spring market came and went, and Mira’s blanket was only half done. She was surprised to find she did not mind.",
      "She worked through the long summer. And when the autumn market arrived, Mira carried a blanket of a hundred rows to the village square. It was not the fanciest blanket there. But a traveling mother wrapped it around her baby and smiled, and Mira knew that every row had been worth it.",
      "To this day, they say, the weavers in that village hang a swallow’s feather above every loom, so that no one in a hurry forgets."
    ],
    vocab: [
      ['craft', 'a skill of making things by hand'],
      ['loom', 'a frame or machine used for weaving threads into cloth'],
      ['snug', 'pressed close and tight, with no gaps'],
      ['unraveled', 'came apart thread by thread'],
      ['praise', 'to say good things about someone or something']
    ],
    demo: {
      q: 'What is the THEME of "The Blanket of a Hundred Rows"?',
      steps: [
        'Step 1: Ask how the main character changes. At the beginning, Mira "did not like waiting for anything" and rushed. At the end, she worked row by row and "did not mind" missing the spring market.',
        'Step 2: Ask what taught her. The swallows building a nest "one beakful" at a time, and Grandmother Tal\'s words, "no swallow ever builds a nest by tomorrow."',
        'Step 3: Turn the lesson into a sentence about life, not just about Mira. Do not use character names.',
        'Step 4: Check it against the ending. The finished blanket was "worth it," and the village hangs a feather "so that no one in a hurry forgets." The theme fits.'
      ],
      a: 'The theme is that good things take patience and are built one small step at a time.'
    },
    items: [
      Q('Which sentence BEST states the theme of the story?', ['Swallows build nests out of mud.', 'Good work takes patience and is done one small step at a time.', 'Weaving is the most important job in a village.', 'Mira went to the autumn market.'], 1, 'A theme is a lesson about life. The story shows Mira failing when she rushes and succeeding when she works "one at a time." The swallow fact and the market are details or events, not the lesson.', 'What did Mira LEARN?'),
      Q('Which sentence is NOT a theme, but just an event from the plot?', ['Hard things are easier when you take them one step at a time.', 'Rushing often leads to poor work.', 'Patience brings rewards.', 'Mira wove a blanket and took it to market.'], 3, 'A theme could fit many different stories. "Mira wove a blanket and took it to market" only describes what happened in THIS story, so it is a plot event, not a theme.'),
      Q('What is Mira\'s main character trait at the BEGINNING of the story?', ['Impatient', 'Lazy', 'Cruel', 'Shy'], 0, 'The story tells us Mira "did not like waiting for anything," and she rushes through her first two blankets. She is not lazy; she works hard, just too fast.'),
      Q('What happens to Mira\'s SECOND blanket?', ['The wind blows it away.', 'A baby wears it.', 'The edge comes unraveled when she tugs one corner.', 'She sells it at the spring market.'], 2, 'The first blanket was lumpy with holes, and the wind blew through it. The second looked better, but "the whole edge came unraveled." Folktales often repeat events in threes, so keep track of each try.'),
      Q('What does Mira learn from watching the swallows?', ['That birds are better than people', 'That big things are built one small piece at a time', 'That she should build a nest', 'That mud is better than yarn'], 1, 'The swallow brings "one beakful of mud" at a time. Mira says, "One at a time," and then weaves her blanket the same way. The birds are a model for patience.'),
      Q('Which is the BEST summary of the story?', ['Mira, a quick girl who hates waiting, rushes two weavings that fall apart. After watching swallows build a nest one beakful at a time, she weaves slowly all summer and finishes a fine blanket for the autumn market.', 'Grandmother Tal makes warm blankets that keep babies from coughing.', 'Mira can run fast and name every bird by its song. She likes swallows. There is a market in spring and one in autumn.', 'Mira should not have rushed. I think she was silly, and the story was really good.'], 0, 'A good summary tells the main events from beginning to end, in order. The second choice is only one detail, the third lists small details and skips the problem, and the last gives an opinion, which does not belong in a summary.'),
      Q('In paragraph 4, Grandmother Tal says each row must be pulled "snug against the one before it." What does snug mean?', ['Loose and floppy', 'Wet', 'Brightly colored', 'Close and tight, with no gaps'], 3, 'Mira\'s first blanket had loose threads and holes, and the wind blew through it. That shows what happens when rows are NOT snug. So snug means pressed close with no gaps.', 'What went wrong with the first blanket?'),
      Q('In paragraph 6, what does "unraveled" mean?', ['Became softer', 'Came apart thread by thread', 'Got wet in the rain', 'Was folded neatly'], 1, 'The author gives a definition clue right after the word: "coming loose thread by thread until it lay on the floor in a curly pile." So unraveled means came apart.'),
      Q('Why does Mira "not mind" that the spring market came and went?', ['She forgot about it.', 'She did not like markets.', 'She had learned that a blanket worth having takes time.', 'Grandmother Tal said she could not go.'], 2, 'At the start Mira wanted praise in seven days. By the middle she has learned patience from the swallows, so missing the deadline no longer upsets her. This change in Mira is the heart of the theme.'),
      Q('Why do the weavers in the village hang a swallow\'s feather above every loom?', ['To remind anyone in a hurry to be patient, as Mira learned', 'To scare away birds', 'To make the blankets warmer', 'Because swallows taught them to weave'], 0, 'The last line says the feather is there "so that no one in a hurry forgets." It is a reminder of the lesson Mira learned from the swallows. Many folktales end by explaining a custom like this.')
    ],
    evidence: [
      'What is the theme of the story? State it in one sentence without using any character names, then explain it in 2–3 sentences and copy a sentence from the passage that shows it.',
      'How is Mira different at the end of the story than at the beginning? Explain, and copy one sentence from the beginning and one from the end that show the change.',
      'Why do you think Grandmother Tal points to the swallows instead of just telling Mira to slow down? Explain and copy a sentence from the passage that supports your answer.'
    ],
    summary: 'Write a 3–4 sentence summary of "The Blanket of a Hundred Rows." Use first, then, and finally. Tell what Mira wanted, what happened when she rushed, what she learned, and how the story ends. Leave out your opinion.'
  });

})(typeof window !== 'undefined' ? window : globalThis);
