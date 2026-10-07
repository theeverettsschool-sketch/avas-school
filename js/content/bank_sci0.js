/* Science units, weeks 1-4: Georgia grade 4 astronomy (S4E1, S4E2) extra daily practice. All text original. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  // ---------------------------------------------------------------- WEEK 1
  C.unit("science", 1, {
    title: "Stars up close: size, color, and brightness",
    standard: "S4E1",
    learn: [
      { h: "Our Sun is an average star", p: "The Sun is a medium-sized yellow star. It is about 109 times wider than Earth, but many stars are much bigger. Some stars, called supergiants, are so huge that hundreds of Suns could fit across them." },
      { h: "Why some stars look brighter", p: "How bright a star looks from Earth depends on three things: how big it is, how hot it is, and how far away it is. A small star that is close can look brighter than a giant star that is very far away." },
      { h: "Constellations move across the sky", p: "Constellations seem to slide across the sky during the night because Earth is spinning. We see different constellations in different seasons because Earth travels around the Sun, so at night we face a different part of space." }
    ],
    passage: [
      "On a clear winter night, Mia and her dad drove away from the city lights of Atlanta to a dark field. Without bright streetlights, the sky was crowded with stars. Dad pointed to a group of three stars in a short, straight row. “That is Orion’s Belt,” he said. “Orion is a constellation that looks like a hunter.”",
      "Mia noticed that two stars in Orion looked different. One, near the hunter’s shoulder, glowed orange-red. Its name is Betelgeuse. Another, near his foot, shone blue-white. Its name is Rigel. Dad explained that a star’s color is a clue to its temperature. Rigel is much hotter than Betelgeuse. Betelgeuse is cooler, but it is a supergiant, so enormous that if it sat where our Sun is, it would swallow Mercury, Venus, Earth, and Mars.",
      "“Then why does the Sun look like the biggest star of all?” Mia asked. Dad said it is all about distance. Light from the Sun takes about eight minutes to reach Earth. Light from the next closest star takes more than four years. Stars look like tiny points because they are so very far away. The brightest star in our night sky, Sirius, looks bright partly because it is fairly close to us.",
      "Next, Dad helped Mia find the Big Dipper. He showed her the two stars at the end of the dipper’s cup. “Draw a line through these two pointer stars and keep going,” he said. The line led to Polaris, the North Star. Polaris sits almost straight above Earth’s North Pole, so it barely moves while the other stars circle around it. Travelers have used it for hundreds of years to find north.",
      "As they drove home, Mia looked back. Orion had already moved lower in the sky. Earth was turning, carrying them along with it."
    ],
    vocab: [
      ["supergiant", "a star that is many, many times larger than our Sun"],
      ["temperature", "how hot or cold something is"],
      ["Polaris", "the North Star, which sits almost directly above Earth’s North Pole"],
      ["pointer stars", "the two stars at the end of the Big Dipper’s cup that point toward Polaris"],
      ["brightness", "how much light a star seems to give off when we see it from Earth"],
      ["constellation", "a group of stars that people imagined as a picture in the sky"]
    ],
    demo: {
      q: "Star A is a giant star very far away. Star B is a smaller star much closer to Earth. Which might look brighter in our sky, and why?",
      steps: [
        "Step 1: List the three things that change how bright a star looks: size, temperature, and distance.",
        "Step 2: Star A wins on size, but it is very far away, so a lot less of its light reaches us.",
        "Step 3: Star B is smaller, but being close means its light is not as spread out when it reaches Earth.",
        "Step 4: Distance can matter more than size, just like a flashlight near you looks brighter than a stadium light miles away."
      ],
      a: "Star B could look brighter because it is much closer, even though Star A is bigger."
    },
    items: [
      Q("Which three things affect how bright a star looks from Earth?", ["Its size, its temperature, and its distance", "Its name, its shape, and its age", "Its color, its moons, and its rings", "The time of year, the weather, and the Moon"], 0, "Bigger stars and hotter stars give off more light, and closer stars look brighter because their light does not spread out as much before it reaches us."),
      Q("How does our Sun compare with other stars?", ["It is the largest star in the universe", "It is the smallest star there is", "It is a medium-sized star", "It is not really a star"], 2, "The Sun is an average, medium-sized yellow star. It only looks huge because it is the closest star to Earth. Many stars are far bigger."),
      Q("Rigel shines blue-white and Betelgeuse glows orange-red. What does that tell you?", ["Betelgeuse is hotter than Rigel", "Rigel is hotter than Betelgeuse", "They are the same temperature", "Rigel is a planet"], 1, "Star color shows temperature. Blue-white stars are hotter than orange-red stars, so Rigel is the hotter star.", "Remember the color rule: blue is the hot end."),
      Q("In the passage, which constellation did Mia see that looks like a hunter?", ["The Big Dipper", "The Little Dipper", "Orion", "Polaris"], 2, "Dad pointed out Orion, a constellation people imagined as a hunter. Its three-star belt is easy to spot on winter nights.", "Look in paragraph 1."),
      Q("According to the passage, why is Betelgeuse special even though it is cooler than Rigel?", ["It is a supergiant, so it is enormous", "It is the closest star to Earth", "It is the North Star", "It has rings like Saturn"], 0, "The passage says Betelgeuse is a supergiant. It is cooler than Rigel, but it is so huge that it would swallow Earth and Mars if it were where our Sun is.", "Re-read paragraph 2."),
      Q("About how long does light from the Sun take to reach Earth?", ["About 8 seconds","About 8 years","About 8 days","About 8 minutes"], 3, "Sunlight travels very fast, but the Sun is about 93 million miles away, so its light takes about eight minutes to get here.", "Paragraph 3 tells you."),
      Q("How long does light from the next closest star take to reach Earth?", ["About one hour", "About one day", "About one month", "More than four years"], 3, "The passage says light from the next nearest star takes more than four years. That shows how much farther away other stars are than the Sun.", "Paragraph 3 compares two stars."),
      Q("What is the brightest star in our night sky?", ["Polaris", "Sirius", "Betelgeuse", "The Sun"], 1, "Sirius is the brightest star you can see at night. Polaris is famous because it marks north, not because it is the brightest. The Sun is not in the night sky."),
      Q("How did Mia find Polaris?", ["She followed the line from the Big Dipper’s two pointer stars", "She looked for the reddest star", "She looked straight down at the horizon", "She found the biggest star in Orion"], 0, "Dad showed her the two pointer stars at the end of the Big Dipper’s cup. A line drawn through them leads to Polaris.", "Paragraph 4 explains the trick."),
      Q("Why does Polaris barely move during the night?", ["It is the closest star", "It is attached to the Moon", "It sits almost straight above Earth’s North Pole", "It is a planet, not a star"], 2, "Earth spins around an axis that points almost right at Polaris. So while the other stars seem to circle, Polaris stays in nearly the same spot."),
      Q("Why had Orion moved lower in the sky by the time Mia drove home?", ["Orion was falling","The Moon pulled it down","Clouds pushed it","Earth was rotating"], 3, "Stars do not really race across the sky. Earth spins, carrying us along, so the stars appear to move. The passage’s last line says this.", "Read the final paragraph."),
      Q("Why could Mia see more stars in the dark field than in the city?", ["There are more stars above fields", "City lights wash out the fainter stars", "Stars only shine over farms", "The air in the city is colder"], 1, "Bright streetlights and buildings light up the sky, so dim stars get lost. In a dark place, your eyes can see many more of them."),
      Q("Why do we see different constellations in summer than in winter?", ["Stars turn off in summer","The Moon hides some stars all summer","Constellations change shape each season","Earth’s orbit around the Sun makes us face a different part of space at night"], 3, "As Earth travels around the Sun during the year, the night side of Earth faces different directions in space. So the constellations we see at night change with the seasons."),
      Q("Which star would be the coolest?", ["A blue star", "A white star", "A yellow star", "A red star"], 3, "Red stars are the coolest. Yellow stars like the Sun are in the middle, and white and blue stars are the hottest."),
      T("The North Star is also called ____ . (one word)", ["Polaris"], "Polaris is the North Star. Because it sits almost above the North Pole, it helps travelers find north.")
    ],
    activities: [
      { title: "Brightness and distance with flashlights", time: "20 min",
        materials: ["two flashlights (one small, one large if you have it)", "a dark hallway or room", "a helper", "paper and pencil"],
        steps: ["With your parent, turn off the lights in a long hallway or room.", "Have your helper stand close to you holding the small flashlight and turn it on.", "Have your parent stand at the far end of the hallway with the large flashlight and turn it on.", "Look at both lights from where you stand. Which looks brighter?", "Now switch: put the small light far away and the big light close. Which looks brighter now?", "Write down what you saw each time."],
        observe: "How did distance change how bright each flashlight looked? Explain how this helps us understand why the Sun looks brighter than every other star." },
      { title: "Make a constellation viewer", time: "25 min",
        materials: ["an empty paper towel tube", "aluminum foil or black paper", "rubber band", "a thumbtack (parent helps)", "flashlight"],
        steps: ["Look at a picture of the Big Dipper or Orion and draw its stars on a small circle of black paper or foil.", "Cover one end of the tube with the paper or foil and hold it on with a rubber band.", "With your parent, poke a small hole with the thumbtack at each star dot.", "In a dark room, shine a flashlight into the open end of the tube and point it at a wall or ceiling.", "Look at the pattern of dots. Can someone in your family guess which constellation it is?"],
        observe: "The stars in your viewer are all the same distance from the wall, but real constellation stars are not. Explain why a constellation is only a pattern we see from Earth." }
    ],
    think: [
      "Mia asked why the Sun looks like the biggest star. Write how you would answer her, using the words distance and medium-sized.",
      "Long ago, travelers used Polaris to find their way. Explain why Polaris is more useful for finding direction than a star that moves across the sky. Give a reason from the lesson."
    ]
  });

  // ---------------------------------------------------------------- WEEK 2
  C.unit("science", 2, {
    title: "Planet tour: rocky worlds and giant worlds",
    standard: "S4E1",
    learn: [
      { h: "Inner planets", p: "Mercury, Venus, Earth, and Mars are the inner planets. They are small, rocky, and close together near the Sun. You could stand on their solid surfaces, though only Earth would be a safe place to visit." },
      { h: "Outer planets", p: "Jupiter, Saturn, Uranus, and Neptune are the outer planets. They are huge and far apart. Jupiter and Saturn are mostly gas, and Uranus and Neptune are made mostly of icy materials. None of them has a solid surface you could stand on, and all four have rings." },
      { h: "Farther means longer years", p: "A planet’s year is the time it takes to go once around the Sun. Planets farther from the Sun have longer paths, so their years are longer. Mercury’s year is only 88 Earth days, but Neptune’s year is about 165 Earth years." }
    ],
    passage: [
      "Imagine you could ride a spaceship from the Sun all the way to the edge of the planets. Your first stop is Mercury, the smallest planet. It is gray, covered in craters, and races around the Sun faster than any other planet. Mercury has no moons and almost no air, so its days are scorching and its nights are freezing.",
      "Next comes Venus, which is close to Earth’s size. Thick, poisonous clouds wrap around it and trap heat, making it the hottest planet. Venus also spins very slowly, and in the opposite direction from most planets. From Earth, Venus is often the brightest point of light in the sky after the Moon.",
      "Then you pass home, Earth, the only planet known to have life and liquid water on its surface. About seven-tenths of Earth is covered by oceans. Beyond Earth is Mars, the red planet. Its color comes from rusty iron in its dusty soil. Mars has the tallest volcano in the solar system, called Olympus Mons, and two tiny moons.",
      "After crossing the asteroid belt, you reach the giants. Jupiter is the biggest planet of all. It has a giant storm called the Great Red Spot that is wider than Earth, and it has dozens of moons, including Ganymede, the largest moon in the solar system. Saturn is famous for its bright rings, which are made of countless chunks of ice and rock. Saturn is so light for its size that it would float if you could find a bathtub big enough!",
      "Your last two stops are cold and blue. Uranus is tipped on its side, so it seems to roll around the Sun like a ball. Neptune, the farthest planet, has the fastest winds in the solar system. Now turn around. The Sun is just a bright star far behind you."
    ],
    vocab: [
      ["inner planets", "the four small, rocky planets closest to the Sun: Mercury, Venus, Earth, and Mars"],
      ["outer planets", "the four giant planets farthest from the Sun: Jupiter, Saturn, Uranus, and Neptune"],
      ["crater", "a bowl-shaped hole made when a rock from space crashes into a surface"],
      ["atmosphere", "the layer of gases that surrounds a planet"],
      ["Great Red Spot", "a giant storm on Jupiter that is wider than Earth"],
      ["gas giant", "a huge planet made mostly of gas with no solid surface to stand on"]
    ],
    demo: {
      q: "A mystery planet is small, rocky, red, and has two tiny moons. Which planet is it?",
      steps: [
        "Step 1: Small and rocky means it is one of the four inner planets: Mercury, Venus, Earth, or Mars.",
        "Step 2: Cross out Mercury (gray, no moons), Venus (covered in thick clouds, no moons), and Earth (one large moon).",
        "Step 3: Check the clues against Mars: red from rusty soil, and two tiny moons. Every clue fits."
      ],
      a: "The mystery planet is Mars."
    },
    items: [
      Q("Which planet is the smallest?", ["Mars", "Mercury", "Venus", "Earth"], 1, "Mercury is the smallest planet. Mars is the second smallest, so it is a tempting choice, but Mercury is smaller."),
      Q("According to the passage, why does Mercury have scorching days and freezing nights?", ["It has almost no air to hold heat", "It is the farthest planet", "It is covered in oceans", "It has thick clouds"], 0, "The passage says Mercury has almost no air. Without an atmosphere acting like a blanket, heat escapes quickly at night.", "Re-read paragraph 1."),
      Q("What makes Venus the hottest planet?", ["It is the closest planet to the Sun", "It has a volcano", "Its thick clouds trap heat", "It spins very fast"], 2, "Venus’s thick atmosphere traps heat like a blanket. Mercury is closer to the Sun, but it cannot hold onto its heat."),
      Q("What is unusual about the way Venus spins?", ["It does not spin at all","It spins on its side","It spins faster than any planet","It spins very slowly and in the opposite direction from most planets"], 3, "Venus turns slowly and backward compared with most planets. Spinning on its side is Uranus, not Venus.", "Look in paragraph 2."),
      Q("Why does Mars look red?", ["It is very hot", "It is covered in red plants", "It reflects red stars", "Its soil has rusty iron in it"], 3, "Iron in Mars’s dust and rocks has rusted, just like an old bike left in the rain. That gives the planet its red color."),
      Q("What is Olympus Mons?", ["Jupiter’s biggest moon", "The tallest volcano in the solar system, found on Mars", "A storm on Neptune", "A ring around Saturn"], 1, "Olympus Mons is a giant volcano on Mars. It is the tallest volcano known in the whole solar system.", "Paragraph 3 names it."),
      Q("About how much of Earth’s surface is covered by oceans?", ["About one-tenth", "About half", "About seven-tenths", "All of it"], 2, "About seven-tenths of Earth, or 70 percent, is covered by ocean. That is why Earth looks blue from space.", "Paragraph 3 gives the fraction."),
      Q("What is the Great Red Spot?", ["A giant storm on Jupiter", "A red volcano on Mars", "A crater on Mercury", "A sunspot"], 0, "The Great Red Spot is a huge, long-lasting storm on Jupiter. It is wider than the whole Earth."),
      Q("What is the largest moon in the solar system?", ["Earth’s Moon", "Titan", "Phobos", "Ganymede"], 3, "Ganymede, one of Jupiter’s moons, is the largest moon in the solar system. It is even bigger than the planet Mercury."),
      Q("What are Saturn’s rings made of?", ["Solid metal hoops","Light from the Sun","Colored gas","Chunks of ice and rock"], 3, "Saturn’s rings are made of countless pieces of ice and rock, from tiny grains to chunks as big as houses, all circling the planet."),
      Q("The passage says Saturn could float in a giant bathtub. What does that tell you?", ["Saturn is made of water", "Saturn is very light for its size", "Saturn is the heaviest planet", "Saturn has oceans"], 1, "Floating means something is light for its size. Saturn is mostly gas, so even though it is huge, it is less dense than water.", "Re-read the end of paragraph 4."),
      Q("Which planet is tipped on its side and seems to roll around the Sun?", ["Neptune", "Venus", "Uranus", "Jupiter"], 2, "Uranus is tilted so far that it seems to roll along its path. Venus is unusual too, but for spinning backward, not for being on its side."),
      Q("Which planet has the fastest winds?", ["Earth", "Mars", "Jupiter", "Neptune"], 3, "Neptune, the farthest planet, has the fastest winds measured in the solar system."),
      Q("Why does Neptune have a much longer year than Earth?", ["It spins more slowly","It has more moons","It is smaller than Earth","It is farther from the Sun, so its path around the Sun is much longer"], 3, "A year is one trip around the Sun. Neptune’s path is so long that one trip takes about 165 Earth years. Spinning makes a day, not a year."),
      Q("Which group lists only outer planets?", ["Mercury, Venus, Mars", "Earth, Mars, Jupiter", "Jupiter, Saturn, Neptune", "Venus, Saturn, Uranus"], 2, "The outer planets are Jupiter, Saturn, Uranus, and Neptune. Every other choice mixes in an inner planet.")
    ],
    activities: [
      { title: "Planet size circles", time: "25 min",
        materials: ["a large sheet of paper or poster board", "a ruler", "pencil", "colored pencils or markers", "a dinner plate and a quarter"],
        steps: ["Trace a dinner plate on the paper. This is Jupiter. Label it.", "Trace a quarter near the plate. This is close to Earth’s size compared with Jupiter. Label it.", "Draw Saturn a little smaller than the plate and add rings.", "Draw Uranus and Neptune about one-third the width of the plate.", "Draw Mars about half the size of the quarter, and Mercury a bit smaller than Mars. Draw Venus almost the same size as the quarter.", "Color each planet with its real color: red Mars, blue Neptune, striped Jupiter, and so on."],
        observe: "Look at your poster. What do you notice about the sizes of the inner planets compared with the outer planets? Write two sentences." },
      { title: "Planet trading cards", time: "30 min",
        materials: ["8 index cards", "colored pencils", "pencil"],
        steps: ["Write one planet name at the top of each index card.", "Draw the planet in the middle of the card.", "On the back, write: inner or outer, rocky or giant, and number of steps from the Sun (1 to 8).", "Add one amazing fact from this week’s lesson to each card.", "Shuffle the cards and ask a family member to put them in order from the Sun.", "Quiz your family with the facts on the back."],
        observe: "Which planet fact surprised you the most? Explain why it surprised you and what it taught you about that planet." }
    ],
    think: [
      "If astronauts could visit only one other planet, which planet would be the safest choice, and which would be the most dangerous? Use facts from the lesson to explain both choices.",
      "Explain why scientists group Mercury, Venus, Earth, and Mars together, and Jupiter, Saturn, Uranus, and Neptune together. Give at least two differences between the groups."
    ]
  });

  // ---------------------------------------------------------------- WEEK 3
  C.unit("science", 3, {
    title: "Moons, space rocks, comets, and telescopes",
    standard: "S4E1",
    learn: [
      { h: "Gravity keeps things in orbit", p: "Gravity pulls objects toward each other. Objects with more mass, meaning more stuff in them, pull harder. Gravity is also stronger when objects are closer together. The Sun’s pull keeps planets in orbit, and each planet’s pull keeps its moons in orbit." },
      { h: "Small objects in space", p: "An ASTEROID is a rocky chunk that orbits the Sun, most of them in the belt between Mars and Jupiter. A COMET is a ball of ice and dust. A METEOROID is a small piece of space rock. When one burns up in our air, the streak of light is a METEOR. If it lands on the ground, it is a METEORITE." },
      { h: "Tools for seeing far away", p: "A telescope gathers light and makes faraway objects look bigger and clearer. Some telescopes sit on mountaintops. Others, like the Hubble Space Telescope, orbit Earth above the air, which gives them an even sharper view." }
    ],
    passage: [
      "Around the year 1610, an Italian scientist named Galileo Galilei pointed a small telescope at the night sky. For thousands of years before that, people had studied the sky with just their eyes. Through his telescope, Galileo saw things no one had seen before. The Moon had mountains and craters. And next to Jupiter were four tiny dots that moved from night to night. Galileo realized that they were moons circling Jupiter. This showed that not everything in the sky goes around Earth.",
      "Today we know that many planets have moons. Earth has one Moon. It takes about a month to travel around Earth. Our Moon has no air and no liquid water, and its surface is covered with craters made by crashing space rocks. Because the Moon has no wind or rain to wear them away, many craters have lasted for billions of years.",
      "Space rocks are still flying around today. Most asteroids stay in the asteroid belt, but some small pieces come close to Earth. When a tiny bit of rock zooms into our air, rubbing against the air heats it until it glows. People call this a shooting star, but it is not a star at all. It is a meteor.",
      "Comets make some of the most beautiful sights in the sky. They travel in long, stretched-out orbits. Far from the Sun, a comet is just a frozen chunk of ice and dust. As it swings close to the Sun, the ice turns to gas and forms a glowing cloud and a long tail. The tail always points away from the Sun. Halley’s Comet returns about every 76 years. It last passed by in 1986 and will be back in 2061.",
      "Galileo’s telescope was about as long as a yardstick. Today, giant telescopes in space send back pictures of galaxies far beyond our solar system."
    ],
    vocab: [
      ["telescope", "a tool that gathers light to make faraway objects look larger and clearer"],
      ["mass", "the amount of matter, or stuff, that something is made of"],
      ["meteor", "the streak of light made when a small space rock burns up in Earth’s air"],
      ["meteorite", "a space rock that makes it all the way through the air and lands on the ground"],
      ["asteroid", "a rocky object that orbits the Sun, often found between Mars and Jupiter"],
      ["galaxy", "a huge group of billions of stars, gas, and dust held together by gravity"]
    ],
    demo: {
      q: "A small rock from space enters Earth’s air, glows, and burns up before it touches the ground. What should we call it?",
      steps: [
        "Step 1: Before it reaches our air, a small space rock is a meteoroid.",
        "Step 2: When it enters the air and glows as a streak of light, it is a meteor.",
        "Step 3: It would only be a meteorite if it landed on the ground. This one burned up, so it never landed."
      ],
      a: "It is a meteor (often called a shooting star)."
    },
    items: [
      Q("What two things make the pull of gravity stronger?", ["More mass and being closer together", "Less mass and being farther apart", "More light and more heat", "Faster spinning and more moons"], 0, "Objects with more mass pull harder, and the pull gets stronger as objects get closer. That is why the huge Sun holds all the planets."),
      Q("What keeps the Moon in orbit around Earth?", ["The Sun’s light", "Earth’s gravity", "The wind", "Magnets inside the Moon"], 1, "Earth’s gravity pulls on the Moon. The Moon’s forward motion keeps it from falling straight in, so it circles Earth instead."),
      Q("According to the passage, what did Galileo see near Jupiter?", ["A comet’s tail", "Rings of ice", "Four small moons circling it", "A giant storm"], 2, "Galileo saw four tiny dots that moved around Jupiter from night to night. He realized they were moons.", "Re-read paragraph 1."),
      Q("Why was Galileo’s discovery of Jupiter’s moons important?", ["It showed not everything in the sky goes around Earth", "It proved Jupiter was a star", "It showed the Moon was made of ice", "It proved there were only four moons in space"], 0, "People once believed everything circled Earth. Moons circling Jupiter proved that idea was wrong.", "Paragraph 1 explains why it mattered."),
      Q("Why have many of the Moon’s craters lasted for billions of years?", ["The Moon is too cold","The Moon is made of metal","Astronauts protect them","The Moon has no wind or rain to wear them away"], 3, "On Earth, wind, water, and plants wear down craters. The Moon has no air or rain, so its craters stay almost unchanged.", "Look at the end of paragraph 2."),
      Q("What is a shooting star really?", ["A star falling to Earth", "A comet", "A planet moving fast", "A meteor: a small space rock burning up in our air"], 3, "A shooting star is not a star. It is a bit of space rock that heats up and glows as it rushes through Earth’s air.", "Paragraph 3 tells you."),
      Q("What is a meteorite?", ["A space rock that lands on the ground", "A streak of light in the sky", "A ball of ice with a tail", "A small moon"], 0, "If a space rock survives its trip through the air and lands, it is a meteorite. The glowing streak is the meteor."),
      Q("Where are most asteroids found?", ["Inside the Sun", "Between Earth and the Moon", "In the asteroid belt between Mars and Jupiter", "In Saturn’s rings"], 2, "Most asteroids orbit the Sun in the asteroid belt, which lies between Mars and Jupiter."),
      Q("What is a comet made of?", ["Hot gas like a star", "Ice and dust", "Solid iron", "Sand and water"], 1, "A comet is a frozen chunk of ice and dust. It only grows a glowing tail when it gets close to the Sun."),
      Q("Which way does a comet’s tail point?", ["Always toward the Sun", "Always toward Earth", "Always away from the Sun", "Straight down"], 2, "Energy and particles streaming out from the Sun push the gas and dust away, so the tail always points away from the Sun.", "Paragraph 4 tells you."),
      Q("About how often does Halley’s Comet return?", ["Every year","It never returns","About every 1,000 years","About every 76 years"], 3, "Halley’s Comet comes back about every 76 years. It last came in 1986 and will return in 2061.", "Look at the end of paragraph 4."),
      Q("What shape are comet orbits, according to the passage?", ["Perfect circles close to the Sun", "Long and stretched out", "Straight lines", "Tiny loops around Earth"], 1, "The passage says comets travel in long, stretched-out orbits. They spend most of their time far from the Sun.", "Paragraph 4."),
      Q("What does a telescope do?", ["It makes its own light","It measures temperature","It pulls stars closer with gravity","It gathers light so faraway objects look bigger and clearer"], 3, "A telescope collects light with lenses or mirrors. The more light it gathers, the more clearly we can see faraway objects."),
      Q("Why can a telescope in space, like Hubble, see more clearly than one on the ground?", ["It is closer to the stars", "It is above the air, which blurs light", "It is bigger than all ground telescopes", "It works only at night"], 1, "Moving air blurs starlight, which also makes stars twinkle. A telescope above the air gets a sharper view. Being slightly closer to the stars makes almost no difference."),
      T("A huge group of billions of stars held together by gravity is called a ____ . (one word)", ["galaxy"], "A galaxy is a giant group of stars, gas, and dust. Our solar system is in a galaxy called the Milky Way.")
    ],
    activities: [
      { title: "Make craters", time: "25 min",
        materials: ["a baking pan", "flour", "cocoa powder or colored drink powder", "marbles or small balls of different sizes", "newspaper for the floor"],
        steps: ["Spread newspaper on the floor. Fill the pan with about two inches of flour and smooth it flat.", "Sprinkle a thin layer of cocoa powder on top so craters will show.", "Drop one marble from waist height. Carefully lift it out and look at the crater.", "Drop the same marble from higher up, like shoulder height. Compare the crater.", "Now drop a bigger ball from waist height. Compare again.", "Measure each crater with a ruler and write your results."],
        observe: "How did the height and the size of the ball change the craters? What does that tell you about how the Moon’s craters were made?" },
      { title: "Swing an orbit", time: "15 min",
        materials: ["a sock with a soft ball or rolled-up sock inside", "a piece of string about 2 feet long", "an open space outside"],
        steps: ["Tie the string tightly around the top of the sock with your parent’s help.", "Outside, away from people, hold the end of the string and swing the sock in a slow circle beside you.", "Notice that the string keeps pulling the sock inward. The string is like gravity.", "With your parent watching, let go of the string while the sock is moving. Watch which way it flies.", "Try it again and draw the path the sock took after you let go."],
        observe: "What happened when the pull of the string was gone? Explain what would happen to a planet if the Sun’s gravity suddenly disappeared." }
    ],
    think: [
      "Galileo saw things no one had seen before because he used a new tool. Explain why telescopes changed what people knew about space. Use one example from the passage.",
      "Explain the difference between a meteoroid, a meteor, and a meteorite. Then tell which one you could hold in your hand, and why."
    ]
  });

  // ---------------------------------------------------------------- WEEK 4
  C.unit("science", 4, {
    title: "Earth and Moon patterns: days, seasons, and phases",
    standard: "S4E2",
    learn: [
      { h: "Sunrise, sunset, and shadows", p: "Earth spins toward the east, so the Sun seems to rise in the east and set in the west. In the morning and evening, the Sun is low and shadows are long. Near midday, the Sun is highest and shadows are shortest." },
      { h: "Solstices and equinoxes", p: "In the Northern Hemisphere, the longest day of the year comes around June 21, the summer solstice. The shortest day comes around December 21, the winter solstice. In late March and late September, day and night are close to equal. These are the equinoxes." },
      { h: "Waxing and waning", p: "When the lit part of the Moon we see is growing, the Moon is WAXING. When it is shrinking, it is WANING. The order is: new moon, waxing crescent, first quarter, waxing gibbous, full moon, waning gibbous, third quarter, waning crescent, and back to new." }
    ],
    passage: [
      "One Saturday in June, Grace and her brother Eli pushed a stick into the dirt in their backyard in Savannah. Every two hours, they marked the end of the stick’s shadow with a rock. At 8 in the morning, the shadow stretched long toward the west. At noon, it was very short. By 6 in the evening, it was long again, but now it pointed east. The Sun had not moved at all. Earth had turned, changing where the sunlight came from.",
      "In December, they tried again. Even at noon, the shadow was much longer than it had been in June. Their mom explained why. In December, the northern half of Earth is tilted away from the Sun. The Sun stays lower in the sky, so its light hits the ground at a slant. Slanted light is spread out over more ground, so it heats the land less. The days are also shorter. That is winter. At that same time, people in Australia, in the Southern Hemisphere, are tilted toward the Sun and enjoying summer.",
      "That night, the children watched the Moon. It looked like a thin, glowing smile on the right side. Mom said it was a waxing crescent. Over the next week, the lit part grew until the Moon looked like half a circle. That is the first quarter. A week later, it was a bright full moon, rising in the east just as the Sun set in the west.",
      "Eli asked why we always see the same craters and dark patches on the Moon. Mom explained that the Moon spins exactly once each time it travels around Earth. Because of this, the same side always faces us. People on Earth never see the far side of the Moon without a spacecraft."
    ],
    vocab: [
      ["shadow", "a dark area made when an object blocks light"],
      ["hemisphere", "half of Earth, such as the northern half or the southern half"],
      ["solstice", "the day with the most daylight or the least daylight of the year"],
      ["equinox", "a day in spring or fall when daytime and nighttime are about the same length"],
      ["waxing", "growing; used when the lit part of the Moon we see gets bigger each night"],
      ["waning", "shrinking; used when the lit part of the Moon we see gets smaller each night"]
    ],
    demo: {
      q: "At 4 in the afternoon, which direction will a stick’s shadow point?",
      steps: [
        "Step 1: Shadows always point away from the Sun.",
        "Step 2: Earth spins toward the east, so the Sun appears to rise in the east and set in the west. In the afternoon, the Sun is in the western part of the sky.",
        "Step 3: If the Sun is in the west, the shadow points the opposite way."
      ],
      a: "The shadow points toward the east, and it gets longer as evening comes."
    },
    items: [
      Q("Why does the Sun seem to rise in the east?", ["The Sun moves around Earth each day","The Sun bounces off the horizon","The Moon pushes the Sun","Earth spins toward the east"], 3, "As Earth spins eastward, places turn to face the Sun on the eastern side first. The Sun is not moving across our sky; we are turning."),
      Q("When is a stick’s shadow the shortest?", ["Early morning", "Near midday", "Late evening", "At midnight"], 1, "Near midday the Sun is highest in the sky, so the shadow is shortest. When the Sun is low in the morning or evening, shadows get long."),
      Q("In the passage, which way did the shadow point at 8 in the morning?", ["West", "East", "North", "Straight down"], 0, "In the morning, the Sun is in the east, so the shadow stretches the opposite way, toward the west.", "Re-read paragraph 1."),
      Q("According to the passage, why was the noon shadow longer in December than in June?", ["The stick had grown","Earth was closer to the Sun","Clouds made it longer","The Sun stayed lower in the sky in December"], 3, "In December, the Northern Hemisphere tilts away from the Sun, so the Sun stays lower in the sky and shadows are longer, even at noon.", "Look in paragraph 2."),
      Q("Why does slanted sunlight heat the ground less?", ["It is a different color", "It is spread out over more ground", "It travels more slowly", "It is blocked by the Moon"], 1, "When light hits at a slant, the same amount of light covers a bigger area, so each spot gets less heat. Direct light is concentrated, so it heats more."),
      Q("When it is winter in Georgia, what season is it in Australia?", ["Winter", "Spring", "Summer", "Fall"], 2, "Australia is in the Southern Hemisphere. When the northern half tilts away from the Sun, the southern half tilts toward it, so it is summer there.", "The passage mentions Australia in paragraph 2."),
      Q("About when is the longest day of the year in the Northern Hemisphere?", ["Around March 21","Around December 21","Around September 22","Around June 21"], 3, "The summer solstice, around June 21, has the most daylight. The winter solstice, around December 21, has the least."),
      Q("What is an equinox?", ["The day with the most daylight", "A day when daytime and nighttime are about equal", "A kind of eclipse", "The day the Moon is full"], 1, "Equinoxes come in late March and late September. On those days, day and night are close to the same length everywhere on Earth."),
      Q("What does waxing mean when we talk about the Moon?", ["The lit part we see is shrinking","The Moon is making its own light","The Moon is moving closer","The lit part we see is growing"], 3, "Waxing means growing. After a new moon, the lit part we see grows each night until it becomes full."),
      Q("Which phase comes right after the first quarter?", ["Waxing gibbous", "Waning crescent", "New moon", "Third quarter"], 0, "The order is new, waxing crescent, first quarter, waxing gibbous, full. After first quarter comes waxing gibbous, when more than half is lit and still growing."),
      Q("In the passage, what did the Moon look like the first night the children watched it?", ["A full circle", "Half a circle", "A thin, glowing smile on the right side", "Completely dark"], 2, "It looked like a thin smile on the right side, which Mom said was a waxing crescent.", "Paragraph 3."),
      Q("According to the passage, when did the full moon rise?", ["At noon", "Just as the Sun set", "At sunrise", "At midnight in the west"], 1, "A full moon is on the opposite side of Earth from the Sun, so it rises in the east about when the Sun sets in the west.", "Look at the end of paragraph 3."),
      Q("Why do we always see the same side of the Moon?", ["The Moon does not spin","Clouds hide the other side","The other side is always dark","The Moon spins once each time it travels around Earth"], 3, "The Moon does spin, but it turns exactly once for each trip around Earth, so the same face always points toward us.", "Paragraph 4 explains this."),
      Q("About how many days pass from a full moon to the next full moon?", ["7", "14", "About 29 and a half", "365"], 2, "One full cycle of Moon phases takes about 29.5 days. From first quarter to full is only about one week."),
      T("When the lit part of the Moon we see is shrinking, the Moon is ____ . (one word)", ["waning"], "Waning means shrinking. After the full moon, the lit part we see gets smaller each night until the new moon.")
    ],
    activities: [
      { title: "Shadow stick tracker", time: "15 min, three times in one day",
        materials: ["a straight stick or pencil", "a ball of clay or a cup of dirt to hold it up", "a sheet of paper", "a marker", "a sunny spot"],
        steps: ["On a sunny morning, set the paper on flat ground and stand the stick straight up in the middle using clay.", "Mark which way is north on the paper. Ask your parent to help with a compass app.", "At about 9 a.m., trace the shadow and write the time next to it.", "Do it again at about noon.", "Do it again at about 3 p.m.", "Compare the length and direction of the three shadows."],
        observe: "How did the shadow change in length and direction during the day? Use the word rotation to explain why it changed." },
      { title: "Oreo Moon phases", time: "20 min",
        materials: ["8 sandwich cookies", "a plastic knife or spoon", "a paper plate", "a marker"],
        steps: ["Gently twist each cookie apart so one half has all the white filling on it.", "Use the spoon to scrape the filling into Moon phase shapes: new (no filling), waxing crescent, first quarter, waxing gibbous, full, waning gibbous, third quarter, waning crescent.", "Remember that waxing phases are lit on the right side, and waning phases are lit on the left side, for us in the Northern Hemisphere.", "Arrange the cookies in a circle on the plate in the correct order.", "Label each phase with the marker on the plate.", "Ask your parent to check your order, then enjoy a cookie."],
        observe: "Explain why we see different shapes of the Moon even though half of it is always lit by the Sun." }
    ],
    think: [
      "Some people think summer happens because Earth gets closer to the Sun. Explain why this is not true, using what you know about tilt and about seasons in Australia.",
      "Grace and Eli used a stick and its shadow to learn about Earth’s motion. Explain what their shadow observations prove about whether the Sun or Earth is moving."
    ]
  });

})(typeof window !== 'undefined' ? window : globalThis);
