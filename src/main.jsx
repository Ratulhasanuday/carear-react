import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPages from './components/ErrorPages/ErrorPages';
import JobDetails from './components/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/appiled',
        element:<AppliedJobs></AppliedJobs>,
        loader:() => fetch('../jobs.json'), 
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        loader:() => fetch('../jobs.json'),
      },
      {
        path:'/jobs',
        element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Home></Home>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
