const movies = [
  {
    title: 'Bohemian Rhapsody',
    description:
      'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_QL50.jpg',
    genre: [' Biography ', ' Drama ', ' Music']
  },
  {
    title: 'Halloween',
    description:
      'Laurie Strode confronts her long-time foe Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_QL50.jpg',
    genre: [' Horror ', ' Mystery ', ' Thriller']
  },
  {
    title: 'A Star Is Born',
    description:
      "Seasoned musician Jackson Maine (Bradley Cooper) discovers-and falls in love with-struggling artist Ally (Gaga). She has just about given up on her dream to make it big as a singer - until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjE3MDQ0MTA3M15BMl5BanBnXkFtZTgwMDMwNDY2NTM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Suspiria',
    description:
      'A darkness swirls at the center of a world-renowned dance company, one that will engulf the artistic director, an ambitious young dancer, and a grieving psychotherapist. Some will succumb to the nightmare. Others will finally wake up.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjQ2MTIyNjM2MF5BMl5BanBnXkFtZTgwMDE3NDMyNjM@._V1_QL50.jpg',
    genre: [' Fantasy ', ' Horror ', ' Mystery ', ' Thriller']
  },
  {
    title: 'Venom',
    description:
      'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_QL50.jpg',
    genre: [' Action ', ' Sci-Fi']
  },
  {
    title: 'The Nutcracker and the Four Realms',
    description:
      "All Clara wants is a key - a one-of-a-kind key that will unlock a box that holds a priceless gift from her late mother. A golden thread, presented to her at godfather Drosselmeyer's annual holiday party, leads her to the coveted key-which promptly disappears into a strange and mysterious parallel world. It's there that Clara encounters a soldier named Phillip, a gang of mice and the regents who preside over three Realms: Land of Snowflakes, Land of Flowers, and Land of Sweets. Clara and Phillip must brave the ominous Fourth Realm, home to the tyrant Mother Ginger, to retrieve Clara's key and hopefully return harmony to the unstable world.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTgzOTc0NTE3Nl5BMl5BanBnXkFtZTgwODY4MDgwNjM@._V1_QL50.jpg',
    genre: [' Adventure ', ' Family ', ' Fantasy']
  },
  {
    title: 'Halloween',
    description:
      "The year is 1963, the night: Halloween. Police are called to 43 Lampkin Ln. only to discover that 15 year old Judith Myers has been stabbed to death, by her 6 year-old brother, Michael. After being institutionalized for 15 years, Myers breaks out on the night before Halloween. No one knows, nor wants to find out, what will happen on October 31st 1978 besides Myers' psychiatrist, Dr. Loomis. He knows Michael is coming back to Haddonfield, but by the time the town realizes it, it'll be too late for many people.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50.jpg',
    genre: [' Horror ', ' Thriller']
  },
  {
    title: 'Hocus Pocus',
    description:
      '300 years have passed since the Sanderson sisters were executed for practicing dark witchcraft. Returning to life thanks to a combination of a spell spoken before their demise and the accidental actions of Max, the new-kid-in-town, the sisters have but one night to secure their continuing existence...',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMmQyYmY5ZTMtM2JkNi00NmM2LWE3ZmEtYWYzZmRkZDM0ZTdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50.jpg',
    genre: [' Comedy ', ' Family ', ' Fantasy']
  },
  {
    title: 'Alpha',
    description:
      "An epic adventure set in the last Ice Age, ALPHA tells a fascinating, visually stunning story that shines a light on the origins of man's best friend. While on his first hunt with his tribe's most elite group, a young man is injured and must learn to survive alone in the wilderness. Reluctantly taming a lone wolf abandoned by its pack, the pair learn to rely on each other and become unlikely allies, enduring countless dangers and overwhelming odds in order to find their way home before winter arrives.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BODI4OTk1ODY3N15BMl5BanBnXkFtZTgwMDI1MTcwNjM@._V1_QL50.jpg',
    genre: [' Adventure ', ' Drama ', ' Family']
  },
  {
    title: 'First Man',
    description:
      'A Biopic on the life of the legendary American Astronaut Neil Armstrong from 1961-1969, on his journey to becoming the first human to walk the moon. Exploring the sacrifices and costs on the Nation and Neil himself, during one of the most dangerous missions in the history of space travel.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE1MzAtZjg3NmExODliMDQ0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_QL50.jpg',
    genre: [' Biography ', ' Drama ', ' History']
  },
  {
    title: 'The Nun',
    description:
      "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order's unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of the same demonic nun that first terrorized audiences in 'The Conjuring 2,' as the abbey becomes a horrific battleground between the living and the damned.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjEwMDE1NzI3M15BMl5BanBnXkFtZTgwNjg2NjExNjM@._V1_QL50.jpg',
    genre: [' Horror ', ' Mystery ', ' Thriller']
  },
  {
    title: 'Mile 22',
    description:
      "In a visceral modern thriller from the director of Lone Survivor, Mark Wahlberg stars as James Silva, an operative of the CIA's most highly-prized and least-understood unit. Aided by a top-secret tactical command team, Silva must retrieve and transport an asset who holds life-threatening information to Mile 22 for extraction before the enemy closes in.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNzUyODk4OTkxNF5BMl5BanBnXkFtZTgwMzY0MDgzNTM@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Crime ', ' Thriller']
  },
  {
    title: 'Hunter Killer',
    description:
      'An untested American submarine captain teams with U.S. Navy Seals to rescue the Russian president, who has been kidnapped by a rogue general.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BYjRkNzQ0NmYtZmQyMS00Yzk5LWEzZjQtYzhlOTRlMzVjMzA3XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_QL50.jpg',
    genre: [' Action ', ' Thriller']
  },
  {
    title: 'Incredibles 2',
    description:
      "While the Parr family has accepted its collective calling as superheroes, the fact remains that their special heroism is still illegal. After they are arrested after unsuccessfully trying to stop the Underminer, their future seems bleak. However, the wealthy Deavor siblings of Devtech offer new hope with a bold project to rehabilitate the public image and legal status of Supers, with Elastigirl being assigned on point to be the shining example. Now having agreed for now to stay at home to care of the kids, Mr. Incredible finds domestic life a daunting challenge, especially with baby Jack-Jack's newly emerged powers making him almost impossible to manage. However, Elastigirl soon has her own concerns dealing with the menace of a new supervillain, Screenslaver, who is wreaking havoc with his mind control abilities. Now, Elastigirl must solve the mystery of this enemy, who has malevolent designs on the world with the Parr family and friends key targets of this evil.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_UX182_CR0,0,182,268_AL_.jpg@._V1_QL50.jpg',
    genre: [
      ' Animation ',
      ' Action ',
      ' Adventure ',
      ' Comedy ',
      ' Family ',
      ' Sci-Fi'
    ]
  },
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    description:
      'The second installment of the "Fantastic Beasts" series set in J.K. Rowling\'s Wizarding World featuring the adventures of magizoologist Newt Scamander.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjAxMjM3NjAzM15BMl5BanBnXkFtZTgwNDQxNjA1NjM@._V1_QL50.jpg',
    genre: [' Adventure ', ' Family ', ' Fantasy']
  },
  {
    title: 'Bad Times at the El Royale',
    description:
      'In the late 1960s, an aging priest suffering from early onset dementia, a struggling African American female singer, a talkative salesman on vacation and an unfriendly young woman who may or may not be a hippie, arrive by chance on the same day at Lake Tahoe\'s "El Royale", a once glitzy but now rundown roadside motel lying on the very border between California and Nevada, and operated by a single troubled staff member who holds many dark secrets. Throughout the day, it becomes increasingly clear that almost no one there is exactly who they seem, but things really go from bad to worse in the evening when heavy rain hits and someone much worse than those inside arrives to find "a friend" and bring hell to all those unlucky enough to be there at the time.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BOTk1Nzk1MDc1MF5BMl5BanBnXkFtZTgwNjU2NDExNjM@._V1_QL50.jpg',
    genre: [' Crime ', ' Drama ', ' Mystery ', ' Thriller']
  },
  {
    title: 'Boy Erased',
    description:
      'The son of a Baptist preacher is forced to participate in a church-supported gay conversion program after being forcibly outed to his parents.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNzM2MzU1NTM4NF5BMl5BanBnXkFtZTgwNTMwMzI1NjM@._V1_QL50.jpg',
    genre: [' Biography ', ' Drama']
  },
  {
    title: 'Papillon',
    description:
      'Based on the international best-selling autobiographic books "Papillon" and "Banco", PAPILLON follows the epic story of Henri "Papillon" Charrière (Charlie Hunnam), a safecracker from the Parisian underworld who is framed for murder and condemned to life in the notorious penal colony on Devil\'s Island. Determined to regain his freedom, Papillon forms an unlikely alliance with quirky convicted counterfeiter Louis Dega (Rami Malek), who in exchange for protection, agrees to finance Papillon\'s escape.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_QL50.jpg',
    genre: [' Crime ', ' Drama ', ' Mystery ', ' Thriller']
  },
  {
    title: 'Beautiful Boy',
    description:
      'Based on the best-selling pair of memoirs from father and son David and Nic Sheff, Beautiful Boy chronicles the heartbreaking and inspiring experience of survival, relapse, and recovery in a family coping with addiction over many years.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNjNhNjVjZDQtMzRhMS00YmI2LTkxZmEtMDdkMWU3OWQ2NjNmXkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_QL50.jpg',
    genre: [' Biography ', ' Drama']
  },
  {
    title: 'The Meg',
    description:
      'Five years ago, expert sea diver and Naval Captain Jonas Taylor encountered an unknown danger in the unexplored recesses of the Mariana Trench that forced him to abort his mission and abandon half his crew. Though the tragic incident earned him a dishonorable discharge, what ultimately cost him his career, his marriage and any semblance of honor was his unsupported and incredulous claims of what caused it - an attack on his vessel by a mammoth, 70-foot sea creature, believed to be extinct for more than a million years. But when a submersible lies sunk and disabled at the bottom of the ocean - carrying his ex-wife among the team onboard - he is the one who gets the call. Whether a shot at redemption or a suicide mission, Jonas must confront his fears and risk his own life and the lives of everyone trapped below on a single question: Could the Carcharodon Megalodon - the largest marine predator that ever existed - still be alive ... and on the hunt?',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjg0MzA4MDE0N15BMl5BanBnXkFtZTgwMzk3MzAwNjM@._V1_QL50.jpg',
    genre: [' Action ', ' Horror ', ' Sci-Fi ', ' Thriller']
  },
  {
    title: 'BlacKkKlansman',
    description:
      "Director Spike Lee's drama was produced by the team behind Get Out and offers another provocative exploration of American race relations. In the midst of the 1970s civil rights movement, Ron Stallworth (John David Washington) becomes the first black detective on the Colorado Springs Police Department. He sets out to prove his worth by infiltrating the local chapter of the Ku Klux Klan and convinces his Jewish colleague (Adam Driver) to go undercover as a white supremacist.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjUyOTE1NjI0OF5BMl5BanBnXkFtZTgwMTM4ODQ5NTM@._V1_QL50.jpg',
    genre: [' Biography ', ' Comedy ', ' Crime ', ' Drama']
  },
  {
    title: 'Mid90s',
    description:
      "The movie follows a teenager named Stevie growing up in Los Angeles. He's struggling with his family, including his co-dependent single mom and his abusive older brother, and at school, where his richer friends seem to overlook him. When Stevie befriends a crew of skateboarders, he learns some tough lessons about class, race, and privilege.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZDhjNDQ0MjEtNWZhMy00ZTY1LWFkYmQtMWYwNDliNGQ1MWU2XkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_QL50.jpg',
    genre: [' Comedy ', ' Drama']
  },
  {
    title: 'Avengers: Infinity War',
    description:
      'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Fantasy ', ' Sci-Fi']
  },
  {
    title: 'Mamma Mia! Here We Go Again',
    description:
      "Discover Donna's (Meryl Streep, Lily James) young life, experiencing the fun she had with the three possible dads of Sophie (Amanda Seyfriend). As she reflects on her mom's journey, Sophie finds herself to be more like her mother than she ever even realized.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjEwMTM3OTI1NV5BMl5BanBnXkFtZTgwNDk5NTY0NTM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Spies in Disguise',
    description:
      "When the world's best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjA1MDQ4NTg1OF5BMl5BanBnXkFtZTgwODU3NDY2NjM@._V1_QL50.jpg',
    genre: [
      ' Animation ',
      ' Action ',
      ' Adventure ',
      ' Comedy ',
      ' Family ',
      ' Sci-Fi'
    ]
  },
  {
    title: 'It: Chapter Two',
    description:
      '27 years later, the Losers Club have grown up and moved away, until a devastating phone call brings them back.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNmU3NWI0YWYtMGM1NC00OTIwLWIzNGUtYTg3ZDkzMzFlYjZiXkEyXkFqcGdeQXVyNTY2NDExMTA@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Halloween',
    description:
      "The residents of Haddonfield don't know it yet... but death is coming to their small sleepy town. Sixteen years ago, a ten year old boy called Michael Myers brutally kills his step father, his elder sister and her boyfriend. Sixteen years later, he escapes from the mental institution and makes his way back to his hometown intent on a murderous rampage pursued by Dr Sam Loomis who is Michael's doctor and the only one who knows Michael's true evil. Elsewhere a shy teenager by the name of Laurie Strode is babysitting on the night Michael comes home... is it pure coincidence that she and her friends are being stalked by him?",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTMzOTg4MzcxNF5BMl5BanBnXkFtZTcwMzY5MDE1MQ@@._V1_QL50.jpg',
    genre: [' Fantasy ', ' Horror']
  },
  {
    title: 'It',
    description:
      "In the Town of Derry, the local kids are disappearing one by one. In a place known as 'The Barrens', a group of seven kids are united by their horrifying and strange encounters with an evil clown and their determination to kill It.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_QL50.jpg',
    genre: [' Horror ', ' Thriller']
  },
  {
    title: "The Girl in the Spider's Web: A New Dragon Tattoo Story",
    description:
      'Young computer hacker Lisbeth Salander and journalist Mikael Blomkvist find themselves caught in a web of spies, cybercriminals and corrupt government officials.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZWU4ZDI5OGEtOTdmZS00MmNiLWIzNjQtZGM1MGE0M2UzYTczXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50.jpg',
    genre: [' Crime ', ' Drama ', ' Thriller']
  },
  {
    title: 'Christopher Robin',
    description:
      "An adult Christopher Robin, who is now focused on his new life, work, and family, suddenly meets his old friend Winnie the Pooh, who returns to his unforgotten childhood past to help him return to the Hundred Acre Wood and help find Pooh's lost friends.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjAzOTM2OTAyNF5BMl5BanBnXkFtZTgwNTg5ODg1NTM@._V1_QL50.jpg',
    genre: [
      ' Animation ',
      ' Adventure ',
      ' Comedy ',
      ' Drama ',
      ' Family ',
      ' Fantasy'
    ]
  },
  {
    title: 'The Spy Who Dumped Me',
    description:
      "Audrey (Mila Kunis) and Morgan (Kate McKinnon), two thirty-year-old best friends in Los Angeles, are thrust unexpectedly into an international conspiracy when Audrey's ex-boyfriend shows up at their apartment with a team of deadly assassins on his trail. Surprising even themselves, the duo jump into action, on the run throughout Europe from assassins and a suspicious-but-charming British agent, as they hatch a plan to save the world.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNDY1MTA0NjgyN15BMl5BanBnXkFtZTgwMTEzNDQ4NTM@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Comedy']
  },
  {
    title: 'Hereditary',
    description:
      "When the matriarch of the Graham family passes away, her daughter's family begins to unravel cryptic and increasingly terrifying secrets about their ancestry.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_QL50.jpg',
    genre: [' Drama ', ' Horror ', ' Mystery ', ' Thriller']
  },
  {
    title: "Isn't It Romantic",
    description:
      'A young woman disenchanted with love mysteriously finds herself trapped inside a romantic comedy.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNzhkZmUyZTctMjM5Ny00YzRhLWI5YzUtZWJmOTBiYWYwY2Y3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Vox Lux',
    description:
      "Vox Lux follows the rise of Celeste from the ashes of a major national tragedy to pop super stardom. The film spans 18 years and traces important cultural moments through her eyes, starting in 1999 and concluding in 2017. In 1999, teenage Celeste (Raffey Cassidy) survives a violent tragedy. After singing at a memorial service, Celeste transforms into a burgeoning pop star with the help of her songwriter sister (Stacy Martin) and a talent manager (Jude Law). Celeste's meteoric rise to fame and concurrent loss of innocence dovetails with a shattering terrorist attack on the nation, elevating the young powerhouse to a new kind of celebrity: American icon, secular deity, global superstar. By 2017, adult Celeste (Natalie Portman) is mounting a comeback after a scandalous incident that derailed her career. Touring in support of her sixth album, a compendium of sci-fi anthems entitled Vox Lux, the indomitable, foul-mouthed pop savior must overcome her personal and familial struggles to ...",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTg1NzIxNDUyNF5BMl5BanBnXkFtZTgwNzY1MDI2NjM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Ant-Man and the Wasp',
    description:
      "In the aftermath of Captain America: Civil War (2016), Scott Lang grapples with the consequences of his choices as both a superhero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he's confronted by Hope van Dyne and Dr. Hank Pym with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Comedy ', ' Sci-Fi']
  },
  {
    title: 'The Grinch',
    description:
      "For their eighth fully animated feature, Illumination and Universal Pictures present The Grinch, based on Dr. Seuss' beloved holiday classic. The Grinch tells the story of a cynical grump who goes on a mission to steal Christmas, only to have his heart changed by a young girl's generous holiday spirit. Funny, heartwarming, and visually stunning, it's a universal story about the spirit of Christmas and the indomitable power of optimism. Academy Award® nominee Benedict Cumberbatch lends his voice to the infamous Grinch, who lives a solitary life inside a cave on Mt. Crumpet with only his loyal dog, Max, for company. With a cave rigged with inventions and contraptions for his day-to-day needs, the Grinch only sees his neighbors in Whoville when he runs out of food. Each year at Christmas they disrupt his tranquil solitude with their increasingly bigger, brighter, and louder celebrations. When the Whos declare they are going to make Christmas three times bigger this year, the Grinch ...",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50.jpg',
    genre: [' Animation ', ' Comedy ', ' Family ', ' Fantasy']
  },
  {
    title: 'Joker',
    description:
      'Plot kept under wraps. Film will center on how the popular comic book villain known as The Joker came to be.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjE5ZTNkNTQtZTY2Ny00YWFlLWEwNjItYjRkZDAzODg5MzA4XkEyXkFqcGdeQXVyNjYwODQ1Nzk@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Creed II',
    description:
      'Under the tutelage of Rocky Balboa, newly crowned light heavyweight champion Adonis Creed faces off against Viktor Drago, the son of Ivan Drago.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjA3MTAxNDkxMl5BMl5BanBnXkFtZTgwMzI4MzE0NjM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Mandy',
    description:
      'Taking place in 1983, Red is a lumberjack who lives in a secluded cabin in the woods. His artist girlfriend Mandy spends her days reading fantasy paperbacks. Then one day, she catches the eye of a crazed cult leader, who conjures a group of motorcycle-riding demons to kidnap her. Red, armed with a crossbow and custom Axe, stops at nothing to get her back, leaving a bloody, brutal pile of bodies in his wake.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjk1MjhmZWQtNzU3OC00NDE4LThlODQtNTdhZGM4M2E3MWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Apostle',
    description:
      "The year is 1905. Thomas Richardson travels to a remote island to rescue his sister after she's kidnapped by a mysterious religious cult demanding a ransom for her safe return. It soon becomes clear that the cult will regret the day it baited this man, as he digs deeper and deeper into the secrets and lies upon which the commune is built.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTY1NDk0NjI4MV5BMl5BanBnXkFtZTgwNjUyNzMwNjM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'The Nightmare Before Christmas',
    description:
      "Jack Skellington, the pumpkin king of Halloween Town, is bored with doing the same thing every year for Halloween. One day he stumbles into Christmas Town, and is so taken with the idea of Christmas that he tries to get the resident bats, ghouls, and goblins of Halloween Town to help him put on Christmas instead of Halloween -- but alas, they can't get it quite right.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_QL50.jpg',
    genre: [' Animation ', ' Family ', ' Fantasy ', ' Musical']
  },
  {
    title: 'The Hate U Give',
    description:
      "Starr Carter is constantly switching between two worlds: the poor, mostly black, neighborhood where she lives and the rich, mostly white, prep school she attends. The uneasy balance between these worlds is shattered when Starr witnesses the fatal shooting of her childhood best friend Khalil at the hands of a police officer. Now, facing pressures from all sides of the community, Starr must find her voice and stand up for what's right.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZDVkMWJiMzUtNjQyOS00MGVmLWJhYmMtN2IxYzU4MjY3MDRmXkEyXkFqcGdeQXVyNzA5NjIzODk@._V1_QL50.jpg',
    genre: [' Crime ', ' Drama']
  },
  {
    title: 'Aquaman',
    description:
      'Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTA1NDM2ODUxOTNeQTJeQWpwZ15BbWU4MDgxOTEyMDYz._V1_UX182_CR0,0,182,268_AL_.jpg@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Fantasy ', ' Sci-Fi']
  },
  {
    title: 'Once Upon a Time in Hollywood',
    description:
      'A faded TV actor and his stunt double embark on an odyssey to make a name for themselves in the film industry during the Helter Skelter reign of terror in 1969 Los Angeles.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTc3ODIwNzA2NF5BMl5BanBnXkFtZTgwMTUzMjA4NTM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Widows',
    description:
      '"Widows" is the story of four women with nothing in common except a debt left behind by their dead husbands\' criminal activities. Set in contemporary Chicago, amid a time of turmoil, tensions build when Veronica (Viola Davis), Alice (Elizabeth Debicki), Linda (Michelle Rodriguez) and Belle (Cynthia Erivo) take their fate into their own hands and conspire to forge a future on their own terms.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjM3ODc5NDEyOF5BMl5BanBnXkFtZTgwMTI4MDcxNjM@._V1_QL50.jpg',
    genre: [' Crime ', ' Drama ', ' Thriller']
  },
  {
    title: 'Goosebumps 2: Haunted Halloween',
    description:
      "Two young friends find a magic book that brings a ventriloquist's dummy to life.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNzgxMDQ2MDUyMF5BMl5BanBnXkFtZTgwNzgyMjQyNjM@._V1_QL50.jpg',
    genre: [' Adventure ', ' Comedy ', ' Family ', ' Fantasy ', ' Horror']
  },
  {
    title: 'The Greatest Showman',
    description:
      "Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, the American Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a tailor will manage to open a wax museum but will soon shift focus to the unique and peculiar, introducing extraordinary, never-seen-before live acts on the circus stage. Some will call Barnum's wide collection of oddities, a freak show; however, when the obsessed showman gambles everything on the opera singer Jenny Lind to appeal to a high-brow audience, he will somehow lose sight of the most important aspect of his life: his family. Will Barnum risk it all to be accepted?",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_QL50.jpg',
    genre: [' Biography ', ' Drama ', ' Musical']
  },
  {
    title: 'The Equalizer 2',
    description:
      "Director Antoine Fuqua reunites with Denzel Washington in this sequel to 2014's The Equalizer. Washington resumes his role as Robert McCall: a retired CIA Black Ops operative who works as a security guard and moonlights as a vigilante. When his long-time friend Melissa Leo Susan Plummer) is murdered, he embarks on a relentless, globe-trotting quest for vengeance.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_QL50.jpg',
    genre: [' Action ', ' Crime ', ' Thriller']
  },
  {
    title: 'Solo: A Star Wars Story',
    description:
      'With the emerging demand of hyperfuel and other resources, Han Solo finds himself in the middle of a heist alongside other criminals, where they meet the likes of Chewbacca and Lando Calrissian in an adventurous situation exposing the criminal underworld.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Fantasy ', ' Sci-Fi']
  },
  {
    title: 'London Fields',
    description:
      'Clairvoyant femme fatale Nicola Six has been living with a dark premonition of her impending death by murder. She begins a tangled love affair with three uniquely different men: one of whom she knows will be her murderer.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BYjMwYWNiN2EtMWNkMS00MDU5LThiMGMtOTk5NTQzMjQ4OTkwXkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_QL50.jpg',
    genre: [' Crime ', ' Mystery ', ' Thriller']
  },
  {
    title: 'Johnny English Strikes Again',
    description:
      "JOHNNY ENGLISH STRIKES AGAIN is the third installment of the Johnny English comedy series, with Rowan Atkinson returning as the much loved accidental secret agent. The new adventure begins when a cyber-attack reveals the identity of all active undercover agents in Britain, leaving Johnny English as the Secret Service's last hope. Called out of retirement, English dives head first into action with the mission to find the mastermind hacker. As a man with few skills and analog methods, Johnny English must overcome the challenges of modern technology to make this mission a success.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI4MjQ3MjI5MV5BMl5BanBnXkFtZTgwNjczMDE4NTM@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Comedy']
  },
  {
    title: 'Beetlejuice',
    description:
      'Adam and Barbara are a normal couple...who happen to be dead. They have given their precious time to decorate their house and make it their own, but unfortunately a family is moving in, and not quietly. Adam and Barbara try to scare them out, but end up becoming the main attraction to the money making family. They call upon Beetlejuice to help, but Beetlejuice has more in mind than just helping.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZDdmNjBlYTctNWU0MC00ODQxLWEzNDQtZGY1NmRhYjNmNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50.jpg',
    genre: [' Comedy ', ' Fantasy']
  },
  {
    title: 'Deadpool 2',
    description:
      'After losing Vanessa (Morena Baccarin), the love of his life, 4th-wall breaking mercenary Wade Wilson aka Deadpool (Ryan Reynolds) must assemble a team and protect a young, full-figured mutant Russell Collins aka Firefist (Julian Dennison) from Cable (Josh Brolin), a no-nonsense, dangerous cyborg from the future, and must also learn the most important lesson of all: to be part of a family again.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Comedy ', ' Sci-Fi']
  },
  {
    title: 'How to Train Your Dragon: The Hidden World',
    description:
      "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless' discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup's reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Coco',
    description:
      "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_QL50.jpg',
    genre: [
      ' Animation ',
      ' Adventure ',
      ' Comedy ',
      ' Family ',
      ' Fantasy ',
      ' Music ',
      ' Mystery'
    ]
  },
  {
    title: 'The Shining',
    description:
      'Signing a contract, Jack Torrance, a normal writer and former teacher agrees to take care of a hotel which has a long, violent past that puts everyone in the hotel in a nervous situation. While Jack slowly gets more violent and angry of his life, his son, Danny, tries to use a special talent, the "Shining", to inform the people outside about whatever that is going on in the hotel.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50.jpg',
    genre: [' Drama ', ' Horror']
  },
  {
    title: 'Scream',
    description:
      "A year after her mother's death, Sydney Prescott (Neve Campbell), and her friends started experiencing some strange phone calls. They later learned the calls were coming from a crazed serial killer, in a white faced mask and a large black robe, looking for revenge. His phone calls usually consist of many questions, the main one being: Whats your favorite scary movie? Along with many scary movie trivia, ending with bloody pieces of innocent lives scattered around the small town of Woodsboro.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_QL50.jpg',
    genre: [' Horror ', ' Mystery']
  },
  {
    title: 'Robin Hood',
    description:
      'Robin of Loxley (Taron Egerton) a war-hardened Crusader and his Moorish commander (Jamie Foxx) mount an audacious revolt against the corrupt English crown in a thrilling action-adventure packed with gritty battlefield exploits, mind-blowing fight choreography, and a timeless romance.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BOGQzZDM0NGUtZGE1NS00ZjQwLTk0N2EtMWI0NTgxYTkwYWQ4XkEyXkFqcGdeQXVyNDMzMzI5MjM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'The Night Comes for Us',
    description:
      'Ito (Joe Taslim), a gangland enforcer, caught amidst a treacherous and violent insurrection within his Triad crime family upon his return home from a stint abroad.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZTJhMWE4MDUtYTIzYi00M2ZmLThhNjgtZTM2YTY0NDU1NWJhXkEyXkFqcGdeQXVyOTA5NzQ0MDQ@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: "Nobody's Fool",
    description:
      'A woman is released from prison and reunites with her sister. She soon discovers that her sister is in an online relationship with a man who may not be what he seems.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjM0MjQ2OTIyNl5BMl5BanBnXkFtZTgwMDM4MTgwNjM@._V1_QL50.jpg',
    genre: [' Comedy ', ' Drama']
  },
  {
    title: 'Halloween II',
    description:
      "After Doctor Samuel Loomis shoot's Michael Myer's Six Times and falls off a Balcony. Michael escapes and continues his massacre in Haddonfield, Laurie is also sent to the Hospital and Dr Loomis gathers a Group of Police Officers to hunt Down Michael and put an end to his Murderous Rampage.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjZmYjg0ODctOTIyYy00YzhkLTgyMzEtNjUyY2JiZjVmYzI2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50.jpg',
    genre: [' Horror']
  },
  {
    title: "Ocean's Eight",
    description:
      "Danny Ocean's estranged sister Debbie attempts to pull off the heist of the century at New York City's star-studded annual Met Gala. Her first stop is to assemble the perfect all-female crew: Lou, Rose, Daphne Kluger, Nine Ball, Tammy, Amita, and Constance.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_QL50.jpg',
    genre: [' Action ', ' Comedy ', ' Crime ', ' Thriller']
  },
  {
    title: 'Ralph Breaks the Internet',
    description:
      "Taking place six years after saving the arcade from Turbo's vengeance, the Sugar Rush arcade cabinet has broken, forcing Ralph and Vanellope to travel to the Internet via the newly-installed Wi-Fi router in Litwak's Arcade to retrieve the piece capable of saving the game.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'A Quiet Place',
    description:
      'Two parents do what it takes to keep their children safe in a world full of creatures hunting every sound they can hear. Not a sound can be heard from the family hiding in silence, but all it takes is one noise and everything can go wrong.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_QL50.jpg',
    genre: [' Drama ', ' Horror ', ' Mystery ', ' Sci-Fi ', ' Thriller']
  },
  {
    title: 'Jurassic World: Fallen Kingdom',
    description:
      'Three years after the Jurassic World theme park was closed down, Owen and Claire return to Isla Nublar to save the dinosaurs when they learn that a once dormant volcano on the island is active and is threatening to extinguish all life there. Along the way, Owen sets out to find Blue, his lead raptor, and discovers a conspiracy that could disrupt the natural order of the entire planet. Life has found a way, again.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Sci-Fi']
  },
  {
    title: 'Black Panther',
    description:
      "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Sci-Fi']
  },
  {
    title: 'Hotel Transylvania 3: Summer Vacation',
    description:
      "Mavis surprises Dracula with a family voyage on a luxury Monster Cruise Ship so he can take a vacation from providing everyone else's vacation at the hotel. The rest of Drac's Pack cannot resist going along. But once they leave port, romance arises when Dracula meets the mysterious ship Captain, Ericka. Now it's Mavis' turn to play the overprotective parent, keeping her dad and Ericka apart. Little do they know that his \"too good to be true\" love interest is actually a descendant of Abraham Van Helsing, ancient nemesis to Dracula and all other monsters.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNjA1MzU5MTY3OF5BMl5BanBnXkFtZTgwNTU5MDA3NTM@._V1_QL50.jpg',
    genre: [' Animation ', ' Adventure ', ' Comedy ', ' Family ', ' Fantasy']
  },
  {
    title: 'A Simple Favor',
    description:
      'Stephanie is a single mother with a parenting vlog who befriends Emily, a secretive upper-class woman who has a child at the same elementary school. When Emily goes missing, Stephanie takes it upon herself to investigate.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZjFiMGNiNmItMzNiNi00Mjc1LTg1N2YtNWE2NTE5N2VlZTQ3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50.jpg',
    genre: [' Comedy ', ' Crime ', ' Drama ', ' Mystery ', ' Thriller']
  },
  {
    title: 'Halloween H20: 20 Years Later',
    description:
      "20 Year's After Michael Myer's Massacre in Haddonfield. Laurie Strode faked her own death and traveled to California and took on the Identity Keri Tate. Michael finds out of Laurie's new Identity and travels to California to kill his Sister, Laurie must now take on her Brother with her Son's Life at Risk.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNzA3ZjMzZWItNWUyNy00ZmNiLWIwYmYtN2UxNWUwMGY5Yzc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50.jpg',
    genre: [' Horror ', ' Thriller']
  },
  {
    title: 'Smallfoot',
    description:
      'A yeti named Migo is convinced that a human known only as "Small Foot" is real and has to prove to his tribe that it does exist with the help of Meechee and the S.E.S - Smallfoot Evidentiary Society.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTc5NzI1NjY4MV5BMl5BanBnXkFtZTgwNDIxNTIyNDM@._V1_QL50.jpg',
    genre: [
      ' Animation ',
      ' Adventure ',
      ' Comedy ',
      ' Family ',
      ' Fantasy ',
      ' Musical'
    ]
  },
  {
    title: 'Bird Box',
    description:
      'In the wake of an unknown global terror, a mother must find the strength to flee with her children down a treacherous river in search of safety. Due to unseen deadly forces, the perilous journey must be made blindly. Directed by Academy Award winner Susanne Bier, Bird Box is a thriller starring Academy Award winner Sandra Bullock, John Malkovich, Sarah Paulson, and Trevante Rhodes.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_QL50.jpg',
    genre: [' Drama ', ' Horror ', ' Sci-Fi ', ' Thriller']
  },
  {
    title: 'Outlaw King',
    description:
      "A true David v Goliath story of how the great 14th Century Scottish 'Outlaw King' Robert The Bruce used cunning and bravery to defeat and repel the much larger and better equipped occupying English army.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTc4MTU4YzEtODBiNC00NzA4LTg0NGItM2ZhZjZlNDFiNjJjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Untitled Terminator Reboot',
    description: 'Plot unknown.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTEzMTY5ODkyMTheQTJeQWpwZ15BbWU4MDgxMTQzMDYz._V1_UY268_CR110,0,182,268_AL_.jpg@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'The Goonies',
    description:
      'Mikey Walsh and Brandon Walsh are brothers whose family is preparing to move because developers want to build a golf course in the place of their neighborhood -- unless enough money is raised to stop the construction of the golf course, and that\'s quite doubtful. But when Mikey stumbles upon a treasure map of the famed "One-Eyed" Willy\'s hidden fortune, Mikey, Brandon, and their friends Lawrence "Chunk" Cohen, Clark "Mouth" Devereaux, Andrea "Andy" Carmichael, Stefanie "Stef" Steinbrenner, and Richard "Data" Wang, calling themselves The Goonies, set out on a quest to find the treasure in hopes of saving their neighborhood. The treasure is in a cavern, but the entrance to the cavern is under the restaurant of evil thief Mama Fratelli and her sons Jake Fratelli, Francis Fratelli, and the severely disfigured Lotney "Sloth" Fratelli. Sloth befriends the Goonies and decides to help them.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNGViMjJjNTUtY2IzNi00YzcyLWFjODUtMjc0NTI3YWNhNjgzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL50.jpg',
    genre: [' Adventure ', ' Comedy ', ' Family']
  },
  {
    title: 'The Post',
    description:
      "When American military analyst, Daniel Ellsberg, realizes to his disgust the depths of the US government's deceptions about the futility of the Vietnam War, he takes action by copying top-secret documents that would become the Pentagon Papers. Later, Washington Post owner, Kay Graham, is still adjusting to taking over her late husband's business when editor Ben Bradlee discovers the New York Times has scooped them with an explosive expose on those papers. Determined to compete, Post reporters find Ellsberg himself and a complete copy of those papers. However, the Post's plans to publish their findings are put in jeopardy with a Federal restraining order that could get them all indicted for Contempt. Now, Kay Graham must decide whether to back down for the safety of her paper or publish and fight for the Freedom of the Press. In doing so, Graham and her staff join a fight that would have America's democratic ideals in the balance.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjQyMjEwOTIwNV5BMl5BanBnXkFtZTgwOTkzNTMxNDM@._V1_QL50.jpg',
    genre: [' Biography ', ' Drama ', ' History ', ' Thriller']
  },
  {
    title: 'Friday the 13th',
    description:
      "One summer at Camp Crystal Lake, a group of young counselors begin to get ready to lead campers. Unfortunately for the former, someone isn't happy about what's going on in the camp and enjoys playing kill the counselor. As bodies fall to the ground in the camp, no one is safe.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50.jpg',
    genre: [' Horror ', ' Mystery ', ' Thriller']
  },
  {
    title: 'Green Book',
    description:
      'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjMyNzExNzQ5OV5BMl5BanBnXkFtZTgwNjM2MjIxNjM@._V1_QL50.jpg',
    genre: [' Biography ', ' Comedy ', ' Drama']
  },
  {
    title: 'The Witch',
    description:
      "New England, 1630: William and Katherine try to lead a devout Christian life, homesteading on the edge of an impassible wilderness, with five children. When their newborn son mysteriously vanishes and their crops fail, the family begins to turn on one another. 'The Witch' is a chilling portrait of a family unraveling within their own sins, leaving them prey for an inconceivable evil.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_QL50.jpg',
    genre: [' Horror ', ' Mystery']
  },
  {
    title: 'Mission: Impossible - Fallout',
    description:
      "Two years after Ethan Hunt had successfully captured Solomon Lane, the remnants of the Syndicate have reformed into another organization called the Apostles. Under the leadership of a mysterious fundamentalist known only as John Lark, the organization is planning on acquiring three plutonium cores. Ethan and his team are sent to Berlin to intercept them, but the mission fails when Ethan saves Luther and the Apostles escape with the plutonium. With CIA agent August Walker joining the team, Ethan and his allies must now find the plutonium cores before it's too late.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Thriller']
  },
  {
    title: 'Suicide Squad',
    description:
      "It feels good to be bad...Assemble a team of the world's most dangerous, incarcerated Super Villains, provide them with the most powerful arsenal at the government's disposal, and send them off on a mission to defeat an enigmatic, insuperable entity. U.S. intelligence officer Amanda Waller has determined only a secretly convened group of disparate, despicable individuals with next to nothing to lose will do. However, once they realize they weren't picked to succeed but chosen for their patent culpability when they inevitably fail, will the Suicide Squad resolve to die trying, or decide it's every man for himself?",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Fantasy ', ' Sci-Fi']
  },
  {
    title: 'Captain Marvel',
    description:
      "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTYzNDc5NzY5OF5BMl5BanBnXkFtZTgwMjA0OTUzNjM@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Sci-Fi']
  },
  {
    title: 'A Star Is Born',
    description:
      'Talented rock star John Norman Howard has seen his career begin to decline. Too many years of concerts and managers and life on the road have made him cynical and the monotony has taken its toll. Then he meets the innocent, pure and very talented singer Esther Hoffman. As one of his songs in the movie says "I\'m gonna take you girl, I\'m gonna show you how." And he does. He shows Esther the way to stardom while forsaking his own career. As they fall in love, her success only makes his decline even more apparent.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjk3MDQ0OWEtYTVlZi00OTM1LWEyZDEtYTEwNDcyNDZlNzQyXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Skyscraper',
    description:
      "FBI Hostage Rescue Team leader and U.S. war veteran Will Sawyer now assesses security for skyscrapers. On assignment in Hong Kong he finds the tallest, safest building in the world suddenly ablaze and he's been framed for it. A wanted man on the run, Will must find those responsible, clear his name and somehow rescue his family who are trapped inside the building - above the fire line.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BOGM3MzQwYzItNDA1Ny00MzIyLTg5Y2QtYTAwMzNmMDU2ZDgxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_QL50.jpg',
    genre: [' Action ', ' Thriller']
  },
  {
    title: 'Sicario: Day of the Soldado',
    description:
      'In this adventure/drama, FBI agent Matt Graver (Josh Brolin) enlists a mysterious operative to help investigate a Mexican drug cartel that has been smuggling terrorists into the U.S. Things escalate when the daughter of a top kingpin is abducted, forcing Graver and his partner to re-evaluate their mission.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjgyOWRhMDctZTZlNC00M2I1LWI0NDQtYzlmODdmYjY2MThiXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_QL50.jpg',
    genre: [' Action ', ' Crime ', ' Drama ', ' Thriller']
  },
  {
    title: 'A Nightmare on Elm Street',
    description:
      'On Elm Street, Nancy Thompson and a group of her friends (comprising Tina Gray, Rod Lane and Glen Lantz) are being tormented by a clawed killer in their dreams named Fred Krueger. Nancy must think quickly, as Fred tries to pick them off one by one. When he has you in your sleep, who is there to save you?',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL50.jpg',
    genre: [' Horror']
  },
  {
    title: 'The Darkest Minds',
    description:
      'After a disease killed 98% of children and young people in the United States, the 2% who managed to survive have developed superpowers, but have been locked in internment camps after being declared a threat. 16-year-old, Ruby, manages to escape from her camp and joins a group of teenagers fleeing government forces.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTUxOGE3OTUtM2I2My00YzE3LTg2NDktZTI3NjE4NDdjMGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50.jpg',
    genre: [' Sci-Fi ', ' Thriller']
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    description:
      'This is the tale of Harry Potter, an ordinary 11-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Rubeus Hagrid, the grounds keeper for Hogwarts, and quickly thrown into a world completely foreign to both him and the viewer. Famous for an incident that happened at his birth, Harry makes friends easily at his new school. He soon finds, however, that the wizarding world is far more dangerous for him than he would have imagined, and he quickly learns that not all wizards are ones to be trusted.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL50.jpg',
    genre: [' Adventure ', ' Family ', ' Fantasy']
  },
  {
    title: 'Fantastic Beasts and Where to Find Them',
    description:
      "In mid-20s New York, Newt Scamander, the British young activist wizard, arrives in town, holding a mysterious leather suitcase which shelters a wide array of diverse and magical creatures that exist among us. Amid an already fragile equilibrium of secrecy, and the increasing disasters ascribed to the dark wizard, Gellert Grindelwald, Newt's precious suitcase will be lost--and to make matters worse--several creatures will manage to escape. Before long, this situation will catch Senior Auror Percival Graves' attention who will target Newt, in the background of an invisible, devastating, and utterly unpredictable menace that still wreaks havoc on 5th Avenue. In the end, is there a hidden agenda behind Graves' intentions; moreover, what will happen to the remaining fantastic beasts still loose in the streets?",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_QL50.jpg',
    genre: [' Adventure ', ' Family ', ' Fantasy']
  },
  {
    title: 'Crazy Rich Asians',
    description:
      "The story follows Rachel Chu (Wu), an American-born Chinese economics professor, who travels to her boyfriend Nick's (Golding) hometown of Singapore for his best friend's wedding. Before long, his secret is out: Nick is from a family that is impossibly wealthy, he's perhaps the most eligible bachelor in Asia, and every single woman in his ultra-rarefied social class is incredibly jealous of Rachel and wants to bring her down.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_QL50.jpg',
    genre: [' Comedy ', ' Romance']
  },
  {
    title: 'Suspiria',
    description:
      "Suzy Bannion travels to Germany to perfect her ballet skills. She arrives at the Tanz dance academy in the pouring rain and is refused admission after another woman is seen fleeing the school. She returns the next morning and this time is let in. She learns that the young woman she saw fleeing the previous evening, Pat Hingle, has been found dead. Strange things soon begin to occur. Suzy becomes ill and is put on a special diet; the school becomes infested with maggots; odd sounds abound; and Daniel, the pianist, is killed by his own dog. A bit of research indicates that the ballet school was once a witches' coven - and as Suzy learns, still is.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjRiYTNjODctNGU1Ni00NDg3LTk0NGUtMWU0NjgyZTAyYmNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50.jpg',
    genre: [' Horror']
  },
  {
    title: 'The Conjuring',
    description:
      'In 1971, Carolyn and Roger Perron move their family into a dilapidated Rhode Island farm house and soon strange things start happening around it with escalating nightmarish terror. In desperation, Carolyn contacts the noted paranormal investigators, Ed and Lorraine Warren, to examine the house. What the Warrens discover is a whole area steeped in a satanic haunting that is now targeting the Perron family wherever they go. To stop this evil, the Warrens will have to call upon all their skills and spiritual strength to defeat this spectral menace at its source that threatens to destroy everyone involved.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: "Gerald's Game",
    description:
      'When a harmless game between a married couple in a remote retreat suddenly becomes a harrowing fight for survival, wife Jessie must confront long-buried demons within her own mind - and possibly lurking in the shadows of her seemingly empty house.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_QL50.jpg',
    genre: [' Drama ', ' Horror ', ' Thriller']
  },
  {
    title: '22 July',
    description:
      'In Norway on 22 July 2011, right-wing terrorist Anders Behring Breivik murdered 77 young people attending a Labour Party Youth Camp on Utøya Island outside of Oslo. A three-part story. About the survivors of the attacks, the political leadership of Norway, and the lawyers involved.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNGY2MmQ0YTYtNjRjOS00ZjBhLThlMDMtN2FiY2ZjODhmNzU2XkEyXkFqcGdeQXVyOTA5NzQ0MDQ@._V1_QL50.jpg',
    genre: [' Crime ', ' Drama ', ' History ', ' Thriller']
  },
  {
    title: 'Aladdin',
    description:
      'A live-action retelling of the 1992 Disney film of the same name.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI1OTI3ODc0M15BMl5BanBnXkFtZTgwNDE4OTE1NjM@._V1_QL50.jpg',
    genre: [' Adventure ', ' Family ', ' Fantasy ', ' Musical ', ' Romance']
  },
  {
    title: 'Slender Man',
    description:
      'When their friend mysteriously disappears, a group of teenage girls explore whether the culprit could be the creepy internet urban legend character Slenderman by summoning him with a ritual. They begin experiencing supernatural phenomena that make them believe the story is real and that they are now being haunted by the Slenderman. Directed by Sylvain White. Based on the character created by Eric "Victor Surge" Knudsen.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjE0MzcwMDAyNl5BMl5BanBnXkFtZTgwMzc4ODg0NDM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'The Favourite',
    description:
      "Early 18th century. England is at war with the French. Nevertheless, duck racing and pineapple eating are thriving. A frail Queen Anne (Olivia Colman) occupies the throne and her close friend Lady Sarah (Rachel Weisz) governs the country in her stead while tending to Anne's ill health and mercurial temper. When a new servant Abigail (Emma Stone) arrives, her charm endears her to Sarah. Sarah takes Abigail under her wing and Abigail sees a chance at a return to her aristocratic roots. As the politics of war become quite time consuming for Sarah, Abigail steps into the breach to fill in as the Queen's companion. Their burgeoning friendship gives her a chance to fulfill her ambitions and she will not let woman, man, politics or rabbit stand in her way.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BOTA1MTY0MDYxMF5BMl5BanBnXkFtZTgwNzY5MTk2NjM@._V1_QL50.jpg',
    genre: ['']
  },
  {
    title: 'Ready Player One',
    description:
      'In the year 2045, the real world is a harsh place. The only time Wade Watts (Tye Sheridan) truly feels alive is when he escapes to the OASIS, an immersive virtual universe where most of humanity spends their days. In the OASIS, you can go anywhere, do anything, be anyone-the only limits are your own imagination. The OASIS was created by the brilliant and eccentric James Halliday (Mark Rylance), who left his immense fortune and total control of the Oasis to the winner of a three-part contest he designed to find a worthy heir. When Wade conquers the first challenge of the reality-bending treasure hunt, he and his friends-aka the High Five-are hurled into a fantastical universe of discovery and danger to save the OASIS.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_QL50.jpg',
    genre: [' Action ', ' Adventure ', ' Sci-Fi']
  },
  {
    title: 'The House with a Clock in Its Walls',
    description:
      'Lewis Barnavelt, after losing his parents, is sent to Michigan to live with his uncle Jonathan. He discovers his uncle is a warlock, and enters a world of magic and sorcery. But this power is not limited to good people: Lewis learns of Isaac Izard, an evil wizard who constructed a magical clock with black magic, as long as it exists it will keep ticking, counting down to doomsday. He died before he could finish the clock, but he hid the clock in his house, where Uncle Jonathan now lives. Now Lewis and Jonathan must find the clock before it finishes its countdown and ends the world.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTk1MzM1ODEwOV5BMl5BanBnXkFtZTgwMTE0OTA4NTM@._V1_QL50.jpg',
    genre: [
      ' Comedy ',
      ' Family ',
      ' Fantasy ',
      ' Horror ',
      ' Mystery ',
      ' Sci-Fi ',
      ' Thriller'
    ]
  }
]

module.exports = movies
