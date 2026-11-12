/**
 * The app lives in its own deployment. Set NEXT_PUBLIC_APP_URL to that
 * origin before publishing; the fallback points at the production app.
 */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://app.myntle.xyz";

const vercelOrigin = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  (vercelOrigin ? `https://${vercelOrigin}` : undefined);

/**
 * The GitHub origin is the project repository. The X handle is a placeholder
 * until the project account is confirmed; set NEXT_PUBLIC_X_URL to override it.
 */
export const SOCIAL_LINKS = {
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL?.trim() ||
    "https://github.com/myntlefinance/myntle",
  x:
    process.env.NEXT_PUBLIC_X_URL?.trim() ||
    "https://x.com/myntlefinance",
} as const;

export const DOCS_URL =
  "https://github.com/myntlefinance/myntle#readme";
export const VERIFICATION_URL =
  "https://github.com/myntlefinance/myntle#verification";
export const ISSUES_URL =
  "https://github.com/myntlefinance/myntle/issues";
export const NEAR_INTENTS_URL = "https://docs.near-intents.org";
export const NEAR_AI_URL = "https://near.ai";
