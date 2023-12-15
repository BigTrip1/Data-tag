/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI: 'mongodb://localhost:27017/data-tag',
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/data-tag',
        permanent: true, // set to false if the redirect is temporary
      },
    ]
  },
}

module.exports = nextConfig
