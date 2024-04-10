'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { LuMail } from 'react-icons/lu'
import { FaLinkedin } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import Contact from './Contact'

const About = () => {
  const router = useRouter()
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

  const handleSignInClick = () => {
    router.push('/signin')
  }

  return (
    <div className="py-10">
      <div className="lg:pr-10 lg:mr-20 pr-0 mr-0 lg:ml-0 lg:pl-0 sm:ml-20 ml-20 sm:pl-20 pl-48 text-center">
        <span className="flex lg:text-4xl sm:text-3xl text-3xl py-5 lg:pr-20 sm:pr-0 pr-0 lg:pl-0 sm:pl-4 pl-8 mt-3">
          What is Threat<h2 className="text-green-600">Sleuth?</h2>
        </span>
      </div>
      <div className="py-6 px-2 lg:pl-0 pl-48 sm:pl-48 lg:ml-0 ml-28 sm:ml-28">
        <h3 className="text-xl">
          ThreatSlueth is an AI powered solution to detect malware or phishing
          URLs, spam emails and messages on the go!
        </h3>
        <h1 className="text-2xl pt-5">How does it work?</h1>
        <h3 className="text-xl pt-5 pl-2">
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
        <div className="flex pl-2">
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
        <h3 className="text-xl pt-5 pl-2">
          ThreatSlueth provides rapid response in real time(as you would have
          just seen above:{')'}) typically in range of milliseconds to few
          seconds The trained compressed ml model coupled with a FastAPI server
          api framework does the magic!
        </h3>
        <h1 className="text-2xl pt-5">
          How accurate is ThreatSleuth in detecting phishing attempts and spam
          emails/messages?
        </h1>
        <div className="flex pl-2">
          <h3 className="text-xl pt-5 ">
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
        <h3 className="text-xl pt-5 pl-2">
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
              Us
            </button>
          </h3>
        </div>
        <div className="pt-10 pb-5">
          <h1 className="text-3xl text-green-600">Contribute:</h1>
          <div className="pr-60 mr-20">
            <div className="py-5 pt-7 pl-4">
              <Button
                variant="outline"
                className="text-lg font-medium border-green-600 border-b-2 hover:border-b-4"
                onClick={handleSignInClick}
              >
                Report URL
              </Button>
            </div>
          </div>
          <div className="pt-3 flex">
            <h1 className="text-xl pl-4">Find our source code repository</h1>
            <button className="px-2">
              <a href="https://github.com/Aswinr24/ThreatSleuth">
                <FaGithub className="text-green-600 w-8 h-8" />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 sm:block block lg:ml-0 ml-4 sm:ml-4">
        <Contact />
        <div className="py-10 pt-10" ref={contactRef}>
          <h1 className="text-2xl lg:mt-20 mt-0 sm:mt-0 lg:pl-10 pl-48 sm:pl-48 lg:ml-0 sm:ml-28 ml-28">
            Reach us Out:
          </h1>
          <div className="flex gap-10 py-5 lg:ml-10 sm:ml-48 ml-48 lg:pl-0 sm:pl-20 pl-28">
            <button>
              <a href="mailto:h30raswin@gmail.com">
                <LuMail className="w-8 h-8 text-green-600" />
              </a>
            </button>
            <button>
              <a href="javascript:void(0);">
                <FaLinkedin className="w-8 h-8 text-green-600" />
              </a>
            </button>
            <button>
              <a href="javascript:void(0);">
                <FaDiscord className="w-8 h-8 text-green-600" />
              </a>
            </button>
            <button>
              <a href="https://github.com/Aswinr24/ThreatSleuth">
                <FaGithub className="w-8 h-8 text-green-600" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
