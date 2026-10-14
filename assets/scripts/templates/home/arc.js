import { guideCards, evidenceStrip } from "./common.js";

export function renderArcHome(game, guides, root) {
  return `<main class="game-home arc-home"><section class="arc-hero"><div class="arc-grid" aria-hidden="true"></div><p class="kicker">${game.eyebrow}</p>
    <h1>Plan the run.<br><em>Own the return.</em></h1><p>${game.intro}</p><a class="action-button" href="#raid-board">Build a raid plan <span>↓</span></a>
    <dl><div><dt>01</dt><dd>Prep at Speranza</dd></div><div><dt>02</dt><dd>Scavenge Topside</dd></div><div><dt>03</dt><dd>Extract with intent</dd></div></dl></section>
    <section id="guides" class="raid-board"><header><p class="kicker">RAID BOARD</p><h2>Choose an objective before a loadout.</h2></header><div class="arc-guide-stack">${guideCards(game, guides, root)}</div></section>
    <aside class="arc-warning"><b>LOSS RULE</b><p>Safe Pocket, Free Loadout and extraction details are cited directly because a live-service change can alter the risk calculation.</p></aside>
    ${evidenceStrip(game, 2)}</main>`;
}
