const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Universal Starter",
  description:
    "A frontend-first Next.js starter with accessible components, design tokens, animation, dark mode, and production-ready SEO.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  locale: "en_US",
  creator: "Your team",
  keywords: [
    "Next.js starter",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
  ],
  links: {
    github: "https://github.com/your-org/your-project",
  },
} as const;

export const navigation = [
  { label: "Components", href: "/#components" },
  { label: "States", href: "/#states" },
  { label: "Motion", href: "/#motion" },
  { label: "Blog", href: "/blogs" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Patterns", href: "/patterns" },
] as const;
