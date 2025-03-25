import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'
import { kebabToTitleCase } from '@/utilities'

export const TourSchedules: CollectionConfig = {
  slug: 'tour-schedules',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'type',
    listSearchableFields: ['type', 'fullName', 'email', 'property'],
  },
  // hooks: {
  //   afterChange: [
  //     async ({ operation, doc, req, collection }) => {
  //       if (operation === 'create') {
  //         console.log(`Sending email notification`)
  //         const adminUrl = `${req.protocol}//${req.host}/admin/collections/${collection.slug}/${doc.id}`
  //         console.log(`Admin URL: ${adminUrl}`)
  //         req.payload
  //           .sendEmail({
  //             to: process.env.ADMIN_NOTIFICATION_EMAIL,
  //             subject: 'EMAIL NOTIFICATION',
  //             html: `Dear Admin,
  // <br/><br/>
  // A new submission has been received through the ${kebabToTitleCase(collection.slug!)} form on Vastel Credence Website.
  // <br/><br/>
  // You can access the submission details in the admin panel here: <a href="${adminUrl}">${adminUrl}</a>
  // <br/><br/>
  // Thank you,<br/>
  // Vastel Credence Notification System`,
  //           })
  //           .catch((error) => {
  //             console.error(
  //               `An error occured while attempting to send the email notification to the admin`,
  //               error,
  //             )
  //           })
  //       }
  //     },
  //   ],
  // },
  fields: [
    {
      name: 'type',
      label: 'Tour Type',
      type: 'select',
      options: ['In Person', 'Video Chat'],
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'timeOfDay',
      type: 'select',
      options: ['Morning', 'Afternoon', 'Evening'],
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'property',
      type: 'relationship',
      relationTo: 'properties',
      required: true,
      index: true,
    },
    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'admins',
      required: true,
    },
  ],
}
