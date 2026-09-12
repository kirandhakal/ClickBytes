import { createMetadata } from "@/lib/metadata";
import { PatternsShowcase } from "@/features/Patterns/patterns-showcase";

export const metadata = createMetadata({ title: "Patterns", description: "A working component and interaction pattern library for the Universal Next.js Starter.", path: "/patterns" });

export default function PatternsPage() {
  return <PatternsShowcase />;
}
