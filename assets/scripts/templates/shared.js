export function siteNavigation(game, links, home) {
  const items = links.map(([href, label]) => `<a href="${href}">${label}</a>`).join("");
  return `<header class="site-header"><a class="site-mark" href="${home}" data-track="return_home" data-track-game="${game.id}">
    <span>FIELD NOTES</span><b>${game.name}</b></a><button class="menu-button" type="button" aria-expanded="false" aria-controls="site-menu">Menu</button>
    <nav id="site-menu" class="site-nav" aria-label="Primary navigation">${items}</nav></header>`;
}

export function siteFooter(game, reviewedOn) {
  return `<footer class="site-footer"><span>${game.name} · Unofficial guide library</span>
    <span>Sources checked ${reviewedOn}</span><span>Check the live client before acting on version-sensitive advice.</span></footer>`;
}

export function guideLink(root, gameId, guideId) {
  const prefix = root.endsWith("?") ? root : `${root}?`;
  return `${prefix}game=${encodeURIComponent(gameId)}&guide=${encodeURIComponent(guideId)}`;
}

export function sourceLink(source) {
  return `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.label} <span aria-hidden="true">↗</span></a>`;
}
