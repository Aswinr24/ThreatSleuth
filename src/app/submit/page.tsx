'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
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
import EnterValid from '@/components/Entervalid'

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

  return (
    <main
      className={`${space_mono.className} p-24 px-40 flex-col min-h-screen justify-center items-center`}
    >
      <div className="flex text-2xl px-20">Hello {session?.user?.name}</div>
      <div className="flex-col py-8 px-20 text-xl">
        <h2 className="font-bold py-2">Enter the URL:</h2>
        <Input
          className="border-2 border-green-600"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="flex py-5 px-60 ml-20">
        <Select onValueChange={(value) => setUrltype(value)}>
          <SelectTrigger className="w-[360px] border-2 border-green-600 ">
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
        <Button variant="default" className="ml-20" onClick={handleSubmit}>
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-r-2  border-white"></div>
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </div>
      {result && <Thankyou />}
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
    </main>
  )
}

export default Page
