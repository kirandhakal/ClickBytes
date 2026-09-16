import data from "@/data/work/data.json";
import { WorkFeature } from "@/features/Work/work-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ title: data.title, description: data.description, path: "/work" });
export default function Page() { return <WorkFeature />; }
