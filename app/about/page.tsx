import data from "@/data/about/data.json";
import { AboutFeature } from "@/features/About/about-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ title: data.title, description: data.description, path: "/about" });
export default function Page() { return <AboutFeature />; }
