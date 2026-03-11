import { redirect } from 'next/navigation'
import { createClient } from '../../lib/supabase-server'
import LogoutButton from './LogoutButton'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', padding: '40px 24px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Dashboard</h1>
          <LogoutButton />
        </div>

        {/* Profile Card */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>

          {/* Avatar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#6366f1', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '22px' }}>
              {profile?.first_name?.[0]}{profile?.last_name?.[0]}
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '18px', color: '#0f172a', margin: 0 }}>
                {profile?.first_name} {profile?.last_name}
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <Badge label={profile?.role} color="#6366f1" />
                <Badge label={profile?.status} color={profile?.status === 'active' ? '#22c55e' : '#94a3b8'} />
              </div>
            </div>
          </div>

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Row label="Email" value={profile?.email} />
            <Row label="Phone" value={profile?.phone} />
            <Row label="City" value={profile?.city} />
            <Row label="Country" value={profile?.country} />
            <Row label="Member since" value={new Date(profile?.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />
          </div>
        </div>

      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid #f1f5f9' }}>
      <span style={{ fontSize: '14px', color: '#94a3b8' }}>{label}</span>
      <span style={{ fontSize: '14px', color: '#0f172a', fontWeight: 500 }}>{value || '—'}</span>
    </div>
  )
}

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 10px', borderRadius: '20px', background: `${color}20`, color }}>
      {label}
    </span>
  )
}