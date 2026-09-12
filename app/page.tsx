import { ComponentShowcase } from "@/features/Showcase/component-showcase";
import { SchemaOrg } from "@/components/schema-org";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { webPageSchema } from "@/lib/schema";

export const metadata = createMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <SchemaOrg data={webPageSchema("/", siteConfig.name, siteConfig.description)} />
      <ComponentShowcase />
    </>
  );
}
