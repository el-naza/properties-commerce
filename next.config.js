import { withPayload } from '@payloadcms/next/withPayload'

// aws secret stub
function secret() {}

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

console.log('major stuff', secret('S3_SECRET_ACCESS_KEY'), 'afterwards', process.env.secrets)

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   ...[
    //     // NEXT_PUBLIC_SERVER_URL,
    //     'https://main.diruvqs3dia45.amplifyapp.com' /* 'https://example.com' */,
    //   ].map((item) => {
    //     const url = new URL(item)

    //     return {
    //       hostname: url.hostname,
    //       protocol: url.protocol.replace(':', ''),
    //     }
    //   }),
    // ],
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
