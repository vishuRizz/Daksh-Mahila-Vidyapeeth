/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bcskpbttevrgvegegrsy.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  eslint: {
    // ✅ Disables ESLint errors during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Disables TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;