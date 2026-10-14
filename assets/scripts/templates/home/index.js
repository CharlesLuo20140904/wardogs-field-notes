import { renderAionHome } from "./aion.js";
import { renderArcHome } from "./arc.js";
import { renderDeadlockHome } from "./deadlock.js";
import { renderSpireHome } from "./spire.js";
import { renderValheimHome } from "./valheim.js";
import { renderWardogsHome } from "./wardogs.js";

const templates = { "aion-2": renderAionHome, "arc-raiders": renderArcHome, deadlock: renderDeadlockHome, "slay-the-spire-2": renderSpireHome, valheim: renderValheimHome, wardogs: renderWardogsHome };

export function renderGameHome(game, guides, root) {
  return templates[game.id](game, guides, root);
}
