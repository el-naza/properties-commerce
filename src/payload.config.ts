// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import

import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { s3Storage } from '@payloadcms/storage-s3'
import { resendAdapter } from '@payloadcms/email-resend'

import { Media } from './collections/Media'
import { Admins } from './collections/Admins'
import { getServerSideURL } from './utilities/getURL'
import { Properties } from './collections/Properties'
import { PropertyCategories } from './collections/PropertyCategories'
import { Cities } from './collections/Cities'
import { PropertyFeatures } from './collections/PropertyFeatures'
import { PropertyStatuses } from './collections/PropertyStatuses'
import { Shortlets } from './collections/Shortlets'
import { IdDocuments } from './collections/IdDocuments'
import { ShortletBookings } from './collections/ShortletBookings'
import { Areas } from './collections/Areas'
import { Contacts } from './collections/Contacts'
import { Inquiries } from './collections/Inquiries'
// import { Reviews } from './collections/Reviews'
import { Messages } from './collections/Messages'
import { NodeHttpHandler } from '@smithy/node-http-handler'
import { Agent as HttpAgent } from 'http'
import { Agent as HttpsAgent } from 'https'
import { TourSchedules } from './collections/TourSchedules'
import { ConstructionsInquiries } from './collections/ConstructionsInquiries'
import { InteriorsInquiries } from './collections/InteriorsInquiries'
import { PropertiesAgentsContacts } from './collections/PropertiesAgentsContacts'
import { ShortletsAgentsContacts } from './collections/ShortletsAgentsContacts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      graphics: {
        Logo: '@/components/Logo/Logo#Logo',
        // Icon: '@/components/LogoIcon'
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Admins.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || (secret('DATABASE_URI') as unknown as string),
  }),
  // database-adapter-config-end
  collections: [
    Media,
    Admins,
    Cities,
    Areas,
    PropertyCategories,
    PropertyFeatures,
    PropertyStatuses,
    Properties,
    Shortlets,
    IdDocuments,
    ShortletBookings,
    // Messages,
    // Reviews,
    Contacts,
    Inquiries,
    TourSchedules,

    ConstructionsInquiries,
    InteriorsInquiries,

    PropertiesAgentsContacts,
    ShortletsAgentsContacts,
  ],
  cors: [getServerSideURL(), ...process.env.DOMAINS!.split(',')].filter(Boolean),
  email: resendAdapter({
    defaultFromAddress: process.env.EMAIL_USER!,
    defaultFromName: 'Vastel Credence',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  plugins: [
    ...(process.env.S3_BUCKET! || (secret('S3_BUCKET') as unknown as string)
      ? [
          s3Storage({
            collections: {
              media: true,
            },
            bucket: process.env.S3_BUCKET! || (secret('S3_BUCKET') as unknown as string),
            config: {
              credentials: {
                accessKeyId:
                  process.env.S3_ACCESS_KEY_ID! ||
                  (secret('S3_ACCESS_KEY_ID') as unknown as string),
                secretAccessKey:
                  process.env.S3_SECRET_ACCESS_KEY! ||
                  (secret('S3_SECRET_ACCESS_KEY') as unknown as string),
              },
              region: process.env.S3_REGION || (secret('S3_REGION') as unknown as string),
              requestHandler: new NodeHttpHandler({
                connectionTimeout: 5000,
                socketTimeout: 120000,
                httpAgent: new HttpAgent({ maxSockets: Infinity, keepAlive: true }),
                httpsAgent: new HttpsAgent({ maxSockets: Infinity, keepAlive: true }),
              }),
            },
          }),
        ]
      : []),
  ],
  secret: process.env.PAYLOAD_SECRET || (secret('PAYLOAD_SECRET') as unknown as string),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})

// aws secret stub
function secret(key: string) {
  const obj = {
    // Added by Payload
    DATABASE_URI:
      'mongodb+srv://app:eK4Y9lX3N8SKlRjI@cluster0.zgfez.mongodb.net/vastel-credence?retryWrites=true&w=majority&appName=Cluster0',

    PAYLOAD_SECRET: '7a496a91ad3960423352a547',

    // Used to configure CORS, format links and more. No trailing slash
    NEXT_PUBLIC_SERVER_URL: 'https://main.d2bin8fvpzmc8y.amplifyapp.com',

    DOMAINS:
      'https://main.d2bin8fvpzmc8y.amplifyapp.com,http://zc44wsg0ks0scs4o8k84w8cc.51.44.178.140.sslip.io,https://staging.vastelcredence.com,https://www.vastelcredence.com,https://vastelcredence.com',

    // S3 bucket configuration
    S3_BUCKET: 'properties-commerce',
    S3_ACCESS_KEY_ID: 'AKIA4VDBMEIZC74SNCOP',
    S3_SECRET_ACCESS_KEY: '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',
    S3_REGION: 'eu-west-3',
  }

  return obj[key]
}
