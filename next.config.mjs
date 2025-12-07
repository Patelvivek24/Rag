/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use default build directory to avoid Windows lock issues on custom folder
  distDir: ".next",
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
