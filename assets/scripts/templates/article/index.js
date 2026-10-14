import { renderAionArticle } from "./aion.js";
import { renderArcArticle } from "./arc.js";
import { renderDeadlockArticle } from "./deadlock.js";
import { renderSpireArticle } from "./spire.js";
import { renderValheimArticle } from "./valheim.js";
import { renderWardogsArticle } from "./wardogs.js";

const templates = { "aion-2": renderAionArticle, "arc-raiders": renderArcArticle, deadlock: renderDeadlockArticle, "slay-the-spire-2": renderSpireArticle, valheim: renderValheimArticle, wardogs: renderWardogsArticle };

export function renderArticle(game, guide) {
  return templates[game.id](game, guide);
}
