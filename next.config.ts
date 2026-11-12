import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* OpenNext cannot yet run Cache Components staged renders on workerd, and
   * this page uses no `use cache`, so the default caching model is enough. */
  /* The landing page is judged above the fold; the dev badge has no place in
   * a screenshot of the composition. */
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
