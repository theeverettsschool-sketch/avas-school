/* Social Studies bank, weeks 22-37: Grade 5 GSE preview (US history 1900s-today, civics, economics, geography). Original text. */
(function (root) {
  'use strict';
  var C = typeof require !== 'undefined' && typeof module !== 'undefined' ? require('./core.js') : root.Content;
  var T = C.T, qn = 0;
  // Wraps C.Q and rotates the option list a little for each new question, so the correct answer lands in varied positions.
  function Q(q, opts, a, why, hint) {
    var n = opts.length, s = (qn++ * 3 + 1) % n;
    var rotated = opts.slice(s).concat(opts.slice(0, s));
    return C.Q(q, rotated, (a - s + n) % n, why, hint);
  }

  // ============================== WEEK 22: THE 1920s ==============================
  C.unit('social', 22, {
    title: 'The Roaring Twenties',
    standard: 'SS5H2',
    learn: [
      { h: 'A decade of big changes', p: "After World War I ended in 1918, many Americans were ready for fun and new ideas. The 1920s are called the Roaring Twenties because life felt fast and loud. New inventions like cars and radios changed how people traveled and spent their free time." },
      { h: 'Heroes of the air and the road', p: "In 1927, Charles Lindbergh became the first person to fly alone, without stopping, across the Atlantic Ocean. Henry Ford used a moving assembly line to build his Model T car quickly and cheaply, so ordinary families could finally afford a car." },
      { h: 'The Harlem Renaissance', p: "Renaissance means a rebirth or new flowering of art and ideas. In Harlem, a neighborhood in New York City, African American writers, artists, and musicians created amazing work. Langston Hughes wrote poems about Black life, and Louis Armstrong became a jazz trumpet star." }
    ],
    passage: [
      "On a gray morning in May 1927, a young pilot named Charles Lindbergh climbed into a small silver plane called the Spirit of St. Louis. He took off from New York and flew alone for about 33 hours. He had no radio and very little sleep. When he landed in Paris, France, a huge crowd rushed onto the field to cheer. Lindbergh became one of the most famous people in the world, and many Americans began to believe that flying would someday be normal.",
      "On the ground, cars were changing life even more. Henry Ford sold his first Model T in 1908. Early cars were built slowly by hand, so they cost a lot. In 1913, Ford's factory started using a moving assembly line. Each worker stayed in one spot and did one job as the car rolled past. This saved so much time that the price of a Model T dropped again and again. By the 1920s, millions of families owned one, and they could drive to town, to church, or to visit relatives far away.",
      "Radios also filled American homes. In 1922, WSB in Atlanta became one of the first radio stations in the South. Families gathered around the radio to hear news, sports, preaching, and music.",
      "Much of that music was jazz. Jazz grew out of African American communities, especially in New Orleans. Louis Armstrong, a trumpet player from New Orleans, played jazz with so much joy and skill that people everywhere wanted to hear him. In Harlem, in New York City, a time called the Harlem Renaissance was blooming. Langston Hughes wrote poems about the hopes, struggles, and dreams of Black Americans. Their work showed the whole country how much African Americans added to American culture, even while many still faced unfair treatment."
    ],
    vocab: [
      ['assembly line', 'a way of building things where each worker does one job as the product moves past'],
      ['aviation', 'the flying of airplanes'],
      ['renaissance', 'a rebirth, or a new burst of art, music, and ideas'],
      ['jazz', 'a lively kind of music with strong rhythm that African American musicians created'],
      ['mass production', 'making large numbers of the same product quickly and cheaply'],
      ['culture', 'the art, music, beliefs, and ways of life of a group of people']
    ],
    demo: {
      q: 'Why did the assembly line make the Model T cheaper?',
      steps: ['Step 1: Before the assembly line, cars were built slowly by hand, and slow work costs more money.', 'Step 2: On the assembly line, each worker did one job again and again as the car moved past.', 'Step 3: That made building each car much faster, so Ford could make more cars in the same amount of time.', 'Step 4: Making cars faster and in bigger numbers lowered the cost of each one, so Ford could lower the price.'],
      a: 'The assembly line made building each car faster, which lowered the cost, so more families could afford one.'
    },
    items: [
      Q("What did Charles Lindbergh do in 1927?", ["Invented the airplane", "Flew alone without stopping across the Atlantic Ocean", "Built the first car", "Started a radio station"], 1, "Lindbergh was the first person to fly solo and nonstop across the Atlantic, from New York to Paris. The Wright brothers flew the first airplane years earlier, in 1903.", "Think about where he took off and where he landed."),
      Q("What was the name of Lindbergh's plane?", ["The Model T", "The Wright Flyer", "The Spirit of St. Louis", "The Paris Star"], 2, "His plane was the Spirit of St. Louis. The Wright Flyer was the Wright brothers' plane, and the Model T was Henry Ford's car."),
      Q("According to the passage, about how long did Lindbergh fly?", ["About 3 hours", "About 33 hours", "About 3 days", "About 10 hours"], 1, "The passage says he flew alone for about 33 hours, with very little sleep and no radio.", "Look in the first paragraph."),
      Q("What did Henry Ford's moving assembly line do?", ["Made each car take longer to build", "Let each worker do one job as the car rolled past", "Replaced all workers with robots", "Built airplanes"], 1, "On an assembly line each worker stays in one place and does one task as the product moves by. There were no robots in the 1920s; people did the work."),
      Q("Why did more families buy cars in the 1920s?", ["Cars became cheaper because of mass production", "The government gave everyone a free car", "Horses were against the law", "Cars could fly"], 0, "Mass production on the assembly line lowered the price of the Model T, so ordinary families could afford one."),
      Q("According to the passage, in what year did Ford sell his first Model T?", ["1927", "1913", "1908", "1920"], 2, "The passage says Ford sold his first Model T in 1908. The assembly line came later, in 1913.", "Paragraph 2 has two different years. Which one is the first car?"),
      Q("Which Georgia radio station does the passage mention?", ["WSB in Atlanta", "WGA in Savannah", "KDKA in Macon", "WLS in Augusta"], 0, "The passage says WSB in Atlanta began in 1922 and was one of the first radio stations in the South."),
      Q("What was the Harlem Renaissance?", ["A war in New York", "A burst of African American art, writing, and music in Harlem", "A new kind of car", "A famous airplane race"], 1, "Renaissance means rebirth. In Harlem, Black writers, artists, and musicians created a flowering of new work in the 1920s."),
      Q("Harlem is a neighborhood in which city?", ["Atlanta", "Chicago", "New Orleans", "New York City"], 3, "Harlem is part of New York City. New Orleans is where jazz grew up and where Louis Armstrong was from, which can make that answer tempting."),
      Q("Langston Hughes is best known as a...", ["Poet", "Pilot", "Car maker", "Baseball player"], 0, "Langston Hughes was a poet and writer of the Harlem Renaissance. He wrote about the lives and dreams of Black Americans."),
      Q("Louis Armstrong was famous for playing what?", ["The piano in an orchestra", "Jazz on the trumpet", "Country music on the guitar", "The organ at church"], 1, "Louis Armstrong was a jazz trumpet player and singer from New Orleans. His joyful playing made him a star around the world."),
      Q("According to the passage, where did jazz especially grow up?", ["Paris", "Atlanta", "New Orleans", "Detroit"], 2, "The passage says jazz grew out of African American communities, especially in New Orleans."),
      Q("Why are the 1920s called the Roaring Twenties?", ["Because there were many lions", "Because life felt fast, loud, and exciting with new inventions and music", "Because it was a time of war", "Because everyone was poor"], 1, "The nickname comes from the busy, noisy, exciting feel of the decade: cars, radios, jazz, and new fashions."),
      Q("What does the passage say the work of Hughes and Armstrong showed the country?", ["That cars were dangerous", "How much African Americans added to American culture", "That jazz was only for New York", "That flying was easy"], 1, "The last paragraph says their work showed how much African Americans added to American culture, even though many still faced unfair treatment."),
      Q("Which invention let families hear news and music at home in the 1920s?", ["Television", "The radio", "The internet", "The telephone app"], 1, "Radio became popular in the 1920s. Television did not become common in homes until around the 1950s, and the internet came much later.")
    ],
    activities: [
      { title: 'Roaring Twenties map', time: '25 min',
        materials: ['world map or printed outline map', 'colored pencils', 'string or yarn', 'tape'],
        steps: ['Find New York City on the map and mark it with a star.', 'Find Paris, France, and mark it with a star.', 'Tape a piece of string from New York to Paris to show Lindbergh\'s flight path across the Atlantic Ocean.', 'Find New Orleans and draw a small trumpet next to it for Louis Armstrong.', 'Find Detroit, Michigan, where Ford built cars, and draw a small car.', 'Find Atlanta and draw a radio for WSB.'],
        observe: 'Look at the string from New York to Paris. Why do you think people thought Lindbergh\'s flight was so brave? Use what you see on the map in your answer.' },
      { title: 'Build an assembly line', time: '20 min',
        materials: ['paper', 'crayons or markers', 'a timer', 'a family helper or two'],
        steps: ['Pick a simple drawing to make, like a car with 4 parts: body, 2 wheels, window, and color.', 'Round 1: Draw 3 whole cars by yourself while someone times you.', 'Round 2: Set up an assembly line. One person draws the body, the next adds wheels, the next adds the window and color.', 'Pass papers down the line and time how long 3 cars take.', 'Compare the two times.'],
        observe: 'Which round was faster? Explain how this shows why Henry Ford\'s assembly line lowered the price of the Model T.' }
    ],
    think: [
      'Which change from the 1920s do you think mattered most: airplanes, cars, radio, or jazz and art from the Harlem Renaissance? Give two reasons for your choice.',
      'How would your family\'s week be different if you had no car? Use what you learned about the Model T to explain why cars changed life so much.'
    ]
  });

  // ============================== WEEK 23: GREAT DEPRESSION AND NEW DEAL ==============================
  C.unit('social', 23, {
    title: 'The Great Depression and the New Deal',
    standard: 'SS5H3',
    learn: [
      { h: 'The crash and the Depression', p: "In October 1929, the stock market crashed, which means the value of shares in companies fell very fast. Banks and businesses closed, and millions of people lost their jobs. This hard time lasted through the 1930s and is called the Great Depression." },
      { h: 'FDR and the New Deal', p: "Franklin D. Roosevelt, often called FDR, became president in 1933. He started the New Deal, a set of government programs to give people jobs, help farmers, and make banks safer. He also spoke to Americans on the radio in friendly talks called fireside chats." },
      { h: 'FDR and Georgia', p: "FDR had polio, an illness that left him unable to walk without help. He came to Warm Springs, Georgia, because swimming in its warm spring water made him feel stronger. He built a small home there called the Little White House, and he died there in 1945." }
    ],
    passage: [
      "In the 1920s, many Americans bought shares of companies on the stock market, hoping to get rich. In October 1929, prices fell suddenly. People rushed to sell, and prices fell even more. This was the stock market crash. Many banks had lent money that could not be paid back, so they closed, and families lost their savings. Factories and stores shut down. By 1933, about one out of every four workers had no job.",
      "Life was hard everywhere. Some families lost their homes. People waited in long lines for bread and soup. On the Great Plains, years of drought and strong winds blew dry soil into huge dust storms. This area became known as the Dust Bowl. In Georgia, many farmers were already struggling because cotton prices were low and a beetle called the boll weevil had damaged their crops.",
      "In 1932, Americans elected Franklin D. Roosevelt as president. He promised a New Deal. Congress created many new programs. The Civilian Conservation Corps, or CCC, hired young men to plant trees, fight erosion, and build parks. CCC workers helped build some of Georgia's state parks. The Tennessee Valley Authority built dams that controlled floods and made electricity. In 1935, the Social Security Act began giving money to older people who could no longer work.",
      "FDR had a special love for Georgia. He first visited Warm Springs in 1924, hoping the warm mineral water would help his legs, which polio had weakened. He later built a cottage there, which people called the Little White House. While visiting farm families nearby, he saw that many homes had no electricity. That helped convince him to bring power lines to rural areas across the country. FDR died at the Little White House in April 1945. Today you can visit it as a Georgia historic site."
    ],
    vocab: [
      ['depression', 'a long time when business is very slow and many people lose their jobs'],
      ['stock market', 'a place where people buy and sell shares, or small pieces, of companies'],
      ['unemployment', 'not having a job when you want one'],
      ['drought', 'a long time with little or no rain'],
      ['New Deal', 'President Franklin Roosevelt\'s programs to help Americans during the Great Depression'],
      ['rural', 'in the countryside, away from cities']
    ],
    demo: {
      q: 'How did the stock market crash lead to people losing their jobs?',
      steps: ['Step 1: When the stock market crashed, many people lost money and could not repay loans.', 'Step 2: Banks that had lent that money ran out of cash and closed, so families lost savings.', 'Step 3: With less money, people bought fewer things.', 'Step 4: When stores and factories sold less, they cut workers or closed, so people lost jobs.'],
      a: 'The crash caused banks to fail and people to spend less, so businesses closed and workers lost their jobs.'
    },
    items: [
      Q("When did the stock market crash that began the Great Depression?", ["July 1919", "October 1929", "December 1941", "March 1933"], 1, "The crash happened in October 1929. March 1933 is when FDR became president, and December 1941 is Pearl Harbor."),
      Q("According to the passage, by 1933 about how many workers had no job?", ["One out of every ten", "One out of every four", "Half of all workers", "Almost none"], 1, "The passage says about one out of every four workers was unemployed by 1933.", "Look at the end of paragraph 1."),
      Q("What was the Dust Bowl?", ["A football game", "An area of the Great Plains hit by drought and huge dust storms", "A New Deal program", "A bank in Georgia"], 1, "Drought and wind blew dry soil into giant dust storms on the Great Plains in the 1930s, so the area was called the Dust Bowl."),
      Q("According to the passage, what was hurting Georgia farmers?", ["Too much rain and high prices", "Low cotton prices and the boll weevil", "The Dust Bowl", "Too many tractors"], 1, "The passage says Georgia farmers struggled with low cotton prices and the boll weevil, a beetle that damaged cotton crops. The Dust Bowl was on the Great Plains, not in Georgia."),
      Q("Who was president during most of the Great Depression and started the New Deal?", ["Herbert Hoover", "Franklin D. Roosevelt", "Harry Truman", "Woodrow Wilson"], 1, "Franklin D. Roosevelt, or FDR, was elected in 1932 and started the New Deal. Herbert Hoover was president when the crash happened."),
      Q("What was the New Deal?", ["A trade with England", "A set of government programs to create jobs and help people during the Depression", "A new kind of money", "A treaty that ended a war"], 1, "The New Deal was FDR's group of programs to give jobs, help farmers, protect banks, and help older people."),
      Q("What did the CCC do?", ["Hired young men to plant trees and build parks", "Built cars", "Ran radio stations", "Sold stocks"], 0, "The Civilian Conservation Corps put young men to work outdoors planting trees, fighting erosion, and building parks, including parts of some Georgia state parks."),
      Q("What did the Tennessee Valley Authority (TVA) build?", ["Railroads", "Dams for flood control and electricity", "Schools", "Airplanes"], 1, "The TVA built dams on rivers in the Tennessee Valley to control floods and make electricity for the region."),
      Q("What did the Social Security Act of 1935 begin?", ["Free cars for families", "Money for older people who could no longer work", "A new army", "The stock market"], 1, "Social Security began paying money to older people after they stopped working. It still exists today."),
      Q("Why did FDR first come to Warm Springs, Georgia?", ["To go to college", "He hoped the warm mineral water would help his legs weakened by polio", "To run for governor", "To build a dam"], 1, "Polio had weakened FDR's legs. Swimming in the warm spring water at Warm Springs helped him feel stronger."),
      Q("What is the Little White House?", ["The president's home in Washington, D.C.", "FDR's cottage in Warm Springs, Georgia", "A New Deal office", "A school in Atlanta"], 1, "The Little White House is the cottage FDR built in Warm Springs. The real White House is in Washington, D.C."),
      Q("According to the passage, what did FDR notice while visiting farm families near Warm Springs?", ["Their homes had no electricity", "They all had new cars", "They had too much cotton", "They lived in big cities"], 0, "The passage says many rural homes had no electricity, which helped convince FDR to bring power lines to rural areas."),
      Q("When and where did FDR die?", ["1933 in New York", "April 1945 at the Little White House in Georgia", "1929 in Washington, D.C.", "1950 in Atlanta"], 1, "FDR died in April 1945 at his Little White House in Warm Springs, Georgia, just before World War II ended."),
      Q("What were FDR's fireside chats?", ["Campfire parties", "Friendly radio talks to the American people", "Meetings with farmers", "Cooking shows"], 1, "FDR spoke on the radio in calm, friendly talks called fireside chats to explain his plans and give Americans hope."),
      Q("Which word means a long time with little or no rain?", ["Depression", "Drought", "Erosion", "Rural"], 1, "A drought is a long dry time. Drought helped cause the Dust Bowl on the Great Plains.")
    ],
    activities: [
      { title: 'Interview about hard times', time: '25 min',
        materials: ['notebook', 'pencil', 'a grandparent or older relative (in person or by phone)'],
        steps: ['Explain that you are learning about the Great Depression of the 1930s.', 'Ask if anyone in your family told stories about those years, or about another time when money was tight.', 'Ask: How did people save money or help each other?', 'Ask: What did people do for fun when they had little money?', 'Write down two things you learned in your own words.'],
        observe: 'What is one way families in hard times helped each other? How is that like or unlike something your family does today?' },
      { title: 'Warm Springs map and timeline', time: '20 min',
        materials: ['Georgia map (printed or drawn)', 'paper', 'ruler', 'colored pencils'],
        steps: ['Find Warm Springs on a Georgia map. It is in west-central Georgia, southwest of Atlanta.', 'Mark Warm Springs and Atlanta with dots and label them.', 'On paper, draw a timeline from 1920 to 1950.', 'Add these dates: 1924 FDR first visits Warm Springs; 1929 stock market crash; 1933 FDR becomes president; 1935 Social Security Act; 1945 FDR dies at the Little White House.', 'Draw a small picture for each event.'],
        observe: 'Looking at your timeline, how many years did FDR know Warm Springs before he became president? Why do you think Georgia mattered to him?' }
    ],
    think: [
      'If you could choose one New Deal program to explain to a friend, which would it be? Tell what it did and why it helped people during the Great Depression.',
      'FDR saw that farm homes near Warm Springs had no electricity. How can seeing a problem with your own eyes change what a leader decides to do? Use FDR as your example.'
    ]
  });

  // ============================== WEEK 24: WORLD WAR II, PART 1 ==============================
  C.unit('social', 24, {
    title: 'World War II: Pearl Harbor and the Home Front',
    standard: 'SS5H4',
    learn: [
      { h: 'Why the war started', p: "In the 1930s, dictators took power in Germany, Italy, and Japan. A dictator is a ruler with total power who does not let people vote freely. Adolf Hitler of Germany invaded Poland in 1939, and World War II began in Europe. Germany, Italy, and Japan were called the Axis Powers." },
      { h: 'Pearl Harbor', p: "At first, the United States stayed out of the fighting. Then on December 7, 1941, Japan made a surprise attack on the US Navy base at Pearl Harbor, Hawaii. The next day, the United States declared war on Japan and joined the Allies, including Great Britain and the Soviet Union." },
      { h: 'The home front', p: "The home front means the people and work at home during a war. Americans rationed food and gasoline, planted victory gardens, collected scrap metal, and bought war bonds. Millions of women went to work in factories, building planes, ships, and tanks." }
    ],
    passage: [
      "During the 1930s, the Great Depression hurt countries all over the world. In some places, angry and hungry people followed leaders who promised to make their nations powerful again. Adolf Hitler became the dictator of Germany. Benito Mussolini ruled Italy. Military leaders took control of Japan. These countries began taking land from their neighbors. In September 1939, Germany invaded Poland, and Great Britain and France declared war on Germany. World War II had begun.",
      "Most Americans did not want to fight another war so soon after World War I. That changed on the morning of December 7, 1941. Japanese planes made a surprise attack on American ships at Pearl Harbor, Hawaii. More than 2,400 Americans were killed. The next day, President Franklin Roosevelt asked Congress to declare war, and Congress agreed. The United States joined the Allies.",
      "Winning the war took everyone, not just soldiers. Factories that made cars switched to making tanks and airplanes. Because so many men went to fight, millions of women took factory jobs for the first time. A poster character named Rosie the Riveter, a strong woman in a work shirt, became a symbol of these workers.",
      "Families at home helped, too. The government rationed, or limited, things like sugar, meat, gasoline, and rubber tires, so there would be enough for the troops. Each family got ration books with stamps they used to buy those items. People planted victory gardens to grow their own vegetables, collected scrap metal, and bought war bonds to lend money to the government.",
      "Georgia did its part. Soldiers trained at Fort Benning near Columbus. Shipyards in Savannah and Brunswick built cargo ships called Liberty ships. In Marietta, thousands of workers at the Bell Aircraft plant built huge B-29 bombers."
    ],
    vocab: [
      ['dictator', 'a ruler who has total power and does not let people vote freely'],
      ['Axis Powers', 'Germany, Italy, and Japan, the countries that fought against the Allies in World War II'],
      ['Allies', 'the countries, including the US, Great Britain, and the Soviet Union, that fought against the Axis'],
      ['ration', 'to limit how much of something each person can get, so there is enough to go around'],
      ['home front', 'the people and work at home that support a country during a war'],
      ['war bond', 'a paper you buy that lends money to the government, which pays you back later']
    ],
    demo: {
      q: 'Why did the government ration gasoline and rubber tires during World War II?',
      steps: ['Step 1: Think about what the military needed: trucks, tanks, jeeps, and airplanes.', 'Step 2: Those machines run on fuel and use rubber for tires and parts.', 'Step 3: If families used as much as they wanted, there might not be enough left for the troops.', 'Step 4: Rationing limited how much each family could buy, which saved more for the war.'],
      a: 'Rationing saved gasoline and rubber for the military so soldiers would have what they needed.'
    },
    items: [
      Q("What event began World War II in Europe in 1939?", ["Japan attacked Pearl Harbor", "Germany invaded Poland", "The stock market crashed", "Italy invaded France"], 1, "Germany's invasion of Poland in September 1939 led Britain and France to declare war. Pearl Harbor came later, in 1941, and brought the US into the war."),
      Q("Who was the dictator of Germany during World War II?", ["Benito Mussolini", "Winston Churchill", "Adolf Hitler", "Joseph Stalin"], 2, "Adolf Hitler ruled Germany. Mussolini ruled Italy, Churchill led Great Britain, and Stalin led the Soviet Union."),
      Q("Which countries made up the Axis Powers?", ["Germany, Italy, and Japan", "The US, Britain, and France", "Canada, Mexico, and the US", "Germany, Britain, and Poland"], 0, "The Axis Powers were Germany, Italy, and Japan. The US, Britain, and the Soviet Union were among the Allies."),
      Q("When did Japan attack Pearl Harbor?", ["December 7, 1941", "July 4, 1942", "September 1, 1939", "June 6, 1944"], 0, "Japan attacked Pearl Harbor on December 7, 1941. June 6, 1944, is D-Day, and September 1, 1939, is when Germany invaded Poland."),
      Q("Where is Pearl Harbor?", ["California", "Hawaii", "Japan", "Alaska"], 1, "Pearl Harbor is a US Navy base in Hawaii, in the Pacific Ocean."),
      Q("What happened the day after the attack on Pearl Harbor?", ["Japan surrendered", "The US declared war on Japan", "The war ended", "Germany joined the Allies"], 1, "President Roosevelt asked Congress to declare war, and on December 8, 1941, Congress declared war on Japan."),
      Q("According to the passage, how many Americans were killed at Pearl Harbor?", ["About 240", "More than 2,400", "About 24,000", "None"], 1, "The passage says more than 2,400 Americans were killed in the attack.", "Check paragraph 2."),
      Q("What does it mean to ration something?", ["To sell it for a high price", "To limit how much each person can get", "To throw it away", "To make more of it"], 1, "Rationing limits how much each person or family can buy so there is enough to share, especially for soldiers."),
      Q("Who was Rosie the Riveter?", ["A famous general", "A poster character who stood for women working in factories", "A nurse in Hawaii", "A pilot"], 1, "Rosie the Riveter was a poster character showing a strong woman worker. She stood for the millions of real women who built planes and ships."),
      Q("What was a victory garden?", ["A garden of flowers for soldiers' graves", "A home vegetable garden that helped save food for the war", "A park in Washington", "A prize for winning a battle"], 1, "Families grew their own vegetables in victory gardens so more of the country's food could go to the troops."),
      Q("Why did people buy war bonds?", ["To lend money to the government to pay for the war", "To get free food", "To join the army", "To buy a car"], 0, "A war bond lends money to the government. The government used it for the war and paid people back later."),
      Q("According to the passage, what did workers build at the Bell Aircraft plant in Marietta, Georgia?", ["Tanks", "Liberty ships", "B-29 bombers", "Model T cars"], 2, "The passage says Marietta workers built huge B-29 bombers. Liberty ships were built in Savannah and Brunswick.", "Look at the last paragraph."),
      Q("According to the passage, where did soldiers train in Georgia?", ["Fort Benning near Columbus", "Warm Springs", "Pearl Harbor", "Atlanta's radio station"], 0, "The passage says soldiers trained at Fort Benning near Columbus, Georgia."),
      Q("Why did so many women take factory jobs during the war?", ["Factories closed", "Many men had left to fight, so workers were needed", "Women were not allowed in schools", "The war was in America"], 1, "With millions of men in the military, factories needed workers to build weapons and supplies, so many women stepped in."),
      Q("What does home front mean?", ["The front porch of a house", "The people and work at home that support a country in a war", "The front line of a battle", "A military base"], 1, "The home front is everything happening at home to support the war, like rationing, factory work, and victory gardens.")
    ],
    activities: [
      { title: 'Make a ration book', time: '25 min',
        materials: ['paper', 'scissors', 'markers', 'stapler'],
        steps: ['Fold two sheets of paper in half and staple them to make a small booklet.', 'Write My Ration Book and your family name on the cover.', 'Inside, draw rows of small stamps labeled SUGAR, MEAT, GAS, and SHOES.', 'Give each family member a set number of stamps for the week.', 'For one day, pretend you must give up a stamp to have a sweet treat or take a car trip.'],
        observe: 'How did it feel to have to choose how to use your stamps? Why were families during World War II willing to accept rationing?' },
      { title: 'World War II map', time: '20 min',
        materials: ['world map', 'sticky notes or small paper squares', 'pencil', 'tape'],
        steps: ['Put a sticky note on Germany, Italy, and Japan labeled AXIS.', 'Put sticky notes on the United States, Great Britain, and the Soviet Union labeled ALLIES.', 'Find Pearl Harbor in Hawaii and mark it with a red dot.', 'Find Poland and write 1939.', 'Find Georgia and write Fort Benning, Savannah, and Marietta.'],
        observe: 'Look at how far Hawaii is from the rest of the United States. Why do you think the attack on Pearl Harbor surprised so many Americans?' }
    ],
    think: [
      'Which home front job do you think helped the war effort the most: factory work, victory gardens, rationing, or buying war bonds? Explain your thinking with at least one reason.',
      'Why do you think the attack on Pearl Harbor changed the minds of Americans who did not want to fight? Use details from the lesson.'
    ]
  });

  // ============================== WEEK 25: WORLD WAR II, PART 2 ==============================
  C.unit('social', 25, {
    title: 'World War II: D-Day and Victory',
    standard: 'SS5H4',
    learn: [
      { h: 'D-Day', p: "On June 6, 1944, Allied soldiers crossed the English Channel and landed on the beaches of Normandy, France. This huge invasion is called D-Day. It was led by American General Dwight D. Eisenhower and began the push to free Europe from Nazi Germany." },
      { h: 'The war ends', p: "Germany surrendered in May 1945. Japan kept fighting until the United States dropped atomic bombs on the Japanese cities of Hiroshima and Nagasaki in August 1945. Japan then surrendered, and the war ended in 1945." },
      { h: 'Major leaders', p: "Allied leaders included Franklin Roosevelt and then Harry Truman of the US, Winston Churchill of Great Britain, and Joseph Stalin of the Soviet Union. Axis leaders included Adolf Hitler of Germany, Benito Mussolini of Italy, and Emperor Hirohito and General Hideki Tojo of Japan." }
    ],
    passage: [
      "By 1944, Germany controlled much of Europe. The Allies planned a giant invasion to take it back. Before dawn on June 6, 1944, thousands of ships and airplanes crossed the English Channel from Great Britain. Soldiers from the United States, Great Britain, Canada, and other Allied nations waded onto the beaches of Normandy, France, while enemy guns fired from the cliffs. This day is called D-Day. Many soldiers died, but the Allies won a foothold, or a safe place to stand, in France. General Dwight D. Eisenhower led the whole operation.",
      "Over the next months, Allied armies pushed toward Germany from the west, while the Soviet army pushed from the east. As soldiers moved through Europe, they found prison camps where the Nazis had held and killed huge numbers of people. Hitler's government had murdered about six million Jewish people, along with many others. This terrible event is called the Holocaust. Remembering it helps people stand against hatred.",
      "President Roosevelt died in April 1945, at the Little White House in Warm Springs, Georgia. Vice President Harry Truman became president. A few weeks later, in May 1945, Germany surrendered. Americans celebrated V-E Day, which means Victory in Europe Day.",
      "The war with Japan went on in the Pacific Ocean. American forces fought their way closer to Japan, island by island. In August 1945, President Truman decided to use a powerful new weapon, the atomic bomb. The United States dropped atomic bombs on the cities of Hiroshima and Nagasaki. Japan surrendered soon after, and World War II was finally over. It was the largest war in history, and about 400,000 Americans gave their lives in it."
    ],
    vocab: [
      ['invasion', 'when an army enters another place to attack or take control of it'],
      ['D-Day', 'June 6, 1944, when Allied soldiers landed in Normandy, France'],
      ['surrender', 'to give up and stop fighting'],
      ['Holocaust', 'the murder of about six million Jewish people and many others by Nazi Germany'],
      ['atomic bomb', 'an extremely powerful weapon that gets its energy from splitting tiny atoms'],
      ['foothold', 'a safe place to stand that lets you move forward']
    ],
    demo: {
      q: 'Why did the Allies need D-Day to succeed?',
      steps: ['Step 1: Germany controlled most of western Europe, including France.', 'Step 2: To defeat Germany, Allied armies had to get onto the European mainland.', 'Step 3: Landing in Normandy gave them a foothold in France.', 'Step 4: From there they could push east toward Germany while the Soviets pushed west.'],
      a: 'D-Day gave the Allies a foothold in France so they could push toward Germany and free Europe.'
    },
    items: [
      Q("What was D-Day?", ["The day Japan attacked Pearl Harbor", "The Allied landing on the beaches of Normandy, France", "The day Germany surrendered", "The day the atomic bomb was dropped"], 1, "D-Day, June 6, 1944, was the huge Allied landing in Normandy, France. Pearl Harbor was in 1941, and Germany surrendered in May 1945."),
      Q("On what date was D-Day?", ["June 6, 1944", "December 7, 1941", "May 8, 1945", "August 6, 1945"], 0, "D-Day was June 6, 1944. December 7, 1941, was Pearl Harbor."),
      Q("Who led the D-Day invasion?", ["Douglas MacArthur", "Dwight D. Eisenhower", "Harry Truman", "Winston Churchill"], 1, "General Dwight D. Eisenhower commanded the Allied forces on D-Day. He later became president of the United States."),
      Q("According to the passage, which body of water did the Allies cross on D-Day?", ["The Pacific Ocean", "The Mediterranean Sea", "The English Channel", "The Gulf of Mexico"], 2, "The passage says ships and airplanes crossed the English Channel from Great Britain to France.", "Look at paragraph 1."),
      Q("According to the passage, which countries' soldiers landed on D-Day?", ["Only American soldiers", "Soldiers from the US, Great Britain, Canada, and other Allies", "Japanese soldiers", "Only French soldiers"], 1, "The passage lists soldiers from the United States, Great Britain, Canada, and other Allied nations."),
      Q("What was the Holocaust?", ["A famous battle in France", "Nazi Germany's murder of about six million Jewish people and many others", "A peace treaty", "A new weapon"], 1, "The Holocaust was the Nazis' killing of about six million Jewish people and millions of others. Remembering it helps people stand against hatred."),
      Q("Who became president when Franklin Roosevelt died in 1945?", ["Dwight Eisenhower", "Harry Truman", "John F. Kennedy", "Herbert Hoover"], 1, "Vice President Harry Truman became president in April 1945. Eisenhower became president later, in 1953."),
      Q("What does V-E Day stand for?", ["Victory over Enemies Day", "Victory in Europe Day", "Veterans of England Day", "Victory Everywhere Day"], 1, "V-E Day means Victory in Europe Day, celebrated when Germany surrendered in May 1945."),
      Q("Why did the war go on after Germany surrendered?", ["Italy kept fighting", "Japan had not surrendered yet", "The Soviet Union attacked the US", "France kept fighting"], 1, "Japan was still fighting in the Pacific. The war ended only after Japan surrendered in August 1945."),
      Q("Which two Japanese cities were hit by atomic bombs?", ["Tokyo and Kyoto", "Hiroshima and Nagasaki", "Osaka and Tokyo", "Pearl Harbor and Tokyo"], 1, "The US dropped atomic bombs on Hiroshima and Nagasaki in August 1945. Pearl Harbor is in Hawaii, not Japan."),
      Q("Who led Great Britain during most of World War II?", ["Joseph Stalin", "Winston Churchill", "Adolf Hitler", "Hideki Tojo"], 1, "Winston Churchill was Britain's prime minister. Stalin led the Soviet Union, and Tojo was a military leader of Japan."),
      Q("Which leader was on the Allied side?", ["Benito Mussolini", "Hideki Tojo", "Joseph Stalin", "Adolf Hitler"], 2, "Joseph Stalin led the Soviet Union, one of the Allies. Mussolini, Tojo, and Hitler were Axis leaders."),
      Q("According to the passage, where did President Roosevelt die?", ["Washington, D.C.", "Normandy, France", "The Little White House in Warm Springs, Georgia", "New York City"], 2, "The passage says FDR died in April 1945 at the Little White House in Warm Springs, Georgia."),
      Q("According to the passage, how did American forces move toward Japan?", ["By crossing the English Channel", "Island by island across the Pacific", "By train through Russia", "They never moved toward Japan"], 1, "The passage says American forces fought their way closer to Japan island by island in the Pacific Ocean."),
      Q("What does surrender mean?", ["To win a battle", "To give up and stop fighting", "To build a new army", "To make a treaty with friends"], 1, "To surrender is to give up. Germany surrendered in May 1945 and Japan in August 1945.")
    ],
    activities: [
      { title: 'World War II timeline', time: '25 min',
        materials: ['long strip of paper or taped-together sheets', 'ruler', 'markers'],
        steps: ['Draw a line and mark the years 1939 to 1945 evenly along it.', 'Add: September 1939 Germany invades Poland.', 'Add: December 7, 1941 Pearl Harbor attack.', 'Add: June 6, 1944 D-Day.', 'Add: April 1945 FDR dies in Warm Springs; May 1945 V-E Day.', 'Add: August 1945 Japan surrenders. Draw a small picture by each event.'],
        observe: 'How many years did the US fight in World War II? How many years did the whole war last? Explain how you figured it out from your timeline.' },
      { title: 'Model of the D-Day beach', time: '30 min',
        materials: ['baking pan or shoebox lid', 'sand or brown paper', 'blue paper or blue construction paper', 'small blocks or toys', 'a parent to help'],
        steps: ['Lay blue paper on one end of the pan for the English Channel.', 'Put sand or crumpled brown paper on the other end for the Normandy beach.', 'Build a cliff at the back of the beach with blocks.', 'Place small blocks or toys on the water as boats heading for the shore.', 'Explain your model to a family member, telling what happened on June 6, 1944.'],
        observe: 'Looking at your model, why do you think landing on a beach below cliffs was so dangerous? What made the soldiers brave?' }
    ],
    think: [
      'General Eisenhower had to decide whether to launch D-Day even though bad weather and danger could ruin the plan. What qualities do you think a leader needs to make a decision like that? Explain.',
      'Why is it important for people to remember the Holocaust and the sacrifices made in World War II? Give at least one reason.'
    ]
  });

  // ============================== WEEK 26: AFTER WWII AND THE COLD WAR ==============================
  C.unit('social', 26, {
    title: 'The United Nations and the Cold War',
    standard: 'SS5H5',
    learn: [
      { h: 'The United Nations', p: "In 1945, right after World War II, 51 countries started the United Nations, or UN. Its goal is to keep peace and help countries solve problems by talking instead of fighting. The UN headquarters is in New York City." },
      { h: 'What was the Cold War?', p: "After the war, the United States and the Soviet Union became rivals. The US had democracy, where people vote for leaders, and an economy where people own businesses. The Soviet Union had communism, where the government controlled almost everything. It was called a cold war because the two never fought each other directly in a big war." },
      { h: 'The Berlin Wall', p: "After the war, Germany and its capital city, Berlin, were divided. In 1961, East Germany built the Berlin Wall to stop people from escaping to the free western part of the city. The wall became a symbol of the Cold War until it was torn down in 1989." }
    ],
    passage: [
      "World War II left much of the world in ruins. Leaders did not want such a war ever to happen again. In October 1945, 51 nations formed the United Nations. Member countries send representatives to talk about problems, from wars to hunger to disease. The United Nations has its headquarters in New York City, and today almost every country in the world belongs to it.",
      "Two countries came out of the war as the most powerful: the United States and the Soviet Union. They had been allies against Hitler, but they believed in very different ideas. Americans chose their leaders in free elections and could start their own businesses. In the Soviet Union, the Communist Party ruled, and the government owned the farms and factories. People could not speak freely against their leaders. Each side feared the other would spread its system around the world. This long contest, lasting more than 40 years, was called the Cold War.",
      "Germany became a front line in this contest. The city of Berlin sat deep inside Soviet-controlled East Germany, but its western half was free. In 1948, the Soviets blocked the roads and railroads into West Berlin. The United States and Great Britain answered with the Berlin Airlift, flying in food and coal for about a year until the Soviets gave up the blockade. In 1961, East Germany built a wall right through the middle of Berlin. Guards stopped people from crossing, and families were separated for years.",
      "The Cold War sometimes came close to real fighting. In 1962, the Soviet Union placed nuclear missiles in Cuba, only about 90 miles from Florida. For 13 tense days, the world waited. Dean Rusk, who was born in Cherokee County, Georgia, was the US Secretary of State and helped President John F. Kennedy handle the crisis. Finally, the Soviets agreed to remove the missiles."
    ],
    vocab: [
      ['United Nations', 'a group of countries that work together to keep peace and solve world problems'],
      ['Cold War', 'the long rivalry between the US and the Soviet Union after World War II, without a direct war between them'],
      ['communism', 'a system where the government owns farms and businesses and controls most parts of life'],
      ['democracy', 'a government where the people choose their leaders by voting'],
      ['blockade', 'blocking roads, railroads, or ships so supplies cannot get through'],
      ['rival', 'someone who competes against another to win or be the best']
    ],
    demo: {
      q: 'Why was the Berlin Airlift needed?',
      steps: ['Step 1: West Berlin was free, but it was surrounded by Soviet-controlled East Germany.', 'Step 2: In 1948, the Soviets blocked the roads and railroads into West Berlin.', 'Step 3: Without trucks and trains, the people could run out of food and fuel.', 'Step 4: The only way left to bring supplies was through the air, so the US and Britain flew them in.'],
      a: 'The Soviets blocked roads and railroads into West Berlin, so supplies had to be flown in by airplane.'
    },
    items: [
      Q("When was the United Nations formed?", ["1918", "1945", "1961", "1989"], 1, "The UN was formed in 1945, right after World War II, so countries could talk through problems instead of fighting. 1961 is when the Berlin Wall went up."),
      Q("What is the main goal of the United Nations?", ["To build armies", "To keep peace and help countries solve problems together", "To run the US government", "To sell goods"], 1, "The UN brings countries together to keep peace and work on problems like hunger and disease."),
      Q("Where is the UN headquarters?", ["Washington, D.C.", "London", "New York City", "Berlin"], 2, "The United Nations headquarters is in New York City, not the US capital of Washington, D.C."),
      Q("Which two countries were the main rivals in the Cold War?", ["The US and Japan", "The US and the Soviet Union", "Germany and France", "Britain and China"], 1, "The United States and the Soviet Union were the two superpowers that competed during the Cold War."),
      Q("Why was it called a cold war?", ["It was fought in the snow", "The US and the Soviet Union never fought each other directly in a big war", "It only happened in winter", "Both countries were very cold"], 1, "Cold means there was no direct shooting war between the two superpowers, even though they were enemies and competed in many ways."),
      Q("What is communism?", ["A system where people vote freely and own businesses", "A system where the government owns farms and factories and controls most of life", "A kind of religion", "A type of election"], 1, "Under communism, the government owns most property and controls the economy. In the Soviet Union, people could not speak freely against leaders."),
      Q("According to the passage, how long did the Cold War last?", ["About 4 years", "More than 40 years", "About 100 years", "Just one year"], 1, "The passage says the contest lasted more than 40 years, from after World War II until about 1991."),
      Q("According to the passage, what happened in 1948 in Berlin?", ["The Berlin Wall fell", "The Soviets blocked roads and railroads into West Berlin", "The UN was formed in Berlin", "Germany won a war"], 1, "In 1948 the Soviets set up a blockade, cutting off roads and railroads into West Berlin."),
      Q("What was the Berlin Airlift?", ["A new airport in Georgia", "US and British planes flying food and coal into West Berlin", "A Soviet attack", "A race between airplanes"], 1, "During the blockade, US and British planes flew in supplies for about a year until the Soviets gave up."),
      Q("When was the Berlin Wall built?", ["1945", "1961", "1989", "1929"], 1, "East Germany built the Berlin Wall in 1961. It came down in 1989."),
      Q("Why did East Germany build the Berlin Wall?", ["To keep out floods", "To stop people from escaping to free West Berlin", "To protect a zoo", "To honor soldiers"], 1, "So many people were fleeing to freedom in the West that East Germany built the wall to stop them."),
      Q("According to the passage, how far is Cuba from Florida?", ["About 9 miles", "About 90 miles", "About 900 miles", "About 9,000 miles"], 1, "The passage says Cuba is only about 90 miles from Florida, which is why missiles there were so frightening.", "Look in the last paragraph."),
      Q("Which Georgian was US Secretary of State during the Cuban Missile Crisis?", ["Jimmy Carter", "Dean Rusk", "Carl Vinson", "Martin Luther King Jr."], 1, "Dean Rusk, born in Cherokee County, Georgia, helped President Kennedy during the crisis."),
      Q("How did the Cuban Missile Crisis end?", ["With a big war", "The Soviets agreed to remove the missiles", "Cuba joined the United States", "The UN took over Cuba"], 1, "After 13 tense days, the Soviet Union agreed to take its missiles out of Cuba, and war was avoided."),
      Q("What is a democracy?", ["A government where one ruler has all the power", "A government where the people choose leaders by voting", "A government run by the army", "A government with no laws"], 1, "In a democracy, citizens vote to choose leaders. The US is a democracy; the Soviet Union was not.")
    ],
    activities: [
      { title: 'Divided Berlin map', time: '20 min',
        materials: ['paper', 'colored pencils', 'ruler', 'an outline map of Germany (printed or drawn)'],
        steps: ['Draw an outline of Germany and draw a line splitting it into West Germany and East Germany.', 'Color West Germany one color and East Germany another.', 'Draw a small circle for Berlin inside East Germany.', 'Draw a line through the circle and label the halves West Berlin and East Berlin.', 'Draw small airplanes flying from West Germany into West Berlin to show the Berlin Airlift.'],
        observe: 'Looking at your map, why was it so hard for West Berlin to get supplies? Explain using where Berlin sits on the map.' },
      { title: 'Model United Nations meeting', time: '25 min',
        materials: ['paper name cards', 'markers', 'family members or stuffed animals as delegates'],
        steps: ['Make name cards for four countries, such as the United States, France, Brazil, and Japan.', 'Choose a pretend world problem, like two countries arguing over a river.', 'Let each delegate share an idea for solving it peacefully.', 'Vote on the best plan by raising hands.', 'Write down the plan your meeting chose.'],
        observe: 'Why is talking things out at a meeting better than fighting? What was hard about getting everyone to agree?' }
    ],
    think: [
      'Imagine your family was separated when the Berlin Wall went up. Write about how you would feel and what you would hope for. Use facts from the lesson.',
      'Do you think the United Nations is a good idea? Give two reasons that support your opinion.'
    ]
  });

  // ============================== WEEK 27: CIVIL RIGHTS PART 1 ==============================
  C.unit('social', 27, {
    title: 'Civil Rights: Jackie Robinson, Brown, and Rosa Parks',
    standard: 'SS5H6',
    learn: [
      { h: 'Segregation', p: "Segregation means keeping people apart by race. In much of the South, Jim Crow laws forced Black Americans to use separate schools, restaurants, water fountains, and seats on buses. The places for Black people were usually worse. Civil rights are the rights every citizen should have, like fair treatment under the law." },
      { h: 'Breaking barriers', p: "Jackie Robinson, who was born in Cairo, Georgia, became the first Black player in modern Major League Baseball in 1947. In 1954, the Supreme Court decided in Brown v. Board of Education that separating children in public schools by race was against the Constitution." },
      { h: 'The bus boycott', p: "In 1955, Rosa Parks was arrested in Montgomery, Alabama, for refusing to give her bus seat to a white man. Black citizens then boycotted, or refused to ride, the city buses for over a year. The boycott helped end segregation on Montgomery's buses." }
    ],
    passage: [
      "Jackie Robinson was born in 1919 in Cairo, a small town in south Georgia. His family moved to California when he was a baby. He grew up to be a star athlete in four sports. At that time, Black baseball players could only play in separate Negro Leagues. Branch Rickey of the Brooklyn Dodgers chose Robinson to break that barrier, and in 1947 Robinson played his first major league game. Some fans yelled cruel words, and some players tried to hurt him. Robinson had promised not to fight back, and he kept that promise. He let his skill do the talking and was named Rookie of the Year. Today, no major league player can wear his number, 42, except on Jackie Robinson Day.",
      "Schools were also segregated. A girl named Linda Brown in Topeka, Kansas, had to travel far to a school for Black children, even though a school for white children was closer. Her family and others went to court. A lawyer named Thurgood Marshall argued their case before the Supreme Court. In 1954, in Brown v. Board of Education, all nine justices agreed that separate schools were not equal. Many places were slow to obey. In Georgia, the University of Georgia admitted its first two Black students, Charlayne Hunter and Hamilton Holmes, in 1961.",
      "On December 1, 1955, Rosa Parks was riding a bus home from work in Montgomery, Alabama. The driver told her to give up her seat to a white man. She calmly said no and was arrested. Black leaders, including a young pastor named Martin Luther King Jr., organized a bus boycott. For 381 days, thousands of people walked, shared rides, or carpooled instead of riding the buses. In 1956, the Supreme Court ruled that segregated buses were against the Constitution, and the boycott ended in victory."
    ],
    vocab: [
      ['segregation', 'keeping people apart because of their race'],
      ['civil rights', 'the rights every citizen should have, such as equal treatment under the law'],
      ['boycott', 'refusing to buy or use something as a way to protest'],
      ['Jim Crow laws', 'unfair laws in the South that kept Black and white people separated'],
      ['Supreme Court', 'the highest court in the United States'],
      ['integrate', 'to bring people of all races together in the same places']
    ],
    demo: {
      q: 'How did the Montgomery bus boycott put pressure on the bus company?',
      steps: ['Step 1: Most of the people who rode Montgomery\'s buses were Black citizens.', 'Step 2: Each rider paid a fare, which was money the bus company needed.', 'Step 3: When thousands stopped riding for 381 days, the company lost a lot of money.', 'Step 4: Losing money, along with the court case, pushed the city to end bus segregation.'],
      a: 'By refusing to ride, Black citizens took away the money the bus company depended on, which added pressure to end segregation.'
    },
    items: [
      Q("What does segregation mean?", ["Bringing people together", "Keeping people apart because of their race", "Voting in an election", "Moving to a new city"], 1, "Segregation is separating people by race. Integration is the opposite: bringing people together."),
      Q("Where was Jackie Robinson born?", ["Atlanta, Georgia", "Cairo, Georgia", "Brooklyn, New York", "Montgomery, Alabama"], 1, "Jackie Robinson was born in Cairo, a small town in south Georgia. He later played for the Brooklyn Dodgers."),
      Q("What did Jackie Robinson do in 1947?", ["Won a Supreme Court case", "Became the first Black player in modern Major League Baseball", "Started the bus boycott", "Became president"], 1, "In 1947 he joined the Brooklyn Dodgers and broke baseball's color barrier."),
      Q("According to the passage, how did Robinson respond when people were cruel to him?", ["He fought back", "He quit baseball", "He kept his promise not to fight back and let his skill do the talking", "He moved to another country"], 2, "The passage says he had promised not to fight back and kept that promise, letting his playing speak for him."),
      Q("According to the passage, what number did Jackie Robinson wear?", ["24", "4", "42", "47"], 2, "The passage says his number was 42. Today no major league player wears it except on Jackie Robinson Day.", "It is in paragraph 1."),
      Q("What did the Supreme Court decide in Brown v. Board of Education (1954)?", ["Buses could stay segregated", "Separating children in public schools by race was against the Constitution", "Baseball must be integrated", "Women could vote"], 1, "The Court ruled that separate schools were not equal and therefore unconstitutional."),
      Q("According to the passage, where did Linda Brown live?", ["Montgomery, Alabama", "Topeka, Kansas", "Cairo, Georgia", "Brooklyn, New York"], 1, "The passage says Linda Brown lived in Topeka, Kansas, and had to travel far to a school for Black children."),
      Q("Who was the lawyer who argued Brown v. Board before the Supreme Court?", ["Thurgood Marshall", "Branch Rickey", "Martin Luther King Jr.", "Rosa Parks"], 0, "Thurgood Marshall argued the case. He later became the first Black justice on the Supreme Court."),
      Q("According to the passage, who were the first two Black students admitted to the University of Georgia in 1961?", ["Linda Brown and Thurgood Marshall", "Charlayne Hunter and Hamilton Holmes", "Rosa Parks and Jackie Robinson", "Branch Rickey and Dean Rusk"], 1, "The passage names Charlayne Hunter and Hamilton Holmes, who integrated the University of Georgia in 1961."),
      Q("What did Rosa Parks do on December 1, 1955?", ["She refused to give up her bus seat to a white man", "She wrote a famous poem", "She became a judge", "She played baseball"], 0, "Rosa Parks calmly refused to give her seat to a white man and was arrested, which sparked the Montgomery bus boycott."),
      Q("What is a boycott?", ["A school for boys", "Refusing to buy or use something as a protest", "A kind of bus", "A court case"], 1, "In a boycott, people refuse to use or buy something to push for change, like refusing to ride Montgomery's buses."),
      Q("How long did the Montgomery bus boycott last?", ["3 days", "381 days", "10 years", "1 month"], 1, "The boycott lasted 381 days, more than a year, while people walked and shared rides."),
      Q("Which young pastor helped lead the Montgomery bus boycott?", ["Martin Luther King Jr.", "Thurgood Marshall", "Langston Hughes", "Dean Rusk"], 0, "Martin Luther King Jr., a young pastor in Montgomery, helped lead the boycott. This made him a national civil rights leader."),
      Q("How did the bus boycott end?", ["The Supreme Court ruled that segregated buses were against the Constitution", "The riders gave up", "The buses were sold", "Rosa Parks moved away"], 0, "In 1956, the Supreme Court ruled bus segregation unconstitutional, and the boycott ended in victory."),
      Q("What were Jim Crow laws?", ["Laws protecting birds", "Unfair laws in the South that kept Black and white people separated", "Laws about baseball", "Laws that gave everyone equal rights"], 1, "Jim Crow laws forced segregation in schools, buses, restaurants, and more. Civil rights leaders worked to end them.")
    ],
    activities: [
      { title: 'Civil rights pioneers map', time: '20 min',
        materials: ['US map', 'small paper flags or sticky notes', 'pencil'],
        steps: ['Find Cairo, Georgia, near the Florida border, and add a flag for Jackie Robinson\'s birthplace.', 'Find Brooklyn in New York City and add a flag for the Dodgers.', 'Find Topeka, Kansas, and add a flag for Linda Brown and Brown v. Board.', 'Find Montgomery, Alabama, and add a flag for Rosa Parks.', 'Find Athens, Georgia, and add a flag for the University of Georgia in 1961.'],
        observe: 'The civil rights movement happened in many places. What does your map show about how widespread segregation was?' },
      { title: 'Baseball card biography', time: '25 min',
        materials: ['index card or cardstock', 'markers', 'pencil'],
        steps: ['On the front, draw Jackie Robinson in a Brooklyn Dodgers uniform with the number 42.', 'Write his name and Born: 1919, Cairo, Georgia.', 'On the back, write the year he joined the Dodgers.', 'Add one award he won.', 'Write one sentence about the courage he showed.'],
        observe: 'Why do you think Branch Rickey wanted a player who would not fight back? Was that fair to Jackie Robinson? Explain.' }
    ],
    think: [
      'Rosa Parks, Linda Brown\'s family, and Jackie Robinson each stood up to unfairness in a different way. Choose one and explain what took courage and how it helped change things.',
      'The bus boycott only worked because thousands of people stuck together for over a year. Why does teamwork matter when people work for change? Use details from the lesson.'
    ]
  });

  // ============================== WEEK 28: CIVIL RIGHTS PART 2 ==============================
  C.unit('social', 28, {
    title: 'Dr. Martin Luther King Jr. and New Laws',
    standard: 'SS5H6',
    learn: [
      { h: 'A leader from Atlanta', p: "Martin Luther King Jr. was born in Atlanta, Georgia, on January 15, 1929. He became a Baptist pastor like his father and grandfather. He taught nonviolence, which means working for change through peaceful marches, speeches, and protests without hurting anyone." },
      { h: 'The March on Washington', p: "On August 28, 1963, about 250,000 people gathered in Washington, D.C., to ask for jobs and freedom. At the Lincoln Memorial, Dr. King gave his famous I Have a Dream speech about a future where people would be judged by their character, not their skin color." },
      { h: 'New laws', p: "The Civil Rights Act of 1964 made segregation in public places illegal and banned job discrimination based on race. The Voting Rights Act of 1965 stopped unfair tests that had kept many Black citizens from voting. President Lyndon B. Johnson signed both laws." }
    ],
    passage: [
      "Martin Luther King Jr. grew up on Auburn Avenue in Atlanta. His father was the pastor of Ebenezer Baptist Church, just down the street. As a boy, Martin saw that segregation was unfair. He was such a strong student that he started at Morehouse College in Atlanta when he was only 15. He later became a pastor and studied the ideas of Mohandas Gandhi, a leader in India who used peaceful protest. King believed love and nonviolence could change hearts and laws.",
      "King led many peaceful protests. Some, like the Albany Movement in southwest Georgia in 1961 and 1962, did not win quick victories, but they taught leaders important lessons. In 1963, King and other leaders planned a huge gathering in the nation's capital. On August 28, about 250,000 people of many races marched in Washington, D.C. At the Lincoln Memorial, King spoke about his dream that his children would one day live in a nation where they would be judged by who they are, not by the color of their skin.",
      "The marches helped move Congress to act. In 1964, President Lyndon B. Johnson signed the Civil Rights Act, which ended segregation in places like restaurants, hotels, and parks. That same year, King won the Nobel Peace Prize. Many Black citizens in the South still could not vote because of unfair tests and fees. In 1965, marchers walked from Selma to Montgomery, Alabama, to demand voting rights. One of them was John Lewis, who later served Atlanta in Congress for more than 30 years. Soon after, Congress passed the Voting Rights Act of 1965.",
      "On April 4, 1968, Dr. King was killed in Memphis, Tennessee. He was only 39 years old. Today, Americans honor him with a national holiday each January. In Atlanta, visitors can see his birth home, Ebenezer Baptist Church, and his tomb at the Martin Luther King Jr. National Historical Park."
    ],
    vocab: [
      ['nonviolence', 'working for change in peaceful ways without hurting anyone'],
      ['protest', 'a public action to show you disagree with something and want it changed'],
      ['discrimination', 'treating people unfairly because of their race or another trait'],
      ['march', 'a large group walking together in public to share a message'],
      ['Nobel Peace Prize', 'a world famous award given to people who work for peace'],
      ['legislation', 'laws that are made by a lawmaking group like Congress']
    ],
    demo: {
      q: 'How did the March on Washington help lead to the Civil Rights Act of 1964?',
      steps: ['Step 1: About 250,000 people gathered peacefully in the capital, where members of Congress work.', 'Step 2: The huge crowd showed lawmakers that many Americans of all races wanted change.', 'Step 3: Dr. King\'s speech was heard across the country and moved many people.', 'Step 4: With so much public support, Congress passed and President Johnson signed the Civil Rights Act in 1964.'],
      a: 'The march showed Congress how many Americans wanted equal rights, which helped push lawmakers to pass the Civil Rights Act.'
    },
    items: [
      Q("Where was Martin Luther King Jr. born?", ["Montgomery, Alabama", "Atlanta, Georgia", "Memphis, Tennessee", "Washington, D.C."], 1, "Dr. King was born in Atlanta, Georgia, on January 15, 1929. He was killed in Memphis in 1968."),
      Q("According to the passage, what street did King grow up on?", ["Peachtree Street", "Auburn Avenue", "Main Street", "Pennsylvania Avenue"], 1, "The passage says he grew up on Auburn Avenue in Atlanta, near Ebenezer Baptist Church.", "Look at the first sentence."),
      Q("According to the passage, how old was King when he started at Morehouse College?", ["15", "18", "21", "12"], 0, "The passage says he was such a strong student that he started at Morehouse when he was only 15."),
      Q("What does nonviolence mean?", ["Fighting back hard", "Working for change in peaceful ways without hurting anyone", "Staying home and doing nothing", "Running away"], 1, "Nonviolence means using peaceful marches, speeches, and boycotts instead of force. King learned from Gandhi of India."),
      Q("Whose ideas about peaceful protest did King study?", ["Winston Churchill", "Mohandas Gandhi", "Adolf Hitler", "Henry Ford"], 1, "Mohandas Gandhi led India's peaceful struggle for freedom. King used Gandhi's ideas in America."),
      Q("According to the passage, where did the Albany Movement take place?", ["Albany, New York", "Southwest Georgia", "Memphis, Tennessee", "Selma, Alabama"], 1, "The passage says the Albany Movement was in southwest Georgia in 1961 and 1962."),
      Q("About how many people attended the March on Washington in 1963?", ["2,500", "25,000", "250,000", "25 million"], 2, "About 250,000 people gathered in Washington, D.C., on August 28, 1963."),
      Q("Where did Dr. King give his I Have a Dream speech?", ["The White House", "The Lincoln Memorial", "Ebenezer Baptist Church", "The Georgia Capitol"], 1, "He spoke from the steps of the Lincoln Memorial in Washington, D.C."),
      Q("What did the Civil Rights Act of 1964 do?", ["Gave women the right to vote", "Ended segregation in public places and banned job discrimination based on race", "Ended World War II", "Created the United Nations"], 1, "The Civil Rights Act made segregation in places like restaurants, hotels, and parks illegal. Women won the vote in 1920."),
      Q("Which president signed the Civil Rights Act and the Voting Rights Act?", ["Franklin D. Roosevelt", "John F. Kennedy", "Lyndon B. Johnson", "Jimmy Carter"], 2, "President Lyndon B. Johnson signed both laws, in 1964 and 1965."),
      Q("What did the Voting Rights Act of 1965 do?", ["Lowered the voting age to 18", "Stopped unfair tests and rules that kept many Black citizens from voting", "Let only landowners vote", "Created new states"], 1, "The Voting Rights Act protected Black citizens' right to vote by stopping unfair tests. The voting age was lowered to 18 later, in 1971."),
      Q("According to the passage, who marched from Selma and later served Atlanta in Congress?", ["John Lewis", "Thurgood Marshall", "Dean Rusk", "Jackie Robinson"], 0, "The passage says John Lewis marched from Selma to Montgomery and later served Atlanta in Congress for more than 30 years."),
      Q("What award did King win in 1964?", ["An Olympic gold medal", "The Nobel Peace Prize", "Rookie of the Year", "An Academy Award"], 1, "King won the Nobel Peace Prize in 1964 for his peaceful work for civil rights."),
      Q("How old was Dr. King when he died in 1968?", ["39", "50", "29", "65"], 0, "Dr. King was only 39 years old when he was killed in Memphis on April 4, 1968."),
      Q("Where can visitors see King's birth home and tomb today?", ["Montgomery, Alabama", "Memphis, Tennessee", "The Martin Luther King Jr. National Historical Park in Atlanta", "New York City"], 2, "His birth home, Ebenezer Baptist Church, and his tomb are at the national historical park in Atlanta.")
    ],
    activities: [
      { title: 'Civil rights timeline', time: '25 min',
        materials: ['long strip of paper', 'ruler', 'markers'],
        steps: ['Draw a line and mark years from 1945 to 1970.', 'Add 1947 Jackie Robinson joins the Dodgers, and 1954 Brown v. Board.', 'Add 1955 Montgomery bus boycott begins.', 'Add 1963 March on Washington and 1964 Civil Rights Act.', 'Add 1965 Voting Rights Act and 1968 Dr. King dies.', 'Star every event that has a Georgia connection.'],
        observe: 'Look at the events you starred. Why do you think Georgia is so important to the story of civil rights?' },
      { title: 'Atlanta walking tour map', time: '20 min',
        materials: ['paper', 'pencil', 'colored pencils', 'a printed or online map of the King historic district (with a parent)'],
        steps: ['With a parent, look at a map of the Martin Luther King Jr. National Historical Park on Auburn Avenue.', 'Draw Auburn Avenue as a long street on your paper.', 'Mark King\'s birth home, Ebenezer Baptist Church, and his tomb at the King Center.', 'Draw a dotted line showing a walking path between them.', 'Add a map key with a symbol for each place.'],
        observe: 'How close together are these places on your map? What does that tell you about how King\'s neighborhood and church shaped his life?' }
    ],
    think: [
      'Dr. King believed in nonviolence even when people treated him badly. Why do you think peaceful protest worked to change laws? Give evidence from the lesson.',
      'Think about a time someone was treated unfairly. How could you stand up for fairness in a peaceful way, like Dr. King taught?'
    ]
  });

  // ============================== WEEK 29: SPACE RACE AND 1960s-70s ==============================
  C.unit('social', 29, {
    title: 'The Space Race and the 1960s and 70s',
    standard: 'SS5H6',
    learn: [
      { h: 'The race begins', p: "The space race was part of the Cold War. In 1957, the Soviet Union launched Sputnik, the first satellite to circle Earth. Americans worried they were falling behind, so in 1958 the US created NASA to explore space." },
      { h: 'To the Moon', p: "In 1961, President John F. Kennedy set a goal of landing a person on the Moon by the end of the 1960s. On July 20, 1969, Apollo 11 landed, and Neil Armstrong became the first person to walk on the Moon. Buzz Aldrin joined him while Michael Collins circled above." },
      { h: 'Changing times', p: "The 1960s and 1970s brought big events. President Kennedy was killed in 1963. Americans fought in the Vietnam War, which many people protested. In 1976, Jimmy Carter of Plains, Georgia, was elected president." }
    ],
    passage: [
      "On October 4, 1957, people around the world heard surprising news. The Soviet Union had launched Sputnik, a metal ball about the size of a beach ball, into orbit around Earth. It was the first artificial satellite, a human-made object circling our planet. Many Americans were alarmed. If the Soviets could send a satellite into space, what else could they do? The next year, the United States created NASA, the National Aeronautics and Space Administration. Schools also began teaching more science and math.",
      "At first, the Soviets stayed ahead. In 1961, Yuri Gagarin became the first person to travel into space. A few weeks later, Alan Shepard became the first American in space. In 1962, John Glenn became the first American to orbit Earth. President Kennedy then gave the country a giant goal: land a person on the Moon and bring him safely home before 1970.",
      "Thousands of scientists, engineers, and mathematicians worked to make it happen. On July 16, 1969, a giant Saturn V rocket lifted Apollo 11 off the launch pad in Florida. Four days later, on July 20, the lunar module Eagle landed on the Moon. Neil Armstrong climbed down the ladder and became the first human to step on the Moon. Buzz Aldrin followed him, while Michael Collins circled overhead. Hundreds of millions of people watched on television. The astronauts planted an American flag and brought back Moon rocks. Over the next few years, five more Apollo missions landed on the Moon.",
      "These years on Earth were full of change. In 1963, President Kennedy was killed in Dallas, Texas. The United States fought in the Vietnam War to try to stop communism from spreading in Southeast Asia. The war divided Americans, and US troops left in 1973. In 1976, voters elected Jimmy Carter, a peanut farmer and former governor from Plains, Georgia, as president."
    ],
    vocab: [
      ['satellite', 'an object that travels in a path around a planet'],
      ['orbit', 'the curved path an object follows around a planet, moon, or star'],
      ['NASA', 'the US government agency that explores space'],
      ['astronaut', 'a person trained to travel into space'],
      ['lunar', 'having to do with the Moon'],
      ['artificial', 'made by people instead of by nature']
    ],
    demo: {
      q: 'Why was the space race part of the Cold War?',
      steps: ['Step 1: In the Cold War, the US and the Soviet Union competed to show their system was best.', 'Step 2: Space travel showed off a country\'s science, technology, and power.', 'Step 3: When the Soviets launched Sputnik first, Americans felt they were losing.', 'Step 4: So the US raced to catch up and be first to the Moon.'],
      a: 'Each side wanted to prove its strength, and being first in space was a powerful way to show it.'
    },
    items: [
      Q("What was Sputnik?", ["The first American astronaut", "The first artificial satellite to orbit Earth", "A Moon rock", "A rocket that landed on Mars"], 1, "Sputnik, launched by the Soviet Union in 1957, was the first human-made satellite to circle Earth."),
      Q("Which country launched Sputnik?", ["The United States", "The Soviet Union", "Germany", "Japan"], 1, "The Soviet Union launched Sputnik in 1957, which started the space race with the US."),
      Q("According to the passage, about how big was Sputnik?", ["The size of a bus", "The size of a beach ball", "The size of a house", "The size of a marble"], 1, "The passage says Sputnik was a metal ball about the size of a beach ball."),
      Q("What did the United States create in 1958 because of Sputnik?", ["The United Nations", "NASA", "The CCC", "The Supreme Court"], 1, "The US created NASA in 1958 to run its space program."),
      Q("Who was the first person to travel into space?", ["Neil Armstrong", "John Glenn", "Yuri Gagarin", "Alan Shepard"], 2, "Yuri Gagarin of the Soviet Union went to space first, in 1961. Alan Shepard was the first American, a few weeks later."),
      Q("According to the passage, who was the first American to orbit Earth?", ["Alan Shepard", "Buzz Aldrin", "John Glenn", "Michael Collins"], 2, "The passage says John Glenn became the first American to orbit Earth in 1962. Shepard went to space but did not orbit."),
      Q("What goal did President Kennedy set in 1961?", ["Build the Berlin Wall", "Land a person on the Moon and bring him home before 1970", "Send a satellite to Mars", "End the Vietnam War"], 1, "Kennedy challenged the country to land a person on the Moon and return him safely by the end of the 1960s."),
      Q("When did Apollo 11 land on the Moon?", ["July 20, 1969", "October 4, 1957", "July 4, 1976", "November 22, 1963"], 0, "Apollo 11 landed on July 20, 1969. October 4, 1957, is when Sputnik launched."),
      Q("Who was the first person to walk on the Moon?", ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "John Glenn"], 1, "Neil Armstrong stepped onto the Moon first. Buzz Aldrin followed, and Michael Collins stayed in orbit."),
      Q("According to the passage, what was the name of Apollo 11's lunar module?", ["Eagle", "Columbia", "Saturn", "Sputnik"], 0, "The passage says the lunar module Eagle landed on the Moon. Saturn V was the rocket that launched them."),
      Q("According to the passage, how many more Apollo missions landed on the Moon after Apollo 11?", ["None", "Two", "Five", "Ten"], 2, "The passage says five more Apollo missions landed on the Moon over the next few years."),
      Q("What happened to President Kennedy in 1963?", ["He walked on the Moon", "He was killed in Dallas, Texas", "He became governor of Georgia", "He started NASA"], 1, "President Kennedy was killed in Dallas, Texas, on November 22, 1963. NASA had been created earlier, in 1958."),
      Q("Why did the United States fight in the Vietnam War?", ["To win land for itself", "To try to stop communism from spreading in Southeast Asia", "To reach the Moon", "To help Germany"], 1, "The US fought in Vietnam to try to stop communism from spreading. It was part of the Cold War."),
      Q("Which Georgian was elected president in 1976?", ["Dean Rusk", "Jimmy Carter", "John Lewis", "Carl Vinson"], 1, "Jimmy Carter, a peanut farmer and former governor from Plains, Georgia, was elected president in 1976."),
      Q("What does lunar mean?", ["Having to do with the Sun", "Having to do with the Moon", "Having to do with stars", "Having to do with oceans"], 1, "Lunar means having to do with the Moon, as in lunar module. Solar means having to do with the Sun.")
    ],
    activities: [
      { title: 'Space race timeline', time: '20 min',
        materials: ['paper', 'ruler', 'markers', 'star stickers (optional)'],
        steps: ['Draw a line and mark the years 1957 to 1972.', 'Above the line, write Soviet firsts: 1957 Sputnik, 1961 Gagarin.', 'Below the line, write American firsts: 1958 NASA, 1961 Shepard, 1962 Glenn.', 'Add July 20, 1969, Apollo 11 lands on the Moon, with a big star.', 'Draw a rocket next to the year the Moon goal was reached.'],
        observe: 'Who was ahead early in the space race, and who reached the Moon first? Use your timeline to explain how the race changed.' },
      { title: 'Build a paper rocket model', time: '30 min',
        materials: ['paper towel tube', 'construction paper', 'tape', 'markers', 'scissors (with a parent)'],
        steps: ['Wrap the tube in white paper.', 'Make a cone from paper and tape it on top for the nose.', 'Cut three triangle fins and tape them to the bottom.', 'Write USA and APOLLO 11 on the side.', 'Draw small windows and label the top part as the command module.', 'Show your rocket and explain what each astronaut did on the mission.'],
        observe: 'Why do you think it took thousands of people to send just three astronauts to the Moon? Name two kinds of jobs that helped.' }
    ],
    think: [
      'Was the space race worth the money and effort? Give your opinion and support it with at least two reasons.',
      'President Kennedy set a goal that seemed almost impossible. What is a big goal you have, and what steps could help you reach it, like NASA did?'
    ]
  });

  // ============================== WEEK 30: RECENT DECADES ==============================
  C.unit('social', 30, {
    title: 'Recent Decades: 1989 to Today',
    standard: 'SS5H7',
    learn: [
      { h: 'The Cold War ends', p: "In 1989, people in Berlin tore down the Berlin Wall. Germany became one country again in 1990. In 1991, the Soviet Union broke apart into 15 separate countries, and the Cold War was over." },
      { h: 'The computer age', p: "The first computers filled whole rooms. Over time, they became small and cheap enough for homes and schools. The World Wide Web made the internet easy to use in the 1990s, and later smartphones put the internet in people\'s pockets." },
      { h: 'September 11, 2001', p: "On September 11, 2001, terrorists took over four airplanes and attacked the United States. Nearly 3,000 people died. Americans remember the victims and honor the firefighters, police officers, and ordinary people who helped others that day." }
    ],
    passage: [
      "On the night of November 9, 1989, crowds gathered at the Berlin Wall. East Germany had suddenly announced that its people could cross freely. People climbed on top of the wall, hugged strangers, and began chipping it apart with hammers. Families who had been separated for years were together again. The next year, East and West Germany joined back into one country. In 1991, the Soviet Union broke apart, and the long Cold War came to a peaceful end.",
      "At the same time, a new kind of revolution was changing daily life. The first computers of the 1940s were as big as a room. By the 1980s, families could buy personal computers to use at home. In the early 1990s, the World Wide Web made it simple to share pages of words and pictures on the internet. Soon people were sending email, shopping online, and looking up facts in seconds. In the 2000s, smartphones made it possible to carry a computer, a camera, and a phone in one small device.",
      "Georgia played a part in this new connected world. In 1980, Ted Turner started CNN in Atlanta. It was the first television channel to show news 24 hours a day. In 1996, Atlanta hosted the Summer Olympic Games, and people from around the world watched the city on TV and online.",
      "Then came a very sad day. On September 11, 2001, terrorists hijacked, or took control of, four passenger airplanes. Two crashed into the World Trade Center towers in New York City, and one hit the Pentagon near Washington, D.C. On the fourth plane, passengers fought back, and it crashed in a field in Pennsylvania. Nearly 3,000 people died. Firefighters, police officers, and neighbors rushed to help. Afterward, the United States sent troops to Afghanistan to fight the terrorist group that planned the attacks. Each year, Americans pause on September 11 to remember."
    ],
    vocab: [
      ['technology', 'tools and machines people invent to solve problems and make work easier'],
      ['internet', 'a huge network that connects computers all around the world'],
      ['terrorist', 'a person who uses violence and fear against ordinary people to try to get their way'],
      ['hijack', 'to take control of a vehicle, like an airplane, by force'],
      ['reunite', 'to come back together after being apart'],
      ['first responder', 'a firefighter, police officer, or medical worker who rushes to help in an emergency']
    ],
    demo: {
      q: 'How did the fall of the Berlin Wall show that the Cold War was ending?',
      steps: ['Step 1: Remember that the wall was built in 1961 to stop East Germans from escaping to the West.', 'Step 2: It was the biggest symbol of the split between the communist and free worlds.', 'Step 3: In 1989, people were allowed to cross freely, and they tore the wall down.', 'Step 4: When the symbol of the division was gone, it showed the two sides were coming together. Two years later, the Soviet Union broke apart.'],
      a: 'The wall was the main symbol of the Cold War split, so tearing it down showed the division was ending.'
    },
    items: [
      Q("When did the Berlin Wall come down?", ["1961", "1989", "2001", "1945"], 1, "The wall fell on November 9, 1989. It had been built in 1961."),
      Q("What happened to the Soviet Union in 1991?", ["It won the Cold War", "It broke apart into 15 separate countries", "It joined the United States", "It built a new wall"], 1, "In 1991, the Soviet Union split into 15 countries, including Russia and Ukraine, and the Cold War ended."),
      Q("According to the passage, what did people do at the Berlin Wall in 1989?", ["Built it taller", "Climbed on it, hugged, and chipped it apart with hammers", "Painted it gold", "Ran away from it"], 1, "The passage describes crowds climbing on the wall, hugging strangers, and chipping it apart."),
      Q("When did Germany become one country again?", ["1945", "1961", "1990", "2001"], 2, "East and West Germany reunited in 1990, the year after the wall fell."),
      Q("According to the passage, how big were the first computers of the 1940s?", ["As small as a phone", "As big as a room", "As big as a book", "As big as a car tire"], 1, "The passage says the first computers were as big as a room. Today a phone is far more powerful."),
      Q("What did the World Wide Web make easier in the 1990s?", ["Flying to the Moon", "Sharing pages of words and pictures on the internet", "Building cars", "Growing cotton"], 1, "The World Wide Web made it simple to share and view pages on the internet, which led to email, online shopping, and more."),
      Q("What device lets people carry a computer, camera, and phone in one?", ["A radio", "A smartphone", "A typewriter", "A television"], 1, "Smartphones, which became popular in the 2000s, combine a phone, a camera, and a computer."),
      Q("According to the passage, what did Ted Turner start in Atlanta in 1980?", ["The Olympics", "CNN, the first 24-hour news channel", "The first computer", "A radio station called WSB"], 1, "The passage says Ted Turner started CNN in Atlanta in 1980. WSB was the 1920s radio station."),
      Q("What world event did Atlanta host in 1996?", ["The World Cup", "The Summer Olympic Games", "The Super Bowl", "The Moon landing"], 1, "Atlanta hosted the 1996 Summer Olympic Games, which brought visitors from around the world."),
      Q("What happened on September 11, 2001?", ["The Berlin Wall fell", "Terrorists hijacked four airplanes and attacked the United States", "Atlanta hosted the Olympics", "The Soviet Union broke apart"], 1, "On September 11, 2001, terrorists hijacked four planes and attacked New York City and the Pentagon. One plane crashed in Pennsylvania."),
      Q("Where did the fourth plane crash on September 11?", ["In a field in Pennsylvania", "In Atlanta", "In the Pacific Ocean", "In Washington, D.C."], 0, "Passengers on the fourth plane fought back, and it crashed in a field in Pennsylvania instead of reaching its target."),
      Q("According to the passage, which building near Washington, D.C., was hit on September 11?", ["The White House", "The Pentagon", "The Capitol", "The Lincoln Memorial"], 1, "The passage says one plane hit the Pentagon, the headquarters of the US military, near Washington, D.C."),
      Q("Where did the United States send troops after September 11 to fight the terrorist group?", ["Germany", "Afghanistan", "Japan", "Cuba"], 1, "The US sent troops to Afghanistan, where the group that planned the attacks was based."),
      Q("What does hijack mean?", ["To fly a plane safely", "To take control of a vehicle by force", "To build an airplane", "To buy a ticket"], 1, "To hijack is to take control of a vehicle, like a plane, by force."),
      Q("Who are first responders?", ["People who answer the phone first", "Firefighters, police officers, and medical workers who rush to help in emergencies", "The first people to vote", "Students who answer quickly"], 1, "First responders rush toward danger to help. On September 11, many firefighters and police officers were heroes.")
    ],
    activities: [
      { title: 'Technology interview', time: '25 min',
        materials: ['notebook', 'pencil', 'a parent or grandparent'],
        steps: ['Ask: What kind of phone did your family have when you were my age?', 'Ask: When did you first use a computer or the internet?', 'Ask: How did you look up facts or find directions before smartphones?', 'Ask: What new technology surprised you the most?', 'Write a short paragraph comparing their childhood technology to yours.'],
        observe: 'What is one way technology made life easier, and one way it made life harder? Use your interview answers as evidence.' },
      { title: 'Map of a changing world', time: '20 min',
        materials: ['world map', 'sticky notes', 'pencil'],
        steps: ['Find Berlin, Germany, and write 1989 Wall falls.', 'Find Russia and write 1991 Soviet Union breaks apart.', 'Find Atlanta and write 1980 CNN and 1996 Olympics.', 'Find New York City, Washington, D.C., and Pennsylvania and write September 11, 2001.', 'Find Afghanistan and write 2001 US troops sent.'],
        observe: 'Look at all your notes. How does your map show that events in one place can affect people all over the world?' }
    ],
    think: [
      'Which invention from recent decades do you think changed life the most: personal computers, the internet, or smartphones? Give two reasons.',
      'On September 11, 2001, many ordinary people helped others in a time of danger. Why do you think people remember and honor those helpers? What can we learn from them?'
    ]
  });

  // ============================== WEEK 31: HOW A BILL BECOMES A LAW ==============================
  C.unit('social', 31, {
    title: 'How a Bill Becomes a Law',
    standard: 'SS5CG3',
    learn: [
      { h: 'Three branches review', p: "The US government has three branches. The legislative branch, Congress, makes laws. The executive branch, led by the president, carries out laws. The judicial branch, the courts led by the Supreme Court, decides what laws mean and whether they follow the Constitution." },
      { h: 'From bill to law', p: "A bill is an idea for a new law. A member of Congress introduces it, a committee studies it, and then the House of Representatives and the Senate each vote. If both pass it, the president can sign it into law or veto it, which means reject it." },
      { h: 'Checks and balances', p: "Checks and balances means each branch can limit the others, so no branch gets too much power. For example, the president can veto a bill, Congress can override a veto with a two-thirds vote, and the courts can rule that a law breaks the Constitution." }
    ],
    passage: [
      "Every law starts as an idea. The idea might come from a citizen, a group, or a member of Congress. Suppose a girl in Georgia writes to her representative asking for a law to protect a kind of bird. If the representative agrees, she can write the idea as a bill and introduce it in the House of Representatives. Bills can start in either the House or the Senate.",
      "Next, the bill goes to a committee, a small group of members who study one topic closely. The committee may hold hearings, ask experts questions, and make changes. If the committee approves the bill, the whole House debates it and votes. If more than half vote yes, the bill passes and moves to the Senate, where it goes through the same steps. Both the House and the Senate must pass exactly the same version.",
      "Then the bill goes to the president. If the president signs it, it becomes a law. If the president vetoes it, it goes back to Congress. Congress can still make it a law if two-thirds of the House and two-thirds of the Senate vote to override the veto. That is hard to do, so most vetoed bills never become law.",
      "This process is one example of checks and balances. The writers of the Constitution did not want any one person or group to have too much power. So each branch can check, or limit, the others. The president chooses Supreme Court justices, but the Senate must approve them. The Supreme Court can decide that a law goes against the Constitution. Congress controls how the government spends money.",
      "Georgia is part of this system. Georgia voters elect two senators and, right now, 14 members of the House of Representatives. Senators serve six-year terms, and representatives serve two-year terms."
    ],
    vocab: [
      ['bill', 'an idea for a new law that lawmakers vote on'],
      ['Congress', 'the lawmaking branch of the US government, made of the House of Representatives and the Senate'],
      ['committee', 'a small group of lawmakers who study bills about one topic'],
      ['veto', 'when the president rejects a bill so it does not become a law'],
      ['override', 'when Congress passes a vetoed bill anyway with a two-thirds vote'],
      ['checks and balances', 'the system that lets each branch of government limit the power of the others']
    ],
    demo: {
      q: 'The House and Senate pass a bill, and the president vetoes it. Can it still become a law?',
      steps: ['Step 1: A veto sends the bill back to Congress.', 'Step 2: Congress can override a veto, but it takes a two-thirds vote.', 'Step 3: That means two out of every three members in BOTH the House and the Senate must vote yes.', 'Step 4: If both reach two-thirds, the bill becomes a law without the president\'s signature. If not, the bill dies.'],
      a: 'Yes, but only if two-thirds of both the House and the Senate vote to override the veto.'
    },
    items: [
      Q("What is a bill?", ["A law that is already passed", "An idea for a new law that lawmakers vote on", "A court decision", "A kind of tax"], 1, "A bill is a proposed law. It only becomes a law after it passes Congress and is signed by the president or survives a veto."),
      Q("Which branch of government makes laws?", ["Executive", "Judicial", "Legislative", "Military"], 2, "The legislative branch, Congress, makes laws. The executive carries them out, and the judicial branch interprets them."),
      Q("Who leads the executive branch?", ["The Chief Justice", "The president", "The Speaker of the House", "The governor"], 1, "The president leads the executive branch. A governor leads a state's executive branch, not the nation's."),
      Q("What are the two parts of Congress?", ["The House of Representatives and the Senate", "The Supreme Court and the president", "The governor and the mayor", "The army and the navy"], 0, "Congress has two houses: the House of Representatives and the Senate."),
      Q("According to the passage, where can a bill start?", ["Only in the Senate", "Only in the White House", "In either the House or the Senate", "Only in the Supreme Court"], 2, "The passage says bills can start in either the House or the Senate."),
      Q("What does a committee do with a bill?", ["Signs it into law", "Studies it closely, holds hearings, and may make changes", "Throws it away right away", "Sends it to the Supreme Court first"], 1, "A committee is a small group of lawmakers who study a bill, ask experts questions, and decide whether to send it to the full chamber."),
      Q("According to the passage, how many members must vote yes for a bill to pass the House?", ["Every single member", "More than half", "Exactly ten", "Two-thirds"], 1, "The passage says if more than half vote yes, the bill passes. Two-thirds is needed only to override a veto."),
      Q("What must happen before a bill goes to the president?", ["Only the House must pass it", "Both the House and the Senate must pass the same version", "The Supreme Court must approve it", "The governor must sign it"], 1, "Both houses of Congress must pass exactly the same version before it goes to the president."),
      Q("What is a veto?", ["When the president signs a bill", "When the president rejects a bill", "When Congress votes yes", "When a court holds a trial"], 1, "A veto is the president's power to reject a bill. It is one of the president's checks on Congress."),
      Q("How can Congress override a veto?", ["With a simple majority in the House", "With a two-thirds vote in both the House and the Senate", "By asking the governor", "It can never be overridden"], 1, "Overriding a veto takes two-thirds of the House and two-thirds of the Senate, which is hard to get."),
      Q("What is the purpose of checks and balances?", ["To give the president all the power", "To keep any one branch from getting too much power", "To make laws faster", "To count money in banks"], 1, "Checks and balances let each branch limit the others so power stays balanced."),
      Q("Which is a check the courts have on Congress?", ["Vetoing a bill", "Deciding that a law goes against the Constitution", "Choosing the president", "Writing new bills"], 1, "The Supreme Court can rule that a law is unconstitutional. Vetoing is the president's check, not the courts'."),
      Q("According to the passage, what must happen after the president chooses a Supreme Court justice?", ["The House votes on a new law", "The Senate must approve the choice", "The people vote in a special election", "Nothing, the choice is final"], 1, "The passage says the president chooses justices, but the Senate must approve them. That is a check on the president."),
      Q("According to the passage, how many members of the House of Representatives does Georgia elect right now?", ["2", "6", "14", "100"], 2, "The passage says Georgia elects 14 representatives. Every state, including Georgia, elects 2 senators."),
      Q("How long is a US senator's term?", ["Two years", "Four years", "Six years", "For life"], 2, "Senators serve six-year terms. Representatives serve two years, and the president serves four.")
    ],
    activities: [
      { title: 'Bill to law flow chart', time: '25 min',
        materials: ['large paper', 'markers', 'ruler'],
        steps: ['Draw a box at the top labeled IDEA.', 'Draw arrows down to boxes for: Introduced, Committee, House vote, Senate vote, President.', 'From the President box, draw two arrows: one to SIGNS = LAW and one to VETO.', 'From VETO, draw an arrow to OVERRIDE (two-thirds of both houses) = LAW.', 'Color the arrows and add a small picture to each box.'],
        observe: 'Look at your chart. How many times does a bill get voted on before it reaches the president? Why do you think the process has so many steps?' },
      { title: 'Family Congress', time: '25 min',
        materials: ['paper', 'pencil', 'family members'],
        steps: ['Write a bill for your house, like Family movie night every Friday.', 'Have one family member act as the committee and suggest a change.', 'Have the House (you and one person) and the Senate (other family members) vote.', 'Let a parent act as president and either sign or veto the bill.', 'If it is vetoed, see if you can get a two-thirds vote to override.'],
        observe: 'Did your bill become a law? Explain which check or balance made a difference in your family Congress.' }
    ],
    think: [
      'Why do you think the writers of the Constitution made it hard to override a veto? Give a reason using the idea of checks and balances.',
      'If you could write a bill for a new national law, what would it be? Explain why it is needed and which steps it would have to go through.'
    ]
  });

  // ============================== WEEK 32: AMENDMENTS AND VOTING RIGHTS ==============================
  C.unit('social', 32, {
    title: 'Amendments and the Right to Vote',
    standard: 'SS5CG2',
    learn: [
      { h: 'Changing the Constitution', p: "An amendment is a change or addition to the Constitution. To add one, two-thirds of both the House and the Senate usually vote to propose it. Then three-fourths of the states, which is 38 of the 50 states, must ratify, or approve, it. The Constitution has 27 amendments." },
      { h: 'More people can vote', p: "At first, mostly white men who owned land could vote. Over time, amendments opened voting to more citizens. The 15th Amendment (1870) said no one could be denied the vote because of race. The 19th Amendment (1920) gave women the right to vote. The 26th Amendment (1971) lowered the voting age to 18." },
      { h: 'Georgia firsts', p: "In 1943, Georgia became the first state to let 18-year-olds vote, almost 30 years before the 26th Amendment did it for the whole country." }
    ],
    passage: [
      "The writers of the Constitution knew the country would change, so they included a way to change the Constitution itself. Usually, Congress proposes an amendment when two-thirds of the House and two-thirds of the Senate vote for it. Then the states decide. Three-fourths of the states must ratify it. Because this is so hard, only 27 amendments have been added in more than 230 years. The first ten, added in 1791, are called the Bill of Rights.",
      "When the nation began, most states let only white men who owned property vote. After the Civil War, the 15th Amendment was ratified in 1870. It said a citizen could not be kept from voting because of race. But many Southern states found other ways to stop Black men from voting, such as a fee called a poll tax and unfair reading tests. The 24th Amendment ended poll taxes in national elections in 1964, and the Voting Rights Act of 1965 ended the unfair tests.",
      "Women worked for the right to vote for more than 70 years. Leaders like Susan B. Anthony and Elizabeth Cady Stanton gave speeches, wrote articles, and marched. Some women were even arrested. Finally, in 1920, the 19th Amendment was ratified, and women across the country could vote. Georgia's legislature voted against the amendment at first. It did not officially approve it until 1970, long after it was already the law.",
      "During the Vietnam War, many people pointed out that 18-year-olds could be drafted to fight but could not vote. In 1971, the 26th Amendment lowered the voting age to 18 in every state. Georgia had already done this for its own elections in 1943, making it the first state to let 18-year-olds vote. Today, when you turn 18, you will be able to register and help choose your leaders."
    ],
    vocab: [
      ['amendment', 'a change or addition to the Constitution'],
      ['ratify', 'to officially approve'],
      ['suffrage', 'the right to vote'],
      ['poll tax', 'a fee some states charged people before they could vote'],
      ['Bill of Rights', 'the first ten amendments to the Constitution, which protect basic freedoms'],
      ['register', 'to sign up officially, such as signing up to vote']
    ],
    demo: {
      q: 'There are 50 states. How many must ratify an amendment for it to be added?',
      steps: ['Step 1: The rule says three-fourths of the states must ratify it.', 'Step 2: One-fourth of 50 is 12.5, so three-fourths is 3 times 12.5, which is 37.5.', 'Step 3: You cannot have half a state, so you must round up to the next whole state.', 'Step 4: That makes 38 states.'],
      a: '38 of the 50 states must ratify an amendment.'
    },
    items: [
      Q("What is an amendment?", ["A new state", "A change or addition to the Constitution", "A court case", "A kind of election"], 1, "An amendment changes or adds to the Constitution. The Constitution has 27 of them."),
      Q("How many states must ratify an amendment?", ["Half of the states", "Three-fourths of the states (38 of 50)", "All 50 states", "Only 10 states"], 1, "Three-fourths of the states, which is 38, must ratify an amendment. It does not have to be every state."),
      Q("What does ratify mean?", ["To reject", "To officially approve", "To write a speech", "To count votes"], 1, "To ratify means to officially approve. States ratify amendments after Congress proposes them."),
      Q("How many amendments does the Constitution have?", ["10", "19", "27", "50"], 2, "The Constitution has 27 amendments. The first 10 are the Bill of Rights."),
      Q("What are the first ten amendments called?", ["The Declaration of Independence", "The Bill of Rights", "The Articles of Confederation", "The New Deal"], 1, "The first ten amendments, added in 1791, are the Bill of Rights. They protect freedoms like speech and religion."),
      Q("What did the 15th Amendment (1870) say?", ["Women can vote", "A citizen cannot be kept from voting because of race", "The voting age is 18", "Slavery is legal"], 1, "The 15th Amendment protected voting rights regardless of race. Women won the vote in the 19th, and age 18 came with the 26th."),
      Q("According to the passage, what were two ways some states kept Black men from voting after 1870?", ["Poll taxes and unfair reading tests", "Free bus rides and parades", "Long ballots and short lines", "Radio ads and newspapers"], 0, "The passage names poll taxes and unfair reading tests. These were ended by the 24th Amendment and the Voting Rights Act."),
      Q("Which amendment ended poll taxes in national elections?", ["The 15th", "The 19th", "The 24th", "The 26th"], 2, "The 24th Amendment, ratified in 1964, ended poll taxes in national elections."),
      Q("What did the 19th Amendment do?", ["Lowered the voting age", "Gave women the right to vote", "Ended slavery", "Created the Supreme Court"], 1, "The 19th Amendment, ratified in 1920, gave women the right to vote across the country."),
      Q("According to the passage, about how long did women work for the right to vote?", ["About 5 years", "More than 70 years", "Exactly 100 years", "About 1 year"], 1, "The passage says women worked for more than 70 years before the 19th Amendment was ratified."),
      Q("Which women were leaders in the fight for women's suffrage?", ["Rosa Parks and Linda Brown", "Susan B. Anthony and Elizabeth Cady Stanton", "Charlayne Hunter and Coretta Scott King", "Rosie the Riveter and Betsy Ross"], 1, "Susan B. Anthony and Elizabeth Cady Stanton led the long fight for women's right to vote."),
      Q("According to the passage, when did Georgia officially approve the 19th Amendment?", ["1920", "1943", "1970", "1865"], 2, "The passage says Georgia's legislature first voted against it and did not officially approve it until 1970."),
      Q("What did the 26th Amendment (1971) do?", ["Gave women the vote", "Lowered the voting age to 18", "Ended poll taxes", "Added the Bill of Rights"], 1, "The 26th Amendment set the voting age at 18 for all elections across the country."),
      Q("What was Georgia the first state to do in 1943?", ["Let women vote", "Let 18-year-olds vote", "Ratify the Bill of Rights", "End poll taxes"], 1, "Georgia was the first state to let 18-year-olds vote, in 1943, almost 30 years before the 26th Amendment."),
      Q("What does suffrage mean?", ["Suffering", "The right to vote", "A long speech", "A kind of tax"], 1, "Suffrage means the right to vote. People who fought for women's voting rights were called suffragists.")
    ],
    activities: [
      { title: 'Voting rights timeline', time: '25 min',
        materials: ['long strip of paper', 'ruler', 'markers'],
        steps: ['Draw a line from 1780 to 2000.', 'Add 1791 Bill of Rights.', 'Add 1870 15th Amendment: race cannot be used to deny the vote.', 'Add 1920 19th Amendment: women can vote.', 'Add 1943 Georgia lets 18-year-olds vote, and 1964 24th Amendment ends poll taxes.', 'Add 1965 Voting Rights Act and 1971 26th Amendment: voting age 18.'],
        observe: 'What pattern do you see on your timeline? Explain how the group of people allowed to vote changed over time.' },
      { title: 'Voter interview', time: '20 min',
        materials: ['notebook', 'pencil', 'an adult who votes'],
        steps: ['Ask: How old were you when you first voted?', 'Ask: How do you register to vote in Georgia?', 'Ask: Where do you go to vote, and what is it like?', 'Ask: Why do you think voting matters?', 'Write their answers and one question you still wonder about.'],
        observe: 'Based on your interview, why do you think people fought so hard for the right to vote? Use at least one answer from your interview.' }
    ],
    think: [
      'Why do you think the writers of the Constitution made it so hard to add an amendment? Is that a good thing or a bad thing? Explain.',
      'Choose the 15th, 19th, or 26th Amendment. Explain who gained the right to vote and why that change was fair.'
    ]
  });

  // ============================== WEEK 33: RIGHTS, RESPONSIBILITIES, AND GEORGIA GOVERNMENT ==============================
  C.unit('social', 33, {
    title: 'Rights, Responsibilities, and Georgia Government',
    standard: 'SS5CG1',
    learn: [
      { h: 'Rights and responsibilities', p: "A right is a freedom that belongs to you, like freedom of speech or freedom of religion. A responsibility is a duty you owe to others. Good citizens obey laws, pay taxes, serve on juries when called, vote when they are adults, and respect the rights of others." },
      { h: 'Georgia\'s state government', p: "Georgia's government has three branches, like the national government. The governor leads the executive branch. The General Assembly makes state laws. The courts, led by the Supreme Court of Georgia, decide cases. The state capital is Atlanta." },
      { h: 'Local government', p: "Georgia has 159 counties, more than any state except Texas. Counties are often led by a board of commissioners. Cities usually have a mayor and a city council. Local governments run services like police, fire departments, libraries, and parks." }
    ],
    passage: [
      "Americans have many rights. The First Amendment protects freedom of religion, freedom of speech, freedom of the press, the right to gather peacefully, and the right to ask the government to change things. Other amendments protect the right to a fair trial with a jury. These rights protect every citizen, but they come with responsibilities. If you want freedom of speech, you must respect other people's right to speak, too. Citizens also have duties, like obeying laws, paying taxes, and serving on a jury when they are called.",
      "Georgia has its own constitution and its own government with three branches. The governor is the head of the executive branch and is elected for a four-year term. The legislative branch is the General Assembly. It has two parts: the Senate, with 56 members, and the House of Representatives, with 180 members. They meet each year at the state capitol in Atlanta, a building with a dome covered in gold from the Dahlonega area. The judicial branch is the state court system. The Supreme Court of Georgia is the highest court in the state.",
      "Georgia is divided into 159 counties. Each county has a county seat, the town where its government offices are. Most counties are run by a board of commissioners. Voters also elect a sheriff, who leads the county's law enforcement. Cities have their own governments, usually with a mayor and a city council.",
      "Each level of government has its own jobs. The national government prints money, runs the military, and makes treaties with other countries. The state government builds highways, runs state parks, and gives driver's licenses. Local governments run police and fire departments, collect trash, keep libraries open, and take care of local parks. Your family pays for these services through taxes, such as sales tax and property tax."
    ],
    vocab: [
      ['right', 'a freedom that belongs to a person and is protected by law'],
      ['responsibility', 'a duty that a person should do for others or for the community'],
      ['General Assembly', 'Georgia\'s lawmaking branch, made up of the state Senate and House of Representatives'],
      ['county', 'a part of a state that has its own local government'],
      ['county seat', 'the town where a county\'s government offices are located'],
      ['tax', 'money people pay to the government to pay for services like roads and schools']
    ],
    demo: {
      q: 'A tree falls across a city street, a state highway needs repair, and a treaty with Canada is signed. Which level of government handles each?',
      steps: ['Step 1: City streets and local services like clearing a fallen tree belong to the local government.', 'Step 2: Highways that connect parts of Georgia are built and repaired by the state government.', 'Step 3: Treaties with other countries are made by the national government.', 'Step 4: Match each job to its level: local, state, national.'],
      a: 'Local government clears the city street, the state repairs the highway, and the national government makes the treaty.'
    },
    items: [
      Q("What is the difference between a right and a responsibility?", ["They mean the same thing", "A right is a freedom you have; a responsibility is a duty you owe", "A right is a duty; a responsibility is a freedom", "Only adults have rights"], 1, "A right is a freedom that belongs to you. A responsibility is something you should do for others, like obeying laws."),
      Q("Which freedom is protected by the First Amendment?", ["Freedom of speech", "The right to drive", "The right to free food", "The right to skip school"], 0, "The First Amendment protects freedom of religion, speech, press, peaceful gathering, and asking the government for change."),
      Q("Which is a responsibility of an adult citizen?", ["Serving on a jury when called", "Owning a car", "Watching the news every day", "Joining a sports team"], 0, "Serving on a jury is a duty of citizens. It helps make sure trials are fair."),
      Q("According to the passage, what must you do if you want freedom of speech?", ["Talk louder than others", "Respect other people's right to speak too", "Never speak in public", "Ask the governor first"], 1, "The passage says if you want freedom of speech, you must respect other people's right to speak, too."),
      Q("Who leads Georgia's executive branch?", ["The mayor", "The governor", "The president", "The sheriff"], 1, "The governor leads Georgia's executive branch. The president leads the national executive branch."),
      Q("What is Georgia's lawmaking body called?", ["Congress", "The General Assembly", "The City Council", "The Supreme Court"], 1, "Georgia's legislative branch is the General Assembly. Congress is the national lawmaking body."),
      Q("According to the passage, how many members are in the Georgia state Senate?", ["56", "100", "180", "159"], 0, "The passage says the Georgia Senate has 56 members. The Georgia House has 180, and 159 is the number of counties."),
      Q("According to the passage, how many members are in the Georgia House of Representatives?", ["56", "180", "435", "14"], 1, "The passage says the Georgia House has 180 members. The US House has 435, and Georgia sends 14 of them."),
      Q("What is the highest court in Georgia?", ["The US Supreme Court", "The Supreme Court of Georgia", "The county court", "The General Assembly"], 1, "The Supreme Court of Georgia is the highest state court. The US Supreme Court is the highest court in the nation."),
      Q("How many counties does Georgia have?", ["50", "100", "159", "254"], 2, "Georgia has 159 counties, the second most of any state after Texas."),
      Q("According to the passage, what covers the dome of the Georgia capitol?", ["Copper", "Gold from the Dahlonega area", "Silver", "Glass"], 1, "The passage says the capitol dome is covered in gold from the Dahlonega area, where Georgia's gold rush happened."),
      Q("What is a county seat?", ["A chair in the courthouse", "The town where a county's government offices are", "A seat in Congress", "The biggest city in Georgia"], 1, "A county seat is the town where the county government has its offices, like the courthouse."),
      Q("Who usually leads a city government?", ["A governor", "A mayor and city council", "A sheriff", "A senator"], 1, "Cities usually have a mayor and a city council. Sheriffs lead county law enforcement."),
      Q("Which job belongs to the state government?", ["Printing money", "Giving driver's licenses", "Making treaties with other countries", "Running the US Army"], 1, "States issue driver's licenses. Printing money, treaties, and the military are national jobs."),
      Q("According to the passage, how do families pay for government services?", ["Through taxes like sales tax and property tax", "Through bake sales", "They do not pay", "By trading cows"], 0, "The passage says families pay for services through taxes, such as sales tax and property tax.")
    ],
    activities: [
      { title: 'Map my county', time: '25 min',
        materials: ['Georgia county map (printed or online with a parent)', 'colored pencils', 'paper'],
        steps: ['With a parent, find your county on a Georgia county map.', 'Color your county and write its name.', 'Find and label your county seat.', 'Color the counties that touch yours a second color.', 'Mark Atlanta, the state capital, with a star.'],
        observe: 'How far is your county seat from Atlanta? Why do you think Georgia has so many counties? Share an idea.' },
      { title: 'Levels of government sorting chart', time: '20 min',
        materials: ['paper', 'pencil', 'scissors', 'glue or tape'],
        steps: ['Make three columns on paper: National, State, Local.', 'On small slips, write jobs: print money, run state parks, fire department, make treaties, highways, library, military, driver\'s license, trash pickup.', 'Sort each slip into the right column.', 'Glue or tape them down.', 'Add one more job you can think of to each column.'],
        observe: 'Which level of government do you think affects your daily life the most? Explain with at least two examples.' }
    ],
    think: [
      'Choose one right that is important to you. Explain why it matters and what responsibility comes with it.',
      'If you could ask your mayor or county commissioners to fix one thing in your community, what would it be? Explain why and how it would help people.'
    ]
  });

  // ============================== WEEK 34: ECONOMICS ==============================
  C.unit('social', 34, {
    title: 'Trade, Specialization, and Productivity',
    standard: 'SS5E1',
    learn: [
      { h: 'Specialization and trade', p: "Specialization means focusing on making one kind of good or service you do well. When people, states, or countries specialize, they usually trade with others to get the things they do not make. Voluntary exchange means people trade because they choose to, and both sides expect to be better off." },
      { h: 'Productivity', p: "Productivity is how much someone can make in a certain amount of time. Better tools, called capital goods, and more skills and training, called human capital, raise productivity. A farmer with a tractor can plant far more than a farmer with only a hoe." },
      { h: 'Choices and costs', p: "Because we cannot have everything, every choice has an opportunity cost: the next best thing you give up. Countries sometimes limit trade with tariffs, which are taxes on goods from other countries, or with quotas, which limit how much can come in." }
    ],
    passage: [
      "Imagine trying to make everything you use by yourself: your food, your clothes, your shoes, and your pencils. It would take forever, and you would not be very good at most of it. Instead, people specialize. A baker bakes bread, a dentist fixes teeth, and a factory worker builds parts. Then they use the money they earn to buy what others make. Because each person gets very good at one job, more and better things get made.",
      "Places specialize, too. Georgia's warm climate and rich soil help farmers grow peanuts, pecans, cotton, and the famous sweet Vidalia onions. Georgia raises more broiler chickens, the kind people eat, than any other state. The city of Dalton makes so much carpet that it is called the Carpet Capital of the World. Georgia then trades these goods to other states and countries. The Port of Savannah, one of the busiest ports in the country, ships goods across the oceans and brings in goods from around the world.",
      "Trade works best when it is voluntary. That means no one is forced. If you trade your apple for a friend's granola bar, you both agree because you each want what the other has more. Both of you end up happier.",
      "Productivity is how much can be produced in a set amount of time. Workers become more productive with capital goods, such as tools, machines, and computers. They also become more productive with human capital, the knowledge and skills people gain from school and practice. Natural resources, like land and water, and entrepreneurs, people who start new businesses, help too. When productivity rises, a country can make more goods and services, and people usually have more choices."
    ],
    vocab: [
      ['specialization', 'focusing on making one kind of good or service'],
      ['voluntary exchange', 'a trade that both sides freely choose because each expects to benefit'],
      ['productivity', 'how much can be made in a certain amount of time'],
      ['capital goods', 'tools, machines, and buildings used to make other goods'],
      ['human capital', 'the knowledge and skills a worker has'],
      ['opportunity cost', 'the next best choice you give up when you make a decision']
    ],
    demo: {
      q: 'Maya can bake 10 cookies an hour with a spoon. With an electric mixer, she bakes 25 an hour. What happened to her productivity, and why?',
      steps: ['Step 1: Productivity means how much she makes in a set amount of time, here one hour.', 'Step 2: Before: 10 cookies per hour. After: 25 cookies per hour.', 'Step 3: 25 minus 10 is 15, so she makes 15 more cookies each hour.', 'Step 4: The mixer is a capital good, a tool that helps her work faster.'],
      a: 'Her productivity went up by 15 cookies an hour because the mixer, a capital good, made her work faster.'
    },
    items: [
      Q("What is specialization?", ["Making everything yourself", "Focusing on making one kind of good or service", "Buying only special things", "Saving money in a bank"], 1, "Specialization means focusing on one kind of work, like a baker baking bread. Then people trade for the rest."),
      Q("Why do people and places that specialize need to trade?", ["They have too much money", "They need to get the things they do not make", "Trading is required by law", "They want to get rid of everything"], 1, "If you only make one thing, you must trade to get everything else you need."),
      Q("What is voluntary exchange?", ["A trade where one person is forced", "A trade both sides freely choose because each expects to benefit", "Giving something away for free", "Stealing"], 1, "In voluntary exchange, both people agree to trade because each thinks they will be better off."),
      Q("According to the passage, what is Dalton, Georgia, called?", ["The Peach Capital", "The Carpet Capital of the World", "The Peanut Capital", "The Chicken Capital"], 1, "The passage says Dalton makes so much carpet that it is called the Carpet Capital of the World."),
      Q("According to the passage, Georgia raises more of which product than any other state?", ["Corn", "Broiler chickens", "Oranges", "Wheat"], 1, "The passage says Georgia raises more broiler chickens than any other state."),
      Q("What is the Port of Savannah used for?", ["Making carpet", "Shipping goods to and from other countries", "Growing onions", "Training soldiers"], 1, "The Port of Savannah is one of the busiest in the country. Ships carry goods in and out to trade with the world."),
      Q("According to the passage, why do both people end up happier when they trade an apple for a granola bar?", ["They were forced to trade", "They each want what the other has more", "They both lost something", "A teacher told them to"], 1, "The passage says both agree because each wants what the other has more, so both end up better off."),
      Q("What is productivity?", ["How much money you save", "How much can be made in a certain amount of time", "How many workers a company has", "How far goods travel"], 1, "Productivity measures output over time, such as cookies per hour or cars per day."),
      Q("Which is an example of a capital good?", ["A tractor on a farm", "A worker's math skills", "A river", "A sandwich you eat for lunch"], 0, "A tractor is a tool used to produce other goods, so it is a capital good. Skills are human capital, and a river is a natural resource."),
      Q("What is human capital?", ["Money in a bank", "The knowledge and skills a worker has", "A factory building", "The capital city"], 1, "Human capital is knowledge and skills. Going to school and practicing builds human capital."),
      Q("How can a business raise its workers' productivity?", ["Take away their tools", "Train them and give them better tools", "Make the workday shorter with no changes", "Hire fewer people and give them no training"], 1, "Training builds human capital, and better tools are capital goods. Both help workers produce more in the same time."),
      Q("What is an entrepreneur?", ["A person who starts a new business", "A government worker", "A kind of tax", "A ship captain"], 0, "An entrepreneur takes a risk to start a business, like opening a bakery or inventing a new product."),
      Q("Ava has one free hour. She can either read a book or play outside. She chooses to read. What is her opportunity cost?", ["Reading the book", "Playing outside", "Nothing at all", "Her free hour"], 1, "Opportunity cost is the next best thing you give up. She gave up playing outside to read."),
      Q("What is a tariff?", ["A tax on goods from other countries", "A kind of ship", "A free trade", "A bank loan"], 0, "A tariff is a tax on imports, goods brought in from another country. It makes those goods cost more."),
      Q("According to the passage, which of these crops do Georgia farmers grow?", ["Peanuts and Vidalia onions", "Pineapples and coffee", "Rice and bananas", "Maple syrup and blueberries only"], 0, "The passage lists peanuts, pecans, cotton, and Vidalia onions as Georgia crops.")
    ],
    activities: [
      { title: 'Georgia products map', time: '25 min',
        materials: ['outline map of Georgia', 'colored pencils', 'internet or atlas with a parent'],
        steps: ['Draw a small carpet near Dalton in northwest Georgia.', 'Draw an onion near Vidalia in southeast Georgia.', 'Draw a ship at Savannah on the coast.', 'Draw peanuts somewhere in south Georgia, where many peanuts grow.', 'Draw a chicken in north Georgia, where many broiler chickens are raised.', 'Make a map key that explains each picture.'],
        observe: 'Why do you think different parts of Georgia specialize in different products? Think about land, climate, and location.' },
      { title: 'Productivity test', time: '20 min',
        materials: ['paper', 'scissors', 'a stapler', 'a timer', 'a parent to help'],
        steps: ['Time yourself folding and cutting 10 paper squares by hand without folding guides.', 'Now make a tool: fold a stack of paper and cut several layers at once (with a parent helping with scissors).', 'Time how long it takes to make 10 squares with the new method.', 'Write both times.', 'Figure out how many squares you could make in 5 minutes with each method.'],
        observe: 'Which method was more productive? Explain how better tools or methods change productivity, using your times as evidence.' }
    ],
    think: [
      'Think about one thing your family buys that comes from another state or country. Why does your family trade for it instead of making it yourselves?',
      'Describe a choice you made recently. What was the opportunity cost? Was it worth it? Explain.'
    ]
  });

  // ============================== WEEK 35: PERSONAL FINANCE ==============================
  C.unit('social', 35, {
    title: 'Banks, Budgets, Saving, and Credit',
    standard: 'SS5E3',
    learn: [
      { h: 'Banks and saving', p: "A bank is a business that keeps money safe, pays interest on savings, and lends money. Interest is extra money: a bank pays you interest when you save, and you pay interest when you borrow. Saving means keeping some money to use later." },
      { h: 'Budgets', p: "A budget is a plan for how you will use your money. You list your income, the money that comes in, and your expenses, the money that goes out. A good budget puts needs first, sets aside saving and giving, and then plans for wants." },
      { h: 'Credit and choices', p: "Credit means buying something now and paying for it later. Borrowing costs extra because of interest. A wise consumer, or buyer, compares prices and quality before buying and thinks about the opportunity cost." }
    ],
    passage: [
      "Long ago, people hid coins under mattresses or in jars. But money at home could be lost, burned, or stolen. Today most families use banks. A bank keeps your money safe in an account. Most banks in the United States are insured by a government agency, which means your savings are protected up to a large amount even if the bank has trouble.",
      "Banks also pay interest. Suppose you put $100 in a savings account that pays 5 percent interest each year. After one year, the bank adds $5, so you have $105. The bank can afford to pay you because it lends money to other people, like a family buying a house or a person starting a business. Those borrowers pay the bank back with even more interest.",
      "Borrowing is called credit. A credit card lets you buy something today and pay later. That can be helpful in an emergency, but if you do not pay the full amount on time, you owe interest, and the item ends up costing more. People who pay back what they borrow on time build a good credit history. Lenders then trust them to borrow again.",
      "The best way to manage money is with a budget. Let's say Lily earns $20 a month doing chores. Her family teaches her to give first, so she puts $2 in a giving jar for church. She saves $8 for a new bike. That leaves $10 to spend. When she wants a $10 toy and a $6 book, she has to choose, because buying both would cost $16. If she chooses the book, she has $4 left to save or spend later.",
      "Being a smart consumer means comparing prices, thinking about quality, and asking: Is this a need or a want? Ads can make things look better than they are, so wise buyers take time to decide."
    ],
    vocab: [
      ['interest', 'extra money paid for saving money in a bank or charged for borrowing money'],
      ['budget', 'a plan for how to earn, save, give, and spend money'],
      ['income', 'money that a person earns or receives'],
      ['expense', 'money that a person spends on something'],
      ['credit', 'buying or borrowing now and paying the money back later'],
      ['consumer', 'a person who buys and uses goods and services']
    ],
    demo: {
      q: 'Sam earns $30. He gives $3, saves $12, and spends the rest. How much does he have to spend?',
      steps: ['Step 1: Add the money Sam sets aside first: $3 for giving plus $12 for saving equals $15.', 'Step 2: Subtract that from his income: $30 minus $15 equals $15.', 'Step 3: Check: $3 + $12 + $15 = $30. It matches his income.', 'Step 4: So Sam can plan to spend $15.'],
      a: 'Sam has $15 to spend.'
    },
    items: [
      Q("What are three things a bank does?", ["Keeps money safe, pays interest on savings, and lends money", "Makes laws, collects trash, and runs parks", "Prints newspapers, sells cars, and grows food", "Builds roads, runs schools, and teaches classes"], 0, "Banks keep deposits safe, pay savers interest, and lend money to borrowers. Laws and parks are government jobs."),
      Q("What is interest?", ["A hobby you enjoy", "Extra money paid for saving or charged for borrowing", "A kind of coin", "A bank building"], 1, "Interest is the price of using money. Savers earn it; borrowers pay it."),
      Q("According to the passage, what happens to $100 saved for one year at 5 percent interest?", ["It becomes $95", "It becomes $105", "It becomes $150", "It stays $100"], 1, "The passage explains the bank adds $5, so you have $105. Five percent of $100 is $5."),
      Q("According to the passage, how can a bank afford to pay interest to savers?", ["It prints its own money", "It lends money to borrowers who pay back even more interest", "The government gives it free money", "It keeps all the money in a vault"], 1, "Banks lend savers' money to borrowers, who pay more interest than the bank pays savers."),
      Q("What is a budget?", ["A kind of bank", "A plan for how to use your money", "A type of credit card", "A store that sells cheap things"], 1, "A budget is a plan that lists income and expenses so you can make wise choices."),
      Q("What is income?", ["Money you spend", "Money that comes in, such as pay for work", "Money you owe", "A bill from the store"], 1, "Income is money you earn or receive. Expenses are money going out."),
      Q("Which of these is a need, not a want?", ["A new video game", "Food for dinner", "A second bike", "Candy"], 1, "Needs are things you must have to live, like food, water, shelter, and clothing. The others are wants."),
      Q("What is credit?", ["Buying or borrowing now and paying back later", "Paying cash right away", "Money that never has to be paid back", "A coin collection"], 0, "Credit means you get something now and promise to pay later, usually with interest."),
      Q("According to the passage, what happens if you do not pay a credit card in full on time?", ["The item becomes free", "You owe interest, so the item costs more", "The bank pays for it", "Nothing happens"], 1, "The passage says if you do not pay the full amount on time, you owe interest and the item costs more."),
      Q("How does a person build a good credit history?", ["By borrowing a lot and never paying it back", "By paying back what they borrow on time", "By hiding money at home", "By spending all their income"], 1, "Paying on time shows lenders you can be trusted, which builds a good credit history."),
      Q("According to the passage, how much does Lily put in her giving jar?", ["$2", "$8", "$10", "$20"], 0, "The passage says Lily puts $2 in a giving jar for church. She saves $8 and has $10 left to spend."),
      Q("Lily has $10 to spend. The toy costs $10 and the book costs $6. Why can't she buy both?", ["The store is closed", "Together they cost $16, which is more than $10", "Books cannot be bought", "She has $20 to spend"], 1, "$10 + $6 = $16, and she only has $10 to spend, so she must choose one."),
      Q("If Lily chooses the $6 book, how much of her $10 is left?", ["$2", "$4", "$6", "$16"], 1, "$10 minus $6 equals $4. That is the money she has left."),
      Q("What is a consumer?", ["A person who buys and uses goods and services", "A person who makes laws", "A bank worker only", "A factory machine"], 0, "A consumer buys and uses goods and services. Everyone is a consumer when they shop."),
      Q("What does a wise consumer do before buying?", ["Buys the first thing they see", "Compares prices and quality and asks if it is a need or a want", "Believes every ad", "Always buys the most expensive item"], 1, "Wise consumers compare, think about quality, and avoid being fooled by ads.")
    ],
    activities: [
      { title: 'Make a family-style budget', time: '25 min',
        materials: ['paper', 'pencil', 'calculator (optional)', 'three jars or envelopes labeled Give, Save, Spend'],
        steps: ['Pretend you earn $25 this month.', 'Decide how much to put in Give, Save, and Spend. Write the amounts.', 'Check that your three amounts add up to exactly $25.', 'List two things you would like to buy with your Spend money and their prices.', 'Decide which you can afford, and figure out what is left over.'],
        observe: 'Was it hard to stay within your budget? Explain one choice you made and its opportunity cost.' },
      { title: 'Comparison shopping', time: '20 min',
        materials: ['store ads, flyers, or an online store with a parent', 'paper', 'pencil'],
        steps: ['Pick one item your family buys often, like cereal or toothpaste.', 'Find the price of that item at two or three stores or brands.', 'Write down each price and the size of the package.', 'Circle the best deal.', 'Ask a parent how they decide what to buy besides price, such as quality.'],
        observe: 'Which choice was the best deal? Would you always pick the cheapest one? Explain why or why not.' }
    ],
    think: [
      'Why is it wise to save part of your money instead of spending all of it right away? Give two reasons.',
      'Explain why using credit can be helpful but can also cost more money. Use an example in your answer.'
    ]
  });

  // ============================== WEEK 36: US GEOGRAPHY ==============================
  C.unit('social', 36, {
    title: 'US Regions, Physical Features, and Georgia\'s Place',
    standard: 'SS5G1',
    learn: [
      { h: 'Regions and states', p: "The United States has 50 states and a capital city, Washington, D.C. People often group the states into five regions: the Northeast, the Southeast, the Midwest, the Southwest, and the West. Georgia is in the Southeast." },
      { h: 'Major physical features', p: "Physical features are natural parts of the land and water. Big ones include the Appalachian Mountains in the east, the Rocky Mountains in the west, the Great Plains in the middle, the Mississippi River, the Great Lakes, and the Grand Canyon." },
      { h: 'Georgia\'s place', p: "Georgia is bordered by Tennessee and North Carolina to the north, South Carolina to the east, Florida to the south, and Alabama to the west. The Atlantic Ocean touches Georgia's southeast coast. By land area, Georgia is the largest state east of the Mississippi River." }
    ],
    passage: [
      "The United States stretches from the Atlantic Ocean in the east to the Pacific Ocean in the west. Alaska, the largest state, is in the far northwest, and Hawaii is a chain of islands in the Pacific. The smallest state is Rhode Island. Each state has a capital city where its government meets.",
      "The land changes as you cross the country. In the east, the old, rounded Appalachian Mountains run from Canada all the way down through north Georgia. Brasstown Bald, Georgia's highest point, is part of them. In the middle of the country lie the Great Plains, wide flat lands covered with grass and farms. Farther west rise the Rocky Mountains, which are much taller and more rugged. In Arizona, the Colorado River carved the deep Grand Canyon over millions of years.",
      "Water shapes the country, too. The Mississippi River flows south through the middle of the country and empties into the Gulf of Mexico, which some US maps now call the Gulf of America. Barges carry goods up and down it. In the north, the five Great Lakes, Superior, Michigan, Huron, Erie, and Ontario, hold a huge amount of fresh water.",
      "Georgia sits in the Southeast region. Its neighbors are Tennessee and North Carolina to the north, South Carolina to the east across the Savannah River, Florida to the south, and Alabama to the west. Their capitals are Nashville, Raleigh, Columbia, Tallahassee, and Montgomery. Georgia's own capital is Atlanta.",
      "Georgia has a little bit of everything: mountains in the north, the rolling hills of the Piedmont in the middle, and the flat Coastal Plain in the south, with beaches, marshes, and the Okefenokee Swamp. That variety, plus its busy ports, highways, and airport, makes Georgia an important crossroads of the country."
    ],
    vocab: [
      ['region', 'an area whose places share features like land, climate, or history'],
      ['physical feature', 'a natural part of Earth\'s surface, like a mountain, river, or lake'],
      ['border', 'a line that separates one state or country from another'],
      ['capital', 'the city where a state or country\'s government meets'],
      ['plains', 'wide areas of flat or gently rolling land'],
      ['canyon', 'a deep valley with steep sides, often carved by a river']
    ],
    demo: {
      q: 'You start in Atlanta and drive west into the next state. Which state are you in, and what is its capital?',
      steps: ['Step 1: Picture a map of Georgia with north at the top.', 'Step 2: West is to the left side of the map.', 'Step 3: The state that borders Georgia on the west is Alabama.', 'Step 4: Alabama\'s capital is Montgomery.'],
      a: 'You would be in Alabama, whose capital is Montgomery.'
    },
    items: [
      Q("How many states are in the United States?", ["48", "50", "52", "13"], 1, "There are 50 states. The original 13 colonies became the first 13 states."),
      Q("In which region is Georgia?", ["The Northeast", "The Midwest", "The Southeast", "The West"], 2, "Georgia is in the Southeast region, along with states like Florida, Alabama, and the Carolinas."),
      Q("Which state borders Georgia to the west?", ["South Carolina", "Alabama", "Tennessee", "Florida"], 1, "Alabama is west of Georgia. South Carolina is east, Florida is south, and Tennessee is north."),
      Q("Which state borders Georgia to the south?", ["Florida", "Alabama", "North Carolina", "Mississippi"], 0, "Florida is directly south of Georgia."),
      Q("According to the passage, which river separates Georgia from South Carolina?", ["The Mississippi River", "The Savannah River", "The Colorado River", "The Chattahoochee River"], 1, "The passage says South Carolina is east across the Savannah River."),
      Q("What is the capital of Georgia?", ["Savannah", "Macon", "Atlanta", "Augusta"], 2, "Atlanta is Georgia's capital. Savannah, Macon, and Augusta are large Georgia cities, but not the capital."),
      Q("What is the capital of Florida?", ["Miami", "Tallahassee", "Orlando", "Jacksonville"], 1, "Tallahassee is Florida's capital. Miami, Orlando, and Jacksonville are bigger cities, which makes them tempting choices."),
      Q("Which mountain range reaches into north Georgia?", ["The Rocky Mountains", "The Appalachian Mountains", "The Sierra Nevada", "The Andes"], 1, "The Appalachian Mountains run from Canada into north Georgia. The Rockies are in the western US."),
      Q("According to the passage, what is Georgia's highest point?", ["Stone Mountain", "Brasstown Bald", "Kennesaw Mountain", "Pikes Peak"], 1, "The passage says Brasstown Bald, part of the Appalachians, is Georgia's highest point."),
      Q("How are the Rocky Mountains different from the Appalachian Mountains?", ["The Rockies are taller and more rugged", "The Rockies are older and rounder", "The Rockies are in the east", "There is no difference"], 0, "The Rockies are taller and more rugged. The Appalachians are older and worn down into rounded shapes."),
      Q("What are the Great Plains?", ["A group of islands", "Wide, flat lands in the middle of the country", "A chain of mountains", "A desert canyon"], 1, "The Great Plains are wide, flat grasslands and farmland in the middle of the US."),
      Q("Which river carved the Grand Canyon?", ["The Mississippi River", "The Colorado River", "The Savannah River", "The Ohio River"], 1, "The Colorado River carved the Grand Canyon in Arizona over millions of years."),
      Q("Which of these is one of the five Great Lakes?", ["Lake Lanier", "Lake Erie", "Lake Tahoe", "Lake Okeechobee"], 1, "The Great Lakes are Superior, Michigan, Huron, Erie, and Ontario. Lake Lanier is a lake in Georgia."),
      Q("According to the passage, what is the flat region in the south of Georgia called?", ["The Great Plains", "The Coastal Plain", "The Piedmont", "The Rocky Mountains"], 1, "The passage says the flat Coastal Plain is in the south, with beaches, marshes, and the Okefenokee Swamp. The Piedmont is in the middle."),
      Q("By land area, Georgia is the largest state...", ["In the whole country", "East of the Mississippi River", "West of the Rocky Mountains", "In the Midwest"], 1, "Georgia is the largest state east of the Mississippi River by land area. Alaska is the largest state in the country.")
    ],
    activities: [
      { title: 'Color the five regions', time: '30 min',
        materials: ['printed outline map of the US', 'five colored pencils', 'pencil'],
        steps: ['Color the Northeast states one color.', 'Color the Southeast states a second color, and outline Georgia in a dark line.', 'Color the Midwest, Southwest, and West each a different color.', 'Draw the Appalachian Mountains, the Rocky Mountains, and the Mississippi River with symbols.', 'Label the Great Lakes and the Grand Canyon.', 'Make a map key for colors and symbols.'],
        observe: 'Which physical feature is closest to Georgia? How do you think the land in a region affects how people live and work there?' },
      { title: 'Georgia neighbors capitals game', time: '20 min',
        materials: ['index cards', 'marker', 'a family helper'],
        steps: ['Write each of Georgia\'s five neighboring states on its own card, plus Georgia.', 'Write each capital on a separate card: Atlanta, Nashville, Raleigh, Columbia, Tallahassee, Montgomery.', 'Shuffle the cards and lay them face down.', 'Take turns flipping two cards, trying to match each state with its capital.', 'When you make a match, say which direction that state is from Georgia.'],
        observe: 'Which state and capital pairs were hardest to remember? Write a memory trick that could help you.' }
    ],
    think: [
      'If you could visit one physical feature in the United States, which would you choose and why? Describe what you would expect to see.',
      'Why do you think Georgia is called a crossroads? Use what you learned about its location, land, and ports.'
    ]
  });

  // ============================== WEEK 37: YEAR REVIEW TIMELINE ==============================
  C.unit('social', 37, {
    title: 'Review: 1900s to Today',
    standard: 'SS5H1-SS5H7',
    learn: [
      { h: 'Putting events in order', p: "Chronological order means arranging events in the order they happened. A timeline helps you see how one event can lead to the next, like how the Great Depression helped dictators rise, which led to World War II." },
      { h: 'Big themes', p: "Across the 1900s, America faced hard times, like the Depression and two world wars, and big changes, like cars, airplanes, space travel, and computers. Americans also worked to make freedom and voting rights reach more people." },
      { h: 'Georgia in the story', p: "Georgia shows up again and again: FDR's Little White House in Warm Springs, Jackie Robinson's birthplace in Cairo, Martin Luther King Jr.'s Atlanta, President Jimmy Carter from Plains, and the 1996 Olympics in Atlanta." }
    ],
    passage: [
      "In 1903, the Wright brothers made the first powered airplane flight at Kitty Hawk, North Carolina. Only 24 years later, in 1927, Charles Lindbergh flew alone across the Atlantic. The 1920s also put millions of Ford's Model T cars on the road and brought radio, jazz, and the Harlem Renaissance. In 1920, the 19th Amendment gave women the right to vote.",
      "The good times ended with the stock market crash of 1929. During the Great Depression, President Franklin Roosevelt's New Deal created jobs. FDR often rested at his Little White House in Warm Springs, Georgia. Then, on December 7, 1941, Japan attacked Pearl Harbor, and the United States entered World War II. Americans rationed, women built planes and ships, and on June 6, 1944, Allied troops landed on D-Day. The war ended in 1945, and the United Nations was formed that same year.",
      "Next came the Cold War between the US and the Soviet Union. The Berlin Wall went up in 1961. The space race began when the Soviets launched Sputnik in 1957, and Americans walked on the Moon in 1969. At home, the civil rights movement grew. Jackie Robinson joined the Brooklyn Dodgers in 1947. The Supreme Court ended school segregation in Brown v. Board of Education in 1954. Rosa Parks sparked the Montgomery bus boycott in 1955. Dr. Martin Luther King Jr. spoke at the March on Washington in 1963, and Congress passed the Civil Rights Act in 1964 and the Voting Rights Act in 1965. In 1971, the 26th Amendment lowered the voting age to 18.",
      "In 1976, Georgian Jimmy Carter was elected president. The Berlin Wall fell in 1989, and the Soviet Union broke apart in 1991. Computers and the internet changed daily life. Atlanta hosted the Olympics in 1996. On September 11, 2001, terrorists attacked the United States. In 2008, Barack Obama was elected the first African American president. History is still being written, and someday you will help write it."
    ],
    vocab: [
      ['chronological order', 'the order in which events happened, from first to last'],
      ['timeline', 'a line that shows events in the order they happened, with dates'],
      ['decade', 'a period of ten years'],
      ['century', 'a period of one hundred years'],
      ['cause', 'something that makes another event happen'],
      ['effect', 'what happens because of a cause']
    ],
    demo: {
      q: 'Put these in chronological order: Moon landing, Pearl Harbor, Berlin Wall falls, Model T first sold.',
      steps: ['Step 1: Write the year for each: Moon landing 1969, Pearl Harbor 1941, Berlin Wall falls 1989, Model T first sold 1908.', 'Step 2: Find the smallest year: 1908, the Model T.', 'Step 3: Next comes 1941, Pearl Harbor, then 1969, the Moon landing.', 'Step 4: The latest is 1989, the Berlin Wall falls.'],
      a: 'Model T (1908), Pearl Harbor (1941), Moon landing (1969), Berlin Wall falls (1989).'
    },
    items: [
      Q("Which event happened first?", ["The Moon landing", "The Wright brothers' first flight", "Pearl Harbor", "The Berlin Wall falls"], 1, "The Wright brothers flew in 1903. Pearl Harbor was 1941, the Moon landing was 1969, and the wall fell in 1989."),
      Q("According to the passage, how many years after the Wright brothers' flight did Lindbergh fly across the Atlantic?", ["14", "24", "34", "44"], 1, "The passage says only 24 years later. 1927 minus 1903 equals 24."),
      Q("Which event caused many banks and businesses to close in the 1930s?", ["D-Day", "The stock market crash of 1929", "The Moon landing", "The March on Washington"], 1, "The 1929 crash began the Great Depression, when many banks and businesses failed."),
      Q("Which event brought the United States into World War II?", ["The sinking of the Titanic", "The attack on Pearl Harbor", "The launch of Sputnik", "The fall of the Berlin Wall"], 1, "Japan's attack on Pearl Harbor on December 7, 1941, led the US to enter World War II."),
      Q("What two things happened in 1945?", ["World War II ended and the United Nations was formed", "The Berlin Wall fell and the internet began", "Sputnik launched and NASA began", "The Model T was sold and jazz was invented"], 0, "World War II ended in 1945, and the UN formed the same year to help keep peace."),
      Q("Put these civil rights events in order: Civil Rights Act, Brown v. Board, March on Washington.", ["Brown v. Board, March on Washington, Civil Rights Act", "Civil Rights Act, Brown v. Board, March on Washington", "March on Washington, Civil Rights Act, Brown v. Board", "Brown v. Board, Civil Rights Act, March on Washington"], 0, "Brown v. Board was 1954, the March on Washington was 1963, and the Civil Rights Act was 1964."),
      Q("Which happened first in the space race?", ["Apollo 11 lands on the Moon", "The Soviet Union launches Sputnik", "John Glenn orbits Earth", "NASA's last Moon landing"], 1, "Sputnik launched in 1957 and started the space race. Glenn orbited in 1962, and Apollo 11 landed in 1969."),
      Q("According to the passage, in what year did Jackie Robinson join the Brooklyn Dodgers?", ["1919", "1947", "1954", "1963"], 1, "The passage says 1947. He was born in 1919 in Cairo, Georgia."),
      Q("Which amendment from 1971 is mentioned in the passage?", ["The 15th, about race and voting", "The 19th, giving women the vote", "The 26th, lowering the voting age to 18", "The 1st, freedom of speech"], 2, "The passage says the 26th Amendment in 1971 lowered the voting age to 18. The 19th was in 1920."),
      Q("Which Georgian was elected president in 1976?", ["Martin Luther King Jr.", "Jimmy Carter", "Dean Rusk", "John Lewis"], 1, "Jimmy Carter of Plains, Georgia, was elected president in 1976."),
      Q("Which event marked the end of the Cold War?", ["The Berlin Wall going up in 1961", "The Soviet Union breaking apart in 1991", "The UN forming in 1945", "D-Day in 1944"], 1, "The Soviet Union broke apart in 1991, ending the Cold War. The wall going up in 1961 was during the Cold War, not its end."),
      Q("According to the passage, who was elected the first African American president, and when?", ["Jimmy Carter in 1976", "Barack Obama in 2008", "John Lewis in 1986", "Thurgood Marshall in 1967"], 1, "The passage says Barack Obama was elected in 2008 as the first African American president."),
      Q("How many years are in a decade?", ["5", "10", "100", "1,000"], 1, "A decade is 10 years. A century is 100 years."),
      Q("Which pair shows a cause and its effect?", ["Sputnik is launched, so the US creates NASA", "Jazz is popular, so the Berlin Wall falls", "Rosa Parks refuses her seat, so the Wright brothers fly", "The Olympics come to Atlanta, so World War II ends"], 0, "Sputnik worried Americans, so the US created NASA in 1958. The other pairs are not connected."),
      Q("Which list is in correct chronological order?", ["Great Depression, World War II, Moon landing, September 11", "World War II, Great Depression, September 11, Moon landing", "Moon landing, Great Depression, World War II, September 11", "September 11, Moon landing, World War II, Great Depression"], 0, "The Great Depression began in 1929, the US fought in World War II from 1941 to 1945, the Moon landing was 1969, and September 11 was 2001.")
    ],
    activities: [
      { title: 'Giant century timeline', time: '40 min',
        materials: ['long roll of paper or taped sheets', 'meter stick or yardstick', 'markers', 'printed or drawn pictures'],
        steps: ['Draw a long line and mark each decade from 1900 to 2030 evenly.', 'Add at least 15 events from this year, each with its date.', 'Use one color for wars, one for civil rights and voting, and one for inventions and space.', 'Put a Georgia peach symbol by every event with a Georgia connection.', 'Draw a small picture for your five favorite events.', 'Add today\'s date at the end and write: History continues.'],
        observe: 'Which decade on your timeline is the most crowded? Why do you think so many big events happened then?' },
      { title: 'Interview: history I lived through', time: '25 min',
        materials: ['notebook', 'pencil', 'a grandparent or older adult'],
        steps: ['Show the adult your timeline.', 'Ask: Which of these events do you remember living through?', 'Ask: Where were you, and how did people around you react?', 'Ask: What changed the most during your lifetime?', 'Write a short paragraph retelling their memory in your own words.'],
        observe: 'How was hearing a real person\'s memory different from reading about the event? What did you learn that a book could not tell you?' }
    ],
    think: [
      'Which event from this year do you think changed America the most? Explain using at least two facts and tell what happened because of it.',
      'Choose one person from this year whose courage you admire. Explain what they did and how you could show that same kind of courage in your own life.'
    ]
  });

})(typeof window !== 'undefined' ? window : globalThis);
