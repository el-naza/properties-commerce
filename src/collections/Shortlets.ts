import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { uploadedByOrSuperAdmin } from '@/access/uploadedByOrSuperAdmin'

export const Shortlets: CollectionConfig = {
  slug: 'shortlets',
  access: {
    create: authenticated,
    delete: uploadedByOrSuperAdmin,
    read: anyone,
    update: uploadedByOrSuperAdmin,
  },
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['title', 'area'],
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
      name: 'area',
      type: 'relationship',
      relationTo: 'areas',
      required: true,
      index: true,
    },
    {
      name: 'address',
      type: 'text',
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
      name: 'bedroomsCount',
      type: 'number',
      hasMany: true,
      minRows: 1,
    },
    {
      name: 'bathroomsCount',
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
      relationTo: 'property-features',
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
      relationTo: 'property-statuses',
      hasMany: true,
    },
    {
      name: 'uploadedBy',
      type: 'relationship',
      relationTo: 'admins',
      admin: {
        readOnly: true,
      },
      defaultValue: async (args) => args.user!.id,
      // hooks: {
      //   beforeValidate: [
      //     ({ req }) => {
      //       return req.user!.id
      //     },
      //   ],
      // },
    },
  ],
}
