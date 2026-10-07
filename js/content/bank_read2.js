/* Reading units, weeks 22-37: one original passage per week, grade 5 level */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var Q = C.Q, T = C.T;

  // ---------------------------------------------------------------- week 22
  C.unit('reading', 22, {
    title: "The Day Buttercup Escaped",
    genre: "realistic fiction (two first-person accounts)",
    skill: "comparing points of view",
    learn: [
      { h: "Who is telling the story?", p: "A first-person narrator uses words like I, me, and my. We only see what that person sees, hear what that person hears, and learn what that person thinks and feels. A narrator can be wrong, can miss things, or can feel differently about an event than someone else does." },
      { h: "Same event, two views", p: "When two people tell about the same event, compare them carefully. Ask: What facts do both narrators agree on? What does each one notice that the other misses? How does each one FEEL, and why? Their age, their job, and what they care about all shape the way they tell it." }
    ],
    passage: [
      "PART ONE: Lily’s Account",
      "I want to say first that I latched the gate. I am almost sure I latched the gate. Mrs. Harmon put me in charge of the petting pen at the Grace Chapel Fall Festival because I am ten and responsible, and I took the job seriously. I had a clipboard. I had a bag of feed pellets. I had a sign that said GENTLE HANDS ONLY in purple marker.",
      "The pen held three bunnies, two ducks, and one goat named Buttercup. Buttercup is white with a brown patch over one eye, like a pirate. She also has the personality of a pirate.",
      "At exactly 2:15, a little boy in a dinosaur shirt squeezed through the gate while his mother was buying lemonade. I turned to help him, and when I turned back, Buttercup was gone. My stomach dropped all the way to my sneakers. I could see the gate swinging. I could see her little hoofprints in the dust. I could hear people shouting near the cake walk.",
      "I ran so fast my clipboard flew out of my hand. By the time I reached the cake walk, Buttercup was standing on the table with her face in a coconut cake. Everyone was laughing, but I wanted to disappear into the ground. I kept saying “I’m sorry, I’m sorry,” until my voice cracked. I was sure Mrs. Harmon would never trust me with anything again.",
      "PART TWO: Mr. Okafor’s Account",
      "I have run the cake walk at Grace Chapel for eleven years, and I have seen my share of excitement. A wasp in the lemonade. A sudden thunderstorm. But I had never seen a goat enter the contest.",
      "The music was playing, and the walkers were circling the numbered squares when I heard a clatter of hooves. A small white goat trotted straight past the walkers, hopped onto the prize table as neat as you please, and chose the coconut cake. I will say this for her: she had excellent taste. That was Mrs. Delgado’s cake, and it wins every year.",
      "The whole crowd burst out laughing. Even Mrs. Delgado laughed so hard she had to sit down. Then a girl came running, all elbows and braids, her face as red as a tomato. She grabbed that goat around the neck, gentle but firm, and kept apologizing to everyone in sight.",
      "Here is what I noticed that she did not. The latch on that old pen gate is bent. I have meant to fix it for two years. A good push from a hungry goat would open it, latched or not.",
      "I also noticed that the girl never once let go of the goat, never blamed the little boy, and walked Buttercup all the way back while the crowd cheered for her. That is the kind of helper a church festival needs. I told Mrs. Harmon so myself. Then I went home, found my toolbox, and fixed the latch."
    ],
    vocab: [
      ["responsible", "able to be trusted to do a job well and take care of things"],
      ["personality", "the way someone usually acts and behaves"],
      ["excitement", "a time when something surprising or thrilling happens"],
      ["apologizing", "saying you are sorry for something"],
      ["latch", "a small metal bar or hook that holds a gate or door shut"]
    ],
    demo: {
      q: "How do Lily and Mr. Okafor feel differently about the goat eating the cake?",
      steps: [
        "Step 1: Find Lily’s feelings. She says she “wanted to disappear into the ground” and was sure she would never be trusted again. She feels embarrassed and guilty.",
        "Step 2: Find Mr. Okafor’s feelings. He jokes that the goat “had excellent taste” and calls it excitement. He feels amused.",
        "Step 3: Ask why. Lily was in charge of the pen, so she feels it was her fault. Mr. Okafor was not responsible for the goat, and he has seen many surprises in eleven years."
      ],
      a: "Lily feels embarrassed and guilty because she was in charge, while Mr. Okafor finds the event funny because it was not his job and he has seen many surprises."
    },
    items: [
      Q("Which fact do BOTH narrators agree on?", ["The goat ate the coconut cake on the prize table.", "Lily left the gate open on purpose.", "Mrs. Harmon was angry with Lily.", "The little boy let the goat out."], 0, "Lily says Buttercup had her “face in a coconut cake,” and Mr. Okafor says the goat “chose the coconut cake.” Both accounts include this fact. Neither narrator says Mrs. Harmon was angry.", "Look for a detail that shows up in both parts."),
      Q("What does Mr. Okafor know that Lily does NOT know?", ["The goat’s name is Buttercup.", "The festival is at Grace Chapel.", "The gate latch is bent and could open even when latched.", "A boy in a dinosaur shirt came into the pen."], 2, "Mr. Okafor says, “Here is what I noticed that she did not. The latch on that old pen gate is bent.” Lily only says she is “almost sure” she latched it. This shows how one narrator can know something the other does not.", "Find the sentence where he says he noticed something she did not."),
      Q("Why does Lily describe the event as a disaster while Mr. Okafor describes it as funny?", ["Mr. Okafor did not like Mrs. Delgado’s cake.", "Lily was in charge of the goat, so she felt it was her fault.", "Lily does not like goats.", "Mr. Okafor did not see the goat at all."], 1, "Point of view is shaped by a person’s role. Lily had the job of watching the pen, so she felt responsible. Mr. Okafor just watched it happen, so he could enjoy the surprise.", "Think about each person’s job at the festival."),
      Q("Which detail shows something Mr. Okafor noticed about Lily that she did not say about herself?", ["She had a clipboard.", "She ran so fast she dropped her clipboard.", "Her stomach dropped to her sneakers.", "She never blamed the little boy and the crowd cheered for her."], 3, "Lily only tells about her worry and her apologies. Mr. Okafor points out that she never blamed the boy and that the crowd cheered. The other choices come from Lily’s own account.", "Which choice comes from Part Two?"),
      Q("In Lily’s account, the word “responsible” most nearly means", ["very fast at running", "worried and nervous", "able to be trusted with a job", "good at making signs"], 2, "Lily says Mrs. Harmon chose her “because I am ten and responsible.” Being responsible means people can trust you to do a job well.", "Why would someone be put in charge?"),
      Q("Mr. Okafor says the goat hopped onto the table “as neat as you please.” What does this phrase suggest?", ["The goat did it easily and calmly, as if it were normal.", "The goat was very messy.", "The goat was clean and white.", "The goat asked politely."], 0, "“As neat as you please” is an old saying meaning something was done smoothly and calmly, as if nothing were unusual. It adds humor because a goat on a cake table is very unusual.", "Picture how the goat moved."),
      Q("What does the word “latch” mean in the last part of the passage?", ["a type of cake", "a fence made of wood", "a lock that needs a key", "a bar or hook that keeps a gate shut"], 3, "A latch is the small metal piece that holds a gate closed. Mr. Okafor says the bent latch could pop open with a push. It does not need a key, so “a lock that needs a key” is not quite right.", "What part of a gate can be bent?"),
      Q("How would the story be different if it were told ONLY by Lily?", ["Readers would not know there was a goat.", "Readers would never learn about the bent latch and might think it was Lily’s fault.", "Readers would think the festival was at a school.", "Readers would know exactly who baked every cake."], 1, "Only Mr. Okafor tells about the bent latch. Without his account, readers would see only Lily’s guilty view. Comparing points of view gives a fuller picture of what really happened.", "What information comes only from Part Two?"),
      Q("What does Mr. Okafor do at the end that shows he feels partly responsible?", ["He goes home and fixes the latch.", "He eats the rest of the cake.", "He asks Lily to run the cake walk.", "He buys a new goat."], 0, "He admits he had “meant to fix it for two years,” and then he goes home and fixes it. That action shows he knows the bent latch was part of the problem.", "Read the very last sentence."),
      Q("Which word BEST describes how Mr. Okafor sees Lily by the end?", ["careless", "silly", "dependable", "rude"], 2, "He calls her “the kind of helper a church festival needs” and tells Mrs. Harmon so. That means he sees her as dependable, the opposite of what Lily feared.", "What does he tell Mrs. Harmon?")
    ],
    evidence: [
      "How does Lily feel right after Buttercup escapes? Explain, and copy a sentence from her account that shows her feeling.",
      "What important fact does Mr. Okafor add that changes how we understand the escape? Explain, and copy the sentence that shows it.",
      "Do you think Lily will be trusted with a job again next year? Explain your answer using a sentence from Mr. Okafor’s account."
    ],
    summary: "Write a 3–4 sentence summary that tells what happened at the festival and how Lily’s view and Mr. Okafor’s view of the event are different."
  });

  // ---------------------------------------------------------------- week 23
  C.unit('reading', 23, {
    title: "Wings of Wax",
    genre: "myth retelling",
    skill: "myths and allusions",
    learn: [
      { h: "What is a myth?", p: "A myth is a very old story that people told to explain the world or to teach a lesson. The ancient Greeks told myths about gods, heroes, and ordinary people who made big choices. Myths usually show what happens when people are wise, foolish, proud, or brave." },
      { h: "What is an allusion?", p: "An allusion is a quick mention of a famous story, person, or event that the writer expects you to know. If someone says a person “flew too close to the sun,” they are alluding to Icarus. Knowing the myth helps you understand the meaning: the person took too big a risk and got hurt by it." }
    ],
    passage: [
      "Long ago, on the island of Crete, there lived an inventor named Daedalus. He was the cleverest builder in all of Greece. For King Minos, he designed the Labyrinth, a maze so twisting that anyone who entered it could never find the way out.",
      "But kings do not like their secrets to travel. When Daedalus finished the Labyrinth, Minos would not let him leave the island. He and his young son, Icarus, were trapped in a high stone tower beside the sea. Ships came and went in the harbor, but every one was watched by the king’s guards.",
      "Day after day, Daedalus watched the gulls ride the wind above the waves. “Minos rules the land and the sea,” he said at last, “but he does not rule the sky.”",
      "So he began to gather feathers. Some fell on the windowsill. Some Icarus collected from the rocks below. Daedalus laid them in rows, from small to large, and tied them with thread. He fastened the smaller feathers with melted beeswax. Slowly, two great pairs of wings took shape, curved just like the wings of a bird.",
      "Icarus was supposed to help, but he could not stop playing. He blew loose feathers into the air and pressed his thumb into the soft wax just to see the print it made. His father only smiled and kept working.",
      "On the morning they escaped, Daedalus strapped the wings onto his son’s arms. His face was serious. “Listen to me, Icarus. Fly the middle path. If you fly too low, the spray from the sea will soak your feathers and drag you down. If you fly too high, the sun will melt the wax. Stay close to me.”",
      "Then they leaped. The wind caught them, and they rose. Fishermen below dropped their nets and stared, thinking they had seen two gods.",
      "At first Icarus stayed close behind his father. But the feeling of flying was more wonderful than anything he had ever known. He swooped. He climbed. The air grew warm, and the sky grew brighter, and he forgot every word his father had said. Higher and higher he soared, until the sun blazed down on his shoulders.",
      "The wax softened. One feather drifted away, then another, then dozens. Icarus flapped his arms, but there was nothing left to hold the air. He fell into the sea far below.",
      "Daedalus circled and called his son’s name, but he found only feathers floating on the waves. Grieving, he flew on alone. The Greeks said that the sea where Icarus fell was named the Icarian Sea in his memory.",
      "THE MYTH TODAY",
      "People still talk about Icarus thousands of years later. When someone becomes too proud or takes a reckless risk, we say that person “flew too close to the sun.” A business that grows too fast and then fails might be called an Icarus story. Artists have painted the falling boy, and poets have written about him. Each time, the allusion carries the same warning that Daedalus gave his son: big dreams are good, but wisdom keeps them in the air."
    ],
    vocab: [
      ["inventor", "a person who creates new machines or ideas"],
      ["fastened", "attached firmly so it would stay in place"],
      ["blazed", "shone with very strong, hot light"],
      ["grieving", "feeling deep sadness because someone has died or been lost"],
      ["reckless", "careless about danger; not thinking about what could go wrong"]
    ],
    demo: {
      q: "A news reporter writes, “The young racer flew too close to the sun and crashed on the final lap.” What does the allusion mean?",
      steps: [
        "Step 1: Recognize the allusion. “Flew too close to the sun” refers to Icarus.",
        "Step 2: Remember what happened to Icarus. He ignored a warning, went too far, and fell.",
        "Step 3: Apply it to the new sentence. The racer probably took too big a risk, such as driving too fast, and it caused the crash."
      ],
      a: "The allusion means the racer took a risk that was too big, like Icarus, and it led to failure."
    },
    items: [
      Q("Why did Daedalus decide to escape by flying?", ["He wanted to visit the gods.", "King Minos controlled the land and sea, but not the sky.", "Icarus asked him to build wings for fun.", "His boat had sunk in the harbor."], 1, "Daedalus says, “Minos rules the land and the sea, but he does not rule the sky.” Every ship was watched, so the air was the only way out.", "Reread what Daedalus says while watching the gulls."),
      Q("What TWO dangers did Daedalus warn Icarus about?", ["birds and storms", "guards and arrows", "getting lost and getting hungry", "sea spray if he flew too low and the sun’s heat if he flew too high"], 3, "Daedalus told him to fly the middle path. Too low, sea spray would soak the feathers. Too high, the sun would melt the wax.", "Find the paragraph that starts on the morning they escaped."),
      Q("What lesson does this myth teach?", ["Never build anything new.", "Kings are always kind.", "Listening to wise warnings matters, especially when you are excited.", "Feathers are stronger than wax."], 2, "Icarus fell because he got so excited that he forgot his father’s warning. Myths often teach about choices, and this one warns against pride and carelessness.", "Why did Icarus fall?"),
      Q("If a friend says your plan is “an Icarus plan,” what does she probably mean?", ["Your plan is too risky and might fail.", "Your plan is about birds.", "Your plan is very safe.", "Your plan is very old."], 0, "Calling something an Icarus plan is an allusion to the boy who went too far. It means the plan aims too high without caution and could end badly.", "What happened to Icarus when he went too far?"),
      Q("Which sentence contains an allusion to the Icarus myth?", ["The sun rose over the ocean.", "Grandpa builds birdhouses in his garage.", "The gulls flew over the harbor.", "Coach warned us not to fly too close to the sun by skipping practice before the big game."], 3, "Only the coach’s warning mentions the famous phrase from the myth to make a point about risk. The others just describe real birds or the sun.", "Look for the famous phrase used to teach a lesson."),
      Q("In the passage, the word “reckless” means", ["careful and slow", "careless about danger", "very old", "full of feathers"], 1, "A reckless risk is one taken without thinking about danger, just as Icarus soared higher without thinking about the wax. “Careful and slow” is the opposite.", "Think about how Icarus behaved."),
      Q("What does “grieving” tell you about how Daedalus felt at the end?", ["He was deeply sad.", "He was angry at the king.", "He was proud of his wings.", "He was confused about where to go."], 0, "Grieving means feeling deep sadness over a loss. Daedalus had just lost his son.", "What had Daedalus just lost?"),
      Q("How do the details about Icarus playing with feathers and wax help the story?", ["They show he was a careful worker.", "They explain how wax is made.", "They hint early that he does not take things seriously.", "They show that Daedalus was angry."], 2, "Icarus blowing feathers and pressing the wax shows a playful boy who does not take the work seriously. This foreshadows, or hints at, his careless choice later.", "Does the playing match how he acts while flying?"),
      Q("Why did the fishermen think they had seen two gods?", ["The men were wearing crowns.", "Ordinary people could not fly, so flying men seemed godlike.", "The men were glowing.", "The king told them so."], 1, "In the myth, only gods could do something as amazing as fly. The fishermen had never seen people in the air, so they assumed the flyers were gods.", "What could only gods do?"),
      Q("According to the passage, what is the name of the sea where Icarus fell?", ["the Daedalus Sea", "the Labyrinth Sea", "the Sea of Crete", "the Icarian Sea"], 3, "The passage says the Greeks named it the Icarian Sea in his memory. This is another example of how the myth left its mark on names.", "Look in the paragraph about Daedalus searching.")
    ],
    evidence: [
      "Why did Icarus forget his father’s warning? Explain, and copy a sentence that shows what he was feeling.",
      "How was Daedalus wise in this myth? Give two examples and copy one sentence that proves it.",
      "Explain what it means today when someone “flew too close to the sun.” Copy a sentence from THE MYTH TODAY that supports your answer."
    ],
    summary: "Write a 3–4 sentence summary of the myth of Icarus, including why Daedalus built the wings, what warning he gave, and what happened."
  });

  // ---------------------------------------------------------------- week 24
  C.unit('reading', 24, {
    title: "Life in the Layers of the Rainforest",
    genre: "informational",
    skill: "multiple main ideas",
    learn: [
      { h: "More than one big idea", p: "Longer informational texts often have two or three main ideas, not just one. Each main idea is a big point the author wants you to understand. Headings, topic sentences, and repeated words are clues to where each main idea lives." },
      { h: "Matching details to ideas", p: "Every main idea is held up by key details, like a table held up by legs. When you find a fact, ask: Which big idea does this support? If a detail fits none of them, it is probably just an interesting extra." }
    ],
    passage: [
      "A Forest Built in Floors",
      "Step into a tropical rainforest and the first thing you notice is the heat. The second is the noise: frogs peeping, insects buzzing, birds calling from somewhere far above. Tropical rainforests grow near the equator, where it is warm all year and rain falls almost every day. Many get more than 80 inches of rain a year. The largest is the Amazon rainforest in South America.",
      "Scientists describe a rainforest as having layers, almost like the floors of a tall building. At the very top is the emergent layer, where a few giant trees poke out above the rest. Eagles nest here, and the wind is strong. Below that is the canopy, a thick roof of leaves and branches. Most rainforest animals live in the canopy, including monkeys, toucans, and tree frogs. Many of them spend their whole lives there and never touch the ground.",
      "Under the canopy is the understory, a shady place of shrubs and young trees waiting for their chance to grow. Jaguars rest on branches here. At the bottom is the forest floor. So little sunlight reaches it that it is dim even at noon. Fallen leaves rot quickly in the warm, wet air, and ants, beetles, and fungi break them down into food for new plants.",
      "Animals Built for the Trees",
      "Rainforest animals have amazing adaptations, which are body parts or behaviors that help them survive. Many monkeys in South America have strong tails that can grip a branch like an extra hand. Tree frogs have sticky toe pads for climbing slick leaves. The sloth moves so slowly that tiny green algae grow in its fur, which helps it blend in with the leaves. Toucans use their huge, light bills to reach fruit at the ends of thin branches.",
      "Why Rainforests Matter to Everyone",
      "Rainforests cover only a small part of Earth’s land, yet scientists believe more than half of the world’s kinds of land plants and animals live in them. New species are still being discovered every year.",
      "Rainforests also help people who live far away. Their trees take in carbon dioxide and give off oxygen. Many foods we enjoy first came from tropical forests, including bananas, cacao for chocolate, and vanilla. Some important medicines come from rainforest plants, too. A small pink flower called the rosy periwinkle, from the island of Madagascar, helped scientists make medicines that treat childhood cancers.",
      "Sadly, large areas of rainforest are cut down each year for farms, ranches, and lumber. Many people around the world are working to protect these forests. Some countries have set aside huge national parks. Some companies grow coffee and chocolate in ways that leave the big trees standing. When we care for these forests, we are caring for a treasure God placed on the earth for every living thing to share."
    ],
    vocab: [
      ["equator", "the imaginary line around the middle of Earth, where it is hot all year"],
      ["emergent", "rising up or sticking out above everything around it"],
      ["canopy", "the thick, roof-like layer of leaves and branches high in a forest"],
      ["adaptations", "body parts or behaviors that help a living thing survive where it lives"],
      ["species", "a group of living things of the same kind that can have young together"]
    ],
    demo: {
      q: "What are the main ideas of this passage?",
      steps: [
        "Step 1: Look at the headings. They are “A Forest Built in Floors,” “Animals Built for the Trees,” and “Why Rainforests Matter to Everyone.”",
        "Step 2: Turn each heading into a sentence. Rainforests have layers. Rainforest animals have adaptations. Rainforests are important to the whole world.",
        "Step 3: Check that details support each one. The canopy and forest floor support idea 1. Sticky toe pads support idea 2. Medicines and foods support idea 3."
      ],
      a: "The three main ideas are that rainforests are built in layers, that their animals have special adaptations, and that rainforests matter to people everywhere."
    },
    items: [
      Q("Which detail supports the main idea that rainforests matter to everyone?", ["Jaguars rest on branches in the understory.", "Tree frogs have sticky toe pads.", "A rainforest flower helped scientists make medicines for childhood cancers.", "The emergent layer is very windy."], 2, "Medicine from the rosy periwinkle helps people all over the world, so it supports the idea that rainforests matter to everyone. The other details describe layers or adaptations.", "Which fact is about helping people?"),
      Q("Which main idea does the detail about the sloth’s green fur support?", ["Rainforest animals have adaptations.", "Rainforests are built in layers.", "Rainforests are being cut down.", "Rainforests are near the equator."], 0, "Algae in the sloth’s fur helps it hide in the leaves. That is an adaptation, so it supports the second main idea.", "What does the green fur help the sloth do?"),
      Q("Which sentence BEST states one main idea of the first section?", ["Eagles nest here, and the wind is strong.", "Jaguars rest on branches here.", "The second is the noise.", "Scientists describe a rainforest as having layers, almost like the floors of a tall building."], 3, "This sentence sums up the whole section, and every other detail in it describes one of the layers. The other choices are small details about one layer.", "Which sentence covers the whole section, not just one part?"),
      Q("How many main ideas does this passage have?", ["one", "three", "two", "six"], 1, "The passage has three sections with headings, and each one has its own main idea: layers, adaptations, and why rainforests matter.", "Count the headings."),
      Q("In which layer do MOST rainforest animals live?", ["the canopy", "the forest floor", "the understory", "the emergent layer"], 0, "The passage says, “Most rainforest animals live in the canopy.” The canopy has lots of leaves, fruit, and hiding places.", "Look for the word “most.”"),
      Q("Why is the forest floor dim even at noon?", ["It is always night there.", "Animals block the light.", "The layers above block most of the sunlight.", "Clouds sit on the ground."], 2, "The thick canopy and understory above catch most of the sunlight before it reaches the ground, so the floor stays shady.", "Think about what sits above the forest floor."),
      Q("The word “adaptations” in the passage means", ["plants that grow very tall", "body parts or behaviors that help a living thing survive", "places where animals sleep", "changes in the weather"], 1, "The passage defines it right in the sentence: “adaptations, which are body parts or behaviors that help them survive.” Authors often define hard words right after using them.", "Read the words right after “adaptations.”"),
      Q("The emergent layer is the layer where giant trees", ["grow underground", "are cut down for lumber", "have no leaves", "rise up above the rest of the forest"], 3, "Emergent means rising out or sticking up above the rest. The passage says giant trees “poke out above the rest” in this layer.", "What do the giant trees do in this layer?"),
      Q("What is the author’s purpose in the last paragraph?", ["to explain how to grow coffee", "to describe what jaguars eat", "to show that rainforests face danger and people can help protect them", "to tell a funny story"], 2, "The last paragraph explains that forests are being cut down and then tells how people are protecting them. The author wants readers to care about rainforests.", "What problem and what response does the paragraph give?"),
      Q("Which food listed in the passage first came from tropical forests?", ["cacao for chocolate", "wheat", "apples", "potatoes"], 0, "The passage lists bananas, cacao for chocolate, and vanilla. Wheat, apples, and potatoes are not mentioned.", "Find the list of foods.")
    ],
    evidence: [
      "Choose one rainforest animal from the passage and explain how its adaptation helps it survive. Copy the sentence that describes it.",
      "Explain how the forest floor is different from the canopy. Copy one sentence about each layer.",
      "Why should people who live far from a rainforest care about it? Give two reasons and copy one sentence that supports them."
    ],
    summary: "Write a 3–4 sentence summary that states all three main ideas of the passage and one key detail for each."
  });

  // ---------------------------------------------------------------- week 25
  C.unit('reading', 25, {
    title: "Voices of the Ordinary Day",
    genre: "poem set (3 original poems)",
    skill: "figurative language in poetry",
    learn: [
      { h: "Personification", p: "Personification gives human actions or feelings to something that is not human. “The wind whispered secrets” is personification, because wind cannot really whisper or keep secrets. Poets use it to make objects and nature feel alive and to show a mood." },
      { h: "Imagery", p: "Imagery is language that helps you see, hear, smell, taste, or feel something in your mind. “Cold, slick river stones under my bare feet” lets you feel the stones. When you read a poem, ask: Which senses does this line wake up?" }
    ],
    passage: [
      "Poem 1: The Old Porch Swing",
      "The porch swing creaks a lazy song\nand rocks the summer evening long.\nIt holds the neighbors, two by two,\nand hears the gossip, old and new.\n\nIt listens while the crickets play\ntheir fiddles at the end of day,\nand when the sun slips out of sight,\nit sighs and settles in for night.\n\nIt cradled Grandpa as a boy,\nit bounced my mother, full of joy,\nand now it hums beneath my weight,\na wooden friend that likes to wait.\n\nWhen autumn drags its chilly feet\nand leaves go skittering down the street,\nthe swing hangs still and dreams of June,\nwhen fireflies will dance again soon.\n\nThrough winter’s frost and gray March rain,\nit counts the days and waits again,\nand on the first warm April eve,\nit creaks, “Come sit. Don’t leave. Don’t leave.”",
      "Poem 2: Morning Kitchen",
      "Before the sun climbs out of bed,\nthe kitchen wakes up first.\nThe kettle clears its throat and sings,\nas if about to burst.\n\nThe bacon crackles, snaps, and spits,\nthe toaster pops its cheeks,\nthe butter melts in golden pools\nand slides down warm brown peaks.\n\nThe smell of cinnamon and bread\ngoes tiptoeing upstairs\nto tug my blanket, tap my nose,\nand pull me from my chairs\nof dreams, and down the creaky hall,\nmy slippers slapping tile,\nwhere Mama, with her coffee cup,\nis waiting with a smile.\n\nThe window yawns and stretches wide\nto let the sunlight in,\nthe sparrows gossip on the sill,\nthe screen door grins its grin.\nThe table wears a checkered cloth,\nthe plates sit side by side,\nand all the kitchen seems to say,\n“We’re glad you came inside.”",
      "Poem 3: The Storm Comes to Supper",
      "The storm came stomping over the hill\nin boots of black and gray.\nIt rattled the windows, banged on the door,\nand shouted, “I’m here to stay!”\n\nThe pine trees bowed and waved their arms,\nthe garden shook with fright,\nthe rain drummed hard on the metal roof\nwith all its splashing might.\n\nThe lightning snapped its silver whip,\nthe lights blinked once, then died,\nthe dog crept underneath the bed\nand would not come outside.\n\nWe lit a candle, pulled our chairs\nclose to the warm, bright flame,\nand Daddy prayed a thank-you prayer\nas loud as thunder came.\n\nMy little brother held my hand,\nhis fingers cold as ice,\nbut Mama hummed a sleepy hymn\nand whispered, “Storms are nice\nfor cocoa, quilts, and story time,\nand counting thunder’s booms.”\nWe counted, “One, two, three,” and laughed\nas thunder shook the rooms.\n\nBy morning, the storm had tiptoed off\nwith muddy, guilty feet.\nThe sky was washed a shining blue,\nthe air smelled clean and sweet.\nThe puddles held a hundred suns,\nthe grass was sparkling new,\nand every leaf was dripping\nwith a jewel of morning dew."
    ],
    vocab: [
      ["gossip", "talk about other people’s news and doings"],
      ["cradled", "held gently and protectively, like a baby"],
      ["skittering", "moving quickly and lightly with little scraping sounds"],
      ["crackles", "makes small, sharp popping sounds"],
      ["guilty", "feeling or looking as if you did something wrong"]
    ],
    demo: {
      q: "Find one example of personification in “Morning Kitchen” and explain what it shows.",
      steps: [
        "Step 1: Look for a thing that is doing something only a person can do. “The kettle clears its throat and sings.”",
        "Step 2: Ask if that is literally possible. A kettle has no throat and cannot sing, so this is personification.",
        "Step 3: Explain the effect. The whistle of the kettle sounds like someone getting ready to sing, which makes the kitchen feel lively and cheerful."
      ],
      a: "“The kettle clears its throat and sings” is personification; it makes the whistling kettle seem like a cheerful person, giving the kitchen a lively morning mood."
    },
    items: [
      Q("Which line from “The Old Porch Swing” uses personification?", ["and rocks the summer evening long", "It cradled Grandpa as a boy", "and leaves go skittering down the street", "the swing hangs still and dreams of June"], 3, "A swing cannot really dream. Giving it a human action makes it seem to long for summer. Rocking and cradling are things a swing can actually do in its own way.", "Which action can only a person really do?"),
      Q("Which senses does this imagery mostly appeal to: “The bacon crackles, snaps, and spits”?", ["sight and touch", "hearing", "taste", "smell"], 1, "Crackles, snaps, and spits are all sound words. The poet wants you to hear the bacon cooking.", "What do those three words have in common?"),
      Q("In “The Storm Comes to Supper,” the storm is described as wearing “boots of black and gray.” What does this help the reader picture?", ["dark clouds marching in heavily", "a storm that is quiet and gentle", "a man selling boots", "a rainbow after rain"], 0, "Boots that stomp suggest something heavy and loud, and black and gray are the colors of storm clouds. The image shows dark clouds arriving with force.", "Think about the colors and the word “stomping.”"),
      Q("How does the storm’s mood CHANGE from the beginning to the end of Poem 3?", ["from shy to angry", "from happy to sad", "from loud and bossy to quiet and sorry", "it does not change"], 2, "At first the storm stomps, bangs, and shouts. By morning it has “tiptoed off with muddy, guilty feet,” which sounds quiet and sorry. The personification shows the change.", "Compare the verbs at the beginning and end."),
      Q("“The smell of cinnamon and bread goes tiptoeing upstairs.” Why does the poet say the smell is tiptoeing?", ["The smell is very loud.", "The smell moves quietly and gently through the house.", "Someone is carrying bread upstairs.", "The stairs are broken."], 1, "Tiptoeing means moving quietly. The poet personifies the smell to show how it drifts softly up the stairs to wake the speaker.", "How does a person move when they tiptoe?"),
      Q("In “The Old Porch Swing,” the word “cradled” means", ["pushed hard", "broke apart", "painted", "held gently"], 3, "To cradle is to hold something gently, the way you hold a baby. The swing held Grandpa when he was a boy.", "Think of how you would hold a baby."),
      Q("What does “skittering” suggest about the autumn leaves?", ["They are lying perfectly still.", "They are growing on the trees.", "They move quickly and lightly with small scraping sounds.", "They are wet and heavy."], 2, "Skittering means quick, light, scraping movement, like dry leaves blowing across pavement. Wet, heavy leaves would not skitter.", "Picture dry leaves on a windy day."),
      Q("Which line is the BEST example of imagery about sight?", ["The puddles held a hundred suns", "and shouted, “I’m here to stay!”", "the rain drummed hard on the metal roof", "the kettle clears its throat"], 0, "Puddles holding “a hundred suns” helps you see sunlight reflecting in many puddles. The other lines are mostly about sound.", "Which line paints a picture with light?"),
      Q("What do all three poems have in common?", ["They are all about winter.", "They are all about animals.", "They all take place at school.", "They all give human qualities to ordinary things."], 3, "The swing dreams, the kettle sings, and the storm shouts. Each poem uses personification to make everyday things feel alive.", "Think about the skill this week."),
      Q("In Poem 3, what does the family do during the storm?", ["They run outside to play.", "They light a candle, sit close together, and Daddy prays a thank-you prayer.", "They go to sleep right away.", "They call the neighbors."], 1, "The third stanza says they lit a candle, pulled their chairs close, and Daddy prayed. This shows the family feeling safe and thankful during the storm.", "Read the third stanza of Poem 3.")
    ],
    evidence: [
      "Which poem uses imagery that appeals to the sense of smell? Explain how it helps you imagine the scene, and copy the lines.",
      "How does the poet make the porch swing seem like part of the family? Copy two lines that show it.",
      "Explain how the mood changes in “The Storm Comes to Supper.” Copy one line from the beginning and one from the end."
    ],
    summary: "Write a 3–4 sentence summary that tells what each of the three poems is about and the main kind of figurative language they share."
  });

  // ---------------------------------------------------------------- week 26
  C.unit('reading', 26, {
    title: "The Flour-Sack Dress",
    genre: "historical fiction",
    skill: "historical fiction: setting and real history",
    learn: [
      { h: "Real time, made-up people", p: "Historical fiction is a made-up story set in a real time in the past. The characters may be invented, but the setting, the problems, and the way people lived should match real history. Reading it helps you feel what life was like for ordinary families." },
      { h: "How setting shapes the story", p: "In historical fiction, the time and place cause many of the characters’ problems and choices. Ask: What was happening in history then? How does it affect what the characters want, fear, and do? Look for details about money, jobs, clothing, food, and news." }
    ],
    passage: [
      "Georgia, 1934",
      "The year Papa lost his job at the cotton mill, we moved back to Grandma Pearl’s farm outside Macon. The hard times grown-ups called the Depression had gripped the whole country for years, and everybody we knew was poor. Banks had closed. Factories had shut their doors. Men walked the roads with their whole lives tied up in a bundle, looking for any kind of work.",
      "On the farm, at least, we never went hungry. We had chickens, a milk cow named Dolly, and a garden full of collards, sweet potatoes, and pole beans. But we never had money. Not for shoes, not for the doctor, and certainly not for new clothes.",
      "That was a problem, because I was eleven and growing like a cornstalk. My Sunday dress hit above my knees, and the sleeves stopped halfway down my arms. The church Christmas program was in three weeks, and I was supposed to read the part about the shepherds in front of everybody.",
      "“I can’t go up there looking like this,” I told Grandma Pearl. “Everybody will laugh.”",
      "Grandma didn’t answer. She just looked thoughtfully at the pantry, where three empty flour sacks hung on a nail.",
      "In those days, flour came in big cotton sacks, and some companies printed them with pretty patterns because they knew women would sew them into clothes. Ours had tiny blue flowers on a cream background. Grandma had been saving them for dish towels.",
      "“We need one more sack of the same pattern,” she said. “Then we’ll have enough.”",
      "But the next sack Papa brought home from the store was printed with red checks. So was the one after that. With two weeks left, I gave up hope.",
      "Then on Sunday, Mrs. Tolliver, who lived down the road, came up to us after church. She was a widow with five children of her own, and her coat had patches on both elbows. In her hands was a folded sack covered with tiny blue flowers.",
      "“Pearl told me you were looking,” she said. “I traded Mr. Gaines at the feed store for it. Two dozen eggs.”",
      "I knew what two dozen eggs meant to a family like hers. I tried to say no, but she pressed the sack into my hands. “Somebody did the same for me once,” she said. “You just pass it on someday.”",
      "Grandma sewed every night by the light of the kerosene lamp. Her needle flashed in and out while the wind whistled through the cracks in the walls. She added a white collar made from an old pillowcase and buttons cut from Papa’s worn-out shirt.",
      "On the night of the Christmas program, I stood in front of the whole church in my blue-flowered dress. My voice shook at first, but then I found my place and read the part about the shepherds in the fields and the angels who brought them joyful news. When I looked up, Mrs. Tolliver was smiling at me from the third row.",
      "We were still poor. Papa still didn’t have a job. But walking home under the cold, bright stars, I didn’t feel poor at all. I felt rich in the way that matters most, and I started thinking about who I could pass it on to."
    ],
    vocab: [
      ["Depression", "a time in the 1930s when many people lost their jobs and money"],
      ["pantry", "a small room or closet where food and supplies are kept"],
      ["widow", "a woman whose husband has died"],
      ["kerosene", "a kind of oil burned in lamps for light"],
      ["thoughtfully", "in a way that shows careful thinking"]
    ],
    demo: {
      q: "How does the setting of the Great Depression cause the narrator’s problem?",
      steps: [
        "Step 1: Find the setting details. It is 1934, Papa lost his mill job, banks closed, and “we never had money.”",
        "Step 2: Find the narrator’s problem. She has outgrown her Sunday dress and needs one for the Christmas program.",
        "Step 3: Connect them. Because of the Depression, the family cannot buy new clothes, so she must find another way, like a flour-sack dress."
      ],
      a: "Because the Depression left the family with no money, they could not buy a new dress, so they had to make one out of flour sacks."
    },
    items: [
      Q("Which detail from the story matches real history of the Great Depression?", ["Many banks and factories closed, and people lost their jobs.", "Families bought new clothes every month.", "Everyone had a car and a telephone.", "Stores gave away free shoes."], 0, "During the Great Depression, many banks failed and factories closed, leaving millions of people without work. The story shows this through Papa losing his mill job.", "Which choice describes hard times?"),
      Q("Why did some flour companies print pretty patterns on their sacks?", ["to make the flour taste better", "so the sacks would be easier to carry", "because they knew women would sew the sacks into clothes", "because the law required it"], 2, "The story explains that companies printed patterns “because they knew women would sew them into clothes.” This really happened, and it shows how families reused everything.", "Reread the paragraph about the flour sacks."),
      Q("Why did the family move to Grandma Pearl’s farm?", ["They wanted a bigger house.", "Papa lost his job at the cotton mill.", "Grandma Pearl was sick.", "The town flooded."], 1, "The first sentence says they moved the year Papa lost his job. On the farm, they could grow their own food even without money.", "Look at the first sentence of the story."),
      Q("Why was trading two dozen eggs a big sacrifice for Mrs. Tolliver?", ["She did not like eggs.", "Eggs were easy to find.", "She had too many chickens.", "She was a poor widow with five children, and the eggs were food and money for her family."], 3, "Mrs. Tolliver had five children and patches on her coat. In hard times, eggs were food and could be traded like money, so giving them up cost her family something real.", "What clues show Mrs. Tolliver was poor too?"),
      Q("What does Mrs. Tolliver mean when she says, “You just pass it on someday”?", ["Give the dress back to her.", "Sell the dress to someone else.", "Someday be kind to someone else in need, the way she was kind to you.", "Pass the sack to Mr. Gaines."], 2, "Mrs. Tolliver says somebody once helped her, and she wants the narrator to help someone else in turn. The last sentence shows the narrator plans to do it.", "Look at the last line of the story too."),
      Q("In the story, the word “widow” means", ["a woman whose husband has died", "a woman who owns a store", "a woman who sews", "a woman who teaches school"], 0, "A widow is a woman whose husband has died. This detail helps explain why Mrs. Tolliver’s family had so little.", "Why might Mrs. Tolliver be raising five children alone?"),
      Q("Grandma sewed “by the light of the kerosene lamp.” What does this detail tell you about the setting?", ["Grandma liked candles.", "It was daytime.", "The family was rich.", "The farm probably did not have electric lights."], 3, "Many rural farms in the 1930s did not have electricity yet, so families used kerosene lamps. This detail helps the reader picture life in that time and place.", "Why would someone need a lamp that burns oil?"),
      Q("Grandma “looked thoughtfully at the pantry.” What does “thoughtfully” suggest?", ["She was angry.", "She was thinking carefully about an idea.", "She was hungry.", "She was falling asleep."], 1, "Thoughtfully means with careful thinking. Grandma was already planning to use the flour sacks, even before she said anything.", "What idea did Grandma come up with?"),
      Q("How does the narrator change by the end of the story?", ["She feels rich in kindness and wants to help others.", "She feels poor and ashamed.", "She stops going to church.", "She decides to move to the city."], 0, "At first she worries everyone will laugh at her. At the end, she says she “didn’t feel poor at all” and thinks about who she can pass the kindness on to.", "Compare her feelings at the beginning and the end."),
      Q("Which BEST states a theme of the story?", ["Money is the most important thing.", "Farms are better than cities.", "Kindness and sharing can make people rich even in hard times.", "It is easy to sew a dress."], 2, "Even though the family is still poor at the end, the gift from Mrs. Tolliver and Grandma’s work make the narrator feel rich. The story’s message is about generosity in hard times.", "What lesson does the narrator learn?")
    ],
    evidence: [
      "How did the Great Depression affect the narrator’s family? Give two examples and copy a sentence that shows one.",
      "Why do you think Mrs. Tolliver gave away something she needed? Copy a sentence that supports your answer.",
      "What does the narrator mean when she says she felt “rich in the way that matters most”? Copy a sentence that helps explain it."
    ],
    summary: "Write a 3–4 sentence summary of the story that includes the setting, the narrator’s problem, how it was solved, and how she felt at the end."
  });

  // ---------------------------------------------------------------- week 27
  C.unit('reading', 27, {
    title: "Our Town Needs a Safe Path to the Park",
    genre: "persuasive essay",
    skill: "analyzing an argument (claim, reasons, evidence)",
    learn: [
      { h: "The parts of an argument", p: "A persuasive writer tries to convince you to agree. The CLAIM is the main opinion, such as “Our town should build a bike path.” REASONS explain why the writer believes it. EVIDENCE is the facts, examples, numbers, or expert words that prove each reason." },
      { h: "Judging an argument", p: "A strong argument has clear reasons, and each reason has evidence that really supports it. Watch for reasons that are only feelings, evidence that does not match the reason, or a writer who ignores the other side. A good writer also answers a counterclaim, which is what someone who disagrees might say." }
    ],
    passage: [
      "by Nora Whitfield, age 11",
      "Every afternoon at four o’clock, I watch kids on my street stare out their windows at Cedar Creek Park. The park is less than a mile away. It has a playground, a pond full of turtles, and the best climbing tree in the county. But almost nobody walks or rides a bike there, because the only way to get there is along the edge of Route 9. Our town council should build a safe walking and biking path from Oak Street to Cedar Creek Park.",
      "The first reason is safety. Route 9 has no sidewalk, only a narrow strip of gravel next to cars going 45 miles per hour. Last spring, my neighbor Mr. Ruiz was riding his bike to work when a truck passed so close it knocked off his mirror. He was not hurt, but he has not ridden that road since. Police Chief Daniels told our homeschool group that he would never let his own children walk along Route 9. If even the police chief thinks a road is too dangerous, it is time to change it.",
      "The second reason is health. Doctors say children should get about an hour of physical activity every day. A path would let kids walk, skate, or bike to the park instead of sitting inside. It would help grown-ups, too. My grandmother would love to walk somewhere other than around her kitchen table.",
      "The third reason is that people in our town want it. My brother and I made a survey and knocked on doors on four streets. We asked forty-two families if they would use a path to the park. Thirty-six said yes. Several parents said they would let their kids go to the park alone for the first time if there were a safe path.",
      "Some people will say that a path costs too much money. That is a fair worry. But our town does not have to pay for all of it. Many states offer grants, which are money given for projects that help the public, to build safe routes for walking and biking. A local business might also donate benches or trees. Families like mine could volunteer to plant flowers and pick up trash along the path. When a whole town works together, a big project becomes possible.",
      "Others might say kids should just ask for a ride. But not every family has a car free in the afternoon, and not every parent is home from work. A path would give every child the same chance to enjoy the park, not just the ones with a ride.",
      "Cedar Creek Park is one of the best things about our town, but right now it is like a gift with a lock on it. A safe path would be the key. I respectfully ask the town council to vote yes on the Oak Street path at next month’s meeting. Then, next spring, I hope to see you on the trail, maybe even at the top of that climbing tree."
    ],
    vocab: [
      ["council", "a group of people chosen to make decisions for a town"],
      ["physical", "having to do with the body"],
      ["survey", "a set of questions asked to many people to learn what they think"],
      ["grants", "money given for projects that help the public"],
      ["respectfully", "in a polite way that shows honor to others"]
    ],
    demo: {
      q: "Identify Nora’s claim, one reason, and the evidence for that reason.",
      steps: [
        "Step 1: Find the claim, usually at the end of the first paragraph. “Our town council should build a safe walking and biking path from Oak Street to Cedar Creek Park.”",
        "Step 2: Find a reason. The second paragraph begins, “The first reason is safety.”",
        "Step 3: Find the evidence for that reason. Route 9 has no sidewalk and cars go 45 miles per hour, a truck knocked off Mr. Ruiz’s mirror, and the police chief would not let his children walk there."
      ],
      a: "The claim is that the town should build a path; one reason is safety, supported by the facts about Route 9, Mr. Ruiz’s close call, and the police chief’s statement."
    },
    items: [
      Q("What is Nora’s claim?", ["Cedar Creek Park has a pond full of turtles.", "The town council should build a safe path from Oak Street to the park.", "Kids should ask their parents for rides.", "Route 9 should be closed."], 1, "The claim is the main opinion the whole essay argues for. Nora states it at the end of the first paragraph. The turtles are just a detail about the park.", "What does she want the council to do?"),
      Q("Which piece of evidence supports the reason that the path would be safer?", ["Thirty-six families said they would use the path.", "Her grandmother walks around her kitchen table.", "A business might donate benches.", "A truck passed so close to Mr. Ruiz that it knocked off his mirror."], 3, "The story of Mr. Ruiz shows how dangerous Route 9 is, so it supports the safety reason. The survey supports the reason that people want the path.", "Which detail shows danger?"),
      Q("What evidence does Nora give that people in town want the path?", ["The police chief’s opinion", "Doctors’ advice about exercise", "Her survey, where 36 of 42 families said yes", "The speed limit on Route 9"], 2, "Nora and her brother asked forty-two families, and thirty-six said they would use a path. A survey is evidence of what people think.", "Look at the third reason."),
      Q("What counterclaim does Nora answer in the essay?", ["A path costs too much money.", "The park is too small.", "Turtles are dangerous.", "Kids do not like parks."], 0, "Nora writes, “Some people will say that a path costs too much money,” and then explains grants, donations, and volunteers. Answering the other side makes her argument stronger.", "Find the paragraph that starts with “Some people will say.”"),
      Q("Which reason is supported with the WEAKEST evidence?", ["Safety, supported by Mr. Ruiz’s story and the police chief", "People want it, supported by a survey of 42 families", "They are all equally strong.", "Health, supported partly by a joke about her grandmother"], 3, "The health reason uses general advice and a funny comment about her grandmother, which is not strong proof. The safety and survey reasons have specific facts and examples.", "Which reason has the least specific proof?"),
      Q("In the essay, a “survey” is", ["a map of the town", "a set of questions asked to many people", "a type of bicycle", "a speech to the council"], 1, "Nora explains that she and her brother knocked on doors and asked families a question. That is a survey.", "What did Nora and her brother do on four streets?"),
      Q("What are “grants,” according to the essay?", ["money given for projects that help the public", "loans that must be paid back with extra money", "taxes paid by families", "prizes for winning races"], 0, "Nora defines the word right in the sentence: grants are “money given for projects that help the public.” Grants do not have to be paid back like loans.", "Read the words right after “grants.”"),
      Q("Why does Nora compare the park to “a gift with a lock on it”?", ["The park has a locked gate.", "The park is wrapped in paper.", "The park is wonderful, but kids cannot safely get to it.", "The park costs money to enter."], 2, "This comparison shows that the park is a good thing kids cannot enjoy because there is no safe way to get there. The path would be “the key.”", "What does the path become in the next sentence?"),
      Q("Why does Nora mention that not every family has a car free in the afternoon?", ["to show that cars are bad", "to answer people who say kids should just ask for a ride", "to explain how to drive", "to complain about her parents"], 1, "This is her answer to a second counterclaim: that kids should get rides. She shows that rides are not fair to families without cars.", "What do “others” say in that paragraph?"),
      Q("What does Nora ask the town council to do at the end?", ["build a new playground", "lower the speed limit", "plant trees in the park", "vote yes on the Oak Street path at next month’s meeting"], 3, "A strong persuasive essay often ends with a call to action. Nora clearly asks the council to vote yes at next month’s meeting.", "Read the last paragraph.")
    ],
    evidence: [
      "Which of Nora’s three reasons do you think is the strongest? Explain why, and copy a sentence of evidence that supports it.",
      "How does Nora answer the worry that the path costs too much? Copy a sentence from her answer.",
      "Do you think Nora’s essay would convince the town council? Explain your opinion and copy one sentence that makes the essay convincing or not."
    ],
    summary: "Write a 3–4 sentence summary of Nora’s essay that states her claim, her three reasons, and how she answers people who disagree."
  });

  // ---------------------------------------------------------------- week 28
  C.unit('reading', 28, {
    title: "The Great Cake Rescue",
    genre: "drama (a short play script)",
    skill: "elements of drama",
    learn: [
      { h: "How a play is written", p: "A play, or drama, is a story written to be acted out. It has a CAST OF CHARACTERS list, a SETTING, and lines of DIALOGUE, where each character’s name comes before the words they say. There are no quotation marks. A play may be divided into scenes." },
      { h: "Stage directions", p: "Stage directions are words in brackets or italics that tell actors what to do, how to speak, or what the stage looks like. They are not spoken aloud. Readers use stage directions and dialogue together to understand what characters feel, since a play has no narrator to explain." }
    ],
    passage: [
      "CAST OF CHARACTERS: JUNE, age 11, a careful planner. TEDDY, age 8, her brother, full of ideas. GRANDPA WALT, their grandfather, who is hard of hearing. MOM, their mother.",
      "SETTING: A small, sunny kitchen on a Saturday morning. Flour is everywhere. A recipe card lies on the counter.",
      "[JUNE stands at the counter reading the card. TEDDY is cracking an egg, very slowly.]",
      "JUNE: Okay. Mom will be home from the store at noon. Her birthday party starts at two. That gives us exactly two hours to bake Grandma Rose’s famous lemon cake.",
      "TEDDY: [proudly holding up the egg] I cracked it with no shells!",
      "JUNE: [looking into the bowl] Teddy, half the shell is in there.",
      "TEDDY: That’s the crunchy part.",
      "JUNE: [sighing, fishing out shells with a spoon] Cakes do not have a crunchy part. [She picks up the recipe card and frowns.] Oh no. Oh no, no, no.",
      "TEDDY: What?",
      "JUNE: The bottom of the card is smeared. I can’t read how much sugar it needs. It could be one cup or four cups!",
      "TEDDY: Four! Definitely four. More sugar means more happy.",
      "JUNE: More sugar means a cake that tastes like a candy bar fell into a swimming pool. We need to ask somebody.",
      "[GRANDPA WALT enters, reading a newspaper.]",
      "JUNE: Grandpa! How much sugar did Grandma Rose put in her lemon cake?",
      "GRANDPA WALT: [cupping his ear] Sugar cane? Grows down in Louisiana and Florida.",
      "JUNE: [louder] No, SUGAR. In the CAKE.",
      "GRANDPA WALT: Oh! The lake! I took your grandmother fishing there in 1975. She caught a bass bigger than my arm.",
      "TEDDY: [whispering to June] I don’t think this is working.",
      "JUNE: [taking a deep breath, then speaking slowly and clearly] Grandpa. Grandma Rose’s lemon cake. How much sugar?",
      "GRANDPA WALT: [putting down the newspaper, smiling softly] Ah. Her lemon cake. [He pauses.] She always said, “Two cups of sugar and one cup of patience.” Then she would make me wait an hour before I could have a slice.",
      "JUNE: [writing on the card] Two cups. Thank you, Grandpa!",
      "TEDDY: What about the cup of patience?",
      "GRANDPA WALT: [chuckling] That’s the hardest ingredient there is, young man.",
      "[Time passes. The cake is out of the oven. JUNE is spreading lemon frosting. TEDDY is sneaking a fingerful.]",
      "JUNE: Teddy!",
      "TEDDY: I was testing it for safety.",
      "[The front door opens. MOM enters with grocery bags.]",
      "MOM: Why does my kitchen smell like… [She stops and stares at the cake.] Is that Mama’s lemon cake?",
      "JUNE: Happy birthday, Mom. We made it from Grandma Rose’s card.",
      "TEDDY: I did the crunchy part.",
      "MOM: [setting down the bags, her eyes filling with tears] I haven’t tasted this since I was a girl. [She hugs them both.] How did you know the recipe?",
      "JUNE: [pointing at Grandpa] We had help from the best memory in the house.",
      "GRANDPA WALT: [cupping his ear] What’s that? Did somebody say it’s time to eat?",
      "[Everyone laughs. JUNE cuts the first slice as the lights fade.]",
      "THE END"
    ],
    vocab: [
      ["recipe", "a set of directions for making a food"],
      ["smeared", "smudged so it is messy and hard to read"],
      ["ingredient", "one of the foods or things mixed together to make something"],
      ["chuckling", "laughing quietly"],
      ["patience", "the ability to wait calmly without getting upset"]
    ],
    demo: {
      q: "How do the stage directions show that Grandpa misses Grandma Rose?",
      steps: [
        "Step 1: Find the stage directions near Grandpa’s important line. He is “putting down the newspaper, smiling softly” and then he pauses.",
        "Step 2: Think about what those actions mean. Putting down the paper shows he is giving the question his full attention. Smiling softly and pausing show tender memories.",
        "Step 3: Connect them to the dialogue. He then repeats something Grandma Rose always said, which shows he remembers her lovingly."
      ],
      a: "The stage directions show Grandpa putting down his newspaper, smiling softly, and pausing, which shows he is remembering Grandma Rose with love."
    },
    items: [
      Q("What is the main problem in the play?", ["Mom is late coming home.", "The oven is broken.", "The amount of sugar on the recipe card is smeared and cannot be read.", "Teddy broke all the eggs."], 2, "June discovers that the bottom of the card is smeared, so she does not know how much sugar to use. The rest of the play is about solving that problem.", "What does June say “Oh no” about?"),
      Q("What is the purpose of the words in brackets, such as [cupping his ear]?", ["They tell the actors what to do or how to act.", "They are lines the actors say aloud.", "They are the title of the play.", "They list the ingredients."], 0, "Words in brackets are stage directions. They are not spoken. They tell actors how to move and show feelings, like Grandpa cupping his ear because he cannot hear well.", "Would an actor say these words?"),
      Q("Why does Grandpa talk about sugar cane and a lake?", ["He is telling jokes on purpose.", "He does not like cake.", "He wants to go fishing.", "He is hard of hearing and misunderstands June."], 3, "The cast list says Grandpa is hard of hearing. He hears “sugar” as “sugar cane” and “cake” as “lake,” which creates humor in the play.", "Check the cast of characters list."),
      Q("What does the setting description tell you at the start?", ["The play takes place at a bakery.", "The play takes place in a sunny kitchen on a Saturday morning with flour everywhere.", "The play takes place at night.", "The play takes place at a lake."], 1, "The SETTING line describes where and when the play happens. Flour everywhere tells us baking is already underway.", "Read the line that starts with SETTING."),
      Q("How does June finally get Grandpa to understand her?", ["She takes a deep breath and speaks slowly and clearly.", "She writes him a note.", "She shouts the word cake.", "She asks Teddy to ask him."], 0, "The stage directions say June was “taking a deep breath, then speaking slowly and clearly.” Shouting did not work, but patience did.", "Look at the stage directions before her third try."),
      Q("When Grandpa says patience is “the hardest ingredient there is,” the word “ingredient” means", ["a tool used for baking", "a kind of cake pan", "one of the things mixed together to make something", "the time it takes to bake"], 2, "An ingredient is something you mix in, like sugar or eggs. Grandpa jokes that patience is an ingredient because Grandma made him wait to eat.", "What is sugar to a cake?"),
      Q("The recipe card is “smeared.” This means", ["torn in half", "smudged and hard to read", "brand new", "written in pencil"], 1, "Smeared means smudged or blurred. That is why June cannot read the amount of sugar.", "Why couldn’t June read it?"),
      Q("How does Mom feel when she sees the cake?", ["angry about the mess", "confused and bored", "worried about the sugar", "deeply moved and happy"], 3, "The stage directions say her “eyes filling with tears” and she hugs her children. She has not tasted her mother’s cake since she was a girl, so she is touched and happy.", "Look at the stage directions when Mom sees the cake."),
      Q("How are June and Teddy different?", ["June is silly, while Teddy is careful.", "They are exactly the same.", "June is careful and organized, while Teddy is playful and silly.", "June does not want to bake, but Teddy does."], 2, "The cast list calls June “a careful planner” and Teddy “full of ideas.” June counts the hours and fixes problems; Teddy jokes about crunchy shells and sneaks frosting.", "Compare how each one acts."),
      Q("What does June mean when she says they had help from “the best memory in the house”?", ["Grandpa Walt, who remembered the recipe", "the recipe card", "Teddy’s good ideas", "a cookbook"], 0, "Grandpa remembered what Grandma Rose said about two cups of sugar. June points at him while she says it, which the stage directions tell us.", "Who does June point at?")
    ],
    evidence: [
      "How do you know Teddy is a playful character? Give two examples and copy one of his lines.",
      "What do Grandma Rose’s words, “Two cups of sugar and one cup of patience,” teach? Copy a line from the play that helps show the meaning.",
      "Why is the cake so special to Mom? Explain and copy a line or stage direction that supports your answer."
    ],
    summary: "Write a 3–4 sentence summary of the play that tells who the characters are, what problem they face, how they solve it, and how it ends."
  });

  // ---------------------------------------------------------------- week 29
  C.unit('reading', 29, {
    title: "When Mountains Breathe Fire",
    genre: "informational",
    skill: "cause and effect in science",
    learn: [
      { h: "Causes and effects", p: "A cause is WHY something happens. An effect is WHAT happens as a result. Science writing is full of cause-and-effect chains, where one effect becomes the cause of the next thing, like dominoes falling in a row." },
      { h: "Signal words", p: "Words such as because, so, as a result, therefore, since, led to, and caused are clues to cause and effect. But not every cause has a signal word. Ask yourself, “What made this happen?” and “What happened because of this?”" }
    ],
    passage: [
      "Under Our Feet",
      "Earth may feel solid, but deep below the surface it is hot enough to melt rock. Melted rock underground is called magma. The outer layer of Earth, called the crust, is broken into giant pieces called tectonic plates. These plates move very slowly, only an inch or two a year, about as fast as your fingernails grow.",
      "Where plates pull apart or push against each other, magma can find a way to rise. Because magma is lighter than the solid rock around it, it pushes upward through cracks. When it breaks through the surface, a volcano forms. Once magma reaches the surface, it is called lava.",
      "Why Some Volcanoes Explode",
      "Not all volcanoes behave the same way. Some magma is thin and runny, like warm syrup. Gas bubbles escape from it easily, so the lava flows out gently in glowing rivers. The volcanoes of Hawaii are like this. In fact, the Hawaiian Islands were built by layer after layer of lava cooling and hardening on the ocean floor until the islands rose above the waves.",
      "Other magma is thick and sticky, like cold peanut butter. Gas gets trapped inside it, and pressure builds up. Think of shaking a bottle of soda with the cap on. When the pressure finally becomes too great, the volcano explodes, blasting ash, rock, and gas high into the sky.",
      "That is what happened at Mount St. Helens in Washington State on May 18, 1980. For weeks, rising magma made the north side of the mountain bulge outward. Then an earthquake caused the side of the mountain to slide away. With the pressure suddenly released, the volcano erupted sideways in a tremendous blast. The explosion flattened forests for miles, and ash drifted over several states.",
      "Effects Around the World",
      "A large eruption can affect places far away. In 1815, Mount Tambora in Indonesia erupted in one of the biggest explosions in recorded history. It sent so much ash and gas into the sky that it blocked some sunlight around the world. As a result, the next year, 1816, became known as the “Year Without a Summer.” Snow fell in New England in June, and crops froze in parts of North America and Europe.",
      "Volcanoes Can Help, Too",
      "Volcanoes are not only destructive. Over many years, volcanic ash breaks down into rich soil, so farmers around many volcanoes grow excellent crops. Heat from underground rock can be used to make electricity, which Iceland does in large amounts. And every new island made by lava is fresh land where, in time, plants and animals will make a home.",
      "Scientists called volcanologists watch volcanoes closely. They measure small earthquakes, changes in the ground’s shape, and gases that leak out. Because of their warnings, people near an awakening volcano can often leave before it erupts. Before the 1980 eruption, officials kept most people away from Mount St. Helens, which saved many lives."
    ],
    vocab: [
      ["magma", "melted rock deep under the ground"],
      ["tectonic", "having to do with the huge moving plates of Earth’s crust"],
      ["pressure", "a pushing force that builds up in a closed space"],
      ["tremendous", "very large or powerful"],
      ["destructive", "causing a lot of damage"]
    ],
    demo: {
      q: "Explain the cause-and-effect chain that led to the “Year Without a Summer.”",
      steps: [
        "Step 1: Find the first cause. In 1815, Mount Tambora had a huge eruption.",
        "Step 2: Find the effect, which becomes the next cause. Ash and gas went high into the sky and blocked some sunlight around the world.",
        "Step 3: Find the final effect. With less sunlight, 1816 was so cold that snow fell in New England in June and crops froze."
      ],
      a: "Tambora’s eruption put ash and gas in the sky, which blocked sunlight, which made 1816 so cold that it was called the Year Without a Summer."
    },
    items: [
      Q("What causes magma to rise toward Earth’s surface?", ["It is heavier than the rock around it.", "Wind pulls it up.", "Rain pushes it up.", "It is lighter than the solid rock around it."], 3, "The passage says, “Because magma is lighter than the solid rock around it, it pushes upward.” Lighter things rise, like a beach ball pushed under water.", "Look for the word “because.”"),
      Q("Why do some volcanoes explode instead of flowing gently?", ["Their magma is thin and runny.", "Their magma is thick and sticky, so gas gets trapped and pressure builds.", "They are near the ocean.", "They are very small."], 1, "Thick magma traps gas bubbles, so pressure builds up like in a shaken soda bottle. When the pressure gets too great, the volcano explodes.", "Compare the syrup and peanut butter examples."),
      Q("What was one EFFECT of the Mount Tambora eruption in 1815?", ["Snow fell in New England in June of 1816.", "The Hawaiian Islands formed.", "Mount St. Helens erupted.", "Iceland began making electricity."], 0, "Tambora’s ash and gas blocked sunlight, and as a result 1816 was very cold. Snow in June was one effect.", "Look in the section “Effects Around the World.”"),
      Q("What caused the north side of Mount St. Helens to slide away?", ["heavy rain", "people digging", "an earthquake", "a lava river"], 2, "The passage says “an earthquake caused the side of the mountain to slide away.” Then the trapped pressure was released in a sideways blast.", "Find the signal word “caused.”"),
      Q("Which sentence uses a signal word to show cause and effect?", ["The volcanoes of Hawaii are like this.", "As a result, the next year, 1816, became known as the “Year Without a Summer.”", "Scientists called volcanologists watch volcanoes closely.", "Earth may feel solid."], 1, "“As a result” is a cause-and-effect signal phrase. It connects the effect (a cold year) to the cause (ash blocking sunlight).", "Which choice contains a clue phrase from the learn card?"),
      Q("How did the Hawaiian Islands form?", ["A giant explosion threw rocks into the ocean.", "Glaciers carried rocks there.", "Coral grew into mountains.", "Layers of lava cooled and hardened on the ocean floor until the islands rose above the waves."], 3, "Hawaii’s runny lava flowed out again and again. Each layer hardened on top of the last until the islands rose above the sea.", "Read about runny magma."),
      Q("In the passage, the word “pressure” means", ["a kind of rock", "very hot weather", "a pushing force that builds up in a closed space", "a small earthquake"], 2, "Pressure is a push that builds up when something is trapped, like gas inside thick magma or a shaken soda bottle with the cap on.", "Think about the soda bottle example."),
      Q("The blast at Mount St. Helens was “tremendous.” This means it was", ["very large and powerful", "tiny and quiet", "slow and gentle", "cold and wet"], 0, "Tremendous means huge or very powerful. The passage supports this by saying the blast flattened forests for miles.", "What did the blast do to the forests?"),
      Q("What is one way volcanoes can help people?", ["They make the weather colder.", "They flatten forests.", "They block sunlight.", "Volcanic ash breaks down into rich soil for farming."], 3, "Over time, ash becomes fertile soil, so farmers near volcanoes can grow excellent crops. The other choices are harmful effects.", "Look under the heading “Volcanoes Can Help, Too.”"),
      Q("What is the EFFECT of volcanologists’ warnings?", ["Volcanoes stop erupting.", "People can often leave before an eruption, which saves lives.", "Magma becomes thinner.", "Tectonic plates stop moving."], 1, "Scientists cannot stop volcanoes, but their warnings give people time to leave. At Mount St. Helens, keeping people away saved many lives.", "Read the last paragraph.")
    ],
    evidence: [
      "Explain why thick magma leads to an explosive eruption. Copy the sentence that compares it to something from everyday life.",
      "How can a volcano affect people who live thousands of miles away? Copy a sentence that shows an example.",
      "Do you think volcanoes are more harmful or more helpful? Give your opinion and copy one sentence from the passage that supports it."
    ],
    summary: "Write a 3–4 sentence summary that explains what causes volcanoes, why some explode, and what effects they can have, both harmful and helpful."
  });

  // ---------------------------------------------------------------- week 30
  C.unit('reading', 30, {
    title: "Two Brothers and a Dream of Flight",
    genre: "biography",
    skill: "reading a biography",
    learn: [
      { h: "A true life story", p: "A biography is a true story of a real person’s life, written by someone else. It uses facts, dates, and events, usually told in time order. A good biography also shows what the person was like: what they cared about, how they faced problems, and why their life mattered." },
      { h: "Reading like a historian", p: "As you read a biography, track the important events on a timeline. Then look for the traits, or qualities, that helped the person succeed, and the evidence that shows each trait. Ask: What did this person do that others did not?" }
    ],
    passage: [
      "A Gift That Flew",
      "In 1878, Bishop Milton Wright came home to his family in Ohio with a surprise for his two youngest sons. It was a small toy helicopter made of paper, bamboo, and cork, powered by a twisted rubber band. When he tossed it up, it fluttered to the ceiling. Wilbur, who was eleven, and Orville, who was seven, played with it until it broke. Then they built copies of their own. Years later, they said that little toy first sparked their interest in flight.",
      "Wilbur was born on April 16, 1867, in Indiana, and Orville was born on August 19, 1871, in Dayton, Ohio. Their mother, Susan, was skilled at building and fixing things, and their father kept a home full of books. The brothers grew up curious and hardworking. As young men, they ran a printing business, and in 1892 they opened a bicycle shop in Dayton. Soon they were designing and building their own bicycles.",
      "Learning From Birds and Failures",
      "In the 1890s, people around the world were trying to build flying machines, but no one had found a way to control one in the air. The Wright brothers studied birds and noticed that they tilted the tips of their wings to turn and balance. One day, Wilbur twisted a long, empty cardboard box in his hands and realized that wings could be twisted in the same way. This idea, called wing warping, became one of their most important discoveries.",
      "In 1900, they took a glider to Kitty Hawk, North Carolina. They chose it because it had strong, steady winds, soft sand for landings, and few people to watch. Their 1901 glider did not work as well as they hoped, and Wilbur was so discouraged that he said people might not fly for many years. But instead of quitting, the brothers went home and built a small wind tunnel. They tested about two hundred tiny wing shapes and kept careful records. With their new data, their 1902 glider flew beautifully.",
      "Twelve Seconds That Changed the World",
      "Next they needed an engine. No company could build one light and strong enough, so the brothers and their mechanic, Charlie Taylor, built their own. They also designed their own propellers. On December 14, 1903, the brothers tossed a coin to see who would try first. Wilbur won, but the machine stalled and landed hard after only a few seconds, so the attempt did not count.",
      "On the cold, windy morning of December 17, 1903, near Kitty Hawk, it was Orville’s turn. He lay flat on the lower wing as the engine roared. The machine rolled down a wooden rail and lifted into the air. It flew for 12 seconds and traveled 120 feet. It was the first time a powered airplane carrying a person had taken off, flown under the pilot’s control, and landed. A local man named John T. Daniels snapped a photograph that became one of the most famous pictures in history.",
      "The brothers flew three more times that day. On the last flight, Wilbur stayed in the air for 59 seconds and flew 852 feet.",
      "The Wrights kept improving their airplanes, and by 1908 they were amazing crowds in the United States and France. Wilbur died of typhoid fever in 1912. Orville lived until 1948, long enough to see airplanes cross oceans. Their 1903 Flyer now hangs in the Smithsonian’s National Air and Space Museum in Washington, D.C., a reminder that patience and hard work can lift a dream off the ground."
    ],
    vocab: [
      ["sparked", "started or caused something, like a small flame starting a fire"],
      ["glider", "an aircraft with wings but no engine that rides on the wind"],
      ["discouraged", "feeling like giving up because things are not going well"],
      ["mechanic", "a person who builds and repairs machines and engines"],
      ["stalled", "suddenly lost power or speed and stopped working properly"]
    ],
    demo: {
      q: "What trait helped the Wright brothers succeed, and what is the evidence?",
      steps: [
        "Step 1: Look for a moment when they faced a problem. Their 1901 glider did not work well, and Wilbur was discouraged.",
        "Step 2: See what they did next. They went home, built a wind tunnel, and tested about two hundred wing shapes.",
        "Step 3: Name the trait. Refusing to quit and testing again shows perseverance."
      ],
      a: "The Wright brothers showed perseverance: when their 1901 glider failed, they built a wind tunnel and tested about two hundred wing shapes until their 1902 glider flew well."
    },
    items: [
      Q("What first sparked the Wright brothers’ interest in flight?", ["a toy helicopter their father brought home", "a ride in a hot-air balloon", "watching an airplane race", "a book about birds"], 0, "The passage says that years later the brothers said the toy helicopter their father gave them in 1878 first sparked their interest.", "Read the first section."),
      Q("Which events are in the correct time order?", ["first powered flight, bicycle shop, toy helicopter", "bicycle shop, toy helicopter, first powered flight", "toy helicopter, bicycle shop, first powered flight", "first powered flight, toy helicopter, bicycle shop"], 2, "The toy came in 1878, the bicycle shop opened in 1892, and the first powered flight was in 1903. Biographies usually follow time order.", "Put the dates in order: 1878, 1892, 1903."),
      Q("Why did the brothers choose Kitty Hawk, North Carolina?", ["It was close to their home.", "It had strong, steady winds, soft sand, and few people.", "It had a large airport.", "Their father lived there."], 1, "The passage lists three reasons: strong, steady winds to help lift the glider, soft sand for landings, and privacy. Kitty Hawk is far from Ohio.", "Find the sentence that begins “They chose it because.”"),
      Q("What did the brothers learn by watching birds?", ["Birds flap faster when they are scared.", "Birds only fly in warm weather.", "Birds need engines.", "Birds tilt the tips of their wings to turn and balance."], 3, "They noticed birds tilting their wingtips. This led to the idea of wing warping, which let a pilot control the plane.", "Read the section “Learning From Birds and Failures.”"),
      Q("How long did the first powered flight on December 17, 1903, last?", ["59 seconds", "2 minutes", "12 seconds", "one hour"], 2, "Orville’s first flight lasted 12 seconds and went 120 feet. The 59-second flight was Wilbur’s, the last flight that day.", "Be careful: two different flights are described."),
      Q("Why didn’t Wilbur’s attempt on December 14 count as the first flight?", ["The machine stalled and landed hard after only a few seconds.", "It was too windy to start.", "He forgot the engine.", "Orville would not let him go."], 0, "Wilbur won the coin toss, but the machine stalled and came down hard after a few seconds. It was not a controlled flight, so it did not count.", "Find the coin toss."),
      Q("The word “discouraged” in the passage means", ["feeling very brave", "feeling sleepy", "feeling hungry", "feeling like giving up"], 3, "After the 1901 glider disappointed them, Wilbur was discouraged, so much that he said people might not fly for many years. That is a feeling of wanting to give up.", "How did Wilbur feel about the 1901 glider?"),
      Q("Charlie Taylor was a “mechanic.” Based on the passage, a mechanic is someone who", ["takes photographs", "builds and repairs machines and engines", "teaches school", "designs bicycles for sale"], 1, "Charlie Taylor helped the brothers build their own engine. A mechanic works with machines and engines.", "What did Charlie Taylor help build?"),
      Q("Why did the brothers build their own engine?", ["No company could build one light and strong enough.", "They wanted to save money.", "Their bicycle shop sold engines.", "Engines were not invented yet."], 0, "The passage says no company could build an engine light enough and strong enough, so they built one with Charlie Taylor.", "Read the section “Twelve Seconds That Changed the World.”"),
      Q("Which sentence BEST states why the Wright brothers are important?", ["They owned a bicycle shop in Dayton.", "They lived in Ohio.", "They made the first controlled, powered airplane flight with a pilot.", "They tossed a coin to decide who would fly."], 2, "Many people owned shops or lived in Ohio. What made the Wrights important was the first powered flight that a pilot controlled and landed in 1903.", "What did they do that no one had done before?")
    ],
    evidence: [
      "How did the Wright brothers respond when their 1901 glider failed? Explain, and copy a sentence that shows what they did.",
      "How did the brothers’ work with bicycles and printing help prepare them to build an airplane? Explain, and copy a sentence about their early work.",
      "Which trait of the Wright brothers do you admire most? Explain why, and copy a sentence that shows that trait."
    ],
    summary: "Write a 3–4 sentence summary of the Wright brothers’ life that includes how their interest began, how they solved the problem of control, and what happened on December 17, 1903."
  });

  // ---------------------------------------------------------------- week 31
  C.unit('reading', 31, {
    title: "Checkmate, Grace",
    genre: "realistic fiction",
    skill: "how a character changes",
    learn: [
      { h: "Characters grow", p: "In many stories, the main character changes from the beginning to the end. The change might be in how she feels, what she believes, or how she treats others. To find the change, compare the character at the start with the character at the end." },
      { h: "What causes the change?", p: "A character usually changes because of an event, a problem, or another character who teaches her something. Look for a turning point, a moment when the character realizes something. Her words, actions, and thoughts before and after that moment are your evidence." }
    ],
    passage: [
      "Grace Mercer did not lose. Not at board games, not at spelling bees, and definitely not at chess. When her cousin beat her at checkers last Thanksgiving, Grace had flipped the board and stomped upstairs, and the red and black pieces had rolled under the couch for weeks.",
      "So when she noticed an old man playing chess alone at a picnic table in Riverside Park, she marched right over.",
      "“Would you like to play?” she asked. What she meant was, I would like to beat you.",
      "The man looked up. He had a white mustache, a fishing hat, and eyes that crinkled when he smiled. “Name’s Mr. Abernathy,” he said. “Sit down.”",
      "Twenty minutes later, Grace stared at the board in shock. Her king was trapped. Checkmate.",
      "Her face burned. “That wasn’t fair. The sun was in my eyes.”",
      "Mr. Abernathy only nodded. “Same time tomorrow?”",
      "She came back the next day, and the next. She lost every single game. Each time, she had an excuse. A dog barked. Her shoe was untied. The wind blew her hair in her face. Mr. Abernathy never argued. He just set the pieces up again.",
      "On the fifth day, Grace slammed her hand on the table. “How do you always win?”",
      "Mr. Abernathy leaned back. “Do you want the truth?”",
      "“Yes.”",
      "“I have lost more chess games than you have played in your whole life. I lost to my father. I lost to my friends in the army. I lost to my wife, who was the best player I ever met.” He tapped the board. “Every loss taught me something. But only after I stopped blaming the sun.”",
      "Grace opened her mouth to argue, then closed it. She thought about the checkers board and the pieces under the couch. She thought about all the excuses she had made that week. None of them had been true.",
      "“So what did this game teach you?” she asked quietly.",
      "His eyes crinkled. “That’s the right question. Let’s look.”",
      "He set the pieces back to where they had been ten moves earlier. He showed her how she had moved her queen out too early, chasing his pieces, while he quietly built a wall around her king. “You were so busy trying to win fast that you forgot to protect what mattered.”",
      "That night, Grace borrowed a chess book from the library and read it under her covers with a flashlight.",
      "For the next three weeks, she kept losing to Mr. Abernathy, but the games lasted longer. Thirty moves. Forty. Once, she captured his queen, and he whistled in admiration. After every game, they looked back over the board together. Grace stopped making excuses. Instead, she asked questions.",
      "Then one breezy Saturday, Grace slid her rook across the board and sat back. Mr. Abernathy studied the pieces for a long time. Then he laughed, a big, warm laugh, and tipped over his king.",
      "“Checkmate, Grace.”",
      "She expected to feel like jumping on the table. Instead she felt something calmer and better. She reached across and shook his hand. “Thank you for all the losing,” she said.",
      "At Thanksgiving that year, her cousin pulled out the checkers board and grinned. “Rematch?”",
      "Grace lost by two pieces. She smiled, set up the board again, and said, “Show me how you did that.”"
    ],
    vocab: [
      ["excuse", "a reason given to explain a mistake, often to avoid blame"],
      ["crinkled", "formed small folds or lines, as eyes do when someone smiles"],
      ["admiration", "a feeling of respect and approval"],
      ["captured", "took or won a piece from the other player"],
      ["rematch", "a second game between the same players"]
    ],
    demo: {
      q: "How does Grace change from the beginning to the end of the story?",
      steps: [
        "Step 1: Describe Grace at the beginning. She hates losing; she flipped the checkers board and made excuses like “The sun was in my eyes.”",
        "Step 2: Find the turning point. Mr. Abernathy tells her every loss taught him something, but only after he stopped blaming the sun. Grace realizes her excuses were not true.",
        "Step 3: Describe Grace at the end. When she loses to her cousin, she smiles and asks, “Show me how you did that.”"
      ],
      a: "Grace changes from a sore loser who makes excuses to a humble learner who sees losing as a chance to improve, because Mr. Abernathy taught her to learn from her mistakes."
    },
    items: [
      Q("How does Grace act at the BEGINNING of the story when she loses?", ["She laughs and asks to learn.", "She gets angry and makes excuses.", "She cries and goes home.", "She pretends she won."], 1, "Grace flipped the checkers board and blamed the sun, a dog, and the wind. These details show she was a sore loser at the beginning.", "Think about the checkers board and the sun."),
      Q("What is the turning point that begins Grace’s change?", ["She captures Mr. Abernathy’s queen.", "She reads a chess book.", "Her cousin asks for a rematch.", "Mr. Abernathy explains that every loss taught him something, but only after he stopped making excuses."], 3, "After Mr. Abernathy’s words, Grace thinks about her excuses and realizes none were true. That realization is the turning point, and her behavior changes after it.", "When does Grace first stop to think about herself?"),
      Q("How does Grace act at the END of the story when she loses to her cousin?", ["She flips the board again.", "She blames the weather.", "She smiles and asks her cousin to show her how he did it.", "She refuses to play."], 2, "This ending mirrors the beginning. Last Thanksgiving she flipped the board; this time she smiles and asks to learn. That contrast shows how much she has changed.", "Read the last paragraph."),
      Q("Why does Grace say, “Thank you for all the losing”?", ["She realizes the losses taught her how to play better.", "She is being rude.", "She wants to stop playing.", "She is joking about the weather."], 0, "Each lost game, and the review after it, taught Grace something. She is grateful because the losses helped her improve.", "What did Grace and Mr. Abernathy do after every game?"),
      Q("Which action shows Grace has started to change?", ["She marches over to beat Mr. Abernathy.", "She says the sun was in her eyes.", "She slams her hand on the table.", "She stops making excuses and asks questions after each game."], 3, "The passage says, “Grace stopped making excuses. Instead, she asked questions.” That is new behavior that shows growth.", "Which choice describes something new she does?"),
      Q("How does Mr. Abernathy help Grace change?", ["He lets her win on purpose.", "He is patient, keeps playing, and shows her what she can learn from each game.", "He yells at her for being rude.", "He tells her parents."], 1, "Mr. Abernathy never argues; he resets the board and then reviews games with her. His patience and teaching help her grow. He does not let her win; she earns it.", "What does he do each time she loses?"),
      Q("In the story, an “excuse” is", ["a reason given to avoid blame for a mistake", "a type of chess piece", "a kind thank-you", "a promise to try harder"], 0, "Grace’s excuses were the barking dog, untied shoe, and wind. She used them to avoid admitting she had been beaten.", "Think about the reasons Grace gave for losing."),
      Q("When Grace captured his queen, Mr. Abernathy “whistled in admiration.” This means he", ["was angry", "was calling his dog", "was impressed and respected her move", "was bored"], 2, "Admiration is a feeling of respect and approval. His whistle shows he was impressed by her improvement.", "How would you feel if a student made a great move?"),
      Q("What mistake did Mr. Abernathy show Grace in their game review?", ["She did not know how the knight moves.", "She moved her queen out too early and forgot to protect her king.", "She played too slowly.", "She forgot whose turn it was."], 1, "He showed that she chased his pieces with her queen while he built a wall around her king. He told her she forgot “to protect what mattered.”", "Read the paragraph where he resets the pieces."),
      Q("What is the BEST theme of this story?", ["Winning is all that matters.", "Old people are good at chess.", "Never play games with family.", "Losing can teach us to grow if we stop making excuses."], 3, "Grace becomes a better player and a better person once she learns from losing instead of blaming others. That is the lesson the story teaches.", "What did Grace learn?")
    ],
    evidence: [
      "Describe Grace at the beginning of the story. Copy a sentence that shows how she reacted to losing.",
      "What did Mr. Abernathy say that made Grace start to change? Explain and copy the sentence.",
      "How do you know Grace has really changed by the end? Copy a sentence from the last part of the story as evidence."
    ],
    summary: "Write a 3–4 sentence summary that tells who Grace is, what happens when she plays Mr. Abernathy, and how she changes by the end."
  });

  // ---------------------------------------------------------------- week 32
  C.unit('reading', 32, {
    title: "A Vault in the Ice",
    genre: "informational",
    skill: "text structure: problem and solution",
    learn: [
      { h: "Problem and solution structure", p: "Some informational texts are built around a problem and how people solve it. First the author explains the PROBLEM and why it matters. Then the author describes one or more SOLUTIONS and how well they work." },
      { h: "Clue words", p: "Watch for words like problem, danger, threat, need, solution, solve, answer, protect, and so. When you find the problem, ask: Who is affected? When you find the solution, ask: How does it fix the problem, and does it work?" }
    ],
    passage: [
      "A Hidden Danger",
      "Every time you eat a bowl of cereal, a slice of pizza, or a spoonful of rice, you are eating seeds or foods made from them. People have been saving and planting seeds for thousands of years. Over time, farmers developed many varieties of each crop. A variety is a type of plant within a crop, such as a sweet red apple or a tart green one. Some varieties can survive drought. Others resist certain diseases or grow well in cold places.",
      "But there is a problem. Today, much of the world’s food comes from a smaller number of crop varieties than in the past. If a new disease attacks a crop and every farmer is growing the same kind, the disease can spread everywhere at once. This has happened before. In Ireland in the 1840s, many families depended on potatoes, and most farmers grew just a few varieties. When a plant disease called blight arrived, it destroyed potato crops year after year, and a terrible famine followed.",
      "Seeds can also be lost in other ways. Floods, fires, and wars can destroy farms and the places where seeds are stored. When an old variety disappears, it may be gone forever, along with whatever special strengths it had.",
      "A Library of Seeds",
      "One solution is a seed bank. A seed bank is like a library, but instead of books, it stores seeds. Workers dry the seeds carefully, seal them in packets, and keep them very cold, which lets many kinds of seeds stay alive for years or even centuries. There are more than a thousand seed banks around the world.",
      "Still, what if a seed bank itself were damaged? To solve that problem, people needed a backup for the backups. So in 2008, Norway opened the Svalbard Global Seed Vault on a frozen island far north of the Arctic Circle. The vault is dug deep into the side of a mountain. Inside, seeds are kept at about zero degrees Fahrenheit. Because the ground there is permanently frozen, the seeds would stay cold for a long time even if the power went out.",
      "Countries and seed banks from all over the world send extra copies of their seeds to Svalbard. Each box still belongs to the place that sent it. Today the vault holds more than a million seed samples, and it has room for millions more.",
      "The Solution at Work",
      "In 2015, the vault was put to the test. War in Syria had made it impossible for scientists to use an important seed bank there. So for the first time, they asked Svalbard to send back copies of their seeds. Scientists replanted them in new fields in Lebanon and Morocco, grew fresh seeds, and rebuilt their collection. Later, they sent new copies back to the vault for safekeeping.",
      "No one can promise that a crop disease or disaster will never happen again. But thanks to seed banks and the vault in the ice, the world has a way to start over. Tucked inside a cold mountain, the seeds of tomorrow’s harvests are waiting."
    ],
    vocab: [
      ["varieties", "different types of one kind of plant"],
      ["drought", "a long time with little or no rain"],
      ["famine", "a time when there is not enough food and many people go hungry"],
      ["vault", "a strong, safe room for storing valuable things"],
      ["permanently", "lasting forever or for a very long time without changing"]
    ],
    demo: {
      q: "What problem does the passage describe, and what is one solution?",
      steps: [
        "Step 1: Find the problem. The section “A Hidden Danger” explains that crop varieties can be lost through disease, floods, fires, and wars.",
        "Step 2: Find the solution. The section “A Library of Seeds” explains seed banks, which store seeds cold so they stay alive.",
        "Step 3: Check whether it works. In 2015, scientists used seeds from Svalbard to rebuild a collection lost because of war, so the solution worked."
      ],
      a: "The problem is that crop varieties can be lost forever; one solution is seed banks like the Svalbard vault, which save backup copies of seeds that can be replanted."
    },
    items: [
      Q("What is the main problem described in the passage?", ["People do not like cereal.", "Norway is too cold.", "Crop varieties can be lost to disease, disaster, or war.", "There are too many seed banks."], 2, "The first section explains the danger: if varieties are lost, their special strengths are gone forever, and a single disease can wipe out crops.", "Read the section “A Hidden Danger.”"),
      Q("Why does the author include the story of the potato blight in Ireland?", ["to give a real example of what happens when many farmers grow only a few varieties", "to explain how to cook potatoes", "to show that Ireland has cold weather", "to describe the Svalbard vault"], 0, "The Irish famine shows the problem in real life: farmers grew only a few kinds of potatoes, so when blight came, it destroyed crops everywhere.", "What problem does this example prove?"),
      Q("What solution does the passage describe for keeping seeds safe?", ["planting only one variety of each crop", "throwing away old seeds", "growing crops only in Norway", "storing seeds in seed banks and in the Svalbard vault"], 3, "Seed banks and the Svalbard vault store seeds cold so they can be used later. Planting only one variety would make the problem worse.", "What is the “library of seeds”?"),
      Q("What problem with seed banks did the Svalbard vault solve?", ["Seed banks were too expensive.", "A seed bank itself could be damaged, so a backup was needed.", "Seed banks did not have enough workers.", "Seeds in seed banks grew too fast."], 1, "The passage asks, “What if a seed bank itself were damaged?” Svalbard is a backup for the backups.", "Find the phrase “a backup for the backups.”"),
      Q("How does the passage show that the solution actually works?", ["by describing scientists rebuilding a collection with seeds sent back from Svalbard in 2015", "by listing foods made from seeds", "by describing the Irish famine", "by saying the vault is in a mountain"], 0, "In 2015, Syrian seed bank scientists got copies back from Svalbard, replanted them, and rebuilt their collection. This shows the solution working.", "Read the section “The Solution at Work.”"),
      Q("Why was Svalbard a good place for the vault?", ["It is warm all year.", "Many farmers live there.", "The ground is permanently frozen, so seeds stay cold even without power.", "It is near Syria."], 2, "Because the ground is permanently frozen, the seeds would stay cold for a long time even if the power failed.", "Look for the word “because.”"),
      Q("In the passage, a “famine” is", ["a type of potato", "a time when there is not enough food", "a cold storage room", "a plant disease"], 1, "A famine is a time of severe hunger when food runs out. The blight was the plant disease that caused the famine in Ireland.", "What followed the blight?"),
      Q("The word “drought” means", ["a strong wind", "a frozen island", "a flood", "a long time with little or no rain"], 3, "Some varieties can survive drought, which is a long dry spell. That is one of the special strengths a variety can have.", "Why would a plant need to be tough to survive it?"),
      Q("Which BEST describes the structure of this passage?", ["It tells a story in time order about one farmer.", "It compares two kinds of apples.", "It explains a problem and then describes solutions.", "It gives directions for planting."], 2, "The passage first explains the danger of losing crop varieties, then describes seed banks and the vault as solutions, and finally shows a solution at work.", "Look at the headings."),
      Q("Who owns the seeds stored in the Svalbard vault?", ["the places that sent them", "the government of Norway", "the scientists who work there", "nobody"], 0, "The passage says, “Each box still belongs to the place that sent it.” Norway runs the vault, but the seeds belong to the countries and seed banks that sent them.", "Read the paragraph about countries sending copies.")
    ],
    evidence: [
      "Why is it dangerous for farmers everywhere to grow the same few varieties of a crop? Copy a sentence that explains it.",
      "How is a seed bank like a library? Explain and copy a sentence that describes how seeds are stored.",
      "Do you think the Svalbard vault is a good solution? Give your opinion and copy a sentence that supports it."
    ],
    summary: "Write a 3–4 sentence summary that explains the problem of losing crop varieties, the solutions of seed banks and the Svalbard vault, and one example of the solution working."
  });

  // ---------------------------------------------------------------- week 33
  C.unit('reading', 33, {
    title: "The Busy World of Honeybees",
    genre: "informational (two related articles)",
    skill: "integrating information from two texts",
    learn: [
      { h: "Two texts, one topic", p: "When two texts are about the same topic, each one usually gives different information. One might explain how something works, while another shows why it matters. Reading both gives you a fuller, richer understanding than either one alone." },
      { h: "Putting the pieces together", p: "To integrate, or combine, information, first note what each text says. Then look for connections: Does one text explain something the other only mentions? Do they agree? Finally, write a new idea that uses facts from BOTH texts." }
    ],
    passage: [
      "ARTICLE 1: Dancing Directions",
      "Imagine trying to tell a friend where to find the best ice cream in town, but you cannot talk, draw, or point. Honeybees solve a problem like that every day.",
      "A honeybee colony can have tens of thousands of bees, but only one queen. Most of the bees are female workers. Some workers, called foragers, fly out to find flowers full of nectar and pollen. When a forager finds a great patch of flowers, she flies home and does a special dance on the honeycomb.",
      "For flowers that are close by, she does a round dance, circling one way and then the other. It means, “Food is nearby. Go look!” For flowers farther away, she does the waggle dance. She runs in a straight line while shaking her body from side to side, then loops back and does it again. The direction of the straight run tells the other bees which way to fly compared to the sun. The length of the waggle tells them how far to go. The longer she waggles, the farther away the flowers are.",
      "An Austrian scientist named Karl von Frisch spent years watching bees and figuring out what their dances meant. In 1973, he shared the Nobel Prize, one of the highest honors in science, for his work.",
      "ARTICLE 2: Bees on the Farm",
      "Each spring, trucks loaded with beehives roll across the United States toward California. Their destination is the almond orchards. Almond trees need bees to make almonds, and California grows most of the world’s almonds. Without honeybees, there would be very few almonds at all.",
      "Why are bees so important? When a bee visits a flower to drink nectar, tiny grains of pollen stick to her fuzzy body. When she flies to the next flower, some of that pollen rubs off. This is called pollination, and many plants need it to make fruit and seeds. Bees help pollinate apples, cherries, pumpkins, cucumbers, and blueberries, a crop that is very important to farmers in Georgia.",
      "Beekeepers take care of the hives and move them to farms when crops are blooming. Farmers pay to rent the hives because healthy bees mean a bigger harvest. Some beekeepers also sell honey. It takes a lot of bees to make it: a single worker bee makes only about one-twelfth of a teaspoon of honey in her whole life.",
      "In recent years, beekeepers have lost many colonies because of diseases, pests, and a lack of flowers. You can help bees by planting flowers in your yard, especially ones that bloom at different times of year. Clover, sunflowers, and herbs like basil and mint are good choices. Every flower is like a little gas station for a hardworking bee."
    ],
    vocab: [
      ["colony", "a large group of the same animals living together"],
      ["foragers", "animals that go out searching for food"],
      ["orchards", "large fields of fruit or nut trees"],
      ["pollination", "moving pollen from flower to flower so plants can make fruit and seeds"],
      ["destination", "the place someone or something is traveling to"]
    ],
    demo: {
      q: "Using BOTH articles, explain how the waggle dance helps farmers.",
      steps: [
        "Step 1: From Article 1, the waggle dance tells other bees which direction and how far to fly to find flowers.",
        "Step 2: From Article 2, when bees visit flowers, they carry pollen, and many crops need pollination to make fruit.",
        "Step 3: Combine them. The dance sends many bees to the same patch of blooming flowers, so more flowers get pollinated and farmers get a bigger harvest."
      ],
      a: "The waggle dance (Article 1) sends many bees to blooming flowers, and those bees pollinate crops (Article 2), which helps farmers grow more fruit and nuts."
    },
    items: [
      Q("What is the main topic of Article 1?", ["how bees make honey", "why farmers rent beehives", "how to plant a garden", "how honeybees use dances to share where food is"], 3, "Article 1 explains the round dance and the waggle dance, which tell other bees where to find flowers.", "Look at the title “Dancing Directions.”"),
      Q("What is the main topic of Article 2?", ["how Karl von Frisch won a prize", "how bees help farms by pollinating crops", "what the queen bee eats", "how bees see color"], 1, "Article 2 explains pollination, beekeepers renting hives to farmers, and ways to help bees.", "Look at the title “Bees on the Farm.”"),
      Q("Which idea do you need BOTH articles to understand?", ["Bees can share the location of flowers, and their visits to flowers help crops grow.", "A colony has one queen.", "Karl von Frisch was Austrian.", "Almonds grow in California."], 0, "Only Article 1 explains the dances, and only Article 2 explains pollination. Putting them together shows how bee communication helps crops. The other choices come from just one article.", "Which choice combines facts from both?"),
      Q("According to Article 1, what does the LENGTH of the waggle tell other bees?", ["what kind of flower it is", "how many bees should go", "how far away the flowers are", "what time of day it is"], 2, "The article says, “The longer she waggles, the farther away the flowers are.” The direction of the run tells which way to fly.", "Reread the paragraph about the waggle dance."),
      Q("Article 1 says foragers look for nectar and pollen. What does Article 2 add about pollen?", ["Pollen is what bees use to dance.", "Pollen sticks to bees and rubs off on the next flower, which pollinates it.", "Pollen is poisonous to bees.", "Pollen is made by the queen."], 1, "Article 1 only mentions pollen as food. Article 2 explains that pollen sticking to a bee’s fuzzy body gets carried to other flowers. That is integrating information.", "Read the second paragraph of Article 2."),
      Q("Why do trucks carry beehives to California each spring?", ["to sell honey", "because bees like warm weather", "to win a prize", "because almond trees need bees to make almonds"], 3, "Article 2 says almond trees need bees and California grows most of the world’s almonds. The hives are rented so the bees can pollinate the trees.", "What is the trucks’ destination?"),
      Q("In Article 1, “foragers” are", ["bees that stay home to guard the hive", "baby bees", "bees that go out to find food", "scientists who study bees"], 2, "The article defines foragers as workers who “fly out to find flowers full of nectar and pollen.” Foraging means searching for food.", "What do foragers fly out to do?"),
      Q("In Article 2, the word “destination” means", ["the place being traveled to", "a type of truck", "a kind of nut", "the end of a bee’s life"], 0, "The trucks are heading toward the almond orchards, so the orchards are their destination, the place they are going.", "Where are the trucks going?"),
      Q("Which crop important to Georgia farmers is named in Article 2?", ["peanuts", "cotton", "pecans", "blueberries"], 3, "Article 2 names blueberries as a crop bees pollinate that is very important to Georgia. The other crops are grown in Georgia too, but the article does not mention them.", "Find the word “Georgia.”"),
      Q("Why does the author compare a flower to “a little gas station for a hardworking bee”?", ["Flowers sell gasoline.", "Flowers give bees the food energy they need to keep working.", "Bees drive cars.", "Flowers are found near roads."], 1, "A gas station refuels cars. A flower’s nectar refuels a bee with energy. The comparison shows why planting flowers helps bees.", "What does a gas station give a car?")
    ],
    evidence: [
      "Explain how a forager bee helps her colony find food. Copy a sentence from Article 1 that supports your answer.",
      "Why do farmers pay to rent beehives? Copy a sentence from Article 2 that explains it.",
      "Using information from BOTH articles, explain why it matters that bees can communicate. Copy one sentence from each article."
    ],
    summary: "Write a 3–4 sentence summary that combines both articles: how honeybees share where food is, and why bees are important to farms and people."
  });

  // ---------------------------------------------------------------- week 34
  C.unit('reading', 34, {
    title: "The Dragon Who Sneezed Bubbles",
    genre: "fantasy",
    skill: "humor and fantasy",
    learn: [
      { h: "What makes it fantasy?", p: "Fantasy stories include things that could never happen in real life, such as talking animals, magic, or dragons. Even so, a good fantasy has rules that stay the same, and its characters have real feelings and problems readers understand." },
      { h: "How authors make us laugh", p: "Authors create humor with surprises, exaggeration (making something much bigger than it really is), silly comparisons, and characters who misunderstand each other. When something makes you smile, ask: What did the author do to make this funny? Humor can also help teach a lesson in a gentle way." }
    ],
    passage: [
      "In the kingdom of Puddleford, everyone knew two things. First, it rained six days out of seven. Second, on the longest night of winter, the royal dragon lit the Midwinter Bonfire, and the whole town danced around it until their toes were warm.",
      "This year, the royal dragon had a problem.",
      "His name was Bartholomew Thunderscale the Third, and he was as tall as the town bakery, with green scales the color of pickles. Three days before Midwinter, he caught a cold. And when Bartholomew sneezed, out came not fire but bubbles. Hundreds of shimmering, wobbling, rainbow-colored bubbles.",
      "“ACHOO!” A cloud of bubbles floated over the market. A goat wore one like a hat. The mayor got one stuck on his nose and walked around looking very surprised.",
      "“This is a disaster,” moaned Bartholomew, blowing his nose on a bedsheet. “A dragon without fire is like a teapot without tea. Like a duck without a quack. Like a sandwich without the middle part!”",
      "The king tried everything. The royal doctor prescribed hot pepper soup. Bartholomew drank nine gallons and sneezed bubbles that smelled like pepper. The royal wizard waved his wand and shouted magic words. Bartholomew sneezed bubbles that were shaped like wizards. The royal chef baked a hundred cinnamon buns, because the chef believed cinnamon buns fixed everything. They didn’t, but Bartholomew felt slightly better.",
      "On the morning of Midwinter, a girl named Wren knocked on the door of the dragon’s cave. She was the miller’s daughter, small and freckled, with a scarf so long it trailed behind her like a tail.",
      "“Excuse me,” she said. “I have been thinking.”",
      "Bartholomew sniffled. “Everyone has been thinking. Thinking has not helped.”",
      "“Well,” said Wren, “what if we don’t need fire this year? It rains here all the time. Fire is hard to keep lit anyway. But bubbles love rain.”",
      "Bartholomew blinked his huge golden eyes. “Go on.”",
      "So Wren ran through town with her very long scarf flapping. She asked the lamplighter for every lantern in Puddleford. She asked the children to bring candles in jars. That night, instead of a bonfire, the town square glowed with a thousand little lights.",
      "Then Bartholomew stepped into the square, took a deep breath of peppery air, and sneezed the biggest sneeze in the history of the kingdom.",
      "“AAAAAH-CHOOOOOOO!”",
      "Bubbles poured into the sky, thousands of them, as big as pumpkins and as small as peas. The lantern light shone through them, and they glowed pink and gold and blue as the soft rain bounced them higher. Children chased them. Grandmothers laughed until their bonnets fell off. The goat, wearing a bubble hat again, looked extremely pleased.",
      "When the last bubble finally popped, the king climbed onto a barrel. “Bartholomew,” he declared, “that was the finest Midwinter in a hundred years!”",
      "The dragon’s cheeks turned from pickle green to strawberry pink. “But I couldn’t do the one thing a dragon is supposed to do.”",
      "Wren tugged on his claw. “You did something better,” she said. “You did the thing only YOU could do.”",
      "The next week, Bartholomew’s cold went away, and his fire came back. But every Midwinter after that, the people of Puddleford asked for the same thing: lanterns, candles, and one enormous, glorious, bubbly sneeze."
    ],
    vocab: [
      ["shimmering", "shining with a soft light that seems to shake or wave"],
      ["prescribed", "told someone to take a medicine or treatment"],
      ["disaster", "something that goes terribly wrong"],
      ["declared", "said something in a strong, official way"],
      ["glorious", "wonderful and beautiful"]
    ],
    demo: {
      q: "Find one example of humor in the story and explain how the author makes it funny.",
      steps: [
        "Step 1: Find a funny moment. Bartholomew drinks nine gallons of hot pepper soup and then sneezes bubbles that smell like pepper.",
        "Step 2: Name the technique. “Nine gallons” is exaggeration, and the result is a surprise because the cure does not work at all; it just makes peppery bubbles.",
        "Step 3: Explain the effect. The reader expects the soup to help, so the silly result makes us laugh."
      ],
      a: "The author uses exaggeration and surprise: the dragon drinks nine gallons of soup, but the only result is pepper-smelling bubbles."
    },
    items: [
      Q("Which detail shows that this story is a fantasy?", ["A dragon sneezes bubbles.", "It rains a lot in Puddleford.", "A girl wears a long scarf.", "A chef bakes cinnamon buns."], 0, "Dragons and magical bubble sneezes could never happen in real life, so they mark the story as fantasy. Rain, scarves, and cinnamon buns are all real.", "Which choice could never really happen?"),
      Q("“A dragon without fire is like a teapot without tea. Like a duck without a quack. Like a sandwich without the middle part!” Why is this line funny?", ["It is a sad poem.", "It explains how dragons make fire.", "It uses a string of silly comparisons that get sillier.", "It gives directions for a sandwich."], 2, "The author piles up comparisons, and the last one, “a sandwich without the middle part,” is especially silly. Building a list that ends in a funny surprise is a common humor technique.", "Notice how the comparisons get sillier."),
      Q("What is Bartholomew’s problem?", ["He is too small.", "He caught a cold and sneezes bubbles instead of fire right before Midwinter.", "He lost his cave.", "He is afraid of rain."], 1, "The dragon is supposed to light the Midwinter Bonfire, but his cold makes him sneeze bubbles. That problem drives the whole story.", "What is the dragon supposed to do on Midwinter?"),
      Q("How does Wren solve the problem?", ["She finds a cure for the cold.", "She lights the bonfire herself.", "She asks the wizard for help.", "She turns the bubbles into a celebration with lanterns and candles."], 3, "Wren realizes bubbles love rain. She gathers lanterns and candles so the bubbles glow, turning the problem into something beautiful.", "What did Wren gather from the town?"),
      Q("Which is an example of EXAGGERATION?", ["Wren knocked on the cave door.", "The king climbed onto a barrel.", "Bartholomew drank nine gallons of pepper soup.", "Bartholomew’s cold went away the next week."], 2, "Nine gallons is a silly, huge amount of soup. Exaggeration makes something much bigger than normal to create humor.", "Which detail is stretched to a silly size?"),
      Q("What lesson does the story teach?", ["Something that seems like a weakness can become a special gift.", "Never catch a cold.", "Dragons should not live near towns.", "Rain ruins every party."], 0, "Wren tells Bartholomew he did “the thing only YOU could do.” His bubble sneeze, which he saw as a failure, became the town’s favorite tradition.", "Reread what Wren tells the dragon."),
      Q("In the story, “prescribed” means", ["cooked a meal", "sang a song", "cleaned a cave", "told someone to take a treatment"], 3, "The royal doctor prescribed hot pepper soup, meaning he told the dragon to take it as a treatment for his cold.", "What do doctors do when you are sick?"),
      Q("The king “declared” that it was the finest Midwinter. This means he", ["whispered it secretly", "said it in a strong, official way", "wrote it down and hid it", "asked a question"], 1, "To declare is to announce something firmly. The king climbs on a barrel so everyone can hear, which fits an official announcement.", "Why would the king climb on a barrel?"),
      Q("Why does Bartholomew’s face turn “from pickle green to strawberry pink”?", ["He is embarrassed but pleased by the praise.", "He is sick again.", "He ate strawberries.", "He is angry."], 0, "This funny comparison shows he is blushing. He is shy about the king’s praise because he still thinks he failed.", "What happens to your cheeks when someone praises you?"),
      Q("How does the goat add humor to the story?", ["It eats the cinnamon buns.", "It lights the bonfire.", "It wears a bubble like a hat and looks pleased.", "It talks to the king."], 2, "The goat wearing a bubble hat is a funny picture, and it shows up twice. Repeating a silly image is another way authors make readers laugh.", "Look for the goat in two places.")
    ],
    evidence: [
      "What makes Bartholomew feel like a failure? Explain and copy a sentence that shows his feelings.",
      "How does Wren help the dragon see himself differently? Copy the sentence where she explains it.",
      "Choose your favorite funny moment in the story. Explain what makes it funny and copy the sentence."
    ],
    summary: "Write a 3–4 sentence summary that tells the dragon’s problem, what the town tried, how Wren solved it, and how the story ends."
  });

  // ---------------------------------------------------------------- week 35
  C.unit('reading', 35, {
    title: "Seasons in Three Shapes",
    genre: "poem set (haiku, free verse, narrative poem)",
    skill: "poetry forms",
    learn: [
      { h: "Three kinds of poems", p: "A HAIKU is a tiny poem from Japan with three lines of 5, 7, and 5 syllables. It usually captures one moment in nature. FREE VERSE has no set rhythm or rhyme; the poet breaks lines wherever they sound and look best. A NARRATIVE POEM tells a story, with characters and events, often in rhyming stanzas." },
      { h: "Why form matters", p: "A poem’s form changes how it feels. A haiku is quick, like a snapshot. Free verse sounds like thoughtful speaking. A narrative poem moves like a story with a beginning, middle, and end. When you read, ask: Why did the poet choose this shape for this idea?" }
    ],
    passage: [
      "PART ONE: Four Georgia Haiku (each one has three lines of five, seven, and five syllables)",
      "Red clay after rain,\na robin tugs a long worm.\nThe whole yard listens.",
      "Peach on the counter,\nsun-warm, fuzzy, dripping sweet.\nJuly in my hand.",
      "First frost on the porch.\nMy breath makes small ghosts that fade.\nThe cat stays inside.",
      "Pine pollen drifts down,\nyellow dust on the windshield.\nGeorgia sneezes. Spring!",
      "PART TWO: What Grandma’s Hands Know (free verse)",
      "My grandmother’s hands\nare wrinkled like the map\nin Grandpa’s truck,\nfolded and unfolded\na thousand times.\n\nThey know how much flour\nwithout a measuring cup.\nThey know when the biscuits are ready\njust by tapping the tops.\nThey know how to braid my hair\nso tight it stays\nall week.\n\nThey are slower now.\nThey shake a little\nwhen she threads a needle,\nso I thread it for her,\nand she laughs\nand says my hands are learning.\n\nIn the garden\nthey pat the dirt\naround each tomato plant\nlike tucking a baby into bed.\nThey pull a weed\nand shake it at me,\npretending to scold,\nthen toss it in the bucket\nwith a wink.\n\nOn Sunday mornings\nthey fold together in the pew,\nquiet as two sparrows\nresting on a branch,\nand I fold mine\nthe same way.",
      "PART THREE: The Ballad of Hattie’s Kite (narrative poem)",
      "Young Hattie built a kite one spring\nof newspaper and string,\nwith a tail of Mama’s ribbon scraps,\nthe brightest, finest thing.\n\nShe ran it down to Miller’s Field\nwhere the March wind loved to blow,\nand up it climbed, and up it danced,\nwhile Hattie laughed below.\n\nBut then a gust came roaring by,\nthe string slid through her hand,\nand off her kite went, wild and free,\nacross the farmer’s land.\n\nShe chased it past the old red barn,\nshe chased it through the creek,\nshe chased it till her legs were mud\nand her breath came thin and weak.\n\nIt tangled in an oak tree’s arms\nso high she couldn’t climb,\nand Hattie sat down in the grass\nand cried a long, long time.\n\nThen up the road came Mr. Bell,\nwho was ninety if a day,\nwith a ladder balanced on his back\nand a smile on his face of gray.\n\n“I lost a kite myself,” he said,\n“when I was nine years old.\nIt hung up there till winter came\nand blew off in the cold.”\n\nHe climbed that ladder, rung by rung,\nhis knees as stiff as wood,\nand freed the kite and brought it down\nas gently as he could.\n\nNow every spring in Miller’s Field,\nwhen kites begin to fly,\nyou’ll see a girl and an old man\nboth smiling at the sky."
    ],
    vocab: [
      ["syllables", "the beats or parts of sound in a word"],
      ["wrinkled", "covered with small lines and folds"],
      ["braid", "to weave three strands of hair together"],
      ["gust", "a sudden, strong rush of wind"],
      ["tangled", "twisted and caught up so it is hard to pull free"]
    ],
    demo: {
      q: "Prove that “Red clay after rain” is a haiku.",
      steps: [
        "Step 1: Count the syllables in line 1: Red (1) clay (1) af-ter (2) rain (1) = 5.",
        "Step 2: Count line 2: a (1) rob-in (2) tugs (1) a (1) long (1) worm (1) = 7. Line 3: The (1) whole (1) yard (1) lis-tens (2) = 5.",
        "Step 3: Check the subject. It captures one quick moment in nature, a robin after rain."
      ],
      a: "It has three lines of 5, 7, and 5 syllables and captures one moment in nature, so it is a haiku."
    },
    items: [
      Q("How many syllables are in each line of a haiku?", ["7, 5, 7", "5, 7, 5", "4, 4, 4", "There is no rule."], 1, "A haiku has three lines: 5 syllables, then 7, then 5. Every haiku in Part One follows this pattern.", "Count the first haiku."),
      Q("Which BEST describes the free verse poem “What Grandma’s Hands Know”?", ["It rhymes in every stanza and has a steady beat.", "It has exactly three lines.", "It tells a story about a kite.", "It has lines of different lengths with no set rhyme or rhythm."], 3, "Free verse does not follow a rhyme or rhythm pattern. The poet breaks the lines wherever they sound and look best, like “all week.” on a line by itself.", "Does the poem rhyme?"),
      Q("Why is “The Ballad of Hattie’s Kite” a narrative poem?", ["It is only three lines long.", "It describes one moment in nature.", "It tells a story with characters, a problem, and an ending.", "It has no stanzas."], 2, "A narrative poem tells a story. Hattie loses her kite, chases it, and Mr. Bell helps her get it back. It has characters, events, and a resolution.", "Does the poem have a beginning, middle, and end?"),
      Q("In the haiku “Peach on the counter,” what does “July in my hand” mean?", ["The peach makes her feel like she is holding summer itself.", "She is holding a calendar.", "It is cold in July.", "She is waving her hand."], 0, "Holding the warm, sweet peach is like holding the feeling of July. Haiku often pack big feelings into a few small words.", "What season are peaches ripe?"),
      Q("In the free verse poem, why does the poet compare Grandma’s hands to a map?", ["Grandma likes to travel.", "Her hands show directions.", "The map belongs to Grandma.", "Her hands are folded and wrinkled like a map used many times."], 3, "A map folded “a thousand times” has many creases, just like wrinkled hands. The comparison suggests a long, well-used life.", "Picture an old, often-folded map."),
      Q("What does the speaker do at the end of “What Grandma’s Hands Know”?", ["She braids Grandma’s hair.", "She folds her hands the same way Grandma does in church.", "She bakes biscuits alone.", "She buys a new map."], 1, "On Sunday mornings, Grandma’s hands fold together in the pew, and the speaker folds hers the same way. It shows she is learning from her grandmother.", "Read the last stanza."),
      Q("In the narrative poem, a “gust” is", ["a sudden, strong rush of wind", "a type of kite", "a small creek", "a kind of tree"], 0, "A gust is a burst of wind. The gust is what pulled the string through Hattie’s hand and sent the kite flying away.", "What made the string slide through her hand?"),
      Q("The kite “tangled in an oak tree’s arms.” What does “tangled” mean here?", ["landed softly on the ground", "flew higher and higher", "got twisted and caught", "tore into pieces"], 2, "Tangled means twisted up and stuck. The kite was caught in the branches too high for Hattie to reach.", "Why couldn’t Hattie get it down?"),
      Q("Why does Mr. Bell help Hattie?", ["He wants to keep the kite.", "He lost a kite as a boy and remembers how that felt.", "Hattie’s mother paid him.", "He owns the oak tree."], 1, "Mr. Bell says he lost a kite when he was nine, and it stayed stuck until winter blew it away. He knows how Hattie feels, so he chooses to help.", "Read what Mr. Bell says."),
      Q("Which form would be BEST for a poet who wants to capture one quick moment, like a single snowflake landing?", ["a long narrative poem", "a play", "a persuasive essay", "a haiku"], 3, "A haiku is short like a snapshot, made to capture one moment in nature. A narrative poem would be better for a whole story.", "Which form is like a quick photograph?")
    ],
    evidence: [
      "Choose one haiku. Explain what moment it captures and which senses it uses. Copy the haiku.",
      "What do Grandma’s hands “know”? Name two things and copy the lines that show them.",
      "How does Hattie feel when the kite is stuck, and how does that change? Copy one line from before Mr. Bell arrives and one from the end."
    ],
    summary: "Write a 3–4 sentence summary that names the three poetry forms in this set and tells what each poem or group of poems is about."
  });

  // ---------------------------------------------------------------- week 36
  C.unit('reading', 36, {
    title: "Fog on the Ridge",
    genre: "adventure",
    skill: "plot and suspense in adventure stories",
    learn: [
      { h: "The shape of an adventure", p: "An adventure story puts characters in an exciting and sometimes dangerous situation. Its plot builds through rising action, where problems pile up, to a climax, the most tense moment. Then comes the falling action and resolution, when the problem is solved." },
      { h: "How authors build suspense", p: "Suspense is the nervous, can’t-stop-reading feeling of wanting to know what happens next. Authors build it with short sentences, a ticking clock, bad weather, sounds, and characters who must make hard choices. Notice where your heart beats faster as you read." }
    ],
    passage: [
      "The sign at the trailhead said Springer Mountain, the southern end of the Appalachian Trail, a footpath that runs more than two thousand miles from Georgia all the way to Maine. Twelve-year-old Josie Carter traced the words with her finger.",
      "“Someday I’m going to hike the whole thing,” she said.",
      "“Today we’re hiking about four miles,” said Dad, tightening his pack. “Then we’ll talk about Maine.”",
      "Her little brother Ben was already halfway up the path, his whistle bouncing on its cord around his neck. Mom had given each of them a whistle that morning. “Three blasts means help,” she had said. “Stay together. If you’re ever lost, stay put.”",
      "The morning was bright and cool. They followed the white paint marks, called blazes, that the trail used for directions. Ben counted every one. At the top, they ate peanut butter sandwiches on a big flat rock and looked out over waves of blue mountains.",
      "Then they took a side trail, marked with blue blazes, down toward a waterfall.",
      "That was when the fog rolled in.",
      "It came over the ridge like a gray blanket, silent and fast. In ten minutes, Josie could barely see the trees ten steps away. The air turned damp and cold.",
      "“Let’s head back,” Dad said. He turned on the slick, mossy rocks, and his boot slipped. He went down hard and grabbed his ankle with a groan.",
      "“Dad!” Ben cried.",
      "Dad tried to stand and sucked in his breath. “It’s sprained, I think. I can’t put weight on it.” He pulled out his phone and frowned. “No signal.”",
      "Josie’s heart pounded. The fog pressed around them. Somewhere below, the waterfall roared, but she couldn’t see it. It was already two o’clock, and the sun would set before six.",
      "“Okay,” Dad said, keeping his voice calm. “We’re not lost. We’re on the blue trail, and the main trail is just above us. Josie, do you remember that big flat rock where we ate lunch?”",
      "She nodded.",
      "“Phones sometimes get a signal up there. It’s only a few minutes uphill. Take my phone. Follow the blue blazes and nothing else. If you can’t see the next blaze, stop and blow your whistle three times. Ben stays with me.”",
      "Josie swallowed hard. Then she took the phone and started climbing.",
      "Every few steps, a blue blaze appeared out of the fog like a friend waving. Twice she had to stop and wait until she saw the next one. Her legs burned. Her breath came fast. Lord, help me find the way, she prayed. And she kept going.",
      "Then the big flat rock loomed out of the mist. Josie held the phone high. One bar. She called 911 and told them everything: Springer Mountain, the blue side trail to the waterfall, her dad’s ankle. The dispatcher’s voice was steady. “You did great. Rangers are on the way. Go back to your dad, follow the same blazes, and keep that whistle ready.”",
      "Going down was faster. When she reached Dad and Ben, Ben hugged her so hard she nearly toppled over.",
      "An hour later, they heard voices in the fog. Josie blew her whistle three times. Three blasts came back. Two rangers appeared with a stretcher, and soon Dad was being carried down the trail, joking that he finally had a ride.",
      "At the trailhead, the fog was lifting. The last sunlight turned the mountains gold.",
      "Dad squeezed Josie’s hand. “You know,” he said, “I think you might make it to Maine after all.”"
    ],
    vocab: [
      ["trailhead", "the place where a hiking trail begins"],
      ["blazes", "paint marks on trees or rocks that show hikers which way the trail goes"],
      ["sprained", "hurt by twisting or stretching the soft parts around a joint"],
      ["loomed", "appeared suddenly as a large, shadowy shape"],
      ["dispatcher", "a person who answers emergency calls and sends help"]
    ],
    demo: {
      q: "How does the author build suspense after Dad falls?",
      steps: [
        "Step 1: Look for problems piling up. Dad’s ankle is sprained, the phone has no signal, and fog hides the trail.",
        "Step 2: Look for a ticking clock. It is two o’clock, and the sun will set before six.",
        "Step 3: Look at sentence style and choices. Short sentences like “Her legs burned.” and Josie’s hard choice to climb alone make the reader nervous to know what happens."
      ],
      a: "The author builds suspense by piling up problems (injury, no signal, fog), adding a time limit before sunset, and using short sentences as Josie climbs alone."
    },
    items: [
      Q("What is the climax, or most tense moment, of the story?", ["The family eats sandwiches on the rock.", "Ben counts blazes.", "Josie climbs through the fog and finally gets one bar of signal to call for help.", "The fog lifts at the trailhead."], 2, "The climax is when the tension is highest and the problem turns toward being solved. Josie climbing alone and reaching the rock to call 911 is that moment.", "When is the reader most nervous?"),
      Q("Which detail creates a “ticking clock” that adds suspense?", ["It was already two o’clock, and the sun would set before six.", "Ben counted every blaze.", "They ate peanut butter sandwiches.", "The trail goes to Maine."], 0, "A time limit makes readers worry. With sunset coming, the family must get help before dark.", "Which detail involves time running out?"),
      Q("Why does Dad send Josie to the flat rock?", ["She wants to see the view.", "She left her sandwich there.", "The rangers live there.", "Phones sometimes get a signal there, so she can call for help."], 3, "Dad says phones “sometimes get a signal up there.” Since there was no signal by the waterfall, Josie must climb to call for help.", "What did Dad’s phone not have?"),
      Q("What does Mom’s rule “Three blasts means help” show at the end?", ["Whistles are just toys.", "The rangers use the whistle signal to find the family.", "Ben blows his whistle too much.", "Mom is on the trail."], 1, "When Josie blows three blasts, the rangers answer with three blasts and find them. Mom’s advice from the beginning pays off at the end.", "What happens when Josie blows the whistle?"),
      Q("How does Josie show courage?", ["She climbs alone through thick fog, follows the blazes carefully, and calls 911.", "She refuses to leave.", "She runs ahead without telling anyone.", "She waits for Dad to walk."], 0, "Josie is scared, her heart is pounding, but she still climbs through the fog and stays calm on the call. Courage means doing the right thing even when afraid.", "What hard task does Josie do?"),
      Q("In the story, “blazes” are", ["small fires", "hiking boots", "paint marks that show which way the trail goes", "waterfalls"], 2, "The story explains that blazes are “white paint marks” the trail uses for directions. The side trail used blue blazes. A blaze can mean a fire in other places, but not here.", "Reread the paragraph after they start hiking."),
      Q("“The big flat rock loomed out of the mist.” What does “loomed” mean?", ["disappeared slowly", "appeared suddenly as a large shadowy shape", "rolled downhill", "made a loud sound"], 1, "Loomed means appeared big and shadowy, often suddenly. In thick fog, the rock would seem to rise up out of nowhere.", "How would a rock look appearing out of fog?"),
      Q("Why does the author compare each blaze to “a friend waving”?", ["The blazes were painted by Josie’s friends.", "The blazes move.", "Josie is waving at the rangers.", "Each blaze makes Josie feel relieved and less alone in the fog."], 3, "Seeing a blaze means Josie is still on the right path, so it is comforting, like a friend saying “this way.”", "How would you feel seeing the next blaze in thick fog?"),
      Q("Which of Mom’s rules does the family follow when Dad is hurt?", ["They split up and wander to find a road.", "They ignore the whistles.", "They stay put, except for Josie’s short, careful trip on the marked trail.", "They hike to the waterfall."], 2, "Dad and Ben stay where they are, and Josie follows the blazes only, with a plan to stop and whistle if she cannot see one. This careful planning keeps everyone safe.", "Think about “stay put” and “stay together.”"),
      Q("What does Dad mean when he says, “I think you might make it to Maine after all”?", ["Josie showed the strength and good sense to someday hike the whole trail.", "They are going to Maine tomorrow.", "Josie got lost in Maine.", "Dad wants to move to Maine."], 0, "At the start, Josie dreams of hiking the whole trail to Maine. Dad’s words at the end show he is proud of her courage and believes she can do it.", "Connect this line to the beginning of the story.")
    ],
    evidence: [
      "How does the weather make the situation more dangerous? Copy a sentence that describes the fog.",
      "What helped Josie stay on the right path? Explain and copy a sentence that shows it.",
      "How did the advice Mom gave at the start help the family later? Copy a sentence from the beginning and one from the end."
    ],
    summary: "Write a 3–4 sentence summary of the adventure that tells the setting, what went wrong, how Josie got help, and how the story ends."
  });

  // ---------------------------------------------------------------- week 37
  C.unit('reading', 37, {
    title: "Libraries on the Move",
    genre: "informational",
    skill: "summarizing and review",
    learn: [
      { h: "What makes a good summary", p: "A summary tells the most important ideas of a text in your own words, in the same order the author used. It is much shorter than the original. A good summary includes the main idea and key details, but leaves out small details, opinions, and your own feelings." },
      { h: "A quick recipe", p: "Try this: (1) Write one sentence that states the main idea of the whole text. (2) Add one sentence for each section’s most important point. (3) Reread and cut anything that is only an interesting extra. Headings can help you find each section’s point." }
    ],
    passage: [
      "When the Library Comes to You",
      "For most of us, getting a library book means going to the library. But for many people in history, and many today, the library has had to travel to them. Over the past century, librarians have carried books by horse, mule, wagon, donkey, truck, and even boat, all to reach readers who could not reach a library.",
      "The Book Women of Kentucky",
      "In the 1930s, during the Great Depression, many families in the mountains of eastern Kentucky lived far from any town. Roads were rough or did not exist at all. Few schools had libraries, and many families owned only one or two books.",
      "In 1935, a government program called the Works Progress Administration started the Pack Horse Library Project. Its librarians, most of them women, rode horses and mules along mountain trails and up rocky creek beds, in summer heat and winter snow. Their saddlebags were stuffed with books and magazines. They delivered them to cabins, one-room schoolhouses, and community centers, then came back later to trade them for new ones.",
      "There were never enough books, so the librarians got creative. They repaired worn-out books and collected recipes, quilt patterns, and stories into handmade scrapbooks to pass around. Children waited eagerly for the book women, and some parents learned to read alongside their kids. The project ran until 1943.",
      "A Teacher and Two Donkeys",
      "In the country of Colombia, in South America, a teacher named Luis Soriano noticed that children in the small villages around his town had almost no books. So, in the late 1990s, he loaded books onto two donkeys, named Alfa and Beto, and set out on dusty trails. He called his traveling library the Biblioburro. When he arrived in a village, children gathered under the trees while he read aloud, and then each child chose a book to borrow. Over the years, his idea inspired people around the world.",
      "Bookmobiles Today",
      "In the United States, one of the first book wagons was started in 1905 by a librarian named Mary Lemist Titcomb in Washington County, Maryland. A horse-drawn wagon carried books to farm families across the county. Later, wagons were replaced by trucks and buses called bookmobiles.",
      "Today, bookmobiles still roll through many towns and cities. Some visit nursing homes, so older people who cannot drive can still enjoy a good mystery. Others park at summer camps, apartment buildings, or neighborhoods far from a branch library. Some carry computers, games, and story-time puppets. In some places, boats carry books to people on islands.",
      "Every one of these traveling libraries shares the same belief: a book can open a whole world, and every person deserves the chance to read one. Whether the books arrive by mule, donkey, or bus, the gift is the same. Someone cared enough to bring it."
    ],
    vocab: [
      ["century", "a period of one hundred years"],
      ["saddlebags", "bags hung on each side of a horse or mule to carry things"],
      ["eagerly", "in an excited way, wanting something very much"],
      ["inspired", "gave someone the idea or the desire to do something"],
      ["bookmobiles", "trucks or buses that work as traveling libraries"]
    ],
    demo: {
      q: "Write the first two sentences of a summary of this passage.",
      steps: [
        "Step 1: Find the main idea of the whole passage. The first section says librarians have carried books to readers who could not reach a library.",
        "Step 2: Write it in your own words: “For about a hundred years, people have found ways to bring library books to readers who live far from libraries.”",
        "Step 3: Add the key point of the first section with a heading: “In the 1930s, the Pack Horse librarians of Kentucky rode horses and mules over mountain trails to deliver books.”"
      ],
      a: "For about a hundred years, people have found ways to bring library books to readers far from libraries. In the 1930s, Kentucky’s Pack Horse librarians rode horses and mules over mountain trails to deliver books."
    },
    items: [
      Q("Which sentence BEST states the main idea of the whole passage?", ["Luis Soriano has two donkeys.", "Bookmobiles carry puppets.", "Kentucky has mountains.", "People have found many creative ways to bring library books to readers who cannot get to a library."], 3, "This sentence covers all the sections: the book women, the Biblioburro, and bookmobiles. The other choices are small details from just one part.", "Which choice fits every section?"),
      Q("Which detail is LEAST important to include in a summary?", ["The Pack Horse Library Project began in 1935 in Kentucky.", "Luis Soriano’s donkeys were named Alfa and Beto.", "Luis Soriano started a donkey library in Colombia.", "Bookmobiles still serve many communities today."], 1, "The donkeys’ names are fun, but they are not needed to understand the main points. A summary keeps big ideas and drops small extras.", "Which detail could you cut without losing a main point?"),
      Q("Why did the Kentucky librarians make scrapbooks?", ["There were never enough books, so they made more reading material.", "They did not like the books they had.", "Scrapbooks were required by law.", "To sell them in town."], 0, "The passage says, “There were never enough books, so the librarians got creative.” The handmade scrapbooks gave families more to read.", "Look for the word “so.”"),
      Q("What problem did Luis Soriano notice?", ["His donkeys were too tired.", "His school was closing.", "Children in nearby villages had almost no books.", "Nobody liked to read."], 2, "He noticed village children had almost no books, so he brought books to them on donkeys.", "Read the section “A Teacher and Two Donkeys.”"),
      Q("Which is the BEST summary of the section “Bookmobiles Today”?", ["Bookmobiles are fun.", "Modern bookmobiles bring books and more to nursing homes, camps, neighborhoods, and even islands.", "Some bookmobiles have puppets.", "Mary Lemist Titcomb started a book wagon."], 1, "This choice sums up the whole section in one sentence. “Bookmobiles are fun” is an opinion, and the puppets are a small detail. Titcomb is from the section before.", "Which choice covers the whole section?"),
      Q("What is one thing a good summary should NOT include?", ["the main idea", "key details in order", "the most important points of each section", "your own opinion about the text"], 3, "A summary reports what the author said, not what you think. Save your opinions for a response or review.", "Reread the first learn card."),
      Q("In the passage, a “century” is", ["ten years", "one thousand years", "one hundred years", "one year"], 2, "A century is one hundred years. The passage covers traveling libraries from the early 1900s to today, which is over a century.", "Think of the word “cent,” as in 100 cents in a dollar."),
      Q("The children waited “eagerly” for the book women. This means they waited", ["excitedly, really wanting the books", "angrily", "sleepily", "quietly, not caring"], 0, "Eagerly means with excitement and strong desire. The children were excited to get new books.", "How do you wait for something you really want?"),
      Q("How are the Pack Horse librarians and Luis Soriano ALIKE?", ["Both worked in Kentucky.", "Both drove buses.", "Both started in 1905.", "Both used animals to carry books to people who lived far from libraries."], 3, "The book women used horses and mules, and Soriano used donkeys. Both carried books to readers in hard-to-reach places.", "Compare how each carried books."),
      Q("What belief do all the traveling libraries share, according to the last paragraph?", ["Books should only be read at school.", "Every person deserves the chance to read.", "Donkeys are better than trucks.", "Libraries should close."], 1, "The last paragraph says they share the belief that “a book can open a whole world, and every person deserves the chance to read one.”", "Read the final paragraph.")
    ],
    evidence: [
      "Why was the Pack Horse Library Project needed in eastern Kentucky? Explain and copy a sentence that shows the problem.",
      "How did Luis Soriano make reading fun for village children? Copy a sentence that describes what happened when he arrived.",
      "Which traveling library do you find most inspiring? Explain why and copy a sentence about it."
    ],
    summary: "Write a 3–4 sentence summary of the whole passage. Start with the main idea, then give one key point about the Pack Horse librarians, the Biblioburro, and bookmobiles."
  });

})(typeof window !== 'undefined' ? window : globalThis);
