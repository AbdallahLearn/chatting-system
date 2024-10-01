import React from 'react'
// import App from '../App'
import Home from '../component/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../component/Login'
const router = createBrowserRouter([
    
    {
        path: 'chatting',
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
