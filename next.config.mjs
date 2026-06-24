/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/instagram',
        destination: 'https://instagram.com/hyphunt',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/company/hyphunt',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
