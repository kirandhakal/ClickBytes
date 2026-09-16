import data from "@/data/tools/data.json";
import { PageHeading } from "@/features/shared/content-page";
import { TestCaseBuilder } from "./test-case-builder";

export function ToolsFeature() {
  return <><PageHeading {...data} /><div className="container page-body"><TestCaseBuilder /></div></>;
}
