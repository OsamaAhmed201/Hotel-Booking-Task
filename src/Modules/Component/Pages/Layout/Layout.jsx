import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../ComponentShere/Navbar/Navbar.jsx'
import Footer from './../ComponentShere/Footer/Footer';
import WhatsappChat from './../ComponentShere/wts/WhatsappChat';

export default function Layout() {
    const location = useLocation();
    const hideFooterRoutes = ['/login', '/signup', '/forgetpassword', '/updatepass'];

    const isLoggedIn = Boolean(localStorage.getItem("token"));

    const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
    return (
        <div>
            {isLoggedIn && <Navbar />}

            <Outlet />
            {isLoggedIn && <Footer />}
            {isLoggedIn && <WhatsappChat />}
        </div>
    )
}
