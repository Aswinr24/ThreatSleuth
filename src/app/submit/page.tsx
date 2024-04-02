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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const space_mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: '700',
})

const page = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [url, setUrl] = useState('')
  const [urltype, setUrltype] = useState<string>('')
  const input = {
    url: url,
    type: urltype,
  }
  const handleSubmit = async () => {
    try {
      let res = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(input),
      })
      let data = await res.json()
      console.log('User input saved successfully')
      console.log(data)
      router.push('/')
      console.log(urltype)
    } catch (error) {
      console.error('Error saving user input:', error)
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
          value={url}
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
          Submit
        </Button>
      </div>
    </main>
  )
}

export default page
