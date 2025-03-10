import type { CollectionConfig, Field } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'
import fetchDocs from '@/services/fetchDocs'
import { PropertyCategory } from '@/payload-types'

export const InteriorsInquiries: CollectionConfig = {
  slug: 'interiors-inquiries',
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
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'projectType',
      type: 'select',
      options: ['Residential Design', 'Commercial Design', 'Renovation & Styling', 'Other'],
      required: true,
    },
    {
      name: 'projectDetails',
      type: 'textarea',
      required: true,
    },
  ],
}
