import { guideLink, siteNavigation, sourceLink } from "../shared.js";

export function articleChrome(game, guide, home) {
  const links = [["#guide", "Guide"], ["#evidence", "Evidence"], ["#next", "Next reads"]];
  return siteNavigation(game, links, home);
}

export function articleLead(game, guide, label) {
  return `<header class="article-lead"><p class="kicker">${label} · ${guide.type}</p><h1>${guide.title}</h1><p>${guide.deck}</p>
    <dl><div><dt>STATUS</dt><dd>${guide.version}</dd></div><div><dt>READ TIME</dt><dd>${guide.readTime}</dd></div><div><dt>LAST CHECK</dt><dd>${guide.checked}</dd></div></dl></header>`;
}

export function stepRows(guide) {
  return guide.sections.map(([title, text], index) => `<section class="guide-step"><span>${String(index + 1).padStart(2, "0")}</span><div><h2>${title}</h2><p>${text}</p></div></section>`).join("");
}

export function preflight(guide) {
  return `<aside class="preflight"><p class="kicker">BEFORE YOU START</p><p>${guide.prerequisite}</p><b>${guide.caution}</b></aside>`;
}

export function evidencePanel(guide, source) {
  return `<aside id="evidence" class="evidence-panel"><p class="kicker">EVIDENCE & SCOPE</p><h2>${source.label}</h2><p>${source.detail}</p>${sourceLink(source)}
    <small>Only facts in the stated source are asserted here. Strategy prompts are labelled as editorial guidance.</small></aside>`;
}

export function relatedRows(game, guides, guide, root) {
  const links = guides.filter((item) => item.id !== guide.id).map((item) => `<a href="${guideLink(root, game.id, item.id)}" data-track="open_related" data-track-game="${game.id}" data-track-guide="${item.id}"><span>${item.type}</span><b>${item.title}</b><i>→</i></a>`).join("");
  return `<section id="next" class="article-related"><p class="kicker">KEEP EXPLORING</p><h2>Continue with a connected decision.</h2><div>${links}</div></section>`;
}
