import Link from "next/link";
import type { ContentSection, PageContent } from "@/types/content";

export function PageHeading({ eyebrow, title, description }: Pick<PageContent, "eyebrow" | "title" | "description">) {
  return <header className="page-heading"><div className="container">
    <p className="section-kicker">{eyebrow}</p>
    <h1>{title}</h1><p className="page-description">{description}</p>
  </div></header>;
}

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return <div className="content-sections">{sections.map((section) => <section key={section.title} className="content-section">
    <h2>{section.href ? <Link href={section.href}>{section.title} ↗</Link> : section.title}</h2>
    {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
    {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
  </section>)}</div>;
}

export function ContentPage({ data }: { data: PageContent }) {
  return <><PageHeading {...data} /><div className="container page-body">
    <ContentSections sections={data.sections} />
    {data.links.length > 0 && <div className="page-actions">{data.links.map((link) => <Link className="button-secondary" href={link.href} key={link.href}>{link.label} ↗</Link>)}</div>}
  </div></>;
}
