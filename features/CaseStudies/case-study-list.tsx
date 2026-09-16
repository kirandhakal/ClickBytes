"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import data from "@/data/case-studies/data.json";
import { getAllCaseStudies } from "@/lib/fetchers/case-studies";

export function CaseStudyList() {
  const studies = getAllCaseStudies();
  const categories = useMemo(() => ["All", ...Array.from(new Set(studies.map(study => study.industry)))], [studies]);
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? studies : studies.filter(study => study.industry === category);

  return <>
    <div className="category-filter" aria-label="Case study categories">
      {categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
    </div>
    <div className="directory-grid">{filtered.map(study => <article className="directory-card" key={study.slug}>
      <p className="section-kicker">{study.industry}</p><h2><Link href={`/case-studies/view-details/${study.slug}`}>{study.title}</Link></h2>
      <p>{study.summary}</p><p className="article-meta">{study.service}</p>
      <Link className="text-link" href={`/case-studies/view-details/${study.slug}`}>{data.readLabel} ↗</Link>
    </article>)}</div>
  </>;
}
