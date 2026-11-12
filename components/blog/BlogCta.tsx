import { IconArrowUpRight } from "@tabler/icons-react";
import { ButtonLink } from "@/components/atoms/Button";
import { APP_URL } from "@/lib/site";

/** The close of a post: the reading ends, the app starts. */
export function BlogCta() {
  return (
    <div className="mt-12 flex max-w-[64ch] flex-col gap-4 rounded-card bg-surface p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
      <p className="text-[14px] leading-[1.65] text-ink">
        Ask what is happening, then ask for the trade.
      </p>
      <ButtonLink
        href={APP_URL}
        variant="accent"
        size="md"
        className="shrink-0 self-start sm:self-auto"
      >
        Open app
        <IconArrowUpRight size={15} stroke={2} aria-hidden />
      </ButtonLink>
    </div>
  );
}
