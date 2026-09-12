import postsData from "@/data/blogs/posts.json";
import type { BlogPost } from "@/types/blog";

const posts = postsData as BlogPost[];

export function getAllBlogPosts() {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 2) {
  return getAllBlogPosts().filter((post) => post.slug !== slug).slice(0, limit);
}
