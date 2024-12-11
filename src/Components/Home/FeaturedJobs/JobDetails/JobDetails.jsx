import { Link, useLoaderData, useParams } from 'react-router-dom'
import { CiDollar, CiLocationOn} from 'react-icons/ci'
import { GiSuitcase } from 'react-icons/gi';
import { FiPhone } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../../../Utility/Localstorage';


const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} =  useParams();
  const job = jobs.find(job => job.id === parseInt(id));
  const {phone, email, address, job_title, salary_range, job_description, job_responsibility, educational_requirements,experiences} = job;
  const handleApplyJob = () =>{
    saveJobApplication(parseInt(id));
    toast('You have applied successfully.');
  }
  return (
    <>
      <div className='flex gap-5 lg:flex-row md:flex-row sm:flex-col max-sm:flex-col px-20 md:px-12 sm:px-8 max-sm:px-4 py-10'>
        <div className='w-3/5' >
          <p className='mb-4'><span className='font-bold'>Job Description: </span> {job_description}</p>
          <p className='mb-4'><span className='font-bold'>Job Responsibility: </span> {job_responsibility}</p>
          <p className='font-bold mb-4'>Educational Requirements:</p>
          <p className='mb-4'>{educational_requirements}</p>
          <p className='font-bold mb-4'>Experiences:</p>
          <p>{experiences}</p>
        </div>
        <div className='w-2/5 p-4 bg-[#dbdff3] rounded-md'>
          <h1 className='font-bold mb-3'>Job Details</h1>
          <hr />
          <span className='mt-3 mb-2 flex justify-start items-center font-semibold'> <CiDollar className='font-bold mr-1 text-xl'></CiDollar> Salary: {salary_range}</span>
          <span className='mb-3 flex justify-start items-center font-semibold'> <GiSuitcase className='font-bold mr-1 text-xl'></GiSuitcase> Job Title: {job_title}</span>
          <h1 className='font-bold mb-3'>Contact Information</h1>
          <hr />
          <span className='mt-3 mb-2 flex justify-start items-center font-semibold'> <FiPhone className='font-bold mr-1 text-xl'></FiPhone> Phone: {phone}</span>
          <span className='mb-3 flex justify-start items-center font-semibold'> <BsEnvelope className='font-bold mr-1 text-xl'></BsEnvelope> Email: {email}</span>
          <span className='mb-3 flex justify-start items-center font-semibold'> <CiLocationOn className='font-bold mr-1 text-xl'></CiLocationOn> Address: {address}</span>
          <div className='text-center mb-3'>
            <Link onClick={handleApplyJob} className='bg-gradient-to-r from-sky-500 to-purple-500 lg:px-3 lg:py-2 md:px-3 md:py-2 sm:px-2 sm:py-2 max-sm:px-2 max-sm:py-[5px] rounded-md text-white font-semibold lg:text-[16px] md:text-[16px] sm:text-[14px] max-sm:text-[14px]'>Apply Now</Link>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default JobDetails