/* Bible devotion bank, weeks 5-37: daily readings (NIV in her own Bible), original kid-friendly retellings, questions, reflections. No scripture is quoted. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  // ============================== WEEK 5 ==============================
  C.unit('bible', 5, {
    theme: 'God calls Abram',
    verse: { ref: 'Genesis 12:2', why: "God promised to bless Abram so that Abram could become a blessing to others, and God still blesses his people so they can bless the people around them." },
    days: [
      { title: 'Leaving home', refs: [{ book: 'Genesis', ch: 12, from: 1, to: 9 }],
        retell: ["God told Abram to leave his country and his relatives and go to a land God would show him. God promised to make Abram's family a great nation and to bless every family on earth through him.", "Abram was 75 years old, but he obeyed. He packed up with his wife Sarai and his nephew Lot, traveled to Canaan, and built altars to worship the LORD along the way."],
        questions: [
          Q("What did God tell Abram to do at the start of chapter 12?", ["Leave his country and go to a land God would show him", "Build a big city", "Stay home and wait", "Build a ship"], 0, "In verse 1 God told Abram to leave his country, his people, and his father's household. Abram did not even know exactly where he was going. He had to trust God one step at a time.", "Look at verse 1."),
          Q("How old was Abram when he set out from Harran?", ["17", "40", "75", "100"], 2, "Verse 4 says Abram was 75 years old. God's plans are not only for young people. Abram started the biggest adventure of his life at 75!", "Verse 4 tells his age."),
          Q("What did Abram do when he arrived in the land and God appeared to him?", ["He built a tower", "He went back home", "He bought a house", "He built an altar to the LORD"], 3, "Verses 7 and 8 say Abram built altars and called on the name of the LORD. An altar was a place to worship. Abram made worship a priority in his new home.", "Look at verses 7 and 8.")
        ],
        reflect: "Abram obeyed God even though he did not know the whole plan. When is it hard for you to trust God without knowing what comes next?" },
      { title: 'Afraid in Egypt', refs: [{ book: 'Genesis', ch: 12, from: 10, to: 20 }],
        retell: ["A famine came, so Abram went down to Egypt to find food. He was afraid the Egyptians would hurt him because Sarai was so beautiful, so he asked her to say she was only his sister.", "Pharaoh took Sarai into his palace, but the LORD sent serious diseases on Pharaoh's household. Pharaoh found out the truth, scolded Abram, and sent them away. God protected Sarai even when Abram made a fearful choice."],
        questions: [
          Q("Why did Abram go down to Egypt?", ["To visit Pharaoh", "Because there was a famine in the land", "To buy camels", "Because God told him to build there"], 1, "Verse 10 says there was a severe famine. A famine is a time when there is not enough food. Abram went to Egypt to survive.", "Verse 10."),
          Q("What did Abram ask Sarai to tell the Egyptians?", ["That she was a queen", "That she was from Egypt", "That she was his sister", "That she was sick"], 2, "In verses 11-13 Abram asked Sarai to say she was his sister because he was afraid for his own life. It was a way of hiding the whole truth.", "Verse 13."),
          Q("How did Pharaoh learn something was wrong?", ["The LORD sent serious diseases on Pharaoh and his household", "Sarai told him at dinner", "Lot told him", "A dream about cows"], 0, "Verse 17 says the LORD inflicted serious diseases on Pharaoh's household because of Sarai. God stepped in to protect her, even though Abram's fear caused the problem.", "Verse 17.")
        ],
        reflect: "Abram told a half-truth because he was afraid. Why is it better to trust God and tell the whole truth, even when you feel scared?" },
      { title: 'Too much stuff, too little room', refs: [{ book: 'Genesis', ch: 13, from: 1, to: 7 }],
        retell: ["Abram went back to the place between Bethel and Ai where he had first built an altar, and he worshiped the LORD again. By now Abram was very rich in livestock, silver, and gold.", "Lot also had flocks, herds, and tents. The land could not feed all their animals, so Abram's herders and Lot's herders started to quarrel."],
        questions: [
          Q("Which of these did Abram have a lot of, according to verse 2?", ["Ships", "Horses and chariots", "Books", "Livestock, silver, and gold"], 3, "Verse 2 says Abram had become very wealthy in livestock and in silver and gold. God had blessed him a great deal since he left home.", "Verse 2."),
          Q("What did Abram do when he returned to the place of his first altar?", ["He built a palace", "He called on the name of the LORD", "He sold his animals", "He took a nap"], 1, "Verse 4 says Abram called on the name of the LORD there. Even when he was rich and busy, he went back to worship.", "Verse 4."),
          Q("Why did the herders start quarreling?", ["The land could not support both Abram's and Lot's flocks", "They wanted the same tent", "Lot stole a camel", "The herders were from Egypt"], 0, "Verse 6 says the land could not support them while they stayed together, because they had so many possessions. Too many animals in one place meant fights over grass and water.", "Verses 6-7.")
        ],
        reflect: "Abram and Lot had so many blessings that it caused arguments. Have you ever argued with someone over things or space? What helped?" },
      { title: 'You choose first', refs: [{ book: 'Genesis', ch: 13, from: 8, to: 13 }],
        retell: ["Abram told Lot they should not fight, because they were family. He let Lot choose first: if Lot went one way, Abram would go the other.", "Lot looked at the green, well-watered plain of the Jordan and chose it for himself. He moved his tents near the city of Sodom, even though the people there were very wicked."],
        questions: [
          Q("What reason did Abram give for not quarreling?", ["They were too tired", "Pharaoh was watching", "They were close relatives", "The sheep were scared"], 2, "In verse 8 Abram said there should be no quarreling because they were close relatives. Abram cared more about peace in the family than about getting the best land.", "Verse 8."),
          Q("Who got to choose the land first?", ["Abram", "Lot", "Sarai", "The herders"], 1, "In verse 9 Abram offered Lot the first choice. Abram was the older man and could have chosen first, but he was generous and let Lot pick.", "Verse 9."),
          Q("What was the problem with where Lot pitched his tents?", ["It was too cold", "It had no water", "It was in Egypt", "It was near Sodom, where the people were very wicked"], 3, "Verses 12-13 say Lot pitched his tents near Sodom, and the men of Sodom were wicked and sinning greatly against the LORD. Lot looked at what seemed best for himself, not at what was best for his family's heart.", "Verses 12-13.")
        ],
        reflect: "Abram let Lot choose first. What is one way you can let someone else go first this week?" },
      { title: 'Look all around', refs: [{ book: 'Genesis', ch: 13, from: 14, to: 18 }],
        retell: ["After Lot left, the LORD told Abram to look north, south, east, and west. God promised to give all that land to Abram and his children forever, and to make his family as hard to count as the dust of the earth.", "God told Abram to walk through the land. Abram moved his tents to the great trees of Mamre at Hebron, and there he built another altar to the LORD."],
        questions: [
          Q("What did God compare Abram's future family to in verse 16?", ["The dust of the earth", "The stars", "The fish in the sea", "The trees of a forest"], 0, "Verse 16 says Abram's offspring would be like the dust of the earth, so many that no one could count them. Later God will also compare them to the stars (Genesis 15).", "Verse 16."),
          Q("How long did God say the land would belong to Abram's family?", ["Ten years", "Until Lot came back", "Forever", "Until the famine ended"], 2, "Verse 15 says God would give the land to Abram and his offspring forever. God's promises are big and long-lasting.", "Verse 15."),
          Q("Where did Abram go to live, and what did he build there?", ["In Sodom; a house", "In Egypt; a tower", "In Harran; a barn", "Near the great trees of Mamre at Hebron; an altar"], 3, "Verse 18 says Abram went to the great trees of Mamre at Hebron and built an altar to the LORD. Again and again, Abram's first response to God's promises was worship.", "Verse 18.")
        ],
        reflect: "Abram gave Lot the best-looking land, but God still gave Abram a huge promise. How does it feel to know God sees when you are generous?" }
    ]
  });

  // ============================== WEEK 6 ==============================
  C.unit('bible', 6, {
    theme: "God's covenant promise; Isaac is born",
    verse: { ref: 'Genesis 18:14', why: "This verse reminds us that nothing is too hard for the LORD, even a promise that looks impossible to us." },
    days: [
      { title: 'Count the stars', refs: [{ book: 'Genesis', ch: 15, from: 1, to: 6 }],
        retell: ["God spoke to Abram in a vision and told him not to be afraid, because God was his shield and his great reward. Abram said he still had no child, so a servant named Eliezer would get everything he owned.", "God took Abram outside and told him to count the stars if he could. Abram's family would be that many! Abram believed the LORD, and God counted his faith as righteousness."],
        questions: [
          Q("What did God call himself when he told Abram not to be afraid?", ["Abram's king", "Abram's shield", "Abram's sword", "Abram's tent"], 1, "In verse 1 God said he was Abram's shield and very great reward. A shield protects you. God was promising to protect Abram.", "Verse 1."),
          Q("What was Abram worried about in verses 2-3?", ["He had no money", "His tent was too small", "He had no child, so a servant would inherit his things", "Lot was angry with him"], 2, "Abram said he remained childless and that Eliezer of Damascus, a servant in his house, would be his heir. He wondered how God's promise could come true without a son.", "Verses 2-3."),
          Q("What did God tell Abram to look at?", ["The stars in the sky", "The sand on the beach", "The sheep in the field", "The mountains"], 0, "In verse 5 God took Abram outside and told him to count the stars. Abram's offspring would be as many as the stars. Then verse 6 says Abram believed the LORD.", "Verse 5.")
        ],
        reflect: "Abram believed God even before he saw the promise come true. What is one promise of God you can choose to believe today?" },
      { title: 'New names, big promises', refs: [{ book: 'Genesis', ch: 17, from: 1, to: 8 }, { book: 'Genesis', ch: 17, from: 15, to: 19 }],
        retell: ["When Abram was 99, God appeared to him again and made a covenant, a serious promise, with him. God changed his name to Abraham, which means father of many, because many nations would come from him.", "God also changed Sarai's name to Sarah and said she would have a son. Abraham laughed because he was nearly 100 and Sarah was 90, but God said the son would come and his name would be Isaac."],
        questions: [
          Q("How old was Abram when God appeared to him in chapter 17?", ["75", "86", "120", "99"], 3, "Verse 1 says Abram was 99 years old. It had been many years since God first called him at age 75. God's timing is often longer than we expect.", "Verse 1."),
          Q("What new name did God give Abram?", ["Israel", "Abraham", "Isaac", "Adam"], 1, "Verse 5 says his name would be Abraham, because God had made him a father of many nations. Israel is a name God later gives to Jacob.", "Verse 5."),
          Q("What did God say to name the son Sarah would have?", ["Isaac", "Ishmael", "Jacob", "Joseph"], 0, "Verse 19 says Sarah would bear a son and they should call him Isaac. Ishmael was Abraham's son with Hagar, born earlier. Isaac was the son of the promise.", "Verse 19.")
        ],
        reflect: "God gave Abraham and Sarah new names to match his promise. If God gave you a name that described what he is doing in your life, what might it be?" },
      { title: 'Visitors at the tent', refs: [{ book: 'Genesis', ch: 18, from: 1, to: 15 }],
        retell: ["On a hot day, three visitors came to Abraham's tent. Abraham hurried to welcome them, brought water to wash their feet, asked Sarah to bake bread, and chose a tender calf to be cooked for them.", "The LORD said that about this time next year Sarah would have a son. Sarah was listening inside the tent and laughed to herself, and the LORD asked whether anything is too hard for him."],
        questions: [
          Q("How did Abraham treat the three visitors?", ["He ignored them", "He asked them to leave", "He hurried to welcome them and served them a meal", "He sent a servant and stayed inside"], 2, "Verses 2-8 show Abraham running to meet them, bowing, offering water, and having bread and a calf prepared. That is called hospitality: welcoming guests with kindness.", "Verses 2-8."),
          Q("Where was Sarah when she heard the promise?", ["At the well", "At the entrance of the tent behind him", "In the field", "In Egypt"], 1, "Verse 10 says Sarah was listening at the entrance to the tent, which was behind him. She heard every word.", "Verse 10."),
          Q("What did Sarah do when she heard she would have a son?", ["She danced", "She ran away", "She cried", "She laughed to herself"], 3, "Verse 12 says Sarah laughed to herself because she and Abraham were very old. Then the LORD asked why she laughed and whether anything is too hard for the LORD (verse 14).", "Verse 12.")
        ],
        reflect: "Sarah laughed because God's promise seemed impossible. What is something that seems too hard to you that you could pray about?" },
      { title: 'Laughter arrives', refs: [{ book: 'Genesis', ch: 21, from: 1, to: 7 }],
        retell: ["The LORD did exactly what he had promised. Sarah had a son at the very time God said, and Abraham named him Isaac.", "Abraham was 100 years old. Sarah said God had brought her laughter, and everyone who heard the news would laugh with her. This time it was happy laughter, not doubting laughter."],
        questions: [
          Q("What does verse 1 tell us about God?", ["He did for Sarah what he had promised", "He forgot Sarah", "He changed his mind", "He was too late"], 0, "Verse 1 says the LORD was gracious to Sarah and did what he had promised. God keeps his word, even when it takes many years.", "Verse 1."),
          Q("How old was Abraham when Isaac was born?", ["75", "90", "100", "99"], 2, "Verse 5 says Abraham was 100 years old. Sarah was 90 (Genesis 17:17). Only God could make this happen.", "Verse 5."),
          Q("What did Sarah say God had brought her?", ["Gold", "A new tent", "Rain", "Laughter"], 3, "In verse 6 Sarah said God had brought her laughter, and everyone would laugh with her. The name Isaac even sounds like the Hebrew word for laughing.", "Verse 6.")
        ],
        reflect: "God kept a promise that took 25 years. How can remembering this help you when you have to wait for something?" },
      { title: 'God hears the boy', refs: [{ book: 'Genesis', ch: 21, from: 8, to: 21 }],
        retell: ["Abraham had an older son, Ishmael, whose mother was Hagar. After trouble in the family, Abraham sadly sent Hagar and Ishmael away with food and a skin of water, and God promised that Ishmael would also become a nation.", "In the desert the water ran out, and Hagar sat down and sobbed. God heard the boy crying, an angel spoke to Hagar, and God opened her eyes to see a well. God was with Ishmael as he grew up."],
        questions: [
          Q("How did Abraham feel about sending Ishmael away?", ["Happy", "Very distressed", "He did not care", "Angry at God"], 1, "Verse 11 says the matter distressed Abraham greatly because it concerned his son. Abraham loved Ishmael. God comforted him with a promise in verses 12-13.", "Verse 11."),
          Q("What did God hear in the desert?", ["A lion roaring", "Thunder", "The boy crying", "Abraham calling"], 2, "Verse 17 says God heard the boy crying. God sees and hears people who are hurting, even far out in the desert.", "Verse 17."),
          Q("How did God help Hagar and Ishmael?", ["He opened Hagar's eyes and she saw a well of water", "He sent a camel", "He made it rain bread", "He sent them back to Abraham"], 0, "Verse 19 says God opened her eyes and she saw a well. She filled the skin with water and gave the boy a drink. God provided exactly what they needed.", "Verse 19.")
        ],
        reflect: "God heard Ishmael when he cried. How does it help you to know that God hears you when you are sad?" }
    ]
  });

  // ============================== WEEK 7 ==============================
  C.unit('bible', 7, {
    theme: "Abraham's test; a wife for Isaac",
    verse: { ref: 'Proverbs 3:5', why: "Abraham and his servant both trusted the LORD instead of their own understanding, and this verse teaches us to do the same." },
    days: [
      { title: 'The hardest test', refs: [{ book: 'Genesis', ch: 22, from: 1, to: 8 }],
        retell: ["God tested Abraham by asking him to take Isaac, the son he loved, to a mountain in Moriah and offer him as a sacrifice. Early the next morning Abraham obeyed, and on the third day of the trip he saw the place in the distance.", "Isaac carried the wood. He asked his father where the lamb for the offering was, and Abraham answered that God himself would provide the lamb."],
        questions: [
          Q("How quickly did Abraham obey?", ["He waited a year", "He argued for many days", "He never went", "He got up early the next morning"], 3, "Verse 3 says early the next morning Abraham got up and saddled his donkey. He did not delay, even though this was the hardest thing God had ever asked.", "Verse 3."),
          Q("What did Isaac carry up the mountain?", ["The knife", "The wood", "The fire", "A lamb"], 1, "Verse 6 says Abraham put the wood on his son Isaac, and Abraham carried the fire and the knife.", "Verse 6."),
          Q("What did Abraham answer when Isaac asked about the lamb?", ["God himself will provide the lamb", "We forgot it", "A servant is bringing it", "We do not need one"], 0, "In verse 8 Abraham said God himself would provide the lamb. Abraham trusted that God would keep his promise about Isaac somehow.", "Verse 8.")
        ],
        reflect: "Abraham trusted God with the most precious thing he had. What is something precious to you that you can trust God with?" },
      { title: 'The LORD will provide', refs: [{ book: 'Genesis', ch: 22, from: 9, to: 19 }],
        retell: ["At the top of the mountain, just as Abraham was about to offer Isaac, the angel of the LORD called out and told him not to harm the boy. God now knew Abraham truly feared him.", "Abraham looked up and saw a ram caught by its horns in a bush, and he offered it instead of his son. He named the place The LORD Will Provide, and God promised again to bless all nations through Abraham's family. Many Christians see this as a picture of how God later provided Jesus as the Lamb who takes our place."],
        questions: [
          Q("Who stopped Abraham?", ["Isaac", "The servants", "The angel of the LORD", "Sarah"], 2, "Verse 11 says the angel of the LORD called to him from heaven. God never wanted Isaac harmed. The test showed that Abraham trusted God completely.", "Verse 11."),
          Q("What did Abraham sacrifice instead of Isaac?", ["A lamb from home", "A ram caught in a thicket", "A calf", "A dove"], 1, "Verse 13 says a ram was caught by its horns in a thicket. A thicket is a tangle of bushes. God provided the sacrifice.", "Verse 13."),
          Q("What did Abraham name the place?", ["Bethel", "Mamre", "Beersheba", "The LORD Will Provide"], 3, "Verse 14 says Abraham called the place The LORD Will Provide. Beersheba is where Abraham went home afterward (verse 19).", "Verse 14.")
        ],
        reflect: "God provided a ram right when Abraham needed it. Write about a time God provided something you needed." },
      { title: 'A prayer at the well', refs: [{ book: 'Genesis', ch: 24, from: 1, to: 14 }],
        retell: ["Abraham was very old, and he wanted a good wife for Isaac. He sent his chief servant back to his relatives' land and promised that the LORD would send his angel ahead of him.", "The servant took ten camels and traveled to the town of Nahor. At the well in the evening he prayed for a sign: the right young woman would offer water to him and to his camels too."],
        questions: [
          Q("Where did Abraham send his servant to find a wife for Isaac?", ["To Abraham's own country and relatives", "To Egypt", "To the Canaanites nearby", "To Sodom"], 0, "Verse 4 says Abraham wanted the servant to go to his own country and his own relatives, not to choose from the Canaanites who lived around them.", "Verses 3-4."),
          Q("How many camels did the servant take?", ["Two", "Five", "Ten", "Twelve"], 2, "Verse 10 says the servant took ten of his master's camels, loaded with good things. That was a sign of how rich and serious Abraham was.", "Verse 10."),
          Q("What sign did the servant ask God for?", ["A rainbow", "A star in the sky", "A young woman who would offer water to him and his camels", "A dream at night"], 2, "In verses 12-14 the servant prayed that the woman who offered water for him and also for his camels would be the one God chose. Watering ten thirsty camels was a lot of work, so it would show a kind and hardworking heart.", "Verse 14.")
        ],
        reflect: "The servant prayed before he started looking. What is a decision you can pray about before you make it?" },
      { title: 'Rebekah', refs: [{ book: 'Genesis', ch: 24, from: 15, to: 27 }],
        retell: ["Before the servant even finished praying, Rebekah came to the well with a jar on her shoulder. When he asked for a drink, she gave him water and offered to water all his camels too.", "The servant learned she was from Abraham's own family. He bowed down and praised the LORD for his kindness and faithfulness in leading him to the right place."],
        questions: [
          Q("When did Rebekah come out to the well?", ["The next week", "After he went home", "At midnight", "Before the servant had finished praying"], 3, "Verse 15 says Rebekah came out before he had finished praying. God was already answering while the servant was still asking.", "Verse 15."),
          Q("What did Rebekah offer to do besides giving the servant a drink?", ["Cook him dinner", "Water his camels", "Carry his bags", "Sing a song"], 1, "Verse 19 says she offered to draw water for his camels until they were done drinking. That was exactly the sign he had prayed for.", "Verse 19."),
          Q("What did the servant do when he learned who she was?", ["He ran home", "He bought the well", "He bowed down and worshiped the LORD", "He argued with her"], 2, "Verses 26-27 say he bowed down and worshiped, praising God for his kindness and faithfulness. He gave God the credit right away.", "Verses 26-27.")
        ],
        reflect: "Rebekah did more than she was asked. Where could you do more than you are asked this week?" },
      { title: 'Rebekah says yes', refs: [{ book: 'Genesis', ch: 24, from: 50, to: 67 }],
        retell: ["Rebekah's family agreed that this was from the LORD. When they asked Rebekah if she would go with the servant, she said she would.", "In the evening Isaac was out in the field and saw the camels coming. The servant told Isaac everything, and Rebekah became Isaac's wife. Isaac loved her, and she comforted him after his mother Sarah's death."],
        questions: [
          Q("What did Rebekah's family say about the servant's story?", ["It was from the LORD", "It was a trick", "It was too far away", "They needed a year to decide"], 0, "In verse 50 Laban and Bethuel said this was from the LORD. They could see that God had arranged it.", "Verse 50."),
          Q("What did Rebekah say when asked if she would go?", ["She would think about it", "She would not go", "She wanted her brother to decide", "She would go"], 3, "Verse 58 says they asked her and she answered that she would go. Like Abraham long before, she was willing to leave home and follow God's plan.", "Verse 58."),
          Q("What was Isaac doing when he first saw the camels?", ["He was sleeping", "He was out in the field in the evening", "He was at the well", "He was building an altar"], 1, "Verse 63 says Isaac went out to the field one evening to meditate, and he looked up and saw camels approaching. Meditate means to think quietly, often about God.", "Verse 63.")
        ],
        reflect: "Rebekah said yes to God's plan. What is one thing you think God might be asking you to say yes to?" }
    ]
  });

  // ============================== WEEK 8 ==============================
  C.unit('bible', 8, {
    theme: 'Jacob and Esau',
    verse: { ref: 'Genesis 28:15', why: "God promised Jacob that he would be with him and watch over him wherever he went, and that promise of God's presence is for us too." },
    days: [
      { title: 'Twins', refs: [{ book: 'Genesis', ch: 25, from: 19, to: 28 }],
        retell: ["Isaac married Rebekah, but for years they had no children. Isaac prayed, and God answered with twins! God told Rebekah the older would serve the younger.", "The first baby was red and hairy, so they named him Esau. The second came out holding Esau's heel and was named Jacob. Esau grew up to be a hunter, Jacob liked to stay among the tents, and sadly each parent had a favorite."],
        questions: [
          Q("What did Isaac do when Rebekah had no children?", ["He prayed to the LORD for her", "He gave up", "He moved away", "He asked Pharaoh for help"], 0, "Verse 21 says Isaac prayed to the LORD for his wife, and the LORD answered his prayer. Isaac turned to God with his problem.", "Verse 21."),
          Q("What was Jacob holding when he was born?", ["A blanket", "His mother's hand", "Esau's heel", "A stone"], 2, "Verse 26 says Jacob came out with his hand grasping Esau's heel. Even as babies, it looked like a struggle between the brothers.", "Verse 26."),
          Q("Which parent loved Jacob more?", ["Isaac", "Rebekah", "Abraham", "Neither"], 1, "Verse 28 says Isaac loved Esau, but Rebekah loved Jacob. Having favorites caused a lot of hurt in this family later.", "Verse 28.")
        ],
        reflect: "In Isaac's family each parent had a favorite, and it caused trouble. How can you show love to everyone in your family equally?" },
      { title: 'A bowl of stew', refs: [{ book: 'Genesis', ch: 25, from: 29, to: 34 }],
        retell: ["One day Esau came in from the open country starving and asked Jacob for some of the red stew he was cooking. Jacob said Esau first had to sell him his birthright, the special share and family leadership that belonged to the oldest son.", "Esau said he was about to die of hunger, so what good was a birthright? He swore an oath, gave it away for bread and lentil stew, ate, and left. The Bible says Esau treated his birthright as worthless."],
        questions: [
          Q("What was Jacob cooking?", ["Fish", "Bread only", "Roast lamb", "Stew"], 3, "Verse 29 says Jacob was cooking some stew. Verse 34 tells us it was lentil stew. Lentils are small beans.", "Verse 29."),
          Q("What did Jacob ask for in return for the food?", ["Esau's birthright", "Esau's bow", "Esau's camels", "Nothing"], 0, "Verse 31 says Jacob asked Esau to sell him his birthright. A birthright was the oldest son's special inheritance and place as leader of the family.", "Verse 31."),
          Q("What does verse 34 say about Esau?", ["He was wise", "He was sorry right away", "He despised his birthright", "He shared the stew"], 2, "Verse 34 says Esau despised his birthright. To despise something means to treat it as if it is worth nothing. He traded something precious for one meal.", "Verse 34.")
        ],
        reflect: "Esau traded something important for something he wanted right now. What is something important that you would never want to trade away?" },
      { title: 'A sneaky plan', refs: [{ book: 'Genesis', ch: 27, from: 1, to: 17 }],
        retell: ["Isaac was old and nearly blind. He told Esau to hunt wild game and cook his favorite food so Isaac could give him his blessing.", "Rebekah overheard and made a plan for Jacob to get the blessing instead. She cooked two young goats, dressed Jacob in Esau's best clothes, and covered his smooth hands and neck with goatskins so he would feel hairy like his brother."],
        questions: [
          Q("Why could Isaac not tell his sons apart by looking?", ["It was dark", "They were wearing masks", "He was asleep", "His eyes were so weak he could not see"], 3, "Verse 1 says Isaac was old and his eyes were so weak that he could no longer see. Rebekah's plan depended on that.", "Verse 1."),
          Q("What was Jacob worried about in verse 11?", ["The food would burn", "Esau was hairy and he was smooth, so his father might touch him and know", "He did not know the way", "His mother would be angry"], 1, "In verses 11-12 Jacob said Esau was a hairy man and he had smooth skin. If his father touched him, Jacob would be caught. Notice he worried about getting caught, not about whether it was wrong.", "Verses 11-12."),
          Q("What did Rebekah put on Jacob's hands and neck?", ["Mud", "Gold bracelets", "Goatskins", "Bandages"], 2, "Verse 16 says she covered his hands and the smooth part of his neck with goatskins so he would feel hairy like Esau.", "Verse 16.")
        ],
        reflect: "Jacob worried about getting caught more than about doing wrong. What is the difference between those two kinds of worry?" },
      { title: 'The stolen blessing', refs: [{ book: 'Genesis', ch: 27, from: 18, to: 35 }],
        retell: ["Jacob went to his father and pretended to be Esau. Isaac thought the voice sounded like Jacob, but the hands felt like Esau's, and after he smelled Esau's clothes he gave Jacob the blessing.", "Right after Jacob left, Esau came in with his food. Isaac trembled when he understood what had happened, and Esau cried out bitterly. Jacob had taken the blessing by deceiving his father."],
        questions: [
          Q("Who did Jacob say he was?", ["Esau", "Jacob", "A servant", "Laban"], 0, "In verse 19 Jacob told his father he was Esau, his firstborn. It was a direct lie.", "Verse 19."),
          Q("What made Isaac suspicious?", ["The food tasted wrong", "Jacob was too tall", "Jacob came too late", "The voice sounded like Jacob's"], 3, "Verse 22 says Isaac noticed the voice was the voice of Jacob, but the hands were the hands of Esau. He was confused but went ahead.", "Verse 22."),
          Q("How did Isaac react when Esau came in?", ["He laughed", "He trembled violently", "He went to sleep", "He blessed Esau the same way"], 1, "Verse 33 says Isaac trembled violently. He realized he had been tricked. Lies hurt everyone in a family.", "Verse 33.")
        ],
        reflect: "Jacob's lie hurt his father and his brother. Why do you think lying hurts relationships so much?" },
      { title: 'A stairway to heaven', refs: [{ book: 'Genesis', ch: 27, from: 41, to: 45 }, { book: 'Genesis', ch: 28, from: 10, to: 22 }],
        retell: ["Esau was so angry that Jacob had to run away to his uncle Laban in Harran. One night on the trip, Jacob slept with a stone under his head and dreamed of a stairway reaching to heaven with angels going up and down.", "The LORD stood above it and promised to give Jacob the land, to bless the world through his family, and to be with him wherever he went. Jacob woke up amazed that God was in that place, and he named it Bethel, which means house of God."],
        questions: [
          Q("Why did Jacob have to leave home?", ["Esau was planning to kill him", "He wanted an adventure", "There was a famine", "Isaac sent him to buy grain"], 0, "Genesis 27:41-43 says Esau held a grudge and planned to kill Jacob, so Rebekah told Jacob to flee to Laban. A grudge is anger you hold onto.", "Genesis 27:41-43."),
          Q("What did Jacob see in his dream?", ["Seven cows", "A burning bush", "A stairway to heaven with angels going up and down", "A rainbow"], 2, "Genesis 28:12 describes a stairway resting on the earth with its top reaching heaven, and angels going up and down on it.", "Genesis 28:12."),
          Q("What did God promise Jacob in verse 15?", ["That he would be rich", "That he would be with him and watch over him wherever he went", "That he would never have trouble", "That Esau would leave"], 1, "In verse 15 God promised to be with Jacob, watch over him wherever he went, and bring him back. God made this promise to Jacob even after Jacob had done wrong. That is grace.", "Genesis 28:15.")
        ],
        reflect: "God met Jacob when he was alone and running away. How does it help to know God is with you even when you have made a mess?" }
    ]
  });

  // ============================== WEEK 9 ==============================
  C.unit('bible', 9, {
    theme: 'Christmas: the birth of Jesus',
    verse: { ref: 'Luke 2:11', why: "This verse is the heart of Christmas: the angel announced that a Savior, Christ the Lord, had been born for us." },
    days: [
      { title: 'An angel visits Mary', refs: [{ book: 'Luke', ch: 1, from: 26, to: 38 }],
        retell: ["God sent the angel Gabriel to a young woman named Mary in the town of Nazareth. She was engaged to marry Joseph, who came from King David's family.", "Gabriel told Mary not to be afraid, because God had chosen her to have a son named Jesus, the Son of God, whose kingdom would never end. Mary wondered how this could happen, and Gabriel said the Holy Spirit would do it, because nothing is impossible with God. Mary said she was the Lord's servant and was willing."],
        questions: [
          Q("What was the angel's name?", ["Michael", "Raphael", "Simeon", "Gabriel"], 3, "Verse 26 says God sent the angel Gabriel. Gabriel had also brought news to Zechariah earlier in Luke 1.", "Verse 26."),
          Q("What name did Gabriel say to give the baby?", ["Jesus", "John", "David", "Joseph"], 0, "Verse 31 says Mary would give birth to a son and call him Jesus. The name Jesus means the LORD saves.", "Verse 31."),
          Q("How did Mary answer at the end?", ["She said no", "She asked for a different angel", "She said she was the Lord's servant and accepted God's word", "She ran away"], 2, "In verse 38 Mary called herself the Lord's servant and accepted what God said. She trusted God with a very big and surprising plan.", "Verse 38.")
        ],
        reflect: "Mary said yes to God even though she did not understand everything. What can you learn from Mary's answer?" },
      { title: 'Born in Bethlehem', refs: [{ book: 'Luke', ch: 2, from: 1, to: 7 }],
        retell: ["The Roman ruler Caesar Augustus ordered a census, a count of all the people, so everyone had to go to their family's hometown. Joseph belonged to David's family, so he traveled from Nazareth to Bethlehem, the town of David, with Mary.", "While they were there, Mary gave birth to her firstborn son. She wrapped him in cloths and laid him in a manger, an animal feeding trough, because there was no guest room for them."],
        questions: [
          Q("Why did Joseph and Mary travel to Bethlehem?", ["To visit friends", "To find work", "To see the temple", "Because of a census ordered by Caesar Augustus"], 3, "Verses 1-4 say Caesar Augustus ordered a census, and each person went to his own town. Joseph went to Bethlehem because he was from the family line of David.", "Verses 1-4."),
          Q("Bethlehem is called the town of whom?", ["Moses", "David", "Abraham", "Caesar"], 1, "Verse 4 calls Bethlehem the town of David. King David grew up there, and God had promised that a king from David's family would come.", "Verse 4."),
          Q("Where did Mary lay baby Jesus?", ["In a cradle", "In a basket on a river", "In a manger", "In a palace bed"], 2, "Verse 7 says she placed him in a manger. A manger is a box or trough that animals eat from. The King of all was born in a humble place.", "Verse 7.")
        ],
        reflect: "Jesus, the King, was born in a very humble place. What does that tell you about how God feels about ordinary people?" },
      { title: 'Shepherds in the night', refs: [{ book: 'Luke', ch: 2, from: 8, to: 20 }],
        retell: ["Shepherds were watching their flocks at night when an angel appeared and God's glory shone around them. The angel told them not to be afraid, because he brought good news of great joy: a Savior had been born in the town of David.", "A huge choir of angels praised God. The shepherds hurried to Bethlehem, found the baby in the manger, and told everyone what they had heard. Mary treasured all these things in her heart."],
        questions: [
          Q("What sign did the angel give the shepherds?", ["A baby wrapped in cloths and lying in a manger", "A star over a house", "A rainbow", "A golden crown"], 0, "Verse 12 says the sign was a baby wrapped in cloths and lying in a manger. A baby in a manger would be unusual, so they would know they had found the right one.", "Verse 12."),
          Q("What did the shepherds do after they saw Jesus?", ["They kept it secret", "They moved to Bethlehem", "They went to see Herod", "They spread the word about what they had been told"], 3, "Verses 17-18 say they spread the word, and everyone who heard was amazed. Good news is meant to be shared.", "Verses 17-18."),
          Q("What did Mary do with all these things?", ["She forgot them", "She treasured them and thought about them in her heart", "She wrote a song", "She told Herod"], 1, "Verse 19 says Mary treasured up all these things and pondered them in her heart. To ponder means to think deeply about something.", "Verse 19.")
        ],
        reflect: "The shepherds could not keep the good news to themselves. Who is someone you could tell about Jesus this Christmas?" },
      { title: 'Wise men follow a star', refs: [{ book: 'Matthew', ch: 2, from: 1, to: 12 }],
        retell: ["Magi, wise men from the east, came to Jerusalem asking where the newborn king of the Jews was, because they had seen his star. King Herod was troubled, and the religious leaders told him the prophets said the Messiah would be born in Bethlehem.", "The star led the Magi to the house where the child was. They bowed down, worshiped him, and gave gifts of gold, frankincense, and myrrh. God warned them in a dream not to go back to Herod, so they went home another way."],
        questions: [
          Q("Why did the Magi come?", ["To worship the one born king of the Jews", "To trade spices", "To visit Herod", "To be counted in the census"], 0, "Verse 2 says they saw his star and came to worship him. They traveled a long way just to honor Jesus.", "Verse 2."),
          Q("Where did the Magi find Jesus, according to verse 11?", ["In a stable", "In the temple", "In a house", "In a field"], 2, "Verse 11 says they came to the house and saw the child with his mother Mary. Notice that Matthew says a house, and he calls Jesus a child, not a newborn baby.", "Verse 11."),
          Q("Why did the Magi go home by another route?", ["They got lost", "They were warned in a dream not to go back to Herod", "The star moved", "Joseph told them to"], 1, "Verse 12 says they were warned in a dream not to go back to Herod. Herod had pretended he wanted to worship Jesus, but he did not. God protected Jesus.", "Verse 12.")
        ],
        reflect: "The Magi brought their best gifts to Jesus. What is one gift you can give to Jesus this Christmas, like your time, kindness, or worship?" },
      { title: 'Simeon and Anna', refs: [{ book: 'Luke', ch: 2, from: 25, to: 38 }],
        retell: ["When Mary and Joseph brought baby Jesus to the temple, an old man named Simeon was there. The Holy Spirit had shown him he would see the Messiah before he died, and he took Jesus in his arms and praised God for the salvation he had sent for all people.", "A very old prophet named Anna, who worshiped God in the temple night and day, came up at that moment. She thanked God and told everyone who was waiting for God's rescue about this child."],
        questions: [
          Q("What had the Holy Spirit shown Simeon?", ["That he would become a priest", "That he would travel to Egypt", "That he would meet the Magi", "That he would see the Lord's Messiah before he died"], 3, "Verse 26 says the Holy Spirit revealed to Simeon that he would not die before he had seen the Lord's Messiah. He had been waiting a long time.", "Verse 26."),
          Q("What did Simeon do when he saw Jesus?", ["He took him in his arms and praised God", "He wrote down his name", "He ran to tell Herod", "He gave him gold"], 0, "Verse 28 says Simeon took Jesus in his arms and praised God. His long wait was over.", "Verse 28."),
          Q("What did Anna do when she saw Jesus?", ["She stayed quiet", "She left the temple forever", "She gave thanks to God and spoke about the child to people waiting for God's rescue", "She asked for a sign"], 2, "Verse 38 says Anna gave thanks to God and spoke about the child to all who were looking forward to the redemption of Jerusalem. Redemption means being set free or rescued.", "Verse 38.")
        ],
        reflect: "Simeon and Anna waited many years to see God's promise. What are you most thankful for about Jesus coming at Christmas?" }
    ]
  });
  // ============================== WEEK 10 ==============================
  C.unit('bible', 10, {
    theme: 'Jacob wrestles; Jacob and Esau make peace',
    verse: { ref: 'Romans 12:18', why: "Jacob and Esau show that God can bring peace to a broken family, and this verse asks us to do everything we can to live at peace with others." },
    days: [
      { title: 'Seven years like a few days', refs: [{ book: 'Genesis', ch: 29, from: 1, to: 20 }],
        retell: ["Jacob arrived at a well near Harran, and his cousin Rachel came with her father's sheep. Jacob rolled the heavy stone off the well, watered her flock, and wept aloud as he told her he was family.", "His uncle Laban welcomed him. Jacob loved Rachel, so he offered to work seven years to marry her, and the years seemed like only a few days because he loved her so much."],
        questions: [
          Q("What did Jacob do for Rachel's sheep?", ["He sold them", "He counted them", "He chased them away", "He rolled the stone away from the well and watered them"], 3, "Verse 10 says Jacob rolled the stone away from the mouth of the well and watered his uncle's sheep. It was a kind and strong thing to do.", "Verse 10."),
          Q("How long did Jacob agree to work for Rachel?", ["One year", "Three years", "Seven years", "Twenty years"], 2, "Verse 18 says Jacob offered to work seven years in return for marrying Rachel.", "Verse 18."),
          Q("Why did the seven years seem short to Jacob?", ["He was very busy", "Because he loved Rachel so much", "He slept a lot", "Laban paid him well"], 1, "Verse 20 says the years seemed like only a few days to him because of his love for her. Love makes hard work feel lighter.", "Verse 20.")
        ],
        reflect: "Jacob worked hard because he loved Rachel. What is something you are willing to work hard for because you love someone?" },
      { title: 'The trickster is tricked', refs: [{ book: 'Genesis', ch: 29, from: 21, to: 35 }],
        retell: ["When the wedding came, Laban secretly gave Jacob his older daughter Leah instead of Rachel. Jacob, who once tricked his own father, had now been tricked himself.", "Laban let Jacob marry Rachel a week later, but Jacob had to work seven more years. Jacob loved Rachel more, and the LORD saw that Leah was not loved and gave her sons. When her fourth son Judah was born, Leah chose to praise the LORD."],
        questions: [
          Q("Who did Laban give to Jacob as his wife first?", ["Rachel", "Rebekah", "Leah", "Sarah"], 2, "Verses 23-25 say Laban gave Jacob his daughter Leah, and in the morning Jacob discovered it was Leah. Jacob had been deceived, just as he had deceived Isaac.", "Verses 23-25."),
          Q("What excuse did Laban give?", ["In his land the younger daughter is not given in marriage before the older one", "He forgot", "Rachel was sick", "Jacob asked for Leah"], 0, "Verse 26 says it was not their custom to give the younger daughter before the older one. A custom is a usual way of doing things. Laban should have told Jacob that from the start.", "Verse 26."),
          Q("What did the LORD do when he saw Leah was not loved?", ["He ignored her", "He sent her home", "He made Jacob leave", "He enabled her to have children"], 3, "Verse 31 says when the LORD saw Leah was not loved, he enabled her to conceive. God cares for people who feel left out.", "Verse 31.")
        ],
        reflect: "Leah felt unloved, but God saw her. When have you felt left out, and how does it help to know God sees you?" },
      { title: 'Afraid to go home', refs: [{ book: 'Genesis', ch: 32, from: 1, to: 12 }],
        retell: ["After many years with Laban, God told Jacob to go back home. Jacob sent messengers ahead to his brother Esau, and they returned saying Esau was coming with four hundred men.", "Jacob was terrified. He split his people into two groups and prayed, telling God he was not worthy of all God's kindness, asking God to save him, and reminding God of his promises."],
        questions: [
          Q("What news did the messengers bring back about Esau?", ["Esau had moved away", "Esau was coming with four hundred men", "Esau was sick", "Esau sent a gift"], 1, "Verse 6 says Esau was coming to meet Jacob with four hundred men. Jacob feared his brother was still angry.", "Verse 6."),
          Q("What did Jacob do with his people and animals because he was afraid?", ["He divided them into two groups", "He sent them all back to Laban", "He hid them in a cave", "He sold them"], 0, "Verses 7-8 say Jacob divided his people and flocks into two groups, thinking that if Esau attacked one, the other could escape.", "Verses 7-8."),
          Q("What did Jacob say about himself in his prayer?", ["That he deserved everything", "That he was stronger than Esau", "That he was unworthy of all God's kindness and faithfulness", "That he did nothing wrong"], 2, "In verse 10 Jacob said he was unworthy of all the kindness and faithfulness God had shown him. He was learning humility.", "Verse 10.")
        ],
        reflect: "When Jacob was afraid, he prayed and remembered God's promises. What promise of God can you remember when you are afraid?" },
      { title: 'Jacob wrestles', refs: [{ book: 'Genesis', ch: 32, from: 22, to: 32 }],
        retell: ["The night before he met Esau, Jacob was alone by the Jabbok River, and a man wrestled with him until daybreak. The man touched Jacob's hip and hurt it, but Jacob would not let go until the man blessed him.", "The man gave Jacob a new name, Israel, because he had struggled with God and with people and had overcome. Jacob named the place Peniel, because he had seen God face to face and lived, and he walked away limping."],
        questions: [
          Q("How long did the wrestling last?", ["A few minutes", "Until daybreak", "Three days", "Forty days"], 1, "Verse 24 says a man wrestled with Jacob till daybreak, which means until the sun was coming up. It lasted all night.", "Verse 24."),
          Q("What did Jacob say he would not do unless the man blessed him?", ["Go home", "Eat", "Sleep", "Let him go"], 3, "In verse 26 Jacob said he would not let the man go unless he blessed him. Jacob held on to God for a blessing.", "Verse 26."),
          Q("What new name was Jacob given?", ["Israel", "Abraham", "Isaac", "Peniel"], 0, "Verse 28 says his name would be Israel, because he had struggled with God and with humans and had overcome. Peniel was the name Jacob gave the place (verse 30).", "Verse 28.")
        ],
        reflect: "Jacob held on to God and would not let go. What does it look like for you to hold on to God when life is hard?" },
      { title: 'Brothers make peace', refs: [{ book: 'Genesis', ch: 33, from: 1, to: 11 }],
        retell: ["Jacob saw Esau coming and bowed to the ground seven times as he walked toward him. Esau ran to Jacob, hugged him, kissed him, and they both cried.", "Esau said he already had plenty, but Jacob begged him to accept his gifts, saying that seeing Esau's kind face was like seeing the face of God. God had changed both brothers' hearts."],
        questions: [
          Q("How many times did Jacob bow as he came near Esau?", ["Once", "Three times", "Seven times", "Twelve times"], 2, "Verse 3 says Jacob bowed down to the ground seven times as he approached his brother. He was showing humility and respect.", "Verse 3."),
          Q("What did Esau do when he saw Jacob?", ["He attacked", "He turned away", "He ran to meet him, hugged him, and kissed him", "He demanded the blessing back"], 2, "Verse 4 says Esau ran to meet Jacob, embraced him, threw his arms around his neck, and kissed him, and they wept. Instead of revenge, there was forgiveness.", "Verse 4."),
          Q("What did Jacob say God had done for him?", ["God had made him a king", "God had made Esau leave", "God had given him a tower", "God had been gracious to him"], 3, "In verses 5 and 11 Jacob said God had been gracious to him. Gracious means giving kindness we do not deserve.", "Verses 5 and 11.")
        ],
        reflect: "Esau forgave Jacob. Is there someone you need to forgive or make peace with? What is one step you could take?" }
    ]
  });

  // ============================== WEEK 11 ==============================
  C.unit('bible', 11, {
    theme: "Joseph's dreams; sold by his brothers; Joseph in Egypt",
    verse: { ref: 'Romans 8:28', why: "Joseph's story shows that God works in all things, even very hard things, for the good of those who love him." },
    days: [
      { title: 'A special robe and two dreams', refs: [{ book: 'Genesis', ch: 37, from: 1, to: 11 }],
        retell: ["Joseph was seventeen, and his father Jacob, also called Israel, loved him more than his other sons. Jacob gave Joseph an ornate robe, and his brothers hated him for it.", "Joseph dreamed that his brothers' bundles of grain bowed down to his, and then that the sun, moon, and eleven stars bowed to him. When he told the dreams, his brothers became even more jealous, but his father kept thinking about them."],
        questions: [
          Q("How old was Joseph at the start of the story?", ["Seven", "Twelve", "Seventeen", "Thirty"], 2, "Verse 2 says Joseph was a young man of seventeen. He was taking care of the flocks with his brothers.", "Verse 2."),
          Q("Why did Jacob love Joseph more than his other sons?", ["Joseph was the strongest", "Joseph was born to him in his old age", "Joseph was the oldest", "Joseph was the best shepherd"], 1, "Verse 3 says Israel loved Joseph more because he had been born to him in his old age. Favoritism caused trouble again, just like with Isaac and Rebekah.", "Verse 3."),
          Q("What bowed down in Joseph's second dream?", ["Sheaves of grain", "Seven cows", "The sun, moon, and eleven stars", "Twelve camels"], 2, "Verse 9 says the sun, moon, and eleven stars were bowing down to him. The first dream (verse 7) was about sheaves of grain.", "Verse 9.")
        ],
        reflect: "Joseph's brothers let jealousy grow into hate. What can you do when you start to feel jealous of someone?" },
      { title: 'Into the cistern', refs: [{ book: 'Genesis', ch: 37, from: 12, to: 24 }],
        retell: ["Jacob sent Joseph to check on his brothers, who were far away with the flocks. When they saw him coming, they plotted to kill him and pretend a wild animal had eaten him.", "Reuben, the oldest, talked them into throwing Joseph into an empty cistern instead, because he secretly planned to rescue him. They pulled off Joseph's robe and threw him into the dry pit."],
        questions: [
          Q("What did the brothers call Joseph when they saw him coming?", ["That dreamer", "Little brother", "The shepherd", "The prince"], 0, "In verse 19 they mockingly called him that dreamer. They were still angry about his dreams.", "Verse 19."),
          Q("Why did Reuben say not to kill Joseph?", ["He wanted to sell him", "He was afraid of the dark", "He wanted the robe", "He planned to rescue him and take him back to their father"], 3, "Verse 22 says Reuben wanted to rescue Joseph from them and take him back to his father. Reuben tried to do the right thing, though not boldly.", "Verse 22."),
          Q("What was in the cistern?", ["Water", "Nothing; it was empty", "Snakes", "Gold"], 1, "Verse 24 says the cistern was empty and there was no water in it. A cistern is a pit dug to hold rainwater.", "Verse 24.")
        ],
        reflect: "Reuben tried to help Joseph quietly. When have you needed to stand up for someone? What could you say?" },
      { title: 'Sold for silver', refs: [{ book: 'Genesis', ch: 37, from: 25, to: 36 }],
        retell: ["While the brothers ate, a caravan of traders going to Egypt came by. Judah suggested selling Joseph instead of killing him, so they sold him for twenty pieces of silver.", "They dipped Joseph's robe in goat's blood and showed it to their father. Jacob believed a wild animal had killed Joseph and mourned for many days. Meanwhile, Joseph was sold in Egypt to Potiphar, an official of Pharaoh."],
        questions: [
          Q("Which brother suggested selling Joseph?", ["Judah", "Reuben", "Benjamin", "Levi"], 0, "Verses 26-27 say Judah suggested selling Joseph to the traders instead of killing him. It was still a terrible choice, but Joseph's life was spared.", "Verses 26-27."),
          Q("How much was Joseph sold for?", ["Ten shekels of gold", "Twenty shekels of silver", "Thirty pieces of silver", "One camel"], 1, "Verse 28 says they sold him for twenty shekels of silver. A shekel was a weight of silver used as money.", "Verse 28."),
          Q("Who bought Joseph in Egypt?", ["Pharaoh", "A farmer", "Potiphar, the captain of the guard", "Laban"], 2, "Verse 36 says Joseph was sold to Potiphar, one of Pharaoh's officials, the captain of the guard.", "Verse 36.")
        ],
        reflect: "Joseph's brothers did something very wrong, but the story is not over. How can you trust God when something unfair happens to you?" },
      { title: "Joseph in Potiphar's house", refs: [{ book: 'Genesis', ch: 39, from: 1, to: 6 }],
        retell: ["Joseph was now a servant in Potiphar's house in Egypt. But the LORD was with Joseph, and he did well in everything.", "Potiphar saw that the LORD was with Joseph, so he put Joseph in charge of his whole household. God blessed Potiphar's house because of Joseph."],
        questions: [
          Q("What phrase does verse 2 use to explain why Joseph did well?", ["Joseph was lucky", "The LORD was with Joseph", "Joseph was rich", "Potiphar was kind"], 1, "Verse 2 says the LORD was with Joseph so that he prospered. Even far from home, as a servant, Joseph was not alone.", "Verse 2."),
          Q("What job did Potiphar give Joseph?", ["Cook", "Guard", "Shepherd", "In charge of his household and everything he owned"], 3, "Verse 4 says Potiphar put Joseph in charge of his household and entrusted to his care everything he owned.", "Verse 4."),
          Q("Why did God bless Potiphar's house?", ["Because of Joseph", "Because Potiphar prayed", "Because Pharaoh asked", "Because it was big"], 0, "Verse 5 says the LORD blessed the household of the Egyptian because of Joseph. When we follow God, others around us can be blessed too.", "Verse 5.")
        ],
        reflect: "Joseph worked hard even as a servant far from home. How can you do your best work this week, even on things you do not enjoy?" },
      { title: 'Doing right, even when it costs', refs: [{ book: 'Genesis', ch: 39, from: 7, to: 23 }],
        retell: ["Potiphar's wife kept trying to get Joseph to be disloyal to his master with her. Joseph said no day after day, because it would be a wicked sin against God and against Potiphar, who trusted him.", "One day she grabbed his cloak, and Joseph ran out, leaving it behind. She lied about him, and Potiphar put Joseph in prison. But even there the LORD was with Joseph, and the warden put him in charge of all the prisoners."],
        questions: [
          Q("Who did Joseph say he would be sinning against?", ["Only Pharaoh", "His brothers", "God (and his master)", "Nobody"], 2, "In verses 8-9 Joseph said his master trusted him with everything, and asked how he could do such a wicked thing and sin against God. Joseph knew all sin is first against God.", "Verse 9."),
          Q("What did Joseph do when she grabbed his cloak?", ["He argued", "He called a guard", "He gave in", "He left the cloak and ran out"], 3, "Verse 12 says he left his cloak in her hand and ran out of the house. Sometimes the wisest thing is to get away from temptation fast.", "Verse 12."),
          Q("What happened to Joseph in prison?", ["He was forgotten by God", "The LORD was with him and the warden put him in charge of the prisoners", "He escaped", "He became sick"], 1, "Verses 21-23 say the LORD was with him and showed him kindness, and the warden put Joseph in charge of all those held in the prison.", "Verses 21-23.")
        ],
        reflect: "Joseph did the right thing and still got in trouble, but God was with him. Why is doing right worth it even when it is hard?" }
    ]
  });

  // ============================== WEEK 12 ==============================
  C.unit('bible', 12, {
    theme: 'Joseph in prison; Joseph becomes a ruler',
    verse: { ref: '1 Peter 5:6', why: "Joseph stayed humble in prison and gave God the credit, and in God's time he was lifted up, just as this verse promises." },
    days: [
      { title: 'Two sad prisoners', refs: [{ book: 'Genesis', ch: 40, from: 1, to: 8 }],
        retell: ["Pharaoh's cupbearer and baker made him angry, so he put them in the same prison as Joseph. Joseph was assigned to take care of them.", "One night each man had a dream, and in the morning they looked sad because no one could explain the dreams. Joseph said that interpretations belong to God, and asked them to tell him their dreams."],
        questions: [
          Q("Which two officials were put in prison?", ["The guard and the cook", "Potiphar and his wife", "The baker and the cupbearer", "Two shepherds"], 2, "Verses 1-3 say Pharaoh's cupbearer and baker offended him and were put in custody. A cupbearer served the king his drinks.", "Verses 1-3."),
          Q("What did Joseph notice about them one morning?", ["They looked sad", "They were happy", "They were gone", "They were sick"], 0, "Verse 6 says Joseph saw they were dejected, and in verse 7 he asked why their faces were sad. Joseph paid attention to other people's feelings, even in prison.", "Verses 6-7."),
          Q("Who did Joseph say interpretations of dreams belong to?", ["Pharaoh", "The magicians", "Himself", "God"], 3, "In verse 8 Joseph asked whether interpretations belong to God. He gave God the credit instead of taking it for himself.", "Verse 8.")
        ],
        reflect: "Joseph noticed that others were sad, even when he was suffering too. Who could you notice and encourage this week?" },
      { title: 'The forgetful cupbearer', refs: [{ book: 'Genesis', ch: 40, from: 9, to: 23 }],
        retell: ["The cupbearer dreamed of a vine with three branches, and Joseph said that in three days he would get his job back. Joseph asked him to remember him and mention him to Pharaoh.", "The baker dreamed of three baskets of bread with birds eating from the top one, and Joseph said sadly that in three days the baker would be put to death. Both dreams came true just as Joseph said, but the cupbearer forgot all about Joseph."],
        questions: [
          Q("How many branches were on the vine in the cupbearer's dream?", ["Two", "Three", "Seven", "Twelve"], 1, "Verse 10 says the vine had three branches, and in verse 12 Joseph explained that the three branches were three days.", "Verses 10-12."),
          Q("What did Joseph ask the cupbearer to do?", ["Give him wine", "Remember him and mention him to Pharaoh", "Help him escape", "Find his brothers"], 1, "Verse 14 says Joseph asked the cupbearer to remember him, show kindness, and mention him to Pharaoh to get him out of prison.", "Verse 14."),
          Q("What did the cupbearer do after he got his job back?", ["He forgot Joseph", "He told Pharaoh right away", "He visited Joseph", "He sent a gift"], 0, "Verse 23 says the chief cupbearer did not remember Joseph; he forgot him. Joseph had to keep waiting, but God had not forgotten him.", "Verse 23.")
        ],
        reflect: "The cupbearer forgot Joseph, but God did not. How does it feel when someone forgets you, and what can you remember about God then?" },
      { title: "Pharaoh's strange dreams", refs: [{ book: 'Genesis', ch: 41, from: 1, to: 16 }],
        retell: ["Two whole years later, Pharaoh dreamed that seven skinny cows ate seven fat cows, and then that seven thin heads of grain swallowed seven full ones. None of his wise men could explain it.", "Then the cupbearer finally remembered Joseph. Pharaoh sent for him, and Joseph was quickly brought from prison. When Pharaoh said he heard Joseph could interpret dreams, Joseph said he could not do it, but God would give Pharaoh the answer."],
        questions: [
          Q("How long after the cupbearer was freed did Pharaoh have his dreams?", ["Two days", "Two weeks", "Two full years", "Seven years"], 2, "Verse 1 says when two full years had passed, Pharaoh had a dream. Joseph waited a long time in prison.", "Verse 1."),
          Q("In the first dream, what happened to the fat cows?", ["They ran away", "They had calves", "The skinny cows ate them", "They turned into grain"], 2, "Verse 4 says the ugly and gaunt cows ate up the sleek, fat cows. Gaunt means very thin.", "Verse 4."),
          Q("What did Joseph say when Pharaoh praised his skill?", ["He bragged that he was the best", "He said he could not do it, but God would give the answer", "He told Pharaoh to ask the magicians", "He asked for a reward first"], 1, "In verse 16 Joseph said he could not do it, but God would give Pharaoh the answer he wanted. Joseph stayed humble in front of the most powerful man in Egypt.", "Verse 16.")
        ],
        reflect: "Joseph gave God the credit in front of the king. How can you give God credit for a talent he has given you?" },
      { title: 'A plan to save lives', refs: [{ book: 'Genesis', ch: 41, from: 25, to: 40 }],
        retell: ["Joseph explained that both dreams meant the same thing: God was going to send seven years of plenty and then seven years of terrible famine. The dream came twice because God had firmly decided it.", "Joseph advised Pharaoh to choose a wise man to store a fifth of the harvest during the good years. Pharaoh saw that the Spirit of God was in Joseph, so he put Joseph in charge of his palace and all of Egypt."],
        questions: [
          Q("What did the seven fat cows and seven full heads of grain stand for?", ["Seven kings", "Seven years of great abundance", "Seven years of famine", "Seven brothers"], 1, "Verses 26 and 29 explain that the good cows and good grain were seven years of great abundance. Abundance means more than enough.", "Verses 26 and 29."),
          Q("Why was the dream given to Pharaoh in two forms?", ["To confuse him", "Because Pharaoh forgot the first one", "Because there were two kings", "Because God had firmly decided it and would do it soon"], 3, "Verse 32 says the dream was given twice because the matter had been firmly decided by God, and God would do it soon.", "Verse 32."),
          Q("What part of the harvest did Joseph suggest storing?", ["A fifth", "A tenth", "Half", "All of it"], 0, "Verse 34 says to take a fifth of the harvest during the seven good years. A fifth is one out of every five parts.", "Verse 34.")
        ],
        reflect: "Joseph planned ahead for hard times. What is one way you can plan ahead or save for later?" },
      { title: 'From prison to palace', refs: [{ book: 'Genesis', ch: 41, from: 41, to: 57 }],
        retell: ["Pharaoh gave Joseph his signet ring, fine linen robes, and a gold chain, and made him ruler over all of Egypt. Joseph was thirty years old.", "During the seven good years Joseph stored so much grain that they stopped counting it. He had two sons, Manasseh and Ephraim. When the famine came, people from all over the world came to Egypt to buy grain from Joseph."],
        questions: [
          Q("How old was Joseph when he began serving Pharaoh?", ["Seventeen", "Twenty", "Thirty", "Forty"], 2, "Verse 46 says Joseph was thirty years old when he entered the service of Pharaoh. He had been seventeen when his brothers sold him, so about thirteen years had passed.", "Verse 46."),
          Q("Why did they stop keeping records of the grain?", ["They lost the scrolls", "Pharaoh told them to", "There was so much it was beyond measure, like sand of the sea", "The grain spoiled"], 2, "Verse 49 says Joseph stored huge quantities of grain, like the sand of the sea, so much that he stopped keeping records.", "Verse 49."),
          Q("Who came to Egypt to buy grain during the famine?", ["Only Egyptians", "Only Joseph's family", "Nobody", "All the world"], 3, "Verse 57 says all the world came to Egypt to buy grain from Joseph, because the famine was severe everywhere. God used Joseph to save many lives.", "Verse 57.")
        ],
        reflect: "God lifted Joseph from prison to the palace at just the right time. What is something you are waiting on God for right now?" }
    ]
  });

  // ============================== WEEK 13 ==============================
  C.unit('bible', 13, {
    theme: 'Joseph forgives his brothers',
    verse: { ref: 'Genesis 50:20', why: "Joseph saw that even when people meant to hurt him, God was working it for good, and that helped him forgive." },
    days: [
      { title: 'The brothers bow', refs: [{ book: 'Genesis', ch: 42, from: 1, to: 17 }],
        retell: ["The famine reached Canaan, so Jacob sent ten of his sons to Egypt to buy grain, but he kept Benjamin, the youngest, at home. The brothers came to Joseph and bowed down with their faces to the ground, just like in his dreams.", "Joseph recognized them, but they did not recognize him. He spoke harshly, accused them of being spies, and put them in prison for three days to test them."],
        questions: [
          Q("Which brother did Jacob keep at home?", ["Reuben", "Benjamin", "Judah", "Simeon"], 1, "Verse 4 says Jacob did not send Benjamin because he was afraid harm might come to him. Benjamin was Joseph's only full brother, the other son of Rachel.", "Verse 4."),
          Q("What did the brothers do when they came before Joseph?", ["They shouted", "They ran away", "They bowed down to him with their faces to the ground", "They gave him a robe"], 2, "Verse 6 says they bowed down to him with their faces to the ground. Verse 9 says Joseph remembered his dreams. God's plan was coming true.", "Verses 6 and 9."),
          Q("What did Joseph accuse his brothers of being?", ["Spies", "Thieves", "Shepherds", "Liars"], 0, "Verse 9 says Joseph told them they were spies. He was testing them to see if their hearts had changed.", "Verse 9.")
        ],
        reflect: "Joseph's dreams came true many years later. What does this show you about God's timing?" },
      { title: 'A guilty memory', refs: [{ book: 'Genesis', ch: 42, from: 18, to: 28 }],
        retell: ["Joseph let the brothers go home with grain but kept Simeon, and said they must come back with their youngest brother. The brothers said to each other that this trouble was happening because of what they did to Joseph long ago.", "They did not know Joseph understood them, because he spoke through an interpreter. Joseph turned away and cried. On the way home, one brother found his silver back in his sack, and they were frightened."],
        questions: [
          Q("Which brother did Joseph keep in Egypt?", ["Reuben", "Judah", "Benjamin", "Simeon"], 3, "Verse 24 says Joseph had Simeon taken and bound in front of them. Simeon would stay until they returned with Benjamin.", "Verse 24."),
          Q("What did the brothers think was the reason for their trouble?", ["Bad weather", "What they had done to their brother Joseph", "Pharaoh was mean", "They forgot to pray"], 1, "Verse 21 says they told each other they were being punished because of their brother, whom they had ignored when he pleaded with them. Their consciences still bothered them after many years.", "Verse 21."),
          Q("What did Joseph do when he heard them talking?", ["He turned away and began to weep", "He laughed", "He sent them away angrily", "He told them who he was"], 0, "Verse 24 says he turned away from them and began to weep. Joseph still loved his brothers.", "Verse 24.")
        ],
        reflect: "The brothers still felt guilty years later. Why do you think it is better to confess wrong things quickly instead of hiding them?" },
      { title: 'The silver cup', refs: [{ book: 'Genesis', ch: 44, from: 1, to: 13 }],
        retell: ["The famine went on, and the brothers came back to Egypt with Benjamin. Joseph ordered his steward to fill their sacks and secretly put his own silver cup in Benjamin's sack.", "After they left, the steward chased them and searched every sack from oldest to youngest. The cup was found in Benjamin's sack, and the brothers tore their clothes in sorrow and all went back to the city together."],
        questions: [
          Q("Whose sack did Joseph tell the steward to put the silver cup in?", ["Reuben's", "Judah's", "The youngest one's (Benjamin)", "Simeon's"], 2, "Verse 2 says to put the silver cup in the mouth of the youngest one's sack. Joseph was testing whether the brothers would abandon Benjamin the way they had abandoned him.", "Verse 2."),
          Q("In what order did the steward search the sacks?", ["Youngest to oldest", "Oldest to youngest", "Randomly", "He only searched one"], 1, "Verse 12 says he searched, beginning with the oldest and ending with the youngest. The tension grew as he got closer to Benjamin.", "Verse 12."),
          Q("What did the brothers do when the cup was found?", ["They ran home without Benjamin", "They blamed Benjamin", "They hid the cup", "They tore their clothes and all went back to the city"], 3, "Verse 13 says they tore their clothes and all returned to the city. Years before, they had sold a brother. This time none of them left Benjamin behind.", "Verse 13.")
        ],
        reflect: "This time the brothers stuck together. How can you stand by a brother, sister, or friend when they are in trouble?" },
      { title: 'Judah offers himself', refs: [{ book: 'Genesis', ch: 44, from: 18, to: 34 }],
        retell: ["Judah stepped forward and spoke to Joseph. He explained how much their father loved Benjamin and said that if Benjamin did not come home, their father would die of sorrow.", "Judah had promised to keep Benjamin safe. So he asked to stay in Egypt as a slave in Benjamin's place so the boy could go home. The same brother who once said to sell Joseph was now willing to give himself up for his brother."],
        questions: [
          Q("What did Judah say would happen to their father if Benjamin did not return?", ["He would die of sorrow", "He would be angry", "He would come to Egypt", "He would send more silver"], 0, "Verses 30-31 say their father's life was closely bound up with the boy's, and if the boy was not with them, their father would die. Judah cared about his father's heart.", "Verses 30-31."),
          Q("What promise had Judah made to his father?", ["To bring back more grain", "To find Joseph", "To guarantee the boy's safety", "To come home quickly"], 2, "Verse 32 says Judah guaranteed the boy's safety to his father. He took responsibility for Benjamin.", "Verse 32."),
          Q("What did Judah offer to do?", ["Pay with gold", "Fight the guards", "Go get his father", "Stay as a slave in place of Benjamin"], 3, "Verse 33 says Judah asked to remain as Joseph's slave in place of the boy. Judah had truly changed. Jesus, who came from Judah's family line, would one day give himself in our place.", "Verse 33.")
        ],
        reflect: "Judah was willing to give himself for his brother. What is a way you could put someone else's needs ahead of your own?" },
      { title: 'Joseph tells the truth', refs: [{ book: 'Genesis', ch: 45, from: 1, to: 15 }, { book: 'Genesis', ch: 50, from: 15, to: 21 }],
        retell: ["Joseph could not hold back any longer, so he sent everyone else out, wept loudly, and told his brothers he was Joseph. They were terrified, but Joseph told them not to be upset with themselves, because God had sent him ahead to save lives. Then he hugged Benjamin and kissed all his brothers.", "Years later, after their father died, the brothers worried Joseph would finally pay them back. Joseph cried and told them not to be afraid. They had meant to harm him, but God meant it for good, and Joseph promised to take care of them and their children."],
        questions: [
          Q("How did the brothers feel when Joseph told them who he was?", ["Excited", "Terrified", "Bored", "Angry"], 1, "Genesis 45:3 says his brothers were not able to answer him because they were terrified. They remembered what they had done.", "Genesis 45:3."),
          Q("Who did Joseph say had really sent him to Egypt?", ["Pharaoh", "The traders", "God", "His father"], 2, "In Genesis 45:5-8 Joseph said it was God who sent him ahead to save lives. Joseph saw God's hand in his whole story.", "Genesis 45:5-8."),
          Q("What did Joseph say about the harm his brothers intended?", ["God intended it for good, to save many lives", "He would never forgive it", "It did not matter", "He would pay them back"], 0, "Genesis 50:20 says they intended to harm him, but God intended it for good to save many lives. Joseph chose forgiveness and kindness.", "Genesis 50:20.")
        ],
        reflect: "Joseph forgave his brothers completely. What does Joseph's story teach you about forgiving someone who hurt you?" }
    ]
  });

  // ============================== WEEK 14 ==============================
  C.unit('bible', 14, {
    theme: 'Moses is born; the burning bush',
    verse: { ref: 'Exodus 4:12', why: "When Moses felt he could not speak well, God promised to help him and teach him what to say, and God helps us do what he asks too." },
    days: [
      { title: 'A cruel new king', refs: [{ book: 'Exodus', ch: 1, from: 6, to: 22 }],
        retell: ["After Joseph died, the Israelites grew into a huge people in Egypt. A new king who did not know about Joseph was afraid of them, so he made them slaves and forced them to do hard work with bricks and mortar.", "The king ordered the Hebrew midwives, Shiphrah and Puah, to kill the baby boys, but they feared God and refused. God was kind to the midwives. Then Pharaoh commanded that every Hebrew baby boy be thrown into the Nile River."],
        questions: [
          Q("Why was the new king afraid of the Israelites?", ["They were rich", "They had an army", "They worshiped idols", "There were so many of them"], 3, "Verses 9-10 say the king thought the Israelites had become far too numerous and might join his enemies. He let fear make him cruel.", "Verses 9-10."),
          Q("What happened when the Egyptians made the Israelites suffer more?", ["They left Egypt", "They grew in number even more", "They became Egyptians", "They stopped working"], 1, "Verse 12 says the more they were oppressed, the more they multiplied and spread. Oppressed means treated cruelly. Pharaoh could not stop God's blessing.", "Verse 12."),
          Q("Why did the midwives refuse Pharaoh's order?", ["They feared God", "They were lazy", "They did not hear him", "They were Egyptian"], 0, "Verse 17 says the midwives feared God and did not do what the king told them. To fear God means to honor him more than anyone else, even a king.", "Verse 17.")
        ],
        reflect: "Shiphrah and Puah obeyed God even when a king told them to do wrong. What helps you choose what is right when someone tells you to do wrong?" },
      { title: 'A baby in a basket', refs: [{ book: 'Exodus', ch: 2, from: 1, to: 10 }],
        retell: ["A Hebrew mother hid her baby boy for three months. When she could not hide him any longer, she put him in a basket coated with tar and set it among the reeds of the Nile, and his sister watched from a distance.", "Pharaoh's daughter found the crying baby and felt sorry for him. His sister offered to find a Hebrew woman to nurse him, and she brought the baby's own mother! Later he became the princess's son, and she named him Moses."],
        questions: [
          Q("How long did the mother hide her baby?", ["Three days", "Three weeks", "Three months", "Three years"], 2, "Verse 2 says she hid him for three months. When he got too big to hide, she made a careful plan.", "Verse 2."),
          Q("Who watched the basket from a distance?", ["His father", "A soldier", "His sister", "Pharaoh"], 2, "Verse 4 says his sister stood at a distance to see what would happen to him. She was brave and quick-thinking.", "Verse 4."),
          Q("Who did the sister bring to nurse the baby?", ["An Egyptian servant", "The baby's own mother", "Pharaoh's daughter", "A midwife"], 1, "Verse 8 says the girl went and got the baby's mother. God gave Moses back to his mother for a while, and she was even paid to care for him!", "Verse 8.")
        ],
        reflect: "God protected baby Moses through brave and kind people. Who are some people God uses to take care of you?" },
      { title: 'Moses runs away', refs: [{ book: 'Exodus', ch: 2, from: 11, to: 25 }],
        retell: ["When Moses grew up, he saw an Egyptian beating a Hebrew man, and Moses killed the Egyptian. When Pharaoh heard about it and tried to kill Moses, Moses ran away to the land of Midian.", "In Midian, Moses helped seven sisters water their flock and later married one of them, Zipporah. Many years passed, and the Israelites in Egypt cried out to God. God heard them and remembered his covenant with Abraham, Isaac, and Jacob."],
        questions: [
          Q("Where did Moses run to?", ["Canaan", "Babylon", "Jericho", "Midian"], 3, "Verse 15 says Moses fled from Pharaoh and went to live in Midian. He went from being a prince in Egypt to living in the wilderness.", "Verse 15."),
          Q("How did Moses help the seven daughters at the well?", ["He rescued them from shepherds and watered their flock", "He gave them money", "He built them a house", "He fought a lion"], 0, "Verses 16-17 say some shepherds drove the women away, but Moses got up, came to their rescue, and watered their flock.", "Verses 16-17."),
          Q("What did God do when the Israelites cried out?", ["He did not notice", "He sent them to Midian", "He heard them and remembered his covenant", "He punished them"], 2, "Verses 24-25 say God heard their groaning, remembered his covenant with Abraham, Isaac, and Jacob, and was concerned about them.", "Verses 24-25.")
        ],
        reflect: "The Israelites suffered for a long time, but God heard them. How can you pray for people who are suffering today?" },
      { title: 'The bush that did not burn up', refs: [{ book: 'Exodus', ch: 3, from: 1, to: 15 }],
        retell: ["Moses was taking care of sheep near Mount Horeb when he saw a bush on fire that did not burn up. When he went to look, God called his name and told him to take off his sandals because he was standing on holy ground.", "God said he had seen his people's misery and was sending Moses to Pharaoh to bring them out of Egypt. Moses asked who he was to do such a thing, and God promised to be with him. God told Moses his name: I AM WHO I AM."],
        questions: [
          Q("What was strange about the bush?", ["It was blue", "It could talk by itself", "It was made of gold", "It was on fire but did not burn up"], 3, "Verse 2 says the bush was on fire but it did not burn up. That made Moses curious enough to go and look.", "Verse 2."),
          Q("Why did God tell Moses to take off his sandals?", ["They were dirty", "He was standing on holy ground", "It was hot", "To run faster"], 1, "Verse 5 says the place where he was standing was holy ground. God's presence made that place holy, so Moses showed respect.", "Verse 5."),
          Q("What name did God tell Moses in verse 14?", ["Mighty One", "King of Egypt", "I AM WHO I AM", "The Shepherd"], 2, "Verse 14 says God told Moses, I AM WHO I AM. This name shows God has always existed and never changes.", "Verse 14.")
        ],
        reflect: "When Moses asked who he was, God answered with who God is. Why does it matter more who God is than how strong we are?" },
      { title: 'But I am not a good speaker', refs: [{ book: 'Exodus', ch: 4, from: 1, to: 17 }],
        retell: ["Moses worried the people would not believe him, so God gave him signs: his staff became a snake and then a staff again, and his hand became diseased and then healthy again.", "Moses said he was slow of speech. God asked who made people's mouths and promised to help him speak. When Moses still begged God to send someone else, God was angry but sent Moses' brother Aaron to speak with him."],
        questions: [
          Q("What happened when Moses threw his staff on the ground?", ["It became a snake", "It broke", "It turned to gold", "It disappeared"], 0, "Verse 3 says it became a snake, and Moses ran from it. When he picked it up by the tail, it turned back into a staff (verse 4).", "Verses 3-4."),
          Q("What did Moses say was his problem in verse 10?", ["He was too young", "He was too busy", "He did not know the way", "He was slow of speech and tongue"], 3, "Verse 10 says Moses said he had never been eloquent and was slow of speech and tongue. Eloquent means able to speak smoothly and well.", "Verse 10."),
          Q("Who did God send to help Moses speak?", ["Joshua", "Aaron, his brother", "Jethro", "Miriam"], 1, "Verse 14 says God told Moses that his brother Aaron the Levite could speak well and was already on his way to meet him.", "Verse 14.")
        ],
        reflect: "Moses made excuses, but God promised to help. What is something you feel you are not good at that God could help you with?" }
    ]
  });

  // ============================== WEEK 15 ==============================
  C.unit('bible', 15, {
    theme: 'The plagues and the Passover',
    verse: { ref: 'Exodus 12:13', why: "The blood on the doorframes saved God's people at Passover, and it points ahead to Jesus, whose sacrifice saves everyone who trusts him." },
    days: [
      { title: 'Moses goes to Pharaoh', refs: [{ book: 'Exodus', ch: 5, from: 1, to: 9 }, { book: 'Exodus', ch: 6, from: 6, to: 8 }],
        retell: ["Moses and Aaron told Pharaoh that the LORD said to let his people go and worship him in the wilderness. Pharaoh said he did not know the LORD and would not obey him.", "Pharaoh made the slaves' work harder: they had to gather their own straw but still make the same number of bricks. But God promised Moses that he would free his people, rescue them with great power, make them his own people, and bring them to the land he promised Abraham, Isaac, and Jacob."],
        questions: [
          Q("What did Pharaoh say about the LORD?", ["He did not know the LORD and would not let Israel go", "He wanted to worship him", "He was afraid of him", "He would think about it"], 0, "Verse 2 says Pharaoh asked who the LORD was that he should obey him, and said he did not know the LORD. The plagues would teach Pharaoh who God is.", "Exodus 5:2."),
          Q("How did Pharaoh make the work harder?", ["He made them work at night", "He took away their food", "He stopped giving them straw but kept the same brick quota", "He moved them to the desert"], 2, "Exodus 5:7-8 says the people had to gather their own straw but make the same number of bricks. A quota is the amount you are required to make.", "Exodus 5:7-8."),
          Q("What did God promise in Exodus 6:6-8?", ["To leave them in Egypt", "To free them, take them as his people, and bring them to the promised land", "To make Moses king of Egypt", "To make the work easier"], 1, "In Exodus 6:6-8 God promised to bring them out, free them from slavery, redeem them, take them as his own people, and bring them to the land he swore to give their ancestors.", "Exodus 6:6-8.")
        ],
        reflect: "Things got worse before they got better for the Israelites. How can you keep trusting God when things seem to get harder?" },
      { title: 'The staff and the river', refs: [{ book: 'Exodus', ch: 7, from: 8, to: 24 }],
        retell: ["Aaron threw down his staff in front of Pharaoh and it became a snake. Pharaoh's magicians did the same with their staffs, but Aaron's staff swallowed theirs up. Still, Pharaoh's heart was hard.", "Then came the first plague. Aaron stretched out his staff, and the water of the Nile turned to blood. The fish died, the river smelled, and the Egyptians could not drink the water, but Pharaoh still would not listen."],
        questions: [
          Q("What happened to the magicians' staffs?", ["They broke", "They turned to gold", "They flew away", "Aaron's staff swallowed them up"], 3, "Verse 12 says Aaron's staff swallowed up their staffs. It showed God's power was greater than the magicians' tricks.", "Verse 12."),
          Q("What was the first plague?", ["The Nile turned to blood", "Frogs", "Darkness", "Hail"], 0, "Verses 20-21 say the water of the Nile turned into blood. A plague is a disaster sent as a judgment. This was the first of ten.", "Verses 20-21."),
          Q("What did the Egyptians do for water?", ["They bought it from Israel", "They drank the river anyway", "They dug along the Nile to find drinking water", "They moved to Midian"], 2, "Verse 24 says all the Egyptians dug along the Nile to get drinking water, because they could not drink the river water.", "Verse 24.")
        ],
        reflect: "Pharaoh saw God's power but still would not listen. Why is it important to have a soft heart that listens to God?" },
      { title: 'Frogs everywhere', refs: [{ book: 'Exodus', ch: 8, from: 1, to: 15 }],
        retell: ["God sent the second plague: frogs came up out of the water and covered Egypt, even in people's beds and ovens. Pharaoh begged Moses to pray for the frogs to go away and promised to let the people go.", "Moses let Pharaoh pick the time, and Pharaoh said tomorrow. Moses agreed, so that Pharaoh would know there is no one like the LORD. The frogs died and were piled in smelly heaps, but once Pharaoh felt relief, he hardened his heart again. More plagues followed: gnats, flies, sick livestock, boils, hail, locusts, and darkness."],
        questions: [
          Q("Where did the frogs go?", ["Only in the river", "Only in the fields", "Into the temple", "Into the palace, bedrooms, beds, ovens, and kneading troughs"], 3, "Verse 3 says the frogs would come into the palace, the bedroom, the bed, the houses, the ovens, and the kneading troughs. They were everywhere!", "Verse 3."),
          Q("When did Pharaoh ask for the frogs to be gone?", ["Right now", "Tomorrow", "Next week", "Never"], 1, "Verse 10 says Pharaoh answered tomorrow. Moses agreed so that Pharaoh would know there is no one like the LORD.", "Verse 10."),
          Q("What did Pharaoh do when the frogs were gone?", ["He let the people go", "He thanked God", "He hardened his heart and would not listen", "He gave Moses a reward"], 2, "Verse 15 says when Pharaoh saw there was relief, he hardened his heart. He broke his promise as soon as the trouble ended.", "Verse 15.")
        ],
        reflect: "Pharaoh made a promise in trouble and broke it once things got better. Why is it important to keep promises to God even when life is easy?" },
      { title: 'The Passover lamb', refs: [{ book: 'Exodus', ch: 12, from: 1, to: 14 }],
        retell: ["God gave instructions for the night of the last plague. Each family was to choose a perfect year-old lamb, put some of its blood on the sides and top of their doorframe, and eat the roasted meat with bitter herbs and bread made without yeast.", "They were to eat dressed and ready to travel. That night God would strike down the firstborn in Egypt, but when he saw the blood on a house, he would pass over it. Israel was to remember this Passover every year."],
        questions: [
          Q("What kind of lamb did each family need?", ["A year-old male without defect", "Any lamb", "A black lamb", "The smallest lamb"], 0, "Verse 5 says the animals had to be year-old males without defect. Without defect means perfect, with nothing wrong.", "Verse 5."),
          Q("Where did they put the lamb's blood?", ["On their clothes", "In the river", "On the roof", "On the sides and tops of the doorframes"], 3, "Verse 7 says they put the blood on the sides and tops of the doorframes of their houses. It was a sign of who trusted God.", "Verse 7."),
          Q("How were they told to eat the meal?", ["Slowly, lying down", "Dressed and ready to go, eating in haste", "Alone", "In the morning"], 1, "Verse 11 says they ate with cloaks tucked in, sandals on, and staff in hand, eating in haste. In haste means quickly. They were ready to leave Egypt.", "Verse 11.")
        ],
        reflect: "God's people were saved because of the lamb's blood. How does the Passover help you understand why Jesus is called the Lamb of God?" },
      { title: 'Freedom at midnight', refs: [{ book: 'Exodus', ch: 12, from: 21, to: 36 }],
        retell: ["Moses told the elders what to do, and that their children would someday ask what the Passover means. The people bowed down and worshiped, and they did just what the LORD commanded.", "At midnight the LORD struck down the firstborn of Egypt, and there was loud crying in every Egyptian house. Pharaoh called Moses and Aaron in the night and told them to leave. The Israelites left so quickly that their bread dough had no time to rise, and the Egyptians gave them silver, gold, and clothing."],
        questions: [
          Q("What would children ask about the Passover?", ["What does this ceremony mean?", "When is dinner?", "Where is Moses?", "Why is it dark?"], 0, "Verse 26 says when children ask what the ceremony means, parents would explain how God passed over their houses. Passover was a way to teach the next generation.", "Verses 26-27."),
          Q("When did Pharaoh tell Moses and Aaron to leave?", ["The next week", "At noon", "During the night", "After the harvest"], 2, "Verse 31 says Pharaoh summoned Moses and Aaron during the night and told them to leave. After ten plagues, he finally gave in.", "Verse 31."),
          Q("Why was their bread made without yeast?", ["They did not like yeast", "They left in such a hurry that the dough had no time to rise", "Moses forgot it", "Yeast was too expensive"], 1, "Verse 34 says they took their dough before the yeast was added, because they were driven out of Egypt and had no time. Bread without yeast is still eaten at Passover to remember this.", "Verse 34.")
        ],
        reflect: "Parents were supposed to tell their children what God had done. What is a story of God's goodness you could ask your parents to tell you?" }
    ]
  });

  // ============================== WEEK 16 ==============================
  C.unit('bible', 16, {
    theme: 'Crossing the Red Sea; manna in the wilderness',
    verse: { ref: 'Exodus 14:14', why: "At the Red Sea God fought for his people when they could do nothing, and this verse reminds us to be still and trust him." },
    days: [
      { title: 'Trapped by the sea', refs: [{ book: 'Exodus', ch: 14, from: 1, to: 14 }],
        retell: ["After the Israelites left, Pharaoh changed his mind and chased them with six hundred of his best chariots and the rest of his army. The Israelites were camped by the sea, and when they saw the Egyptians coming, they were terrified.", "They complained to Moses that it would have been better to stay slaves in Egypt. Moses told them not to be afraid but to stand firm and watch the LORD rescue them. The LORD would fight for them, and they only needed to be still."],
        questions: [
          Q("How many of his best chariots did Pharaoh take?", ["Sixty", "Three hundred", "Six hundred", "Ten thousand"], 2, "Verse 7 says Pharaoh took six hundred of the best chariots, along with all the other chariots of Egypt. It was a frightening army.", "Verse 7."),
          Q("What did the Israelites say to Moses when they saw the Egyptians?", ["Let's fight them", "Let's swim across", "Thank you for bringing us here", "It would have been better to serve the Egyptians than die in the desert"], 3, "Verses 11-12 show the people complaining that it would have been better to serve the Egyptians. Fear made them forget all God had just done.", "Verses 11-12."),
          Q("What did Moses tell the people to do?", ["Stand firm, do not be afraid, and be still because the LORD would fight for them", "Run away", "Build boats", "Go back to Egypt"], 0, "Verses 13-14 say Moses told them not to be afraid, to stand firm, and that the LORD would fight for them; they needed only to be still.", "Verses 13-14.")
        ],
        reflect: "The Israelites panicked when they felt trapped. What is something that makes you feel stuck, and how could you be still and trust God with it?" },
      { title: 'A path through the water', refs: [{ book: 'Exodus', ch: 14, from: 15, to: 31 }],
        retell: ["The pillar of cloud moved behind the Israelites, giving light to them and darkness to the Egyptians. Moses stretched out his hand, and all night the LORD pushed the sea back with a strong east wind, making dry ground.", "The Israelites walked through on dry land with walls of water on both sides. When the Egyptians followed, God jammed their chariot wheels. Moses stretched out his hand again, the water came back, and the Egyptian army was swept away. The people saw God's power and put their trust in him."],
        questions: [
          Q("What did the pillar of cloud do?", ["It disappeared", "It rained on Israel", "It moved behind Israel and stood between the two camps", "It went to Egypt"], 2, "Verses 19-20 say the pillar of cloud moved from in front to behind them, coming between the armies of Egypt and Israel. God protected his people all night.", "Verses 19-20."),
          Q("What did the LORD use to drive the sea back?", ["An earthquake", "A giant rock", "Fire from heaven", "A strong east wind all night"], 3, "Verse 21 says the LORD drove the sea back with a strong east wind all that night and turned it into dry land.", "Verse 21."),
          Q("What happened to the Egyptians' chariots?", ["They flew", "God jammed their wheels so they could hardly drive", "They turned into snakes", "They got there first"], 1, "Verse 25 says God jammed the wheels of their chariots so they had difficulty driving. The Egyptians realized the LORD was fighting for Israel.", "Verse 25.")
        ],
        reflect: "God made a way where there seemed to be no way. Write a prayer thanking God for a time he made a way for you or your family." },
      { title: 'A song and bitter water', refs: [{ book: 'Exodus', ch: 15, from: 1, to: 2 }, { book: 'Exodus', ch: 15, from: 19, to: 27 }],
        retell: ["Moses and the Israelites sang a song to the LORD for saving them. Miriam, Aaron's sister, took a tambourine and led the women in dancing and singing praise.", "Three days later they found only bitter water at a place called Marah, and the people grumbled. Moses cried out to the LORD, who showed him a piece of wood to throw in the water, and the water became fit to drink. God said he is the LORD who heals, and then he led them to Elim, where there were twelve springs and seventy palm trees."],
        questions: [
          Q("Who led the women in singing and dancing?", ["Sarah", "Zipporah", "Miriam", "Rebekah"], 2, "Verse 20 says Miriam the prophet, Aaron's sister, took a timbrel and the women followed her with timbrels and dancing. A timbrel is like a tambourine.", "Verse 20."),
          Q("What was wrong with the water at Marah?", ["It was bitter", "It was frozen", "It was too deep", "There was a lion there"], 0, "Verse 23 says they could not drink the water of Marah because it was bitter. The name Marah means bitter.", "Verse 23."),
          Q("What did they find at Elim?", ["A city", "Manna", "A giant", "Twelve springs and seventy palm trees"], 3, "Verse 27 says at Elim there were twelve springs and seventy palm trees, and they camped there near the water. God led them from bitter water to plenty.", "Verse 27.")
        ],
        reflect: "The people went from singing to grumbling in three days. What can help you remember to thank God instead of complain?" },
      { title: 'Quail and manna', refs: [{ book: 'Exodus', ch: 16, from: 1, to: 15 }],
        retell: ["In the desert the whole community grumbled that they would starve, and they said they wished they had stayed in Egypt with pots of meat. God heard and said he would rain down bread from heaven.", "That evening quail covered the camp, and in the morning thin flakes like frost were on the ground. The people asked what it was, and Moses told them it was the bread the LORD had given them to eat."],
        questions: [
          Q("What did the people complain about in the desert?", ["The heat", "That they would starve to death", "That Moses walked too fast", "That the cloud was too dark"], 1, "Verse 3 says they wished they had died in Egypt where they ate all the food they wanted, and said Moses brought them out to starve.", "Verse 3."),
          Q("What came and covered the camp in the evening?", ["Quail", "Locusts", "Frogs", "Snow"], 0, "Verse 13 says that evening quail came and covered the camp. Quail are small birds that God gave them for meat.", "Verse 13."),
          Q("How often were they to gather the bread?", ["Once a month", "Once a week", "Each day, enough for that day", "Whenever they wanted, as much as they wanted"], 2, "Verse 4 says the people were to go out each day and gather enough for that day. God was teaching them to trust him daily.", "Verse 4.")
        ],
        reflect: "God gave his people bread one day at a time. What does it mean to trust God for what you need today?" },
      { title: 'Manna and the Sabbath', refs: [{ book: 'Exodus', ch: 16, from: 16, to: 31 }],
        retell: ["Everyone gathered as much as they needed, and somehow no one had too much or too little. Some people disobeyed and saved manna overnight, and it got full of maggots and smelled.", "On the sixth day they gathered twice as much, and that manna stayed fresh for the Sabbath, a day of rest. The people called the bread manna. It was white like coriander seed and tasted like wafers made with honey."],
        questions: [
          Q("What happened to manna kept until morning on a regular day?", ["It turned to gold", "It got maggots and began to smell", "It grew bigger", "It stayed fresh"], 1, "Verse 20 says some kept it until morning, and it was full of maggots and began to smell. They did not trust God to provide again the next day.", "Verse 20."),
          Q("How much did they gather on the sixth day?", ["None", "Half as much", "Twice as much", "Ten times as much"], 2, "Verse 22 says on the sixth day they gathered twice as much, two omers for each person, so they could rest on the seventh day. An omer was the amount each person needed for one day.", "Verse 22."),
          Q("What did manna taste like?", ["Salty fish", "Bitter herbs", "Lemons", "Wafers made with honey"], 3, "Verse 31 says it was white like coriander seed and tasted like wafers made with honey. Coriander seeds are tiny seeds used as a spice.", "Verse 31.")
        ],
        reflect: "God gave his people a day of rest every week. How can you make your Sunday a day to rest and remember God?" }
    ]
  });

  // ============================== WEEK 17 ==============================
  C.unit('bible', 17, {
    theme: 'The Ten Commandments',
    verse: { ref: 'Matthew 22:37', why: "Jesus said the greatest commandment is to love God with all your heart, soul, and mind, and that love is the heart of all of God's laws." },
    days: [
      { title: "God's treasured people", refs: [{ book: 'Exodus', ch: 19, from: 1, to: 8 }],
        retell: ["In the third month after leaving Egypt, the Israelites camped in front of Mount Sinai. God reminded them that he had carried them like on eagles' wings and brought them to himself.", "God said that if they obeyed him and kept his covenant, they would be his treasured possession, a kingdom of priests and a holy nation. All the people answered together that they would do everything the LORD said."],
        questions: [
          Q("Where did the Israelites camp?", ["In front of Mount Sinai", "By the Nile", "At Jericho", "In Midian's city"], 0, "Verses 1-2 say they came to the Desert of Sinai and camped there in front of the mountain. This is the same mountain where Moses saw the burning bush (also called Horeb).", "Verses 1-2."),
          Q("What picture did God use for how he brought them out of Egypt?", ["A ship on the sea", "A shepherd with a staff", "Carrying them on eagles' wings", "A father building a house"], 2, "Verse 4 says God carried them on eagles' wings and brought them to himself. It shows God's strong, caring rescue.", "Verse 4."),
          Q("What would Israel be if they kept God's covenant?", ["The richest nation", "A great army", "Rulers of Egypt", "His treasured possession"], 3, "Verse 5 says they would be his treasured possession. Treasured means very precious and valued.", "Verse 5.")
        ],
        reflect: "God called his people his treasured possession. How does it feel to know you are precious to God?" },
      { title: 'God comes down on the mountain', refs: [{ book: 'Exodus', ch: 19, from: 9, to: 20 }],
        retell: ["God told Moses to get the people ready for three days. They washed their clothes, and Moses set limits around the mountain so no one would touch it.", "On the third day there was thunder, lightning, a thick cloud, and a very loud trumpet blast, and everyone trembled. Mount Sinai was covered in smoke because the LORD came down on it in fire, and the whole mountain shook. Then God called Moses up to the top."],
        questions: [
          Q("What did the people do to get ready?", ["Built a tower", "Washed their clothes", "Made gold idols", "Climbed the mountain"], 1, "Verses 10 and 14 say the people were consecrated and washed their clothes. Consecrate means to make yourself ready and set apart for God.", "Verses 10 and 14."),
          Q("What happened on the morning of the third day?", ["It snowed", "A rainbow appeared", "Thunder, lightning, a thick cloud, and a loud trumpet blast", "Everything was silent"], 2, "Verse 16 describes thunder and lightning, a thick cloud, and a very loud trumpet blast. Everyone in the camp trembled.", "Verse 16."),
          Q("Why was Mount Sinai covered with smoke?", ["The LORD descended on it in fire", "A forest fire", "A volcano erupted on its own", "The people burned offerings"], 0, "Verse 18 says Mount Sinai was covered with smoke because the LORD descended on it in fire. God's holiness is powerful and awesome.", "Verse 18.")
        ],
        reflect: "The people prepared carefully to meet God. How can you get your heart ready when you go to church or pray?" },
      { title: 'Love God first', refs: [{ book: 'Exodus', ch: 20, from: 1, to: 11 }],
        retell: ["God began by reminding the people who he is: the LORD their God who brought them out of slavery. Then he gave his commands, starting with how to love him.", "Have no other gods but him. Do not make idols or bow down to them. Do not misuse God's name. Remember the Sabbath and keep it holy, because God made everything in six days and rested on the seventh."],
        questions: [
          Q("What did God say about himself before giving the commandments?", ["That he was angry", "That he was tired", "That they had to earn his love", "That he was the LORD who brought them out of Egypt, out of slavery"], 3, "Verse 2 reminds them that God rescued them first. The commandments are a way to live as people God has already saved, not a way to earn his love.", "Verse 2."),
          Q("What does the second commandment forbid?", ["Working on Sunday", "Making idols and bowing down to them", "Telling lies", "Stealing"], 1, "Verses 4-5 say not to make an image (an idol) or bow down to worship it. Only the true God should be worshiped.", "Verses 4-5."),
          Q("Why does God give the Sabbath, according to verse 11?", ["Because in six days he made everything and rested on the seventh", "Because people are lazy", "Because Pharaoh said so", "Because of the manna"], 0, "Verse 11 says in six days the LORD made the heavens, earth, and sea, and rested on the seventh day. This connects back to Genesis 2.", "Verse 11.")
        ],
        reflect: "The first commandment is to have no other gods. What are some things that could become more important to people than God?" },
      { title: 'Loving other people', refs: [{ book: 'Exodus', ch: 20, from: 12, to: 17 }],
        retell: ["The rest of the commandments are about how to treat other people: honor your father and mother, do not murder, be faithful in marriage, and do not steal.", "Do not tell lies about others. And do not covet, which means wanting something that belongs to someone else so badly that you are not content with what God has given you."],
        questions: [
          Q("Which commandment comes with a promise of long life in the land?", ["Do not steal", "Do not murder", "Respect and honor your parents", "Do not covet"], 2, "Verse 12 says to honor your father and mother so that you may live long in the land. Honor means to respect, listen to, and value.", "Verse 12."),
          Q("What does it mean to covet?", ["To share", "To want what belongs to someone else", "To work hard", "To give thanks"], 1, "Verse 17 lists things not to covet, like a neighbor's house or animals. Coveting starts in the heart, before anyone does anything.", "Verse 17."),
          Q("Which commandment is about telling the truth?", ["Do not steal", "Keep the Sabbath", "Obey the king", "Do not tell lies about other people"], 3, "Verse 16 says not to give false testimony against your neighbor. False testimony means saying untrue things about someone.", "Verse 16.")
        ],
        reflect: "Which of these commandments is hardest for you to keep? Write a short prayer asking God to help you." },
      { title: 'The greatest commandment', refs: [{ book: 'Exodus', ch: 20, from: 18, to: 21 }, { book: 'Matthew', ch: 22, from: 34, to: 40 }],
        retell: ["When the people saw the thunder and smoke, they trembled and stayed far away. Moses told them not to be afraid, because God was testing them so they would respect him and not sin.", "Many years later, someone asked Jesus which commandment is the greatest. Jesus said to love the Lord your God with all your heart, soul, and mind, and the second is to love your neighbor as yourself. All of God's law hangs on these two."],
        questions: [
          Q("What did the people ask Moses to do?", ["Speak to them himself instead of having God speak", "Leave", "Build an altar", "Climb faster"], 0, "Exodus 20:19 says they asked Moses to speak to them himself, because they were afraid that if God spoke to them they would die.", "Exodus 20:19."),
          Q("What did Jesus say is the first and greatest commandment?", ["Keep the Sabbath", "Do not steal", "Love God with all your heart, soul, and mind", "Give to the poor"], 2, "Matthew 22:37-38 says to love the Lord your God with all your heart, soul, and mind. This is the first and greatest commandment.", "Matthew 22:37-38."),
          Q("What is the second commandment Jesus named?", ["Honor the king", "Wash your hands", "Pray three times a day", "Love other people as much as you love yourself"], 3, "Matthew 22:39 says the second is like it: love your neighbor as yourself. The Ten Commandments fit inside these two: loving God and loving people.", "Matthew 22:39.")
        ],
        reflect: "Jesus summed up the law as loving God and loving others. What is one way you can do each one tomorrow?" }
    ]
  });

  // ============================== WEEK 18 ==============================
  C.unit('bible', 18, {
    theme: "The golden calf and God's mercy",
    verse: { ref: 'Exodus 34:6', why: "Right after his people sinned, God described himself as compassionate, gracious, slow to anger, and full of love, and that is still who he is." },
    days: [
      { title: 'A calf of gold', refs: [{ book: 'Exodus', ch: 32, from: 1, to: 10 }],
        retell: ["Moses stayed on the mountain so long that the people got impatient. They asked Aaron to make them gods, so he collected their gold earrings and made a golden calf. The people said this idol had brought them out of Egypt and held a wild party.", "God told Moses that the people had quickly turned away and become corrupt. God was very angry and said he would destroy them and start over with Moses."],
        questions: [
          Q("Why did the people ask Aaron to make gods?", ["They were bored", "Moses was so long in coming down from the mountain", "Pharaoh told them to", "They found gold"], 1, "Verse 1 says the people saw that Moses was so long in coming down. Impatience led them to do something terrible.", "Verse 1."),
          Q("What did Aaron make the idol from?", ["Wood", "Stone", "Gold earrings", "Clay"], 2, "Verses 2-4 say Aaron told them to bring their gold earrings, and he made an idol cast in the shape of a calf.", "Verses 2-4."),
          Q("How did God describe the people in verse 9?", ["Stiff-necked", "Brave", "Wise", "Faithful"], 0, "Verse 9 says they were a stiff-necked people. That means stubborn, like an animal that will not turn its neck where its owner leads it.", "Verse 9.")
        ],
        reflect: "The people got impatient and stopped trusting God. What do you do when you have to wait a long time?" },
      { title: 'Moses prays for the people', refs: [{ book: 'Exodus', ch: 32, from: 11, to: 20 }],
        retell: ["Moses begged God not to destroy the people. He reminded God of his promises to Abraham, Isaac, and Israel, and the LORD relented, which means he chose not to bring the disaster.", "Moses came down carrying the two stone tablets God had written on. When he saw the calf and the dancing, he was so angry he threw the tablets down and broke them. He burned the calf and ground it into powder."],
        questions: [
          Q("What did Moses remind God of when he prayed?", ["How hard Moses had worked", "How rich Egypt was", "The plagues", "His promises to Abraham, Isaac, and Israel"], 3, "Verse 13 says Moses asked God to remember his servants Abraham, Isaac, and Israel and his promise to make their descendants as many as the stars.", "Verse 13."),
          Q("What did the LORD do after Moses prayed?", ["He destroyed the people", "He relented and did not bring the disaster", "He left them", "He made Moses king"], 1, "Verse 14 says the LORD relented and did not bring on his people the disaster he had threatened. Moses' prayer for others mattered.", "Verse 14."),
          Q("What did Moses do with the tablets when he saw the calf?", ["He threw them down and broke them", "He hid them", "He gave them to Aaron", "He read them aloud"], 0, "Verse 19 says Moses' anger burned and he threw the tablets out of his hands, breaking them at the foot of the mountain. The people had already broken God's law.", "Verse 19.")
        ],
        reflect: "Moses prayed for people who had done wrong. Who is someone you could pray for this week, even if they have made bad choices?" },
      { title: 'Excuses and a costly prayer', refs: [{ book: 'Exodus', ch: 32, from: 21, to: 24 }, { book: 'Exodus', ch: 32, from: 30, to: 35 }],
        retell: ["Moses asked Aaron why he had led the people into such great sin. Aaron blamed the people and said he just threw the gold into the fire and out came this calf!", "The next day Moses told the people they had sinned greatly and went back up to pray for them. He even asked God to blot him out of God's book if God would not forgive them. God said each person is responsible for his own sin, and he told Moses to keep leading the people."],
        questions: [
          Q("Who did Aaron blame for the golden calf?", ["Moses", "Pharaoh", "The people", "Joshua"], 2, "In verses 22-23 Aaron said Moses knew how prone the people were to evil, and that they asked him to make gods. He blamed the people instead of admitting what he did.", "Verses 22-23."),
          Q("What silly excuse did Aaron give in verse 24?", ["The calf fell from the sky", "He threw the gold into the fire and out came the calf", "Someone else made it", "It was an accident in the dark"], 1, "Verse 24 shows Aaron saying he threw the gold in the fire and out came the calf, as if it made itself. But verse 4 says Aaron shaped it with a tool!", "Compare verse 4 and verse 24."),
          Q("What did Moses ask God in verse 32?", ["To give him a reward", "To send them back to Egypt", "To make a new calf", "To forgive the people, or else blot Moses out of his book"], 3, "In verse 32 Moses asked God to forgive their sin, and if not, to blot him out of the book God had written. Moses loved the people enough to put himself on the line.", "Verse 32.")
        ],
        reflect: "Aaron made excuses instead of saying sorry. What is a better way to answer when you are asked about something you did wrong?" },
      { title: "Moses sees God's goodness", refs: [{ book: 'Exodus', ch: 33, from: 7, to: 23 }],
        retell: ["Moses set up a tent outside the camp where he met with God, and the LORD would speak with him face to face, as a friend. Moses said he did not want to go anywhere unless God's Presence went with them, and God promised it would.", "Then Moses asked to see God's glory. God said he would make his goodness pass in front of Moses, but no one could see God's face and live. He would hide Moses in a gap in the rock and cover him with his hand as he passed by."],
        questions: [
          Q("How does verse 11 describe the way God spoke with Moses?", ["Face to face, as one speaks to a friend", "Through a messenger", "Only in dreams", "By writing on a wall"], 0, "Verse 11 says the LORD would speak to Moses face to face, as one speaks to a friend. Moses had a close friendship with God.", "Verse 11."),
          Q("What did God promise Moses in verse 14?", ["Gold and silver", "A new army", "That his Presence would go with Moses and give him rest", "A palace"], 2, "Verse 14 says God's Presence would go with him and he would give him rest. The most important thing was having God with them.", "Verse 14."),
          Q("Where did God put Moses when his glory passed by?", ["In a cave of lions", "On top of the tent", "In the river", "In a cleft in the rock, covered with God's hand"], 3, "Verse 22 says God would put Moses in a cleft in the rock and cover him with his hand. A cleft is a crack or gap in rock.", "Verse 22.")
        ],
        reflect: "Moses wanted God's Presence more than anything else. What does it mean to you that God wants to be with you?" },
      { title: 'New tablets and a shining face', refs: [{ book: 'Exodus', ch: 34, from: 1, to: 10 }, { book: 'Exodus', ch: 34, from: 29, to: 35 }],
        retell: ["God told Moses to cut two new stone tablets, and God would write his words on them again. When Moses went up, the LORD passed in front of him and proclaimed that he is compassionate and gracious, slow to anger, full of love and faithfulness, and forgiving.", "Moses bowed and worshiped. When he came down the mountain, his face was shining because he had been speaking with the LORD, so he put a veil over his face when he talked with the people."],
        questions: [
          Q("What did God tell Moses to make in verse 1?", ["A new calf", "Two stone tablets like the first ones", "A boat", "A tent"], 1, "Verse 1 says to chisel out two stone tablets like the first ones. God was giving his people a fresh start.", "Verse 1."),
          Q("Which words describe God in verse 6?", ["Harsh and quick to anger", "Distant and quiet", "Compassionate, gracious, slow to anger, abounding in love", "Tired and busy"], 2, "Verse 6 describes the LORD as compassionate and gracious, slow to anger, abounding in love and faithfulness. Right after the people's sin, God showed mercy.", "Verse 6."),
          Q("Why was Moses' face shining?", ["He had spoken with the LORD", "The sun was bright", "He was wearing gold", "He was holding a lamp"], 0, "Verse 29 says his face was radiant because he had spoken with the LORD. Radiant means shining with light.", "Verse 29.")
        ],
        reflect: "God gave his people a second chance. How does it feel to know God is slow to anger and quick to forgive?" }
    ]
  });

  // ============================== WEEK 19 ==============================
  C.unit('bible', 19, {
    theme: 'Joshua and the walls of Jericho',
    verse: { ref: 'Joshua 1:9', why: "God told Joshua to be strong and courageous because the LORD would be with him wherever he went, and that promise gives us courage too." },
    days: [
      { title: 'Joshua takes the lead', refs: [{ book: 'Joshua', ch: 1, from: 1, to: 9 }],
        retell: ["After Moses died, God chose Joshua to lead Israel across the Jordan River into the promised land. God promised that just as he had been with Moses, he would be with Joshua and never leave him.", "Again and again, God told Joshua to be strong and courageous. He told Joshua to obey God's law and think about it day and night, and not to be afraid, because the LORD would be with him wherever he went."],
        questions: [
          Q("Who led Israel after Moses died?", ["Aaron", "Caleb", "Gideon", "Joshua"], 3, "Verses 1-2 say the LORD spoke to Joshua son of Nun, Moses' aide, and told him to lead the people across the Jordan.", "Verses 1-2."),
          Q("What did God promise Joshua in verse 5?", ["He would be rich", "That he would never leave or abandon Joshua", "He would never have to fight", "He would live forever"], 1, "Verse 5 says God would be with Joshua as he was with Moses, and would never leave him nor forsake him. Forsake means to abandon.", "Verse 5."),
          Q("What did God tell Joshua to do with the Book of the Law?", ["Keep it on his lips and meditate on it day and night", "Hide it", "Give it to the priests only", "Read it once a year"], 0, "Verse 8 says to keep the Book of the Law always on his lips and meditate on it day and night so he could obey it. God's Word gives courage.", "Verse 8.")
        ],
        reflect: "God told Joshua three times to be strong and courageous. What is something you need courage for right now?" },
      { title: 'Rahab hides the spies', refs: [{ book: 'Joshua', ch: 2, from: 1, to: 21 }],
        retell: ["Joshua secretly sent two spies to look at the city of Jericho. They stayed at the house of a woman named Rahab, and when the king sent men to catch them, she hid them under stalks of flax on her roof.", "Rahab said she knew the LORD had given Israel the land, because everyone had heard how he dried up the Red Sea. She said the LORD is God in heaven and on earth, and asked them to save her family. The spies told her to tie a scarlet cord in her window, and she let them down by a rope."],
        questions: [
          Q("Where did Rahab hide the spies?", ["In a well", "In the king's palace", "Under stalks of flax on her roof", "In the city gate"], 2, "Verse 6 says she took them up to the roof and hid them under stalks of flax. Flax is a plant used to make linen cloth.", "Verse 6."),
          Q("What had Rahab and her people heard about the LORD?", ["That he was weak", "That he dried up the water of the Red Sea", "That he lived in Egypt", "Nothing at all"], 1, "Verse 10 says they had heard how the LORD dried up the water of the Red Sea. God's mighty acts were known far and wide.", "Verse 10."),
          Q("What sign was Rahab to put in her window?", ["A lamp", "A white flag", "A basket", "A scarlet cord"], 3, "Verse 18 says to tie a scarlet cord in the window. Scarlet means bright red. It would mark her house so her family would be saved.", "Verse 18.")
        ],
        reflect: "Rahab believed in God before she ever saw his people win. What helps you believe in God when you cannot see how things will turn out?" },
      { title: 'Crossing the Jordan', refs: [{ book: 'Joshua', ch: 3, from: 5, to: 17 }],
        retell: ["The Jordan River was at flood stage, overflowing its banks. God told the priests to carry the ark of the covenant into the river ahead of the people.", "As soon as the priests' feet touched the water, the river stopped flowing and piled up in a heap far upstream. The priests stood on dry ground in the middle of the Jordan while the whole nation crossed over on dry ground."],
        questions: [
          Q("Who carried the ark into the river first?", ["The priests", "The soldiers", "Joshua alone", "The children"], 0, "Verses 6 and 8 say the priests carried the ark of the covenant ahead of the people and stood in the river. The ark was the holy chest that reminded Israel God was with them.", "Verses 6 and 8."),
          Q("What was the river like at that time?", ["Dried up", "Frozen", "At flood stage", "Very shallow"], 2, "Verse 15 says the Jordan is at flood stage all during harvest. Crossing it would have seemed impossible.", "Verse 15."),
          Q("When did the water stop flowing?", ["After a week of waiting", "When Joshua shouted", "When the spies returned", "As soon as the priests' feet touched the water"], 3, "Verses 15-16 say as soon as the priests' feet touched the water's edge, the water from upstream stopped flowing. They had to step out in faith first.", "Verses 15-16.")
        ],
        reflect: "The priests had to step into the water before it stopped. What is a step of faith you could take this week?" },
      { title: 'Twelve stones to remember', refs: [{ book: 'Joshua', ch: 4, from: 1, to: 8 }, { book: 'Joshua', ch: 4, from: 19, to: 24 }],
        retell: ["God told Joshua to choose twelve men, one from each tribe, to carry twelve stones from the middle of the Jordan. Joshua set them up at Gilgal as a memorial, something that helps people remember.", "Joshua said that when children in the future asked what the stones meant, parents should tell them how God dried up the Jordan just as he dried up the Red Sea. That way everyone would know the LORD's hand is powerful."],
        questions: [
          Q("How many stones were taken from the Jordan?", ["Seven", "Ten", "Twelve", "Forty"], 2, "Verses 2-3 say twelve men, one from each tribe, took twelve stones from the middle of the Jordan. There were twelve tribes of Israel.", "Verses 2-3."),
          Q("Where did Joshua set up the stones?", ["Jericho", "Gilgal", "Egypt", "Mount Sinai"], 1, "Verses 19-20 say the people camped at Gilgal and Joshua set up the twelve stones there.", "Verses 19-20."),
          Q("Why were the stones set up?", ["To build a house", "To mark a border", "So children would ask and learn what God had done", "To make a wall"], 2, "Verses 21-24 say that when children ask, parents would tell how God dried up the Jordan, so all the earth would know the LORD's hand is powerful.", "Verses 21-24.")
        ],
        reflect: "The stones helped people remember God's help. What could you keep or make to remember something God has done for you?" },
      { title: 'The walls fall down', refs: [{ book: 'Joshua', ch: 6, from: 1, to: 5 }, { book: 'Joshua', ch: 6, from: 12, to: 20 }, { book: 'Joshua', ch: 6, from: 22, to: 25 }],
        retell: ["Jericho was shut tight. God told Joshua to have the army march around the city once a day for six days, with seven priests blowing rams' horn trumpets in front of the ark. On the seventh day they were to march around seven times.", "On the seventh day, after the seventh time around, the priests blew the trumpets, the people gave a loud shout, and the wall collapsed. The spies kept their promise and brought out Rahab and her whole family safely."],
        questions: [
          Q("How many times did they march around the city on the seventh day?", ["Once", "Three times", "Seven times", "Twelve times"], 2, "Verse 15 says on the seventh day they marched around the city seven times. On the other days they went around once.", "Verse 15."),
          Q("What made the wall fall?", ["God, when the trumpets sounded and the people shouted", "Battering rams", "An earthquake they planned", "Soldiers climbing it"], 0, "Verse 20 says when the trumpets sounded and the men gave a loud shout, the wall collapsed. It was God's victory, won by obeying his strange plan.", "Verse 20."),
          Q("Who was saved from Jericho?", ["The king", "No one", "The soldiers", "Rahab and her family"], 3, "Verses 22-25 say Rahab, her family, and all who belonged to her were brought out and spared. Later, Rahab even became part of Jesus' family line (Matthew 1:5).", "Verses 22-25.")
        ],
        reflect: "God's plan for Jericho seemed strange, but it worked. Why is it wise to obey God even when his way does not make sense to us?" }
    ]
  });

  // ============================== WEEK 20 ==============================
  C.unit('bible', 20, {
    theme: "Easter: Jesus' last supper, death, and resurrection",
    verse: { ref: 'John 3:16', why: "This Easter week we remember that God loved the world so much that he gave his Son, so everyone who believes in him can have eternal life." },
    days: [
      { title: 'The Last Supper', refs: [{ book: 'Luke', ch: 22, from: 7, to: 20 }],
        retell: ["It was time for the Passover meal, so Jesus sent Peter and John to get it ready in a large upstairs room. Everything was just as Jesus had told them.", "At the meal, Jesus told his apostles he had looked forward to eating this Passover with them before he suffered. He took bread, gave thanks, broke it, and said it was his body given for them, and that they should do this to remember him. Then he gave them the cup and said it was the new covenant in his blood, poured out for them."],
        questions: [
          Q("Which two disciples did Jesus send to prepare the Passover?", ["James and John", "Peter and John", "Andrew and Philip", "Thomas and Judas"], 1, "Verse 8 says Jesus sent Peter and John to make preparations for them to eat the Passover.", "Verse 8."),
          Q("Where did they eat the meal?", ["In a large upstairs room", "In the temple", "On a boat", "On a hillside"], 0, "Verse 12 says the owner would show them a large room upstairs, all furnished. Many people call this the upper room.", "Verse 12."),
          Q("What did Jesus say the bread was?", ["Manna from heaven", "A gift for the poor", "His body given for them", "Bread for the journey"], 2, "Verse 19 says Jesus called the bread his body given for them, and told them to do this in remembrance of him. Christians remember this whenever they take communion.", "Verse 19.")
        ],
        reflect: "Jesus asked his followers to remember him with bread and the cup. What do you think about when your church takes communion?" },
      { title: 'Praying in the garden; Peter fails', refs: [{ book: 'Luke', ch: 22, from: 39, to: 46 }, { book: 'Luke', ch: 22, from: 54, to: 62 }],
        retell: ["Jesus went to the Mount of Olives and prayed that, if the Father was willing, he would take this suffering away, but that the Father's will would be done, not his own. He prayed so hard that his sweat was like drops of blood, while his disciples fell asleep.", "Jesus was arrested and taken to the high priest's house. Peter followed and sat by a fire, but three times he said he did not know Jesus. Just then a rooster crowed, Jesus turned and looked at Peter, and Peter went outside and cried bitterly."],
        questions: [
          Q("What did Jesus pray on the Mount of Olives?", ["That his disciples would fight", "That the Father's will would be done, not his own", "That he could go home", "That the soldiers would sleep"], 1, "Verse 42 shows Jesus asking the Father to take this cup if he was willing, yet saying not his will but the Father's be done. Jesus chose to obey even when it was very hard.", "Verse 42."),
          Q("Who came to strengthen Jesus as he prayed?", ["Peter", "His mother", "A priest", "An angel from heaven"], 3, "Verse 43 says an angel from heaven appeared to him and strengthened him.", "Verse 43."),
          Q("What happened right after Peter's third denial?", ["A rooster crowed and Jesus looked at Peter", "Peter ran to Jesus", "The fire went out", "Peter was arrested"], 0, "Verses 60-61 say a rooster crowed, the Lord turned and looked straight at Peter, and Peter remembered Jesus' words. Peter wept bitterly. Later Jesus forgave him and restored him.", "Verses 60-61.")
        ],
        reflect: "Peter failed, but Jesus still loved him. What does this tell you about how Jesus treats us when we fail?" },
      { title: 'Innocent, but condemned', refs: [{ book: 'Luke', ch: 23, from: 13, to: 25 }],
        retell: ["Pilate, the Roman governor, told the chief priests and the people that he found Jesus not guilty, and neither did King Herod. Pilate wanted to let Jesus go.", "But the crowd shouted for Pilate to release a man named Barabbas, who was in prison for rebellion and murder, and to crucify Jesus. Three times Pilate said Jesus had done nothing wrong, but the crowd kept shouting, so Pilate released Barabbas and handed Jesus over."],
        questions: [
          Q("What did Pilate say about Jesus?", ["He was guilty", "He was a king of Rome", "He found no basis for the charges against him", "He should be sent to Egypt"], 2, "Verse 14 says Pilate found no basis for their charges. Jesus was completely innocent.", "Verse 14."),
          Q("Who did the crowd want released?", ["Peter", "Herod", "Judas", "Barabbas"], 3, "Verse 18 says the crowd shouted for Barabbas to be released. Barabbas was guilty of rebellion and murder (verse 19).", "Verses 18-19."),
          Q("How many times did Pilate say Jesus was not guilty of a crime deserving death?", ["Once", "Twice", "Three times", "Seven times"], 2, "Verse 22 says for the third time Pilate asked what crime Jesus had committed. Jesus, the innocent one, was condemned so that a guilty man went free. That is a picture of what Jesus does for us.", "Verse 22.")
        ],
        reflect: "Barabbas went free because Jesus took his place. How does that help you understand what Jesus did for you?" },
      { title: 'The cross', refs: [{ book: 'Luke', ch: 23, from: 32, to: 49 }],
        retell: ["Jesus was crucified at a place called the Skull, between two criminals. Even on the cross, he asked his Father to forgive the people who were doing this.", "One criminal mocked Jesus, but the other said Jesus had done nothing wrong and asked Jesus to remember him. Jesus promised that today he would be with him in paradise. Darkness covered the land from noon until three, the temple curtain tore in two, and Jesus gave his spirit into his Father's hands and died. A Roman centurion said surely he was a righteous man."],
        questions: [
          Q("What did Jesus ask the Father to do for the people crucifying him?", ["Punish them", "Forgive them", "Stop them", "Forget them"], 1, "Verse 34 shows Jesus asking the Father to forgive them, because they did not know what they were doing. Jesus loved even his enemies.", "Verse 34."),
          Q("What did Jesus promise the criminal who asked to be remembered?", ["That he would be set free", "That he would be a king", "That he would be with Jesus in paradise that day", "Nothing"], 2, "Verse 43 shows Jesus promising that today he would be with him in paradise. Even at the very end, Jesus welcomed someone who turned to him.", "Verse 43."),
          Q("What happened to the curtain of the temple?", ["It was torn in two", "It caught fire", "It turned to gold", "It was taken away"], 0, "Verse 45 says the curtain of the temple was torn in two. That curtain separated people from the Most Holy Place. Christians see this as a sign that Jesus opened the way for us to come to God.", "Verse 45.")
        ],
        reflect: "Jesus forgave people even while he suffered. Write a prayer thanking Jesus for dying for you." },
      { title: 'The empty tomb', refs: [{ book: 'Luke', ch: 23, from: 50, to: 56 }, { book: 'Luke', ch: 24, from: 1, to: 12 }],
        retell: ["A good man named Joseph of Arimathea asked Pilate for Jesus' body, wrapped it in linen, and laid it in a new tomb cut in rock. The women who followed Jesus saw where he was laid, then rested on the Sabbath.", "Very early on Sunday, the first day of the week, the women brought spices to the tomb, but the stone was rolled away and Jesus' body was gone! Two men in shining clothes asked why they looked for the living among the dead, and said Jesus had risen, just as he told them. Peter ran to the tomb and saw only the strips of linen lying there."],
        questions: [
          Q("Who asked Pilate for Jesus' body?", ["Peter", "Nicodemus", "Mary", "Joseph of Arimathea"], 3, "Luke 23:50-52 says Joseph, a member of the Council from Arimathea, went to Pilate and asked for Jesus' body. He had not agreed with the Council's decision.", "Luke 23:50-52."),
          Q("What did the women find when they got to the tomb?", ["Soldiers sleeping", "The stone rolled away and the body gone", "Jesus sitting outside", "The tomb sealed shut"], 1, "Luke 24:2-3 says they found the stone rolled away, and when they entered, they did not find the body of the Lord Jesus.", "Luke 24:2-3."),
          Q("What did the two men in shining clothes tell the women?", ["He is not here; he has risen, just as he said", "Jesus was moved to another tomb", "Go back home and wait", "Look in Galilee for his body"], 0, "Luke 24:5-7 says they asked why the women looked for the living among the dead and told them Jesus had risen, reminding them of what he had said. This is the best news in the world!", "Luke 24:5-7.")
        ],
        reflect: "This Sunday is Easter! What does it mean to you that Jesus is alive? Write two sentences you could share with someone on Easter." }
    ]
  });

  // ============================== WEEK 21 ==============================
  C.unit('bible', 21, {
    theme: 'Deborah and Gideon',
    verse: { ref: '2 Corinthians 12:9', why: "Gideon felt weak and small, but God showed that his power works best through people who depend on him." },
    days: [
      { title: 'Deborah leads Israel', refs: [{ book: 'Judges', ch: 4, from: 1, to: 10 }],
        retell: ["Israel did evil again, so God let a Canaanite king named Jabin rule over them for twenty years. His army commander, Sisera, had nine hundred iron chariots.", "Deborah was a prophet who was leading Israel, and she held court under a palm tree. She told a man named Barak that God commanded him to gather ten thousand men. Barak said he would only go if Deborah went too, so she agreed, but said the honor of winning would go to a woman."],
        questions: [
          Q("How many iron chariots did Sisera have?", ["Ninety", "Three hundred", "Nine hundred", "Ten thousand"], 2, "Verse 3 says Sisera had nine hundred chariots fitted with iron. Chariots were like the tanks of that time.", "Verse 3."),
          Q("Where did Deborah hold court?", ["In a palace", "At the city gate of Jericho", "Under the Palm of Deborah", "In a tent at Mount Sinai"], 2, "Verse 5 says she held court under the Palm of Deborah between Ramah and Bethel. Holding court means settling people's disagreements.", "Verse 5."),
          Q("What did Barak say to Deborah?", ["He would go alone", "He would go only if she went too", "He would not go at all", "She should send someone else"], 1, "Verse 8 says Barak would go only if Deborah went with him. Deborah agreed, but told him the honor would go to a woman (verse 9).", "Verses 8-9.")
        ],
        reflect: "Deborah listened to God and helped others be brave. How can you encourage someone else to do the right thing?" },
      { title: 'Victory at Mount Tabor', refs: [{ book: 'Judges', ch: 4, from: 12, to: 16 }, { book: 'Judges', ch: 4, from: 23, to: 24 }],
        retell: ["Sisera gathered his nine hundred chariots against Barak. Deborah told Barak to go, because this was the day the LORD would give him victory, and the LORD had gone ahead of him.", "Barak and his men charged down Mount Tabor, and the LORD threw Sisera's army into confusion. Sisera jumped from his chariot and ran away on foot. Later in the chapter, he was defeated by a woman named Jael, just as Deborah had said, and God gave Israel the victory over King Jabin."],
        questions: [
          Q("What did Deborah say the LORD had done for Barak?", ["Stayed behind", "Sent fire", "Built a wall", "Gone ahead of him"], 3, "Verse 14 says Deborah asked Barak whether the LORD had not gone ahead of him. God leads the way for his people.", "Verse 14."),
          Q("From which mountain did Barak go down to fight?", ["Mount Tabor", "Mount Sinai", "Mount Carmel", "Mount of Olives"], 0, "Verse 14 says Barak went down Mount Tabor, followed by ten thousand men.", "Verse 14."),
          Q("What did Sisera do when his army was routed?", ["He surrendered", "He won the battle", "He got down from his chariot and fled on foot", "He hid in a chariot"], 2, "Verse 15 says Sisera abandoned his chariot and fled on foot. Routed means defeated and scattered.", "Verse 15.")
        ],
        reflect: "God went ahead of Barak into battle. Where do you need to remember that God goes ahead of you?" },
      { title: 'The least in his family', refs: [{ book: 'Judges', ch: 6, from: 1, to: 6 }, { book: 'Judges', ch: 6, from: 11, to: 16 }],
        retell: ["Israel did evil again, and for seven years the Midianites swarmed over the land like locusts and destroyed their crops. The people hid in caves and cried out to the LORD.", "The angel of the LORD came to Gideon while he was secretly threshing wheat in a winepress to hide it. He called Gideon a mighty warrior and told him to save Israel. Gideon said his clan was the weakest and he was the least in his family, but the LORD promised to be with him."],
        questions: [
          Q("What were the Midianites compared to?", ["Lions", "Wolves", "Rain clouds", "Swarms of locusts"], 3, "Verse 5 says they came up like swarms of locusts, too many to count. Locusts are insects that eat up every crop.", "Verse 5."),
          Q("Where was Gideon threshing wheat?", ["In an open field", "In a winepress", "In the temple", "On a rooftop"], 1, "Verse 11 says Gideon was threshing wheat in a winepress to keep it from the Midianites. A winepress was a low pit, a strange place to thresh grain, so he was hiding.", "Verse 11."),
          Q("What did Gideon say about himself in verse 15?", ["He was the strongest", "He was a king", "His clan was the weakest and he was the least in his family", "He had a big army"], 2, "Verse 15 says Gideon felt weak and small. God answered that he would be with him (verse 16). God's power matters more than our strength.", "Verses 15-16.")
        ],
        reflect: "God called Gideon a mighty warrior while Gideon was hiding. What do you think God sees in you that you might not see in yourself?" },
      { title: 'The fleece and the three hundred', refs: [{ book: 'Judges', ch: 6, from: 36, to: 40 }, { book: 'Judges', ch: 7, from: 1, to: 8 }],
        retell: ["Gideon asked God for a sign with a wool fleece: first make the fleece wet and the ground dry, then the fleece dry and the ground wet. Both nights, God did it.", "Gideon gathered an army, but God said there were too many men, or Israel would brag that they saved themselves. First the fearful men went home, then God tested the rest at the water. Only three hundred men were left, and God said he would save Israel with them."],
        questions: [
          Q("What did Gideon ask God to do with the fleece the first night?", ["Make it wet with dew while the ground stayed dry", "Burn it", "Make it disappear", "Turn it gold"], 0, "Verse 37 says Gideon asked for dew only on the fleece and the ground dry. The next morning he wrung out a bowlful of water (verse 38).", "Verses 37-38."),
          Q("Why did God say Gideon had too many men?", ["There was not enough food", "They were too slow", "Some were spies", "Israel would boast that her own strength saved her"], 3, "Chapter 7 verse 2 says Israel might boast that her own strength had saved her. God wanted everyone to know the victory was his.", "Judges 7:2."),
          Q("How many men were left in the end?", ["Thirty", "Three hundred", "Ten thousand", "Twenty-two thousand"], 1, "Judges 7:7 says God would save them with the three hundred men. Twenty-two thousand had gone home first, and ten thousand were tested at the water.", "Judges 7:6-7.")
        ],
        reflect: "God made Gideon's army smaller so everyone would know God won. Why do you think God likes to show his strength through small or weak things?" },
      { title: 'Trumpets, jars, and torches', refs: [{ book: 'Judges', ch: 7, from: 9, to: 22 }],
        retell: ["God let Gideon sneak down to the enemy camp, where he heard a man tell a dream about a loaf of barley bread knocking over a tent. His friend said it meant God would give the Midianites to Gideon, and Gideon worshiped God.", "Gideon gave his three hundred men trumpets and empty jars with torches inside. At night they surrounded the camp, blew the trumpets, smashed the jars, held up the torches, and shouted. The Midianites panicked and fled, and the LORD gave Israel the victory."],
        questions: [
          Q("What did the Midianite man dream about?", ["A lion", "A round loaf of barley bread tumbling into the camp", "A burning bush", "Seven cows"], 1, "Verse 13 says he dreamed that a round loaf of barley bread tumbled into the Midianite camp and knocked a tent over.", "Verse 13."),
          Q("What did Gideon do after he heard the dream explained?", ["He bowed down and worshiped", "He ran away", "He told the Midianites", "He went to sleep"], 0, "Verse 15 says when Gideon heard the dream and its meaning, he bowed down and worshiped. His fear turned into faith.", "Verse 15."),
          Q("What did Gideon's men carry?", ["Swords and shields", "Bows and arrows", "Trumpets and empty jars with torches inside", "Spears and stones"], 2, "Verse 16 says he gave them trumpets and empty jars with torches inside. Not exactly normal battle gear! God won the battle his way.", "Verse 16.")
        ],
        reflect: "Gideon went from hiding to leading because God was with him. How has God helped you become braver over time?" }
    ]
  });

  // ============================== WEEK 22 ==============================
  C.unit('bible', 22, {
    theme: 'Ruth',
    verse: { ref: 'Ruth 1:16', why: "Ruth chose to stay loyal to Naomi and to follow Naomi's God, and her words show what faithful love looks like." },
    days: [
      { title: 'Sad times in Moab', refs: [{ book: 'Ruth', ch: 1, from: 1, to: 14 }],
        retell: ["During a famine, a man from Bethlehem moved to Moab with his wife Naomi and their two sons. The man died, the sons married Moabite women named Orpah and Ruth, and about ten years later both sons died too.", "Naomi heard that God had given food to his people again, so she started home. She told her daughters-in-law to go back to their mothers' homes. They cried, and Orpah kissed Naomi goodbye, but Ruth held on to her."],
        questions: [
          Q("Why did Naomi's family move to Moab?", ["To find gold", "There was a famine in the land", "The king sent them", "To fight a war"], 1, "Verse 1 says there was a famine in the land, so the family went to live in Moab for a while.", "Verse 1."),
          Q("What were the names of Naomi's daughters-in-law?", ["Rachel and Leah", "Mary and Martha", "Deborah and Jael", "Orpah and Ruth"], 3, "Verse 4 says the sons married Moabite women, one named Orpah and the other Ruth.", "Verse 4."),
          Q("What did Ruth do when Orpah left?", ["She clung to Naomi", "She left too", "She went to find a husband", "She stayed in Moab alone"], 0, "Verse 14 says Orpah kissed her mother-in-law goodbye, but Ruth clung to her. Clung means held on tightly.", "Verse 14.")
        ],
        reflect: "Naomi lost so much, but Ruth stayed with her. How can you stay close to someone who is going through a sad time?" },
      { title: "Ruth's promise", refs: [{ book: 'Ruth', ch: 1, from: 15, to: 22 }],
        retell: ["Naomi urged Ruth to go back like Orpah. But Ruth promised to go wherever Naomi went, to make Naomi's people her people, and to make Naomi's God her God.", "When they reached Bethlehem, the whole town was stirred up. Naomi told them to call her Mara, which means bitter, because she felt her life had become bitter. They arrived just as the barley harvest was beginning."],
        questions: [
          Q("What did Ruth promise about Naomi's God?", ["She would ignore him", "She would think about it", "Naomi's God would be her God", "She would worship the gods of Moab"], 2, "Verse 16 shows Ruth promising that Naomi's people would be her people and Naomi's God her God. Ruth was choosing to follow the LORD.", "Verse 16."),
          Q("What did Naomi ask the women of Bethlehem to call her?", ["Ruth", "Rachel", "Joy", "Mara"], 3, "Verse 20 says Naomi asked to be called Mara, because the Almighty had made her life very bitter. Naomi means pleasant, and Mara means bitter.", "Verse 20."),
          Q("What time of year did they arrive in Bethlehem?", ["During winter snow", "As the barley harvest was beginning", "At Passover", "During a flood"], 1, "Verse 22 says they arrived as the barley harvest was beginning. This detail matters, because the harvest is where the next part of the story happens.", "Verse 22.")
        ],
        reflect: "Ruth's loyalty was a gift to Naomi. Who has been loyal to you, and how can you thank them?" },
      { title: 'Ruth meets Boaz', refs: [{ book: 'Ruth', ch: 2, from: 1, to: 12 }],
        retell: ["Ruth went to the fields to glean, which means picking up the grain left behind by the harvesters. It turned out she was in the field of Boaz, a relative of Naomi's husband.", "Boaz noticed her and heard how hard she worked. He told her to stay in his field, gave her water, and told his men not to bother her. When Ruth asked why he was so kind to a foreigner, Boaz said he had heard about her kindness to Naomi and prayed that the LORD, under whose wings she had come for safety, would reward her."],
        questions: [
          Q("What does it mean to glean?", ["To plant seeds", "To sell grain", "To pick up leftover grain behind the harvesters", "To water the fields"], 2, "In verses 2-3 Ruth went to pick up the leftover grain behind the harvesters. God's law told farmers to leave some for poor people and foreigners.", "Verses 2-3."),
          Q("What did the overseer say about how Ruth worked?", ["She worked steadily from morning until then with only a short rest", "She was lazy", "She left early", "She ate all the grain"], 0, "Verse 7 says she had been working steadily from morning till now, except for a short rest. Ruth was a hard worker.", "Verse 7."),
          Q("Why was Boaz kind to Ruth?", ["She paid him", "She was his daughter", "Naomi told him to be", "He had heard all she had done for Naomi"], 3, "Verse 11 says Boaz had been told all that Ruth had done for her mother-in-law since her husband died. Kindness to others was noticed.", "Verse 11.")
        ],
        reflect: "Boaz noticed Ruth's kindness and hard work. How can you show kindness to someone who is new or feels like an outsider?" },
      { title: 'More than enough', refs: [{ book: 'Ruth', ch: 2, from: 13, to: 23 }],
        retell: ["At mealtime Boaz invited Ruth to eat with his workers, and she had all she wanted with some left over. He even told his men to pull out extra stalks for her to pick up.", "Ruth went home with about an ephah of barley, a big amount. When Naomi heard it was Boaz's field, she praised the LORD and explained that Boaz was one of their guardian-redeemers, a close relative who could help rescue the family. Ruth kept working in his fields until the end of the barley and wheat harvests."],
        questions: [
          Q("What did Boaz tell his men to do for Ruth?", ["Send her away", "Pull out some stalks from the bundles and leave them for her", "Charge her money", "Make her work faster"], 1, "Verses 15-16 say Boaz told his men to let her gather among the sheaves and even pull out stalks for her. He was generous on purpose.", "Verses 15-16."),
          Q("How much barley did Ruth bring home?", ["About an ephah", "A handful", "A wagon full", "None"], 0, "Verse 17 says it amounted to about an ephah. That was a lot of grain for one day of gleaning.", "Verse 17."),
          Q("What did Naomi say Boaz was?", ["A stranger", "A king", "One of their guardian-redeemers", "An enemy"], 2, "Verse 20 says Boaz was a close relative and one of their guardian-redeemers. A guardian-redeemer was a family member who could buy back land and care for widows in the family.", "Verse 20.")
        ],
        reflect: "Naomi began to see God's kindness again. Write about one way you have seen God's kindness this week." },
      { title: 'A happy ending', refs: [{ book: 'Ruth', ch: 3, from: 1, to: 11 }, { book: 'Ruth', ch: 4, from: 13, to: 17 }],
        retell: ["Naomi wanted to find a home for Ruth, so she told Ruth how to ask Boaz, in the custom of that time, to take care of her as the family's guardian-redeemer. Boaz blessed Ruth and said the whole town knew she was a woman of noble character.", "Boaz settled the matter properly with the town leaders, and he married Ruth. They had a son named Obed, and the women praised the LORD for not leaving Naomi alone. Obed became the grandfather of King David."],
        questions: [
          Q("How did Boaz say the townspeople described Ruth?", ["As a stranger", "As a woman of noble character", "As lazy", "As too young"], 1, "Ruth 3:11 says all the people of the town knew she was a woman of noble character. Noble character means good, honest, and strong in heart.", "Ruth 3:11."),
          Q("What was the name of Ruth and Boaz's son?", ["David", "Jesse", "Samuel", "Obed"], 3, "Ruth 4:17 says they named him Obed. He became the father of Jesse, and Jesse became the father of David.", "Ruth 4:17."),
          Q("Who was Obed's famous grandson?", ["King David", "Moses", "Joseph", "Elijah"], 0, "Ruth 4:17 says Obed was the father of Jesse, the father of David. Ruth, a foreigner from Moab, became the great-grandmother of King David, and part of Jesus' family line too.", "Ruth 4:17.")
        ],
        reflect: "God turned Naomi's sad story into a joyful one. How does Ruth's story give you hope when something sad happens?" }
    ]
  });

  // ============================== WEEK 23 ==============================
  C.unit('bible', 23, {
    theme: 'Samuel hears God',
    verse: { ref: '1 Samuel 3:10', why: "Young Samuel learned to say that he was listening when God spoke, and we can have that same listening heart." },
    days: [
      { title: "Hannah's prayer", refs: [{ book: '1 Samuel', ch: 1, from: 1, to: 11 }],
        retell: ["A man named Elkanah had two wives, Hannah and Peninnah. Peninnah had children, but Hannah had none, and every year Peninnah teased her until Hannah cried and would not eat.", "At the house of the LORD in Shiloh, Hannah prayed with deep sadness. She promised that if God gave her a son, she would give him to the LORD for his whole life."],
        questions: [
          Q("Where did Elkanah's family go every year to worship?", ["Jerusalem", "Bethlehem", "Shiloh", "Egypt"], 2, "Verse 3 says year after year Elkanah went up to worship and sacrifice to the LORD at Shiloh. That is where the house of the LORD was at that time.", "Verse 3."),
          Q("How did Peninnah treat Hannah?", ["She comforted her", "She ignored her", "She gave her gifts", "She kept provoking her to upset her"], 3, "Verses 6-7 say her rival kept provoking her in order to irritate her, year after year. Provoke means to try to make someone upset.", "Verses 6-7."),
          Q("What did Hannah promise in her prayer?", ["To build a temple", "To give her son to the LORD for all his life", "To move away", "To never pray again"], 1, "Verse 11 says Hannah vowed that if God gave her a son, she would give him to the LORD for all the days of his life. A vow is a serious promise to God.", "Verse 11.")
        ],
        reflect: "Hannah poured out her sadness to God. What is something that makes you sad that you can tell God about?" },
      { title: 'God remembers Hannah', refs: [{ book: '1 Samuel', ch: 1, from: 12, to: 28 }],
        retell: ["Eli the priest saw Hannah's lips moving with no sound and thought she was drunk. Hannah explained she was pouring out her soul to the LORD, and Eli blessed her and asked God to give her what she asked.", "God remembered Hannah, and she had a son named Samuel, because she had asked the LORD for him. When he was old enough, Hannah brought him to Eli and gave him to the LORD, just as she had promised."],
        questions: [
          Q("What did Eli think when he first saw Hannah praying?", ["She was singing", "She was sick", "She was drunk", "She was asleep"], 2, "Verses 13-14 say Hannah was praying in her heart with her lips moving but no sound, so Eli thought she was drunk. She explained she was praying out of great anguish.", "Verses 13-14."),
          Q("How did Hannah look after Eli blessed her?", ["Her face was no longer downcast", "Still very sad", "Angry", "Afraid"], 0, "Verse 18 says she went her way, ate something, and her face was no longer downcast. She left her worry with God.", "Verse 18."),
          Q("Why did Hannah name her son Samuel?", ["It was her father's name", "Eli chose it", "Because he was born in Shiloh", "Because she asked the LORD for him"], 3, "Verse 20 says she named him Samuel, saying it was because she asked the LORD for him. His name was a reminder of answered prayer.", "Verse 20.")
        ],
        reflect: "Hannah kept her promise to God. Why is it important to keep the promises we make, especially to God?" },
      { title: 'A song of praise', refs: [{ book: '1 Samuel', ch: 2, from: 1, to: 10 }, { book: '1 Samuel', ch: 2, from: 18, to: 21 }],
        retell: ["Hannah prayed a joyful prayer. She said there is no one holy like the LORD and no Rock like our God. She praised God for lifting up the poor and needy and for humbling the proud.", "Young Samuel served the LORD, wearing a linen ephod, a simple garment worn by those who served God. Every year Hannah made him a new little robe and brought it to him. God blessed Hannah with three more sons and two daughters, and Samuel grew up in the presence of the LORD."],
        questions: [
          Q("What did Hannah compare God to in verse 2?", ["A tree", "A Rock", "A river", "A lion"], 1, "Verse 2 says there is no Rock like our God. A rock is strong, steady, and safe to stand on, just like God.", "Verse 2."),
          Q("What did Hannah bring Samuel every year?", ["A little robe she made", "Food", "A lamb", "A scroll"], 0, "Verse 19 says each year his mother made him a little robe and took it to him. Hannah still loved and cared for her son.", "Verse 19."),
          Q("How did God bless Hannah afterward?", ["With gold", "With a new house", "With three more sons and two daughters", "She became a priest"], 2, "Verse 21 says the LORD was gracious to Hannah, and she gave birth to three sons and two daughters. God gave her even more than she asked for.", "Verse 21.")
        ],
        reflect: "Hannah praised God after he answered her prayer. Write a short prayer of praise for something God has done for you." },
      { title: 'God calls Samuel', refs: [{ book: '1 Samuel', ch: 3, from: 1, to: 10 }],
        retell: ["In those days messages from the LORD were rare. One night the boy Samuel was lying down in the house of the LORD when he heard someone call his name.", "Samuel ran to Eli three times, thinking Eli had called him. Finally Eli realized it was the LORD and told Samuel to answer that he was listening. The LORD called again, and Samuel told the LORD to speak, because his servant was listening."],
        questions: [
          Q("Who did Samuel think was calling him?", ["His mother", "Eli", "An angel", "A guard"], 1, "Verses 4-5 say Samuel ran to Eli and said he was there because Eli had called him. He did not yet know the LORD's voice.", "Verses 4-5."),
          Q("How many times did Samuel go to Eli before Eli understood?", ["Once", "Twice", "Three times", "Seven times"], 2, "Verse 8 says the LORD called Samuel a third time, and then Eli realized the LORD was calling the boy.", "Verse 8."),
          Q("What did Eli tell Samuel to say?", ["Tell the voice to go away", "Ask who was there", "Say he was too young", "Tell the LORD to speak, because he was listening"], 3, "In verse 9 Eli told Samuel to tell the LORD to speak, because his servant was listening. In verse 10 Samuel did exactly that.", "Verses 9-10.")
        ],
        reflect: "Samuel learned to listen for God. Where is a quiet place where you can listen to God by reading the Bible and praying?" },
      { title: 'A hard message', refs: [{ book: '1 Samuel', ch: 3, from: 11, to: 21 }],
        retell: ["God told Samuel that he would judge Eli's family because Eli's sons did evil and Eli did not stop them. In the morning Samuel was afraid to tell Eli, but Eli asked him not to hide anything, so Samuel told him everything.", "Eli accepted that the LORD would do what was right. The LORD was with Samuel as he grew up, and all of Israel came to know that Samuel was a true prophet of the LORD."],
        questions: [
          Q("Why was Samuel afraid in the morning?", ["He was afraid to tell Eli the vision", "He heard a noise", "He had overslept", "He was lost"], 0, "Verse 15 says Samuel was afraid to tell Eli the vision. It was a hard message about Eli's family.", "Verse 15."),
          Q("What did Samuel do when Eli asked?", ["He lied", "He ran away", "He told him everything, hiding nothing", "He changed the message"], 2, "Verse 18 says Samuel told him everything, hiding nothing from him. Telling the truth took courage.", "Verse 18."),
          Q("What did all Israel recognize about Samuel?", ["That he was rich", "That he was a soldier", "That he was a king", "That he was a prophet of the LORD"], 3, "Verse 20 says all Israel from Dan to Beersheba recognized that Samuel was a prophet of the LORD. A prophet is someone who speaks God's messages.", "Verse 20.")
        ],
        reflect: "Samuel told the truth even when it was hard. When is it hard for you to tell the truth, and how can God help you?" }
    ]
  });

  // ============================== WEEK 24 ==============================
  C.unit('bible', 24, {
    theme: 'David is anointed; David and Goliath',
    verse: { ref: '1 Samuel 16:7', why: "God chose David because he looks at the heart, not at how people look on the outside." },
    days: [
      { title: 'God looks at the heart', refs: [{ book: '1 Samuel', ch: 16, from: 1, to: 13 }],
        retell: ["God sent Samuel to Bethlehem to anoint one of Jesse's sons as the next king. When Samuel saw the oldest son, Eliab, he thought he must be the one, but God said he looks at the heart, not at outward appearance or height.", "Seven sons passed by, and God had not chosen any of them. The youngest, David, was out taking care of the sheep. When he came in, the LORD said he was the one, so Samuel anointed him with oil, and the Spirit of the LORD came powerfully on David."],
        questions: [
          Q("Which son did Samuel first think God had chosen?", ["David", "Eliab", "Abinadab", "Shammah"], 1, "Verse 6 says when Samuel saw Eliab, he thought surely this was the LORD's anointed. Eliab was probably tall and impressive.", "Verse 6."),
          Q("What does the LORD look at, according to verse 7?", ["Height", "Strength", "The heart", "Clothes"], 2, "Verse 7 says people look at the outward appearance, but the LORD looks at the heart. God cares most about who we are inside.", "Verse 7."),
          Q("Where was David when Samuel came?", ["Tending the sheep", "At school", "In the army", "At the palace"], 0, "Verse 11 says the youngest was tending the sheep. Nobody even thought to invite him at first, but God chose him.", "Verse 11.")
        ],
        reflect: "God looks at the heart. What is one thing you want God to see in your heart this week?" },
      { title: 'David plays for the king', refs: [{ book: '1 Samuel', ch: 16, from: 14, to: 23 }],
        retell: ["The Spirit of the LORD left King Saul, and Saul was tormented by a troubling spirit. His servants suggested finding someone who could play the lyre to calm him.", "One servant said Jesse's son David played well, was brave, spoke well, and had the LORD with him. So David came to serve Saul. Saul liked him very much, and whenever Saul was troubled, David played the lyre and Saul felt better."],
        questions: [
          Q("What instrument did David play?", ["Trumpet", "Drum", "Flute", "Lyre"], 3, "Verse 16 says Saul's attendants looked for someone who could play the lyre. A lyre is a small stringed instrument like a harp.", "Verse 16."),
          Q("Which of these did the servant say about David?", ["He was lazy", "The LORD was with him", "He was tall", "He was a priest"], 1, "Verse 18 says David played well, was brave, spoke well, was fine-looking, and the LORD was with him.", "Verse 18."),
          Q("What happened when David played for Saul?", ["Saul felt better and the troubling spirit left him", "Saul got angrier", "Saul fell asleep forever", "Saul sent him home"], 0, "Verse 23 says relief would come to Saul, he would feel better, and the troubling spirit would leave him. God used David's music to help the king.", "Verse 23.")
        ],
        reflect: "God used David's music to help someone else. What gift or skill do you have that you could use to help someone?" },
      { title: 'A giant shouts', refs: [{ book: '1 Samuel', ch: 17, from: 1, to: 11 }, { book: '1 Samuel', ch: 17, from: 16, to: 20 }],
        retell: ["The Philistine army and Israel's army faced each other across the Valley of Elah. A huge Philistine champion named Goliath, wearing bronze armor and carrying a giant spear, shouted for Israel to send one man to fight him.", "Saul and all of Israel were terrified. For forty days Goliath came out every morning and evening. Then Jesse sent David to the camp with food for his brothers."],
        questions: [
          Q("Where were the two armies camped?", ["By the Red Sea", "Inside Jericho", "On hills on either side of the Valley of Elah", "On Mount Sinai"], 2, "Verses 2-3 say Saul's army was in the Valley of Elah, with the Philistines on one hill and Israel on another, and the valley between them.", "Verses 2-3."),
          Q("How did Saul and Israel feel when Goliath shouted?", ["Brave", "Dismayed and terrified", "Excited", "Bored"], 1, "Verse 11 says Saul and all the Israelites were dismayed and terrified. Dismayed means losing hope.", "Verse 11."),
          Q("How long did Goliath come out to challenge Israel?", ["Three days", "Seven days", "Forty days", "One year"], 2, "Verse 16 says for forty days the Philistine came forward every morning and evening. Nobody dared to answer him.", "Verse 16.")
        ],
        reflect: "Everyone was afraid of Goliath. What is a giant-sized problem or fear in your life right now?" },
      { title: 'David volunteers', refs: [{ book: '1 Samuel', ch: 17, from: 23, to: 37 }],
        retell: ["David heard Goliath's insults and asked why anyone should be allowed to defy the armies of the living God. His oldest brother Eliab got angry with him, but David kept asking.", "David told Saul he would fight Goliath. Saul said he was too young, but David explained that as a shepherd he had rescued sheep from a lion and a bear. The LORD who saved him then would save him from Goliath, and Saul told him to go, with the LORD's blessing."],
        questions: [
          Q("What bothered David about Goliath?", ["His height", "His loud voice", "His armor", "He was defying the armies of the living God"], 3, "Verse 26 shows David asking who this Philistine was to defy the armies of the living God. David saw this as an insult to God.", "Verse 26."),
          Q("Which brother got angry with David?", ["Eliab", "Abinadab", "Shammah", "Jonathan"], 0, "Verse 28 says Eliab, his oldest brother, burned with anger at him. David did not let the criticism stop him.", "Verse 28."),
          Q("What animals had David fought while protecting his sheep?", ["A wolf and a snake", "A tiger and a bull", "A lion and a bear", "A fox and an eagle"], 2, "Verses 34-36 say David had fought a lion and a bear. He trusted the LORD who rescued him then (verse 37).", "Verses 34-37.")
        ],
        reflect: "David remembered how God had helped him before. What is a time God helped you that you can remember when you are scared?" },
      { title: 'David and Goliath', refs: [{ book: '1 Samuel', ch: 17, from: 38, to: 50 }],
        retell: ["Saul put his own armor on David, but David was not used to it and took it off. He took his staff, five smooth stones from a stream, and his sling.", "Goliath looked down on David because he was so young. David said Goliath came with sword and spear, but David came in the name of the LORD, and the whole world would know the battle belongs to the LORD. David ran toward Goliath, slung a stone, and struck him in the forehead, and the giant fell face down."],
        questions: [
          Q("Why did David take off Saul's armor?", ["It was too shiny", "It was broken", "Saul wanted it back", "He was not used to it"], 3, "Verse 39 says David tried walking around in it but was not used to it, so he took it off. He would fight the way God had prepared him.", "Verse 39."),
          Q("How many stones did David choose?", ["One", "Three", "Five", "Twelve"], 2, "Verse 40 says David chose five smooth stones from the stream and put them in his shepherd's bag.", "Verse 40."),
          Q("What did David say he came against Goliath with?", ["A sword", "The name of the LORD Almighty", "A spear", "An army"], 1, "Verse 45 says David came in the name of the LORD Almighty, the God of Israel's armies. David trusted God's power, not weapons.", "Verse 45.")
        ],
        reflect: "David said the battle belongs to the LORD. What battle or hard thing can you give to God today?" }
    ]
  });

  // ============================== WEEK 25 ==============================
  C.unit('bible', 25, {
    theme: 'David and Jonathan; David shows kindness',
    verse: { ref: 'Proverbs 17:17', why: "Jonathan was a friend who loved David at all times, even when it was hard, which is what this verse describes." },
    days: [
      { title: 'Best friends', refs: [{ book: '1 Samuel', ch: 18, from: 1, to: 9 }],
        retell: ["After David defeated Goliath, King Saul's son Jonathan became close friends with David and loved him as himself. Jonathan made a covenant of friendship with David and gave him his own robe, tunic, sword, bow, and belt.", "David did well at everything Saul sent him to do. But when the women of Israel sang songs that praised David more than Saul, Saul became very angry and jealous, and from then on he kept a jealous eye on David."],
        questions: [
          Q("How does verse 1 describe Jonathan's love for David?", ["He was jealous of him", "He did not know him", "He loved him as himself", "He feared him"], 2, "Verse 1 says Jonathan became one in spirit with David and loved him as himself. That is a deep, loyal friendship.", "Verse 1."),
          Q("What did Jonathan give David?", ["His robe, tunic, sword, bow, and belt", "Gold coins", "A horse", "His crown"], 0, "Verse 4 lists the robe, tunic, sword, bow, and belt. Jonathan was the king's son, and he gave David things that showed honor.", "Verse 4."),
          Q("Why did Saul become angry?", ["David lost a battle", "Jonathan left", "David took his throne", "The women's song praised David more than Saul"], 3, "Verses 7-8 say the women's song gave David more credit than Saul, and Saul was very angry. Jealousy started to take over his heart.", "Verses 7-8.")
        ],
        reflect: "Jonathan was happy for David instead of jealous. How can you celebrate when a friend does well?" },
      { title: 'Jonathan speaks up', refs: [{ book: '1 Samuel', ch: 18, from: 10, to: 16 }, { book: '1 Samuel', ch: 19, from: 1, to: 7 }],
        retell: ["Saul's jealousy grew. Once, while David played the lyre, Saul threw a spear at him, but David escaped twice. Saul was afraid of David because the LORD was with David.", "Saul even told Jonathan to kill David. Instead, Jonathan warned David and spoke well of him to his father, reminding Saul that David had done nothing wrong. Saul listened and promised not to harm David, and Jonathan brought David back."],
        questions: [
          Q("Why was Saul afraid of David?", ["David was bigger", "The LORD was with David but had left Saul", "David had an army", "David was a prince"], 1, "1 Samuel 18:12 says Saul was afraid of David because the LORD was with David but had departed from Saul.", "1 Samuel 18:12."),
          Q("What did Jonathan do when Saul ordered David killed?", ["He warned David and spoke well of him to Saul", "He obeyed his father", "He ran away", "He told no one"], 0, "1 Samuel 19:2-4 says Jonathan warned David to hide, then spoke well of David to his father. Being a true friend took courage.", "1 Samuel 19:2-4."),
          Q("What did Saul promise after listening to Jonathan?", ["To make Jonathan king", "To leave Israel", "That David would not be put to death", "To give David his daughter"], 2, "1 Samuel 19:6 says Saul listened to Jonathan and took an oath that David would not be put to death.", "1 Samuel 19:6.")
        ],
        reflect: "Jonathan stood up for his friend. What could you say to stand up for someone who is being treated unfairly?" },
      { title: 'A promise between friends', refs: [{ book: '1 Samuel', ch: 20, from: 1, to: 4 }, { book: '1 Samuel', ch: 20, from: 12, to: 17 }],
        retell: ["Saul turned against David again, and David asked Jonathan what he had done wrong. Jonathan promised to do whatever David needed and to find out if his father truly meant to harm him.", "Jonathan asked David to show him and his family the LORD's kind of faithful love forever, even after David's enemies were gone. They made a covenant, and Jonathan had David repeat his promise, because he loved David as himself."],
        questions: [
          Q("What did Jonathan tell David in 1 Samuel 20:4?", ["He wanted to be left alone", "He would do whatever David wanted", "It was David's fault", "David should go home"], 1, "Verse 4 shows Jonathan telling David he would do whatever David wanted. True friends help when it costs them something.", "1 Samuel 20:4."),
          Q("What did Jonathan ask David to show his family forever?", ["Gold", "A new house", "Swords", "Unfailing kindness"], 3, "1 Samuel 20:14-15 says Jonathan asked David to show him unfailing kindness like the LORD's, and never to cut off kindness from his family.", "1 Samuel 20:14-15."),
          Q("Why did Jonathan have David repeat his promise?", ["Because he loved David as himself", "He did not hear it", "Saul told him to", "He wanted it written down"], 0, "1 Samuel 20:17 says Jonathan had David reaffirm his oath out of love for him, because he loved him as he loved himself.", "1 Samuel 20:17.")
        ],
        reflect: "Jonathan and David made a promise of friendship. What makes someone a faithful friend?" },
      { title: 'The arrow signal', refs: [{ book: '1 Samuel', ch: 20, from: 32, to: 42 }],
        retell: ["Jonathan asked his father why David should die, and Saul threw a spear at Jonathan too. Now Jonathan knew Saul truly wanted to hurt David, and he was deeply sad.", "As they had planned, Jonathan went to the field with a boy and shot arrows past him, which was the secret signal for David to flee. After the boy left, David came out, and the two friends hugged and cried. Jonathan reminded David of their promise before God, and David left."],
        questions: [
          Q("What did Saul do when Jonathan asked why David should die?", ["He hugged him", "He changed his mind", "He threw a spear at him", "He laughed"], 2, "Verse 33 says Saul hurled his spear at Jonathan to kill him. Then Jonathan knew his father intended to kill David.", "Verse 33."),
          Q("Who went with Jonathan to the field?", ["David", "Saul", "A soldier", "A small boy"], 3, "Verse 35 says Jonathan went out with a small boy. The boy did not know what the arrows meant (verse 39).", "Verses 35 and 39."),
          Q("What did David and Jonathan do before David left?", ["They argued", "They kissed each other and wept together", "They shared a meal", "They fought"], 1, "Verse 41 says they kissed each other and wept together. In that culture, men often greeted close family and friends with a kiss. Saying goodbye to a best friend is hard.", "Verse 41.")
        ],
        reflect: "David and Jonathan were sad to be apart. Who is a friend you miss or would be sad to leave? Pray for them today." },
      { title: 'Kindness for Jonathan\'s sake', refs: [{ book: '2 Samuel', ch: 9, from: 1, to: 13 }],
        retell: ["Years later, after Jonathan had died, David became king. He asked if anyone from Saul's family was left so he could show them kindness for Jonathan's sake.", "A servant named Ziba told him about Jonathan's son Mephibosheth, who was lame in both feet. David told Mephibosheth not to be afraid, gave him back all of Saul's land, and invited him to eat at the king's table always, like one of the king's own sons."],
        questions: [
          Q("Why did David want to show kindness to someone from Saul's family?", ["To get money", "Because Saul asked him to", "For Jonathan's sake", "To find a soldier"], 2, "Verse 1 shows David asking if anyone was left of Saul's house he could show kindness to for Jonathan's sake. David kept his promise to his friend.", "Verse 1."),
          Q("Who was Mephibosheth?", ["Jonathan's son", "Saul's servant", "David's brother", "A priest"], 0, "Verse 6 says Mephibosheth was the son of Jonathan, the son of Saul. Verse 3 says he was lame in both feet.", "Verses 3 and 6."),
          Q("Where would Mephibosheth eat from then on?", ["In the fields", "In the temple", "In Lo Debar", "At the king's table"], 3, "Verses 7 and 13 say he would always eat at the king's table. David treated him like one of his own sons. God treats us with kindness like that too.", "Verses 7 and 13.")
        ],
        reflect: "David showed kindness to someone who could never repay him. Who is someone you could show kindness to this week?" }
    ]
  });

  // ============================== WEEK 26 ==============================
  C.unit('bible', 26, {
    theme: 'Solomon asks for wisdom; the temple',
    verse: { ref: 'James 1:5', why: "Solomon asked God for wisdom and received it, and this verse promises that God gives wisdom generously to anyone who asks." },
    days: [
      { title: 'Ask for anything', refs: [{ book: '1 Kings', ch: 3, from: 3, to: 9 }],
        retell: ["King Solomon, David's son, loved the LORD. One night at Gibeon, the LORD appeared to Solomon in a dream and told him to ask for whatever he wanted.", "Solomon thanked God for his kindness to David. He said he felt like a little child who did not know how to lead such a great people, so he asked God for a discerning heart to govern well and to know right from wrong."],
        questions: [
          Q("How did the LORD appear to Solomon?", ["In a burning bush", "In a dream at night", "Through a prophet", "In a storm"], 1, "Verse 5 says at Gibeon the LORD appeared to Solomon during the night in a dream.", "Verse 5."),
          Q("What did Solomon say he felt like?", ["A little child who did not know how to carry out his duties", "A mighty warrior", "A wise old man", "A rich king"], 0, "Verse 7 says Solomon felt like only a little child who did not know how to carry out his duties. He was humble about his need.", "Verse 7."),
          Q("What did Solomon ask for?", ["Gold and riches", "A long life", "A discerning heart to govern and know right from wrong", "Victory over his enemies"], 2, "Verse 9 says Solomon asked for a discerning heart to govern God's people and to distinguish between right and wrong. Discerning means able to judge wisely.", "Verse 9.")
        ],
        reflect: "If God told you to ask for anything, what would you ask for, and why?" },
      { title: 'God says yes and more', refs: [{ book: '1 Kings', ch: 3, from: 10, to: 15 }],
        retell: ["God was pleased that Solomon asked for wisdom instead of a long life, riches, or the defeat of his enemies. God promised to give him a wise and discerning heart like no one before or after him.", "God also promised to give him what he had not asked for: riches and honor. If Solomon obeyed, God would give him a long life. Solomon woke up, went to Jerusalem, and worshiped before the ark of the covenant."],
        questions: [
          Q("How did the Lord feel about Solomon's request?", ["Disappointed", "Pleased", "Angry", "Confused"], 1, "Verse 10 says the Lord was pleased that Solomon had asked for this. Solomon cared about leading God's people well, not about himself.", "Verse 10."),
          Q("What did God give Solomon that he had NOT asked for?", ["Wisdom", "Wealth and honor", "A new name", "A twin brother"], 1, "Verse 13 says God would also give him what he had not asked for, both wealth and honor. Wisdom was what he asked for.", "Verse 13."),
          Q("What did Solomon do after he woke up?", ["He went back to sleep", "He told no one", "He went to Egypt", "He went to Jerusalem and worshiped before the ark"], 3, "Verse 15 says Solomon returned to Jerusalem, stood before the ark of the Lord's covenant, and offered sacrifices, then gave a feast.", "Verse 15.")
        ],
        reflect: "Solomon asked for wisdom to help others. How could asking God for wisdom help you at home or with friends?" },
      { title: 'A wise decision', refs: [{ book: '1 Kings', ch: 3, from: 16, to: 28 }],
        retell: ["Two women came to Solomon. They lived in the same house and each had a baby, but one baby died in the night. Now both women said the living baby was hers.", "Solomon called for a sword and said to divide the baby between them. The real mother loved her son so much she begged the king to give him to the other woman rather than hurt him. Solomon knew she was the true mother and gave her the baby, and all Israel saw that God had given Solomon wisdom."],
        questions: [
          Q("What were the two women arguing about?", ["Whose baby the living child was", "A house", "Money", "A field"], 0, "Verses 22-23 say each woman claimed the living son was hers and the dead one belonged to the other.", "Verses 22-23."),
          Q("How did Solomon find out who the real mother was?", ["He asked their neighbors", "He flipped a coin", "He watched which woman wanted to protect the baby's life", "He asked the baby"], 2, "Verse 26 says the real mother was filled with love and begged the king not to hurt the baby. Solomon knew a true mother would protect her child.", "Verse 26."),
          Q("What did the people of Israel think about Solomon's decision?", ["They laughed", "They were angry", "They did not hear about it", "They held him in awe because he had wisdom from God"], 3, "Verse 28 says all Israel held the king in awe, because they saw he had wisdom from God to administer justice.", "Verse 28.")
        ],
        reflect: "The real mother put her child's life ahead of what she wanted. What does real love look like in your family?" },
      { title: 'The cloud of glory', refs: [{ book: '1 Kings', ch: 8, from: 1, to: 11 }],
        retell: ["Solomon finished building the temple in Jerusalem. The priests carried the ark of the covenant into the Most Holy Place, under the wings of the cherubim. Inside the ark were only the two stone tablets Moses had put there at Mount Horeb.", "When the priests came out, a cloud filled the temple. The glory of the LORD was so great that the priests could not even do their work."],
        questions: [
          Q("What was inside the ark?", ["Gold coins", "The two stone tablets Moses placed there", "Manna and a staff", "Nothing at all"], 1, "Verse 9 says there was nothing in the ark except the two stone tablets Moses had placed in it at Horeb. These were the tablets of the Ten Commandments.", "Verse 9."),
          Q("Where did the priests put the ark?", ["In the courtyard", "On the roof", "In the Most Holy Place, beneath the cherubim's wings", "In Solomon's palace"], 2, "Verse 6 says they brought the ark to its place in the inner sanctuary, the Most Holy Place, beneath the wings of the cherubim. Cherubim were carved angel figures.", "Verse 6."),
          Q("Why could the priests not perform their service?", ["The cloud and glory of the LORD filled the temple", "They were tired", "The doors were locked", "It was too dark"], 0, "Verses 10-11 say the cloud filled the temple and the glory of the LORD filled it, so the priests could not perform their service. God showed he was present.", "Verses 10-11.")
        ],
        reflect: "God's glory filled the temple. How do you feel when you think about how great and holy God is?" },
      { title: "Solomon's prayer", refs: [{ book: '1 Kings', ch: 8, from: 22, to: 30 }, { book: '1 Kings', ch: 8, from: 54, to: 61 }],
        retell: ["Solomon stood before the altar, spread his hands toward heaven, and praised God, saying there is no God like him who keeps his promises. He said even the highest heavens cannot hold God, much less a temple, and asked God to hear and forgive when his people prayed.", "Then Solomon blessed the people and said that not one of God's good promises had failed. He asked God to stay with them and turn their hearts to him, so that all the earth would know the LORD is God and there is no other."],
        questions: [
          Q("What did Solomon say cannot contain God?", ["The temple only", "The sea", "The city of Jerusalem", "Even the highest heavens"], 3, "Verse 27 shows Solomon saying the heavens, even the highest heaven, cannot contain God, so a temple certainly cannot. God is bigger than any place.", "1 Kings 8:27."),
          Q("What did Solomon ask God to do when his people prayed?", ["Ignore them", "Hear from heaven and forgive", "Send them away", "Give them gold"], 1, "Verse 30 shows Solomon asking God to hear from heaven, and when he hears, to forgive. Solomon knew people would need forgiveness.", "1 Kings 8:30."),
          Q("What did Solomon say about God's promises in verse 56?", ["Not one word of his good promises had failed", "Some had failed", "They were forgotten", "They were only for Moses"], 0, "Verse 56 says not one word had failed of all the good promises God gave through Moses. God always keeps his word.", "1 Kings 8:56.")
        ],
        reflect: "Solomon said none of God's promises had failed. Which promise of God are you most thankful for?" }
    ]
  });

  // ============================== WEEK 27 ==============================
  C.unit('bible', 27, {
    theme: 'Elijah',
    verse: { ref: 'Joshua 24:15', why: "Elijah challenged Israel to stop going back and forth and choose to serve the LORD, just as this verse calls us to choose him." },
    days: [
      { title: 'Fed by ravens', refs: [{ book: '1 Kings', ch: 17, from: 1, to: 7 }],
        retell: ["The prophet Elijah told wicked King Ahab that there would be no dew or rain for the next few years except at Elijah's word. Then God told Elijah to hide by the Kerith Ravine, a brook east of the Jordan.", "God sent ravens to bring Elijah bread and meat every morning and evening, and he drank from the brook. After a while the brook dried up because there was no rain."],
        questions: [
          Q("What did Elijah tell King Ahab?", ["There would be a flood", "Ahab would be king forever", "There would be no dew or rain for the next few years", "A giant was coming"], 2, "Verse 1 says Elijah told Ahab there would be neither dew nor rain in the next few years except at his word.", "Verse 1."),
          Q("How did God feed Elijah by the brook?", ["With manna", "Ravens brought him bread and meat", "A widow cooked for him", "He fished in the brook"], 1, "Verse 6 says the ravens brought him bread and meat in the morning and evening. God can use anything, even birds, to provide.", "Verse 6."),
          Q("Why did the brook dry up?", ["Elijah drank it all", "Ahab blocked it", "An animal dug it up", "There had been no rain in the land"], 3, "Verse 7 says the brook dried up because there had been no rain. The drought Elijah announced had come.", "Verse 7.")
        ],
        reflect: "God fed Elijah in a surprising way. What is a surprising way God has taken care of you or your family?" },
      { title: 'Flour and oil that did not run out', refs: [{ book: '1 Kings', ch: 17, from: 8, to: 16 }],
        retell: ["God sent Elijah to a widow in the town of Zarephath. She had only a handful of flour and a little oil, enough for one last meal for herself and her son.", "Elijah told her not to be afraid, but to make him a small loaf first, because God promised her flour and oil would not run out until the rain came. She trusted and obeyed, and there was food every day for Elijah, the woman, and her family, just as God said."],
        questions: [
          Q("Where did God send Elijah next?", ["Zarephath", "Egypt", "Jericho", "Babylon"], 0, "Verse 9 says God told Elijah to go to Zarephath in the region of Sidon, where a widow would supply him with food.", "Verse 9."),
          Q("How much food did the widow have?", ["A full barn", "A basket of fish", "A handful of flour and a little olive oil", "Nothing at all"], 2, "Verse 12 says she had only a handful of flour in a jar and a little olive oil in a jug.", "Verse 12."),
          Q("What happened to the flour and oil?", ["They ran out the next day", "They spoiled", "Ahab took them", "They were not used up, just as the LORD promised"], 3, "Verse 16 says the jar of flour was not used up and the jug of oil did not run dry, in keeping with the word of the LORD. God kept his promise every single day.", "Verse 16.")
        ],
        reflect: "The widow gave first and trusted God to provide. What is something you could share even when you do not have much?" },
      { title: 'The boy lives', refs: [{ book: '1 Kings', ch: 17, from: 17, to: 24 }],
        retell: ["Later the widow's son got sick and stopped breathing. The heartbroken mother cried out to Elijah.", "Elijah carried the boy to the upper room, laid him on the bed, and cried out to the LORD for the boy's life to return. The LORD heard Elijah's prayer, and the boy lived! The woman said now she knew Elijah was a man of God and that the LORD's word through him was true."],
        questions: [
          Q("Where did Elijah take the boy?", ["To the temple", "To the upper room where Elijah was staying", "To the brook", "To the king"], 1, "Verse 19 says Elijah carried him to the upper room where he was staying and laid him on his bed.", "Verse 19."),
          Q("What did Elijah do for the boy?", ["He gave him medicine", "He sent for a doctor", "He cried out to the LORD for the boy's life", "He did nothing"], 2, "Verses 20-21 say Elijah cried out to the LORD and asked for the boy's life to return. Verse 22 says the LORD heard Elijah's cry.", "Verses 20-22."),
          Q("What did the woman say she now knew?", ["That Elijah was a man of God and the LORD's word from him was the truth", "That Elijah was rich", "That she should move away", "That the drought was over"], 0, "Verse 24 shows the woman saying she knew Elijah was a man of God and that the word of the LORD from his mouth was the truth.", "Verse 24.")
        ],
        reflect: "Elijah prayed in a desperate moment, and God answered. Who is someone you can pray for who is sick or hurting?" },
      { title: 'Showdown on Mount Carmel', refs: [{ book: '1 Kings', ch: 18, from: 17, to: 29 }],
        retell: ["Elijah called all Israel and 450 prophets of the false god Baal to Mount Carmel. He asked the people how long they would go back and forth between two opinions: if the LORD is God, follow him, and if Baal is, follow him.", "Elijah set up a test. Each side would prepare a bull on wood but not light a fire, and the god who answered by fire would be the true God. Baal's prophets shouted from morning until evening, but there was no answer at all."],
        questions: [
          Q("How many prophets of Baal were there?", ["Twelve", "One hundred", "Four hundred fifty", "One thousand"], 2, "Verse 19 and verse 22 say there were 450 prophets of Baal. Elijah said he was the only one of the LORD's prophets left.", "Verse 22."),
          Q("What question did Elijah ask the people?", ["Who their king was", "Where the rain was", "Who built the altar", "How long they would keep wavering between two choices"], 3, "Verse 21 shows Elijah asking how long they would waver between two opinions. Waver means to go back and forth without deciding.", "Verse 21."),
          Q("What happened when Baal's prophets called on Baal?", ["Fire came down", "There was no response", "It rained", "The bull ran away"], 1, "Verses 26 and 29 say there was no response; no one answered. Baal was not real, so he could not answer.", "Verses 26 and 29.")
        ],
        reflect: "The people kept wavering between God and Baal. What does it look like to fully choose God and not go back and forth?" },
      { title: 'Fire from heaven', refs: [{ book: '1 Kings', ch: 18, from: 30, to: 39 }, { book: '1 Kings', ch: 18, from: 41, to: 46 }],
        retell: ["Elijah rebuilt the LORD's altar with twelve stones and dug a trench around it. He had the people pour water over the offering three times until it soaked everything and filled the trench. Then he prayed a simple prayer, asking God to show the people that he is God.", "Fire from the LORD fell and burned up the offering, the wood, the stones, and even the water! The people fell on their faces and said the LORD is God. Then Elijah prayed on the mountaintop, a tiny cloud appeared over the sea, and soon heavy rain came."],
        questions: [
          Q("How many stones did Elijah use to rebuild the altar?", ["Seven", "Ten", "Twelve", "Forty"], 2, "Verse 31 says Elijah took twelve stones, one for each of the tribes descended from Jacob. It reminded everyone they were all God's people.", "Verse 31."),
          Q("Why did Elijah pour water on the altar?", ["So everyone would see that only God could light it", "To clean it", "Because it was hot", "To put out a fire"], 0, "Verses 33-35 say he had water poured three times until it filled the trench. A soaking wet altar made it clear that only God could make it burn.", "Verses 33-35."),
          Q("How big was the first cloud Elijah's servant saw?", ["As big as a mountain", "As wide as the sky", "As small as a man's hand", "As big as a city"], 2, "Verse 44 says the cloud was as small as a man's hand, rising from the sea. Soon the sky grew black and heavy rain came (verse 45).", "Verses 44-45.")
        ],
        reflect: "God answered Elijah's prayer with fire and then rain. What prayer would you like to bring to God today?" }
    ]
  });

  // ============================== WEEK 28 ==============================
  C.unit('bible', 28, {
    theme: 'Daniel',
    verse: { ref: 'Daniel 3:17', why: "Shadrach, Meshach, and Abednego trusted that God was able to save them, and that trust gave them courage to stay faithful." },
    days: [
      { title: 'Far from home', refs: [{ book: 'Daniel', ch: 1, from: 1, to: 10 }],
        retell: ["King Nebuchadnezzar of Babylon captured Jerusalem and took some of the best young men of Judah to Babylon to train them to serve in his palace. Among them were Daniel, Hananiah, Mishael, and Azariah, who were given new Babylonian names.", "The king gave them food and wine from his own table, but Daniel decided not to make himself unclean with it. God caused the official in charge to be kind to Daniel, but the official was afraid of what the king would do if the young men looked unhealthy."],
        questions: [
          Q("Who took the young men to Babylon?", ["Pharaoh", "King Nebuchadnezzar", "King David", "King Ahab"], 1, "Verses 1-3 say Nebuchadnezzar king of Babylon besieged Jerusalem and ordered some young Israelites brought into his service.", "Verses 1-3."),
          Q("What new name was Daniel given?", ["Shadrach", "Meshach", "Abednego", "Belteshazzar"], 3, "Verse 7 says Daniel was given the name Belteshazzar. Hananiah became Shadrach, Mishael became Meshach, and Azariah became Abednego.", "Verse 7."),
          Q("What did Daniel decide?", ["Not to defile himself with the royal food and wine", "To run away", "To become king", "To stop praying"], 0, "Verse 8 says Daniel resolved not to defile himself with the royal food and wine. Defile means to make unclean. Daniel wanted to stay faithful to God's ways even far from home.", "Verse 8.")
        ],
        reflect: "Daniel decided ahead of time to stay faithful to God. What is one choice you can decide ahead of time to make the right way?" },
      { title: 'The ten-day test', refs: [{ book: 'Daniel', ch: 1, from: 11, to: 21 }],
        retell: ["Daniel politely asked the guard to test them for ten days, giving them only vegetables and water. At the end of ten days, they looked healthier and better fed than all the young men who ate the king's food.", "God gave the four young men knowledge and understanding, and Daniel could understand visions and dreams. When the king talked with them, he found them ten times better than all the wise men in his kingdom."],
        questions: [
          Q("What did Daniel ask to eat and drink?", ["Meat and wine", "Bread and milk", "Vegetables and water", "Fruit and juice"], 2, "Verse 12 says Daniel asked for nothing but vegetables to eat and water to drink. He asked respectfully and offered a fair test.", "Verse 12."),
          Q("How long was the test?", ["Three days", "Seven days", "Ten days", "Forty days"], 2, "Verses 12-15 say the test lasted ten days, and afterward they looked healthier than the others.", "Verses 12-15."),
          Q("How did the king compare the four young men to his other wise men?", ["Twice as good", "Not as good", "About the same", "Ten times better"], 3, "Verse 20 says the king found them ten times better than all the magicians and enchanters in his kingdom. God honored their faithfulness.", "Verse 20.")
        ],
        reflect: "Daniel asked respectfully instead of arguing. How can you stand up for what is right in a kind and respectful way?" },
      { title: 'We will not bow', refs: [{ book: 'Daniel', ch: 3, from: 1, to: 18 }],
        retell: ["Nebuchadnezzar set up a huge gold statue and ordered everyone to bow down and worship it when the music played, or be thrown into a blazing furnace. Everyone bowed except Shadrach, Meshach, and Abednego.", "The furious king gave them one more chance. They answered that their God was able to save them, but even if he did not, they would never serve the king's gods or worship the gold statue."],
        questions: [
          Q("What was the punishment for not bowing to the statue?", ["Prison", "Being thrown into a blazing furnace", "Being sent home", "Paying money"], 1, "Verse 6 says whoever did not fall down and worship would be thrown into a blazing furnace.", "Verse 6."),
          Q("What signal told people when to bow?", ["A trumpet only", "A bell", "The sound of music from many instruments", "The king's shout"], 2, "Verse 5 says when they heard the horn, flute, zither, lyre, harp, pipe, and all kinds of music, they had to bow down.", "Verse 5."),
          Q("What did the three friends say they would do if God did NOT rescue them?", ["Bow down after all", "Still refuse to serve the king's gods or worship the statue", "Run away", "Ask for more time"], 1, "Verse 18 shows them saying that even if God did not save them, they would not serve the king's gods or worship the image of gold. Their faith did not depend on getting what they wanted.", "Verse 18.")
        ],
        reflect: "The three friends trusted God even if things did not go their way. What does it mean to trust God no matter what?" },
      { title: 'Four men in the fire', refs: [{ book: 'Daniel', ch: 3, from: 19, to: 30 }],
        retell: ["The king had the furnace heated seven times hotter than usual, and the three friends were tied up and thrown in. Then the king jumped up in amazement, because he saw four men walking around in the fire, unbound and unharmed.", "The king called them out. The fire had not hurt them at all; not one hair was singed and they did not even smell like smoke. Nebuchadnezzar praised their God, who had sent his angel to rescue them, and promoted the three men."],
        questions: [
          Q("How much hotter did the king make the furnace?", ["Twice as hot", "Seven times hotter", "Ten times hotter", "A little hotter"], 1, "Verse 19 says he ordered the furnace heated seven times hotter than usual.", "Verse 19."),
          Q("How many men did the king see in the fire?", ["Three", "Four", "Two", "Seven"], 1, "Verse 25 says the king saw four men walking around in the fire, unbound and unharmed. God was with them in the fire.", "Verse 25."),
          Q("What did the officials notice about the three men when they came out?", ["The fire had not harmed them and there was no smell of fire", "Their clothes were burned", "They were very tired", "They were hurt"], 0, "Verse 27 says the fire had not harmed their bodies, not a hair was singed, their robes were not scorched, and there was no smell of fire on them.", "Verse 27.")
        ],
        reflect: "God was with the three friends right in the fire. How does it help to know God is with you in hard times, not just after them?" },
      { title: 'Daniel and the lions', refs: [{ book: 'Daniel', ch: 6, from: 3, to: 10 }, { book: 'Daniel', ch: 6, from: 16, to: 23 }],
        retell: ["Daniel served King Darius so well that jealous officials wanted to get rid of him, but they could find nothing wrong with him. So they tricked the king into making a law that for thirty days no one could pray to anyone except the king.", "Daniel kept praying to God three times a day with his windows open toward Jerusalem, just as he always had. He was thrown into the lions' den, and the king could not sleep all night. In the morning Daniel called out that God had sent his angel to shut the lions' mouths, and he was lifted out without a scratch, because he had trusted in his God."],
        questions: [
          Q("Why could the officials find nothing to accuse Daniel of?", ["He hid well", "The king protected him", "He never went to work", "He was trustworthy, neither corrupt nor careless"], 3, "Verse 4 says they could find no corruption in him, because he was trustworthy and neither corrupt nor negligent. Negligent means careless.", "Verse 4."),
          Q("What did Daniel do after the law was signed?", ["He stopped praying", "He kept praying three times a day, giving thanks, as before", "He prayed in secret at night", "He ran away"], 1, "Verse 10 says Daniel went home and three times a day got down on his knees and prayed, giving thanks to God, just as he had done before.", "Verse 10."),
          Q("Why was no wound found on Daniel?", ["Because he had trusted in his God", "The lions were asleep", "He fought the lions", "The king rescued him at night"], 0, "Verse 23 says no wound was found on him, because he had trusted in his God. Verse 22 tells how God sent his angel to shut the lions' mouths.", "Verses 22-23.")
        ],
        reflect: "Daniel kept praying even when it was against the law. Why do you think prayer was so important to Daniel? What makes it important to you?" }
    ]
  });

  // ============================== WEEK 29 ==============================
  C.unit('bible', 29, {
    theme: 'Jonah',
    verse: { ref: '1 John 1:9', why: "Jonah and the people of Nineveh both turned back to God, and this verse promises that when we confess our sins, God is faithful to forgive." },
    days: [
      { title: 'Running away', refs: [{ book: 'Jonah', ch: 1, from: 1, to: 10 }],
        retell: ["God told Jonah to go to the great city of Nineveh and preach against its wickedness. Instead, Jonah ran away from the LORD and got on a ship going the opposite direction, to Tarshish.", "The LORD sent a violent storm, and the sailors were terrified while Jonah slept below deck. They cast lots, and the lot fell on Jonah. He told them he worshiped the LORD, the God of heaven who made the sea and the land."],
        questions: [
          Q("Where did God tell Jonah to go?", ["Tarshish", "Jerusalem", "Nineveh", "Egypt"], 2, "Verse 2 says God told Jonah to go to the great city of Nineveh and preach against it. Tarshish is where Jonah tried to run instead.", "Verses 2-3."),
          Q("What was Jonah doing during the storm?", ["Praying", "Sleeping below deck", "Rowing", "Steering the ship"], 1, "Verse 5 says Jonah had gone below deck, where he lay down and fell into a deep sleep. The captain had to wake him up.", "Verses 5-6."),
          Q("How did Jonah describe the LORD?", ["A god of one city", "A god who sleeps", "A god of the storm only", "The God of heaven, who made the sea and the dry land"], 3, "Verse 9 shows Jonah saying he worshiped the LORD, the God of heaven, who made the sea and the dry land. Jonah knew the truth, but he was still running.", "Verse 9.")
        ],
        reflect: "Jonah tried to run from what God asked. Is there something you know God wants you to do that you have been avoiding?" },
      { title: 'Overboard', refs: [{ book: 'Jonah', ch: 1, from: 11, to: 17 }],
        retell: ["The storm grew worse. Jonah admitted it was his fault and told the sailors to throw him into the sea. The sailors tried hard to row back to land instead, but they could not.", "Finally they prayed to the LORD and threw Jonah overboard, and the sea became calm. The sailors worshiped the LORD. Then God provided a huge fish to swallow Jonah, and Jonah was inside the fish for three days and three nights."],
        questions: [
          Q("What did the sailors try to do before throwing Jonah overboard?", ["Row back to land", "Swim away", "Build a raft", "Hide Jonah"], 0, "Verse 13 says the men did their best to row back to land, but the sea grew even wilder. The sailors did not want to harm Jonah.", "Verse 13."),
          Q("What happened when Jonah was thrown into the sea?", ["The storm got worse", "The ship sank", "The raging sea grew calm", "Lightning struck"], 2, "Verse 15 says the raging sea grew calm. Then verse 16 says the men greatly feared the LORD and worshiped him.", "Verses 15-16."),
          Q("How long was Jonah inside the fish?", ["One hour", "One day", "Three days and three nights", "Forty days"], 2, "Verse 17 says Jonah was in the belly of the fish three days and three nights. Jesus later pointed to this as a sign of his own three days in the tomb (Matthew 12:40).", "Verse 17.")
        ],
        reflect: "God did not give up on Jonah, even inside a fish. How does it feel to know God does not give up on you?" },
      { title: 'A prayer from inside the fish', refs: [{ book: 'Jonah', ch: 2, from: 1, to: 10 }],
        retell: ["From inside the fish, Jonah prayed. He said that when he was in deep trouble, sinking into the deep water with seaweed around his head, he called to the LORD and the LORD answered him.", "Jonah promised to thank God and keep his promises, and he said that salvation comes from the LORD. Then the LORD commanded the fish, and it spit Jonah out onto dry land."],
        questions: [
          Q("Where was Jonah when he prayed this prayer?", ["On the ship", "In Nineveh", "On a mountain", "Inside the fish"], 3, "Verse 1 says from inside the fish Jonah prayed to the LORD his God. You can pray to God from anywhere.", "Verse 1."),
          Q("What was wrapped around Jonah's head as he sank?", ["A crown", "Seaweed", "A rope", "A towel"], 1, "Verse 5 says seaweed was wrapped around his head. Jonah sank very deep before God rescued him.", "Verse 5."),
          Q("What did the fish do when the LORD commanded it?", ["Swam to Tarshish", "Kept Jonah forever", "Spit Jonah out onto dry land", "Took him to the bottom"], 2, "Verse 10 says the LORD commanded the fish, and it vomited Jonah onto dry land. God is in charge of all creation, even a giant fish.", "Verse 10.")
        ],
        reflect: "Jonah prayed when he was in deep trouble. Write a short prayer you can pray when you feel like you are in over your head." },
      { title: 'A whole city turns to God', refs: [{ book: 'Jonah', ch: 3, from: 1, to: 10 }],
        retell: ["God told Jonah a second time to go to Nineveh, and this time Jonah obeyed. He walked into the huge city and warned that in forty days Nineveh would be overthrown.", "The people of Nineveh believed God. Everyone from the greatest to the least put on rough sackcloth to show they were sorry, and even the king got off his throne and sat in the dust. When God saw that they turned from their evil ways, he had compassion and did not destroy them."],
        questions: [
          Q("What did Jonah do the second time God spoke?", ["He obeyed and went to Nineveh", "He ran again", "He went home", "He argued"], 0, "Verse 3 says Jonah obeyed the word of the LORD and went to Nineveh. God gave Jonah a second chance.", "Verse 3."),
          Q("How many days did Jonah say until Nineveh would be overthrown?", ["Three", "Seven", "Forty", "One hundred"], 2, "Verse 4 says Jonah proclaimed that in forty more days Nineveh would be overthrown.", "Verse 4."),
          Q("What did God do when he saw the people turn from their evil ways?", ["Destroyed the city anyway", "Sent another storm", "Ignored them", "Relented and did not bring the destruction"], 3, "Verse 10 says when God saw what they did and how they turned from their evil ways, he relented and did not bring destruction. God loves to forgive people who turn to him.", "Verse 10.")
        ],
        reflect: "God gave both Jonah and Nineveh a second chance. Who might need you to give them a second chance?" },
      { title: 'Jonah sulks; God cares', refs: [{ book: 'Jonah', ch: 4, from: 1, to: 11 }],
        retell: ["Jonah was angry that God forgave Nineveh. He admitted he ran away because he knew God is gracious, compassionate, slow to anger, and full of love, and he did not want God to forgive his enemies.", "Jonah sat outside the city to watch. God made a leafy plant grow to shade him, then sent a worm to make it wither, and a hot wind blew. When Jonah got angry about the plant, God asked: if Jonah cared about a plant, shouldn't God care about a great city with more than 120,000 people, and many animals too?"],
        questions: [
          Q("Why was Jonah angry?", ["The fish hurt him", "God showed compassion and did not destroy Nineveh", "No one listened to him", "He was hungry"], 1, "Verses 1-2 say Jonah was angry, and he told God he knew God was gracious and compassionate and would relent. He did not want his enemies forgiven.", "Verses 1-2."),
          Q("What made the leafy plant wither?", ["A worm God provided", "A storm", "Jonah pulled it up", "Too much rain"], 0, "Verse 7 says God provided a worm, which chewed the plant so that it withered.", "Verse 7."),
          Q("How many people did God say lived in Nineveh?", ["About 1,200", "More than 120,000", "Exactly 40,000", "Only a few hundred"], 1, "Verse 11 says there were more than 120,000 people in Nineveh. God cared about every one of them, and about the animals too.", "Verse 11.")
        ],
        reflect: "Jonah cared more about a plant than about people. Who is someone hard to love that God loves? How can you pray for them?" }
    ]
  });

  // ============================== WEEK 30 ==============================
  C.unit('bible', 30, {
    theme: 'Nehemiah rebuilds the wall',
    verse: { ref: 'Nehemiah 8:10', why: "After all their hard work, God's people learned that the joy of the LORD is their strength, and it can be ours too." },
    days: [
      { title: 'A broken wall and a praying heart', refs: [{ book: 'Nehemiah', ch: 1, from: 1, to: 11 }],
        retell: ["Nehemiah was a Jewish man serving the king of Persia in the city of Susa. When he heard that Jerusalem's wall was broken down and its gates burned, he sat down and cried, and for days he mourned, fasted, and prayed.", "Nehemiah praised God as great and awesome and confessed the sins of his people, including his own. He reminded God of his promise to gather his people again, and asked God to help him when he went to speak to the king. Nehemiah was the king's cupbearer."],
        questions: [
          Q("What news made Nehemiah so sad?", ["The king was sick", "His brother was lost", "Jerusalem's wall was broken down and its gates burned", "There was a famine in Persia"], 2, "Verse 3 says the wall of Jerusalem was broken down and its gates had been burned with fire. A city without walls had no protection.", "Verse 3."),
          Q("What did Nehemiah do when he heard the news?", ["He went straight to the king", "He wept, mourned, fasted, and prayed for days", "He ignored it", "He got angry"], 1, "Verse 4 says he sat down and wept, and for some days mourned, fasted, and prayed. Fasting means going without food for a time to focus on God.", "Verse 4."),
          Q("What was Nehemiah's job?", ["Soldier", "Priest", "Builder", "Cupbearer to the king"], 3, "Verse 11 says Nehemiah was cupbearer to the king. A cupbearer served the king's drinks and was a trusted servant.", "Verse 11.")
        ],
        reflect: "Nehemiah prayed before he did anything else. What is a problem you can pray about before you try to fix it?" },
      { title: 'A quick prayer and a big request', refs: [{ book: 'Nehemiah', ch: 2, from: 1, to: 8 }, { book: 'Nehemiah', ch: 2, from: 17, to: 20 }],
        retell: ["King Artaxerxes noticed Nehemiah looked sad and asked why. Nehemiah was very afraid, but he explained that the city of his ancestors lay in ruins. When the king asked what he wanted, Nehemiah prayed to God and then asked to go rebuild it.", "Because God's gracious hand was on him, the king said yes and even gave him letters and timber. In Jerusalem Nehemiah urged the people to rebuild the wall with him, and they agreed. When enemies mocked them, Nehemiah said the God of heaven would give them success."],
        questions: [
          Q("What did the king notice about Nehemiah?", ["His face looked sad", "He was late", "He was sick", "He spilled the wine"], 0, "Verse 2 says the king asked why his face looked so sad when he was not ill. Nehemiah had never been sad in the king's presence before (verse 1).", "Verses 1-2."),
          Q("What did Nehemiah do right before answering the king's question?", ["He ran away", "He asked the queen", "He prayed to the God of heaven", "He wrote a letter"], 2, "Verse 4 says Nehemiah prayed to the God of heaven and then answered the king. It was probably a quick, silent prayer right in the middle of the conversation.", "Verse 4."),
          Q("Why did the king grant Nehemiah's requests?", ["Nehemiah paid him", "The queen made him", "He wanted Nehemiah to leave", "Because the gracious hand of God was on Nehemiah"], 3, "Verse 8 says the king granted his requests because the gracious hand of God was on him. Nehemiah gave God the credit.", "Verse 8.")
        ],
        reflect: "Nehemiah said a quick prayer before he spoke. When could you say a quick prayer during your day?" },
      { title: 'Building with all their hearts', refs: [{ book: 'Nehemiah', ch: 4, from: 1, to: 9 }, { book: 'Nehemiah', ch: 4, from: 13, to: 18 }],
        retell: ["Enemies named Sanballat and Tobiah made fun of the builders. Tobiah joked that even a fox climbing on the wall would knock it down. Nehemiah prayed, and the people kept building, because they worked with all their heart.", "When the enemies plotted to attack, the people prayed and posted guards day and night. Nehemiah told them not to be afraid but to remember the Lord, who is great and awesome. From then on, half the men worked while the other half stood guard, and the builders wore swords at their sides."],
        questions: [
          Q("What did Tobiah say could knock down the wall?", ["A lion", "A fox climbing up on it", "A strong wind", "A child"], 1, "Verse 3 shows Tobiah mocking that even a fox climbing on the wall would break it down. He was trying to discourage them.", "Verse 3."),
          Q("Why was the wall built up to half its height so quickly?", ["They had machines", "The enemies helped", "The people worked with all their heart", "It was very short"], 2, "Verse 6 says they rebuilt the wall to half its height because the people worked with all their heart.", "Verse 6."),
          Q("What two things did the people do when enemies plotted against them?", ["Prayed to God and posted a guard day and night", "Ran and hid", "Gave up and went home", "Paid the enemies"], 0, "Verse 9 says they prayed to their God and posted a guard day and night. Trusting God and working hard go together.", "Verse 9.")
        ],
        reflect: "The builders kept going even when people made fun of them. What do you do when someone teases you for doing what is right?" },
      { title: 'Finished in fifty-two days', refs: [{ book: 'Nehemiah', ch: 6, from: 1, to: 9 }, { book: 'Nehemiah', ch: 6, from: 15, to: 16 }],
        retell: ["When the wall was almost finished, the enemies kept inviting Nehemiah to meet them, but they were planning to harm him. Nehemiah answered four times that he was doing a great work and could not stop to come down.", "They sent a letter full of lies, trying to scare him. Nehemiah said they were making it all up and prayed for God to strengthen his hands. The wall was finished in just fifty-two days, and the surrounding nations realized the work had been done with the help of God."],
        questions: [
          Q("How did Nehemiah answer the enemies' invitations?", ["He went to meet them", "He sent his brother", "He did not answer", "He said he was doing a great project and could not come down"], 3, "Verse 3 shows Nehemiah saying he was carrying on a great project and could not go down. He would not let distractions stop God's work.", "Verse 3."),
          Q("What did Nehemiah pray in verse 9?", ["For the enemies to win", "For God to strengthen his hands", "For more money", "For a new king"], 1, "Verse 9 says the enemies were trying to frighten them, and Nehemiah prayed for God to strengthen his hands.", "Verse 9."),
          Q("How long did it take to finish the wall?", ["Seven days", "Forty days", "Fifty-two days", "Three years"], 2, "Verse 15 says the wall was completed in fifty-two days. Verse 16 says even the enemies realized it was done with God's help.", "Verses 15-16.")
        ],
        reflect: "Nehemiah would not stop his good work for distractions. What distracts you from doing your best, and how can you stay focused?" },
      { title: "Reading God's Word", refs: [{ book: 'Nehemiah', ch: 8, from: 1, to: 12 }],
        retell: ["All the people gathered in a square in Jerusalem and asked Ezra the priest to bring out the Book of the Law. Ezra stood on a high wooden platform and read it aloud from early morning until noon, and everyone stood up and listened carefully. The Levites helped explain it so the people could understand.", "The people cried when they heard God's Word. But Nehemiah and Ezra told them this was a holy day, so they should not grieve, because the joy of the LORD is their strength. The people went to eat, share food with those who had none, and celebrate with great joy, because they now understood God's Word."],
        questions: [
          Q("Who read the Book of the Law to the people?", ["Ezra the priest", "Nehemiah", "The king", "Moses"], 0, "Verses 2-3 say Ezra the priest brought the Law before the assembly and read it aloud from daybreak till noon.", "Verses 2-3."),
          Q("What did the people do when Ezra opened the book?", ["They left", "They fell asleep", "They all stood up", "They argued"], 2, "Verse 5 says as Ezra opened it, the people all stood up. They showed great respect for God's Word.", "Verse 5."),
          Q("Why were the people so joyful at the end?", ["They got gifts", "Because they now understood the words that had been explained to them", "The wall was taller", "The enemies left"], 1, "Verse 12 says they celebrated with great joy because they now understood the words that had been made known to them. Understanding God's Word brings joy.", "Verse 12.")
        ],
        reflect: "The people found joy when they understood God's Word. What is one thing you have understood from the Bible this year that gives you joy?" }
    ]
  });

  // ============================== WEEK 31 ==============================
  C.unit('bible', 31, {
    theme: 'Jesus grows up; John the Baptist; Jesus is baptized and tempted',
    verse: { ref: 'Luke 2:52', why: "Jesus grew in wisdom, in body, and in favor with God and people, and God wants us to grow in all those ways too." },
    days: [
      { title: 'Jesus at the temple', refs: [{ book: 'Luke', ch: 2, from: 41, to: 52 }],
        retell: ["When Jesus was twelve, his family went to Jerusalem for the Passover. On the way home, Mary and Joseph realized Jesus was not with their group, so they went back to look for him.", "After three days they found him in the temple courts, sitting with the teachers, listening and asking questions, and everyone was amazed at how well he understood. Jesus asked if they did not know he had to be in his Father's house. Then he went home to Nazareth and obeyed his parents, and he grew in wisdom and stature and in favor with God and people."],
        questions: [
          Q("How old was Jesus in this story?", ["Eight", "Ten", "Twelve", "Thirty"], 2, "Verse 42 says when he was twelve years old, they went up to the festival. This is the only story in the Bible about Jesus as a boy.", "Verse 42."),
          Q("What was Jesus doing when his parents found him?", ["Playing with friends", "Selling doves", "Sleeping", "Sitting among the teachers, listening and asking questions"], 3, "Verse 46 says they found him in the temple courts, sitting among the teachers, listening to them and asking them questions.", "Verse 46."),
          Q("How did Jesus treat his parents after they went home?", ["He was obedient to them", "He ignored them", "He left home", "He argued with them"], 0, "Verse 51 says he went down to Nazareth with them and was obedient to them. Even the Son of God honored his parents.", "Verse 51.")
        ],
        reflect: "Jesus loved learning about God and obeyed his parents. Which of those two do you want to grow in most this week?" },
      { title: 'A voice in the wilderness', refs: [{ book: 'Matthew', ch: 3, from: 1, to: 12 }],
        retell: ["John the Baptist preached in the wilderness of Judea, telling people to repent, which means to turn away from sin and back to God, because the kingdom of heaven had come near. He wore clothes of camel's hair and ate locusts and wild honey.", "People came from all over to confess their sins and be baptized in the Jordan River. John said someone more powerful was coming after him, so great that John was not worthy to carry his sandals, and he would baptize with the Holy Spirit."],
        questions: [
          Q("What did John wear?", ["Fine linen", "A soldier's armor", "Clothes made of camel's hair with a leather belt", "A priest's robe"], 2, "Verse 4 says John's clothes were made of camel's hair and he had a leather belt around his waist.", "Verse 4."),
          Q("What did John eat?", ["Bread and fish", "Manna", "Fruit from trees", "Locusts and wild honey"], 3, "Verse 4 says his food was locusts and wild honey. Locusts are grasshopper-like insects, and some people still eat them today.", "Verse 4."),
          Q("What did John say about the one coming after him?", ["He would be weaker", "He would be more powerful, and John was not worthy to carry his sandals", "He would be John's student", "He would never come"], 1, "Verse 11 says the one coming after John was more powerful, and John was not worthy to carry his sandals. John was pointing to Jesus.", "Verse 11.")
        ],
        reflect: "John told people to repent and turn back to God. Is there something you need to turn away from and ask God to forgive?" },
      { title: 'Jesus is baptized', refs: [{ book: 'Matthew', ch: 3, from: 13, to: 17 }],
        retell: ["Jesus came to the Jordan River to be baptized by John. John tried to stop him, saying Jesus should baptize him instead, but Jesus said it was right to do this.", "As Jesus came up out of the water, heaven opened, and he saw the Spirit of God coming down like a dove and resting on him. A voice from heaven said this was God's Son, whom he loves and is well pleased with."],
        questions: [
          Q("Why did John not want to baptize Jesus at first?", ["The water was cold", "Jesus was too young", "He felt he needed to be baptized by Jesus instead", "He was busy"], 2, "Verse 14 shows John saying he needed to be baptized by Jesus. John knew Jesus had no sin.", "Verse 14."),
          Q("How did the Spirit of God come down on Jesus?", ["Like a dove", "Like fire", "Like a strong wind", "Like rain"], 0, "Verse 16 says Jesus saw the Spirit of God descending like a dove and alighting on him. Alighting means landing gently.", "Verse 16."),
          Q("What did the voice from heaven say about Jesus?", ["That Jesus is a prophet", "That Jesus should go home", "That Jesus is John's cousin", "That Jesus is his beloved Son, and he is pleased with him"], 3, "Verse 17 says the voice called Jesus his beloved Son, with whom he was well pleased. At Jesus' baptism we see the Father, the Son, and the Spirit together.", "Verse 17.")
        ],
        reflect: "God the Father said he loved his Son. How does it feel to know that God loves you as his child too?" },
      { title: 'Tempted in the wilderness', refs: [{ book: 'Matthew', ch: 4, from: 1, to: 11 }],
        retell: ["The Spirit led Jesus into the wilderness, where he fasted forty days and nights and was hungry. The devil tempted him three times: to turn stones into bread, to throw himself off the temple, and to worship the devil in exchange for all the kingdoms of the world.", "Each time, Jesus answered with Scripture, saying what is written in God's Word. Finally Jesus commanded Satan to go away. The devil left, and angels came and took care of Jesus."],
        questions: [
          Q("How long did Jesus fast in the wilderness?", ["Three days", "Seven days", "Forty days and forty nights", "One year"], 2, "Verse 2 says after fasting forty days and forty nights, he was hungry. This reminds us of Israel's forty years in the wilderness.", "Verse 2."),
          Q("What did the devil first tell Jesus to do?", ["Jump off a mountain", "Turn stones into bread", "Bow down to him", "Leave the wilderness"], 1, "Verse 3 says the tempter told Jesus to tell the stones to become bread. Jesus was hungry, but he trusted his Father instead.", "Verse 3."),
          Q("How did Jesus answer each temptation?", ["He quoted God's Word", "He argued with his own ideas", "He stayed silent", "He ran away"], 0, "In verses 4, 7, and 10 Jesus said it is written and answered with Scripture from Deuteronomy. God's Word is our weapon against temptation.", "Verses 4, 7, and 10.")
        ],
        reflect: "Jesus fought temptation with God's Word. Which memory verse from this year could help you when you are tempted?" },
      { title: 'Jesus calls fishermen', refs: [{ book: 'Matthew', ch: 4, from: 12, to: 25 }],
        retell: ["Jesus moved to Capernaum by the Sea of Galilee and began preaching that people should repent because the kingdom of heaven had come near.", "Walking by the sea, Jesus saw two fishermen, Simon Peter and his brother Andrew, and told them to follow him. Instead of catching fish, they would now gather people for God. Right away they left their nets. James and John left their boat and their father to follow him too. Jesus traveled through Galilee teaching, preaching good news, and healing every kind of sickness, and huge crowds followed him."],
        questions: [
          Q("What were Peter and Andrew doing when Jesus called them?", ["Building a house", "Selling fish at the market", "Casting a net into the lake", "Praying in the synagogue"], 2, "Verse 18 says they were casting a net into the lake, for they were fishermen.", "Verse 18."),
          Q("How quickly did Peter and Andrew follow Jesus?", ["After a week", "At once", "The next year", "They never did"], 1, "Verse 20 says at once they left their nets and followed him. They did not wait.", "Verse 20."),
          Q("Who were the other two brothers Jesus called?", ["Matthew and Thomas", "Philip and Bartholomew", "Mary and Martha", "James and John, sons of Zebedee"], 3, "Verses 21-22 say Jesus called James son of Zebedee and his brother John, and immediately they left the boat and their father and followed him.", "Verses 21-22.")
        ],
        reflect: "The fishermen left their nets to follow Jesus. What does following Jesus look like for a kid like you?" }
    ]
  });

  // ============================== WEEK 32 ==============================
  C.unit('bible', 32, {
    theme: 'The Sermon on the Mount',
    verse: { ref: 'Matthew 6:33', why: "Jesus taught that if we seek God's kingdom first, we do not need to worry, because our Father knows what we need." },
    days: [
      { title: 'The people God blesses', refs: [{ book: 'Matthew', ch: 5, from: 1, to: 12 }],
        retell: ["Jesus went up on a mountainside, sat down, and began to teach his disciples. He described the people God blesses, and his list surprised everyone.", "God blesses people who know they need him, people who mourn, the meek, those who hunger for what is right, the merciful, the pure in heart, and the peacemakers. Even people who are treated badly for following Jesus are blessed, because a great reward waits for them in heaven."],
        questions: [
          Q("Where did Jesus give this teaching?", ["On a mountainside", "On a boat", "In the temple", "In a house"], 0, "Verse 1 says Jesus went up on a mountainside and sat down to teach. That is why it is called the Sermon on the Mount.", "Verse 1."),
          Q("What does Jesus say the peacemakers will be called?", ["Kings", "Prophets", "Children of God", "Rich"], 2, "Verse 9 says peacemakers will be called children of God. A peacemaker helps people stop fighting and make up.", "Verse 9."),
          Q("What does Jesus say the pure in heart will see?", ["Gold", "Angels", "The sea", "God"], 3, "Verse 8 says the pure in heart will see God. Pure in heart means having a clean, honest, undivided love for God.", "Verse 8.")
        ],
        reflect: "Which blessing from Jesus' list do you most want to grow in, and why?" },
      { title: 'Salt, light, and love for enemies', refs: [{ book: 'Matthew', ch: 5, from: 13, to: 16 }, { book: 'Matthew', ch: 5, from: 43, to: 48 }],
        retell: ["Jesus told his followers they are the salt of the earth and the light of the world. No one lights a lamp and hides it, so they should let their good deeds shine so people praise their Father in heaven.", "Jesus also said to love your enemies and pray for people who treat you badly. God sends sunshine and rain on good and bad people alike, and his children should love like their Father does."],
        questions: [
          Q("What two things did Jesus say his followers are?", ["Rocks and trees", "Salt of the earth and light of the world", "Stars and sand", "Sheep and goats"], 1, "Verses 13-14 say you are the salt of the earth and the light of the world. Salt adds flavor and keeps food from spoiling; light helps people see.", "Verses 13-14."),
          Q("Why should we let our light shine?", ["So people praise us", "So we can win prizes", "So people see our good deeds and glorify our Father in heaven", "So it is not dark at night"], 2, "Verse 16 says to let your light shine so others may see your good deeds and glorify your Father in heaven. The goal is to point people to God.", "Verse 16."),
          Q("What does Jesus say to do for enemies?", ["Love them and pray for them", "Ignore them", "Get even", "Stay away forever"], 0, "Verse 44 says to love your enemies and pray for those who persecute you. That is hard, but it is how God loves.", "Verse 44.")
        ],
        reflect: "Is there someone who is hard for you to love? Write a short prayer for that person today." },
      { title: 'How to pray', refs: [{ book: 'Matthew', ch: 6, from: 5, to: 15 }],
        retell: ["Jesus said not to pray just to be seen by others, but to go somewhere private and pray to your Father, who sees in secret. We do not need to use lots of words, because our Father knows what we need before we ask.", "Then Jesus gave a model prayer: honor God's holy name, ask for his kingdom and his will to come, ask for our daily bread, ask forgiveness as we forgive others, and ask God to keep us from temptation and the evil one. Jesus said that forgiving others really matters to God."],
        questions: [
          Q("Where did Jesus say to go when you pray?", ["To the street corner", "To the top of a mountain", "In front of a crowd", "Into a private room with the door shut"], 3, "Verse 6 says to go into your room, close the door, and pray to your Father who is unseen. Prayer is about talking to God, not showing off.", "Verse 6."),
          Q("Why do we not need to babble on with many words?", ["God is not listening", "God already knows what we need before we ask", "Short prayers are always better", "Prayer does not matter"], 1, "Verse 8 says your Father knows what you need before you ask him. We can talk to him simply and honestly.", "Verse 8."),
          Q("What did Jesus say about forgiving others in verses 14-15?", ["God forgives people who forgive others", "It is optional", "Only forgive friends", "Forgiving is only for adults"], 0, "Verses 14-15 say that if you forgive others, your heavenly Father will also forgive you. People who know they are forgiven learn to forgive.", "Verses 14-15.")
        ],
        reflect: "Use Jesus' model prayer as a guide and write your own short prayer in your own words." },
      { title: 'Birds and flowers', refs: [{ book: 'Matthew', ch: 6, from: 25, to: 34 }],
        retell: ["Jesus told his followers not to worry about food or clothes. Look at the birds: they do not plant or store food, but God feeds them, and you are worth much more than birds.", "Look at the wildflowers: not even King Solomon was dressed as beautifully. If God dresses the grass so well, he will surely take care of you. So seek God's kingdom first, and do not worry about tomorrow."],
        questions: [
          Q("What does Jesus tell us to look at first?", ["The stars", "The mountains", "The birds of the air", "The ocean"], 2, "Verse 26 says to look at the birds. They do not sow, reap, or store food in barns, yet your heavenly Father feeds them.", "Verse 26."),
          Q("Which king did Jesus say was not dressed as beautifully as the flowers?", ["David", "Solomon", "Saul", "Herod"], 1, "Verse 29 says not even Solomon in all his splendor was dressed like one of these flowers. Remember how rich Solomon became?", "Verse 29."),
          Q("What can worrying add to your life, according to verse 27?", ["Many years", "More money", "More friends", "Not even a single hour"], 3, "Verse 27 asks whether any of you by worrying can add a single hour to your life. Worry does not help, but trusting God does.", "Verse 27.")
        ],
        reflect: "What is something you have been worrying about? Write it down and tell God you trust him with it." },
      { title: 'Build on the rock', refs: [{ book: 'Matthew', ch: 7, from: 7, to: 12 }, { book: 'Matthew', ch: 7, from: 24, to: 29 }],
        retell: ["Jesus said to keep asking, seeking, and knocking, because our Father loves to give good gifts to his children. Then he gave the rule many people call the Golden Rule: treat others the way you want them to treat you.", "Jesus ended with a story. A wise man built his house on rock, and when the storm came, it stood. A foolish man built on sand, and his house fell with a great crash. Hearing Jesus' words and doing them is like building on the rock."],
        questions: [
          Q("What three actions does Jesus tell us to keep doing in verse 7?", ["Ask, seek, and knock", "Run, jump, and climb", "Read, write, and sing", "Work, rest, and eat"], 0, "Verse 7 says ask, seek, and knock. Jesus is teaching us to keep praying and trusting our Father.", "Verse 7."),
          Q("What is the Golden Rule in verse 12?", ["Always win", "Keep your gold safe", "Treat others the way you want to be treated", "Only help your friends"], 2, "Verse 12 says in everything, do to others what you would have them do to you. Jesus said this sums up the Law and the Prophets.", "Verse 12."),
          Q("What is the wise builder like?", ["Someone who only listens", "Someone with a big house", "Someone who never has storms", "Someone who hears Jesus' words and puts them into practice"], 3, "Verse 24 says the person who hears Jesus' teaching and actually does it is like the wise builder. Storms came to both houses; only the one on the rock stood.", "Verses 24-25.")
        ],
        reflect: "Which teaching from this week will you put into practice? Write exactly what you will do." }
    ]
  });

  // ============================== WEEK 33 ==============================
  C.unit('bible', 33, {
    theme: 'Parables: the Good Samaritan, the lost sheep, coin, and son',
    verse: { ref: 'Luke 15:10', why: "Jesus' stories of lost things show that heaven celebrates whenever one person turns back to God." },
    days: [
      { title: 'The Good Samaritan', refs: [{ book: 'Luke', ch: 10, from: 25, to: 37 }],
        retell: ["An expert in God's law asked Jesus who his neighbor was. Jesus told a story about a man who was robbed, beaten, and left half dead on the road. A priest and a Levite both saw him and passed by on the other side.", "But a Samaritan, someone the Jewish people usually did not get along with, felt pity. He bandaged the man's wounds, put him on his own donkey, took him to an inn, and paid for his care. Jesus asked who was a neighbor, and when the expert said the one who showed mercy, Jesus told him to go and do the same."],
        questions: [
          Q("What question did the expert ask that led to the story?", ["Who is the greatest", "Who counts as his neighbor", "Where the inn was", "How to pray"], 1, "Verse 29 says he wanted to justify himself, so he asked Jesus, And who is my neighbor? Jesus answered with a story.", "Verse 29."),
          Q("What did the priest and the Levite do?", ["Helped the man", "Called for help", "Passed by on the other side", "Prayed for him"], 2, "Verses 31-32 say both saw the man and passed by on the other side. They were religious leaders, but they did not show mercy.", "Verses 31-32."),
          Q("What did the Samaritan do for the man?", ["Bandaged his wounds, took him to an inn, and paid for his care", "Gave him directions", "Called the police", "Left him some water"], 0, "Verses 33-35 say he took pity, bandaged his wounds, put him on his donkey, brought him to an inn, and paid the innkeeper. Real love is costly and practical.", "Verses 33-35.")
        ],
        reflect: "Jesus said to go and show mercy like the Samaritan. Who is a neighbor near you who needs help, and what could you do?" },
      { title: 'The lost sheep and the lost coin', refs: [{ book: 'Luke', ch: 15, from: 1, to: 10 }],
        retell: ["Religious leaders grumbled that Jesus welcomed sinners and ate with them. So Jesus told a story about a shepherd with one hundred sheep who lost one. He left the ninety-nine and searched until he found it, then carried it home on his shoulders and threw a party.", "Then Jesus told about a woman with ten silver coins who lost one. She lit a lamp, swept the house, and searched carefully until she found it, and she called her friends to celebrate. Jesus said heaven rejoices like that over one sinner who repents."],
        questions: [
          Q("Why were the Pharisees and teachers grumbling?", ["Jesus was late", "Jesus had no sheep", "Jesus was too loud", "Jesus welcomed sinners and ate with them"], 3, "Verse 2 says they muttered that this man welcomes sinners and eats with them. Jesus told these stories to show how God feels about lost people.", "Verse 2."),
          Q("How many sheep did the shepherd have in all?", ["Ten", "Fifty", "Ninety-nine", "One hundred"], 3, "Verse 4 says the man had a hundred sheep and lost one. He left the ninety-nine to find the one. Every single one mattered.", "Verse 4."),
          Q("What did the woman do to find her coin?", ["Gave up", "Lit a lamp, swept the house, and searched carefully", "Borrowed a new one", "Asked a neighbor to look"], 1, "Verse 8 says she lit a lamp, swept the house, and searched carefully until she found it.", "Verse 8.")
        ],
        reflect: "God searches for lost people like a shepherd looks for a lost sheep. How does it feel to know you matter that much to God?" },
      { title: 'The son who left', refs: [{ book: 'Luke', ch: 15, from: 11, to: 19 }],
        retell: ["A man had two sons. The younger son asked for his share of the family money early, went to a faraway country, and wasted it all on wild living.", "Then a famine came, and he was so hungry he took a job feeding pigs and wished he could eat their food. Finally he came to his senses. He decided to go home, tell his father he had sinned, and ask to be treated like a hired servant."],
        questions: [
          Q("What did the younger son ask his father for?", ["His share of the estate", "A new robe", "A job", "A horse"], 0, "Verse 12 says the younger son asked for his share of the estate. An estate is all the money and property a family owns.", "Verse 12."),
          Q("What job did the son end up doing?", ["Fishing", "Building houses", "Feeding pigs", "Selling bread"], 2, "Verse 15 says he was sent to the fields to feed pigs. For a Jewish listener, this was about as low as a person could fall.", "Verse 15."),
          Q("What does verse 17 say happened to the son?", ["He found treasure", "He came to his senses", "He became king", "He fell asleep"], 1, "Verse 17 says he came to his senses. He realized how foolish he had been and decided to go home and admit his sin.", "Verse 17.")
        ],
        reflect: "The son came to his senses and decided to go home. What does it look like for someone to come back to God after going the wrong way?" },
      { title: 'The father runs', refs: [{ book: 'Luke', ch: 15, from: 20, to: 24 }],
        retell: ["While the son was still a long way off, his father saw him, was filled with compassion, ran to him, hugged him, and kissed him.", "The son started to say he had sinned and was not worthy to be called a son. But the father called for the best robe, a ring, sandals, and a feast, because his son who was lost had been found."],
        questions: [
          Q("When did the father see his son?", ["When he knocked on the door", "The next morning", "After the feast", "While he was still a long way off"], 3, "Verse 20 says while he was still a long way off, his father saw him. The father must have been watching and waiting.", "Verse 20."),
          Q("What did the father do when he saw his son?", ["Ran to him, threw his arms around him, and kissed him", "Waited for him to apologize", "Turned away", "Sent a servant to scold him"], 0, "Verse 20 says the father was filled with compassion, ran to his son, threw his arms around him, and kissed him. This is a picture of how God welcomes us.", "Verse 20."),
          Q("Which of these did the father NOT call for?", ["The best robe", "A ring", "Sandals", "A crown"], 3, "Verses 22-23 list the best robe, a ring, sandals, and the fattened calf for a feast. There was no crown. These gifts showed he was welcomed back as a son, not a servant.", "Verses 22-23.")
        ],
        reflect: "The father ran to his son. Write a thank-you prayer to God for welcoming you with open arms." },
      { title: 'The older brother', refs: [{ book: 'Luke', ch: 15, from: 25, to: 32 }],
        retell: ["The older son came in from the field, heard music and dancing, and found out his brother was home. He was angry and refused to go in.", "The father went out and pleaded with him. The older son complained that he had worked hard for years and never got a party. The father said everything he had was his, but they had to celebrate, because his brother was lost and is found."],
        questions: [
          Q("What did the older brother hear as he came near the house?", ["Crying", "Arguing", "Music and dancing", "Silence"], 2, "Verse 25 says he heard music and dancing. A servant told him his brother had come home (verse 27).", "Verses 25-27."),
          Q("How did the older brother react?", ["He ran in happily", "He left home", "He brought a gift", "He became angry and refused to go in"], 3, "Verse 28 says he became angry and refused to go in. He did not share his father's joy.", "Verse 28."),
          Q("What did the father say to the older son?", ["That he should go away", "That the older son was always with him and everything he had was his", "That the older son should leave too", "That the younger brother was better"], 1, "Verse 31 shows the father telling him that he was always with him and everything he had was his. The father loved both sons.", "Verse 31.")
        ],
        reflect: "The older brother was jealous instead of glad. When someone else is forgiven or celebrated, how can you be happy for them?" }
    ]
  });

  // ============================== WEEK 34 ==============================
  C.unit('bible', 34, {
    theme: "Jesus' miracles",
    verse: { ref: 'Mark 5:36', why: "When things looked hopeless, Jesus told Jairus not to be afraid but to believe, and he says the same to us." },
    days: [
      { title: 'Jesus calms the storm', refs: [{ book: 'Mark', ch: 4, from: 35, to: 41 }],
        retell: ["Jesus and his disciples were crossing the lake in a boat when a furious storm came up and waves nearly filled the boat. Jesus was asleep on a cushion, and the frightened disciples woke him and asked if he cared that they were about to drown.", "Jesus got up, spoke to the wind and the waves, and they became completely calm. He asked why they were so afraid and if they still had no faith. The disciples were amazed and asked each other who this was, that even the wind and waves obey him."],
        questions: [
          Q("What was Jesus doing during the storm?", ["Rowing", "Praying on the shore", "Sleeping on a cushion", "Fishing"], 2, "Verse 38 says Jesus was in the stern, sleeping on a cushion. The stern is the back of the boat.", "Verse 38."),
          Q("What did the disciples ask when they woke Jesus?", ["Whether Jesus cared that they were about to drown", "Where they were going", "Whether they could go home", "Whether Jesus was hungry"], 0, "Verse 38 shows them asking Jesus if he did not care if they drowned. Fear made them doubt Jesus' love.", "Verse 38."),
          Q("What happened when Jesus spoke to the wind and waves?", ["The storm got worse", "The boat sank", "It started to snow", "The wind died down and it was completely calm"], 3, "Verse 39 says the wind died down and it was completely calm. Only God has power over nature like that.", "Verse 39.")
        ],
        reflect: "The disciples asked if Jesus cared. When you are scared, what can you remind yourself about Jesus?" },
      { title: 'A woman reaches out', refs: [{ book: 'Mark', ch: 5, from: 21, to: 34 }],
        retell: ["A synagogue leader named Jairus fell at Jesus' feet and begged him to come heal his little daughter, who was dying. As Jesus went, a big crowd pressed around him.", "In the crowd was a woman who had been sick with bleeding for twelve years and had spent all her money on doctors. She thought that if she only touched his clothes she would be healed, and when she did, she was healed at once! Jesus asked who touched him. Trembling, she told him everything, and Jesus kindly called her daughter and said her faith had healed her."],
        questions: [
          Q("Why did Jairus come to Jesus?", ["To ask a question", "His little daughter was dying", "He wanted to join the disciples", "He was sick"], 1, "Verse 23 says Jairus pleaded that his little daughter was dying and asked Jesus to come put his hands on her.", "Verse 23."),
          Q("How long had the woman been sick?", ["Twelve days", "Twelve months", "Twelve years", "Three years"], 2, "Verse 25 says she had been subject to bleeding for twelve years. Nothing the doctors did had helped (verse 26).", "Verses 25-26."),
          Q("What did Jesus call the woman?", ["Daughter", "Stranger", "Sinner", "Servant"], 0, "Verse 34 says Jesus called her Daughter and said her faith had healed her. He healed her body and welcomed her as family.", "Verse 34.")
        ],
        reflect: "The woman reached out to Jesus when nothing else had worked. What do you need to bring to Jesus today?" },
      { title: "Jairus' daughter lives", refs: [{ book: 'Mark', ch: 5, from: 35, to: 43 }],
        retell: ["Messengers came and told Jairus his daughter had died. Jesus heard them and told Jairus not to be afraid, just believe.", "At the house, people were crying loudly. Jesus said the child was not dead but asleep, and they laughed at him. Jesus took her parents and Peter, James, and John into her room, held her hand, and told her to get up. The twelve-year-old girl stood up and walked around, and Jesus told them to give her something to eat."],
        questions: [
          Q("What did Jesus tell Jairus after hearing the bad news?", ["Go home", "It is too late", "Don't be afraid; just believe", "Ask someone else"], 2, "Verse 36 shows Jesus telling Jairus not to be afraid and just believe. This is our memory verse this week.", "Verse 36."),
          Q("Which three disciples went with Jesus?", ["Andrew, Philip, and Thomas", "Peter, James, and John", "Matthew, Judas, and Simon", "James, Andrew, and Philip"], 1, "Verse 37 says Jesus let no one follow him except Peter, James, and John the brother of James.", "Verse 37."),
          Q("How old was the girl?", ["Five", "Eight", "Sixteen", "Twelve"], 3, "Verse 42 says she was twelve years old. That is the same number of years the woman had been sick. Jesus cared for both.", "Verse 42.")
        ],
        reflect: "Jesus told Jairus to keep believing even when things looked hopeless. What helps you keep believing when things look bad?" },
      { title: 'Five loaves and two fish', refs: [{ book: 'Mark', ch: 6, from: 30, to: 44 }],
        retell: ["Jesus and his apostles tried to go to a quiet place to rest, but a huge crowd ran ahead and was waiting. Jesus had compassion on them, because they were like sheep without a shepherd, and he taught them.", "When it got late, the disciples found only five loaves and two fish. Jesus had the people sit in groups on the green grass, gave thanks, broke the bread, and gave it to the disciples to pass out. Everyone ate and was satisfied, and there were twelve baskets of leftovers. About five thousand men ate."],
        questions: [
          Q("Why did Jesus have compassion on the crowd?", ["They were like sheep without a shepherd", "They were rich", "They were loud", "They brought food"], 0, "Verse 34 says Jesus had compassion on them because they were like sheep without a shepherd. Compassion means caring deeply and wanting to help.", "Verse 34."),
          Q("What food did the disciples find?", ["Seven loaves and three fish", "Five loaves and two fish", "Twelve baskets of bread", "Ten fish"], 1, "Verse 38 says they had five loaves and two fish. It was not nearly enough, but Jesus multiplied it.", "Verse 38."),
          Q("How many baskets of leftovers were picked up?", ["Two", "Five", "Seven", "Twelve"], 3, "Verse 43 says the disciples picked up twelve basketfuls of broken pieces of bread and fish. Jesus gave more than enough.", "Verse 43.")
        ],
        reflect: "Jesus used a small amount of food to feed thousands. What small thing could you offer to Jesus for him to use?" },
      { title: 'Walking on the water', refs: [{ book: 'Mark', ch: 6, from: 45, to: 52 }],
        retell: ["Jesus sent his disciples ahead in the boat and went up on a mountainside to pray. During the night, he saw them straining at the oars because the wind was against them.", "Shortly before dawn, Jesus came to them walking on the lake. They thought he was a ghost and were terrified, but he told them to take courage, it was him, and not to be afraid. When he climbed into the boat, the wind died down, and they were completely amazed."],
        questions: [
          Q("What did Jesus do after sending the crowd away?", ["Went to sleep", "Went fishing", "Went up on a mountainside to pray", "Went to Jerusalem"], 2, "Verse 46 says after leaving them, he went up on a mountainside to pray. Even Jesus made time alone with his Father.", "Verse 46."),
          Q("What did the disciples think when they saw Jesus on the water?", ["That he was an angel", "That he was swimming", "That he was on a raft", "That he was a ghost"], 3, "Verse 49 says they thought he was a ghost and cried out. Verse 50 says they were all terrified.", "Verses 49-50."),
          Q("What happened when Jesus climbed into the boat?", ["It sank", "The wind died down", "It started raining", "The disciples jumped out"], 1, "Verse 51 says he climbed into the boat with them and the wind died down. Jesus brings calm.", "Verse 51.")
        ],
        reflect: "Jesus told his scared disciples to take courage because he was there. Where do you need courage this week?" }
    ]
  });

  // ============================== WEEK 35 ==============================
  C.unit('bible', 35, {
    theme: 'Jesus welcomes children; Zacchaeus; blind Bartimaeus',
    verse: { ref: 'Luke 19:10', why: "Jesus said he came to seek and to save the lost, which is why he welcomed children, a blind beggar, and a tax collector." },
    days: [
      { title: 'Jesus welcomes children', refs: [{ book: 'Mark', ch: 10, from: 13, to: 22 }],
        retell: ["People brought little children to Jesus so he could bless them, but the disciples told them to stop. Jesus was upset with the disciples and said to let the children come, because God's kingdom belongs to people like them. He took the children in his arms and blessed them.", "Then a rich man ran up and asked how to have eternal life. Jesus looked at him and loved him, and told him to sell what he had, give to the poor, and follow him. The man went away sad, because he had great wealth."],
        questions: [
          Q("How did Jesus feel when the disciples stopped the children?", ["Pleased", "Sleepy", "Indignant", "Confused"], 2, "Verse 14 says when Jesus saw this, he was indignant. Indignant means upset because something is unfair or wrong. Children matter to Jesus.", "Verse 14."),
          Q("What did Jesus do with the children?", ["Took them in his arms, put his hands on them, and blessed them", "Sent them home", "Gave them bread", "Taught them a song"], 0, "Verse 16 says he took the children in his arms, placed his hands on them, and blessed them.", "Verse 16."),
          Q("Why did the rich man go away sad?", ["Jesus was unkind", "He was sick", "He lost his way", "He had great wealth and did not want to give it up"], 3, "Verse 22 says his face fell and he went away sad, because he had great wealth. He loved his riches more than following Jesus.", "Verse 22.")
        ],
        reflect: "Jesus welcomed children with open arms. How does it feel to know Jesus wants you to come to him?" },
      { title: 'Great means serving', refs: [{ book: 'Mark', ch: 10, from: 35, to: 45 }],
        retell: ["James and John asked Jesus to let them sit in the places of highest honor next to him in his glory. When the other ten disciples heard, they were angry with them.", "Jesus gathered them and explained that in his kingdom, whoever wants to be great must be a servant, and whoever wants to be first must serve everyone. Even Jesus did not come to be served, but to serve and give his life as a ransom for many."],
        questions: [
          Q("What did James and John ask for?", ["Money", "To sit at Jesus' right and left in his glory", "A boat", "To go home"], 1, "Verse 37 says they asked to sit one at his right and one at his left in his glory. Those were the places of the most honor.", "Verse 37."),
          Q("How did the other ten disciples feel?", ["Indignant with James and John", "Happy", "Sleepy", "Proud"], 0, "Verse 41 says when the ten heard about this, they became indignant with James and John. Wanting to be the most important causes fights.", "Verse 41."),
          Q("What did Jesus say about himself in verse 45?", ["He came to be served", "He came to be a king on earth", "He came to serve and give his life as a ransom for many", "He came to judge"], 2, "In verse 45 Jesus said he came to serve others and to give his life to pay the price to set many people free. A ransom is a price paid to set someone free.", "Verse 45.")
        ],
        reflect: "Jesus says being great means serving. What is one way you can serve someone at home this week?" },
      { title: 'Blind Bartimaeus', refs: [{ book: 'Mark', ch: 10, from: 46, to: 52 }],
        retell: ["As Jesus was leaving Jericho, a blind beggar named Bartimaeus sat by the road. When he heard Jesus was passing, he shouted for Jesus, Son of David, to have mercy on him.", "Many people told him to be quiet, but he shouted even louder, so Jesus stopped and called him. Bartimaeus threw his cloak aside, jumped up, and came. Jesus asked what he wanted, and he said he wanted to see. Jesus said his faith had healed him, and right away he could see, and he followed Jesus."],
        questions: [
          Q("What did Bartimaeus do when people told him to be quiet?", ["He stopped", "He shouted all the more", "He went home", "He cried quietly"], 1, "Verse 48 says many rebuked him and told him to be quiet, but he shouted all the more. He would not give up.", "Verse 48."),
          Q("What did Bartimaeus do when Jesus called him?", ["Stayed sitting", "Asked for money", "Ran away", "Threw his cloak aside, jumped up, and came"], 3, "Verse 50 says he threw his cloak aside, jumped to his feet, and came to Jesus. He was eager!", "Verse 50."),
          Q("What did Bartimaeus do after he could see?", ["Followed Jesus along the road", "Went home", "Stayed in Jericho", "Went to the temple"], 0, "Verse 52 says immediately he received his sight and followed Jesus along the road. He used his new sight to follow Jesus.", "Verse 52.")
        ],
        reflect: "Bartimaeus kept calling to Jesus even when others told him to stop. Why is it important to keep praying even when it is hard?" },
      { title: 'Zacchaeus meets Jesus', refs: [{ book: 'Luke', ch: 19, from: 1, to: 10 }],
        retell: ["In Jericho there was a rich chief tax collector named Zacchaeus. He wanted to see Jesus, but he was short and could not see over the crowd, so he ran ahead and climbed a sycamore-fig tree.", "When Jesus got there, he looked up, called Zacchaeus by name, and said he must stay at his house today. People grumbled that Jesus was visiting a sinner, but Zacchaeus changed. He promised to give half his possessions to the poor and pay back four times as much to anyone he had cheated. Jesus said salvation had come to his house, because Jesus came to seek and save the lost."],
        questions: [
          Q("Why did Zacchaeus climb a tree?", ["To pick fruit", "To hide from Jesus", "He was short and could not see over the crowd", "To get away from the crowd"], 2, "Verses 3-4 say he wanted to see Jesus but was short, so he ran ahead and climbed a sycamore-fig tree.", "Verses 3-4."),
          Q("What did Jesus say to Zacchaeus?", ["To stay up in the tree", "That he was a sinner and should go away", "To hand over his money", "To come down, because Jesus must stay at his house today"], 3, "Verse 5 shows Jesus telling Zacchaeus to come down immediately, because he must stay at his house today. Jesus knew his name!", "Verse 5."),
          Q("How much did Zacchaeus promise to pay back anyone he had cheated?", ["The same amount", "Four times the amount", "Twice as much", "Nothing"], 1, "Verse 8 says he would pay back four times the amount. Meeting Jesus changed his heart, and it showed in his actions.", "Verse 8.")
        ],
        reflect: "Meeting Jesus changed how Zacchaeus treated people. How has knowing Jesus changed the way you act?" },
      { title: 'The King on a colt', refs: [{ book: 'Luke', ch: 19, from: 28, to: 40 }],
        retell: ["Jesus sent two disciples to a village to bring a young colt no one had ever ridden, and things happened just as he said. They put their cloaks on the colt, and Jesus rode it toward Jerusalem while people spread their cloaks on the road.", "As they came down the Mount of Olives, the crowd of disciples joyfully praised God for all the miracles they had seen and welcomed Jesus as the king who comes in the name of the Lord. Some Pharisees told Jesus to quiet his disciples, but Jesus said that if they kept quiet, the stones would cry out."],
        questions: [
          Q("What animal did Jesus ride into Jerusalem?", ["A horse", "A camel", "A colt no one had ever ridden", "An ox"], 2, "Verse 30 says they would find a colt tied there that no one had ever ridden. A colt is a young animal; Matthew and John tell us it was a donkey's colt.", "Verse 30."),
          Q("What did people spread on the road?", ["Their cloaks", "Gold coins", "Flowers", "Sand"], 0, "Verse 36 says people spread their cloaks on the road as he went along. It was a way of honoring a king.", "Verse 36."),
          Q("What did Jesus say would happen if the disciples kept quiet?", ["Nothing", "The temple would fall", "It would rain", "The stones would cry out"], 3, "Verse 40 shows Jesus saying that if they kept quiet, the stones would cry out. Jesus deserves praise.", "Verse 40.")
        ],
        reflect: "The crowd praised Jesus as King. Write three reasons you want to praise Jesus." }
    ]
  });

  // ============================== WEEK 36 ==============================
  C.unit('bible', 36, {
    theme: 'The church begins',
    verse: { ref: 'Acts 1:8', why: "Jesus promised his followers power from the Holy Spirit to be his witnesses everywhere, and that mission includes us." },
    days: [
      { title: 'Jesus goes up to heaven', refs: [{ book: 'Acts', ch: 1, from: 1, to: 11 }],
        retell: ["After Jesus rose from the dead, he appeared to his apostles over forty days and gave them many convincing proofs that he was alive. He told them to wait in Jerusalem for the Holy Spirit, who would give them power to be his witnesses in Jerusalem, Judea, Samaria, and to the ends of the earth.", "Then Jesus was taken up before their eyes, and a cloud hid him. Two men dressed in white appeared and said that Jesus would come back the same way they had seen him go."],
        questions: [
          Q("How long did Jesus appear to his apostles after his resurrection?", ["Three days", "Seven days", "Forty days", "One year"], 2, "Verse 3 says he appeared to them over a period of forty days and spoke about the kingdom of God.", "Verse 3."),
          Q("What did Jesus say they would receive when the Holy Spirit came?", ["Gold", "Power", "A new name", "A kingdom right away"], 1, "Verse 8 says they would receive power when the Holy Spirit came on them, and they would be his witnesses. A witness tells what they have seen and know.", "Verse 8."),
          Q("What did the two men in white say?", ["Jesus will come back in the same way you saw him go", "Jesus is gone forever", "Go back to fishing", "Build a temple here"], 0, "Verse 11 shows them saying this same Jesus will come back in the same way they saw him go into heaven. Christians look forward to Jesus' return.", "Verse 11.")
        ],
        reflect: "Jesus wants his followers to tell others about him. Who is one person you could tell something true about Jesus?" },
      { title: 'Wind, fire, and many languages', refs: [{ book: 'Acts', ch: 1, from: 12, to: 14 }, { book: 'Acts', ch: 2, from: 1, to: 13 }],
        retell: ["The apostles went back to Jerusalem and prayed together constantly with Mary the mother of Jesus and others. On the day of Pentecost, they were all together when a sound like a violent wind filled the house, and what looked like tongues of fire rested on each of them.", "They were filled with the Holy Spirit and began speaking in other languages. Jewish visitors from many nations heard them telling the wonders of God in their own languages, and they were amazed. A few people made fun and said they were drunk."],
        questions: [
          Q("What were the believers doing while they waited?", ["Fishing", "Traveling", "Praying together constantly", "Sleeping"], 2, "Acts 1:14 says they all joined together constantly in prayer. Waiting on God and praying go together.", "Acts 1:14."),
          Q("What sound came from heaven on Pentecost?", ["A trumpet", "Like the blowing of a violent wind", "Thunder", "Singing"], 1, "Acts 2:2 says a sound like the blowing of a violent wind came from heaven and filled the whole house.", "Acts 2:2."),
          Q("Why were the visitors amazed?", ["The apostles were rich", "It was raining", "They saw an angel", "Each heard the believers speaking in his own native language"], 3, "Acts 2:6-8 says each one heard them speaking in his own language. God made sure people from many nations could hear the good news.", "Acts 2:6-8.")
        ],
        reflect: "God gave the believers the words to share his good news. How does the Holy Spirit help Christians today?" },
      { title: "Peter's sermon", refs: [{ book: 'Acts', ch: 2, from: 14, to: 24 }, { book: 'Acts', ch: 2, from: 32, to: 36 }],
        retell: ["Peter stood up and explained that the believers were not drunk; it was only nine in the morning! This was what the prophet Joel said would happen when God poured out his Spirit.", "Peter told the crowd that Jesus did miracles by God's power, was handed over by God's plan, and was put to death on a cross, but God raised him from the dead, because death could not hold him. Peter said they were all witnesses, and that God had made Jesus both Lord and Messiah."],
        questions: [
          Q("What time of day was it, according to Peter?", ["Nine in the morning", "Midnight", "Noon", "Sunset"], 0, "Acts 2:15 shows Peter saying it was only nine in the morning, so the believers could not be drunk.", "Acts 2:15."),
          Q("Which prophet did Peter say had spoken about this?", ["Isaiah", "Jonah", "Joel", "Elijah"], 2, "Acts 2:16 says this is what was spoken by the prophet Joel. God had promised long before to pour out his Spirit.", "Acts 2:16."),
          Q("Why could death not keep its hold on Jesus?", ["The tomb was open", "He was only sleeping", "The soldiers let him go", "God raised him from the dead, and it was impossible for death to hold him"], 3, "Acts 2:24 says God raised him from the dead, because it was impossible for death to keep its hold on him. Jesus is stronger than death.", "Acts 2:24.")
        ],
        reflect: "Peter, who once denied Jesus, now boldly preached about him. How does Peter's change encourage you?" },
      { title: 'Three thousand believe', refs: [{ book: 'Acts', ch: 2, from: 37, to: 41 }],
        retell: ["When the people heard Peter's message, they were cut to the heart and asked what they should do.", "Peter told them to repent and be baptized in the name of Jesus Christ for the forgiveness of their sins, and they would receive the gift of the Holy Spirit. He said this promise was for them, their children, and people far away. About three thousand people believed and were baptized that day."],
        questions: [
          Q("How did the people feel after Peter's sermon?", ["Bored", "Cut to the heart", "Angry at Peter", "Sleepy"], 1, "Verse 37 says they were cut to the heart. That means they felt deep sorrow because they understood their sin.", "Verse 37."),
          Q("Who did Peter say the promise was for?", ["Only the apostles", "Only adults", "You, your children, and all who are far off whom God will call", "Only people in Jerusalem"], 2, "In verse 39 Peter said the promise was for the people listening, for their children, and for people far away. That includes you!", "Verse 39."),
          Q("About how many people were added that day?", ["Twelve", "One hundred twenty", "Three thousand", "Five thousand"], 2, "Verse 41 says about three thousand were added to their number that day. The church grew quickly.", "Verse 41.")
        ],
        reflect: "Peter said God's promise is for children too. What does it mean to you that God's promise includes you?" },
      { title: 'The first church family', refs: [{ book: 'Acts', ch: 2, from: 42, to: 47 }],
        retell: ["The new believers devoted themselves to the apostles' teaching, to fellowship, to sharing meals, and to prayer. They were filled with awe at the wonders God did through the apostles.", "They shared what they had, even selling possessions to help anyone in need. They met every day in the temple courts, ate together in their homes with glad and sincere hearts, and praised God. And every day the Lord added more people who were being saved."],
        questions: [
          Q("Which four things did the believers devote themselves to?", ["Teaching, fellowship, breaking bread, and prayer", "Work, sleep, play, and eat", "Fishing, farming, building, and trading", "Singing, dancing, travel, and games"], 0, "Verse 42 lists the apostles' teaching, fellowship, the breaking of bread, and prayer. Fellowship means sharing life together as God's family.", "Verse 42."),
          Q("What did the believers do with their possessions?", ["Kept them hidden", "Burned them", "Gave them to the king", "Sold them to give to anyone in need"], 3, "Verse 45 says they sold property and possessions to give to anyone who had need. Love made them generous.", "Verse 45."),
          Q("Who added people to the church every day?", ["Peter", "The Lord", "The priests", "The Romans"], 1, "Verse 47 says the Lord added to their number daily those who were being saved. The church grows because of God.", "Verse 47.")
        ],
        reflect: "The first Christians loved and shared with each other. What is one way you can help your church family?" }
    ]
  });

  // ============================== WEEK 37 ==============================
  C.unit('bible', 37, {
    theme: 'Paul: from Saul to missionary',
    verse: { ref: '2 Corinthians 5:17', why: "Saul was completely changed when he met Jesus, and this verse promises that anyone who is in Christ is a new creation." },
    days: [
      { title: 'A light on the road', refs: [{ book: 'Acts', ch: 9, from: 1, to: 9 }],
        retell: ["Saul hated the followers of Jesus and was on his way to Damascus to arrest any he found and bring them back to Jerusalem as prisoners. As he got close to the city, a light from heaven suddenly flashed around him.", "Saul fell to the ground and heard a voice asking why he was persecuting him. It was Jesus, and he told Saul to go into the city and wait. When Saul got up, he could not see, so his companions led him by the hand. For three days he was blind and did not eat or drink."],
        questions: [
          Q("Why was Saul going to Damascus?", ["To arrest followers of the Way and take them to Jerusalem", "To visit family", "To buy food", "To preach about Jesus"], 0, "Verses 1-2 say Saul asked for letters so he could take as prisoners anyone who belonged to the Way. The Way was an early name for following Jesus.", "Verses 1-2."),
          Q("Who spoke to Saul from the light?", ["An angel", "Moses", "Jesus", "Peter"], 2, "Verse 5 shows the voice saying it was Jesus, whom Saul was persecuting. Hurting Jesus' followers was the same as hurting Jesus.", "Verse 5."),
          Q("How long was Saul blind?", ["One hour", "One day", "Three days", "Forty days"], 2, "Verse 9 says for three days he was blind and did not eat or drink anything.", "Verse 9.")
        ],
        reflect: "Jesus stopped Saul right in the middle of doing wrong. Can anyone be too far from God for Jesus to reach? Why or why not?" },
      { title: 'Ananias obeys', refs: [{ book: 'Acts', ch: 9, from: 10, to: 19 }],
        retell: ["God told a believer named Ananias to go to Saul and place his hands on him so he could see again. Ananias was afraid, because he had heard how much harm Saul had done to God's people.", "But God said Saul was his chosen instrument to tell the Gentiles, kings, and Israel about him. So Ananias went, called him Brother Saul, and placed his hands on him. Something like scales fell from Saul's eyes, he could see again, and he was baptized."],
        questions: [
          Q("Why was Ananias afraid to go to Saul?", ["He did not know the way", "He had heard about all the harm Saul had done to God's people", "It was raining", "Saul was sick"], 1, "Verses 13-14 show Ananias telling God he had heard many reports about the harm Saul had done and that Saul came to arrest believers.", "Verses 13-14."),
          Q("What did God call Saul?", ["His enemy", "A lost cause", "A soldier", "His chosen instrument"], 3, "Verse 15 says Saul was God's chosen instrument to proclaim his name to the Gentiles and their kings and to the people of Israel. Gentiles are people who are not Jewish.", "Verse 15."),
          Q("What did Ananias call Saul when he met him?", ["Brother Saul", "Enemy", "Sir", "Prisoner"], 0, "Verse 17 says Ananias called him Brother Saul. That was a brave and loving welcome to someone who used to be an enemy.", "Verse 17.")
        ],
        reflect: "Ananias obeyed God even though he was scared. When have you done the right thing even though you were nervous?" },
      { title: 'From enemy to preacher', refs: [{ book: 'Acts', ch: 9, from: 20, to: 31 }],
        retell: ["Right away Saul began preaching in the synagogues that Jesus is the Son of God, and people were astonished. When some made a plan to kill him, his followers lowered him in a basket through an opening in the city wall at night.", "In Jerusalem the disciples were afraid of Saul at first. But Barnabas brought him to the apostles and told how Saul had met the Lord and preached boldly. After that, the church had a time of peace and kept growing."],
        questions: [
          Q("What did Saul begin preaching?", ["That Jesus was a fake", "That everyone should go to Damascus", "That Jesus is the Son of God", "That the temple was closed"], 2, "Verse 20 says at once he began to preach in the synagogues that Jesus is the Son of God. What a change!", "Verse 20."),
          Q("How did Saul escape from Damascus?", ["On a horse", "He hid in a boat", "He walked out the front gate", "He was lowered in a basket through an opening in the wall"], 3, "Verse 25 says his followers took him by night and lowered him in a basket through an opening in the wall.", "Verse 25."),
          Q("Who helped the disciples in Jerusalem accept Saul?", ["Peter", "Barnabas", "Ananias", "John"], 1, "Verse 27 says Barnabas took him and brought him to the apostles. Barnabas means son of encouragement (Acts 4:36), and he lived up to his name.", "Verse 27.")
        ],
        reflect: "Barnabas helped people trust Saul. How can you be an encourager like Barnabas for someone who feels left out?" },
      { title: 'Lydia believes', refs: [{ book: 'Acts', ch: 16, from: 6, to: 15 }],
        retell: ["Saul, now called Paul, traveled to tell people about Jesus. One night he had a vision of a man from Macedonia begging him to come over and help them, so Paul and his friends went right away.", "In the city of Philippi, on the Sabbath, they went to a place of prayer by the river and talked with some women. A businesswoman named Lydia, who sold purple cloth, listened, and the Lord opened her heart to believe. She and her household were baptized, and she invited Paul and his friends to stay at her house."],
        questions: [
          Q("What did Paul see in his vision?", ["A burning bush", "A ladder to heaven", "A man of Macedonia begging him to come and help", "A ship sinking"], 2, "Verse 9 says Paul had a vision of a man of Macedonia standing and begging him to come over to Macedonia and help them.", "Verse 9."),
          Q("Where did Paul meet Lydia?", ["At a place of prayer by the river", "In the marketplace", "In the jail", "On a ship"], 0, "Verse 13 says on the Sabbath they went outside the city gate to the river, where they expected to find a place of prayer.", "Verse 13."),
          Q("What did Lydia sell?", ["Bread", "Fish", "Pottery", "Purple cloth"], 3, "Verse 14 says Lydia was a dealer in purple cloth. Purple cloth was expensive, so she was likely a successful businesswoman.", "Verse 14.")
        ],
        reflect: "The Lord opened Lydia's heart to believe. Who could you pray for, asking God to open their heart to Jesus?" },
      { title: 'Singing at midnight', refs: [{ book: 'Acts', ch: 16, from: 22, to: 34 }],
        retell: ["In Philippi, Paul and Silas were beaten and thrown into prison with their feet in stocks. Around midnight they were praying and singing hymns to God while the other prisoners listened.", "Suddenly an earthquake shook the prison, the doors flew open, and everyone's chains came loose. The jailer was terrified, but Paul called out that everyone was still there. The jailer asked what he must do to be saved, and they told him to believe in the Lord Jesus. That night the jailer and his whole household believed and were baptized, and he was filled with joy."],
        questions: [
          Q("What were Paul and Silas doing at midnight?", ["Sleeping", "Praying and singing hymns to God", "Trying to escape", "Complaining"], 1, "Verse 25 says about midnight Paul and Silas were praying and singing hymns to God, and the other prisoners were listening.", "Verse 25."),
          Q("What happened when the earthquake hit?", ["The doors flew open and everyone's chains came loose", "The roof fell", "The guards ran away", "Nothing happened"], 0, "Verse 26 says the prison doors flew open and everyone's chains came loose. Yet no one ran away.", "Verse 26."),
          Q("What did Paul and Silas tell the jailer to do to be saved?", ["Pay money", "Let them go", "Believe in the Lord Jesus", "Go to the temple"], 2, "In verse 31 they told the jailer that if he believed in the Lord Jesus, he and his household would be saved. Salvation is a gift we receive by faith.", "Verse 31.")
        ],
        reflect: "Paul and Silas praised God in a hard place. What is something you can thank God for even on a hard day?" }
    ]
  });


})(typeof window !== 'undefined' ? window : globalThis);
