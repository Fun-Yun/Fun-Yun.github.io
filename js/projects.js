const SITE = {
  name: "Euan Scott",
  role: "Gameplay Programmer",
  location: "Stockholm",
  school: "Forsbergs Skola",
  github: "https://github.com/Fun-Yun",
  youtube: "https://www.youtube.com/@Featherweight",
  email: "escott2245@gmail.com",
  linkedin: "",
  cv: "media/EuanScott-CV.pdf",
};

const VIDEOS = [
  {
    title: "Lost — Nuages",
    youtube: "UFnNj6O2ArQ",
    blurb: "Live Action College Music Video.",
  },
  {
    title: "sewerperson — un1d3ntifiable r3mains ft. guardin",
    youtube: "jQ6SbBL7-V8",
    blurb: "Music Video with Lyrics",
  },
  {
    title: "guardin — all I ever will be",
    youtube: "MiY7SdCYXqw",
    blurb: "Music Video with Lyrics",
  },
  {
    title: "Ouse — Ocean",
    youtube: "VbRIwnGqxcw",
    blurb: "Music Video with Lyrics",
  },
];

const UNSEEN_DOCS = {
  gdd: "# Game Design Document \n\n## Introduction\n\n### Game Overview\n\n- Working title: The Unseen\n- Genre: Puzzle / Branching Narrative\n- Platform: PC\n- High-level premise: The protagonist enters their mind and must find their \"family members\", free them from their trauma so they can unlock the secret trapped in the basement.\n- References / inspirations: The Room, Mr Robot, The Witness, Escape the Backrooms\n\n\n## Design Process\n\n### Original Goals\n\nThe goal for this project was to create a branching narrative game with several interconnected puzzles. Our requirements were to have:\n- An interaction system\n- A narrative trigger system\n- A branching/reactive narrative\n- At least 3 interconnected puzzles\n\n### Iteration\n\n[Miro board](https://miro.com/app/board/uXjVHPZzA-s=/)\n\nThe design process went through many iterations before we settled on the idea of the family in the house. We pitched a few ideas with one of them being about a person with multiple personalities trapped in an escape room. The twist would be one of the personalities trapped you in there and the player had to play through the branching narrative and uncover the truth.\n\nThis idea was then iterated on by our narrative designer (see miro board) into 3 ideas in which our group meeting decided on \"The House\".\n\nUsing a concept from therapy and psychology called \"The Internal Family System\" in which parts of the mind are represented by different \"family members\" and have different roles in dealing with the minds trauma.\n\nThis idea was fleshed out until we settled on:\n- A house representing the protagonists mind\n- 4 rooms for 4 different family members\n- A \"presence\" in the basement that has essentially corrupted the family and regressed them to mimic the protagonists real life family members\n- Solving each puzzle will free the family members spirit and allow you to confront the \"presence\" in the basement\n- Two endings will occur; one where you accept the presence and allow yourself to live with it, and another where you forget and allow this cycle to repeat until you are ready\n\n#### Father\n\nThe father is a Manager in IFS; a part that aims to control the rest of the family to protect them from any hurt. The players father was a physically abusive alcoholic, and the Father in the mind has regressed to represent this.\n\n#### Mother\n\nThe mother is also a manager but is a more manipulative, verbally abusive and perfectionist one. The players mother was very controlling to her children, just like her parents were to her, forcing the sister to be \"perfect\"\n\n#### Sister\n\nThe sister is a Firefighter in IFS; the part that comes out to do whatever it can to extinguish the fire (the pain). The players sister struggled with anorexia and bulimia, caused by the mothers abuse, leading to the sisters suicide\n\n#### Child\n\nThe child is an exile; the part of your brain that holds all the trauma and shame and is locked away from everyone else so it can't hurt you anymore. The child in the game represents the protagonists childhood trauma and is a physical manifestation of it\n\n#### The Thing in the Basement\n\nThe basement holds a \"presence\" that we intentionally left vague so whoever plays can interpret it however they want. The presence is infecting/corrupting the mind, forcing it to relive painful memories and regressing every part. It represents all the hurt and pain the Child was carrying, and the protagonist can choose to stop ignoring it and \"move it into the house\" or restart the cycle until they are ready.\n\n## Gameplay Loop / Core Mechanics\n\n### Overall Loop\n\nThe loop of the game consists of the player entering a room, engaging in each room's dialogue, solving the rooms puzzle and moving on to the next room so they can free all 4 family members. Once all 4 puzzles are solved, the basement door opens and the player is allowed into the final ending room in the basement\n\n### Father Room\n\nThe kids bedroom represents the protagonist's fractured memories of growing up with an abusive father. The bedroom, once intended to be a place of safety, instead becomes a space defined by fear and emotional isolation. As the player explores the room, the environment shifts between two states that reflect conflicting perceptions of the past one preserving familiar childhood memories, the other exposing the emotional reality hidden beneath them.\n\nThe puzzle revolves around turning the lights on and off so that the player can collect clues that change depending on the current state of the room. Each version of the bedroom reveals only part of the information needed to solve the final passcode, encouraging the player to compare the two realities. Symbolically, the mechanic reflects how traumatic memories are often fragmented and incomplete. The player cannot understand the past by remaining in a single version of the room they must confront both the comforting memories and the painful reality to move forward.\n\n\n### Mother Room\n\nThe mothers room represents the generational trauma the mother passed down onto the daughter. The strictness and perfectionism she imposed on the daughter because of how her parents made her feel. \nThe narratives role in this room is to showcase how that abuse like that can affect other siblings for example the player expresses anxiety when entering the room. \n\nThe puzzle reflects the strictness and has a strict completion order that must be followed, reminding the player of the mothers treatment toward the sister. The overall outcome of the room is an realization of the mothers trauma that caused it all.  \n\n### Child Room\nThe Child represents the player character's buried memories, childhood trauma, shame, and fears; a personification of all the vulnerable parts of the protagonist's mind. This section of the narrative focuses on the protagonist understanding who/what the Child is and easing the Child's fear of the player character. It ends with the player taking the Child's hand and leading them out of the exile, symbolizing the acceptance and reintegration of the suppressed parts of themselves.\n\nAesthetically, the room is dock covered in fog, with the Child's spirit stranded at sea, unable to find its way home. The player must guide the Child by lighting the path, while preventing birds from extinguishing the light and swarming the Child. The birds symbolize the defensive mechanisms that keep the Child separated, while the ocean represents loss, isolation, and the emotional distance that has formed between the Child and the rest of the family and the protagonist's own trauma.\n### Sister Room\n\nThe sister figure embodies unconditional love and comfort for the player character. The spectral presence represents his real sister, who died when he was very young due to complications related to anorexia and bulimia. The room evokes memories of her problematic relationship with their mother, particularly related to expectations about weight and appearance. Through this space, the narrative invites the player character to revisit and reinterpret these memories with the perspective and emotional distance of adulthood.\n\nThe sliding-tile puzzle, along with the fragmentary Venus sculpture that it forms, symbolizes the sister\u2019s distorted body-image and fractured sense of identity.\n\n\n### Basement\n\n#### Stairs\n\nThe basement is proceeded by an endless looping spiral staircase, forever keeping the player out. It's shrouded in fog with no possible way for the player to descend. The puzzle here is for the player to jump down the middle of the staircase, throwing away their fears and diving into the unknown\n\n#### Final Room\n\nThe final room is an unlit black void, with the family members spirits in each corner. In the centre of the room is a black crib with a blank doll laying in it. The family spirits each ask a different question, asking the player if they are ready to accept this \"presence\". Depending on the answers two endings then play out:\n\nGood ending: The player takes the doll's hand. A light appears within the doll, changing it's colour to white and everything fades to white. This shows the protagonist accepting and seeing the \"presence\"\n\n\"Bad\" ending: The doll sits up, pointing behind the player, telling them to leave. It then sits back down and the player starts to lose balance as their vision fades out and everything goes black. This shows the protagonist is not ready yet, and the cycle will repeat until they are.\n\n\n",
  docks: "# Docks Puzzle Documentation\n\n## Overview\n\nThe Docks Puzzle is a turn based puzzle that involves multiple actors and requires the player to light up 3 buoys, without a seagull turning them off.\n\nThe player uses a spotlight to activate dock lights, while gulls react to the puzzle state and move between targets. The system is designed so that each actor has a single job, which keeps the puzzle easy to expand or rebalance.\n\nThe gulls will always move to the first light that they see turn on, stopping to rest on a rock/rest point if it is in the water. The player can distract the gulls by illuminating the \"decoy\" light, which the gulls will always prioritise flying to.\n\n## Architecture\n\n| Class | Responsibility |\n| --- | --- |\n| DocksPuzzleManager | Owns the puzzle flow, turn order, win condition, and actor registration. |\n| SpotlightActor | Lets the player trace and hold on a target light. |\n| DockLightTemplate | Base class for dock lights, including buoys and decoys. |\n| GullActor | Handles gull movement, target selection, and turn progression. |\n| GullRestPoint | Provides blocking volumes that can interrupt gull movement. |\n\n## Puzzle Flow\n\n1. DocksPuzzleManager gathers all puzzle actors at the start of play.\n2. The puzzle enters the player's turn.\n3. The player uses SpotlightActor to trace an unlit dock light.\n4. If the beam is held long enough, the light is activated.\n5. Activated lights receive an activation order through the manager.\n6. The player ends their turn.\n7. The gull turn begins and each GullActor chooses a target based on the current puzzle state.\n8. Gulls move toward their targets, react to rest points, and complete their individual steps.\n9. The manager checks the win condition.\n10. If all required lights are active, the puzzle is completed.\n\n## Light System\n\nDockLightTemplate is the shared base for all dock lights.\n\nThis allows the puzzle to support both required targets and fake-out targets without needing separate systems.\n\n## Spotlight Interaction\n\nSpotlightActor is the player-facing interaction layer for the puzzle.\n\nIt uses a trace to find an unlit target, then keeps track of contact time until the light can be switched on.\n\nThe spotlight is also reset through the puzzle manager, which keeps the puzzle state consistent between attempts.\n\nIt rotates through BPs to visually help the player.\n\n## Gull Behaviour\n\nGullActor provides the movement and state logic for each gull in the puzzle.\n\nThe gull can move between states such as:\n\n- Idle\n- MovingToTarget\n- WaitingAtRestPoint\n- Swarming\n\nEach gull can:\n\n- Choose a target light.\n- Move through the environment in a controlled way.\n- Pause when blocked by a rest point.\n- Notify the puzzle manager when its turn step is complete.\n\nThey have a very simple flying animation and model in BPs to help achieve this.\n\n## Rest Points/Rocks\n\nGullRestPoint creates blocking zones that affect gull movement, forcing them to spend a turn on the rest point, helping shape the gull routes and can be used to create more readable or more difficult flight patterns. It has a tuneable BlockingRadius property that makes it easy to change how much space each rest point occupies in the puzzle.\n\n## Blueprint Hooks\n\nThe manager exposes Blueprint events for the major puzzle beats allowing level scripts, audio, VFX, or UI to react to the puzzle without hard-coding extra references into the C++ layer.\n\n## Advantages\n\n- The puzzle is modular and easy to create/expand in the editor.\n- Player input and creature behaviour stay cleanly separated.\n- Lights, gulls, and rest points can all be tuned independently.\n- The manager keeps the puzzle state in one place.\n- Blueprint events make it easy to extend the sequence with presentation logic.\n\n## Improvements\n\n- More visually clear assets for the decoy and rock\n- A puzzle layout that is clearer for the player to understand\n- Better seagull flight animation\n- Visual light beam from the spotlight\n",
  portal: "# Portal System Documentation\n\n## Overview\n\nI created a v1 and v2 of the portal system, a video is on the side. I wanted to use portals aesthetically to make the house feel \"wrong\". Initially the player doesn't know that they are in a mind. It also allows us to have crazier rooms without being limited by space. It is reusable and the transitions are tweakable. It also turns on/off depending on how far the player is.\n\n## Version 1 Notes\n\nI created an original portal prototype focusing on a simple walk-through portal that could show the destination space through a live render target, then move the player through the portal with overlap-driven teleport logic.\n\nLimitations: the setup was tightly coupled to one blueprint and a fixed render-target pair, which made it less flexible for scaling across more spaces. It also visually looked flat and a lot worse than the new version.\n\nV2 separated the portal sequence into a cleaner reusable system so the transition could be managed, staged, and reused more easily. It also looked a lot smoother.\n\n## Version 2\n\nThe current setup is made from a small set of project assets that each handle a different part of the experience:\n\n- Portal_BP is the main portal actor.\n- Portal_MAT handles the visual portal surface.\n- PortalMesh provides the portal geometry.\n\nThis makes the portal setup easier to understand as a complete system instead of a single teleport Blueprint. Comparison video on the right.\n\n## Advantages\n\n- Reusable across multiple levels or spaces.\n- Easier to maintain than a one-off teleport setup.\n- Supports a more polished traversal experience.\n- Offers a unique approach to level design and storytelling.\n\n## Improvements\n\n- Remove the tiny stutter that happens when you cross the portal. It's slightly managed by the 'PortalOffset' variable in the BP\n- Make it less laggy. The render targets are very intensive, which is why they turn off when player isn't close, but they still cause frame drops when active due to the resolution.\n- Allow physics objects to move through them. Could create some interesting puzzle opportunities.\n",
  stairs: "# Basement Stairs and Final Room Documentation\n\n## Overview\n\nThe basement sequence is built around an endless looping spiral staircase that acts as a traversal puzzle. The player moves through the stairs in a repeating space until they solve the puzzle by jumping down the middle of the staircase. That action takes them into the final room.\n\n## Stair Loop\n\nThe staircase is simply two spiral staircase brushes with a trigger collider halfway down. This trigger collider seamlessly teleports them backup, preventing them from ever descending fully.\n\nThe fog within the room gets heavier as you descend, acting as a very subtle hint that this staircase is never ending, forcing the player to find another way down.\n\n## Final Room\n\nThe final room contains four spirits and a doll in the crib, which is meant to be a very unexpected ending to the game. This room works as the story payoff and should feel like a final reveal rather than a normal gameplay space. The spirits ask you 4 yes/no questions, asking if you're ready to accept the \"presence\" in the crib, letting it move into your house.\n\nThe project has two ending cutscenes: a goodending and a badending. Video on the right showing both. I used this project to learn how to create cinematics in UE5, keyframing camera angles and bones of models.\n",
};

const CALLIOPE_DOCS = {
  dither: `# Camera Fade and Obstruction System Documentation

## Overview

This system fades level geometry and props between the camera and the player using a custom URP-cloned opaque shader with dithering. It keeps the player visible in isometric spaces without switching those meshes to real transparent materials, as that is very expensive. Instead it turns off a ratio of pixels in an object, tricking your brain into seeing it turn transparent.

## Architecture

- Detection: CameraFadeDetection raycasts or spherecasts from camera to player and finds obstructing objects
- Fade control: FadeObject receives fade commands and drives material properties
- Rendering: OpaqueFade_URP exposes fade/dither while staying in the opaque URP pass

## OpaqueFade_URP

A custom URP-compatible shader cloned by hand to be as close to standard URP Lit as possible, then extended for dither control. I manually exposed the values URP Lit has (metallic, smoothness, normal map, base colour) and fed them into a dither. Doing this allowed me to use any assets I wanted.

Key properties:

- Fade (0-1): 0 = fully visible, 1 = fully dithered
- DitherScale: size of the dither pattern
- BaseColor plus the standard URP lit inputs

## FadeObject

MonoBehaviour on any object that should fade when it occludes the player.

- Drives Fade through a MaterialPropertyBlock so instances can share materials
- Interpolates fade in / fade out over Inspector durations
- targetFadeAmount is usually 0.6-0.9 so walls do not vanish completely

## CameraFadeDetection

MonoBehaviour on the camera.

Each update:

1. Cast from camera to player (ray if radius is 0, sphere if not)
2. Collect FadeObject on hit colliders
3. Fade in objects that left the obstruction set
4. Fade out objects newly detected

Layer mask, ray radius, and max distance are Inspector-driven.

## Design Principles

- Non-invasive: MaterialPropertyBlock, no material instancing per wall
- Camera-centric: all decisions come from camera to player
- Shader reuse: based on URP Lit so lighting stays consistent with the rest of the station
`
};

const PROJECTS = [
  {
    id: "calliope",
    featured: true,
    group: "games",
    title: "USS Calliope",
    subtitle: "USS Calliope is an isometric survival horror prototype for PC",
    year: "2026",
    engine: "Unity",
    lang: "C#",
    team: "Forsbergs",
    role: "Camera, Shader, Level Design, Minimap",
    duration: "5 weeks - Group Project",
    overview:
      "An isometric survival horror set on an overrun space station with a short story. Players balance combat, stealth, and scarce resources while hunting the source of the infection. Click Read More for a deep dive and Playthrough linked below.",
    cover: "media/calliope/cover.png",
    shots: [],
    videos: [
      { youtube: "EgMWL9ezOO0", label: "Playthrough" },
      { youtube: "ROYIMRm0-4w", label: "Cutscenes", inline: true },
    ],
    highlight: "media/calliope/highlight.mp4",
    tags: ["Unity", "C#", "Cinemachine"],
    shipped: [
      "Dither Shader: Custom dither-fade shader so geometry between camera and player fades by killing pixels instead of changing the alpha values.",
      "Cinemachine: A “fake” isometric Cinemachine camera, plus a fly-down third-person angle I reworked from a shop into the minimap.",
      "Cutscenes: Intro and outro with no dialogue — camera, effects, music, and credits wired to Timeline. Video in the read more section.",
      "Level Design: Built every room except the bridge and observation deck with custom shader compatible prefabs.",
      "Team Direction: Helped lead organisation, wrote the GDD, pair-coded quest logic, and kept meetings on the decisions that mattered.",
    ],
    brief: [
      "The player is an engineer sent onto the USS Calliope space station after it goes silent. While initially thought to be an engineering problem, they quickly discover the station is infected and uncover the head researcher's dark secret…",
      "I created the camera, the dither fade shader, the minimap, the intro and outro cutscenes, and built most of the level. I also helped take the lead on organising the team; writing the GDD, pair-coding quest logic, and keeping meetings on the decisions that mattered.",
    ],
    sections: [
      {
        title: "My Contributions in Detail",
        subsections: [
          {
            title: "Dither Shader",
            paragraphs: [
              "I learned how to work with Unity’s shader system and created a shader that was as close to being a clone of URP as possible, with the ability to dither. I did this by manually exposing the values/variables that URP/Lit has, while feeding it into a dither.",
              "Dithering is less expensive than adjusting the alpha and works by turning off a ratio of pixels in an object, tricking your brain into seeing it turn transparent. That mattered here because an isometric view puts walls between the camera and the player constantly.",
            ],
            doc: CALLIOPE_DOCS.dither,
          },
          {
            title: "Camera System and Minimap",
            paragraphs: [
              "I used Cinemachine to create a perspective style camera with a “fake” isometric look. This allowed me to then create a camera switch system that flies down into a third person angle. This was originally going to be used for a shop system, until I reworked it into being used for the minimap.",
              "The minimap lights up depending on which room/corridor you are in. I wanted to keep it intentionally vague and simple so the player doesn’t know what to expect, but also keep it very readable.",
              "This third person perspective makes using the map more immersive. Having it as an actual object in the level and looking at it puts you more into the horror while limiting your view from the threats. I also used cinemachine for the cutscenes.",
            ],
            clip: "media/calliope/minimap.mp4",
          },
          {
            title: "Cutscenes",
            paragraphs: [
              "Working with Cinemachine I created the intro and outro cutscenes, implementing multiple camera angles, effects, music and camera tricks to tell a story without dialogue. I visualised the sequence and sourced all the assets.",
              "The intro and outro are their own Timeline scenes. I created a custom CameraWobble script that puts a small sine on pitch/yaw/roll, and used timeline impulse events to add some feedback to the camera. These make the camera feel like an actual physical object that is being impacted by the force of the ship.",
            ],
            youtube: "ROYIMRm0-4w",
            videoLabel: "Cutscenes",
          },
          {
            title: "Level Design",
            paragraphs: [
              "I built all the rooms in the level, except the bridge and observation deck. I sourced the asset packs and adapted them to work with my shader, testing my camera system along the way. I manually changed/created prefabs to have accurate colliders and correct shaders to allow for ease of workflow within the team.",
            ],
          },
          {
            title: "Team Direction",
            paragraphs: [
              "While not solely responsible, I took the lead on organising and directing the team; creating a GDD, pair coding quest logic, focusing discussions and meetings on important topics and acting as a game design lead, alongside a teammate who pitched and developed the lore.",
              "I did this by proposing/asking for multiple solutions to an idea, pushing for creative and fun ideas while appropriately helping the team to designate tickets. The biggest breakthroughs were the same as on later projects: the idea got better when it was pitched to the group, allowing smaller and overlooked details to get fleshed out.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "unseen",
    featured: true,
    group: "games",
    title: "The Unseen",
    subtitle: "The Unseen is a psychological puzzle/branching narrative prototype for PC",
    year: "2026",
    team: "Forsbergs",
    engine: "Unreal Engine 5",
    lang: "C++ / Blueprints",
    role: "Narrative/Design lead, Portal System, Cinematics, Puzzles",
    duration: "5 weeks",
    overview:
      "A psychological horror/puzzle game. Inspired by real world psychological therapy, the protagonist enters a house (their mind) to confront 4 family members, who each represent different parts of their psyche. Click Read More for a deep dive.",
    cover: "media/unseen/cover.jpg",
    shots: [],
    videos: [
      { youtube: "0Rc8_kRZEK0", label: "Playthrough" },
      { youtube: "cZT4nErUaQw", label: "Portal comparison — v1 vs v2", inline: true },
      { youtube: "UgNmtGB3j3c", label: "Ending comparison", inline: true },
    ],
    highlight: "media/unseen/highlight.mp4",
    extraLinks: [
      {
        label: "Miro board",
        href: "https://miro.com/app/board/uXjVHPZzA-s=/",
      },
    ],
    tags: ["Unreal", "C++", "Blueprints"],
    shipped: [
      "Design/Narrative Lead: Created the story and concept. Directed my team to implement this vision and pitched each idea with them to flesh everything out. GDD in the Read More section.",
      "Dock Puzzle: A C++ turnbased light puzzle within the Child Room. Uses a manager to own the game state. The player must light up 3 lights while seagulls try to put them out.",
      "Portal System: Built in Blueprints. Has a live render of the destination, turns on and off when the player is within a certain range. Video in the read more section.",
      "Staircase Puzzle and Cutscenes: Created an infinite looping staircase puzzle and 2 ending cutscenes using the sequence manager. Video in the read more section.",
    ],
    brief: [
      "The protagonist enters their mind, frees four “family members” from trauma, and chooses what to do with what is in the basement.",
      "I was the Narrative/Design lead, writing most of the finished dialogue (minus the tutorial & father room), fit each room into the IFS idea, and implemented the docks puzzle, child room, portal system, looping stairs, final quiz dialogue, both ending cutscenes. Inspiration: Mr Robot, The Witness, Escape the Backrooms.",
    ],
    sections: [
      {
        title: "Design process",
        images: [
          {
            src: "media/unseen/miro.png?v=2",
            alt: "Miro board of early Unseen pitches, including multiple personalities and The House",
          },
          {
            src: "media/unseen/docks.jpg",
            alt: "The Child room docks in fog, with a bust in the water and a pier on the shore",
            size: "sm",
          },
        ],
        paragraphs: [
          "We pitched a few ideas at the start of the project, with the one we chose coming from me. The initial idea was about a person with multiple personalities trapped in an escape room. The twist would be one of the personalities trapped you in there, and the player had to play through the branching narrative and uncover the truth.",
          "The team liked this idea and allowed me to go and adapt this idea into a more fleshed out concept. I came back with 3 ideas in which our group meeting decided on “The House”. (<a href=\"https://miro.com/app/board/uXjVHPZzA-s=/\" target=\"_blank\" rel=\"noopener\">See the Miro board</a> for more information) which used a concept from therapy and psychology called “The Internal Family System” in which parts of the mind are represented by different “family members” and have different roles in dealing with the mind's trauma.",
          "This idea was fleshed out until settling on:",
        ],
        bullets: [
          "A house representing the protagonist's mind",
          "4 rooms for 4 different family members",
          "A “presence” in the basement that has essentially corrupted the family and regressed them to mimic the protagonist's real life family members",
          "Solving each puzzle will free the family member's spirit and allow you to confront the “presence” in the basement",
          "Two endings will occur; one where you accept the presence and allow yourself to live with it, and another where you forget and allow this cycle to repeat until you are ready",
        ],
      },
      {
        title: "Family",
        layout: "cards",
        paragraphs: [
          "Each team member then chose a family member and created the puzzle and aesthetic of the room themselves, based on a few loose guidelines. I then took their puzzles and theming to create suitable dialogue. This emphasised the team aspect of the project where everyone was included and pitching ideas.",
        ],
        subsections: [
          {
            title: "Father",
            paragraphs: [
              "The father is a Manager in IFS; a part that aims to control the rest of the family to protect them from any hurt. The player's father was a physically abusive alcoholic, and the Father in the mind has regressed to represent this.",
              "The kids bedroom represents the protagonist's fractured memories of growing up with an abusive father. As the player explores the room, the environment shifts between two states that reflect conflicting perceptions of the past, preserving familiar childhood memories, while the other exposes the trauma hidden beneath them.",
              "Turning the lights on and off allows the player to collect clues that change depending on the current state of the room. Each version of the bedroom reveals only part of the information needed to solve the final passcode, encouraging the player to compare the two realities, reflecting how traumatic memories are often fragmented. The player cannot understand the past by remaining in a single version of the room; they must confront both the comforting memories and the trauma to move forward.",
            ],
          },
          {
            title: "Mother",
            paragraphs: [
              "The mother is also a manager but is a more manipulative, verbally abusive and perfectionist one. The player's mother was very controlling to her children, just like her parents were to her, forcing the sister to be “perfect”.",
              "The mother's room represents the generational trauma the mother passed down onto the daughter and the protagonist. The strictness and perfectionism she imposed on the daughter was because of how her parents made her feel, showcasing how trauma is passed down, affecting all members of the family and needs to be broken.",
              "The puzzle reflects the strictness and has a strict completion order that must be followed, reminding the player of the mother's treatment toward the sister. The overall outcome of the room is a realization of the mother's trauma that caused it all, casting new light on childhood memories.",
            ],
          },
          {
            title: "Sister",
            paragraphs: [
              "The sister is a Firefighter in IFS; the part that comes out to do whatever it can to extinguish the fire (the pain). The player's sister struggled with anorexia and bulimia, caused by the mother's abuse, leading to the sister's suicide.",
              "The sister embodies unconditional love and comfort for the player character. The real sister died when the player was very young due to complications related to anorexia and bulimia. The room evokes memories of her problematic relationship with their mother, particularly related to expectations about weight and appearance. Through this space, the narrative invites the player character to revisit and reinterpret these memories with the perspective and emotional distance of adulthood.",
              "The sliding-tile puzzle, along with the fragmentary Venus sculpture that it forms, symbolizes the sister’s distorted body-image and fractured sense of identity.",
            ],
          },
          {
            title: "Child — my room",
            paragraphs: [
              "The child is an exile; the part of your brain that holds all the trauma and shame and is locked away from everyone else so it can't hurt you anymore. The child in the game represents the protagonist's childhood trauma and is a physical manifestation of it.",
              "The Child is a personification of all the vulnerable parts of the protagonist's mind. This room focuses on the protagonist understanding who/what the Child is and easing its fear of you. It ends with the player taking the Child's hand and leading them out of the exile, symbolizing the acceptance and reintegration of the suppressed parts of themselves.",
              "Aesthetically, the room is a dock covered in fog, with the Child's spirit stranded at sea. The player must guide the Child by lighting the path, while preventing birds from extinguishing the light and swarming the Child. The birds symbolize the defensive mechanisms that keep the Child separated, while the ocean represents the distance that has formed between the “Child” (the trauma) and the rest of the mind.",
            ],
          },
          {
            title: "The thing in the basement",
            paragraphs: [
              "The basement holds a “presence” that we intentionally left vague so whoever plays can interpret it however they want. The presence is infecting/corrupting the mind, forcing it to relive painful memories and regressing every part. It represents all the hurt and pain the Child was carrying, and the protagonist can choose to stop ignoring it and “move it into the house” or restart the cycle until they are ready.",
            ],
          },
        ],
      },
      {
        title: "Stairs",
        image: "media/unseen/stairs.jpg",
        imageAlt: "Looking down the looping spiral staircase",
        paragraphs: [
          "The basement is preceded by an endless looping spiral staircase, forever keeping the player out. It's shrouded in fog with no possible way for the player to descend. The puzzle here is for the player to jump down the middle of the staircase, throwing away their fears and diving into the unknown.",
        ],
        more: [
          {
            title: "Final room",
            paragraphs: [
              "The final room is an unlit black void, with the family members' spirits in each corner. In the centre of the room is a black crib with a blank doll laying in it. The family spirits each ask a different question, asking the player if they are ready to accept this “presence”. Depending on the answers two endings then play out:",
            ],
            bullets: [
              "Good ending: The player takes the doll's hand. A light appears within the doll, changing its colour to white and everything fades to white. This shows the protagonist accepting and seeing the “presence”.",
              "“Bad” ending: The doll sits up, pointing behind the player, telling them to leave. It then sits back down and the player starts to lose balance as their vision fades out and everything goes black. This shows the protagonist is not ready yet, and the cycle will repeat until they are.",
            ],
          },
        ],
      },
      {
        title: "My Contributions in Detail",
        subsections: [
          {
            title: "Narrative/Design Lead",
            paragraphs: [
              "After my initial pitch was accepted the team gave me the freedom to develop and flesh it out, ending up with the idea we have currently. While I mainly developed these ideas solo, the biggest breakthroughs came when pitching it to the group.",
              "I wrote most of the finished dialogue in the game, minus the tutorial and father room. I also broke down each family member's role and themes to help us fit our room’s visuals to the tone of the story. Most of my notes can be found on the <a href=\"https://miro.com/app/board/uXjVHPZzA-s=/\" target=\"_blank\" rel=\"noopener\">Miro board</a>.",
            ],
          },
          {
            title: "Dock Puzzle (Child Room)",
            paragraphs: [
              "I designed and implemented a turnbased light puzzle within the Child Room. I created a DocksPuzzleManager to track the puzzle state, allowing the player and gulls to move correctly.",
              "I mapped out all the puzzle logic on paper, and then built it using lego to make sure the rules worked before pseudocodeing everything. I then finally implemented it in UE5. The puzzle was created in C++ and Blueprints. The assets were modified from an existing asset pack.",
            ],
            doc: UNSEEN_DOCS.docks,
          },
          {
            title: "Portal System",
            paragraphs: [
              "I designed a portal system for our game. I initially created v1 as a pitch to show the team how it would look, which set off the idea of everyone creating a separate “room”. I was then unhappy with it visually and rebuilt it with the help of some online tutorials and videos to get it to look more seamless. This was implemented in Blueprints.",
            ],
            youtube: "cZT4nErUaQw",
            videoLabel: "Portal comparison — v1 vs v2",
            doc: UNSEEN_DOCS.portal,
          },
          {
            title: "Basement Stairs and Final Ending Room",
            paragraphs: [
              "I created a spiral staircase mesh using the stair brush tool. I then created some teleportation logic, that I learned from making the puzzle, to make the stairs look as though they were infinite. To solve this “puzzle” the player then jumps into the middle of the stairs (invisible colliders then turn on to funnel them down) and the player is teleported into the final room.",
              "The final ending room and quiz was also created by myself, sourcing a crib and doll asset and writing 4 final questions to act as the ending cutscene trigger.",
              "I designed two ending cutscenes using the sequence manager, animating the doll and player character’s skeletons and keyframing camera movements. Each ending then switches to a Credits level with its own credits widget.",
            ],
            youtube: "UgNmtGB3j3c",
            videoLabel: "Ending comparison",
            doc: UNSEEN_DOCS.stairs,
          },
        ],
      },
    ],
  },
  {
    id: "smoltheft",
    featured: true,
    group: "games",
    title: "Smol Theft Auto",
    subtitle: "Smol Theft Auto is a Christmas GTA-esque sandbox prototype for PC",
    year: "2025",
    engine: "Unity 6.2",
    lang: "C#",
    team: "Forsbergs",
    role: "Player Controller, Camera, Weapon System, Game feel",
    duration: "3 weeks - Group Project",
    overview:
      "A Christmas GTA-esque mini project. Run, drive, shoot, and finish three quests. Click Read More for a deep dive. Playthrough linked below.",
    cover: "media/smoltheft/cover.png",
    shots: [],
    videos: [{ youtube: "psw_Wa7uf0Q", label: "Playthrough" }],
    highlight: "media/smoltheft/highlight.mp4",
    play: "https://fun-yun.itch.io/smol-theft-auto-un",
    tags: ["Unity", "C#", "Cinemachine"],
    shipped: [
      "Player Controller: Custom player controller with 2 modes; aiming/strafing and free move, sprint, and jump.",
      "Cinemachine Camera: Cinemachine orbital freelook, aim zoom, shoulder swap, and an ending cutscene.",
      "Weapon System: Modular Gun system with a hitscan rifle/pistol, pellet shotgun with a random cone shape spread and physics based grenades.",
      "Game Feel: I implemented custom Player/NPC animation, 3D SFX, music, and muzzle/hit VFX.",
    ],
    brief: [
      "Our first group project at Forsbergs. A small Christmas GTA-esque prototype. Run, drive, shoot, and finish three quests.",
      "I created the player controller, Cinemachine camera, and modular weapon system, and improved the game feel with the animation, 3D SFX, music, and VFX.",
    ],
    sections: [
      {
        title: "Player movement and camera",
        paragraphs: [
          "I learned Cinemachine for this project and used it to move seamlessly between normal third-person movement with a full 360° orbital camera and over-the-shoulder strafe aiming. I built the player movement from scratch and implemented the player and NPC animations with blend trees and state transitions.",
        ],
      },
      {
        title: "Weapons",
        paragraphs: [
          "A fully modular weapon system using classes. Gun is the base; Hitscan and Shotgun inherit from it. Hitscan is fully customisable, so I could make prefabs for a semi-auto pistol and a fully automatic rifle. An SMG or sniper would reuse Hitscan and just tweak fire rate and damage.",
          "The shotgun builds a pellet cone from a random 2D point in a circle and the tangent of the spread angle, with independent hits per pellet. Pellet count and spread are editor-tweakable, so multiple shotgun types are easy.",
          "I also made a physics-based grenade that looks like a present, with a tweakable fuse. It applies forces to rigidbodies so ragdolls and props react.",
        ],
      },
      {
        title: "VFX / SFX",
        paragraphs: [
          "I set up all the SFX and music logic and controllers. The vehicle has its own audio sources and a controller that blends idle and drive by speed. Guns, grenades, and the vehicle play in 3D at the object; everything else plays normally.",
          "I set up the VFX too: muzzle flash and smoke on the guns (one per shotgun barrel), explosions, and confetti. Confetti fires from the gun and where the bullet lands. That was a last-minute add — without it the game didn’t feel impactful. The extra feedback made it more fun, and the confetti fits the humour and Christmas theming.",
        ],
      },
    ],
  },
  {
    id: "castlemania",
    featured: false,
    group: "games",
    title: "CastleMania",
    subtitle: "CastleMania is a Castlevania-inspired 2D action prototype for PC",
    year: "2025",
    engine: "Unity 6",
    lang: "C#",
    team: "Forsbergs",
    role: "Movement, Combat, Enemies",
    duration: "2 weeks - Solo Project",
    overview:
      "First Forsberg project. A Castlevania-inspired 2D action prototype. Custom air control, whip combat, orbs that force you to backtrack.",
    cover: "media/castlemania/cover.png",
    shots: [],
    videos: [{ youtube: "1eNWBbTaXBI", label: "Playthrough" }],
    highlight: "media/castlemania/highlight.mp4",
    play: "https://fun-yun.itch.io/castlemania-uni-project-prototype",
    tags: ["Unity", "C#", "2D"],
    shipped: [
      "Movement: Weighty Castlevania 4-style air control with heavier falling gravity.",
      "Whip: Castlevania 1-style whip with a slight delay/wind-up, then the snap.",
      "Enemies: Dive bombing bats and patrolling knights with rideable heads. When killed, the knight's heads stay in the level as a platform to be used as a shortcut.",
      "Level Design: Backtracking and shortcuts that require defeating enemies in specific places and patient platforming.",
    ],
  },
  {
    id: "vampire",
    featured: false,
    group: "games",
    title: "Zombie Survivors",
    subtitle: "Zombie Survivors is a Vampire Survivors–style roguelike built in C++ and raylib",
    year: "2026",
    engine: "raylib",
    lang: "C++",
    team: "Solo",
    role: "Engine architecture, Design Patterns, Modular Weapons",
    duration: "2 weeks - Solo Project",
    overview:
      "A Vampire Survivors-style roguelike I built from scratch in C++ and raylib while implementing design patterns.",
    cover: "media/vampire/cover.png",
    shots: [],
    videos: [{ youtube: "EV1ExuKajT8", label: "Playthrough" }],
    highlight: "media/vampire/highlight.mp4",
    tags: ["C++", "raylib", "JSON"],
    shipped: [
      "Architecture: Unity-shaped entity/component model and design patterns — Singleton, Object Pool, State, Factory, Observer, Component, Strategy.",
      "Modular Weapons: Knife, axe, and charge-shot from JSON, eight levels, object-pooled projectiles.",
      "Waves: Enemy factory, spatial-grid collisions, XP orbs, and a three-choice level-up UI.",
    ],
  },
  {
    id: "ai",
    featured: false,
    group: "systems",
    title: "Guard AI",
    subtitle: "Guard AI is an Unreal Engine 5 perception and behaviour-tree assignment",
    year: "2026",
    engine: "Unreal Engine 5",
    lang: "Blueprints",
    team: "Forsbergs",
    role: "Behaviour Tree, AI Perception, Blackboard",
    duration: "2 weeks - Solo Project",
    overview:
      "Unreal sentry NPCs that patrol, spot you, scream, and investigate. Screaming will alert any nearby guards to come investigate.",
    cover: "media/ai/cover.jpg",
    shots: [],
    videos: [{ youtube: "jJhCPXa0szc", label: "Showcase" }],
    highlight: "media/ai/highlight.mp4",
    related: [
      {
        id: "proxchat",
        label: "Expanded later in Network Prox Chat",
      },
    ],
    tags: ["Unreal", "Blueprints", "AI"],
    shipped: [
      "Behaviour Tree: Chase if this guard sees the player, else investigate last-known/noise, else patrol waypoints.",
      "Perception: Sight and hearing write the Blackboard. A scream reports hearing so the rest of the squad can react.",
      "Detection: Two different services: Local vs global detect. Global alerts every guard if a player is spotted while local is only the one guard.",
    ],
  },
  {
    id: "proxchat",
    featured: true,
    group: "systems",
    title: "Network Prox Chat",
    subtitle: "Network Prox Chat is a UE5 proximity-voice prototype built with EOS",
    year: "2026",
    engine: "Unreal Engine 5",
    lang: "Blueprints / C++",
    team: "External studio",
    role: "EOS, Networking, Proximity chat",
    duration: "4 weeks - Group Project",
    overview:
      "A collaboration with an external studio. Set up a networked proximity-chat project using EOS and host migration. Teammates' voices fade via distance and NPCs can hear the players. Click Read More for a deep dive.",
    cover: "media/proxchat/cover.jpg",
    shots: [],
    videos: [
      { youtube: "VystM0mz2q0", label: "Showcase" },
      { youtube: "Cy2CF_gw7YA", label: "Co-op puzzle", inline: true },
    ],
    highlight: "media/proxchat/highlight.mp4",
    related: [{ id: "ai", label: "Started from Guard AI" }],
    tags: ["Unreal", "Blueprints", "Networking"],
    shipped: [
      "Proximity Chat: I set up the EOS proximity voice chat in UE5 so volume falls off with distance. Implemented a radio with a filter.",
      "Microphone Subsystem: I captured the mic locally, setting up lipsyncing and allowing for the guards to hear the player's voice.",
      "Guard AI: Improved my guard AI by rebuilding it in C++, adding animation and allowing it to hear the player's microphone.",
    ],
    brief: [
      "A collaboration with an external studio. Set up a networked proximity-chat project using EOS and host migration. Teammates' voices fade via distance and NPCs can hear the players.",
      "Later expansion of the Guard AI assignment. The repo is not up yet; the point of listing it now is the through-line from solo AI to networked play.",
    ],
    sections: [
      {
        title: "My Contributions in Detail",
        subsections: [
          {
            title: "Proximity Chat",
            paragraphs: [
              "I set up the EOS proximity voice chat in UE5 so volume falls off with distance. Implemented a radio with a filter.",
            ],
            youtube: "Cy2CF_gw7YA",
            videoLabel: "Co-op puzzle",
          },
          {
            title: "Microphone Subsystem",
            paragraphs: [
              "I captured the mic locally, setting up lipsyncing and allowing for the guards to hear the player's voice.",
            ],
          },
          {
            title: "Guard AI",
            paragraphs: [
              "Improved my guard AI by rebuilding it in C++, adding animation and allowing it to hear the player's microphone.",
            ],
          },
          {
            title: "Status",
            paragraphs: [
              "Write-up and repo will land here when I can share them.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "vectors",
    featured: false,
    group: "systems",
    title: "Vector Math DLL",
    subtitle: "Vector Math DLL is a C++ math library driving a Unity Pong clone",
    year: "2026",
    engine: "C++ / Unity",
    lang: "C++ & C#",
    team: "Solo",
    role: "C++ math, DLL, Unity interop",
    duration: "2 weeks - Solo Project",
    overview:
      "Implemented a custom C++ math library, compiled it into a DLL, before integrating it into a Unity Pong clone. Understood the mathematics behind movement, collision, and reflection in games.",
    cover: "media/vectors/cover.png",
    shots: [],
    videos: [],
    highlight: "media/vectors/highlight.mp4",
    tags: ["C++", "C#", "DLL"],
    shipped: [
      "Library: Add/sub/scale, mag, normalize, dot/cross, lerp, reflect, clamp for both Vector2 and Vector3.",
      "Safety Checks: Safe divide/normalize to stop NaNs. Reflection normalizes the surface normal for callers.",
      "Pong: Unity clone via DllImport — ball reflect, paddle lerp, speed-up on bounce.",
    ],
  },
  {
    id: "algorithms",
    featured: false,
    group: "systems",
    title: "Algo Visualizer",
    subtitle: "Algo Visualizer is a raylib app that shows sorting and pathfinding live",
    year: "2026",
    engine: "raylib",
    lang: "C++",
    team: "Solo",
    role: "Sorting, Pathfinding, Visualization",
    overview:
      "A raylib app that shows sorting and pathfinding algorithms. Bubble, selection, heap sort and BFS vs DFS pathfinding on the same maze.",
    cover: "media/algorithms/cover.png",
    shots: [],
    videos: [{ youtube: "F1k-gVSzHt4", label: "Showcase" }],
    highlight: "media/algorithms/highlight.mp4",
    tags: ["C++", "raylib", "Algorithms"],
    shipped: [
      "Sorting: Three scenes with live comparison/swap counts and speed control. Bubble, selection, heap sort.",
      "Pathfinding: 25×25 solvable grid shared by BFS and DFS so comparison is easy.",
      "Playback: Mouse-to-cheese animation when a route is found.",
    ],
  },
];
