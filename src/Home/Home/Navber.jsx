import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from'../../assets/logo/logo (2).png'

const Navber = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const listItem = (
    <>
      <li>
       <NavLink to='/'> <a>Home</a></NavLink>
      </li>
      <li>
      <NavLink to='/all-product'><a>Products</a></NavLink>  
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {listItem}
          </ul>
        </div>
        <Link to="/">
          {/* <a   className="btn btn-ghost text-xl">ProductPulse</a> */}
          <img className="h-24 w-32" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{listItem}</ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Profile img" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user?.displayName}</a>
              </li>
              <li>
                <Link to="/desboard">
                  
                  <a>Dashboard</a>
                </Link>
              </li>
              <li onClick={logOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login">
            <a className="btn ml-5 bg-[#25AE7A] ">Login</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navber;
