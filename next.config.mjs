/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["peco-2.github.io", "i.ytimg.com"],
    unoptimized: true,
  },
};

export default nextConfig;
