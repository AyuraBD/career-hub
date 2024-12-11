import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredApplication } from "../../Utility/Localstorage";
import { CiDollar, CiLocationOn } from "react-icons/ci";

const Applied = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = filter =>{
    if(filter === 'All'){
      setDisplayJobs(appliedJobs);
    } else if(filter === 'Remote'){
      const jobsRemote = appliedJobs.filter(job => job.job_type === filter);
      setDisplayJobs(jobsRemote);
    }else if(filter === 'Onsite'){
      const onsiteJobs = appliedJobs.filter(job => job.job_type === filter);
      setDisplayJobs(onsiteJobs);
    }
  }
  useEffect(() =>{
    const storedJobs = getStoredApplication();
    if(jobs){
      const jobsApplied = jobs.filter(job => storedJobs.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  },[jobs])
  console.log(appliedJobs);


  return (
    <div className="lg:px-20 md:px-12 sm:px-8 max-sm:px-4 py-5">
        <h1 className="text-center py-6 text-3xl font-bold">Applied Jobs</h1>
        <div className="filter text-right py-5">
        <details className="dropdown">
            <summary className="btn m-1">Filter by</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
              <li onClick={() => handleJobsFilter('All')}><a>All</a></li>
              <li onClick={() => handleJobsFilter('Remote')}><a>Remote</a></li>
              <li onClick={() => handleJobsFilter('Onsite')}><a>Onsite</a></li>
            </ul>
          </details>
        </div>

        {/* Applied job list */}
        <div>
          {
            displayJobs.map(job => <div className="flex justify-center gap-4 border p-3 rounded-md mb-5" key={job.id}>
              <div className="w-1/3 bg-[#d8dcf3] rounded-md p-3 flex justify-center items-center" >
                <img src={job.company_logo} alt="" />
              </div>
              <div className="w-2/3 px-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-xl mb-1">{job.job_title}</h3>
                  <p className="mb-1">{job.company_name}</p>
                  <div className='flex justify-start items-center gap-4 mt-2'>
                    <button className='px-5 py-2 font-bold text-[#7E90FE] rounded border border-[#7E90FE]'>{job.job_type}</button>
                    <button className='px-5 py-2 font-bold text-[#7E90FE] rounded border border-[#7E90FE]'>{job.working_hours}</button>
                  </div>
                    <div className='flex justify-start gap-4 mt-2'>
                    <span className='flex justify-start items-center font-semibold'><CiLocationOn className='font-bold mr-1 text-xl'></CiLocationOn> {job.location}</span>
                    <span className='flex justify-start items-center font-semibold'> <CiDollar className='font-bold mr-1 text-xl'></CiDollar> {job.salary_range}</span>
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-sky-500 to-purple-500 lg:px-3 lg:py-2 md:px-3 md:py-2 sm:px-2 sm:py-2 max-sm:px-2 max-sm:py-[5px] rounded-md text-white font-semibold lg:text-[16px] md:text-[16px] sm:text-[14px] max-sm:text-[14px]">View details</button>
                </div>
              </div>
            </div>)
          }
        </div>
    </div>
  )
}

export default Applied