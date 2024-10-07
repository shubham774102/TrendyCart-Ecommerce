import React from 'react'
import CANCELIMAGE from '../assest/cancel.gif'
import { Link } from 'react-router-dom'


const Cancel = () => {
  return (
    <div className=' w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-7 rounded'>
      <img
        src={CANCELIMAGE}
        width={160}
        height={160}
        alt=''

      />
      <p className='text-red-600 font-bold text-xl mt-3'>Payment Failed</p>
      <Link to={"/cart"} className='p-2 mt-5 px-3 border-2 border-red-600 rounded-full font-semibold text-red-600 hover:bg-red-600 hover:text-white '>Go To Cart</Link>
    </div>
  )
}

export default Cancel