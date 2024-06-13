/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'klaudiuszdev.pl',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    const graphqlTagLoader = {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    };

    config.module.rules.push(graphqlTagLoader);

    return config
  },
}

module.exports = nextConfig
