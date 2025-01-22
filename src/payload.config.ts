// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import

import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { s3Storage } from '@payloadcms/storage-s3'

import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { getServerSideURL } from './utilities/getURL'
import { Properties } from './collections/Properties'
import { PropertyCategories } from './collections/PropertyCategories'
import { Cities } from './collections/Cities'
import { Features } from './collections/Features'
import { Statuses } from './collections/Statuses'

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
    user: Users.slug,
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
  collections: [Media, Users, Properties, PropertyCategories, Cities, Features, Statuses],
  cors: [getServerSideURL()].filter(Boolean),
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
