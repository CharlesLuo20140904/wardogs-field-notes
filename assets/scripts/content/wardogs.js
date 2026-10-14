export const wardogsGuides = [
  {
    gameId: "wardogs", id: "control-zone-win-condition", type: "Mode walkthrough", readTime: "05 min",
    title: "WARDOGS Control Zone: play the actual win condition", sourceKey: "wardogs-core",
    deck: "A three-step objective guide built from WARDOGS' published 3-team, 100-point Control Zone rules.",
    version: "Official mode description", checked: "14 Oct 2026",
    prerequisite: "Open the live mode rules when available. The official site describes the game mode at a high level, not a fixed opening route.",
    caution: "Zone location is randomized. This guide deliberately avoids claiming a universal first route or weapon setup.",
    sections: [
      ["Read the score before the kill feed", "WARDOGS describes three teams fighting for a randomized 2×2 km Control Zone inside a 256 km² map. Points come from players inside the zone, and the first team to 100 wins. Start every role assignment by explaining how it increases zone presence."],
      ["Give each player an objective job", "Use a job that directly supports the zone: occupy it, transport allies, watch an approach, deliver supplies or disrupt an opponent's access. Eliminations have value only when they alter one of those objective jobs."],
      ["Reset when the zone state changes", "The official description says variable zone locations and player tactics make matches play out differently. When the zone moves or a route collapses, repeat the current zone, objective job and next handoff in voice rather than relying on the last call."],
    ],
    outcome: "Your squad can describe how each action advances the 100-point race instead of confusing the mode with a battle royale.",
  },
  {
    gameId: "wardogs", id: "persistent-cash-spend", type: "Economy guide", readTime: "05 min",
    title: "WARDOGS cash: buy the next job, not a bigger number", sourceKey: "wardogs-core",
    deck: "Use the official persistent-cash system to make an explicit loadout decision before each life.",
    version: "Official cash metagame", checked: "14 Oct 2026",
    prerequisite: "Know the squad's next objective role before opening the loadout screen. The official site says players start with $10,000 and cash persists from match to match.",
    caution: "The published rules describe the economy; they do not prove an individual weapon, vehicle or spending pattern is optimal.",
    sections: [
      ["Name the purchase job", "Before spending, attach the kit to a specific job such as transport, a defended approach, squad revival support or zone pressure. A price alone cannot tell you whether the kit helps the team reach the Control Zone."],
      ["Include teamplay in the budget", "WARDOGS says reviving squadmates, transporting friendlies to the zone and controlling the objective reward cash. Put those actions in the squad plan so earnings are connected to the win condition rather than a private scoreboard."],
      ["Preserve a future option", "Because cash persists, a large purchase affects later matches as well as the next life. State the condition that justifies the spend and the condition that means saving resources for the next objective cycle."],
    ],
    outcome: "Every purchase has a stated team function and a future-cost awareness, even when the match develops differently than expected.",
  },
  {
    gameId: "wardogs", id: "build-and-break-for-zone", type: "Tactics primer", readTime: "04 min",
    title: "WARDOGS terrain: build and break for the zone", sourceKey: "wardogs-core",
    deck: "A tactical-use checklist for the construction and destruction systems WARDOGS has confirmed.",
    version: "Official battlefield systems", checked: "14 Oct 2026",
    prerequisite: "Agree which route, resupply point or approach you are trying to protect or deny before changing terrain.",
    caution: "A destructible building is not automatically useful to destroy; the official site does not publish a fixed fortification meta.",
    sections: [
      ["Fortify a named handoff", "WARDOGS says teams can build and fortify key locations. Use construction only when the squad can name the route, staging point or approach that becomes safer or easier to hold as a result."],
      ["Demolish for access or denial", "The official description confirms destruction with launchers and heavily armoured tanks. Spend that capability to open a line, remove enemy cover or deny a counter-approach—not just to create spectacle."],
      ["Refresh the callout after impact", "A breach, damaged block or changed line of sight makes old callouts unreliable. After the terrain changes, repeat the new landmark and the current Control Zone job before the squad commits to the altered route."],
    ],
    outcome: "The terrain change has a visible objective purpose and the team has a new shared description of the route it created.",
  },
];
