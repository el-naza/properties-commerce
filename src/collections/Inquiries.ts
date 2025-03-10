import type { CollectionConfig, Field } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'
import fetchDocs from '@/services/fetchDocs'
import { PropertyCategory } from '@/payload-types'

export const inquriesFormFields: (Field & { placeholder?: false | string; isPhone?: boolean })[] = [
  {
    name: 'type',
    label: 'Inquiry Type',
    type: 'select',
    options: ['Purchase', 'Rent', 'Mortgage'],
    required: true,
    placeholder: 'Select',
  },
  {
    name: 'identifiesAsA',
    label: 'Information',
    type: 'select',
    options: ['First Time Buyer', 'Real Estate Investor', 'Real Estate Agent'],
    required: true,
  },
  {
    type: 'row',
    fields: [
      {
        name: 'firstName',
        label: false,
        type: 'text',
        required: true,
      },
      {
        name: 'lastName',
        label: false,
        type: 'text',
        required: true,
      },
    ],
  },
  {
    name: 'email',
    label: false,
    type: 'text',
    required: true,
    placeholder: 'Email Address',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'text',
    isPhone: true,
    required: true,
  },
  {
    name: 'categoryInterested',
    label: 'Category of Interest',
    type: 'text',
    // type: 'relationship',
    required: true,
    // hasMany: true,
    // relationTo: 'property-categories',
  },
  {
    type: 'row',
    fields: [
      {
        name: 'maxPrice',
        label: false,
        type: 'number',
      },
      {
        name: 'numberOfBeds',
        label: false,
        type: 'number',
      },
    ],
  },
  // {
  //   name: 'message',
  //   type: 'text',
  // },
]

// export const getInquiriesFormFields = async () => {
//   const categories = await fetchDocs('property-categories')
//   const categoriesOptions = categories.map((category: PropertyCategory) => category.title)

//   const inquriesFormFields: (Field & { placeholder?: false | string; isPhone?: boolean })[] = [
//     {
//       name: 'type',
//       label: 'Inquiry Type',
//       type: 'select',
//       options: ['Purchase', 'Rental', 'Mortgage'],
//       required: true,
//       placeholder: 'Select',
//     },
//     {
//       name: 'identifiesAsA',
//       label: 'Information',
//       type: 'select',
//       options: ['First Time Buyer', 'Real Estate Investor', 'Real Estate Agent'],
//       required: true,
//     },
//     {
//       type: 'row',
//       fields: [
//         {
//           name: 'firstName',
//           label: false,
//           type: 'text',
//           required: true,
//         },
//         {
//           name: 'lastName',
//           label: false,
//           type: 'text',
//           required: true,
//         },
//       ],
//     },
//     {
//       name: 'email',
//       label: false,
//       type: 'text',
//       required: true,
//       placeholder: 'Email Address',
//     },
//     {
//       name: 'phone',
//       label: 'Phone Number',
//       type: 'text',
//       isPhone: true,
//       required: true,
//       placeholder: 'e.g. +234 812 345 6789',
//     },
//     {
//       name: 'categoryInterested',
//       // label: 'Categories of Interest',
//       label: 'Category of Interest',
//       type: 'select',
//       required: true,
//       options: ['Shortlets', ...categoriesOptions],
//       hasMany: true,
//       // relationTo: 'property-categories',
//     },
//     {
//       type: 'row',
//       fields: [
//         {
//           name: 'maxPrice',
//           label: false,
//           type: 'number',
//         },
//         {
//           name: 'numberOfBeds',
//           label: false,
//           type: 'number',
//         },
//       ],
//     },
//     // {
//     //   name: 'message',
//     //   type: 'text',
//     // },
//   ]

//   return inquriesFormFields
// }

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'type',
    listSearchableFields: ['firstName', 'email', 'phone', 'identifiesAs'],
  },
  fields: inquriesFormFields,
}
