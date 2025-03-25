import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'
import { kebabToTitleCase } from '@/utilities'

export const Messages: CollectionConfig = {
  slug: 'messages',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'fullName',
    listSearchableFields: ['fullName', 'email', 'phone', 'identifiesAs'],
  },
  // hooks: {
  //   afterChange: [
  //     async ({ operation, doc, req, collection }) => {
  //       if (operation === 'create') {
  //         console.log(`Sending email notification`)
  //         const adminUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/${collection.slug}/${doc.id}`
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
      // required: true,
    },
    {
      name: 'message',
      type: 'text',
      required: true,
    },
  ],
}
