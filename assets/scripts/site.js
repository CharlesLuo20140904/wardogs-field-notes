import { games, getGame } from "./games.js";
import { getGuide, getGuidesForGame } from "./guides.js";
import { getSource } from "./content/sources.js";
import { bindAnalytics } from "./analytics.js";

const root = document.querySelector("#site");
const assets = document.body.dataset.assets;
const reviewedOn = "14 Oct 2026";
const assetUrl = (file) => new URL(`${assets}/images/${file}`, window.location.href).href;
const guideRoot = document.body.dataset.guideRoot || "../guide/";
const guideUrl = (gameId, guideId) => `${guideRoot}?game=${encodeURIComponent(gameId)}&guide=${encodeURIComponent(guideId)}`;

function navigation(game) {
  const home = document.body.dataset.home;
  return `<header class="nav-shell"><a class="wordmark" href="${home}" data-track="return_home" data-track-game="${game.id}">FIELD / NOTES</a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav id="menu" class="site-nav" aria-label="Primary navigation">
      <a href="#guides">Guides</a><a href="#sources">Sources</a><a href="#method">Method</a>
      <a class="nav-status" href="#guides">${game.status}</a>
    </nav></header>`;
}

function hero(game) {
  const style = `--hero-image:url('${assetUrl(game.image)}')`;
  return `<section class="hero" style="${style}"><div class="hero-shade"></div>
    <div class="hero-content"><p class="eyebrow">${game.eyebrow}</p><h1>${game.name}</h1>
      <p class="hero-line">${game.tagline}</p><p class="hero-copy">${game.intro}</p>
      <a class="primary-link" href="#guides">Read verified guides <span aria-hidden="true">↗</span></a></div>
    <p class="hero-index">03 / 03<br><span>Reviewed ${reviewedOn}</span></p>
  </section>`;
}

function guideCard(game, guide, index) {
  const number = String(index + 1).padStart(2, "0");
  return `<a class="guide-card" href="${guideUrl(game.id, guide.id)}" data-track="open_guide" data-track-game="${game.id}" data-track-guide="${guide.id}">
    <span class="guide-number">${number}</span><span class="guide-meta">${guide.readTime}</span>
    <strong>${guide.title}</strong><span class="guide-description">${guide.deck}</span>
    <span class="guide-proof">Official source linked</span><span class="guide-arrow" aria-hidden="true">→</span></a>`;
}

function guideSection(game) {
  const cards = getGuidesForGame(game.id).map((guide, index) => guideCard(game, guide, index)).join("");
  return `<section id="guides" class="guide-section"><div class="section-heading"><div><p class="eyebrow">START HERE</p>
    <h2>Three useful guides, grounded in current primary sources.</h2></div><p>${game.focus}</p></div>
    <div class="guide-grid">${cards}</div></section>`;
}

function sourceSection(game) {
  const keys = [...new Set(getGuidesForGame(game.id).map((guide) => guide.sourceKey))];
  const links = keys.map((key) => {
    const source = getSource(key);
    return `<a href="${source.url}" target="_blank" rel="noreferrer"><strong>${source.label}</strong><span>${source.detail}</span><b>Open source ↗</b></a>`;
  }).join("");
  return `<section id="sources" class="source-section"><div><p class="eyebrow">PRIMARY SOURCES</p>
    <h2>Every guide shows its evidence.</h2><p>Checked ${reviewedOn}. Source links open the publisher, developer, official help centre, or official Steam page directly.</p></div>
    <div class="source-list">${links}</div></section>`;
}

function methodSection() {
  return `<section id="method" class="method-section"><div><p class="eyebrow">EDITORIAL METHOD</p>
    <h2>Helpful, without pretending a moving game is fixed.</h2></div>
    <p>We cite the primary source, name its scope, date the review, and avoid unverified maps, drop rates, item values and permanent tier lists.</p>
    <div class="method-mark">✓</div></section>`;
}

function footer() {
  return `<footer><span>FIELD / NOTES</span><span>Unofficial guide · reviewed ${reviewedOn}</span><span>Verify live-client details before acting on them.</span></footer>`;
}

function gamePage(game) {
  return `${navigation(game)}${hero(game)}${guideSection(game)}${sourceSection(game)}${methodSection()}${footer()}`;
}

function applyTheme(game) {
  document.documentElement.style.setProperty("--accent", game.accent);
  document.documentElement.style.setProperty("--glow", game.glow);
  document.title = `${game.name} guide | Field Notes`;
}

function closeMenu() {
  document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
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
    <span>${game.tagline}</span><i>Open guides ↗</i></a>`;
}

function directoryPage() {
  const cards = games.map(directoryCard).join("");
  return `<section class="directory-hero"><p class="eyebrow">SIX SOURCE-LINKED GUIDE LIBRARIES</p>
    <h1>Game guides that show where the facts came from.</h1>
    <p>Six independent static sites with practical starter guides, source cards and version-sensitive disclosures.</p></section>
    <section class="directory-grid">${cards}</section>${footer()}`;
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
