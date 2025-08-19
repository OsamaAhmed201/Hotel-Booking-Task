import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Modules/Component/Pages/Home/Home.jsx"
import { ToastContainer } from "react-toastify"
import Layout from "./Modules/Component/Pages/Layout/Layout.jsx"
import Register from "./Modules/Component/Auth/Register/Register.jsx"
import AuthContextProvider from "./Modules/Contenxt/AuthContextProvider.jsx"
import Verfiy from "./Modules/Component/Auth/Verfiy/Verfiy.jsx"
import Login from './Modules/Component/Auth/Login/Login';
import ForgetPassword from "./Modules/Component/Auth/ForgetPassword/ForgetPassword.jsx"
import ProtectedRoute from './Modules/Component/Auth/ProtectedRouting/ProtectedRouting';
import i18n from "./Modules/Translate/i18n.js"
import { useTranslation } from "react-i18next";
import { useEffect } from "react"
import About from "./Modules/Component/Pages/ComponentShere/About/About.jsx"
import Servicess from "./Modules/Component/Pages/ComponentShere/Services/Servicess.jsx"
import Rooms from "./Modules/Component/Pages/ComponentShere/Rooms/Rooms.jsx"
import Enjoyable from "./Modules/Component/Pages/ComponentShere/Enjoyable/Enjoyable.jsx"
import Notfound from './Modules/Component/Pages/ComponentShere/Notfound/Notfound';
import MasterLayout from "./Modules/Component/Pages/MasterLayout/MasterLayout.jsx"


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {

    if (i18n.language === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [i18n.language]);

  let routs = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "verfiy", element: <Verfiy /> },
        { path: "login", element: <Login /> },
        { path: "forgetpassword", element: <ForgetPassword /> },
        { path: "home", element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "about", element: <ProtectedRoute><About /></ProtectedRoute> },
        { path: "services", element: <ProtectedRoute><Servicess /></ProtectedRoute> },
        { path: "blog", element: <ProtectedRoute><Enjoyable /></ProtectedRoute> },
        { path: "rooms", element: <ProtectedRoute><Rooms /></ProtectedRoute> },

        { path: "*", element: <ProtectedRoute><Notfound/></ProtectedRoute> },


      ]
    },
    {
      path: "/home",
      element:<ProtectedRoute><MasterLayout /></ProtectedRoute> ,
      children: [
       
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "services", element: <Servicess /> },
        { path: "blog", element: <Enjoyable /> },
        { path: "rooms", element: <Rooms /> },
        { path: "*", element: <Notfound/> },


      ]
    }
  ])
  return (
    <>
      <AuthContextProvider >
        <RouterProvider router={routs} ></RouterProvider>
        <ToastContainer autoClose={2000} />
      </AuthContextProvider>
    </>
  )
}

export default App
