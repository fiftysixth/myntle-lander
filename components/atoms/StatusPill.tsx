import { cn } from "@/lib/utils";

type Tone = "green" | "orange" | "red" | "accent" | "neutral";

const TONES: Record<
  Tone,
  { cls: string; dot: string; ring: string }
> = {
  green: {
    cls: "bg-green-tint text-ink",
    dot: "bg-green",
    ring: "0 0 0 1px color-mix(in oklch, var(--green) 28%, transparent)",
  },
  orange: {
    cls: "bg-orange-tint text-ink",
    dot: "bg-orange",
    ring: "0 0 0 1px color-mix(in oklch, var(--orange) 28%, transparent)",
  },
  red: {
    cls: "bg-red-tint text-ink",
    dot: "bg-red",
    ring: "0 0 0 1px color-mix(in oklch, var(--red) 28%, transparent)",
  },
  accent: {
    cls: "bg-accent-tint text-ink",
    dot: "bg-accent",
    ring: "0 0 0 1px color-mix(in oklch, var(--accent) 28%, transparent)",
  },
  neutral: {
    cls: "bg-field text-ink-2",
    dot: "bg-ink-3",
    ring: "var(--shadow-hairline)",
  },
};

/**
 * Status badge — the tone's wash carries the state, a 6px dot names the
 * tone, and the text stays in Graphite so the label is legible at 13px.
 */
export function StatusPill({
  tone = "neutral",
  children,
  className,
}: {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  const t = TONES[tone];
  return (
    <span
      className={cn(
        "inline-flex h-6 shrink-0 items-center gap-1.5 rounded-full px-2.5 text-[13px] font-medium leading-none",
        t.cls,
        className,
      )}
      style={{ boxShadow: t.ring }}
    >
      <span aria-hidden className={cn("size-1.5 rounded-full", t.dot)} />
      {children}
    </span>
  );
}
