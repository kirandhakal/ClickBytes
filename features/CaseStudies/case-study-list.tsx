import Link from "next/link";
import data from "@/data/case-studies/data.json";
import { getAllCaseStudies } from "@/lib/fetchers/case-studies";

export function CaseStudyList() {
  return <div className="directory-grid">{getAllCaseStudies().map(study => <article className="directory-card" key={study.slug}>
    <p className="section-kicker">{study.industry}</p><h2><Link href={`/case-studies/view-details/${study.slug}`}>{study.title}</Link></h2>
    <p>{study.summary}</p><p className="article-meta">{study.service}</p>
    <Link className="text-link" href={`/case-studies/view-details/${study.slug}`}>{data.readLabel} ↗</Link>
  </article>)}</div>;
}
