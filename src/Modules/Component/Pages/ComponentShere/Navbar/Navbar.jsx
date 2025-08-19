import { useState, useEffect, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Darkmode from "darkmode-js";
import logo from "../../../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../../../Contenxt/AuthContextProvider.jsx";
import { FaArrowRightToBracket } from "react-icons/fa6";
import i18n from "../../../../Translate/i18n.js";
import { t } from "i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [darkmode, setDarkmode] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let { logData, logout } = useContext(AuthUserContext);
  let userName = logData?.userName;
  let navigate = useNavigate();

  function logOut() {
    logout();
    navigate("/login");
  }

  useEffect(() => {
    const options = { saveInCookies: true, autoMatchOsTheme: true };
    const dm = new Darkmode(options);
    setDarkmode(dm);
    setIsDark(dm.isActivated());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (darkmode) {
      darkmode.toggle();
      setIsDark(darkmode.isActivated());
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav
        style={{ backgroundColor: isScrolled ? "white" : "transparent" }}
        className={`relative transition-all duration-500 ${
          isScrolled ? "shadow-lg text-black" : "text-white"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 ">

          <Link to="#" className="flex items-center space-x-2">
            <img src={logo} className="w-20 darkmode-ignore" alt="Logo" />
          </Link>

          <ul className="hidden md:flex items-center space-x-6 font-medium">
            <li><Link to="#">{t("navbar.home")}</Link></li>
            <li><Link className="mx-2" to="#">{t("navbar.about")}</Link></li>
            <li><Link to="#">{t("navbar.roomsSuites")}</Link></li>
            <li><Link to="#">{t("navbar.services")}</Link></li>
            <li><Link to="#">{t("navbar.blog")}</Link></li>
            <li><Link to="#">{t("navbar.contact")}</Link></li>
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <button
              className="px-4 py-1 me-2 bg-gray-300 text-black rounded"
              onClick={() =>
                i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
              }
            >
              {i18n.language === "en" ? "🇪🇬 عربي" : "🇺🇸 English"}
            </button>
            <button
              onClick={toggleDarkMode}
              className={`px-3 py-2 mx-2 rounded-md transition ${
                isScrolled
                  ? "bg-gray-200 text-black hover:bg-gray-300"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </button>
            <div className="relative">
              <button
                onClick={() => setOpenUser(!openUser)}
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 flex items-center"
              >
                {userName}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {openUser && (
                <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <div
                        onClick={logOut}
                        className="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100"
                      >
                        Logout <FaArrowRightToBracket className="ml-2 text-red-500" />
                      </div>
                    </li>
                  
                  </ul>
                </div>
              )}
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/90 text-white px-4 py-4 flex flex-col gap-3">
            <Link to="#" className="block px-3 py-2 rounded hover:bg-gray-700">{t("navbar.home")}</Link>
            <Link to="#" className="block px-3 py-2 rounded hover:bg-gray-700">{t("navbar.about")}</Link>
            <Link to="#" className="block px-3 py-2 rounded hover:bg-gray-700">{t("navbar.roomsSuites")}</Link>
            <Link to="#" className="block px-3 py-2 rounded hover:bg-gray-700">{t("navbar.services")}</Link>
            <Link to="#" className="block px-3 py-2 rounded hover:bg-gray-700">{t("navbar.blog")}</Link>
            <Link to="#" className="block px-3 py-2 rounded hover:bg-gray-700">{t("navbar.contact")}</Link>

            <button
              onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}
              className="w-full px-3 py-2 rounded bg-gray-700 hover:bg-green-600 transition"
            >
              {i18n.language === "en" ? "🇪🇬 عربي" : "🇺🇸 English"}
            </button>

            <button
              onClick={toggleDarkMode}
              className="w-full px-3 py-2 rounded bg-gray-700 hover:bg-green-600 transition"
            >
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </button>

            <div className="relative">
              <button
                onClick={() => setOpenUser(!openUser)}
                className="w-full px-3 py-2 rounded bg-gray-700 hover:bg-green-600 text-left flex justify-between items-center"
              >
                {userName}
                <FaArrowRightToBracket />
              </button>
              {openUser && (
                <div className="mt-2 bg-gray-800 rounded shadow-md">
                  <div onClick={logOut} className="cursor-pointer px-4 py-2 hover:bg-gray-700">
                    Logout
                  </div>
                  
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
