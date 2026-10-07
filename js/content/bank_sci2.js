/* Science bank, weeks 22-37: Georgia grade 5 science (S5P1, S5P2, S5P3, S5L1-S5L4, practices, engineering, reviews). All text original. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  // ============================== WEEK 22 ==============================
  C.unit('science', 22, {
    title: 'Mixtures and solutions',
    standard: 'S5P1',
    learn: [
      { h: 'What is a mixture?', p: "A mixture is two or more materials put together where each one keeps its own properties. Trail mix, a salad, and sand with pebbles are all mixtures. No new substance is made, so this is a physical change, not a chemical change." },
      { h: 'Solutions are special mixtures', p: "A solution is a mixture where one material dissolves into another and spreads out evenly. Salt water and sugar water are solutions. You cannot see the salt anymore, but it is still there. The material that dissolves is the solute, and the material it dissolves into is the solvent." },
      { h: 'Separating mixtures', p: "Because the parts of a mixture keep their properties, we can use those properties to pull them apart. A magnet picks out iron. A screen or sieve catches big pieces. A filter catches sand but lets water through. Evaporation removes the water and leaves dissolved salt behind." }
    ],
    passage: [
      "On a Saturday morning, Grandpa Lewis spilled a whole box of paper clips into the sandbox. Mia, his granddaughter, groaned. “We will never get them all out!” Grandpa smiled and said this was a perfect science problem. The sand and the paper clips had made a mixture. Each material still had its own properties. The sand was still tiny and gritty. The paper clips were still metal and could still be pulled by a magnet.",
      "Mia ran to the kitchen and came back with a strong magnet from the refrigerator. She dragged it slowly through the sand. Click, click, click! Paper clips jumped onto the magnet. In ten minutes she had collected all forty-two of them. The sand did not stick at all, because sand is not attracted to magnets.",
      "Next Grandpa showed her a harder puzzle. He stirred a spoonful of salt into a glass of warm water. The salt seemed to disappear. “Is it gone?” he asked. Mia took a tiny taste and made a face. It was salty! The salt had dissolved, which means it broke into pieces far too small to see and spread evenly through the water. This kind of mixture is called a solution.",
      "A magnet would not work this time, and a coffee filter would not work either, because the salt pieces are small enough to slip right through the paper. So Grandpa poured a little of the salt water into a shallow pie pan and set it on a sunny windowsill. Mia checked it every day. By Wednesday the water was gone. It had evaporated, or turned into a gas, and floated into the air. White crystals of salt were left on the bottom of the pan.",
      "Mia wrote in her science notebook: “To separate a mixture, look at what makes each part different.” Grandpa said that is exactly how scientists think."
    ],
    vocab: [
      ['mixture', 'two or more materials combined where each one keeps its own properties'],
      ['solution', 'a mixture in which one material dissolves evenly into another, like salt in water'],
      ['dissolve', 'to break into pieces too small to see and spread out evenly in a liquid'],
      ['solute', 'the material that dissolves in a solution, such as the salt in salt water'],
      ['solvent', 'the material that does the dissolving, such as the water in salt water'],
      ['evaporation', 'when a liquid turns into a gas and goes into the air, leaving dissolved solids behind']
    ],
    demo: {
      q: 'You have a jar of water mixed with sand, iron filings, and dissolved sugar. How could you separate all four materials?',
      steps: [
        'Step 1: List what makes each part different. Iron is pulled by a magnet. Sand is too big to pass through a filter. Sugar is dissolved, so it stays with the water.',
        'Step 2: Pour everything out on a tray and slowly drag a magnet in a plastic bag through it to pull out the iron filings.',
        'Step 3: Pour the rest through a coffee filter. The sand stays in the filter. The sugar water drips through.',
        'Step 4: Leave the sugar water in a shallow dish in a warm spot. The water evaporates and the sugar is left behind.'
      ],
      a: 'Use a magnet for the iron, a filter for the sand, and evaporation to get the sugar back from the water.'
    },
    items: [
      Q("Which of these is a mixture?", ["Trail mix with nuts, raisins, and pretzels", "A single gold coin", "Pure water", "A sheet of aluminum foil"], 0, "Trail mix is a mixture because each piece keeps its own properties. You can still pick out a raisin or a nut. The others are each one material.", "Can you pick the parts apart by hand?"),
      Q("What is special about a solution?", ["It always contains metal", "One material dissolves and spreads evenly through another", "You can always see each part clearly", "It must be a solid"], 1, "In a solution, one material dissolves into another and spreads out evenly, like sugar in tea. You usually cannot see the dissolved part, but it is still there."),
      Q("In salt water, what is the solvent?", ["The salt", "The glass", "The water", "The spoon"], 2, "The solvent is the material that does the dissolving. Water dissolves the salt, so water is the solvent. The salt is the solute.", "Which material is there in the larger amount?"),
      Q("Which tool would best separate iron nails from sawdust?", ["A coffee filter", "A thermometer", "A sieve with tiny holes that let sawdust through", "A magnet"], 3, "Iron is attracted to a magnet, but sawdust is not. A sieve could work too, but a magnet is the best match because it uses a property only the nails have."),
      Q("How can you get salt back out of salt water?", ["Let the water evaporate", "Pour it through a coffee filter", "Use a magnet", "Stir it faster"], 0, "Dissolved salt is too small to be caught by a filter, and salt is not magnetic. When the water evaporates into the air, the salt is left behind as crystals."),
      Q("Making a mixture is what kind of change?", ["A chemical change, because a new substance forms", "A physical change, because each material keeps its properties", "No change at all", "A change that can never be undone"], 1, "Mixing is a physical change. No new substance is made, and the parts can usually be separated again. A chemical change makes a brand-new substance, like a cake baking or a nail rusting."),
      Q("Which would dissolve best in warm water?", ["Sand", "Small pebbles", "Sugar", "Paper clips"], 2, "Sugar dissolves in water. Sand, pebbles, and paper clips sink to the bottom and stay the same size, so they do not dissolve."),
      Q("A filter separates sand from water because...", ["The filter dissolves the sand", "Sand is magnetic", "Water is heavier than sand", "The sand pieces are too big to pass through the filter"], 3, "A filter has tiny holes. Water fits through them, but grains of sand are too large, so they get trapped. This uses the property of particle size."),
      Q("Which way usually makes sugar dissolve faster in water?", ["Using warm water and stirring", "Using ice-cold water and no stirring", "Adding sand", "Putting the cup in the dark"], 0, "Warm water and stirring both help sugar dissolve faster. Warmth makes the water particles move faster, and stirring brings fresh water to the sugar."),
      Q("Which property does a sieve use to separate a mixture?", ["Color", "Size of the pieces", "Magnetism", "Smell"], 1, "A sieve, or screen, lets small pieces fall through and holds back big pieces. It sorts by size, like separating pebbles from sand."),
      Q("In the passage, how did Mia get the paper clips out of the sandbox?", ["She used a coffee filter", "She poured water on the sand", "She dragged a magnet through the sand", "She picked them out with tweezers"], 2, "Mia used a strong magnet from the refrigerator. The paper clips are metal that a magnet attracts, but sand is not, so only the clips stuck."),
      Q("How many paper clips did Mia collect?", ["Twelve", "Twenty-four", "Forty-two", "One hundred"], 2, "The passage says she collected all forty-two of them in about ten minutes."),
      Q("Why did Mia say the salt was not really gone?", ["The water tasted salty", "She could see it floating", "The water turned white", "The glass felt heavier"], 0, "Mia tasted the water and it was salty. That was her evidence that the salt was still there, just dissolved into pieces too small to see."),
      Q("In the passage, why did a coffee filter NOT work for the salt water?", ["The filter was too wet", "The salt pieces were small enough to slip through the paper", "Salt sticks to filters", "Grandpa did not have one"], 1, "Dissolved salt breaks into pieces far too tiny for a filter to catch. That is why Grandpa used evaporation instead."),
      Q("By which day had the water in the pie pan evaporated?", ["Monday", "Wednesday", "Friday", "Sunday"], 1, "The passage says Mia checked every day, and by Wednesday the water was gone and salt crystals were left.")
    ],
    activities: [
      { title: 'Separate a kitchen mixture', time: '25 min',
        materials: ['1 cup of water', 'a spoonful of salt', 'a spoonful of sand or dirt', 'a few dried beans', 'a strainer or sieve', 'coffee filter', 'funnel or cup', 'shallow dish'],
        steps: [
          'Stir the beans, sand, salt, and water together in a bowl. Predict how you will separate each part.',
          'Pour the mixture through a strainer into another bowl. The beans should stay in the strainer.',
          'Line a funnel or cup with a coffee filter and slowly pour the liquid through. Look at what stays in the filter.',
          'Pour the liquid that dripped through into a shallow dish. Set it in a sunny window.',
          'Check the dish each day for several days and draw what you see.',
          'Make a chart: Material, Tool used, Property that made it work.'
        ],
        observe: 'Which property did each tool use to separate the mixture? Which material was hardest to get back, and why?' },
      { title: 'Dissolving race', time: '20 min',
        materials: ['3 clear cups', 'sugar cubes or spoonfuls of sugar', 'cold water', 'room-temperature water', 'warm tap water (a parent sets the temperature)', 'spoon', 'timer'],
        steps: [
          'Ask a parent to help fill one cup with warm tap water. Never use boiling water.',
          'Fill a second cup with room-temperature water and a third with cold water. Use the same amount in each.',
          'Predict which cup will dissolve the sugar fastest.',
          'Drop one sugar cube in each cup at the same time and start the timer. Do not stir.',
          'Record the time when each cube is fully dissolved.',
          'Try again with fresh water, but stir each cup the same number of times.'
        ],
        observe: 'How did water temperature change the dissolving time? How did stirring change it? Use your times as evidence.' }
    ],
    think: [
      "Explain the difference between a mixture and a solution. Give one example of each from your own kitchen.",
      "Imagine someone spilled rice, iron paper clips, and salt into a bucket of water. Write a plan to separate all four materials, and explain which property each step uses."
    ]
  });

  // ============================== WEEK 23 ==============================
  C.unit('science', 23, {
    title: 'Static electricity and simple circuits',
    standard: 'S5P2',
    learn: [
      { h: 'Static electricity', p: "Everything is made of tiny particles, and some of those particles carry an electric charge. When you rub two materials together, charges can move from one to the other. A charge that builds up and stays in one place is static electricity. Opposite charges attract (pull together), and like charges repel (push apart)." },
      { h: 'Current electricity and circuits', p: "Electricity that flows along a path is called current electricity. The path is called a circuit. A simple circuit needs an energy source like a battery, wires to carry the current, and something that uses the energy, like a light bulb." },
      { h: 'Open and closed circuits', p: "A closed circuit is a complete loop with no gaps, so electricity flows and the bulb lights. An open circuit has a break somewhere, so the flow stops. A switch is a part that opens or closes a circuit on purpose." }
    ],
    passage: [
      "On a cold, dry January afternoon, Noah shuffled across the carpet in his socks and touched the metal doorknob. Zap! A tiny spark jumped to his finger. His older sister Jada laughed. “That was static electricity,” she said. As Noah's socks rubbed the carpet, tiny charged particles moved onto his body. The charge built up and stayed on him until he touched the metal. Then it jumped all at once.",
      "Jada blew up a balloon and rubbed it on her hair. When she pulled the balloon away, her hair rose up and reached toward it. The balloon and her hair now had opposite charges, and opposite charges attract. Then she rubbed a second balloon the same way and held the two balloons near each other on strings. They pushed apart! Both balloons had the same kind of charge, and like charges repel.",
      "“Lightning is static electricity too,” Jada explained, “just much, much bigger.” Inside a storm cloud, charges build up until a giant spark leaps between the cloud and the ground or between clouds.",
      "Static electricity sits still until it jumps. The electricity in a flashlight is different. It flows steadily along a path called a circuit. Jada opened their flashlight and showed Noah the parts: two D batteries as the energy source, a small bulb, and metal strips that carried the current. When she slid the switch on, the metal pieces touched, making a closed circuit with no gaps. The bulb glowed. When she slid it off, a gap opened in the path. With an open circuit, the electricity could not flow, and the bulb went dark.",
      "Noah grinned. “So a switch is just a way to make a gap and close it again!” Jada nodded. “Every light switch in our house works that way.”"
    ],
    vocab: [
      ['static electricity', 'electric charge that builds up on an object and stays in one place until it jumps away'],
      ['attract', 'to pull toward each other, as opposite charges do'],
      ['repel', 'to push away from each other, as like charges do'],
      ['circuit', 'a path that electricity flows along'],
      ['closed circuit', 'a complete loop with no gaps, so electricity can flow'],
      ['open circuit', 'a path with a break or gap in it, so electricity cannot flow']
    ],
    demo: {
      q: 'A battery, a bulb, and two wires are set up, but the bulb does not light. What should you check?',
      steps: [
        'Step 1: Remember that electricity needs a complete loop from one end of the battery, through the bulb, and back to the other end.',
        'Step 2: Trace the path with your finger. Look for any wire that is loose or not touching metal.',
        'Step 3: Check that one wire touches the top (+) end of the battery and the other touches the bottom (-) end.',
        'Step 4: If you find a gap, the circuit is open. Fix the connection to close the circuit.'
      ],
      a: 'Look for a gap that makes the circuit open; when the loop is complete and closed, the bulb lights.'
    },
    items: [
      Q("What is static electricity?", ["Electricity that flows through wires in a house", "A kind of magnet", "Energy from the Sun", "Electric charge that builds up on an object and stays in place"], 3, "Static means staying still. Static electricity is a charge that builds up on something, like a balloon, until it jumps away or slowly leaks off."),
      Q("Two objects have opposite charges. What will they do?", ["Attract each other", "Push apart", "Do nothing", "Melt"], 0, "Opposite charges attract, or pull toward each other. That is why a charged balloon can stick to a wall or lift your hair."),
      Q("Two balloons are both rubbed on hair. Then they are held close. What happens?", ["They pull together", "They push apart", "They pop", "They light up"], 1, "Both balloons get the same kind of charge. Like charges repel, so the balloons push away from each other."),
      Q("Which of these is a giant example of static electricity in nature?", ["Wind", "Rain", "Lightning", "A rainbow"], 2, "Lightning happens when charges build up inside storm clouds and then jump in a giant spark. It works like the spark from a doorknob, only far more powerful."),
      Q("What does a simple circuit need?", ["A magnet, a cup, and water", "An energy source, a path such as wires, and something that uses the energy", "Only a light bulb", "A plug in the wall"], 1, "A simple circuit has an energy source (like a battery), wires to make a path, and a load such as a bulb that uses the energy."),
      Q("In a closed circuit...", ["The path is a complete loop, so electricity flows", "There is a gap, so no electricity flows", "The battery is removed", "The wires are made of plastic"], 0, "Closed means complete. With no gaps, electricity can flow all the way around and back to the battery."),
      Q("What is the job of a switch?", ["To make the battery bigger", "To open or close a circuit", "To change electricity into water", "To store static charge"], 1, "A switch makes or breaks a gap in the circuit. On closes the circuit. Off opens it."),
      Q("A flashlight is switched off. What kind of circuit is it?", ["Closed circuit", "Static circuit", "Open circuit", "Magnetic circuit"], 2, "When the switch is off, there is a gap in the path, so the circuit is open and the bulb does not light."),
      Q("Which pair best shows the difference between static and current electricity?", ["Static flows steadily; current stays still", "Static builds up and jumps; current flows steadily along a path", "Both are exactly the same", "Static only happens in batteries"], 1, "Static electricity stays in one place until it jumps. Current electricity moves steadily through a circuit, like in a flashlight."),
      Q("Why must you never play with wall outlets?", ["They carry enough electricity to badly hurt or kill a person", "They have weak electricity", "They are made of glass", "They only work at night"], 0, "Wall outlets carry much more powerful electricity than AA or D batteries. Science experiments at home use only small batteries, never outlets."),
      Q("In the passage, what made the spark jump to Noah's finger?", ["He touched a battery", "Charge built up as his socks rubbed the carpet, then jumped to the metal doorknob", "The doorknob was hot", "His sister shocked him"], 1, "Rubbing his socks on the carpet moved charges onto Noah. The charge stayed on him until he touched the metal doorknob, and then it jumped."),
      Q("Why did Jada's hair rise toward the balloon?", ["The wind blew it", "The hair and balloon had the same charge", "The hair and the balloon had opposite charges", "The balloon was magnetic"], 2, "After rubbing, the balloon and her hair had opposite charges. Opposite charges attract, so the hair reached toward the balloon."),
      Q("What energy source was inside the flashlight in the passage?", ["Two AA batteries", "One AAA battery", "Two D batteries", "A wall plug"], 2, "Jada showed Noah two D batteries inside the flashlight. They were the energy source for the circuit."),
      Q("What did Noah figure out about switches?", ["They are just a way to make a gap and close it again", "They make electricity", "They only work with static electricity", "They make light bulbs brighter"], 0, "Noah realized that a switch simply opens a gap in the circuit and closes it again, which turns the light off and on."),
      Q("What kind of weather day was it when Noah got shocked?", ["Hot and humid", "Cold and dry", "Rainy", "Foggy"], 1, "The passage says it was a cold, dry January afternoon. Static shocks happen more on dry days because damp air helps charges leak away.")
    ],
    activities: [
      { title: 'Balloon static tests', time: '20 min',
        materials: ['2 balloons', 'string', 'tape', 'small bits of tissue paper', 'a wool sock or your own hair'],
        steps: [
          'Blow up both balloons and tie a string to each one.',
          'Rub one balloon on your hair or a wool sock for about 15 seconds.',
          'Hold it just above the tissue bits. Watch what happens.',
          'Rub both balloons the same way. Hang them by their strings so they are close but not touching.',
          'Watch whether they pull together or push apart.',
          'Draw each test and label it attract or repel.'
        ],
        observe: 'Which tests showed attract and which showed repel? Use the words like charges and opposite charges to explain why.' },
      { title: 'Build a simple circuit (parent helps)', time: '25 min',
        materials: ['1 D battery', 'a small flashlight bulb (from a hardware store or old flashlight)', '2 strips of aluminum foil about 1 inch wide, folded into long strips', 'tape'],
        steps: [
          'A parent must help with this lab. Use only a D, AA, or AAA battery. Never use a wall outlet.',
          'Safety rule: never touch one foil strip to both ends of the battery with no bulb in the path. That is a short circuit, and the foil can get hot fast.',
          'Tape one foil strip to the top (+) end of the battery and the other strip to the bottom (-) end.',
          'Wrap the end of one strip around the metal side of the bulb.',
          'Touch the end of the other strip to the tiny metal tip at the bottom of the bulb. Watch for the glow.',
          'Lift the strip off the tip, then put it back. Name each one: open circuit or closed circuit.'
        ],
        observe: 'Draw your circuit and trace the path electricity travels. What did you do to make it open, and what did you do to make it closed?' }
    ],
    think: [
      "Explain why a charged balloon can stick to a wall but two charged balloons push apart. Use the words attract and repel.",
      "The lamp in your room will not turn on. List three possible reasons, and explain how each one could make the circuit open."
    ]
  });

  // ============================== WEEK 24 ==============================
  C.unit('science', 24, {
    title: 'Conductors, insulators, and series and parallel circuits',
    standard: 'S5P2',
    learn: [
      { h: 'Conductors and insulators', p: "A conductor is a material that lets electricity flow through it easily. Most metals, like copper and aluminum, are good conductors. An insulator is a material that does not let electricity flow easily. Plastic, rubber, wood, and glass are insulators. Electric cords have copper wire inside and plastic or rubber outside to keep us safe." },
      { h: 'Series circuits', p: "A series circuit has only one path for the electricity. Everything is lined up in a single loop. If one bulb burns out or is removed, the loop is broken, and every bulb goes dark." },
      { h: 'Parallel circuits', p: "A parallel circuit has more than one path, like branches. Each bulb has its own path back to the battery. If one bulb goes out, the others stay lit. Homes are wired in parallel so that turning off one lamp does not turn off the whole house." }
    ],
    passage: [
      "Every December, Ella's family hangs strings of lights on the porch. One year, Dad plugged in an old string, and nothing happened. Not one bulb lit. He wiggled bulb after bulb until he found one that was loose. When he pushed it in, the whole string lit up at once. “This old string is a series circuit,” Dad said. “There is only one path, so one bad bulb breaks the loop for all of them.”",
      "The newer strings worked differently. When one bulb burned out, the rest kept shining. Those strings had extra paths built in, more like a parallel circuit. In a parallel circuit, each bulb has its own branch, so one broken bulb does not stop the others.",
      "Ella wanted to know why the wires in the light string did not shock anyone. Dad carefully cut open an old, unplugged cord to show her. Inside was a bundle of thin, shiny copper wires. Around the copper was a coat of soft plastic. “Copper is a conductor,” Dad said. “Electricity flows through it easily. The plastic is an insulator. It blocks electricity and keeps it inside the wire, where it belongs.”",
      "Ella made a chart of materials around the house. Conductors went on one side: the steel spoon, the aluminum foil, the copper penny. Insulators went on the other: the rubber band, the wooden pencil, the glass cup, and the plastic straw.",
      "Dad added one more safety fact. Water from a faucet, a puddle, or a pool usually has tiny bits of minerals in it, and that lets it conduct electricity. That is why we never touch switches or cords with wet hands. Ella wrote it at the top of her chart in big red letters."
    ],
    vocab: [
      ['conductor', 'a material that lets electricity flow through it easily, such as copper'],
      ['insulator', 'a material that blocks electricity from flowing easily, such as rubber or plastic'],
      ['series circuit', 'a circuit with only one path, so one break stops everything'],
      ['parallel circuit', 'a circuit with two or more paths, so one break does not stop the rest'],
      ['current', 'the flow of electricity through a circuit'],
      ['copper', 'a reddish metal that is an excellent conductor and is used inside most wires']
    ],
    demo: {
      q: 'Three bulbs are connected to a battery. When one bulb is unscrewed, the other two stay lit. Is it a series or parallel circuit?',
      steps: [
        'Step 1: Recall the rule. In a series circuit, there is one path, so a break stops all the bulbs.',
        'Step 2: In a parallel circuit, each bulb has its own branch, so a break in one branch does not stop the others.',
        'Step 3: Here, two bulbs stayed lit when one was removed. That means they still had their own paths.'
      ],
      a: 'It is a parallel circuit, because the other bulbs still have complete paths.'
    },
    items: [
      Q("Which material is the best conductor?", ["Rubber", "Wood", "Copper", "Plastic"], 2, "Copper is a metal, and most metals let electricity flow easily. That is why copper is used inside wires. Rubber, wood, and plastic are insulators."),
      Q("Why are electric cords covered in plastic or rubber?", ["To make them heavier", "To make the electricity flow faster", "Because plastic conducts electricity better than copper", "Because plastic and rubber are insulators that keep electricity inside the wire"], 3, "Plastic and rubber are insulators. They block electricity, so the current stays in the copper and does not reach your hand."),
      Q("Which group contains only insulators?", ["Glass, rubber, wood", "Copper, aluminum, steel", "Glass, copper, wood", "Steel, rubber, plastic"], 0, "Glass, rubber, and wood all block electricity. Copper, aluminum, and steel are metals, which conduct."),
      Q("How many paths does a series circuit have?", ["None", "Exactly one", "Two or more", "It changes every second"], 1, "A series circuit is a single loop. Everything is lined up one after another on one path."),
      Q("In a series circuit with four bulbs, one bulb burns out. What happens?", ["Only that bulb goes dark", "All the bulbs go dark", "The other bulbs get much brighter", "The battery explodes"], 1, "A burned-out bulb leaves a gap. Since there is only one path, the gap opens the whole circuit, and all four bulbs go dark."),
      Q("Why are homes wired with parallel circuits?", ["Because series circuits are illegal", "Because parallel circuits use no electricity", "So everything turns off together", "So one light can be off while others stay on"], 3, "With parallel wiring, every lamp and outlet has its own path. Turning off one lamp does not turn off the refrigerator or the TV."),
      Q("A parallel circuit is most like...", ["One single road with no exits", "A road that splits into several lanes that all lead back home", "A closed door", "A brick wall"], 1, "In a parallel circuit, electricity can take different branches, like a road with several paths. A single road with no exits is more like a series circuit."),
      Q("Ava tests a nail, a penny, and an eraser in a circuit. The bulb lights for the nail and penny but not the eraser. What can she conclude?", ["The eraser is a conductor", "The nail and penny are conductors, and the eraser is an insulator", "All three are insulators", "The bulb is broken"], 1, "The bulb lights only when electricity can flow through the material. Metal objects like the nail and penny conduct. The rubber eraser blocks the flow, so it is an insulator."),
      Q("Why should you never touch a switch or cord with wet hands?", ["Water is an insulator", "Water makes switches rust instantly", "Most water has minerals in it that let it conduct electricity", "Wet hands are slippery"], 2, "Tap water, pool water, and puddles have tiny bits of minerals that let electricity pass through. Wet skin can let electricity reach your body."),
      Q("Adding more bulbs in a single series loop to the same battery usually makes each bulb...", ["Brighter", "Stay exactly the same", "Change color", "Dimmer"], 3, "In a series circuit, the bulbs share the battery's energy along one path, so adding more bulbs makes each one dimmer."),
      Q("In the passage, why did the whole old light string stay dark?", ["It was a parallel circuit", "One loose bulb broke the only path in a series circuit", "It was unplugged", "The bulbs were made of rubber"], 1, "Dad found one loose bulb. Because the old string was a series circuit with only one path, that one bulb kept all of them from lighting."),
      Q("What did Dad find inside the old cord?", ["Wooden sticks", "Thin copper wires wrapped in plastic", "Glass beads", "Aluminum foil and paper"], 1, "Dad cut open an old, unplugged cord and showed thin, shiny copper wires with a coat of soft plastic around them."),
      Q("Which item was on the CONDUCTOR side of Ella's chart?", ["The rubber band", "The plastic straw", "The copper penny", "The wooden pencil"], 2, "Ella listed the steel spoon, aluminum foil, and copper penny as conductors. The rubber band, wooden pencil, glass cup, and plastic straw were insulators."),
      Q("What did Ella write at the top of her chart in big red letters?", ["A list of metals", "The word parallel", "Her name", "The safety fact about never touching switches or cords with wet hands"], 3, "Dad's last safety fact was about water conducting electricity, and Ella wrote it in big red letters at the top of her chart."),
      Q("How were the newer light strings different from the old one?", ["When one bulb burned out, the rest kept shining", "They had no bulbs", "They used water instead of wires", "They only worked in the daytime"], 0, "The newer strings had extra paths built in, more like a parallel circuit, so one burned-out bulb did not stop the others.")
    ],
    activities: [
      { title: 'Conductor or insulator tester (parent helps)', time: '30 min',
        materials: ['1 D battery', 'small flashlight bulb', '3 strips of aluminum foil', 'tape', 'test objects: spoon, penny, paper clip, eraser, wooden craft stick, plastic straw, rubber band, coin, crayon'],
        steps: [
          'A parent helps. Use only a D, AA, or AAA battery, never a wall outlet. Never connect foil straight across both battery ends without the bulb, because a short circuit gets hot.',
          'Build the circuit from last week, but leave a gap between two foil strips.',
          'Predict whether each test object is a conductor or an insulator. Write your predictions.',
          'Lay one object across the gap so it touches both foil ends.',
          'If the bulb lights, the object is a conductor. If it stays dark, it is an insulator.',
          'Record the results in a T-chart and circle any predictions that were wrong.'
        ],
        observe: 'What do most of your conductors have in common? Were any results surprising? Explain why cords are built the way they are.' },
      { title: 'Model series and parallel paths', time: '20 min',
        materials: ['yarn or string', 'tape', 'paper', '3 paper circles labeled bulb', 'markers'],
        steps: [
          'On the floor, use yarn to make one big loop. Tape three paper bulbs along it. This is a series circuit.',
          'Walk your finger along the loop like electricity. Snip or lift the yarn at one bulb and notice the path is broken for everyone.',
          'Now make a model with a main line and three separate branches, each with its own bulb, that join again before going back. This is parallel.',
          'Break one branch and trace whether the other bulbs still have a path.',
          'Draw both models and label which bulbs would stay lit.'
        ],
        observe: 'Explain in your own words why a parallel circuit keeps working when one bulb fails but a series circuit does not.' }
    ],
    think: [
      "An electrician wears rubber gloves and uses tools with plastic handles. Explain why, using the words conductor and insulator.",
      "If you were wiring a treehouse with three lights, would you choose series or parallel? Give two reasons for your choice."
    ]
  });

  // ============================== WEEK 25 ==============================
  C.unit('science', 25, {
    title: 'Magnets and electromagnets',
    standard: 'S5P3',
    learn: [
      { h: 'Magnets and poles', p: "A magnet is an object that pulls on certain metals, mostly iron, nickel, and cobalt. Steel has iron in it, so it is attracted too. Every magnet has a north pole and a south pole. Opposite poles attract, and like poles repel. The space around a magnet where its force acts is its magnetic field." },
      { h: 'Earth is like a giant magnet', p: "Earth has a magnetic field. The needle of a compass is a tiny magnet that lines up with Earth's field, so it points north. Travelers and sailors have used compasses to find their way for hundreds of years." },
      { h: 'Electromagnets', p: "An electromagnet is a magnet made with electricity. When current flows through a coil of wire wrapped around an iron core, like a nail, the core becomes a magnet. Turn off the electricity and it stops being a strong magnet. More coils or more battery power make it stronger." }
    ],
    passage: [
      "Sofia's family went to a scrap yard to drop off an old washing machine. A huge crane swung a round metal plate over a pile of junk cars. Suddenly, the whole car jumped up and stuck to the plate! The crane carried it across the yard. Then, with a loud clunk, the car dropped onto a new pile. “How did it let go?” Sofia asked.",
      "The worker smiled. “That plate is an electromagnet. When I switch the electricity on, it becomes a powerful magnet. When I switch it off, it is just a heavy plate of metal, and the car falls.” An ordinary magnet, like the one on a refrigerator, is always magnetic. You cannot turn it off. An electromagnet only works while electricity flows through its coils of wire.",
      "At home, Sofia's mom helped her make a small electromagnet. They wrapped insulated wire around a large iron nail twenty times and touched the wire ends to a D battery. The nail picked up four paper clips. When they wrapped the wire forty times, the nail picked up nine paper clips. More coils made a stronger magnet. When they lifted one wire off the battery, the paper clips fell. Mom reminded her to touch the battery for only a few seconds at a time, because the wire can get warm.",
      "Sofia then tested which things a regular magnet could pick up. It grabbed a steel screw and a paper clip. It did not pick up an aluminum can, a copper penny, or a gold ring. She learned that not all metals are magnetic. Iron, nickel, and cobalt are the main ones.",
      "Electromagnets are hidden all around us, Mom said, inside doorbells, speakers, and the motors in fans and blenders."
    ],
    vocab: [
      ['magnet', 'an object that attracts iron and some other metals'],
      ['pole', 'one of the two ends of a magnet, north or south, where the pull is strongest'],
      ['magnetic field', 'the area around a magnet where its pushing or pulling force acts'],
      ['electromagnet', 'a magnet made by sending electricity through a coil of wire, usually around an iron core'],
      ['coil', 'wire wrapped around and around in loops'],
      ['compass', 'a tool with a magnetic needle that lines up with Earth so it points north']
    ],
    demo: {
      q: 'How could you make an electromagnet pick up more paper clips?',
      steps: [
        'Step 1: Remember what makes an electromagnet: electricity flowing through a coil of wire around an iron core.',
        'Step 2: One way to make it stronger is to wrap more coils of wire around the nail.',
        'Step 3: Another way is to use more battery power, for example two D batteries lined up instead of one (with a parent helping).',
        'Step 4: Test one change at a time and count the paper clips so your test is fair.'
      ],
      a: 'Add more coils of wire or use more battery power, and test one change at a time.'
    },
    items: [
      Q("Which object would a magnet attract?", ["A copper penny", "A steel paper clip", "An aluminum can", "A plastic spoon"], 1, "Steel contains iron, which magnets attract. Copper and aluminum are metals too, but they are not magnetic. Plastic is not a metal at all."),
      Q("What happens when the north pole of one magnet is brought near the south pole of another?", ["They repel", "Nothing happens", "They attract", "They both lose their magnetism"], 2, "Opposite poles attract. North and south pull toward each other."),
      Q("Two north poles are pushed toward each other. What do you feel?", ["A pull together", "Nothing", "Heat", "A push apart"], 3, "Like poles repel. Two north poles push away from each other, and so do two south poles."),
      Q("What is a magnetic field?", ["The area around a magnet where its force acts", "A farm where magnets are grown", "The north end of a compass", "The wire inside a battery"], 0, "A magnetic field is the space around a magnet where it can push or pull. You can see its shape by sprinkling iron filings near a magnet."),
      Q("Why does a compass needle point north?", ["It is pulled by the Sun", "It is a small magnet that lines up with Earth's magnetic field", "It is heavier on one end", "The wind pushes it"], 1, "Earth acts like a giant magnet. A compass needle is a tiny magnet, so it turns to line up with Earth's magnetic field."),
      Q("What is needed to make an electromagnet?", ["A coil of wire, an iron core, and electricity", "Only a wooden stick", "Water and salt", "A rubber band and a balloon"], 0, "An electromagnet needs electricity flowing through a coil of wire, usually wrapped around an iron core such as a nail."),
      Q("How is an electromagnet different from a refrigerator magnet?", ["There is no difference", "An electromagnet has no poles", "A refrigerator magnet needs a battery", "An electromagnet can be turned on and off"], 3, "An electromagnet is only strongly magnetic while electricity flows. A refrigerator magnet is a permanent magnet and is always magnetic."),
      Q("Which change would make an electromagnet stronger?", ["Using more coils of wire", "Using fewer coils of wire", "Replacing the iron nail with a plastic straw", "Disconnecting the battery"], 0, "More coils make the magnetic effect stronger. Removing the iron core or disconnecting the battery would make it weaker."),
      Q("Which item uses an electromagnet inside it?", ["A wooden chair", "A doorbell", "A pencil", "A paper cup"], 1, "Doorbells, speakers, and electric motors all use electromagnets. A chair, pencil, and cup do not use electricity."),
      Q("Which of these metals is attracted to a magnet?", ["Gold", "Copper", "Nickel", "Aluminum"], 2, "Iron, nickel, and cobalt are the main magnetic metals. Gold, copper, and aluminum are not attracted to magnets."),
      Q("In the passage, how did the crane drop the car?", ["The worker cut a rope", "The worker flipped the magnet over", "The car was too heavy", "The worker switched the electricity off"], 3, "The plate was an electromagnet. When the worker switched the electricity off, it stopped being a strong magnet, and the car fell."),
      Q("How many paper clips did Sofia's nail pick up with forty coils?", ["Four", "Nine", "Twenty", "Forty"], 1, "With twenty coils it picked up four paper clips. With forty coils it picked up nine. More coils made it stronger."),
      Q("Why did Mom say to touch the battery for only a few seconds at a time?", ["The nail might melt", "The wire can get warm", "The paper clips might break", "The battery would become a magnet"], 1, "The passage says the wire can get warm, so they only connected it for a few seconds. This is an important safety habit."),
      Q("Which item did Sofia's regular magnet pick up?", ["A gold ring", "A copper penny", "A steel screw", "An aluminum can"], 2, "The magnet grabbed a steel screw and a paper clip. It did not pick up the aluminum can, copper penny, or gold ring."),
      Q("Where did Sofia first see an electromagnet at work?", ["At a grocery store", "At a hospital", "At school", "At a scrap yard"], 3, "Sofia's family was dropping off an old washing machine at a scrap yard, where a crane used an electromagnet to lift junk cars.")
    ],
    activities: [
      { title: 'Build an electromagnet (parent helps)', time: '30 min',
        materials: ['1 D battery', 'about 3 feet of thin insulated copper wire (a parent strips 1 inch of plastic off each end)', 'large iron or steel nail', 'tape', 'small paper clips'],
        steps: [
          'A parent strips the wire ends. Stripping uses a sharp tool, so you do not do this part. Use only a D, AA, or AAA battery, never a wall outlet.',
          'Leave about 6 inches of wire loose, then wrap the wire tightly around the nail 20 times, all in the same direction.',
          'Tape one bare wire end to the top (+) of the battery. Hold the other bare end on the bottom (-) end for no more than a few seconds, because the wire can get warm.',
          'While connected, touch the nail tip to a pile of paper clips. Count how many it lifts. Then disconnect and watch them drop.',
          'Wrap 20 more coils (40 total) and test again the same way.',
          'Record both counts in a table.'
        ],
        observe: 'How did adding coils change the strength of your electromagnet? What happened when you disconnected the battery, and why?' },
      { title: 'Magnet sort and pole test', time: '20 min',
        materials: ['2 refrigerator or bar magnets', 'test objects: paper clip, aluminum foil, penny, steel spoon, key, plastic toy, nail, coin, rubber band', 'paper and pencil'],
        steps: [
          'Predict which objects a magnet will attract. Sort them into two piles.',
          'Test each object with a magnet and move it to the correct pile.',
          'Circle any metals that were NOT attracted.',
          'Hold two bar magnets end to end. Turn one around. Feel when they pull and when they push.',
          'Draw the magnets and label attract or repel for each way you held them.'
        ],
        observe: 'Are all metals magnetic? Use your results as evidence. Then explain what you felt when the poles were alike and when they were opposite.' }
    ],
    think: [
      "Explain why a scrap yard uses an electromagnet instead of a giant permanent magnet. What problem would a permanent magnet cause?",
      "Describe a fair test to find out whether the number of coils changes an electromagnet's strength. What would you change, and what would you keep the same?"
    ]
  });

  // ============================== WEEK 26 ==============================
  C.unit('science', 26, {
    title: 'Classifying animals: vertebrates and invertebrates',
    standard: 'S5L1',
    learn: [
      { h: 'Why scientists classify', p: "To classify means to sort things into groups by what they have in common. Scientists sort animals by their features so they can study and compare them. The first big question is: does the animal have a backbone?" },
      { h: 'Vertebrates: five groups', p: "Animals with a backbone are vertebrates. They form five main groups. Mammals have hair or fur and feed milk to their babies. Birds have feathers and lay hard-shelled eggs. Reptiles have dry, scaly skin. Amphibians have moist skin and usually start life in water. Fish live in water, breathe with gills, and have fins." },
      { h: 'Invertebrates', p: "Animals without a backbone are invertebrates, and most animal species on Earth are invertebrates. Insects, spiders, worms, snails, crabs, jellyfish, and octopuses are all invertebrates. Many have a hard outer covering called an exoskeleton, and some, like worms and jellyfish, have soft bodies." }
    ],
    passage: [
      "Lily and her dad spent a spring morning at a Georgia state park with a field notebook. Their goal was to classify every animal they saw. Dad drew a line down the middle of a page. On the left he wrote “Backbone.” On the right he wrote “No backbone.”",
      "The first animal was easy. A brown thrasher, Georgia's state bird, hopped under a bush. It had feathers and a beak, so it went on the backbone side as a bird. Next, a gray squirrel ran up an oak tree. Its fur told Lily it was a mammal. Near the pond, a green tree frog clung to a cattail. Its skin was smooth and damp. “Amphibian,” Lily said. “It started life as a tadpole in the water.”",
      "On a sandy trail, a ranger pointed to a burrow. It belonged to a gopher tortoise, Georgia's state reptile. The tortoise has dry, scaly skin and lays eggs on land. In the pond below, a bass flicked its fins and disappeared. Fish breathe with gills, so it can take oxygen from the water.",
      "By lunchtime the backbone side had five groups: mammal, bird, reptile, amphibian, and fish. But the no-backbone side was much longer! Lily wrote down a beetle, an ant, a butterfly, an earthworm, a garden snail, a spider in its web, and a crayfish under a rock. Dad explained that insects have six legs and three body parts, while spiders have eight legs and two body parts. So a spider is not an insect at all.",
      "“Why does the invertebrate list keep growing?” Lily asked. Dad said that is true everywhere on Earth. Most kinds of animals are invertebrates, even though the animals we notice first are often the bigger vertebrates."
    ],
    vocab: [
      ['classify', 'to sort things into groups by the features they share'],
      ['vertebrate', 'an animal that has a backbone'],
      ['invertebrate', 'an animal that does not have a backbone'],
      ['amphibian', 'a vertebrate with moist skin that usually begins life in water, like a frog'],
      ['gills', 'body parts that let fish and young amphibians take oxygen from water'],
      ['exoskeleton', 'a hard outer covering that protects the body of animals like insects and crabs']
    ],
    demo: {
      q: 'Classify a whale. It lives in the ocean, breathes air with lungs, has a few hairs, and feeds milk to its babies.',
      steps: [
        'Step 1: Does it have a backbone? Yes, so it is a vertebrate.',
        'Step 2: Look for the key features of each group. It lives in water like a fish, but it breathes air with lungs, not gills.',
        'Step 3: It feeds its babies milk and has some hair. Those are features of mammals.',
        'Step 4: Where an animal lives does not decide its group. Its body features do.'
      ],
      a: 'A whale is a mammal, a vertebrate that breathes air and feeds its young milk.'
    },
    items: [
      Q("What is the main difference between vertebrates and invertebrates?", ["Vertebrates have a backbone and invertebrates do not", "Vertebrates can fly", "Invertebrates are always bigger", "Invertebrates live only in water"], 0, "The backbone is the dividing line. Animals with one are vertebrates. Animals without one are invertebrates."),
      Q("Which feature is found only in birds?", ["Feathers", "Laying eggs", "A backbone", "Two legs"], 0, "Only birds have feathers. Many other animals lay eggs, have backbones, or walk on two legs, so those features do not identify a bird by themselves."),
      Q("Which animal is a mammal?", ["Shark", "Frog", "Bat", "Lizard"], 2, "A bat has fur and feeds milk to its babies, so it is a mammal, even though it flies. A shark is a fish, a frog is an amphibian, and a lizard is a reptile."),
      Q("A salamander has moist skin and lays eggs in water. Its young have gills. What group is it in?", ["Reptile", "Fish", "Mammal", "Amphibian"], 3, "Moist skin and a life that starts in water with gills are features of amphibians. Reptiles have dry, scaly skin."),
      Q("Which animal is an invertebrate?", ["Octopus", "Robin", "Snake", "Trout"], 0, "An octopus has a soft body with no backbone. A snake, robin, and trout all have backbones."),
      Q("How do fish get oxygen?", ["With lungs at the surface", "With gills that take oxygen from the water", "Through their fins", "They do not need oxygen"], 1, "Water flows over a fish's gills, and the gills take in oxygen that is in the water. Fins help the fish move and steer."),
      Q("A penguin swims and cannot fly. Why is it still a bird?", ["Because it lives in the cold", "Because it eats fish", "Because it has feathers and lays eggs with hard shells", "Because it walks on two legs"], 2, "Classification uses body features, not abilities. Penguins have feathers and lay hard-shelled eggs, which makes them birds."),
      Q("Which group has dry, scaly skin and usually lays eggs on land?", ["Amphibians", "Fish", "Mammals", "Reptiles"], 3, "Reptiles such as snakes, lizards, turtles, and alligators have dry, scaly skin. Most lay eggs with leathery shells on land."),
      Q("How many legs does an insect have?", ["Four", "Six", "Eight", "Ten"], 1, "Insects have six legs and three body parts. Spiders have eight legs, which is one reason they are not insects."),
      Q("What is an exoskeleton?", ["A skeleton inside the body", "A hard covering on the outside of the body", "A kind of shell made by birds", "A backbone made of cartilage"], 1, "Exo means outside. An exoskeleton protects the body from the outside, like the hard covering of a beetle or crab."),
      Q("In the passage, which animal is named as Georgia's state reptile?", ["The green tree frog", "The brown thrasher", "The gopher tortoise", "The bass"], 2, "The ranger pointed to a burrow made by a gopher tortoise, Georgia's state reptile."),
      Q("How did Lily know the squirrel was a mammal?", ["It had feathers", "It had gills", "It laid eggs", "It had fur"], 3, "The passage says the squirrel's fur told Lily it was a mammal. Hair or fur is a key feature of mammals."),
      Q("Which animal on Lily's list is NOT an insect?", ["Spider", "Ant", "Butterfly", "Beetle"], 0, "Dad explained that spiders have eight legs and two body parts, so they are not insects. Beetles, ants, and butterflies are insects."),
      Q("What surprised Lily about her two lists?", ["The backbone list was longer", "The no-backbone list was much longer", "Both lists were empty", "She saw only birds"], 1, "Lily found far more invertebrates than vertebrates. Dad said this is true all over Earth because most kinds of animals are invertebrates."),
      Q("Where did Lily see the green tree frog?", ["In a burrow", "Under a rock on the trail", "On a cattail near the pond", "High in an oak tree"], 2, "The passage says the green tree frog clung to a cattail near the pond.")
    ],
    activities: [
      { title: 'Backyard animal survey', time: '30 min',
        materials: ['notebook', 'pencil', 'magnifying glass (optional)', 'a parent or adult nearby'],
        steps: [
          'Go outside to a yard, park, or garden with an adult. Do not touch animals that could bite or sting, such as bees, wasps, fire ants, and spiders.',
          'Draw a line down a page. Label one side Vertebrates and the other Invertebrates.',
          'Spend 15 minutes looking under leaves, on tree trunks, in the air, and near water.',
          'Record every animal you see on the correct side. For vertebrates, also write which of the five groups it is in.',
          'Count each side when you are done.',
          'Wash your hands when you come inside.'
        ],
        observe: 'Which side of your chart had more animals? Do your results match what you learned about invertebrates? Explain.' },
      { title: 'Animal sorting cards', time: '20 min',
        materials: ['15 index cards', 'markers', 'pictures from old magazines (optional)'],
        steps: [
          'Write or draw one animal on each card: dog, eagle, alligator, toad, catfish, ladybug, earthworm, crab, jellyfish, dolphin, owl, turtle, salamander, shark, snail.',
          'First sort the cards into two piles: vertebrate and invertebrate.',
          'Sort the vertebrates into the five groups: mammal, bird, reptile, amphibian, fish.',
          'On the back of each card, write one feature that proves which group it belongs in.',
          'Ask someone in your family to try sorting them, then check their work.'
        ],
        observe: 'Which animal was the trickiest to sort? What feature helped you decide?' }
    ],
    think: [
      "A dolphin lives in the ocean and has fins, but it is a mammal, not a fish. Explain why, using at least two features.",
      "Why do you think scientists classify animals by body features instead of by where they live? Give an example."
    ]
  });

  // ============================== WEEK 27 ==============================
  C.unit('science', 27, {
    title: 'Classifying plants: seeds, spores, and tubes',
    standard: 'S5L1',
    learn: [
      { h: 'Seed plants and non-seed plants', p: "One way to sort plants is by how they make new plants. Seed plants grow from seeds. Some seed plants make flowers, and their seeds form inside fruits. Others, like pine trees, make their seeds in cones. Non-seed plants, like ferns and mosses, make tiny spores instead of seeds." },
      { h: 'Vascular plants', p: "Vascular plants have tubes inside them, a little like straws. One set of tubes carries water and minerals up from the roots. Another carries food made in the leaves to the rest of the plant. Because of these tubes, vascular plants can grow tall. Trees, grasses, flowers, and ferns are vascular." },
      { h: 'Nonvascular plants', p: "Nonvascular plants have no tubes. They soak up water directly, so they must stay small and grow in damp, shady places. Mosses are the best-known nonvascular plants. They have no true roots, only tiny threadlike parts that hold them in place." }
    ],
    passage: [
      "Grandma Rose kept a shady garden behind her house in north Georgia. One summer she gave Ruby a challenge: sort every plant into groups the way a scientist would.",
      "Ruby started with the tallest plant, a big pine tree at the edge of the yard. Grandma handed her a brown cone from the ground. When Ruby shook it, small winged seeds fluttered out. “Pine trees are seed plants,” Grandma said, “but they don't make flowers. Their seeds grow in cones.”",
      "Next Ruby looked at the tomato plants and the pink zinnias. Both had flowers. Grandma cut open a ripe tomato. Inside were dozens of seeds. “Flowering plants make their seeds inside a fruit,” she explained. “A fruit is the part that grows from the flower and holds the seeds, even if we call it a vegetable at dinner.”",
      "In the coolest corner of the garden, under the porch, grew a patch of ferns. Ruby flipped over a leaf, which is called a frond. Rows of tiny brown dots lined the underside. “Those dots hold spores,” Grandma said. “Ferns do not make seeds. Each spore is so small you would need a microscope to see it clearly.” Even so, ferns have tubes inside their stems that carry water, so they can grow knee-high or taller.",
      "On the old stone steps, Ruby found a soft green carpet. It was moss. She pressed it with her finger, and it felt like a damp sponge. Moss has no tubes, so it soaks up water straight from rain and dew. That is why it stays tiny and grows only in moist, shady spots.",
      "At the end of the day, Ruby made a chart with two questions at the top: Seeds or spores? Tubes or no tubes?"
    ],
    vocab: [
      ['seed', 'a small part made by a plant that holds a baby plant and stored food'],
      ['spore', 'a tiny cell made by ferns and mosses that can grow into a new plant'],
      ['vascular', 'having tubes that carry water and food through the plant'],
      ['nonvascular', 'having no tubes, so water soaks in directly'],
      ['cone', 'the woody part of a pine or other conifer where seeds form'],
      ['frond', 'the leaf of a fern']
    ],
    demo: {
      q: 'Classify a plant that grows in a damp, shady spot, is only about one inch tall, has no flowers, and has no tubes.',
      steps: [
        'Step 1: Ask the first question: does it make seeds? It has no flowers or cones, so it is most likely a non-seed plant.',
        'Step 2: Ask the second question: does it have tubes? No, so it is nonvascular.',
        'Step 3: Think about what you know. A tiny plant with no tubes in a damp place matches a moss.'
      ],
      a: 'It is a nonvascular, non-seed plant, such as a moss.'
    },
    items: [
      Q("Which plant makes spores instead of seeds?", ["Oak tree", "Pine tree", "Sunflower", "Fern"], 3, "Ferns reproduce with spores, which form in dots under their fronds. Oaks, sunflowers, and pines all make seeds."),
      Q("Where do pine trees make their seeds?", ["In cones", "Inside fruits", "Inside flowers", "In their roots"], 0, "Pines are seed plants that do not flower. Their seeds form in woody cones."),
      Q("What is the job of the tubes in a vascular plant?", ["To make spores", "To carry water and food through the plant", "To catch insects", "To make the plant smell nice"], 1, "Vascular tubes move water and minerals up from the roots and carry food from the leaves to other parts of the plant."),
      Q("Why are mosses always small?", ["They only grow in winter", "They are too young", "They have no tubes to carry water up", "Animals eat the tops"], 2, "Without tubes, mosses must soak up water directly. Water cannot travel far that way, so mosses stay short."),
      Q("Where are you most likely to find moss growing?", ["In a dry, sunny desert", "On a sandy beach", "In a hot parking lot", "On a damp, shady rock"], 3, "Mosses need moisture because they soak up water directly. They grow best in damp, shady places."),
      Q("In flowering plants, where do seeds form?", ["Inside fruits", "Inside cones", "On the underside of leaves", "In the soil"], 0, "Flowering plants make seeds inside fruits. The fruit grows from part of the flower."),
      Q("Which plant is both vascular and a non-seed plant?", ["Moss", "Fern", "Apple tree", "Corn"], 1, "Ferns have tubes, so they are vascular, but they use spores, not seeds. Moss is nonvascular. Apple trees and corn make seeds."),
      Q("Which is a nonvascular plant?", ["Rose bush", "Grass", "Moss", "Maple tree"], 2, "Moss has no tubes. Grass, roses, and maple trees all have tubes and grow taller."),
      Q("A tall tree grows flowers in spring and acorns in fall. How would you classify it?", ["Nonvascular, spore plant", "Vascular, spore plant", "Nonvascular, seed plant", "Vascular, seed plant"], 3, "It is tall, so it must have tubes (vascular), and acorns are seeds (seed plant). This describes an oak tree."),
      Q("Which question would NOT help you classify a plant?", ["What color pot is it in?", "Does it have tubes?", "Does it make flowers or cones?", "Does it make seeds or spores?"], 0, "The pot is not part of the plant. Scientists classify plants by their own features, like seeds, tubes, flowers, and cones."),
      Q("In the passage, what came out of the pine cone when Ruby shook it?", ["Spores", "Small winged seeds", "Pollen only", "Tiny flowers"], 1, "When Ruby shook the cone, small winged seeds fluttered out, showing that pines are seed plants."),
      Q("What did Ruby find on the underside of the fern frond?", ["Tiny flowers", "Small seeds", "Rows of tiny brown dots that hold spores", "Water drops"], 2, "Grandma explained that the brown dots under the frond hold spores."),
      Q("How did the moss feel when Ruby pressed it?", ["Hard like a rock", "Dry and crunchy", "Prickly like a cactus", "Like a damp sponge"], 3, "The passage says the moss felt like a damp sponge, because it soaks up water directly."),
      Q("Why did Grandma say a tomato is a fruit?", ["Because it grows from the flower and holds seeds", "Because it is sweet", "Because it is red", "Because it grows on a tree"], 0, "Grandma explained that a fruit is the part that grows from the flower and holds the seeds. A tomato fits that description."),
      Q("What two questions did Ruby put at the top of her chart?", ["Big or small? Green or brown?", "Seeds or spores? Tubes or no tubes?", "Sun or shade? Wet or dry?", "Flowers or leaves? Roots or stems?"], 1, "Ruby's chart asked Seeds or spores? and Tubes or no tubes? These are the two big ways to classify plants in this unit.")
    ],
    activities: [
      { title: 'Plant scavenger hunt', time: '30 min',
        materials: ['notebook', 'pencil', 'magnifying glass', 'paper bag for fallen samples'],
        steps: [
          'With an adult, walk around a yard or park. Only collect fallen things (cones, seeds, leaves). Do not pick unknown plants or berries, and never taste anything.',
          'Look for one example of each: a flowering plant, a plant with cones, a fern, and a moss.',
          'Use the magnifying glass to look under a fern frond for spore dots and closely at a patch of moss.',
          'Sketch each plant and label it seed or spore, vascular or nonvascular.',
          'Wash your hands when you finish.'
        ],
        observe: 'Which of the four plant types was hardest to find? What did the place where you found the moss have in common with what you learned?' },
      { title: 'Watch the tubes work', time: '15 min, then check the next day',
        materials: ['a stalk of celery with leaves', 'clear glass or jar', 'water', 'food coloring', 'a butter knife'],
        steps: [
          'Fill the glass halfway with water and add 10 to 15 drops of food coloring.',
          'Ask a parent to trim the bottom of the celery stalk so it is fresh.',
          'Stand the celery in the colored water and set it on a counter.',
          'Predict what will happen by tomorrow.',
          'The next day, look at the leaves. Then a parent can cut across the stalk with the butter knife so you can look at the cut end.',
          'Draw what you see on the cut end.'
        ],
        observe: 'What evidence shows that celery is a vascular plant? What do you think would happen with moss in colored water, and why?' }
    ],
    think: [
      "Explain why a giant redwood tree could never be a nonvascular plant. Use the word tubes in your answer.",
      "Make a simple key with two yes-or-no questions that would sort a moss, a fern, a pine tree, and a sunflower into four different spots. Explain how it works."
    ]
  });

  // ============================== WEEK 28 ==============================
  C.unit('science', 28, {
    title: 'Inherited traits and learned behaviors',
    standard: 'S5L2',
    learn: [
      { h: 'Inherited traits', p: "A trait is a feature of a living thing. An inherited trait is passed from parents to their young. Eye color, the shape of a leaf, the color of a flower, and the spots on a ladybug are inherited. That is why puppies often look like their parents." },
      { h: 'Acquired traits and learned behaviors', p: "An acquired trait is something a living thing gets during its life, not from its parents. A scar, a haircut, or strong muscles from exercise are acquired. A learned behavior is something an animal learns by practice or by being taught, like reading, riding a bike, or a dog learning to sit." },
      { h: 'Instincts are inherited behaviors', p: "Some behaviors do not need to be learned at all. An instinct is a behavior an animal is born knowing how to do. A spider spins a web without lessons, and baby sea turtles crawl toward the ocean as soon as they hatch." }
    ],
    passage: [
      "When the Carter family's golden retriever had puppies, Abby kept a notebook about them. All six puppies had soft, golden fur like their mother. Two had the darker ears of their father. Abby wrote, “Fur color and ear color are inherited traits. The puppies got them from their parents.”",
      "As the weeks passed, Abby noticed other things. Every puppy knew how to nurse right after it was born. No one taught them. Every puppy also wiggled and whimpered when it was cold. These were instincts, behaviors that animals are born knowing how to do.",
      "When the puppies were ten weeks old, Abby began training the smallest one, named Biscuit. At first, Biscuit had no idea what “sit” meant. Abby held a treat above his nose and gently pressed his back end down. After many days of practice, Biscuit sat every time she said the word. Sitting on command was a learned behavior. Biscuit's brothers and sisters, who went to new homes, would not know it unless someone taught them.",
      "One day Biscuit cut his paw on a sharp stick. It healed, but a tiny bare patch was left where fur did not grow back. Abby's mom asked a tricky question. “If Biscuit has puppies someday, will they have that bare patch too?” Abby thought hard. “No,” she said. “The patch happened during his life. It is an acquired trait. It was not passed down from his parents, so he cannot pass it on.”",
      "Abby's mom smiled. She pointed out that Abby herself had her dad's curly hair, an inherited trait, and that she had learned to play piano, a learned behavior. People are a mix of both, just like puppies."
    ],
    vocab: [
      ['trait', 'a feature or characteristic of a living thing'],
      ['inherited trait', 'a feature passed from parents to their young, like eye color'],
      ['acquired trait', 'a feature gained during a lifetime, like a scar, that is not passed to offspring'],
      ['learned behavior', 'something an animal learns to do through practice, teaching, or experience'],
      ['instinct', 'a behavior an animal is born knowing how to do without being taught'],
      ['offspring', 'the young of a living thing']
    ],
    demo: {
      q: 'A girl has brown eyes, can speak Spanish, and has a scar on her knee. Sort each one.',
      steps: [
        'Step 1: Ask: did it come from her parents at birth? Brown eyes did, so eye color is an inherited trait.',
        'Step 2: Ask: did she learn it through practice or teaching? Speaking Spanish is a learned behavior.',
        'Step 3: Ask: did it happen to her body during her life? The scar is an acquired trait.',
        'Step 4: Check: only the inherited trait could be passed on to her own children.'
      ],
      a: 'Brown eyes are inherited, speaking Spanish is learned, and the scar is acquired.'
    },
    items: [
      Q("Which is an inherited trait?", ["Knowing how to swim", "A broken arm", "The color of a person's eyes", "Knowing the alphabet"], 2, "Eye color is passed from parents to children. Swimming and the alphabet are learned, and a broken arm happens during life."),
      Q("Which is a learned behavior?", ["A bird having feathers", "A baby crying when hungry", "A cat having stripes", "A dog fetching a ball on command"], 3, "A dog must be trained to fetch on command, so it is learned. Feathers and stripes are inherited, and a hungry baby crying is an instinct."),
      Q("What is an instinct?", ["A behavior an animal is born knowing how to do", "A trick an animal learns at school", "A scar from an injury", "The color of an animal's fur"], 0, "An instinct is an inherited behavior. The animal does it without being taught, like a spider spinning a web."),
      Q("Which is an example of instinct?", ["A parrot learning words", "Baby sea turtles crawling toward the ocean after hatching", "A horse learning to jump fences", "A child learning to tie shoes"], 1, "Baby sea turtles have never seen the ocean, but they crawl toward it right after hatching. No one teaches them, so it is an instinct."),
      Q("Can an acquired trait, like a scar, be passed to offspring?", ["Yes, always", "No, because it was gained during life, not inherited", "Only if the scar is large", "Only in plants"], 1, "Acquired traits happen to an individual during its life. They are not passed down through parents, so offspring do not get them."),
      Q("A sunflower grown from a seed has bright yellow petals like its parent plant. The yellow color is...", ["A learned behavior", "An acquired trait", "Not a trait", "An inherited trait"], 3, "Petal color is passed from parent plants to their seeds, so it is inherited. Plants do not learn colors."),
      Q("Which is an acquired trait?", ["Strong leg muscles from running every day", "Freckles a baby is born with", "The shape of a leaf", "The number of legs on an insect"], 0, "Muscles built up from exercise are gained during life, so they are acquired. The others come from parents."),
      Q("Why do kittens often look like their mother and father?", ["They copy them", "They inherit traits from both parents", "They eat the same food", "They live in the same house"], 1, "Young animals receive traits from their parents, so they often share features like fur color and pattern."),
      Q("A girl learns to ride a bike. Will her future children know how to ride without learning?", ["Yes, because she passes it on", "No, because riding a bike is a learned behavior", "Only if she rides every day", "Only her sons"], 1, "Learned behaviors are not inherited. Her children will need to learn and practice, just as she did."),
      Q("Which pair is correctly matched?", ["Spinning a web: learned behavior", "Hair dyed purple: inherited trait", "Reading a book: instinct", "Height of a pea plant: inherited trait"], 3, "The height of a pea plant is passed from parent plants. Web spinning is an instinct, dyed hair is acquired, and reading is learned."),
      Q("In the passage, which traits did Abby say the puppies inherited?", ["Fur color and ear color", "Sitting on command", "A bare patch on the paw", "Knowing their names"], 0, "Abby wrote that fur color and ear color were inherited traits that came from the puppies' parents."),
      Q("How did Abby teach Biscuit to sit?", ["She showed him a video", "She held a treat above his nose and gently pressed him down, practicing for many days", "He already knew how", "His mother taught him"], 1, "Abby used a treat and gentle pressure and practiced many days. Because he needed practice, sitting is a learned behavior."),
      Q("How many puppies were in the litter?", ["Four", "Five", "Six", "Eight"], 2, "The passage says all six puppies had soft, golden fur like their mother."),
      Q("What caused the bare patch on Biscuit's paw?", ["He was born with it", "He learned it", "His father had one", "He cut his paw on a sharp stick"], 3, "Biscuit cut his paw on a sharp stick, and fur did not grow back on that spot. This makes it an acquired trait."),
      Q("What did Abby's mom say about Abby's piano playing?", ["It is a learned behavior", "It is an inherited trait", "It is an instinct", "It is an acquired scar"], 0, "Abby learned to play piano, so her mom called it a learned behavior. Her curly hair, from her dad, is inherited.")
    ],
    activities: [
      { title: 'Family trait survey', time: '25 min',
        materials: ['paper', 'pencil', 'mirror', 'family members willing to help'],
        steps: [
          'Make a table with family members across the top and traits down the side: eye color, hair color, curly or straight hair, dimples, freckles.',
          'Use the mirror to record your own traits.',
          'Ask each family member if you can observe and record their traits.',
          'Add a second table for learned behaviors: who can whistle a song, knit, cook a meal, swim, or speak another language.',
          'Circle any traits you share with a parent or grandparent.'
        ],
        observe: 'Which inherited traits do you share with someone in your family? Which learned behaviors did each person have to practice? How are the two tables different?' },
      { title: 'Instinct or learned? Animal cards', time: '20 min',
        materials: ['10 index cards', 'markers'],
        steps: [
          'Write one animal behavior on each card: a bird building a nest, a dog shaking hands, a baby crying, a bear hibernating, a horse pulling a cart on command, a spider spinning a web, a parrot saying hello, a salmon swimming upstream to lay eggs, a dog walking politely on a leash, a baby turtle crawling to the sea.',
          'Sort the cards into Instinct and Learned piles.',
          'For each card, write a sentence on the back explaining your choice.',
          'Look up any you are unsure of with a parent, using a trusted book or website.',
          'Re-sort if you change your mind.'
        ],
        observe: 'Which card was the hardest to sort? What clues help you decide if a behavior is an instinct or learned?' }
    ],
    think: [
      "Explain the difference between an inherited trait and an acquired trait. Give one example of each from your own life.",
      "Why do you think animals are born with some instincts instead of having to learn everything? Give an example and explain how that instinct helps the animal survive."
    ]
  });

  // ============================== WEEK 29 ==============================
  C.unit('science', 29, {
    title: 'Cells: the building blocks of life',
    standard: 'S5L3',
    learn: [
      { h: 'All living things are made of cells', p: "A cell is the smallest living part of a living thing. Some living things, like bacteria, are made of just one cell. People, animals, and plants are made of trillions of cells working together. Most cells are too small to see without a microscope." },
      { h: 'Using a microscope', p: "A microscope uses lenses to make tiny things look much bigger. You look through the eyepiece at the top. The objective lens is near the object. The object sits on a flat stage, with light shining through it. Focus knobs move the lens or stage so the picture becomes clear." },
      { h: 'From cells to organisms', p: "Cells that are alike work together as a tissue, like muscle tissue. Different tissues work together in an organ, like the heart. Organs work together in a system, like the circulatory system. All the systems together make an organism." }
    ],
    passage: [
      "Long ago, no one knew that living things were made of tiny parts. Then, in the 1600s, people learned to grind glass into lenses that made small things look large. An English scientist named Robert Hooke built a microscope and looked at a very thin slice of cork, which comes from the bark of a tree. He saw rows of tiny boxes that reminded him of small rooms. He called them cells. Hooke published his drawings in 1665.",
      "Today we know that every living thing is made of cells. A cell is the smallest part of a living thing that is itself alive. Some living things have only one cell. Others, like you, have trillions.",
      "Ruth's homeschool group borrowed a classroom microscope. First, the teacher, Mrs. Patel, peeled a paper-thin layer of skin from an onion and laid it on a glass slide. She added one drop of iodine to stain it and help the parts show up. Ruth put her eye to the eyepiece and turned the focus knob slowly. Suddenly she saw a wall of bricks! Each brick was an onion cell, with a dark dot inside.",
      "Next, Mrs. Patel gently swabbed the inside of her own cheek with a clean cotton swab and smeared it on a second slide. These cells looked very different. They were rounded and floppy, like scattered pancakes, not lined up like bricks.",
      "“Plant cells usually have a stiff outer wall that gives them a boxy shape,” Mrs. Patel explained. “Animal cells do not have that wall, so they are rounder and softer.” Ruth drew both kinds in her notebook. Under the onion cells she wrote: bricks. Under the cheek cells she wrote: pancakes."
    ],
    vocab: [
      ['cell', 'the smallest living part of a living thing'],
      ['microscope', 'a tool with lenses that makes tiny things look much larger'],
      ['organism', 'any single living thing, such as a plant, animal, or bacterium'],
      ['tissue', 'a group of similar cells that work together, like muscle tissue'],
      ['organ', 'a body part made of different tissues working together, like the heart or a leaf'],
      ['lens', 'a curved piece of glass or plastic that bends light to make things look bigger']
    ],
    demo: {
      q: 'Put these in order from smallest to largest: organ, cell, organism, tissue, organ system.',
      steps: [
        'Step 1: Start with the smallest living part. That is the cell.',
        'Step 2: Many similar cells together make a tissue.',
        'Step 3: Different tissues together make an organ, and organs working together make an organ system.',
        'Step 4: All the systems together make the whole living thing, the organism.'
      ],
      a: 'Cell, tissue, organ, organ system, organism.'
    },
    items: [
      Q("What is a cell?", ["A tool for seeing small things", "The smallest living part of a living thing", "A kind of organ", "A type of rock"], 1, "A cell is the basic unit of life. Every living thing is made of one or more cells."),
      Q("Why do scientists need microscopes to study most cells?", ["Cells are too fast", "Cells only come out at night", "Most cells are too small to see with our eyes alone", "Cells are invisible in light"], 2, "Most cells are far too tiny to see without help. A microscope's lenses make them look many times larger."),
      Q("Which part of a microscope do you look through?", ["The stage", "The light", "The base", "The eyepiece"], 3, "You look through the eyepiece at the top. The stage holds the slide, and the light shines up through it."),
      Q("What do the focus knobs on a microscope do?", ["Make the picture clear", "Turn the light on and off", "Hold the slide down", "Change the color of the cell"], 0, "The focus knobs move parts of the microscope up or down until the picture looks sharp and clear."),
      Q("Which is made of only one cell?", ["A dog", "A bacterium", "An oak tree", "A person"], 1, "Bacteria are single-celled organisms. Dogs, oak trees, and people are made of huge numbers of cells."),
      Q("Similar cells working together form a...", ["Microscope", "Organism", "Tissue", "Planet"], 2, "A tissue is a group of similar cells doing the same job, like muscle cells working together as muscle tissue."),
      Q("The heart is an example of a(n)...", ["Cell", "Tissue", "Organism", "Organ"], 3, "The heart is an organ made of several kinds of tissue working together to pump blood."),
      Q("Which shape do plant cells usually have?", ["Boxy, like bricks", "Round and floppy", "Long like a string", "Star-shaped"], 0, "Plant cells usually have a stiff cell wall, which gives them a boxy shape and lines them up like bricks."),
      Q("Why are animal cells usually rounder than plant cells?", ["Animal cells are older", "Animal cells do not have a stiff cell wall", "Animal cells are bigger", "Animal cells live in water"], 1, "Animal cells have a thin, flexible covering but no stiff wall, so they are rounder and can change shape."),
      Q("Which order goes from smallest to largest?", ["Organ, tissue, cell", "Tissue, cell, organ", "Cell, tissue, organ", "Organ, cell, tissue"], 2, "Cells build tissues, and tissues build organs. So the order from small to large is cell, tissue, organ."),
      Q("In the passage, what did Robert Hooke look at when he named cells?", ["An onion", "A drop of pond water", "His own cheek", "A thin slice of cork"], 3, "Hooke looked at a very thin slice of cork. The tiny boxes reminded him of small rooms, so he called them cells."),
      Q("In what year did Hooke publish his drawings?", ["1492", "1665", "1776", "1865"], 1, "The passage says Hooke published his drawings in 1665."),
      Q("Why did Mrs. Patel add a drop of iodine to the onion slide?", ["To kill germs", "To stain it so the parts would show up", "To make it smell better", "To glue it down"], 1, "The iodine is a stain. It colors parts of the cells so they are easier to see under the microscope."),
      Q("What did Ruth say the onion cells looked like?", ["Pancakes", "Stars", "A wall of bricks", "Bubbles"], 2, "Ruth saw what looked like a wall of bricks. Each brick was one onion cell."),
      Q("Where did the second slide's cells come from?", ["A leaf", "A piece of cork", "A drop of milk", "The inside of Mrs. Patel's cheek"], 3, "Mrs. Patel swabbed the inside of her own cheek. These animal cells looked rounded, like scattered pancakes.")
    ],
    activities: [
      { title: 'Make a water-drop magnifier', time: '20 min',
        materials: ['clear plastic wrap', 'a clear plastic cup or small open box', 'rubber band', 'water and a dropper or straw', 'small things to look at: newspaper print, a leaf, salt, a feather'],
        steps: [
          'Stretch plastic wrap tightly over the top of the cup or box and hold it with a rubber band.',
          'Put one small drop of water in the center of the plastic wrap.',
          'Slide a piece of newspaper under the plastic wrap and look down through the drop.',
          'Try a bigger drop and a smaller drop. Notice which makes letters look larger.',
          'Look at a leaf, salt grains, and a feather the same way. Sketch what you see.'
        ],
        observe: 'How is your water drop like the lens of a microscope? Could you see cells with it? Why or why not?' },
      { title: 'Onion skin close-up (parent cuts the onion)', time: '25 min',
        materials: ['an onion', 'kitchen knife (parent only)', 'tweezers', 'a clear plastic lid or piece of clear tape', 'magnifying glass or a microscope if you have one', 'a drop of water'],
        steps: [
          'A parent cuts the onion in quarters. Knives are sharp, so this is an adult job.',
          'Separate one layer. Use tweezers to peel off the paper-thin skin from the inside of the layer.',
          'Lay the skin flat on the clear lid with a drop of water, or stick it to clear tape.',
          'Hold it up to a window and look with a magnifying glass, or put it under a microscope if you have one.',
          'Draw what you see. Look for lines that form little boxes.',
          'Wash your hands, since onion juice stings the eyes.'
        ],
        observe: 'What shapes did you notice? How do they compare with the brick-like cells Ruth saw? What would help you see the cells more clearly?' }
    ],
    think: [
      "Explain how cells, tissues, and organs are connected. Use your own body as an example.",
      "Robert Hooke could only see cells after the microscope was invented. Explain why new tools are important to scientists, and name one other tool that helps scientists see what we cannot."
    ]
  });

  // ============================== WEEK 30 ==============================
  C.unit('science', 30, {
    title: 'Cell parts and their jobs',
    standard: 'S5L3',
    learn: [
      { h: 'Parts in every plant and animal cell', p: "The cell membrane is a thin, flexible covering that controls what goes into and out of the cell. The cytoplasm is a jelly-like fluid that fills the cell and holds the other parts. The nucleus is the control center. It holds the instructions that tell the cell how to grow and what to do." },
      { h: 'Parts found in plant cells', p: "Plant cells have a cell wall, a stiff layer outside the membrane that supports the plant and gives the cell its boxy shape. They also have chloroplasts, green parts that use sunlight to make food for the plant. Animal cells have neither." },
      { h: 'Vacuoles store things', p: "A vacuole is a storage space for water, food, and wastes. Plant cells usually have one very large vacuole filled with water that pushes outward and helps the plant stand firm. Animal cells, if they have vacuoles, have smaller ones." }
    ],
    passage: [
      "Hannah's tomato plant drooped on a hot July afternoon. Its leaves hung down like wet laundry. She gave it a big drink of water, and by evening the plant stood tall again. How could water make a plant stand up? The answer was hiding inside its cells.",
      "Every plant cell has a large storage space called a vacuole. When a plant has plenty of water, the vacuoles fill up and press outward against the cell wall, like air pumping up a bike tire. That pressure keeps the stems and leaves firm. When the plant runs low on water, the vacuoles shrink, and the plant wilts.",
      "Hannah's older brother, Eli, helped her draw a plant cell as if it were a tiny factory. The cell wall was the strong brick fence around the outside. Just inside the fence was the cell membrane, the factory's gate guard, deciding what could come in and what could leave. The cytoplasm was the floor of the factory, a jelly where all the workers moved around. The nucleus was the main office, where the boss kept the instructions for the whole cell. The chloroplasts were green solar panels. They captured sunlight and used it to make sugar, the plant's food. The big vacuole was the storage warehouse, packed with water.",
      "Then Eli drew an animal cell, like one from Hannah's own skin. He left out the brick fence and the solar panels. “Animal cells don't have a cell wall or chloroplasts,” he said. “You can't make food from sunlight. You have to eat!” The animal cell still had a membrane, cytoplasm, and a nucleus.",
      "Hannah labeled both drawings and taped them to the refrigerator, right above a note to water the tomatoes."
    ],
    vocab: [
      ['nucleus', 'the control center of a cell that holds its instructions'],
      ['cell membrane', 'the thin covering that controls what enters and leaves a cell'],
      ['cytoplasm', 'the jelly-like fluid that fills a cell and holds its parts'],
      ['cell wall', 'a stiff outer layer in plant cells that gives support and shape'],
      ['chloroplast', 'a green part of a plant cell that uses sunlight to make food'],
      ['vacuole', 'a storage space in a cell that holds water, food, or wastes']
    ],
    demo: {
      q: 'A scientist sees a cell with a nucleus, a membrane, cytoplasm, a stiff wall, and green chloroplasts. Is it a plant or animal cell?',
      steps: [
        'Step 1: List the parts that both kinds of cells have: nucleus, cell membrane, and cytoplasm. These do not help you decide.',
        'Step 2: Look for the parts that only plant cells have: a cell wall and chloroplasts.',
        'Step 3: This cell has both of those parts.'
      ],
      a: 'It is a plant cell, because only plant cells have a cell wall and chloroplasts.'
    },
    items: [
      Q("Which cell part is the control center?", ["Nucleus", "Cell wall", "Vacuole", "Cytoplasm"], 0, "The nucleus holds the cell's instructions and controls what the cell does, like the main office of a factory."),
      Q("What does the cell membrane do?", ["Makes food from sunlight", "Controls what goes into and out of the cell", "Stores water only", "Gives the cell a boxy shape"], 1, "The membrane is like a gate guard. It lets some things in and out and keeps others out. The cell wall, not the membrane, gives plant cells a boxy shape."),
      Q("Which part is found ONLY in plant cells?", ["Nucleus", "Cell membrane", "Chloroplast", "Cytoplasm"], 2, "Chloroplasts are found in plant cells, not animal cells. The nucleus, membrane, and cytoplasm are found in both."),
      Q("What is the job of chloroplasts?", ["To store waste", "To help the cell move", "To protect the cell from germs", "To use sunlight to make food"], 3, "Chloroplasts capture energy from sunlight and use it to make sugar, which is the plant's food. They are what make leaves green."),
      Q("What is cytoplasm?", ["The jelly-like fluid that fills the cell", "The stiff outer wall", "The green part that makes food", "The cell's instructions"], 0, "Cytoplasm is the jelly-like material inside the cell where the other parts float and do their work."),
      Q("Why are plant cells usually boxy instead of round?", ["They have more nuclei", "They have a stiff cell wall", "They are colder", "They have no membrane"], 1, "The cell wall is a stiff layer outside the membrane. It holds the cell in a firm, boxy shape. Animal cells lack it and are rounder."),
      Q("What does a vacuole do?", ["Controls the cell", "Makes sugar from sunlight", "Stores water, food, or wastes", "Lets the cell swim"], 2, "A vacuole is a storage space. In plant cells, one large vacuole holds lots of water."),
      Q("Which three parts do BOTH plant and animal cells have?", ["Cell wall, chloroplast, nucleus", "Cell wall, cytoplasm, chloroplast", "Chloroplast, vacuole, cell wall", "Nucleus, cell membrane, cytoplasm"], 3, "Both cell types have a nucleus, a cell membrane, and cytoplasm. The cell wall and chloroplasts are found in plant cells."),
      Q("Why can't animals make their own food from sunlight?", ["Their cells have no chloroplasts", "Their cells have no nucleus", "They are too big", "They have too much cytoplasm"], 0, "Making food from sunlight happens in chloroplasts. Animal cells do not have them, so animals must eat other living things."),
      Q("A cell has a membrane, cytoplasm, and a nucleus, but no cell wall and no chloroplasts. What kind of cell is it most likely?", ["Plant cell", "Animal cell", "A leaf cell", "A cell from a tree trunk"], 1, "Without a cell wall or chloroplasts, it matches an animal cell. Leaf and tree cells are plant cells and would have a cell wall."),
      Q("In the passage, why did Hannah's tomato plant droop?", ["Its nucleus stopped working", "It had too much sunlight in its chloroplasts", "It was low on water, so its vacuoles shrank", "It was too cold"], 2, "On a hot day the plant ran low on water. Its vacuoles shrank and stopped pushing against the cell walls, so it wilted."),
      Q("In Eli's factory model, what were the chloroplasts?", ["The brick fence", "The gate guard", "The storage warehouse", "Green solar panels"], 3, "Eli called the chloroplasts green solar panels because they capture sunlight to make food."),
      Q("What did Eli compare the cell membrane to?", ["The gate guard", "The main office", "The factory floor", "The boss"], 0, "The membrane was the gate guard, deciding what could come in and what could leave the cell."),
      Q("What did Eli leave OUT of the animal cell drawing?", ["The nucleus and membrane", "The cell wall and chloroplasts", "The cytoplasm", "Everything"], 1, "Eli left out the brick fence (cell wall) and the solar panels (chloroplasts), because animal cells do not have them."),
      Q("How did the vacuoles help the watered plant stand tall again?", ["They grew new leaves", "They made sugar", "They filled with water and pressed outward against the cell walls", "They pulled the stem upward like a rope"], 2, "The passage compares it to air in a bike tire. Full vacuoles push against the cell walls, making stems and leaves firm.")
    ],
    activities: [
      { title: 'Zipper-bag cell models', time: '30 min',
        materials: ['2 sandwich zipper bags', 'a small clear plastic box or container that fits one bag', 'clear hair gel, corn syrup, or water (for cytoplasm)', 'a grape or large bead (nucleus)', 'green peas, green beads, or green paper circles (chloroplasts)', 'a small water balloon or small bag of water (vacuole)', 'labels and marker'],
        steps: [
          'Half fill both bags with gel, syrup, or water. This is the cytoplasm, and each bag is a cell membrane.',
          'Put a grape or bead in each bag for the nucleus.',
          'In ONE bag only, add green peas for chloroplasts and the small water balloon for a large vacuole.',
          'Seal both bags. Put the plant bag inside the clear box. The box is the cell wall.',
          'Gently squeeze each model. Notice which one keeps its shape.',
          'Label every part with a sticky note and its job.'
        ],
        observe: 'Which model held its shape when you squeezed it, and why? Which parts did only the plant cell have?' },
      { title: 'Wilt and recover', time: '10 min a day for 3 days',
        materials: ['a stalk of celery or a lettuce leaf', '2 cups', 'water', 'salt'],
        steps: [
          'Leave a celery stalk on the counter overnight with no water until it gets bendy.',
          'The next day, put it in a cup of plain water. Bend a second bendy stalk into a cup of very salty water.',
          'Predict what will happen to each one.',
          'Check after a few hours and again the next morning. Try bending each stalk gently.',
          'Record your observations in a table.'
        ],
        observe: 'Which stalk became firm again? Use what you know about vacuoles and water to explain your results.' }
    ],
    think: [
      "Create your own comparison for a plant cell, like Eli's factory, but use a school, a castle, or a city. Explain what each part would be and why.",
      "Explain why a plant cell needs chloroplasts but an animal cell does not. Include where each living thing gets its food."
    ]
  });

  // ============================== WEEK 31 ==============================
  C.unit('science', 31, {
    title: 'Helpful microorganisms',
    standard: 'S5L4',
    learn: [
      { h: 'What is a microorganism?', p: "A microorganism is a living thing so small that you need a microscope to see it. Micro means very small. Bacteria are one-celled microorganisms. Some fungi, like yeast, are microorganisms too. They live almost everywhere: in soil, water, air, food, and even on and inside your body." },
      { h: 'Microorganisms in our food', p: "Many foods depend on microorganisms. Yeast eats sugar and gives off a gas called carbon dioxide, which makes bread dough puff up. Helpful bacteria turn milk into yogurt and cheese. Some bacteria living in our intestines help us digest food." },
      { h: 'Decomposers', p: "Decomposers are living things that break down dead plants and animals. Many decomposers are bacteria and fungi. They return nutrients to the soil so new plants can grow. Without decomposers, dead leaves and logs would pile up everywhere." }
    ],
    passage: [
      "Every Saturday, Grace and her dad bake a loaf of bread. One week, Grace asked why the dough grew so much bigger while it sat in the bowl. Dad pointed to the little packet of yeast. “Yeast is alive,” he said. “Each grain is made of many tiny one-celled fungi. They are resting in the packet, but warm water wakes them up.”",
      "Grace stirred the yeast into warm water with a pinch of sugar. After ten minutes, the top of the cup was covered in foam. The yeast was eating the sugar and giving off bubbles of carbon dioxide gas. When she mixed the yeast into the flour, those gas bubbles got trapped in the stretchy dough. The dough rose to twice its size. In the oven, heat stopped the yeast, but the bubbles stayed behind as the little holes in every slice.",
      "While the bread baked, Dad opened a cup of yogurt. He read the label aloud: “Live and active cultures.” A culture is a group of microorganisms that people grow on purpose. In this case they were bacteria. To make yogurt, workers add these bacteria to warm milk. The bacteria use the milk's natural sugar and make an acid that thickens the milk and gives yogurt its tangy taste.",
      "After lunch, Grace dumped vegetable scraps and coffee grounds into the backyard compost pile. When Dad turned it with a shovel, the inside was warm. Bacteria and fungi were busy breaking down the old food. In a few months, the scraps would become dark, crumbly soil full of nutrients for their garden.",
      "“So microorganisms make our bread, our yogurt, and our dirt,” Grace said. Dad laughed. “And that's only the beginning.”"
    ],
    vocab: [
      ['microorganism', 'a living thing so small it can only be seen with a microscope'],
      ['bacteria', 'one-celled microorganisms; some are helpful and some cause illness'],
      ['yeast', 'a tiny one-celled fungus that eats sugar and gives off carbon dioxide gas'],
      ['fungi', 'a group of living things that includes yeast, molds, and mushrooms'],
      ['decomposer', 'a living thing that breaks down dead plants and animals into nutrients'],
      ['carbon dioxide', 'a gas given off by yeast and other living things; it makes bread rise']
    ],
    demo: {
      q: 'Why does bread dough rise when yeast is added?',
      steps: [
        'Step 1: Remember that yeast is a living microorganism.',
        'Step 2: Yeast eats sugar from the flour and gives off carbon dioxide gas.',
        'Step 3: The stretchy dough traps the gas bubbles, so the dough puffs up.',
        'Step 4: Baking stops the yeast, but the holes from the bubbles stay in the bread.'
      ],
      a: 'Yeast eats sugar and gives off carbon dioxide gas, and the trapped bubbles make the dough rise.'
    },
    items: [
      Q("What is a microorganism?", ["A very small rock", "A kind of machine", "A large plant", "A living thing too small to see without a microscope"], 3, "Micro means very small. Microorganisms are living things, like bacteria and yeast, that need a microscope to be seen."),
      Q("What gas does yeast give off?", ["Carbon dioxide", "Oxygen", "Helium", "Steam"], 0, "Yeast eats sugar and gives off carbon dioxide. The gas bubbles make bread dough rise."),
      Q("What group of living things does yeast belong to?", ["Plants", "Fungi", "Animals", "Rocks"], 1, "Yeast is a fungus, related to molds and mushrooms. It is not a plant because it does not make its own food from sunlight."),
      Q("Which food is made with the help of bacteria?", ["Table salt", "Plain water", "Yogurt", "Fresh apples"], 2, "Helpful bacteria change milk into yogurt. Water and salt are not made by living things, and apples grow on trees."),
      Q("What is a decomposer?", ["A machine that grinds food", "A plant that makes food from sunlight", "An animal that hunts", "A living thing that breaks down dead plants and animals"], 3, "Decomposers, such as many bacteria and fungi, break down dead material and return nutrients to the soil."),
      Q("Why are decomposers important?", ["They return nutrients to the soil so new plants can grow", "They make the weather", "They make animals sick", "They make rocks"], 0, "When decomposers break down dead things, the nutrients go back into the soil, and plants use them to grow."),
      Q("Where can microorganisms be found?", ["Only in labs", "Only in oceans", "Almost everywhere, including soil, water, food, and our bodies", "Only in outer space"], 2, "Microorganisms live almost everywhere on Earth, even inside your body."),
      Q("How do some bacteria in our intestines help us?", ["They give us eye color", "They make us grow taller", "They help us digest food", "They help us see in the dark"], 2, "Many helpful bacteria live in our intestines and help break down food. Not all bacteria are harmful."),
      Q("Which is a helpful use of microorganisms?", ["Making a cut infected", "Causing strep throat", "Spoiling milk left out", "Making cheese"], 3, "Cheese is made with the help of microorganisms. Strep throat, spoiled milk, and infections are harmful effects."),
      Q("Where are decomposers hard at work?", ["In a compost pile", "Inside a closed glass jar of salt", "On a metal spoon", "In a block of ice"], 0, "A compost pile is full of bacteria and fungi breaking down food scraps and leaves into rich soil."),
      Q("In the passage, what woke up the yeast?", ["Cold milk", "Warm water", "Salt", "The oven"], 1, "Dad explained that the yeast rests in the packet, and warm water wakes it up."),
      Q("What did Grace see on top of the cup after ten minutes?", ["Ice crystals", "Mold", "Foam", "Nothing"], 2, "The top of the cup was covered in foam made of carbon dioxide bubbles from the yeast."),
      Q("What makes the little holes in a slice of bread?", ["Air from the oven fan", "Water drops", "Bites from insects", "Bubbles of carbon dioxide trapped in the dough"], 3, "The passage explains that the gas bubbles stayed behind as the little holes in every slice, even after baking stopped the yeast."),
      Q("What did the yogurt label say?", ["Live and active cultures", "Contains no bacteria", "Made with yeast", "Keep frozen"], 0, "Dad read the label aloud: live and active cultures. A culture is a group of microorganisms grown on purpose."),
      Q("What did Dad notice when he turned the compost pile?", ["It was frozen", "The inside was warm", "It smelled like bread", "It was empty"], 1, "The inside of the pile was warm because bacteria and fungi were busy breaking down the food scraps.")
    ],
    activities: [
      { title: 'Yeast balloon test', time: '30 min',
        materials: ['2 packets of dry yeast', '2 empty plastic water bottles', '2 balloons', 'sugar', 'warm tap water (a parent checks it feels like a warm bath, not hot)', 'funnel', 'measuring cup and spoon'],
        steps: [
          'A parent checks the water temperature. Never use boiling water.',
          'Pour 1 cup of warm water into each bottle. Add one packet of yeast to each.',
          'Add 2 spoonfuls of sugar to bottle A only. Bottle B gets no sugar.',
          'Swirl both bottles gently. Stretch a balloon over each opening.',
          'Set them side by side in a warm spot and predict which balloon will grow more.',
          'Check every 10 minutes for 30 minutes and record what you see.'
        ],
        observe: 'Which balloon grew more? What gas filled it? What does this tell you about what yeast needs?' },
      { title: 'Decomposer watch (sealed bag)', time: '10 min to set up, then check for 2 weeks',
        materials: ['1 slice of apple', '1 piece of bread', 'a leaf from outside', 'a few drops of water', 'gallon zipper bag', 'tape', 'marker'],
        steps: [
          'Put the apple, bread, and leaf in the zipper bag with a few drops of water.',
          'Seal the bag and tape the seal shut. Write the date on it.',
          'Keep it in a warm place out of reach of pets and little kids.',
          'Every two days, look at it through the bag and draw what you see. Do not open the bag. Molds can bother people who have allergies.',
          'After two weeks, a parent throws the sealed bag away.'
        ],
        observe: 'Which item changed first? What evidence did you see that decomposers were at work? How is this like what happens on a forest floor?' }
    ],
    think: [
      "Explain how a world without decomposers would be different. What would happen to fallen leaves and dead logs?",
      "Many people think all bacteria are bad. Write a short paragraph using at least two examples to show that some microorganisms are helpful."
    ]
  });

  // ============================== WEEK 32 ==============================
  C.unit('science', 32, {
    title: 'Harmful microorganisms and staying healthy',
    standard: 'S5L4',
    learn: [
      { h: 'Germs that cause illness', p: "Some microorganisms are harmful. People often call them germs. Certain bacteria cause illnesses like strep throat. Viruses are even smaller germs. They are not made of cells, but they can make us sick with colds and the flu. Some molds can spoil food and make it unsafe to eat." },
      { h: 'How germs spread', p: "Germs travel in tiny drops from coughs and sneezes, on hands and surfaces like doorknobs, and in food or water that is not clean. When germs get into the body through the mouth, nose, eyes, or a cut, they can cause an infection." },
      { h: 'Ways to stay healthy', p: "Washing hands with soap and water is one of the best ways to stop germs. Covering coughs, cooking food all the way, and keeping cold foods in the refrigerator also help. Vaccines train the body's defenses to recognize a germ, so the body can fight it off quickly. Doctors may give medicine called antibiotics for illnesses caused by bacteria." }
    ],
    passage: [
      "In the 1800s, many people did not know that tiny living things could make them sick. A French scientist named Louis Pasteur did experiments that helped show that microorganisms cause milk and other foods to spoil and can cause disease. He found that gently heating liquids like milk killed many harmful microorganisms. Today this process is called pasteurization, and it is named after him. Look at a milk carton, and you may see the word pasteurized.",
      "Ivy learned about germs firsthand when her little brother, Sam, came home from co-op class with a runny nose and a cough. Mom said it was probably a cold, which is caused by a virus. “Will I catch it?” Ivy asked. Mom said she might, unless the family worked to stop the spread.",
      "So Ivy and Mom made a plan. First, everyone would wash their hands with soap and warm water for at least twenty seconds, about the time it takes to hum a short tune twice. Soap helps lift germs off the skin so water can rinse them away. Second, Sam would cough and sneeze into his elbow instead of his hand. Third, they would wipe the doorknobs, faucet handles, and the TV remote.",
      "Mom also told Ivy about vaccines. A vaccine is a kind of medicine, usually a shot, that teaches the body to recognize a certain germ. Later, if that germ shows up, the body is ready to fight it quickly. Ivy had gotten vaccines at her checkups since she was a baby.",
      "By the end of the week, Sam felt better. Ivy never caught his cold. She made a poster titled “Stop the Germs!” and hung it next to the bathroom sink."
    ],
    vocab: [
      ['germ', 'a common word for a microorganism or virus that can make people sick'],
      ['virus', 'a germ much smaller than bacteria that is not made of cells and causes illnesses like colds'],
      ['infection', 'an illness that happens when harmful germs get into the body and grow'],
      ['vaccine', 'a medicine that teaches the body to recognize and fight a certain germ'],
      ['pasteurization', 'gently heating a liquid like milk to kill harmful microorganisms'],
      ['antibiotic', 'a medicine that kills or stops harmful bacteria; it does not work on viruses']
    ],
    demo: {
      q: 'Your friend sneezes into her hand and then grabs the doorknob. How could germs get to you, and how could you stop them?',
      steps: [
        'Step 1: Trace the path. Germs from the sneeze go onto her hand, then onto the doorknob.',
        'Step 2: If you touch the doorknob and then your mouth, nose, or eyes, the germs can get into your body.',
        'Step 3: Break the path. She could sneeze into her elbow. The doorknob could be wiped clean.',
        'Step 4: You can wash your hands with soap for 20 seconds and keep your hands away from your face.'
      ],
      a: 'Germs travel from her hand to the doorknob to you; elbow sneezes, cleaning, and handwashing break that path.'
    },
    items: [
      Q("Which illness is caused by a virus?", ["A broken bone", "A sunburn", "The common cold", "A bee sting"], 2, "Colds are caused by viruses. A sunburn comes from the Sun's rays, and a broken bone and bee sting are injuries, not germ illnesses."),
      Q("Which is the best way to remove germs from your hands?", ["Rinse with cold water for two seconds", "Blow on them", "Wipe them on your shirt", "Wash with soap and water for at least 20 seconds"], 3, "Soap lifts germs off your skin, and scrubbing for 20 seconds gives it time to work before you rinse them away."),
      Q("Why should you sneeze into your elbow instead of your hand?", ["Your hands touch many things, so germs on them spread easily", "It is louder", "Elbows are warmer", "It makes the sneeze stop"], 0, "Hands touch doorknobs, food, and other people. Sneezing into your elbow keeps germs off your hands."),
      Q("What does a vaccine do?", ["It cleans your teeth", "It teaches your body to recognize a certain germ so it can fight it", "It makes you taller", "It kills all bacteria in the world"], 1, "A vaccine prepares the body's defenses ahead of time, so if the real germ comes, the body can fight it quickly."),
      Q("Antibiotics work against illnesses caused by...", ["Viruses", "Broken bones", "Bacteria", "Allergies"], 2, "Antibiotics kill or stop harmful bacteria. They do not work against viruses like the ones that cause colds."),
      Q("How can germs get into the body?", ["Only through the ears", "Through the mouth, nose, eyes, or cuts", "Only through the feet", "They cannot get in"], 1, "Germs often enter when we touch our face with dirty hands, or through a break in the skin like a cut."),
      Q("Why should leftover food go in the refrigerator?", ["Cold slows the growth of harmful microorganisms", "Cold kills every germ instantly", "It makes the food taste sweeter", "Refrigerators add vitamins"], 0, "Many harmful bacteria grow fast in warm food. Cold slows them down, so food stays safe longer. It does not kill every germ, which is why old leftovers still spoil."),
      Q("Which is a harmful effect of a microorganism?", ["Making bread rise", "Causing strep throat", "Turning milk into yogurt", "Breaking down leaves into soil"], 1, "Strep throat is an illness caused by bacteria. The other choices are helpful jobs microorganisms do."),
      Q("Which statement about viruses is true?", ["They are larger than bacteria", "Antibiotics kill them", "They are not made of cells", "They make bread rise"], 2, "Viruses are smaller than bacteria and are not made of cells. Antibiotics do not work on them."),
      Q("Why is cooking meat all the way through important?", ["It removes the bones", "It makes meat lighter", "Raw meat is always poisonous", "Heat kills harmful microorganisms that may be in raw meat"], 3, "Raw meat can carry harmful bacteria. Cooking it fully kills them so the food is safe to eat."),
      Q("In the passage, what did Louis Pasteur discover about heating milk?", ["Gently heating it killed many harmful microorganisms", "It made milk taste like chocolate", "It turned milk into cheese", "It made milk last forever"], 0, "Pasteur found that gentle heating killed many harmful microorganisms. This process, pasteurization, is named after him."),
      Q("Why did Ivy's brother get sick?", ["He ate spoiled food", "He probably had a cold, which is caused by a virus", "He had a broken arm", "He had too many vaccines"], 1, "Sam came home with a runny nose and a cough, and Mom said it was probably a cold, caused by a virus."),
      Q("About how long did Ivy's family plan to wash their hands?", ["Five seconds", "At least twenty seconds", "Two minutes", "One hour"], 1, "The plan was at least twenty seconds, about the time it takes to hum a short tune twice."),
      Q("Which item was NOT on the family's list to wipe clean?", ["Doorknobs", "Faucet handles", "The TV remote", "The car tires"], 3, "The passage lists doorknobs, faucet handles, and the TV remote. Car tires are not mentioned and are not touched with hands often."),
      Q("What did Ivy do at the end of the week?", ["She made a Stop the Germs! poster and hung it by the bathroom sink", "She caught the cold", "She went to the doctor", "She threw away all the soap"], 0, "Ivy never caught the cold, and she made a poster titled Stop the Germs! for next to the bathroom sink.")
    ],
    activities: [
      { title: 'Glitter germ handwashing test', time: '15 min',
        materials: ['a spoonful of lotion or cooking oil', 'glitter or a pinch of cinnamon', 'soap', 'sink with warm water', 'paper towels', 'timer'],
        steps: [
          'Rub a little lotion on your hands, then sprinkle on glitter. The glitter stands in for germs.',
          'Shake hands with a family member or touch a doorknob. See how far the glitter spreads. (Clean the doorknob afterward.)',
          'Rinse with cold water only for 5 seconds. Look at how much glitter is left.',
          'Now wash with soap and warm water for 20 seconds, scrubbing palms, backs, between fingers, and under nails.',
          'Dry your hands and check again.'
        ],
        observe: 'How much glitter stayed after a quick rinse compared with a full soap wash? What does this show about real germs?' },
      { title: 'Pepper and soap demo', time: '10 min',
        materials: ['a shallow plate or pie pan', 'water', 'ground black pepper', 'liquid dish soap', 'a cotton swab'],
        steps: [
          'Fill the plate with water and sprinkle pepper over the top. The pepper stands in for germs.',
          'Touch a clean, dry cotton swab to the middle of the water. Notice what happens.',
          'Dip the swab tip in dish soap.',
          'Touch the soapy swab to the middle of the water again. Watch the pepper closely.',
          'Draw a before and after picture.'
        ],
        observe: 'What did the soap do to the pepper? Explain how this demo is like (and unlike) soap helping to wash germs off your hands.' }
    ],
    think: [
      "Write three rules for a Stop the Germs! poster for your home. For each rule, explain how it breaks the path germs use to spread.",
      "Explain why a doctor might give an antibiotic for strep throat but not for a cold."
    ]
  });

  // ============================== WEEK 33 ==============================
  C.unit('science', 33, {
    title: 'Thinking like a scientist: fair tests and data',
    standard: 'S5 science practices',
    learn: [
      { h: 'Steps scientists use', p: "Scientists start with a question they can test. They make a hypothesis, which is a testable guess based on what they already know. Then they plan an experiment, collect data, look for patterns, and write a conclusion that answers the question. Finally, they share what they learned." },
      { h: 'Variables and fair tests', p: "A variable is anything that can change in an experiment. The independent variable is the one thing you change on purpose. The dependent variable is what you measure to see the result. Controlled variables are everything you keep the same. A fair test changes only one variable at a time." },
      { h: 'Recording data', p: "Data are the facts and measurements you collect. Scientists write data in tables so they stay organized. They repeat each test more than once, called trials, so one strange result does not fool them. Graphs help show patterns quickly." }
    ],
    passage: [
      "Zoe wanted to know if a ramp's height changes how far a toy car rolls. That was her question. She thought about sledding down hills and wrote her hypothesis: “If the ramp is higher, then the car will roll farther, because it will be going faster at the bottom.”",
      "Zoe built a ramp from a long piece of cardboard and a stack of books. The height of the ramp was her independent variable, the one thing she would change. The distance the car rolled was her dependent variable, the thing she would measure. To make it a fair test, she kept everything else the same. She used the same car, the same cardboard, the same smooth floor, and she always let go of the car without pushing it. These were her controlled variables.",
      "She tested three heights: one book, two books, and three books. For each height she did three trials, measuring with a tape measure from the end of the ramp to the front of the car. She wrote every number in a data table. With one book, the car rolled 41, 44, and 42 inches. With two books, it rolled 70, 68, and 72 inches. With three books, it rolled 95, 99, and 97 inches.",
      "Zoe noticed that one trial in her practice round had gone only 20 inches. Then she saw the reason: her brother's sock had been lying on the floor. Because she had planned several trials, one strange result could not fool her. She removed the sock and kept going.",
      "In her conclusion, Zoe wrote that the data supported her hypothesis. The higher the ramp, the farther the car rolled. She made a bar graph and shared it with her family at dinner."
    ],
    vocab: [
      ['hypothesis', 'a testable guess based on what you already know, often written as if... then...'],
      ['variable', 'anything in an experiment that can change'],
      ['independent variable', 'the one thing a scientist changes on purpose in an experiment'],
      ['dependent variable', 'the result a scientist measures to see what happened'],
      ['controlled variable', 'something kept the same so the test is fair'],
      ['trial', 'one time running a test; scientists repeat trials to check their results']
    ],
    demo: {
      q: 'Jon wants to find out if plants grow taller with more sunlight. Name his independent, dependent, and controlled variables.',
      steps: [
        'Step 1: Ask: what will he change on purpose? The amount of sunlight. That is the independent variable.',
        'Step 2: Ask: what will he measure? How tall the plants grow. That is the dependent variable.',
        'Step 3: Ask: what must stay the same? The kind of plant, the pot size, the soil, and the amount of water. Those are controlled variables.',
        'Step 4: Check: only one thing (sunlight) is changing, so it is a fair test.'
      ],
      a: 'Sunlight is the independent variable, plant height is the dependent variable, and plant type, soil, pot, and water are controlled variables.'
    },
    items: [
      Q("What is a hypothesis?", ["A final answer that is always right", "A testable guess based on what you know", "A list of materials", "A kind of graph"], 1, "A hypothesis is a testable prediction. It might turn out right or wrong, and the experiment checks it."),
      Q("In a fair test, how many variables should you change on purpose?", ["None", "Only one", "Two", "As many as possible"], 1, "If you change more than one thing, you cannot tell which change caused the result. A fair test changes only one variable."),
      Q("Mia tests whether salt water or fresh water freezes faster. What is the independent variable?", ["The temperature of the freezer", "The time it takes to freeze", "The size of the cups", "The type of water (salt or fresh)"], 3, "The type of water is what Mia changes on purpose. The time to freeze is what she measures, so it is the dependent variable."),
      Q("In the same freezing test, what is the dependent variable?", ["The time it takes to freeze", "The cup size", "The type of water", "The freezer"], 0, "The dependent variable is the result you measure. Mia measures how long each cup takes to freeze."),
      Q("Which is a controlled variable in the freezing test?", ["Using salt water in one cup", "Using the same size cups with the same amount of water", "Measuring time", "Writing a hypothesis"], 1, "Keeping cup size and water amount the same makes the test fair, so only the type of water could cause any difference."),
      Q("Why do scientists repeat trials?", ["To use up materials", "Because the first trial is always wrong", "So one strange result does not fool them", "To make the experiment longer"], 2, "Repeating trials shows whether results are consistent. If one trial is very different, the scientist can look for a mistake."),
      Q("What is the best way to organize measurements as you collect them?", ["Keep them in your head", "Tell a friend", "Draw a picture only", "Write them in a data table"], 3, "A data table keeps numbers organized and labeled so you can compare them and make graphs later."),
      Q("Which is a question that can be tested with an experiment?", ["Does warm water dissolve sugar faster than cold water?", "Which color is the prettiest?", "What is the best song?", "Are cats nicer than dogs?"], 0, "A testable question can be answered by measuring something. You can time how long sugar takes to dissolve. The others are opinions."),
      Q("A student tests two paper towel brands but uses a big spill for one and a small spill for the other. What is wrong?", ["Nothing is wrong", "The test is not fair because two things changed", "Paper towels cannot be tested", "She needs a third brand"], 1, "Both the brand and the spill size changed, so she cannot tell which one caused the difference. Spill size should be controlled."),
      Q("If your data do not support your hypothesis, what should you do?", ["Change the numbers", "Throw away the experiment", "Say what the data show and think about why", "Pretend it worked"], 2, "Honest scientists report what the data really show. A hypothesis that is not supported still teaches you something."),
      Q("In the passage, what was Zoe's independent variable?", ["The distance the car rolled", "The floor", "The type of car", "The height of the ramp"], 3, "Zoe changed the ramp's height on purpose by using one, two, or three books."),
      Q("How many trials did Zoe do at each height?", ["One", "Two", "Three", "Ten"], 2, "The passage says she did three trials for each height."),
      Q("How far did the car roll in the trials with two books?", ["41, 44, and 42 inches", "70, 68, and 72 inches", "95, 99, and 97 inches", "20 inches each time"], 1, "With two books, the car rolled 70, 68, and 72 inches."),
      Q("What caused the strange 20-inch trial?", ["The ramp fell over", "She used a different car", "Her brother's sock was lying on the floor", "She pushed the car too hard"], 2, "Zoe found her brother's sock on the floor. Removing it helped keep her test fair."),
      Q("What did Zoe's data show?", ["The car went the same distance every time", "Ramp height made no difference", "The lowest ramp made the car go farthest", "The higher the ramp, the farther the car rolled"], 3, "Each higher ramp gave longer distances, so the data supported her hypothesis.")
    ],
    activities: [
      { title: 'Paper towel absorbency test', time: '30 min',
        materials: ['2 or 3 kinds of paper towel or napkin', 'measuring cup', 'water', 'a bowl', 'scissors', 'ruler', 'notebook'],
        steps: [
          'Write a question and a hypothesis: Which towel holds the most water?',
          'Cut one square of each towel, all the same size. Name your independent, dependent, and controlled variables.',
          'Fill the measuring cup to an exact line. Dip one square in the bowl of water for 5 seconds, lift it out, and let it drip for 5 seconds.',
          'Squeeze the water from the square back into the empty measuring cup and record how much there is.',
          'Repeat with each towel. Do 3 trials for each.',
          'Make a data table and a bar graph of your results.'
        ],
        observe: 'Which towel held the most water? Did your data support your hypothesis? What did you keep the same to make it fair?' },
      { title: 'Ramp and roll', time: '25 min',
        materials: ['a toy car or round ball', 'a long piece of cardboard or a board', 'books', 'tape measure', 'masking tape'],
        steps: [
          'Repeat Zoe\'s experiment, or choose a new independent variable, such as the surface the car rolls onto (carpet, tile, towel).',
          'Write your hypothesis using if... then... because.',
          'Mark a start line on the ramp with masking tape so every release starts in the same place.',
          'Run 3 trials for each condition. Measure the distance and write it in a table.',
          'Find which result was most common or average for each condition.',
          'Make a bar graph and write a conclusion.'
        ],
        observe: 'What was your independent variable, and what was your dependent variable? Name three controlled variables you kept the same.' }
    ],
    think: [
      "Design a fair test to find out whether music helps plants grow. Name your question, hypothesis, and all three kinds of variables.",
      "Explain why a scientist who changes two variables at once cannot trust her conclusion. Give an example."
    ]
  });

  // ============================== WEEK 34 ==============================
  C.unit('science', 34, {
    title: 'Engineering design: build, test, improve',
    standard: 'S5 engineering design',
    learn: [
      { h: 'What engineers do', p: "Engineers use science and math to solve problems by designing things, like bridges, phones, and wheelchairs. They do not usually get it perfect the first time. Instead, they follow a cycle and keep improving their design." },
      { h: 'The design cycle', p: "First, define the problem. Second, brainstorm many ideas and choose one. Third, plan and build a model or prototype. Fourth, test it. Fifth, improve it based on what the test showed, and test again. Last, share your design and what you learned." },
      { h: 'Criteria and constraints', p: "Criteria are the goals a design must meet, like holding 50 pennies. Constraints are the limits you must work within, like using only paper and tape or finishing in 30 minutes. A good design meets the criteria without breaking the constraints." }
    ],
    passage: [
      "Mr. Diaz gave his homeschool science club a challenge. “Build a bridge that spans a 10-inch gap between two stacks of books. It must hold as many pennies as possible in a paper cup. You may use only 5 sheets of paper and 12 inches of tape, and you have 30 minutes.”",
      "Aria wrote the problem at the top of her page. Under it she listed the criteria: span 10 inches and hold the most pennies. Then she listed the constraints: 5 sheets of paper, 12 inches of tape, and 30 minutes.",
      "Next, Aria brainstormed. She sketched a flat bridge, a bridge with folded sides, and a bridge made of rolled tubes. She picked the flat bridge because it was the fastest to build. During testing, it sagged in the middle and dropped the cup after only 6 pennies.",
      "Aria did not give up. She looked closely at what went wrong. The flat paper bent too easily. She remembered that cardboard is stronger when it is folded into ridges. So she folded two sheets back and forth, like a paper fan, and taped them side by side. That was her second prototype, or test model. It held 38 pennies before it buckled.",
      "For her third try, she rolled three sheets into tight tubes and laid them under the folded deck as beams. This time the bridge held 61 pennies! Aria still had 2 inches of tape left, so she stayed within her constraints.",
      "When the club shared their results, Aria explained that her first design failed, but each test taught her something. Mr. Diaz said that is what real engineers do. They test, learn from failure, and improve. He pointed out that folding and rolling paper changed its shape, not the material, and the shape made it stronger."
    ],
    vocab: [
      ['engineer', 'a person who uses science and math to design solutions to problems'],
      ['prototype', 'an early model of a design that is built to be tested'],
      ['criteria', 'the goals a design must meet to be successful'],
      ['constraint', 'a limit a design must work within, such as materials, time, or cost'],
      ['brainstorm', 'to come up with many ideas quickly before choosing one'],
      ['improve', 'to make a design better based on what testing showed']
    ],
    demo: {
      q: 'Your egg-drop container cracked the egg when dropped from 6 feet. What should you do next?',
      steps: [
        'Step 1: Study the failure. Where did the egg crack? Did it hit the side or the bottom?',
        'Step 2: Think about why. Maybe there was not enough padding, or the container landed too hard.',
        'Step 3: Change one thing, like adding more padding or a parachute, and keep the rest the same.',
        'Step 4: Test again from the same height and record the result.'
      ],
      a: 'Study why it failed, improve one part of the design, and test again from the same height.'
    },
    items: [
      Q("What is the first step of the engineering design cycle?", ["Define the problem", "Build the model", "Share the results", "Test the model"], 0, "Engineers must first understand exactly what problem they are solving. Building before defining the problem wastes time and materials."),
      Q("What is a prototype?", ["The final product sold in stores", "An early model built to test a design", "A list of rules", "A kind of tape"], 1, "A prototype is a test model. Engineers build it, test it, and use what they learn to improve it."),
      Q("Which is a constraint?", ["The bridge must hold 50 pennies", "The bridge should look nice", "You may use only 5 sheets of paper", "The bridge should be strong"], 2, "A constraint is a limit, like how many materials you may use. Holding 50 pennies is a criterion, a goal to meet."),
      Q("Which is a criterion?", ["You have 30 minutes", "You can use only tape and paper", "You cannot spend more than one dollar", "The boat must float while holding 20 marbles"], 3, "Criteria describe what success looks like. Floating with 20 marbles is the goal. Time, materials, and money are constraints."),
      Q("A design fails its test. What should an engineer do?", ["Study why it failed and improve it", "Quit", "Hide the results", "Start a completely different project"], 0, "Failures give useful information. Engineers figure out what went wrong, improve the design, and test again."),
      Q("Why do engineers brainstorm many ideas?", ["To make the project take longer", "To have more choices before picking the best one", "Because the first idea is always wrong", "To use more paper"], 1, "Brainstorming many ideas gives more options. The best solution may not be the first one you think of."),
      Q("When improving a design, why is it smart to change one thing at a time?", ["To save glue", "Because changing things is against the rules", "So you know which change made the difference", "It is not smart"], 2, "Just like a fair test in science, changing one thing at a time shows which change helped or hurt."),
      Q("Which shape change usually makes a sheet of paper stronger for holding weight?", ["Keeping it flat", "Tearing it in half", "Crumpling it into a ball", "Folding it into ridges or rolling it into a tube"], 3, "Folded ridges and rolled tubes resist bending much better than flat paper, even though the material is the same."),
      Q("For an egg drop, which feature would most likely help protect the egg?", ["Soft padding or a parachute to slow the fall", "A heavy rock tied to the container", "Making the container smaller than the egg", "Painting the container"], 0, "Padding spreads out the force of landing, and a parachute slows the fall. Both help keep the egg from cracking."),
      Q("What is the last step in the design cycle?", ["Define the problem", "Share the design and what you learned", "Brainstorm", "Throw the prototype away"], 1, "Engineers share their results so others can learn from them and build on the ideas."),
      Q("In the passage, what were the constraints of Mr. Diaz's challenge?", ["Span 10 inches and hold many pennies", "5 sheets of paper, 12 inches of tape, and 30 minutes", "Use only cardboard", "Build it at home"], 1, "The constraints were the limits: 5 sheets of paper, 12 inches of tape, and 30 minutes. Spanning the gap and holding pennies were the criteria."),
      Q("Why did Aria first choose the flat bridge?", ["It was the strongest", "It used the most tape", "Mr. Diaz told her to", "It was the fastest to build"], 3, "The passage says she picked the flat bridge because it was the fastest to build."),
      Q("How many pennies did Aria's second prototype hold?", ["6", "38", "61", "100"], 1, "Her folded, fan-shaped bridge held 38 pennies before it buckled."),
      Q("What did Aria add to her third design?", ["More tape on top", "Rolled paper tubes as beams under the deck", "A cardboard base", "Glue"], 1, "She rolled three sheets into tight tubes and laid them under the folded deck as beams. It held 61 pennies."),
      Q("What did Mr. Diaz say made Aria's bridge stronger?", ["Using a stronger material", "Using more tape than allowed", "Changing the shape of the paper", "Adding pennies slowly"], 2, "He pointed out that folding and rolling changed the paper's shape, not the material, and the shape made it stronger.")
    ],
    activities: [
      { title: 'Paper bridge challenge', time: '40 min',
        materials: ['5 sheets of printer paper', '12 inches of tape', 'scissors', '2 equal stacks of books', 'a small paper cup', 'pennies or other coins', 'ruler'],
        steps: [
          'Set the book stacks 10 inches apart. Write the problem, criteria, and constraints in your notebook.',
          'Brainstorm and sketch at least three bridge ideas. Pick one.',
          'Build your first prototype using only your 5 sheets and 12 inches of tape.',
          'Lay it across the gap, set the cup in the middle, and add pennies one at a time until it fails. Record the number.',
          'Study why it failed. Build an improved version, changing one main idea.',
          'Test again and record. Compare your results in a table.'
        ],
        observe: 'What was your best result? What change helped the most, and why do you think it worked?' },
      { title: 'Egg drop (parent helps)', time: '45 min',
        materials: ['raw eggs (or water balloons as a less messy choice)', 'zipper bags', 'household items: cotton balls, paper, straws, rubber bands, plastic bags, cardboard, tape', 'a tarp or old towel to land on'],
        steps: [
          'Criteria: the egg survives a drop. Constraints: use only the items given and no more than 12 straws.',
          'Put the egg in a zipper bag first so any mess stays inside.',
          'Design and build a container that protects the egg.',
          'A parent does the drop from a safe spot, like standing on the ground and holding it high, or from a low porch step. Never climb on furniture or roofs.',
          'Check the egg. Record the height and result.',
          'Improve one thing and test again from the same height.'
        ],
        observe: 'Which part of your design protected the egg best? What would you change if you could use one more material?' }
    ],
    think: [
      "Explain the difference between criteria and constraints. Use a new example, such as designing a lunch box or a bird feeder.",
      "Why is failing a test an important part of engineering? Describe a time when you learned something from a mistake."
    ]
  });

  // ============================== WEEK 35 ==============================
  C.unit('science', 35, {
    title: 'Review: physical science',
    standard: 'S5P1, S5P2, S5P3',
    learn: [
      { h: 'Physical and chemical changes', p: "In a physical change, a material changes size, shape, or state, but it is still the same substance, like cutting paper or melting ice. In a chemical change, a new substance forms. Signs include a new color, bubbles of gas, light, heat, or a new smell, like burning wood, baking a cake, or iron rusting. Mixtures and solutions are physical changes." },
      { h: 'Electricity', p: "Static electricity is charge that builds up and jumps. Current electricity flows in a closed circuit. Conductors, like metals, let electricity flow. Insulators, like rubber and plastic, block it. Series circuits have one path; parallel circuits have several." },
      { h: 'Magnets', p: "Magnets attract iron, nickel, and cobalt. Opposite poles attract and like poles repel. An electromagnet is a coil of wire around an iron core with electricity flowing through it. It can be turned on and off, and more coils make it stronger." }
    ],
    passage: [
      "For her end-of-year review, Maya set up a science museum in the living room. Her family bought pretend tickets and walked from table to table while Maya explained each display.",
      "At the first table, Maya showed two kinds of changes. She tore a sheet of paper into pieces. “Physical change,” she said. “It is still paper, just smaller.” Then she showed an old nail with orange flakes on it. “This is rust. Iron mixed with oxygen and water and made a new substance. That makes it a chemical change.” Next she dropped a spoonful of baking soda into vinegar. It fizzed wildly. “Bubbles of gas are a sign of a chemical change too.”",
      "The second table held a jar of muddy water and a cup of lemonade. “Both are mixtures,” Maya said. “But the sugar in the lemonade is dissolved, so the lemonade is a solution. The mud will settle to the bottom if you wait, and a filter can catch it.”",
      "At the third table, Maya flipped a switch on a battery-powered circuit she had built with her dad. Two bulbs lit up. She unscrewed one, and the other stayed lit. “This is a parallel circuit,” she said. “Each bulb has its own path.” Then she showed a tester. The bulb glowed when she touched a spoon across the gap, but not when she used a plastic straw. “The spoon is a conductor. The straw is an insulator.”",
      "The last table had a compass, two bar magnets, and a nail wrapped in wire. Maya connected the wire to a D battery for a few seconds, and the nail lifted three paper clips. When she disconnected it, they fell. “An electromagnet,” she announced. “Magnetism you can turn off.”",
      "Her little brother clapped and asked for his ticket money back so he could buy another tour."
    ],
    vocab: [
      ['physical change', 'a change in size, shape, or state where no new substance forms'],
      ['chemical change', 'a change that makes a new substance, like rusting or burning'],
      ['solution', 'a mixture in which one material dissolves evenly into another'],
      ['conductor', 'a material that lets electricity flow easily'],
      ['parallel circuit', 'a circuit with more than one path for electricity'],
      ['electromagnet', 'a magnet made by electricity flowing through a coil of wire around an iron core']
    ],
    demo: {
      q: 'Is toasting bread a physical change or a chemical change?',
      steps: [
        'Step 1: Ask: did a new substance form, or is it the same material in a new shape or size?',
        'Step 2: Look for signs. The bread turns brown, smells different, and becomes crunchy.',
        'Step 3: A new color and a new smell are signs of a chemical change.',
        'Step 4: Check: you cannot turn toast back into soft bread, which also fits a chemical change.'
      ],
      a: 'Toasting bread is a chemical change, because new substances form that give it a brown color and new smell.'
    },
    items: [
      Q("Which is a chemical change?", ["Ice melting", "Paper being cut", "Salt dissolving in water", "Wood burning"], 3, "Burning makes new substances like ash and smoke, so it is a chemical change. Melting, cutting, and dissolving are physical changes."),
      Q("Which is a physical change?", ["Water freezing into ice", "An apple slice turning brown", "A cake baking", "A nail rusting"], 0, "Freezing only changes water's state from liquid to solid. It is still water. The others make new substances."),
      Q("Which is a sign of a chemical change?", ["A material changes shape", "Bubbles of gas form when two materials mix", "A material gets cut in half", "A material is poured into a new cup"], 1, "Gas bubbles forming, like baking soda and vinegar, show a new substance being made. Shape changes and pouring are physical."),
      Q("What is the best way to separate sand from water?", ["A magnet", "A thermometer", "A filter", "A compass"], 2, "Sand grains are too big to pass through a filter, but water flows through. Sand is not magnetic."),
      Q("Rubbing a balloon on your hair and having it stick to a wall shows...", ["Current electricity", "Evaporation", "Magnetism", "Static electricity"], 3, "Rubbing moves charges, building up static electricity. Opposite charges on the balloon and wall attract."),
      Q("A circuit has a gap in it. What kind of circuit is it?", ["Open circuit", "Closed circuit", "Parallel circuit", "Magnetic circuit"], 0, "A gap means the path is not complete, so it is an open circuit and electricity cannot flow."),
      Q("Which material is an insulator?", ["Aluminum foil", "A rubber glove", "Copper wire", "A steel key"], 1, "Rubber blocks electricity, so it is an insulator. Aluminum, copper, and steel are metals that conduct."),
      Q("In a series circuit, one bulb burns out. What happens to the others?", ["They stay lit", "They get brighter", "They all go out", "They change color"], 2, "A series circuit has only one path, so one burned-out bulb breaks the loop for all of them."),
      Q("Which object would a magnet attract?", ["A plastic button", "A glass marble", "A copper penny", "A steel paper clip"], 3, "Steel contains iron, which magnets attract. Copper, plastic, and glass are not attracted."),
      Q("How can you make an electromagnet stronger?", ["Add more coils of wire", "Use fewer coils", "Remove the iron nail", "Disconnect the battery"], 0, "More coils of wire make an electromagnet stronger. Removing the core or the battery makes it weaker or stops it."),
      Q("In the passage, what did Maya use to show a chemical change with bubbles?", ["Ice and salt", "Baking soda and vinegar", "Sand and water", "Lemonade and sugar"], 1, "Maya dropped baking soda into vinegar, and it fizzed. Gas bubbles are a sign of a chemical change."),
      Q("Why did Maya say lemonade is a solution?", ["It is yellow", "It has ice", "The sugar is dissolved in it", "It settles to the bottom"], 2, "Maya explained that the sugar in lemonade is dissolved, making it a solution. Mud settles, so muddy water is not a solution."),
      Q("How did Maya show that her circuit was parallel?", ["She removed one bulb and the other stayed lit", "Both bulbs went out", "She added a magnet", "She used a plastic straw"], 0, "When she unscrewed one bulb, the other stayed lit, which shows each bulb had its own path."),
      Q("How many paper clips did Maya's electromagnet lift?", ["One", "Three", "Nine", "Twelve"], 1, "The passage says the nail lifted three paper clips, and they fell when she disconnected the battery."),
      Q("What made the old nail's rust a chemical change?", ["It was smaller", "Iron combined with oxygen and water to make a new substance", "It was painted orange", "It was bent"], 1, "Maya explained that the iron mixed with oxygen and water and made a new substance, rust.")
    ],
    activities: [
      { title: 'Change detective stations', time: '30 min',
        materials: ['ice cube', 'paper', 'baking soda', 'vinegar', 'a cup', 'a slice of apple', 'a glass of water', 'sugar', 'a small tray'],
        steps: [
          'Set up four stations: melting ice, tearing paper, baking soda with vinegar, and sugar in water.',
          'Add a fifth station: leave an apple slice on a plate for 30 minutes and watch its color.',
          'At each station, record what you see, hear, and smell.',
          'Decide if each is a physical or chemical change. Write the clue that helped you decide.',
          'Do the baking soda and vinegar on a tray, and do not taste or mix any other kitchen chemicals.'
        ],
        observe: 'Which changes made a new substance? What signs did you notice? Which change surprised you?' },
      { title: 'Teach-back museum', time: '40 min',
        materials: ['any materials from the electricity and magnet labs (D, AA, or AAA batteries only)', 'paper', 'markers', 'tape'],
        steps: [
          'Choose three topics: mixtures, electricity, and magnets.',
          'For each topic, set up a small display with one hands-on example and a sign with two key facts.',
          'A parent supervises anything with batteries. Never use a wall outlet.',
          'Give a tour to your family, explaining each display in your own words.',
          'Ask each visitor one quiz question at the end of the tour.'
        ],
        observe: 'Which topic was easiest to explain? Which question from your visitors was hardest to answer, and what did you say?' }
    ],
    think: [
      "Choose one physical change and one chemical change you see at home. Explain the evidence that tells you which is which.",
      "Compare a refrigerator magnet and an electromagnet. Explain one way they are alike and two ways they are different."
    ]
  });

  // ============================== WEEK 36 ==============================
  C.unit('science', 36, {
    title: 'Review: life science',
    standard: 'S5L1, S5L2, S5L3, S5L4',
    learn: [
      { h: 'Classifying living things', p: "Animals are sorted into vertebrates (with a backbone) and invertebrates (without one). The five vertebrate groups are mammals, birds, reptiles, amphibians, and fish. Plants are sorted into seed and non-seed plants, and into vascular plants (with tubes) and nonvascular plants (without tubes)." },
      { h: 'Traits and behaviors', p: "Inherited traits come from parents, like eye color. Acquired traits are gained during life, like a scar. Instincts are behaviors an animal is born with, like a spider spinning a web. Learned behaviors come from practice or teaching, like reading." },
      { h: 'Cells and microorganisms', p: "All living things are made of cells. Plant and animal cells both have a nucleus, membrane, and cytoplasm; only plant cells have a cell wall and chloroplasts. Microorganisms are too small to see without a microscope. Some help us, like yeast and decomposers, and some cause illness, like certain bacteria." }
    ],
    passage: [
      "Olivia's grandmother loved to play a game called Twenty Questions. She would think of a living thing, and Olivia had to guess it by asking yes-or-no questions. This time, Olivia decided to use everything she had learned in life science.",
      "“Is it made of cells?” Olivia asked first. Grandma laughed. “Every living thing is made of cells, so yes!” Olivia grinned. That had been a warm-up question.",
      "“Is it a plant?” “No.” “Is it an animal?” “Yes.” “Does it have a backbone?” “Yes.” Now Olivia knew it was a vertebrate. She thought about the five groups. “Does it have feathers?” “No.” “Does it have hair or fur?” “No.” “Does it have moist skin?” “No.” That meant it was not a bird, a mammal, or an amphibian. “Does it breathe with gills?” “No.” Only one group was left: reptiles.",
      "“Does it live in Georgia?” “Yes.” “Does it have a shell?” “Yes.” “Does it dig burrows in sandy soil?” “Yes!” Olivia shouted, “It's a gopher tortoise!” Grandma clapped. It took only twelve questions.",
      "Then they switched. Olivia chose a microorganism. Grandma asked, “Can I see it without a microscope?” “Only a big group of them, not one by itself.” “Is it helpful?” “Yes.” “Is it used in the kitchen?” “Yes.” “Does it make bread rise?” “Yes!” Grandma guessed yeast.",
      "Before bed, Olivia made a list of good questions for next time: Is it a vertebrate? Does it have tubes? Does it make seeds? Is this trait inherited or learned? She realized that the questions scientists ask to classify living things work just like a great guessing game."
    ],
    vocab: [
      ['vertebrate', 'an animal with a backbone'],
      ['vascular plant', 'a plant with tubes that carry water and food'],
      ['inherited trait', 'a feature passed from parents to offspring'],
      ['instinct', 'a behavior an animal is born knowing how to do'],
      ['chloroplast', 'a green plant cell part that uses sunlight to make food'],
      ['decomposer', 'a living thing that breaks down dead material and returns nutrients to the soil']
    ],
    demo: {
      q: 'Use yes-or-no questions to classify an animal that has a backbone, dry scales, and lays eggs on land.',
      steps: [
        'Step 1: Backbone? Yes, so it is a vertebrate.',
        'Step 2: Feathers? No. Hair or fur? No. So it is not a bird or a mammal.',
        'Step 3: Moist skin? No, so it is not an amphibian. Gills? No, so it is not a fish.',
        'Step 4: Dry scales and eggs laid on land match the last group.'
      ],
      a: 'It is a reptile.'
    },
    items: [
      Q("Which animal is an invertebrate?", ["Bullfrog", "Robin", "Earthworm", "Rabbit"], 2, "An earthworm has no backbone. A robin, bullfrog, and rabbit are all vertebrates."),
      Q("Which group of vertebrates has moist skin and usually starts life in water?", ["Reptiles", "Birds", "Mammals", "Amphibians"], 3, "Amphibians, like frogs and salamanders, have moist skin and often begin life in water with gills."),
      Q("Which plant is nonvascular?", ["Moss", "Fern", "Pine tree", "Rose"], 0, "Moss has no tubes, so it is nonvascular and stays small. Pines, ferns, and roses all have tubes."),
      Q("Which plant makes spores instead of seeds and is vascular?", ["Moss", "Fern", "Apple tree", "Sunflower"], 1, "Ferns have tubes but reproduce with spores. Moss uses spores but has no tubes. Apple trees and sunflowers make seeds."),
      Q("Which is a learned behavior?", ["A baby bird opening its mouth for food", "A spider spinning a web", "A dog rolling over on command", "A baby crying"], 2, "Rolling over on command must be taught. The other behaviors are instincts the animals are born with."),
      Q("A boy has curly hair like his mother and a scar from falling off his bike. Which is inherited?", ["The scar", "The curly hair", "Both", "Neither"], 1, "Curly hair was passed from his mother, so it is inherited. The scar happened during his life, so it is acquired."),
      Q("Which part is found in plant cells but NOT animal cells?", ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"], 0, "Plant cells have a stiff cell wall. Both kinds of cells have a nucleus, membrane, and cytoplasm."),
      Q("Which cell part controls the cell's activities?", ["Vacuole", "Nucleus", "Cell wall", "Chloroplast"], 1, "The nucleus is the control center. It holds the cell's instructions."),
      Q("What do chloroplasts do?", ["Store water", "Control what enters the cell", "Use sunlight to make food", "Protect the cell from germs"], 2, "Chloroplasts capture sunlight to make sugar, the plant's food. The vacuole stores water, and the membrane controls what enters."),
      Q("Which shows a HELPFUL microorganism?", ["Bacteria causing strep throat", "A virus causing the flu", "Mold spoiling bread", "Yeast making bread rise"], 3, "Yeast is a helpful microorganism that makes bread rise. The others cause illness or spoil food."),
      Q("Which habit best helps stop the spread of harmful germs?", ["Washing hands with soap for 20 seconds", "Sharing water bottles", "Sneezing into your hand", "Touching your face often"], 0, "Handwashing with soap removes germs. Sharing bottles, sneezing into your hand, and touching your face help germs spread."),
      Q("In the passage, what was Olivia's first question, and why did Grandma laugh?", ["Is it a plant? because it was obviously not", "Is it made of cells? because every living thing is", "Is it a bird? because birds were the answer", "Is it big? because size does not matter"], 1, "Olivia asked whether it was made of cells. Grandma laughed because every living thing is made of cells, so the answer had to be yes."),
      Q("Which clue told Olivia the animal was not a fish?", ["It had no feathers", "It did not have moist skin", "It did not breathe with gills", "It lived in Georgia"], 2, "Fish breathe with gills. When Grandma said no to gills, Olivia ruled out fish and knew it was a reptile."),
      Q("How many questions did it take Olivia to guess the gopher tortoise?", ["Five", "Twelve", "Twenty", "Thirty"], 1, "The passage says it took only twelve questions."),
      Q("What microorganism did Olivia choose?", ["Yeast", "Mold", "Bacteria in yogurt", "A virus"], 0, "Grandma guessed yeast after learning it was helpful, used in the kitchen, and makes bread rise.")
    ],
    activities: [
      { title: 'Twenty Questions: science edition', time: '20 min',
        materials: ['a family member to play with', 'paper and pencil to tally questions'],
        steps: [
          'Take turns thinking of a living thing: an animal, a plant, or a microorganism.',
          'The guesser may ask only yes-or-no questions. Keep a tally of how many are used.',
          'Try to use science questions first: backbone? feathers? tubes? seeds? one cell?',
          'After each round, write down the questions that helped the most.',
          'Play at least four rounds and try to beat your best score.'
        ],
        observe: 'Which questions narrowed things down the fastest? Why do you think scientists use questions like these to classify living things?' },
      { title: 'Life science review poster', time: '40 min',
        materials: ['poster board or large paper', 'markers or colored pencils', 'old magazines or printed pictures (optional)', 'glue stick'],
        steps: [
          'Divide the poster into four boxes: Classification, Traits, Cells, Microorganisms.',
          'In Classification, draw a tree that splits animals into vertebrates and invertebrates and plants into seed and non-seed.',
          'In Traits, give two inherited traits, two acquired traits, two instincts, and two learned behaviors.',
          'In Cells, draw and label a plant cell and an animal cell side by side.',
          'In Microorganisms, show two helpful and two harmful examples.',
          'Present your poster to your family.'
        ],
        observe: 'Which box was easiest to fill? Which one did you need to look back in your notes for? What is one fact you will always remember?' }
    ],
    think: [
      "Pick one living thing you know well. Classify it as fully as you can, and explain each feature that helped you decide.",
      "Explain how cells, microorganisms, and decomposers are connected. Use at least three vocabulary words from this year."
    ]
  });

  // ============================== WEEK 37 ==============================
  C.unit('science', 37, {
    title: 'Review: earth science',
    standard: 'S5E1, S4E3, S4E4',
    learn: [
      { h: 'Constructive and destructive processes', p: "Earth's surface is always changing. Constructive processes build up land, like deposition, when water or wind drops sand and soil in a new place to form deltas and sand dunes, or volcanoes adding new rock. Destructive processes wear land down, like weathering, which breaks rock into pieces, and erosion, which carries them away. Earthquakes and landslides also change land quickly." },
      { h: 'Landforms', p: "Landforms are natural shapes on Earth's surface. Mountains are high and steep. Valleys are low areas between hills or mountains. Canyons are deep, narrow valleys carved by rivers. Plateaus are high and flat. Barrier islands are long, narrow islands of sand along a coast, like the islands off Georgia's shore." },
      { h: 'Water cycle and weather', p: "In the water cycle, the Sun heats water and it evaporates into water vapor. The vapor cools and condenses into tiny drops that form clouds. When drops get heavy, they fall as precipitation: rain, snow, sleet, or hail. The water collects in oceans, lakes, rivers, and underground, and the cycle repeats. Weather tools include thermometers, rain gauges, and wind vanes." }
    ],
    passage: [
      "On a family road trip across Georgia, Nora kept an earth science journal. Their first stop was Providence Canyon in the southwest part of the state. The canyon walls glowed pink, orange, and purple. A park sign explained that the land here was once flat farmland. In the 1800s, farmers cleared the trees, and rain began washing away the soft soil with nothing to hold it in place. Over many years, erosion carved gullies that grew into canyons more than 100 feet deep. Nora wrote: Destructive process, erosion by water.",
      "Next they drove east to Jekyll Island, one of Georgia's barrier islands. Waves rolled onto the beach and slid back out, moving sand along the shore. Behind the beach, wind had piled sand into low dunes, held in place by sea oats. Nora wrote: Constructive process, deposition by wind and waves. Then she noticed a sign asking visitors to stay off the dunes. The plants' roots help keep wind and water from carrying the sand away.",
      "On the drive home, dark clouds piled up in the afternoon sky. Dad explained that the hot sun had evaporated water from the ocean and marshes. The warm, moist air rose and cooled high up, and the water vapor condensed into the tiny drops that make clouds. Soon rain poured down so hard the windshield wipers could barely keep up. That was precipitation. Nora pictured the rain soaking into the ground, filling rivers, and flowing back to the ocean to start the cycle again.",
      "At home, Nora checked the rain gauge in their backyard. It had collected almost one inch of rain. She added one last note to her journal: The same water that falls as rain can help carve a canyon or build a sand dune."
    ],
    vocab: [
      ['weathering', 'the breaking down of rock into smaller pieces by water, ice, wind, or plants'],
      ['erosion', 'the carrying away of rock and soil by water, wind, or ice'],
      ['deposition', 'the dropping of sand, soil, and rock in a new place, which builds up land'],
      ['barrier island', 'a long, narrow island of sand that lies along a coast'],
      ['condensation', 'when water vapor cools and turns into tiny liquid drops, forming clouds'],
      ['precipitation', 'water falling from clouds as rain, snow, sleet, or hail']
    ],
    demo: {
      q: 'A river carries mud downstream and drops it where it meets the ocean, forming a fan of new land. Is this constructive or destructive?',
      steps: [
        'Step 1: Ask: is land being built up or worn down at this spot?',
        'Step 2: Where the river picks up mud upstream, erosion wears land down. That part is destructive.',
        'Step 3: Where the river drops the mud at the ocean, new land builds up. That is deposition.',
        'Step 4: The new fan of land is called a delta.'
      ],
      a: 'Forming the delta is a constructive process (deposition), even though erosion upstream is destructive.'
    },
    items: [
      Q("What is the difference between weathering and erosion?", ["They are the same", "Weathering breaks rock down; erosion carries the pieces away", "Erosion breaks rock; weathering builds mountains", "Weathering only happens in space"], 1, "Weathering breaks rock into smaller pieces. Erosion moves those pieces to a new place. Then deposition drops them."),
      Q("Which is a constructive process?", ["A landslide", "Erosion of a riverbank", "Deposition forming a delta", "Weathering of a statue"], 2, "Deposition builds up new land, like a delta at the mouth of a river. The others wear land down or move it away."),
      Q("Which landform is a deep, narrow valley carved by a river?", ["Plateau", "Sand dune", "Barrier island", "Canyon"], 3, "A canyon is a deep valley with steep sides, usually carved by flowing water over a long time."),
      Q("Which can be both destructive and constructive?", ["A volcano", "A rainbow", "A thermometer", "A shadow"], 0, "A volcano can destroy things around it, but its lava cools into new rock and can build new land."),
      Q("In the water cycle, what is evaporation?", ["Water falling as rain", "Liquid water turning into water vapor", "Water vapor turning into cloud drops", "Water soaking into the ground"], 1, "Evaporation is when the Sun's heat turns liquid water into a gas called water vapor."),
      Q("How do clouds form?", ["Smoke rises from the ground", "Wind blows dust together", "Water vapor cools and condenses into tiny drops", "Rain freezes in the sky"], 2, "As water vapor rises and cools, it condenses into tiny drops of liquid water. Billions of these drops make a cloud."),
      Q("Which is NOT a form of precipitation?", ["Rain", "Snow", "Hail", "Fog"], 3, "Fog is a cloud near the ground; its drops float in the air instead of falling. Rain, snow, and hail all fall from clouds."),
      Q("Which tool measures how much rain fell?", ["Rain gauge", "Thermometer", "Wind vane", "Compass"], 0, "A rain gauge collects rain so you can measure how much fell. A thermometer measures temperature, and a wind vane shows wind direction."),
      Q("Which helps prevent erosion on a hillside?", ["Removing all the plants", "Planting grass and trees whose roots hold the soil", "Pouring water down it", "Digging ditches straight down it"], 1, "Plant roots hold soil in place, slowing erosion. Removing plants lets rain wash soil away more easily."),
      Q("What is the Sun's job in the water cycle?", ["It makes wind only", "It freezes clouds", "Its heat causes water to evaporate", "It makes the ground shake"], 2, "The Sun's energy heats water so it evaporates. Without the Sun's heat, the water cycle would not keep running."),
      Q("In the passage, what caused Providence Canyon to form?", ["A volcano erupting", "Wind building sand dunes", "An earthquake", "Rain eroding soil after farmers cleared the trees"], 3, "Farmers cleared trees in the 1800s, and rain washed away the soft soil. Over many years, erosion carved the canyons."),
      Q("How deep did the passage say Providence Canyon's canyons grew?", ["About 10 feet", "More than 100 feet", "About 1 mile", "Only a few inches"], 1, "The park sign said erosion carved gullies that grew into canyons more than 100 feet deep."),
      Q("What held the sand dunes in place on Jekyll Island?", ["Fences only", "Sea oats and their roots", "Rocks", "Ice"], 1, "The dunes were held in place by sea oats. Their roots help keep wind and water from carrying the sand away."),
      Q("Why did visitors need to stay off the dunes?", ["The sand was too hot", "There were snakes", "Walking on them could hurt the plants that hold the sand in place", "The dunes were private property"], 2, "The passage explains that the plants' roots help keep sand from blowing or washing away, so protecting them protects the dunes."),
      Q("How much rain did Nora's rain gauge collect?", ["Almost one inch", "Five inches", "One foot", "None"], 0, "Nora found that her backyard rain gauge had collected almost one inch of rain.")
    ],
    activities: [
      { title: 'Erosion in a pan', time: '30 min',
        materials: ['a baking pan or plastic storage bin', 'sand or soil', 'a cup with small holes poked in the bottom (a parent pokes the holes)', 'water', 'a book to tilt the pan', 'grass clippings or small plants'],
        steps: [
          'Pile sand or soil at one end of the pan to make a hill. Prop that end up on a book.',
          'A parent pokes small holes in the cup with a pushpin, since it is sharp.',
          'Hold the cup over the top of the hill and pour water in to make it rain. Watch where the sand goes.',
          'Look for places where sand was carried away (erosion) and where it was dropped (deposition).',
          'Rebuild the hill and press grass clippings or small plants into it. Make it rain again the same way.',
          'Draw both results.'
        ],
        observe: 'Where did erosion happen, and where did deposition build up new land? How did the plants change the results?' },
      { title: 'Water cycle in a bag', time: '10 min to set up, check over 2 days',
        materials: ['a zipper sandwich bag', 'water', 'blue food coloring (optional)', 'permanent marker', 'tape', 'a sunny window'],
        steps: [
          'Draw the Sun, a cloud, and waves on the bag with marker.',
          'Pour about a quarter cup of water into the bag and add one drop of blue food coloring.',
          'Seal the bag tightly and tape it to a sunny window.',
          'Check it several times over two days. Look for drops forming high on the bag and sliding down.',
          'Label where you see evaporation, condensation, precipitation, and collection.'
        ],
        observe: 'Describe each part of the water cycle you saw in the bag. What gave the water energy to evaporate?' }
    ],
    think: [
      "Explain how the same water can be part of both a destructive and a constructive process. Use the example of a river.",
      "Describe the path of one drop of water from the ocean to a cloud, to the ground, and back to the ocean. Use at least four water cycle words."
    ]
  });

})(typeof window !== 'undefined' ? window : globalThis);
