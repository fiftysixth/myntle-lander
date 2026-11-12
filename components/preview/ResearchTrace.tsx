import {
  IconArticle,
  IconBrandReddit,
  IconBrandX,
  IconNews,
} from "@tabler/icons-react";

const ROWS = [
  {
    icon: <IconNews size={13} stroke={1.8} aria-hidden />,
    label: "Searched Google News",
    chip: "4 stories",
  },
  {
    icon: <IconBrandReddit size={13} stroke={1.8} aria-hidden />,
    label: "Searched Reddit",
    chip: "6 posts",
  },
  {
    icon: <IconBrandX size={13} stroke={1.8} aria-hidden />,
    label: "Searched X",
    chip: "5 posts",
  },
  {
    icon: <IconArticle size={13} stroke={1.8} aria-hidden />,
    label: "Read articles",
    chip: "2 pages",
  },
];

/**
 * The research run behind the hero answer. It is the same compact trace the
 * application prints while a turn is working: one line per source, with the
 * count beside the source name and no query text.
 */
export function ResearchTrace() {
  return (
    <ul aria-label="Research steps" className="mt-3 flex flex-col gap-0.5">
      {ROWS.map((row) => (
        <li key={row.label} className="flex h-6 items-center gap-1.5 sm:gap-2">
          <span className="flex size-4 shrink-0 items-center justify-center text-ink-3">
            {row.icon}
          </span>
          <span className="truncate text-[12px] font-medium text-ink sm:text-[12.5px]">
            {row.label}
          </span>
          <span className="inline-flex h-5 shrink-0 items-center rounded-chip bg-field px-1 text-[11px] text-ink-2 shadow-hairline sm:px-1.5">
            {row.chip}
          </span>
        </li>
      ))}
    </ul>
  );
}
