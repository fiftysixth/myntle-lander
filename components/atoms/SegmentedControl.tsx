"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Segmented control — content-sized segments with a measured sliding thumb.
 * The track hugs its content so every pill carries the same side padding no
 * matter how long its label is.
 */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  icons,
  className = "",
  label,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
  icons?: Partial<Record<T, ReactNode>>;
  className?: string;
  label: string;
}) {
  const index = options.indexOf(value);
  const trackRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [thumb, setThumb] = useState<{ left: number; width: number } | null>(
    null,
  );

  const syncThumb = useCallback(() => {
    const btn = btnRefs.current[index];
    if (!btn) return;
    const left = btn.offsetLeft;
    const width = btn.offsetWidth;
    setThumb((prev) =>
      prev &&
      Math.abs(prev.left - left) < 0.5 &&
      Math.abs(prev.width - width) < 0.5
        ? prev
        : { left, width },
    );
  }, [index]);

  useIsomorphicLayoutEffect(() => {
    syncThumb();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => syncThumb());
    const track = trackRef.current;
    if (track) ro.observe(track);
    for (const btn of btnRefs.current) {
      if (btn) ro.observe(btn);
    }
    return () => ro.disconnect();
  }, [syncThumb]);

  return (
    <div
      ref={trackRef}
      className={`relative inline-grid h-8 select-none rounded-full bg-inset p-0.5 ${className}`}
      style={{ gridTemplateColumns: `repeat(${options.length}, auto)` }}
      role="tablist"
      aria-label={label}
    >
      <span
        aria-hidden
        className="absolute inset-y-0.5 rounded-full bg-surface shadow-btn transition-[left,width,opacity] duration-200 motion-reduce:transition-none"
        style={{
          left: thumb?.left ?? 2,
          width: thumb?.width ?? 0,
          opacity: thumb ? 1 : 0,
          transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />
      {options.map((opt, i) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            ref={(el) => {
              btnRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt)}
            className={`relative z-10 inline-flex items-center justify-center gap-1.5 rounded-full px-3 text-[13px] font-medium leading-none transition-colors duration-150 ${
              active ? "text-ink" : "text-ink-2 hover:text-ink"
            }`}
          >
            {icons?.[opt] ? (
              <span
                aria-hidden
                className={`inline-flex shrink-0 items-center justify-center transition-opacity duration-150 ${
                  active ? "opacity-100" : "opacity-60"
                }`}
              >
                {icons[opt]}
              </span>
            ) : null}
            {opt}
          </button>
        );
      })}
    </div>
  );
}
