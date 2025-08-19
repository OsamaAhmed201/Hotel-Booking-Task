import { useForm } from "react-hook-form";
import Loginvideo from "../../../../../src/assets/login.mp4";
import { validateRegisterForm } from "./../../Pages/Services/Valiation";
import { axiosInstance, USERS_URLS } from "./../../Pages/Services/URL";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import LoadingPage from "../../Pages/ComponentShere/LoadingPage/LoadingPage.jsx";
import { Link, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../../Contenxt/AuthContextProvider.jsx";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const { updateAuth } = useContext(AuthUserContext);

  async function onSubmit(data) {
    setLoading(true);
    try {
      let res = await axiosInstance.post(`${USERS_URLS.LOGIN}`, data);
      
      updateAuth(res.data.token);

      toast.success(res.data.message || "Login successfully!");
      navigate("/home");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="register w-11/12 mx-auto ">
          <div className="flex flex-wrap bg-white items-center rounded-xl overflow-hidden">
            <div className="md:w-7/12 w-full p-6 md:p-10 bg-white rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Welcome to Flxyland
              </h2>
              <p className="text-gray-600 mb-6">Login to your account</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", validateRegisterForm.email)}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mb-2 bg-gray-100 rounded border border-gray-300 
                               focus:border-indigo-500 text-base outline-none text-gray-700 
                               py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.email && (
                    <div className="text-red-600">{errors.email.message}</div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", validateRegisterForm.password)}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full mb-2 bg-gray-100 rounded border border-gray-300 
                               focus:border-indigo-500 text-base outline-none text-gray-700 
                               py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.password && (
                    <div className="text-red-600">{errors.password.message}</div>
                  )}
                </div>

                <div className="flex justify-between">
                  <Link
                    className="text-sm text-indigo-500 hover:text-indigo-600"
                    to="/forgetpassword"
                  >
                    Forgot Password
                  </Link>
                  <Link
                    className="text-sm text-indigo-500 hover:text-indigo-600"
                    to="/register"
                  >
                    Register here
                  </Link>
                </div>

                <button className="w-full mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded">
                  Login
                </button>
              </form>
            </div>

            <div className="hidden md:block md:w-5/12 py-8">
              <video
                src={Loginvideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full videoRegister object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
