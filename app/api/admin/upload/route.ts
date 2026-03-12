import { uploadToR2 } from '@/lib/r2'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  const directory = formData.get('directory') as string | null

  if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

  const dir = directory || process.env.STATES_DIRECTORY || 'images/states'
  const ext = file.name.split('.').pop() || 'jpg'
  const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
  const key = `${dir}/${name}`

  const buffer = Buffer.from(await file.arrayBuffer())
  const url = await uploadToR2(buffer, key, file.type)

  return NextResponse.json({ url, key })
}
