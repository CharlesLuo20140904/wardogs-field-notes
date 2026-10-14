import { guideCards, evidenceStrip } from "./common.js";

export function renderSpireHome(game, guides, root) {
  return `<main class="game-home spire-home"><section class="spire-hero"><p class="kicker">${game.eyebrow}</p><div class="spire-title"><span>THE</span><h1>Spire</h1><em>ledger</em></div><p>${game.intro}</p><a class="action-button" href="#run-ledger">Begin a run note <span>↓</span></a></section>
    <section class="run-rail" aria-label="Run decisions"><span>1. See the problem</span><i>→</i><span>2. Choose one answer</span><i>→</i><span>3. Record the patch</span></section>
    <section id="guides" class="run-ledger"><header><p class="kicker">RUN LEDGER</p><h2>Decision notes for an unfinished climb.</h2></header><div class="spire-guide-stack">${guideCards(game, guides, root)}</div></section>
    <aside class="spire-note"><b>EARLY ACCESS NOTE</b><p>Card values, events and systems can change. This library favours reproducible decision records over frozen rankings.</p></aside>
    ${evidenceStrip(game, 2)}</main>`;
}
