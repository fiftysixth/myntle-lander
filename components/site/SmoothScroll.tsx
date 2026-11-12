"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis drives the page's wheel scrolling. It respects the reader's reduced
 * motion setting, and internal anchor links are routed through `scrollTo`
 * so they share the same easing and the sticky-header offset.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      autoRaf: true,
      stopInertiaOnNavigate: true,
    });

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("data-lenis-skip")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const section = document.getElementById(
        decodeURIComponent(url.hash.slice(1)),
      );
      if (!section) return;

      event.preventDefault();
      event.stopPropagation();
      const top =
        section.getBoundingClientRect().top + window.scrollY - 72;
      lenis.scrollTo(top, { duration: 1.1 });
      window.history.pushState(null, "", url.hash);
    };

    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      lenis.destroy();
    };
  }, []);

  return null;
}
