'use client'
import React from 'react'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { FaGithub } from 'react-icons/fa'
import { LuMail } from 'react-icons/lu'
import { FaLinkedin } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/components/ui/use-toast'
import { Button } from './ui/button'

const About = () => {
  const reportRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const reportHandler = () => {
    if (reportRef.current) {
      reportRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const contactHandler = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="py-10">
      <div className="pr-10 mr-10">
        <span className="flex text-4xl py-5 pr-20 mr-30 -ml-30 mt-3">
          What is Threat<h2 className="text-green-600">Sleuth?</h2>
        </span>
      </div>
      <div className="py-6 px-2">
        <h3 className="text-xl">
          ThreatSlueth is an AI powered solution to detect malware or phishing
          URLs, spam emails and messages on the go!
        </h3>
        <h1 className="text-2xl pt-5">How does it work?</h1>
        <h3 className="text-xl pt-5">
          It employs ML models trained on large amount of data to analyze and
          identify the URLs, emails and messages for features indication spam or
          malacious intent. {'\n'}
          Through natural language processing and pattern recognition, it
          identifies suspicious patterns or characteristics indicative of
          phishing attempts or spam. This analysis includes examining the
          various features of content to identify signs of spam or phishing.{' '}
        </h3>
        <h1 className="text-2xl pt-5">
          What types of features and characteristics does ThreatSleuth analyze
          to identify potential phishing URLs?
        </h1>
        <div className="flex">
          <h3 className="text-xl pt-5">
            The data from the
            <Link
              href="https://www.kaggle.com/datasets/siddharthkumar25/malicious-and-benign-urls"
              className="text-green-600 px-2"
            >
              dataset
            </Link>
            is filtered and categorzied based on several features which include
            the length of url, the tld(top level domain), length of tld, lexical
            features such as frequency of letters and numbers, special
            characters and some vital features like presence of ip address, use
            of url shortening service and more, the categorized dataset is then
            trained on various classifiers of which we picked the one with the
            best overall accuracy
          </h3>
        </div>
        <h1 className="text-2xl pt-5">
          What is the typical response time for ThreatSleuth to identify a
          potential threat after analyzing a URL, email, or message?
        </h1>
        <h3 className="text-xl pt-5">
          ThreatSlueth provides rapid response in real time(as you would have
          just seen above:{')'}) typically in range of milliseconds to few
          seconds The trained compressed ml model coupled with a FastAPI server
          api framework does the magic!
        </h3>
        <h1 className="text-2xl pt-5">
          How accurate is ThreatSleuth in detecting phishing attempts and spam
          emails/messages?
        </h1>
        <div className="flex">
          <h3 className="text-xl pt-5">
            Well the accuracy was excellent on the testing set of the dataset,
            its your turn to test it with some real-world data and analyze. Do
            you find inaccurate results? please report those URLs
            <button
              type="button"
              onClick={reportHandler}
              className=" text-green-600 px-3"
            >
              Here
            </button>
          </h3>
        </div>
        <h1 className="text-2xl pt-5">
          How does ThreatSleuth handle false positives and false negatives in
          its threat detection process?
        </h1>
        <h3 className="text-xl pt-5">
          Predicting false positives and negatives is a common challenge
          prevelant across most of the ML models throughout the world due to
          class imbalance in the datset, here we take a user feedback based
          approach and analyze and re-train the model periodically with the
          provided user data to optimize and refine the model to provide near
          perfect accuracy
        </h3>
        <div className="flex pt-5" ref={reportRef}>
          <h3 className="text-xl pt-5">
            For further queries please do contact
            <button
              type="button"
              onClick={contactHandler}
              className=" text-green-600 px-3"
            >
              Here
            </button>
          </h3>
        </div>
        <div className="py-10">
          <h1 className="text-3xl text-green-600">Contribute:</h1>
          <div className="pr-60 mr-20">
            <div className="py-5 pt-5 pr-30 mr-30">
              <label className="block mb-2 pl-2 text-lg font-medium">
                Report URL
              </label>
              <Input id="reported_url" placeholder="URL" className="max-w-50" />
            </div>
          </div>
          <div className="pt-10 flex">
            <h1 className="text-xl">Find our source code repository</h1>
            <button className="px-2">
              <a href="https://github.com/Aswinr24/ThreatSleuth">
                <FaGithub className="text-green-600 w-7 h-7" />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <section className="bg-white dark:bg-gray-900 col-span-2">
          <div className="py-8 lg:py-16 px-2 max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <form action="#" className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <Button variant="default" className="py-3 px-5 text-sm">
                Send message
              </Button>
            </form>
          </div>
        </section>
        <div className="py-10 pt-10" ref={contactRef}>
          <h1 className="text-2xl mt-20 pl-10">Reach us Out:</h1>
          <div className="flex gap-10 py-5 ml-10">
            <button>
              <a href="mailto:h30raswin@gmail.com">
                <LuMail className="w-7 h-7 text-green-600" />
              </a>
            </button>
            <button>
              <a href="mailto:h30raswin@gmail.com">
                <FaLinkedin className="w-7 h-7 text-green-600" />
              </a>
            </button>
            <button>
              <a href="mailto:h30raswin@gmail.com">
                <FaDiscord className="w-7 h-7 text-green-600" />
              </a>
            </button>
            <button>
              <a href="mailto:h30raswin@gmail.com">
                <FaGithub className="w-7 h-7 text-green-600" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
