import { uploadToR2 } from '@/lib/r2'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  const directory = formData.get('directory') as string | null
  const customName = formData.get('name') as string | null

  if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

  const dir = directory || process.env.STATES_DIRECTORY || 'images/states'
  const ext = file.name.split('.').pop() || 'jpg'

  // Use custom name if provided, otherwise generate one
  let filename: string
  if (customName) {
    // Sanitize: lowercase, replace spaces with hyphens, remove special chars
    const sanitized = customName.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-_]/g, '')
    filename = `${sanitized}.${ext}`
  } else {
    filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
  }

  const key = `${dir}/${filename}`

  const buffer = Buffer.from(await file.arrayBuffer())
  const url = await uploadToR2(buffer, key, file.type)

  return NextResponse.json({ url, key, filename })
}
