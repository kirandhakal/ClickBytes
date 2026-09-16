import type { ContentLink, ContentSection } from "./content";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  sections: ContentSection[];
  sources: ContentLink[];
};
