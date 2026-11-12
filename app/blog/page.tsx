import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconNews } from "@tabler/icons-react";
import { BlogCta } from "@/components/blog/BlogCta";
import { Reveal } from "@/components/site/Reveal";
import { SitePageShell } from "@/components/site/SitePageShell";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from building Myntle, the decisions behind it, and what the settlement record can prove.",
};

export default function BlogPage() {
  return (
    <SitePageShell>
      <article className="mx-auto w-full max-w-[1120px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="w-full">
          <Reveal>
            <header className="max-w-[720px]">
              <h1 className="flex items-center gap-2.5 text-[clamp(1.75rem,3vw,2rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-ink">
                <span className="grid size-8 place-items-center rounded-card bg-surface text-ink-2 shadow-card">
                  <IconNews size={16} stroke={1.8} aria-hidden />
                </span>
                Blog
              </h1>
              <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.7] text-ink-2">
                Notes from building Myntle, the decisions behind it, and what
                the settlement record can prove.
              </p>
            </header>
          </Reveal>

          <div className="mt-12 max-w-[64ch] border-t border-line">
            {BLOG_POSTS.map((post, index) => (
              <Reveal key={post.slug} delay={index * 70}>
                <article className="border-b border-line py-7">
                  <div className="flex flex-wrap items-center gap-2 text-[11.5px] text-ink-2">
                    <time dateTime={post.dateISO}>{post.date}</time>
                    <span aria-hidden>·</span>
                    <span>{post.topic}</span>
                    <span aria-hidden>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="mt-2.5 text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors duration-150 hover:text-accent-ink"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-2 max-w-[60ch] text-[13.5px] leading-[1.7] text-ink-2">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent-ink transition-colors duration-150 hover:text-ink"
                  >
                    Read post
                    <IconArrowRight size={13} stroke={2} aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <BlogCta />
        </div>
      </article>
    </SitePageShell>
  );
}
