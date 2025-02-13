import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { selfOrSuperAdminSelf } from '@/access/selfOrSuperAdminSelf'
import { selfOrNotSuperAdminSelf } from '@/access/selfOrNotSuperAdminSelf'

export const Admins: CollectionConfig = {
  slug: 'admins',
  access: {
    unlock: superAdmin,
    create: superAdmin,
    delete: selfOrNotSuperAdminSelf,
    update: selfOrSuperAdminSelf,
  },
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'name',
    hidden(args) {
      return args.user?.role === 'Agent'
    },
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'phone',
      label: 'Contact Phone Number',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      options: ['Super Admin', 'Agent'],
      defaultValue: async (args) =>
        (
          await args.req.payload.count({
            collection: 'admins',
            where: { role: { equals: 'Super Admin' } },
          })
        ).totalDocs === 0
          ? 'Super Admin'
          : 'Agent',
      access: {
        update: superAdmin,
      },
      admin: { hidden: true },
    },
  ],
  timestamps: true,
}
