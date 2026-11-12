import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Reveal } from "@/components/site/Reveal";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export function LegalPage({
  title,
  intro,
  updated,
  back,
  banner,
  sections,
  footer,
}: {
  title: string;
  intro: string;
  updated?: string;
  back?: { href: string; label: string };
  banner?: { src: string; alt: string };
  sections: LegalSection[];
  footer?: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-[1120px] px-6 py-20 lg:px-8 lg:py-24">
      {back ? (
        <Link
          href={back.href}
          className="mb-6 inline-flex items-center gap-1.5 text-[12.5px] text-ink-2 transition-colors duration-150 hover:text-ink"
        >
          <IconArrowLeft size={13} stroke={2} aria-hidden />
          {back.label}
        </Link>
      ) : null}

      <Reveal>
        {banner ? (
          <div className="mb-10 w-full overflow-hidden rounded-window bg-canvas shadow-card lg:max-w-[calc(100%_-_244px)]">
            <Image
              src={banner.src}
              alt={banner.alt}
              width={1080}
              height={461}
              preload
              sizes="(min-width: 1184px) 812px, (min-width: 1024px) calc(100vw - 308px), calc(100vw - 48px)"
              className="h-auto w-full"
            />
          </div>
        ) : null}

        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_180px] lg:gap-16">
          <div>
            <header>
              <h1 className="text-[clamp(1.75rem,3vw,2rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-ink">
                {title}
              </h1>
              <p className="mt-4 text-[14px] leading-[1.7] text-ink-2">
                {intro}
              </p>
              {updated ? (
                <p className="mt-3 text-[12px] text-ink-2">{updated}</p>
              ) : null}
            </header>

            <div className="mt-12 flex flex-col gap-10">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <h2 className="text-[15px] font-semibold text-ink">
                    {section.title}
                  </h2>
                  <div className="mt-3 flex flex-col gap-4 text-[14px] leading-[1.75] text-ink-2">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {footer}
          </div>

          <nav
            aria-label="On this page"
            className="hidden self-start lg:sticky lg:top-24 lg:block"
          >
            <p className="text-[12.5px] font-semibold text-ink">On this page</p>
            <ul className="mt-3 flex flex-col gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[12.5px] leading-snug text-ink-2 transition-colors duration-150 hover:text-ink"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Reveal>
    </article>
  );
}
