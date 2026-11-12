# Plan

## The idea

The landing page is the same room the application lives in: cool paper, white cards floating on rings, and a single signal blue that marks the one live thing in a region. The product is shown as working interface, not as a screenshot.

## Page

1. **Hero** — a complete-sentence headline in the Ash/Graphite display pattern, one primary pill, and an interactive preview of the conversation. The reader watches the assistant search news, Reddit, X, and the articles behind them, reads an answer with named sources, and then approves or rejects the trade the answer leads to. The status moves through Pending approval → Submitting → Executed, or Pending approval → Rejected.
2. **Source map** — the mark at the center, with news, X, Reddit, social, AI research, and your wallet bent into it on rounded hairline paths. Staggered signal dashes travel inward and end at the mark; the heading states what the diagram shows, so it is not an unlabeled illustration.
3. **How it works** — three beats: the sentence, the bound approval, and the settlement record. Each beat carries a small UI fragment built from the same primitives rather than a paragraph of feature bullets.
4. **The assistant proposes, and you decide** — the tools behind the swap, with five read-only tools and one that asks for approval, plus the server-side validation story.
5. **The record decides the outcome** — a segmented control switching the settlement record between Executed, Refunded, and Failed. This is the product's strongest claim: the record can disagree with the assistant, and the screen has to say so.
6. **Get started even without a wallet** — passkey first, then EVM, Solana, and NEAR wallets.
7. **Roadmap** — the title and a one-line subtitle, then a green Current pill above the quarter it names. On phones the quarters stack vertically behind hairline rules; from the tablet breakpoint up they sit in four columns, with dashed guides keeping them apart. Q4 2026 is tinted and carries the live features; the following quarters carry short feature lists, with Q3 simply reading "Plans underway."
8. **Questions** — six prose answers about keys, signatures, failed trades, and what the assistant can see.
9. **Closing** — one sentence-shaped prompt bar and one action.

## Rules held

- Every headline, sentence, and label reads as prose a person could say out loud. No staccato and no slogan triplets.
- Copy is a single thought per block. If a sentence can be removed without losing meaning, it is removed.
- No eyebrow labels, decorative badges, or chips that repeat the line beside them.
- A pill for anything the reader clicks; a rounded rectangle for anything that holds content. Radii stay on the 6/8/10/14 ladder.
- One signal blue per region. Green, orange, and red appear only for the state of money.
- Numbers are tabular and louder than their labels.
- Every surface has a one-pixel hairline ring and a layered shadow.
- Motion comes from the app's own entrance: a 23px rise, 17px blur, and 800ms on the strong link ease, applied on scroll through IntersectionObserver. Lenis drives wheel scrolling and same-page anchors. Reduced motion keeps the page still.

## Deliberately absent

No testimonials, user counts, benchmarks, pricing, or deployment claims. The build cannot back them yet, so the page does not make them. No stock artwork, gradient headlines, glass panels, decorative orbs, or page-wide textures: the content and the cards carry the page.
