"use client";

import { useEffect, useRef } from "react";

/**
 * A soft scrim over the frame that clears around the trade card. The card is
 * measured instead of guessed because the conversation reflows between
 * breakpoints and when the details drawer opens.
 */
export function FocusVignette() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = ref.current;
    const frame = overlay?.parentElement;
    const target = frame?.querySelector<HTMLElement>("[data-focus-target]");
    if (!overlay || !frame || !target) return;

    const update = () => {
      const frameRect = frame.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      if (!frameRect.width || !frameRect.height) return;

      // The transparent middle of the ellipse sits 44px outside the card.
      const pad = 44;
      const centreX = targetRect.left + targetRect.width / 2 - frameRect.left;
      const centreY = targetRect.top + targetRect.height / 2 - frameRect.top;
      const radiusX = targetRect.width / 2 + pad;
      const radiusY = targetRect.height / 2 + pad;

      overlay.style.setProperty("--focus-x", `${(centreX / frameRect.width) * 100}%`);
      overlay.style.setProperty("--focus-y", `${(centreY / frameRect.height) * 100}%`);
      overlay.style.setProperty("--focus-rx", `${(radiusX / frameRect.width) * 100 / 0.58}%`);
      overlay.style.setProperty("--focus-ry", `${(radiusY / frameRect.height) * 100 / 0.58}%`);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(frame);
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="focus-vignette pointer-events-none absolute inset-0 z-20"
    />
  );
}
