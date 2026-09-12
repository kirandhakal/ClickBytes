import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllCaseStudies } from "@/lib/fetchers/case-studies";

export function CaseStudyList() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {getAllCaseStudies().map((study) => (
        <Card key={study.slug} className="flex h-full flex-col">
          <CardHeader>
            <div className="mb-3 flex flex-wrap gap-2"><Badge>{study.industry}</Badge><Badge variant="outline">{study.service}</Badge></div>
            <CardTitle className="text-xl leading-snug"><Link href={`/case-studies/view-details/${study.slug}`} className="hover:text-primary">{study.title}</Link></CardTitle>
          </CardHeader>
          <CardContent className="flex-1"><p className="text-sm leading-6 text-muted-foreground">{study.summary}</p></CardContent>
          <CardFooter><Link href={`/case-studies/view-details/${study.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary">View case study<ArrowRight className="size-4" /></Link></CardFooter>
        </Card>
      ))}
    </div>
  );
}
