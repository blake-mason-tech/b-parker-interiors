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

## Images and fonts

Source photos and logos live in `assets/images/` and are imported into page components. Use the `next-image-export-optimizer` Image component and a `sizes` value matching the image's displayed width when adding an image.

`npm run build` generates responsive WebP images and blur placeholders, then packages them in `out/nextImageExportOptimizer/`. Browsers select the appropriate width for their viewport and pixel density. Imported originals remain available as fallbacks; the source asset directory is not copied into `out/`. Generated image caches in `public/` are ignored by Git, so subsequent builds can reuse them.

Cinzel and Outfit are downloaded by `next/font` during the build and served locally in the exported site. A fresh build needs network access to Google Fonts; visitors do not.

## Tooling compatibility

Next.js, React, Material UI, and Emotion use current stable releases. ESLint stays on the latest v9 release because the plugins in `eslint-config-next` do not support v10 yet.

Type checking uses TypeScript 7. The `typescript` package name points to the official TypeScript 6 compatibility package for tools that still require the compiler API, while `@typescript/native` supplies the TypeScript 7 `tsc` command. This follows [Microsoft's compatibility setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6-0).
