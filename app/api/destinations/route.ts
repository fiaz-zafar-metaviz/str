import { createClient } from '@/lib/supabase-browser'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = createClient()

  const [groupsRes, statesRes] = await Promise.all([
    supabase
      .from('location_groups')
      .select('id, name, slug, image')
      .eq('status', true)
      .order('order', { ascending: true }),
    supabase
      .from('states')
      .select('name, slug, group_id, image, thumbnail')
      .order('group_id')
      .order('order'),
  ])

  if (groupsRes.error) return NextResponse.json({ error: groupsRes.error.message }, { status: 500 })
  if (statesRes.error) return NextResponse.json({ error: statesRes.error.message }, { status: 500 })

  const grouped = groupsRes.data.map(g => ({
    id: g.id,
    name: g.name,
    slug: g.slug,
    image: g.image || undefined,
    states: (statesRes.data ?? [])
      .filter(s => s.group_id === g.id)
      .map(s => ({
        name: s.name,
        slug: s.slug,
        image: s.image || s.thumbnail || undefined,
      })),
  })).filter(g => g.states.length > 0)

  return NextResponse.json(grouped, {
    headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
  })
}
