'use client'
import React from 'react'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { useState, useRef } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import axios from 'axios'

const Main = () => {
  const [url, setUrl] = useState('')
  const [msg, setMsg] = useState('')
  const [email, setEmail] = useState('')
  const [showDiv, setShowDiv] = useState(false)
  const hiddenDivRef1 = useRef<HTMLDivElement>(null)
  const hiddenDivRef2 = useRef<HTMLDivElement>(null)
  const hiddenDivRef3 = useRef<HTMLDivElement>(null)
  const hiddenDivRef4 = useRef<HTMLDivElement>(null)
  const hiddenDivRef5 = useRef<HTMLDivElement>(null)
  const hiddenDivRef6 = useRef<HTMLDivElement>(null)

  const send_url = async () => {
    const apiUrl = 'http://localhost:8000/predict/url'
    if (url != null) {
      try {
        if (hiddenDivRef1.current) {
          hiddenDivRef1.current.style.display = 'none'
        }
        if (hiddenDivRef2.current) {
          hiddenDivRef2.current.style.display = 'none'
        }
        if (hiddenDivRef3.current) {
          hiddenDivRef3.current.style.display = 'none'
        }
        if (hiddenDivRef4.current) {
          hiddenDivRef4.current.style.display = 'none'
        }
        if (hiddenDivRef5.current) {
          hiddenDivRef5.current.style.display = 'none'
        }
        if (hiddenDivRef6.current) {
          hiddenDivRef6.current.style.display = 'none'
        }

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: url }),
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        // Assuming the response is JSON
        const data = await response.json()
        if (data['prediction'] == 1) {
          if (hiddenDivRef1.current) {
            hiddenDivRef1.current.style.display = 'block'
          }
        } else if (data['prediction'] == 0) {
          if (hiddenDivRef2.current) {
            hiddenDivRef2.current.style.display = 'block'
          }
        }
      } catch (error) {
        console.error('error occured', error)
      }
    } else {
      return
    }
  }

  const send_email = async () => {
    const apiUrl = 'http://localhost:8000/predict/email'
    if (email != null) {
      try {
        if (hiddenDivRef1.current) {
          hiddenDivRef1.current.style.display = 'none'
        }
        if (hiddenDivRef2.current) {
          hiddenDivRef2.current.style.display = 'none'
        }
        if (hiddenDivRef3.current) {
          hiddenDivRef3.current.style.display = 'none'
        }
        if (hiddenDivRef4.current) {
          hiddenDivRef4.current.style.display = 'none'
        }
        if (hiddenDivRef5.current) {
          hiddenDivRef5.current.style.display = 'none'
        }
        if (hiddenDivRef6.current) {
          hiddenDivRef6.current.style.display = 'none'
        }

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        // Assuming the response is JSON
        const data = await response.json()
        if (data['prediction'] == 1) {
          if (hiddenDivRef3.current) {
            hiddenDivRef3.current.style.display = 'block'
          }
        } else if (data['prediction'] == 0) {
          if (hiddenDivRef4.current) {
            hiddenDivRef4.current.style.display = 'block'
          }
        }
      } catch (error) {
        console.error('error occured', error)
      }
    } else {
      return
    }
  }

  const send_msg = async () => {
    const apiUrl = 'http://localhost:8000/predict/msg'
    if (msg != null) {
      try {
        if (hiddenDivRef1.current) {
          hiddenDivRef1.current.style.display = 'none'
        }
        if (hiddenDivRef2.current) {
          hiddenDivRef2.current.style.display = 'none'
        }
        if (hiddenDivRef3.current) {
          hiddenDivRef3.current.style.display = 'none'
        }
        if (hiddenDivRef4.current) {
          hiddenDivRef4.current.style.display = 'none'
        }
        if (hiddenDivRef5.current) {
          hiddenDivRef5.current.style.display = 'none'
        }
        if (hiddenDivRef6.current) {
          hiddenDivRef6.current.style.display = 'none'
        }

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ msg: msg }),
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        // Assuming the response is JSON
        const data = await response.json()
        if (data['prediction'] == 1) {
          if (hiddenDivRef5.current) {
            hiddenDivRef5.current.style.display = 'block'
          }
        } else if (data['prediction'] == 0) {
          if (hiddenDivRef6.current) {
            hiddenDivRef6.current.style.display = 'block'
          }
        }
      } catch (error) {
        console.error('error occured', error)
      }
    } else {
      return
    }
  }

  return (
    <div className="p-10 ml-10">
      <span className="text-2xl flex gap-2 pt-5 px-12 pl-10 ml-20 -mr-10 py-5">
        <h1 className="text-4xl text-green-600 mb-10 pl-6 ml-2">AI </h1>
        <h2 className="pt-1 pl-2"> powered phishing / malware detection</h2>
      </span>
      <div className="text-xl px-10 pr-20 -mt-5">
        <h3 className="text-gray-700 mr-20 pl-6">
          Detect malware or phishing URLs and e-mail/messages on the go!
        </h3>
      </div>

      <div className="px-10 mr-20 py-10">
        <Tabs defaultValue="url" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-15 gap-2 p-2">
            <TabsTrigger value="url" className="text-green-700 text-lg">
              Scan URL
            </TabsTrigger>
            <TabsTrigger value="email" className="text-green-700 text-lg">
              Scan e-mail
            </TabsTrigger>
            <TabsTrigger value="msg" className="text-green-700 text-lg">
              Scan message
            </TabsTrigger>
          </TabsList>
          <TabsContent value="url">
            <Card>
              <CardHeader>
                <CardDescription>
                  <div className="px-40 pl-40 ml-20">
                    scan for malacious/phishing URL
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Input
                    id="name"
                    placeholder="URL"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <div className="px-40 pl-60 ml-20">
                  <Button className="px-10" onClick={send_url}>
                    Scan
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardDescription>
                  <div className="px-40 pl-40 ml-20">
                    scan for malacious/phishing email
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Textarea
                    id="current"
                    placeholder="email content"
                    className="h-20"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <div className="px-40 pl-60 ml-20">
                  <Button className="px-10" onClick={send_email}>
                    Scan
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="msg">
            <Card>
              <CardHeader>
                <CardDescription>
                  <div className="px-40 pl-50 ml-20">
                    scan for spam messages
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Textarea
                    id="current"
                    placeholder="message content"
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <div className="px-40 pl-60 ml-20">
                  <Button className="px-10" onClick={send_msg}>
                    Scan
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div
        className="px-20 pl-10 pr-30 mr-10 hidden"
        id="resultMurl"
        ref={hiddenDivRef1}
      >
        <div className="w-full rounded-lg bg-red-100 shadow-md duration-300 hover:scale-105 hover:shadow-xl pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-8 h-16 w-16 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
            stay AWAY! not a safe URL
          </h1>
          <div className="space-x-4 bg-gray-100 text-center">
            <p className="my-4 text-center text-sm text-red-500 py-2 ">
              Suspected phishing/malware URL
            </p>
          </div>
        </div>
      </div>

      <div
        className="px-20 pl-10 pr-30 mr-10 hidden"
        id="resultSurl"
        ref={hiddenDivRef2}
      >
        <div className="w-full rounded-lg bg-green-100 shadow-md duration-300 hover:scale-105 hover:shadow-xl pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-8 h-16 w-16 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
            don't fret Its a SAFE URL!
          </h1>
          <p className="my-4 text-center text-sm text-gray-500 "></p>
          <div className="space-x-4 py-4 text-center"></div>
        </div>
      </div>

      <div
        className="px-20 pl-10 pr-30 mr-10 hidden"
        id="resultSurl"
        ref={hiddenDivRef3}
      >
        <div className="w-full rounded-lg bg-red-100 shadow-md duration-300 hover:scale-105 hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-8 h-16 w-16 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
            stay ALERT! seems to be a spam or phishing e-mail
          </h1>
          <p className="my-4 text-center text-sm text-red-500 py-2 ">
            Suspected phishing/spam e-amil
          </p>
          <div className="space-x-4 bg-gray-100 py-4 text-center"></div>
        </div>
      </div>

      <div
        className="px-20 pl-10 pr-30 mr-10 hidden"
        id="resultSurl"
        ref={hiddenDivRef4}
      >
        <div className="w-full rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-8 h-16 w-16 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
            don't fret It doesn't seem to be a spam or phishing e-mail
          </h1>
          <p className="my-4 text-center text-sm text-gray-500"></p>
          <div className="space-x-4 bg-gray-100 py-4 text-center"></div>
        </div>
      </div>

      <div
        className="px-20 pl-10 pr-30 mr-10 hidden"
        id="resultSurl"
        ref={hiddenDivRef5}
      >
        <div className="w-full rounded-lg bg-red-100 shadow-md duration-300 hover:scale-105 hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-8 h-16 w-16 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
            stay ALERT! seems to be a spam/phishing message
          </h1>
          <p className="my-4 text-center text-sm text-red-500 py-2 ">
            Suspected spam/phishing message
          </p>
          <div className="space-x-4 bg-gray-100 py-4 text-center"></div>
        </div>
      </div>

      <div
        className="px-20 pl-10 pr-30 mr-10 hidden"
        id="resultSurl"
        ref={hiddenDivRef6}
      >
        <div className="w-full rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-8 h-16 w-16 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
            don't fret It doesn't seem to be a spam message
          </h1>
          <p className="my-4 text-center text-sm text-gray-500"></p>
          <div className="space-x-4 bg-gray-100 py-4 text-center"></div>
        </div>
      </div>
    </div>
  )
}

export default Main