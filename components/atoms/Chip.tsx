/** Monospace token chip — for code values like a contract or an address. */
export function Chip({
  children,
  tone = "neutral",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "orange";
  className?: string;
}) {
  const tones = {
    neutral: "bg-inset text-ink-2",
    accent: "bg-accent-tint text-accent-ink",
    orange: "bg-orange-tint text-orange",
  };
  return (
    <code
      className={`inline rounded-chip px-1.5 py-0.5 align-[-1px] font-mono text-[12px] leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </code>
  );
}
