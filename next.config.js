/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**', // The path pattern for your image URLs
      },
      {
        protocol: 'https',
        hostname: 'assets.nflxext.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
