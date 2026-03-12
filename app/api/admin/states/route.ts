import { createAdminClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

// GET all states
export async function GET() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('states')
    .select('*')
    .order('group_id')
    .order('order')

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

// POST new state
export async function POST(req: NextRequest) {
  const supabase = createAdminClient()
  const body = await req.json()

  const slug = body.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  const { data, error } = await supabase
    .from('states')
    .insert({ ...body, slug })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
