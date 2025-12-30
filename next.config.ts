import nextMdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  },
});

const nextConfig = withMdx({
  pageExtensions: ["mdx", "tsx", "ts"],
  reactStrictMode: true,
});

export default nextConfig;
