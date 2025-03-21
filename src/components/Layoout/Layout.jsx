import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Ends from '../end/Ends'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
      <Ends />
    </>
  );
};

export default Layout;
