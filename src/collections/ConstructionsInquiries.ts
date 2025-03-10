import type { CollectionConfig, Field } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'
import fetchDocs from '@/services/fetchDocs'
import { PropertyCategory } from '@/payload-types'

export const ConstructionsInquiries: CollectionConfig = {
  slug: 'constructions-inquiries',
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
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'projectType',
      type: 'select',
      options: [
        'Commercial Construction',
        'Infrastructure Development',
        'Residential Construction',
        'Other',
      ],
      required: true,
    },
    {
      name: 'projectDetails',
      type: 'textarea',
      required: true,
    },
  ],
}
