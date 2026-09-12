import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaOrg } from "@/components/schema-org";
import { CaseStudyList } from "@/features/CaseStudies/case-study-list";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const description = "Example project stories showing a typed, data-driven pattern for dynamic portfolio routes.";

export const metadata = createMetadata({ title: "Case Studies", description, path: "/case-studies" });

export default function CaseStudiesPage() {
  return (
    <>
      <SchemaOrg data={[webPageSchema("/case-studies", "Case Studies", description), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])]} />
      <section className="container py-12 sm:py-16">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
        <div className="mb-10 mt-8 max-w-2xl"><p className="text-xs font-semibold uppercase text-primary">Selected work</p><h1 className="mt-2 text-4xl font-bold sm:text-5xl">Reusable detail pages, demonstrated</h1><p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p></div>
        <CaseStudyList />
      </section>
    </>
  );
}
