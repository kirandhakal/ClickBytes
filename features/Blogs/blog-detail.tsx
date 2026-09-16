import Link from "next/link";
import data from "@/data/blogs/data.json";
import type { BlogPost } from "@/types/blog";
import { ContentSections, PageHeading } from "@/features/shared/content-page";
import { SchemaOrg } from "@/components/schema-org";
import { blogPostingSchema } from "@/lib/schema";

export function BlogDetail({ post }: { post: BlogPost }) {
  return <article>
    <SchemaOrg data={blogPostingSchema({ path: `/blogs/view-details/${post.slug}`, title: post.title, description: post.excerpt, publishedAt: post.publishedAt, author: post.author })} />
    <PageHeading eyebrow={post.category} title={post.title} description={post.excerpt} />
    <div className="container page-body article-body">
      <p className="article-meta">{post.author} · <time dateTime={post.publishedAt}>{post.publishedAt}</time> · {post.readingTime}</p>
      <ContentSections sections={post.sections} />
      <aside className="article-sources"><h2>{data.sourcesLabel}</h2><ul>{post.sources.map((source) => <li key={source.href}><a href={source.href}>{source.label} ↗</a></li>)}</ul></aside>
      <Link className="button-secondary" href="/blogs">← {data.backLabel}</Link>
    </div>
  </article>;
}
