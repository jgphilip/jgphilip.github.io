# jgphilip.github.io

Minimalist single-page resume built with Jekyll and deployed to GitHub Pages.

- Content: edit [`_data/resume.yml`](_data/resume.yml) (bio, experience, skills).
- Layout: [`_layouts/default.html`](_layouts/default.html) and [`index.html`](index.html).
- Styles/scripts: `assets/css/resume.css`, `assets/js/resume.js`.

## Develop

```shell
bundle install
bundle exec jekyll serve
```

Pushing to `main` triggers the deploy workflow in `.github/workflows/pages-deploy.yml`.
