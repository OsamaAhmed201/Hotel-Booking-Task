import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { axiosInstance, USERS_URLS } from '../../Pages/Services/URL.js';
import { validateRegisterForm } from '../../Pages/Services/Valiation.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import LoadingPage from './../../Pages/ComponentShere/LoadingPage/LoadingPage';

export default function Verfiy() {

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const emailFromRegister = location.state?.email || "";
  let Navigate = useNavigate()
  async function Verfiy(data) {
    setLoading(true);
    try {
      let res = await axiosInstance.put(`${USERS_URLS.Verify}`, data);
      toast.success(res.data?.message || "Verified successfully!");
      Navigate("/login")
    } catch (error) {

      const apiMessage = error?.response?.data?.message;
      toast.error(apiMessage || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      {loading ? (<LoadingPage />) : (<>

        <div className="register bg-gray-100 h-screen py-10">
          <div className="flex items-center rounded-xl overflow-hidden">
            <div className="md:w-7/12 mx-auto w-full p-6 md:p-10 bg-white rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Verify
              </h2>
              <p className="text-gray-600 mb-6">
                Verify Your Email
              </p>

              <form onSubmit={handleSubmit(Verfiy)}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    {...register("email", validateRegisterForm.email)}
                    id="email"
                    type="email"
                    defaultValue={emailFromRegister}
                    readOnly
                    className="w-full mb-2 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.email && (
                    <div className="invalid-feedback text-red-600 d-block">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Code */}
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code</label>
                  <input
                    {...register("code", { required: "Otp required" })}
                    id="code"
                    type="text"
                    placeholder="Enter your code"
                    className="w-full mb-2 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.code && (
                    <div className="invalid-feedback text-red-600 d-block">
                      {errors.code.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded"
                  disabled={loading}
                >
                  Verfiy
                </button>
              </form>
            </div>
          </div>
        </div>
      </>)}
    </>

  )
}
