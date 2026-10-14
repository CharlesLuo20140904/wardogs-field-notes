import { siteConfig } from "./site-config.js";

function addGoogleAnalytics() {
  const id = siteConfig.gaMeasurementId.trim();
  if (!id) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.append(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => window.dataLayer.push(args);
  window.gtag("js", new Date());
  window.gtag("config", id);
}

function trackClick(event) {
  const target = event.target.closest("[data-track]");
  if (!target || typeof window.gtag !== "function") return;
  window.gtag("event", target.dataset.track, {
    game: target.dataset.trackGame || "",
    guide: target.dataset.trackGuide || ""
  });
}

export function bindAnalytics() {
  addGoogleAnalytics();
  document.addEventListener("click", trackClick);
}
