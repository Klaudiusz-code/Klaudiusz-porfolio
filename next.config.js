/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adamaszekwebdev.pl',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
}

module.exports = nextConfig
