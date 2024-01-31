// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ImageLogin from "@/assets/Image-Login.png";
import LogoPooling from "@/assets/Logo-Pooling.png";
import { Eye, EyeSlash, Envelope } from "@mynaui/icons-react";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Set loading to true to show the spinner
    setLoading(true);

    // Simulate an asynchronous login process (you should replace this with your actual login logic)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // After the login process is complete, navigate to "/home"
    navigate("/home");

    // Set loading back to false after the navigation (or after your actual login logic)
    setLoading(false);
  };

  return (
    <div className="container mx-auto">
      <div className="w-[81px] m-4 h-[76px] relative">
        <img src={LogoPooling} alt="logo" />
      </div>
      <div className="grid md:grid-cols-12 md:gap-10 items-center  px-10">
        <div className="md:col-span-6 sm:col-span-12">
          <img src={ImageLogin} alt="login-image" />
        </div>

        <div className="md:col-span-6 sm:col-span-12 mx-5">
          <p className="font-bold text-7xl mb-2">Masuk</p>
          <p className="font-bold text-2xl mb-2">Sign in with username</p>
          <form onSubmit={handleLogin}>
            <div className="my-5 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Envelope className="text-gray-500" />
              </span>
              <input
                placeholder="Username"
                type="text"
                className="input-login"
              />
            </div>
            <div className="my-5 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {showPassword ? (
                  <EyeSlash
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <Eye
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </span>
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                className="input-login"
              />
            </div>
            <div className="my-5">
              {loading ? (
                <button
                  className="btn-login bg-blue-300 hover:bg-blue-300"
                  disabled
                >
                  <ClipLoader
                    color={"#FFF"}
                    loading={loading}
                    size={24}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </button>
              ) : (
                <button className="btn-login" type="submit">
                  Masuk
                  <FiLogIn className="text-white ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
