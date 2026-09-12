import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllBlogPosts } from "@/lib/fetchers/blog";

export function BlogList() {
  const posts = getAllBlogPosts();

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.slug} className="flex h-full flex-col">
          <CardHeader>
            <div className="mb-3 flex items-center justify-between gap-3"><Badge variant="secondary">{post.category}</Badge><span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="size-3.5" />{post.readingTime}</span></div>
            <CardTitle className="text-xl leading-snug"><Link href={`/blogs/view-details/${post.slug}`} className="hover:text-primary">{post.title}</Link></CardTitle>
          </CardHeader>
          <CardContent className="flex-1"><p className="text-sm leading-6 text-muted-foreground">{post.excerpt}</p></CardContent>
          <CardFooter className="justify-between gap-3 text-sm"><time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(post.publishedAt))}</time><Link href={`/blogs/view-details/${post.slug}`} className="inline-flex items-center gap-1 font-semibold text-primary">Read<ArrowRight className="size-4" /></Link></CardFooter>
        </Card>
      ))}
    </div>
  );
}
