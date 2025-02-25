import { FieldApi, FormApi } from '@tanstack/react-form'

export function FieldError({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <div className="text-[10px] leading-[16.5px] text-error -mt-[10.5px] mb-3">
          {field.state.meta.errors.join(',')}
        </div>
      ) : null}
    </>
  )
}

export function FormError({ form }: { form: FormApi<any, any> }) {
  return (
    <>
      {form.state.errors.length ? (
        <div className="text-[10px] leading-[16.5px] text-error mt-2">
          {form.state.errors.join(',')}
        </div>
      ) : null}
    </>
  )
}
