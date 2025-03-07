// // In a file like payload/fields/PhoneField.ts
// import { Field } from 'payload/types'

// export interface PhoneField extends Omit<Field, 'type'> {
//   type: 'phone'
//   // Add any phone-specific properties here
//   validateFormat?: boolean
//   defaultCountry?: string
// }

// // In your types.d.ts file
// declare module 'payload/types' {
//   export interface CollectionConfig {
//     fields: (Field | PhoneField)[]
//   }

//   export interface GlobalConfig {
//     fields: (Field | PhoneField)[]
//   }
// }
