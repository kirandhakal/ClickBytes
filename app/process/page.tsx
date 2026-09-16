import data from "@/data/process/data.json";
import { ProcessFeature } from "@/features/Process/process-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ title: data.title, description: data.description, path: "/process" });
export default function Page() { return <ProcessFeature />; }
