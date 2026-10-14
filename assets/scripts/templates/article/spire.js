import { articleLead, preflight, stepRows } from "./common.js";

export function renderSpireArticle(game, guide) {
  return `<main class="article-shell article-spire"><section id="guide" class="spire-article-top">${articleLead(game, guide, "RUN NOTE")}</section>
    <article class="run-page">${preflight(guide)}<div class="run-steps">${stepRows(guide)}</div>
    <aside class="ledger-outcome"><p class="kicker">WRITE THIS DOWN</p><p>${guide.outcome}</p></aside></article></main>`;
}
