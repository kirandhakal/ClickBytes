import Link from "next/link";
import { Menu } from "lucide-react";
import { navigation, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${siteConfig.shortName} home`}>
          <span className="brand-mark">KD</span>
          <span><strong>Kiran Dhakal</strong><small>SOFTWARE QUALITY ASSURANCE</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta" href="/#contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary><Menu aria-hidden="true" /><span className="sr-only">Open navigation</span></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/#contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

