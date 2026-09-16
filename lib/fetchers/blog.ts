import municipal from "@/data/blogs/testing-municipal-approval-workflows/data.json";
import enrollment from "@/data/blogs/testing-dynamic-enrollment-forms/data.json";
import pos from "@/data/blogs/testing-pos-retries-and-totals/data.json";
import type { BlogPost } from "@/types/blog";

const posts: BlogPost[] = [municipal, enrollment, pos];

export function getAllBlogPosts() {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 2) {
  return getAllBlogPosts().filter((post) => post.slug !== slug).slice(0, limit);
}
