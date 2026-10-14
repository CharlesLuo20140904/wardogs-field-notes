import { games, getGame } from "./games.js";
import { getGuidesForGame } from "./guides.js";
import { getSource } from "./content/sources.js";
import { bindAnalytics } from "./analytics.js";
import { getGameLayout } from "./layouts/game-layouts.js";
import { renderGameHome } from "./templates/home/index.js";
import { siteFooter, sourceLink, siteNavigation } from "./templates/shared.js";

const root = document.querySelector("#site");
const reviewedOn = "14 Oct 2026";

function sourceRoster(guides) {
  const keys = [...new Set(guides.map((guide) => guide.sourceKey))];
  const links = keys.map((key) => `<li>${sourceLink(getSource(key))}</li>`).join("");
  return `<section id="sources" class="source-roster"><div><p class="kicker">SOURCE DESK</p><h2>What this library can prove.</h2>
    <p>Primary sources establish systems and update scope. Unverified routes, values and rankings are intentionally excluded.</p></div><ul>${links}</ul></section>`;
}

function renderGamePage(game) {
  const guides = getGuidesForGame(game.id);
  const layout = getGameLayout(game.id);
  document.body.className = layout.theme;
  document.title = `${game.name} guides · ${layout.label}`;
  root.innerHTML = `${siteNavigation(game, [["#guides", "Guides"], ["#sources", "Sources"]], document.body.dataset.home)}
    ${renderGameHome(game, guides, document.body.dataset.guideRoot || "../guide/")}${sourceRoster(guides)}${siteFooter(game, reviewedOn)}`;
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

function directoryCard(game) {
  return `<a class="directory-card" href="${game.id}/"><span>${game.eyebrow}</span><b>${game.name}</b><p>${game.tagline}</p><i>Open guide desk →</i></a>`;
}

function renderDirectory() {
  root.innerHTML = `<section class="directory-hero"><p class="kicker">SIX SPECIALIST GUIDE DESKS</p><h1>Different games need different ways in.</h1>
    <p>Six independent, source-led static guide libraries. Every desk has its own layout, content model and evidence boundary.</p></section>
    <section class="directory-grid">${games.map(directoryCard).join("")}</section>`;
}

const game = getGame(document.body.dataset.game);
if (game) renderGamePage(game);
else renderDirectory();
bindAnalytics();
