import { guideCards, evidenceStrip } from "./common.js";

export function renderDeadlockHome(game, guides, root) {
  return `<main class="game-home deadlock-home"><section class="deadlock-topbar"><span>LIVE CLIENT NOTES</span><span>EARLY DEVELOPMENT · VERIFY PATCH</span><span>6v6 / CITY MAP</span></section>
    <section class="deadlock-hero"><div><p class="kicker">${game.eyebrow}</p><h1>Make the call<br>with the <em>current</em> client.</h1><p>${game.intro}</p><a class="action-button" href="#match-desk">Open match desk <span>→</span></a></div>
      <aside><span>BUILD RULE</span><strong>Every recommendation carries a date, a job and a test.</strong><small>Patch numbers outlive confident screenshots.</small></aside></section>
    <section id="guides" class="match-desk"><header><p class="kicker">MATCH DESK</p><h2>Three repeatable review loops.</h2></header><div class="deadlock-guide-grid">${guideCards(game, guides, root)}</div></section>
    <section class="patch-signal"><span>PATCH SIGNAL</span><p>Deadlock is in early development. Treat hero, item and objective advice as current-client notes, not permanent doctrine.</p></section>
    ${evidenceStrip(game, 2)}</main>`;
}
