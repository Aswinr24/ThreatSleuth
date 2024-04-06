'use client'
import Image from 'next/image'
import React from 'react'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import logo from '../app/logo1.png'
import { LuMenu } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { Turn as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickContribute = () => {
    window.scrollTo({
      top: 1500,
      behavior: 'smooth',
    })
    setIsOpen(false)
  }
  const handleClickAbout = () => {
    window.scrollTo({
      top: 500,
      behavior: 'smooth',
    })
    setIsOpen(false)
  }
  const handleClickContact = () => {
    window.scrollTo({
      top: 2000,
      behavior: 'smooth',
    })
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header fixed left-0 w-full top-0 backdrop-filter backdrop-blur-md bg-opacity-50">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 py-5 lg:pl-0 sm:pl-5">
        <div className="max-w-screen-xl flex items-center mx-auto lg:gap-60 sm:gap-40">
          <span className="flex lg:text-2xl sm:text-4xl text-4xl font-semibold whitespace-nowrap dark:text-white lg:mr-10 sm:mr-0">
            <Image
              src={logo}
              alt="logo"
              className="h-12 w-14 lg:block sm:hidden hidden"
            />
            <Image
              src={logo}
              alt="logo"
              className="h-12 w-12 ml-10 mt-1 sm:block lg:hidden block"
            />
            <h1 className="mt-1">Threat</h1>
            <h1 className="text-green-600 mt-1">Slueth</h1>
          </span>
          <div className="lg:hidden md:hidden sm:block block">
            <div className="menu absolute top-0 right-0 h-full bg-white z-50">
              <div
                className={`menu-icon absolute top-5 right-7 ${
                  isOpen ? 'text-green-600' : 'text-black'
                }`}
              >
                <Hamburger
                  toggled={isOpen}
                  size={32}
                  toggle={setIsOpen}
                  rounded
                />
              </div>

              {isOpen && (
                <motion.div
                  className="menu-items text-center absolute text-3xl top-14 right-0 p-4 bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ul className="py-4 mx-10">
                    <li className="mb-4">
                      <a href="#" className="text-black">
                        Home
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-black"
                        onClick={() => handleClickAbout()}
                      >
                        About
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-black"
                        onClick={() => handleClickContact()}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <Button
                    className="text-white text-xl py-6 px-6 mb-6"
                    variant="default"
                    onClick={() => handleClickContribute()}
                  >
                    Contribute
                  </Button>
                </motion.div>
              )}
            </div>
          </div>

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
