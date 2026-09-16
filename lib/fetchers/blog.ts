import municipal from "@/data/blogs/testing-municipal-approval-workflows/data.json";
import enrollment from "@/data/blogs/testing-dynamic-enrollment-forms/data.json";
import pos from "@/data/blogs/testing-pos-retries-and-totals/data.json";
import uiUxAnimation from "@/data/blogs/ui-ux-animation-testing/data.json";
import generalChecklist from "@/data/blogs/general-qa-checklist/data.json";
import responsiveCrossBrowser from "@/data/blogs/responsive-cross-browser-qa/data.json";
import apiDatabaseValidation from "@/data/blogs/api-database-validation-qa/data.json";
import notificationTesting from "@/data/blogs/notification-testing-guide/data.json";
import type { BlogPost } from "@/types/blog";

const posts: BlogPost[] = [
  generalChecklist,
  uiUxAnimation,
  responsiveCrossBrowser,
  apiDatabaseValidation,
  notificationTesting,
  municipal,
  enrollment,
  pos,
];

export function getAllBlogPosts() {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 2) {
  return getAllBlogPosts().filter((post) => post.slug !== slug).slice(0, limit);
}
