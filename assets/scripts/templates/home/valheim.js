import { guideCards, evidenceStrip } from "./common.js";

export function renderValheimHome(game, guides, root) {
  return `<main class="game-home valheim-home"><section class="valheim-hero"><div><p class="kicker">${game.eyebrow}</p><h1>Make the long<br>way <em>home.</em></h1><p>${game.intro}</p><a class="action-button" href="#expedition-atlas">Open the expedition atlas <span>→</span></a></div>
    <aside><span>RETURN ROUTE</span><b>Rest · repair · resupply · sail again</b><small>Every expedition begins with a way back.</small></aside></section>
    <section class="biome-compass"><span>NORTH</span><i>▲</i><p>Do not use a biome guide without its preparation, return point and version context.</p><span>SOUTH</span></section>
    <section id="guides" class="expedition-atlas"><header><p class="kicker">EXPEDITION ATLAS</p><h2>Survival systems, not souvenir lists.</h2></header><div class="valheim-guide-grid">${guideCards(game, guides, root)}</div></section>
    ${evidenceStrip(game, 2)}</main>`;
}
