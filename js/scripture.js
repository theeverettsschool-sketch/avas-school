/* World English Bible (WEB) — public domain. Verse text keyed by "Book chapter:verse".
   Retrieved from bible-api.com (translation=web). The NIV is copyrighted and is NOT included;
   the app offers "Open in NIV" links and a parent paste box for NIV memory verses instead. */
(function (root) {
  'use strict';
  var V = {
    'Genesis 1:1': `In the beginning, God created the heavens and the earth.`,
    'Genesis 1:2': `The earth was formless and empty. Darkness was on the surface of the deep and God's Spirit was hovering over the surface of the waters.`,
    'Genesis 1:3': `God said, "Let there be light," and there was light.`,
    'Genesis 1:4': `God saw the light, and saw that it was good. God divided the light from the darkness.`,
    'Genesis 1:5': `God called the light "day", and the darkness he called "night". There was evening and there was morning, the first day.`,
    'Genesis 1:6': `God said, "Let there be an expanse in the middle of the waters, and let it divide the waters from the waters."`,
    'Genesis 1:7': `God made the expanse, and divided the waters which were under the expanse from the waters which were above the expanse; and it was so.`,
    'Genesis 1:8': `God called the expanse "sky". There was evening and there was morning, a second day.`,
    'Genesis 1:9': `God said, "Let the waters under the sky be gathered together to one place, and let the dry land appear"; and it was so.`,
    'Genesis 1:10': `God called the dry land "earth", and the gathering together of the waters he called "seas". God saw that it was good.`,
    'Genesis 1:11': `God said, "Let the earth yield grass, herbs yielding seeds, and fruit trees bearing fruit after their kind, with their seeds in it, on the earth"; and it was so.`,
    'Genesis 1:12': `The earth yielded grass, herbs yielding seed after their kind, and trees bearing fruit, with their seeds in it, after their kind; and God saw that it was good.`,
    'Genesis 1:13': `There was evening and there was morning, a third day.`,
    'Genesis 1:14': `God said, "Let there be lights in the expanse of the sky to divide the day from the night; and let them be for signs to mark seasons, days, and years;`,
    'Genesis 1:15': `and let them be for lights in the expanse of the sky to give light on the earth"; and it was so.`,
    'Genesis 1:16': `God made the two great lights: the greater light to rule the day, and the lesser light to rule the night. He also made the stars.`,
    'Genesis 1:17': `God set them in the expanse of the sky to give light to the earth,`,
    'Genesis 1:18': `and to rule over the day and over the night, and to divide the light from the darkness. God saw that it was good.`,
    'Genesis 1:19': `There was evening and there was morning, a fourth day.`,
    'Genesis 1:20': `God said, "Let the waters abound with living creatures, and let birds fly above the earth in the open expanse of the sky."`,
    'Genesis 1:21': `God created the large sea creatures and every living creature that moves, with which the waters swarmed, after their kind, and every winged bird after its kind. God saw that it was good.`,
    'Genesis 1:22': `God blessed them, saying, "Be fruitful, and multiply, and fill the waters in the seas, and let birds multiply on the earth."`,
    'Genesis 1:23': `There was evening and there was morning, a fifth day.`,
    'Genesis 1:24': `God said, "Let the earth produce living creatures after their kind, livestock, creeping things, and animals of the earth after their kind"; and it was so.`,
    'Genesis 1:25': `God made the animals of the earth after their kind, and the livestock after their kind, and everything that creeps on the ground after its kind. God saw that it was good.`,
    'Genesis 1:26': `God said, "Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the birds of the sky, and over the livestock, and over all the earth, and over every creeping thing that creeps on the earth."`,
    'Genesis 1:27': `God created man in his own image. In God's image he created him; male and female he created them.`,
    'Genesis 1:28': `God blessed them. God said to them, "Be fruitful, multiply, fill the earth, and subdue it."`,
    'Genesis 1:29': `God said, "Behold, I have given you every herb yielding seed, which is on the surface of all the earth, and every tree, which bears fruit yielding seed. It will be your food.`,
    'Genesis 1:30': `To every animal of the earth, and to every bird of the sky, and to everything that creeps on the earth, in which there is life, I have given every green herb for food."`,
    'Genesis 1:31': `God saw everything that he had made, and, behold, it was very good. There was evening and there was morning, a sixth day.`,
    'Genesis 2:1': `The heavens, the earth, and all their vast array were finished.`,
    'Genesis 2:2': `On the seventh day God finished his work which he had done; and he rested on the seventh day from all his work which he had done.`,
    'Genesis 2:3': `God blessed the seventh day, and made it holy, because he rested in it from all his work of creation which he had done.`,

    'Genesis 3:1': `Now the serpent was more subtle than any animal of the field which Yahweh God had made. He said to the woman, "Has God really said, 'You shall not eat of any tree of the garden'?"`,
    'Genesis 3:2': `The woman said to the serpent, "We may eat fruit from the trees of the garden,`,
    'Genesis 3:3': `but not the fruit of the tree which is in the middle of the garden. God has said, 'You shall not eat of it. You shall not touch it, lest you die.'"`,
    'Genesis 3:4': `The serpent said to the woman, "You won't really die,`,
    'Genesis 3:5': `for God knows that in the day you eat it, your eyes will be opened, and you will be like God, knowing good and evil."`,
    'Genesis 3:6': `When the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took some of its fruit, and ate; and she gave some to her husband with her, and he ate it, too.`,
    'Genesis 3:7': `Their eyes were opened, and they both knew that they were naked. They sewed fig leaves together, and made coverings for themselves.`,
    'Genesis 3:8': `They heard Yahweh God's voice walking in the garden in the cool of the day, and the man and his wife hid themselves from the presence of Yahweh God among the trees of the garden.`,
    'Genesis 3:9': `Yahweh God called to the man, and said to him, "Where are you?"`,
    'Genesis 3:10': `The man said, "I heard your voice in the garden, and I was afraid, because I was naked; and I hid myself."`,
    'Genesis 3:11': `God said, "Who told you that you were naked? Have you eaten from the tree that I commanded you not to eat from?"`,
    'Genesis 3:12': `The man said, "The woman whom you gave to be with me, she gave me fruit from the tree, and I ate it."`,
    'Genesis 3:13': `Yahweh God said to the woman, "What have you done?" The woman said, "The serpent deceived me, and I ate."`,

    'Genesis 4:1': `The man knew Eve his wife. She conceived, and gave birth to Cain, and said, "I have gotten a man with Yahweh's help."`,
    'Genesis 4:2': `Again she gave birth, to Cain's brother Abel. Abel was a keeper of sheep, but Cain was a tiller of the ground.`,
    'Genesis 4:3': `As time passed, Cain brought an offering to Yahweh from the fruit of the ground.`,
    'Genesis 4:4': `Abel also brought some of the firstborn of his flock and of its fat. Yahweh respected Abel and his offering,`,
    'Genesis 4:5': `but he didn't respect Cain and his offering. Cain was very angry, and the expression on his face fell.`,
    'Genesis 4:6': `Yahweh said to Cain, "Why are you angry? Why has the expression of your face fallen?`,
    'Genesis 4:7': `If you do well, won't it be lifted up? If you don't do well, sin crouches at the door. Its desire is for you, but you are to rule over it."`,
    'Genesis 4:8': `Cain said to Abel, his brother, "Let's go into the field." While they were in the field, Cain rose up against Abel, his brother, and killed him.`,
    'Genesis 4:9': `Yahweh said to Cain, "Where is Abel, your brother?" He said, "I don't know. Am I my brother's keeper?"`,
    'Genesis 4:10': `Yahweh said, "What have you done? The voice of your brother's blood cries to me from the ground.`,

    'Genesis 6:5': `Yahweh saw that the wickedness of man was great in the earth, and that every imagination of the thoughts of man's heart was continually only evil.`,
    'Genesis 6:6': `Yahweh was sorry that he had made man on the earth, and it grieved him in his heart.`,
    'Genesis 6:7': `Yahweh said, "I will destroy man whom I have created from the surface of the ground—man, along with animals, creeping things, and birds of the sky—for I am sorry that I have made them."`,
    'Genesis 6:8': `But Noah found favor in Yahweh's eyes.`,
    'Genesis 6:9': `This is the history of the generations of Noah: Noah was a righteous man, blameless among the people of his time. Noah walked with God.`,
    'Genesis 6:13': `God said to Noah, "I will bring an end to all flesh, for the earth is filled with violence through them.`,
    'Genesis 6:14': `Make a ship of gopher wood. You shall make rooms in the ship, and shall seal it inside and outside with pitch.`,
    'Genesis 6:15': `The length of the ship shall be three hundred cubits, its width fifty cubits, and its height thirty cubits.`,
    'Genesis 6:16': `You shall make a roof in the ship, and you shall finish it to a cubit upward. You shall set the door of the ship in its side.`,
    'Genesis 6:17': `I, even I, do bring the flood of waters on this earth, to destroy all flesh having the breath of life from under the sky.`,
    'Genesis 6:18': `But I will establish my covenant with you. You shall come into the ship, you, your sons, your wife, and your sons' wives with you.`,
    'Genesis 6:19': `Of every living thing of all flesh, you shall bring two of every sort into the ship, to keep them alive with you.`,
    'Genesis 6:20': `Of the birds after their kind, of the livestock after their kind, of every creeping thing of the ground after its kind, two of every sort will come to you.`,
    'Genesis 6:21': `Take with you some of all food that is eaten, and gather it to yourself; and it will be for food for you, and for them."`,
    'Genesis 6:22': `Thus Noah did. He did all that God commanded him.`,

    'Genesis 9:8': `God spoke to Noah and to his sons with him, saying,`,
    'Genesis 9:9': `"As for me, behold, I establish my covenant with you, and with your offspring after you,`,
    'Genesis 9:10': `and with every living creature that is with you: the birds, the livestock, and every animal of the earth with you, of all that go out of the ship, even every animal of the earth.`,
    'Genesis 9:11': `I will establish my covenant with you: All flesh will not be cut off any more by the waters of the flood. There will never again be a flood to destroy the earth."`,
    'Genesis 9:12': `God said, "This is the token of the covenant which I make between me and you and every living creature that is with you, for perpetual generations:`,
    'Genesis 9:13': `I set my rainbow in the cloud, and it will be a sign of a covenant between me and the earth.`,
    'Genesis 9:14': `When I bring a cloud over the earth, that the rainbow will be seen in the cloud,`,
    'Genesis 9:15': `I will remember my covenant, which is between me and you and every living creature of all flesh, and the waters will no more become a flood to destroy all flesh.`,
    'Genesis 9:16': `The rainbow will be in the cloud. I will look at it, that I may remember the everlasting covenant between God and every living creature of all flesh that is on the earth."`,
    'Genesis 9:17': `God said to Noah, "This is the token of the covenant which I have established between me and all flesh that is on the earth."`,

    'Genesis 11:1': `The whole earth was of one language and of one speech.`,
    'Genesis 11:2': `As they traveled from the east, they found a plain in the land of Shinar, and they lived there.`,
    'Genesis 11:3': `They said to one another, "Come, let's make bricks, and burn them thoroughly." They had brick for stone, and they used tar for mortar.`,
    'Genesis 11:4': `They said, "Come, let's build ourselves a city, and a tower whose top reaches to the sky, and let's make a name for ourselves, lest we be scattered abroad on the surface of the whole earth."`,
    'Genesis 11:5': `Yahweh came down to see the city and the tower, which the children of men built.`,
    'Genesis 11:6': `Yahweh said, "Behold, they are one people, and they have all one language, and this is what they begin to do. Now nothing will be withheld from them, which they intend to do.`,
    'Genesis 11:7': `Come, let's go down, and there confuse their language, that they may not understand one another's speech."`,
    'Genesis 11:8': `So Yahweh scattered them abroad from there on the surface of all the earth. They stopped building the city.`,
    'Genesis 11:9': `Therefore its name was called Babel, because there Yahweh confused the language of all the earth. From there, Yahweh scattered them abroad on the surface of all the earth.`,

    'Romans 3:23': `for all have sinned, and fall short of the glory of God;`,
    'Proverbs 16:18': `Pride goes before destruction, and a haughty spirit before a fall.`
  };

  // passage('Genesis', 1, 1, 5) -> [{v:1,t:'...'}, ...]; single verse: passage('Romans 3:23')
  function passage(book, ch, from, to) {
    var out = [];
    if (ch === undefined) { var t = V[book]; return t ? [{ v: +book.split(':')[1], t: t }] : []; }
    for (var v = from; v <= (to || from); v++) { var k = book + ' ' + ch + ':' + v; if (V[k]) out.push({ v: v, t: V[k], ref: k }); }
    return out;
  }
  function text(ref) { return V[ref] || ''; }
  function missing(book, ch, from, to) { var m = []; for (var v = from; v <= (to || from); v++) if (!V[book + ' ' + ch + ':' + v]) m.push(book + ' ' + ch + ':' + v); return m; }
  // NIV link (opens BibleGateway; the NIV text itself is not stored in this app)
  function nivLink(ref) { return 'https://www.biblegateway.com/passage/?search=' + encodeURIComponent(ref) + '&version=NIV'; }

  var api = { V: V, passage: passage, text: text, missing: missing, nivLink: nivLink };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Scripture = api;
})(typeof window !== 'undefined' ? window : globalThis);
