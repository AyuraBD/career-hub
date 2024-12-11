import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Root from './Components/Root/Root.jsx'
import Applied from './Components/Applied/Applied.jsx'
import Jobs from './Components/Jobs/Jobs.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import JobDetails from './Components/Home/FeaturedJobs/JobDetails/JobDetails.jsx'

const router = new createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/applied',
        element: <Applied></Applied>,
        loader: () => fetch(`../featuredjobs.json`)
      },
      {
        path:'/jobs',
        element: <Jobs></Jobs>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/blogs',
        element: <Blogs></Blogs>
      },
      {
        path:`/job/:id`,
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch(`../featuredjobs.json`)
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>,
)
