export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  service: string;
  sections: ContentSection[];
  sources: ContentLink[];
};
import type { ContentLink, ContentSection } from "./content";
