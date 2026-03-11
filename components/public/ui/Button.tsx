import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, className = '', ...props }: Props) {
  return (
    <button
      {...props}
      className={`font-semibold text-sm rounded-lg px-5 py-2.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  )
}
