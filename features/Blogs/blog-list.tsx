"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import data from "@/data/blogs/data.json";
import { getAllBlogPosts } from "@/lib/fetchers/blog";

export function BlogList() {
  const posts = getAllBlogPosts();
  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map(post => post.category)))], [posts]);
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? posts : posts.filter(post => post.category === category);

  return <>
    <div className="category-filter" aria-label="Blog categories">
      {categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
    </div>
    <div className="directory-grid">{filtered.map(post => <article className="directory-card" key={post.slug}>
      <p className="section-kicker">{post.category}</p><h2><Link href={`/blogs/view-details/${post.slug}`}>{post.title}</Link></h2>
      <p>{post.excerpt}</p><p className="article-meta">{post.readingTime} · <time dateTime={post.publishedAt}>{post.publishedAt}</time></p>
      <Link className="text-link" href={`/blogs/view-details/${post.slug}`}>{data.readLabel} ↗</Link>
    </article>)}</div>
  </>;
}
