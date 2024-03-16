import React from 'react'
import brand from '@/love/dFunction/gBrand';


const Loader = ({ text }) => {
  return (
    <div className="flex justify-center items-center h-96 text-gray-400 bg-gray-900 body-font">          
      {text || "Loading..."}
    </div>
  )
}

export default Loader