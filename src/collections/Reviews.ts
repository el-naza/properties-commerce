import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['title', 'email', 'property'],
  },
  fields: [
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'review',
      type: 'text',
    },
    {
      name: 'rating',
      type: 'number',
      validate: async (value) => {
        if (value > 5 || value < 1) return 'Rating must be between 1 and 5'
        return true
      },
    },
    {
      name: 'property',
      type: 'relationship',
      relationTo: 'properties',
      required: true,
      index: true,
    },
  ],
}
