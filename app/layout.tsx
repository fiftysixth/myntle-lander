import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { THEME_COLORS } from "@/lib/theme";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

/* The stored theme has to be on <html> before the first paint. An effect is
 * always one paint too late, and on a slow connection that one paint is a
 * white flash. With no stored choice the page follows the operating system;
 * once a reader uses the toggle, that choice wins. */
const themeScript = `(function(){try{var t=localStorage.getItem("myntle-theme");var dark=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",dark);var color=dark?"${THEME_COLORS.dark}":"${THEME_COLORS.light}";var metas=document.querySelectorAll('meta[name="theme-color"]');for(var i=0;i<metas.length;i++)metas[i].setAttribute("content",color);}catch(e){}})();`;

/* The font variables live on <html>, not <body>. Tailwind's preflight puts
 * font-family on the html element and reads --default-font-family from there,
 * and a custom property set on <body> cannot be read by its own parent. */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
});

const description =
  "Myntle is a chat-first finance app that combines research, news, and analysis in one conversation, then turns what you decide into a trade you approve. It never holds your keys or funds, and the settlement record decides the outcome.";

export const metadata: Metadata = {
  /* Vercel supplies its production origin, and an explicit
   * NEXT_PUBLIC_SITE_URL wins over it. The local fallback keeps a plain
   * `next build` quiet; set the variable before a non-Vercel deploy. */
  metadataBase: new URL(SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Myntle — Ask what is happening, then ask for the trade",
    template: "%s — Myntle",
  },
  description,
  applicationName: "Myntle",
  ...(SITE_URL ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    siteName: "Myntle",
    title: "Myntle",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myntle",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: THEME_COLORS.dark },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          data-lenis-skip
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
        >
          Skip to content
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
