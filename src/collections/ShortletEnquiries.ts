import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'

export const ShortletEnquiries: CollectionConfig = {
  slug: 'shortlet-enquiries',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'title',
    // listSearchableFields: ['title', 'description'],
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'shortlet',
      type: 'relationship',
      relationTo: 'shortlets',
      required: true,
      index: true,
    },
    {
      name: 'checkInDay',
      type: 'date',
    },
    {
      name: 'checkOutDay',
      type: 'date',
    },
    {
      name: 'idType',
      type: 'select',
      options: ['NATIONAL ID', 'PASSPORT', 'DRIVERS LICENSE', 'VOTERS CARD'],
      required: true,
    },
    {
      name: 'idDocument',
      type: 'upload',
      relationTo: 'id-documents',
      required: true,
    },
  ],
}
