import React from 'react'
import banner from '../../../assets/banner.png'

const Banner = () => {
  return (
    <div className='bg-gray-200 flex lg:flex-row md:flex-row sm:flex-col max-sm:flex-col items-center justify-between lg:px-20 md:px-12 sm:px-8 max-sm:px-4'>
      <div className='lg:w-1/2 py-5'>
        <div className=''>
          <h1 className='leading-snug lg:text-[55px] md:text-[35px] sm:text-[30px] max-sm:text-[30px] font-bold mb-3'>One Step Closer To Your <span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500'>Dream Job</span></h1>
          <p className='text-gray-400 mb-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className='bg-gradient-to-r from-sky-500 to-purple-500 lg:px-3 lg:py-2 md:px-3 md:py-2 sm:px-2 sm:py-2 max-sm:px-2 max-sm:py-[5px] rounded-md text-white font-semibold lg:text-[16px] md:text-[16px] sm:text-[14px] max-sm:text-[14px]'>Get Started</button>
        </div>
      </div>
      <div className='lg:w-1/2 flex justify-end'>
        <img className='lg:w-5/6' src={banner} alt="" />
      </div>
    </div>
  )
}

export default Banner