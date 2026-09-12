import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaOrg } from "@/components/schema-org";
import { Badge } from "@/components/ui/badge";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/fetchers/case-studies";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseStudies().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return createMetadata({ title: "Case study not found", noIndex: true });
  return createMetadata({ title: study.title, description: study.summary, path: `/case-studies/view-details/${study.slug}` });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();
  const path = `/case-studies/view-details/${study.slug}`;

  return (
    <>
      <SchemaOrg data={[webPageSchema(path, study.title, study.summary), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: study.title, path }])]} />
      <article>
        <header className="border-b py-12 sm:py-16"><div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }, { label: study.title }]} /><div className="mt-10 max-w-3xl"><div className="flex flex-wrap gap-2"><Badge>{study.industry}</Badge><Badge variant="outline">{study.service}</Badge></div><h1 className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl">{study.title}</h1><p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">{study.summary}</p></div></div></header>
        <section className="container grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:py-16">
          <div className="grid gap-10"><div><p className="text-xs font-semibold uppercase text-primary">Challenge</p><h2 className="mt-2 text-2xl font-bold">The situation</h2><p className="mt-4 leading-8 text-muted-foreground">{study.challenge}</p></div><div><p className="text-xs font-semibold uppercase text-primary">Approach</p><h2 className="mt-2 text-2xl font-bold">What changed</h2><p className="mt-4 leading-8 text-muted-foreground">{study.solution}</p></div><div><p className="text-xs font-semibold uppercase text-primary">Outcome</p><h2 className="mt-2 text-2xl font-bold">The result</h2><p className="mt-4 leading-8 text-muted-foreground">{study.outcome}</p></div></div>
          <aside aria-label="Project results" className="border-l-0 lg:border-l lg:pl-8"><h2 className="text-sm font-semibold">Project results</h2><dl className="mt-5 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">{study.metrics.map((metric) => <div key={metric.label}><dt className="text-sm text-muted-foreground">{metric.label}</dt><dd className="mt-1 text-3xl font-bold">{metric.value}</dd></div>)}</dl></aside>
        </section>
        <div className="container border-t py-8"><Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold"><ArrowLeft className="size-4" />All case studies</Link></div>
      </article>
    </>
  );
}
