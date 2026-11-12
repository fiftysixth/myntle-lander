/**
 * The page surface colour in each theme.
 *
 * The first visit follows the operating system's colour preference. A reader
 * who uses the toggle stores an explicit choice, and that choice wins.
 */
export const THEME_COLORS = {
  light: "oklch(0.985 0.001 286.376)",
  dark: "oklch(0.209 0.004 264.477)",
} as const;

export function syncThemeColor(dark: boolean): void {
  if (typeof document === "undefined") return;
  const color = dark ? THEME_COLORS.dark : THEME_COLORS.light;
  for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
    meta.setAttribute("content", color);
  }
}
