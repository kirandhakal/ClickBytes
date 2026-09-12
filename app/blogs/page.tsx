import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaOrg } from "@/components/schema-org";
import { BlogList } from "@/features/Blogs/blog-list";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const description = "Example articles powered by typed local JSON and reusable Next.js App Router fetchers.";

export const metadata = createMetadata({ title: "Blog", description, path: "/blogs" });

export default function BlogsPage() {
  return (
    <>
      <SchemaOrg data={[webPageSchema("/blogs", "Blog", description), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blogs" }])]} />
      <section className="container py-12 sm:py-16">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        <div className="mb-10 mt-8 max-w-2xl"><p className="text-xs font-semibold uppercase text-primary">Example content</p><h1 className="mt-2 text-4xl font-bold sm:text-5xl">Ideas for better frontend foundations</h1><p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p></div>
        <BlogList />
      </section>
    </>
  );
}
