/* Social Studies units, weeks 1-4: map skills, US regions, causes of the Revolution, the Revolution (SS4G1, SS4G2, SS4H4) extra daily practice. All text original. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  // ---------------- Week 1 ----------------
  C.unit("social", 1, {
    title: "Map skills: finding your way around Georgia",
    standard: "SS4G1",
    learn: [
      { h: "Cardinal and intermediate directions", p: "The cardinal directions are north, south, east, and west. The intermediate directions sit halfway between them: northeast (NE), southeast (SE), southwest (SW), and northwest (NW). Intermediate directions let you describe a place more exactly." },
      { h: "Grid maps", p: "Many maps have a grid of lines that makes boxes. Letters go along one edge and numbers along the other. To find box C4, slide over to column C and down to row 4. The spot where they meet is your box." },
      { h: "Latitude, longitude, and hemispheres", p: "The equator splits Earth into the Northern and Southern Hemispheres. The prime meridian, which runs through Greenwich, England, splits it into the Eastern and Western Hemispheres. Georgia is north of the equator and west of the prime meridian, so it is in the Northern and Western Hemispheres." }
    ],
    passage: [
      "Ava’s family was planning a road trip around Georgia, and Mom handed her the map. “You are the navigator,” she said. A navigator is the person who figures out the route. Ava spread the map on the kitchen table and found Atlanta, the state capital, marked with a star inside a circle. She checked the map key to be sure. The key also showed that thin red lines were highways and wiggly blue lines were rivers.",
      "First, Ava looked at the compass rose. Athens was up and to the right of Atlanta, so it was northeast. Columbus was down and to the left, which made it southwest. Savannah, by the ocean, was far to the southeast. “If I only said Savannah is south,” Ava thought, “I would be leaving out half the story.” Intermediate directions made her directions more exact.",
      "Next, she used the map scale, a small bar at the bottom that showed one inch equals 50 miles. Ava measured from Macon to Savannah with a ruler. It was about three inches. She multiplied, 3 × 50, and found that the trip was about 150 miles in a straight line. The roads curve, so the real drive would be a bit longer.",
      "The map also had a grid. Along the top were the letters A through F, and down the side were the numbers 1 through 6. The index on the back said Rome was in box B2. Ava slid her finger to column B and down to row 2, and there it was, in the northwest part of the state.",
      "Finally, Dad showed her the lines of latitude and longitude printed along the edges. Atlanta sits near 34 degrees north latitude and 84 degrees west longitude. “Every place on Earth has its own address like that,” he said. Ava smiled. She was ready to navigate."
    ],
    vocab: [
      ["navigator", "the person who figures out the route on a trip"],
      ["intermediate directions", "the in-between directions: northeast, southeast, southwest, and northwest"],
      ["map key", "the box that explains what the symbols, colors, and lines on a map mean; also called a legend"],
      ["map scale", "a bar or line that shows how a distance on the map compares to real distance"],
      ["grid", "a pattern of crossing lines that divides a map into boxes labeled with letters and numbers"],
      ["hemisphere", "one half of Earth, such as the Northern Hemisphere or the Western Hemisphere"]
    ],
    demo: {
      q: "A map scale shows 1 inch = 50 miles. Two cities are 2 and a half inches apart. About how far apart are they?",
      steps: [
        "Step 1: Each inch stands for 50 miles, so 2 inches equal 2 × 50 = 100 miles.",
        "Step 2: The extra half inch is half of 50, which is 25 miles.",
        "Step 3: Add the parts: 100 + 25 = 125 miles."
      ],
      a: "The cities are about 125 miles apart in a straight line."
    },
    items: [
      Q("Which direction is halfway between north and west?", ["Northeast", "Southwest", "Northwest", "Southeast"], 2, "Northwest is between north and west, so it is up and to the left on most maps. Northeast is between north and east, on the right side."),
      Q("Which direction is opposite northeast?", ["Southwest", "Northwest", "Southeast", "South"], 0, "Opposite directions sit straight across the compass rose. Northeast is up and right, so its opposite is down and left: southwest."),
      Q("In the passage, how did Ava know that the star inside a circle meant the state capital?", ["She guessed", "She checked the map key", "She looked at the compass rose", "Mom told her"], 1, "Ava checked the map key, which explains what each symbol stands for. The compass rose shows direction, not symbols.", "Paragraph 1."),
      Q("According to the passage, what did wiggly blue lines show on Ava’s map?", ["Highways", "State borders", "Rivers", "Railroads"], 2, "The key said thin red lines were highways and wiggly blue lines were rivers. Blue is often used for water on maps.", "Look in paragraph 1."),
      Q("In which direction is Athens from Atlanta?", ["Southwest","Due west","Southeast","Northeast"], 3, "Athens is up and to the right of Atlanta on the map, which is northeast."),
      Q("Columbus is southwest of Atlanta. Which way would you travel to get from Columbus back to Atlanta?", ["Northeast", "Southwest", "Northwest", "Southeast"], 0, "Going back the other way means taking the opposite direction. The opposite of southwest is northeast."),
      Q("Why did Ava think saying “Savannah is south” left out half the story?", ["Savannah is actually north", "Savannah is southeast, so east matters too", "Savannah is not on the map", "South is not a real direction"], 1, "Savannah is far to the east as well as south. Southeast describes it more exactly than south alone.", "Re-read paragraph 2."),
      Q("If the scale is 1 inch = 50 miles, how far is 4 inches?", ["54 miles", "100 miles", "150 miles", "200 miles"], 3, "Each inch stands for 50 miles. 4 × 50 = 200 miles. Adding 4 and 50 to get 54 is a common mistake; you need to multiply."),
      Q("According to the passage, why would the real drive from Macon to Savannah be longer than 150 miles?", ["The map was wrong","Savannah moves","The scale was upside down","The roads curve instead of going in a straight line"], 3, "A map scale measures straight-line distance. Roads bend around rivers, hills, and towns, so driving takes more miles.", "Look at the end of paragraph 3."),
      Q("On a grid map, how do you find box B2?", ["Find row B and column 2 on the compass rose", "Go to column B, then to row 2, and find where they meet", "Count two boxes from any corner", "Look in the map key for B2"], 1, "Find the letter along one edge and the number along the other. The box where that column and row cross is B2."),
      Q("In the passage, which part of Georgia was Rome in?", ["The northwest", "The southeast", "The southwest", "The coast"], 0, "Ava found Rome in box B2, which was in the northwest part of the state.", "Paragraph 4."),
      Q("What line divides Earth into the Northern and Southern Hemispheres?", ["The prime meridian","The map scale","The Mississippi River","The equator"], 3, "The equator is the line of 0 degrees latitude, and it splits Earth into north and south halves. The prime meridian splits east and west."),
      Q("Which two hemispheres is Georgia in?", ["Southern and Eastern", "Northern and Eastern", "Northern and Western", "Southern and Western"], 2, "Georgia is north of the equator, so it is in the Northern Hemisphere. It is west of the prime meridian, so it is in the Western Hemisphere."),
      Q("Atlanta is near 34 degrees north latitude and 84 degrees west longitude. What do those numbers do?", ["They tell Atlanta’s population", "They give Atlanta’s exact location on Earth, like an address", "They show the temperature", "They show how far Atlanta is from Savannah"], 1, "Latitude and longitude work together to give a location that no other place shares. Dad called it an address for every place on Earth."),
      Q("Lines of longitude run from the North Pole to the South Pole. What do they measure?", ["How far north or south of the equator a place is","How deep the ocean is","How high a mountain is","How far east or west of the prime meridian a place is"], 3, "Longitude measures east and west from the prime meridian. Latitude, the lines that run east and west, measures north and south of the equator.")
    ],
    activities: [
      { title: "Grid map treasure hunt", time: "30 min",
        materials: ["a large sheet of paper", "a ruler", "pencil and colored pencils", "a small treat or toy to hide"],
        steps: ["Draw a map of your yard or one floor of your home. Add a compass rose that shows N, NE, E, SE, S, SW, W, and NW.", "Use a ruler to draw a grid over your map. Label columns with letters along the top and rows with numbers down the side.", "Make a map key with at least four symbols, such as a tree, a door, a couch, or a table.", "Ask your parent to hide a small treasure and tell you only the grid box, like D3.", "Use your map to find the treasure.", "Switch roles: hide something and give your parent the grid box and an intermediate direction clue, like “go northeast from the door.”"],
        observe: "Which tool helped you find the treasure faster, the grid or the directions? Explain why, using an example from your hunt." },
      { title: "Measure Georgia with a scale", time: "20 min",
        materials: ["a printed or atlas map of Georgia with a scale bar", "a ruler", "a piece of string", "pencil and paper"],
        steps: ["Find the scale bar on the map and write down what one inch stands for.", "Use the ruler to measure the straight-line distance from Atlanta to Savannah. Multiply to find the real miles.", "Now lay the string along the highway between the two cities, following the curves. Straighten the string and measure it.", "Multiply again to find the road distance.", "Do the same for one more pair of cities you choose.", "Write each answer with the word miles."],
        observe: "Was the road distance longer or shorter than the straight-line distance? Explain why maps and scales help travelers plan trips." }
    ],
    think: [
      "Explain why a map would be hard to use if it had no map key. Give an example of a symbol that would be confusing without one.",
      "Write directions from your home to a favorite place, using at least two intermediate directions. Then explain why intermediate directions make directions clearer."
    ]
  });

  // ---------------- Week 2 ----------------
  C.unit("social", 2, {
    title: "Rivers, mountains, plains, and where people live",
    standard: "SS4G2",
    learn: [
      { h: "Physical features", p: "Physical features are natural parts of the land and water, such as mountains, rivers, plains, lakes, and coasts. A PLAIN is a large, mostly flat area. Mountains are high, steep land. These features shape how people live." },
      { h: "Features across the country", p: "The Appalachian Mountains run along the East. They are very old and worn down, so they are lower and rounder. The Rocky Mountains in the West are taller and more rugged. In between lie the Great Plains, a huge flat grassland. The Coastal Plain is low, flat land along the Atlantic Ocean and the Gulf of Mexico." },
      { h: "Why people settle where they do", p: "People usually settle where they can find water, good soil, and a way to travel and trade. Rivers give all three. Flat land is easier to farm and build on than steep mountains. Places with very little water, like deserts, have fewer people unless water is brought in." }
    ],
    passage: [
      "Look at a map that shows where people live in the United States, and you will notice a pattern. Many big cities sit next to water. New York City grew up around a great harbor. Chicago sits on Lake Michigan, one of the five Great Lakes. New Orleans lies near the mouth of the Mississippi River. Water gave people something to drink, fish to eat, and an easy way to move goods by boat.",
      "Rivers were the first highways. Before railroads and trucks, it was much cheaper to float heavy loads like cotton, lumber, and grain down a river than to drag them over land. The Mississippi River and the rivers that flow into it, like the Missouri and the Ohio, carried goods from the middle of the country all the way to the Gulf of Mexico.",
      "Georgia has its own river story. Running across the middle of the state is the fall line, the place where hilly land drops down to the flat Coastal Plain. Rivers tumble over rocks and small waterfalls there, so boats coming upriver had to stop. People built towns at those stopping points. The cities of Columbus, Macon, and Augusta all grew along the fall line. Rushing water there was also used to power mills.",
      "Land shapes life, too. The wide, flat Great Plains have rich soil, so farmers there grow huge fields of wheat and corn and raise cattle. In the steep Rocky Mountains, towns are smaller and farther apart, because building roads and farms on mountainsides is hard. Mountains can also be barriers, which means they block travel. Early settlers heading west had to find passes, or low gaps, to cross them.",
      "In the dry Southwest, people depend on rivers like the Colorado. Dams such as the Hoover Dam store its water in large lakes so cities and farms in the desert can use it."
    ],
    vocab: [
      ["physical feature", "a natural part of the land or water, like a mountain, river, or plain"],
      ["plain", "a large area of flat or gently rolling land"],
      ["fall line", "the place where hilly land drops to the Coastal Plain and rivers form rapids and small waterfalls"],
      ["barrier", "something that blocks the way or makes travel hard"],
      ["harbor", "a protected area of water where ships can stay safely near the shore"],
      ["dam", "a wall built across a river to hold back and store water"]
    ],
    demo: {
      q: "Why did the city of Augusta grow where it did?",
      steps: [
        "Step 1: Find Augusta on a Georgia map. It sits on the Savannah River on the fall line.",
        "Step 2: Remember what happens at the fall line: rivers have rapids and small waterfalls, so boats coming upriver had to stop.",
        "Step 3: Stopping points became good places to unload and trade goods, and the rushing water could power mills.",
        "Step 4: Put it together: a river plus the fall line gave people a reason to settle and work there."
      ],
      a: "Augusta grew on the fall line, where boats had to stop and fast water could power mills."
    },
    items: [
      Q("What is a physical feature?", ["A building made by people", "A natural part of the land or water", "A state border", "A road or highway"], 1, "Physical features are made by nature, like mountains, rivers, and plains. Buildings, borders, and roads are made by people."),
      Q("What is a plain?", ["A tall, steep mountain", "A deep river valley", "A large area of mostly flat land", "A small island"], 2, "A plain is wide, mostly flat land. The Great Plains and the Coastal Plain are two examples."),
      Q("How are the Appalachian Mountains different from the Rocky Mountains?", ["The Appalachians are older, lower, and rounder", "The Appalachians are taller and more rugged", "The Appalachians are in the West", "They are exactly the same"], 0, "The Appalachians are very old, and wind and water have worn them down. The Rockies are taller and more rugged, and they are in the West."),
      Q("According to the passage, why did many big cities grow next to water?", ["Water gave drinking water, food, and an easy way to move goods", "People liked the view", "It was colder there", "Water kept other people away"], 0, "The passage lists three gifts of water: something to drink, fish to eat, and an easy way to ship goods by boat.", "Re-read paragraph 1."),
      Q("Which Great Lake does Chicago sit on?", ["Lake Erie", "Lake Superior", "Lake Michigan", "Lake Ontario"], 2, "Chicago is on Lake Michigan, the only one of the five Great Lakes that lies completely inside the United States.", "Paragraph 1 names it."),
      Q("Why does the passage call rivers “the first highways”?", ["They were paved","They were straight lines","Cars drove beside them","Before railroads and trucks, boats on rivers moved heavy goods cheaply"], 3, "Floating heavy loads downriver was much cheaper and easier than dragging them over land, so rivers worked like highways.", "Paragraph 2."),
      Q("Which two rivers named in the passage flow into the Mississippi?", ["The Hudson and the Colorado", "The Chattahoochee and the Savannah", "The Missouri and the Ohio", "The Rio Grande and the Columbia"], 2, "The Missouri and the Ohio flow into the Mississippi, which then carries their water to the Gulf of Mexico.", "Look in paragraph 2."),
      Q("What is the fall line?", ["A line on a map where autumn starts", "The place where hilly land drops to the Coastal Plain and rivers form waterfalls", "Georgia’s border with Florida", "The tallest ridge of the Appalachians"], 1, "The fall line is where higher land drops down to the flat Coastal Plain. Rivers form rapids and small falls there, which is how it got its name."),
      Q("Which three Georgia cities grew along the fall line?", ["Columbus, Macon, and Augusta", "Savannah, Brunswick, and Valdosta", "Rome, Dalton, and Blue Ridge", "Atlanta, Athens, and Gainesville"], 0, "The passage names Columbus, Macon, and Augusta. Boats had to stop there, so towns grew, and fast water powered mills.", "Paragraph 3."),
      Q("Why are the Great Plains good for farming?", ["They are steep and rocky","They are desert","They are covered by ice","They are flat with rich soil"], 3, "Flat land with rich soil is easy to plow and plant. That is why wheat, corn, and cattle are so common on the Great Plains."),
      Q("According to the passage, why are towns in the Rocky Mountains smaller and farther apart?", ["Building roads and farms on steep mountainsides is hard", "No one is allowed to live there", "The mountains are too flat", "There is too much farmland"], 0, "The passage explains that steep land makes it hard to build roads and farms, so fewer people settle there.", "Paragraph 4."),
      Q("What does it mean that mountains can be barriers?", ["They help boats travel", "They block or slow down travel", "They make good farmland", "They hold back ocean water"], 1, "A barrier blocks the way. Early travelers heading west had to find passes, or low gaps, to get through mountains."),
      Q("How do people in the dry Southwest get enough water?", ["They use only rainwater","They do not need water","They melt glaciers","They use dams to store river water, like the Hoover Dam on the Colorado River"], 3, "The passage says dams store the Colorado River’s water in large lakes so desert cities and farms can use it.", "Read the last paragraph."),
      Q("Which part of the country is low, flat land along the Atlantic Ocean and the Gulf of Mexico?", ["The Great Plains", "The Rocky Mountains", "The Coastal Plain", "The Great Basin"], 2, "The Coastal Plain runs along the Atlantic and Gulf coasts. The southern half of Georgia is part of it."),
      Q("A family wants to start a farm. Which place would probably be the best choice?", ["A steep mountainside", "Flat land near a river", "A dry desert far from water", "A rocky cliff by the ocean"], 1, "Farms need flat land, good soil, and water. Land near a river gives water for crops and a way to send them to market.")
    ],
    activities: [
      { title: "Salt dough landform map", time: "40 min (plus drying time)",
        materials: ["1 cup flour", "half a cup of salt", "about half a cup of water", "a sturdy piece of cardboard", "a printed outline map of the United States", "paint or markers"],
        steps: ["With your parent, mix the flour, salt, and water into a stiff dough.", "Tape or trace the US outline onto the cardboard.", "Press dough over the whole map in a thin layer.", "Build up higher ridges for the Appalachian Mountains in the East and taller, sharper peaks for the Rocky Mountains in the West. Keep the Great Plains flat.", "Use a pencil to carve a groove for the Mississippi River from the north down to the Gulf of Mexico.", "Let it dry, then paint mountains brown, plains green or yellow, and rivers and lakes blue. Add a key."],
        observe: "Look at your finished map. Where do you think most people would want to live, and where would the fewest people live? Explain why, using the physical features." },
      { title: "Build a town on the map", time: "20 min",
        materials: ["paper", "colored pencils", "pencil"],
        steps: ["Draw an imaginary land with a river, a mountain range, a flat plain, and a dry desert.", "Add a compass rose and a map key.", "Decide where to build three towns. Put a small square for each one.", "Next to each town, write one reason you chose that spot, such as water, flat land, or a harbor.", "Mark one place where you would NOT build a town and write why."],
        observe: "Which physical feature mattered most when you chose your town spots? Explain how it would help the people who live there." }
    ],
    think: [
      "The passage says rivers were the first highways. Explain what that means and why rivers were so important before railroads and trucks. Use details from the passage.",
      "Think about where you live in Georgia. Name one physical feature near you and explain how it affects how people live, work, or travel there."
    ]
  });

  // ---------------- Week 3 ----------------
  C.unit("social", 3, {
    title: "The road to revolution",
    standard: "SS4H4",
    learn: [
      { h: "A war that left a big bill", p: "From 1754 to 1763, Great Britain and its colonists fought France and its Native American allies in the French and Indian War. Britain won and gained a lot of land in North America, but the war left it deeply in debt. A debt is money that is owed." },
      { h: "New rules and new taxes", p: "Britain’s Parliament, its lawmaking body, decided the colonists should help pay. It passed the Stamp Act in 1765, the Townshend Acts in 1767, and the Tea Act in 1773. Colonists had no members in Parliament, so they felt these taxes were unfair." },
      { h: "Patriots and Loyalists", p: "Colonists who wanted to resist Britain, and later to be free from it, were called PATRIOTS. Colonists who stayed faithful to the king were called LOYALISTS. Many families and towns, including in Georgia, were split between the two sides." }
    ],
    passage: [
      "When the French and Indian War ended in 1763, the colonists cheered. Britain had won, and France no longer controlled the land west of the colonies. But peace brought new problems. To avoid more fighting with Native Americans, the king issued the Proclamation of 1763. It said colonists could not settle west of the Appalachian Mountains. Many colonists who had hoped to move west were angry.",
      "Britain also needed money to pay for the war and to keep soldiers in America. Parliament passed the Stamp Act in 1765. It taxed newspapers, playing cards, and legal papers. Colonists protested so strongly, refusing to buy British goods, that Parliament canceled the tax a year later. Then came the Townshend Acts of 1767, which taxed glass, paint, paper, and tea. In Boston, tensions grew. In 1770, British soldiers fired into an angry crowd and killed five colonists. Colonists called it the Boston Massacre.",
      "The Tea Act of 1773 let one British company sell tea in the colonies, and the tea still carried a tax. Colonists in Boston refused to let the tea be unloaded. On the night of December 16, 1773, they climbed aboard the ships and dumped 342 chests of tea into the harbor.",
      "Georgia was different from the other colonies. It was the youngest and smallest, and it depended on Britain for money and for soldiers to protect its frontier. Georgia was the only colony where any stamps were actually sold under the Stamp Act. When leaders from twelve colonies met at the First Continental Congress in 1774, Georgia sent no one. Still, a group of Patriots called the Liberty Boys met at Tondee’s Tavern in Savannah to plan protests. By 1775, Georgia had joined the other colonies in standing up to Britain."
    ],
    vocab: [
      ["debt", "money that is owed to someone else"],
      ["Parliament", "the group of lawmakers that made laws for Great Britain"],
      ["representation", "having someone who speaks and votes for you in the government"],
      ["boycott", "refusing to buy something as a way to protest"],
      ["Patriot", "a colonist who wanted to resist Britain and later fought for independence"],
      ["Loyalist", "a colonist who stayed loyal to the British king"]
    ],
    demo: {
      q: "Explain how the French and Indian War helped lead to the Stamp Act.",
      steps: [
        "Step 1: Start with the event: the French and Indian War ended in 1763, and Britain won.",
        "Step 2: Find the effect of the war: Britain was deeply in debt and still had to pay soldiers in America.",
        "Step 3: That debt became a cause: Parliament wanted the colonists to help pay.",
        "Step 4: The effect was a new tax on printed papers, the Stamp Act of 1765."
      ],
      a: "The war left Britain in debt, so Parliament taxed the colonists with the Stamp Act to help pay."
    },
    items: [
      Q("Who fought on each side of the French and Indian War?", ["Britain and its colonists against France and its Native American allies", "The colonists against Britain", "Spain against Britain", "France and Britain against the colonists"], 0, "Britain and the colonists fought together against France and the Native American nations allied with France. The colonists fought Britain later, in the Revolution."),
      Q("What problem did the French and Indian War leave Britain with?", ["Too much land and no people","No more soldiers","A new king","A huge debt"], 3, "Wars are very expensive. When the war ended in 1763, Britain owed a great deal of money and wanted the colonies to help pay."),
      Q("What did the Proclamation of 1763 say?", ["Colonists must pay a tax on tea", "Colonists could not settle west of the Appalachian Mountains", "The colonies were free", "Georgia would become a colony"], 1, "The king drew a line along the Appalachians and told colonists not to settle west of it, to avoid more fighting with Native Americans.", "Paragraph 1 explains it."),
      Q("According to the passage, why were many colonists angry about the Proclamation of 1763?", ["They had hoped to move west", "They wanted to pay more taxes", "They wanted France to win", "They did not like mountains"], 0, "The passage says many colonists had hoped to move west, so a rule keeping them out made them angry.", "Look at the end of paragraph 1."),
      Q("Which items did the Stamp Act tax?", ["Tea and sugar", "Glass and paint", "Newspapers, playing cards, and legal papers", "Guns and horses"], 2, "The Stamp Act taxed printed paper items. Glass and paint were taxed later, by the Townshend Acts.", "Paragraph 2."),
      Q("What happened to the Stamp Act after colonists protested?", ["It was made stronger","It was moved to France","It lasted 100 years","Parliament canceled it a year later"], 3, "Colonists refused to buy British goods, which hurt British businesses. Parliament canceled the Stamp Act a year later.", "Read paragraph 2."),
      Q("What does it mean to boycott something?", ["To buy a lot of it", "To refuse to buy it as a protest", "To sell it to another country", "To tax it"], 1, "A boycott is refusing to buy goods to send a message. Colonists boycotted British goods to protest the taxes."),
      Q("What was the Boston Massacre?", ["A tea protest in the harbor", "A battle that started the war", "An event in 1770 when British soldiers fired into a crowd and killed five colonists", "A tax law"], 2, "In 1770, British soldiers fired into an angry Boston crowd and five colonists died. Patriots used the event to stir up anger at Britain."),
      Q("About how many chests of tea did colonists dump into Boston Harbor?", ["12", "75", "342", "5,000"], 2, "The passage says 342 chests of tea were dumped into the harbor on December 16, 1773.", "Paragraph 3 gives the number."),
      Q("Why did colonists say “No taxation without representation”?", ["They had no members in Parliament to vote on the taxes", "They wanted to pay higher taxes", "They wanted a king of their own", "They wanted France to tax them"], 0, "Representation means having someone vote for you in government. Colonists had no members in Parliament, so they felt Parliament had no right to tax them."),
      Q("According to the passage, why was Georgia slower to oppose Britain?", ["It depended on Britain for money and soldiers to protect its frontier", "It was the oldest colony", "It had no taxes", "It was ruled by France"], 0, "Georgia was the youngest and smallest colony. It needed British money and soldiers, so many Georgians did not want to anger Britain.", "Paragraph 4."),
      Q("What was special about Georgia and the Stamp Act?", ["It was the only colony where stamps were actually sold", "It wrote the Stamp Act", "It never heard about it", "It paid everyone’s taxes"], 0, "The passage says Georgia was the only colony where any stamps were actually sold. That shows how closely Georgia was tied to Britain at the time.", "Look in paragraph 4."),
      Q("Which colony did not send anyone to the First Continental Congress in 1774?", ["Virginia", "Massachusetts", "Pennsylvania", "Georgia"], 3, "Twelve colonies sent leaders to the First Continental Congress. Georgia was the only one that did not."),
      Q("Who were the Liberty Boys?", ["British soldiers in Savannah","Sailors who carried tea","Loyalists who supported the king","A group of Georgia Patriots who met at Tondee’s Tavern to plan protests"], 3, "The Liberty Boys were Georgia Patriots. They met at Tondee’s Tavern in Savannah to plan ways to resist British rule.", "Paragraph 4."),
      Q("A colonist who stayed faithful to the king was called a...", ["Patriot", "Loyalist", "Liberty Boy", "Minuteman"], 1, "Loyalists stayed loyal to the British king. Patriots, including the Liberty Boys, resisted Britain.")
    ],
    activities: [
      { title: "Road to revolution timeline", time: "25 min",
        materials: ["a long strip of paper (tape two sheets together)", "a ruler", "markers or colored pencils"],
        steps: ["Draw a long line across the paper. Mark the years 1763, 1765, 1767, 1770, 1773, 1774, and 1775 evenly along it.", "Write the event for each year: Proclamation of 1763, Stamp Act, Townshend Acts, Boston Massacre, Tea Act and Boston Tea Party, First Continental Congress, fighting begins.", "Draw a small picture for each event.", "Color the events that were British actions in red and the colonists’ reactions in blue.", "Put a peach or a star next to the events where Georgia played a part."],
        observe: "Look at the red and blue pattern on your timeline. What do you notice about how Britain and the colonists kept answering each other? Explain in 2 to 3 sentences." },
      { title: "Patriot or Loyalist interview", time: "20 min",
        materials: ["paper and pencil", "a family member to play a role"],
        steps: ["Ask a family member to pretend to be a Georgia colonist in 1774. They will secretly choose Patriot or Loyalist.", "Write five interview questions, such as “How do you feel about the Stamp Act?” or “Do you need British soldiers on the frontier?”", "Interview them and write down their answers.", "Decide whether they are a Patriot or a Loyalist, based on their answers.", "Switch roles and let them interview you."],
        observe: "What clue in the answers helped you decide? Explain why some Georgians had good reasons to stay loyal to Britain while others wanted to resist." }
    ],
    think: [
      "Do you think the colonists were right to say the taxes were unfair? Explain your opinion using the idea of representation and at least one tax from the lesson.",
      "Explain why Georgia was slower than other colonies to stand up to Britain. Give two reasons from the passage."
    ]
  });

  // ---------------- Week 4 ----------------
  C.unit("social", 4, {
    title: "Heroes, a traitor, and victory",
    standard: "SS4H4",
    learn: [
      { h: "Leaders with different jobs", p: "Each leader of the Revolution helped in a different way. George Washington led the army. Thomas Jefferson wrote the Declaration of Independence. Benjamin Franklin won help from France. Paul Revere carried warnings. The Marquis de Lafayette, a young Frenchman, fought beside Washington." },
      { h: "Turning points", p: "In 1777, Americans won the Battle of Saratoga in New York. This victory helped convince France to join the war on the American side in 1778. With French soldiers and French ships, Americans trapped the British army at Yorktown, Virginia, in 1781." },
      { h: "The war in Georgia", p: "The British captured Savannah in December 1778. In February 1779, Patriot militia led by Elijah Clarke and others won the Battle of Kettle Creek in Wilkes County. In the fall of 1779, Americans and French tried to take Savannah back but failed." }
    ],
    passage: [
      "On the night of April 18, 1775, Paul Revere, a silversmith from Boston, rode quickly through the dark countryside. He warned Patriots that British soldiers were marching toward Lexington and Concord. Other riders spread the word, too. By morning, local militia, ordinary citizens trained to fight, were waiting. The war had begun.",
      "The next year, Congress asked Thomas Jefferson, a young lawyer from Virginia, to write the Declaration of Independence. Benjamin Franklin, a printer, inventor, and scientist from Philadelphia, helped make changes to it. Later, Franklin sailed to France. His charm and wisdom helped persuade the French king to send money, soldiers, and ships to help the Americans.",
      "Not every story is about heroes. Benedict Arnold was one of the bravest American generals and fought well at Saratoga. But he grew angry, felt he was not honored enough, and was in debt. In 1780, he secretly plotted to hand the American fort at West Point over to the British. The plot was discovered, and Arnold escaped to the British side. Today his name means traitor, a person who betrays his own country.",
      "Georgia had heroes, too. At the Battle of Kettle Creek in 1779, Elijah Clarke helped lead Patriot militia to a victory over a larger Loyalist force. One of the soldiers there was Austin Dabney, a Black man who fought bravely and was badly wounded. After the war, Georgia’s lawmakers passed a law to make sure he was free, and later they gave him land to honor his service.",
      "In 1781, George Washington’s army, which included the Marquis de Lafayette, joined with a French army to surround the British at Yorktown. French ships blocked the British from escaping by sea. On October 19, 1781, British General Cornwallis surrendered. The fight for independence had been won."
    ],
    vocab: [
      ["militia", "ordinary citizens trained to fight when needed"],
      ["silversmith", "a person who makes cups, spoons, and other objects out of silver"],
      ["ally", "a country or person who joins with another to help in a fight"],
      ["traitor", "a person who betrays his or her own country or friends"],
      ["surrender", "to give up in a battle or war"],
      ["persuade", "to get someone to agree or act by giving good reasons"]
    ],
    demo: {
      q: "How did the Battle of Saratoga help lead to the victory at Yorktown?",
      steps: [
        "Step 1: Saratoga, in 1777, was a big American win. It showed that the Americans could beat the British army.",
        "Step 2: Because of that win, France agreed in 1778 to become an ally of the United States.",
        "Step 3: At Yorktown in 1781, French soldiers fought beside Washington, and French ships kept the British from escaping by sea.",
        "Step 4: Link the chain: Saratoga win → French help → British trapped at Yorktown."
      ],
      a: "Saratoga convinced France to join the war, and French soldiers and ships helped trap the British at Yorktown."
    },
    items: [
      Q("What was Paul Revere’s job?", ["Printer","Farmer","Lawyer","Silversmith"], 3, "Paul Revere was a silversmith from Boston. Franklin was the printer, and Jefferson was the lawyer.", "Paragraph 1 tells you."),
      Q("What did Paul Revere do on the night of April 18, 1775?", ["He wrote the Declaration of Independence", "He rode to warn Patriots that British soldiers were coming", "He surrendered at Yorktown", "He sailed to France"], 1, "Revere rode through the night to warn that British soldiers were marching toward Lexington and Concord. Other riders helped spread the warning."),
      Q("What is a militia?", ["A group of British lawmakers","A tax on tea","A kind of ship","Ordinary citizens trained to fight when needed"], 3, "Militia members were farmers, shopkeepers, and other regular people who trained to fight. They were ready when the British marched out."),
      Q("Who was the main writer of the Declaration of Independence?", ["Benjamin Franklin", "George Washington", "Thomas Jefferson", "Paul Revere"], 2, "Thomas Jefferson, a young lawyer from Virginia, wrote most of it. Franklin helped make changes to it."),
      Q("According to the passage, how did Benjamin Franklin help win the war?", ["He led soldiers at Yorktown", "He persuaded France to send money, soldiers, and ships", "He rode to Lexington", "He captured Savannah"], 1, "Franklin went to France and used his charm and wisdom to win French help. That help was a big reason the Americans won.", "Paragraph 2."),
      Q("Why was the Battle of Saratoga a turning point?", ["It was the last battle of the war","It happened in Georgia","The British captured Washington there","It helped convince France to join the American side"], 3, "The win at Saratoga in 1777 showed the Americans could beat the British. France agreed to become an ally in 1778."),
      Q("What did Benedict Arnold try to do in 1780?", ["Hand the fort at West Point over to the British", "Write the Declaration", "Free Savannah", "Lead the French navy"], 0, "Arnold secretly plotted to give West Point to the British. When the plot was found out, he escaped to the British side.", "Paragraph 3."),
      Q("According to the passage, which reasons led Benedict Arnold to turn against his country?", ["He was angry, felt he was not honored enough, and was in debt", "He was born in Britain", "He lost every battle", "Washington asked him to"], 0, "The passage says Arnold grew angry, felt unhonored, and was in debt. These feelings led him to betray America, even though he had been a brave general.", "Re-read paragraph 3."),
      Q("Who was the Marquis de Lafayette?", ["A British general", "A young Frenchman who fought beside Washington", "Georgia’s first governor", "A Loyalist printer"], 1, "Lafayette was a young French nobleman who came to help the Americans. He became a close friend of Washington and helped at Yorktown."),
      Q("Which city did the British capture in December 1778?", ["Boston","Philadelphia","Augusta","Savannah"], 3, "The British captured Savannah in December 1778. A joint American and French attack in 1779 failed to win it back."),
      Q("Who helped lead the Patriot militia to victory at the Battle of Kettle Creek?", ["Elijah Clarke", "Benedict Arnold", "General Cornwallis", "Paul Revere"], 0, "Elijah Clarke was one of the Georgia leaders at Kettle Creek in 1779. The Patriots beat a larger Loyalist force.", "Paragraph 4."),
      Q("How did Georgia honor Austin Dabney after the war?", ["It named the capital after him", "Lawmakers made sure he was free and later gave him land", "It made him governor", "It sent him to France"], 1, "Austin Dabney fought bravely and was badly wounded at Kettle Creek. Georgia’s lawmakers passed a law to make sure he was free, and later granted him land.", "Look at the end of paragraph 4."),
      Q("Why could the British army at Yorktown not escape by sea?", ["The water was frozen","A storm sank them","They had no ships at all","French ships blocked them"], 3, "French ships controlled the water near Yorktown, so the British could not escape or get help by sea. Washington and the French army trapped them on land.", "Paragraph 5."),
      Q("When did General Cornwallis surrender at Yorktown?", ["April 19, 1775", "July 4, 1776", "October 19, 1781", "December 16, 1773"], 2, "Cornwallis surrendered on October 19, 1781. April 1775 was Lexington and Concord, and July 4, 1776 was the Declaration."),
      Q("Which leader is matched with the correct job?", ["Jefferson: led the army", "Washington: wrote the Declaration", "Franklin: won help from France", "Revere: led the French soldiers"], 2, "Franklin won help from France. Washington led the army, Jefferson wrote the Declaration, and Lafayette, not Revere, was the Frenchman who fought beside Washington.")
    ],
    activities: [
      { title: "Map the Revolution", time: "30 min",
        materials: ["a printed outline map of the eastern United States", "colored pencils", "small sticky notes or paper stars"],
        steps: ["Find and label Boston and nearby Lexington and Concord, Massachusetts. Write 1775.", "Find and label Saratoga, New York. Write 1777.", "Find and label Savannah, Georgia. Write 1778 and 1779.", "Find Wilkes County in northeast Georgia and mark Kettle Creek. Write 1779.", "Find and label Yorktown, Virginia. Write 1781.", "Draw arrows connecting the places in order of their dates and add a map key."],
        observe: "Look at your arrows. Describe how the fighting moved over time. Why do you think the war ended in the South instead of where it started?" },
      { title: "Revolution trading cards", time: "30 min",
        materials: ["8 index cards", "colored pencils", "pencil"],
        steps: ["Make one card each for Washington, Jefferson, Franklin, Paul Revere, Lafayette, Benedict Arnold, Elijah Clarke, and Austin Dabney.", "Draw a portrait on the front of each card and write the name.", "On the back, write where the person was from or fought, and the most important thing they did.", "Add one word that describes the person, such as brave, clever, or disloyal.", "Shuffle the cards and play a guessing game with your family: read the back and have them name the person."],
        observe: "Which person on your cards do you admire most, and why? Which person made the choice you think was most wrong? Explain both answers." }
    ],
    think: [
      "Benedict Arnold was once a hero, but he became a traitor. Explain what you think we can learn from his story about the choices people make. Use details from the passage.",
      "Choose two people from this lesson who helped America win in very different ways. Explain what each one did and why both kinds of help were needed."
    ]
  });

})(typeof window !== 'undefined' ? window : globalThis);
