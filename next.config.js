/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]);

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**', // The path pattern for image URLs
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

module.exports = withTM(nextConfig)
