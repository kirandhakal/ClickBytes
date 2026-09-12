import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.name}. Built as a clean place to begin.</p>
        <p>Next.js · TypeScript · Tailwind CSS · shadcn/ui</p>
      </div>
    </footer>
  );
}
