import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../ComponentShere/Navbar/Navbar.jsx';
import Footer from './../ComponentShere/Footer/Footer';
import WhatsappChat from './../ComponentShere/wts/WhatsappChat';

export default function Layout() {
  const location = useLocation();
  const authRoutes = ['/login', '/signup', '/forgetpassword', '/updatepass'];

  const token = localStorage.getItem("token");
  const isLoggedIn = Boolean(token);

 
  if (authRoutes.includes(location.pathname)) {
    return <Outlet />;
  }

 
  return (
    <div>
      {isLoggedIn && <Navbar />}
      <Outlet />
      {isLoggedIn && <Footer />}
      {isLoggedIn && <WhatsappChat />}
    </div>
  );
}
