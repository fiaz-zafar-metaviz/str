'use client'

import { createClient } from '../../lib/supabase-browser'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const supabase = createClient()
  const router = useRouter()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <button
      onClick={handleLogout}
      style={{ background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', borderRadius: '8px', padding: '8px 16px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
    >
      Log Out
    </button>
  )
}