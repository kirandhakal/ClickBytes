import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/metadata";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.creator,
    url: siteConfig.url,
    image: absoluteUrl("/images/assets/kirandhakal.webp"),
    email: `mailto:${siteConfig.email}`,
    jobTitle: "Software Quality Assurance Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
    knowsAbout: [
      "Software quality assurance",
      "Manual testing",
      "API testing",
      "Test case design",
      "Defect reporting",
      "Web application development",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function webPageSchema(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function blogPostingSchema({
  path,
  title,
  description,
  publishedAt,
  author,
}: {
  path: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedAt,
    mainEntityOfPage: absoluteUrl(path),
    author: { "@type": "Person", name: author },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}
