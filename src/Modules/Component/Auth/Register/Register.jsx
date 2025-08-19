import { useForm } from "react-hook-form";
import registervideo from "../../../../../src/assets/register.mp4";
import "./register.css";
import { validateRegisterForm } from './../../Pages/Services/Valiation';
import { axiosInstance, USERS_URLS } from './../../Pages/Services/URL';
import { toast } from "react-toastify";
import { useState } from "react";
import LoadingPage from "../../Pages/ComponentShere/LoadingPage/LoadingPage.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch("password");
  const [loding, setLoading] = useState(false);
let Navigate=useNavigate()
  async function onSubmit(data) {
    setLoading(true);
    try {
      let res = await axiosInstance.post(`${USERS_URLS.REGISTER}`, data);
      toast.success(res.data.message || "Register successfully!");
      Navigate("/verfiy", {
        state: { email: data.email },
      });

    }
    catch (error) {
      toast.error(error.response.data.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      {loding ? (<LoadingPage />) : (<>
        <div className="register w-11/12 mx-auto ">
          <div className="flex flex-wrap  bg-white  rounded-xl overflow-hidden">

            <div className="md:w-7/12 w-full p-6 md:p-10 bg-white  rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Register to Flxyland
              </h2>
              <p className="text-gray-600 mb-6">
                Create an account and get the best deals.
              </p>


              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">User Name</label>
                  <input {...register("userName", validateRegisterForm.userName)} id="name" type="text" placeholder="Enter your name" name="userName" className="w-full mb-2 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  {errors.userName && (
                    <div className="invalid-feedback text-red-600 d-block">{errors.userName.message}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Email</label>
                  <input {...register("email", validateRegisterForm.email)} id="email" type="email" placeholder="Enter your email" name="email" className="w-full mb-2 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  {errors.email && (
                    <div className="invalid-feedback text-red-600 d-block">{errors.email.message}</div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      {...register("country", validateRegisterForm.country)}
                      type="text"
                      id="country"
                      placeholder="Enter your country"
                      name="country"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.country && (
                      <div className="invalid-feedback text-red-600 d-block">{errors.country.message}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      {...register("phoneNumber", validateRegisterForm.phoneNumber)}
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      name="phoneNumber"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.phoneNumber && (
                      <div className="invalid-feedback text-red-600 d-block">{errors.phoneNumber.message}</div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input {...register("password", validateRegisterForm.password)} id="password" type="password" placeholder="Enter your password" name="password" className="w-full mb-2 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  {errors.password && (
                    <div className="invalid-feedback text-red-600 d-block">{errors.password.message}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full mb-2 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />                {errors.confirmPassword && (
                    <div className="invalid-feedback text-red-600 d-block">{errors.confirmPassword.message}</div>
                  )}
                </div>
                <Link className="text-sm text-indigo-500 hover:text-indigo-600 flex justify-end" to="/login">Login here</Link>
                <button className="w-full mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded">Register</button>
              </form>


            </div>



            <div className="hidden md:block md:w-5/12 py-8">
              <video
                src={registervideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full videoRegister object-cover"
              />
            </div>
          </div>
        </div>
      </>)}

    </>
  );
}
