import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { SchemaOrg } from "@/components/schema-org";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ToastProvider } from "@/components/ui/overlays";
import { createMetadata } from "@/lib/metadata";
import { personSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import site from "@/data/site/data.json";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createMetadata(),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  category: "portfolio",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#087f5b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top" className="min-h-dvh antialiased">
        <a href="#main-content" className="skip-link">{site.skip}</a>
        <ToastProvider>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </ToastProvider>
        <SchemaOrg data={[personSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
