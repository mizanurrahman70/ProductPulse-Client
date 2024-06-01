import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiShow } from "react-icons/bi";

import { GoEyeClosed } from "react-icons/go";
import { AuthContext } from "../../Ahuntication/AuthContext/AuthContext";



const Regester = () => {
    const { userSinup, setUserInfo, gooogleSingUp } = useContext(AuthContext);
    const [error, SetError] = useState("");
    const Navigate = useNavigate();
    const [update, setUpdate] = useState("password");
    const passwordSee = () => {
      setUpdate((currentType) =>
        currentType === "password" ? "text" : "password"
      );
    };
    //  google handle
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
    const sinUpHandle = (e) => {
      e.preventDefault();
      SetError("");
      const email = e.target.email.value;
      const password = e.target.password.value;
      const name = e.target.name.value;
      const imgurl = e.target.imgurl.value;
  
      if (password.length < 6) {
        // SetError('please provide 6 charecter')
        toast.error("Please provide 6 charecter");
        return;
      }
  
      if (!/^(?=.*[a-z]).+$/.test(password)) {
        // SetError('you must have lower case charecter')
        toast.error("You must have Lowercase charecter");
        return;
      }
      if (!/^(?=.*[A-Z]).+$/.test(password)) {
        // SetError('you must have Uper case charecter')
        toast.error("You must have Upercase charecter");
        return;
      }
  
      userSinup(email, password)
        .then((result) => {
          setUserInfo(name, imgurl)
            .then((result) => {
              toast.success("Accout create seceefull");
              setTimeout(() => {
                Navigate("/login");
              }, "1000");
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    };
    
    return (
      <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white">
        
        <form onSubmit={sinUpHandle} className="p-12">
          <h1 className="backdrop-blur-sm text-4xl pb-8">SingUp</h1>
  
          <div className="space-y-5">
            <label>Name</label>
            <div className="relative">
              <input
                name="name"
                type="name"
                placeholder="Your Name"
                className="p-3 block w-full pl-10 drop-shadow-lg outline-none rounded-xl
                          "
                required
              />
            </div>
            <label>Photo URl</label>
            <div className="relative">
              <input
                name="imgurl"
                type="name"
                placeholder="Photo URL"
                className="p-3 block w-full pl-10 drop-shadow-lg outline-none rounded-xl
                          "
                required
              />
            </div>
  
            <label htmlFor="email" className="block">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
                required
              />
              <span className="absolute top-1/4 left-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z"
                      fill="#000000"
                    ></path>
                    <rect
                      x="2.5"
                      y="2.5"
                      width="19"
                      height="19"
                      rx="3.5"
                      stroke="#000000"
                    ></rect>
                  </g>
                </svg>
              </span>
            </div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <div className="relative">
              <input
                type={update}
                name="password"
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
          </div>
          {error && <p className="text-red-700 mt-2">{error}</p>}
          <ToastContainer />
          {/* button type will be submit for handling form submission*/}
          <button className="py-2 px-5 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">
            Submit
          </button>
        </form>
      
       {/* sign with google */}
       <div onClick={googleHandle} className="mx-auto -mt-8 mb-4 flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                          <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">Sign With</div>
                          <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
                          <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">G+</span>
                      </div>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Don&apos;t have an account?
          <p
            href="#"
            className="underline hover:text-indigo-600 mb-5 font-semibold text-orange-400"
          >
            <NavLink to="/login">Sign in</NavLink>
          </p>
        </p>
      </div>
    );
  };
  

export default Regester;