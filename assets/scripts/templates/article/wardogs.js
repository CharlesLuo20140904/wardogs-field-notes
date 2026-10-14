import { articleLead, preflight, stepRows } from "./common.js";

export function renderWardogsArticle(game, guide) {
  return `<main class="article-shell article-wardogs"><section id="guide" class="wardogs-article-top">${articleLead(game, guide, "OPERATIONS ORDER")}</section>
    <article class="operation-order"><div class="operation-grid">${preflight(guide)}<aside><b>OBJECTIVE</b><p>Control Zone value comes before incidental eliminations.</p></aside></div>
    <div class="operation-steps">${stepRows(guide)}</div><footer><b>COMMANDER'S CHECK</b><p>${guide.outcome}</p></footer></article></main>`;
}
