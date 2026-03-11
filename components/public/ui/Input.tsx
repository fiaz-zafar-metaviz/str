import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export default function Input({ label, error, className = '', ...props }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm text-muted font-medium">
          {props.required && <span className="text-danger mr-1">*</span>}
          {label}
        </label>
      )}
      <input
        {...props}
        className={`bg-input text-primary border rounded-lg px-3 py-2.5 text-sm outline-none w-full placeholder:text-muted transition-colors ${error ? 'border-danger' : 'border-theme'} ${className}`}
      />
      {error && <span className="text-xs text-danger">{error}</span>}
    </div>
  )
}
