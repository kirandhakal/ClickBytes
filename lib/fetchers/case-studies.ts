import municipal from "@/data/case-studies/municipal-workflow/data.json";
import enrollment from "@/data/case-studies/enrollment-forms/data.json";
import pos from "@/data/case-studies/pos-order-integrity/data.json";
import type { CaseStudy } from "@/types/case-study";

const caseStudies: CaseStudy[] = [municipal, enrollment, pos];

export function getAllCaseStudies() {
  return [...caseStudies];
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
