import nextMdx from "@next/mdx";

// Turbopack requires loader options to be serializable, so plugins are passed
// as module-name strings; @next/mdx's loader resolves them at build time.
const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter"],
  },
});

const nextConfig = withMdx({
  pageExtensions: ["mdx", "tsx", "ts"],
  reactStrictMode: true,
});

export default nextConfig;
