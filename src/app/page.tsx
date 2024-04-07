import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import { Space_Mono } from 'next/font/google'
import Head from 'next/head'
import { Metadata } from 'next'
import type { Viewport } from 'next'

export const metadata: Metadata = {
  title: 'ThreatSleuth',
  applicationName: 'ThreatSleuth',
}

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
}

const space_mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: '700',
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-24">
      <div className={space_mono.className}>
        <Navbar />
        <Main />
        <About />
      </div>
    </main>
  )
}
