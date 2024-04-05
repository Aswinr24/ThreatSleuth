'use client'
import { useState } from 'react'

const EnterValid = ({ url }: { url: string }) => {
  const [empty, setEmpty] = useState(false)
  if (url.trim() === '' || !url) setEmpty(true)
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-red-100 p-8 rounded-md shadow-lg text-center px-10">
        <div className="mb-4 text-black">
          Please Enter Valid details!{' '}
          {empty ? (
            <h2 className="text-red-500">url field is empty!</h2>
          ) : (
            <h2 className="text-red-500">Not a Valid url!</h2>
          )}
        </div>
      </div>
    </div>
  )
}

export default EnterValid
