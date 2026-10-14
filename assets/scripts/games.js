export const games = [
  {
    id: "aion-2", name: "AION 2", eyebrow: "AETHER / FIELD NOTES",
    accent: "#77b9ff", glow: "#2f69d9", image: "aion-2.png",
    tagline: "A clearer route through a world in motion.",
    intro: "A focused editorial home for early routes, class planning, and update-aware notes.",
    focus: "Class routes · aerial exploration · weekly notes", status: "18 field notes"
  },
  {
    id: "deadlock", name: "DEADLOCK", eyebrow: "CITY / MATCH NOTES",
    accent: "#f1aa62", glow: "#944f29", image: "deadlock.png",
    tagline: "Play the lane. Read the city.",
    intro: "A sharp, late-night guide format for build intent, map pressure, and match review.",
    focus: "Lane plans · team fights · match review", status: "18 field notes"
  },
  {
    id: "arc-raiders", name: "ARC RAIDERS", eyebrow: "SURFACE / RAID LOG",
    accent: "#d9c198", glow: "#7d6242", image: "arc-raiders.png",
    tagline: "Make every exit feel intentional.",
    intro: "A measured field manual for scouting, loadout trade-offs, and runs worth remembering.",
    focus: "Raid prep · extraction habits · kit economy", status: "18 field notes"
  },
  {
    id: "wardogs", name: "WARDOGS", eyebrow: "NIGHT OPS / BRIEFING",
    accent: "#ff796d", glow: "#7e2f3a", image: "wardogs.png",
    tagline: "Read the ground before the ground reads you.",
    intro: "A restrained tactical journal for team roles, positioning language, and clean comms.",
    focus: "Team roles · position work · briefing cards", status: "18 field notes"
  },
  {
    id: "slay-the-spire-2", name: "SLAY THE SPIRE 2", eyebrow: "ASCENT / CARD NOTES",
    accent: "#c59df8", glow: "#6840a4", image: "slay-the-spire-2.png",
    tagline: "A better question for every floor.",
    intro: "An editorial notebook for deliberate draft choices, pathing questions, and run stories.",
    focus: "Draft thinking · route choices · run journals", status: "18 field notes"
  },
  {
    id: "valheim", name: "VALHEIM", eyebrow: "NORTH / LONGHOUSE NOTES",
    accent: "#a8d7c5", glow: "#356d61", image: "valheim.png",
    tagline: "Settle slowly. Roam with purpose.",
    intro: "A quiet survival companion for expeditions, shared worlds, and useful homecomings.",
    focus: "Expedition prep · shared worlds · build notes", status: "18 field notes"
  }
];

export const getGame = (id) => games.find((game) => game.id === id);
