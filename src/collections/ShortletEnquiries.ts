import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'
import { kebabToTitleCase } from '@/utilities'

export const ShortletEnquiries: CollectionConfig = {
  slug: 'shortlet-enquiries',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'title',
    // listSearchableFields: ['title', 'description'],
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
      name: 'fullName',
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
      name: 'shortlet',
      type: 'relationship',
      relationTo: 'shortlets',
      required: true,
      index: true,
    },
    {
      name: 'checkInDay',
      type: 'date',
    },
    {
      name: 'checkOutDay',
      type: 'date',
    },
    {
      name: 'idType',
      type: 'select',
      options: ['NATIONAL ID', 'PASSPORT', 'DRIVERS LICENSE', 'VOTERS CARD'],
      required: true,
    },
    {
      name: 'idDocument',
      type: 'upload',
      relationTo: 'id-documents',
      required: true,
    },
  ],
}
