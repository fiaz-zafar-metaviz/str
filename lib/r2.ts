import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'
import sharp from 'sharp'

const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
  },
})

const CONVERTIBLE = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/tiff', 'image/gif'])

export async function uploadToR2(file: Buffer, key: string, contentType: string) {
  let body = file
  let ct = contentType
  let finalKey = key

  if (CONVERTIBLE.has(contentType)) {
    body = await sharp(file).avif({ quality: 75 }).toBuffer()
    ct = 'image/avif'
    finalKey = key.replace(/\.[^.]+$/, '.avif')
  }

  await r2.send(new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME!,
    Key: finalKey,
    Body: body,
    ContentType: ct,
  }))
  return `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/${finalKey}`
}

export async function deleteFromR2(key: string) {
  await r2.send(new DeleteObjectCommand({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME!,
    Key: key,
  }))
}
