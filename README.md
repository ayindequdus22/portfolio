# Opeyemi Ayinde — Portfolio

A redesigned React portfolio with a companion Sanity Studio. The public site is intentionally resilient: it renders the current portfolio content while Sanity is unconfigured, then automatically uses published CMS content when credentials are available.

## Run the portfolio

```bash
npm install
cp .env.example .env
npm run dev
```

## Connect Sanity

1. Create a Sanity project and a public dataset from [sanity.io/manage](https://www.sanity.io/manage).
2. Add the project values to the root `.env` file:

   ```env
   VITE_SANITY_PROJECT_ID=your-project-id
   VITE_SANITY_DATASET=production
   ```

3. Add the same values to `studio/.env` using the names in [`studio/.env.example`](studio/.env.example).
4. Start the editor:

   ```bash
   npm run cms:dev
   ```

5. In the Studio, publish one **Site settings** document, then add **Project** and **Experience** documents. The field names and presentation order are defined in [`studio/schemaTypes`](studio/schemaTypes).
6. Add `http://localhost:5173` and the deployed portfolio URL to the project’s CORS origins in Sanity Manage. The website reads only published content via the CDN, so no Sanity API token belongs in `.env`.

The content query is in [`src/lib/queries.ts`](src/lib/queries.ts), and the safe client configuration lives in [`src/lib/sanity.ts`](src/lib/sanity.ts). The local fallback data is in [`src/content/fallback.ts`](src/content/fallback.ts).

## Studio commands

```bash
npm run cms:dev    # work on the Studio locally
npm run cms:build  # build it for deployment
```

Deploy the Studio from `studio/` with `npm run deploy` once you have authenticated with Sanity.

## Verification

```bash
npm run lint
npm run build
npm run cms:build
```
