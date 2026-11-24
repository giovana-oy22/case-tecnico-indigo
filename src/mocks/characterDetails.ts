import type { Character } from '../hooks/useCharacters';

type CharacterDetails = Character & {
  description: string | null;
  age: string | null;
  dateOfBirth: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
  siteUrl: string;
};

export const characterDetailsMock: CharacterDetails[] = [
  {
    "id": 40,
    "name": {
      "full": "Luffy Monkey"
    },
    "image": {
      "large": "https://s4.anilist.co/file/anilistcdn/character/large/b40-MNypXsxSRb1R.png"
    },
    "description": "__Height:__ 172 cm\n__Affiliations:__ ~!Straw Hat Pirates (Captain); Four Emperors!~ \n__Devil Fruit:__ Gomu Gomu no Mi (Rubber-Rubber Fruit) \n__Devil Fruit Type:__ Paramecia\n~!__True Devil Fruit:__ Hito Hito no Mi Model: Nika (Human-Human Fruit)\n__True Devil Fruit Type:__ Mythical Zoan!~\n__Bounty:__ ~!3,000,000,000 (previously: 1,500,000,000, 500,000,000, 400,000,000, 300,000,000, 100,000,000 and 30,000,000)!~\n\nLuffy is the captain of the Straw Hat Pirates and is best friends with all of them and values them over all else. At first glance, Luffy does not appear to be very intelligent, often seeing things in childish manner and can easily be amazed by the simplest things. However, because he views the world in a straightforward and simple manner, he is occasionally the only person who can see past the events and see what should be done.  \n\nLuffy seems to have an unstoppable appetite, a characteristic that is common to the Japanese archetype of the (at times simple-minded) young adventurer with a heart of gold; perhaps the hunger more so in Luffy's case due to having an elastic stomach. Luffy is also another one of the several characters given the middle initial \"D\".  \n\nAlthough Luffy is fairly lightheaded and a funny character, he has an unstoppable sense of determination, optimism and commitment and will do anything to stand up for his friends and comrades. Along with that, he has great courage to back it up as well as unbelievable strength. Ever since consuming the devil fruit he was shown to be not worried about his inability to swim, much like his brother. Much of these traits are common among D's. His only display of true fear is towards his grandfather, to the point that he does not fight back and is intimidated at the mere mention of him.  \n\nLuffy never kills any of the villains, no matter how cold-hearted they are; instead, he frequently sends the villain flying, knocking them out or until the point that they are almost near death, which results in some of the villains searching for revenge, such as [Buggy the Clown](https://anilist.co/character/725) and [Alvida](https://anilist.co/character/4899). Author [Eiichiro Oda](https://anilist.co/staff/96881) explains that it's not a question of morality so much as a matter of punishing the villains for their crimes - he feels that killing the villains lets them off too lightly, whereas he considers letting them live to see their dreams be ruined a far more fitting punishment.  \n\nLuffy has a dream, and to even have a chance at achieving this dream, he says that he must find the One Piece and become King of the Pirates. He knows that to achieve his goal, he will have to defeat many strong opponents, including the World Government and his childhood hero [Shanks](https://anilist.co/character/727).",
    "age": "17-",
    "dateOfBirth": {
      "year": null,
      "month": 5,
      "day": 5
    },
    "siteUrl": "https://anilist.co/character/40"
  },
  {
    "id": 62,
    "name": {
      "full": "Zoro Roronoa"
    },
    "image": {
      "large": "https://s4.anilist.co/file/anilistcdn/character/large/b62-S7oAeA9WInjV.png"
    },
    "description": "__Height:__ 178 cm (5'10\")\n__Affiliation:__ ~!Straw Hat Pirates (current); Kuraigane Island (former, temporary); Shimotsuki Village (former)!~\n__Bounty:__  ~!1,111,000,000 (previously: 60,000,000, 120,000,000 and 320,000,000)!~\n\nZoro was the first crew member to be recruited by [Luffy](https://anilist.co/character/40/Luffy-Monkey). \n\nZoro is a skilled swordsman who fights with his own unique sword style known as santoryu (three katana fighting style). This is achieved by using one katana in each hand, and another in his mouth. He is also seen fighting with only one or two swords. When in a serious fight he ties his normally, tied on the arm bandana, on his head. Though not a samurai, he appears to maintain a certain degree of bushido, and is frequently mistaken for one. Unlike Luffy and most of the other Straw Hat pirates, Zoro has been known to kill his opponents if he has to, though never in cold blood. \n\nZoro has a stern, serious and distanced personality, however he often reacts in a goofy and exaggerated comic style due to his gruff, impatient attitude. On the ship, he normally either trains with weights or sleeps. The only work he is seen doing regularly is hoisting the anchor using his great strength. He also likes sake, almost to the degree that Luffy likes meat, but like [Nami](https://anilist.co/character/723/Nami), he never gets drunk due to his inhumanly-high endurance and tolerance for alcohol. Another notable trait is his lack of orientation, as Zoro often gets lost, even in small, familiar spaces or when being led by someone. Despite this, he is often the first to sense an enemy or danger, and the first to react. He is often displayed being well aware of dangerous situations and people around him.  \n\nZoro often reminds others of the harsh facts, which often shocks some of the other crew members, although they usually decide he is right. Zoro has also stated that he is an atheist, and has never believed in anything except himself. He often comes across as arrogant and overconfident, but only because he knows he's a strong man with great fighting ability. Even so, Zoro knows that he still has a lot of untapped potential, and is constantly seen training and trying to improve his fighting skills. He adheres to a strict sword master's code of honor, and never falsely brags or lies about his abilities, sometimes outright admitting a weakness, even to an enemy. He also never tries to escape from a fight or use trickery to win, believing that doing so is cowardly and scorning anyone who uses such tactics. Zoro is very vigorous, strong-willed, and determined.",
    "age": "19-",
    "dateOfBirth": {
      "year": null,
      "month": 11,
      "day": 11
    },
    "siteUrl": "https://anilist.co/character/62"
  },
  {
    "id": 305,
    "name": {
      "full": "Sanji"
    },
    "image": {
      "large": "https://s4.anilist.co/file/anilistcdn/character/large/b305-6lisPmHtCnLT.png"
    },
    "description": "__Height:__ 177 cm (5'9\")\n__Affiliation:__ ~!Straw Hat Pirates (current); Momoiro Island (former, temporary); Baratie (former); Germa Kingdom (former)!~\n__Bounty:__ ~!1,032,000,000 (previously; 77,000,000, 177,000,000 (Only Alive) and 330,000,000)!~\n\nSanji is the chain-smoking chef of the Straw Hat Pirate Crew. He has superb fighting skills that only make use of his legs, in an effort to minimize damage to his hands which would impair his cooking skills. Sanji uses an array of powerful and varied kicking moves when he fights. His cooking skills are world class, and he was mentored in both cooking and fighting by Chef \"Red Leg\" Zeff of the Baratie. He was born in the North Blue, but grew up in the East Blue. Sanji is trash-talking and serious, and usually gruff and impatient, especially around men. This is contrasted by his \"love-cook\" side, as he is very amorous around women. Sanji is completely devoted to any beautiful woman, usually losing all common sense and composure in front of them, then attempting to comically swoon them. He has sworn to never let insult or injury happen to any woman while he can still stand, even if that woman is trying to kill him. This is often problematic in his fighting as he can't attack female opponents, and would rather die than hurt them. All this is apparently the result of a \"strict upbringing\".\n\nHis goal in life is to find the All Blue, a legendary ocean, which contains all the fish in the world. As such, it would be paradise for any cook with as much love for his work as Sanji, who holds great respect for the tools, ingredients, and art of cooking. So great is his devotion to his calling, that Sanji will not let any person or creature starve, regardless of them being friend or foe.  Being the crew's chef, he looks out for the health of his crew mates. Sanji respects [Luffy](https://anilist.co/character/40) as a captain, but often gets angry at him for eating too much, showing disrespect for the aesthetics of cooking, and generally being daft and irresponsible. He is constantly in petty fights with [Zoro](https://anilist.co/character/62) (sometimes calling him Marimo) over each others' traits and they have developed a rivalry, but have managed to make a devastating team together. He is very protective of the female crew members and [Nami](https://anilist.co/character/723) likes to take advantage of him, exploiting his extreme servility. Sanji originally wanted to cook [Chopper](https://anilist.co/character/309), but has come to respect him as a crew member and friend. He's also good friends with [Usopp](https://anilist.co/character/724); they team up and interact often, and Sanji understands him quite well.",
    "age": "19-",
    "dateOfBirth": {
      "year": null,
      "month": 3,
      "day": 2
    },
    "siteUrl": "https://anilist.co/character/305"
  },
  {
    "id": 61,
    "name": {
      "full": "Robin Nico"
    },
    "image": {
      "large": "https://s4.anilist.co/file/anilistcdn/character/large/b61-ywXUyyocEEqt.png"
    },
    "description": "__Height:__ 188 cm (6'2\")\n__Affiliation:__ ~!Straw Hat Pirates (Current); Baltigo (Revolutionaries, Former, Temporary); Alabasta (Baroque Works, Former); Ohara (Former)!~\n__Position:__ Archaeologist\n__Devil Fruit:__  ~!Hana Hana no Mi (Flower Flower Fruit)!~\n__Devil Fruit Type:__ ~!Paramecia!~\n__Bounty:__ ~!930,000,000 (previously; 79,000,000, 80,000,000 and 130,000,000)!~\n\nRobin is the seventh member of Straw Hat's Crew. She had a bounty of 79 million beri since she was eight years old, during an incident in which she supposedly destroyed six Buster Call ships through the use of the powers she gained by eating the Hana Hana no Mi (Flower Flower or Blooming Blooming Fruit). The fruit's power enables her to conjure up multiple replicas of her body parts (most often her arms) upon any surface she is able to see making her very powerful and dexterous as a result. Robin joined the Straw Hat Pirates after [Luffy](https://anilist.co/character/40) saved her life, or (how she states it) Luffy forced her to live when she wanted to die. To atone for his crime, Robin demands that Luffy allow her to join his crew, to which he complies leaving every other crew member except [Sanji](https://anilist.co/character/305) in shock. Although feared at first, she is quickly accepted and viewed as a comrade by the crew.\n\nRobin is actually an archaeologist of talent and despises anyone who thoughtlessly damages any piece of history. The World Government fears her because she can decipher Poneglyphs (stones marked with glyphs from an ancient language), which contain details capable of reviving ancient weapons that have the power to destroy the world. In reality, Robin has stated that she does not care about ancient weapons and that her dream is to find the True History written on the Rio Poneglyph.\n\nRobin is a mysterious and serious person who appears quiet and reclusive, and the wisest in the Straw Hat's Crew. She was thought by those around her to be cold and mean, but it was proven that she is actually a kind person who always thinks before she acts. She often only speaks when something interesting or important has happened. She loves to study history, and the comfort and freedom to study and read. She is also quick to point out gross or realistically morbid facts, often creeping out [Nami](https://anilist.co/character/723) or [Usopp](https://anilist.co/character/724). Robin is the wisest and most sensible member of the crew. She has a vast knowledge of the seas and the world and usually keeps her head during surprising situations, allowing her to logically analyze the situation without losing her cool. This trait makes her different from the other Straw Hats, who often comically react melodramatically to unexpected happenings and hold irrational ideas and conclusions. Despite her attempts to keep herself distant, Robin has fallen for her new friends and has taken the role of the distant den mother.",
    "age": "28-",
    "dateOfBirth": {
      "year": null,
      "month": 2,
      "day": 6
    },
    "siteUrl": "https://anilist.co/character/61"
  }
];
