import React from 'react'
import Home from '../component/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
    
    {
        path: '',
        element: <Home/>
    }
])
function Router() {
  return (
    <div>
      <RouterProvider router ={router}/>
    </div>
  )
}

export default Router
