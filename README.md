# Alibek Berik — Portfolio

Personal portfolio site built with [Astro](https://astro.build). All content lives in Markdown files, so you can update the site without touching any code.

## Editing content

| What | File |
| --- | --- |
| Name, tagline, contact links, hero stats, "About" text | `src/content/profile.md` |
| "Why hire me" cards | `src/content/why-hire-me.md` |
| Skills | `src/content/skills.md` |
| Education | `src/content/education.md` |
| Projects (one file each) | `src/content/projects/*.md` |
| Experience (one file each) | `src/content/experience/*.md` |
| Certificates (one file each) | `src/content/certificates/*.md` |
| Downloadable CV | `public/Alibek_Berik_Resume.pdf` |
| Colors and fonts | top of `src/styles/global.css` |

- **Add a project:** copy any file in `src/content/projects/` and edit it. `order` controls its position.
- **Add experience or a certificate:** copy the `example.md` template in that folder and set `draft: false`. Those sections appear automatically once they have at least one non-draft entry.

## Run locally

Requires [Node.js](https://nodejs.org) 20+.

```bash
npm install
npm run dev      # http://localhost:4321
```

## Deploy to GitHub Pages

1. Create a GitHub repo named **`AlibekBerik.github.io`** and push this folder to its `main` branch.
2. In the repo, open **Settings → Pages → Source** and select **GitHub Actions**.
3. Every push to `main` rebuilds and publishes the site at **https://alibekberik.github.io**.

Using a different repo name (e.g. `portfolio`)? Add `base: '/portfolio'` in `astro.config.mjs`.
