import { guideCards, evidenceStrip } from "./common.js";

export function renderAionHome(game, guides, root) {
  return `<main class="game-home aion-home"><section class="aion-hero"><div class="aion-orbit" aria-hidden="true"></div>
    <p class="kicker">${game.eyebrow}</p><h1>Choose a role.<br><em>Enter prepared.</em></h1><p>${game.intro}</p>
    <a class="action-button" href="#entry-points">Open the field brief <span>↓</span></a><aside><b>CHAPTER 1</b><span>Global and regional client details can differ.</span></aside></section>
    <section id="entry-points" class="aion-console"><div><p class="kicker">STARTING POINTS</p><h2>A dossier for the first three decisions.</h2></div>
      <ol><li><b>01</b><span>Pick a role from confirmed class jobs—not an unlabelled tier list.</span></li><li><b>02</b><span>Match the dungeon format to the current requirement and party.</span></li><li><b>03</b><span>Record the client context before sharing a build note.</span></li></ol></section>
    <section id="guides" class="home-guides"><header><p class="kicker">FIELD BRIEFS</p><h2>Confirmed systems, framed for a next action.</h2></header><div class="aion-guide-list">${guideCards(game, guides, root)}</div></section>
    ${evidenceStrip(game, 2)}</main>`;
}
