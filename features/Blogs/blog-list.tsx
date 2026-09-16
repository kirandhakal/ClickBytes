import Link from "next/link";
import data from "@/data/blogs/data.json";
import { getAllBlogPosts } from "@/lib/fetchers/blog";

export function BlogList() {
  return <div className="directory-grid">{getAllBlogPosts().map(post => <article className="directory-card" key={post.slug}>
    <p className="section-kicker">{post.category}</p><h2><Link href={`/blogs/view-details/${post.slug}`}>{post.title}</Link></h2>
    <p>{post.excerpt}</p><p className="article-meta">{post.readingTime} · <time dateTime={post.publishedAt}>{post.publishedAt}</time></p>
    <Link className="text-link" href={`/blogs/view-details/${post.slug}`}>{data.readLabel} ↗</Link>
  </article>)}</div>;
}
