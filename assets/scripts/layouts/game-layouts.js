export const gameLayouts = {
  "aion-2": { theme: "theme-aion", label: "DAEVA DOSSIER", signal: "Chapter 1 field brief" },
  deadlock: { theme: "theme-deadlock", label: "CURRENT CLIENT", signal: "Live-build match desk" },
  "arc-raiders": { theme: "theme-arc", label: "TOPSIDE OPS", signal: "Extraction field manual" },
  wardogs: { theme: "theme-wardogs", label: "CONTROL ROOM", signal: "Three-team operations board" },
  "slay-the-spire-2": { theme: "theme-spire", label: "THE RUN LEDGER", signal: "Early-access decision notes" },
  valheim: { theme: "theme-valheim", label: "THE LONGHOUSE", signal: "Survival expedition atlas" },
};

export const getGameLayout = (id) => gameLayouts[id];
