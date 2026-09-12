import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadata = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/opengraph-image",
  noIndex = false,
}: PageMetadata = {}): Metadata {
  const canonical = absoluteUrl(path);

  return {
    ...(title ? { title } : {}),
    description,
    keywords: [...siteConfig.keywords],
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: title ?? siteConfig.name,
      description,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.name,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
