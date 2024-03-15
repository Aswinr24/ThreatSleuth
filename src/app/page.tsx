import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import { Space_Mono } from 'next/font/google'

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
