import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

import { superAdmin } from '@/access/superAdmin'
import { selfOrSuperAdminSelf } from '@/access/selfOrSuperAdminSelf'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: superAdmin,
    create: superAdmin,
    delete: selfOrSuperAdminSelf,
    read: authenticated,
    update: selfOrSuperAdminSelf,
  },
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: ['Super Admin', 'Agent'],
      defaultValue: 'Agent',
    },
  ],
  timestamps: true,
}
