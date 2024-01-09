import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './component/login'
import Register from './component/register'
const routerBrowser = createBrowserRouter([
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
// const login = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);


function App() {

  return (
    <>
     
       <RouterProvider router={routerBrowser} />    </>
  )
}

export default App
