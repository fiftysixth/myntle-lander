import { ButtonLink } from "@/components/atoms/Button";
import { Brand } from "@/components/site/Brand";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { APP_URL } from "@/lib/site";

const LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between gap-6 px-6 lg:px-8">
        <Brand />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-[13px] font-medium text-ink-2 md:flex"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-control py-2 transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <ButtonLink
            href={APP_URL}
            variant="primary"
            size="sm"
            className="h-8 px-3.5"
          >
            Open app
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
