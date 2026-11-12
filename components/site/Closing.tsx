import {
  IconArrowUp,
  IconArrowUpRight,
  IconArrowsExchange,
  IconNews,
  IconMicrophone,
  IconPlus,
  IconWallet,
} from "@tabler/icons-react";
import { ButtonLink } from "@/components/atoms/Button";
import { Reveal } from "@/components/site/Reveal";
import { APP_URL } from "@/lib/site";

const SUGGESTIONS = [
  { icon: IconNews, label: "What's happening with NEAR?" },
  { icon: IconArrowsExchange, label: "Swap 0.1 BTC to USDT" },
  { icon: IconWallet, label: "What do I hold?" },
];

export function Closing() {
  return (
    <section className="border-t border-line" aria-labelledby="closing-title">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16 lg:px-8 lg:py-28">
        <div className="text-center lg:text-left">
          <Reveal>
            <h2
              id="closing-title"
              className="mx-auto max-w-[14ch] text-[clamp(2rem,3.6vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink lg:mx-0"
            >
              The next question you ask can end in a trade.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-[42ch] text-[15px] leading-[1.65] text-ink-2 lg:mx-0">
              Ask what is happening, then decide what to do about it.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <ButtonLink
              href={APP_URL}
              variant="accent"
              size="md"
              className="mt-8"
            >
              Open app
              <IconArrowUpRight size={15} stroke={2} aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={120} className="mx-auto w-full max-w-[520px]">
          <div className="dark w-full overflow-hidden rounded-window border border-line bg-page p-4 text-ink shadow-overlay">
            <div className="flex h-8 items-center justify-between">
              <span className="text-[12.5px] font-semibold text-ink">
                New chat
              </span>
              <span className="grid size-7 place-items-center rounded-[7px] text-ink-2">
                <IconPlus size={15} stroke={1.8} aria-hidden />
              </span>
            </div>

            <div className="mt-6 rounded-[22px] border border-line bg-surface p-3.5 shadow-card">
              <p className="min-h-[64px] text-[15px] leading-5 text-ink">
                Swap 0.1 BTC to USDT
              </p>
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

            <div className="mt-4 flex flex-col gap-1">
              {SUGGESTIONS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-control px-2 py-2 text-[13px] text-ink-2"
                >
                  <Icon size={15} stroke={1.8} className="shrink-0" aria-hidden />
                  <span className="truncate">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
