import Link from "next/link";
import { Blocks, Menu } from "lucide-react";
import { navigation, siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-semibold" aria-label={`${siteConfig.name} home`}>
          <span className="grid size-8 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
            <Blocks className="size-4" aria-hidden="true" />
          </span>
          <span className="truncate">{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <details className="group relative md:hidden">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-md outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
              <Menu className="size-4" aria-hidden="true" />
              <span className="sr-only">Open navigation</span>
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 top-12 z-50 grid w-48 gap-1 rounded-lg border bg-background p-2 shadow-lg">
              {navigation.map((item) => <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{item.label}</Link>)}
            </nav>
          </details>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
