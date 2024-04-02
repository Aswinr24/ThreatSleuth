'use client'
import Image from 'next/image'
import React from 'react'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import logo from '../app/logo1.png'
import { LuMenu } from 'react-icons/lu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickContribute = () => {
    window.scrollTo({
      top: 1500,
      behavior: 'smooth',
    })
  }
  const handleClickAbout = () => {
    window.scrollTo({
      top: 500,
      behavior: 'smooth',
    })
  }
  const handleClickContact = () => {
    window.scrollTo({
      top: 2000,
      behavior: 'smooth',
    })
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header fixed left-0 w-full top-0 backdrop-filter backdrop-blur-md bg-opacity-50">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 py-5 lg:pl-0 sm:pl-5">
        <div className="max-w-screen-xl flex items-center mx-auto lg:gap-60 sm:gap-40">
          <span className="flex text-2xl font-semibold whitespace-nowrap dark:text-white lg:mr-10 sm:mr-0">
            <Image
              src={logo}
              alt="logo"
              className="h-12 w-14 lg:block sm:hidden hidden"
            />
            <Image
              src={logo}
              alt="logo"
              className="h-8 w-9 ml-2 sm:mt-3 lg:mt-0 sm:block lg:hidden block"
            />
            <h1 className="lg:mt-1 sm:mt-0">Threat</h1>
            <h1 className="text-green-600 lg:mt-1 sm:mt-0">Slueth</h1>
          </span>
          <div className="lg:hidden sm:block block">
            <div>
              <button
                onClick={toggleMenu}
                className="text-green-600 focus:outline-none focus:text-green-800"
              >
                <svg
                  className="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="bg-green-200">
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/contribute">Contribute</a>
                </li>
              </ul>
            </div>
          )}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse pl-5 ml-10">
            <Button
              variant="default"
              onClick={() => handleClickContribute()}
              className="lg:block sm:hidden hidden"
            >
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
                  href="javascript:void(0);"
                  className="block px-2 pl-1 ml-6  text-gray-900 rounded hover:text-green-700"
                  onClick={() => handleClickAbout()}
                >
                  About
                </a>
              </li>
              <li></li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="block pr-4 mr-2 text-gray-900 rounded hover:text-green-700"
                  onClick={() => handleClickContact()}
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
