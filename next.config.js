import { withPayload } from '@payloadcms/next/withPayload'

// aws secret stub
function secret() {}

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

console.log('major stuff', secret('S3_SECRET_ACCESS_KEY'), 'afterwards')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ],
  },
  reactStrictMode: true,
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
