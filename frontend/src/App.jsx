import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './component/login'
import Register from './component/register'
const register = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
]);
const login = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);


function App() {

  return (
    <>
     
       <RouterProvider router={register} />
       <RouterProvider router={login} />
    </>
  )
}

export default App
