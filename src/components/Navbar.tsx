'use client'
import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import logo from '../app/logo1.png'

const Navbar = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const handleScroll = (scrollValue: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollValue // Set custom scroll value
    }
  }

  return (
    <header className="header fixed left-0 w-full top-0 backdrop-filter backdrop-blur-md bg-opacity-50">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 py-5">
        <div className="max-w-screen-xl flex items-center mx-auto gap-60">
          <span className="flex text-2xl font-semibold whitespace-nowrap dark:text-white mr-10">
            <Image src={logo} alt="logo" className="h-12 w-14" />
            <h1 className="mt-1">Threat</h1>
            <h1 className="text-green-600 mt-1">Slueth</h1>
          </span>
          <div
            className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse pl-5 ml-10"
            ref={scrollRef}
          >
            <Button variant="default" onClick={() => handleScroll(1000)}>
              Contribute
            </Button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 pr-4"
            id="navbar-cta"
          >
            <ul className="flex flex-col gap-2 font-medium py-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block pr-3 mr-4 text-green-700">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-2 pl-1 ml-6  text-gray-900 rounded hover:text-green-700"
                >
                  About
                </a>
              </li>
              <li></li>
              <li>
                <a
                  href="#"
                  className="block pr-4 mr-2 text-gray-900 rounded hover:text-green-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
