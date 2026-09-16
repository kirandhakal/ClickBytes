import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { SchemaOrg } from "@/components/schema-org";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/context/theme-context";
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

const themeScript = `
  try {
    const stored = localStorage.getItem('theme');
    const dark = stored ? stored === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="min-h-dvh antialiased">
        <ThemeProvider>
          <ToastProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </ToastProvider>
        </ThemeProvider>
        <SchemaOrg data={[personSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
