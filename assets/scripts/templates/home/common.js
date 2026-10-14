import { guideLink } from "../shared.js";

export function guideCard(game, guide, root, index) {
  const order = String(index + 1).padStart(2, "0");
  return `<a class="guide-card" href="${guideLink(root, game.id, guide.id)}" data-track="open_guide" data-track-game="${game.id}" data-track-guide="${guide.id}">
    <span class="guide-order">${order}</span><span class="guide-type">${guide.type}</span><h3>${guide.title}</h3>
    <p>${guide.deck}</p><span class="guide-meta">${guide.readTime} · ${guide.version}</span><i aria-hidden="true">→</i></a>`;
}

export function guideCards(game, guides, root) {
  return guides.map((guide, index) => guideCard(game, guide, root, index)).join("");
}

export function evidenceStrip(game, sourceCount) {
  return `<p class="evidence-strip"><b>Evidence standard</b> · ${sourceCount} official source${sourceCount === 1 ? "" : "s"} · client-sensitive claims are labelled · no copied community route data</p>`;
}
