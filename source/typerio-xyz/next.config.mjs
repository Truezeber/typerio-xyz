/** @type {import('next').NextConfig} */
import path from "path";
import withMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const mdxOptions = {
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
    // any other MDX options can go here
  },
};

export default withMDX(mdxOptions)({
  sassOptions: {
    includePaths: [path.join(new URL("./styles", import.meta.url).pathname)],
  },
  reactStrictMode: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
