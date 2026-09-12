import caseStudiesData from "@/data/case-studies/case-studies.json";
import type { CaseStudy } from "@/types/case-study";

const caseStudies = caseStudiesData as CaseStudy[];

export function getAllCaseStudies() {
  return [...caseStudies];
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
