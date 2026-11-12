import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({
  compact = false,
  wordmarkClassName,
}: {
  compact?: boolean;
  wordmarkClassName?: string;
}) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 rounded-control"
      aria-label="Myntle home"
    >
      <Image
        src="/myntle-logo.svg"
        alt=""
        width={compact ? 24 : 28}
        height={compact ? 24 : 28}
        priority
        className="shrink-0"
      />
      <span
        className={cn(
          "text-[15px] font-semibold tracking-[-0.02em] text-ink",
          wordmarkClassName,
        )}
      >
        Myntle
      </span>
    </Link>
  );
}
