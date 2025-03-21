// import { useState } from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Port from './components/portfolio/Port'
import Contact from './components/contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layoout/Layout'




function App() {

  const router = createBrowserRouter([

    {path:"",element:<Layout/>,children:[
      {path: "",element:<Home />},
      {path: "about",element:<About />},
      {path: "portifolio",element:<Port/>},
      {path: "Contact",element:<Contact />},
    ]}
  ])


  return  (
    <>
    <RouterProvider router={router} />
    </>
  )
}
export default App
