# diegodiasp.com

My personal portfolio. It's a plain static site (HTML + CSS, no build step, no JavaScript).

## How it ships

```
push to main → GitHub Actions
                ├─ check:  html-validate + lychee (broken-link check)
                └─ deploy: GitHub Pages  (only if check passes)
```

The link check also runs weekly on a schedule, so a dead project link fails CI before a recruiter finds it.

## Run locally

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Structure

```
index.html            # single-page portfolio
404.html              # custom not-found page
assets/style.css      # styles (dark/light via prefers-color-scheme)
assets/favicon.svg
.github/workflows/    # CI/CD
.htmlvalidate.json    # HTML lint rules
```
