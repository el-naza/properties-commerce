import type { CollectionConfig, Field } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'
import fetchDocs from '@/services/fetchDocs'
import { PropertyCategory } from '@/payload-types'
import { kebabToTitleCase } from '@/utilities'

export const InteriorsInquiries: CollectionConfig = {
  slug: 'interiors-inquiries',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'name',
    listSearchableFields: ['name', 'email', 'phone'],
  },
  hooks: {
    afterChange: [
      async ({ operation, doc, req, collection }) => {
        if (operation === 'create') {
          console.log(`Sending email notification`)
          const adminUrl = `${req.protocol}//${req.host}/admin/collections/${collection.slug}/${doc.id}`
          console.log(`Admin URL: ${adminUrl}`)
          req.payload
            .sendEmail({
              to: process.env.ADMIN_NOTIFICATION_EMAIL,
              subject: 'EMAIL NOTIFICATION',
              html: `Dear Admin,
  <br/><br/>
  A new submission has been received through the ${kebabToTitleCase(collection.slug!)} form on Vastel Credence Website.
  <br/><br/>
  You can access the submission details in the admin panel here: <a href="${adminUrl}">${adminUrl}</a>
  <br/><br/>
  Thank you,<br/>
  Vastel Credence Notification System`,
            })
            .catch((error) => {
              console.error(
                `An error occured while attempting to send the email notification to the admin`,
                error,
              )
            })
        }
      },
    ],
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'projectType',
      type: 'select',
      options: ['Residential Design', 'Commercial Design', 'Renovation & Styling', 'Other'],
      required: true,
    },
    {
      name: 'projectDetails',
      type: 'textarea',
      required: true,
    },
  ],
}
