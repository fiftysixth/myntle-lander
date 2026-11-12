export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  readTime: string;
  topic: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "why-the-assistant-never-signs",
    title: "Why the assistant never signs",
    excerpt:
      "The assistant can read a balance, price a trade, and propose one. The design keeps the signature outside its reach.",
    date: "12 November 2026",
    dateISO: "2026-11-12",
    readTime: "6 min read",
    topic: "The assistant",
  },
  {
    slug: "the-settlement-record-decides",
    title: "The settlement record decides the outcome",
    excerpt:
      "A signature is a request. A successful HTTP response is a request. Neither is proof that money moved.",
    date: "10 November 2026",
    dateISO: "2026-11-10",
    readTime: "7 min read",
    topic: "Settlement",
  },
  {
    slug: "any-wallet-is-enough",
    title: "Any wallet is enough",
    excerpt:
      "An EVM, Solana, or NEAR wallet can sign the same intent. No new account, gas, or faucet is required.",
    date: "8 November 2026",
    dateISO: "2026-11-08",
    readTime: "5 min read",
    topic: "Wallets",
  },
];

export function getPostMeta(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
