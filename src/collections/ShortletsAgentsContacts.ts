import type { CollectionConfig, Field } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'

export const ShortletsAgentsContacts: CollectionConfig = {
  slug: 'shortlets-agents-contacts',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'name',
    listSearchableFields: ['name', 'email', 'phone'],
  },
  fields: [
    {
      name: 'name',
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
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'shortlet',
      type: 'relationship',
      relationTo: 'shortlets',
      required: true,
    },
    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'admins',
      required: true,
    },
  ],
}
