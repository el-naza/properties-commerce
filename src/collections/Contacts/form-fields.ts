import { FormField } from '@/components/form-test/page'

export const contactFormFields: FormField[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'fullName',
        type: 'text',
        required: true,
        placeholder: 'e.g. John Doe',
      },
      {
        name: 'email',
        type: 'text',
        required: true,
        placeholder: 'Email Address',
      },
    ],
  },
  {
    type: 'row',
    fields: [
      {
        name: 'phone',
        type: 'text',
        isPhone: true,
        required: true,
        placeholder: 'e.g. +234 812 345 6789',
      },
      {
        name: 'whatsapp',
        type: 'text',
        isPhone: true,
        placeholder: 'e.g. +234 812 345 6789',
      },
    ],
  },

  {
    name: 'identifiesAs',
    label: 'I am a ...',
    type: 'select',
    options: ['New Customer', 'Returning Customer', 'An Agent'],
    required: true,
    placeholder: 'Select',
  },
  {
    name: 'message',
    type: 'textarea',
    placeholder: "What's on your mind?",
  },
]
