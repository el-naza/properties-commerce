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
    useAsTitle: 'name',
    listSearchableFields: ['name', 'stateOrCounty'],
    hidden: true,
    hideAPIURL: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'City Name',
      required: true,
    },
    {
      name: 'stateOrCounty',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      required: true,
    },
  ],
}
