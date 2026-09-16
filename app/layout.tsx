import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { SchemaOrg } from "@/components/schema-org";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ToastProvider } from "@/components/ui/overlays";
import { createMetadata } from "@/lib/metadata";
import { personSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

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
      <body className="min-h-dvh antialiased">
        <ToastProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ToastProvider>
        <SchemaOrg data={[personSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
