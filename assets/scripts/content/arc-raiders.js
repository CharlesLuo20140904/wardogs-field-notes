export const arcRaidersGuides = [
  {
    gameId: "arc-raiders", id: "first-raid-safe-pocket", type: "First raid walkthrough", readTime: "05 min",
    title: "ARC Raiders first raid: protect one item and extract", sourceKey: "arc-raid",
    deck: "An official-source first-run sequence covering scavenging, Safe Pocket risk and the return to Speranza.",
    version: "Getting Started article · 01 Oct 2025", checked: "14 Oct 2026",
    prerequisite: "Read the current in-game explanation of your Safe Pocket and extraction option before deploying; the official starter article explains the system-level loss rule.",
    caution: "This is not a fixed loot route. Container contents, danger and map conditions are live-service variables.",
    sections: [
      ["Set one recoverable objective", "Embark says resources can be found in containers, lockers, loose finds and ARC remnants. Pick one category of progress for the run so you have a clear reason to leave rather than treating every raid as an unlimited search."],
      ["Move the irreplaceable item first", "The official guide says a knocked-out Raider loses everything except what is in the Safe Pocket, including brought loadout gear and scavenged items. When the client permits it, protect the one item whose loss would invalidate the run goal."],
      ["Switch from search to return", "The stated Topside loop ends by finding a way back to Speranza. Once the run objective is met, change your decision rule from 'find more value' to 'keep the protected value and extract.'"],
    ],
    outcome: "You should complete a first raid with one named objective, a clear loss boundary and a deliberate extraction point.",
  },
  {
    gameId: "arc-raiders", id: "free-loadout-decision", type: "Loadout decision guide", readTime: "04 min",
    title: "ARC Raiders: when a Free Loadout is the correct call", sourceKey: "arc-raid",
    deck: "Use Embark's own trade-off—free basic gear for less loot space—to classify a practice raid correctly.",
    version: "Getting Started article · 01 Oct 2025", checked: "14 Oct 2026",
    prerequisite: "Know whether the current raid is for learning, scavenging or a focused objective before opening the loadout screen.",
    caution: "A Free Loadout removes the cost of the basic kit; it does not make a run consequence-free or promise a safe return.",
    sections: [
      ["Classify the raid", "Use a Free Loadout when the main gain is information about a map, route, enemy behaviour or extraction decision. If the main goal is to bring a larger collection of specific items home, its smaller return capacity is an explicit cost."],
      ["Accept the inventory trade", "Embark describes the Free Loadout as random basic equipment at no cost, with less space to bring back loot. Say that trade aloud before launch so the squad does not quietly evaluate the same run by two different goals."],
      ["Let danger change the threshold", "The official guide says more dangerous locations tend to provide better loot. Treat that as a risk signal, not a guarantee: decide what will end the information run before you enter a high-danger location."],
    ],
    outcome: "The loadout now matches the value you are trying to create in this raid, rather than becoming an automatic default.",
  },
  {
    gameId: "arc-raiders", id: "speranza-pre-raid-brief", type: "Hub checklist", readTime: "04 min",
    title: "ARC Raiders: make a 60-second Speranza brief", sourceKey: "arc-hub",
    deck: "Use the Main Hub's official functions to align a squad before Topside, without inventing an optimal shopping list.",
    version: "Welcome to the Rust Belt · official help", checked: "14 Oct 2026",
    prerequisite: "Open the active quests and map selection in the Main Hub. This workflow assumes your squad is together before readying up.",
    caution: "The Main Hub guide identifies its functions; it does not provide a permanent best map, trader or crafting route.",
    sections: [
      ["Read active Quests before gear", "Embark says sessions begin in the Main Hub, with active Quests, Traders, Workshop, map selection and social tools available. Identify the session objective before a player changes equipment around an unknown task."],
      ["Make one Workshop decision", "Use the Workshop to make a named change for the next objective, recovery plan or cosmetic goal. A named change is easy to reverse or review; an open-ended preparation loop is not."],
      ["Agree on map and exit rule", "Set the map under Play and use the Social tools to align the squad. Before launch, each player should be able to state the objective and the condition that ends the raid."],
    ],
    outcome: "Your squad starts with one shared task, one preparation change and one extraction rule before it reaches Topside.",
  },
];
