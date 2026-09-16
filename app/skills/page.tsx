import data from "@/data/skills/data.json";
import { SkillsFeature } from "@/features/Skills/skills-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ title: data.title, description: data.description, path: "/skills" });
export default function Page() { return <SkillsFeature />; }
