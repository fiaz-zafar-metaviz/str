import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../context/ThemeContext'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'STR Wedding',
  description: 'Short Term Rental Wedding Platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={geist.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
