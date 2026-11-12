export function DetailRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <span className="py-1 text-xs text-ink-2">{label}</span>
      <span className="flex min-w-0 items-center justify-end gap-1.5 py-1 text-right text-xs tabular-nums text-ink">
        {children}
      </span>
    </>
  );
}
