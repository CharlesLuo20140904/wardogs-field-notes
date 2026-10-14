import { articleLead, preflight, stepRows } from "./common.js";

export function renderValheimArticle(game, guide) {
  return `<main class="article-shell article-valheim"><section id="guide" class="valheim-article-top">${articleLead(game, guide, "EXPEDITION ATLAS")}</section>
    <article class="saga-page">${preflight(guide)}<div class="saga-steps">${stepRows(guide)}</div>
    <aside class="return-note"><b>RETURN NOTE</b><p>${guide.outcome}</p></aside></article></main>`;
}
