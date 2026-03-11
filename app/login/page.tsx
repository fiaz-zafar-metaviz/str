'use client'

import { useState } from 'react'
import { createClient } from '../../lib/supabase-browser'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.SyntheticEvent) {
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
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Hero */}
      <div style={{
        backgroundImage: 'url(/images/hero-login.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 20px',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#fff', fontSize: '16px', margin: '0 0 8px', fontFamily: '"Zen Old Mincho", serif' }}>Welcome Members</p>
          <h1 style={{ color: '#fff', fontSize: '48px', fontWeight: 700, margin: 0, fontFamily: '"Zen Old Mincho", serif' }}>Log Into Your Account</h1>
        </div>
      </div>

      {/* Login Form */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '48px 20px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '40px', width: '100%', maxWidth: '555px' }}>

          <h2 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px', marginTop: 0, paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
            Member Login
          </h2>

          {error && (
            <div style={{ background: 'var(--error-bg)', border: '1px solid var(--error)', borderRadius: '8px', padding: '12px', color: 'var(--error)', fontSize: '14px', marginBottom: '20px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            <div>
              <label style={{ fontSize: '13px', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}>
                <span style={{ color: 'var(--error)' }}>* </span>Email Address
              </label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="your@email.com" />
            </div>

            <div>
              <label style={{ fontSize: '13px', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}>
                <span style={{ color: 'var(--error)' }}>* </span>Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••"
                  style={{ paddingRight: '44px' }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '16px', padding: 0 }}>
                  {showPassword ? '🔓' : '🔒'}
                </button>
              </div>
            </div>

            <Link href="/forgot-password" style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', marginTop: '-8px' }}>
              Forgot Password? Click to Reset Password
            </Link>

            <button type="submit" disabled={loading}
              style={{ background: '#111', color: '#fff', border: 'none', borderRadius: '6px', padding: '14px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', opacity: loading ? 0.7 : 1, width: '100%', fontFamily: '"Zen Old Mincho", serif', letterSpacing: '0.5px' }}>
              {loading ? 'Logging in...' : 'Login Now'}
            </button>

            {/* CTA buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '8px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
              <Link href="/signup" style={{ background: 'rgb(217,83,79)', color: '#fff', borderRadius: '6px', padding: '14px 10px', textAlign: 'center', textDecoration: 'none', fontSize: '13px', fontWeight: 600, lineHeight: '1.4' }}>
                Are you looking for the perfect vacation rental home?<br />Create Free User Account
              </Link>
              <Link href="/signup?type=host" style={{ background: '#222', color: '#fff', borderRadius: '6px', padding: '14px 10px', textAlign: 'center', textDecoration: 'none', fontSize: '13px', fontWeight: 600, lineHeight: '1.4' }}>
                Are You Ready To Reserve Your Spot And Secure Your Place?<br />Reserve Spot Now
              </Link>
            </div>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
