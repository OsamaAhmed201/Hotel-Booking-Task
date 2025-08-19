import Navbar from './../ComponentShere/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../ComponentShere/Footer/Footer';

export default function MasterLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
