import Navbar from '../navbar/Navbar'
import Footer from '../footer/footer'
import Ends from '../end/Ends'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar/>

    <Outlet/>


    <Footer/>
    <Ends/>
      
    </>
  )
}

export default Layout
