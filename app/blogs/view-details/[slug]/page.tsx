import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/fetchers/blog";
import { BlogDetail } from "@/features/Blogs/blog-detail";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return getAllBlogPosts().map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const item = getBlogPostBySlug((await params).slug);
  if (!item) notFound();
  return createMetadata({ title: item.title, description: item.excerpt, path: `/blogs/view-details/${item.slug}` });
}
export default async function Page({ params }: Props) {
  const item = getBlogPostBySlug((await params).slug);
  if (!item) notFound();
  return <BlogDetail post={item} />;
}
