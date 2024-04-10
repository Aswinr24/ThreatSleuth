import React from 'react'

const QuerySubmitted = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-lg text-center lg:px-20 px-14 sm:px-14">
        <div className="mb-4 text-xl">Query Submitted!</div>
        <div className="px-10 pl-4 ml-4 pt-2">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-r-2  border-green-600 ml-12"></div>
        </div>
      </div>
    </div>
  )
}

export default QuerySubmitted
