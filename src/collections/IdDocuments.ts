import type { CollectionConfig } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

import { anyone } from '../access/anyone'
import { superAdmin } from '@/access/superAdmin'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const IdDocuments: CollectionConfig = {
  slug: 'id-documents',
  access: {
    create: anyone,
    delete: superAdmin,
    read: anyone,
    update: () => false,
  },
  fields: [
    // {
    //   name: "property",
    // }
  ],
  upload: {
    // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
    staticDir: path.resolve(dirname, '../../public/media'),
    focalPoint: false,
    crop: false,
    mimeTypes: ['image/*'],
  },
}
