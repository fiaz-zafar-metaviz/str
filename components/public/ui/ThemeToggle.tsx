'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  // Load saved theme on mount (default dark)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      setDark(false)
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="flex items-center justify-between w-full">
      <div className="theme-toggle-label flex items-center gap-2">
        {dark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        <span className="font-medium text-sm">Theme</span>
      </div>
      <button
        type="button"
        onClick={() => setDark(d => !d)}
        aria-label="Toggle theme"
        className="theme-toggle-track relative w-12 h-6 rounded-full transition-colors cursor-pointer flex-shrink-0"
      >
        <span
          className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform flex items-center justify-center"
          style={{ transform: dark ? 'translateX(26px)' : 'translateX(2px)' }}
        >
          {dark
            ? <Moon className="w-3 h-3 text-gray-600" />
            : <Sun className="w-3 h-3 text-yellow-500" />
          }
        </span>
      </button>
    </div>
  )
}
