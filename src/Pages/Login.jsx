import React, { useContext, useState } from 'react';

import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiShow } from "react-icons/bi";

import { GoEyeClosed } from "react-icons/go";
import { AuthContext } from '../Ahuntication/AuthContext/AuthContext';



const Login = () => {
    const { UserLogin, gooogleSingUp,  } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();

  const Navigate = useNavigate();
  const [update, setUpdate] = useState("password");
  const passwordSee = () => {
    setUpdate((currentType) =>
      currentType === "password" ? "text" : "password"
    );
  };

  const signIn = (e) => {
    setError("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    UserLogin(email, password)
      .then((result) => {
        toast.success("Login sucessful");
        // alert ("Accout create seceefull")

        setTimeout(() => {
          Navigate(location.state ? location.state : "/");
        }, "1000");
      })
      .catch((error) => {
        toast.error(error.message.slice(9));
       
      });
  };
  // google singup
  const googleHandle = () => {
    gooogleSingUp()
      .then((result) => {
        toast.success("Login sucessful");
        setTimeout(() => {
          Navigate(location.state ? location.state : "/");
        }, "1000");
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
      

      <h1 className="text-3xl font-bold text-center text-indigo-600">Login</h1>
      {/* Input fields and the form started */}
      <form onSubmit={signIn} className="space-y-6">
        <div className="space-y-2 text-sm">
          <label htmlFor="username" className="block ">
            Your Email
          </label>
          <input
            type="text"
            name="email"
            id="username"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        <div className="space-y-2 text-sm">
          <label htmlFor="password" className="block ">
            Password
          </label>
          <div className="relative">
            <input
              type={update}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
            <p
              onClick={passwordSee}
              className="absolute -mt-8 ml-[195px] md:ml-[350px] text-xl "
            >
              {update === "password" ? <GoEyeClosed /> : <BiShow />}
            </p>
          </div>
          {error && <p className="text-red-700">{error}</p>}
          <div className="flex justify-end text-xs ">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
        {/* Sign in Button */}
        <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
          Log In
          <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
            Let&apos;s go
          </span>
          <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
          <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
          <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
          <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-2">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="text-sm text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      {/* Social icons */}
      {/* sign with google */}
      <div onClick={googleHandle} className="mx-auto -mt-8 mb-4 flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                        <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">Sign With</div>
                        <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
                        <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">G+</span>
                    </div>
      <ToastContainer />
      <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
        Don&apos;t have an account?
        <p href="#" className="underline hover:text-indigo-600 text-green-500">
          <NavLink to="/regester">Sign up</NavLink>
        </p>
      </p>
    </div>
  );
};
export default Login;