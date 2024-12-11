import { useEffect, useState } from 'react'
import FeaturedJob from './FeaturedJob/FeaturedJob.jsx'

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(()=>{
        fetch('featuredjobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])
  return (
    <div className='lg:px-20 md:px-12 sm:px-8 max-sm:px-4 lg:py-10 md:py-5 sm:py-5 max-sm:py-2'>
        <div className='text-center mb-10'>
            <h2 className='text-4xl font-semibold mb-2'>Featured jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-6 py-5'>
            {
                jobs.slice(0, dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
            }
        </div>
        <div className={`text-center my-4 ${dataLength === jobs.length && 'hidden'}`}>
            <button onClick={()=> setDataLength(jobs.length)}
             className='bg-gradient-to-r from-sky-500 to-purple-500 lg:px-3 lg:py-2 md:px-3 md:py-2 sm:px-2 sm:py-2 max-sm:px-2 max-sm:py-[5px] rounded-md text-white font-semibold lg:text-[16px] md:text-[16px] sm:text-[14px] max-sm:text-[14px]'>Show all Jobs</button>
        </div>
    </div>
  )
}

export default FeaturedJobs