import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Bug,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  ClipboardCheck,
  Code2,
  Database,
  FileCheck2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  SearchCheck,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";
import { SchemaOrg } from "@/components/schema-org";
import { personSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const qualitySkills = [
  { name: "Manual testing", detail: "Functional, usability & exploratory", icon: SearchCheck },
  { name: "Test design", detail: "Scenarios, cases & checklists", icon: ClipboardCheck },
  { name: "API testing", detail: "REST, GraphQL & data validation", icon: TerminalSquare },
  { name: "Defect reporting", detail: "Clear steps, evidence & impact", icon: Bug },
  { name: "Database checks", detail: "PostgreSQL & MySQL", icon: Database },
  { name: "Quality engineering", detail: "Git, Docker & CI awareness", icon: ShieldCheck },
] as const;

const projects = [
  {
    number: "01",
    type: "E-GOVERNANCE · WORKFLOW",
    title: "Dhangadhi Service Bus",
    description:
      "A municipal services portal with e-KYC, document migration, payments, recommendations, appointments, and multi-role approvals.",
    coverage: ["Role & permission paths", "Document and payment states", "Forward / send-back / approve flows"],
    link: "https://servicebus.palikaportal.com/",
  },
  {
    number: "02",
    type: "EDTECH · DYNAMIC FORMS",
    title: "Vibe College Enrollment",
    description:
      "A configurable enrollment platform with dynamic forms, intake rules, course selection, offer letters, fees, and staged application review.",
    coverage: ["Validation and boundary cases", "Dynamic field dependencies", "Application lifecycle integrity"],
    link: "https://www.vibecollege.edu.au/",
  },
  {
    number: "03",
    type: "RETAIL · TRANSACTIONS",
    title: "Syanko POS",
    description:
      "A restaurant point-of-sale system covering order creation, kitchen tickets, discounts, taxes, billing, payments, and receipt printing.",
    coverage: ["Order-to-kitchen consistency", "Tax and discount calculations", "Payment and receipt scenarios"],
    link: "https://syanko-test.dashboard.cliffbyte.com/en",
  },
] as const;

const process = [
  { step: "01", title: "Understand the risk", text: "Map users, business rules, integrations, and failure points before choosing what to test first." },
  { step: "02", title: "Design useful coverage", text: "Turn requirements into focused scenarios across happy paths, edge cases, permissions, and data states." },
  { step: "03", title: "Test with evidence", text: "Execute consistently, inspect API and database behavior, and capture clear proof when something fails." },
  { step: "04", title: "Communicate the impact", text: "Report defects with reproducible steps, expected behavior, severity, and context the team can act on." },
] as const;

const developerTools = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "NestJS", "REST APIs", "GraphQL", "PostgreSQL", "Docker", "Git", "Linux"] as const;

export default function HomePage() {
  return (
    <>
      <SchemaOrg data={[webPageSchema("/", siteConfig.name, siteConfig.description), personSchema()]} />

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-shell">
          <div className="hero-copy motion-reveal">
            <div className="eyebrow"><span className="status-pulse" />Available for SQA opportunities</div>
            <h1 id="hero-title">I test software<span>like someone who built it.</span></h1>
            <p className="hero-lead">
              I&apos;m <strong>Kiran Dhakal</strong>, a software quality assurance engineer in transition with 2+ years of
              full-stack development experience. I bring code-level context to manual testing, API validation, defect
              analysis, and reliable releases.
            </p>
            <div className="hero-actions">
              <Link className="button-primary" href="#work">Explore my work <ArrowDown aria-hidden="true" /></Link>
              <a className="button-secondary" href="/images/assets/cv.html" target="_blank" rel="noreferrer">View résumé <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin aria-hidden="true" /> Kathmandu, Nepal</span>
              <a href="mailto:kirandhakal715@gmail.com"><Mail aria-hidden="true" /> Let&apos;s talk quality</a>
            </div>
          </div>

          <div className="profile-panel motion-reveal">
            <div className="profile-window">
              <div className="window-bar">
                <span className="window-dots"><i /><i /><i /></span>
                <span>candidate_profile.qa</span>
                <span className="window-state">VERIFIED</span>
              </div>
              <div className="profile-photo-wrap">
                <Image src="/images/assets/kirandhakal.webp" alt="Kiran Dhakal, software quality assurance engineer" width={256} height={339} priority className="profile-photo" />
                <span className="focus-corner focus-corner-one" />
                <span className="focus-corner focus-corner-two" />
                <span className="photo-label">KIRAN DHAKAL / SQA</span>
              </div>
              <div className="profile-result">
                <span className="result-icon"><Check aria-hidden="true" /></span>
                <div><strong>Quality mindset: passed</strong><span>Developer insight · User empathy · Detail</span></div>
              </div>
            </div>
            <span className="floating-note note-one">edge_case_found.log</span>
            <span className="floating-note note-two"><CheckCircle2 aria-hidden="true" /> Ready to test</span>
          </div>
        </div>
        <div className="hero-ticker" aria-label="Key strengths">
          <div className="container ticker-track">
            {["Manual testing", "API validation", "Test case design", "Defect reporting", "Developer background"].map((item) => <span key={item}><CircleDot aria-hidden="true" /> {item}</span>)}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div><p className="section-kicker"><span>01</span> About</p><h2 id="about-title">A builder&apos;s perspective on software quality.</h2></div>
          <div className="about-copy">
            <p className="large-copy">After building production web applications across government services, education, retail, and commerce, I learned that shipping a feature is only half the job. The other half is proving it behaves correctly when real users, real data, and unexpected conditions meet it.</p>
            <p>I&apos;m now bringing that engineering background into SQA. I understand how interfaces connect to APIs, how data moves through a database, where permissions break, and why a small edge case can become a large user problem. That helps me investigate defects deeply and communicate with developers clearly.</p>
            <div className="about-facts">
              <div><strong>2+</strong><span>Years building software</span></div>
              <div><strong>10+</strong><span>Complex products delivered</span></div>
              <div><strong>4</strong><span>High-stakes domains</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills" aria-labelledby="skills-title">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="section-kicker light"><span>02</span> Quality toolkit</p><h2 id="skills-title">How I contribute to a quality team.</h2></div>
            <p>Practical testing skills backed by a working knowledge of the complete application stack.</p>
          </div>
          <div className="skills-grid">
            {qualitySkills.map(({ name, detail, icon: Icon }, index) => (
              <article className="skill-card" key={name}>
                <div className="skill-card-top"><span className="skill-icon"><Icon aria-hidden="true" /></span><span>0{index + 1}</span></div>
                <h3>{name}</h3><p>{detail}</p>
              </article>
            ))}
          </div>
          <div className="developer-strip">
            <span><Code2 aria-hidden="true" /> Engineering foundation</span>
            <div>{developerTools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="container">
          <div className="section-heading-row dark-heading">
            <div><p className="section-kicker"><span>03</span> Product experience</p><h2 id="work-title">Systems I know from the inside.</h2></div>
            <p>These are products I helped build. Each one sharpened my understanding of business-critical test paths, data integrity, and user risk.</p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <div className="project-index">{project.number}</div>
                <div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p></div>
                <div className="coverage-list"><span>QUALITY LENS</span>{project.coverage.map((item) => <p key={item}><Check aria-hidden="true" /> {item}</p>)}</div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><ArrowUpRight aria-hidden="true" /></a>
              </article>
            ))}
          </div>
          <div className="more-work">
            <p>Also contributed to Hello Palika, CTF School Management, Chiurika, Connect Kisan, and Dwarika Engineering.</p>
            <a href="/images/assets/cv.html" target="_blank" rel="noreferrer">See full experience <ChevronRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process" aria-labelledby="process-title">
        <div className="container process-grid">
          <div className="process-intro"><p className="section-kicker"><span>04</span> Test approach</p><h2 id="process-title">Quality is a process,<br />not a final checkpoint.</h2><p>My approach connects product intent, technical behavior, and user impact. The goal is useful confidence, not simply a longer list of test cases.</p></div>
          <ol className="process-list">
            {process.map((item) => <li key={item.step}><span className="process-number">{item.step}</span><span className="process-marker"><FileCheck2 aria-hidden="true" /></span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-grid-bg" aria-hidden="true" />
        <div className="container contact-inner">
          <div><p className="section-kicker light"><span>05</span> Contact</p><h2 id="contact-title">Let&apos;s make software<br /><em>more dependable.</em></h2></div>
          <div className="contact-copy">
            <p>I&apos;m looking for an SQA opportunity where curiosity, clear communication, and technical depth are valued. If that sounds like your team, I&apos;d like to hear from you.</p>
            <a className="contact-email" href="mailto:kirandhakal715@gmail.com"><span><Mail aria-hidden="true" /></span><span><small>EMAIL ME AT</small>kirandhakal715@gmail.com</span><ArrowUpRight aria-hidden="true" /></a>
            <div className="social-links"><a href="https://linkedin.com/in/kirandhakal7" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a><a href="https://github.com/kirandhakal" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a></div>
          </div>
        </div>
      </section>
    </>
  );
}
