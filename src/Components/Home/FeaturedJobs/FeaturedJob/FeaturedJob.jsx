import React from 'react'
import { CiDollar, CiLocationOn } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const FeaturedJob = ({job}) => {
  const {id, job_title, company_logo, company_name, job_type, working_hours, location, salary_range} = job
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className='bg-gray-200 p-5 h-40'>
        <img className='w-40'
          src={company_logo}
          alt={`${company_name}logo`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className='flex justify-start items-center gap-4 mt-2'>
          <button className='px-5 py-2 font-bold text-[#7E90FE] rounded border border-[#7E90FE]'>{job_type}</button>
          <button className='px-5 py-2 font-bold text-[#7E90FE] rounded border border-[#7E90FE]'>{working_hours}</button>
        </div>
        <div className='flex justify-start gap-4 mt-2'>
          <span className='flex justify-start items-center font-semibold'><CiLocationOn className='font-bold mr-1 text-xl'></CiLocationOn> {location}</span>
          <span className='flex justify-start items-center font-semibold'> <CiDollar className='font-bold mr-1 text-xl'></CiDollar> {salary_range}</span>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/job/${id}`} className='bg-gradient-to-r from-sky-500 to-purple-500 lg:px-3 lg:py-2 md:px-3 md:py-2 sm:px-2 sm:py-2 max-sm:px-2 max-sm:py-[5px] rounded-md text-white font-semibold lg:text-[16px] md:text-[16px] sm:text-[14px] max-sm:text-[14px]'>View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedJob