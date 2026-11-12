# AGENTS.md

This repository is the public landing page for Myntle. The application lives in the sibling repository at `/Volumes/SSD/Cool Projects/myntle`.

## Read these first

- `../myntle/DESIGN.md` — the design system. The tokens, type scale, radii, shadows, component rules, and copy rules are the source of truth.
- `../myntle/AGENTS.md` — the architecture, build conventions, and the two mandatory editorial rules.
- `../myntle/PRODUCT.md` — users, positioning, verified claims, and the constraints on what the page may say.

`PLAN.md` in this repository records the page structure and the reasoning behind it.

## What this page is

A single-page Next.js landing page. It shows the app as composed interface rather than as screenshots: the hero conversation is interactive, and the settlement record switches between the outcomes the product can report. Keep the demo honest: its amounts are illustrative and the caption says so.

## Hard rules

- Every headline, sentence, and label is prose a person could say out loud. No staccato fragments and no slogan triplets.
- Copy is one thought per block. The page is visual first; if a sentence can be removed without losing meaning, remove it.
- Remove anything that carries no functional or informational value: eyebrow labels, decorative badges, chips that repeat the line beside them, or icons that name nothing.
- A button reads as at most two words. Do not shrink the text to fit a button; change the label or the button.
- One signal blue per region, used only to mark the one live thing. Green, orange, and red belong to the state of money and nothing else.
- A clickable thing is a pill; a container is a rounded rectangle. Radii stay on the 6/8/10/14 ladder.
- Every surface carries a one-pixel hairline ring plus a layered shadow. No glass, no gradient headlines, no decorative orbs, no stock artwork.
- No claim the build cannot back. No testimonials, user counts, benchmarks, pricing, or deployment claims.

## Code conventions

- Next.js App Router, React 19, TypeScript, Tailwind CSS 4.
- The design foundation is in `app/globals.css`. The tokens match the application; do not invent a parallel palette.
- The atoms in `components/atoms/` are adapted from BeautifulUI. Reuse them before writing a new control.
- The page sections are in `components/site/`. The interactive demo is in `components/demo/`.
- `bun run typecheck`, `bun run lint`, and `bun run build` must all pass.
- `NEXT_PUBLIC_APP_URL` is the deployed app. The fallback keeps the action usable while the URL is unknown.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
