const Thankyou = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-lg text-center px-10">
        <div className="mb-4">Thank you for your Contribution!</div>
        <div className="px-10 pl-10 ml-2 pt-3">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-r-2  border-green-600 ml-20"></div>
        </div>
      </div>
    </div>
  )
}

export default Thankyou
