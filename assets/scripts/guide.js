import { getGame } from "./games.js";
import { getGuide, getGuidesForGame } from "./guides.js";
import { bindAnalytics } from "./analytics.js";
import { siteConfig } from "./site-config.js";

const root = document.querySelector("#site");
const query = new URLSearchParams(window.location.search);
const game = getGame(query.get("game"));
const guide = game && getGuide(game.id, query.get("guide"));
const gameHome = document.body.dataset.gameHome || `../${game?.id || ""}/`;
const assetUrl = (file) => new URL(`../assets/images/${file}`, window.location.href).href;
const guideUrl = (gameId, guideId) => `?game=${encodeURIComponent(gameId)}&guide=${encodeURIComponent(guideId)}`;

function navigation() {
  return `<header class="nav-shell article-nav"><a class="wordmark" href="../" data-track="return_home">FIELD / NOTES</a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav id="menu" class="site-nav" aria-label="Article navigation"><a href="#article">Article</a><a href="#checklist">Checklist</a><a href="#more">More notes</a></nav></header>`;
}

function articleHeader() {
  const style = `--article-image:url('${assetUrl(game.image)}')`;
  return `<header class="article-hero" style="${style}"><div class="article-shade"></div><div class="article-headline">
    <a class="article-kicker" href="${gameHome}" data-track="return_game" data-track-game="${game.id}">← ${game.eyebrow}</a>
    <p class="eyebrow">FIELD NOTE / ${guide.readTime}</p><h1>${guide.title}</h1><p>${guide.deck}</p>
    <span>Evergreen decision framework · Review version-specific facts before publication</span></div></header>`;
}

function articleBody() {
  const sections = guide.sections.map(([title, text], index) => `<section><span>${String(index + 1).padStart(2, "0")}</span><div><h2>${title}</h2><p>${text}</p></div></section>`).join("");
  const takeaways = guide.takeaways.map((item) => `<li>${item}</li>`).join("");
  return `<article id="article" class="article-body"><p class="article-intro">This is a practical reading guide: use it to make the next decision more deliberate, then annotate it with confirmed version details as the game changes.</p>
    <div class="article-sections">${sections}</div><aside id="checklist" class="takeaway"><p class="eyebrow">TAKE WITH YOU</p><h2>Three lines for the next session.</h2><ol>${takeaways}</ol></aside></article>`;
}

function relatedGuides() {
  const links = getGuidesForGame(game.id).filter((item) => item.id !== guide.id).map((item) => `<a href="${guideUrl(game.id, item.id)}" data-track="open_related" data-track-game="${game.id}" data-track-guide="${item.id}"><span>${item.readTime}</span><strong>${item.title}</strong><b>→</b></a>`).join("");
  return `<section id="more" class="related"><p class="eyebrow">KEEP READING</p><h2>More ${game.name} field notes.</h2><div>${links}</div></section>`;
}

function footer() {
  return `<footer><span>FIELD / NOTES</span><span>Static editorial site · 2026</span><span>Verify version-sensitive details before publishing.</span></footer>`;
}

function closeMenu() {
  document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
  document.querySelector(".site-nav").classList.remove("is-open");
}

function bindMenu() {
  document.querySelector(".menu-button").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    document.querySelector(".site-nav").classList.toggle("is-open", open);
  });
  document.querySelectorAll(".site-nav a").forEach((link) => link.addEventListener("click", closeMenu));
}

function setMetadata() {
  document.documentElement.style.setProperty("--accent", game.accent);
  document.documentElement.style.setProperty("--glow", game.glow);
  document.title = `${guide.title} · ${game.name} | Field Notes`;
  document.querySelector('meta[name="description"]').content = guide.deck;
  const canonical = document.querySelector('link[rel="canonical"]');
  canonical.href = `${siteConfig.siteUrl || window.location.origin}${window.location.pathname}${window.location.search}`;
}

function renderMissing() {
  root.innerHTML = `<section class="missing"><p class="eyebrow">NOTE NOT FOUND</p><h1>Choose a field note from the library.</h1><a class="primary-link" href="../">Return to the collection <span aria-hidden="true">↗</span></a></section>`;
}

if (!game || !guide) renderMissing();
else {
  setMetadata();
  root.innerHTML = `${navigation()}${articleHeader()}${articleBody()}${relatedGuides()}${footer()}`;
  bindMenu();
}

bindAnalytics();
