export const valheimGuides = [
  {
    gameId: "valheim", id: "biome-expedition-checklist", type: "Biome checklist", readTime: "05 min",
    title: "Valheim biome expedition: plan the return before the loot", sourceKey: "valheim-game",
    deck: "A biome-entry checklist based on Valheim's official survival, sailing, boss and building structure.",
    version: "Valheim 1.0 · official overview", checked: "14 Oct 2026",
    prerequisite: "Start from a known settlement and check the live game version. Iron Gate describes distinct biomes, sailing, crafting and boss-led progression, but not a universal travel route.",
    caution: "This is not a map seed guide or a list of fixed resource locations; those need seed- and version-specific evidence.",
    sections: [
      ["Define the return point", "Iron Gate presents settlements as reprieve from the dangers ahead and warns players about sailing too far. Mark what counts as a safe return before travelling: a known shelter, a navigable route or a completed objective."],
      ["Pack for the environment, not a habit", "The official overview says mountains, swamps and other environments have unique challenges and foes. Name the environment-specific risk you are preparing for instead of applying one generic kit to every biome."],
      ["Treat the boss as progression context", "Valheim's official site says each biome has a boss that must be defeated to venture further. Frame the trip as part of a progression chain; gathering is more useful when you know which next challenge it supports."],
    ],
    outcome: "The expedition begins with a return condition, an environment-specific preparation question and a clear progression purpose.",
  },
  {
    gameId: "valheim", id: "longhouse-return-loop", type: "Base planning guide", readTime: "05 min",
    title: "Valheim base: build the return loop before decoration", sourceKey: "valheim-game",
    deck: "Use Valheim's official building, crafting and food systems to make a settlement serve the next expedition.",
    version: "Valheim 1.0 · official overview", checked: "14 Oct 2026",
    prerequisite: "Choose the actual route your character walks after returning from an expedition. Iron Gate describes building tiers and bases that can be upgraded, expanded and defended.",
    caution: "This is a functional layout principle, not a claim that one building footprint is optimal for every seed, server or player count.",
    sections: [
      ["Place recovery beside arrival", "Arrange the things you repeatedly need after a trip—safe arrival, storage, crafting and food preparation—along the route you actually use. A return loop should reduce repeated travel before it grows into a showcase."],
      ["Leave room for tier changes", "The official site says buildings progress through tiers to upgrade, expand and defend a base. Preserve flexible space around the functional loop so an upgrade adds capability instead of forcing a total rebuild."],
      ["Make food part of the expedition", "Iron Gate describes growing crops and vegetables for food and mead, while the Steam description ties food benefits to combat health and stamina. Prepare the trip's food before departure, not as an unrelated decoration task."],
    ],
    outcome: "Your base makes the next departure easier, and still has room to evolve with the progression system.",
  },
  {
    gameId: "valheim", id: "patch-aware-world-note", type: "Version guide", readTime: "04 min",
    title: "Valheim: date a world note after 1.0", sourceKey: "valheim-news",
    deck: "A short versioning habit for a game whose official news shows frequent post-1.0 patches and a Public Test branch.",
    version: "Patch 1.0.17 · 06 Oct 2026", checked: "14 Oct 2026",
    prerequisite: "Write the game version, world type and group context alongside any route, build technique or settings note you intend to share.",
    caution: "Do not present Public Test behaviour as live-branch advice. Patch changes can affect terrain, fixes, controls or progression context.",
    sections: [
      ["Use the official patch label", "Valheim's official site lists Patch 1.0.17 on October 6, 2026 and earlier 1.0 fixes. Add the patch or client date beside your observation so readers can decide whether it needs a fresh test."],
      ["Separate Public Test explicitly", "Iron Gate links players to a Public Test branch. If a route, construction behaviour or interaction comes from that branch, label it as test content rather than letting it masquerade as a live-world instruction."],
      ["Include the world context", "Valheim officially supports solo play or up to nine other players, with player-hosted servers and many worlds. Record solo versus group context because the practical cost of travel, building and recovery can differ."],
    ],
    outcome: "A reader can identify the version and world context behind a tip before deciding whether to repeat it in their own world.",
  },
];
