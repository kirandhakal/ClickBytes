const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Kiran Dhakal — Software Quality Assurance Engineer",
  shortName: "Kiran Dhakal",
  description:
    "QA portfolio of Kiran Dhakal, a software quality assurance engineer in Kathmandu with a full-stack development background in manual testing, API validation, test design, and defect analysis.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  locale: "en_US",
  creator: "Kiran Dhakal",
  email: "kirandhakal715@gmail.com",
  location: "Kathmandu, Nepal",
  keywords: [
    "Kiran Dhakal",
    "software quality assurance engineer",
    "SQA engineer Nepal",
    "QA engineer Kathmandu",
    "manual testing",
    "API testing",
    "software tester Nepal",
    "test case design",
    "quality assurance portfolio",
    "QA engineer with developer background",
  ],
  links: {
    github: "https://github.com/kirandhakal",
    linkedin: "https://linkedin.com/in/kirandhakal7",
  },
} as const;

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
] as const;
