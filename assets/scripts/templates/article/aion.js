import { articleLead, preflight, stepRows } from "./common.js";

export function renderAionArticle(game, guide) {
  return `<main class="article-shell article-aion"><section id="guide" class="aion-article-header">${articleLead(game, guide, "DAEVA FIELD BRIEF")}</section>
    <div class="article-layout"><aside class="article-margin"><b>FIELD NOTE</b><span>Client and region can change availability.</span></aside>
    <article>${preflight(guide)}<div class="aion-steps">${stepRows(guide)}</div><aside class="article-outcome"><p class="kicker">USE THIS WHEN</p><p>${guide.outcome}</p></aside></article></div></main>`;
}
