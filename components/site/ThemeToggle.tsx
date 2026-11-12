"use client";

import { syncThemeColor } from "@/lib/theme";

const STORAGE_KEY = "myntle-theme";

/**
 * The toggle reads and writes the <html> class directly, and every visual
 * state below is driven by Tailwind's dark variant. That keeps the first
 * paint identical to the pre-paint script and avoids a hydration pass that
 * would slide the thumb into place after the page had already settled.
 */
export function ThemeToggle() {
  function apply(next: boolean) {
    const root = document.documentElement;
    if (root.classList.contains("dark") === next) return;

    root.classList.add("theme-switching");
    root.classList.toggle("dark", next);
    syncThemeColor(next);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => root.classList.remove("theme-switching")),
    );
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // A blocked storage API does not stop the theme from changing.
    }
  }

  return (
    <div className="relative inline-grid h-8 grid-cols-2 items-center rounded-full bg-field p-0.5">
      <span
        aria-hidden
        className="absolute inset-y-0.5 left-0.5 w-7 rounded-full bg-surface shadow-btn transition-transform duration-200 motion-reduce:transition-none dark:translate-x-7"
        style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
      />
      <button
        type="button"
        aria-label="Light mode"
        onClick={() => apply(false)}
        className="relative z-10 flex size-7 items-center justify-center rounded-full text-ink transition-colors duration-150 dark:text-ink-3 dark:hover:text-ink-2"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Dark mode"
        onClick={() => apply(true)}
        className="relative z-10 flex size-7 items-center justify-center rounded-full text-ink-3 transition-colors duration-150 hover:text-ink-2 dark:text-ink"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </button>
    </div>
  );
}
