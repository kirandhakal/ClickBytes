import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container grid min-h-[70dvh] content-center py-16">
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-3 max-w-md text-muted-foreground">The page may have moved, or the address may be incorrect.</p>
      <div className="mt-7"><Button asChild><Link href="/"><ArrowLeft />Back home</Link></Button></div>
    </section>
  );
}
