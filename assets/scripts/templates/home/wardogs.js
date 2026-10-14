import { guideCards, evidenceStrip } from "./common.js";

export function renderWardogsHome(game, guides, root) {
  return `<main class="game-home wardogs-home"><section class="war-banner"><span>TEAM A</span><i></i><span>TEAM B</span><i></i><span>TEAM C</span></section>
    <section class="wardogs-hero"><div><p class="kicker">${game.eyebrow}</p><h1>Hold ground.<br><em>Spend smart.</em></h1><p>${game.intro}</p></div><div class="zone-diagram" aria-label="Control zone briefing"><span>CONTROL<br>ZONE</span><b>100</b><small>points to win</small></div></section>
    <section id="guides" class="operations"><header><p class="kicker">OPERATIONS BOARD</p><h2>Every guide resolves to the win condition.</h2></header><div class="wardogs-guide-grid">${guideCards(game, guides, root)}</div></section>
    <section class="war-principles"><div><b>OCCUPY</b><span>Presence earns the point.</span></div><div><b>ENABLE</b><span>Cash follows team actions.</span></div><div><b>RESHAPE</b><span>Terrain must serve the zone.</span></div></section>
    ${evidenceStrip(game, 1)}</main>`;
}
