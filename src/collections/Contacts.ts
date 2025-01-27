import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'fullName',
    listSearchableFields: ['fullName', 'email', 'phone', 'identifiesAs'],
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
      name: 'whatsapp',
      type: 'text',
    },
    {
      name: 'identifiesAs',
      type: 'select',
      options: ['New Customer', 'Returning Customer', 'An Agent'],
      required: true,
    },
    {
      name: 'message',
      type: 'text',
    },
  ],
}
