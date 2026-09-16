import data from "@/data/blogs/data.json";
import { BlogsFeature } from "@/features/Blogs/blogs-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ title: data.title, description: data.description, path: "/blogs" });
export default function Page() { return <BlogsFeature />; }
