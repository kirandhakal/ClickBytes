# Portfolio content

Route files in `app/` handle metadata, route parameters, and feature composition. The rendered page UI lives in `features/`.

## Editing a page

- Edit `data/<page>/data.json` for its title, introduction, sections, and links.
- Edit `features/<Feature>/<page>-page.tsx` for page-specific presentation.
- The shared page title and section layout lives in `features/shared/content-page.tsx`.
- Navigation, footer, and shared labels live in `data/site/data.json`.
- Homepage copy and its directory links live in `data/home/data.json`.

## Articles and case studies

Each detail page has its own `data.json` inside `data/blogs/<slug>/` or `data/case-studies/<slug>/`.
To add a record, create that file and import it into the corresponding `lib/fetchers/` module. Lists, static detail routes, metadata, and sitemap entries are derived from those records.

Article references provide context, not copied content. Development contributions come from the supplied CV. Current case studies are explicitly proposed QA exercises, not executed audits or measured results. Replace that status only when actual test evidence is available.

## QA tool

`features/Tools/test-case-builder.tsx` owns local form state, preview, clipboard, and Markdown export. Its labels, example, and messages come from `data/tools/data.json`. Inputs are not sent to a server or persisted; refreshing clears the current draft.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the public origin before building. This determines canonical URLs, structured data, and sitemap URLs. Run `npm run lint` and `npm run build` after changing content or routes.
