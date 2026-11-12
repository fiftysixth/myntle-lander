# The Myntle landing page

The public landing page for Myntle, a chat-first finance app for the wallet you already have. The page shows the product as composed, working interface rather than as a screenshot: the hero conversation runs from research to an approval, and the settlement record switches between the outcomes the app can report.

## Run it

You need Bun 1.4.3 and Node 22 or newer.

```bash
bun install
cp .env.example .env.local
bun run dev
```

The dev server is at `http://localhost:3000`.

```bash
bun run typecheck
bun run lint
bun run build
```

## Configuration

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_APP_URL` | The deployed Myntle app. Every "Open app" action points here. Until it is set, the actions point at the "How it works" section so the page stays usable. |
| `NEXT_PUBLIC_SITE_URL` | The canonical landing-page origin, used for metadata. Vercel's production origin is used when this is absent; set it for any other host. |
| `NEXT_PUBLIC_GITHUB_URL` | The project repository used by the footer and documentation links. Defaults to `github.com/myntlefinance/myntle`. |
| `NEXT_PUBLIC_X_URL` | The project's X account. The default is a placeholder; set this before publishing. |

## Source of truth

The product and design system live in the Myntle application repository:

- `/Volumes/SSD/Cool Projects/myntle/DESIGN.md` — the Ledger Room design system, tokens, type, radii, and rules.
- `/Volumes/SSD/Cool Projects/myntle/AGENTS.md` — product architecture, copy rules, and build conventions.
- `/Volumes/SSD/Cool Projects/myntle/PRODUCT.md` — users, positioning, claims, and constraints.

The landing page copies the foundation from that repository: the token set in `app/globals.css`, the atoms in `components/atoms/`, and the visual language of the finance screens. It keeps the same constraints: complete sentences, no decorative eyebrow labels, one signal blue per region, semantic colour only for the state of money, and pills for actions.

## Structure

```
app/
  layout.tsx           fonts, metadata, pre-paint theme, page frame
  page.tsx             the landing composition
  blog/page.tsx        the writing index
  terms/page.tsx       terms draft
  privacy/page.tsx     privacy draft
  globals.css          the design foundation and its dark counterpart
  opengraph-image.tsx  the social card
components/
  atoms/               BeautifulUI-derived controls: buttons, pills, rows, segmented control
  preview/             the real app frame, research trace, sentence card, composer, sidebar, login dialog
  finance/             token and network marks
  site/                page sections, header, sectioned footer, Lenis, and the blur reveal
lib/
  site.ts              app, canonical, documentation, and social URLs
  theme.ts             theme colours and the theme-color sync
  utils.ts             the class name helper
```

The logos, token marks, and network marks are the same files the application uses. The demo conversation and its amounts are illustrative and labelled as such.
