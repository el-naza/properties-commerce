'use client'
import { FieldLabel, TextInput, FieldError, useField } from '@payloadcms/ui'
import { NumberFieldClientComponent } from 'payload'

export default (function AdminPriceInput({ path, validate, field, readOnly }) {
  const { value, setValue } = useField<number>({ path, validate })

  return (
    <div className="field-type">
      <FieldLabel htmlFor={`field-${path}`} label={field.label} required={field.required} />
      <TextInput
        onChange={(e) => setValue(parseInt(e.target.value.replace(/\D/g, '')) || '')}
        value={value?.toLocaleString().split(',').join(' ') || ''}
        path={path || field.name}
        readOnly={Boolean(readOnly)}
      />
      <FieldError path={path} />
    </div>
  )
} as NumberFieldClientComponent)
