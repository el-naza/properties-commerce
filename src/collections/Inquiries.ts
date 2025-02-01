import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'firstName',
    listSearchableFields: ['firstName', 'email', 'phone', 'identifiesAs'],
  },
  fields: [
    {
      name: 'type',
      label: 'Inquiry Type',
      type: 'select',
      options: ['Purchase', 'Rent', 'Mortgage'],
      required: true,
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'identifiesAsA',
      type: 'select',
      options: ['First Time Buyer', 'Real Estate Investor', 'Real Estate Agent'],
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
      name: 'categoryInterested',
      type: 'relationship',
      required: true,
      relationTo: 'property-categories',
    },
    {
      name: 'maxPrice',
      type: 'number',
    },
    {
      name: 'numberOfBeds',
      type: 'number',
    },
    {
      name: 'message',
      type: 'text',
    },
  ],
}
