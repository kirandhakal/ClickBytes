"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import data from "@/data/site/data.json";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="brand" aria-label={data.homeLabel} onClick={() => setOpen(false)}>
      <span className="brand-mark">{data.mark}</span><span><strong>{data.name}</strong><small>{data.tagline}</small></span>
    </Link>
    <nav className="desktop-nav" aria-label={data.navigationLabel}>
      {data.navigation.map(item => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link>)}
    </nav>
    <Link className="header-cta" href={data.contactHref}>{data.contactLabel} ↗</Link>
    <div className="mobile-menu">
      <button type="button" aria-label={data.menuLabel} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      {open && <nav id="mobile-navigation" aria-label={data.mobileNavigationLabel} onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}>
        {[{label:data.home,href:"/"},...data.navigation,{label:data.contactLabel,href:data.contactHref}].map(item => <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
      </nav>}
    </div>
  </div></header>;
}
