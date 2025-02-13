import { withPayload } from '@payloadcms/next/withPayload'

// aws secret stub
function secret() {}

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './loader.ts',
  },
  reactStrictMode: false,
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: '/index.html',
  //     },
  //   ]
  // },
}

export default withPayload(nextConfig)
