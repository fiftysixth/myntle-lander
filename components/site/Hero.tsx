import { IconArrowUpRight } from "@tabler/icons-react";
import { ButtonLink } from "@/components/atoms/Button";
import { AppWindow } from "@/components/preview/AppWindow";
import { Reveal } from "@/components/site/Reveal";
import { APP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-6 pb-16 pt-12 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
      <div className="max-w-[800px]">
        <Reveal>
          <h1 className="text-[clamp(2rem,4.4vw,2.875rem)] font-normal leading-[1.12] tracking-[-0.03em]">
            <span className="block text-ink-3 md:whitespace-nowrap">
              Ask what is happening,
            </span>{" "}
            <span className="block text-ink md:whitespace-nowrap">
              then ask for the trade.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={90}>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.65] text-ink-2 lg:max-w-[540px]">
            Myntle is a chat-first finance app that combines research, news, and
            analysis in one conversation, then turns what you decide into a
            trade you approve.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex flex-row items-center gap-4 sm:gap-6">
            <ButtonLink href={APP_URL} variant="primary" size="md">
              Open app
              <IconArrowUpRight size={15} stroke={2} aria-hidden />
            </ButtonLink>
            <a
              href="#how-it-works"
              className="text-[13px] font-medium text-ink-2 transition-colors duration-150 hover:text-ink"
            >
              How it works
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-12 lg:mt-14" delay={120}>
        <figure>
          <AppWindow />
          <figcaption className="mt-3 text-[11.5px] leading-relaxed text-ink-2">
            A sample conversation with illustrative sources and amounts.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
