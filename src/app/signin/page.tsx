'use client'
import { redirect } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Space_Mono } from 'next/font/google'
import { FaGithub } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const space_mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: '700',
})

function AuthButton() {
  const { data: session } = useSession()
  if (session) {
    redirect('/submit')
  }
  return (
    <main
      className={`${space_mono.className} p-24 lg:pl-40 sm:pl-0 pl-0 flex-col max-w-screen min-h-screen justify-center items-center`}
    >
      <div className="lg:px-60 px-0 sm:px-0 ml-7 text-xl w-full">
        <h2 className="lg:pl-20 sm:pl-0 pl-0 lg:ml-10 ml-6 sm:ml-6 lg:pt-10 pt-0 sm:pt-0 w-full text-center lg:text-left sm:text-center">
          Just A verification, don&apos;t fret
        </h2>
      </div>
      <br />
      <div className="py-10 lg:px-60 px-0 sm:px-0 text-xl">
        <div className="lg:pl-20 pl-0 sm:pl-0 pb-8 pt-5 lg:ml-20 ml-6 sm:ml-6">
          <Button
            onClick={() => signIn('google')}
            className=" ml-10 border-2 border-green-600 px-7 py-5"
            variant="outline"
          >
            <FaGoogle className=" w-6 h-6 text-green-600" />
            <h2 className="pl-2 pr-1">Continue with Google</h2>
          </Button>
        </div>
        <div className="lg:pl-20 pl-0 sm:pl-0 pb-8 lg:ml-20 ml-6 sm:ml-6">
          <Button
            onClick={() => signIn('github')}
            variant="outline"
            className=" ml-10 border-2 border-green-600 px-7 py-5"
          >
            <FaGithub className="h-6 w-6 text-green-600" />
            <h2 className="pl-2 pr-1">Continue with Github</h2>
          </Button>
        </div>
        <div className="lg:pl-20 pl-0 sm:pl-0 pb-8 lg:ml-20 ml-6 sm:ml-6">
          <Button
            onClick={() => signIn('discord')}
            variant="outline"
            className=" ml-10 border-2 border-green-600 px-6 py-5"
          >
            <FaDiscord className="h-6 w-6 text-green-600" />
            <h2 className="pl-2">Continue with Discord</h2>
          </Button>
        </div>
        <div className="lg:pl-20 pl-0 sm:pl-0 pb-8 lg:ml-20 ml-6 sm:ml-6">
          <Button
            onClick={() => signIn('twitter')}
            variant="outline"
            className=" ml-10 border-2 border-green-600 px-7 py-5"
          >
            <FaXTwitter className="ml-5 h-5 w-5 text-green-600" />
            <h2 className="pl-2 pr-6">Continue with X</h2>
          </Button>
        </div>
      </div>
    </main>
  )
}

export default function Navmenu() {
  return (
    <div>
      <AuthButton />
    </div>
  )
}
