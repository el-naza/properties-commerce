import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Properties: CollectionConfig = {
  slug: 'properties',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    // listSearchableFields: ['title', 'description'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      index: true,
      unique: true,
    },
    {
      name: 'price',
      label: 'Starting Price',
      type: 'number',
      required: true,
      index: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      required: true,
      relationTo: 'property-categories',
      index: true,
      hasMany: true,
      minRows: 1,
    },
    {
      name: 'city',
      type: 'relationship',
      relationTo: 'cities',
      required: true,
      index: true,
    },
    {
      name: 'area',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      type: 'text',
      required: false,
    },
    {
      name: 'gpsCoordinates',
      type: 'point',
      admin: {
        description:
          'Uses a google maps location coordinates for the map feature in the search page',
      },
    },
    {
      name: 'media',
      type: 'upload',
      required: true,
      relationTo: 'media',
      hasMany: true,
      minRows: 1,
    },
    {
      name: 'bedroomCounts',
      type: 'number',
      hasMany: true,
      minRows: 1,
    },
    {
      name: 'bathroomCounts',
      type: 'number',
      hasMany: true,
      minRows: 1,
    },
    {
      name: 'squareMeters',
      type: 'number',
      hasMany: true,
      minRows: 1,
    },
    {
      name: 'yearBuilt',
      type: 'text',
    },
    {
      name: 'features',
      type: 'relationship',
      relationTo: 'features',
      hasMany: true,
    },
    {
      name: 'youtubeVideo',
      type: 'text',
      label: 'YouTube Video URL',
    },
    {
      name: 'additionalDeatils',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
    },
    {
      name: 'statuses',
      type: 'relationship',
      relationTo: 'statuses',
      hasMany: true,
    },
  ],
}
