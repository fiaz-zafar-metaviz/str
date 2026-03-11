'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
  title: string
  selected: string[]
  onClear: () => void
  searchable?: boolean
  search?: string
  onSearch?: (v: string) => void
  children: React.ReactNode
}

export default function MobilePopup({ open, onClose, title, selected, onClear, searchable, search, onSearch, children }: Props) {
  // Lock body scroll + hide navbar when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('popup-open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('popup-open')
    }
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('popup-open')
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[300] flex flex-col bg-primary">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
        <span className="font-semibold text-base field-label">{title}</span>
        <div className="flex items-center gap-3">
          {selected.length > 0 && (
            <button type="button" onClick={onClear} className="text-sm field-label opacity-60 hover:opacity-100 cursor-pointer">
              Clear All
            </button>
          )}
          <button type="button" onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg field-label cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search */}
      {searchable && (
        <div className="px-4 py-2 flex-shrink-0 border-b border-white/10">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => onSearch?.(e.target.value)}
            className="w-full dropdown-search-input rounded-lg px-3 py-2 text-sm outline-none"
            autoFocus
          />
        </div>
      )}

      {/* Content */}
      <div className="mobile-popup-scroll flex-1 overflow-y-auto">
        {children}
      </div>

      {/* Done button */}
      <div className="px-4 py-4 flex-shrink-0 border-t border-white/10">
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-lg bg-black text-white font-semibold text-sm cursor-pointer"
        >
          Done{selected.length > 0 ? ` (${selected.length} selected)` : ''}
        </button>
      </div>
    </div>
  )
}
