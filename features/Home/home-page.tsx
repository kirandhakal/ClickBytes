import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/home/data.json";

export function HomeFeature() {
  return <>
    <section className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-shell">
        <div className="hero-copy motion-reveal">
          <p className="eyebrow"><span className="status-pulse" />{data.eyebrow}</p>
          {/* <div className="hero-ticker" aria-label="QA focus areas">
            <div className="ticker-track">
              {data.ticker.map((item) => (
                <span key={item}><CircleCheck aria-hidden="true" />{item}</span>
              ))}
            </div>
          </div> */}
          <h1>{data.title}<span>{data.accent}</span></h1>
          <p className="hero-lead">{data.description}</p>
          <div className="hero-actions">
            <Link href={data.primary.href} className="button-primary">{data.primary.label} ↗</Link>
            <a href={data.secondary.href} className="button-secondary">{data.secondary.label} ↗</a>
          </div>
        </div>
        <div className="profile-panel">
          <div className="profile-window">
            <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>{data.portrait.file}</span><span className="window-state">{data.portrait.status}</span></div>
            <div className="profile-photo-wrap"><Image src={data.portrait.src} alt={data.portrait.alt} width={256} height={339} preload className="profile-photo" /><span className="photo-label">{data.portrait.label}</span></div>
            <div className="profile-result"><div><strong>{data.portrait.caption}</strong><span>{data.portrait.detail}</span></div></div>
          </div>
        </div>
      </div>
    </section>
    <section className="container page-body">
      <div className="directory-heading"><h2>{data.directoryTitle}</h2><p>{data.directoryDescription}</p></div>
      <div className="directory-grid">{data.pages.map((page, index) => <Link href={page.href} key={page.href} className="directory-card"><span className="section-kicker">{String(index + 1).padStart(2, "0")} / ↗</span><h3>{page.title}</h3><p>{page.description}</p></Link>)}</div>
    </section>
  </>;
}
