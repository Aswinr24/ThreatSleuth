'use client'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Input } from '@/components/ui/input'
import { Space_Mono } from 'next/font/google'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Thankyou from '@/components/Thankyou'
import { redirect } from 'next/navigation'

const space_mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: '700',
})

const Page = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [invalid, setInvalid] = useState(false)
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [urltype, setUrltype] = useState<string>('')
  const [result, setResult] = useState(false)
  const input = {
    url: url,
    type: urltype,
  }
  const handleSubmit = async () => {
    setIsLoading(true)
    if (
      !url ||
      url.trim() === '' ||
      url.indexOf('.') === -1 ||
      url.length < 5 ||
      urltype === ''
    ) {
      setIsLoading(false)
      setInvalid(true)
      return
    } else {
      try {
        let res = await fetch('/api/submit', {
          method: 'POST',
          body: JSON.stringify(input),
        })
        let data = await res.json()
        console.log('User input saved successfully')
        console.log(data)
        setIsLoading(false)
        setResult(true)
        setTimeout(() => {
          router.push('/')
        }, 3000)
        console.log(urltype)
      } catch (error) {
        setIsLoading(false)
        console.error('Error saving user input:', error)
      }
    }
  }
  const handleCloseInvalidCard = () => {
    setInvalid(false)
  }
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setInvalid(false)
    }
  }
  const handleOut = () => {
    signOut()
    router.push('/signin')
  }
  if (!session) {
    redirect('/signin')
  }

  return (
    <main
      className={`${space_mono.className} p-24 lg:px-40 px-0 sm:px-0 flex-col min-h-screen justify-center items-center`}
    >
      <div className="flex text-2xl lg:px-20 px-4 sm:px-4 lg:ml-0 ml-6 sm:ml-6">
        Hello {session?.user?.name}
      </div>
      <div className="flex-col py-8 lg:px-20 px-4 sm:px-0 lg:ml-0 ml-6 sm:ml-10 text-xl">
        <h2 className="font-bold py-2">Enter the URL:</h2>
        <Input
          className="border-2 border-green-600"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="lg:flex sm:block block lg:py-5 py-2 sm:py-2 lg:px-60 px-0 sm:px-0 lg:ml-20 ml-12 sm:ml-12">
        <Select onValueChange={(value) => setUrltype(value)}>
          <SelectTrigger className="lg:w-[360px] sm:w-[320px] w-[320px] border-2 border-green-600">
            <SelectValue placeholder="Type of URL:" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="malacious" className={space_mono.className}>
                Malacious/Unsafe
              </SelectItem>
              <SelectItem value="safe" className={space_mono.className}>
                Safe
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          variant="default"
          className="lg:ml-20 ml-28 sm:ml-28 lg:mt-0 mt-10 sm:mt-10"
          onClick={handleSubmit}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-r-2 border-white"></div>
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </div>
      {invalid && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center"
          onClick={handleOverlayClick}
        >
          <div className="bg-red-100 p-8 rounded-md shadow-lg text-center px-10">
            <div className="mb-4 text-black">
              Please Enter Valid details!{' '}
              {url === '' ? (
                <h2 className="text-red-500">URL field seems to be empty</h2>
              ) : url.length < 5 || url.indexOf('.') === -1 ? (
                <h2 className="text-red-500">Not a valid URL</h2>
              ) : (
                <></>
              )}
              {urltype === '' ? (
                <h2 className="text-red-500">Select the type of url</h2>
              ) : (
                <></>
              )}
            </div>
            <button
              onClick={handleCloseInvalidCard}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {result && <Thankyou />}
    </main>
  )
}

export default Page
