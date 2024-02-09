/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apdir-assoc.pt",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
