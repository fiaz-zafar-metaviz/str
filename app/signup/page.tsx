'use client'

import { useState } from 'react'
import { createClient } from '../../lib/supabase-browser'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function SignupPage() {
  const router = useRouter()
  const supabase = createClient()

  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '',
    password: '', phone: '', city: '', country: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSignup(e: React.SyntheticEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { first_name: form.first_name, last_name: form.last_name } },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('users').update({
        phone: form.phone, city: form.city, country: form.country,
      }).eq('id', user.id)
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
          <p style={{ color: '#fff', fontSize: '16px', margin: '0 0 8px', fontFamily: '"Zen Old Mincho", serif' }}>Join Our Community</p>
          <h1 style={{ color: '#fff', fontSize: '48px', fontWeight: 700, margin: 0, fontFamily: '"Zen Old Mincho", serif' }}>Create Your Free Account</h1>
        </div>
      </div>

      {/* Signup Form */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '48px 20px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '40px', width: '100%', maxWidth: '555px' }}>

          <h2 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px', marginTop: 0, paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
            Create Account
          </h2>

          {error && (
            <div style={{ background: 'var(--error-bg)', border: '1px solid var(--error)', borderRadius: '8px', padding: '12px', color: 'var(--error)', fontSize: '14px', marginBottom: '20px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '13px', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}><span style={{ color: 'var(--error)' }}>* </span>First Name</label>
                <input type="text" value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} required placeholder="John" />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}><span style={{ color: 'var(--error)' }}>* </span>Last Name</label>
                <input type="text" value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} required placeholder="Doe" />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '13px', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}><span style={{ color: 'var(--error)' }}>* </span>Email Address</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="john@example.com" />
            </div>

            <div>
              <label style={{ fontSize: '13px', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}><span style={{ color: 'var(--error)' }}>* </span>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  placeholder="Min. 6 characters"
                  style={{ paddingRight: '44px' }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '16px', padding: 0 }}>
                  {showPassword ? '🔓' : '🔒'}
                </button>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '13px', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}>Phone Number</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 234 567 890" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '13px', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}>City</label>
                <input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="New York" />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}>Country</label>
                <input type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="USA" />
              </div>
            </div>

            <button type="submit" disabled={loading}
              style={{ background: '#111', color: '#fff', border: 'none', borderRadius: '6px', padding: '14px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', opacity: loading ? 0.7 : 1, width: '100%', fontFamily: '"Zen Old Mincho", serif' }}>
              {loading ? 'Creating account...' : 'Create Free Account'}
            </button>

            <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Log in</Link>
            </p>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
