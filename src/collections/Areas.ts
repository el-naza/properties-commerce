import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Areas: CollectionConfig = {
  slug: 'areas',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    listSearchableFields: ['name', 'city.name'],
    hidden: true,
    hideAPIURL: true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name of the Area',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      type: 'relationship',
      relationTo: 'cities',
      required: true,
      index: true,
    },
  ],
  timestamps: false,
}
