import { getGame } from "./games.js";
import { getGuide, getGuidesForGame } from "./guides.js";
import { getSource } from "./content/sources.js";
import { bindAnalytics } from "./analytics.js";
import { siteConfig } from "./site-config.js";

const root = document.querySelector("#site");
const query = new URLSearchParams(window.location.search);
const game = getGame(query.get("game"));
const guide = game && getGuide(game.id, query.get("guide"));
const reviewedOn = "14 Oct 2026";
const gameHome = document.body.dataset.gameHome || `../${game?.id || ""}/`;
const assetUrl = (file) => new URL(`../assets/images/${file}`, window.location.href).href;
const guideUrl = (gameId, guideId) => `?game=${encodeURIComponent(gameId)}&guide=${encodeURIComponent(guideId)}`;

function navigation() {
  return `<header class="nav-shell article-nav"><a class="wordmark" href="../" data-track="return_home">FIELD / NOTES</a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav id="menu" class="site-nav" aria-label="Article navigation"><a href="#article">Guide</a><a href="#source">Source</a><a href="#more">More guides</a></nav></header>`;
}

function articleHeader() {
  const style = `--article-image:url('${assetUrl(game.image)}')`;
  return `<header class="article-hero" style="${style}"><div class="article-shade"></div><div class="article-headline">
    <a class="article-kicker" href="${gameHome}" data-track="return_game" data-track-game="${game.id}">← ${game.eyebrow}</a>
    <p class="eyebrow">VERIFIED GUIDE / ${guide.readTime}</p><h1>${guide.title}</h1><p>${guide.deck}</p>
    <span>Primary source reviewed ${reviewedOn} · Version-sensitive details are labelled</span></div></header>`;
}

function articleSections() {
  return guide.sections.map(([title, text], index) => `<section><span>${String(index + 1).padStart(2, "0")}</span><div><h2>${title}</h2><p>${text}</p></div></section>`).join("");
}

function sourceCard() {
  const source = getSource(guide.sourceKey);
  return `<aside id="source" class="source-card"><p class="eyebrow">SOURCE & SCOPE</p><h2>${source.label}</h2>
    <p>${source.detail}</p><a class="primary-link" href="${source.url}" target="_blank" rel="noreferrer" data-track="open_source" data-track-game="${game.id}" data-track-guide="${guide.id}">Open official source <span aria-hidden="true">↗</span></a>
    <small>Checked ${reviewedOn}. This article does not claim unverified item values, drop rates, map spawns or permanent rankings.</small></aside>`;
}

function articleBody() {
  const takeaways = guide.takeaways.map((item) => `<li>${item}</li>`).join("");
  return `<article id="article" class="article-body"><p class="article-intro">${guide.intro}</p>
    <div class="article-sections">${articleSections()}</div><aside class="takeaway"><p class="eyebrow">TAKE WITH YOU</p>
    <h2>Three things to use in the next session.</h2><ol>${takeaways}</ol></aside>${sourceCard()}</article>`;
}

function relatedGuides() {
  const links = getGuidesForGame(game.id).filter((item) => item.id !== guide.id).map((item) => `<a href="${guideUrl(game.id, item.id)}" data-track="open_related" data-track-game="${game.id}" data-track-guide="${item.id}"><span>${item.readTime}</span><strong>${item.title}</strong><b>→</b></a>`).join("");
  return `<section id="more" class="related"><p class="eyebrow">KEEP READING</p><h2>More ${game.name} guides.</h2><div>${links}</div></section>`;
}

function footer() {
  return `<footer><span>FIELD / NOTES</span><span>Unofficial guide · reviewed ${reviewedOn}</span><span>Verify live-client details before acting on them.</span></footer>`;
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
  document.title = `${guide.title} · ${game.name} guide`;
  document.querySelector('meta[name="description"]').content = guide.deck;
  document.querySelector('link[rel="canonical"]').href = `${siteConfig.siteUrl || window.location.origin}${window.location.pathname}${window.location.search}`;
}

function renderMissing() {
  root.innerHTML = `<section class="missing"><p class="eyebrow">GUIDE NOT FOUND</p><h1>Choose a guide from the library.</h1><a class="primary-link" href="../">Return to the collection <span aria-hidden="true">↗</span></a></section>`;
}

if (!game || !guide) renderMissing();
else {
  setMetadata();
  root.innerHTML = `${navigation()}${articleHeader()}${articleBody()}${relatedGuides()}${footer()}`;
  bindMenu();
}

bindAnalytics();
