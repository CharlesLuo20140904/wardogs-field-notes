export const sources = {
  "aion-core": {
    gameId: "aion-2",
    label: "NCSOFT · AION2 core-content overview",
    url: "https://about.ncsoft.com/en/news/article/aion2-update-250530-2",
    detail: "Original eight class roles, manual combat, exploration and early dungeon formats.",
  },
  "aion-chapter-1": {
    gameId: "aion-2",
    label: "NCSOFT · AION 2 Chapter 1 update",
    url: "https://about.ncsoft.com/en/news/article/aion2_update_260706",
    detail: "Level-50 cap, Brawler, expanded party sizes and new dungeon entry requirements.",
  },
  "aion-chaos": {
    gameId: "aion-2",
    label: "NCSOFT · Chaos Abyss class update",
    url: "https://about.ncsoft.com/en/news/article/aion2_update_260325",
    detail: "Class adjustments, new Stigma skills, PvP/PvE separation and Chaos Abyss scope.",
  },
  "deadlock-status": {
    gameId: "deadlock",
    label: "Valve · Deadlock Steam Community",
    url: "https://steamcommunity.com/app/1422450",
    detail: "Official hub; Deadlock is labelled as early development.",
  },
  "deadlock-map": {
    gameId: "deadlock",
    label: "Deadlock · City Never Sleeps",
    url: "https://www.playdeadlock.com/cityneversleeps",
    detail: "Official map update, new heroes, HUD and live-client change context.",
  },
  "arc-hub": {
    gameId: "arc-raiders",
    label: "Embark Help Center · Welcome to the Rust Belt",
    url: "https://id.embark.games/arc-raiders/support/faq/134-welcome-to-the-rust-belt-1759328687",
    detail: "Speranza, Main Hub, map selection, quests and workshop.",
  },
  "arc-raid": {
    gameId: "arc-raiders",
    label: "Embark Help Center · Your first raid",
    url: "https://id.embark.games/arc-raiders/support/faq/135-your-first-raid-1759328782",
    detail: "Extraction, Safe Pocket, Free Loadouts, stealth and Topside risk.",
  },
  "wardogs-core": {
    gameId: "wardogs",
    label: "WARDOGS · All Out Warfare",
    url: "https://www.wardogs.com/",
    detail: "Control Zone rules, cash, vehicles, construction and destruction.",
  },
  "spire-access": {
    gameId: "slay-the-spire-2",
    label: "Mega Crit · Early Access launch",
    url: "https://www.megacrit.com/news/2026-03-05-early-access-launch/",
    detail: "Early Access status, four-player co-op and live-content caution.",
  },
  "spire-facts": {
    gameId: "slay-the-spire-2",
    label: "Mega Crit · Slay the Spire 2 factsheet",
    url: "https://www.megacrit.com/press-kits/slay-the-spire-2/",
    detail: "Deckbuilding, relics, characters, co-op and release information.",
  },
  "valheim-game": {
    gameId: "valheim",
    label: "Iron Gate · Valheim game overview",
    url: "https://www.valheim.com/",
    detail: "Exploration, building, crafting, bosses, survival and cooperation.",
  },
  "valheim-news": {
    gameId: "valheim",
    label: "Iron Gate · Valheim news",
    url: "https://valheim.com/news/",
    detail: "Official patch history, 1.0 news and Public Test branch information.",
  },
};

export const getSource = (key) => sources[key];
