/** @type {import('next').NextConfig} */
import path from "path";

export default {
  sassOptions: {
    includePaths: [path.join(new URL("./styles", import.meta.url).pathname)],
  },
  reactStrictMode: false,
};
