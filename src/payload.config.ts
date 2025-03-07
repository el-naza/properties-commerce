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
// import { TourSchedules } from './collections/TourSchedules'
// import { Reviews } from './collections/Reviews'
import { Messages } from './collections/Messages'

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
    // Contacts,
    Inquiries,
    // TourSchedules,
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
function secret(key: string) {}
