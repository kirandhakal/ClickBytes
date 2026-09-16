import Link from "next/link";
import data from "@/data/case-studies/data.json";
import type { CaseStudy } from "@/types/case-study";
import { ContentSections, PageHeading } from "@/features/shared/content-page";

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return <article><PageHeading eyebrow={study.industry + " / " + study.service} title={study.title} description={study.summary} />
    <div className="container page-body article-body">
      <ContentSections sections={study.sections} />
      <aside className="article-sources"><h2>{data.sourcesLabel}</h2><ul>{study.sources.map((source) => <li key={source.href}><a href={source.href}>{source.label} ↗</a></li>)}</ul></aside>
      <Link href="/case-studies" className="button-secondary">← {data.backLabel}</Link>
    </div>
  </article>;
}
