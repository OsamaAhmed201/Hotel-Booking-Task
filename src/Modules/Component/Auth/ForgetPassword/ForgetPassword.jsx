import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { axiosInstance, USERS_URLS } from "../../Pages/Services/URL.js";
import LoadingPage from "../../Pages/ComponentShere/LoadingPage/LoadingPage.jsx";
import { validateRegisterForm } from "../../Pages/Services/Valiation.js";

export default function ForgetPassword() {
  const [userEmail, setUserEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dispalyForm, setDisplayForm] = useState(true);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, setValue } =
    useForm();
  const password = watch("password");
  const navigate = useNavigate();

  async function handelForgetPassword(data) {
    setLoading(true);
    try {
      const response = await axiosInstance.post(USERS_URLS.FORGET_PASS, data);
      toast.success(response.data.message || "Success, please check your email");
      setDisplayForm(false);
      setUserEmail(data.email);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function updatePassword(data) {
    setLoading(true);
    try {
      const response = await axiosInstance.post(USERS_URLS.RESET_PASS, data);
      toast.success(response.data.message || "Password updated successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (userEmail) {
      setValue("email", userEmail);
    }
  }, [userEmail, setValue]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="register bg-gray-100 h-screen ">
             <div className="min-h-screen flex items-center justify-center  ">
            <div className="md:w-6/12 mx-auto w-full p-6 md:p-10 bg-white rounded-2xl">
              {dispalyForm ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Forget Password
                  </h2>
                  <p className="text-gray-600 mb-6">Enter your email</p>
                  <form onSubmit={handleSubmit(handelForgetPassword)}>
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
                        className="w-full mb-2 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      {errors.email && (
                        <div className="invalid-feedback text-red-600 d-block">
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded"
                      disabled={loading}
                    >
                      Send
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Reset Password
                  </h2>
                  <p className="text-gray-600 mb-6">Enter new password</p>
                  <form onSubmit={handleSubmit(updatePassword)}>
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        {...register("email", validateRegisterForm.email)}
                        type="email"
                        defaultValue={userEmail}
                        readOnly
                        className="w-full mb-2 bg-gray-100 rounded border border-gray-300 text-gray-700 py-2 px-3"
                      />
                    </div>

                    {/* OTP */}
                    <div>
                      <label
                        htmlFor="OTP"
                        className="block text-sm font-medium text-gray-700"
                      >
                        OTP
                      </label>
                      <input
                        id="OTP"
                        {...register("seed", { required: "OTP is required" })}
                        type="text"
                        placeholder="Enter OTP"
                        className="w-full mb-2 bg-gray-100 rounded border border-gray-300 text-gray-700 py-2 px-3"
                      />
                      {errors.seed && (
                        <div className="invalid-feedback text-red-600 d-block">
                          {errors.seed.message}
                        </div>
                      )}
                    </div>

                    {/* New Password */}
                    <div className="relative">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        New Password
                      </label>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your New Password"
                        className="w-full mb-2 bg-gray-100 rounded border border-gray-300 text-gray-700 py-2 px-3"
                        {...register("password", validateRegisterForm.password)}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-9"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                      {errors.password && (
                        <div className="invalid-feedback text-red-600 d-block">
                          {errors.password.message}
                        </div>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your New Password"
                        className="w-full mb-2 bg-gray-100 rounded border border-gray-300 text-gray-700 py-2 px-3"
                        {...register(
                          "confirmPassword",
                          validateRegisterForm.confirmPassword(password)
                        )}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-9"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                      {errors.confirmPassword && (
                        <div className="invalid-feedback text-red-600 d-block">
                          {errors.confirmPassword.message}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded"
                      disabled={loading}
                    >
                      Reset Password
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
