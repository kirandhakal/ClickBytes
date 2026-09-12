import { ComponentShowcase } from "@/features/Showcase/component-showcase";
import { SchemaOrg } from "@/components/schema-org";
import { siteConfig } from "@/lib/site-config";
import { webPageSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <SchemaOrg data={webPageSchema("/", siteConfig.name, siteConfig.description)} />
      <ComponentShowcase />
    </>
  );
}
