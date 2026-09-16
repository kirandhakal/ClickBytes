import data from "@/data/blogs/data.json";
import { PageHeading } from "@/features/shared/content-page";
import { BlogList } from "./blog-list";

export function BlogsFeature() {
  return <><PageHeading {...data} /><div className="container page-body"><BlogList /></div></>;
}
