import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCta } from "@/components/blog/BlogCta";
import { LegalPage } from "@/components/site/LegalPage";
import { SitePageShell } from "@/components/site/SitePageShell";
import { BLOG_POSTS, getPostMeta } from "@/lib/blog";
import { POSTS } from "../posts";

/* An article is entirely a function of its slug. This route is allowed to
 * block until the parameter resolves instead of streaming an empty shell. */
export const instant = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostMeta(slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateISO,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostMeta(slug);
  const sections = POSTS[slug];

  if (!post || !sections) {
    notFound();
  }

  return (
    <SitePageShell>
      <LegalPage
        title={post.title}
        intro={post.excerpt}
        updated={`${post.topic} · ${post.date} · ${post.readTime}`}
        back={{ href: "/blog", label: "All posts" }}
        sections={sections}
        footer={<BlogCta />}
      />
    </SitePageShell>
  );
}
