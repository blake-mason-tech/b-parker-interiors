# B. Parker Interiors

A Next.js App Router site exported as static HTML, CSS, JavaScript, fonts, and images. Production hosting does not require a Next.js server, API, or environment secrets. The contact page opens the visitor's email app.

## Development

Use Node.js 24 or newer, then run:

```bash
npm ci
npm run dev
```

The development site is available at http://localhost:3000.

## Build and preview

```bash
npm run lint
npm run typecheck
npm run build
npm start -- --listen 4173
```

Preview the exported site at http://localhost:4173. Deploy the contents of `out/` to any static host. Routes use directory indexes (`about/index.html`, `contact/index.html`, and `portfolio/index.html`); preserve those directories when deploying. The sitemap and robots file are generated during the build.

## Cloudflare deployment

Cloudflare Workers serves the static export using `wrangler.jsonc`. The GitHub Actions workflow in `.github/workflows/deploy.yml` controls automatic builds and deployments:

| Branch | Publishes to |
| --- | --- |
| `main` | Live site and preview site |
| `preview` | Preview site only |

Pushes to `main` build once and publish the export to both the live site and the shared preview site. Pushes to `preview` build and update only the preview site. Other branches do not trigger Cloudflare builds.

The [live site](https://b-parker-interiors.blake-fd0.workers.dev) and [preview site](https://preview-b-parker-interiors.blake-fd0.workers.dev) have fixed URLs. Deploying `main` refreshes the preview site with the `main` version; it does not change the Git `preview` branch. Merge `main` into `preview` when bringing that branch up to date.

The workflow installs dependencies with `npm ci`, builds with `npm run build`, deploys `main` with `npx wrangler deploy`, and updates the shared preview with `npx wrangler preview --name preview`. It uses the repository's `CLOUDFLARE_API_TOKEN` Actions secret for authentication. Cloudflare Workers Builds triggers are disabled to avoid duplicate builds.

The configuration publishes `out/`, preserves directory-index routing, and serves the exported 404 page for missing routes. `.node-version` selects Node.js 24 for the build.

After building, check deployment configuration without publishing using `npx wrangler deploy --dry-run`, or preview Cloudflare's routing locally with `npx wrangler dev`.

## Images and fonts

Source photos and logos live in `assets/images/` and are imported into page components. Use the `next-image-export-optimizer` Image component and a `sizes` value matching the image's displayed width when adding an image.

`npm run build` generates responsive WebP images and blur placeholders, then packages them in `out/nextImageExportOptimizer/`. Browsers select the appropriate width for their viewport and pixel density. Imported originals remain available as fallbacks; the source asset directory is not copied into `out/`. Generated image caches in `public/` are ignored by Git, so subsequent builds can reuse them.

Cinzel and Outfit are downloaded by `next/font` during the build and served locally in the exported site. A fresh build needs network access to Google Fonts; visitors do not.

## Tooling compatibility

Next.js, React, Material UI, and Emotion use current stable releases. ESLint stays on the latest v9 release because the plugins in `eslint-config-next` do not support v10 yet.

Type checking uses TypeScript 7. The `typescript` package name points to the official TypeScript 6 compatibility package for tools that still require the compiler API, while `@typescript/native` supplies the TypeScript 7 `tsc` command. This follows [Microsoft's compatibility setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6-0).
