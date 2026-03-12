import type { Metadata } from 'next'
import './globals.css'
import { siteConfig, bucketUrl } from '@/lib/site-config'

const faviconUrl = bucketUrl ? `${bucketUrl}/public/logo/favicon.avif` : '/favicon.avif'
const logoUrl = bucketUrl ? `${bucketUrl}/public/logo/logo.avif` : '/logo.avif'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: faviconUrl,
    apple: logoUrl,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: logoUrl, width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [logoUrl],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
