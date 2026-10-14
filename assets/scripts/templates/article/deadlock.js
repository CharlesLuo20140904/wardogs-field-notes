import { articleLead, preflight, stepRows } from "./common.js";

export function renderDeadlockArticle(game, guide) {
  return `<main class="article-shell article-deadlock"><section id="guide" class="deadlock-article-top">${articleLead(game, guide, "MATCH DESK")}</section>
    <div class="match-review"><aside class="review-rule"><b>REVIEW RULE</b><span>Record the exact client state before you interpret the result.</span></aside>
    <article>${preflight(guide)}<div class="match-steps">${stepRows(guide)}</div><footer><b>RETEST SIGNAL</b><p>${guide.outcome}</p></footer></article></div></main>`;
}
