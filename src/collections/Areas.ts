import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Cities: CollectionConfig = {
  slug: 'cities',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'cityName',
    listSearchableFields: ['cityName', 'stateOrCounty'],
  },
  fields: [
    {
      name: 'name',
      label: 'Area Name',
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
}
