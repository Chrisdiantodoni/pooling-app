// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ImageLogin from "@/assets/Image-Login.png";
import LogoPooling from "@/assets/Logo-Pooling.png";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const Login = () => {
    navigate("/home");
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
          <form onSubmit={Login}>
            <div className="my-5 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiOutlineMail className="text-gray-500" />
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
                  <AiOutlineEyeInvisible
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <AiOutlineEye
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
              <button className="btn-login">
                Masuk
                <FiLogIn className="text-white ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
