import { useState } from 'react'
import { Button } from '@/components/ui/button'
import QuerySubmitted from './QuerySubmitted'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [result, setResult] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const input = {
    email: email,
    subject: subject,
    message: message,
  }
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      let res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(input),
      })
      let data = await res.json()
      console.log('User input saved successfully')
      console.log(data)
      setIsLoading(false)
      setResult(true)
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
        setResult(false)
      }, 3000)
      setEmail('')
      setMessage('')
      setSubject('')
      console.log(subject)
    } catch (error) {
      console.error('Error saving user input:', error)
    }
  }

  return (
    <section className="bg-white dark:bg-gray-900 col-span-2">
      <div className="py-8 lg:py-16 px-5 max-w-screen lg:pr-24 lg:mr-8 sm:mr-0 sm:pr-0 mr-0 pr-0 lg:pl-0 sm:pl-32 pl-36 lg:ml-0 sm:ml-36 ml-36">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <Button
            variant="default"
            className="py-3 px-5 text-sm"
            onClick={(e) => handleSubmit(e)}
          >
            {isLoading ? (
              <div className="animate-spin rounded-full mx-10 h-6 w-6 border-t-2 border-b-2 border-r-2 border-white"></div>
            ) : (
              <span>Send message</span>
            )}
          </Button>
        </form>
      </div>
      {result && <QuerySubmitted />}
    </section>
  )
}

export default Contact
