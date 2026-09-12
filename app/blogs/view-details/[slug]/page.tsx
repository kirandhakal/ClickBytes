import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaOrg } from "@/components/schema-org";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllBlogPosts, getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/fetchers/blog";
import { createMetadata } from "@/lib/metadata";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return createMetadata({ title: "Article not found", noIndex: true });
  return createMetadata({ title: post.title, description: post.excerpt, path: `/blogs/view-details/${post.slug}` });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const path = `/blogs/view-details/${post.slug}`;
  const related = getRelatedBlogPosts(post.slug);

  return (
    <>
      <SchemaOrg data={[blogPostingSchema({ path, title: post.title, description: post.excerpt, publishedAt: post.publishedAt, author: post.author }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blogs" }, { name: post.title, path }])]} />
      <article className="container py-12 sm:py-16">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blogs" }, { label: post.title }]} />
        <header className="mx-auto mt-10 max-w-3xl text-center">
          <Badge variant="secondary">{post.category}</Badge>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground"><span>{post.author}</span><span aria-hidden="true">·</span><time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(post.publishedAt))}</time><span aria-hidden="true">·</span><span className="inline-flex items-center gap-1"><Clock className="size-4" />{post.readingTime}</span></div>
        </header>
        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-base leading-8 text-muted-foreground">{post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="mx-auto mt-12 max-w-2xl border-t pt-6"><Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold"><ArrowLeft className="size-4" />All articles</Link></div>
      </article>
      <section className="border-t bg-muted/35 py-12"><div className="container"><h2 className="mb-6 text-2xl font-bold">Continue reading</h2><div className="grid gap-4 sm:grid-cols-2">{related.map((item) => <Card key={item.slug}><CardHeader><Badge variant="outline" className="mb-2">{item.category}</Badge><CardTitle><Link href={`/blogs/view-details/${item.slug}`} className="hover:text-primary">{item.title}</Link></CardTitle></CardHeader><CardContent><Link href={`/blogs/view-details/${item.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Read article<ArrowRight className="size-4" /></Link></CardContent></Card>)}</div></div></section>
    </>
  );
}
