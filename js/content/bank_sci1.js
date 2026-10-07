/* Science units, weeks 5-21: Georgia grade 4 science (weeks 5-18) and grade 5 preview (weeks 19-21). All text original. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  // ---------------------------------------------------------------- WEEK 5
  C.unit("science", 5, {
    title: "The water cycle",
    standard: "S4E3",
    learn: [
      { h: "Water on the move", p: "The water on Earth is used over and over. It moves from the ground to the sky and back again in a path called the water cycle. The Sun's heat is the engine that keeps the cycle going." },
      { h: "Four big steps", p: "EVAPORATION: liquid water warms up and becomes an invisible gas called water vapor. CONDENSATION: water vapor cools and turns back into tiny drops, which make clouds. PRECIPITATION: drops get heavy and fall as rain, snow, sleet, or hail. COLLECTION: water gathers in oceans, lakes, rivers, and under the ground." },
      { h: "Three states of water", p: "Water can be a solid (ice), a liquid (water), or a gas (water vapor). Heating water makes it change from solid to liquid to gas. Cooling it makes it change back. Pure water freezes at 32 degrees Fahrenheit and boils at 212 degrees Fahrenheit." }
    ],
    passage: [
      "On a hot July afternoon in Macon, Lily and her grandpa washed the family car in the driveway. When they finished, the driveway was covered with puddles. Two hours later, Lily ran outside to play, and the puddles were gone. Where did the water go? The Sun had warmed the puddles, and the water had evaporated. It turned into water vapor, a gas that floats into the air even though you cannot see it.",
      "That evening, Grandpa poured himself a tall glass of iced tea. Soon the outside of the glass was wet. Lily thought the glass was leaking, but Grandpa smiled. “The water came from the air,” he said. Water vapor in the warm kitchen air touched the cold glass, cooled down, and turned back into liquid drops. This is condensation. Clouds form the same way. High in the sky, the air is cool, so water vapor condenses into billions of tiny droplets around bits of dust.",
      "When the droplets in a cloud bump together, they join and grow. Finally they become too heavy to float, and they fall to the ground as precipitation. In Georgia, precipitation is usually rain. In the cold mountains of north Georgia, it is sometimes snow.",
      "Rain that falls soaks into the soil, runs into creeks and rivers, or lands in lakes and the ocean. Scientists call this collection. Some water soaks deep underground and becomes groundwater. Plants pull water up through their roots and let some of it out through their leaves as vapor. Then the Sun warms the water again, and the cycle starts over. The water in Lily's puddle might have once fallen as rain in Africa or been part of an ocean wave!"
    ],
    vocab: [
      ["evaporation", "when liquid water warms up and changes into a gas called water vapor"],
      ["condensation", "when water vapor cools down and changes back into liquid drops"],
      ["precipitation", "water that falls from clouds to the ground as rain, snow, sleet, or hail"],
      ["collection", "when water gathers in oceans, lakes, rivers, and under the ground"],
      ["water vapor", "water in the form of an invisible gas mixed into the air"],
      ["groundwater", "water that has soaked deep into the ground and is stored between rocks and soil"]
    ],
    demo: {
      q: "You hang a wet towel outside on a sunny day. By lunch it is dry. Which step of the water cycle happened, and what caused it?",
      steps: [
        "Step 1: Ask what happened to the water. It left the towel, but we did not see it drip away.",
        "Step 2: Water that disappears into the air has turned into an invisible gas. Liquid changing into gas is evaporation.",
        "Step 3: Ask what gave the water energy to change. The Sun warmed the towel, and the warm air and breeze helped.",
        "Step 4: Put it together in one sentence."
      ],
      a: "Evaporation happened: the Sun's heat turned the liquid water in the towel into water vapor that went into the air."
    },
    items: [
      Q("What gives the water cycle its energy?", ["The Sun","The Moon","The wind","The ocean"], 0, "The Sun's heat warms water so it can evaporate. Without that energy the cycle would stop. Wind helps move clouds, but the Sun is the main power source.", "What warms the puddles?"),
      Q("Liquid water turning into water vapor is called…", ["condensation","evaporation","precipitation","collection"], 1, "Evaporation is liquid turning into gas. Condensation is the opposite: gas turning back into liquid.", "Think of a puddle drying up."),
      Q("Which step makes clouds form?", ["Collection","Evaporation","Condensation","Precipitation"], 2, "Clouds form when water vapor cools high in the sky and condenses into tiny droplets. Evaporation puts the vapor into the air, but condensation is what turns it into a cloud.", "Gas becomes tiny drops."),
      Q("Which of these is NOT a kind of precipitation?", ["Hail","Sleet","Snow","Fog"], 3, "Fog is a cloud that sits near the ground. It does not fall from the sky. Hail, sleet, and snow all fall from clouds, so they are precipitation.", "Precipitation falls."),
      Q("Ice is water in which state?", ["Solid","Liquid","Gas","Vapor"], 0, "Ice is solid water. It keeps its own shape. Liquid water takes the shape of its container, and water vapor is a gas.", "Can you hold it in your hand and it keeps its shape?"),
      Q("At what temperature does pure water freeze?", ["0 degrees Fahrenheit","32 degrees Fahrenheit","212 degrees Fahrenheit","100 degrees Fahrenheit"], 1, "Pure water freezes at 32 degrees Fahrenheit (which is 0 degrees Celsius). 212 degrees Fahrenheit is the boiling point, the other end of the scale.", "It is the same as 0 degrees Celsius."),
      Q("What happens to water when it is heated to 212 degrees Fahrenheit?", ["It freezes","It turns into ice","It boils and turns quickly into vapor","Nothing happens"], 2, "212 degrees Fahrenheit is the boiling point of water. At boiling, water turns into vapor very quickly. Evaporation also happens at cooler temperatures, just more slowly.", "Think of a pot on the stove."),
      Q("Where is MOST of Earth's water found?", ["In rivers","In clouds","In lakes","In the oceans"], 3, "About 97 out of every 100 drops of Earth's water are in the salty oceans. Rivers, lakes, and clouds hold only a tiny part.", "What covers most of a globe?"),
      Q("Plants let water vapor out through their…", ["leaves","roots","seeds","bark"], 0, "Roots pull water in from the soil. Leaves let some of that water out into the air as vapor. This adds water to the water cycle.", "Which part touches the air the most?"),
      Q("In the passage, why did the driveway puddles disappear?", ["Lily swept them away","The Sun warmed them and the water evaporated","They soaked into the car","It started to snow"], 1, "The passage says the Sun had warmed the puddles and the water had evaporated into the air as water vapor.", "Re-read paragraph 1."),
      Q("In the passage, Lily first thought the wet glass was…", ["melting","broken","leaking","full of rain"], 2, "Lily thought the glass was leaking, but Grandpa explained the water came from the air. The water was condensation, not a leak.", "Look at paragraph 2."),
      Q("According to the passage, around what do cloud droplets form?", ["Raindrops from the ground","Snowflakes","Bird feathers","Bits of dust"], 3, "The passage says water vapor condenses into tiny droplets around bits of dust high in the sky.", "Paragraph 2, last sentence."),
      Q("The passage says precipitation in the mountains of north Georgia is sometimes…", ["snow","hail every day","sand","fog only"], 0, "The passage says Georgia's precipitation is usually rain, but in the cold mountains of north Georgia it is sometimes snow, because it is colder there.", "Paragraph 3."),
      Q("Water that soaks deep into the soil and is stored underground is called…", ["water vapor","groundwater","a cloud","sleet"], 1, "Groundwater is water stored underground between bits of rock and soil. Many wells pump up groundwater for people to drink.", "The word tells you where it is."),
      Q("Why do cloud droplets fall as rain?", ["The wind pushes them down","The Sun gets too hot","They join together and become too heavy to float","The cloud gets tired"], 2, "Tiny droplets float, but when they bump and join, they grow. When they become too heavy for the air to hold up, they fall as precipitation.", "Think about size and weight.")
    ],
    activities: [
      { title: "Water cycle in a bag", time: "15 min, then check for 2 days",
        materials: ["zip-top sandwich bag", "water", "blue food coloring (optional)", "marker", "tape", "a sunny window"],
        steps: [
          "Draw a sun, a cloud, and wavy water lines on the bag with the marker.",
          "Pour about 1/4 cup of water into the bag. Add one drop of food coloring if you want.",
          "Seal the bag tightly and check that it does not leak.",
          "Ask a parent to help you tape the bag flat against a sunny window.",
          "Check the bag after 2 hours, after one day, and after two days. Look for drops on the top of the bag and drops sliding down the sides."
        ],
        observe: "Where did you see water drops form inside the bag? Use the words evaporation, condensation, and precipitation to explain what happened."
      },
      { title: "Make it rain on a plate", time: "20 min",
        materials: ["clear glass jar", "warm tap water (not boiling)", "a small plate", "ice cubes", "a parent nearby"],
        steps: [
          "Ask a parent to fill the jar about one-third full with warm water from the tap. (Never use boiling water for this.)",
          "Set the plate on top of the jar like a lid.",
          "Put several ice cubes on top of the plate.",
          "Wait 5 to 10 minutes and watch the underside of the plate and the inside of the jar.",
          "Gently lift the plate and look underneath. Notice any drops that fall back into the jar."
        ],
        observe: "What formed on the bottom of the plate? Why did the ice help it happen? How is this like a cloud making rain?"
      }
    ],
    think: [
      "The water you drank today may be millions of years old. Explain how that can be true, using what you know about the water cycle.",
      "On which day would a puddle dry up faster: a cool, cloudy day or a hot, sunny day? Explain your reason."
    ]
  });

  // ---------------------------------------------------------------- WEEK 6
  C.unit("science", 6, {
    title: "Weather tools and measuring weather",
    standard: "S4E4",
    learn: [
      { h: "Scientists measure weather", p: "Weather is what the air is like at a certain place and time: hot or cold, wet or dry, calm or windy. Meteorologists are scientists who study weather. They use tools to measure it with numbers instead of guessing." },
      { h: "Five tools to know", p: "THERMOMETER measures temperature. RAIN GAUGE measures how much rain fell. BAROMETER measures air pressure. ANEMOMETER measures wind speed. WIND VANE shows wind direction." },
      { h: "Reading the clues", p: "Falling air pressure often means clouds and storms are coming. Rising pressure usually means clear, fair weather. A wind vane points toward the direction the wind is coming FROM, and winds are named that way. A north wind blows from the north." }
    ],
    passage: [
      "Marcus and his mom built a small weather station in their backyard in Athens. They wanted to keep a weather journal for one month. First they hung a thermometer on a shady fence post. Mom explained that a thermometer in direct sunlight would read too high, because the Sun would heat the thermometer itself instead of just the air.",
      "Next they pushed a rain gauge into the soil in an open part of the yard, away from the roof and trees. A rain gauge is a clear tube marked with inches. After a storm, Marcus read the water level and wrote it down. Then he emptied the tube so it would be ready for the next rain.",
      "Grandma gave them an old barometer that hung in the hallway. A barometer measures air pressure, which is the weight of the air pressing down on everything. One Tuesday, Marcus noticed the barometer reading dropping all morning. By dinnertime, dark clouds rolled in and thunder rumbled. He wrote in his journal, “Pressure falling means a storm may be coming.”",
      "On the roof of the shed, Mom attached a wind vane shaped like an arrow and a small anemometer with three cups. When the wind blew, the cups spun. The faster they spun, the faster the wind was blowing. The wind vane swung around until its arrow pointed into the wind. On cold winter days, it often pointed north, which meant cold air was blowing in from the north.",
      "At the end of the month, Marcus looked back at his journal. He could see patterns. Most of the rainy days had come after the pressure dropped. Now he understood that weather is not random. It leaves clues that careful scientists can measure."
    ],
    vocab: [
      ["meteorologist", "a scientist who studies and predicts the weather"],
      ["thermometer", "a tool that measures temperature, how hot or cold something is"],
      ["rain gauge", "a tool that collects rain and measures how much fell"],
      ["barometer", "a tool that measures air pressure"],
      ["anemometer", "a tool with spinning cups that measures wind speed"],
      ["wind vane", "a tool that turns to show which direction the wind is coming from"]
    ],
    demo: {
      q: "The barometer reading has been dropping all day, and the wind vane points south. What weather might be coming?",
      steps: [
        "Step 1: Remember the barometer rule: falling pressure often means clouds and storms are on the way.",
        "Step 2: Remember the wind vane rule: the arrow points to where the wind is coming FROM. So the wind is coming from the south.",
        "Step 3: In Georgia, south winds often bring warm, moist air up from the Gulf of Mexico. Moist air plus falling pressure is a good recipe for rain.",
        "Step 4: Make a prediction based on the clues."
      ],
      a: "Cloudy, rainy, or stormy weather is likely, with warm, humid air blowing in from the south."
    },
    items: [
      Q("Which tool measures temperature?", ["Barometer","Anemometer","Rain gauge","Thermometer"], 3, "A thermometer measures how hot or cold the air is. The word part 'thermo' means heat.", "'Thermo' means heat."),
      Q("Which tool measures wind speed?", ["Anemometer","Rain gauge","Wind vane","Thermometer"], 0, "An anemometer has cups that spin in the wind. Faster spinning means faster wind. A wind vane shows direction, not speed.", "It has spinning cups."),
      Q("A wind vane tells you…", ["how fast the wind is blowing","the direction the wind is coming from","how much rain fell","the air pressure"], 1, "A wind vane swings to point into the wind, showing the direction it comes from. It does not measure speed; that is the anemometer's job.", "Direction, not speed."),
      Q("What does a barometer measure?", ["Temperature","Rainfall","Air pressure","Wind direction"], 2, "A barometer measures air pressure, the push of the air's weight. Changes in pressure help predict weather.", "Think of the tool Grandma gave Marcus."),
      Q("The barometer reading is falling fast. What weather is MOST likely coming?", ["Clear blue skies","A drought","No change at all","Clouds and possibly storms"], 3, "Falling pressure usually means a storm system is approaching. Rising pressure usually means fair, clear weather.", "Remember Marcus's journal."),
      Q("A 'north wind' is a wind that…", ["blows from the north","blows toward the north","only blows at the North Pole","blows in circles"], 0, "Winds are named for where they come from. A north wind comes from the north and blows toward the south. In Georgia, north winds often bring cooler air.", "Named for where it starts."),
      Q("Rain gauges usually measure rain in…", ["degrees","inches","miles per hour","pounds"], 1, "Rain is measured by how deep it would be, in inches (or millimeters). Degrees are for temperature, and miles per hour is for wind speed.", "It is a depth."),
      Q("Which tool would you use to find out how much it rained last night?", ["Wind vane","Barometer","Rain gauge","Anemometer"], 2, "A rain gauge collects falling rain so you can read how deep it got. The other tools measure pressure or wind.", "The name tells you."),
      Q("What do we call a scientist who studies weather?", ["A geologist","A biologist","An astronomer","A meteorologist"], 3, "A meteorologist studies weather. A geologist studies rocks, a biologist studies living things, and an astronomer studies space.", "It has nothing to do with meteors, even though it sounds like it."),
      Q("Temperatures in the United States weather reports are usually given in…", ["degrees Fahrenheit","inches","miles","cups"], 0, "Most U.S. weather reports use degrees Fahrenheit. Many other countries and most scientists use degrees Celsius.", "The unit has the word degrees."),
      Q("In the passage, why did Marcus and his mom hang the thermometer in the shade?", ["So birds would not land on it","Direct sunlight would make it read too high","So it would stay dry","Because the fence was in the shade"], 1, "Mom explained that sunlight would heat the thermometer itself, so it would not show the true air temperature.", "Paragraph 1."),
      Q("In the passage, where did they put the rain gauge?", ["Under the shed roof","Next to a big tree","In an open part of the yard","In the kitchen"], 2, "They placed it in the open, away from the roof and trees, so nothing would block or add extra water.", "Paragraph 2."),
      Q("According to the passage, what happened on the Tuesday the barometer dropped?", ["It snowed","The temperature hit 100 degrees","The wind stopped completely","Dark clouds and thunder came by dinnertime"], 3, "The passage says dark clouds rolled in and thunder rumbled by dinnertime, matching the falling pressure.", "Paragraph 3."),
      Q("In the passage, how many cups did the anemometer have?", ["Three","Two","Four","Six"], 0, "The passage describes a small anemometer with three cups that spun in the wind.", "Paragraph 4."),
      Q("What did Marcus learn by the end of the month?", ["Weather is completely random","Weather leaves clues that can be measured","Barometers do not work","It never rains in Athens"], 1, "He saw patterns in his journal, like rain after pressure drops, and realized weather leaves measurable clues.", "Read the last paragraph.")
    ],
    activities: [
      { title: "Build a wind vane", time: "30 min",
        materials: ["paper cup", "modeling clay or play dough", "a sharpened pencil with an eraser", "a straight pin", "a plastic straw", "cardstock", "tape", "marker", "a parent to help with the pin"],
        steps: [
          "Write N, E, S, and W around the side of the upside-down cup, like a compass.",
          "Push the pencil, eraser up, through the bottom of the cup. Press clay inside the cup around the pencil so it stands up.",
          "Cut a small triangle (arrow point) and a bigger square (tail) from cardstock. Tape them to opposite ends of the straw.",
          "Ask a parent to push the pin through the middle of the straw and into the eraser. Make sure the straw spins freely.",
          "Take it outside. Use a compass app or the sunrise side (east) to turn the N toward north. Watch where the arrow points."
        ],
        observe: "Which direction was the wind coming from? How do you know? Check again on another day and compare."
      },
      { title: "One-week weather journal", time: "10 min a day for 5 days",
        materials: ["outdoor thermometer", "a straight-sided clear jar and a ruler (for a homemade rain gauge)", "notebook", "pencil"],
        steps: [
          "Set the jar outside in an open spot as a rain gauge.",
          "Each day at the same time, read the thermometer and write down the temperature.",
          "Measure any water in the jar with the ruler, write it down, and then empty the jar.",
          "Describe the sky (sunny, cloudy, rainy) and the wind (calm, breezy, windy).",
          "On day 5, look back at all your notes and circle any patterns you see."
        ],
        observe: "What was the warmest day and the coolest day? Did you notice any pattern between clouds, wind, and rain?"
      }
    ],
    think: [
      "Why do you think it is important for weather scientists to use tools instead of just looking outside and guessing? Give two reasons.",
      "If you could only have ONE weather tool at home, which would you choose and why? Explain how it would help your family."
    ]
  });

  // ---------------------------------------------------------------- WEEK 7
  C.unit("science", 7, {
    title: "Clouds, precipitation, and fronts",
    standard: "S4E4",
    learn: [
      { h: "Three main cloud types", p: "CUMULUS clouds are puffy and white, like cotton balls, and usually mean fair weather. When they grow very tall and dark, they become cumulonimbus clouds that bring thunderstorms. STRATUS clouds are flat, gray layers that can bring drizzle. CIRRUS clouds are thin and wispy, high in the sky, and are made of ice crystals." },
      { h: "Kinds of precipitation", p: "RAIN is liquid water. SNOW is ice crystals that form in cold clouds. SLEET is rain that freezes into small ice pellets before it lands. FREEZING RAIN falls as liquid and freezes when it hits cold ground or trees. HAIL is balls of ice that grow inside strong thunderstorms." },
      { h: "Air masses and fronts", p: "An air mass is a huge body of air with about the same temperature and moisture. Where two air masses meet, there is a front. A cold front often brings quick, strong storms and then cooler, drier air. A warm front often brings long, gentle rain and then warmer, more humid air." }
    ],
    passage: [
      "Every morning, Ms. Rivera, a television meteorologist in Savannah, explains the forecast. A forecast is a prediction of what the weather will be. To make one, she studies clouds, air masses, and fronts.",
      "An air mass is an enormous body of air, sometimes as wide as several states. It takes on the weather of the place where it formed. Air that sits over the warm Gulf of Mexico becomes warm and humid, which means it holds a lot of water vapor. Air that forms over central Canada in winter becomes cold and dry. Georgia often gets warm, humid air from the Gulf, which is why summers here feel so sticky.",
      "Air masses do not mix easily. The boundary where two of them meet is called a front. On a weather map, a cold front is drawn as a blue line with triangles. A warm front is a red line with half circles. The shapes point in the direction the front is moving.",
      "When a cold front arrives, the heavy cold air pushes under the warm air and shoves it upward quickly. As the warm air rises, it cools, and tall cumulonimbus clouds can build. That is why cold fronts often bring thunderstorms and gusty winds. After the front passes, the sky clears and the air feels cooler and drier. A warm front is gentler. Warm air slides slowly up over the cold air, making wide sheets of stratus clouds and steady rain that can last a day or more.",
      "On Monday, Ms. Rivera pointed to a blue line with triangles moving toward Georgia from the west. “Expect storms Tuesday afternoon,” she said, “then a sunny, cool Wednesday.” In most of the United States, weather systems travel from west to east, so looking west helps forecasters see what is coming."
    ],
    vocab: [
      ["forecast", "a prediction of what the weather will be in the coming hours or days"],
      ["air mass", "a huge body of air that has about the same temperature and moisture throughout"],
      ["front", "the boundary where two different air masses meet"],
      ["humid", "holding a lot of water vapor, so the air feels damp and sticky"],
      ["cumulonimbus", "a very tall, dark cloud that produces thunderstorms"],
      ["sleet", "rain that freezes into small ice pellets before reaching the ground"]
    ],
    demo: {
      q: "A weather map shows a blue line with triangles moving toward your town. What weather should you expect today and tomorrow?",
      steps: [
        "Step 1: Identify the symbol. A blue line with triangles is a cold front.",
        "Step 2: Recall what a cold front does. Cold air pushes warm air up fast, which builds tall storm clouds.",
        "Step 3: So as the front arrives, expect thunderstorms or heavy showers and gusty winds.",
        "Step 4: After it passes, cooler, drier air moves in, and the sky usually clears."
      ],
      a: "Storms as the cold front arrives, then clearer, cooler, drier weather after it passes."
    },
    items: [
      Q("Which clouds are puffy and white and usually mean fair weather?", ["Stratus","Cirrus","Cumulus","Cumulonimbus"], 2, "Cumulus clouds look like cotton balls and usually appear on nice days. If they grow very tall and dark, they become cumulonimbus storm clouds.", "Think cotton balls."),
      Q("Thin, wispy clouds high in the sky made of ice crystals are…", ["fog","stratus","cumulus","cirrus"], 3, "Cirrus clouds are so high and cold that they are made of ice crystals. They look like feathery streaks.", "They look like feathers."),
      Q("Flat, gray layers of cloud that cover the sky and may bring drizzle are…", ["stratus","cumulus","cirrus","cumulonimbus"], 0, "Stratus clouds form flat sheets. 'Stratus' comes from a word meaning layer or spread out.", "Layers."),
      Q("Which cloud brings thunderstorms?", ["Cirrus","Cumulonimbus","Stratus","Fog"], 1, "Cumulonimbus clouds are giant towers that can reach very high into the sky. They make thunder, lightning, heavy rain, and sometimes hail.", "It is a tall, dark version of the puffy cloud."),
      Q("Rain that freezes into ice pellets BEFORE hitting the ground is…", ["hail","snow","sleet","freezing rain"], 2, "Sleet freezes on the way down into small pellets. Freezing rain is different: it stays liquid until it lands, then freezes on contact.", "It bounces when it lands."),
      Q("Hail forms…", ["only in winter","on the ground","from fog","inside strong thunderstorms"], 3, "Strong updrafts in thunderstorms carry drops high where they freeze, and layers of ice build up. Hail can fall even on warm summer days.", "It comes with thunder."),
      Q("What is an air mass?", ["A huge body of air with similar temperature and moisture","A single cloud","A gust of wind","A weather tool"], 0, "An air mass can stretch across several states and has about the same temperature and humidity throughout.", "Think big."),
      Q("The boundary between two air masses is called a…", ["cloud","front","pressure","forecast"], 1, "A front is where two air masses meet. Most interesting weather happens along fronts.", "Like the front line where two teams meet."),
      Q("After a cold front passes, the weather usually becomes…", ["warmer and more humid","foggy for a week","cooler and drier","exactly the same"], 2, "The cold, dry air behind the front replaces the warm, humid air, so the day after a cold front often feels crisp and clear.", "What kind of air is behind it?"),
      Q("A warm front usually brings…", ["a short, violent storm","no clouds at all","snow every time","long, steady rain and then warmer air"], 3, "Warm air slides slowly up over cold air, making wide layers of clouds and gentle rain that can last a long time.", "Warm fronts are gentle."),
      Q("On a weather map, a cold front is shown as…", ["a blue line with triangles","a red line with half circles","a green dotted line","a yellow star"], 0, "Cold fronts are blue lines with triangles. Warm fronts are red lines with half circles.", "Blue for cold."),
      Q("According to the passage, why do Georgia summers feel sticky?", ["Georgia is near Canada","Georgia gets warm, humid air from the Gulf of Mexico","Cirrus clouds trap heat","Cold fronts come every day"], 1, "The passage explains that air over the warm Gulf of Mexico becomes warm and humid, and Georgia often gets that air.", "Paragraph 2."),
      Q("In the passage, what does a cold front do to the warm air?", ["Slides over it slowly","Mixes with it evenly","Pushes under it and shoves it up quickly","Freezes it"], 2, "The passage says the heavy cold air pushes under the warm air and shoves it upward quickly, building storm clouds.", "Paragraph 4."),
      Q("In the passage, Ms. Rivera predicted what for Wednesday?", ["Snow","More storms","A hurricane","A sunny, cool day"], 3, "She said to expect storms Tuesday afternoon, then a sunny, cool Wednesday after the cold front passed.", "Last paragraph."),
      Q("According to the passage, why do forecasters look to the west?", ["Weather systems in most of the U.S. move west to east","The Sun sets there","The ocean is there","Clouds only form in the west"], 0, "The passage says weather systems usually travel from west to east, so what is west of you is often coming your way.", "Last paragraph.")
    ],
    activities: [
      { title: "Cloud spotter chart", time: "15 min a day for 3 days",
        materials: ["paper", "crayons or colored pencils", "cotton balls", "glue"],
        steps: [
          "Make a chart with three boxes: cumulus, stratus, cirrus. Glue cotton balls in each box to show the shape (puffy, flat and stretched, thin and pulled apart).",
          "Go outside at the same time each day. Never look directly at the Sun.",
          "Draw the clouds you see and decide which type they look most like.",
          "Write what the weather is like right then.",
          "The next day, write what the weather turned out to be. Did the clouds give a clue?"
        ],
        observe: "Which cloud type did you see most? Did any clouds help you predict the next day's weather? Explain."
      },
      { title: "Cold air meets warm air", time: "20 min",
        materials: ["clear plastic storage box or large glass baking dish", "cold water with blue food coloring", "warm tap water with red food coloring", "two cups", "a parent nearby"],
        steps: [
          "Ask a parent to help fill the clear container about half full with room-temperature water.",
          "Fill one cup with very cold water and add blue coloring. Fill the other with warm tap water and add red coloring. (Do not use boiling water.)",
          "At the same time, gently pour the blue water into one end and the red water into the other end.",
          "Watch from the side for 2 minutes. Where does the blue go? Where does the red go?",
          "Draw what you see with colored pencils."
        ],
        observe: "Which color sank and which rose? How is this like what happens at a cold front, when cold air pushes under warm air?"
      }
    ],
    think: [
      "A cold front is coming tomorrow. Write a short forecast for your family, and explain what they should wear and why.",
      "Why do you think Georgia rarely gets snow, even in winter? Use the words air mass and Gulf of Mexico in your answer."
    ]
  });

  // ---------------------------------------------------------------- WEEK 8
  C.unit("science", 8, {
    title: "Severe weather and safety",
    standard: "S4E4",
    learn: [
      { h: "Thunderstorms and lightning", p: "Thunderstorms grow from tall cumulonimbus clouds. Lightning is a giant electric spark. Thunder is the sound made when lightning heats the air so fast that it bursts outward. Light travels faster than sound, so you see the flash before you hear the boom." },
      { h: "Tornadoes and hurricanes", p: "A tornado is a spinning column of air that reaches from a thunderstorm down to the ground. It is small but can have the fastest winds on Earth. A hurricane is a huge spinning storm that forms over warm ocean water, with winds of at least 74 miles per hour and a calm center called the eye." },
      { h: "Watch or warning?", p: "A WATCH means conditions are right for dangerous weather, so be ready. A WARNING means it is happening or about to happen nearby, so take shelter now. Remember: when thunder roars, go indoors." }
    ],
    passage: [
      "Georgia gets many thunderstorms, especially on hot summer afternoons. The Sun heats the ground, warm, humid air rises, and tall cumulonimbus clouds build. Inside the cloud, ice and water bump together and build up electric charges. When the charge gets big enough, lightning jumps from the cloud to the ground, to another cloud, or inside the same cloud.",
      "Lightning is hotter than the surface of the Sun. It heats the air around it so quickly that the air expands with a crack or rumble. That sound is thunder. To estimate how far away lightning is, count the seconds between the flash and the boom. Every five seconds is about one mile. If you hear thunder at all, you are close enough to be struck. Go inside a building or a hard-topped car, and wait 30 minutes after the last thunder before going back out.",
      "Some strong thunderstorms make tornadoes. A tornado looks like a twisting funnel that touches the ground. A tornado watch means tornadoes could form, so families should review their plan. A tornado warning means one has been seen or shows up on radar. During a warning, go to the lowest floor of a sturdy building, into a small inside room or hallway with no windows, such as a closet or bathroom. Crouch down and cover your head with your arms or a pillow.",
      "Hurricanes form over warm ocean water in late summer and fall. The Atlantic hurricane season runs from June 1 to November 30. A hurricane can be hundreds of miles wide. Its strong winds push ocean water onto land in a rising flood called a storm surge, which is very dangerous for coastal towns like Brunswick and Savannah. Officials may tell families to evacuate, which means to leave for a safer place. The best safety tool is a plan: know where to go, pack a kit with water, food, a flashlight, batteries, and medicines, and listen to trusted weather alerts."
    ],
    vocab: [
      ["lightning", "a giant spark of electricity in a storm"],
      ["thunder", "the loud sound made when lightning heats the air so fast it bursts outward"],
      ["tornado", "a violently spinning column of air reaching from a thunderstorm to the ground"],
      ["hurricane", "a huge spinning storm that forms over warm ocean water with winds of at least 74 mph"],
      ["storm surge", "ocean water pushed onto land by a hurricane's winds"],
      ["evacuate", "to leave a dangerous place and go somewhere safer"]
    ],
    demo: {
      q: "You see a lightning flash and count 10 seconds before you hear thunder. About how far away was the lightning, and what should you do?",
      steps: [
        "Step 1: Use the rule: every 5 seconds between flash and thunder is about 1 mile.",
        "Step 2: Divide: 10 seconds ÷ 5 = 2.",
        "Step 3: So the lightning was about 2 miles away.",
        "Step 4: Safety rule: if you can hear thunder, you are close enough to be struck. Go indoors and wait 30 minutes after the last thunder."
      ],
      a: "About 2 miles away, which is close enough to be dangerous, so go indoors right away."
    },
    items: [
      Q("What causes thunder?", ["Clouds bumping together","Lightning heating the air so fast it bursts outward","Rain hitting the ground","Wind blowing through trees"], 1, "Lightning makes the air extremely hot in a split second. The air expands so fast that it makes a boom. Clouds do not make noise by bumping.", "It always comes with lightning."),
      Q("Why do we see lightning before we hear thunder?", ["Thunder happens later","Our ears are slower than our eyes","Light travels much faster than sound","Lightning is closer"], 2, "Both happen at the same moment, but light reaches you almost instantly while sound takes about 5 seconds to travel one mile.", "Which is faster, light or sound?"),
      Q("A tornado WARNING means…", ["the weather might get bad someday","there will be a hurricane","the tornado is over","a tornado has been seen or shows on radar, so take shelter now"], 3, "A warning means danger is happening or about to happen. A watch only means conditions are right for tornadoes to form.", "Warning = act now."),
      Q("A tornado WATCH means…", ["conditions are right for tornadoes, so be ready","a tornado is on the ground nearby","it is safe to go outside","the storm has passed"], 0, "A watch means keep watching and be prepared. Know where your safe spot is. If a warning comes, go there.", "Watch = be ready."),
      Q("During a tornado warning, the safest place in a house is…", ["next to a big window","a small inside room on the lowest floor","the upstairs bedroom","the front porch"], 1, "Small inside rooms like closets, bathrooms, or hallways on the lowest floor put the most walls between you and flying debris. Windows can shatter.", "Low and away from windows."),
      Q("Where do hurricanes form?", ["In deserts","Over mountains","Over warm ocean water","Over frozen lakes"], 2, "Hurricanes get their energy from warm ocean water. They usually weaken after they move over land.", "They need lots of warm water."),
      Q("The calm center of a hurricane is called the…", ["funnel","surge","front","eye"], 3, "The eye of a hurricane can be calm and even sunny, but the strongest winds are in the wall of clouds right around it. The storm is not over when the eye passes.", "It is a body part."),
      Q("A hurricane has winds of at least…", ["74 miles per hour","30 miles per hour","10 miles per hour","500 miles per hour"], 0, "A spinning ocean storm becomes a hurricane when its winds reach 74 miles per hour. Weaker ones are called tropical storms.", "It is in your learn cards."),
      Q("If you are playing outside and hear thunder, you should…", ["stand under a tall tree","go inside a building or hard-topped car","keep playing until you see lightning","lie down in an open field"], 1, "If you can hear thunder, lightning can reach you. Tall trees are NOT safe because lightning often strikes tall objects.", "When thunder roars…"),
      Q("Which item is MOST useful in a storm safety kit?", ["A candle-lit cake","A kite","A flashlight with extra batteries","A video game"], 2, "Storms can knock out power. A flashlight is safer than candles. Kits should also have water, food, and medicines.", "Think about losing power."),
      Q("In the passage, how can you estimate how far away lightning is?", ["Count the raindrops","Measure the cloud's height","Look at the color of the lightning","Count seconds between flash and thunder; every 5 seconds is about 1 mile"], 3, "The passage explains counting the seconds between the flash and the boom, with every five seconds equal to about one mile.", "Paragraph 2."),
      Q("According to the passage, how long should you wait after the last thunder before going back outside?", ["30 minutes","10 minutes","5 minutes","3 hours"], 0, "The passage says to wait 30 minutes after the last thunder, because lightning can strike even as a storm is moving away.", "Paragraph 2."),
      Q("The passage says lightning is hotter than…", ["a campfire only","the surface of the Sun","boiling water only","a light bulb only"], 1, "The passage states that lightning is hotter than the surface of the Sun, which is why it heats the air so violently.", "Paragraph 2, first sentence."),
      Q("According to the passage, when is the Atlantic hurricane season?", ["January 1 to March 31","All year with no season","June 1 to November 30","December only"], 2, "The passage gives the dates June 1 to November 30. Most hurricanes happen in late summer and fall when the ocean is warmest.", "Paragraph 4."),
      Q("In the passage, what is a storm surge?", ["A strong gust of wind","A fast tornado","A lightning strike","Ocean water pushed onto land by a hurricane"], 3, "The passage says a storm surge is a rising flood of ocean water pushed onto land by hurricane winds, dangerous for towns like Brunswick and Savannah.", "Paragraph 4.")
    ],
    activities: [
      { title: "Tornado in a bottle", time: "20 min",
        materials: ["two empty 2-liter plastic bottles with caps removed", "water", "duct tape", "a drop of dish soap", "glitter (optional)", "a parent nearby"],
        steps: [
          "Fill one bottle about two-thirds full of water. Add a drop of dish soap and a pinch of glitter.",
          "Turn the empty bottle upside down on top so the openings line up.",
          "Ask a parent to wrap duct tape tightly around the joined necks so it does not leak.",
          "Flip the bottles so the full one is on top. Quickly swirl the top bottle in a circle a few times.",
          "Set it down on a table and watch the water drain. Look for a spinning funnel."
        ],
        observe: "Describe the shape you saw. How is it like a real tornado? How is a real tornado different and more dangerous?"
      },
      { title: "Make a family storm plan", time: "30 min",
        materials: ["paper", "markers", "a parent", "a flashlight", "a box or bag for supplies"],
        steps: [
          "With a parent, walk through your home and find the safest spot for a tornado warning (lowest floor, inside room, no windows).",
          "Draw a simple map of your home and mark the safe spot with a star.",
          "Make a checklist of a storm kit: water, snacks, flashlight, batteries, first-aid kit, medicines, a whistle, pet supplies.",
          "Gather what you can into a box or bag, with a parent's permission.",
          "Practice a drill: a parent calls out \"tornado warning\" and everyone goes to the safe spot and crouches with arms over heads."
        ],
        observe: "Why did your family choose that safe spot? What was missing from your kit, and how will you get it?"
      }
    ],
    think: [
      "Explain the difference between a tornado watch and a tornado warning, and tell what your family should do for each one.",
      "A friend says, \"The storm is far away, so it is fine to keep swimming even though I hear thunder.\" Do you agree? Explain using what you learned about lightning."
    ]
  });

  // ---------------------------------------------------------------- WEEK 9
  C.unit("science", 9, {
    title: "Light: sources, straight lines, and reflection",
    standard: "S4P1",
    learn: [
      { h: "Where light comes from", p: "A light source makes its own light. The Sun, fire, light bulbs, and fireflies are light sources. The Moon is not; it only reflects sunlight. We see most objects because light bounces off them and travels into our eyes." },
      { h: "Light travels in straight lines", p: "Light moves in straight lines called rays until something stops it or changes its path. When an object blocks light, it makes a shadow, a dark area behind it. Light is the fastest thing we know: about 186,000 miles every second." },
      { h: "Reflection", p: "Reflection is when light bounces off a surface. Smooth, shiny surfaces like mirrors and still water reflect light evenly, so you see a clear image. Light bounces off a mirror at the same angle it hits it, like a ball bouncing off a wall." }
    ],
    passage: [
      "On a camping trip at Cloudland Canyon State Park, Nora and her dad stayed up after sunset. The campfire glowed orange, and fireflies blinked in the grass. Dad pointed out that the fire, the fireflies, and his flashlight all made their own light. They were light sources. The bright full Moon above them was different. It was a big rock that did not glow on its own. It looked bright only because sunlight was bouncing off it.",
      "Nora switched on the flashlight and aimed it at a tree. The beam made a straight path through the misty air. She noticed that light never curved around the tree. Behind the tree trunk, there was a dark shape where the light could not reach. That shape was a shadow. When she moved the flashlight closer to her hand, her hand's shadow on the tent grew bigger. When she moved the light farther away, the shadow shrank.",
      "In the morning, Nora looked into the calm lake and saw the trees reflected upside down. Dad explained that the still water was acting like a mirror. Light from the trees hit the smooth surface and bounced up into her eyes. When the wind made ripples, the reflection broke into wiggly pieces, because a bumpy surface scatters light in many directions.",
      "Back home, Nora held up her right hand in front of the bathroom mirror. Her reflection seemed to raise its left hand! A mirror flips an image from front to back, which makes left and right look switched. Nora learned that this is why the word AMBULANCE is often printed backward on the front of ambulances. Drivers ahead see it the right way in their rearview mirrors."
    ],
    vocab: [
      ["light source", "something that makes its own light, like the Sun or a flashlight"],
      ["ray", "a straight-line path that light travels along"],
      ["shadow", "a dark area made when an object blocks light"],
      ["reflection", "when light bounces off a surface"],
      ["mirror", "a very smooth, shiny surface that reflects light to make a clear image"],
      ["scatter", "to spread out in many different directions"]
    ],
    demo: {
      q: "Why can you see a red apple on a table in a lit room, but not in a completely dark room?",
      steps: [
        "Step 1: The apple is not a light source. It does not glow.",
        "Step 2: In a lit room, light from a lamp or window travels in straight lines and hits the apple.",
        "Step 3: Some of that light reflects off the apple and travels straight into your eyes. Your eyes send a message to your brain.",
        "Step 4: In total darkness there is no light to reflect, so nothing reaches your eyes."
      ],
      a: "We see the apple because light reflects off it into our eyes; with no light, there is nothing to reflect."
    },
    items: [
      Q("Which of these is a light source?", ["A firefly","A mirror","The Moon","A white wall"], 0, "A firefly makes its own light with chemicals in its body. The Moon, a mirror, and a wall only reflect light that comes from somewhere else.", "Which one glows by itself?"),
      Q("Why does the Moon look bright at night?", ["It is on fire","It reflects light from the Sun","It has light bulbs","It makes its own light"], 1, "The Moon is rock. It shines because sunlight bounces off it. That is why we see different phases as different parts are lit.", "Is the Moon a light source?"),
      Q("Light travels in…", ["curvy lines","circles","straight lines","zigzags only"], 2, "Light travels in straight lines until it hits something. That is why you cannot see around a corner without a mirror.", "Think about a flashlight beam."),
      Q("A shadow forms when…", ["a mirror reflects light","light passes through glass","the Sun sets","an object blocks light"], 3, "Because light travels in straight lines, it cannot bend around an object, so a dark area forms behind it.", "Something gets in the way."),
      Q("Reflection is when light…", ["bounces off a surface","bends into water","turns into heat only","stops forever"], 0, "Reflection means bouncing back. Bending as light enters water is a different thing, called refraction, which you will learn next week.", "Re-flect, bounce back."),
      Q("Which surface gives the clearest reflection?", ["A crumpled piece of foil","A smooth mirror","A brick wall","A fuzzy blanket"], 1, "Smooth, shiny surfaces reflect light evenly, so the image is clear. Rough surfaces scatter light in many directions.", "Smooth and shiny."),
      Q("How fast does light travel?", ["About as fast as sound","About 60 miles per hour","About 186,000 miles per second","About 1 mile per minute"], 2, "Light is the fastest thing known. It is about 186,000 miles per second, much faster than sound.", "It is amazingly fast."),
      Q("If light hits a mirror at a slant, it bounces off…", ["straight back the way it came","into the mirror","in a curve","at the same angle on the other side"], 3, "Light reflects at the same angle it arrives, just like a ball bouncing off a wall at an angle.", "Like a ball off a wall."),
      Q("We see a book in a room because…", ["light reflects off the book into our eyes","the book makes light","our eyes shoot out light","the book is warm"], 0, "Most things we see are not light sources. Light from a lamp or window reflects off them and enters our eyes.", "Light must reach your eyes."),
      Q("A periscope uses two mirrors so you can…", ["make things bigger","see over or around things","make things hotter","see in the dark"], 1, "A periscope's mirrors reflect light down a tube so you can see over a wall or above water, as submarines do.", "Submarines use them."),
      Q("In the passage, which was NOT a light source?", ["The campfire","The fireflies","The full Moon","The flashlight"], 2, "The passage says the fire, fireflies, and flashlight made their own light, but the Moon only reflected sunlight.", "Paragraph 1."),
      Q("In the passage, what happened to Nora's hand shadow when she moved the flashlight closer?", ["It turned red","It got smaller","It disappeared","It got bigger"], 3, "The passage says the shadow grew bigger when the light was closer and shrank when the light moved away. A closer light is blocked over a wider angle.", "Paragraph 2."),
      Q("According to the passage, why did the lake reflection break into wiggly pieces?", ["Wind made ripples that scattered the light","The Sun went down","The trees moved","Fish swam by"], 0, "The passage explains that ripples made the surface bumpy, and a bumpy surface scatters light in many directions.", "Paragraph 3."),
      Q("In the passage, why is AMBULANCE printed backward on the front of ambulances?", ["It is a mistake","So drivers ahead can read it correctly in their mirrors","To make it look cool","Because it is a code"], 1, "Mirrors switch left and right, so backward writing looks correct in a rearview mirror.", "Last paragraph."),
      Q("The passage says Nora saw the trees in the lake reflected…", ["sideways","in color stripes","upside down","bigger than real"], 2, "The passage says she saw the trees reflected upside down in the calm water.", "Paragraph 3.")
    ],
    activities: [
      { title: "Shadow size experiment", time: "20 min",
        materials: ["flashlight", "a small toy or action figure", "a blank wall or poster board", "ruler", "paper and pencil", "a dark room"],
        steps: [
          "Stand the toy about 1 foot in front of the wall.",
          "Place the flashlight 3 feet from the toy and shine it at the toy. Measure the height of the shadow.",
          "Move the flashlight to 2 feet away. Measure again.",
          "Move it to 1 foot away. Measure again.",
          "Make a table of distance and shadow height."
        ],
        observe: "How did the shadow change as the light got closer? Use the idea that light travels in straight lines to explain why."
      },
      { title: "Bounce the beam", time: "25 min",
        materials: ["small mirror (a plastic one is safest)", "flashlight", "a small target drawn on paper", "tape", "a parent to help with the mirror"],
        steps: [
          "Tape the target to a wall. Have a parent hold or prop the mirror on a table. If the mirror is glass, let a parent handle it and keep its edges away from fingers.",
          "In a dim room, shine the flashlight at the mirror.",
          "Tilt the flashlight until the reflected spot of light lands on the target.",
          "Try moving the target. Can you still hit it by changing the angle?",
          "Draw a picture showing the path of the light as straight lines from flashlight to mirror to target."
        ],
        observe: "What did you notice about the angle the light came in and the angle it bounced out? Explain with your drawing."
      }
    ],
    think: [
      "Your friend says the Moon is a light source because it is so bright at night. Explain why she is incorrect.",
      "Explain why you cannot see around a corner, but you can see around it with a mirror. Use the word reflection."
    ]
  });

  // ---------------------------------------------------------------- WEEK 10
  C.unit("science", 10, {
    title: "Light: refraction, lenses, and color",
    standard: "S4P1",
    learn: [
      { h: "Refraction bends light", p: "Refraction is the bending of light when it passes at a slant from one material into another, like from air into water. Light changes speed in the new material, and that makes it change direction. That is why a straw in a glass of water looks broken." },
      { h: "Transparent, translucent, opaque", p: "TRANSPARENT materials, like clear glass and clean water, let almost all light through, so you can see clearly. TRANSLUCENT materials, like wax paper and frosted glass, let some light through, but things look blurry. OPAQUE materials, like wood, metal, and cardboard, block light and make shadows." },
      { h: "Prisms and color", p: "White sunlight is really a mix of colors. A prism refracts each color a different amount, spreading white light into a band of colors: red, orange, yellow, green, blue, indigo, violet (ROY G BIV). An object looks red because it reflects red light and absorbs the other colors." }
    ],
    passage: [
      "Sofia's family visited the Tellus Science Museum in Cartersville. In one room, a sign said, “Look at the pencil in the tank.” A pencil stood in a tank of water, but it looked broken at the water line. Sofia's mom explained that light was bending as it passed from the water into the air. This bending is called refraction. Light travels more slowly in water than in air, so when it crosses from one into the other at a slant, it changes direction.",
      "The next display had lenses. A lens is a curved piece of clear glass or plastic that refracts light in a planned way. A convex lens is thicker in the middle. It brings light rays together, and it can make things look bigger. Magnifying glasses use convex lenses. A concave lens is thinner in the middle. It spreads light rays apart, and things look smaller through it. Eyeglasses, cameras, microscopes, and telescopes all use lenses.",
      "Sofia then tested materials at a light table. Light shone straight through a clear plastic sheet, which was transparent. A sheet of wax paper let some light through, but the shapes behind it were fuzzy. It was translucent. A wooden block let no light through at all. It was opaque and cast a dark shadow.",
      "The best part was the prism. When a beam of white light passed through the glass triangle, it spread into a rainbow of colors on the wall. Each color bent a slightly different amount, with violet bending the most and red the least. Sofia realized rainbows in the sky work the same way. After a rain, sunlight enters raindrops, bends, bounces off the back of each drop, and bends again as it leaves. To see a rainbow, the Sun must be behind you and the raindrops in front of you.",
      "On the way home, Sofia wondered why her shirt looked green. Mom said her shirt reflects green light into her eyes and soaks up, or absorbs, the other colors."
    ],
    vocab: [
      ["refraction", "the bending of light as it passes from one material into another"],
      ["lens", "a curved piece of clear glass or plastic that bends light"],
      ["transparent", "letting almost all light pass through, so you can see clearly"],
      ["translucent", "letting some light through, but things behind it look blurry"],
      ["opaque", "blocking light completely so no light passes through"],
      ["prism", "a clear, angled piece of glass or plastic that splits white light into colors"]
    ],
    demo: {
      q: "You hold wax paper, a clear plastic cup, and a cereal box up to a window. Sort them as transparent, translucent, or opaque.",
      steps: [
        "Step 1: Ask for each one: can I see clearly through it, see only blurry light, or see nothing?",
        "Step 2: The clear plastic cup lets light through clearly, so it is transparent.",
        "Step 3: The wax paper lets light through, but you cannot see shapes clearly, so it is translucent.",
        "Step 4: The cereal box blocks all the light, so it is opaque."
      ],
      a: "Clear cup: transparent. Wax paper: translucent. Cereal box: opaque."
    },
    items: [
      Q("What is refraction?", ["Light bouncing off a mirror","Light turning into sound","Light being blocked","Light bending as it passes from one material into another"], 3, "Refraction is bending. Reflection is bouncing. Both change light's path, but in different ways.", "Bending, not bouncing."),
      Q("A straw in a glass of water looks broken because of…", ["refraction","reflection","a shadow","magnetism"], 0, "Light from the part of the straw underwater bends as it leaves the water and enters the air, so that part seems to be in a different place.", "Light crossing from water to air."),
      Q("Which material is transparent?", ["Wax paper","Clear window glass","A brick","Aluminum foil"], 1, "Clear glass lets almost all light pass through, so you see clearly. Wax paper is translucent, and brick and foil are opaque.", "You can see clearly through it."),
      Q("Frosted glass on a bathroom window is…", ["opaque","transparent","translucent","a mirror"], 2, "Frosted glass lets light in but blurs what is behind it, so it is translucent. That gives privacy while still letting in light.", "Light gets through, but blurry."),
      Q("An opaque object…", ["lets all light through","lets some light through","bends light into colors","blocks light and makes a shadow"], 3, "Opaque objects stop light completely, which is why they cast the darkest shadows.", "Think of a wooden door."),
      Q("A convex lens is…", ["thicker in the middle","thinner in the middle","flat","opaque"], 0, "Convex lenses bulge out in the middle. They bring light together and can magnify. Concave lenses cave in and are thinner in the middle.", "Concave caves in."),
      Q("A magnifying glass makes things look bigger because it uses a…", ["concave lens","convex lens","mirror","prism"], 1, "A magnifying glass is a convex lens. It bends light rays toward each other so objects look larger.", "Thicker in the middle."),
      Q("A prism splits white light into…", ["only black and white","sound","a band of colors","heat only"], 2, "White light is a mix of colors. A prism refracts each color a different amount, spreading them out into a rainbow band.", "Like a rainbow."),
      Q("Which shows the order of rainbow colors?", ["Violet, red, yellow, blue, orange, green, indigo","Blue, red, green, yellow, orange, violet, indigo","Green, red, blue, yellow, violet, orange, indigo","Red, orange, yellow, green, blue, indigo, violet"], 3, "The order is ROY G BIV: red, orange, yellow, green, blue, indigo, violet. It is always the same order.", "Remember ROY G BIV."),
      Q("A banana looks yellow because it…", ["reflects yellow light","absorbs yellow light","makes yellow light","is transparent"], 0, "We see the color an object reflects. A banana reflects yellow and absorbs most other colors.", "We see what bounces back to our eyes."),
      Q("Why is it dangerous to use a magnifying glass to focus sunlight?", ["It makes the Sun bigger","It can start a fire or burn skin","It turns the light blue","It is not dangerous"], 1, "A convex lens concentrates sunlight into a tiny, very hot spot that can burn skin or start fires. Never point one at the Sun, and never look at the Sun.", "Concentrated light is hot."),
      Q("In the passage, where did Sofia's family go?", ["A beach in Savannah","A zoo in Atlanta","The Tellus Science Museum in Cartersville","A farm in Macon"], 2, "The passage begins with Sofia's family visiting the Tellus Science Museum in Cartersville.", "First sentence."),
      Q("According to the passage, which color bends the most in a prism?", ["Red","Green","Yellow","Violet"], 3, "The passage says violet bends the most and red bends the least, which is why they are on opposite ends of the rainbow.", "Paragraph 4."),
      Q("According to the passage, where must the Sun be for you to see a rainbow?", ["Behind you","In front of you","Directly overhead","Under the ground"], 0, "The passage says the Sun must be behind you and the raindrops in front of you.", "Paragraph 4."),
      Q("In the passage, what happened to the wooden block at the light table?", ["Light passed through clearly","It let no light through and cast a shadow","It was blurry","It made a rainbow"], 1, "The passage says the wooden block let no light through, so it was opaque and cast a dark shadow.", "Paragraph 3.")
    ],
    activities: [
      { title: "The disappearing, bending pencil", time: "15 min",
        materials: ["clear plastic cup", "water", "pencil", "a coin", "an opaque mug"],
        steps: [
          "Fill the clear cup halfway with water and put the pencil in it, leaning against the side.",
          "Look at the pencil from the side at eye level. Draw what you see.",
          "Now put the coin in the bottom of the empty mug. Move your head back until the rim just hides the coin.",
          "Keep your head still while a parent or sibling slowly pours water into the mug.",
          "Watch for the coin to come back into view."
        ],
        observe: "Why did the pencil look broken, and why did the coin seem to appear? Use the word refraction."
      },
      { title: "Light test sorting", time: "20 min",
        materials: ["flashlight", "wax paper", "plastic wrap", "a paper towel", "cardboard", "a sheet of printer paper", "a clear plastic bag", "foil"],
        steps: [
          "Make a three-column chart: transparent, translucent, opaque.",
          "In a dim room, shine the flashlight at a wall.",
          "Hold each material in front of the flashlight, one at a time.",
          "Watch the wall. Is the light bright and clear, dim and fuzzy, or gone?",
          "Write each material in the correct column."
        ],
        observe: "Which material surprised you? Name one place in your home where a translucent material is more useful than a transparent one, and explain why."
      }
    ],
    think: [
      "Explain the difference between reflection and refraction. Give one real-life example of each.",
      "Why does a red shirt look red? What do you think a white shirt does with the colors of light?"
    ]
  });

  // ---------------------------------------------------------------- WEEK 11
  C.unit("science", 11, {
    title: "Sound: vibration and how sound travels",
    standard: "S4P2",
    learn: [
      { h: "Sound starts with a vibration", p: "A vibration is a quick back-and-forth movement. Every sound starts when something vibrates: a guitar string, a drum skin, or the vocal cords in your throat. When the vibrating stops, the sound stops." },
      { h: "Sound needs matter to travel", p: "The vibration passes from particle to particle through matter in waves. Sound can travel through solids, liquids, and gases. It usually moves fastest through solids and slowest through gases like air. Sound cannot travel through empty space, because there is nothing there to vibrate." },
      { h: "Echoes", p: "When sound waves hit a hard surface, they can bounce back. A reflected sound is an echo. Bats and dolphins send out sounds and listen for echoes to find food and objects in the dark." }
    ],
    passage: [
      "Put your fingers gently on the front of your throat and hum. Do you feel a buzzing? That buzzing is a vibration. Your vocal cords are moving back and forth very fast, and that motion makes sound. Every sound you have ever heard began with something vibrating.",
      "When an object vibrates, it bumps the tiny particles of matter next to it. Those particles bump the next ones, and so on, like a line of dominoes. The vibration moves outward as a sound wave. The material that carries the sound is called a medium. Air is the medium for most sounds we hear, but sound can also travel through water and through solids such as wood, metal, and the ground.",
      "Particles in a solid are packed closely together, so they pass vibrations along quickly. That is why sound travels faster in solids than in air. Jayden tested this with his sister, Kiara. She tapped softly on one end of their long wooden kitchen table. With his ear on the air above the table, Jayden barely heard it. When he pressed his ear right against the wood, the tapping sounded loud and clear.",
      "Sound also travels well through water, several times faster than through air. Humpback whales sing songs that can travel long distances underwater. Swimmers at the pool can hear someone knocking two rocks together under the water.",
      "But in outer space, there is no air or other matter. If an astronaut on a spacewalk dropped a wrench against a metal panel, the person beside her would hear nothing through the empty space. Astronauts talk to each other with radios, which send signals using radio waves, not sound waves. Radio waves are a kind of light energy and can travel through empty space."
    ],
    vocab: [
      ["vibration", "a quick back-and-forth movement"],
      ["sound wave", "a vibration that moves outward through matter"],
      ["medium", "the material, like air, water, or wood, that sound travels through"],
      ["particle", "a tiny bit of matter, too small to see"],
      ["echo", "a sound that bounces off a surface and comes back"],
      ["vocal cords", "folds in your throat that vibrate to make your voice"]
    ],
    demo: {
      q: "Why do you hear a train coming sooner by putting your ear on a metal rail than by listening through the air? (Only an adult should ever be near train tracks; this is a thinking question.)",
      steps: [
        "Step 1: Sound is a vibration that travels through a medium.",
        "Step 2: The rail is a solid. Its particles are packed tightly, so they pass vibrations along quickly.",
        "Step 3: Air is a gas. Its particles are far apart, so sound moves through it more slowly.",
        "Step 4: The sound through the metal arrives first."
      ],
      a: "Sound travels much faster through the solid metal rail than through the air."
    },
    items: [
      Q("All sounds begin with…", ["light","heat","a vibration","electricity"], 2, "A sound starts when something moves quickly back and forth. Light and electricity can power things that make sound, but the sound itself is a vibration.", "Hum and feel your throat."),
      Q("A vibration is…", ["a kind of light","a slow spin","a loud color","a quick back-and-forth movement"], 3, "Vibrations are fast back-and-forth motions. They can be so fast you cannot see them, but you can often feel them.", "Think buzzing."),
      Q("Through which can sound travel?", ["Solids, liquids, and gases","Only water","Only air","Only empty space"], 0, "Sound can travel through any matter: solids, liquids, and gases. It cannot travel through empty space.", "Remember the table and the pool."),
      Q("Sound usually travels FASTEST through…", ["air","a solid like steel","water","empty space"], 1, "Solids pass vibrations quickest because their particles are packed tightly. Sound cannot travel at all in empty space.", "Packed particles."),
      Q("Why can't sound travel in outer space?", ["It is too cold","It is too dark","There is no matter to carry the vibrations","The Sun blocks it"], 2, "Sound needs particles to bump into each other. Space is almost completely empty, so there is nothing to carry sound waves.", "What does sound need?"),
      Q("The material that sound travels through is called a…", ["magnet","lens","mirror","medium"], 3, "The medium carries the sound. Air is the medium for most of what we hear.", "Not small, not large…"),
      Q("An echo is…", ["sound bouncing off a surface and coming back","a very quiet sound","sound in space","a broken sound"], 0, "Echoes happen when sound reflects off hard surfaces like canyon walls or big empty gym walls.", "Like reflection, but with sound."),
      Q("Bats find insects in the dark by…", ["seeing very well in the dark","sending out sounds and listening for echoes","smelling only","following the Moon"], 1, "Bats use echolocation. They make high sounds and listen for the echoes to learn where things are.", "Echo + location."),
      Q("When you stop a ringing bell by grabbing it, the sound stops because…", ["you blocked the light","the bell got colder","the vibration stops","the air left"], 2, "No vibration means no sound. Holding the bell stops it from moving back and forth.", "What makes sound?"),
      Q("Which shows sound traveling through a liquid?", ["Hearing a friend talk across the room","A bell ringing on a windy day","Hearing a knock through a door","Whales hearing each other underwater"], 3, "Underwater, water is the medium. Talking across a room uses air, and a knock through a door travels through a solid.", "Water is a liquid."),
      Q("In the passage, how did Jayden hear Kiara's tapping best?", ["With his ear pressed against the wood","With his ear in the air above the table","From another room","With earmuffs on"], 0, "The passage says the tapping sounded loud and clear when he pressed his ear right against the wood, because sound travels well through solids.", "Paragraph 3."),
      Q("The passage compares how sound moves through matter to…", ["a flying bird","a line of dominoes","a rolling ball","a rainbow"], 1, "The passage says particles bump the next ones, like a line of dominoes, passing the vibration along.", "Paragraph 2."),
      Q("According to the passage, how do astronauts talk on a spacewalk?", ["By shouting","By tapping on helmets","With radios that use radio waves","They cannot communicate"], 2, "The passage says astronauts use radios, which send signals with radio waves, a kind of light energy that can travel through space.", "Last paragraph."),
      Q("The passage says humpback whales…", ["cannot hear underwater","use radios","live in rivers","sing songs that travel long distances underwater"], 3, "The passage gives humpback whale songs as an example of sound traveling well through water.", "Paragraph 4."),
      Q("In the passage, what do you feel when you hum with fingers on your throat?", ["A buzzing vibration","Heat","Nothing at all","Cold air"], 0, "The passage says you feel a buzzing, which is your vocal cords vibrating.", "Paragraph 1.")
    ],
    activities: [
      { title: "Cup-and-string telephone", time: "25 min",
        materials: ["two paper cups", "about 15 feet of string", "two paper clips", "a sharpened pencil", "a parent to help poke holes"],
        steps: [
          "Ask a parent to poke a small hole in the bottom of each cup with the pencil.",
          "Thread one end of the string through each hole from the outside in. Tie each end to a paper clip inside the cup so it cannot slip out.",
          "Each person takes a cup and walks apart until the string is pulled tight.",
          "One person talks softly into a cup while the other holds the cup to an ear.",
          "Now let the string sag, or pinch it with your fingers, and try talking again."
        ],
        observe: "What happened when the string was tight, loose, and pinched? What was the medium carrying the sound, and how do you know?"
      },
      { title: "Dancing rice drum", time: "15 min",
        materials: ["a bowl", "plastic wrap", "a rubber band", "a spoonful of uncooked rice", "a metal pot and a wooden spoon"],
        steps: [
          "Stretch plastic wrap tightly over the bowl and hold it with the rubber band.",
          "Sprinkle a few grains of rice on top.",
          "Hold the pot near the bowl (not touching) and bang it with the wooden spoon.",
          "Watch the rice. Try banging softly, then harder.",
          "Try humming loudly close to the plastic wrap."
        ],
        observe: "What made the rice move even though you did not touch the bowl? What changed when you banged harder?"
      }
    ],
    think: [
      "In many space movies, you hear loud explosions in space. Is that scientifically correct? Explain why or why not.",
      "Explain why you might hear your neighbor's music through a wall. What medium is the sound traveling through?"
    ]
  });

  // ---------------------------------------------------------------- WEEK 12
  C.unit("science", 12, {
    title: "Sound: pitch, volume, and hearing",
    standard: "S4P2",
    learn: [
      { h: "Pitch: high or low", p: "Pitch is how high or low a sound is. Faster vibrations make higher pitches. Slower vibrations make lower pitches. On instruments, shorter, thinner, or tighter strings vibrate faster and sound higher." },
      { h: "Volume: loud or soft", p: "Volume is how loud or soft a sound is. Bigger vibrations carry more energy and make louder sounds. Hitting a drum hard makes a big vibration and a loud sound. Loudness is measured in units called decibels." },
      { h: "How ears hear", p: "Your outer ear catches sound waves. They make your eardrum vibrate. Three tiny bones pass the vibrations to the cochlea, a snail-shaped part filled with fluid and tiny hair cells. The hair cells send signals along a nerve to your brain, which tells you what you heard." }
    ],
    passage: [
      "Emma's family has a music night every Friday. Her brother Caleb plays guitar, her mom plays flute, and Emma plays a small drum. One Friday, Emma wondered why all their instruments sounded so different.",
      "Caleb showed her his guitar. The thickest string made a low, rumbly note. The thinnest string made a high, bright note. Thin strings vibrate faster than thick ones. When he pressed a string down on the neck of the guitar, the part that could vibrate got shorter, and the pitch went higher. When he turned a tuning peg to tighten a string, the pitch went up too. Pitch depends on how fast something vibrates.",
      "Mom's flute is a wind instrument. When she blows across the hole, the air inside the tube vibrates. Covering holes changes the length of the vibrating air. A shorter column of air makes a higher note, and a longer column makes a lower note.",
      "Emma's drum is a percussion instrument, which means you strike it. When she tapped it gently, the drumhead barely moved, and the sound was soft. When she hit it hard, the drumhead moved farther back and forth and the sound was loud. That is volume. A bigger vibration carries more energy, so it sounds louder.",
      "Later, Mom explained how ears work. The outer ear funnels sound into the ear canal. The sound makes the thin eardrum vibrate. Three tiny bones called the hammer, the anvil, and the stirrup pass the vibration along. The stirrup is the smallest bone in the human body. Next comes the cochlea, which is filled with fluid and lined with thousands of tiny hair cells. They send messages to the brain. Very loud sounds can damage those hair cells forever, so Emma's family keeps the music at a safe level and wears ear protection at fireworks shows."
    ],
    vocab: [
      ["pitch", "how high or low a sound is"],
      ["volume", "how loud or soft a sound is"],
      ["eardrum", "a thin layer of skin inside the ear that vibrates when sound hits it"],
      ["cochlea", "a snail-shaped, fluid-filled part of the inner ear with hair cells that sense sound"],
      ["percussion", "a group of instruments that are played by striking or shaking them"],
      ["decibel", "a unit used to measure how loud a sound is"]
    ],
    demo: {
      q: "Two rubber bands are stretched over a box. One is thin and tight; the other is thick and loose. Which makes the higher pitch when plucked?",
      steps: [
        "Step 1: Pitch depends on how fast something vibrates. Faster means higher.",
        "Step 2: Thin objects vibrate faster than thick ones.",
        "Step 3: Tight objects vibrate faster than loose ones.",
        "Step 4: The thin, tight band wins on both counts."
      ],
      a: "The thin, tight rubber band makes the higher pitch because it vibrates faster."
    },
    items: [
      Q("Pitch is…", ["how loud a sound is","how high or low a sound is","how far a sound travels","how long a sound lasts"], 1, "Pitch means high or low. Loud or soft is volume. People mix these up often, so remember: a whistle is high pitch; a tuba is low pitch.", "Think of a bird chirp versus a tuba."),
      Q("Faster vibrations make…", ["lower pitch","no sound","higher pitch","softer sound"], 2, "The faster something vibrates, the higher the pitch. Slow vibrations make low sounds.", "Fast = high."),
      Q("Which string on a guitar makes the lowest note?", ["The thinnest string", "The thickest string", "A short, tight string", "None of them"], 1, "Thick strings vibrate more slowly, so they make lower pitches. Thin strings vibrate faster and sound higher.", "Thick and slow."),
      Q("Volume is…", ["the color of sound","how high or low a sound is","the speed of sound","how loud or soft a sound is"], 3, "Volume is loudness. You turn the volume up to make music louder, not higher.", "The knob on a speaker."),
      Q("Hitting a drum harder makes the sound…", ["louder","higher","quieter","slower"], 0, "A harder hit makes a bigger vibration with more energy, so the sound is louder. It does not change the pitch much.", "More energy."),
      Q("Loudness is measured in…", ["inches","decibels","degrees","pounds"], 1, "Decibels measure loudness. Whispering is quiet; a lawn mower or fireworks are loud enough to harm hearing over time.", "It starts with dec-."),
      Q("Which part of the ear vibrates first when sound enters?", ["The cochlea","The brain","The eardrum","The nerve"], 2, "Sound travels down the ear canal and makes the eardrum vibrate first. Then the tiny bones and the cochlea take over.", "It sounds like a drum."),
      Q("The snail-shaped part of the inner ear is the…", ["eardrum","stirrup","ear canal","cochlea"], 3, "The cochlea is curled like a snail shell. Hair cells inside it turn vibrations into signals for the brain.", "Snail shape."),
      Q("Where are the sounds you hear actually understood?", ["In the brain","In the outer ear","In the eardrum","In the throat"], 0, "The ear collects and sends signals, but the brain figures out what the sound is, like a voice or a dog bark.", "Signals travel to it along a nerve."),
      Q("A flute is a…", ["percussion instrument","wind instrument","string instrument","electric instrument"], 1, "In a wind instrument, vibrating air inside a tube makes the sound. Flutes, trumpets, and clarinets are wind instruments.", "You blow into it."),
      Q("Why should you protect your ears from very loud sounds?", ["Loud sounds change your eye color","Loud sounds make ears grow","Loud sounds can damage the tiny hair cells in your ears","There is no reason"], 2, "Very loud sounds can damage the hair cells in the cochlea, and those cells do not grow back. Earplugs or earmuffs help.", "Think about the cochlea."),
      Q("In the passage, what happened when Caleb pressed a guitar string down on the neck?", ["The pitch went lower","The sound stopped","The string broke","The pitch went higher"], 3, "The passage says pressing the string shortened the part that could vibrate, so the pitch went higher.", "Paragraph 2."),
      Q("In the passage, how does covering holes on the flute change the sound?", ["It changes the length of the vibrating air","It makes the flute colder","It stops all sound","It makes the flute louder only"], 0, "The passage explains that covering holes changes how long the column of vibrating air is, which changes the pitch.", "Paragraph 3."),
      Q("According to the passage, which is the smallest bone in the human body?", ["The hammer","The stirrup","The anvil","The cochlea"], 1, "The passage says the stirrup is the smallest bone in the human body. The cochlea is not a bone.", "Last paragraph."),
      Q("In the passage, what kind of instrument is Emma's drum?", ["String","Wind","Percussion","Keyboard"], 2, "The passage says the drum is a percussion instrument, which means you strike it to play it.", "Paragraph 4.")
    ],
    activities: [
      { title: "Water bottle music", time: "20 min",
        materials: ["four or five identical glass or plastic bottles (plastic is safest)", "water", "a measuring cup", "a metal spoon", "a parent nearby if using glass"],
        steps: [
          "Line up the bottles. Leave one empty and fill the others with different amounts of water, from a little to almost full.",
          "Blow gently across the top of each bottle until it makes a tone. Put them in order from lowest to highest pitch.",
          "Now gently tap each bottle near the middle with the spoon. If they are glass, tap softly with a parent watching.",
          "Put them in order from lowest to highest pitch again.",
          "Compare your two orders."
        ],
        observe: "When you blew, which bottle was highest? When you tapped, which was highest? Explain why the order might be different (hint: think about what is vibrating each time)."
      },
      { title: "Rubber band guitar", time: "20 min",
        materials: ["an empty tissue box or small open box", "4 rubber bands of different thickness", "a pencil"],
        steps: [
          "Stretch the rubber bands around the box so they cross the opening.",
          "Pluck each one and listen to its pitch.",
          "Slide the pencil under the bands near one end, like a guitar bridge. Pluck again.",
          "Pluck one band gently, then harder. Listen for a change in volume.",
          "Press one band down with a finger in the middle and pluck the shorter part."
        ],
        observe: "Which band had the highest pitch and why? What changed when you plucked harder? What changed when you made the band shorter?"
      }
    ],
    think: [
      "Explain the difference between pitch and volume. Use an example from a musical instrument for each.",
      "Describe the path a sound takes from a barking dog to your brain. Name at least three parts of the ear."
    ]
  });

  // ---------------------------------------------------------------- WEEK 13
  C.unit("science", 13, {
    title: "Forces, motion, and gravity",
    standard: "S4P3",
    learn: [
      { h: "A force is a push or a pull", p: "A force can make an object start moving, stop, speed up, slow down, or change direction. Kicking a ball is a push. Opening a drawer is a pull. Scientists measure force in units called newtons, often with a spring scale." },
      { h: "Balanced and unbalanced", p: "When forces on an object are equal and pull or push in opposite directions, they are BALANCED, and the object's motion does not change. When one force is stronger, the forces are UNBALANCED, and the object starts moving, stops, speeds up, slows down, or changes direction." },
      { h: "Gravity", p: "Gravity is a pulling force between objects. Earth's gravity pulls everything toward the center of Earth, which is why things fall down. Your weight is a measure of how hard gravity pulls on you. On the Moon, gravity is weaker, so you would weigh about one-sixth as much." }
    ],
    passage: [
      "At recess in her homeschool co-op, Grace joined a game of tug-of-war. Four kids pulled on one end of the rope, and four pulled on the other. For a long time, the red ribbon tied to the middle of the rope did not move at all. Both teams were pulling with equal force in opposite directions. The forces were balanced, so the rope stayed still.",
      "Then Grace's team dug in their heels and pulled harder. Their force became greater than the other team's. Now the forces were unbalanced, and the ribbon slid toward Grace's side. Unbalanced forces always change an object's motion. They can make it start, stop, speed up, slow down, or turn.",
      "Forces are acting on objects even when nothing seems to be happening. A book resting on a table is being pulled down by gravity. At the same time, the table pushes up on the book with an equal force. Because these forces are balanced, the book stays put.",
      "Gravity is the force that pulls objects toward each other. Every object has some gravity, but you only notice the pull of very massive objects, like Earth. When Grace tossed a ball into the air, it slowed down, stopped for a moment at the top, and then fell back to her hands. Gravity was pulling it toward Earth the whole time. Long ago, the scientist Isaac Newton helped explain that the same force that makes an apple fall also keeps the Moon traveling around Earth.",
      "Grace's coach weighed the team's soccer ball with a spring scale. The scale's spring stretched as gravity pulled the ball down, and the marks showed the force in newtons. Coach said that on the Moon, where gravity is about one-sixth as strong, the same ball would weigh much less, even though it would be the very same ball."
    ],
    vocab: [
      ["force", "a push or a pull on an object"],
      ["motion", "a change in an object's position; moving"],
      ["balanced forces", "equal forces in opposite directions that do not change an object's motion"],
      ["unbalanced forces", "forces that are not equal, so they change an object's motion"],
      ["gravity", "a pulling force between objects; Earth's gravity pulls things toward Earth's center"],
      ["weight", "a measure of how strongly gravity pulls on an object"]
    ],
    demo: {
      q: "A box sits on the floor. You push it to the right with 20 newtons, and your sister pushes it to the left with 20 newtons. What happens? What if she stops pushing?",
      steps: [
        "Step 1: Compare the forces. 20 newtons right and 20 newtons left are equal and opposite.",
        "Step 2: Equal and opposite forces are balanced, so the box's motion does not change. It stays still.",
        "Step 3: If your sister stops, only your 20-newton push remains. Now the forces are unbalanced.",
        "Step 4: Unbalanced forces change motion, so the box starts to move to the right."
      ],
      a: "With both pushing, the box stays still (balanced). When she stops, the box moves right (unbalanced)."
    },
    items: [
      Q("A force is…", ["only something heavy","a kind of light","a type of sound","a push or a pull"], 3, "Every force is a push or a pull. Some you can see, like a kick. Some you cannot see, like gravity or magnetism.", "Two simple words."),
      Q("Opening a refrigerator door is an example of a…", ["pull","push","balanced force","sound"], 0, "You pull the door toward you to open it. Closing it is usually a push.", "Which way does your hand move?"),
      Q("When forces on an object are balanced, the object…", ["always speeds up","does not change its motion","always changes direction","disappears"], 1, "Balanced forces cancel each other out. An object at rest stays at rest, and a moving object keeps moving the same way.", "Think of a tug-of-war tie."),
      Q("Which situation shows UNBALANCED forces?", ["A book resting on a shelf","A tug-of-war that is tied","A soccer ball being kicked across the field","A lamp sitting on a table"], 2, "The kick is a force that is not canceled out, so the ball's motion changes. The other three are at rest with balanced forces.", "Which one changes motion?"),
      Q("Gravity pulls objects on Earth…", ["up toward the sky","away from each other","sideways only","toward the center of Earth"], 3, "Earth's gravity pulls toward Earth's center. That is 'down' wherever you stand on the planet, even in Australia.", "Which way do things fall?"),
      Q("Your weight is a measure of…", ["how strongly gravity pulls on you","how tall you are","how fast you run","how much air is around you"], 0, "Weight is the pull of gravity on your body. With weaker gravity, like on the Moon, your weight would be less.", "It depends on gravity."),
      Q("On the Moon, you would weigh about…", ["the same as on Earth","one-sixth as much","twice as much","nothing at all"], 1, "The Moon's gravity is about one-sixth as strong as Earth's. You would still have weight, just much less.", "The Moon's gravity is weaker."),
      Q("Scientists often measure force with a…", ["thermometer","rain gauge","spring scale","prism"], 2, "A spring scale stretches when a force pulls on it, and its marks show the force, often in newtons.", "It has a spring."),
      Q("Force is measured in units called…", ["decibels","inches","degrees","newtons"], 3, "The unit of force is the newton, named for Isaac Newton. Inches measure length, degrees measure temperature, and decibels measure loudness.", "Named after a famous scientist."),
      Q("Which can a force NOT do by itself?", ["Change an object's color","Stop a moving object","Change an object's direction","Start an object moving"], 0, "Forces change motion: starting, stopping, speeding up, slowing down, or turning. Color changes have other causes.", "Forces are about motion."),
      Q("A ball thrown straight up comes back down because…", ["the air pushes it down","gravity pulls it toward Earth","it gets tired","the Sun pushes it"], 1, "Gravity pulls on the ball the whole time. It slows the ball on the way up, stops it at the top, and pulls it back down.", "What force pulls things toward Earth?"),
      Q("In the passage, why did the ribbon stay still at first?", ["The rope was tied to a tree","Nobody was pulling","Both teams pulled with equal force","Gravity held it"], 2, "The passage says both teams pulled with equal force in opposite directions, so the forces were balanced.", "Paragraph 1."),
      Q("According to the passage, what keeps a book still on a table?", ["Only gravity","The air","Magnets","Gravity pulling down and the table pushing up equally"], 3, "The passage explains that gravity pulls down while the table pushes up with an equal force, so the forces are balanced.", "Paragraph 3."),
      Q("The passage says Isaac Newton helped explain that…", ["the same force that makes an apple fall keeps the Moon traveling around Earth","the Moon has no gravity","apples fall up","only big things have gravity"], 0, "The passage says Newton connected the falling apple and the Moon's path around Earth: both are caused by gravity.", "Paragraph 4."),
      Q("In the passage, what happened to the spring when Coach weighed the ball?", ["It shrank","It stretched as gravity pulled the ball down","It broke","It got hot"], 1, "The passage says the spring stretched as gravity pulled the ball down, and the marks showed the force.", "Last paragraph.")
    ],
    activities: [
      { title: "Balanced and unbalanced tug", time: "20 min",
        materials: ["a dish towel or short jump rope", "a piece of ribbon or tape", "chalk or masking tape", "a family member"],
        steps: [
          "Tie the ribbon to the middle of the towel. Mark a line on the ground under it.",
          "Each person holds one end. Pull gently with the same strength so the ribbon stays over the line.",
          "Have one person pull a little harder. Watch the ribbon.",
          "Switch so the other person pulls harder.",
          "Stand on a soft surface like grass and do not let go suddenly, so no one falls."
        ],
        observe: "Describe what the ribbon did when the forces were balanced and when they were unbalanced. Which direction did it move, and why?"
      },
      { title: "Drop race", time: "15 min",
        materials: ["two balls of different weights but similar size (like a tennis ball and a baseball)", "a flat sheet of paper", "a crumpled sheet of paper", "a step stool and a parent to spot you"],
        steps: [
          "Predict which ball will hit the floor first if you drop them at the same moment.",
          "With a parent spotting you, stand on the step stool and hold both balls at the same height.",
          "Drop them at the same time and listen for when they land. Repeat three times.",
          "Now drop a flat sheet of paper and a crumpled sheet at the same time.",
          "Write down what happened each time."
        ],
        observe: "Did the heavier ball fall faster? Why did the flat paper fall more slowly than the crumpled paper? (Hint: think about air pushing up.)"
      }
    ],
    think: [
      "Describe a time today when you used a push and a time you used a pull. For each one, tell how the force changed an object's motion.",
      "If you dropped a hammer and a feather on the Moon, where there is no air, what do you think would happen? Explain your reasoning."
    ]
  });

  // ---------------------------------------------------------------- WEEK 14
  C.unit("science", 14, {
    title: "Friction and simple machines: lever, pulley, wheel and axle",
    standard: "S4P3",
    learn: [
      { h: "Friction", p: "Friction is a force that slows or stops motion when two surfaces rub together. Rough surfaces make more friction than smooth ones. Friction also makes heat, which is why rubbing your hands warms them. Friction can be helpful, like shoe grip and bike brakes, or it can get in the way." },
      { h: "Simple machines", p: "A simple machine is a tool with few or no moving parts that makes work easier. It can let you use less force, change the direction of a force, or move something farther or faster. The trade-off: when you use less force, you usually push over a longer distance." },
      { h: "Lever, pulley, wheel and axle", p: "A LEVER is a stiff bar that turns on a point called the fulcrum, like a seesaw. A PULLEY is a wheel with a rope in a groove, used to lift things, like on a flagpole. A WHEEL AND AXLE is a wheel attached to a rod so they turn together, like a doorknob." }
    ],
    passage: [
      "Ruby wanted to slide her heavy toy chest across the bedroom to make room for a reading nook. On the carpet, the chest barely budged. The rough carpet fibers rubbed against the bottom of the chest and created a lot of friction. When she moved it onto the smooth wooden hallway floor, it slid more easily. Smooth surfaces make less friction than rough ones. Her dad put an old towel under the chest, and it glided even better.",
      "Friction is not always a problem. Without friction, your shoes would slip on every step, and car brakes could not stop the car. Bike brakes squeeze rubber pads against the wheel to make friction and slow the bike down. Friction also turns motion into heat. Try rubbing your palms together fast. They warm up!",
      "Next, Ruby's dad needed to pry the lid off a can of paint. He slid the tip of a flat screwdriver under the lid's edge and pushed down on the handle. The screwdriver acted as a lever. The edge of the can was the fulcrum, the point where the lever turns. A small push on the long handle made a strong lift on the lid. The farther from the fulcrum you push, the less force you need.",
      "Later they raised a bird feeder up into a tree using a rope over a pulley. Pulling down on the rope made the feeder go up. A single fixed pulley does not make the load lighter, but it changes the direction of the force, so you can pull down instead of lifting up. Using two or more pulleys together can reduce the force needed.",
      "Ruby noticed simple machines everywhere. The doorknob was a wheel and axle: turning the big knob easily turned the small rod inside. Her wagon, a pencil sharpener with a crank, and a car's steering wheel all use a wheel and axle too."
    ],
    vocab: [
      ["friction", "a force that slows motion when two surfaces rub together"],
      ["simple machine", "a basic tool with few or no moving parts that makes work easier"],
      ["lever", "a stiff bar that turns on a fixed point to lift or move things"],
      ["fulcrum", "the point a lever rests and turns on"],
      ["pulley", "a wheel with a groove that holds a rope, used to lift loads or change the direction of a force"],
      ["wheel and axle", "a wheel attached to a rod (the axle) so that they turn together"]
    ],
    demo: {
      q: "You want to lift a heavy rock with a board over a small log. Should you put the log near the rock or near your hands?",
      steps: [
        "Step 1: The board is a lever, the log is the fulcrum, and the rock is the load.",
        "Step 2: The farther your hands are from the fulcrum, the less force you need.",
        "Step 3: So slide the log (fulcrum) close to the rock. That makes the part of the board you push on long.",
        "Step 4: The trade-off: you will push your end down a longer distance, but it will be easier."
      ],
      a: "Put the log close to the rock; a long handle side means you need less force to lift it."
    },
    items: [
      Q("Friction is a force that…", ["speeds things up","pulls things toward Earth","slows or stops motion when surfaces rub","only works in water"], 2, "Friction acts between touching surfaces and works against motion. Gravity is what pulls things toward Earth.", "Think of rubbing."),
      Q("Which surface would make the MOST friction for a sliding box?", ["Ice","Smooth tile","A wet, waxed floor","A rough carpet"], 3, "Rough surfaces have more bumps that catch and rub, so they make more friction. Ice and waxed floors are slippery.", "Rough or smooth?"),
      Q("Rubbing your hands together quickly makes them warm because…", ["friction makes heat","your blood gets cold","light shines on them","of gravity"], 0, "Friction turns some motion energy into heat energy.", "Friction has a side effect."),
      Q("Which is an example of HELPFUL friction?", ["A squeaky door hinge","Brakes stopping a bike","A heavy box that won't slide","Worn-out sneakers wearing down"], 1, "Bike brakes rely on friction to slow the wheel. The other examples are times friction causes trouble.", "When do we want things to stop?"),
      Q("The point a lever turns on is called the…", ["axle","pulley","fulcrum","load"], 2, "The fulcrum is the pivot point. On a seesaw, it is the middle part the board rests on.", "On a seesaw, it is in the middle."),
      Q("Which is a lever?", ["A screw","A ramp","A flagpole rope","A seesaw"], 3, "A seesaw is a bar that turns on a fulcrum, so it is a lever. A ramp is an inclined plane, a flagpole uses a pulley, and a screw is its own simple machine.", "A bar on a pivot."),
      Q("To lift a heavy load with a lever using the least force, you should push…", ["far from the fulcrum","right next to the fulcrum","on the load","under the fulcrum"], 0, "The longer the distance from the fulcrum to where you push, the less force you need.", "Long handle."),
      Q("A single fixed pulley on a flagpole helps by…", ["making the flag lighter","changing the direction of the force","making the flag move sideways","adding friction"], 1, "It lets you pull down to raise the flag up. It does not reduce the force, but pulling down is easier and safer.", "Pull down, flag goes up."),
      Q("A doorknob is an example of a…", ["lever","pulley","wheel and axle","wedge"], 2, "The knob is the wheel and the rod inside is the axle. Turning the big knob easily turns the small rod.", "It turns together with a rod."),
      Q("What do simple machines do?", ["Stop all friction","Make objects heavier","Create energy from nothing","Make work easier"], 3, "Simple machines change how much force you need or its direction. They cannot make energy from nothing.", "Why do we use tools?"),
      Q("When a machine lets you use less force, what is usually the trade-off?", ["You must push over a longer distance","The object gets heavier","You need no energy","Nothing changes"], 0, "With a long lever or a long rope through several pulleys, you push with less force but move your hands farther.", "Less force, more ___."),
      Q("In the passage, why did the toy chest slide more easily in the hallway?", ["The hallway was downhill","The smooth wooden floor made less friction","Ruby used a pulley","The chest got lighter"], 1, "The passage says the smooth hallway floor made less friction than the rough carpet.", "Paragraph 1."),
      Q("In the passage, what was the fulcrum when Dad opened the paint can?", ["The screwdriver tip","The handle","The edge of the can","The lid"], 2, "The passage says the edge of the can was the fulcrum, the point where the lever turned.", "Paragraph 3."),
      Q("In the passage, what simple machine did they use to raise the bird feeder?", ["Lever","Wheel and axle","Wedge","Pulley"], 3, "They used a rope over a pulley: pulling down raised the feeder up.", "Paragraph 4."),
      Q("The passage names which object as a wheel and axle?", ["The doorknob","The bird feeder","The paint can","The towel"], 0, "The passage says the doorknob is a wheel and axle; turning the big knob turns the small rod.", "Last paragraph.")
    ],
    activities: [
      { title: "Friction ramp test", time: "25 min",
        materials: ["a large hardback book or board", "a stack of books", "a toy car", "a towel", "foil", "sandpaper or a placemat", "a ruler or tape measure"],
        steps: [
          "Lean the board on a stack of books to make a ramp.",
          "Let the toy car roll down onto the bare floor. Measure how far it travels past the ramp.",
          "Lay the towel at the bottom and repeat. Measure.",
          "Repeat with foil, then sandpaper or a placemat.",
          "Do each surface three times and record the results in a table."
        ],
        observe: "Which surface let the car roll farthest? Which stopped it fastest? Explain using the word friction."
      },
      { title: "Ruler-and-pencil lever", time: "15 min",
        materials: ["a 12-inch ruler", "a round pencil", "a small stack of coins", "a few more coins"],
        steps: [
          "Lay the pencil on the table and set the ruler across it like a seesaw.",
          "Put a stack of 5 coins at one end (the load).",
          "Put the pencil (fulcrum) at the 3-inch mark. Add coins one at a time on the other end until the load lifts. Count them.",
          "Move the fulcrum to the 6-inch mark and try again.",
          "Move it to the 9-inch mark and try again."
        ],
        observe: "Where did the fulcrum need to be to lift the load with the fewest coins? What does that tell you about using a lever?"
      }
    ],
    think: [
      "Imagine a world with no friction at all. Describe three things that would be hard or impossible to do.",
      "Find one lever, one pulley (or a picture of one), and one wheel and axle in your home or neighborhood. Explain how each one makes a job easier."
    ]
  });

  // ---------------------------------------------------------------- WEEK 15
  C.unit("science", 15, {
    title: "Simple machines: inclined plane, wedge, and screw",
    standard: "S4P3",
    learn: [
      { h: "Inclined plane", p: "An inclined plane is a flat, slanted surface, like a ramp. It lets you raise a load by pushing it up a slope instead of lifting it straight up. A longer, gentler ramp needs less force, but you travel a longer distance." },
      { h: "Wedge and screw", p: "A WEDGE is two inclined planes back to back, thick at one end and thin at the other. It splits, cuts, or holds things, like an axe, a knife, or a doorstop. A SCREW is an inclined plane wrapped around a post. The ridges are called threads, and they turn a twisting motion into pulling or holding." },
      { h: "Six simple machines and work", p: "The six simple machines are the lever, pulley, wheel and axle, inclined plane, wedge, and screw. In science, WORK means using a force to move something a distance. If nothing moves, no work is done, even if you push very hard. Machines made of two or more simple machines are compound machines." }
    ],
    passage: [
      "Mr. Patel's moving truck was parked in front of his new house in Columbus. Inside the truck sat a heavy piano on wheels. Lifting it straight up four feet onto the porch would take a huge force that no one there could manage. So the movers set up a long metal ramp from the truck to the porch. A ramp is an inclined plane. By pushing the piano up the gentle slope, they used much less force. The trade-off was that they had to push it a longer distance. A steeper, shorter ramp would have been harder to push.",
      "Inclined planes are all around us. Wheelchair ramps, slides, and roads that zigzag up mountains all use the same idea. Long, winding mountain roads let cars climb slowly instead of driving straight up a steep slope.",
      "While unpacking, Mr. Patel's daughter Priya used a rubber doorstop to keep the front door open. The doorstop was a wedge. Its thin edge slid under the door, and its thick end pressed the door tight. Wedges are also used to split and cut. The blade of an axe is a wedge. When it strikes a log, it pushes the wood apart. Even your front teeth work like wedges when you bite into an apple.",
      "Next, Priya helped her dad build a bookshelf. The pieces were held together by screws. When she looked closely, she saw that a screw is like a ramp wrapped around a post. As her dad turned the screwdriver, the threads pulled the screw deeper into the wood a little at a time. Jar lids and the bottom of a light bulb use threads too.",
      "At the end of the day, Priya noticed that her family's tools often combined machines. Scissors use two levers with wedge-shaped blades. A wheelbarrow combines a lever with a wheel and axle. These are compound machines."
    ],
    vocab: [
      ["inclined plane", "a flat, slanted surface, such as a ramp, used to raise or lower loads"],
      ["wedge", "a simple machine that is thick at one end and thin at the other, used to split, cut, or hold"],
      ["screw", "an inclined plane wrapped around a post, used to hold things together or lift"],
      ["threads", "the spiral ridges that wind around a screw"],
      ["work", "using a force to move an object over a distance"],
      ["compound machine", "a machine made of two or more simple machines working together"]
    ],
    demo: {
      q: "You need to roll a heavy cart up onto a stage that is 3 feet high. You can use a 6-foot ramp or a 12-foot ramp. Which needs less force, and what is the trade-off?",
      steps: [
        "Step 1: Both ramps are inclined planes reaching the same 3-foot height.",
        "Step 2: The 12-foot ramp has a gentler slope. Gentler slopes need less force.",
        "Step 3: The trade-off is distance: you must push the cart 12 feet instead of 6 feet.",
        "Step 4: Choose based on what matters more: less force or a shorter trip."
      ],
      a: "The 12-foot ramp needs less force, but you must push the cart twice as far."
    },
    items: [
      Q("A ramp is an example of which simple machine?", ["Lever","Inclined plane","Pulley","Screw"], 1, "A ramp is a flat, slanted surface, which is an inclined plane. It helps you raise things by pushing instead of lifting.", "Slanted flat surface."),
      Q("Which ramp needs the LEAST force to push a box up to a porch?", ["A short, steep ramp","No ramp, just lifting","A long, gentle ramp","A ramp with stairs on it"], 2, "Gentler, longer ramps spread the climb over a longer distance, so you need less force at each moment.", "Gentle slope."),
      Q("A wedge is made of…", ["a post with no ridges","a wheel and a rope","a bar and a fulcrum","two inclined planes back to back"], 3, "A wedge is thick at one end and thin at the other, like two ramps put together. That shape lets it split or cut.", "Think of an axe head."),
      Q("Which tool is a wedge?", ["An axe blade","A flagpole","A doorknob","A seesaw"], 0, "An axe blade is a wedge that pushes wood apart. A doorknob is a wheel and axle, a flagpole uses a pulley, and a seesaw is a lever.", "It splits wood."),
      Q("A screw is…", ["two levers joined","an inclined plane wrapped around a post","a pulley with no rope","a flat wedge"], 1, "If you unwrapped the threads of a screw, they would form a long ramp. Turning the screw moves it along that ramp.", "A ramp that spirals."),
      Q("The spiral ridges on a screw are called…", ["fulcrums","axles","threads","blades"], 2, "Threads are the spiral ridges. They grip the material and pull the screw in as it turns.", "Like sewing thread wrapped around a spool."),
      Q("Which of these uses a screw?", ["A seesaw","A slide","A doorstop","A jar lid"], 3, "A jar lid has threads that twist onto the jar. A slide is an inclined plane, a doorstop is a wedge, and a seesaw is a lever.", "You twist it to open."),
      Q("In science, work is done when…", ["a force moves an object a distance","you think very hard","you push a wall that does not move","you sit still"], 0, "Work in science needs both a force and movement. Pushing a wall that does not move takes effort, but no work is done.", "Something must move."),
      Q("Which list names all six simple machines?", ["Lever, hammer, pulley, nail, ramp, saw","Lever, pulley, wheel and axle, inclined plane, wedge, screw","Wheel, gear, motor, ramp, rope, spring","Screw, bolt, nut, hammer, wrench, saw"], 1, "The six simple machines are the lever, pulley, wheel and axle, inclined plane, wedge, and screw. Other tools are made from these.", "Three from last week, three from this week."),
      Q("Scissors are a compound machine because they combine…", ["two pulleys","a screw and a ramp","levers and wedges","only one lever"], 2, "Each half of the scissors is a lever turning on the center screw, and the sharp blades are wedges that cut.", "They pivot and they cut."),
      Q("Zigzag roads up mountains are a type of…", ["lever","pulley","wheel and axle","inclined plane"], 3, "A zigzag road is a long, gentle inclined plane. Cars climb a little at a time instead of going straight up a steep slope.", "A long slanted path."),
      Q("In the passage, why did the movers use a ramp for the piano?", ["Pushing it up a gentle slope took much less force","Pianos cannot be lifted at all","The ramp was faster than stairs","The piano had no wheels"], 0, "The passage says lifting the piano straight up would take a huge force, but pushing it up the gentle ramp took much less.", "Paragraph 1."),
      Q("In the passage, what did Priya use as a wedge?", ["A screwdriver","A rubber doorstop","A ramp","A jar lid"], 1, "The passage says Priya used a rubber doorstop to keep the door open, and the doorstop was a wedge.", "Paragraph 3."),
      Q("According to the passage, what part of your body works like a wedge?", ["Your elbow","Your knee","Your front teeth","Your ear"], 2, "The passage says your front teeth work like wedges when you bite into an apple.", "Paragraph 3."),
      Q("The passage says a wheelbarrow combines…", ["an inclined plane and a screw","two screws","a pulley and a wedge","a lever with a wheel and axle"], 3, "The passage says a wheelbarrow combines a lever with a wheel and axle, making it a compound machine.", "Last paragraph.")
    ],
    activities: [
      { title: "Ramp force test", time: "25 min",
        materials: ["a rubber band", "a paper clip", "a small toy truck or a book in a shoebox", "a board or large hardback book for a ramp", "a stack of books", "a ruler"],
        steps: [
          "Hook the paper clip to the toy truck and loop the rubber band on the paper clip.",
          "Lift the truck straight up by the rubber band to the height of the book stack. Measure how long the rubber band stretches.",
          "Make a long, gentle ramp to the top of the stack. Pull the truck up the ramp slowly by the rubber band. Measure the stretch.",
          "Make the ramp shorter and steeper (same height). Pull again and measure.",
          "Record all three measurements."
        ],
        observe: "When did the rubber band stretch the least? What does that tell you about the force needed with a long ramp versus lifting straight up?"
      },
      { title: "Make a paper screw", time: "15 min",
        materials: ["paper", "a ruler", "a marker", "scissors", "a pencil"],
        steps: [
          "Draw a right triangle on paper, about 8 inches long and 4 inches tall. This is an inclined plane.",
          "Color the long slanted edge with a thick marker line.",
          "Cut out the triangle. (Ask a parent for help if you are still learning to use scissors safely.)",
          "Lay the pencil on the tall edge and roll the paper tightly around the pencil.",
          "Look at the marker line as it spirals around the pencil."
        ],
        observe: "What does the marker line look like now? Explain how this shows that a screw is an inclined plane."
      }
    ],
    think: [
      "Choose one compound machine in your home (like a can opener, bicycle, or stapler). Name the simple machines in it and explain what each one does.",
      "Your friend pushes against a brick wall for five minutes and says she did a lot of work. Using the science meaning of work, explain whether she is right."
    ]
  });

  // ---------------------------------------------------------------- WEEK 16
  C.unit("science", 16, {
    title: "Ecosystems and food webs",
    standard: "S4L1",
    learn: [
      { h: "Producers, consumers, decomposers", p: "PRODUCERS, like plants and algae, make their own food using sunlight, water, and air. CONSUMERS eat other living things: herbivores eat plants, carnivores eat animals, and omnivores eat both. DECOMPOSERS, like fungi and bacteria, break down dead plants and animals and return nutrients to the soil." },
      { h: "Food chains and food webs", p: "A food chain shows how energy passes from one living thing to the next. The arrows point from the food to the eater: grass → grasshopper → frog. A food web is many food chains linked together, because most animals eat more than one thing." },
      { h: "Energy flows from the Sun", p: "Almost all energy in an ecosystem starts with the Sun. Producers capture it, and consumers get it by eating. At each step, most energy is used for living or lost as heat, so only a small part moves on. That is why there are many more plants than top predators." }
    ],
    passage: [
      "The Okefenokee Swamp in southeast Georgia is one of the largest freshwater swamps in North America. It is a busy ecosystem, a community of living things interacting with each other and with their nonliving surroundings, like water, soil, sunlight, and air.",
      "Every food chain in the swamp starts with producers. Cypress trees, water lilies, grasses, and tiny green algae floating in the water all use sunlight to make their own food. This process is called photosynthesis. Without producers, no other living thing in the swamp could survive.",
      "Consumers get energy by eating. Insects nibble on leaves, so they are herbivores. Frogs eat the insects, and snakes eat the frogs. Animals that eat other animals are carnivores. Raccoons eat crayfish, fish, berries, and seeds, which makes them omnivores. At the top of many swamp food chains is the American alligator, which eats fish, turtles, snakes, and birds. A predator is an animal that hunts other animals, which are called its prey.",
      "When plants and animals die, decomposers go to work. Fungi, such as mushrooms, and bacteria too small to see break down dead leaves, logs, and bodies. They return nutrients to the water and soil, where producers can use them again. Decomposers are nature's recycling crew.",
      "Scientists draw food chains with arrows that show the direction energy flows. For example: algae → small fish → heron. But most animals eat more than one kind of food, so the chains overlap and connect into a food web. If one part of the web disappears, other parts are affected. If a disease killed many frogs, insects might multiply, and snakes and herons might go hungry."
    ],
    vocab: [
      ["ecosystem", "all the living and nonliving things in an area and how they interact"],
      ["producer", "a living thing, like a plant, that makes its own food using sunlight"],
      ["consumer", "a living thing that gets energy by eating other living things"],
      ["decomposer", "a living thing, like fungi or bacteria, that breaks down dead material"],
      ["food web", "many connected food chains in one ecosystem"],
      ["photosynthesis", "the process plants use to make food from sunlight, water, and carbon dioxide"]
    ],
    demo: {
      q: "Put these in a food chain and label each one: hawk, grass, rabbit.",
      steps: [
        "Step 1: Find the producer, the one that makes its own food from sunlight. That is the grass.",
        "Step 2: Find who eats the grass. The rabbit is a herbivore, a first-level consumer.",
        "Step 3: Find who eats the rabbit. The hawk is a carnivore that eats it.",
        "Step 4: Draw arrows pointing from the food to the eater, showing the way energy flows."
      ],
      a: "Sun → grass (producer) → rabbit (herbivore consumer) → hawk (carnivore consumer)."
    },
    items: [
      Q("Which living thing is a producer?", ["An oak tree","A rabbit","A mushroom","A hawk"], 0, "An oak tree makes its own food through photosynthesis, so it is a producer. A mushroom is a decomposer, not a producer, even though it grows from the ground.", "Which makes its own food?"),
      Q("An animal that eats only plants is a(n)…", ["carnivore","herbivore","omnivore","decomposer"], 1, "Herbivores eat plants. Carnivores eat meat, and omnivores eat both.", "'Herb' is a plant word."),
      Q("A raccoon eats berries and crayfish. It is a(n)…", ["herbivore","producer","omnivore","decomposer"], 2, "Eating both plants (berries) and animals (crayfish) makes the raccoon an omnivore. Humans are often omnivores too.", "'Omni' means all."),
      Q("What is the job of decomposers?", ["Make food from sunlight","Hunt prey","Eat only living plants","Break down dead things and return nutrients to the soil"], 3, "Decomposers recycle dead material into nutrients that producers can use again.", "Nature's recycling crew."),
      Q("Where does almost all the energy in a food chain start?", ["The Sun","The soil","Water","The top predator"], 0, "Producers capture the Sun's energy. Every consumer depends on that energy, passed along by eating.", "What do plants need to make food?"),
      Q("In a food chain, the arrows point…", ["from the eater to the food","from the food to the eater","always to the Sun","in random directions"], 1, "Arrows show which way energy moves. Energy goes from the grass into the rabbit that eats it, so the arrow points grass → rabbit.", "Follow the energy."),
      Q("Which is a correct food chain?", ["Hawk → snake → mouse → seeds","Mouse → seeds → hawk → snake","Seeds → mouse → snake → hawk","Snake → seeds → hawk → mouse"], 2, "It starts with a producer (seeds) and each arrow points to the animal that eats the one before.", "Start with the producer."),
      Q("A food web is…", ["one straight food chain","a list of producers only","a spider's web","many food chains connected together"], 3, "Most animals eat more than one thing, so food chains cross and connect into a web.", "Many chains linked."),
      Q("Why are there many more plants than top predators in an ecosystem?", ["Most energy is used or lost at each step, so less moves up","Predators do not need energy","Plants eat predators","Predators only live in zoos"], 0, "Only a small part of the energy at each level passes to the next. It takes a lot of plants to feed a few top predators.", "Energy gets smaller at each step."),
      Q("An animal that hunts other animals is called a…", ["producer","predator","prey","decomposer"], 1, "A predator hunts. The animal being hunted is its prey. A frog is a predator of insects but prey for a snake.", "The hunter."),
      Q("Which is a nonliving part of an ecosystem?", ["Algae","Fungi","Sunlight","A heron"], 2, "Sunlight, water, air, and soil are nonliving parts that living things depend on. Algae, fungi, and herons are all alive.", "Which one never grows or eats?"),
      Q("According to the passage, where is the Okefenokee Swamp?", ["North Georgia mountains","Off the coast of Florida in the ocean","Downtown Atlanta","Southeast Georgia"], 3, "The passage says the Okefenokee Swamp is in southeast Georgia and is one of the largest freshwater swamps in North America.", "Paragraph 1."),
      Q("The passage names which animal at the top of many swamp food chains?", ["The American alligator","The frog","The raccoon","The grasshopper"], 0, "The passage says the American alligator is at the top of many swamp food chains, eating fish, turtles, snakes, and birds.", "Paragraph 3."),
      Q("The passage calls decomposers…", ["the top predators","nature's recycling crew","the sunlight catchers","the swamp guards"], 1, "The passage calls decomposers nature's recycling crew because they return nutrients to the soil and water.", "Paragraph 4."),
      Q("According to the passage, what might happen if a disease killed many frogs?", ["Nothing would change","Alligators would turn into producers","Insects might multiply and snakes and herons might go hungry","The Sun would get brighter"], 2, "The passage explains that losing frogs would affect the web: insects would have fewer predators, and animals that eat frogs would lose food.", "Last paragraph.")
    ],
    activities: [
      { title: "Backyard food web", time: "30 min",
        materials: ["notebook", "pencil", "poster paper", "markers", "yarn or string", "tape"],
        steps: [
          "Go outside with a parent and list living things you see or know live nearby: plants, insects, birds, squirrels, worms, mushrooms.",
          "Write each one on a small square of paper. Add a Sun square too.",
          "Tape the squares onto the poster, with the Sun and producers at the bottom.",
          "Use yarn and tape (or drawn arrows) to connect each food to the animal that eats it. Arrows point toward the eater.",
          "Circle the producers in green, consumers in red, and decomposers in brown."
        ],
        observe: "Pick one living thing on your web. What would happen to the rest of the web if it disappeared? Explain."
      },
      { title: "Decomposer bag", time: "15 min, then check for 2 weeks",
        materials: ["two zip-top bags", "two slices of bread", "a few drops of water", "a marker", "tape"],
        steps: [
          "Label one bag DRY and one bag DAMP.",
          "Put a slice of bread in each bag. Sprinkle a few drops of water on the DAMP slice.",
          "Seal both bags tightly and tape them shut. Do not open them again.",
          "Put them in a warm, dark place, like a cabinet.",
          "Check them every few days and draw what you see. When you are done, throw both bags away still sealed. Mold can make some people sick, so never open or sniff the bags."
        ],
        observe: "Which bag grew mold first? Mold is a kind of fungus, a decomposer. What does it need to grow, based on your test?"
      }
    ],
    think: [
      "Explain why an ecosystem could not survive without producers. Use the word energy.",
      "Some people think decomposers are gross. Write a short argument explaining why decomposers are important to every ecosystem."
    ]
  });

  // ---------------------------------------------------------------- WEEK 17
  C.unit("science", 17, {
    title: "Adaptations for survival",
    standard: "S4L2",
    learn: [
      { h: "What is an adaptation?", p: "An adaptation is a body part or behavior that helps a living thing survive in its environment. Adaptations help with finding food, staying safe from predators, handling the weather, and raising young." },
      { h: "Physical adaptations", p: "Physical adaptations are body features, like a duck's webbed feet, a cactus's spines, or thick fur. CAMOUFLAGE is coloring or shape that helps an animal blend in. MIMICRY is when a harmless animal looks like a dangerous one, so predators leave it alone." },
      { h: "Behavioral adaptations", p: "Behavioral adaptations are things animals DO. MIGRATION is traveling a long way each year to find food or a better climate. HIBERNATION is a deep, long rest in winter when an animal's body temperature, heartbeat, and breathing slow way down to save energy." }
    ],
    passage: [
      "Georgia has mountains, forests, swamps, rivers, and a long coast, and each place is home to animals with special adaptations.",
      "In the spring, a white-tailed deer fawn lies still in tall grass. Its reddish-brown fur with white spots looks like sunlight shining through leaves. This camouflage helps the fawn hide from predators while its mother is away eating. Gray tree frogs have skin that blends in with tree bark. On the coast, a flounder lies flat on the sandy sea floor, and its color matches the sand around it.",
      "Some animals protect themselves by copying others. The eastern coral snake, found in parts of south Georgia, is venomous and has red, yellow, and black bands. The scarlet kingsnake is harmless, but it also has red, yellow, and black bands, in a different order. Many predators avoid both. Copying the look of a dangerous animal is called mimicry. Never touch any snake. Let an adult and an expert decide whether it is safe.",
      "Behavior can be an adaptation too. Every fall, tiny ruby-throated hummingbirds leave Georgia and fly south to Mexico and Central America, where flowers and insects are plentiful in winter. Many cross the Gulf of Mexico without stopping. This yearly trip is migration. North Atlantic right whales migrate the other way. They swim south to the warm waters off the Georgia and Florida coast to give birth in winter. The right whale is Georgia's state marine mammal.",
      "Other animals stay but slow down. Groundhogs in north Georgia hibernate through the coldest part of winter. Their hearts beat slowly, and their bodies cool down to save energy until spring. Opossums have a different trick. When badly frightened, an opossum may fall over and lie still as if it were dead. Many predators lose interest and walk away."
    ],
    vocab: [
      ["adaptation", "a body part or behavior that helps a living thing survive in its environment"],
      ["camouflage", "colors or patterns that help an animal blend into its surroundings"],
      ["mimicry", "when a living thing copies the look of another, often a dangerous one, for protection"],
      ["migration", "a long trip some animals make each year to find food, warmth, or a place to have young"],
      ["hibernation", "a long, deep winter rest when an animal's body slows down to save energy"],
      ["venomous", "able to inject a harmful poison, called venom, with a bite or sting"]
    ],
    demo: {
      q: "Is a duck's webbed feet a physical or behavioral adaptation? What about a bird flying south for winter?",
      steps: [
        "Step 1: Ask: is it a body part, or something the animal does?",
        "Step 2: Webbed feet are part of the duck's body, so they are a physical adaptation. They help it paddle through water.",
        "Step 3: Flying south is an action the bird does each year, so it is a behavioral adaptation called migration.",
        "Step 4: Both help the animal survive, just in different ways."
      ],
      a: "Webbed feet are physical; flying south (migration) is behavioral."
    },
    items: [
      Q("An adaptation is…", ["a kind of food","a pet trick","a change in the weather","a trait or behavior that helps a living thing survive"], 3, "Adaptations help living things survive and raise young in their environments. A pet trick is learned for people, not for survival in nature.", "It helps survival."),
      Q("Which is a PHYSICAL adaptation?", ["A porcupine's sharp quills","A bear sleeping through winter","A bird migrating","An opossum playing dead"], 0, "Quills are part of the porcupine's body, so they are physical. The other three are actions, which are behavioral adaptations.", "Body part or action?"),
      Q("Which is a BEHAVIORAL adaptation?", ["Thick fur","Migration","Webbed feet","A long beak"], 1, "Migration is something an animal does. Fur, webbed feet, and beaks are body parts, which are physical adaptations.", "Something an animal does."),
      Q("Camouflage helps an animal…", ["breathe underwater","run faster","blend into its surroundings","grow bigger"], 2, "Camouflage lets an animal hide from predators or sneak up on prey by matching its surroundings.", "Think of a fawn in the grass."),
      Q("A harmless animal that looks like a dangerous one is using…", ["camouflage","migration","hibernation","mimicry"], 3, "Mimicry means copying the look of another animal. Camouflage is blending into the background, which is different.", "It mimics, or copies."),
      Q("The viceroy butterfly looks a lot like the bad-tasting monarch butterfly. This is an example of…", ["mimicry","hibernation","migration","decomposition"], 0, "Birds that learn monarchs taste bad tend to avoid viceroys too, because they look alike. That is mimicry.", "Looking like another animal."),
      Q("Hibernation helps animals survive winter by…", ["helping them find more food","slowing their bodies down to save energy","changing their fur to red","letting them fly south"], 1, "In winter food is scarce. Hibernating animals slow their heartbeat, breathing, and body temperature to use very little energy.", "Saving energy."),
      Q("A cactus has spines and a thick stem that stores water. These help it live in…", ["a pond","the Arctic ice","a dry desert","the deep ocean"], 2, "Spines protect it from thirsty animals, and the thick stem stores water for long dry spells. These are physical adaptations for dry places.", "Where is water scarce?"),
      Q("A duck's webbed feet help it…", ["climb trees","see at night","dig tunnels","swim"], 3, "Webbed feet work like paddles, pushing against water. This physical adaptation suits life in ponds and rivers.", "Think paddles."),
      Q("Why might a thick coat of fur be a poor adaptation for an animal in a hot desert?", ["It would make the animal too hot","It would make it too fast","It would help it swim","It would make it invisible"], 0, "Adaptations must fit the environment. Thick fur traps heat, which helps in cold places but could cause overheating in a desert.", "Fur keeps heat in."),
      Q("In the passage, how does the fawn's coat help it?", ["It keeps it warm in snow","Its spots look like sunlight through leaves, so it can hide","It scares predators","It helps it swim"], 1, "The passage says the fawn's spotted coat looks like sunlight shining through leaves, which is camouflage.", "Paragraph 2."),
      Q("According to the passage, which snake is harmless?", ["The eastern coral snake", "The scarlet kingsnake", "Both are venomous", "Neither is described"], 1, "The passage says the scarlet kingsnake is harmless but has similar colors to the venomous coral snake. Even so, never touch any snake.", "Paragraph 3."),
      Q("According to the passage, where do ruby-throated hummingbirds go in winter?", ["North to Canada","Deep underground","Mexico and Central America","The Okefenokee Swamp"], 2, "The passage says they fly south to Mexico and Central America, many crossing the Gulf of Mexico without stopping.", "Paragraph 4."),
      Q("The passage says North Atlantic right whales come to the Georgia coast in winter to…", ["hibernate","build nests","hunt alligators","give birth"], 3, "The passage says right whales swim south to warm waters off Georgia and Florida to give birth in winter.", "Paragraph 4."),
      Q("In the passage, what does a badly frightened opossum sometimes do?", ["Falls over and lies still as if dead","Climbs to the top of a tree and sings","Changes color","Migrates to Mexico"], 0, "The passage describes the opossum falling over and lying still, which can make predators lose interest.", "Last paragraph.")
    ],
    activities: [
      { title: "Camouflage hunt", time: "20 min",
        materials: ["about 20 toothpicks or pipe cleaner pieces in different colors (green, brown, red, yellow, blue)", "a patch of grass", "a timer", "a family helper"],
        steps: [
          "Have a family member scatter the colored pieces in a small patch of grass while you look away.",
          "Set a timer for 1 minute. Pretend you are a hungry bird and pick up as many pieces as you can.",
          "Sort the pieces you found by color and count them.",
          "Have your helper count the pieces still left in the grass.",
          "Make a simple bar graph of colors found."
        ],
        observe: "Which colors were easiest to find, and which were hardest? What does this tell you about camouflage and survival?"
      },
      { title: "Design a creature", time: "30 min",
        materials: ["paper", "colored pencils or markers"],
        steps: [
          "Choose a Georgia habitat: mountain forest, swamp, salt marsh, or sandy beach.",
          "Write three facts about that habitat (weather, food, predators).",
          "Invent an animal that could live there. Give it at least two physical adaptations.",
          "Give it at least one behavioral adaptation.",
          "Draw your animal in its habitat and label each adaptation."
        ],
        observe: "Explain how each adaptation helps your creature survive in that habitat. What would happen if it were moved to a very different habitat?"
      }
    ],
    think: [
      "Choose a Georgia animal (such as a brown thrasher, gopher tortoise, or alligator). Describe one physical and one behavioral adaptation it might have, and explain how each helps it survive.",
      "Explain the difference between camouflage and mimicry. Give an example of each."
    ]
  });

  // ---------------------------------------------------------------- WEEK 18
  C.unit("science", 18, {
    title: "Fossils, extinction, and changing environments",
    standard: "S4L2",
    learn: [
      { h: "When environments change", p: "Environments can change because of drought, floods, fire, storms, or human actions like building and pollution. When this happens, living things must adapt, move to a new place, or they may die out. Animals with adaptations that fit the new conditions are more likely to survive." },
      { h: "Extinct and endangered", p: "A species is EXTINCT when no members are left alive anywhere. Dinosaurs (other than birds) and the passenger pigeon are extinct. A species is ENDANGERED when so few are left that it could become extinct. People can help by protecting habitats." },
      { h: "Fossils tell stories", p: "A fossil is the remains or traces of a living thing from long ago, usually preserved in rock. Fossils can be bones, shells, teeth, leaf prints, or footprints. They show what lived long ago and what the environment was like." }
    ],
    passage: [
      "If you hunt along certain creek beds in middle and south Georgia, you might find a small, shiny, triangle-shaped object. It could be a fossil shark tooth! But sharks live in the ocean. How did their teeth end up in the middle of Georgia? Fossils like these tell scientists that, millions of years ago, the ocean covered much of what is now southern Georgia. The environment has changed a great deal.",
      "Most fossils form when a plant or animal is buried quickly in mud or sand. Over a very long time, more layers pile up and press the bottom layers into rock. Hard parts like bones, teeth, and shells are most likely to become fossils. Sometimes the body dissolves away and leaves a hollow shape in the rock, called a mold. If minerals later fill the mold, they make a cast. Footprints and burrows are trace fossils, because they show what an animal did, not its body.",
      "Fossils also show that many living things are now extinct. Dinosaurs ruled the land for millions of years, but the last of them, except for the ancestors of birds, died out about 66 million years ago. Scientists think a giant space rock hit Earth and quickly changed the climate. Many species could not adapt fast enough.",
      "Extinction can happen in recent times too. Passenger pigeons once flew across America in flocks of millions. People hunted them in huge numbers and cut down the forests where they lived. The last known passenger pigeon, named Martha, died in a zoo in Cincinnati in 1914.",
      "There is good news, though. Bald eagles became rare in the 1900s, partly because a chemical used to kill insects made their eggshells thin and easy to break. After people banned that chemical and protected the birds, eagles came back. Today bald eagles nest in Georgia again. When people care for habitats, living things have a better chance to survive."
    ],
    vocab: [
      ["fossil", "the remains or traces of a living thing from long ago, preserved in rock"],
      ["extinct", "no longer existing anywhere; every member of the species has died"],
      ["endangered", "so few left alive that the species could become extinct"],
      ["habitat", "the natural home where a plant or animal lives and finds what it needs"],
      ["trace fossil", "a fossil of something an animal did, like a footprint or burrow, rather than its body"],
      ["species", "one particular kind of living thing, such as the bald eagle"]
    ],
    demo: {
      q: "Scientists find fossil seashells in rock on top of a hill far from any ocean. What can they conclude?",
      steps: [
        "Step 1: Ask what kind of animal made the fossil. Seashells come from animals that live in water, often the ocean.",
        "Step 2: Fossils form where the living thing was buried, so the shell animals lived right there long ago.",
        "Step 3: Today the place is a dry hill. So the environment must have changed over a long time.",
        "Step 4: Make the conclusion from the evidence."
      ],
      a: "Long ago, that land was covered by water, so the environment has changed from sea to dry land."
    },
    items: [
      Q("A fossil is…", ["a new kind of rock","the remains or traces of a living thing from long ago","a living animal","a type of crystal"], 1, "Fossils are evidence of ancient life, like bones, shells, leaf prints, or footprints preserved in rock.", "Evidence of ancient life."),
      Q("Which is a TRACE fossil?", ["A dinosaur bone","A fossil shark tooth","A dinosaur footprint in rock","A fossil shell"], 2, "A footprint shows what an animal did, not part of its body, so it is a trace fossil. Bones, teeth, and shells are body fossils.", "It shows what the animal did."),
      Q("A species is extinct when…", ["only a few are left","it is asleep for winter","it moves to a new place","no members are left alive anywhere"], 3, "Extinct means gone forever. 'Only a few left' describes endangered species, which can still be saved.", "Gone forever."),
      Q("An endangered species is one that…", ["has so few members it could become extinct","is completely gone","is dangerous to people","lives only in zoos"], 0, "Endangered means at risk of extinction. People can help by protecting the animals and their habitats.", "In danger of disappearing."),
      Q("Which can cause an environment to change?", ["Drought", "Floods", "Building a new shopping center", "All of these"], 3, "Natural events like drought and floods, and human actions like building, can all change habitats.", "Think of both nature and people."),
      Q("When its environment changes, a living thing may…", ["always stay the same and be fine","adapt, move away, or die out","turn into a different animal overnight","become a fossil right away"], 1, "Living things that cannot cope with new conditions must move or may not survive. Adapting over many generations is also possible.", "Three choices."),
      Q("Fossils usually form in…", ["ice cubes","melted lava","sedimentary rock made from layers of mud and sand","clouds"], 2, "Fossils form when living things are buried in mud or sand that slowly becomes layered rock. Hot lava would destroy remains.", "Buried in layers."),
      Q("Which parts of an animal are MOST likely to become fossils?", ["Skin and hair","Muscles","Eyes and feathers only","Bones, teeth, and shells"], 3, "Hard parts last long enough to be buried and turned to stone. Soft parts usually rot away first.", "Hard parts last."),
      Q("Review: in a food chain, a mushroom is a…", ["decomposer","producer","herbivore","carnivore"], 0, "Mushrooms are fungi that break down dead material. They do not make food from sunlight, so they are not producers.", "Remember week 16."),
      Q("Review: a thick-furred animal moving to a hot desert would likely…", ["do great","struggle, because its adaptation does not fit","turn into a cactus","grow wings"], 1, "Adaptations fit a certain environment. Thick fur helps in the cold but would make an animal overheat in a desert.", "Adaptations must match the place."),
      Q("According to the passage, what do fossil shark teeth in middle Georgia show?", ["Sharks once lived in rivers","Someone dropped them there","The ocean once covered much of southern Georgia","Sharks can walk"], 2, "The passage explains that shark tooth fossils show the ocean covered much of southern Georgia millions of years ago.", "Paragraph 1."),
      Q("In the passage, what is a mold fossil?", ["A fuzzy fungus","A fossil filled with minerals","A footprint","A hollow shape left in rock after a body dissolves"], 3, "The passage says a mold is a hollow shape left when the body dissolves. A cast forms when minerals fill the mold.", "Paragraph 2."),
      Q("According to the passage, about how long ago did the last dinosaurs (except bird ancestors) die out?", ["About 66 million years ago","About 6,600 years ago","About 66 years ago","About 66 billion years ago"], 0, "The passage says about 66 million years ago, likely after a giant space rock changed the climate.", "Paragraph 3."),
      Q("In the passage, what was the name of the last known passenger pigeon?", ["Georgia","Martha","Eagle","Cincinnati"], 1, "The passage says the last known passenger pigeon, Martha, died in a Cincinnati zoo in 1914.", "Paragraph 4."),
      Q("According to the passage, how did bald eagles come back?", ["They learned to swim","They migrated to Mexico","People banned a harmful chemical and protected the birds","They grew thicker eggshells on their own overnight"], 2, "The passage says a chemical made eggshells thin; after it was banned and eagles were protected, their numbers recovered.", "Last paragraph.")
    ],
    activities: [
      { title: "Make a mold and cast fossil", time: "30 min, plus overnight drying",
        materials: ["play dough or modeling clay", "a seashell, leaf, or toy dinosaur", "a paper cup", "white school glue or plaster of Paris", "a parent to help mix plaster"],
        steps: [
          "Press a flat piece of clay into the bottom of the paper cup.",
          "Push the shell or toy firmly into the clay, then carefully lift it out. The print left behind is a mold fossil.",
          "Ask a parent to mix a small amount of plaster of Paris (or simply fill the mold with white school glue). Plaster dust should not be breathed in, so a parent should do the mixing.",
          "Pour it into the mold and let it dry overnight.",
          "Tear away the cup and peel off the clay to reveal your cast fossil."
        ],
        observe: "What is the difference between your mold and your cast? Which kind of real fossil does each one model?"
      },
      { title: "Habitat change game", time: "20 min",
        materials: ["20 paper squares labeled food, water, or shelter", "a few stuffed animals or toy figures", "a family helper"],
        steps: [
          "Spread the squares on the floor. This is a healthy habitat.",
          "Each toy animal needs one food, one water, and one shelter square to survive. See how many animals the habitat can support.",
          "Your helper announces a change, like \"drought\" (remove half the water squares) or \"new road\" (remove five shelter squares).",
          "Count again. How many animals can survive now?",
          "Try a helpful change, like \"new park\" (add five squares)."
        ],
        observe: "How did each change affect the number of animals? What can people do to help animals when habitats change?"
      }
    ],
    think: [
      "Explain how scientists can use fossils to learn that an environment has changed. Use the Georgia shark teeth as your example.",
      "Choose one way people can help keep animals from becoming endangered. Explain why it would work."
    ]
  });

  // ---------------------------------------------------------------- WEEK 19
  C.unit("science", 19, {
    title: "Grade 5 preview: volcanoes and earthquakes",
    standard: "S5E1",
    learn: [
      { h: "Constructive and destructive", p: "Earth's surface is always changing. CONSTRUCTIVE processes build up land, such as volcanoes adding new rock or rivers dropping sand to form a delta. DESTRUCTIVE processes tear down land, such as earthquakes, landslides, and erosion." },
      { h: "Volcanoes", p: "A volcano is an opening in Earth's crust where melted rock escapes. Melted rock underground is called magma. Once it reaches the surface, it is called lava. When lava cools and hardens, it becomes new rock, so volcanoes are constructive. Eruptions can also be destructive to forests and towns nearby." },
      { h: "Earthquakes", p: "Earth's outer layer is broken into huge pieces called plates that move very slowly. When rocks along a crack called a fault suddenly slip, the ground shakes. That is an earthquake. Scientists measure earthquakes with a seismometer. If one happens, drop, cover, and hold on." }
    ],
    passage: [
      "Earth may feel solid and still under your feet, but it is always changing. Some changes are slow, taking thousands or millions of years. Others happen in minutes. Scientists sort these changes into two groups. Constructive processes build land up, and destructive processes break land down.",
      "To understand volcanoes and earthquakes, it helps to picture Earth's layers. The outer layer, the crust, is a thin shell of rock. Beneath it lies the mantle, a thick layer of extremely hot rock that can flow very slowly, like thick putty. At the center are the outer core and the inner core. The crust is cracked into giant pieces called tectonic plates. They float on the mantle and move only a few inches a year, about as fast as your fingernails grow.",
      "Where plates pull apart or one slides under another, melted rock called magma can push upward. When magma breaks through the surface, it is called lava, and the opening is a volcano. Lava cools into new rock. The Hawaiian Islands were built by lava from volcanoes rising from the sea floor, a powerful example of a constructive process. But eruptions can also be destructive. When Mount St. Helens in Washington State erupted in 1980, the blast flattened forests for miles around.",
      "Earthquakes happen when plates grind past each other. Stress builds up in the rocks along a fault until the rocks suddenly slip. Energy travels outward in waves that shake the ground. Earthquakes can cause landslides, crack roads, and knock down buildings, so they are destructive. Many earthquakes and volcanoes happen around the edges of the Pacific Ocean, in a zone nicknamed the Ring of Fire.",
      "Georgia is far from the edges of plates, so strong earthquakes are rare here, and there are no active volcanoes. Still, if you ever feel an earthquake, drop to your hands and knees, take cover under a sturdy table, and hold on until the shaking stops."
    ],
    vocab: [
      ["constructive process", "a natural process that builds up Earth's surface"],
      ["destructive process", "a natural process that breaks down or tears away Earth's surface"],
      ["magma", "melted rock beneath Earth's surface"],
      ["lava", "melted rock that has reached Earth's surface"],
      ["tectonic plates", "giant, slowly moving pieces of Earth's crust"],
      ["fault", "a crack in Earth's crust where rocks can slip and cause earthquakes"]
    ],
    demo: {
      q: "A volcano erupts. Lava flows into the ocean and forms new land, but it also burns a nearby forest. Is the eruption constructive or destructive?",
      steps: [
        "Step 1: Recall the meanings. Constructive builds land up. Destructive breaks land down or destroys what is on it.",
        "Step 2: Lava cooling into new land adds to Earth's surface. That part is constructive.",
        "Step 3: Burning the forest destroys what was there. That part is destructive.",
        "Step 4: One event can be both. Explain each part with evidence."
      ],
      a: "It is both: constructive because cooled lava builds new land, and destructive because it destroys the forest."
    },
    items: [
      Q("A constructive process…", ["stops all change","only happens in space","always destroys land","builds up Earth's surface"], 3, "Construct means to build. Lava adding new rock and rivers dropping sand are constructive processes.", "Construction workers build."),
      Q("Which is a destructive process?", ["An earthquake causing a landslide","A river building a delta","Lava cooling into new island land","Sand piling up into a dune"], 0, "A landslide tears land away, so it is destructive. The other three add material and build land up.", "Which one tears land down?"),
      Q("Melted rock UNDER Earth's surface is called…", ["lava","magma","fault","crust"], 1, "It is magma while underground and lava once it reaches the surface. Same material, different place.", "Underground name."),
      Q("Melted rock that reaches Earth's surface is called…", ["mantle","magma","lava","sediment"], 2, "Once magma erupts out of a volcano, we call it lava. When lava cools, it hardens into new rock.", "It flows out of the volcano."),
      Q("Earth's thin, rocky outer layer is the…", ["core","mantle","magma","crust"], 3, "The crust is the outer shell we live on. It is thin compared to the mantle and core beneath it.", "Like the crust on bread."),
      Q("Tectonic plates move about…", ["a few inches a year","100 miles an hour","a mile a day","not at all"], 0, "Plates move slowly, about as fast as fingernails grow. Over millions of years, that adds up to huge distances.", "Fingernail speed."),
      Q("An earthquake happens when…", ["clouds collide","rocks along a fault suddenly slip","the Moon pulls on the ocean","a volcano cools down"], 1, "Stress builds in rocks along a fault until they slip suddenly, sending shaking waves through the ground.", "Think of the word fault."),
      Q("Scientists measure earthquakes with a…", ["barometer","thermometer","seismometer","telescope"], 2, "A seismometer records ground shaking. 'Seismo' comes from a Greek word for shaking or earthquake.", "It starts with seis-."),
      Q("During an earthquake, you should…", ["run outside under power lines","get in the bathtub","stand in a doorway near glass","drop, cover, and hold on"], 3, "Dropping to the ground, covering under sturdy furniture, and holding on protects you from falling objects.", "Three safety words."),
      Q("The 'Ring of Fire' is found around the…", ["Pacific Ocean","Atlantic Ocean","Gulf of Mexico","Arctic Ocean"], 0, "Many volcanoes and earthquakes happen around the edges of the Pacific Ocean, where plates meet.", "The biggest ocean."),
      Q("Why can a volcano be called both constructive and destructive?", ["It only makes sound","It builds new land but can destroy things nearby","It never changes land","It turns water into ice"], 1, "Cooling lava builds land up, while eruptions can destroy forests, homes, and fields.", "Two results from one event."),
      Q("According to the passage, the mantle can flow slowly like…", ["water","air","thick putty","glass"], 2, "The passage compares the mantle to thick putty, very hot rock that flows very slowly.", "Paragraph 2."),
      Q("The passage gives which islands as an example of a constructive process?", ["Greenland","Georgia's barrier islands","The islands of Japan","The Hawaiian Islands"], 3, "The passage says the Hawaiian Islands were built by lava from volcanoes rising from the sea floor.", "Paragraph 3."),
      Q("According to the passage, what happened when Mount St. Helens erupted in 1980?", ["The blast flattened forests for miles","It made a new ocean","It stopped all earthquakes","Nothing changed"], 0, "The passage describes the blast flattening forests for miles around, a destructive effect.", "Paragraph 3."),
      Q("According to the passage, why are strong earthquakes rare in Georgia?", ["Georgia has no rocks","Georgia is far from the edges of plates","Georgia is too warm","Georgia's mountains block them"], 1, "The passage says Georgia is far from plate edges, where most strong earthquakes happen.", "Last paragraph.")
    ],
    activities: [
      { title: "Model eruption", time: "25 min",
        materials: ["a small plastic bottle or cup", "a baking pan or tray", "play dough or a paper cone", "3 tablespoons baking soda", "1/2 cup vinegar", "a few drops of dish soap", "red food coloring", "safety glasses or sunglasses"],
        steps: [
          "Set the bottle in the middle of the tray. Shape play dough around it like a mountain, leaving the top open.",
          "Put the baking soda and a drop of dish soap into the bottle.",
          "Add a few drops of red food coloring to the vinegar in a cup.",
          "Put on safety glasses. With a parent nearby, pour the vinegar into the bottle and step back.",
          "Watch the foam flow down the sides. Let it dry and repeat to see layers build up. Never put a lid on the bottle."
        ],
        observe: "How is your model like a real volcano, and how is it different? (Real lava is melted rock, not foam.) How did the layers you made show a constructive process?"
      },
      { title: "Graham cracker plates", time: "20 min",
        materials: ["2 graham crackers", "frosting or peanut butter (check for allergies)", "a paper plate", "a cup of water"],
        steps: [
          "Spread a thick layer of frosting on the plate. This is the mantle.",
          "Lay two graham cracker halves side by side on the frosting. These are plates.",
          "Slowly push the crackers apart. Watch the frosting (magma) rise in the gap.",
          "Dip the edges of two cracker halves in water for a second. Push them together slowly and watch the edges crumple up.",
          "Lay two dry halves side by side and slide them past each other in opposite directions. Notice how they catch and jerk."
        ],
        observe: "Which motion made a model mountain? Which was like an earthquake along a fault? Explain what each motion shows about real plates."
      }
    ],
    think: [
      "Explain why one natural event, like a volcano, can be both constructive and destructive. Give evidence for each side.",
      "Write a short earthquake safety guide for a younger child. Explain the reason for each step."
    ]
  });

  // ---------------------------------------------------------------- WEEK 20
  C.unit("science", 20, {
    title: "Grade 5 preview: weathering, erosion, and Georgia landforms",
    standard: "S5E1",
    learn: [
      { h: "Weathering", p: "Weathering is the breaking of rock into smaller pieces. Water freezing in cracks, plant roots growing into rock, and wind blowing sand can break rocks apart. Chemicals in water and air can also slowly change and weaken rock. Weathering breaks rock, but it does not move it." },
      { h: "Erosion and deposition", p: "Erosion is the moving of weathered rock and soil from one place to another by water, wind, ice, or gravity. Deposition is when the moving water or wind slows down and drops that material in a new place, building up landforms like deltas, sandbars, and dunes." },
      { h: "Georgia landforms", p: "Stone Mountain is a huge dome of granite-type rock that formed deep underground and was uncovered as softer rock above it wore away. Providence Canyon formed quickly from erosion after poor farming in the 1800s. Georgia's barrier islands are shaped by waves and currents depositing and moving sand." }
    ],
    passage: [
      "Georgia is a great place to see how weathering, erosion, and deposition shape the land. These three processes work as a team. First, weathering breaks rock into smaller pieces. Next, erosion carries the pieces away. Finally, deposition drops them somewhere new.",
      "Stone Mountain, near Atlanta, rises about 825 feet above the land around it. It is made of a hard, granite-type rock that formed from magma that cooled slowly, deep underground, a very long time ago. Over millions of years, the softer rock that once covered it was weathered and eroded away, leaving the hard dome exposed. Weathering still works on it today. Rain water collects in small dips on top, and when it freezes in cracks, it expands and pries off thin pieces. This is called ice wedging.",
      "In southwest Georgia, Providence Canyon tells a different story. It is sometimes called Georgia's Little Grand Canyon. In the 1800s, farmers cleared the forest and plowed the land in ways that let rainwater rush straight down the slopes. With no tree roots to hold the soft soil, small ditches grew into deep gullies. Today some of the canyon walls are about 150 feet tall, and they show colorful layers of soil in shades of pink, orange, red, and white. Most of this canyon formed in only about the last 200 years, which is very fast for a landform.",
      "Along the coast are Georgia's barrier islands, like Tybee, St. Simons, Jekyll, and Cumberland, the largest. These long, narrow islands are built and reshaped by deposition. Waves and currents carry sand along the shore and drop it, while storms wash some away. The islands help protect the salt marshes and mainland from storm waves.",
      "Erosion and deposition are opposites that work together. The sand on a Georgia beach today may have been weathered from mountains far upstream and carried to the sea by rivers."
    ],
    vocab: [
      ["weathering", "the breaking down of rock into smaller pieces"],
      ["erosion", "the carrying away of rock and soil by water, wind, ice, or gravity"],
      ["deposition", "the dropping of sediment in a new place by water, wind, or ice"],
      ["sediment", "small pieces of rock, sand, and soil that can be moved and dropped"],
      ["ice wedging", "weathering that happens when water freezes in a crack, expands, and splits the rock"],
      ["barrier island", "a long, narrow island of sand that runs along a coast and shields it from waves"]
    ],
    demo: {
      q: "A heavy rain washes soil off a bare hillside and into a creek. Downstream, the creek slows and leaves a pile of mud. Name the processes.",
      steps: [
        "Step 1: Before the rain, rock on the hill had already been broken into soil. That breaking is weathering.",
        "Step 2: The rain carried the soil down the hill and into the creek. Moving sediment is erosion.",
        "Step 3: Where the creek slowed, it dropped the mud. Dropping sediment is deposition.",
        "Step 4: Put them in order."
      ],
      a: "Weathering broke the rock into soil, erosion carried the soil away, and deposition dropped it as mud downstream."
    },
    items: [
      Q("Weathering is…", ["the moving of soil to a new place","the dropping of sand in a new place","the breaking of rock into smaller pieces","a kind of weather forecast"], 2, "Weathering breaks rock but does not move it. Moving it is erosion, and dropping it is deposition.", "Breaking, not moving."),
      Q("Erosion is…", ["a type of fossil","the melting of rock","the cooling of lava","the carrying away of rock and soil"], 3, "Erosion moves weathered material using water, wind, ice, or gravity.", "Moving."),
      Q("Deposition happens when…", ["water or wind slows down and drops sediment","rock breaks in a crack","a volcano erupts","a plant grows"], 0, "When moving water or wind slows, it can no longer carry its load, so it drops sediment and builds up land.", "Dropping off."),
      Q("Which is the correct order?", ["Erosion, weathering, deposition","Weathering, erosion, deposition","Deposition, erosion, weathering","Weathering, deposition, erosion"], 1, "First rock breaks (weathering), then it is carried (erosion), then it is dropped (deposition).", "Break, move, drop."),
      Q("Water freezing in a crack and splitting a rock is called…", ["deposition","a delta","ice wedging","an earthquake"], 2, "Water expands when it freezes, pushing the crack wider. Over many freezes, the rock splits. This is a kind of weathering.", "Ice works like a wedge."),
      Q("Which is an example of deposition?", ["Rain washing soil off a hill","Roots cracking a sidewalk","Wind carrying sand away","A river building a delta at its mouth"], 3, "A delta forms where a river slows and drops sediment. Roots cracking rock is weathering; wind and rain carrying material is erosion.", "Something is built up."),
      Q("Which is NOT an agent of erosion?", ["Sunlight alone","Wind","Ice","Water"], 0, "Water, wind, ice, and gravity carry material away. Sunlight can warm rock but does not carry it anywhere.", "Which one cannot carry things?"),
      Q("How do plants help prevent erosion?", ["They make the soil softer","Their roots hold soil in place","They pull rocks out of the ground","They make more rain"], 1, "Roots act like a net that holds soil together. Bare soil erodes much faster, as Providence Canyon shows.", "Think of roots like a net."),
      Q("Stone Mountain is made mostly of…", ["sand","ice","a hard, granite-type rock","clay soil"], 2, "Stone Mountain is made of hard granite-type rock that formed underground from slowly cooling magma.", "It is a giant dome of hard rock."),
      Q("Providence Canyon formed mainly because of…", ["a volcano","an earthquake","a meteor","erosion after forests were cleared and land was farmed poorly"], 3, "Without tree roots holding the soil, rainwater carved deep gullies quickly. It is a lesson in how human actions can speed up erosion.", "What happened in the 1800s?"),
      Q("Georgia's barrier islands are shaped mainly by…", ["waves and currents moving and depositing sand","volcanoes","glaciers","earthquakes"], 0, "Waves and currents keep moving sand along the coast, building up and reshaping the islands.", "The ocean at work."),
      Q("According to the passage, about how high does Stone Mountain rise above the land around it?", ["About 82 feet","About 825 feet","About 8,250 feet","About 82,500 feet"], 1, "The passage says Stone Mountain rises about 825 feet above the land around it.", "Paragraph 2."),
      Q("According to the passage, about how tall are some walls of Providence Canyon?", ["About 15 feet","About 1,500 feet","About 150 feet","About 15,000 feet"], 2, "The passage says some canyon walls are about 150 feet tall, showing colorful soil layers.", "Paragraph 3."),
      Q("The passage says Providence Canyon formed in…", ["millions of years ago from a volcano","exactly one day","about 66 million years","only about the last 200 years"], 3, "The passage says most of the canyon formed in only about the last 200 years, which is very fast for a landform. Most landforms take thousands or millions of years.", "Paragraph 3."),
      Q("According to the passage, which is Georgia's largest barrier island?", ["Cumberland","Jekyll","St. Simons","Tybee"], 0, "The passage lists Tybee, St. Simons, Jekyll, and Cumberland, and names Cumberland as the largest.", "Paragraph 4.")
    ],
    activities: [
      { title: "Erosion tray", time: "30 min (do it outside)",
        materials: ["a baking pan or plastic tray", "soil or sand", "a small piece of sod, moss, or grass clippings", "a watering can or cup with small holes", "a book to tilt the pan", "a parent to help with the holes"],
        steps: [
          "Fill the pan with soil, packed into a slope at one end. Prop that end up on a book.",
          "Press grass clippings or a small piece of sod into one half of the slope. Leave the other half bare.",
          "Ask a parent to poke small holes in a cup (or use a watering can). Gently \"rain\" the same amount of water on both halves.",
          "Watch where the soil goes. Look at the bottom of the pan for piles of sediment.",
          "Repeat with a harder \"rain.\""
        ],
        observe: "Which half lost more soil? Where did the sediment end up? How does this help explain Providence Canyon?"
      },
      { title: "Shake it: weathering in a jar", time: "15 min",
        materials: ["a plastic jar with a tight lid", "a handful of small, sharp-edged rocks or sugar cubes", "water", "a paper towel"],
        steps: [
          "Look closely at the rocks or sugar cubes. Draw their shapes and feel their edges.",
          "Put them in the jar with a little water and close the lid tightly.",
          "Shake hard for 3 minutes. Take a break, then shake for 3 more minutes.",
          "Pour them onto the paper towel and look at the water and the pieces.",
          "Draw them again and compare."
        ],
        observe: "How did the shapes and edges change? What do you see in the water? How is this like rocks tumbling in a river?"
      }
    ],
    think: [
      "Explain how Stone Mountain and Providence Canyon both show weathering and erosion, but on very different time scales.",
      "If you lived on a Georgia barrier island, why might your beach look different after a big storm? Use the words erosion and deposition."
    ]
  });

  // ---------------------------------------------------------------- WEEK 21
  C.unit("science", 21, {
    title: "Grade 5 preview: physical and chemical changes",
    standard: "S5P1",
    learn: [
      { h: "Physical changes", p: "In a physical change, matter changes its size, shape, or state, but it is still the same substance. Cutting paper, crushing a can, melting ice, and freezing water are physical changes. Mixing sand and pebbles is physical too, because you can separate them again." },
      { h: "Chemical changes", p: "In a chemical change, the starting materials turn into one or more NEW substances with different properties. Burning wood, baking a cake, rusting iron, and a rotting banana are chemical changes. They usually cannot be undone easily." },
      { h: "Clues of a chemical change", p: "Look for evidence: a new color that was not expected, gas bubbles forming, light or heat given off, a new smell, or a new solid forming when two liquids mix. One clue alone is not proof, but these signs often mean a new substance formed." }
    ],
    passage: [
      "On a Saturday morning, Zoe helped her grandmother make pancakes and noticed that cooking is full of science. Everything in the kitchen was changing, but not all the changes were the same kind.",
      "First, Zoe cut a stick of butter into small cubes. The pieces were smaller, but they were still butter. When Grandma warmed the pan, the butter melted from a solid into a liquid. That was still butter too, just in a different state. Changes like these, where the size, shape, or state changes but the substance stays the same, are physical changes. Zoe dissolved sugar in a glass of water, and the sugar seemed to disappear. But when she tasted the water, it was sweet, so the sugar was still there. Dissolving is usually a physical change, because if you let the water evaporate, the sugar would be left behind.",
      "Then Zoe mixed flour, milk, eggs, and a spoonful of baking powder into a batter. On the hot pan, tiny bubbles formed and the pancakes puffed up. The baking powder had reacted to make carbon dioxide gas. The batter also turned from pale and runny to golden brown and spongy, and it smelled delicious. A cooked pancake can never turn back into flour, milk, and eggs. New substances had formed. This was a chemical change.",
      "After breakfast, Zoe noticed an old iron garden tool on the porch covered in flaky orange-brown rust. Rust forms when iron reacts with oxygen and water over time. It is a new substance, weaker than iron. A banana on the counter had turned brown and soft, another chemical change.",
      "Grandma gave her a tip: ask whether you made something new. If you did, it is a chemical change. If you only changed how it looks or what state it is in, it is a physical change."
    ],
    vocab: [
      ["physical change", "a change in size, shape, or state where no new substance is made"],
      ["chemical change", "a change in which one or more new substances are formed"],
      ["substance", "a particular kind of matter, such as water, iron, or sugar"],
      ["dissolve", "to mix completely into a liquid so the pieces are too small to see"],
      ["state of matter", "the form matter takes: solid, liquid, or gas"],
      ["rust", "a flaky orange-brown substance that forms when iron reacts with oxygen and water"]
    ],
    demo: {
      q: "Is toasting bread a physical or chemical change? What about tearing bread into pieces?",
      steps: [
        "Step 1: Ask the key question: did a new substance form?",
        "Step 2: Toasting turns bread brown and crispy, gives off a new smell, and cannot be undone. Those are clues that new substances formed.",
        "Step 3: Tearing bread only changes the size and shape. Each piece is still the same bread.",
        "Step 4: Classify each one."
      ],
      a: "Toasting is a chemical change; tearing is a physical change."
    },
    items: [
      Q("Which is a physical change?", ["Burning a log","Melting an ice cube","Baking a cake","Iron rusting"], 1, "Melting changes water from solid to liquid, but it is still water. The others make new substances.", "Is it still the same stuff?"),
      Q("Which is a chemical change?", ["Folding paper","Cutting hair","Burning paper","Freezing juice"], 2, "Burning turns paper into ash, smoke, and gases, which are new substances. Folding, cutting, and freezing do not make anything new.", "Which one makes something new?"),
      Q("In a physical change…", ["a new substance always forms","matter disappears","light is always given off","the substance stays the same, but its size, shape, or state may change"], 3, "Physical changes change how matter looks or its state, not what it is made of.", "Same stuff, new look."),
      Q("Which is a clue that a chemical change may have happened?", ["Gas bubbles formed when two things were mixed","The object got smaller","The object was cut in half","Ice melted"], 0, "Unexpected bubbles of gas can show that a new substance formed. Changing size or melting are physical.", "Something new is being made."),
      Q("When you mix baking soda and vinegar, they fizz and make bubbles. This is…", ["a physical change","a chemical change","not a change at all","melting"], 1, "The fizzing is carbon dioxide gas, a new substance made by the reaction. That is evidence of a chemical change.", "Bubbles of a new gas."),
      Q("Water boiling into steam is…", ["a chemical change because it makes bubbles","a chemical change because it is hot","a physical change because it is still water","not a change"], 2, "Boiling bubbles are water vapor, still water in a gas state. Bubbles alone do not prove a chemical change. Ask what the bubbles are made of.", "Tricky one: what is inside the bubbles?"),
      Q("Rust on an old bike is a…", ["physical change","kind of paint","state change","chemical change"], 3, "Iron reacts with oxygen and water to make rust, a new substance. You cannot simply rub it back into iron.", "Iron becomes something new."),
      Q("Dissolving sugar in water is usually called a physical change because…", ["the sugar is still there and can be recovered by evaporating the water","the sugar is destroyed","it makes a gas","it gives off light"], 0, "The sugar breaks into pieces too small to see but is still sugar. Evaporate the water and sugar crystals remain.", "Can you get it back?"),
      Q("Which is NOT usually a sign of a chemical change?", ["A new smell","A change in shape","Light or heat given off","An unexpected color change"], 1, "Changing shape, like bending a straw, is physical. New smells, light, heat, and unexpected color changes can signal new substances.", "Bending a straw changes this."),
      Q("A mixture of sand and iron filings can be separated with a magnet. Mixing them was a…", ["chemical change","new substance","physical change","type of rust"], 2, "Each part keeps its own properties, and you can separate them. That makes mixing a physical change.", "Can you separate them?"),
      Q("Which is a chemical change you can see in your kitchen?", ["Pouring milk into a glass","Chopping a carrot","Freezing water into ice cubes","Frying an egg"], 3, "Frying changes the clear runny egg white into a white solid that cannot change back. New substances formed. The others are physical changes.", "Which one can never be undone?"),
      Q("In the passage, what happened to the butter in the warm pan?", ["It melted from solid to liquid","It burned into ash","It turned into sugar","It made rust"], 0, "The passage says the butter melted from a solid to a liquid, a physical change, since it was still butter.", "Paragraph 2."),
      Q("In the passage, how did Zoe know the dissolved sugar was still in the water?", ["She could see it","The water tasted sweet","The water turned brown","It made bubbles"], 1, "The passage says the water tasted sweet, showing the sugar was still there even though she could not see it. In a science lab, never taste anything unless an adult says it is food.", "Paragraph 2."),
      Q("According to the passage, what made bubbles in the pancakes?", ["Boiling milk","Melting butter","Baking powder making carbon dioxide gas","Air from the spoon only"], 2, "The passage says baking powder reacted to make carbon dioxide gas, which puffed up the pancakes.", "Paragraph 3."),
      Q("According to the passage, what was Grandma's tip?", ["If it is hot, it is chemical","Only metal changes chemically","All changes are physical","Ask whether you made something new"], 3, "Grandma's tip was to ask whether something new was made. If yes, it is a chemical change.", "Last paragraph.")
    ],
    activities: [
      { title: "Change detective stations", time: "30 min",
        materials: ["an ice cube", "a piece of paper", "a glass of warm water and a spoonful of sugar", "baking soda", "vinegar", "a small cup", "a tray", "safety glasses or sunglasses"],
        steps: [
          "Make a chart with columns: Station, What I did, What I saw, Physical or chemical, Evidence.",
          "Station 1: Put the ice cube on a plate and check it after 15 minutes.",
          "Station 2: Tear the paper into small pieces.",
          "Station 3: Stir the sugar into the warm water until you cannot see it.",
          "Station 4: Wear glasses. On the tray, put a spoonful of baking soda in the cup and add a splash of vinegar.",
          "Fill in your chart for each station."
        ],
        observe: "Which station showed a chemical change? List at least two pieces of evidence. Which station could be reversed?"
      },
      { title: "Browning apples", time: "15 min, then check over 1 hour",
        materials: ["an apple", "a knife and cutting board (a parent does the cutting)", "three small plates", "lemon juice", "plastic wrap", "a marker and tape"],
        steps: [
          "Ask a parent to cut three apple slices. Only an adult should use the knife.",
          "Label three plates: PLAIN, LEMON, WRAPPED.",
          "Leave one slice plain. Brush one with lemon juice. Wrap one tightly in plastic wrap.",
          "Check every 15 minutes for an hour and describe the color of each slice.",
          "Record what you see in a table."
        ],
        observe: "Apple browning is a chemical change caused when the cut apple reacts with oxygen in the air. Which slice browned the most? Why do you think lemon juice and plastic wrap made a difference?"
      }
    ],
    think: [
      "Your friend says, \"Anything that makes bubbles is a chemical change.\" Is she right? Use boiling water and baking soda with vinegar as evidence.",
      "Choose something you ate today. Describe one physical change and one chemical change that happened while it was made or cooked."
    ]
  });

  // UNITS-END
})(typeof window !== 'undefined' ? window : globalThis);
