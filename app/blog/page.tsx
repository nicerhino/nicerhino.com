import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import fs from "node:fs/promises";
import Image from "next/image";
import authordata from "@/data/authors.json";
import { matter } from "vfile-matter";
import { read } from "to-vfile";
import Link from "next/link";
import { VFile } from "vfile";
import { collect, map } from "@/lib/stream";

const authors: Record<string, Author> = authordata;

export interface Author {
  name: string;
  role: string;
  image: string;
}

export interface Frontmatter {
  title: string;
  date: string;
  author: string;
  image: string;
  category: string;
  summary: string;
}

interface Meta {
  title: string;
  date: string;
  author: Author;
  image: string;
  category: string;
  summary: string;
  slug: string;
  url: string;
}

function prettyDate(date: string) {
  if (!date) return "";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
}

export function matterToMeta(filename: string, matter: Frontmatter): Meta {
  const slug = filename.replace(".mdx", "");

  return {
    ...matter,
    date: prettyDate(matter.date),
    slug,
    author: authors[matter.author],
    url: `/blog/${slug}`,
  };
}

declare module "vfile" {
  interface DataMap {
    name: string;
    matter: Frontmatter;
  }
}

function sortMeta(a: Meta, b: Meta) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function unique(value: string, index: number, self: string[]) {
  return self.indexOf(value) === index;
}

async function* getPosts(): AsyncGenerator<VFile> {
  const files = await fs.readdir("posts");
  for await (const file of files) {
    const vfile = await read(`posts/${file}`);
    matter(vfile);
    yield vfile;
  }
}

async function Articles({ category }: { category?: string }) {
  let posts = await collect(
    map(getPosts(), (vfile) => matterToMeta(vfile.basename!, vfile.data.matter!)),
  );
  const categories = posts.map((p) => p.category).filter(unique);
  posts = posts.filter((post) => !category || post.category === category).sort(sortMeta);

  return (
    <section id="articles" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Blog</h2>
          <p className="mt-2 text-lg/8 text-slate-600">
            Insights from the field, stories from our customers, and more.
          </p>
        </div>
        <div className="flex mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none text-xs">
          {categories.map((cat) => (
            <div key={cat} className="p-0.5">
              <Link
                href={`/blog${category === cat ? "" : "?category=" + cat}`}
                className={`relative z-10 rounded-full px-3 py-1.5 font-medium ${category === cat ? "bg-slate-700 text-corn" : "bg-slate-50 text-slate-600"} hover:bg-slate-700`}
              >
                {cat}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  alt=""
                  src={`/images/blog/${post.image}`}
                  className="aspect-video w-full rounded-2xl bg-slate-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                  width={1000}
                  height={600}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-900/10 ring-inset" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-slate-400">
                    {post.date}
                  </time>
                  <Link
                    href={`/blog?category=${post.category}`}
                    className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-700"
                  >
                    {post.category}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="h-16 mt-4 text-lg/6 font-semibold text-slate-300 group-hover:text-slate-500">
                    <Link href={post.url}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="h-20 mt-5 line-clamp-3 text-sm/6 text-slate-400">{post.summary}</p>
                </div>
                <div className="relative mt-4 flex items-center gap-x-4">
                  <Image
                    alt=""
                    src={`/images/heads/${post.author.image}`}
                    className="size-10 rounded-full bg-slate-200"
                    width={400}
                    height={400}
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-slate-300">
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </p>
                    <p className="text-slate-500">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
          {posts.length === 0 && <div className="text-slate-300">No posts found.</div>}
        </div>
      </div>
    </section>
  );
}

export default async function Page(props: { searchParams?: Promise<{ category?: string }> }) {
  const searchParams = await props.searchParams;

  return (
    <main>
      <Header />
      <Articles category={searchParams?.category} />
      <Footer />
    </main>
  );
}
