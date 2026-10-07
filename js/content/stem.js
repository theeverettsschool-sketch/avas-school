/* Science, Social Studies, Reading — Weeks 1-4. All passages are original text. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;
  function O(q, min, why) { return { kind: 'open', q: q, min: min || 15, why: why || 'There is no single right answer. A good answer uses details from the book. Your parent will read it.' }; }

  function lesson(week, role, subject, key, o) {
    o.id = 'w' + week + '-' + role + '-' + key; o.subject = subject; C.add(o);
    var wk = C.weeks[week] = C.weeks[week] || {}; (wk[role] = wk[role] || []).push(o.id); return o.id;
  }

  // ============================== SCIENCE ==============================
  lesson(1, 'wed', 'science', 'science', {
    type: 'lesson', title: 'Stars and our Sun', mins: 25, standard: 'S4E1',
    passage: ['A star is a giant ball of very hot gas that makes its own light and heat. Our Sun is a star. It looks much bigger and brighter than the other stars only because it is much closer. The other stars you see at night are also suns, but they are so far away that they look like tiny dots.',
      'Stars come in different sizes and colors. The color of a star shows how hot it is. Blue and white stars are the hottest. Yellow stars like our Sun are medium. Red stars are the coolest. Stars may look like they twinkle, but that is because their light passes through moving air in Earth\'s atmosphere.',
      'People long ago noticed that groups of stars seemed to make pictures in the sky, such as the Big Dipper. These groups are called constellations. The stars in a constellation are not really close to each other. They only look that way from Earth. Sailors and travelers used constellations to find their way.'],
    learn: [{ h: 'Key ideas', p: 'A STAR makes its own light. A PLANET does not; it only reflects light. Star color shows temperature: blue = hottest, red = coolest. Constellations are patterns we see, not real neighbors in space.' }],
    demo: { q: 'A star looks red and another looks blue. Which is hotter?', steps: ['Step 1: Remember the rule: the color of a star tells its temperature.', 'Step 2: Put the colors in order from coolest to hottest: red, orange, yellow, white, blue.', 'Step 3: Blue is at the hot end of the list. Red is at the cool end.', 'Step 4: Answer: the BLUE star is hotter. (It is the opposite of what you might guess, since in a fire, red seems hot, but blue flames are hotter than red ones.)'], a: 'The blue star' },
    items: [
      Q('What is a star?', ['A planet that glows', 'A giant ball of hot gas that makes its own light', 'A rock in space', 'A comet'], 1, 'A star makes its own light and heat. A planet does not make light; it reflects light from a star.', 'Re-read paragraph 1.'),
      Q('Why does the Sun look so much bigger than other stars?', ['It is much bigger than all stars', 'It is much closer to Earth', 'It is hotter than all stars', 'It is a planet'], 1, 'Distance matters. The Sun is about 93 million miles away. Other stars are trillions of miles away, so they look like dots. Many stars are actually bigger than the Sun.', 'Think about how a faraway car looks small.'),
      Q('Which color star is the hottest?', ['Red', 'Yellow', 'Blue', 'Orange'], 2, 'Blue and white stars are the hottest, yellow is medium, and red is the coolest.'),
      Q('What is a constellation?', ['A very bright star', 'A pattern of stars that people see in the sky', 'A kind of planet', 'A galaxy'], 1, 'A constellation is a group of stars that people imagined as a picture. The stars are not really close together; they just look that way from Earth.'),
      Q('Why do stars seem to twinkle?', ['They are blinking', 'Their light passes through moving air in our atmosphere', 'They are spinning fast', 'They are turning on and off'], 1, 'Starlight bends as it passes through moving layers of air, which makes it flicker. In space, stars do not twinkle.'),
      T('The Sun is a ____ . (one word)', ['star'], 'The Sun is a star, the closest one to Earth.')
    ], activity: 'Hands-on (with your parent): Tonight, go outside after dark and find a bright star pattern. Draw what you see. Can you find the Big Dipper? Which stars look brightest? (If clouds block the sky, look at constellation photos online.)'
  });
  lesson(2, 'tue', 'science', 'science', {
    type: 'lesson', title: 'The eight planets', mins: 25, standard: 'S4E1',
    passage: ['Our solar system has eight planets that travel around the Sun. In order from the Sun they are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. A fun way to remember: "My Very Educated Mother Just Served Us Nachos."',
      'The four planets closest to the Sun, Mercury, Venus, Earth, and Mars, are small and rocky, with solid surfaces. The four farthest planets, Jupiter, Saturn, Uranus, and Neptune, are much larger. Jupiter and Saturn are mostly gas, and Uranus and Neptune are mostly icy materials.',
      'Planets do not make their own light. We see them because they reflect sunlight. Jupiter is the largest planet. Venus is the hottest because its thick clouds trap heat, even though Mercury is closer to the Sun. Earth is the only planet we know that has liquid water on its surface and living things.'],
    learn: [{ h: 'Key ideas', p: 'The inner four planets are rocky; the outer four are giants. Planets reflect light. The order from the Sun is: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.' }],
    demo: { q: 'Which planet is third from the Sun?', steps: ['Step 1: Write the order and number them: 1 Mercury, 2 Venus, 3 Earth, 4 Mars, 5 Jupiter, 6 Saturn, 7 Uranus, 8 Neptune.', 'Step 2: Find number 3. It is Earth.', 'Step 3: Check with the memory sentence: My (Mercury) Very (Venus) Educated (Earth). The third word is "Educated," so Earth.'], a: 'Earth' },
    items: [
      Q('How many planets are in our solar system?', ['7', '8', '9', '10'], 1, 'There are eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.'),
      Q('Which planet is closest to the Sun?', ['Venus', 'Earth', 'Mercury', 'Mars'], 2, 'Mercury is first in the order.'),
      Q('Which is the largest planet?', ['Earth', 'Saturn', 'Jupiter', 'Neptune'], 2, 'Jupiter is the largest planet, so big that more than 1,000 Earths would fit inside.'),
      Q('The four inner planets are best described as...', ['Gas giants', 'Small and rocky', 'Made of ice', 'Stars'], 1, 'Mercury, Venus, Earth, and Mars are small and rocky with solid surfaces.'),
      Q('Why is Venus the hottest planet even though Mercury is closer to the Sun?', ['Venus has thick clouds that trap heat', 'Venus is bigger', 'Venus makes its own heat', 'Mercury is a star'], 0, 'Venus has a very thick atmosphere that traps heat like a blanket. Mercury has almost no atmosphere to hold heat.'),
      Q('How do we see planets?', ['They make their own light', 'They reflect light from the Sun', 'They are on fire', 'They glow in the dark'], 1, 'Planets reflect sunlight. Only stars make their own light.')
    ], activity: 'Hands-on: Make a planet model with your parent. On a long hallway, put the Sun at one end and place planet labels at spaced steps (Mercury 1 step, Venus 2, Earth 3, Mars 5, Jupiter 15, Saturn 28, Uranus 56, Neptune 88 steps). See how far apart they really are.'
  });
  lesson(3, 'tue', 'science', 'science', {
    type: 'lesson', title: 'The solar system: orbits, gravity, and more', mins: 25, standard: 'S4E1',
    passage: ['The solar system is made of the Sun, the eight planets, their moons, and many smaller objects like asteroids and comets. Everything in it is held together by gravity, a force that pulls objects toward each other. The Sun is so huge that its gravity keeps all the planets circling it.',
      'The path a planet takes around the Sun is called an orbit. Earth takes about 365 days to orbit the Sun once, and that is one year. This trip around the Sun is called a revolution. Earth also spins like a top. One full spin, called a rotation, takes about 24 hours.',
      'Between Mars and Jupiter is the asteroid belt, a ring of rocky pieces left over from when the solar system formed. Comets are balls of ice and dust that travel in long orbits. When a comet nears the Sun it heats up and grows a glowing tail.'],
    learn: [{ h: 'Key words', p: 'GRAVITY pulls objects together. An ORBIT is a path around something. REVOLUTION = traveling around the Sun (one year). ROTATION = spinning on its axis (one day).' }],
    demo: { q: 'Is Earth\'s travel around the Sun a rotation or a revolution?', steps: ['Step 1: Remember: REVOLUTION sounds like "revolve," to go around something. ROTATION sounds like "rotate," to spin in place.', 'Step 2: Earth traveling AROUND the Sun is going around something, so it is a revolution.', 'Step 3: Earth spinning on its own axis is a rotation.', 'Step 4: Answer: revolution. It takes about 365 days.'], a: 'Revolution' },
    items: [
      Q('What force holds the planets in orbit around the Sun?', ['Wind', 'Gravity', 'Magnetism', 'Friction'], 1, 'The Sun\'s gravity pulls on the planets. Their motion keeps them circling, so they do not fall into the Sun.'),
      Q('How long does Earth take to revolve once around the Sun?', ['24 hours', '30 days', 'About 365 days', '10 years'], 2, 'One revolution is about 365 days, which we call a year.'),
      Q('One rotation of Earth takes about...', ['An hour', '24 hours', '365 days', 'A week'], 1, 'Earth rotates once every 24 hours. That is one day.'),
      Q('Where is the asteroid belt?', ['Between Earth and Mars', 'Between Mars and Jupiter', 'Past Neptune', 'Around the Sun only'], 1, 'The main asteroid belt lies between Mars and Jupiter.'),
      Q('What is a comet?', ['A ball of ice and dust with a glowing tail near the Sun', 'A tiny planet', 'A kind of star', 'A moon'], 0, 'Comets are icy and dusty. Heat from the Sun makes them release gas and dust that forms a tail.'),
      T('The path a planet follows around the Sun is called an ____ . (one word)', ['orbit'], 'An orbit is the path of one object around another.')
    ], activity: 'Hands-on: Demonstrate with a ball (Earth) and a lamp (Sun). Spin the ball slowly (rotation) while walking in a circle around the lamp (revolution). Do both at the same time to see how Earth moves.'
  });
  lesson(4, 'tue', 'science', 'science', {
    type: 'lesson', title: 'Day and night, seasons, and Moon phases', mins: 25, standard: 'S4E2',
    passage: ['Day and night happen because Earth rotates. The side of Earth facing the Sun has daytime, and the side facing away has night. The Sun does not move across the sky. Earth is spinning, which makes it look that way.',
      'Seasons happen because Earth\'s axis is tilted about 23.5 degrees as Earth revolves around the Sun. When the part of Earth where you live is tilted toward the Sun, sunlight is more direct and days are longer, so it is summer. When it is tilted away, sunlight is weaker and days are shorter, so it is winter. Seasons are NOT caused by Earth being closer or farther from the Sun.',
      'The Moon does not make light; it reflects sunlight. As the Moon orbits Earth, we see different amounts of its lit side. These are the Moon\'s phases: new moon, crescent, first quarter, gibbous, full moon, and back again. One cycle takes about 29.5 days.'],
    learn: [{ h: 'Key ideas', p: 'ROTATION makes day and night. TILT plus REVOLUTION make seasons (not distance). The MOON\'s orbit makes phases, and the Moon only reflects sunlight.' }],
    demo: { q: 'Why is it summer in Georgia in July?', steps: ['Step 1: Seasons depend on Earth\'s TILT, not on distance. So the answer is not "Earth is closer to the Sun."', 'Step 2: In July, the northern half of Earth (where Georgia is) is tilted TOWARD the Sun.', 'Step 3: Tilted toward the Sun means more direct sunlight and longer days, which makes it warmer.', 'Step 4: Answer: In July the Northern Hemisphere is tilted toward the Sun, so Georgia gets more direct sunlight and longer days.'], a: 'Earth is tilted toward the Sun.' },
    items: [
      Q('What causes day and night?', ['Earth revolving around the Sun', 'Earth rotating on its axis', 'The Moon blocking the Sun', 'The Sun moving around Earth'], 1, 'Earth rotates once every 24 hours. The side facing the Sun has day, and the side facing away has night.'),
      Q('What causes the seasons?', ['Earth\'s distance from the Sun', 'Earth\'s tilted axis as it revolves around the Sun', 'The Moon\'s gravity', 'Clouds'], 1, 'The 23.5 degree tilt changes how directly sunlight hits each part of Earth during the year. Distance is NOT the cause (Earth is actually closest to the Sun in January!).'),
      Q('When the Northern Hemisphere is tilted away from the Sun, it is...', ['Summer', 'Winter', 'Always spring', 'Night'], 1, 'Tilted away means weaker sunlight and shorter days, which is winter.'),
      Q('Why does the Moon seem to glow?', ['It makes its own light', 'It reflects sunlight', 'It is on fire', 'Stars shine on it'], 1, 'The Moon reflects light from the Sun. Only stars like the Sun make their own light.'),
      Q('About how long is one cycle of Moon phases?', ['1 day', '7 days', 'About 29.5 days', '365 days'], 2, 'The Moon takes about 29.5 days to go from new moon to new moon. This is where the word "month" comes from.'),
      T('When we see the whole lit side of the Moon, it is called a ____ moon. (one word)', ['full'], 'A full moon happens when the Moon is on the opposite side of Earth from the Sun, so we see its entire lit face.')
    ], activity: 'Hands-on: In a dark room, shine a flashlight (Sun) on a ball (Moon) while you stand where Earth would be. Move the ball slowly around you and watch which parts of the ball are lit. Draw 4 phases you see.'
  });

  // ============================== SOCIAL STUDIES ==============================
  lesson(1, 'thu', 'social', 'social', {
    type: 'lesson', title: 'Map skills: directions, keys, scale, and coordinates', mins: 25, standard: 'SS4G1',
    passage: ['Maps help us find places. Every good map has a compass rose, which shows directions: north (N), south (S), east (E), and west (W). Between them are the intermediate directions northeast (NE), southeast (SE), southwest (SW), and northwest (NW).',
      'A map key (or legend) explains the symbols on a map, like a star for a capital city or a blue line for a river. A map scale shows distance. For example, if 1 inch equals 10 miles, then 3 inches on the map equal 30 miles in real life.',
      'Mapmakers also use lines on globes and maps. Lines of latitude run east-west and tell how far north or south of the equator a place is. Lines of longitude run north-south and tell how far east or west a place is from the prime meridian. A location can be named with both, like (33.7 N, 84.4 W) for Atlanta.'],
    learn: [{ pic: 'compass',  h: 'Key ideas', p: 'Compass rose = directions. Key = symbols. Scale = distance. Latitude lines are flat (east-west) like a ladder\'s rungs. Longitude lines run top to bottom (north-south).' }],
    demo: { q: 'A map scale says 1 inch = 20 miles. Two towns are 4 inches apart on the map. How far apart are they really?', steps: ['Step 1: Read the scale: every 1 inch on the map equals 20 real miles.', 'Step 2: The towns are 4 inches apart, so we need 4 groups of 20 miles.', 'Step 3: Multiply: 4 × 20 = 80.', 'Step 4: Answer with units: the towns are 80 miles apart.'], a: '80 miles' },
    items: [
      Q('Which direction is directly opposite north?', ['East', 'West', 'South', 'Northeast'], 2, 'South is across from north on the compass rose, and west is across from east.'),
      Q('What does a map key (legend) tell you?', ['The date', 'What the symbols on the map mean', 'The weather', 'How old the map is'], 1, 'The key explains symbols, colors, and lines used on the map.'),
      Q('A scale says 1 inch = 10 miles. How far is 5 inches?', ['15 miles', '50 miles', '5 miles', '100 miles'], 1, 'Each inch on the map stands for 10 real miles, so 5 inches is 5 groups of 10 miles. 5 × 10 = 50 miles.'),
      Q('Which lines run east-west and measure distance north or south of the equator?', ['Longitude', 'Latitude', 'The key', 'The scale'], 1, 'Latitude lines run east-west (they look like rungs on a ladder). Longitude lines run north-south.'),
      Q('What is the name of the imaginary line at 0 degrees latitude?', ['Prime meridian', 'Equator', 'Tropic', 'Pole'], 1, 'The equator is 0 degrees latitude. The prime meridian is 0 degrees longitude.'),
      Q('Georgia is in the ___ part of the United States.', ['Northwest', 'Southeast', 'Southwest', 'Northeast'], 1, 'Georgia is in the southeastern United States.')
    ], activity: 'Hands-on: Draw a map of your home or a room with a compass rose, a key, and a scale. Ask your parent to find three places using your map.'
  });
  lesson(2, 'wed', 'social', 'social', {
    type: 'lesson', title: 'Regions of the United States', mins: 25, standard: 'SS4G',
    passage: ['The United States has fifty states. People group them into regions that share things such as land, climate, and history. A common way to divide them is into five regions: the Northeast, the Southeast, the Midwest, the Southwest, and the West.',
      'Georgia is in the Southeast. This region has warm weather, long coasts, and the southern end of the Appalachian Mountains. The Midwest has wide, flat farmland and the Great Lakes. The Southwest is warm and dry. The West has the Rocky Mountains and the Pacific coast. The Northeast has older cities and many people.',
      'Rivers and mountains shape where people live. The Mississippi River flows from Minnesota south to the Gulf of Mexico and is important for shipping goods. The Appalachian Mountains stretch along the East, and the Rocky Mountains run through the West.'],
    learn: [{ h: 'Key ideas', p: 'A REGION is an area with something in common. Know the five regions and one thing about each: Northeast (older cities), Southeast (warm, Georgia), Midwest (farmland, Great Lakes), Southwest (hot and dry), West (Rocky Mountains, Pacific coast).' }],
    demo: { q: 'Which region is the best match for "wide, flat farmland and the Great Lakes"?', steps: ['Step 1: Underline the clue words: farmland and Great Lakes.', 'Step 2: Think about where each region is. The Great Lakes are in the north-central United States, and the central flat lands are the heartland.', 'Step 3: That is the Midwest.', 'Step 4: Check it: the other regions do not match both clues (the Southeast is warm with mountains and coasts).'], a: 'Midwest' },
    items: [
      Q('Which region is Georgia in?', ['Northeast', 'Southeast', 'Midwest', 'West'], 1, 'Georgia is in the Southeast region.'),
      Q('Which region is known for the Great Lakes and farmland?', ['Midwest', 'Southwest', 'Northeast', 'Southeast'], 0, 'The Midwest has wide, flat farmland and borders the Great Lakes.'),
      Q('Which river flows to the Gulf of Mexico and is important for shipping?', ['Colorado', 'Mississippi', 'Hudson', 'Columbia'], 1, 'The Mississippi River flows south to the Gulf of Mexico.'),
      Q('Which mountains are in the West?', ['Appalachian', 'Rocky', 'Ozark', 'Smoky'], 1, 'The Rocky Mountains are in the West. The Appalachians are in the East.'),
      Q('What is a region?', ['A single city', 'An area that shares common features', 'A country', 'A river'], 1, 'A region is an area that shares something in common, like land, climate, or history.'),
      Q('Which is a feature of the Southwest?', ['Warm and dry climate', 'Great Lakes', 'Very cold winters', 'Dense forests'], 0, 'The Southwest is mostly warm and dry, with deserts.')
    ], activity: 'Hands-on: Print or draw a blank US map. Color each region a different color and label Georgia, the Mississippi River, the Great Lakes, and both mountain ranges.'
  });
  lesson(3, 'wed', 'social', 'social', {
    type: 'lesson', title: 'Why the colonies wanted independence', mins: 25, standard: 'SS4H',
    passage: ['In the 1700s, thirteen colonies in North America were ruled by Great Britain. Georgia, founded in 1732 by James Oglethorpe, was the last of the thirteen. The colonists were British subjects, which meant they had to follow British laws and pay British taxes.',
      'After a costly war (the French and Indian War), Britain needed money. It put new taxes on the colonists, like the Stamp Act in 1765 (a tax on paper goods) and the Tea Act in 1773. The colonists had no representatives in Britain\'s Parliament to vote on these taxes. Their cry became, "No taxation without representation!"',
      'In December 1773, a group of colonists in Boston dumped chests of British tea into the harbor in protest. This is known as the Boston Tea Party. Britain answered with harsh new laws that the colonists called the Intolerable Acts. Tension grew until fighting began in 1775.'],
    learn: [{ h: 'Key ideas', p: 'Cause and effect: Britain needed money (cause) → new taxes (effect) → colonists angry because they had no say (cause) → protests such as the Boston Tea Party (effect) → harsh new laws (effect) → war.' }],
    demo: { q: 'What is the cause and effect of the Boston Tea Party?', steps: ['Step 1: Find what happened: colonists dumped tea into Boston harbor.', 'Step 2: Ask WHY (the cause). They were angry about taxes without representation, including the Tea Act.', 'Step 3: Ask what happened next (the effect). Britain passed harsh laws called the Intolerable Acts.', 'Step 4: Write it in a sentence: "Because colonists were angry about taxes without a voice, they dumped tea in Boston Harbor, and Britain responded with harsh laws."'], a: 'Cause: taxes without representation. Effect: the Intolerable Acts.' },
    items: [
      Q('Which country ruled the thirteen colonies?', ['France', 'Spain', 'Great Britain', 'Germany'], 2, 'The colonies were ruled by Great Britain.'),
      Q('What does "No taxation without representation" mean?', ['Taxes should be lower', 'People should not be taxed unless they have a voice in the government', 'Taxes are never fair', 'Colonists should leave'], 1, 'Colonists could not vote for members of Parliament, yet Parliament taxed them. They wanted a say.'),
      Q('What was the Stamp Act?', ['A tax on paper goods', 'A law to build roads', 'A peace treaty', 'A holiday'], 0, 'The Stamp Act of 1765 taxed printed items like newspapers and legal papers.'),
      Q('What happened at the Boston Tea Party?', ['Colonists threw British tea into the harbor in protest', 'A tea party for the king', 'A battle', 'A treaty was signed'], 0, 'In December 1773, colonists dumped chests of tea into Boston Harbor to protest the Tea Act.'),
      Q('Who founded the colony of Georgia in 1732?', ['George Washington', 'James Oglethorpe', 'Thomas Jefferson', 'Benjamin Franklin'], 1, 'James Oglethorpe founded Georgia in 1732, the last of the thirteen colonies.'),
      Q('What did the colonists call Britain\'s harsh response to the Tea Party?', ['The Stamp Act', 'The Intolerable Acts', 'The Declaration', 'The Treaty'], 1, 'They called the harsh laws the Intolerable Acts, meaning too much to bear.')
    ], activity: 'Hands-on: Make a cause-and-effect chain on paper with arrows: new taxes → anger → Boston Tea Party → Intolerable Acts → war.'
  });
  lesson(4, 'wed', 'social', 'social', {
    type: 'lesson', title: 'Key people and events of the Revolution', mins: 25, standard: 'SS4H',
    passage: ['The fighting began in April 1775 at Lexington and Concord in Massachusetts. The first shot there is called "the shot heard round the world." George Washington was chosen to lead the colonists\' army.',
      'On July 4, 1776, the colonies announced the Declaration of Independence, mostly written by Thomas Jefferson. It said that all people have rights, including life, liberty, and the pursuit of happiness, and that the colonies were free from Britain. Three men from Georgia signed it: Button Gwinnett, Lyman Hall, and George Walton.',
      'The war was long and hard. During the winter of 1777-78 Washington\'s soldiers suffered cold and hunger at Valley Forge but kept training. In 1781, the colonists won a major victory at Yorktown, Virginia. The Treaty of Paris in 1783 officially ended the war and recognized the United States as a new country.'],
    learn: [{ h: 'Timeline', p: '1775 Lexington and Concord (war starts) → 1776 Declaration of Independence → 1777-78 Valley Forge → 1781 Yorktown → 1783 Treaty of Paris.' }],
    demo: { q: 'Put in order: Declaration of Independence, Yorktown, Lexington and Concord.', steps: ['Step 1: Match each to a year. Lexington and Concord = 1775. Declaration = 1776. Yorktown = 1781.', 'Step 2: Order from the smallest year to the largest.', 'Step 3: 1775 → 1776 → 1781.', 'Step 4: Answer: Lexington and Concord, Declaration of Independence, Yorktown.'], a: 'Lexington and Concord, Declaration, Yorktown' },
    items: [
      Q('Who led the colonists\' army?', ['Thomas Jefferson', 'George Washington', 'Benjamin Franklin', 'James Oglethorpe'], 1, 'George Washington commanded the Continental Army.'),
      Q('When was the Declaration of Independence adopted?', ['July 4, 1776', 'April 19, 1775', 'December 1773', 'October 1781'], 0, 'July 4, 1776, which is why we celebrate Independence Day on July 4.'),
      Q('Who was the main writer of the Declaration of Independence?', ['George Washington', 'Thomas Jefferson', 'Paul Revere', 'Button Gwinnett'], 1, 'Thomas Jefferson was the main author.'),
      Q('Which one of these men signed the Declaration for Georgia?', ['Button Gwinnett', 'Paul Revere', 'John Adams', 'Patrick Henry'], 0, 'Georgia\'s signers were Button Gwinnett, Lyman Hall, and George Walton.'),
      Q('Which battle in 1781 was a major colonial victory?', ['Valley Forge', 'Yorktown', 'Lexington', 'Boston'], 1, 'Yorktown, Virginia, was where British General Cornwallis surrendered.'),
      Q('What did the Treaty of Paris (1783) do?', ['Started the war', 'Officially ended the war and recognized the United States', 'Created taxes', 'Founded Georgia'], 1, 'The Treaty of Paris officially ended the Revolutionary War.')
    ], activity: 'Hands-on: Make a timeline strip with the five dates and a small picture for each event.'
  });

  // ============================== READING ==============================
  var BOOK = 'Charlotte\'s Web';
  lesson(1, 'wed', 'reading', 'reading', {
    type: 'lesson', title: 'Reading: main idea and key details', mins: 30, standard: 'ELAGSE4RI2 / RL2',
    learn: [{ h: 'Main idea', p: 'The MAIN IDEA is what a text is mostly about. KEY DETAILS are facts or examples that support it. To find the main idea, ask: "If I had to tell someone what this is about in one sentence, what would I say?"' }],
    passage: ['Every spring, the town of Millbrook holds a kite festival. Hundreds of families gather on Hilltop Field with kites of every color. Some kites are shaped like dragons or fish. Others are plain diamonds with long ribbon tails.',
      'The festival has three contests. The "Highest Flyer" prize goes to the kite that climbs the farthest. The "Best Design" prize is for the most creative kite. The "Longest Tail" prize is just for fun. Last year, a nine-year-old named Rosa won Best Design with a kite she built from a paper bag and sticks.',
      'Wind is the secret to flying a kite. A light, steady breeze works best. If the wind is too strong, the string can snap. If there is no wind, the kite will not leave the ground. Most people run a few steps to help lift their kites, and then let out string slowly.'],
    demo: { q: 'What is the main idea of the passage "Millbrook\'s Kite Festival"?', steps: ['Step 1: Skim each paragraph and say what it is about. Paragraph 1: the festival and the kites. Paragraph 2: the contests and a winner. Paragraph 3: how wind helps kites fly.', 'Step 2: Ask: what idea connects all three? They are all about the kite festival and kite flying.', 'Step 3: Check that it covers everything. "Millbrook has a kite festival with contests, and wind is the key to flying kites." That covers all three paragraphs.', 'Step 4: A key detail supports it. Example: "The festival has three contests: Highest Flyer, Best Design, and Longest Tail."'], a: 'Millbrook holds a kite festival with contests; wind helps kites fly.' },
    items: [
      Q('What is the main idea of the passage?', ['Rosa built a kite', 'Millbrook\'s kite festival, its contests, and how kites fly', 'Wind can break strings', 'Kites can look like dragons'], 1, 'The main idea covers the whole passage: the festival, contests, and flying tips. Rosa and the dragon kites are only details.', 'Which answer covers all three paragraphs?'),
      Q('Which is a KEY DETAIL?', ['Millbrook is a nice town', 'The festival has three contests', 'Kites are fun', 'It is Saturday'], 1, 'The passage says "The festival has three contests." That is a specific fact from the text. The others are not stated.'),
      Q('What did Rosa use to build her winning kite?', ['Paper bag and sticks', 'Plastic and wire', 'Fabric and rope', 'A box'], 0, 'The second paragraph says she built it "from a paper bag and sticks."'),
      Q('What happens if the wind is too strong?', ['The kite flies higher', 'The string can snap', 'The kite changes color', 'Nothing'], 1, 'Paragraph 3: "If the wind is too strong, the string can snap."'),
      Q('Which prize is just for fun?', ['Highest Flyer', 'Best Design', 'Longest Tail', 'Fastest Runner'], 2, 'Paragraph 2 says the "Longest Tail" prize is just for fun.'),
      T('Which prize did Rosa win? (two words)', ['best design'], 'Rosa won "Best Design" with her paper bag kite.')
    ],
    book: { title: BOOK, assign: 'Read Chapters 1–3 with your parent (about 15 pages). You may read aloud or take turns.', prompts: [
      O('Chapter 1: Fern is upset when she learns what her father plans to do with the smallest pig. In your own words, what does Fern do, and why do you think she does it? (2–3 sentences)', 20),
      O('What do you notice about the way Fern feels about Wilbur? Give one detail from the book.', 15)] }
  });
  lesson(2, 'wed', 'reading', 'reading', {
    type: 'lesson', title: 'Reading: character traits and inferences', mins: 30, standard: 'ELAGSE4RL3',
    learn: [{ h: 'Inference', p: 'An INFERENCE is a smart guess from clues in the text plus what you already know. Characters\' actions, words, and feelings are clues to their TRAITS (like brave, kind, stubborn).' }],
    passage: ['Marcus stared at the empty cage. His hamster, Peanut, was gone. The latch hung open. He remembered he had been in a hurry that morning and had not checked it.',
      'Marcus didn\'t tell anyone. Instead he searched under the couch, behind the TV, and inside every shoe by the door. His little sister Nia saw him crawling on the floor and asked what he was doing. "Nothing," he said, and his cheeks turned pink.',
      'Finally, he took a deep breath and walked to the kitchen. "Mom," he said quietly, "I made a mistake. Peanut got out because I left the cage open. I\'m sorry. Will you help me find him?" Mom smiled and handed him a flashlight. "Thank you for telling me the truth," she said. Together they found Peanut asleep inside an old boot.'],
    demo: { q: 'What can we infer about Marcus when he says "Nothing," and his cheeks turned pink?', steps: ['Step 1: Find the clue. He says "Nothing" but his cheeks turn pink.', 'Step 2: Think about what you know. People often blush when they feel embarrassed or are not being fully honest.', 'Step 3: Put them together. Marcus feels embarrassed and is hiding the truth for now.', 'Step 4: Answer: Marcus is embarrassed and worried about getting in trouble. (Evidence: pink cheeks and "Nothing.")'], a: 'Marcus is embarrassed and hiding the truth.' },
    items: [
      Q('Which word best describes Marcus at the END of the story?', ['Careless', 'Honest and responsible', 'Lazy', 'Rude'], 1, 'He told the truth, said sorry, and asked for help. Those actions show honesty and responsibility.', 'Think about what he did in the last paragraph.'),
      Q('Why did Marcus not tell anyone at first?', ['He did not care about Peanut', 'He felt embarrassed and afraid of getting in trouble', 'He did not know Peanut was gone', 'He was sleepy'], 1, 'He searched alone and said "Nothing" with pink cheeks. Those are clues he felt embarrassed or worried.'),
      Q('What did Marcus\'s mom\'s reaction show about her?', ['She was angry', 'She was kind and valued honesty', 'She did not care', 'She was surprised'], 1, 'She smiled, thanked him for the truth, and helped. That shows kindness and that she values honesty.'),
      Q('Where did they find Peanut?', ['Under the couch', 'In a shoe by the door', 'Asleep inside an old boot', 'Behind the TV'], 2, 'The last sentence says Peanut was "asleep inside an old boot."'),
      Q('Which sentence is a good lesson (theme) of this story?', ['Hamsters are hard to find', 'Telling the truth about a mistake is the right thing to do', 'Never be in a hurry', 'Always check shoes'], 1, 'The theme is the message: Marcus felt better, and was helped, after he told the truth.'),
      T('What was the hamster\'s name?', ['peanut'], 'The hamster was named Peanut.')
    ],
    book: { title: BOOK, assign: 'Read Chapters 4–6 with your parent.', prompts: [
      O('How do Wilbur\'s feelings change in these chapters? Give one example of how you know.', 20),
      O('Choose one character and write two words that describe them. For each word, give a clue from the book.', 25)] }
  });
  lesson(3, 'wed', 'reading', 'reading', {
    type: 'lesson', title: 'Reading: vocabulary in context', mins: 30, standard: 'ELAGSE4L4',
    learn: [{ h: 'Context clues', p: 'When you meet a word you don\'t know, look at the words and sentences around it for clues: a definition, an example, a synonym (similar word), or an antonym (opposite).' }],
    passage: ['The old lighthouse stood on a rocky point, looking out over a restless sea. Its keeper, Mr. Harlan, was a very meticulous man. Every morning he polished the great lens until it gleamed, checked every bolt, and wrote notes in his log book in careful handwriting.',
      'One stormy night the wind howled and waves crashed against the rocks. A small fishing boat was lost in the dark. Mr. Harlan climbed the spiral stairs and turned on the great light. Its powerful beam cut through the fog like a sword. The fishermen saw it and steered safely toward shore.',
      'The next day the fishermen came to thank him. "We were in peril," one said, "but your light guided us." Mr. Harlan simply nodded and said, "It is my job." Still, he smiled as he polished the lens once more.'],
    demo: { q: 'What does "meticulous" mean in "Mr. Harlan was a very meticulous man"?', steps: ['Step 1: Read the sentences around the word. "...polished the great lens until it gleamed, checked every bolt, and wrote notes... in careful handwriting."', 'Step 2: What do those actions have in common? Mr. Harlan does everything very carefully and pays attention to small details.', 'Step 3: Try the meaning in the sentence: "Mr. Harlan was a very careful, detail-minded man." It makes sense.', 'Step 4: Answer: meticulous means very careful about details.'], a: 'Very careful about details' },
    items: [
      Q('What does "meticulous" mean?', ['Very careful about details', 'Very loud', 'Lazy', 'Very old'], 0, 'The clues are polishing until it gleamed, checking every bolt, and careful handwriting.', 'Look at what he does every morning.'),
      Q('What does "peril" most likely mean in "We were in peril, but your light guided us"?', ['Joy', 'Danger', 'A game', 'A party'], 1, 'The boat was lost in a stormy night. "But your light guided us" shows they were in trouble, so peril means danger.'),
      Q('"Its powerful beam cut through the fog like a sword." This is a...', ['Fact only', 'Simile (a comparison using "like")', 'Question', 'Rhyme'], 1, 'A simile compares two things using like or as. The light is compared to a sword cutting through fog.'),
      Q('What is a "restless" sea, as used in the first paragraph?', ['A calm sea', 'A sea that is always moving', 'A frozen sea', 'A small sea'], 1, 'The sea is restless because it never stays still, like a person who cannot sit still.'),
      Q('Why did Mr. Harlan say "It is my job"?', ['He was bragging', 'He was modest and humble', 'He was angry', 'He was tired'], 1, 'He downplayed what he did, which shows modesty.'),
      T('What does Mr. Harlan polish every morning? (two words)', ['the lens', 'great lens', 'the great lens', 'lens'], 'The text says he polished "the great lens."')
    ],
    book: { title: BOOK, assign: 'Read Chapters 7–9 with your parent.', prompts: [
      O('Find one word in these chapters that you did not know. Write the word, the sentence it was in, and what you think it means from the clues.', 25),
      O('What problem does Wilbur face in these chapters? How do you think the story will solve it?', 20)] }
  });
  lesson(4, 'wed', 'reading', 'reading', {
    type: 'lesson', title: 'Reading: theme, summary, and text evidence', mins: 30, standard: 'ELAGSE4RL2',
    learn: [{ h: 'Theme and summary', p: 'The THEME is the big lesson of a story. A SUMMARY retells the main events in order, in a few sentences, without small details. TEXT EVIDENCE means proving your answer with words from the passage.' }],
    passage: ['Priya loved the big oak tree in her yard. Each summer she climbed to the highest branch and read her favorite books there. When she was seven, she carved her initials into the trunk with a small stone.',
      'One day a strong storm blew through the neighborhood. In the morning, Priya ran outside and gasped. A huge branch had cracked off the oak and crashed to the ground. She was heartbroken. "The tree is ruined," she cried.',
      'Her grandfather knelt beside her. "Trees are tougher than they look," he said. He showed her where new green buds were already sprouting near the break. By the next summer, the tree had grown thick new branches, and Priya was reading in her spot again.'],
    demo: { q: 'How do I write a summary of "The Oak Tree"?', steps: ['Step 1: List the beginning, middle, and end. Beginning: Priya loves her oak tree. Middle: a storm breaks a big branch and she is heartbroken. End: her grandfather shows her new buds, and the tree grows back.', 'Step 2: Use first, then, finally to connect: "First... Then... Finally..."', 'Step 3: Leave out small details (like carving her initials).', 'Step 4: Summary: "Priya loved her oak tree. After a storm broke a big branch, she was sad, but her grandfather showed her it was growing back. By the next summer the tree was healthy again."'], a: 'Short retelling in order, no small details.' },
    items: [
      Q('What is the best THEME of the story?', ['Storms are scary', 'Things that are damaged can heal and grow back', 'Trees are tall', 'Never carve initials'], 1, 'The tree was damaged but grew back, a lesson that things can recover.'),
      Q('Which sentence best SUMMARIZES the story?', ['Priya carved her initials in a tree.', 'A storm broke a branch off Priya\'s beloved oak, but with her grandfather\'s help she saw it grow back.', 'Priya reads books in a tree.', 'A grandfather visited Priya.'], 1, 'A summary includes the main events from beginning to end. The others only mention one small detail.'),
      Q('Which detail is TEXT EVIDENCE that Priya was sad about the tree?', ['"Priya ran outside and gasped."', '"She carved her initials."', '"Her grandfather knelt."', '"She read in her spot again."'], 0, 'Gasping, and the next sentence (heartbroken, crying), show her sadness. Evidence means words from the text that prove the answer.'),
      Q('What did the grandfather mean by "Trees are tougher than they look"?', ['Trees are made of metal', 'Trees can survive damage and recover', 'Trees never break', 'Trees need no care'], 1, 'He then showed her new buds, evidence that the tree was recovering.'),
      Q('When did Priya carve her initials into the trunk?', ['At age five', 'At age seven', 'At age ten', 'After the storm'], 1, 'Paragraph 1 says "When she was seven."'),
      T('What kind of tree was it? (one word)', ['oak'], 'The text says "big oak tree."')
    ],
    book: { title: BOOK, assign: 'Read Chapters 10–12 with your parent.', prompts: [
      O('Write a 3-sentence SUMMARY of what happened in these chapters. Use the words first, next, and finally.', 30),
      O('What do you think is the biggest lesson (theme) of the book so far? Give one example from the book to prove it.', 30)] }
  });

  var api = {};
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.StemContent = api;
})(typeof window !== 'undefined' ? window : globalThis);
