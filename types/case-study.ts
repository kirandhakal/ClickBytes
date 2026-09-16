import type { ContentLink, ContentSection } from "./content";

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  service: string;
  sections: ContentSection[];
  sources: ContentLink[];
};
