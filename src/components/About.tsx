'use client'
import React from 'react'
import Link from 'next/link'
import { useRef } from 'react'
import { Input } from '@/components/ui/input'

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
          provided use data to optimize and refine the model to provide near
          perfect accuracy
        </h3>
        <div className="flex pt-5">
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
          <h1 className="text-3xl text-green-600" ref={reportRef}>
            Contribute:
          </h1>
          <div className="pr-60 mr-20">
            <div className="py-5 pt-5 pr-30 mr-30">
              <label className="block mb-2 pl-2 text-lg font-medium">
                Report URL
              </label>
              <Input id="reported_url" placeholder="URL" className="max-w-50" />
            </div>
          </div>
          <div className="pt-10">Find our source code repository</div>
        </div>
        <div className="py-10" ref={contactRef}>
          <h1 className="text-2xl">Contact us:</h1>
        </div>
      </div>
    </div>
  )
}

export default About
