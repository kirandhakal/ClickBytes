import data from "@/data/tools/data.json";
import { ToolsFeature } from "@/features/Tools/tools-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ title: data.title, description: data.description, path: "/tools" });
export default function Page() { return <ToolsFeature />; }
