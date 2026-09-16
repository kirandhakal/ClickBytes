import data from "@/data/case-studies/data.json";
import { PageHeading } from "@/features/shared/content-page";
import { CaseStudyList } from "./case-study-list";

export function CaseStudiesFeature() {
  return <><PageHeading {...data} /><div className="container page-body"><CaseStudyList /></div></>;
}
