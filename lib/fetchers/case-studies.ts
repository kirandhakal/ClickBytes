import municipal from "@/data/case-studies/municipal-workflow/data.json";
import enrollment from "@/data/case-studies/enrollment-forms/data.json";
import pos from "@/data/case-studies/pos-order-integrity/data.json";
import helloPalika from "@/data/case-studies/hello-palika-saas/data.json";
import ctfReportCards from "@/data/case-studies/ctf-report-cards/data.json";
import chiurikaCms from "@/data/case-studies/chiurika-cms/data.json";
import connectKisanNotifications from "@/data/case-studies/connect-kisan-notifications/data.json";
import dwarikaAnimationUx from "@/data/case-studies/dwarika-animation-ux/data.json";
import redpandaBooking from "@/data/case-studies/redpanda-booking/data.json";
import cvMakerExport from "@/data/case-studies/cv-maker-export/data.json";
import pmsRbacSprints from "@/data/case-studies/pms-rbac-sprints/data.json";
import foodDeliveryRecommendations from "@/data/case-studies/food-delivery-recommendations/data.json";
import type { CaseStudy } from "@/types/case-study";

const caseStudies: CaseStudy[] = [
  municipal,
  helloPalika,
  enrollment,
  ctfReportCards,
  chiurikaCms,
  connectKisanNotifications,
  pos,
  dwarikaAnimationUx,
  redpandaBooking,
  cvMakerExport,
  pmsRbacSprints,
  foodDeliveryRecommendations,
];

export function getAllCaseStudies() {
  return [...caseStudies];
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
