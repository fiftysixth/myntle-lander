import {
  IconArrowUp,
  IconMicrophone,
  IconPlus,
} from "@tabler/icons-react";

/**
 * The app's composer: the draft or placeholder, the tools on the bottom row,
 * and the send control on the right. It keeps the tall form from `sm` up and
 * shortens on phones so the thread stays visible.
 */
export function Composer({
  placeholder = "Reply",
  draft,
  compact = false,
}: {
  placeholder?: string;
  draft?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[22px] border border-line bg-surface shadow-card ${
        compact ? "gap-2 p-2.5" : "gap-2.5 p-3.5"
      }`}
    >
      <div
        className={`${
          compact ? "min-h-[44px]" : "min-h-[32px] sm:min-h-[68px]"
        } text-[14px] leading-5 ${
          draft ? "text-ink" : "text-ink-2"
        }`}
      >
        {draft ?? placeholder}
      </div>
      <div className="flex items-center justify-between">
        <span className="grid size-7 place-items-center rounded-control text-ink-2">
          <IconPlus size={16} stroke={1.8} aria-hidden />
        </span>
        <span className="flex items-center gap-1.5">
          <span className="grid size-7 place-items-center rounded-control text-ink-2">
            <IconMicrophone size={15} stroke={1.8} aria-hidden />
          </span>
          <span className="grid size-7 place-items-center rounded-full bg-hover-2 text-ink">
            <IconArrowUp size={15} stroke={2} aria-hidden />
          </span>
        </span>
      </div>
    </div>
  );
}
