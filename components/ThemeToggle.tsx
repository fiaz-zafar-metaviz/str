'use client'

import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '8px 12px',
        cursor: 'pointer',
        color: 'var(--text-muted)',
        fontSize: '18px',
        lineHeight: 1,
      }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
