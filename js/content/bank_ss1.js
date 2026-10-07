/* Social Studies bank, weeks 5-21: GSE grade 4 US history to Reconstruction, then grade 5 preview. All text original. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  // ---------------- Week 5 ----------------
  C.unit('social', 5, {
    title: "Native American cultures I: Inuit, Kwakiutl, Nez Perce",
    standard: 'SS4H1',
    learn: [
      { h: "Environment shapes life", p: "Long before Europeans came, many Native American groups lived across North America. Each group used what its land offered. The weather, plants, animals, and water around them decided what they ate, what they wore, and how they built homes." },
      { h: "Three regions", p: "The Inuit lived in the frozen Arctic. The Kwakiutl lived on the rainy Northwest Coast, by the ocean and huge cedar forests. The Nez Perce lived on the Plateau, a high, flat land with rivers, between tall mountain ranges." },
      { h: "How to compare cultures", p: "When you study a group, ask four questions: Where did they live? What did they eat? What were their homes made of? How did their environment help or limit them? These questions work for every culture you will study." }
    ],
    passage: [
      "The Inuit live in the Arctic, the cold land at the top of the world in places like Alaska, northern Canada, and Greenland. Winters there are long and dark, and very few plants grow. Because farming was impossible, the Inuit became skilled hunters and fishers. They hunted seals, whales, walrus, and caribou. Nothing was wasted. Animals gave them meat, warm skins for clothing, oil for lamps, and bones for tools.",
      "For winter hunting trips, some Inuit built igloos, dome-shaped shelters made of blocks of packed snow. Other homes were built partly underground and covered with sod, which is earth held together by grass roots. In summer they lived in tents made of animal skins. They traveled by dog sled over snow and by kayak, a small boat made of skins stretched over a frame.",
      "The Kwakiutl lived along the Northwest Coast, in what is now British Columbia in Canada. This region gets lots of rain, so tall cedar trees grow in thick forests. The ocean and rivers were full of salmon. Because food was plentiful, the Kwakiutl had time for art and ceremonies. They built large plank houses from cedar boards and carved totem poles that told family stories. They held potlatches, feasts where a host gave away gifts to show honor and wealth.",
      "The Nez Perce lived on the Plateau, where Idaho, Oregon, and Washington are today. Rivers there were full of salmon, and the hills had roots like camas, which women dug and cooked. Men hunted deer and elk. Nez Perce families lived in long houses made of poles covered with woven mats. After horses arrived, the Nez Perce became famous horse breeders. In 1805 they helped the explorers Lewis and Clark by giving them food and directions.",
      "Three different places led to three different ways of life. In every case, the people used their environment wisely."
    ],
    vocab: [
      ["environment", "the land, water, weather, plants, and animals around a place"],
      ["Arctic", "the very cold region near the North Pole"],
      ["igloo", "a dome-shaped shelter built from blocks of packed snow"],
      ["plank house", "a large home built from long flat boards of wood, such as cedar"],
      ["potlatch", "a Kwakiutl feast where the host gives away gifts to show honor"],
      ["Plateau", "a high, mostly flat area of land; the Nez Perce region between mountain ranges"]
    ],
    demo: {
      q: "Why did the Kwakiutl build houses of wood while the Inuit sometimes built houses of snow?",
      steps: [
        "Step 1: Find where each group lived. The Kwakiutl lived on the rainy Northwest Coast. The Inuit lived in the frozen Arctic.",
        "Step 2: Ask what each place had a lot of. The Northwest Coast had huge cedar forests. The Arctic had snow and ice, but almost no trees.",
        "Step 3: Connect the material to the home. People build with what is nearby, so the Kwakiutl used cedar boards and the Inuit used snow blocks."
      ],
      a: "Each group built with the materials its environment provided: cedar trees on the Northwest Coast, snow in the Arctic."
    },
    items: [
      Q("Which region was home to the Inuit?", ["The Plateau", "The Southwest", "The Arctic", "The Northwest Coast"], 2, "The Inuit live in the Arctic, the cold area at the top of North America. The Plateau was home to the Nez Perce, and the Northwest Coast was home to the Kwakiutl.", "Think of the coldest place."),
      Q("Why did the Inuit depend on hunting and fishing instead of farming?", ["Very few plants can grow in the cold Arctic", "They did not like vegetables", "Farming was against their laws", "They had too much rain"], 0, "The Arctic is frozen for much of the year, so crops cannot grow. Hunting seals, whales, and caribou was the way to get food.", "What does a garden need?"),
      Q("What is an igloo made of?", ["Cedar boards", "Woven mats", "Adobe bricks", "Blocks of packed snow"], 3, "An igloo is built from blocks of hard, packed snow. Snow was the material the Arctic had plenty of. Cedar boards belong to the Kwakiutl."),
      Q("According to the passage, what did the Inuit get from the animals they hunted?", ["Only meat", "Meat, skins, oil for lamps, and bones for tools", "Only fur for trading", "Wood and stone"], 1, "The passage says nothing was wasted: animals gave meat, skins for clothing, oil for lamps, and bones for tools.", "Re-read paragraph 1."),
      Q("What is a kayak?", ["A small boat made of skins stretched over a frame", "A dog sled", "A summer tent", "A snow house"], 0, "The passage explains that a kayak is a small boat with skins stretched over a frame. The Inuit used it to hunt on the water.", "Look in paragraph 2."),
      Q("Which tree was most important to the Kwakiutl?", ["Palm", "Oak", "Cedar", "Pine nut"], 2, "Cedar grew in the rainy Northwest Coast forests. The Kwakiutl used it for plank houses, canoes, and totem poles."),
      Q("What did a totem pole do?", ["It held up a roof", "It told family stories through carvings", "It caught fish", "It measured rain"], 1, "Totem poles were carved with animals and figures that stood for a family's history and stories. They were art, not tools."),
      Q("What happened at a potlatch?", ["Hunters left on a long trip", "People traded horses", "Children went to school", "A host gave away gifts at a feast to show honor"], 3, "At a potlatch the host gave away gifts. Giving a lot showed honor and wealth, which is the opposite of what you might expect."),
      Q("Why did the Kwakiutl have extra time for art and ceremonies?", ["They had no work to do", "Europeans did their work", "Food like salmon was plentiful", "It never rained"], 2, "The passage says food was plentiful. When getting food takes less time, people have more time for art, carving, and feasts.", "Paragraph 3 gives the reason."),
      Q("Where did the Nez Perce live?", ["The Plateau region of Idaho, Oregon, and Washington", "Florida", "Greenland", "The Great Plains of Kansas"], 0, "The Nez Perce lived on the Plateau, a high flat land in what is now Idaho, Oregon, and Washington."),
      Q("What is camas?", ["A kind of fish", "A root that Nez Perce women dug and cooked", "A type of house", "A boat"], 1, "Camas is a plant with a root that can be eaten after cooking. Gathering roots was an important part of Nez Perce food.", "Look in paragraph 4."),
      Q("After horses arrived, what were the Nez Perce famous for?", ["Building igloos", "Growing cotton", "Whale hunting", "Breeding horses"], 3, "The Nez Perce became well known as skilled horse breeders. Horses helped them travel and hunt farther."),
      Q("How did the Nez Perce help Lewis and Clark in 1805?", ["They gave them food and directions", "They sold them a ship", "They built them a fort", "They taught them to make igloos"], 0, "The passage says the Nez Perce gave the explorers food and directions when they were tired and hungry in the mountains.", "Re-read the end of paragraph 4."),
      Q("Which food did the Kwakiutl and the Nez Perce BOTH depend on?", ["Seal", "Corn", "Salmon", "Buffalo only"], 2, "Both groups lived near rivers full of salmon. Seals were mostly an Inuit food, and corn was grown by farming groups in warmer places."),
      Q("What is the main idea of this lesson?", ["All Native Americans lived the same way", "Each group's environment shaped its food, homes, and way of life", "Only the Inuit used animals", "Horses were the most important thing"], 1, "The big idea is that land and climate shaped each culture. That is why the three groups lived so differently.")
    ],
    activities: [
      { title: "Map the three regions", time: '25 min',
        materials: ['blank outline map of North America (printed or traced)', 'colored pencils', 'pencil'],
        steps: ["Find the Arctic at the very top of North America and color it light blue. Label it Inuit.", "Find the coast of British Columbia in western Canada. Color that thin coastal strip dark green. Label it Kwakiutl.", "Find where Idaho, Oregon, and Washington meet. Color that area yellow. Label it Nez Perce.", "Draw a small picture of each group's home in its region: igloo, plank house, mat-covered long house.", "Add a map key that explains your colors.", "Now find Georgia on the map and mark it with a star so you can see how far away these groups lived."],
        observe: "Which of the three regions would be hardest to live in, and why? Use what you learned about climate and food in your answer." },
      { title: "Build a model shelter", time: '30 min',
        materials: ['sugar cubes or mini marshmallows (igloo)', 'craft sticks (plank house)', 'paper plate for a base', 'glue or frosting to stick pieces'],
        steps: ["Choose one shelter to build: an Inuit igloo or a Kwakiutl plank house.", "For an igloo, stack sugar cubes or marshmallows in a circle, making each row a little smaller so it curves into a dome.", "For a plank house, glue craft sticks side by side into four walls and a sloped roof.", "Leave a small door. Igloos had low tunnel doors to keep wind out.", "Set your model on the plate and label it with the group's name and region."],
        observe: "Explain how the material you used stands for the material the real group used. Why was that material a smart choice for their environment?" }
    ],
    think: [
      "Imagine you could visit one of these three groups for a week. Which would you choose, and what would you expect to eat, wear, and sleep in? Give reasons from the lesson.",
      "The Inuit used every part of the animals they hunted. Why do you think wasting nothing was so important in the Arctic? Use evidence from the passage."
    ]
  });

  // ---------------- Week 6 ----------------
  C.unit('social', 6, {
    title: "Native American cultures II: Hopi, Seminole, Cherokee",
    standard: 'SS4H1',
    learn: [
      { h: "Desert, swamp, and mountains", p: "The Hopi lived in the dry Southwest desert. The Seminole lived in the warm, wet swamps of Florida. The Cherokee lived in the green mountains and valleys of the Southeast, including north Georgia. Three very different places made three different ways of life." },
      { h: "Farmers in different lands", p: "All three groups grew crops such as corn, beans, and squash. But the Hopi had to farm with very little rain, while the Cherokee and Seminole had plenty of rain. Farming in each place took different skills." },
      { h: "Georgia connection", p: "The Cherokee Nation's land included the mountains of north Georgia. Their capital, New Echota, was near the town of Calhoun, Georgia. You can still visit the site today." }
    ],
    passage: [
      "The Hopi live in northeastern Arizona, in the dry Southwest. Their villages sit on top of mesas, which are tall hills with flat tops and steep sides. Rain is rare there, so the Hopi became expert dry farmers. They planted corn deep in the sandy soil where it could reach moisture, and they also grew beans and squash. Their homes, called pueblos, were built of stone and adobe, a mix of mud and straw dried into bricks. Thick walls stayed cool in the hot sun. Some Hopi villages are among the oldest towns in the United States where people still live.",
      "The Seminole formed in Florida in the 1700s. Many of their people came from Creek towns in Georgia and Alabama and moved south. Florida is hot and wet, with swamps like the Everglades. The Seminole built chickees, homes with raised wooden floors, open sides, and roofs of palmetto leaves. Open sides let breezes cool the home, and the raised floor stayed dry. They fished, hunted, gathered plants, and paddled dugout canoes carved from logs.",
      "The Cherokee lived in the Southeast, in the Appalachian Mountains of what is now Georgia, Tennessee, and the Carolinas. The land had forests, rivers, and good soil. Women farmed corn, beans, and squash, and men hunted deer. Towns had a council house where leaders met. In summer, families lived in homes with walls of woven branches covered in clay. In winter, they used smaller, round houses that held heat.",
      "In the early 1800s, a Cherokee man named Sequoyah created a writing system for the Cherokee language. Soon many Cherokee could read and write. In 1825 the Cherokee made New Echota, in Georgia, their capital. In 1828 they began printing a newspaper, the Cherokee Phoenix, in both Cherokee and English."
    ],
    vocab: [
      ["mesa", "a tall hill with a flat top and steep sides, common in the Southwest"],
      ["adobe", "a building brick made of mud and straw dried in the sun"],
      ["pueblo", "a Hopi village or home built of stone and adobe"],
      ["chickee", "a Seminole home with a raised floor, open sides, and a palmetto-leaf roof"],
      ["council house", "a building where Cherokee leaders met to make decisions"],
      ["syllabary", "a set of written symbols where each one stands for a syllable; Sequoyah made one for Cherokee"]
    ],
    demo: {
      q: "Why did Seminole chickees have open sides, while Hopi pueblos had thick walls?",
      steps: [
        "Step 1: Name each climate. Florida is hot and wet. The Arizona desert is hot by day and dry.",
        "Step 2: Think about what each family needed. In humid Florida, moving air keeps people cool. In the desert sun, thick walls block heat.",
        "Step 3: Match the home to the need. Open sides let breezes in. Thick adobe walls keep heat out."
      ],
      a: "Each home was designed to stay cool in its own climate: chickees caught breezes, and thick pueblo walls blocked the desert heat."
    },
    items: [
      Q("Where did the Hopi live?", ["The Everglades of Florida", "The mountains of north Georgia", "Northeastern Arizona in the Southwest", "The Arctic"], 2, "The Hopi live on mesas in northeastern Arizona. The Everglades were Seminole land, and north Georgia was Cherokee land."),
      Q("What is a mesa?", ["A tall hill with a flat top and steep sides", "A swamp", "A kind of canoe", "A river valley"], 0, "A mesa is a flat-topped hill. The word comes from the Spanish word for table, which is a good way to picture it."),
      Q("How did the Hopi grow corn with so little rain?", ["They lived near a huge lake", "They grew it indoors", "They bought it from traders only", "They planted it deep in the soil to reach moisture"], 3, "The passage says the Hopi planted corn deep in sandy soil where it could reach moisture. This is called dry farming.", "Re-read paragraph 1."),
      Q("What is adobe made of?", ["Snow", "Mud and straw dried into bricks", "Cedar boards", "Palmetto leaves"], 1, "Adobe is sun-dried brick made of mud and straw. It was perfect for the desert, where there is lots of earth but few trees."),
      Q("Why did thick pueblo walls help the Hopi?", ["They kept the homes cool in the hot sun", "They kept out snow", "They floated in floods", "They were easy to move"], 0, "Thick stone and adobe walls slowly soak up heat, so the inside stays cooler during the hot day."),
      Q("Where did many of the first Seminole people come from?", ["Arizona", "The Arctic", "Creek towns in Georgia and Alabama", "Europe"], 2, "The passage explains that many Seminole came from Creek towns in Georgia and Alabama and moved south into Florida.", "Look in paragraph 2."),
      Q("Which feature of a chickee kept the floor dry in a wet land?", ["Thick adobe walls", "A raised wooden floor", "A snow roof", "A dirt floor"], 1, "Chickee floors were raised off the ground, which kept them dry in swampy, rainy Florida."),
      Q("What were Seminole chickee roofs made of?", ["Clay tiles", "Stone", "Animal skins", "Palmetto leaves"], 3, "Chickee roofs were thatched with palmetto leaves, a plant that grows all over Florida."),
      Q("How did the Seminole travel through the Everglades?", ["Dog sleds", "Horses only", "Dugout canoes carved from logs", "Wagons"], 2, "Swamps are full of water, so canoes made sense. A dugout canoe is carved out of a single log."),
      Q("In which region did the Cherokee live?", ["The Southeast, in the Appalachian Mountains", "The Southwest desert", "The Plateau", "The Northwest Coast"], 0, "The Cherokee lived in the Southeast, including the mountains of north Georgia, Tennessee, and the Carolinas."),
      Q("In a Cherokee family, who did most of the farming?", ["Men", "Women", "Children only", "Traders"], 1, "The passage says Cherokee women farmed corn, beans, and squash while men hunted deer.", "Look in paragraph 3."),
      Q("Why did the Cherokee use smaller, round houses in winter?", ["They were easier to paint", "Summer houses were not allowed", "They were near the ocean", "They held heat better"], 3, "A small, round house is easier to keep warm. The mountains of north Georgia can get cold in winter.", "Paragraph 3 explains it."),
      Q("What did Sequoyah create?", ["A writing system for the Cherokee language", "A canoe", "The first pueblo", "A new kind of corn"], 0, "Sequoyah created a syllabary, a set of symbols for the syllables of the Cherokee language. Soon many Cherokee could read and write."),
      Q("Which city in Georgia became the Cherokee capital in 1825?", ["Savannah", "Augusta", "New Echota", "Macon"], 2, "New Echota, near present-day Calhoun, Georgia, was the Cherokee capital. Savannah was founded by English colonists."),
      Q("Which crops did all three groups in this lesson grow?", ["Wheat, rice, and oats", "Corn, beans, and squash", "Cotton and tobacco", "Apples and peaches"], 1, "Corn, beans, and squash were important crops for many Native American farmers, including the Hopi, Seminole, and Cherokee.")
    ],
    activities: [
      { title: "Three-home comparison chart", time: '25 min',
        materials: ['large paper', 'ruler', 'colored pencils'],
        steps: ["Draw a chart with three columns: Hopi, Seminole, Cherokee.", "Make four rows: Region, Climate, Food, Home.", "Fill in each box using the lesson.", "Under the chart, draw a small picture of each home: pueblo, chickee, Cherokee house.", "Circle anything that all three groups had in common.", "Share your chart with your parent and explain one difference."],
        observe: "Which two groups were most alike, and which were most different? Explain using at least two facts from your chart." },
      { title: "Write your name in a new way", time: '20 min',
        materials: ['paper', 'pencil', 'markers'],
        steps: ["Remember that Sequoyah gave each Cherokee syllable its own symbol.", "Say your name slowly and clap the syllables (for example, A-va has two).", "Invent one simple symbol for each syllable in your name.", "Write your name with your new symbols, then write a family member's name the same way.", "Make a key that shows what sound each symbol stands for.", "Ask your parent to read a name using only your key."],
        observe: "Why do you think a written language was so helpful to the Cherokee people? Give at least two reasons." }
    ],
    think: [
      "The Hopi and the Seminole both lived in hot places, but their homes were very different. Explain why, using what you know about rain and climate.",
      "Sequoyah's writing system spread quickly, and soon the Cherokee printed their own newspaper. How might being able to read and write have helped the Cherokee Nation? Give reasons."
    ]
  });

  // ---------------- Week 7 ----------------
  C.unit('social', 7, {
    title: "European explorers",
    standard: 'SS4H2',
    learn: [
      { h: "Why explore?", p: "In the 1400s and 1500s, European countries wanted spices, silk, and gold from Asia. Traveling over land took a long time and cost a lot. Explorers hoped to find a faster sea route. They also wanted land, riches, and fame for their country, and some wanted to spread Christianity." },
      { h: "Reasons, obstacles, accomplishments", p: "For each explorer, ask three questions. What was the reason for the trip? What obstacles, or problems, got in the way? What was the accomplishment, or what did he achieve? Storms, sickness, hunger, and scared crews were common obstacles." },
      { h: "Who sailed for whom", p: "Columbus, Ponce de León, and Balboa sailed for Spain. John Cabot sailed for England. Jacques Cartier sailed for France. Henry Hudson sailed for both England and the Netherlands (the Dutch)." }
    ],
    passage: [
      "Christopher Columbus believed he could reach Asia by sailing west across the Atlantic Ocean. The king and queen of Spain paid for his trip. In 1492 he sailed with three ships, the Niña, the Pinta, and the Santa María. The trip was long, and his crew grew afraid. In October they reached an island in the Bahamas. Columbus thought he was near Asia, but he had reached lands that Europeans did not know about. His voyages began lasting contact between Europe and the Americas. Sadly, the Taíno people he met suffered greatly from disease and harsh treatment that followed.",
      "In 1497 John Cabot, an Italian sailing for England, reached the coast of North America, probably near Newfoundland in Canada. He was also looking for a route to Asia. His trip gave England a claim to land in North America.",
      "Spain sent more explorers. In 1513 Juan Ponce de León landed on a coast covered in flowers and named it Florida. He was searching for gold and new land. A famous legend says he was looking for a Fountain of Youth, but historians doubt that was his real goal. Also in 1513, Vasco Núñez de Balboa crossed the jungles of Panama and became the first European to see the Pacific Ocean from the Americas.",
      "France sent Jacques Cartier. Between 1534 and 1542 he made three trips and sailed up the St. Lawrence River in Canada, claiming the land for France. Henry Hudson searched for a Northwest Passage, a water route through North America to Asia. Sailing for the Dutch in 1609, he explored the Hudson River in New York. Sailing for England in 1610, he entered Hudson Bay. His tired crew turned against him there, and he was never seen again."
    ],
    vocab: [
      ["explorer", "a person who travels to unknown places to learn about them"],
      ["voyage", "a long trip, usually by sea"],
      ["route", "the path you take to get from one place to another"],
      ["obstacle", "a problem or thing that gets in the way"],
      ["claim", "to say that land belongs to you or your country"],
      ["Northwest Passage", "a water route through North America to Asia that explorers hoped to find"]
    ],
    demo: {
      q: "Fill in the reason, obstacle, and accomplishment for Vasco Núñez de Balboa.",
      steps: [
        "Step 1: Reason. Like other Spanish explorers, Balboa was looking for gold and new land for Spain.",
        "Step 2: Obstacle. He had to cross thick, hot jungle and mountains in Panama.",
        "Step 3: Accomplishment. In 1513 he became the first European to see the Pacific Ocean from the Americas."
      ],
      a: "Balboa searched for gold, crossed the jungles of Panama, and became the first European to see the Pacific from the Americas."
    },
    items: [
      Q("What was the main reason Columbus sailed west in 1492?", ["To find the Pacific Ocean", "To start a colony in Georgia", "To find a sea route to Asia", "To find the Fountain of Youth"], 2, "Columbus thought sailing west would be a shorter way to reach Asia and its riches. He did not know the Americas were in the way."),
      Q("Which country paid for Columbus's voyage?", ["Spain", "France", "England", "The Netherlands"], 0, "The king and queen of Spain paid for the trip. Cabot sailed for England, and Cartier sailed for France."),
      Q("What obstacle did Columbus face during his first voyage?", ["His ships were made of stone", "He ran into ice in Hudson Bay", "He had to cross the jungle of Panama", "His crew grew afraid on the long trip"], 3, "The passage says the trip was long and the crew grew afraid. They did not know when, or if, they would see land.", "Re-read paragraph 1."),
      Q("Where did Columbus first land in October 1492?", ["Florida", "An island in the Bahamas", "Newfoundland", "New York"], 1, "Columbus landed on an island in the Bahamas, in the Caribbean. He believed he was near Asia."),
      Q("What happened to the Taíno people after Columbus arrived?", ["They suffered greatly from disease and harsh treatment", "They became rulers of Spain", "They sailed to Europe to explore", "Nothing changed for them"], 0, "The passage is honest that the Taíno suffered from new diseases and harsh treatment. Exploration brought great harm to many Native peoples.", "Look at the end of paragraph 1."),
      Q("Which country did John Cabot sail for?", ["Spain", "France", "England", "Portugal"], 2, "John Cabot was born in Italy, but England paid for his 1497 voyage. His trip gave England a claim in North America."),
      Q("What did John Cabot's voyage give England?", ["The Pacific Ocean", "A claim to land in North America", "Florida", "A route to Asia that worked"], 1, "Cabot reached the coast of North America, probably near Newfoundland, so England could claim land there.", "Paragraph 2 tells you."),
      Q("Who named Florida?", ["Columbus", "Henry Hudson", "Jacques Cartier", "Juan Ponce de León"], 3, "Ponce de León landed in 1513 and named the land Florida. Florida is Georgia's neighbor to the south."),
      Q("What do historians think about the Fountain of Youth story?", ["It is proven true", "It was found in Georgia", "They doubt it was Ponce de León's real goal", "Balboa found it"], 2, "The passage says the Fountain of Youth is a legend and historians doubt it was his true goal. He was mostly after gold and land.", "Look in paragraph 3."),
      Q("What was Balboa's main accomplishment?", ["He was the first European to see the Pacific Ocean from the Americas", "He named Florida", "He sailed up the St. Lawrence River", "He found Hudson Bay"], 0, "In 1513 Balboa crossed Panama and saw the Pacific. That showed Europeans another huge ocean lay beyond the Americas."),
      Q("Which river did Jacques Cartier explore?", ["The Hudson River", "The St. Lawrence River", "The Savannah River", "The Mississippi River"], 1, "Cartier sailed up the St. Lawrence River in Canada and claimed the land for France. The Hudson River is named for Henry Hudson."),
      Q("What was the Northwest Passage?", ["A road across Georgia", "A ship's name", "A trail through Panama", "A hoped-for water route through North America to Asia"], 3, "Explorers like Hudson hoped to sail through North America to Asia. No easy route like that existed for ships in their time."),
      Q("Henry Hudson explored the Hudson River while sailing for which country?", ["The Dutch (Netherlands)", "England", "Spain", "France"], 0, "In 1609 Hudson sailed for the Dutch and explored the Hudson River. In 1610 he sailed for England and reached Hudson Bay.", "The passage gives both countries."),
      Q("What happened to Henry Hudson in Hudson Bay?", ["He found gold", "He became king", "His crew turned against him and he was never seen again", "He sailed home safely"], 2, "The passage says his tired crew turned against him. They set him adrift, and he was never seen again.", "Read the last sentence."),
      Q("Which explorer sailed for France?", ["John Cabot", "Jacques Cartier", "Balboa", "Ponce de León"], 1, "Jacques Cartier sailed for France. His trips are why France later had a large claim in Canada.")
    ],
    activities: [
      { title: "Explorer route map", time: '30 min',
        materials: ['printed world map or map of the Atlantic and Americas', 'six colored pencils', 'pencil'],
        steps: ["Find Spain, England, France, and the Netherlands in Europe.", "Pick one color per explorer and make a map key with all six names.", "Draw Columbus's route from Spain to the Bahamas.", "Draw Cabot from England to Newfoundland, and Cartier from France to the St. Lawrence River.", "Draw Ponce de León to Florida, Balboa across Panama, and Hudson to the Hudson River and Hudson Bay.", "Mark Georgia with a star. Which explorer landed closest to Georgia?"],
        observe: "Look at your finished map. Which countries ended up with claims in North America, and how did these trips lead to that? Explain in 2-3 sentences." },
      { title: "Explorer trading cards", time: '25 min',
        materials: ['six index cards', 'markers', 'pencil'],
        steps: ["Write one explorer's name at the top of each card.", "Draw a small picture on the front, like a ship, a river, or an ocean.", "On the back, write: Country, Year, Reason, Obstacle, Accomplishment.", "Fill in each card using the lesson.", "Mix up the cards and quiz your parent, then let your parent quiz you."],
        observe: "Which explorer do you think faced the hardest obstacle? Explain why using details from your cards." }
    ],
    think: [
      "Explorers' trips brought new knowledge to Europe, but they also brought great harm to many Native peoples. Explain both sides using examples from the lesson.",
      "If you were a sailor on Columbus's ship in 1492, would you have wanted to turn back? Explain your thinking and use details about the obstacles."
    ]
  });

  // ---------------- Week 8 ----------------
  C.unit('social', 8, {
    title: "The thirteen colonies and the founding of Georgia",
    standard: 'SS4H3',
    learn: [
      { h: "Three groups of colonies", p: "England's thirteen colonies stretched along the Atlantic coast. The New England Colonies were in the north, the Middle Colonies in the center, and the Southern Colonies in the south. Georgia was a Southern Colony." },
      { h: "Firsts to remember", p: "Jamestown, Virginia, was started in 1607. It was the first lasting English settlement. In 1620 the Pilgrims sailed on the Mayflower and started Plymouth in Massachusetts. Georgia, founded in 1733, was the last of the thirteen colonies." },
      { h: "Georgia's three reasons", p: "Georgia was founded for charity (a fresh start for poor people), economics (to grow goods like silk for England), and defense (to protect South Carolina from the Spanish in Florida). An easy way to remember is C-E-D." }
    ],
    passage: [
      "The New England Colonies were Massachusetts, New Hampshire, Rhode Island, and Connecticut. Many settlers there were Puritans who came for religious freedom. The Middle Colonies were New York, New Jersey, Pennsylvania, and Delaware. People of many backgrounds and faiths lived there. The Southern Colonies were Maryland, Virginia, North Carolina, South Carolina, and Georgia. Their warm weather and long growing season were good for big farms.",
      "Georgia began with a man named James Oglethorpe. He had seen that poor people in England, including some who owed money, often had no way to start over. He and other leaders, called trustees, asked King George II for a charter, a written permission to start a colony. The king granted it in 1732, and the colony was named Georgia in his honor.",
      "The colony had three main goals. The first was charity: to give poor but hardworking people a new start. The second was economics: Georgia could grow things England wanted, like silk and wine grapes. The third was defense: Georgia would stand between the Spanish in Florida and the English colony of South Carolina.",
      "In early 1733, Oglethorpe and about 114 colonists arrived on a ship named the Anne. They chose a high bluff above the Savannah River. A bluff is a steep bank. Nearby lived the Yamacraw people, led by a wise chief named Tomochichi. Tomochichi welcomed the settlers and became Oglethorpe's friend. Mary Musgrove, whose mother was Creek and whose father was English, helped the two leaders understand each other.",
      "Oglethorpe planned the town of Savannah with streets in a grid and open public squares. Many of those squares are still there today."
    ],
    vocab: [
      ["colony", "a settlement ruled by a faraway country"],
      ["charter", "a written document giving permission to start a colony"],
      ["trustee", "a person trusted to manage something for others, like the leaders of early Georgia"],
      ["bluff", "a high, steep bank beside a river"],
      ["defense", "protection from attack"],
      ["interpreter", "a person who helps people who speak different languages understand each other"]
    ],
    demo: {
      q: "Which of Georgia's three reasons does this describe: building forts to keep the Spanish away from South Carolina?",
      steps: [
        "Step 1: List the three reasons: charity, economics, defense.",
        "Step 2: Ask what the example is about. It is about forts and keeping an enemy away.",
        "Step 3: Protecting against an enemy is defense, not helping the poor (charity) or making money (economics)."
      ],
      a: "Defense: Georgia was meant to protect South Carolina from Spanish Florida."
    },
    items: [
      Q("In what year was Georgia founded?", ["1607", "1620", "1733", "1776"], 2, "Georgia was founded in 1733. 1607 was Jamestown, 1620 was Plymouth, and 1776 was the Declaration of Independence."),
      Q("Which group of colonies was Georgia part of?", ["New England Colonies", "Middle Colonies", "Southern Colonies", "Western Colonies"], 2, "Georgia was the southernmost of the thirteen colonies and part of the Southern Colonies."),
      Q("Which of these was a New England Colony?", ["Massachusetts", "Virginia", "Pennsylvania", "Georgia"], 0, "Massachusetts was in New England. Pennsylvania was a Middle Colony, and Virginia and Georgia were Southern Colonies."),
      Q("Why did many Puritans come to New England?", ["To grow rice", "To fight Spain", "To find gold", "For religious freedom"], 3, "The passage says many New England settlers were Puritans who came for religious freedom.", "Re-read paragraph 1."),
      Q("Which was the first lasting English settlement in America?", ["Savannah", "Jamestown", "Plymouth", "Boston"], 1, "Jamestown, Virginia, started in 1607, was the first lasting English settlement. Plymouth came later, in 1620."),
      Q("Who founded the colony of Georgia?", ["James Oglethorpe", "John Smith", "William Penn", "Tomochichi"], 0, "James Oglethorpe led the founding of Georgia. Tomochichi was the Yamacraw chief who welcomed the colonists."),
      Q("Georgia was named in honor of whom?", ["George Washington", "A saint", "King George II", "Oglethorpe's son"], 2, "The colony was named for King George II, who granted the charter. George Washington was a child in 1733.", "Paragraph 2 tells you."),
      Q("What is a charter?", ["A ship", "A written document giving permission to start a colony", "A kind of fort", "A tax"], 1, "A charter is official written permission. King George II granted Georgia's charter in 1732."),
      Q("Giving poor but hardworking people a new start was which reason for founding Georgia?", ["Defense", "Economics", "Religion", "Charity"], 3, "Helping people in need is charity. Economics was about goods like silk, and defense was about protection from Spain."),
      Q("What goods did England hope Georgia would produce?", ["Furs and fish", "Gold and silver", "Silk and wine grapes", "Steel and coal"], 2, "The passage says England wanted silk and wine. These plans did not work very well, but they were part of the economic goal.", "Look in paragraph 3."),
      Q("Georgia would protect South Carolina from which group?", ["The Spanish in Florida", "The French in Canada", "The Dutch in New York", "The Cherokee"], 0, "Spain controlled Florida, just south of Georgia. Georgia acted as a buffer, a protective zone, for South Carolina."),
      Q("What was the name of the ship that brought the first Georgia colonists?", ["The Mayflower", "The Anne", "The Santa María", "The Pinta"], 1, "Oglethorpe and the colonists arrived on the Anne in 1733. The Mayflower carried the Pilgrims to Plymouth in 1620.", "Look in paragraph 4."),
      Q("Who was Tomochichi?", ["An English soldier", "A ship captain", "The king of Spain", "The Yamacraw chief who welcomed the colonists"], 3, "Tomochichi led the Yamacraw people near the Savannah River. His friendship helped the new colony survive."),
      Q("How did Mary Musgrove help early Georgia?", ["She helped Oglethorpe and Tomochichi understand each other", "She was a ship captain", "She wrote the charter", "She was the king's daughter"], 0, "Mary Musgrove, who was part Creek and part English, spoke both languages and served as an interpreter.", "Paragraph 4 explains."),
      Q("What was special about Oglethorpe's plan for Savannah?", ["It had no streets", "It was built underground", "It used a grid of streets with public squares", "It was built on a mesa"], 2, "Oglethorpe planned Savannah with a grid and open squares. Many of those squares still exist in Savannah today.")
    ],
    activities: [
      { title: "Color-coded colony map", time: '30 min',
        materials: ['printed blank map of the thirteen colonies', 'three colored pencils', 'pencil'],
        steps: ["Choose one color for New England, one for the Middle Colonies, and one for the Southern Colonies.", "Color and label Massachusetts, New Hampshire, Rhode Island, and Connecticut.", "Color and label New York, New Jersey, Pennsylvania, and Delaware.", "Color and label Maryland, Virginia, North Carolina, South Carolina, and Georgia.", "Put a star on Savannah, a dot on Jamestown, and a dot on Plymouth.", "Make a map key for your colors."],
        observe: "Georgia sits at the very south of the colonies. Using your map, explain why Georgia was a good place to protect South Carolina from Spanish Florida." },
      { title: "Design a town square", time: '25 min',
        materials: ['graph paper', 'pencil', 'colored pencils', 'ruler'],
        steps: ["Look at a map or picture of Savannah's squares with your parent.", "On graph paper, draw a grid of streets like Oglethorpe's plan.", "Leave one open square in the middle of a few blocks.", "Draw houses around the square and decide what goes in it: trees, a well, a meeting place.", "Label your square with a name you choose."],
        observe: "Why do you think Oglethorpe wanted open squares in his town? Give two reasons a square would help the people who lived there." }
    ],
    think: [
      "Georgia was founded for charity, economics, and defense. Which reason do you think was most important to England, and which was most important to Oglethorpe? Explain your reasons.",
      "Tomochichi chose to welcome the colonists and became Oglethorpe's friend. How did that friendship help Georgia in its early days? Use evidence from the passage."
    ]
  });

  // ---------------- Week 9 ----------------
  C.unit('social', 9, {
    title: "Colonial life and economy",
    standard: 'SS4H3',
    learn: [
      { h: "Land shapes jobs", p: "Each colonial region earned a living from its land and climate. New England had rocky soil and a long coast, so many people fished and built ships. The Middle Colonies had rich soil and grew lots of wheat. The Southern Colonies had warm weather for big farms called plantations." },
      { h: "Who did the work", p: "Most colonists were farmers. Towns also needed skilled workers like blacksmiths and coopers. Some people came as indentured servants who worked for a set number of years. Many Africans were brought by force and enslaved, which means they were treated as property and never paid." },
      { h: "Telling the truth about history", p: "Slavery was cruel and wrong. Enslaved people were taken from their homes, families could be split apart, and their children were also enslaved. Studying their lives honestly helps us honor their courage and understand our country." }
    ],
    passage: [
      "In New England, the soil was thin and rocky, and winters were long. Families grew food on small farms, but many people made their living from the sea. They fished for cod, hunted whales for oil, and built ships from the region's tall trees. Busy ports like Boston grew up along the coast.",
      "The Middle Colonies had rich soil and milder winters. Farmers grew so much wheat, corn, and other grain that the region was called the breadbasket colonies. Mills ground grain into flour, and cities like Philadelphia and New York became trading centers.",
      "The Southern Colonies had warm weather and a long growing season. Large farms called plantations grew cash crops, which are crops grown to sell. Virginia grew tobacco. South Carolina and Georgia grew rice and indigo, a plant used to make blue dye. Plantation owners wanted many workers.",
      "Some workers were indentured servants. A person agreed to work for someone for several years, often four to seven, in exchange for the trip to America, food, and a place to live. When the time was up, the servant was free. Enslaved Africans had no such agreement. They were captured, carried across the ocean on crowded ships, and forced to work their whole lives without pay. At first Georgia's trustees did not allow slavery, but the ban ended around 1750. After that, many enslaved people were forced to work on Georgia's rice plantations along the coast.",
      "Daily life took hard work for most people. Children helped with chores like hauling water and caring for animals. A boy might become an apprentice, a young person who learns a trade by working for a skilled worker. Blacksmiths made tools from iron, and coopers made barrels. Families made much of what they needed at home, from candles to clothing."
    ],
    vocab: [
      ["economy", "the way people in a place make, buy, sell, and use goods and services"],
      ["plantation", "a very large farm, usually growing one main crop to sell"],
      ["cash crop", "a crop grown mainly to sell for money"],
      ["indentured servant", "a person who agreed to work for several years in exchange for the trip to America"],
      ["enslaved", "forced to work without pay or freedom and treated as property"],
      ["apprentice", "a young person who learns a trade by working for a skilled worker"]
    ],
    demo: {
      q: "Why did New England colonists fish and build ships while Southern colonists grew tobacco and rice?",
      steps: [
        "Step 1: Describe New England's land. It had rocky soil, long winters, a long coast, and many trees.",
        "Step 2: Describe the South's land. It had warm weather, rich soil, and a long growing season.",
        "Step 3: Match land to jobs. Poor farming soil but good harbors and trees led to fishing and shipbuilding. Warm, rich land led to big farms."
      ],
      a: "Each region's jobs fit its land and climate: the sea and forests in New England, warm farmland in the South."
    },
    items: [
      Q("Why did many New England colonists fish instead of running large farms?", ["Fishing was the law", "They had no ocean", "The soil was thin and rocky and winters were long", "It was too hot"], 2, "Poor soil and short summers made big farms hard. The long coast made fishing and shipbuilding a better choice.", "Re-read paragraph 1."),
      Q("Which region was called the breadbasket colonies?", ["The Middle Colonies", "New England", "The Southern Colonies", "Spanish Florida"], 0, "The Middle Colonies grew so much grain, like wheat, that they were called the breadbasket. Bread is made from grain."),
      Q("What is a cash crop?", ["A crop that grows money", "A crop given away free", "A crop eaten only by the farmer", "A crop grown mainly to sell"], 3, "A cash crop is grown to sell for money. Tobacco, rice, and indigo were cash crops in the Southern Colonies."),
      Q("Which cash crops did Georgia and South Carolina grow?", ["Wheat and corn", "Rice and indigo", "Apples and pears", "Cod and whales"], 1, "The passage says South Carolina and Georgia grew rice and indigo. Rice grew well in the wet lowlands near the coast.", "Look in paragraph 3."),
      Q("What was indigo used for?", ["Making blue dye", "Making bread", "Building ships", "Lighting lamps"], 0, "Indigo is a plant used to make a deep blue dye for cloth. People in England paid well for it."),
      Q("Which colony was known for growing tobacco?", ["New York", "Massachusetts", "Virginia", "Rhode Island"], 2, "Virginia grew tobacco as its main cash crop. Massachusetts was in New England, known for fishing and ships."),
      Q("How was an indentured servant different from an enslaved person?", ["There was no difference", "An indentured servant was free after a set number of years", "Enslaved people were paid more", "Indentured servants were never fed"], 1, "An indentured servant agreed to work for a set time, often four to seven years, and then went free. Enslaved people were forced to work their whole lives without pay or choice."),
      Q("About how long did many indentured servants work?", ["One week", "Fifty years", "Their whole lives", "Four to seven years"], 3, "The passage says many worked four to seven years in exchange for the trip, food, and housing.", "Paragraph 4 gives the number."),
      Q("What did Georgia's trustees decide about slavery at first?", ["They required it", "They paid enslaved people", "They did not allow it", "They never talked about it"], 2, "Georgia's trustees first did not allow slavery. The ban ended around 1750, and slavery then grew quickly on coastal rice plantations.", "Look in paragraph 4."),
      Q("How did enslaved Africans come to the colonies?", ["They were captured and forced across the ocean", "They chose to come for jobs", "They bought land", "They came as explorers"], 0, "Enslaved Africans were taken by force and carried on crowded ships. They had no choice, which made slavery very different from other kinds of work."),
      Q("What is an apprentice?", ["A ship captain", "A young person who learns a trade by working for a skilled worker", "A plantation owner", "A colonial governor"], 1, "An apprentice learned a skill, like blacksmithing, by working for an expert for several years."),
      Q("What did a cooper make?", ["Candles", "Horseshoes", "Shoes", "Barrels"], 3, "A cooper made barrels. Barrels stored and shipped food, water, and other goods. A blacksmith made iron tools and horseshoes.", "Paragraph 5 names the trades."),
      Q("Which city was a trading center in the Middle Colonies?", ["Philadelphia", "Savannah", "Jamestown", "Charleston"], 0, "Philadelphia, in Pennsylvania, was a busy Middle Colony city. Savannah and Charleston were Southern ports."),
      Q("Why did plantation owners want many workers?", ["They wanted to build schools", "They needed sailors", "Plantations were very large farms with lots of work", "The law said so"], 2, "Big farms growing cash crops needed many hands to plant, tend, and harvest. Sadly, owners often used enslaved people for this work."),
      Q("Which job did colonial children commonly do?", ["Drive cars", "Haul water and care for animals", "Work in offices", "Fly planes"], 1, "Colonial children helped with chores like hauling water and feeding animals. Families needed everyone's help.")
    ],
    activities: [
      { title: "Colonial job interview", time: '25 min',
        materials: ['paper', 'pencil', 'a family member to play a colonist'],
        steps: ["Pick a colonial job: fisher, wheat farmer, blacksmith, cooper, or apprentice.", "Write five interview questions, such as: Where do you live? What do you make? What tools do you use?", "Have your parent pretend to be that worker and answer using what you learned.", "Write down the answers.", "Switch roles: now you be the worker and your parent asks the questions."],
        observe: "How did the region this worker lived in shape the job? Explain using the interview answers." },
      { title: "Regions and resources map", time: '25 min',
        materials: ['printed blank map of the thirteen colonies', 'colored pencils'],
        steps: ["Lightly color the three colonial regions in different colors.", "In New England, draw small symbols for fish, whales, and ships.", "In the Middle Colonies, draw wheat and a mill.", "In the Southern Colonies, draw tobacco, rice, and indigo plants.", "Make a key that shows what each symbol means.", "Add a star for Savannah, Georgia."],
        observe: "If you could trade goods between regions, what might New England trade to the South, and what might it get back? Explain why each side would want the trade." }
    ],
    think: [
      "Compare the life of an indentured servant and an enslaved person in colonial Georgia. How were their lives different, and why does that difference matter?",
      "Which colonial region would you have wanted to live in? Explain your choice using facts about its land, jobs, and daily life."
    ]
  });

  // ---------------- Week 10 ----------------
  C.unit('social', 10, {
    title: "From the Articles of Confederation to the Constitution",
    standard: 'SS4H5',
    learn: [
      { h: "A weak first plan", p: "After winning independence from Britain, the new states wrote the Articles of Confederation. Americans feared a strong ruler like a king, so they made the national government very weak. It soon could not solve the country's problems." },
      { h: "A new plan in 1787", p: "In 1787 leaders met in Philadelphia and wrote the Constitution. It created a stronger national government but split its power into three branches so no one person or group could take over." },
      { h: "Three branches", p: "The legislative branch (Congress) makes laws. The executive branch (the President) carries out laws. The judicial branch (the Supreme Court and other courts) decides what laws mean and whether they follow the Constitution. Each branch can check, or limit, the others." }
    ],
    passage: [
      "During the American Revolution, the thirteen states agreed on a plan of government called the Articles of Confederation. It went into effect in 1781. Under the Articles, there was a Congress, but no President and no national courts. Each state had one vote, no matter how many people lived there.",
      "The Articles had big problems. Congress could not collect taxes, so it had no steady money to pay soldiers or debts. It could not control trade between the states. Changing the Articles required all thirteen states to agree, which almost never happened. In 1786 a group of angry farmers in Massachusetts, led by Daniel Shays, rebelled over debts and taxes. The weak national government could do little. Many leaders decided the country needed a better plan.",
      "In the summer of 1787, delegates from twelve states met in Philadelphia. George Washington was chosen to lead the meeting. James Madison shared so many ideas that he is called the Father of the Constitution. Benjamin Franklin, at 81 the oldest delegate, helped calm arguments. Two men signed for Georgia: William Few and Abraham Baldwin. In January 1788, Georgia became the fourth state to approve the Constitution.",
      "The Constitution divided power among three branches. Congress, the legislative branch, has two parts: the Senate, with two members from every state, and the House of Representatives, where states with more people get more members. The President leads the executive branch and can veto, or reject, a bill. The Supreme Court leads the judicial branch.",
      "This idea is called checks and balances. Congress makes laws, but the President can veto them. Congress can still pass a law over a veto with enough votes. The courts can decide a law goes against the Constitution. Georgia's state government has three branches, too."
    ],
    vocab: [
      ["Articles of Confederation", "the first plan of government for the United States, which made the national government weak"],
      ["Constitution", "the written plan of government for the United States, signed in 1787"],
      ["delegate", "a person chosen to speak and act for others at a meeting"],
      ["legislative branch", "the part of government that makes laws; Congress"],
      ["executive branch", "the part of government that carries out laws; led by the President"],
      ["judicial branch", "the part of government that decides what laws mean; the courts"]
    ],
    demo: {
      q: "Which branch is doing the job? A judge decides that a law breaks the Constitution.",
      steps: [
        "Step 1: Remember the jobs. Legislative makes laws, executive carries out laws, judicial decides what laws mean.",
        "Step 2: The person here is a judge, and the job is deciding whether a law follows the Constitution.",
        "Step 3: Deciding what laws mean is the job of the courts."
      ],
      a: "The judicial branch, because courts decide what laws mean and whether they follow the Constitution."
    },
    items: [
      Q("What was the Articles of Confederation?", ["A list of colonies", "A treaty with Britain", "The first plan of government for the United States", "Georgia's charter"], 2, "The Articles were the first plan of government for the new nation. They made the national government too weak."),
      Q("Why did Americans make the national government weak under the Articles?", ["They feared a strong ruler like a king", "They wanted a king", "They wanted more taxes", "Britain told them to"], 0, "After fighting a king, Americans worried a strong government might take away their freedom, so they kept it weak."),
      Q("Which was a problem with the Articles of Confederation?", ["There were too many states", "The President had too much power", "The Supreme Court was too strong", "Congress could not collect taxes"], 3, "Without taxes, Congress had no steady money. There was no President or national court at all under the Articles."),
      Q("To change the Articles, how many states had to agree?", ["Seven", "All thirteen", "Nine", "Only one"], 1, "All thirteen had to agree, which almost never happened. That made fixing the Articles nearly impossible.", "Re-read paragraph 2."),
      Q("What was Shays' Rebellion?", ["An uprising of Massachusetts farmers over debts and taxes", "A battle with Spain", "A vote in Georgia", "A meeting in Philadelphia"], 0, "In 1786 farmers led by Daniel Shays rebelled. The weak government's trouble handling it showed leaders that change was needed.", "Look in paragraph 2."),
      Q("Where was the Constitution written in 1787?", ["Savannah", "Boston", "Philadelphia", "Washington, D.C."], 2, "Delegates met in Philadelphia, Pennsylvania. Washington, D.C., did not exist yet."),
      Q("Who led the meeting where the Constitution was written?", ["Thomas Jefferson", "George Washington", "King George III", "James Oglethorpe"], 1, "George Washington was chosen to lead the convention. Jefferson was in France at the time."),
      Q("Why is James Madison called the Father of the Constitution?", ["He was the oldest delegate", "He lived in Georgia", "He was the first President", "He shared so many of the ideas in it"], 3, "Madison brought many of the plans and ideas that shaped the Constitution.", "Paragraph 3 explains."),
      Q("Which two men signed the Constitution for Georgia?", ["George Washington and John Adams", "James Oglethorpe and Tomochichi", "William Few and Abraham Baldwin", "Daniel Shays and James Madison"], 2, "William Few and Abraham Baldwin signed for Georgia. Baldwin later helped found the University of Georgia.", "Look in paragraph 3."),
      Q("Georgia was which state to approve the Constitution?", ["Fourth", "First", "Tenth", "Last"], 0, "Georgia approved it in January 1788 and was the fourth state to do so.", "The passage gives the number."),
      Q("Which branch makes laws?", ["Executive", "Legislative", "Judicial", "Military"], 1, "The legislative branch, Congress, makes laws. The executive carries them out, and the judicial decides what they mean."),
      Q("How many senators does each state have?", ["One", "Ten", "It depends on the state's population", "Two"], 3, "Every state has two senators, big or small. In the House, states with more people get more members."),
      Q("What does it mean when the President vetoes a bill?", ["He rejects it", "He signs it into law", "He sends it to the Supreme Court", "He makes it a holiday"], 0, "A veto is a rejection. Congress can still pass the law over a veto if enough members vote for it."),
      Q("What is the purpose of checks and balances?", ["To make one branch the boss", "To count money", "To let each branch limit the others so none gets too powerful", "To end the states"], 2, "Checks and balances keep power spread out. Each branch can stop the others from going too far."),
      Q("Which branch includes the U.S. Supreme Court and Georgia's courts?", ["The legislative branch", "The judicial branch", "The executive branch", "The trustees"], 1, "Courts belong to the judicial branch, at the state level and the national level. Georgia also has a legislature and a governor.")
    ],
    activities: [
      { title: "Three-branch tree model", time: '25 min',
        materials: ['large paper or poster board', 'markers', 'construction paper', 'glue stick', 'scissors'],
        steps: ["Draw a big tree trunk labeled The Constitution.", "Draw three strong branches coming from the trunk.", "Label them Legislative, Executive, and Judicial.", "Cut out paper leaves. On each leaf, write one fact: who is in that branch and what it does.", "Glue each leaf on the correct branch.", "Draw arrows between branches and write one check on each arrow, like President can veto."],
        observe: "Why is it better for the government to have three branches instead of one? Use an example of a check in your answer." },
      { title: "Classroom constitution", time: '20 min',
        materials: ['paper', 'pencil', 'family members'],
        steps: ["With your family, decide on three rules for your homeschool.", "Pick who will make the rules (legislative), who will make sure they are followed (executive), and who will settle arguments about them (judicial).", "Write your rules and the three roles on paper.", "Add one way each role can check another, for example the judge can say a rule is unfair.", "Everyone signs it, just like the delegates in 1787."],
        observe: "Was it easy or hard to agree on the rules? What does that tell you about how hard it was for thirteen states to agree in 1787?" }
    ],
    think: [
      "Explain two weaknesses of the Articles of Confederation and how the Constitution fixed them.",
      "Imagine one person could make laws, carry them out, and judge them. Why might that be dangerous? Use the idea of checks and balances in your answer."
    ]
  });

  // ---------------- Week 11 ----------------
  C.unit('social', 11, {
    title: "The Bill of Rights; rights and responsibilities",
    standard: 'SS4H5, SS4CG1',
    learn: [
      { h: "Why add a Bill of Rights?", p: "Some Americans worried that the new Constitution did not clearly protect people's freedoms. Leaders promised to add a list of rights. In 1791 the first ten amendments, called the Bill of Rights, became part of the Constitution." },
      { h: "Rights and responsibilities go together", p: "A right is a freedom that belongs to you. A responsibility is a duty, something you should do. Citizens have rights like free speech, and they also have responsibilities like obeying laws, serving on juries, and voting." },
      { h: "The First Amendment", p: "The First Amendment protects five freedoms: religion, speech, the press, peaceful assembly (gathering), and petition (asking the government to change something). Many people remember them with the word RAPPS." }
    ],
    passage: [
      "When the Constitution was written, some people refused to support it until it promised to protect their freedoms. They remembered how British leaders had searched homes, stopped people from speaking out, and forced families to house soldiers. James Madison wrote a list of amendments, or changes, to protect people's rights. In 1791 the first ten amendments were added. Together they are called the Bill of Rights.",
      "The First Amendment protects freedom of religion, speech, the press, assembly, and petition. Because of it, families can worship as they choose, and the government cannot pick one official church. People can share opinions, print newspapers, meet peacefully, and ask the government to fix problems.",
      "Other amendments protect people in different ways. The Second Amendment protects the right to keep and bear arms. The Third says the government cannot force people to house soldiers in peacetime. The Fourth protects people from unreasonable searches of their homes and belongings. The Fifth, Sixth, and Seventh protect people accused of crimes or involved in lawsuits, including the right to a fair, speedy trial with a jury. The Eighth forbids cruel and unusual punishments. The Ninth says people have other rights even if they are not listed. The Tenth says powers not given to the national government belong to the states or to the people.",
      "Rights come with responsibilities. Citizens should obey laws, pay taxes, and serve on a jury when called. Adults 18 and older can vote, and good citizens learn about issues before they do. Free speech also means respecting other people's right to speak. When citizens do their part, freedom stays strong for everyone."
    ],
    vocab: [
      ["amendment", "a change or addition to the Constitution"],
      ["Bill of Rights", "the first ten amendments to the Constitution, added in 1791"],
      ["right", "a freedom that belongs to a person and is protected by law"],
      ["responsibility", "a duty; something a person should do"],
      ["jury", "a group of citizens who listen to a trial and decide the result"],
      ["petition", "a request asking the government to do something or change something"]
    ],
    demo: {
      q: "A group of neighbors writes a letter to the city asking for a new stop sign. Which First Amendment freedom are they using?",
      steps: [
        "Step 1: List the five freedoms: religion, assembly, press, petition, speech.",
        "Step 2: Ask what the neighbors are doing. They are asking the government to make a change.",
        "Step 3: Asking the government to fix or change something is called petition."
      ],
      a: "Freedom to petition, because they are asking the government to make a change."
    },
    items: [
      Q("What is the Bill of Rights?", ["A list of laws for Georgia", "The Declaration of Independence", "The first ten amendments to the Constitution", "The rules for Congress only"], 2, "The Bill of Rights is the first ten amendments. They were added in 1791 to protect people's freedoms."),
      Q("In what year was the Bill of Rights added to the Constitution?", ["1607", "1733", "1776", "1791"], 3, "The Bill of Rights became part of the Constitution in 1791, four years after the Constitution was written."),
      Q("Who wrote the list of amendments that became the Bill of Rights?", ["James Madison", "George Washington", "Benjamin Franklin", "King George III"], 0, "James Madison wrote the amendments. He also helped write the Constitution itself.", "Look in paragraph 1."),
      Q("Why did some people want a Bill of Rights?", ["They wanted a king", "They wanted to end voting", "They wanted more soldiers", "They remembered how British leaders had taken away freedoms"], 3, "The passage says people remembered British searches, silencing of speech, and soldiers in homes. They wanted those freedoms protected in writing.", "Re-read paragraph 1."),
      Q("What is an amendment?", ["A court", "A change or addition to the Constitution", "A tax", "A type of vote"], 1, "An amendment changes or adds to the Constitution. The Constitution has been amended many times since 1791."),
      Q("Which freedom is NOT part of the First Amendment?", ["Driving a car", "Religion", "Speech", "The press"], 0, "The First Amendment protects religion, assembly, press, petition, and speech. Driving is not one of them."),
      Q("A newspaper prints a story criticizing the mayor. Which freedom protects it?", ["The right to a jury", "Freedom of religion", "Freedom of the press", "The Third Amendment"], 2, "Freedom of the press protects newspapers and other news from being shut down by the government for what they print."),
      Q("Which amendment protects people from unreasonable searches of their homes?", ["The First", "The Fourth", "The Third", "The Tenth"], 1, "The Fourth Amendment protects against unreasonable searches. The Third is about housing soldiers.", "Paragraph 3 lists them."),
      Q("What does the Third Amendment say?", ["People can vote at 18", "There must be a President", "People have freedom of speech", "The government cannot force people to house soldiers in peacetime"], 3, "Colonists had been forced to house British soldiers, so the Third Amendment protects people from that in peacetime."),
      Q("What does the Eighth Amendment forbid?", ["Free speech", "Owning a house", "Cruel and unusual punishments", "Trials with juries"], 2, "The Eighth Amendment forbids cruel and unusual punishments. Punishments must be fair.", "Look in paragraph 3."),
      Q("According to the Tenth Amendment, who holds powers not given to the national government?", ["The states or the people", "The President only", "Other countries", "The Supreme Court only"], 0, "The Tenth Amendment says those powers belong to the states or to the people. This keeps the national government from taking all power."),
      Q("Which of these is a responsibility of a citizen?", ["Choosing any church you like", "Serving on a jury when called", "Speaking your opinion", "Owning a newspaper"], 1, "Serving on a jury is a duty. The other three are rights, freedoms that you may choose to use."),
      Q("At what age can American citizens vote?", ["12", "16", "18", "25"], 2, "Citizens 18 and older can vote. Good citizens learn about issues before voting.", "The passage tells you."),
      Q("How does the passage say good citizens should treat free speech?", ["Only they should be allowed to speak", "Only leaders may speak", "Speech should be banned", "They should respect other people's right to speak"], 3, "The passage says free speech means respecting other people's right to speak, even when you disagree.", "Re-read paragraph 4."),
      Q("Which shows the difference between a right and a responsibility?", ["Free speech is a right; obeying laws is a responsibility", "Paying taxes is a right; voting is a law", "A jury is a right; religion is a duty", "There is no difference"], 0, "A right is a freedom, like free speech. A responsibility is a duty, like obeying laws or paying taxes.")
    ],
    activities: [
      { title: "Rights and responsibilities T-chart", time: '20 min',
        materials: ['paper', 'ruler', 'markers', 'old magazines or newspapers (optional)'],
        steps: ["Draw a large T-chart. Label one side Rights and the other Responsibilities.", "List at least five rights from the Bill of Rights.", "List at least five responsibilities of citizens.", "Draw or cut out a picture for each item, like a newspaper for freedom of the press.", "Draw a line connecting a right to a matching responsibility, such as free speech and respecting others' speech."],
        observe: "Pick one right and one responsibility from your chart. Explain why they need each other." },
      { title: "Interview a voter", time: '20 min',
        materials: ['notebook', 'pencil', 'a grown-up who has voted'],
        steps: ["Write five questions about voting, such as: Why do you vote? How do you learn about the choices?", "Ask a parent, grandparent, or neighbor who has voted.", "Write down their answers.", "Ask which right in the Bill of Rights matters most to them and why.", "Thank them and read your notes back to make sure you got it right."],
        observe: "What did you learn about voting as a responsibility? Use one answer from your interview in your response." }
    ],
    think: [
      "Which freedom in the First Amendment do you think is most important for a family like yours? Explain your reasons.",
      "Why do you think rights and responsibilities must go together? Give an example from everyday life."
    ]
  });

  // ---------------- Week 12 ----------------
  C.unit('social', 12, {
    title: "The new nation: Louisiana Purchase, Lewis and Clark, War of 1812",
    standard: 'SS4H5',
    learn: [
      { h: "A huge purchase", p: "In 1803 President Thomas Jefferson bought the Louisiana Territory from France for about 15 million dollars. It doubled the size of the United States and gave Americans control of the Mississippi River and the port of New Orleans." },
      { h: "Exploring the West", p: "Jefferson sent Meriwether Lewis and William Clark to explore the new land. Their group, the Corps of Discovery, traveled all the way to the Pacific Ocean with help from Native Americans, especially a young Shoshone woman named Sacagawea." },
      { h: "A second war with Britain", p: "From 1812 to 1815, the United States fought Britain again. The war gave Americans new pride and the poem that became our national anthem." }
    ],
    passage: [
      "In 1803 American farmers in the West shipped their crops down the Mississippi River to the port of New Orleans. France controlled that land. President Thomas Jefferson tried to buy New Orleans, and France's leader, Napoleon, offered to sell the whole Louisiana Territory instead. The United States paid about 15 million dollars. Overnight, the country doubled in size.",
      "Jefferson wanted to learn about the new land. He chose Meriwether Lewis and William Clark to lead the Corps of Discovery. In 1804 they set out from near St. Louis and paddled up the Missouri River. They mapped rivers, drew plants and animals, and met many Native American nations. York, a man enslaved by Clark, traveled with them and did much of the hard work.",
      "During their first winter, they met Sacagawea, a young Shoshone woman, and her French Canadian husband, who joined as interpreters. Sacagawea carried her baby son the whole way. When the group reached the Rocky Mountains, they needed horses. Amazingly, the Shoshone chief turned out to be Sacagawea's brother, and he traded them horses. A group traveling with a mother and baby also showed other nations they came in peace. In November 1805, the explorers reached the Pacific Ocean. They returned in 1806.",
      "Soon trouble grew with Britain. British ships stopped American ships and forced American sailors to serve in the British navy. Britain also blocked American trade and helped some Native nations fight American settlers. In 1812 Congress declared war. In 1814 British troops burned the White House, but First Lady Dolley Madison saved a famous portrait of George Washington. That same year, Francis Scott Key watched the British attack Fort McHenry in Baltimore. When he saw the American flag still flying at dawn, he wrote a poem that became our national anthem. In January 1815, General Andrew Jackson won the Battle of New Orleans. Neither side really won the war, but Americans felt proud of their young country."
    ],
    vocab: [
      ["territory", "a large area of land that belongs to a country but is not a state"],
      ["Louisiana Purchase", "the 1803 deal in which the United States bought a huge territory from France"],
      ["expedition", "a long trip taken for a special purpose, such as exploring"],
      ["interpreter", "a person who helps people who speak different languages understand each other"],
      ["impressment", "forcing sailors to serve in another country's navy, which Britain did to Americans"],
      ["national anthem", "a country's official song"]
    ],
    demo: {
      q: "Why was the port of New Orleans so important to American farmers in 1803?",
      steps: [
        "Step 1: Find where the farmers lived. Many lived in the West, near rivers that flow into the Mississippi.",
        "Step 2: Think about how they moved crops. With no railroads yet, boats on rivers were the easiest way.",
        "Step 3: The Mississippi River ends at New Orleans, where goods were loaded onto ships to be sold."
      ],
      a: "Farmers shipped crops down the Mississippi to New Orleans, so whoever controlled the port controlled their trade."
    },
    items: [
      Q("Which president made the Louisiana Purchase?", ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Andrew Jackson"], 2, "Thomas Jefferson was president in 1803 and made the deal with France."),
      Q("From which country did the United States buy the Louisiana Territory?", ["France", "Spain", "Britain", "Mexico"], 0, "France, led by Napoleon, sold the land. Britain was the enemy in the War of 1812."),
      Q("What did Jefferson first try to buy?", ["Florida", "Georgia", "Canada", "New Orleans"], 3, "Jefferson first tried to buy New Orleans. Napoleon offered the whole territory instead.", "Re-read paragraph 1."),
      Q("How did the Louisiana Purchase change the United States?", ["It made the country smaller", "It doubled the size of the country", "It ended slavery", "It created Georgia"], 1, "The Louisiana Territory was so big that the United States doubled in size."),
      Q("What river did Lewis and Clark paddle up when they set out in 1804?", ["The Missouri River", "The Savannah River", "The Hudson River", "The St. Lawrence River"], 0, "They started near St. Louis and traveled up the Missouri River.", "Look in paragraph 2."),
      Q("Who was York?", ["A British general", "Sacagawea's brother", "A man enslaved by Clark who traveled with the expedition", "A French leader"], 2, "York was enslaved by William Clark and did much of the expedition's hard work. His story is often left out, but he was part of the journey.", "Paragraph 2 names him."),
      Q("Sacagawea was a member of which Native American nation?", ["Cherokee", "Shoshone", "Seminole", "Hopi"], 1, "Sacagawea was Shoshone. Her people lived near the Rocky Mountains."),
      Q("How did Sacagawea's brother help the expedition?", ["He fought the British", "He gave them a ship", "He wrote their maps", "He traded them horses"], 3, "Her brother was the Shoshone chief, and he traded horses the explorers needed to cross the Rocky Mountains.", "Look in paragraph 3."),
      Q("According to the passage, why did traveling with a mother and baby help the explorers?", ["It made them travel faster", "It scared away animals", "It showed other nations they came in peace", "It made them rich"], 2, "War parties did not bring mothers and babies, so seeing Sacagawea and her son told others the group was peaceful.", "Read paragraph 3 carefully."),
      Q("When did Lewis and Clark reach the Pacific Ocean?", ["1803", "1805", "1812", "1815"], 1, "They reached the Pacific in November 1805 and returned home in 1806."),
      Q("Which was a cause of the War of 1812?", ["Britain forced American sailors to serve in its navy", "France burned New Orleans", "Spain attacked Georgia", "Lewis and Clark got lost"], 0, "Impressment, forcing American sailors into the British navy, was a major cause. Britain also blocked trade and helped some Native nations fight settlers."),
      Q("What did Dolley Madison save when the British burned the White House?", ["The Constitution", "A portrait of George Washington", "The Liberty Bell", "Jefferson's map"], 1, "Dolley Madison saved a famous portrait of George Washington before the British set fire to the White House in 1814."),
      Q("What did Francis Scott Key see that inspired his poem?", ["Lewis and Clark returning", "The Mississippi River", "The British surrender", "The American flag still flying at Fort McHenry"], 3, "At dawn Key saw the flag still flying over Fort McHenry. His poem became the national anthem.", "Look in paragraph 4."),
      Q("Who won the Battle of New Orleans in 1815?", ["Andrew Jackson's American forces", "The British army", "Napoleon", "Sacagawea"], 0, "General Andrew Jackson led American forces to victory at New Orleans in January 1815. Jackson later became president."),
      Q("How did the War of 1812 make Americans feel?", ["Ashamed", "Ready to rejoin Britain", "Proud of their young country", "Angry at France"], 2, "Neither side really won, but standing up to Britain gave Americans new pride and a stronger sense of being one nation.")
    ],
    activities: [
      { title: "Trace the Corps of Discovery", time: '30 min',
        materials: ['printed map of the United States with rivers', 'colored pencils', 'stickers or small paper dots'],
        steps: ["Shade the Louisiana Territory lightly in one color, using a map from a book or the internet as a guide.", "Put a dot on St. Louis, the starting point.", "Trace the Missouri River west and north with a bold line.", "Draw the route over the Rocky Mountains and down the Columbia River to the Pacific Ocean.", "Add three labels along the way: where they met Sacagawea, where they got horses, where they reached the Pacific.", "Put a star on Georgia so you can compare distances."],
        observe: "Look at the mountains on your map. Why were horses from the Shoshone so important at that part of the trip?" },
      { title: "Explorer's field journal", time: '25 min',
        materials: ['notebook', 'pencil', 'colored pencils', 'a backyard or park'],
        steps: ["Lewis and Clark drew and described new plants and animals. Now it is your turn.", "Go outside with your parent and pick three living things: a plant, a bug, and a bird or animal.", "Draw each one carefully.", "Next to each drawing, write its size, color, where you found it, and one thing it was doing.", "Give any you do not know a name, then look up the real name later."],
        observe: "Why would detailed journals have been so useful to President Jefferson? Explain using what you learned from keeping your own." }
    ],
    think: [
      "Sacagawea, York, and many Native American nations helped the Corps of Discovery succeed. Explain how the trip might have gone without their help.",
      "Was the Louisiana Purchase a good deal for the United States? Give at least two reasons using facts from the lesson."
    ]
  });

  // ---------------- Week 13 ----------------
  C.unit('social', 13, {
    title: "Westward expansion and the Trail of Tears",
    standard: 'SS4H6',
    learn: [
      { h: "Heading west", p: "In the 1800s, many Americans moved west for land, gold, and a fresh start. Pioneers, people who are among the first to settle a new place, traveled in covered wagons on trails like the Oregon Trail." },
      { h: "Gold rushes", p: "Gold was found near Dahlonega, Georgia, in the late 1820s and in California in 1848. Both discoveries caused gold rushes, when crowds of people hurried to a place hoping to get rich." },
      { h: "Forced removal", p: "As settlers wanted more land, the government forced Native Americans to leave their homelands. The Cherokee of Georgia were forced west in 1838 and 1839 on a journey called the Trail of Tears." }
    ],
    passage: [
      "In the 1840s, thousands of pioneer families packed covered wagons and headed west on the Oregon Trail. The trail stretched about 2,000 miles, from Independence, Missouri, to rich farmland in Oregon. Oxen pulled the heavy wagons, and many people walked most of the way. The trip took four to six months. Travelers faced rivers to cross, mountains, storms, and sickness. Many did not survive, but those who did built new farms and towns.",
      "In January 1848, James Marshall found gold at Sutter's Mill in California. News spread fast. By 1849 people were rushing there from all over the world. These gold seekers were called forty-niners. Few got rich, but California's population grew so fast that it became a state in 1850.",
      "Georgia had an earlier gold rush. Gold was found near Dahlonega, in the north Georgia mountains, in the late 1820s. Thousands of miners poured into the area. But that land belonged to the Cherokee Nation. Many settlers wanted the Cherokee land for gold and farming.",
      "In 1830 President Andrew Jackson signed the Indian Removal Act. It allowed the government to move Native Americans to land west of the Mississippi River. The Cherokee had their own government, schools, and newspaper, and their leader John Ross fought removal in the courts. In 1832 the Supreme Court ruled in a case called Worcester v. Georgia that Georgia could not make laws for the Cherokee Nation. But the ruling was not enforced.",
      "In 1835 a small group of Cherokee signed a treaty giving up the land, even though most Cherokee and John Ross opposed it. In 1838 soldiers forced about 16,000 Cherokee from their homes. They walked hundreds of miles to Indian Territory, now Oklahoma, through cold and sickness. Thousands died. This sad journey is called the Trail of Tears."
    ],
    vocab: [
      ["pioneer", "one of the first people to settle in a new place"],
      ["gold rush", "a time when many people hurry to a place where gold has been found"],
      ["forty-niner", "a person who went to California during the gold rush of 1849"],
      ["Indian Removal Act", "an 1830 law that let the government move Native Americans west of the Mississippi River"],
      ["treaty", "a written agreement between nations or groups"],
      ["Trail of Tears", "the forced march of the Cherokee from their homeland to Indian Territory in 1838-1839"]
    ],
    demo: {
      q: "How did the gold rush in Dahlonega help lead to the Trail of Tears?",
      steps: [
        "Step 1: Find where the gold was. Dahlonega was on Cherokee land in north Georgia.",
        "Step 2: Ask what settlers wanted. Thousands of miners came, and many settlers wanted the land for gold and farms.",
        "Step 3: Connect cause and effect. Pressure for that land helped push the government to remove the Cherokee."
      ],
      a: "Finding gold on Cherokee land made settlers want it even more, which added pressure to force the Cherokee out."
    },
    items: [
      Q("What is a pioneer?", ["A soldier", "A gold coin", "One of the first people to settle in a new place", "A wagon"], 2, "Pioneers were among the first settlers in a new place. Many pioneers traveled west on trails like the Oregon Trail."),
      Q("About how long was the Oregon Trail?", ["20 miles", "200 miles", "2,000 miles", "20,000 miles"], 2, "The Oregon Trail stretched about 2,000 miles from Missouri to Oregon.", "Re-read paragraph 1."),
      Q("What animals usually pulled pioneer wagons on the Oregon Trail?", ["Oxen", "Camels", "Dogs", "Elephants"], 0, "Oxen were strong and steady, so they pulled the heavy wagons. Many pioneers walked beside them."),
      Q("How long did the trip on the Oregon Trail usually take?", ["Two days", "Two weeks", "Five years", "Four to six months"], 3, "The passage says the trip took four to six months. Pioneers tried to finish before winter snow blocked the mountains.", "Look in paragraph 1."),
      Q("Where was gold found in California in 1848?", ["Dahlonega", "Sutter's Mill", "New Echota", "Independence"], 1, "James Marshall found gold at Sutter's Mill. Dahlonega is the site of Georgia's gold rush."),
      Q("Why were California gold seekers called forty-niners?", ["Many rushed there in 1849", "They were 49 years old", "There were 49 of them", "They found 49 pounds of gold"], 0, "So many people rushed to California in 1849 that they were called forty-niners."),
      Q("What happened to California because of the gold rush?", ["It became part of Mexico", "It became empty", "Its population grew so fast that it became a state in 1850", "It joined Canada"], 2, "The passage says California grew so quickly that it became a state in 1850.", "Look in paragraph 2."),
      Q("Where and when was gold found in Georgia?", ["Savannah in 1733", "Near Dahlonega in the late 1820s", "Atlanta in 1864", "Macon in 1900"], 1, "Gold was found near Dahlonega in the north Georgia mountains in the late 1820s, about twenty years before California's gold rush."),
      Q("Who owned the land around Dahlonega when gold was found?", ["Spain", "California", "England", "The Cherokee Nation"], 3, "The land belonged to the Cherokee Nation. That made the gold rush part of the conflict over Cherokee land.", "Paragraph 3 tells you."),
      Q("Which president signed the Indian Removal Act in 1830?", ["Thomas Jefferson", "Abraham Lincoln", "Andrew Jackson", "George Washington"], 2, "Andrew Jackson signed the Indian Removal Act. He was the same general who won the Battle of New Orleans."),
      Q("Who was John Ross?", ["The leader of the Cherokee who fought removal", "A gold miner", "A British general", "The founder of Savannah"], 0, "John Ross was the principal chief of the Cherokee. He fought removal in the courts and opposed the 1835 treaty."),
      Q("What did the Supreme Court decide in Worcester v. Georgia?", ["The Cherokee had to leave", "Georgia could not make laws for the Cherokee Nation", "Gold belonged to California", "Georgia was not a state"], 1, "The Court ruled for the Cherokee in 1832. Sadly, the ruling was not enforced, and removal went forward.", "Look in paragraph 4."),
      Q("Why was the 1835 treaty unfair to the Cherokee?", ["It was signed by Lewis and Clark", "It gave them too much land", "It was written in Spanish", "It was signed by only a small group while most Cherokee opposed it"], 3, "Only a small group signed it. Most Cherokee and their leader John Ross did not agree, yet the government used it to force removal.", "Read paragraph 5."),
      Q("Where were the Cherokee forced to go?", ["Indian Territory, now Oklahoma", "Florida", "California", "Canada"], 0, "The Cherokee were forced to walk to Indian Territory, which is now the state of Oklahoma."),
      Q("Why is the forced removal called the Trail of Tears?", ["It rained the whole time", "It went past a lake", "Thousands of Cherokee suffered and died on the journey", "It was a happy trip"], 2, "The name reflects the great sadness and loss. Thousands died from cold, hunger, and sickness on the forced march.")
    ],
    activities: [
      { title: "Pack the wagon", time: '20 min',
        materials: ['paper', 'pencil', 'a box or laundry basket', 'household items'],
        steps: ["A covered wagon had room for only about as much as a small bedroom closet.", "Make a list of 20 things a pioneer family might want to bring.", "Use your box as a pretend wagon. Gather small items or pictures to stand for your list.", "Now cut your list down to 10 things that will fit and that you truly need.", "Put a star next to the three most important items and write why."],
        observe: "What was the hardest thing to leave behind, and why? How might choices like this have felt for real pioneer families?" },
      { title: "Map two journeys", time: '30 min',
        materials: ['printed map of the United States', 'two colored pencils', 'pencil'],
        steps: ["In one color, trace the Oregon Trail from Independence, Missouri, to Oregon.", "Mark Sutter's Mill in California with a small star.", "In the second color, trace a route from north Georgia (near New Echota) to Oklahoma for the Trail of Tears.", "Put a dot on Dahlonega, Georgia.", "Make a map key and write one sentence under the map telling how the two journeys were different."],
        observe: "Pioneers chose to go west, but the Cherokee were forced. Explain why that difference matters when we study these two journeys." }
    ],
    think: [
      "The Cherokee had their own government, schools, and newspaper, and the Supreme Court even ruled in their favor. Explain why they were still forced to leave Georgia.",
      "Would you have joined a wagon train on the Oregon Trail? Explain your choice using the dangers and rewards described in the passage."
    ]
  });

  // ---------------- Week 14 ----------------
  C.unit('social', 14, {
    title: "Causes of the Civil War",
    standard: 'SS4H7',
    learn: [
      { h: "Two regions growing apart", p: "By the 1850s, the North and South had very different economies. The North had more factories, cities, and railroads. The South depended on farming, especially cotton grown by enslaved people. Their disagreements grew sharper every year." },
      { h: "The biggest cause: slavery", p: "The main cause of the Civil War was slavery and whether it should spread into new western lands. Many Northerners wanted to stop its spread, and some wanted to end it everywhere. Most Southern leaders wanted to keep it and expand it." },
      { h: "States' rights", p: "States' rights is the idea that states should have more power than the national government. Southern leaders argued that states had the right to decide about slavery and even to leave the United States. This leaving is called secession." }
    ],
    passage: [
      "In 1793 Eli Whitney built a cotton gin on a plantation near Savannah, Georgia. The machine pulled seeds out of cotton much faster than hands could. Growing cotton became very profitable, so plantation owners planted more and more of it. Sadly, this also caused slavery to grow, because owners forced more enslaved people to plant and pick the cotton.",
      "As the country added new states in the West, Americans argued about whether those states would allow slavery. In 1820 the Missouri Compromise let Missouri join as a slave state and Maine as a free state, keeping the balance in the Senate. The Compromise of 1850 brought California in as a free state but made a stronger law forcing people to return those who escaped slavery. In 1854 the Kansas-Nebraska Act let settlers in those territories vote on slavery, and fighting broke out in Kansas.",
      "Books and court cases made feelings stronger. In 1852 Harriet Beecher Stowe wrote Uncle Tom's Cabin, a novel that showed the cruelty of slavery and turned many Northerners against it. In 1857 the Supreme Court ruled in the Dred Scott case that enslaved people were not citizens and that Congress could not ban slavery in the territories. Many Northerners were outraged.",
      "In 1860 Abraham Lincoln was elected president. He promised to stop slavery from spreading west. Many Southern leaders feared he would end slavery altogether. In December 1860, South Carolina seceded, or left the Union. Georgia seceded on January 19, 1861. In time, eleven states joined the Confederate States of America, with Jefferson Davis as president and Georgia's Alexander Stephens as vice president. In April 1861, Confederate forces fired on Fort Sumter in South Carolina, and the Civil War began."
    ],
    vocab: [
      ["cotton gin", "a machine that quickly removes seeds from cotton"],
      ["compromise", "an agreement where each side gives up something it wants"],
      ["states' rights", "the idea that states should have more power than the national government"],
      ["secede", "to formally leave a country or group; Southern states seceded from the United States"],
      ["Union", "the United States, especially the Northern states during the Civil War"],
      ["Confederacy", "the eleven Southern states that seceded and formed their own government"]
    ],
    demo: {
      q: "Put these in order: Lincoln is elected, the cotton gin is built, Georgia secedes, the Missouri Compromise.",
      steps: [
        "Step 1: Find the dates. Cotton gin, 1793. Missouri Compromise, 1820. Lincoln elected, 1860. Georgia secedes, 1861.",
        "Step 2: Order the years from smallest to largest: 1793, 1820, 1860, 1861.",
        "Step 3: Check the cause-and-effect: Lincoln's election came before secession, because secession was a reaction to it."
      ],
      a: "Cotton gin (1793), Missouri Compromise (1820), Lincoln elected (1860), Georgia secedes (1861)."
    },
    items: [
      Q("What was the main cause of the Civil War?", ["Gold in California", "Taxes on tea", "Slavery and whether it should spread", "A war with France"], 2, "Slavery, and the fight over whether it would spread west, was at the center of the conflict. Other causes, like states' rights, were tied to slavery."),
      Q("Where was Eli Whitney's cotton gin built?", ["On a plantation near Savannah, Georgia", "In Boston", "In California", "In Philadelphia"], 0, "Eli Whitney built his cotton gin in 1793 on a plantation near Savannah, Georgia.", "Re-read paragraph 1."),
      Q("How did the cotton gin affect slavery?", ["It ended slavery", "It freed workers in the North", "It had no effect", "It caused slavery to grow because cotton became more profitable"], 3, "The gin made cotton very profitable, so owners grew more and forced more enslaved people to work. A labor-saving machine sadly led to more slavery.", "Look at the last sentence of paragraph 1."),
      Q("What is states' rights?", ["The right to vote at 18", "The idea that states should have more power than the national government", "A kind of tax", "The Bill of Rights"], 1, "States' rights means states should hold more power. Southern leaders used it to argue they could decide about slavery and leave the Union."),
      Q("What did the Missouri Compromise do in 1820?", ["Let Missouri join as a slave state and Maine as a free state", "Ended slavery", "Started the Civil War", "Made California a state"], 0, "It kept the number of slave and free states equal in the Senate by adding one of each.", "Paragraph 2 explains."),
      Q("Which state joined the Union as a free state in the Compromise of 1850?", ["Georgia", "Missouri", "California", "Kansas"], 2, "California joined as a free state in 1850. The compromise also made a stronger law about returning people who escaped slavery."),
      Q("What did the Kansas-Nebraska Act allow?", ["Slavery was banned everywhere", "Settlers in those territories could vote on slavery", "Kansas became part of Mexico", "Lincoln became president"], 1, "Letting settlers vote led people on both sides to rush in, and fighting broke out in Kansas.", "Look in paragraph 2."),
      Q("What was Uncle Tom's Cabin?", ["A law", "A court case", "A fort", "A novel showing the cruelty of slavery"], 3, "Harriet Beecher Stowe's 1852 novel turned many Northerners against slavery."),
      Q("What did the Supreme Court decide in the Dred Scott case?", ["The South could secede", "All enslaved people were free", "Enslaved people were not citizens, and Congress could not ban slavery in the territories", "Kansas was a free state"], 2, "The 1857 decision said enslaved people were not citizens. It angered many Northerners and deepened the divide.", "Look in paragraph 3."),
      Q("What did Lincoln promise about slavery when he ran in 1860?", ["To stop it from spreading west", "To spread it to every state", "Nothing at all", "To move it to Canada"], 0, "Lincoln promised to keep slavery from spreading into western lands. Southern leaders feared he would go further."),
      Q("What does secede mean?", ["To join a group", "To formally leave a country or group", "To vote", "To write a law"], 1, "To secede means to leave. Eleven Southern states seceded and formed the Confederacy."),
      Q("Which state was the first to secede?", ["Georgia", "Virginia", "Texas", "South Carolina"], 3, "South Carolina seceded first, in December 1860. Georgia followed on January 19, 1861."),
      Q("When did Georgia secede?", ["January 19, 1861", "July 4, 1776", "April 9, 1865", "December 1860"], 0, "Georgia left the Union on January 19, 1861. December 1860 is when South Carolina seceded.", "The passage gives the exact date."),
      Q("Which Georgian became vice president of the Confederacy?", ["Jefferson Davis", "Eli Whitney", "Alexander Stephens", "John Ross"], 2, "Alexander Stephens of Georgia was vice president. Jefferson Davis was president of the Confederacy.", "Look in paragraph 4."),
      Q("Where did the first shots of the Civil War happen?", ["Fort McHenry", "Fort Sumter in South Carolina", "Savannah", "Gettysburg"], 1, "Confederate forces fired on Fort Sumter in April 1861. Fort McHenry was attacked in the War of 1812.")
    ],
    activities: [
      { title: "Road-to-war timeline", time: '30 min',
        materials: ['long strip of paper (tape sheets together)', 'ruler', 'markers'],
        steps: ["Draw a long line and mark it from 1790 to 1865.", "Add these events at the right places: cotton gin 1793, Missouri Compromise 1820, Compromise of 1850, Uncle Tom's Cabin 1852, Kansas-Nebraska Act 1854, Dred Scott 1857.", "Add Lincoln elected 1860, Georgia secedes 1861, and Fort Sumter 1861.", "Draw a small picture next to each event.", "Color the events that made the North and South angrier at each other in red.", "Explain your timeline to your parent from left to right."],
        observe: "Look at how close together the red events are near the end. What does that show about how tensions grew before the war?" },
      { title: "Map a divided nation", time: '25 min',
        materials: ['printed map of the United States in 1861', 'two colored pencils', 'pencil'],
        steps: ["With your parent, find a map that shows Union and Confederate states in 1861.", "Color the eleven Confederate states one color.", "Color the Union states another color.", "Put a star on Georgia and a dot on Fort Sumter in South Carolina.", "Make a key and title your map The Nation Divides."],
        observe: "Where were the Confederate states located compared to the Union states? How might geography and farming explain why they sided together?" }
    ],
    think: [
      "Explain how the cotton gin, invented in Georgia, connected to the causes of the Civil War. Use cause-and-effect words like because and so.",
      "Why did Lincoln's election lead Southern states to secede? Use details from the passage to support your answer."
    ]
  });

  // ---------------- Week 15 ----------------
  C.unit('social', 15, {
    title: "The Civil War",
    standard: 'SS4H7',
    learn: [
      { h: "Union and Confederacy", p: "The Civil War lasted from 1861 to 1865. The Union (the North) fought to keep the country together, and over time, to end slavery. The Confederacy (the South) fought to become its own nation and keep slavery." },
      { h: "Key people", p: "Abraham Lincoln led the Union as president. Ulysses S. Grant became the Union's top general. Robert E. Lee was the most famous Confederate general. Harriet Tubman and Frederick Douglass, who had both escaped slavery, worked bravely for freedom." },
      { h: "War in Georgia", p: "Georgia saw major fighting. The Battle of Chickamauga was fought in north Georgia in 1863. In 1864 Union General William T. Sherman captured Atlanta and then marched across Georgia to Savannah." }
    ],
    passage: [
      "When the war began, President Abraham Lincoln's main goal was to keep the United States together. On January 1, 1863, he issued the Emancipation Proclamation. It declared that enslaved people in the areas fighting against the Union were free. Now the war was also a fight to end slavery. That July, the Union won the huge Battle of Gettysburg in Pennsylvania. Later Lincoln gave a short speech there, the Gettysburg Address, about a nation built on freedom and equality.",
      "Robert E. Lee, from Virginia, led the Confederacy's strongest army and won many battles. Ulysses S. Grant won key Union victories in the West, and Lincoln put him in charge of all Union armies in 1864. Grant kept steady pressure on Lee's army.",
      "Harriet Tubman escaped slavery in Maryland. She returned many times to lead others to freedom on the Underground Railroad, a secret network of people and hiding places. During the war she served the Union as a nurse, scout, and spy. In 1863 she helped lead a raid in South Carolina that freed more than 700 enslaved people. Frederick Douglass also escaped slavery and became a famous writer and speaker. He urged Lincoln to let Black men fight, and about 180,000 Black soldiers served in the Union army.",
      "In 1864 General William T. Sherman captured Atlanta, an important railroad center. Then his army marched about 300 miles to Savannah, in what is called Sherman's March to the Sea. His soldiers destroyed railroads, factories, crops, and many homes to weaken the South. In December 1864, Sherman captured Savannah and sent Lincoln a message offering the city as a Christmas present.",
      "On April 9, 1865, Lee surrendered to Grant at Appomattox Court House in Virginia. Days later, Lincoln was shot and killed. The nation was together again, but deeply hurt."
    ],
    vocab: [
      ["Emancipation Proclamation", "Lincoln's 1863 order declaring enslaved people in Confederate areas free"],
      ["emancipation", "the act of setting someone free"],
      ["Underground Railroad", "a secret network of people and hiding places that helped enslaved people escape to freedom"],
      ["surrender", "to give up and stop fighting"],
      ["March to the Sea", "Sherman's 1864 march from Atlanta to Savannah that destroyed much of Georgia's railroads and farms"],
      ["abolitionist", "a person who worked to end slavery, like Frederick Douglass"]
    ],
    demo: {
      q: "Why did Sherman destroy railroads on his march through Georgia?",
      steps: [
        "Step 1: Remember what railroads did. They moved soldiers, food, and supplies.",
        "Step 2: Think about the Confederate army. It needed supplies from places like Georgia to keep fighting.",
        "Step 3: If railroads are destroyed, supplies cannot reach the army, which weakens the South."
      ],
      a: "Destroying railroads stopped supplies from reaching Confederate soldiers and weakened the South's ability to fight."
    },
    items: [
      Q("When did the Civil War take place?", ["1776-1783", "1812-1815", "1861-1865", "1898"], 2, "The Civil War began in 1861 and ended in 1865. 1812-1815 was the War of 1812."),
      Q("Who was president of the United States during the Civil War?", ["Jefferson Davis", "Ulysses S. Grant", "Abraham Lincoln", "Andrew Jackson"], 2, "Abraham Lincoln was president. Jefferson Davis was president of the Confederacy, not the United States."),
      Q("What did the Emancipation Proclamation declare?", ["Enslaved people in areas fighting the Union were free", "The war was over", "Georgia was a free state", "Lee was the new president"], 0, "It freed enslaved people in Confederate areas and made ending slavery a goal of the war.", "Re-read paragraph 1."),
      Q("On what date was the Emancipation Proclamation issued?", ["July 4, 1776", "December 25, 1864", "April 9, 1865", "January 1, 1863"], 3, "Lincoln issued it on January 1, 1863. April 9, 1865 is when Lee surrendered."),
      Q("Where was the Battle of Gettysburg fought?", ["Georgia", "Pennsylvania", "Virginia", "South Carolina"], 1, "Gettysburg is in Pennsylvania. The Union victory there in July 1863 was a turning point of the war."),
      Q("Who was the most famous Confederate general?", ["Robert E. Lee", "William T. Sherman", "Ulysses S. Grant", "Frederick Douglass"], 0, "Robert E. Lee led the Confederacy's strongest army. Grant and Sherman were Union generals."),
      Q("What did Lincoln do with Grant in 1864?", ["He fired him", "He sent him to Georgia", "He put him in charge of all Union armies", "He made him vice president"], 2, "After Grant's victories in the West, Lincoln put him in charge of all Union armies in 1864.", "Look in paragraph 2."),
      Q("What was the Underground Railroad?", ["A train under the ground", "A secret network of people and hiding places that helped enslaved people escape", "A railroad Sherman built", "A Confederate fort"], 1, "It was not a real railroad. It was a secret system of helpers and safe houses leading people to freedom."),
      Q("Which of these jobs did Harriet Tubman do for the Union during the war?", ["Ship captain", "General of the army", "President", "Nurse, scout, and spy"], 3, "The passage says she served as a nurse, scout, and spy. She also helped lead a raid that freed more than 700 people.", "Paragraph 3 lists her jobs."),
      Q("What did Frederick Douglass urge Lincoln to do?", ["Surrender to the South", "Move the capital to Atlanta", "Let Black men fight in the Union army", "End the war early"], 2, "Douglass argued that Black men should be allowed to fight. About 180,000 Black soldiers served in the Union army.", "Look in paragraph 3."),
      Q("About how many Black soldiers served in the Union army?", ["1,800", "18,000", "180,000", "1,800,000"], 2, "The passage says about 180,000 Black soldiers served. Their courage helped the Union win.", "Check the number in paragraph 3."),
      Q("Why was Atlanta important during the war?", ["It was an important railroad center", "It was the Confederate capital", "It was a seaport", "It was in the North"], 0, "Atlanta was a key railroad hub that moved Confederate supplies. Capturing it hurt the South badly."),
      Q("Where did Sherman's March to the Sea end?", ["Atlanta", "Savannah", "Macon", "Augusta"], 1, "The march went from Atlanta to Savannah, on the coast. Sherman captured Savannah in December 1864."),
      Q("What did Sherman offer Lincoln as a Christmas present?", ["Atlanta", "Fort Sumter", "A new railroad", "The city of Savannah"], 3, "After capturing Savannah in December 1864, Sherman sent Lincoln a message offering the city as a Christmas present.", "Look at the end of paragraph 4."),
      Q("Where did Lee surrender to Grant?", ["Appomattox Court House in Virginia", "Gettysburg", "Savannah", "Washington, D.C."], 0, "Lee surrendered at Appomattox Court House, Virginia, on April 9, 1865. That effectively ended the war.")
    ],
    activities: [
      { title: "Map Sherman's march", time: '25 min',
        materials: ['printed map of Georgia with major cities', 'colored pencils', 'pencil'],
        steps: ["Find and label Atlanta, Macon, Milledgeville, and Savannah on your map.", "Put a crossed-swords symbol in northwest Georgia for the Battle of Chickamauga (near the Tennessee line).", "Draw a wide arrow from Atlanta to Savannah to show the March to the Sea.", "Shade a band about as wide as your finger along the arrow to show the path of destruction.", "Make a map key for your symbols.", "Ask your parent if your family lives near the path."],
        observe: "Why do you think Sherman chose to march to Savannah, a port city on the coast? Give at least two reasons." },
      { title: "Freedom-fighter biography cards", time: '25 min',
        materials: ['two index cards or half sheets of paper', 'pencil', 'colored pencils'],
        steps: ["Make one card for Harriet Tubman and one for Frederick Douglass.", "Draw a portrait of each person on the front.", "On the back, write: Where they were born into slavery, how they became free, and what they did for freedom.", "Add one word that describes each person's character, like brave or determined.", "Present your cards to your family like a museum guide."],
        observe: "Tubman and Douglass both escaped slavery but helped in different ways. Compare how each one fought for freedom." }
    ],
    think: [
      "How did the Emancipation Proclamation change the purpose of the Civil War? Use evidence from the passage.",
      "Sherman's March to the Sea helped end the war, but it also caused great suffering for families in Georgia. Explain both sides of this event."
    ]
  });

  // ---------------- Week 16 ----------------
  C.unit('social', 16, {
    title: "Reconstruction",
    standard: 'SS4H8',
    learn: [
      { h: "Rebuilding a nation", p: "Reconstruction was the time after the Civil War, from 1865 to 1877, when the nation worked to rebuild the South and bring Southern states back into the Union. Its biggest question was how to protect the freedom of about four million people who had been enslaved." },
      { h: "Three amendments", p: "The 13th Amendment (1865) ended slavery. The 14th Amendment (1868) made formerly enslaved people citizens and promised equal protection under the law. The 15th Amendment (1870) said men could not be kept from voting because of their race." },
      { h: "Hope and hard times", p: "Freedmen built schools, churches, and families. But many white Southerners passed unfair laws and used threats to take away Black Americans' new rights. Progress was real, but much was lost when Reconstruction ended." }
    ],
    passage: [
      "When the war ended in 1865, much of the South lay in ruins. Farms, railroads, and cities like Atlanta had been destroyed. About four million people had been freed from slavery, but most had no land, no money, and little chance to go to school. After Lincoln's death, Andrew Johnson became president.",
      "Congress added three amendments to the Constitution. The 13th Amendment, in 1865, ended slavery everywhere in the United States. The 14th, in 1868, made all people born in the country citizens and promised that states must treat everyone equally under the law. The 15th, in 1870, said the right to vote could not be denied because of race. At that time, women still could not vote.",
      "In 1865 Congress created the Freedmen's Bureau to help freed people and poor white Southerners. It gave out food and medicine, helped people find lost family members, and helped workers get fair agreements. It also helped open many schools across the South, including in Georgia. Children and grown-ups alike crowded into classrooms, eager to learn to read.",
      "In Georgia, Black men voted for the first time and helped elect Black lawmakers in 1868. One of them was Henry McNeal Turner, a minister. White lawmakers soon voted to expel, or remove, them, but the Black legislators were later returned to their seats. Georgia was readmitted to the Union in 1870.",
      "Many freed families became sharecroppers. They farmed land owned by someone else and paid with part of the crop, which often kept them in debt. Some Southern states passed Black Codes, laws that limited the freedom of Black Americans, and violent groups like the Ku Klux Klan used fear to stop them from voting. In 1877 federal troops left the South and Reconstruction ended. The promises of the 14th and 15th Amendments would take many more years to keep."
    ],
    vocab: [
      ["Reconstruction", "the period from 1865 to 1877 when the nation rebuilt the South and brought Southern states back into the Union"],
      ["amendment", "a change or addition to the Constitution"],
      ["freedmen", "people who had been freed from slavery"],
      ["Freedmen's Bureau", "a government agency that gave food, medicine, schools, and other help after the Civil War"],
      ["sharecropping", "farming someone else's land and paying with part of the crop"],
      ["Black Codes", "unfair laws passed in Southern states to limit the freedom of Black Americans"]
    ],
    demo: {
      q: "Match the amendment to its job: A freed man in Georgia casts a ballot in 1870 for the first time.",
      steps: [
        "Step 1: List the jobs. 13th ended slavery. 14th made freed people citizens with equal protection. 15th protected voting from being denied because of race.",
        "Step 2: The example is about casting a ballot, which means voting.",
        "Step 3: The amendment about voting rights and race is the 15th."
      ],
      a: "The 15th Amendment, which said a man could not be kept from voting because of his race."
    },
    items: [
      Q("What years did Reconstruction last?", ["1861-1865", "1865-1877", "1877-1900", "1812-1815"], 1, "Reconstruction began when the war ended in 1865 and ended in 1877 when federal troops left the South."),
      Q("Which amendment ended slavery in the United States?", ["13th", "14th", "15th", "1st"], 0, "The 13th Amendment, in 1865, ended slavery everywhere in the United States. The Emancipation Proclamation had freed people only in Confederate areas."),
      Q("What did the 14th Amendment do?", ["Ended slavery", "Gave women the vote", "Made people born in the country citizens and promised equal protection", "Created the Freedmen's Bureau"], 2, "The 14th Amendment, in 1868, made formerly enslaved people citizens and required equal treatment under the law."),
      Q("What did the 15th Amendment say?", ["The right to vote could not be denied because of race", "Slavery is over", "Everyone must own land", "Georgia must leave the Union"], 0, "The 15th Amendment, in 1870, protected the voting rights of men of every race."),
      Q("Who became president after Lincoln was killed?", ["Ulysses S. Grant", "Jefferson Davis", "Andrew Jackson", "Andrew Johnson"], 3, "Vice President Andrew Johnson became president. Andrew Jackson was president much earlier, in the 1830s.", "Look in paragraph 1."),
      Q("About how many people were freed from slavery at the end of the war?", ["Four thousand", "Four million", "Forty thousand", "Forty million"], 1, "About four million people were freed. That is a huge number of people suddenly needing land, work, and schools.", "Re-read paragraph 1."),
      Q("Could women vote after the 15th Amendment?", ["No, women still could not vote at that time", "Yes, all women could", "Only women in Georgia", "Only women over 50"], 0, "The passage says women still could not vote then. Women won the vote nationwide decades later.", "Look at the end of paragraph 2."),
      Q("Which was a job of the Freedmen's Bureau?", ["Writing the Constitution", "Fighting battles", "Opening schools", "Building plank houses"], 2, "The Freedmen's Bureau helped open many schools and gave food, medicine, and other help."),
      Q("Who did the Freedmen's Bureau help?", ["Only Union soldiers", "Freed people and poor white Southerners", "Only plantation owners", "People in Europe"], 1, "The passage says it helped both freed people and poor white Southerners.", "Paragraph 3 tells you."),
      Q("How did many freed people feel about going to school?", ["They refused to go", "They only wanted to play", "They were not allowed in any school", "They were eager to learn to read"], 3, "The passage says children and grown-ups crowded into classrooms, eager to learn. Learning to read had been forbidden to many during slavery."),
      Q("Who was Henry McNeal Turner?", ["A Union general", "The president of the Freedmen's Bureau", "A minister and one of Georgia's first Black lawmakers", "Georgia's governor"], 2, "Henry McNeal Turner was a minister elected to Georgia's legislature in 1868.", "Look in paragraph 4."),
      Q("What did white lawmakers in Georgia do to the newly elected Black legislators?", ["They voted to expel them", "They made them leaders", "They gave them land", "They paid them extra"], 0, "White lawmakers voted to expel them, but the Black legislators were later returned to their seats.", "Paragraph 4 explains."),
      Q("What is sharecropping?", ["Selling stock in a company", "Farming someone else's land and paying with part of the crop", "Sharing food at church", "A kind of school"], 1, "Sharecroppers farmed land they did not own and paid with part of the harvest. It often kept families in debt."),
      Q("What were Black Codes?", ["Secret messages", "A kind of school lesson", "Rules for the Union army", "Unfair laws that limited the freedom of Black Americans"], 3, "Black Codes were laws in Southern states meant to control Black Americans and limit their new freedom."),
      Q("What happened in 1877?", ["Federal troops left the South and Reconstruction ended", "The Civil War began", "The 13th Amendment passed", "Georgia was founded"], 0, "In 1877 federal troops left the South, ending Reconstruction. Many rights were then taken away until later struggles won them back.")
    ],
    activities: [
      { title: "Amendment pocket chart", time: '20 min',
        materials: ['three envelopes', 'index cards', 'markers', 'glue stick', 'poster paper'],
        steps: ["Glue three envelopes onto poster paper. Label them 13th, 14th, and 15th.", "Under each envelope, write its year and its main job.", "On index cards, write examples like: A family can no longer be bought or sold. A man votes for the first time. A freed person becomes a citizen.", "Mix the cards, then sort each one into the correct envelope.", "Have your parent check your sorting and add two cards of their own."],
        observe: "Which of the three amendments do you think was the most important? Explain why." },
      { title: "Freedmen's school model", time: '30 min',
        materials: ['shoebox', 'craft sticks', 'paper', 'markers', 'glue'],
        steps: ["Many freedmen's schools were simple one-room buildings. Turn the shoebox on its side to make a classroom.", "Make benches from craft sticks and glue them in rows.", "Draw a small chalkboard with the alphabet and glue it on the back wall.", "Make paper students of different ages, from children to grandparents.", "Write a sign for the front: a name for your school."],
        observe: "Why did learning to read matter so much to people who had just been freed? Give at least two reasons." }
    ],
    think: [
      "Reconstruction brought new rights, but many were taken away when it ended. Explain one success and one challenge of Reconstruction, with evidence.",
      "Why do you think Georgia's newly elected Black lawmakers were expelled? What does this show about the challenges after the war?"
    ]
  });

  // ---------------- Week 17 ----------------
  C.unit('social', 17, {
    title: "Economics: resources, choices, and trade",
    standard: 'SS4E1',
    learn: [
      { h: "Productive resources", p: "Making goods takes three kinds of productive resources. Natural resources come from nature, like land, water, and trees. Human resources are the people who do the work and their skills. Capital resources are things people make to help produce other goods, like tools, machines, and buildings." },
      { h: "Opportunity cost", p: "When you choose one thing, you give up the next best thing you could have had. What you give up is the opportunity cost. If you spend your afternoon at the park instead of the library, the library visit is your opportunity cost." },
      { h: "Specialization and trade", p: "Specialization means focusing on making just a few goods or doing one job well. People and places that specialize then trade for things they do not make. Money makes trading easier, and saving money lets you buy bigger things later." }
    ],
    passage: [
      "Think about a peanut farm in south Georgia. Georgia grows more peanuts than any other state. To grow peanuts, a farmer needs natural resources: good soil, sunshine, and rain. She needs human resources: her own skill and the workers who plant and harvest. She also needs capital resources: tractors, a barn, and irrigation pipes. Without all three, there would be no peanuts.",
      "Every choice has a cost. Suppose the farmer has enough money for either a new tractor or a new storage barn, but not both. If she buys the tractor, the barn is her opportunity cost. Good decision makers think about what they will give up before they choose.",
      "Most people specialize. The peanut farmer grows peanuts very well, but she does not make her own shoes, medicine, or phone. Instead, she sells peanuts and uses the money to buy what others make. Places specialize, too. Colonial New England specialized in ships and fish, while the South specialized in crops. Specialization helps people produce more, but it also means they depend on one another.",
      "Long ago, people often bartered, which means traded goods directly, like peanuts for a pair of boots. Barter is hard when the bootmaker does not want peanuts. Money solves this problem because almost everyone accepts it. Trade also happens between countries. Ships at the Port of Savannah carry Georgia goods to other nations and bring goods back.",
      "Smart money choices include saving. When you save, you set aside money now to use later. Many people keep savings in a bank, which keeps it safe and may pay interest, extra money for letting the bank hold it. A budget, a plan for spending and saving, helps families make wise choices."
    ],
    vocab: [
      ["natural resources", "things from nature that people use, like soil, water, and trees"],
      ["human resources", "the people who work and the skills and knowledge they have"],
      ["capital resources", "things made by people to produce other goods, like tools, machines, and buildings"],
      ["opportunity cost", "the next best choice you give up when you make a decision"],
      ["specialization", "focusing on making a few goods or doing one job very well"],
      ["barter", "trading goods or services directly without using money"]
    ],
    demo: {
      q: "Ava has $10. She can buy a book or a puzzle, and she wants the book most. What is her opportunity cost?",
      steps: [
        "Step 1: List the choices: a book or a puzzle.",
        "Step 2: Find what she chooses. She chooses the book.",
        "Step 3: The opportunity cost is the next best thing she gives up, which is the puzzle."
      ],
      a: "The puzzle, because it is the next best choice she gave up."
    },
    items: [
      Q("Which of these is a natural resource?", ["A tractor", "A farmer's skill", "Soil", "A barn"], 2, "Soil comes from nature, so it is a natural resource. A tractor and a barn are capital resources, and skill is a human resource."),
      Q("Which of these is a capital resource?", ["A tractor", "Sunshine", "Rain", "A worker"], 0, "A tractor is made by people to help produce other goods, so it is a capital resource."),
      Q("A baker's skill at decorating cakes is which kind of resource?", ["Natural", "Money", "Capital", "Human"], 3, "Human resources are people's work and skills. The oven the baker uses would be a capital resource."),
      Q("According to the passage, which state grows the most peanuts?", ["Florida", "Georgia", "Alabama", "Texas"], 1, "The passage says Georgia grows more peanuts than any other state.", "Re-read paragraph 1."),
      Q("What is opportunity cost?", ["The next best choice you give up when you decide", "The price written on a tag", "Money in the bank", "A tax"], 0, "Opportunity cost is what you give up. It is not always money; it can be time or another thing you wanted."),
      Q("The farmer buys a tractor instead of a barn. What is her opportunity cost?", ["The tractor", "The peanuts", "The barn", "Her savings account"], 2, "She gave up the barn to get the tractor, so the barn is her opportunity cost.", "Look in paragraph 2."),
      Q("Ben chooses soccer practice instead of a birthday party. What is his opportunity cost?", ["Soccer practice", "The birthday party", "His soccer ball", "Nothing"], 1, "Ben gave up the party, so it is his opportunity cost. The thing he chose is never the opportunity cost."),
      Q("What does specialization mean?", ["Making everything yourself", "Never trading", "Spending all your money", "Focusing on making a few goods or doing one job well"], 3, "Specialization is focusing on what you do well. Then you trade for other things you need."),
      Q("According to the passage, what is one downside of specialization?", ["People produce less", "Money stops working", "People depend on one another", "Farms disappear"], 2, "The passage says specialization helps people produce more, but it also means they depend on one another.", "Look at the end of paragraph 3."),
      Q("What is barter?", ["Trading goods directly without money", "Saving in a bank", "Paying taxes", "Borrowing money"], 0, "Bartering is a direct trade, like peanuts for boots, with no money involved."),
      Q("Why is money easier to use than barter?", ["Money is heavier", "Almost everyone accepts money", "Barter is against the law", "Money grows on trees"], 1, "With barter, you must find someone who wants what you have. Money works because almost everyone accepts it.", "Paragraph 4 explains."),
      Q("What does the passage say about the Port of Savannah?", ["It is closed", "It is in Atlanta", "It only has fishing boats", "Ships there carry Georgia goods to other nations and bring goods back"], 3, "The Port of Savannah is a busy trading port where goods go out to and come in from other countries.", "Look in paragraph 4."),
      Q("What is interest?", ["Extra money a bank may pay you for keeping your savings", "A fee for using the library", "A kind of tax", "A kind of barter"], 0, "When a bank holds your savings, it may pay you interest, which helps your savings grow."),
      Q("What is a budget?", ["A trade between countries", "A kind of bank", "A plan for spending and saving money", "A capital resource"], 2, "A budget is a plan. It helps families decide how much to spend, save, and give."),
      Q("Colonial New England specialized in ships and fish. Why?", ["It had the best farmland", "Its natural resources included forests and a long coast", "It had gold mines", "The king made them"], 1, "Specialization often follows natural resources. Trees for ships and a long coast for fishing made New England a natural fit.")
    ],
    activities: [
      { title: "Resource scavenger hunt", time: '20 min',
        materials: ['paper', 'pencil', 'your kitchen'],
        steps: ["Choose one food your family makes, like pancakes or a sandwich.", "Make three columns: Natural, Human, Capital.", "List the natural resources that went into it, such as wheat, water, or eggs from a hen.", "List the human resources: who grew, shipped, sold, and cooked it.", "List the capital resources: the stove, the pan, the tractor on the farm, the delivery truck.", "Circle the resource you think was most important."],
        observe: "Could your food be made if one type of resource were missing? Explain using your chart." },
      { title: "Opportunity cost store", time: '25 min',
        materials: ['10 pennies or paper coins', 'small household items or pictures', 'sticky notes for price tags'],
        steps: ["Set up a pretend store with five items and price tags from 2 to 8 coins.", "You have only 10 coins. Decide what to buy.", "Write down what you bought and what you wanted next but could not afford. That is your opportunity cost.", "Now try again, but save 3 coins first. What changes?", "Ask your parent to shop, too, and compare your choices."],
        observe: "How did saving coins change your choices? Explain why saving can be worth the opportunity cost." }
    ],
    think: [
      "Think of a choice you made this week. What did you choose, what was your opportunity cost, and do you think you chose wisely? Explain.",
      "Why do people and places specialize and then trade, instead of making everything themselves? Use an example from Georgia in your answer."
    ]
  });

  // ---------------- Week 18 ----------------
  C.unit('social', 18, {
    title: "Geography shapes history, plus a 4th-grade timeline review",
    standard: 'SS4G1, SS4G2',
    learn: [
      { h: "Water draws people", p: "People settle near water for drinking, farming, fishing, and travel. Rivers worked like highways before trains and cars. Coasts with good harbors became busy port cities like Boston, New York, and Savannah." },
      { h: "Mountains and plains", p: "Mountains can be barriers that make travel hard. The Appalachian Mountains kept most early colonists near the Atlantic coast. Later, the flat Great Plains were easier to cross, but the Rocky Mountains were another big barrier for pioneers." },
      { h: "Georgia's fall line", p: "In Georgia, a line called the fall line runs across the middle of the state where hilly land drops to the flat coastal plain. Rivers form waterfalls and rapids there, so boats had to stop. Cities like Augusta, Macon, and Columbus grew up along it." }
    ],
    passage: [
      "Geography means the study of Earth's land, water, and climate, and how people use them. All through American history, physical features shaped where people lived and how they traveled.",
      "Early settlers chose spots near water. Jamestown was built on a river in Virginia. Oglethorpe chose a bluff on the Savannah River, close to the ocean, so ships could bring supplies. Cities with deep harbors, like Boston and New York, became trading centers because ships could dock safely.",
      "Mountains slowed movement west. The Appalachian Mountains run from Canada down into north Georgia. For many years, few colonists crossed them. In 1775 Daniel Boone helped open a path through a mountain pass called the Cumberland Gap, and settlers began moving into Kentucky.",
      "Rivers helped the young nation grow. Farmers floated crops down the Mississippi River to New Orleans, which is one reason the Louisiana Purchase mattered so much. Lewis and Clark followed the Missouri and Columbia Rivers to reach the Pacific. Later, wagon trains on the Oregon Trail followed rivers across the Great Plains, then climbed the Rocky Mountains.",
      "In Georgia, rivers flowing toward the sea tumble over rocks at the fall line. Boats coming upriver could go no farther, so goods were unloaded there. The falling water also powered mills. That is why cities like Augusta, Macon, and Columbus grew along the fall line. Today, highways and railroads cross mountains and rivers, but you can still see how geography shaped the map of our country and our state."
    ],
    vocab: [
      ["geography", "the study of Earth's land, water, and climate and how people use them"],
      ["physical feature", "a natural part of Earth's surface, like a river, mountain, or coast"],
      ["harbor", "a sheltered area of water where ships can dock safely"],
      ["barrier", "something that blocks the way or makes travel hard"],
      ["mountain pass", "a low path through mountains that people can travel through"],
      ["fall line", "the place where hilly land drops to a flat plain, causing waterfalls and rapids on rivers"]
    ],
    demo: {
      q: "Why did the city of Macon grow where it did?",
      steps: [
        "Step 1: Find Macon on a Georgia map. It sits on the Ocmulgee River, right on the fall line.",
        "Step 2: Remember what happens at the fall line. Rivers have rapids and waterfalls, so boats coming upriver had to stop.",
        "Step 3: Where boats stop, goods are unloaded and traded, and falling water can power mills. That brings jobs and people."
      ],
      a: "Macon grew on the fall line, where boats had to stop and falling water could power mills."
    },
    items: [
      Q("Why did early settlers often build near rivers?", ["Rivers were cold", "Rivers kept everyone away", "Rivers gave water, food, and a way to travel", "The law required it"], 2, "Rivers provided drinking water, fish, water for crops, and easy travel. That is why so many towns began beside them."),
      Q("Why did cities with deep harbors become trading centers?", ["Ships could dock safely there", "They had the most mountains", "They had no water", "They were far from the ocean"], 0, "A deep, sheltered harbor lets ships load and unload safely, which brings trade and jobs.", "Re-read paragraph 2."),
      Q("Which mountains kept most early colonists near the Atlantic coast?", ["The Rocky Mountains", "The Alps", "The Andes", "The Appalachian Mountains"], 3, "The Appalachians run along the eastern part of the country. The Rockies are much farther west."),
      Q("How far south do the Appalachian Mountains reach, according to the passage?", ["Florida", "Into north Georgia", "Only to Virginia", "To Mexico"], 1, "The passage says the Appalachians run from Canada down into north Georgia. That is where the Cherokee lived.", "Look in paragraph 3."),
      Q("What was the Cumberland Gap?", ["A mountain pass that helped settlers cross the Appalachians", "A river in Georgia", "A harbor in Boston", "A desert"], 0, "The Cumberland Gap is a pass through the Appalachians. Daniel Boone helped open a path through it in 1775."),
      Q("Which river did Western farmers use to float crops to New Orleans?", ["The Hudson", "The Savannah", "The Mississippi", "The St. Lawrence"], 2, "The Mississippi River flows south to New Orleans. That is why controlling New Orleans mattered so much."),
      Q("What is the fall line?", ["A line of trees", "The place where hilly land drops to a flat plain, causing rapids and waterfalls", "A state border", "A railroad"], 1, "At the fall line, rivers drop from higher land to the flat coastal plain, creating rapids that stop boats."),
      Q("Which Georgia city grew along the fall line?", ["Savannah", "Brunswick", "Dahlonega", "Augusta"], 3, "Augusta is on the fall line. Savannah and Brunswick are on the coast, and Dahlonega is in the mountains."),
      Q("According to the passage, why did cities grow at the fall line?", ["It was the coldest place", "Gold was found there", "Boats had to stop there, and falling water powered mills", "It was on the ocean"], 2, "The passage gives two reasons: boats could go no farther, so goods were unloaded, and falling water powered mills.", "Read paragraph 5."),
      Q("Which physical feature was a barrier for pioneers on the Oregon Trail?", ["The Rocky Mountains", "The Atlantic Ocean", "The fall line", "The Everglades"], 0, "Pioneers crossed the flat Great Plains and then had to climb the Rocky Mountains, a major barrier."),
      Q("Timeline review: Which event happened FIRST?", ["Founding of Georgia", "Columbus's first voyage", "The Louisiana Purchase", "The Civil War begins"], 1, "Columbus sailed in 1492. Georgia was founded in 1733, the Louisiana Purchase was 1803, and the Civil War began in 1861."),
      Q("Timeline review: In what year was the Constitution written?", ["1607", "1733", "1787", "1865"], 2, "The Constitution was written in Philadelphia in 1787. 1607 was Jamestown, 1733 was Georgia, and 1865 was the end of the Civil War."),
      Q("Timeline review: Which came right after the Civil War?", ["The Louisiana Purchase", "The War of 1812", "The founding of Jamestown", "Reconstruction"], 3, "Reconstruction (1865-1877) came right after the war ended in 1865."),
      Q("Timeline review: Put in order: Trail of Tears, Bill of Rights, Lewis and Clark.", ["Bill of Rights, Lewis and Clark, Trail of Tears", "Trail of Tears, Bill of Rights, Lewis and Clark", "Lewis and Clark, Trail of Tears, Bill of Rights", "Bill of Rights, Trail of Tears, Lewis and Clark"], 0, "Bill of Rights was 1791, Lewis and Clark set out in 1804, and the Trail of Tears was 1838-1839."),
      Q("Why was Savannah built on a bluff near the ocean?", ["To be near gold mines", "So it would be hidden from ships", "So ships could bring supplies and the town stayed above the river", "Because there were mountains"], 2, "A high bluff stays drier and is easier to defend, and being near the ocean let ships bring supplies and trade.")
    ],
    activities: [
      { title: "Salt dough relief map", time: '45 min',
        materials: ['1 cup flour', '1/2 cup salt', '1/2 cup water', 'cardboard base', 'paint or markers', 'printed map of Georgia'],
        steps: ["With your parent, mix flour, salt, and water into a dough.", "Trace an outline of Georgia on the cardboard.", "Spread a thin layer of dough to fill the shape. Build up mountains in the north and keep the south flat.", "Use a pencil to carve rivers flowing toward the coast.", "Let it dry overnight, then paint mountains brown, plains green, and rivers blue.", "Draw a dotted line across the middle for the fall line, and mark Augusta, Macon, Columbus, and Savannah."],
        observe: "Looking at your model, explain why cities grew along the fall line and the coast but fewer grew in the mountains." },
      { title: "4th-grade history timeline", time: '30 min',
        materials: ['long strip of paper or a hallway wall', 'sticky notes', 'markers'],
        steps: ["Draw a line from 1490 to 1880.", "Add sticky notes for: Columbus 1492, Jamestown 1607, Georgia founded 1733, Declaration of Independence 1776, Constitution 1787, Bill of Rights 1791.", "Add: Louisiana Purchase 1803, Indian Removal Act 1830, Trail of Tears 1838, California Gold Rush 1849.", "Add: Civil War 1861-1865, Emancipation Proclamation 1863, Reconstruction ends 1877.", "Put a star on every event that happened in or involved Georgia.", "Walk the timeline with your parent and tell the story out loud."],
        observe: "Choose two events on your timeline and explain how the first one helped cause the second." }
    ],
    think: [
      "Pick one physical feature, like a river, mountain, or coast. Explain how it shaped where people lived or traveled, using at least two examples from this year's lessons.",
      "Look at your 4th-grade timeline. Which event do you think changed Georgia the most? Explain your choice with evidence."
    ]
  });

  // ---------------- Week 19 (Grade 5 preview) ----------------
  C.unit('social', 19, {
    title: "Turn of the century: inventions and immigration",
    standard: 'SS5H1',
    learn: [
      { h: "A time of big changes", p: "Around the year 1900, which people call the turn of the century, life in America changed quickly. New inventions brought electric light, recorded sound, telephones, and even airplanes. At the same time, millions of immigrants arrived to build new lives." },
      { h: "Inventors who changed daily life", p: "Thomas Edison developed a long-lasting electric light bulb and the phonograph. Alexander Graham Bell invented the telephone. Orville and Wilbur Wright built and flew the first successful powered airplane in 1903." },
      { h: "Coming to America", p: "An immigrant is a person who moves to a new country to live. Many immigrants came for jobs, freedom of religion, or to escape hunger and hard times. Most who arrived on the East Coast passed through Ellis Island in New York Harbor." }
    ],
    passage: [
      "Thomas Edison was one of the busiest inventors in history. At his laboratory in Menlo Park, New Jersey, he and his team tested thousands of ideas. In 1877 Edison invented the phonograph, the first machine that could record sound and play it back. In 1879 his team made a light bulb that could glow for many hours. Edison then built a power station in New York City in 1882 to send electricity to homes and businesses. Over time, electric lights let factories run at night and families read after dark.",
      "Communication changed, too. In 1876 Alexander Graham Bell invented the telephone. For the first time, people could hear each other's voices from far away.",
      "Orville and Wilbur Wright ran a bicycle shop in Dayton, Ohio. They studied how birds steer and tested gliders for years. On December 17, 1903, at Kitty Hawk, North Carolina, Orville flew their engine-powered airplane for 12 seconds and about 120 feet. It was short, but it proved that people could fly. Within a few decades, airplanes carried mail and passengers.",
      "During this same period, millions of immigrants came to the United States, many from Italy, Ireland, Germany, Poland, Russia, and other parts of Europe. Some fled poverty or hunger. Some wanted to worship freely. Many hoped for jobs in America's growing factories. Ships sailing into New York Harbor passed the Statue of Liberty, a gift from France. Then passengers went to Ellis Island, which opened in 1892. Doctors checked them for illness, and officials asked questions. Most were allowed in within a few hours. About 12 million immigrants entered through Ellis Island before it closed.",
      "On the West Coast, many immigrants from China and other parts of Asia arrived at Angel Island in San Francisco Bay. Immigrants settled in cities like New York and Chicago, where they worked in factories and helped build railroads, bridges, and skyscrapers."
    ],
    vocab: [
      ["invention", "a new machine, tool, or process that someone creates"],
      ["phonograph", "Edison's machine that could record sound and play it back"],
      ["immigrant", "a person who moves to a new country to live"],
      ["immigration", "the act of moving to a new country to live there"],
      ["Ellis Island", "an island in New York Harbor where millions of immigrants were checked and allowed into the country"],
      ["turn of the century", "the years around 1900, when one century ended and another began"]
    ],
    demo: {
      q: "How did Edison's light bulb and power station change life for a factory worker in 1900?",
      steps: [
        "Step 1: Before electric light, people depended on sunlight, candles, or gas lamps.",
        "Step 2: Edison's bulb glowed for hours, and his power station sent electricity to buildings.",
        "Step 3: With bright, safe light, factories could run after dark, so work hours and jobs grew."
      ],
      a: "Electric light let factories stay open at night, which changed when and how long people worked."
    },
    items: [
      Q("What does turn of the century mean in this lesson?", ["A spinning wheel", "The year 1776", "The years around 1900", "The end of the Civil War"], 2, "The turn of the century is the time when one century ends and the next begins. Here it means the years around 1900."),
      Q("Where was Thomas Edison's famous laboratory?", ["Menlo Park, New Jersey", "Dayton, Ohio", "Kitty Hawk, North Carolina", "Atlanta, Georgia"], 0, "Edison's lab was in Menlo Park, New Jersey. Dayton was home to the Wright brothers.", "Re-read paragraph 1."),
      Q("What did the phonograph do?", ["Sent messages by wire", "Made light", "Flew in the air", "Recorded sound and played it back"], 3, "The phonograph, invented in 1877, was the first machine that could record and replay sound."),
      Q("Why was Edison's 1882 power station important?", ["It built airplanes", "It sent electricity to homes and businesses", "It checked immigrants", "It made telephones"], 1, "A light bulb is not useful without electricity. The power station delivered electricity to buildings in New York City.", "Look in paragraph 1."),
      Q("Who invented the telephone in 1876?", ["Alexander Graham Bell", "Thomas Edison", "Wilbur Wright", "George Washington Carver"], 0, "Alexander Graham Bell invented the telephone. Edison is known for the light bulb and phonograph."),
      Q("What business did the Wright brothers run?", ["A farm", "A newspaper", "A bicycle shop", "A train station"], 2, "The Wright brothers ran a bicycle shop in Dayton, Ohio. Their skill with bicycle parts helped them build airplanes."),
      Q("How did the Wright brothers prepare to build their airplane?", ["They bought one from France", "They studied how birds steer and tested gliders", "They guessed", "They asked Edison to build it"], 1, "The passage says they studied birds and tested gliders for years. Careful testing is how inventors solve hard problems.", "Paragraph 3 explains."),
      Q("Where did the first successful powered airplane flight take place?", ["Chicago, Illinois", "Savannah, Georgia", "New York City", "Kitty Hawk, North Carolina"], 3, "The first flight was at Kitty Hawk, North Carolina, on December 17, 1903. Strong, steady winds there helped."),
      Q("How long did Orville Wright's first flight last?", ["12 seconds", "12 minutes", "12 hours", "2 days"], 0, "The first flight lasted only about 12 seconds and went about 120 feet. Short, but it proved powered flight was possible.", "Find the number in paragraph 3."),
      Q("What is an immigrant?", ["An inventor", "A kind of ship", "A person who moves to a new country to live", "A soldier"], 2, "An immigrant moves into a new country to live. Millions came to the United States around 1900."),
      Q("Which was a reason many immigrants came to America?", ["To find jobs and freedom", "To see the Wright brothers fly", "Because Ellis Island was a vacation spot", "To join the Civil War"], 0, "Many immigrants wanted jobs, freedom of religion, or escape from poverty and hunger."),
      Q("What did immigrant ships pass as they sailed into New York Harbor?", ["The White House", "The Statue of Liberty", "Fort Sumter", "The Golden Gate Bridge"], 1, "Ships passed the Statue of Liberty, a gift from France, before stopping at Ellis Island.", "Look in paragraph 4."),
      Q("What happened to immigrants at Ellis Island?", ["They became soldiers", "They were given farms", "They had to build airplanes", "Doctors checked them and officials asked questions"], 3, "Immigrants were checked for illness and questioned. Most were allowed in within a few hours."),
      Q("About how many immigrants entered through Ellis Island?", ["12 thousand", "120 thousand", "12 million", "120 million"], 2, "About 12 million immigrants passed through Ellis Island between 1892 and when it closed.", "The number is in paragraph 4."),
      Q("Where did many immigrants from China and other parts of Asia arrive?", ["Angel Island in San Francisco Bay", "Ellis Island", "Savannah", "Boston Harbor"], 0, "Angel Island, on the West Coast, was where many Asian immigrants arrived. Ellis Island was on the East Coast.", "Look in the last paragraph.")
    ],
    activities: [
      { title: "Interview about family roots", time: '30 min',
        materials: ['notebook', 'pencil', 'a parent or grandparent', 'world map'],
        steps: ["Write five questions about your family's history, such as: Where did our family come from? When did they come to America or to Georgia?", "Interview a parent or grandparent and write their answers.", "Ask if they have any old photos or stories passed down.", "Find the places they mention on a world map and mark them.", "Draw a simple family tree with as many names as you can find."],
        observe: "What did you learn about where your family came from? How is your family's story like or unlike the stories of immigrants at Ellis Island?" },
      { title: "Paper glider test", time: '25 min',
        materials: ['several sheets of paper', 'tape measure', 'paper clips', 'pencil'],
        steps: ["Fold a basic paper airplane.", "Throw it gently three times and measure how far it flies each time. Write the results.", "Change one thing, like adding a paper clip to the nose or bending the wing tips.", "Throw it three more times and measure again.", "Compare your results, just like the Wright brothers tested their gliders."],
        observe: "Which change made your glider fly farther? Why do you think testing one change at a time helped the Wright brothers succeed?" }
    ],
    think: [
      "Which invention from this lesson do you think changed American life the most: the light bulb, the telephone, or the airplane? Explain your reasons.",
      "Imagine you are a child arriving at Ellis Island in 1905. Describe what you see and how you feel, using details from the passage."
    ]
  });

  // ---------------- Week 20 (Grade 5 preview) ----------------
  C.unit('social', 20, {
    title: "George Washington Carver, cattle trails, and the Spanish-American War",
    standard: 'SS5H1',
    learn: [
      { h: "A scientist who helped farmers", p: "George Washington Carver was a scientist who taught Southern farmers how to bring life back to worn-out soil. He showed them how to grow peanuts and sweet potatoes and found hundreds of uses for these crops." },
      { h: "Cowboys and cattle drives", p: "After the Civil War, cowboys drove huge herds of cattle from Texas north to railroad towns in Kansas. The Chisholm Trail and the Great Western Trail were two of the most famous routes. Many cowboys were Black or Mexican American." },
      { h: "A short war in 1898", p: "In 1898 the United States fought Spain in the Spanish-American War. The war lasted only a few months. Afterward, the United States gained new lands overseas and became more of a world power." }
    ],
    passage: [
      "George Washington Carver was born into slavery in Missouri around 1864, near the end of the Civil War. As a boy he loved plants and studied them every chance he got. He worked hard to get an education and earned degrees in agriculture, the science of farming, in Iowa. In 1896 Booker T. Washington invited him to teach at the Tuskegee Institute in Alabama.",
      "Carver saw that years of growing only cotton had worn out the soil in the South. He taught crop rotation, which means planting different crops in a field in different years. Peanuts help put nutrients back into the soil, and sweet potatoes grow well even in tired soil. To give farmers reasons to grow them, Carver discovered hundreds of uses for peanuts, from foods to dyes. He even built a wagon that carried lessons to farmers' fields. Carver was a man of deep Christian faith who saw studying nature as a way to learn about God's creation.",
      "Out west in the same era, Texas had millions of longhorn cattle but few buyers. In Northern cities, beef sold for much more. Cowboys drove herds north to railroad towns in Kansas, where cattle were loaded onto trains. The Chisholm Trail led to Abilene, Kansas. The Great Western Trail led to Dodge City. Historians estimate that about one in four cowboys was Black, and many were Mexican vaqueros, whose roping and riding skills shaped cowboy life. Long cattle drives faded as railroads spread and barbed wire fenced in the open range.",
      "In 1898 Cuba was fighting for independence from Spain. In February, the American battleship USS Maine exploded in Havana Harbor. No one knows for certain what caused it, but many newspapers blamed Spain. In April, under President William McKinley, the United States went to war. Theodore Roosevelt led a group of volunteer soldiers called the Rough Riders in the Battle of San Juan Hill. Many American soldiers trained at Camp Thomas in Chickamauga Park, Georgia. The war ended that summer. Cuba became independent, and the United States gained Puerto Rico, Guam, and the Philippines. That same year, the United States also annexed Hawaii."
    ],
    vocab: [
      ["agriculture", "the science and work of farming"],
      ["crop rotation", "planting different crops in a field in different years to keep the soil healthy"],
      ["cattle drive", "moving a large herd of cattle over a long distance to a market or railroad"],
      ["vaquero", "a Mexican cowboy; vaqueros taught many of the skills American cowboys used"],
      ["independence", "freedom from being controlled by another country"],
      ["annex", "to add a territory to a country"]
    ],
    demo: {
      q: "Why did Texas ranchers drive cattle all the way to Kansas?",
      steps: [
        "Step 1: Look at Texas. It had millions of cattle but few buyers nearby.",
        "Step 2: Look at the North. Cities there paid much more for beef.",
        "Step 3: Kansas had railroads that could carry cattle to those cities quickly, so the long walk was worth it."
      ],
      a: "Ranchers drove cattle to Kansas railroad towns so trains could take them to Northern cities, where beef sold for much more."
    },
    items: [
      Q("Where was George Washington Carver born?", ["Georgia", "Alabama", "Missouri", "Texas"], 2, "Carver was born into slavery in Missouri around 1864. He later taught in Alabama at the Tuskegee Institute."),
      Q("What is agriculture?", ["The science and work of farming", "The study of stars", "A kind of cattle", "A type of ship"], 0, "Agriculture means farming. Carver earned degrees in agriculture.", "The passage explains it in paragraph 1."),
      Q("Who invited Carver to teach at the Tuskegee Institute?", ["Theodore Roosevelt", "William McKinley", "Thomas Edison", "Booker T. Washington"], 3, "Booker T. Washington, the leader of Tuskegee Institute, invited Carver in 1896."),
      Q("Why was the soil in the South worn out?", ["Too much rain", "Years of growing only cotton", "Cattle drives", "Snow"], 1, "Growing the same crop, cotton, year after year used up nutrients in the soil.", "Re-read paragraph 2."),
      Q("What is crop rotation?", ["Planting different crops in a field in different years", "Spinning crops in a machine", "Selling crops overseas", "Growing only cotton"], 0, "Crop rotation changes which crop grows in a field each year, helping the soil recover."),
      Q("Why did Carver find hundreds of uses for peanuts?", ["To feed cattle on trails", "Because he disliked cotton", "To give farmers reasons to grow them", "To sell to Spain"], 2, "If peanuts had many uses, farmers could sell them, so they would be willing to plant peanuts and heal their soil.", "Look in paragraph 2."),
      Q("How did Carver's faith connect to his science?", ["He stopped studying science", "He saw studying nature as a way to learn about God's creation", "He only studied at church", "It had no connection"], 1, "The passage says Carver saw studying nature as a way to learn about God's creation.", "Look at the end of paragraph 2."),
      Q("Why did cowboys drive cattle north from Texas?", ["The army ordered it", "Texas had no grass", "Cattle liked cold weather", "Beef sold for much more in Northern cities"], 3, "Texas had more cattle than buyers. Northern cities paid much more, and railroads in Kansas could take cattle there."),
      Q("Where did the Chisholm Trail lead?", ["Dodge City, Kansas", "Atlanta, Georgia", "Abilene, Kansas", "San Francisco"], 2, "The Chisholm Trail led to Abilene, Kansas. The Great Western Trail led to Dodge City.", "Paragraph 3 names both."),
      Q("According to historians, about how many cowboys were Black?", ["About one in four", "Almost none", "All of them", "Exactly one hundred"], 0, "Historians estimate about one in four cowboys was Black. Their story is an important part of the history of the West.", "Look in paragraph 3."),
      Q("Who were vaqueros?", ["Spanish soldiers", "Mexican cowboys whose skills shaped cowboy life", "Railroad workers", "Rough Riders"], 1, "Vaqueros were Mexican cowboys. Many roping and riding skills, and words like lasso and rodeo, came from them."),
      Q("What helped bring an end to the long cattle drives?", ["Too much rain", "The Spanish-American War", "Cowboys going to school", "Railroads spreading and barbed wire fences"], 3, "As railroads reached closer to ranches and barbed wire fenced the open range, long drives were no longer needed.", "Read the last sentence of paragraph 3."),
      Q("What happened to the USS Maine in 1898?", ["It exploded in Havana Harbor", "It sank a Spanish ship", "It carried immigrants", "It sailed to Hawaii"], 0, "The Maine exploded in Havana Harbor, Cuba. No one knows for certain why, but many newspapers blamed Spain."),
      Q("Who led the Rough Riders?", ["William McKinley", "George Washington Carver", "Theodore Roosevelt", "Booker T. Washington"], 2, "Theodore Roosevelt led the Rough Riders at the Battle of San Juan Hill. He later became president."),
      Q("Which lands did the United States gain after the Spanish-American War?", ["Canada and Mexico", "Puerto Rico, Guam, and the Philippines", "Cuba and Florida", "Texas and California"], 1, "The United States gained Puerto Rico, Guam, and the Philippines. Cuba became independent.")
    ],
    activities: [
      { title: "Peanut uses poster", time: '25 min',
        materials: ['poster paper', 'markers', 'grocery store ads or the kitchen pantry (check for allergies first)'],
        steps: ["Draw a big peanut in the center of the poster.", "Look in your kitchen or in store ads for products made with peanuts or peanut oil.", "Draw or write at least eight uses around the peanut.", "Add a box explaining crop rotation in your own words.", "Add one sentence about why peanuts matter to Georgia farmers today."],
        observe: "How did Carver's work help both the soil and the farmers' families? Explain the connection." },
      { title: "Cattle trail map", time: '25 min',
        materials: ['printed map of the central United States', 'colored pencils', 'pencil'],
        steps: ["Find and label Texas and Kansas.", "Mark Abilene and Dodge City, Kansas, with dots.", "In one color, draw the Chisholm Trail from south Texas to Abilene.", "In another color, draw the Great Western Trail from Texas to Dodge City.", "Draw a railroad track symbol going east from each Kansas town.", "Add a map key and a title."],
        observe: "Why did the cattle trails end in towns with railroads? Explain how the trails and the railroads worked together." }
    ],
    think: [
      "George Washington Carver was born into slavery and became a famous scientist. What qualities do you think helped him succeed? Use evidence from the passage.",
      "No one knows for certain what caused the Maine to explode, but newspapers blamed Spain. Why is it important to check facts before believing a news story? Explain."
    ]
  });

  // ---------------- Week 21 (Grade 5 preview) ----------------
  C.unit('social', 21, {
    title: "World War I and America's role",
    standard: 'SS5H2',
    learn: [
      { h: "A war in Europe", p: "World War I began in Europe in 1914. On one side were the Allies, including Britain, France, and Russia. On the other were the Central Powers, including Germany and Austria-Hungary. At first, the United States stayed neutral, meaning it did not take sides." },
      { h: "Why America joined", p: "German submarines attacked ships in the Atlantic, including ships carrying Americans. Germany also secretly asked Mexico to fight the United States. In April 1917, President Woodrow Wilson asked Congress to declare war, and the United States joined the Allies." },
      { h: "Peace and its problems", p: "Fighting stopped on November 11, 1918, a day we now remember as Veterans Day. The 1919 Treaty of Versailles punished Germany harshly, and its problems helped lead to another war years later." }
    ],
    passage: [
      "In June 1914, a man shot and killed Archduke Franz Ferdinand, the heir to the throne of Austria-Hungary. Because European countries had promised to defend one another, one fight quickly pulled in many nations. Soon much of Europe was at war. Soldiers dug long ditches called trenches and fought with new weapons like machine guns, tanks, and airplanes.",
      "President Woodrow Wilson wanted the United States to stay out of the war. But German submarines, called U-boats, began attacking ships near Britain. In May 1915, a U-boat sank the British passenger ship Lusitania. Nearly 1,200 people died, including 128 Americans. Americans were shocked and angry. In early 1917, Germany began attacking American ships, too. Then the British discovered a secret message, the Zimmermann Telegram, in which Germany asked Mexico to join the war against the United States. In April 1917, Congress declared war on Germany.",
      "Millions of Americans joined the military. American soldiers, nicknamed doughboys, arrived in France under General John J. Pershing. Their fresh energy helped the tired Allies push the German army back. Georgia played a part. Soldiers trained at Camp Gordon near Atlanta, and Camp Benning, now Fort Benning, opened near Columbus in 1918.",
      "Families at home helped, too. People bought Liberty Bonds, which were loans to the government to pay for the war. They planted victory gardens to grow their own vegetables so more food could go to soldiers. Women worked in factories and served as nurses. Girl Scouts, founded in Savannah by Juliette Gordon Low in 1912, sold bonds and grew gardens.",
      "On November 11, 1918, at 11 in the morning, the fighting stopped. In 1919 world leaders signed the Treaty of Versailles. It forced Germany to take blame, give up land, and pay huge sums of money. Wilson hoped a new League of Nations would keep peace, but the United States Senate voted against the treaty, and America never joined the League."
    ],
    vocab: [
      ["neutral", "not taking either side in a fight or war"],
      ["Allies", "the side in World War I that included Britain, France, Russia, and later the United States"],
      ["U-boat", "a German submarine"],
      ["trench", "a long, deep ditch soldiers dug to protect themselves during battle"],
      ["Liberty Bond", "a loan citizens made to the government to help pay for the war"],
      ["armistice", "an agreement to stop fighting"]
    ],
    demo: {
      q: "List two reasons the United States joined World War I in 1917.",
      steps: [
        "Step 1: Look for attacks on Americans. German U-boats sank the Lusitania in 1915 and began attacking American ships in 1917.",
        "Step 2: Look for threats to the United States. The Zimmermann Telegram showed Germany asking Mexico to fight the United States.",
        "Step 3: Put them together as reasons."
      ],
      a: "German submarine attacks on ships carrying Americans, and the Zimmermann Telegram asking Mexico to fight the United States."
    },
    items: [
      Q("When did World War I begin in Europe?", ["1898", "1914", "1917", "1941"], 1, "The war began in Europe in 1914. The United States did not join until 1917."),
      Q("What event started the war?", ["The sinking of the Maine", "The Zimmermann Telegram", "The killing of Archduke Franz Ferdinand", "The Battle of San Juan Hill"], 2, "In June 1914, Archduke Franz Ferdinand of Austria-Hungary was killed. Promises between countries pulled many nations into war.", "Re-read paragraph 1."),
      Q("Why did one fight pull in so many countries?", ["European countries had promised to defend one another", "Everyone wanted gold", "The United States started it", "There was a flood"], 0, "Countries had alliances, promises to defend each other. When one went to war, its partners joined.", "Look in paragraph 1."),
      Q("What does neutral mean?", ["Leaving a country", "Winning a war", "Fighting on both sides", "Not taking either side"], 3, "Being neutral means not taking sides. The United States stayed neutral until 1917."),
      Q("Which countries were among the Allies at the start of the war?", ["Germany and Austria-Hungary", "Britain, France, and Russia", "Spain and Cuba", "Mexico and Japan"], 1, "Britain, France, and Russia were Allies. Germany and Austria-Hungary were the Central Powers."),
      Q("What was a U-boat?", ["A German submarine", "An American battleship", "A kind of airplane", "A train"], 0, "U-boats were German submarines. Their attacks on ships helped pull the United States into the war."),
      Q("How many Americans died when the Lusitania sank?", ["12", "128", "1,200", "12,000"], 1, "About 1,200 people died in all, and 128 of them were Americans.", "Read paragraph 2 carefully; two numbers are given."),
      Q("What was the Zimmermann Telegram?", ["A peace treaty", "A newspaper", "A secret message asking Mexico to join the war against the United States", "A soldier's letter home"], 2, "Germany's secret message asked Mexico to fight the United States. When Americans learned of it, many wanted war."),
      Q("When did the United States declare war on Germany?", ["June 1914", "April 1917", "May 1915", "November 1918"], 1, "Congress declared war in April 1917. May 1915 is when the Lusitania sank.", "Look at the end of paragraph 2."),
      Q("What were American soldiers in World War I nicknamed?", ["Rough Riders", "Vaqueros", "Forty-niners", "Doughboys"], 3, "American soldiers were called doughboys. The Rough Riders fought in the Spanish-American War.", "Paragraph 3 tells you."),
      Q("Which Georgia city did Camp Benning open near in 1918?", ["Savannah", "Augusta", "Columbus", "Dahlonega"], 2, "Camp Benning, now Fort Benning, opened near Columbus. Camp Gordon was near Atlanta.", "Look in paragraph 3."),
      Q("What were Liberty Bonds?", ["Loans citizens made to the government to pay for the war", "Ropes for ships", "Medals for soldiers", "Seeds for gardens"], 0, "Buying a Liberty Bond meant lending money to the government. It would be paid back later."),
      Q("Why did families plant victory gardens?", ["To win a contest", "So more food could go to soldiers", "To hide from submarines", "To sell to Germany"], 1, "Growing their own vegetables meant more food could be sent to soldiers and the Allies."),
      Q("Who founded the Girl Scouts in Savannah in 1912?", ["Dolley Madison", "Mary Musgrove", "Harriet Tubman", "Juliette Gordon Low"], 3, "Juliette Gordon Low founded the Girl Scouts in Savannah. During the war, Girl Scouts sold bonds and grew gardens.", "Look in paragraph 4."),
      Q("What happened after the Treaty of Versailles was signed?", ["The United States Senate voted against the treaty, and America never joined the League", "The United States joined the League of Nations", "Germany won the war", "The war started again in 1920"], 0, "Wilson wanted the League of Nations, but the Senate voted against the treaty, so the United States never joined.")
    ],
    activities: [
      { title: "Plant a mini victory garden", time: '25 min',
        materials: ['small pots or cups with drainage holes', 'potting soil', 'easy seeds like beans or lettuce', 'water', 'craft sticks for labels'],
        steps: ["Learn that families in 1917 and 1918 grew food at home to help the war effort.", "Fill each cup with soil, leaving a little space at the top.", "Plant two or three seeds in each cup, following the seed packet depth.", "Water gently and set the cups in a sunny window.", "Make a label for each cup with the plant name and today's date.", "Check and water every few days, and draw what you see each week."],
        observe: "How would growing your own vegetables help soldiers far away? Explain the connection between a home garden and the war effort." },
      { title: "Visit a veteran (or write one)", time: '25 min',
        materials: ['paper', 'pencil', 'markers', 'a veteran in your family or community'],
        steps: ["Learn that November 11 is Veterans Day, which began as a day to remember the end of World War I.", "If you know a veteran, ask your parent to help you set up a short visit or call.", "Write three polite questions, such as: Where did you serve? What do you want kids to know about serving?", "Write down the answers, or, if you cannot meet, write and decorate a thank-you card for a veteran.", "Share what you learned with your family."],
        observe: "Why do you think Americans set aside a day to honor veterans? Use something you learned in your answer." }
    ],
    think: [
      "Explain how German attacks on ships led the United States to join World War I. Use at least two events from the passage, in order.",
      "People at home helped the war effort in many ways. Which way do you think was most helpful, and why?"
    ]
  });

})(typeof window !== 'undefined' ? window : globalThis);
