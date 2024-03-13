import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const space_mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: '700',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={space_mono.variable}>
      <body>{children}</body>
    </html>
  )
}
