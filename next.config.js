/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true, // not supported at this point - 04/2023
    },
  },
  swcMinify: true,
  experimental: {},
  images: {
    // domains: ['abc.io'],
  },
  async redirects() {
    return [
      {
        source: '/app',
        destination: '/auth/signin',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
