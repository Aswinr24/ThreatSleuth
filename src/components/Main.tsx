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
import Link from 'next/link'

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
  const contentRef = useRef<HTMLDivElement>(null)

  const send_url = async () => {
    const apiUrl = 'https://aswinr24-threatslueth-api.hf.space/predict/url'
    if (url.trim()) {
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
            window.scrollTo({
              top: 200,
              behavior: 'smooth',
            })
          }
        } else if (data['prediction'] == 0) {
          if (hiddenDivRef2.current) {
            hiddenDivRef2.current.style.display = 'block'
            window.scrollTo({
              top: 200,
              behavior: 'smooth',
            })
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
    const apiUrl = 'https://aswinr24-threatslueth-api.hf.space/predict/email'
    if (email.trim()) {
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

        const data = await response.json()
        if (data['prediction'] == 1) {
          if (hiddenDivRef3.current) {
            hiddenDivRef3.current.style.display = 'block'
            scrollToContent()
          }
        } else if (data['prediction'] == 0) {
          if (hiddenDivRef4.current) {
            hiddenDivRef4.current.style.display = 'block'
            scrollToContent()
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
    const apiUrl = 'https://aswinr24-threatslueth-api.hf.space/predict/msg'
    if (msg.trim()) {
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
            scrollToContent()
          }
        } else if (data['prediction'] == 0) {
          if (hiddenDivRef6.current) {
            hiddenDivRef6.current.style.display = 'block'
            scrollToContent()
          }
        }
      } catch (error) {
        console.error('error occured', error)
      }
    } else {
      return
    }
  }

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="p-10 ml-10 lg:max-w-full max-w-screen">
        <span className="text-2xl lg:flex gap-2 pt-5 py-12 mb-3 text-center justify-center items-center mr-8 sm:hidden hidden">
          <h1 className="text-4xl flex text-green-600">AI </h1>
          <h2 className="pt-1 pl-2"> powered phishing / malware detection</h2>
        </span>
        <div className="lg:hidden sm:block block">
          <span className="text-2xl sm:flex text-center justify-center items-center lg:hidden flex pl-20">
            <h1 className="text-4xl pl-32 ml-24 text-green-600 text-center">
              AI{' '}
            </h1>
            <h2 className="pl-0 mt-8 text-center pr-6">
              {' '}
              powered phishing / malware detection
            </h2>
          </span>
          <div className="text-xl py-10 pl-36 sm:block lg:hidden block text-center">
            <h3 className="text-gray-700 pl-20 ml-10">
              Detect malware or phishing URLs, e-mails and messages on the go!
            </h3>
          </div>
        </div>
        <div className="text-xl px-10 pr-20 -mt-5 lg:block sm:hidden hidden">
          <h3 className="text-gray-700 mr-20 pl-20 ml-20">
            Detect malware or phishing URLs and e-mail/messages on the go!
          </h3>
        </div>

        <div
          className="px-10 mr-20 pt-10 pb-5 lg:block sm:hidden hidden"
          ref={contentRef}
        >
          <Tabs defaultValue="url" className="w-full px-10">
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
                  <CardDescription className="px-20 pl-40 ml-10">
                    <div className="pl-10 text-lg">
                      scan for malacious or phishing URL
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
                <CardFooter className="px-20 pl-40 ml-20">
                  <div className="pl-20 ml-20">
                    <Button className="px-10 ml-4" onClick={send_url}>
                      Scan
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardDescription className="px-20 pl-40 ml-10">
                    <div className="pl-10 text-lg">
                      scan to identify phishing or spam e-mail
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
                <CardFooter className="px-20 pl-40 ml-20">
                  <div className="pl-20 ml-20">
                    <Button className="px-10 ml-4" onClick={send_email}>
                      Scan
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="msg">
              <Card>
                <CardHeader>
                  <CardDescription className="px-20 pl-40 ml-10">
                    <div className="pl-10 ml-10 text-lg">
                      scan to detect spam messages
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
                <CardFooter className="px-20 pl-40 ml-20">
                  <div className="pl-20 ml-20">
                    <Button className="px-10 ml-4" onClick={send_msg}>
                      Scan
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div
          className="pl-10 ml-8 pt-5 pb-5 sm:block lg:hidden block"
          ref={contentRef}
        >
          <Tabs defaultValue="url" className="w-full px-10 ml-24">
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
                  <CardDescription className="px-10 pl-12">
                    <div className="pl-12 text-lg">
                      scan for malacious or phishing URL
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
                <CardFooter className="px-20 pl-40 mr-20">
                  <div className="pl-20">
                    <Button className="px-10 ml-4" onClick={send_url}>
                      Scan
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardDescription className="px-10">
                    <div className="pl-6 text-lg">
                      scan to identify phishing or spam e-mail
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
                <CardFooter className="px-20 pl-40 mr-20">
                  <div className="pl-20">
                    <Button className="px-10 ml-4" onClick={send_email}>
                      Scan
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="msg">
              <Card>
                <CardHeader>
                  <CardDescription className="px-10 pl-12">
                    <div className="pl-12 ml-10 text-lg">
                      scan to detect spam messages
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
                <CardFooter className="px-20 pl-40 mr-20">
                  <div className="pl-20">
                    <Button className="px-10 ml-4" onClick={send_msg}>
                      Scan
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div
          className="lg:px-10 px-0 lg:pl-10 pl-40 lg:ml-0 ml-16 lg:mr-20 sm:-mr-10 -mr-10 hidden"
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
              don`&apos;t fret Its a SAFE URL!
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
              stay ALERT! seems to be a spam or phishing e-mail
            </h1>
            <div className="space-x-4 bg-gray-100 text-center">
              <p className="my-4 text-center text-sm text-red-500 py-2 ">
                Suspected phishing/spam e-mail
              </p>
            </div>
          </div>
        </div>

        <div
          className="px-20 pl-10 pr-30 mr-10 hidden"
          id="resultSurl"
          ref={hiddenDivRef4}
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
              don`&apos;t fret, It doesn`&apos;t seem to be a spam or phishing
              e-mail!
            </h1>
            <p className="my-4 text-center text-sm text-gray-500 "></p>
            <div className="space-x-4 py-4 text-center"></div>
          </div>
        </div>

        <div
          className="px-20 pl-10 pr-30 mr-10 hidden"
          id="resultSurl"
          ref={hiddenDivRef5}
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
              stay ALERT! seems to be a spam/phishing message
            </h1>
            <div className="space-x-4 bg-gray-100 text-center">
              <p className="my-4 text-center text-sm text-red-500 py-2 ">
                Suspected spam message
              </p>
            </div>
          </div>
        </div>

        <div
          className="px-20 pl-10 pr-30 mr-10 hidden"
          id="resultSurl"
          ref={hiddenDivRef6}
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
              don`&apos;t fret, It doesn`&apos;t seem to be a spam message!
            </h1>
            <p className="my-4 text-center text-sm text-gray-500 "></p>
            <div className="space-x-4 py-4 text-center"></div>
          </div>
        </div>
      </div>
      <div className="pb-2 text-2xl flex">
        Get the browser extension for quick and real time monitoring of the URLs
        you access
        <Link
          href="https://github.com/sanjayh-2022/_ThreatSleuth"
          className=" text-green-600 px-3"
        >
          Here
        </Link>
      </div>
    </>
  )
}

export default Main
