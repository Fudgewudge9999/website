/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail deployment if there are TypeScript errors
    ignoreBuildErrors: true,
  },
  // Enable static exports
  output: 'standalone',
}

module.exports = nextConfig

