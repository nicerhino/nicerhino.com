import Header from "@/app/components/header";
import Cta from "@/app/components/sections/cta";
import Footer from "@/app/components/footer";
import { ReactNode, Suspense } from "react";
import Divider from "@/app/components/divider";
import fs from "node:fs/promises";
import Link from "next/link";
import { Frontmatter, matterToMeta } from "../page";
import Image from "next/image";

async function Post({ slug }: { slug: string }) {
  const { default: Post, frontmatter }: { default: () => ReactNode; frontmatter: Frontmatter } =
    await import(`@/posts/${slug}.mdx`);

  const meta = matterToMeta(slug, frontmatter);

  return (
    <article className="prose prose-slate prose-invert mx-auto pt-32 max-w-3xl">
      <Link href="/blog" className="text-sm text-indigo-500 no-underline">
        <span aria-hidden="true">←</span> Back to Blog
      </Link>
      <Image
        src={`/images/blog/${meta.image}`}
        alt={meta.title}
        width={1500}
        height={1000}
        className="rounded-xl"
      />
      <h1 className="mt-8">{meta.title}</h1>
      <p className="text-slate-400 text-sm">
        By {meta.author.name || "the Editor"}
        <br />
        {meta.date}
      </p>
      <Post />
    </article>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main>
      <Header />
      <Suspense fallback={<div>Loading article...</div>}>
        <Post slug={slug} />
      </Suspense>
      <Divider className="max-w-2xl" />
      <Cta />
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  const files = await fs.readdir("posts");
  return files.map((file) => ({ slug: file.replace(".mdx", "") }));
}

export const dynamicParams = false;
