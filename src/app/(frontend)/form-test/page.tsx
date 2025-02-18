'use client'

import { useState } from 'react'

export default function Page() {
  return (
    <>
      <div className="h-40"></div>
      <h1>
        THIS IS THE AUTO FORM TEST PAGE
        {/* <GenForm /> */}
      </h1>
    </>
  )
}

// function GenForm({ fields }: { fields?: Array<object> }) {
function GenForm({
  fields,
  onSubmit,
  formClassName = 'space-y-6',
  submitButtonClassName = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
  submitButtonText = 'Submit',
}) {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when field is modified
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    const newErrors = {}
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // If validation passes, call onSubmit
    onSubmit(formData)
  }

  const renderField = (field) => {
    const {
      type = 'text',
      name,
      label,
      placeholder,
      required = false,
      options = [],
      className = '',
      labelClassName = 'block text-sm font-medium text-gray-700',
      inputClassName = 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500',
      errorClassName = 'text-red-500 text-sm mt-1',
    } = field

    const commonProps = {
      name,
      id: name,
      value: formData[name] || '',
      onChange: handleChange,
      required,
      className: `${inputClassName} ${className}`,
      placeholder,
    }

    let inputElement
    switch (type) {
      case 'textarea':
        inputElement = <textarea {...commonProps} rows={4} />
        break

      case 'select':
        inputElement = (
          <select {...commonProps}>
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
        break

      default:
        inputElement = <input type={type} {...commonProps} />
    }

    return (
      <div key={name} className="space-y-1">
        <label htmlFor={name} className={labelClassName}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {inputElement}
        {errors[name] && <p className={errorClassName}>{errors[name]}</p>}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      {fields.map(renderField)}
      <button type="submit" className={submitButtonClassName}>
        {submitButtonText}
      </button>
    </form>
  )
}
