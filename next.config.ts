/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pinimg.com"], // ✅ Allow external image domain
  },
};

module.exports = nextConfig;
