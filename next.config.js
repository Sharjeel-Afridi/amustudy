/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amustud.pockethost.io',
        pathname: '/api/files/**',
      },
    ],
  },
};

module.exports = nextConfig;
