'use client'

import { useState } from 'react'
import { createClient } from '../../lib/supabase-browser'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ThemeToggle from '../../components/ThemeToggle'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>

      {/* Theme toggle */}
      <div style={{ position: 'fixed', top: '16px', right: '16px' }}>
        <ThemeToggle />
      </div>

      {/* Logo */}
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Zen Old Mincho", serif', fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', margin: 0, letterSpacing: '1px' }}>
          Top10<span style={{ color: 'var(--accent)' }}>STR</span>
        </h1>
      </div>

      {/* Card */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '40px', width: '100%', maxWidth: '480px' }}>

        <h2 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px', marginTop: 0 }}>Welcome back</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '28px' }}>
          Don&apos;t have an account?{' '}
          <Link href="/signup" style={{ color: 'var(--accent)', fontWeight: 500, textDecoration: 'none' }}>Create one free</Link>
        </p>

        {error && (
          <div style={{ background: 'var(--error-bg)', border: '1px solid var(--error)', borderRadius: '8px', padding: '12px', color: 'var(--error)', fontSize: '14px', marginBottom: '20px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <div>
            <label style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Password</label>
              <Link href="/forgot-password" style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none' }}>Forgot Password?</Link>
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                style={{ paddingRight: '52px' }}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '13px', padding: 0 }}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading}
            style={{ background: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)', border: 'none', borderRadius: '6px', padding: '13px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', marginTop: '8px', opacity: loading ? 0.7 : 1, width: '100%' }}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>

        </form>
      </div>
    </div>
  )
}
