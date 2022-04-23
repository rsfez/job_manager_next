/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  assetPrefix: "/resume_next/",
  basePath: "/resume_next",
};

module.exports = nextConfig;
