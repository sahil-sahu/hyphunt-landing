// The Hyphunt map app runs on the Raspberry Pi, not on Vercel. It's exposed
// through a Cloudflare tunnel and proxied from here so the whole product lives
// on one domain. The Pi app is built with basePath "/map", which is why the
// prefix is preserved on the way through.
const MAP_ORIGIN = (process.env.MAP_ORIGIN ?? 'https://map-origin.hyphunt.com').replace(/\/+$/, '')

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/map', destination: `${MAP_ORIGIN}/map` },
      { source: '/map/:path*', destination: `${MAP_ORIGIN}/map/:path*` },
    ]
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
