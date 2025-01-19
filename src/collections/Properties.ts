import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

//price
//title
//location
//no of rooms & no of bathroom // sq meter size for land
// property type
// Date Uploaded today

export const Properties: CollectionConfig = {
  slug: 'properties',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'price',
      label: 'Starting Price',
      type: 'text',
      required: true,
      admin: {},
      index: true,
    },
    {
      name: 'type',
      type: 'relationship',
      required: true,
      relationTo: 'property-types',
      index: true,
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations',
      required: true,
      index: true,
    },
    {
      name: 'address',
      type: 'text',
      required: true,
    },
    {
      name: 'sizes',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'media',
      type: 'upload',
      required: true,
      relationTo: 'media',
      hasMany: true,
    },
  ],
}
