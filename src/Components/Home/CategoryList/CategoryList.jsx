import { useEffect, useState } from 'react'

const CategoryList = () => {
  const [jobCategory, setJobCategory] = useState([]);
  useEffect(() =>{
    fetch('jobcategory.json')
    .then(res => res.json())
    .then(data => setJobCategory(data))
  },[])
  return (
    <div className='lg:px-20 md:px-12 sm:px-8 max-sm:px-4 lg:mt-20 md:mt-12 sm:mt-8 max-sm:mt-4 '>
        <div className='text-center'>
            <h2 className='text-4xl font-semibold mb-2'>Job category list</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='py-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-4 justify-between items-center'>
          {
            jobCategory.map(job => <div className='bg-gray-100 rounded-md p-4' key={job.id}>
              <div>
                <img className='bg-gray-300 p-2 rounded-md mb-2' src={job.logo} alt={job.job_title} />
              </div>
              <h3 className='text-[18px] font-semibold mb-2'>{job.job_title}</h3>
              <p className='text-gray-500'>{job.available_jobs}+ <span>Jobs Available</span></p>
            </div>)
          }
        </div>
    </div>
  )
}

export default CategoryList