import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { self } from '@/access/self'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: self,
    read: authenticated,
    update: self,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}
