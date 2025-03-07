import type { CollectionConfig, Field } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'

export const inquriesFormFields: (Field & { placeholder?: false | string; isPhone?: boolean })[] = [
  {
    name: 'type',
    label: 'Inquiry Type',
    type: 'select',
    options: ['Purchase', 'Rent', 'Mortgage'],
    required: true,
    placeholder: 'Select',
  },
  {
    name: 'identifiesAsA',
    label: 'Information',
    type: 'select',
    options: ['First Time Buyer', 'Real Estate Investor', 'Real Estate Agent'],
    required: true,
  },
  {
    type: 'row',
    fields: [
      {
        name: 'firstName',
        label: false,
        type: 'text',
        required: true,
      },
      {
        name: 'lastName',
        label: false,
        type: 'text',
        required: true,
      },
    ],
  },
  {
    name: 'email',
    label: false,
    type: 'text',
    required: true,
    placeholder: 'Email Address',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'text',
    isPhone: true,
    required: true,
  },
  {
    name: 'categoryInterested',
    label: 'Categories of Interest',
    type: 'relationship',
    required: true,
    // hasMany: true,
    relationTo: 'property-categories',
  },
  {
    type: 'row',
    fields: [
      {
        name: 'maxPrice',
        label: false,
        type: 'number',
      },
      {
        name: 'numberOfBeds',
        label: false,
        type: 'number',
      },
    ],
  },
  // {
  //   name: 'message',
  //   type: 'text',
  // },
]

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
  fields: inquriesFormFields,
}
