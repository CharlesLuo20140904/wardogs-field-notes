import { games, getGame } from "./games.js";
import { getGuidesForGame } from "./guides.js";
import { bindAnalytics } from "./analytics.js";

const root = document.querySelector("#site");
const assets = document.body.dataset.assets;
const assetUrl = (file) => new URL(`${assets}/images/${file}`, window.location.href).href;
const guideRoot = document.body.dataset.guideRoot || "../guide/";
const guideUrl = (gameId, guideId) => `${guideRoot}?game=${encodeURIComponent(gameId)}&guide=${encodeURIComponent(guideId)}`;
const arrow = "<span aria-hidden=\"true\">↗</span>";

function navigation(game) {
  const home = document.body.dataset.home;
  return `<header class="nav-shell"><a class="wordmark" href="${home}" data-track="return_home" data-track-game="${game.id}">FIELD / NOTES</a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav id="menu" class="site-nav" aria-label="Primary navigation">
      <a href="#guides">Guides</a><a href="#method">Method</a><a href="#dispatch">Dispatch</a>
      <a class="nav-status" href="#guides">${game.status}</a>
    </nav></header>`;
}

function hero(game) {
  const style = `--hero-image:url('${assetUrl(game.image)}')`;
  return `<section class="hero" style="${style}"><div class="hero-shade"></div>
    <div class="hero-content"><p class="eyebrow">${game.eyebrow}</p>
      <h1>${game.name}</h1><p class="hero-line">${game.tagline}</p><p class="hero-copy">${game.intro}</p>
      <a class="primary-link" href="#guides">Browse field notes ${arrow}</a>
    </div><p class="hero-index">03 / 18<br><span>Published notes</span></p>
  </section>`;
}

function guideCard(game, guide, index) {
  const number = String(index + 1).padStart(2, "0");
  return `<a class="guide-card" href="${guideUrl(game.id, guide.id)}" data-track="open_guide" data-track-game="${game.id}" data-track-guide="${guide.id}">
    <span class="guide-number">${number}</span><span class="guide-meta">${guide.readTime}</span>
    <strong>${guide.title}</strong><span class="guide-description">${guide.deck}</span><span class="guide-arrow" aria-hidden="true">→</span></a>`;
}

function guideSection(game) {
  const cards = getGuidesForGame(game.id).map((guide, index) => guideCard(game, guide, index)).join("");
  return `<section id="guides" class="guide-section"><div class="section-heading"><div><p class="eyebrow">WHAT TO EXPLORE</p>
    <h2>A small library with a point of view.</h2></div><p>${game.focus}</p></div><div class="guide-grid">${cards}</div></section>`;
}

function methodSection(game) {
  return `<section id="method" class="method-section"><div><p class="eyebrow">EDITORIAL METHOD</p><h2>Useful before it is exhaustive.</h2></div>
    <p>Each note focuses on one player decision, a clear next action, and language that can be checked against the current version before publication.</p>
    <div class="method-mark">${game.name.slice(0, 2)}</div></section>`;
}

function dispatchSection(game) {
  return `<section id="dispatch" class="dispatch"><p class="eyebrow">STAY IN THE LOOP</p><h2>One thoughtful update.<br>When there is something worth saying.</h2>
    <a class="primary-link" href="mailto:hello@example.com?subject=Field%20Notes%20dispatch" data-track="start_dispatch" data-track-game="${game.id}">Set up the dispatch ${arrow}</a>
  </section>`;
}

function footer() {
  return `<footer><span>FIELD / NOTES</span><span>Static editorial site · 2026</span><span>Verify version-sensitive details before publishing.</span></footer>`;
}

function gamePage(game) {
  return `${navigation(game)}${hero(game)}${guideSection(game)}${methodSection(game)}${dispatchSection(game)}${footer()}`;
}

function applyTheme(game) {
  document.documentElement.style.setProperty("--accent", game.accent);
  document.documentElement.style.setProperty("--glow", game.glow);
  document.title = `${game.name} Field Notes`;
}

function closeMenu() {
  const button = document.querySelector(".menu-button");
  button.setAttribute("aria-expanded", "false");
  document.querySelector(".site-nav").classList.remove("is-open");
}

function bindGamePage() {
  document.querySelector(".menu-button").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    document.querySelector(".site-nav").classList.toggle("is-open", open);
  });
  document.querySelectorAll(".site-nav a").forEach((link) => link.addEventListener("click", closeMenu));
}

function directoryCard(game) {
  const style = `--card-image:url('${assetUrl(game.image)}')`;
  return `<a class="directory-card" href="${game.id}/" style="${style}" data-track="open_game" data-track-game="${game.id}">
    <span class="directory-card-shade"></span><span class="eyebrow">${game.eyebrow}</span><strong>${game.name}</strong>
    <span>${game.tagline}</span><i>Open site ${arrow}</i></a>`;
}

function directoryPage() {
  const cards = games.map(directoryCard).join("");
  return `<section class="directory-hero"><p class="eyebrow">SIX STATIC GUIDE CONCEPTS</p><h1>Game guides with a clearer editorial voice.</h1>
    <p>Six independent, responsive guide sites with linked field notes and a lightweight static foundation.</p></section>
    <section class="directory-grid">${cards}</section><footer><span>FIELD / NOTES</span><span>Local static site · 2026</span></footer>`;
}

function renderGame(id) {
  const game = getGame(id);
  if (!game) return;
  applyTheme(game);
  root.innerHTML = gamePage(game);
  bindGamePage();
}

if (document.body.dataset.game) renderGame(document.body.dataset.game);
else root.innerHTML = directoryPage();

bindAnalytics();
