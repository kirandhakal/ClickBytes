export type ContentSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  href?: string;
};

export type ContentLink = { label: string; href: string };

export type PageContent = {
  eyebrow: string;
  title: string;
  description: string;
  sections: ContentSection[];
  links: ContentLink[];
};
