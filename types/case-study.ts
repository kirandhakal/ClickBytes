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
  challenge: string;
  solution: string;
  outcome: string;
  metrics: CaseStudyMetric[];
  sections: ContentSection[];
  sources: ContentLink[];
};
import type { ContentLink, ContentSection } from "./content";
