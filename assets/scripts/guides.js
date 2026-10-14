import { aion2Guides } from "./content/aion-2.js";
import { arcRaidersGuides } from "./content/arc-raiders.js";
import { deadlockGuides } from "./content/deadlock.js";
import { slayTheSpire2Guides } from "./content/slay-the-spire-2.js";
import { valheimGuides } from "./content/valheim.js";
import { wardogsGuides } from "./content/wardogs.js";

export const guides = [
  ...aion2Guides,
  ...deadlockGuides,
  ...arcRaidersGuides,
  ...wardogsGuides,
  ...slayTheSpire2Guides,
  ...valheimGuides,
];

export const getGuidesForGame = (gameId) => guides.filter((guide) => guide.gameId === gameId);
export const getGuide = (gameId, guideId) => guides.find((guide) => guide.gameId === gameId && guide.id === guideId);
