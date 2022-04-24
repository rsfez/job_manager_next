/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === "production" ? "/resume_next" : "";

const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  basePath: basePath,
  publicRuntimeConfig: { assetPrefix: `${basePath}` },
};

module.exports = nextConfig;
