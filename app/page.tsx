import data from "@/data/home/data.json";
import { HomeFeature } from "@/features/Home/home-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ title: "Kiran Dhakal — QA Portfolio", description: data.description, path: "/" });
export default function Page() { return <HomeFeature />; }
