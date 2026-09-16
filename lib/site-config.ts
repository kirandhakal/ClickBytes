import site from "@/data/site/data.json";

const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Kiran Dhakal — Software Quality Assurance Engineer",
  shortName: "Kiran Dhakal",
  description:
    "QA portfolio of Kiran Dhakal, a software quality assurance engineer in Kathmandu focused on manual testing, API validation, test case design, defect reporting, regression planning, and release evidence.",
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
    "software quality assurance portfolio",
  ],
  links: {
    github: "https://github.com/kirandhakal",
    linkedin: "https://linkedin.com/in/kirandhakal7",
  },
} as const;

export const navigation = site.navigation;
