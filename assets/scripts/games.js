export const games = [
  {
    id: "aion-2", name: "AION 2", eyebrow: "AETHER / VERIFIED GUIDE", accent: "#77b9ff", glow: "#2f69d9", image: "aion-2.png",
    tagline: "Classes, dungeons and flight—kept close to official facts.",
    intro: "A source-linked starter library for AION 2's eight classes, dungeon formats and vertical exploration.",
    focus: "Eight class roles · manual combat · dungeon formats", status: "3 verified guides",
  },
  {
    id: "deadlock", name: "DEADLOCK", eyebrow: "CITY / CURRENT-CLIENT NOTES", accent: "#f1aa62", glow: "#944f29", image: "deadlock.png",
    tagline: "Useful calls and dated builds for a game in active development.",
    intro: "A patch-aware guide library built around Valve's early-development status and official map callouts.",
    focus: "Build dates · lanes and districts · match reviews", status: "3 verified guides",
  },
  {
    id: "arc-raiders", name: "ARC RAIDERS", eyebrow: "SURFACE / EXTRACTION GUIDE", accent: "#d9c198", glow: "#7d6242", image: "arc-raiders.png",
    tagline: "A first raid, a safer loadout, and a clear way home.",
    intro: "A practical ARC Raiders starter guide using Embark's official guidance for Speranza, Topside and extraction.",
    focus: "Safe Pocket · Free Loadout · Main Hub", status: "3 verified guides",
  },
  {
    id: "wardogs", name: "WARDOGS", eyebrow: "NIGHT OPS / CONTROL-ZONE GUIDE", accent: "#ff796d", glow: "#7e2f3a", image: "wardogs.png",
    tagline: "Control the zone, spend for a job, reshape the ground.",
    intro: "An official-source guide to WARDOGS' three-team objective, persistent cash and destructive battlefield.",
    focus: "Control Zone · persistent cash · construction", status: "3 verified guides",
  },
  {
    id: "slay-the-spire-2", name: "SLAY THE SPIRE 2", eyebrow: "ASCENT / EARLY-ACCESS GUIDE", accent: "#c59df8", glow: "#6840a4", image: "slay-the-spire-2.png",
    tagline: "Deck choices that stay honest about an evolving Spire.",
    intro: "A source-linked guide for Early Access deckbuilding, relic decisions and four-player co-op climbs.",
    focus: "Deck problems · relic pivots · co-op records", status: "3 verified guides",
  },
  {
    id: "valheim", name: "VALHEIM", eyebrow: "NORTH / SURVIVAL GUIDE", accent: "#a8d7c5", glow: "#356d61", image: "valheim.png",
    tagline: "Prepare the biome, build for return, keep the world current.",
    intro: "A practical survival library for biome expeditions, upgrade-ready bases and patch-aware worlds.",
    focus: "Biome progression · base loops · version notes", status: "3 verified guides",
  },
];

export const getGame = (id) => games.find((game) => game.id === id);
