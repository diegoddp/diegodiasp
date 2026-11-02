# diegodiasp.com

This is the source of [diegodiasp.com](https://diegodiasp.com), the portfolio of **Diego Dias Pereira**, a Deployment Engineer based in Ireland (Azure, Kubernetes, CI/CD, Terraform, enterprise WordPress).

It's a plain static site: HTML, CSS and about 20 lines of JavaScript. There's no framework, no build step and no runtime dependencies, so the files in the repo are exactly the files served.

## Design

The visual direction is "Engineering field notes": an editorial layout inspired by technical journals and infrastructure docs.

| | |
|---|---|
| Palette | paper `#F5F3EC` · navy `#101722` · electric blue `#1455E8` · lime `#C6F500` |
| Type | Fraunces (headlines), Inter (body), IBM Plex Mono (labels and metadata) |
| Fonts | self-hosted `woff2`, so the page makes no third-party requests |
| Motion | animated deployment diagram and status dots, disabled for `prefers-reduced-motion` |

## Page sections

1. **Hero:** headline plus an animated SVG of the deployment path (Code → CI/CD → Azure, with Terraform)
2. **Capabilities:** four numbered areas
3. **Selected work:** case studies written as challenge → approach → verified result
4. **Engineering lab:** open-source Python, applied AI and pipeline projects
5. **Experience:** timeline
6. **Contact**

Every metric on the site is real and comes from my CV. Nothing is placeholder.

## Run locally

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Project structure

```
index.html              single-page portfolio
404.html                custom not-found page (noindex)
.htaccess               Hostinger: HTTPS/www redirects, compression, caching, security headers
robots.txt, sitemap.xml crawler files
site.webmanifest        app name, colours and icons
favicon.ico
assets/
  style.css             all styles (layout, components, responsive rules)
  main.js               mobile menu + active section highlight
  og-image.png          1200x630 social share card
  favicon.svg, apple-touch-icon.png, icon-192/512.png
  fonts/                Fraunces, Inter, IBM Plex Mono (woff2)
.github/workflows/
  deploy.yml            CI/CD pipeline
.htmlvalidate.json      HTML lint rules
```

## CI/CD

```
push to main ──► check ──────────────────────► deploy (Hostinger, FTPS)
                 ├─ html-validate               only if check passes
                 └─ lychee (broken links)       and HOSTINGER_DEPLOY = true
```

- **check** runs on every push and pull request, plus **weekly on a schedule**, so a dead project link fails CI before a visitor finds it.
- **deploy** uploads the site to Hostinger over FTPS. It's switched off by default. To enable it:
  1. Add these repository **secrets**: `HOSTINGER_FTP_SERVER`, `HOSTINGER_FTP_USERNAME`, `HOSTINGER_FTP_PASSWORD`
  2. Optionally add the repository **variable** `HOSTINGER_SERVER_DIR` (default `public_html/`)
  3. Set the repository **variable** `HOSTINGER_DEPLOY` to `true`

## SEO and performance

- Lighthouse (local): **Performance 99 · Accessibility 100 · Best Practices 100 · SEO 100**, CLS 0
- Title and meta description written for search, canonical URL, `robots`, sitemap
- Open Graph + Twitter card with a custom 1200x630 share image (LinkedIn, Slack, WhatsApp previews)
- JSON-LD structured data (`ProfilePage` + `Person`: role, employer, location, skills, credentials)
- Self-hosted, preloaded fonts (`font-display: swap`); no third-party requests, no trackers
- `.htaccess`: gzip, long-lived caching for fonts and images, HSTS and a strict Content-Security-Policy

## Responsive and accessibility checks

- Tested from 320 px phones to 2560 px monitors, including landscape phones and short laptop screens, with no horizontal overflow
- Semantic landmarks, a skip link, visible focus states, `aria` labels on the diagram and the menu
- Animations respect `prefers-reduced-motion`

## License

© 2026 Diego Dias Pereira. The code is free to learn from. The content and personal information are not for reuse.
