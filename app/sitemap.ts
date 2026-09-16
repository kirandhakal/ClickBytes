import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";
import { getAllBlogPosts } from "@/lib/fetchers/blog";
import { getAllCaseStudies } from "@/lib/fetchers/case-studies";
import site from "@/data/site/data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePaths = Array.from(new Set(["/", "/work", "/process", ...site.navigation.map(item => item.href), site.contactHref]));

  return [
    ...corePaths.map(path => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.8 })),
    ...getAllBlogPosts().map(post => ({ url: absoluteUrl(`/blogs/view-details/${post.slug}`), lastModified: post.publishedAt, priority: 0.7 })),
    ...getAllCaseStudies().map(study => ({ url: absoluteUrl(`/case-studies/view-details/${study.slug}`), priority: 0.7 })),
  ];
}
