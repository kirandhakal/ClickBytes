import data from "@/data/contact/data.json";
import { ContactFeature } from "@/features/Contact/contact-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ title: data.title, description: data.description, path: "/contact" });
export default function Page() { return <ContactFeature />; }
