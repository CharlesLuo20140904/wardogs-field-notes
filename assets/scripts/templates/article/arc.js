import { articleLead, preflight, stepRows } from "./common.js";

export function renderArcArticle(game, guide) {
  return `<main class="article-shell article-arc"><section id="guide" class="arc-article-top">${articleLead(game, guide, "TOPSIDE PROTOCOL")}</section>
    <article class="raid-protocol">${preflight(guide)}<div class="raid-track"><span>PREP</span><i>→</i><span>TOPSIDE</span><i>→</i><span>RETURN</span></div>
    <div class="raid-steps">${stepRows(guide)}</div><aside class="extract-call"><b>EXIT CONDITION</b><p>${guide.outcome}</p></aside></article></main>`;
}
