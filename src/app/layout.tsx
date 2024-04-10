import { Space_Mono } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ThreatSleuth',
  applicationName: 'ThreatSleuth',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: 'icon2.ico',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: 'icon.ico',
      media: '(prefers-color-scheme: light)',
    },
  ],
}

const space_mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: '700',
})
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()
  return (
    <html lang="en" className={space_mono.variable}>
      <SessionProvider session={session}>
        <body>{children}</body>
      </SessionProvider>
    </html>
  )
}
