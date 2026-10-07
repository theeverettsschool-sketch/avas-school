/* Spelling lists, weeks 5-37: grade 4 patterns (weeks 5-18), grade 5 patterns (weeks 19-36), review (week 37). */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T; // eslint-disable-line no-unused-vars

  // =========================== GRADE 4 PATTERNS ===========================
  C.unit('spelling', 5, {
    name: 'Long a: ai, ay, a_e, eigh',
    rule: 'Long a (the sound in "cake") can be spelled ai in the middle of a word, ay at the end, a_e with a silent e, or eigh as in "eight."',
    words: [
      ['chain', 'The swing hangs from a metal chain.', 'ai in the middle: ch-AI-n.'],
      ['paint', 'We used blue paint for the sky.', 'ai in the middle: p-AI-nt.'],
      ['sail', 'The boat has a white sail that catches the wind.', 'A sail on a boat uses ai, not a_e.'],
      ['holiday', 'Thanksgiving is my favorite holiday.', 'ay comes at the END of a word: holid-AY.'],
      ['display', 'The store put the new toys on display in the window.', 'ay at the end: displ-AY.'],
      ['crayon', 'She drew a flower with a yellow crayon.', 'cr-AY-on: the ay sound starts the word.'],
      ['escape', 'The hamster tried to escape from its cage.', 'a_e: the silent e at the end makes the a say its name.'],
      ['parade', 'A marching band led the parade down Main Street.', 'a_e: par-ADE, silent e at the end.'],
      ['mistake', 'I erased my mistake and tried again.', 'mis + take: the silent e makes the a long.'],
      ['weigh', 'The nurse will weigh you on the scale.', 'eigh says long a, just like in eight.'],
      ['freight', 'A freight train carries boxes and goods, not people.', 'fr + EIGH + t. Think "eight" with fr in front.'],
      ['neighbor', 'Our neighbor waved from her porch.', 'The eigh in neighbor is the same as in eight.']
    ]
  });

  C.unit('spelling', 6, {
    name: 'Long e: ee, ea, ie, y',
    rule: 'Long e (the sound in "me") can be spelled ee, ea, or ie in the middle of a word, and y at the end of a word with more than one syllable.',
    words: [
      ['sleeve', 'My shirt sleeve got wet when I washed my hands.', 'ee in the middle, plus a silent e at the end: sl-EE-ve.'],
      ['breeze', 'A cool breeze blew through the open window.', 'br-EE-ze: two e\'s like two leaves blowing.'],
      ['between', 'I sat between my mom and my dad.', 'be-tw-EE-n: the e twins sit between t-w and n.'],
      ['season', 'Fall is the season when leaves change color.', 's-EA-son: winter, spring, summer, and fall are the four seasons.'],
      ['reason', 'Tell me the reason you were late.', 'r-EA-son rhymes with season and is spelled the same way at the end.'],
      ['beneath', 'The cat hid beneath the bed.', 'beneath means under: be + n-EA-th.'],
      ['field', 'The cows ate grass in the field.', 'i before e: f-IE-ld.'],
      ['shield', 'The knight held up his shield to block the arrow.', 'sh + IE + ld. Shield rhymes with field and ends the same way.'],
      ['believe', 'I believe you can do it.', 'Never beLIEve a LIE: the word lie is hiding inside.'],
      ['chief', 'The fire chief is the leader of the firefighters.', 'ch + IE + f: i before e.'],
      ['empty', 'The cookie jar is empty, so there are none left.', 'At the end of a longer word, y says long e: empt-Y.'],
      ['angry', 'The angry dog barked at the mail truck.', 'y at the end says long e: angr-Y.']
    ]
  });

  C.unit('spelling', 7, {
    name: 'Long i: igh, y, i_e, ie',
    rule: 'Long i (the sound in "kite") can be spelled igh, i_e with a silent e, y at the end of a word, or ie.',
    words: [
      ['bright', 'The sun is so bright that I need sunglasses.', 'igh says long i; the g and h are silent.'],
      ['delight', 'The puppy was a delight to everyone at the party.', 'de + light: delight means great joy.'],
      ['highway', 'Cars drove fast on the highway.', 'high + way: two words joined, with igh and ay.'],
      ['sigh', 'I let out a sigh when the rain started.', 's + IGH: a sigh is a long, tired breath.'],
      ['reply', 'Please reply to my letter soon.', 'y at the end of a short word can say long i: repl-Y.'],
      ['supply', 'We bought a supply of paper for the school year.', 'sup-PLY: double p, then y says long i.'],
      ['July', 'We watch fireworks on the Fourth of July.', 'Ju-LY: months always start with a capital letter.'],
      ['decide', 'You can decide which book we read tonight.', 'de-c-I-de: the silent e makes the i say its name.'],
      ['invite', 'I will invite my friends to my party.', 'in + vite: silent e at the end makes the i long.'],
      ['surprise', 'We planned a surprise for Grandma.', 'Two r\'s: suR-pRise. Ends with i_e (prise).'],
      ['untie', 'Can you help me untie this knot?', 'un + tie: the ie says long i.'],
      ['cried', 'The baby cried until he got his bottle.', 'cry → change y to i → cried. The ie says long i.']
    ]
  });

  C.unit('spelling', 8, {
    name: 'Long o: oa, ow, o_e',
    rule: 'Long o (the sound in "go") can be spelled oa in the middle of a word, ow at the end, or o_e with a silent e.',
    words: [
      ['float', 'A leaf will float on top of the water.', 'oa in the middle: fl-OA-t, like a boat.'],
      ['coast', 'We drove along the coast to see the ocean.', 'c-OA-st: the coast is land next to the sea.'],
      ['throat', 'Warm tea helps my sore throat.', 'thr-OA-t: oa in the middle.'],
      ['approach', 'Slow down as you approach the stop sign.', 'Double p, then oa: a-PP-r-OA-ch.'],
      ['below', 'The fish swam below the boat.', 'ow at the end says long o: bel-OW.'],
      ['window', 'I looked out the window at the snow.', 'wind + ow: long o at the end.'],
      ['shadow', 'My shadow follows me on a sunny day.', 'shad + ow: ow at the end.'],
      ['follow', 'The ducklings follow their mother.', 'Double l, then ow: fo-LL-ow.'],
      ['explode', 'The popcorn kernels explode in the hot pan.', 'ex + plode: the silent e makes the o long.'],
      ['alone', 'The kitten did not want to be alone.', 'a + lone: alone has the word one inside it.'],
      ['suppose', 'I suppose we can play one more game.', 'Double p: su-PP-ose. Silent e at the end.'],
      ['remote', 'Dad lost the TV remote under the couch.', 're + mote: silent e makes the o long.']
    ]
  });

  C.unit('spelling', 9, {
    name: 'R-controlled vowels: ar, or, ore',
    rule: 'When a vowel is followed by r, the r changes its sound. ar says "ar" as in car. or and ore both say "or" as in corn and more.',
    words: [
      ['market', 'We bought peaches at the farmers market.', 'm-AR-ket: ar says "ar."'],
      ['garden', 'Tomatoes grow in our garden.', 'g-AR-den: ar in the first syllable.'],
      ['carpet', 'The puppy fell asleep on the soft carpet.', 'car + pet: two small words make carpet.'],
      ['alarm', 'The fire alarm beeped loudly.', 'a + l-AR-m: ar says "ar."'],
      ['harbor', 'The ships stayed safe in the harbor during the storm.', 'h-AR-b-OR: it has both ar and or.'],
      ['morning', 'I eat breakfast every morning.', 'm-OR-ning: or says "or."'],
      ['forest', 'Tall pine trees grow in the forest.', 'f-OR-est: a forest is full of trees.'],
      ['corner', 'Our house is on the corner of the street.', 'c-OR-ner: or, then er.'],
      ['report', 'She wrote a report about sea turtles.', 're + port: or says "or."'],
      ['explore', 'We will explore the cave with flashlights.', 'ex + pl-ORE: ore at the end has a silent e.'],
      ['before', 'Wash your hands before dinner.', 'be + fore: ore at the end.'],
      ['score', 'The final score was 3 to 2.', 'sc + ORE: ore at the end of the word.']
    ]
  });

  C.unit('spelling', 10, {
    name: 'R-controlled vowels: er, ir, ur',
    rule: 'er, ir, and ur all make the same sound, as in her, bird, and fur. You have to remember which one each word uses.',
    words: [
      ['perfect', 'She got a perfect score on her test.', 'p-ER-fect: er in the first part.'],
      ['person', 'The kindest person I know is my grandma.', 'p-ER-son: er, then son.'],
      ['thunder', 'The thunder was so loud it shook the windows.', 'thund-ER: er at the end.'],
      ['thirsty', 'After soccer, I was very thirsty for water.', 'th-IR-sty: ir, and y at the end says long e.'],
      ['circle', 'We sat in a circle on the rug.', 'c-IR-cle: a circle is round like the i\'s dot.'],
      ['birthday', 'My birthday is in the spring.', 'birth + day: ir in birth.'],
      ['squirm', 'The worm began to squirm in my hand.', 'squ + IR + m: to squirm is to wiggle.'],
      ['purple', 'Grapes can be green or purple.', 'p-UR-ple: ur, then -ple.'],
      ['turtle', 'The turtle pulled its head into its shell.', 't-UR-tle: ur, then -tle.'],
      ['curtain', 'Close the curtain so the sun stays out.', 'c-UR-tain: ur, then tain.'],
      ['return', 'Please return the book to the library.', 're + turn: ur in turn.'],
      ['nurse', 'The nurse checked my temperature.', 'n-UR-se: ur, then a silent e.']
    ]
  });

  C.unit('spelling', 11, {
    name: 'Vowel teams: oo, ou, ow, oi, oy',
    rule: 'oo says "oo" as in moon. ou and ow both say "ow" as in out and cow. oi and oy both say "oy": oi is used in the middle of a word and oy is used at the end.',
    words: [
      ['balloon', 'The red balloon floated up into the sky.', 'Double l AND double o: ba-LL-OO-n.'],
      ['smooth', 'The stone felt smooth in my hand.', 'sm-OO-th: oo says "oo."'],
      ['cloud', 'A dark cloud covered the sun.', 'cl-OU-d: ou says "ow" in the middle.'],
      ['mouth', 'Open your mouth and say "ah."', 'm-OU-th: ou says "ow."'],
      ['ground', 'The apples fell to the ground.', 'gr-OU-nd: ou in the middle.'],
      ['crowd', 'A big crowd cheered at the game.', 'cr-OW-d: ow says "ow" here, like a cow.'],
      ['flower', 'A bee landed on the flower.', 'fl-OW-er: ow, then er.'],
      ['point', 'Sharpen your pencil to a sharp point.', 'p-OI-nt: oi in the middle of a word.'],
      ['noise', 'The fan made a buzzing noise.', 'n-OI-se: oi in the middle, silent e at the end.'],
      ['avoid', 'We walked around the puddle to avoid getting wet.', 'a + v-OI-d: oi in the middle.'],
      ['enjoy', 'I enjoy reading in my treehouse.', 'en + j-OY: oy at the end of a word.'],
      ['loyal', 'A loyal friend sticks by you.', 'l-OY-al: loyal means always faithful.']
    ]
  });

  C.unit('spelling', 12, {
    name: 'Plurals: -s, -es, y to -ies',
    rule: 'Add -s to most nouns. Add -es to nouns ending in s, x, ch, or sh. If a noun ends in a consonant + y, change the y to i and add -es. If it ends in a vowel + y, just add -s.',
    words: [
      ['rabbits', 'Two rabbits hopped through the garden.', 'Most words just add -s: rabbit → rabbits.'],
      ['monkeys', 'The monkeys swung from branch to branch.', 'Vowel + y (ey): just add -s. monkey → monkeys.'],
      ['boxes', 'We packed our books in boxes.', 'Ends in x → add -es: box → boxes.'],
      ['dishes', 'I helped wash the dishes after dinner.', 'Ends in sh → add -es: dish → dishes.'],
      ['branches', 'Birds built a nest in the branches of the oak tree.', 'Ends in ch → add -es: branch → branches.'],
      ['glasses', 'Grandpa wears glasses to read.', 'Ends in s → add -es: glass → glasses.'],
      ['foxes', 'The foxes hid in their den.', 'Ends in x → add -es: fox → foxes.'],
      ['berries', 'We picked berries for a pie.', 'Consonant + y: change y to i, add -es. berry → berries.'],
      ['cities', 'Atlanta and Savannah are cities in Georgia.', 'city → citi + es → cities.'],
      ['puppies', 'The puppies chased each other around the yard.', 'puppy → puppi + es → puppies.'],
      ['families', 'Many families came to the church picnic.', 'family → famili + es → families.'],
      ['stories', 'Dad tells funny stories at bedtime.', 'story → stori + es → stories.']
    ]
  });

  C.unit('spelling', 13, {
    name: 'Irregular plurals and f to ves',
    rule: 'Some nouns change their spelling to make a plural (child → children, mouse → mice), and some stay the same (sheep). Many nouns ending in f or fe change to ves (leaf → leaves).',
    words: [
      ['children', 'The children played tag at recess.', 'One child, many children.'],
      ['women', 'Three women sang in the choir.', 'One woman, two women: the a changes to e.'],
      ['mice', 'The cat watched two mice run under the barn.', 'One mouse, many mice.'],
      ['teeth', 'Brush your teeth before bed.', 'One tooth, many teeth: oo changes to ee.'],
      ['geese', 'A flock of geese flew south for the winter.', 'One goose, many geese: oo changes to ee, like tooth and teeth.'],
      ['sheep', 'The farmer counted his sheep.', 'One sheep, two sheep: the word does not change.'],
      ['leaves', 'We raked the leaves into a big pile.', 'leaf → change f to v, add -es → leaves.'],
      ['wolves', 'The wolves howled at night.', 'wolf → wolves: f changes to v.'],
      ['knives', 'Be careful with sharp knives in the kitchen.', 'knife → knives: fe changes to ves. The k is silent.'],
      ['shelves', 'The library shelves are full of books.', 'shelf → shelves: f changes to v.'],
      ['halves', 'I cut the apple into two halves.', 'half → halves: f changes to v. The l is silent.'],
      ['loaves', 'Mom baked two loaves of bread.', 'loaf → loaves: f changes to v.']
    ]
  });

  C.unit('spelling', 14, {
    name: 'Prefixes un-, re-, dis-',
    rule: 'A prefix is added to the front of a base word and changes its meaning. un- and dis- mean "not" or "the opposite of." re- means "again." The base word keeps its spelling.',
    words: [
      ['unlock', 'Use the key to unlock the door.', 'un + lock = the opposite of lock.'],
      ['unkind', 'It is unkind to laugh at someone who falls.', 'un + kind = not kind.'],
      ['unfair', 'It felt unfair that only one team got snacks.', 'un + fair = not fair.'],
      ['unusual', 'It is unusual to see snow in our town.', 'un + usual = not usual. Keep both u\'s.'],
      ['rebuild', 'After the storm, they had to rebuild the fence.', 're + build = build again.'],
      ['refill', 'Can you refill my water bottle?', 're + fill = fill again.'],
      ['replay', 'Let\'s replay that song one more time.', 're + play = play again.'],
      ['recycle', 'We recycle our cans and bottles so they can be used again.', 're + cycle = use again.'],
      ['disagree', 'It is okay to disagree politely.', 'dis + agree = not agree. Only one s.'],
      ['dislike', 'I dislike cold, rainy days.', 'dis + like = not like.'],
      ['disappear', 'The magician made the coin disappear.', 'dis + appear: one s, two p\'s.'],
      ['disobey', 'The puppy will sometimes disobey and jump on the couch.', 'dis + obey = not obey.']
    ]
  });

  C.unit('spelling', 15, {
    name: 'Suffixes -ful, -less, -ness',
    rule: 'A suffix is added to the end of a base word. -ful means "full of," -less means "without," and -ness means "the state of being." -ful has only ONE l. If the base word ends in consonant + y, change the y to i first (happy → happiness).',
    words: [
      ['helpful', 'My brother was helpful when I cleaned my room.', 'help + ful. -ful has only one l.'],
      ['thankful', 'We are thankful for our food and our home.', 'thank + ful = full of thanks.'],
      ['cheerful', 'Her cheerful smile made everyone happy.', 'cheer + ful = full of cheer.'],
      ['careful', 'Be careful when you cross the street.', 'care + ful: keep the e in care.'],
      ['fearless', 'The fearless firefighter ran into the smoke.', 'fear + less = without fear.'],
      ['spotless', 'After we cleaned, the kitchen was spotless.', 'spot + less = without a spot.'],
      ['endless', 'The drive to the beach felt endless.', 'end + less = without an end.'],
      ['kindness', 'Show kindness to everyone you meet.', 'kind + ness = being kind.'],
      ['darkness', 'The owl hunts in the darkness of night.', 'dark + ness = being dark.'],
      ['sadness', 'She felt sadness when her friend moved away.', 'sad + ness: keep the d and add ness.'],
      ['happiness', 'The new puppy brought us so much happiness.', 'happy → change y to i → happi + ness.'],
      ['goodness', 'The pie was full of buttery goodness.', 'good + ness = being good.']
    ]
  });

  C.unit('spelling', 16, {
    name: 'Words ending in -tion and -sion',
    rule: '-tion and -sion both come at the end of a word. -tion usually sounds like "shun" (action). -sion often sounds like "zhun" (vision), and sometimes like "shun" (mansion).',
    words: [
      ['action', 'The movie was full of action.', 'act + ion: -tion says "shun."'],
      ['motion', 'The rocking chair moved back and forth with a gentle motion.', 'mo + tion: motion means movement.'],
      ['vacation', 'We went to the mountains on vacation.', 'va-ca-tion: three parts, ends in -tion.'],
      ['addition', 'Addition means putting numbers together.', 'add + ition: double d, then -tion.'],
      ['question', 'Raise your hand if you have a question.', 'ques + tion: here -tion sounds like "chun."'],
      ['invention', 'The light bulb was a helpful invention.', 'invent + ion: the t is already there.'],
      ['vision', 'Glasses help my vision so I can see clearly.', 'vi + sion: -sion says "zhun."'],
      ['decision', 'Choosing a puppy was a big decision.', 'decide → decision: -sion says "zhun."'],
      ['division', 'We learned division in math today.', 'divide → division: -sion says "zhun."'],
      ['explosion', 'The volcano model made a foamy explosion.', 'explode → explosion: -sion says "zhun."'],
      ['confusion', 'There was confusion about which bus to take.', 'confuse → confusion: -sion says "zhun."'],
      ['mansion', 'The rich family lived in a huge mansion.', 'man + sion: here -sion says "shun."']
    ]
  });

  C.unit('spelling', 17, {
    name: 'Consonant + le endings',
    rule: 'Many words end with a consonant + le, like -ble, -dle, -tle, and -ple. The le makes the "ul" sound at the end. If the first vowel is short, the consonant is often doubled (bubble, middle).',
    words: [
      ['table', 'Please set the plates on the table.', 'ta + ble: long a, so only one b.'],
      ['bubble', 'I blew a giant bubble with my gum.', 'Short u, so double the b: bu-BB-le.'],
      ['marble', 'The marble rolled under the couch.', 'mar + ble: -ble ending.'],
      ['candle', 'We lit a candle at dinner.', 'can + dle: -dle ending.'],
      ['middle', 'The middle seat is between the other two.', 'Short i, so double the d: mi-DD-le.'],
      ['needle', 'Grandma used a needle and thread to fix my doll.', 'nee + dle: long e, so only one d.'],
      ['little', 'The little bird hopped on the fence.', 'Short i, so double the t: li-TT-le.'],
      ['bottle', 'I filled my water bottle before the hike.', 'Short o, so double the t: bo-TT-le.'],
      ['gentle', 'Be gentle when you hold the baby chick.', 'gen + tle: -tle ending.'],
      ['simple', 'The recipe was simple to follow.', 'sim + ple: -ple ending.'],
      ['maple', 'Syrup is made from the sap of a maple tree.', 'ma + ple: long a, so only one p.'],
      ['sample', 'The store gave us a free sample of cheese.', 'sam + ple: -ple ending.']
    ]
  });

  C.unit('spelling', 18, {
    name: 'Compound words',
    rule: 'A compound word is made by joining two smaller words. Spell each small word correctly and keep all the letters of both.',
    words: [
      ['rainbow', 'A rainbow appeared after the storm.', 'rain + bow.'],
      ['backpack', 'I packed my lunch in my backpack.', 'back + pack.'],
      ['sunflower', 'The sunflower grew taller than me.', 'sun + flower.'],
      ['grasshopper', 'A grasshopper jumped out of the tall grass.', 'grass + hopper: keep the double s AND the double p.'],
      ['waterfall', 'We heard the waterfall before we saw it.', 'water + fall.'],
      ['everything', 'Everything in the room was covered in glitter.', 'every + thing.'],
      ['somebody', 'Somebody left a jacket on the bench.', 'some + body: keep the e in some.'],
      ['playground', 'We met our friends at the playground.', 'play + ground.'],
      ['basketball', 'She threw the basketball through the hoop.', 'basket + ball.'],
      ['homework', 'I finished my homework before dinner.', 'home + work: keep the e in home.'],
      ['fireplace', 'We sat by the warm fireplace.', 'fire + place: keep the e in fire.'],
      ['toothbrush', 'I got a new green toothbrush.', 'tooth + brush.']
    ]
  });

  // =========================== GRADE 5 PATTERNS ===========================
  C.unit('spelling', 19, {
    name: 'Silent letters: kn, wr, gn, mb',
    rule: 'Some letters are written but not heard. In kn the k is silent, in wr the w is silent, in gn the g is silent, and in mb the b is silent.',
    words: [
      ['knock', 'Please knock before you open the door.', 'Silent k: (k)nock. kn at the start says "n."'],
      ['knight', 'The knight wore heavy armor.', 'Silent k AND silent gh: (k)ni(gh)t.'],
      ['knuckle', 'I bumped my knuckle on the table.', 'Silent k: (k)nuckle. Your knuckle is where your finger bends.'],
      ['wrist', 'She wears a watch on her wrist.', 'Silent w: (w)rist.'],
      ['wrinkle', 'Mom ironed out the wrinkle in my dress.', 'Silent w: (w)rinkle.'],
      ['wrong', 'I took a wrong turn and got lost.', 'Silent w: (w)rong.'],
      ['wreath', 'We hung a wreath of pine branches on the door.', 'Silent w: (w)reath. ea says long e.'],
      ['gnaw', 'Beavers gnaw on trees with their strong teeth.', 'Silent g: (g)naw. To gnaw means to chew and chew.'],
      ['design', 'I drew a design for my new treehouse.', 'Silent g: desi(g)n. Think of the word sign inside.'],
      ['thumb', 'He gave me a thumbs-up with his thumb.', 'Silent b: thum(b).'],
      ['climb', 'We like to climb the big oak tree.', 'Silent b: clim(b).'],
      ['plumber', 'The plumber fixed our leaky sink.', 'Silent b: plum(b)er.']
    ]
  });

  C.unit('spelling', 20, {
    name: 'Words with -ough and -augh',
    rule: 'The letters ough and augh can make several different sounds: "oh" (though), "uff" (tough), "off" (cough), "aw" (bought, caught), or "af" (laughter). You have to learn each word by sight.',
    words: [
      ['though', 'It was cold, though the sun was out.', 'ough says long o here: th-OUGH.'],
      ['dough', 'We rolled the cookie dough into balls.', 'ough says long o, just like though.'],
      ['tough', 'The hike up the hill was tough.', 'ough says "uff" here: t-OUGH.'],
      ['rough', 'The tree bark felt rough on my hands.', 'ough says "uff," like tough.'],
      ['enough', 'Do we have enough chairs for everyone?', 'e-n-OUGH: ough says "uff."'],
      ['cough', 'A cold can make you cough.', 'ough says "off" here: c-OUGH.'],
      ['bought', 'Dad bought new shoes for me.', 'ough says "aw": b-OUGHT. bought is from buy.'],
      ['brought', 'She brought cookies to share.', 'b-R-ought: brought is from bring (both have r).'],
      ['taught', 'My mom taught me how to ride a bike.', 'augh says "aw": t-AUGHT. taught is from teach (both have a).'],
      ['caught', 'He caught the ball with both hands.', 'c-AUGHT: augh says "aw."'],
      ['daughter', 'The farmer and his daughter fed the chickens.', 'd-AUGH-ter: augh says "aw."'],
      ['laughter', 'The room filled with laughter at the funny joke.', 'l-AUGH-ter: here augh says "af."']
    ]
  });

  C.unit('spelling', 21, {
    name: 'Homophones',
    rule: 'Homophones sound the same but have different spellings and meanings. Use the meaning of the sentence to pick the right spelling.',
    words: [
      ['piece', 'May I have a piece of pie?', 'A PIEce of PIE: piece has the word pie in it.'],
      ['peace', 'The two countries made peace and stopped fighting.', 'pEAce: peace means calm, with no fighting.'],
      ['weather', 'The weather today is sunny and warm.', 'wEAther: weather is what it is like outside, like hEAt.'],
      ['whether', 'I do not know whether it will rain or not.', 'wHether: it asks wHich one, so it starts with wh.'],
      ['allowed', 'We are allowed to stay up late on Friday.', 'allow + ed: allowed means you have permission.'],
      ['aloud', 'Please read the poem aloud so we can hear it.', 'a + loud: aloud means out LOUD.'],
      ['principal', 'The principal is the leader of the school.', 'The principAL is your pAL.'],
      ['principle', 'Telling the truth is an important principle.', 'A principLE is a ruLE you live by.'],
      ['stationary', 'The car stayed stationary at the red light.', 'stationAry: it stAys in one plAce (not moving).'],
      ['stationery', 'Grandma writes letters on pretty stationery.', 'stationEry: paper and Envelopes for writing letters.'],
      ['capital', 'Atlanta is the capital of Georgia.', 'capitAL: the city where the government is (and also a big letter).'],
      ['capitol', 'Lawmakers meet in the capitol building in Atlanta.', 'capitOl: the building often has a rOund dOme.']
    ]
  });

  C.unit('spelling', 22, {
    name: 'Suffixes -able and -ible',
    rule: '-able and -ible both mean "able to be." -able is usually added to a complete word (break → breakable). -ible is usually added to a word part that cannot stand alone (vis + ible).',
    words: [
      ['comfortable', 'My new bed is soft and comfortable.', 'comfort + able: comfort is a whole word, so use -able.'],
      ['valuable', 'The old coin is very valuable.', 'value → drop the e → valu + able.'],
      ['breakable', 'Glass is breakable, so carry it carefully.', 'break + able: break is a whole word.'],
      ['washable', 'These markers are washable and come off with soap.', 'wash + able: wash is a whole word.'],
      ['available', 'Is the swing available, or is someone using it?', 'avail + able: available means ready to use.'],
      ['dependable', 'A dependable friend always keeps her promises.', 'depend + able = able to be depended on.'],
      ['visible', 'The stars are visible on a clear night.', 'vis + ible: vis is not a whole word, so use -ible. Vis means see.'],
      ['possible', 'Is it possible to finish before lunch?', 'poss + ible: double s, then -ible.'],
      ['terrible', 'The storm made a terrible mess.', 'terr + ible: double r, then -ible.'],
      ['horrible', 'The milk smelled horrible after a week.', 'horr + ible: double r, like terrible.'],
      ['flexible', 'A rubber band is flexible and can bend and stretch.', 'flex + ible: flexible means easy to bend.'],
      ['edible', 'Some flowers are edible, which means you can eat them.', 'ed + ible: edible means safe to eat.']
    ]
  });

  C.unit('spelling', 23, {
    name: 'Suffix -ous',
    rule: '-ous means "full of" or "having." It sounds like "us" at the end of the word. Sometimes the base word changes: drop a final e (fame → famous), or keep the e after g (courage → courageous).',
    words: [
      ['famous', 'The famous singer waved to the crowd.', 'fame → drop the e → fam + ous.'],
      ['nervous', 'I felt nervous before my piano recital.', 'nerve → drop the e → nerv + ous.'],
      ['dangerous', 'It is dangerous to play near a busy road.', 'danger + ous = full of danger.'],
      ['enormous', 'The elephant was enormous, much bigger than a car.', 'e + norm + ous: enormous means very, very big.'],
      ['generous', 'Our generous neighbor shared her tomatoes with us.', 'gen-er-ous: a generous person gives freely.'],
      ['curious', 'The curious cat sniffed the new box.', 'cur-i-ous: curious means wanting to know.'],
      ['delicious', 'The peach cobbler was delicious.', 'de-li-cious: the ci says "sh."'],
      ['jealous', 'He felt jealous of his friend\'s new bike.', 'jeal + ous: ea in the middle.'],
      ['humorous', 'The book was so humorous that I laughed out loud.', 'humor + ous = full of humor (funny).'],
      ['mysterious', 'We heard a mysterious sound in the attic.', 'mystery → change y to i → mysteri + ous.'],
      ['courageous', 'The courageous girl stood up for her friend.', 'courage + ous: keep the e so the g stays soft.'],
      ['poisonous', 'Some mushrooms are poisonous, so never eat wild ones.', 'poison + ous = full of poison.']
    ]
  });

  C.unit('spelling', 24, {
    name: 'Greek roots: tele, photo, graph, phon',
    rule: 'Many English words are built from Greek roots. tele means "far," photo means "light," graph means "write" or "draw," and phon means "sound." The ph in these roots says "f."',
    words: [
      ['telephone', 'Grandma called us on the telephone.', 'tele (far) + phone (sound): sound from far away.'],
      ['telescope', 'We used a telescope to look at the moon.', 'tele (far) + scope (look): it helps you see far.'],
      ['television', 'We watched the game on television.', 'tele (far) + vision (seeing): seeing from far away.'],
      ['telegraph', 'Long ago, people sent messages by telegraph over wires.', 'tele (far) + graph (write): writing sent far.'],
      ['photograph', 'Mom took a photograph of us at the beach.', 'photo (light) + graph (draw): a picture made with light.'],
      ['photographer', 'The photographer told us to smile.', 'photograph + er: a person who takes photographs.'],
      ['photocopy', 'Dad made a photocopy of the map.', 'photo + copy: a copy made with light.'],
      ['autograph', 'The author signed her autograph in my book.', 'auto (self) + graph (write): writing your own name.'],
      ['paragraph', 'Each paragraph should tell about one main idea.', 'para + graph (write): a group of written sentences.'],
      ['microphone', 'The speaker talked into a microphone so everyone could hear.', 'micro (small) + phone (sound): it makes small sounds loud.'],
      ['symphony', 'The orchestra played a long symphony.', 'sym (together) + phon (sound): sounds played together.'],
      ['saxophone', 'My uncle plays jazz on the saxophone.', 'saxo + phone (sound): ph says "f."']
    ]
  });

  C.unit('spelling', 25, {
    name: 'Latin roots: port, rupt, struct, dict',
    rule: 'Many English words are built from Latin roots. port means "carry," rupt means "break," struct means "build," and dict means "say."',
    words: [
      ['transport', 'Trucks transport food to the grocery store.', 'trans (across) + port (carry): carry across.'],
      ['export', 'Georgia farmers export peanuts to other countries.', 'ex (out) + port (carry): carry out of a country.'],
      ['portable', 'A portable speaker is easy to carry around.', 'port (carry) + able: able to be carried.'],
      ['erupt', 'Hot lava can erupt from a volcano.', 'e (out) + rupt (break): break out.'],
      ['interrupt', 'Please do not interrupt when someone is talking.', 'inter (between) + rupt (break): double r!'],
      ['disrupt', 'A loud noise can disrupt the class.', 'dis + rupt (break): to break up what is happening.'],
      ['construct', 'Workers will construct a new bridge.', 'con (together) + struct (build): build together.'],
      ['structure', 'The tallest structure in town is the water tower.', 'struct (build) + ure: something that is built.'],
      ['instruct', 'The coach will instruct us on how to kick the ball.', 'in + struct (build): to build knowledge in someone.'],
      ['predict', 'Can you predict what will happen next in the story?', 'pre (before) + dict (say): say before it happens.'],
      ['dictionary', 'Look up the word in the dictionary.', 'dict (say) + ion + ary: a book of words and what they mean.'],
      ['verdict', 'The judge read the jury\'s verdict.', 'ver (true) + dict (say): the decision a jury says.']
    ]
  });

  C.unit('spelling', 26, {
    name: 'Suffixes -ence and -ance',
    rule: '-ence and -ance sound almost the same, so you have to learn which one each word uses. A clue: if a related word ends in -ent, use -ence (patient → patience). If it ends in -ant, use -ance (important → importance).',
    words: [
      ['silence', 'The library was full of silence.', 'silent → silence: -ent goes with -ence.'],
      ['patience', 'Waiting for a turn takes patience.', 'patient → patience: -ent goes with -ence.'],
      ['absence', 'Her absence from practice was noticed.', 'absent → absence: -ent goes with -ence.'],
      ['evidence', 'The muddy paw prints were evidence that the dog came inside.', 'evident → evidence: -ent goes with -ence.'],
      ['audience', 'The audience clapped at the end of the play.', 'audi means hear: the audience hears the show.'],
      ['confidence', 'Practice gave her confidence before the spelling bee.', 'confident → confidence: -ent goes with -ence.'],
      ['distance', 'We could see the mountains in the distance.', 'distant → distance: -ant goes with -ance.'],
      ['entrance', 'Meet me at the front entrance of the zoo.', 'enter → entrance: the e in enter drops out.'],
      ['importance', 'Mom talked about the importance of sleep.', 'important → importance: -ant goes with -ance.'],
      ['appearance', 'The sudden appearance of a deer surprised us.', 'appear + ance: double p.'],
      ['performance', 'Her dance performance was wonderful.', 'perform + ance.'],
      ['ambulance', 'The ambulance raced to the hospital with its siren on.', 'am-bu-lance: an ambulance has -ance.']
    ]
  });

  C.unit('spelling', 27, {
    name: 'Doubling the final consonant',
    rule: 'When a word ends in one short vowel + one consonant, double the consonant before adding -ed, -ing, or -er (swim → swimming). In longer words, double only if the last syllable is stressed (be-GIN → beginning, but VIS-it → visited).',
    words: [
      ['swimming', 'We went swimming in the lake.', 'swim → double the m → swimming.'],
      ['shopping', 'Mom took me shopping for new shoes.', 'shop → double the p → shopping.'],
      ['clapped', 'Everyone clapped at the end of the song.', 'clap → double the p → clapped.'],
      ['dropped', 'I dropped my spoon on the floor.', 'drop → double the p → dropped.'],
      ['grabbed', 'He grabbed his umbrella and ran outside.', 'grab → double the b → grabbed.'],
      ['winner', 'The winner of the race got a blue ribbon.', 'win → double the n → winner.'],
      ['bigger', 'My brother is bigger than me.', 'big → double the g → bigger.'],
      ['drummer', 'The drummer kept the beat for the band.', 'drum → double the m → drummer.'],
      ['beginning', 'The beginning of the story was exciting.', 'be-GIN: stress at the end, so double the n.'],
      ['forgetting', 'I keep forgetting my library book.', 'for-GET: stress at the end, so double the t.'],
      ['admitted', 'She admitted that she ate the last cookie.', 'ad-MIT: stress at the end, so double the t.'],
      ['preferred', 'I preferred the blue dress over the red one.', 'pre-FER: stress at the end, so double the r.']
    ]
  });

  C.unit('spelling', 28, {
    name: 'Science words',
    rule: 'These are important words from fifth-grade science. Break each long word into syllables and spell it one part at a time.',
    words: [
      ['organism', 'A tree is a living organism.', 'or-gan-ism: an organism is any living thing.'],
      ['electricity', 'Electricity flows through wires to light the lamp.', 'e-lec-tric-i-ty: electric + ity.'],
      ['magnetic', 'A magnetic force pulls the paper clip toward the magnet.', 'magnet + ic.'],
      ['ecosystem', 'A pond is an ecosystem full of plants and animals.', 'eco + system: living and nonliving things working together.'],
      ['habitat', 'The forest is the deer\'s habitat, where it finds food and shelter.', 'hab-i-tat: three short parts.'],
      ['atmosphere', 'Earth\'s atmosphere is the layer of air around the planet.', 'atmo + sphere: ph says "f."'],
      ['molecule', 'A molecule of water is made of hydrogen and oxygen.', 'mol-e-cule: a very tiny bit of matter.'],
      ['circuit', 'The bulb lit up when we closed the circuit.', 'cir-cuit: a circuit is a path that goes all the way around, like a circle.'],
      ['conductor', 'Copper is a good conductor of electricity.', 'conduct + or: it lets electricity or heat move through it.'],
      ['mixture', 'Trail mix is a mixture of nuts, raisins, and seeds.', 'mix + ture: the parts of a mixture can be separated.'],
      ['experiment', 'We did an experiment to see which ball bounces highest.', 'ex-per-i-ment: four parts.'],
      ['hypothesis', 'My hypothesis is that plants grow faster in sunlight.', 'hy-poth-e-sis: a hypothesis is a smart guess you can test.']
    ]
  });

  C.unit('spelling', 29, {
    name: 'Social studies words',
    rule: 'These are important words from fifth-grade United States history and government. Say each syllable slowly as you spell it.',
    words: [
      ['amendment', 'The First Amendment protects freedom of speech.', 'amend + ment: an amendment is a change added to the Constitution.'],
      ['depression', 'During the Great Depression, many people lost their jobs.', 'depress + ion: a depression is a time when money and jobs are hard to find.'],
      ['immigrant', 'An immigrant is a person who moves to a new country to live.', 'im + migr + ant: double m.'],
      ['constitution', 'The Constitution is the plan for how the United States government works.', 'con-sti-tu-tion: ends in -tion.'],
      ['citizen', 'A good citizen follows the laws and helps the community.', 'cit-i-zen: a citizen is a member of a country.'],
      ['democracy', 'In a democracy, people vote to choose their leaders.', 'demo (people) + cracy (rule): rule by the people.'],
      ['territory', 'Alaska was a territory before it became a state.', 'terr (land) + itory: double r.'],
      ['treaty', 'The two nations signed a treaty to end the war.', 'trea + ty: a treaty is a written agreement between countries.'],
      ['industry', 'The car industry built many factories.', 'in-dus-try: y at the end says long e.'],
      ['economy', 'Jobs and businesses are part of a country\'s economy.', 'e-con-o-my: how people make, buy, and sell things.'],
      ['segregation', 'Segregation unfairly kept people apart because of the color of their skin.', 'segregate → drop the e → segregation.'],
      ['senator', 'A senator helps make laws for our country.', 'senate + or → drop the e → senator.']
    ]
  });

  C.unit('spelling', 30, {
    name: 'Prefixes pre-, mis-, non-',
    rule: 'pre- means "before," mis- means "wrongly" or "badly," and non- means "not." Add the prefix to the front without changing the base word, even if two letters end up side by side (mis + spell = misspell).',
    words: [
      ['preview', 'We watched a preview of the new movie.', 'pre (before) + view: see before.'],
      ['preheat', 'Preheat the oven before you bake the cookies.', 'pre (before) + heat: heat before.'],
      ['prehistoric', 'Dinosaurs lived in prehistoric times.', 'pre (before) + historic: before written history.'],
      ['precaution', 'Wearing a helmet is a smart precaution.', 'pre (before) + caution: being careful ahead of time.'],
      ['misspell', 'Try not to misspell your own name!', 'mis + spell: keep BOTH s\'s.'],
      ['misplace', 'I always misplace my hair clips.', 'mis + place: to put something in the wrong place.'],
      ['misbehave', 'The puppy will misbehave if it gets bored.', 'mis + behave: to behave badly.'],
      ['misunderstand', 'Please explain it again so I do not misunderstand.', 'mis + understand: to understand wrongly.'],
      ['nonfiction', 'A nonfiction book tells about real facts.', 'non (not) + fiction: not made up.'],
      ['nonstop', 'The flight to Denver was nonstop.', 'non (not) + stop: without stopping.'],
      ['nonsense', 'The silly poem was full of nonsense words.', 'non (not) + sense: something that makes no sense.'],
      ['nonliving', 'A rock is a nonliving thing.', 'non (not) + living.']
    ]
  });

  C.unit('spelling', 31, {
    name: 'Suffixes -ment and -ity',
    rule: '-ment turns a verb into a noun (move → movement). -ity turns an adjective into a noun (active → activity). Usually keep the base word, but watch for changes like dropping an e (argue → argument).',
    words: [
      ['movement', 'The dancer made a graceful movement with her arms.', 'move + ment: keep the e.'],
      ['agreement', 'We came to an agreement about whose turn it was.', 'agree + ment: keep both e\'s.'],
      ['excitement', 'The kids squealed with excitement on Christmas morning.', 'excite + ment: keep the e.'],
      ['equipment', 'Bring your soccer equipment to practice.', 'equip + ment: no double p.'],
      ['achievement', 'Learning to read music was a big achievement.', 'achieve + ment: i before e, keep the e at the end.'],
      ['government', 'The government makes laws for the country.', 'govern + ment: don\'t forget the n before ment!'],
      ['argument', 'My brothers had an argument over the remote.', 'argue → drop the e → argument.'],
      ['ability', 'She has the ability to whistle very loudly.', 'able → abil + ity.'],
      ['activity', 'Painting is my favorite rainy day activity.', 'active → drop the e → activity.'],
      ['community', 'Our community planted trees in the park.', 'commun + ity: double m.'],
      ['curiosity', 'Her curiosity made her ask lots of questions.', 'curious → drop the u → curiosity.'],
      ['security', 'A security guard watched the front door.', 'secure → drop the e → security.']
    ]
  });

  C.unit('spelling', 32, {
    name: 'The schwa sound',
    rule: 'In many words, the vowel in the unstressed syllable sounds like a lazy "uh." This is called the schwa sound. It can be spelled with any vowel, so think of a related word or say the word in a funny, careful way to remember it.',
    words: [
      ['pencil', 'Sharpen your pencil before the test.', 'Say it "pen-SILL" to remember the i.'],
      ['balance', 'Can you balance a book on your head?', 'Say it "bal-ANCE" to remember the a.'],
      ['lemon', 'I squeezed a lemon to make lemonade.', 'Say it "lem-ON" to remember the o.'],
      ['wagon', 'We pulled the wagon full of pumpkins.', 'Say it "wag-ON" to remember the o.'],
      ['animal', 'The giraffe is my favorite animal.', 'an-i-mAL: the schwa hides in the last part.'],
      ['signal', 'The crossing guard gave the signal to walk.', 'Say it "sig-NAL" to remember the a.'],
      ['medal', 'She won a gold medal at the swim meet.', 'Say it "med-AL" to remember the a.'],
      ['human', 'Every human needs food, water, and sleep.', 'Say it "hu-MAN" to remember the a.'],
      ['problem', 'This math problem has two steps.', 'Say it "prob-LEM" to remember the e.'],
      ['cousin', 'My cousin is coming to visit this summer.', 'Say it "cou-SIN" to remember the ou and i.'],
      ['salad', 'We ate a salad with lettuce and tomatoes.', 'Say it "sal-AD" to remember the a.'],
      ['calendar', 'Mark the party on the calendar.', 'cal-en-dAR: it ends in AR, not er.']
    ]
  });

  C.unit('spelling', 33, {
    name: 'Endings -cial and -tial',
    rule: '-cial and -tial both say "shul" at the end of a word. Use a related base word as a clue: office → official, commerce → commercial, part → partial, resident → residential.',
    words: [
      ['special', 'Today is a special day because Grandpa is visiting.', 'spe + cial: special has ci, not ti.'],
      ['social', 'Bees are social insects that live together in a hive.', 'so + cial: social means living or being with others.'],
      ['official', 'The referee is the official who makes the calls.', 'office → official: the c in office stays.'],
      ['commercial', 'We saw a funny commercial for cereal.', 'commerce → commercial: the c in commerce stays.'],
      ['artificial', 'The plant in the lobby is artificial, not real.', 'art + i + fi + cial: artificial means made by people.'],
      ['crucial', 'Water is crucial for plants to live.', 'cru + cial: crucial means very, very important.'],
      ['beneficial', 'Exercise is beneficial for your heart.', 'benefit → beneficial: it means helpful.'],
      ['partial', 'Our team got partial credit for the answer.', 'part → partial: the t in part stays.'],
      ['initial', 'My initial is the first letter of my name.', 'in-i-tial: initial means first.'],
      ['essential', 'A flashlight is essential for camping.', 'es-sen-tial: essential means needed.'],
      ['potential', 'The coach said she has the potential to be a great player.', 'po-ten-tial: potential is what you could become.'],
      ['residential', 'We live on a quiet residential street with lots of houses.', 'resident → residential: the t in resident stays.']
    ]
  });

  C.unit('spelling', 34, {
    name: 'qu and -que',
    rule: 'In English, q is almost always followed by u. qu usually says "kw" (quiet). At the end of some words, -que says "k" (unique, antique).',
    words: [
      ['quiet', 'Please be quiet while the baby sleeps.', 'qu + i + et: quiet has two syllables. Don\'t mix it up with quite.'],
      ['quarter', 'A quarter is worth twenty-five cents.', 'qu + arter: a quarter is one of four equal parts.'],
      ['quality', 'This jacket is made of good quality wool.', 'qu + ality: quality means how good something is.'],
      ['equal', 'Two plus two is equal to four.', 'e + qu + al: equal means the same amount.'],
      ['squirrel', 'A squirrel buried an acorn in the yard.', 'squ + irr + el: double r.'],
      ['request', 'I made a request for pancakes on Saturday.', 're + quest: a request is when you ask for something.'],
      ['earthquake', 'An earthquake made the ground shake.', 'earth + quake: a compound word with qu.'],
      ['frequent', 'We are frequent visitors at the library.', 'fre + quent: frequent means happening often.'],
      ['unique', 'Every snowflake is unique.', 'uni (one) + que: unique means one of a kind. -que says "k."'],
      ['technique', 'The coach showed me a new technique for throwing.', 'tech + nique: -que says "k."'],
      ['antique', 'Grandma has an antique clock that is over a hundred years old.', 'anti + que: -que says "k."'],
      ['plaque', 'Brush your teeth to keep plaque away.', 'pla + que: -que says "k."']
    ]
  });

  C.unit('spelling', 35, {
    name: 'Frequently misspelled words',
    rule: 'These words trip up many writers, even grown-ups. Look closely for the tricky part of each word and use the memory trick.',
    words: [
      ['separate', 'Keep the eggs separate from the milk.', 'There is A RAT in sep-A-RAT-e.'],
      ['necessary', 'It is necessary to wear a coat in the snow.', 'One Collar and two Sleeves: one c, two s\'s.'],
      ['definitely', 'I will definitely come to your party.', 'It has the word FINITE inside: de-FINITE-ly.'],
      ['probably', 'It will probably rain this afternoon.', 'prob-AB-ly: three parts, don\'t skip the middle.'],
      ['receive', 'Did you receive my letter?', 'i before e, except after c: rec-EI-ve.'],
      ['library', 'We borrowed three books from the library.', 'Don\'t forget the first r: LIB-RAR-y.'],
      ['February', 'February is the shortest month of the year.', 'Feb-RU-ary: there is a sneaky r after the b.'],
      ['Wednesday', 'We have music lessons on Wednesday.', 'Say it funny: WED-NES-day.'],
      ['restaurant', 'We ate dinner at a Mexican restaurant.', 'REST + AU + RANT: rest, au, rant.'],
      ['tomorrow', 'We will go to the zoo tomorrow.', 'One m, two r\'s: to-MOR-ROW.'],
      ['occasion', 'A wedding is a special occasion.', 'Two c\'s and one s: o-CC-a-S-ion.'],
      ['address', 'Write your address on the envelope.', 'Double d AND double s: a-DD-re-SS.']
    ]
  });

  C.unit('spelling', 36, {
    name: 'Challenge words',
    rule: 'These are tough fifth-grade words with tricky letters. Break each word into parts, find the hard spot, and practice it until it feels easy.',
    words: [
      ['rhythm', 'Clap your hands to the rhythm of the song.', 'Rhythm Helps Your Two Hips Move: r-h-y-t-h-m. No vowels except y!'],
      ['environment', 'We protect the environment by picking up trash.', 'environ + ment: don\'t forget the n before ment.'],
      ['temperature', 'The temperature outside is 75 degrees.', 'tem-PER-a-ture: four parts. Don\'t skip the "a."'],
      ['vocabulary', 'Reading helps you build a bigger vocabulary.', 'vo-cab-u-lar-y: your vocabulary is all the words you know.'],
      ['opportunity', 'Camp is a great opportunity to make new friends.', 'op-por-tu-ni-ty: double p.'],
      ['embarrass', 'Please don\'t embarrass me in front of my friends!', 'Two r\'s and two s\'s: you turn Really Red and feel So Silly.'],
      ['guarantee', 'I can\'t guarantee that it won\'t rain.', 'gu + ar + an + tee: the u is silent, and it ends in ee.'],
      ['schedule', 'Check the schedule to see when the game starts.', 's-CH-ed-ule: the ch says "k."'],
      ['exaggerate', 'Don\'t exaggerate; the fish was not as big as a car!', 'ex-a-GG-er-ate: double g.'],
      ['independent', 'An independent person can do many things alone.', 'in-de-pend-ENT: all e\'s, no a.'],
      ['mischievous', 'The mischievous kitten knocked my cup off the table.', 'mis-chie-vous: only three parts. There is no "i" before -ous.'],
      ['souvenir', 'I bought a seashell souvenir to remember the beach.', 'sou-ve-nir: a souvenir is something you keep to remember a trip.']
    ]
  });

  // =========================== REVIEW ===========================
  C.unit('spelling', 37, {
    name: 'Review: tricky words from the year',
    rule: 'These are some of the trickiest words from this year. Remember each pattern and memory trick you learned.',
    words: [
      ['neighbor', 'My neighbor has a big friendly dog.', 'eigh says long a, like eight (week 5).'],
      ['believe', 'I believe tomorrow will be a great day.', 'Never beLIEve a LIE (week 6).'],
      ['surprise', 'The party was a big surprise.', 'Two r\'s: suR-pRise (week 7).'],
      ['enough', 'I have had enough soup, thank you.', 'ough says "uff" here (week 20).'],
      ['daughter', 'The queen\'s daughter rode a white horse.', 'augh says "aw" (week 20).'],
      ['whether', 'Tell me whether you want apples or grapes.', 'wHether asks wHich one (week 21).'],
      ['delicious', 'The strawberries were sweet and delicious.', 'de-li-cious: ci says "sh" (week 23).'],
      ['necessary', 'Sleep is necessary for a healthy body.', 'One Collar, two Sleeves (week 35).'],
      ['separate', 'Please separate the red blocks from the blue ones.', 'There is A RAT in separate (week 35).'],
      ['definitely', 'I definitely want to go swimming again.', 'FINITE is hiding inside (week 35).'],
      ['Wednesday', 'The library is closed on Wednesday.', 'WED-NES-day (week 35).'],
      ['rhythm', 'The drummer played a fast rhythm.', 'Rhythm Helps Your Two Hips Move (week 36).']
    ]
  });

})(typeof window !== 'undefined' ? window : globalThis);
