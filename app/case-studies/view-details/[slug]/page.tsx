import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/fetchers/case-studies";
import { CaseStudyDetail } from "@/features/CaseStudies/case-study-detail";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return getAllCaseStudies().map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const item = getCaseStudyBySlug((await params).slug);
  if (!item) notFound();
  return createMetadata({ title: item.title, description: item.summary, path: `/case-studies/view-details/${item.slug}` });
}
export default async function Page({ params }: Props) {
  const item = getCaseStudyBySlug((await params).slug);
  if (!item) notFound();
  return <CaseStudyDetail study={item} />;
}
