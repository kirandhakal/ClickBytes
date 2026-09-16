import data from "@/data/case-studies/data.json";
import { CaseStudiesFeature } from "@/features/CaseStudies/case-studies-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ title: data.title, description: data.description, path: "/case-studies" });
export default function Page() { return <CaseStudiesFeature />; }
