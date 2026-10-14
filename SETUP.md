# Publishing checklist

1. Replace `hello@example.com` in `assets/scripts/site.js` with a monitored address or a real newsletter URL.
2. Add the public Google Analytics measurement ID and the final `https://your-domain.example` address in `assets/scripts/site-config.js`.
3. Add the final domain to GitHub Pages, then create a `sitemap.xml` using that exact canonical domain.
4. Review every article against the current game version before publishing. The current articles deliberately avoid unverified build numbers, patch rules, and item details.

## Analytics

The site sends no analytics requests by default. Adding a measurement ID activates page and click reporting through Google Analytics. Review your privacy and cookie obligations for the countries you serve before enabling it.
