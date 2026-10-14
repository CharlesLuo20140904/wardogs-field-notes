import { getGame } from "./games.js";
import { getGuide, getGuidesForGame } from "./guides.js";
import { getSource } from "./content/sources.js";
import { bindAnalytics } from "./analytics.js";
import { siteConfig } from "./site-config.js";
import { getGameLayout } from "./layouts/game-layouts.js";
import { renderArticle } from "./templates/article/index.js";
import { articleChrome, evidencePanel, relatedRows } from "./templates/article/common.js";
import { siteFooter } from "./templates/shared.js";

const root = document.querySelector("#site");
const query = new URLSearchParams(window.location.search);
const game = getGame(query.get("game"));
const guide = game && getGuide(game.id, query.get("guide"));
const reviewedOn = "14 Oct 2026";

function setMetadata() {
  document.body.className = getGameLayout(game.id).theme;
  document.title = `${guide.title} · ${game.name} guide`;
  document.querySelector('meta[name="description"]').content = guide.deck;
  document.querySelector('link[rel="canonical"]').href = `${siteConfig.siteUrl || window.location.origin}${window.location.pathname}${window.location.search}`;
}

function renderGuide() {
  const home = document.body.dataset.gameHome || `../${game.id}/`;
  root.innerHTML = `${articleChrome(game, guide, home)}${renderArticle(game, guide)}${evidencePanel(guide, getSource(guide.sourceKey))}
    ${relatedRows(game, getGuidesForGame(game.id), guide, "?")}${siteFooter(game, reviewedOn)}`;
  bindMenu();
}

function bindMenu() {
  const button = document.querySelector(".menu-button");
  const menu = document.querySelector(".site-nav");
  button.addEventListener("click", () => toggleMenu(button, menu));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeMenu(button, menu)));
}

function toggleMenu(button, menu) {
  const open = button.getAttribute("aria-expanded") !== "true";
  button.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("is-open", open);
}

function closeMenu(button, menu) {
  button.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
}

function renderMissing() {
  root.innerHTML = `<section class="missing"><p class="kicker">GUIDE NOT FOUND</p><h1>Choose a guide from the library.</h1><a class="action-button" href="../">Return to collection →</a></section>`;
}

if (!game || !guide) renderMissing();
else {
  setMetadata();
  renderGuide();
}
bindAnalytics();
