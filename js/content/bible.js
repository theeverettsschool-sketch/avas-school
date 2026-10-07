/* Bible — Weeks 1-4. Scripture text is WEB (public domain) from scripture.js.
   Retellings and questions are original wording written for a 10-year-old. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  function bible(week, role, title, refs, retell, questions, verse, reflect, niv) {
    var l = { id: 'w' + week + '-' + role + '-bible', subject: 'bible', type: 'bible', title: title, mins: 15, refs: refs, retell: retell, questions: questions, verse: verse, reflect: reflect, niv: niv };
    C.add(l); return l.id;
  }
  var G = 'Genesis';
  // verse stages: read -> blanks1 -> blanks2 -> letters -> recall
  function vs(ref, stage, mode) { return { ref: ref, stage: stage }; }

  // ---------------- WEEK 1: Creation (Tue-Fri) ----------------
  C.plan(1, 'tue', []); C.plan(1, 'wed', []); C.plan(1, 'thu', []); C.plan(1, 'fri', []);
  var w1 = {};
  w1.tue = bible(1, 'tue', 'In the beginning: light', [{ book: G, ch: 1, from: 1, to: 5 }],
    ['Before there was a sky, a sun, or even one tree, there was God. The Bible begins with a huge idea: God made everything, and he made it on purpose.',
     'At first the earth was dark and empty. Then God spoke. He said, "Let there be light," and light appeared. Nobody had to help him and nothing had to be built first. His word was enough.',
     'God looked at the light and said it was good. Then he separated light from darkness and gave them names: day and night. That was the first day.'],
    [Q('What did God do first, according to Genesis 1:3?', ['He made the sun and moon', 'He said, "Let there be light"', 'He made animals', 'He made people'], 1, 'Verse 3 says, "God said, \'Let there be light,\' and there was light." The very first thing God made was light, and he made it by speaking. (The sun and moon come later, on day four.)', 'Look at verse 3.'),
     Q('What does verse 2 tell us the earth was like before God made light?', ['Full of animals', 'Formless and empty, and dark', 'Covered with trees', 'Bright and warm'], 1, 'Verse 2: "The earth was formless and empty. Darkness was on the surface of the deep." Before God spoke, there was no shape, no life, and no light.', 'Look at verse 2.'),
     T('What names did God give to the light and to the darkness? (two words, like "__ and __")', ['day and night', 'day, night', 'day night'], 'Verse 5: "God called the light \'day\', and the darkness he called \'night\'." Naming something shows that God is in charge of it.', 'Verse 5.'),
     Q('Why does the Bible say "God saw that it was good"?', ['Because he was surprised by it', 'Because what he made was exactly what he planned, with nothing wrong in it', 'Because he wasn\'t sure', 'Because people told him'], 1, 'When God says something is "good," it means it was right and just as he meant it to be. God is not surprised or guessing. He makes things well.')],
    vs('Genesis 1:1', 'read'), 'God made light just by speaking. When you wake up to light in the morning, what is one thing you can thank God for? Write 1–2 sentences.', 'Genesis 1:1-5');

  w1.wed = bible(1, 'wed', 'Sky, land, and growing things', [{ book: G, ch: 1, from: 6, to: 13 }],
    ['On the second day, God made the sky. He put space between the waters below and the waters above, and he called that space "sky."',
     'On the third day, God gathered the water into one place. Dry land appeared, and God named the land "earth" and the waters "seas." Then he said, "Let the earth yield grass, herbs, and fruit trees," and the whole earth turned green.',
     'Notice how orderly God is. First he made the places (sky, sea, land). Then he filled them. That pattern keeps going all week.'],
    [Q('What did God make on the second day?', ['The sky (the expanse)', 'The animals', 'The sun', 'The seas only'], 0, 'Verses 6-8: God made the expanse and called it "sky." That was the second day.', 'Verse 8 names the day.'),
     Q('What appeared when the waters were gathered together?', ['Dry land', 'Stars', 'Birds', 'A rainbow'], 0, 'Verse 9: "Let the waters under the sky be gathered together to one place, and let the dry land appear." Dry land came out of the gathered waters.', 'Verse 9.'),
     T('What did God call the dry land? (one word)', ['earth'], 'Verse 10: "God called the dry land \'earth\', and the gathering together of the waters he called \'seas\'."', 'Verse 10.'),
     Q('Which came FIRST on day three?', ['Fruit trees growing', 'Dry land appearing', 'Fish swimming', 'Stars shining'], 1, 'Dry land has to exist before a plant can grow in it. God made the place first (verse 9) and then filled it with plants (verses 11-12). He works in a careful order.')],
    vs('Genesis 1:1', 'blanks1'), 'God made the land and everything that grows. What is your favorite plant, fruit, or tree? Tell why you are glad God made it.', 'Genesis 1:6-13');

  w1.thu = bible(1, 'thu', 'Lights, fish, birds, and animals', [{ book: G, ch: 1, from: 14, to: 19 }, { book: G, ch: 1, from: 20, to: 25 }],
    ['On day four, God filled the sky. He made the sun to rule the day, the moon to rule the night, and the stars too. They mark days, seasons, and years.',
     'On day five, God filled the sea and the sky with life: huge sea creatures, fish, and birds of every kind. He blessed them and told them to multiply.',
     'On day six, God made the land animals: livestock, creeping things, and wild animals, each "after its kind." Again and again, God looked at what he made and saw that it was good.'],
    [Q('Which day did God make the sun, moon, and stars?', ['Day 2', 'Day 3', 'Day 4', 'Day 6'], 2, 'Verse 19 ends the section: "There was evening and there was morning, a fourth day." The sun, moon, and stars came on day four.', 'Look at verse 19.'),
     Q('What did God make on the fifth day?', ['Land animals', 'Fish and birds', 'People', 'Plants'], 1, 'Verses 20-23: sea creatures and birds. Verse 23 says "a fifth day."', 'Verse 23.'),
     Q('What are the lights in the sky for, according to verse 14?', ['Only to look pretty', 'To divide day from night and to mark seasons, days, and years', 'To scare animals', 'To make rain'], 1, 'Verse 14: the lights divide "the day from the night" and are "signs to mark seasons, days, and years." They help us keep time.', 'Verse 14.'),
     T('What phrase does God say again and again after he makes something? Finish it: "God saw that it was ____."', ['good'], 'God repeats this to show everything he made was right and well-made (verses 18, 21, 25).')],
    vs('Genesis 1:1', 'blanks2'), 'God made animals "after their kind." What is your favorite animal, and what is one amazing thing about how God made it?', 'Genesis 1:14-25');

  w1.fri = bible(1, 'fri', 'People made in God\'s image, and the day of rest', [{ book: G, ch: 1, from: 26, to: 31 }, { book: G, ch: 2, from: 1, to: 3 }],
    ['On day six, God did something different. He did not just say "Let there be." He said, "Let us make man in our image." People are the only part of creation made in God\'s image. That means every person, including you, has great worth.',
     'God told the first people to care for the earth. Then he looked at everything he had made and said it was "very good." Not just good. Very good.',
     'On the seventh day God rested. He wasn\'t tired. He stopped to show that the work was complete, and he made the day holy. Rest is a gift.'],
    [Q('What makes people different from the rest of creation, according to verse 27?', ['They are bigger', 'They are made in God\'s image', 'They can run fast', 'They were made first'], 1, 'Verse 27: "God created man in his own image. In God\'s image he created him; male and female he created them." Being made in God\'s image means every person matters to him.', 'Verse 27.'),
     Q('How did God describe all that he had made, in verse 31?', ['Good', 'Very good', 'Finished', 'Strange'], 1, 'Verse 31: "behold, it was very good." Before this, each thing was "good." Now that everything is complete, it is "very good."', 'Verse 31.'),
     Q('What did God do on the seventh day?', ['Made more animals', 'Rested from his work and made the day holy', 'Made a flood', 'Built a tower'], 1, 'Genesis 2:2-3: God "rested on the seventh day" and "blessed the seventh day, and made it holy."', 'Genesis 2:2-3.'),
     T('Fill in the memory verse from Genesis 1:1: "In the beginning, God created the ____ and the earth."', ['heavens'], 'Genesis 1:1: "In the beginning, God created the heavens and the earth." Say it out loud 3 times.')],
    vs('Genesis 1:1', 'recall'), 'You are made in God\'s image. What is one way you can treat another person well this weekend because they are made in God\'s image?', 'Genesis 1:26-2:3');

  // ---------------- WEEK 2: The Fall, Cain & Abel (Mon-Fri) ----------------
  var w2 = {};
  w2.mon = bible(2, 'mon', 'A good garden and a sneaky question', [{ book: G, ch: 3, from: 1, to: 5 }],
    ['God put the first people in a beautiful garden and gave them one rule: do not eat from one tree. Everything else was theirs.',
     'One day the serpent asked the woman a tricky question: "Has God really said...?" He twisted what God had said and made it sound like God was holding something back.',
     'Notice what the serpent did. He did not shout. He made her doubt that God was good. That is how temptation often starts: a small doubt about what God said.'],
    [Q('What was the serpent\'s first move in verse 1?', ['He gave her a gift', 'He asked a question that made her doubt what God said', 'He ran away', 'He told her to obey God'], 1, 'Verse 1: "Has God really said, \'You shall not eat of any tree of the garden\'?" The serpent twisted God\'s words. God had said they could eat from every tree except one.', 'Verse 1.'),
     Q('What did the serpent say in verse 4?', ['"You will die if you eat it."', '"You won\'t really die."', '"Ask God first."', '"Take two."'], 1, 'Verse 4: "You won\'t really die." This directly contradicted what God said. When someone tells us the opposite of what God said, we should trust God.', 'Verse 4.'),
     Q('What lie did the serpent tell about the fruit in verse 5?', ['That it would taste bad', 'That they would be like God, knowing good and evil', 'That it was poison', 'That it was a gift from God'], 1, 'Verse 5: "you will be like God, knowing good and evil." They already were made in God\'s image. The lie made them feel they were missing something.', 'Verse 5.')],
    vs('Romans 3:23', 'read'), 'The serpent made the woman doubt God. Have you ever doubted that a rule was good? What helps you trust that God and your parents care about you?', 'Genesis 3:1-5');

  w2.tue = bible(2, 'tue', 'The choice', [{ book: G, ch: 3, from: 6, to: 8 }],
    ['The woman looked at the fruit. It looked good to eat and nice to see. She took some, ate it, and gave some to her husband. He ate it too.',
     'Right away, things changed. They knew they had done wrong, and they felt shame. They sewed fig leaves to cover themselves.',
     'Then they heard God walking in the garden, and they hid. Sin always makes us want to hide, but we cannot hide from God.'],
    [Q('What did the woman notice about the tree in verse 6?', ['It was good for food, a delight to the eyes, and desired to make one wise', 'It was ugly', 'It was hidden', 'It was far away'], 0, 'Verse 6 lists three things she noticed. Temptation often looks attractive. That is why God\'s word matters more than how something looks.', 'Verse 6.'),
     Q('What was the first thing they did after eating, in verse 7?', ['Sang a song', 'Sewed fig leaves to cover themselves', 'Went to sleep', 'Told God'], 1, 'Verse 7: "They sewed fig leaves together, and made coverings for themselves." They felt shame and tried to fix it themselves.', 'Verse 7.'),
     Q('What did they do when they heard God in verse 8?', ['Ran to him', 'Hid among the trees', 'Hid the fruit and said nothing', 'Fell asleep'], 1, 'Verse 8: "the man and his wife hid themselves from the presence of Yahweh God." When we do wrong we often want to hide instead of tell the truth.', 'Verse 8.')],
    vs('Romans 3:23', 'blanks1'), 'Adam and Eve hid when they did wrong. Why do you think we feel like hiding when we make a mistake? What is a better choice?', 'Genesis 3:6-8');

  w2.wed = bible(2, 'wed', 'Where are you?', [{ book: G, ch: 3, from: 9, to: 13 }],
    ['God called out, "Where are you?" God knew where they were. He asked because he wanted them to come and tell the truth.',
     'The man said he was afraid and had hidden. God asked if he had eaten from the tree. The man blamed the woman. The woman blamed the serpent.',
     'Nobody said, "I did it, and I\'m sorry." But God still came looking for them. That shows his love, even when people do wrong. This is why we need what Romans 3:23 tells us: everyone has sinned and needs God\'s help.'],
    [Q('Why do you think God asked "Where are you?" (verse 9)?', ['He did not know where they were', 'He wanted them to come out and tell the truth', 'He was angry and wanted to scare them', 'He wanted to play a game'], 1, 'God knows everything. He asked so they would come to him and be honest. Asking questions is how he invites us to talk.', 'Think about what God already knows.'),
     Q('What did the man do when God asked about the fruit, in verse 12?', ['Said sorry', 'Blamed the woman', 'Ran away', 'Told the truth right away'], 1, 'Verse 12: "The woman whom you gave to be with me, she gave me fruit from the tree, and I ate it." He blamed the woman, and even hinted at God ("whom you gave").', 'Verse 12.'),
     Q('What did the woman say in verse 13?', ['"I am sorry."', '"The serpent deceived me, and I ate."', '"The man made me."', '"I did not eat."'], 1, 'Verse 13: "The serpent deceived me, and I ate." She also pointed to someone else. Being honest means saying "I did it" without blaming.', 'Verse 13.'),
     T('Fill in Romans 3:23: "for all have ____, and fall short of the glory of God;"', ['sinned'], 'Romans 3:23 teaches that everyone, not just Adam and Eve, has sinned. That is why we need God\'s forgiveness.')],
    vs('Romans 3:23', 'blanks2'), 'Adam and Eve blamed others. What is a good way to say "I\'m sorry" without making excuses? Write what you would say.', 'Genesis 3:9-13');

  w2.thu = bible(2, 'thu', 'Two brothers, two offerings', [{ book: G, ch: 4, from: 1, to: 7 }],
    ['Adam and Eve had two sons, Cain and Abel. Cain worked the ground and Abel took care of sheep.',
     'Each one brought an offering to God. God was pleased with Abel and his offering, but not with Cain\'s. Cain became very angry, and his face fell.',
     'God spoke kindly to Cain. He asked why he was angry and told him, "If you do well, won\'t it be lifted up?" God also warned him that sin was crouching at the door like an animal ready to pounce, but Cain was to rule over it. Cain had a choice.'],
    [Q('What did Abel do for work?', ['Farmer', 'Keeper of sheep', 'Builder', 'Fisherman'], 1, 'Genesis 4:2: "Abel was a keeper of sheep, but Cain was a tiller of the ground."', 'Verse 2.'),
     Q('How did Cain feel when God did not respect his offering?', ['Happy', 'Very angry', 'Sleepy', 'Surprised and thankful'], 1, 'Verse 5: "Cain was very angry, and the expression on his face fell."', 'Verse 5.'),
     Q('What did God warn Cain about in verse 7?', ['Sin crouching at the door, wanting to control him', 'A storm coming', 'Wild animals', 'His brother'], 0, 'Verse 7: "sin crouches at the door. Its desire is for you, but you are to rule over it." God told Cain he could choose to do right.', 'Verse 7.'),
     Q('What did God offer Cain in verse 7?', ['A chance to do well and be lifted up', 'A new field', 'A punishment right away', 'Nothing'], 0, 'God said, "If you do well, won\'t it be lifted up?" Even when Cain was angry, God gave him a way to make things right.')],
    vs('Romans 3:23', 'letters'), 'God told Cain he could rule over sin. What can you do when you feel angry so you do not do something wrong? Write one or two ideas.', 'Genesis 4:1-7');

  w2.fri = bible(2, 'fri', 'What anger can lead to', [{ book: G, ch: 4, from: 8, to: 10 }],
    ['Cain did not listen to God\'s warning. He asked Abel to go out to the field, and there he hurt his brother very badly. It was the first murder in the Bible.',
     'God asked Cain, "Where is Abel, your brother?" Cain answered with a lie and a rude question: "I don\'t know. Am I my brother\'s keeper?" God told Cain he knew what happened.',
     'This story shows how a small angry thought, if we feed it, can grow into something terrible. It also shows God sees everything and cares about every person.'],
    [Q('What did Cain say when God asked where Abel was?', ['"He is in the field."', '"I don\'t know. Am I my brother\'s keeper?"', '"I am sorry."', '"Ask Eve."'], 1, 'Verse 9. Cain lied ("I don\'t know") and tried to avoid responsibility. We ARE supposed to care about each other.', 'Verse 9.'),
     Q('What did God say in verse 10?', ['"I do not see you."', '"What have you done? Your brother\'s blood cries to me from the ground."', '"Go home."', '"Well done."'], 1, 'Verse 10. God sees what happens even when no one else does.', 'Verse 10.'),
     Q('What is the main lesson from Cain\'s story?', ['Anger is never a problem', 'We should deal with anger before it turns into something worse, and tell the truth', 'Lying is okay if you are scared', 'You cannot choose what you do'], 1, 'God told Cain he could rule over sin (verse 7). Cain chose not to. We can ask God for help, calm down, and tell the truth.'),
     T('Fill in Romans 3:23: "for all have sinned, and fall short of the ____ of God;"', ['glory'], 'Romans 3:23: "for all have sinned, and fall short of the glory of God." Say the whole verse from memory.')],
    vs('Romans 3:23', 'recall'), 'Cain did not take God\'s warning. Think of a time you got a warning and listened (or didn\'t). What happened? What will you do next time?', 'Genesis 4:8-10');

  // ---------------- WEEK 3: Noah (Mon-Fri) ----------------
  var w3 = {};
  w3.mon = bible(3, 'mon', 'A world gone wrong, and one man who walked with God', [{ book: G, ch: 6, from: 5, to: 9 }],
    ['Many years passed after Cain. People filled the earth, but their hearts had turned bad. Genesis says every thought of their hearts was "continually only evil." God was grieved.',
     'But one man stood out. "Noah found favor in Yahweh\'s eyes." He was righteous and blameless among the people of his time, and he "walked with God."',
     'Walking with God is a picture of daily friendship: listening, trusting, and obeying even when the people around you don\'t.'],
    [Q('How did God feel about the wickedness on the earth (verse 6)?', ['He did not notice', 'He was sorry and grieved in his heart', 'He was proud', 'He laughed'], 1, 'Verse 6: "Yahweh was sorry that he had made man on the earth, and it grieved him in his heart." God is not cold. Evil hurts him.', 'Verse 6.'),
     Q('What was special about Noah (verse 8)?', ['He was the strongest', 'He found favor in Yahweh\'s eyes', 'He was the richest', 'He was the oldest'], 1, 'Verse 8: "But Noah found favor in Yahweh\'s eyes." Favor means God was pleased with him.', 'Verse 8.'),
     T('Finish the phrase from verse 9: "Noah ______ with God." (one word)', ['walked'], 'Verse 9: "Noah walked with God." It means he lived close to God every day.'),
     Q('Why is it hard (and brave) to follow God when everyone else does not?', ['It is easy', 'Because you might be teased or feel alone, but God is with you', 'Because God is not there', 'It is not hard'], 1, 'Noah lived among people who ignored God. Doing right when others don\'t takes courage, and God is with those who walk with him.')],
    vs('Genesis 6:22', 'read'), 'Noah walked with God every day. What is one small thing you can do daily to "walk with God" (like praying or reading)?', 'Genesis 6:5-9');

  w3.tue = bible(3, 'tue', 'God gives Noah a plan', [{ book: G, ch: 6, from: 13, to: 17 }],
    ['God told Noah he was going to bring a flood. Then he gave Noah a very specific job: build a huge ship out of gopher wood, with rooms inside, sealed with pitch.',
     'The ship would be three hundred cubits long, fifty wide, and thirty high. That is about as long as a football field and a half. It needed a roof and a door in the side.',
     'Noah had never built a ship like that before. But God gave exact directions, so Noah only had to trust and follow them.'],
    [Q('What did God tell Noah to build (verse 14)?', ['A house', 'A ship of gopher wood', 'A tower', 'A wall'], 1, 'Verse 14: "Make a ship of gopher wood." (The Bible calls it a ship; many people say "ark.")', 'Verse 14.'),
     Q('What did Noah use to seal the ship inside and outside?', ['Mud', 'Pitch', 'Paint', 'Rope'], 1, 'Verse 14: "seal it inside and outside with pitch." Pitch is a sticky tar that keeps water out.', 'Verse 14.'),
     Q('How long was the ship?', ['30 cubits', '50 cubits', '300 cubits', '3,000 cubits'], 2, 'Verse 15: "three hundred cubits." A cubit is about the length from your elbow to your fingertips, so 300 cubits is about 450 feet.', 'Verse 15.'),
     Q('Why did Noah only need to trust God\'s plan?', ['God gave him exact directions', 'He already knew how to build', 'Others helped him', 'He guessed'], 0, 'God told him size, materials, rooms, roof, and door. When God gives directions, we can trust him even if we don\'t see the whole picture.')],
    vs('Genesis 6:22', 'blanks1'), 'Noah followed God\'s plan even though it was a big job. What is a big job or hard thing God might ask you to do? How can you be ready to say yes?', 'Genesis 6:13-17');

  w3.wed = bible(3, 'wed', 'A promise, and an obedient builder', [{ book: G, ch: 6, from: 18, to: 22 }],
    ['God made a promise to Noah: "I will establish my covenant with you." A covenant is a serious promise. God told Noah to bring his family and two of every kind of animal into the ship, and to take food for everyone.',
     'Then comes one of the most beautiful sentences in the story: "Thus Noah did. He did all that God commanded him."',
     'Noah didn\'t argue or delay. He did everything God asked, exactly. Obedience is how we show we trust God. (The story of the flood itself is in Genesis 7 and 8. Ask your parent to read it with you.)'],
    [Q('Who was going into the ship with Noah (verse 18)?', ['Only animals', 'His wife, his sons, and his sons\' wives', 'The whole town', 'Nobody'], 1, 'Verse 18: "you, your sons, your wife, and your sons\' wives with you." Eight people in all.', 'Verse 18.'),
     Q('What did God tell Noah to bring for food (verse 21)?', ['Nothing', 'Some of all the food that is eaten', 'Only fruit', 'Only fish'], 1, 'Verse 21: "Take with you some of all food that is eaten, and gather it to yourself." God planned for everyone to be fed.', 'Verse 21.'),
     T('Finish verse 22: "Thus Noah did. He did ____ that God commanded him." (one word)', ['all'], 'Verse 22: "He did all that God commanded him." All. Not just the easy parts.'),
     Q('What is a "covenant"?', ['A kind of boat', 'A serious promise', 'A type of animal', 'A storm'], 1, 'A covenant is a promise that is binding and serious. God keeps his promises.')],
    vs('Genesis 6:22', 'blanks2'), 'Noah did ALL that God said. Is there something you have been putting off that you know is right? What is one step you can take today?', 'Genesis 6:18-22');

  w3.thu = bible(3, 'thu', 'God\'s promise: no more flood', [{ book: G, ch: 9, from: 8, to: 13 }],
    ['After the flood, Noah and his family came out of the ship onto dry ground. God spoke to them and made a covenant. He promised that he would never again destroy all living things with a flood.',
     'God gave a sign so they could remember: a rainbow in the clouds. Every time we see one, we can think of God\'s promise.',
     'The rainbow doesn\'t just remind us. God said, "I will look at it, that I may remember." It is a sign that God keeps his word.'],
    [Q('What did God promise in verse 11?', ['It would never rain again', 'There will never again be a flood to destroy the earth', 'Noah would be king', 'There would be no more animals'], 1, 'Verse 11: "There will never again be a flood to destroy the earth." (Floods and rain still happen. The promise is that no flood will destroy the whole earth again.)', 'Verse 11.'),
     Q('What is the sign of God\'s covenant (verse 13)?', ['A star', 'A rainbow in the cloud', 'A mountain', 'A dove'], 1, 'Verse 13: "I set my rainbow in the cloud, and it will be a sign of a covenant between me and the earth."', 'Verse 13.'),
     Q('Who did God make this promise to (verses 9-10)?', ['Only Noah', 'Noah, his children, and every living creature', 'Only the animals', 'Only the people who built'], 1, 'Verses 9-10: with Noah, his offspring, and every living creature with them. It is a promise for all.'),
     Q('What does the rainbow teach us about God?', ['He forgets things', 'He keeps his promises', 'He is angry', 'He changes his mind about everything'], 1, 'A sign reminds us of a promise. God keeps his word, and he always has.')],
    vs('Genesis 6:22', 'letters'), 'Next time you see a rainbow, what will you remember about God? Write one sentence you can say to God when you see one.', 'Genesis 9:8-13');

  w3.fri = bible(3, 'fri', 'The rainbow promise (review)', [{ book: G, ch: 9, from: 14, to: 17 }],
    ['God said when clouds gather and the rainbow appears, he will remember his promise. It is "the everlasting covenant between God and every living creature."',
     'Let\'s put the week together. Noah walked with God. Noah trusted God\'s plan. Noah did all God said. And God kept every promise to Noah.',
     'Story shape: a problem (evil on earth), a faithful man, a plan, obedience, and a promise. Look for that shape in other Bible stories too.'],
    [Q('What does verse 16 call the covenant?', ['Short', 'Everlasting', 'Secret', 'Broken'], 1, 'Verse 16: "the everlasting covenant." Everlasting means it never ends.', 'Verse 16.'),
     Q('Put these in order: (1) God makes a promise, (2) Noah builds, (3) God warns Noah.', ['3, 2, 1', '1, 2, 3', '2, 3, 1', '3, 1, 2'], 0, 'God warned Noah (Genesis 6:13), Noah built the ship (6:22), and after the flood God made the rainbow promise (9:8-17).'),
     T('Fill in the memory verse (Genesis 6:22): "Thus Noah did. He did all that God ____ him." (one word)', ['commanded'], 'Genesis 6:22: "Thus Noah did. He did all that God commanded him." Say it from memory today.'),
     Q('Which word best describes Noah?', ['Careless', 'Faithful and obedient', 'Selfish', 'Fearful and quitting'], 1, 'The Bible calls him righteous, blameless, and a man who walked with God. He did all that God commanded.')],
    vs('Genesis 6:22', 'recall'), 'What is your favorite part of Noah\'s story this week, and what did it teach you about God?', 'Genesis 9:14-17');

  // ---------------- WEEK 4: Babel + pride (Mon-Fri) ----------------
  var w4 = {};
  w4.mon = bible(4, 'mon', 'A tower with a big plan', [{ book: G, ch: 11, from: 1, to: 4 }],
    ['Years after the flood, everyone on earth spoke the same language. They found a plain in the land of Shinar and decided to build a city with a tower that reached the sky.',
     'Look at their reason in verse 4: "let\'s make a name for ourselves." They wanted to be famous and strong without God.',
     'Building is not a bad thing. The trouble was the reason: they were proud and wanted to make themselves great instead of honoring God.'],
    [Q('What language did everyone speak in verse 1?', ['Many languages', 'One language', 'Hebrew only', 'No language'], 1, 'Verse 1: "The whole earth was of one language and of one speech."', 'Verse 1.'),
     Q('What did they use to build, according to verse 3?', ['Stone and wood', 'Brick and tar', 'Gold', 'Metal'], 1, 'Verse 3: "They had brick for stone, and they used tar for mortar." They made bricks and baked them.', 'Verse 3.'),
     Q('What was their reason for building in verse 4?', ['To worship God', 'To make a name for themselves', 'To help the poor', 'For shelter from rain'], 1, 'Verse 4: "let\'s make a name for ourselves." They wanted to be great for their own glory.', 'Verse 4.'),
     Q('Why can a good thing (like building) become wrong?', ['It never can', 'When we do it for pride instead of honoring God', 'When it is difficult', 'When it is large'], 1, 'The action was fine. The heart behind it was proud. God cares about WHY we do things.')],
    vs('Proverbs 16:18', 'read'), 'The people wanted to make a name for themselves. What is something you do that you could do to honor God instead of showing off?', 'Genesis 11:1-4');

  w4.tue = bible(4, 'tue', 'God comes down', [{ book: G, ch: 11, from: 5, to: 9 }],
    ['God came down to see the city and the tower. The people built it high, but it was still far below God. God saw their plans, and he confused their language so they could not understand each other.',
     'They had to stop building. God scattered them over the whole earth. The place was named Babel, because there God confused the language of all the earth.',
     'Babel sounds like the Hebrew word for "confused." The tower that was meant to make people great ended up showing that God is above all.'],
    [Q('Why did God have to "come down" to see the tower (verse 5)?', ['The tower was very small compared to God; it shows how small human plans are next to him', 'He could not see it from heaven', 'He was lost', 'It was too far'], 0, 'The writer says it with a bit of humor: the great tower was so small to God that he "came down to see" it. Human pride looks small next to God.'),
     Q('What did God do to the people\'s language (verse 7)?', ['Made it better', 'Confused it so they could not understand each other', 'Took it away', 'Gave them a song'], 1, 'Verse 7: "there confuse their language, that they may not understand one another\'s speech."', 'Verse 7.'),
     Q('Where were the people scattered (verse 8)?', ['Into the sea', 'Over the surface of all the earth', 'Back to their homes', 'Into one city'], 1, 'Verse 8: "scattered them abroad from there on the surface of all the earth."', 'Verse 8.'),
     T('What was the city called? (one word, from verse 9)', ['babel'], 'Verse 9: "Therefore its name was called Babel."')],
    vs('Proverbs 16:18', 'blanks1'), 'God humbles pride. Is there a time you felt proud and it led to trouble? How could you act humbly next time?', 'Genesis 11:5-9');

  w4.wed = bible(4, 'wed', 'Pride goes before a fall', [{ ref: 'Proverbs 16:18' }],
    ['Proverbs is a book of wisdom. It packs big truths into short sentences. Proverbs 16:18 says, "Pride goes before destruction, and a haughty spirit before a fall."',
     '"Pride" means thinking you are better than others or don\'t need help, even God\'s. "Haughty" means looking down on others.',
     'Let\'s connect it to Babel. The people were proud. Pride came first, and then came the fall: their plan failed and they were scattered. Humble people ask for help and give God the credit.'],
    [Q('What comes right after "pride" in the proverb?', ['Success', 'Destruction', 'Joy', 'Friendship'], 1, 'Proverbs 16:18: "Pride goes before destruction." Pride leads us toward trouble.', 'Read the verse.'),
     Q('Which is an example of being humble?', ['Bragging about your score', 'Saying "thanks" and sharing credit with the people who helped you', 'Looking down on a friend who got a lower score', 'Never asking for help'], 1, 'Humility gives credit to others and to God, and it is willing to learn.'),
     Q('How does Babel show the proverb?', ['The people were humble and succeeded', 'The people were proud, and their plan fell apart', 'God helped them build', 'They did not build anything'], 1, 'They wanted a name for themselves (pride), and their work was stopped (a fall).'),
     T('Fill in the memory verse: "Pride goes before ________, and a haughty spirit before a fall."', ['destruction'], 'Proverbs 16:18: "Pride goes before destruction, and a haughty spirit before a fall."')],
    vs('Proverbs 16:18', 'blanks2'), 'Write one way you can be humble this week at home. (For example, say "thank you," help without being asked, or admit a mistake.)', 'Proverbs 16:18');

  w4.thu = bible(4, 'thu', 'Month in review: four stories, one God', [{ book: G, ch: 1, from: 27, to: 28 }, { ref: 'Romans 3:23' }],
    ['This month we read four stories. In Creation, God made everything by his word and made people in his image. In the Fall, people doubted God and chose their own way. In Cain and Abel, anger led to something terrible. In Noah, one man trusted God and God kept his promise. In Babel, pride led to a fall.',
     'Notice the pattern: God is good and powerful. People are made in his image but sin. God still reaches out to us with love and promises.',
     'Today, review the verses you have learned: Genesis 1:1, Romans 3:23, Genesis 6:22, and Proverbs 16:18.'],
    [Q('Which verse says "In the beginning, God created the heavens and the earth"?', ['Genesis 1:1', 'Romans 3:23', 'Genesis 6:22', 'Proverbs 16:18'], 0, 'That is Genesis 1:1, the very first verse of the Bible. It tells us God made everything and was there before anything else.'),
     Q('Which verse says "for all have sinned, and fall short of the glory of God"?', ['Genesis 1:1', 'Romans 3:23', 'Genesis 6:22', 'Proverbs 16:18'], 1, 'That is Romans 3:23. It teaches that every person has sinned, which is why everyone needs God\'s forgiveness.'),
     Q('Which story shows "He did all that God commanded him"?', ['Creation', 'Cain and Abel', 'Noah', 'Babel'], 2, 'That is the story of Noah, Genesis 6:22. Noah trusted God and did everything God told him to do.'),
     Q('Which story teaches that pride leads to a fall?', ['Babel', 'Creation', 'Noah\'s rainbow', 'The garden'], 0, 'The story of Babel and Proverbs 16:18 go together: the people were proud, and their tower plan fell apart.')],
    vs('Genesis 1:27', 'read'), 'Which of the four stories was your favorite? What does it teach you about God? Write 2 sentences.', 'Genesis 1:27-28');

  w4.fri = bible(4, 'fri', 'Memory verse showdown', [{ ref: 'Proverbs 16:18' }],
    ['Today is verse review day. You will practice all four verses with cover-and-say. Read each verse, cover it, and say it from memory.',
     'Then try typing each one from memory. Don\'t worry about perfect punctuation. The goal is to know them by heart.',
     'Hiding God\'s word in your heart helps you remember what is true when you are tempted to doubt, get angry, or be proud.'],
    [T('Type Genesis 1:1 from memory (just the first four words are enough): "In the beginning, God ..." ', ['in the beginning god created the heavens and the earth', 'in the beginning, god created the heavens and the earth.'], 'Genesis 1:1: "In the beginning, God created the heavens and the earth."'),
     T('Type Romans 3:23 (the first half): "for all have sinned, and ..."', ['for all have sinned and fall short of the glory of god', 'for all have sinned, and fall short of the glory of god;'], 'Romans 3:23: "for all have sinned, and fall short of the glory of God;"'),
     T('Type Proverbs 16:18 from memory.', ['pride goes before destruction and a haughty spirit before a fall', 'pride goes before destruction, and a haughty spirit before a fall.'], 'Proverbs 16:18: "Pride goes before destruction, and a haughty spirit before a fall."')],
    vs('Proverbs 16:18', 'recall'), 'Choose one verse from this month. Write it and tell one way it can help you this week.', 'Proverbs 16:18');

  var api = { w1: w1, w2: w2, w3: w3, w4: w4 };
  [[1, w1], [2, w2], [3, w3], [4, w4]].forEach(function (p) { for (var r in p[1]) { var wk = C.weeks[p[0]] = C.weeks[p[0]] || {}; wk[r] = (wk[r] || []).concat([p[1][r]]); } });
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.BibleContent = api;
})(typeof window !== 'undefined' ? window : globalThis);
