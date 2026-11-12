import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { Brand } from "@/components/site/Brand";
import { Reveal } from "@/components/site/Reveal";
import {
  APP_URL,
  DOCS_URL,
  NEAR_AI_URL,
  NEAR_INTENTS_URL,
  SOCIAL_LINKS,
} from "@/lib/site";

const GROUPS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Roadmap", href: "/#roadmap" },
      { label: "FAQ", href: "/#faq" },
      { label: "App", href: APP_URL, external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: DOCS_URL, external: true },
      { label: "NEAR Intents", href: NEAR_INTENTS_URL, external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
] as const;

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "text-[13px] leading-none text-ink-2 transition-colors duration-150 hover:text-ink";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Reveal>
      <div className="mx-auto w-full max-w-[1120px] px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))]">
          <div className="col-span-2 max-w-[340px] lg:col-span-1">
            <Brand />
            <p className="mt-3 text-[13px] leading-relaxed text-ink-2">
              Myntle is a chat-first finance app built on NEAR Intents and NEAR
              AI.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Myntle on GitHub"
                className="grid size-8 place-items-center rounded-full bg-surface text-ink-2 shadow-btn transition-[background-color,color] duration-150 hover:bg-inset hover:text-ink"
              >
                <IconBrandGithub size={15} stroke={1.8} aria-hidden />
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noreferrer"
                aria-label="Myntle on X"
                className="grid size-8 place-items-center rounded-full bg-surface text-ink-2 shadow-btn transition-[background-color,color] duration-150 hover:bg-inset hover:text-ink"
              >
                <IconBrandX size={15} stroke={1.8} aria-hidden />
              </a>
            </div>
          </div>

          {GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="text-[12.5px] font-semibold text-ink">
                {group.title}
              </h2>
              <ul className="mt-3.5 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      href={link.href}
                      label={link.label}
                      external={"external" in link && link.external}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-3 border-t border-line pt-6 text-center text-[12px] text-ink-2 sm:grid-cols-3">
          <span className="sm:text-left">© 2026 Myntle</span>
          <span className="inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 sm:justify-self-center">
            <span>Built on</span>
            <a
              href={NEAR_INTENTS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-2 transition-colors duration-150 hover:text-ink"
            >
              <Image src="/tokens/near.svg" alt="" width={13} height={13} />
              NEAR Intents
            </a>
            <span>and</span>
            <a
              href={NEAR_AI_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-2 transition-colors duration-150 hover:text-ink"
            >
              <Image src="/tokens/near-ai.svg" alt="" width={13} height={13} />
              NEAR AI
            </a>
          </span>
          <a
            href="#main"
            className="transition-colors duration-150 hover:text-ink sm:justify-self-end sm:text-right"
          >
            Back to top
          </a>
        </div>
      </div>
      </Reveal>
    </footer>
  );
}
