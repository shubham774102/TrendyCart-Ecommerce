import React from 'react'
import SUCCESSIMAGE from '../assest/success.gif'
import { Link } from 'react-router-dom'


const Success = () => {
  return (
    <div className=' w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-7 rounded'>
      <img
        src={SUCCESSIMAGE}
        width={250}
        height={250}
        alt=''

      />
      <p className='text-green-700 font-bold text-xl -mt-8'>Payment Successfully</p>
      <Link to={"/order"} className='p-2 mt-5 px-3 border-2 border-green-600 rounded-full font-semibold text-green-600 hover:bg-green-600 hover:text-white '>See Order</Link>
    </div>
  )
}

export default Success