import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Desboard = () => {
  return (
    <div className="flex container mx-auto">
      <div className="w-64 min-h-screen bg-orange-400">
        <div>
          <h1 className="text-2xl text-white text-center">ProductPulse</h1>
        </div>
        <ul className="menu space-y-2">
          <li>
            <NavLink>My Profile</NavLink>
          </li>
          <li>
            <NavLink to='/desboard/addItem'>Add Product</NavLink>
          </li>
          <li>
            <NavLink to='/desboard/my-product'>My Products</NavLink>
          </li>

          <div className="divider divider-horizontal"></div>
        </ul>
      </div>
      <div className="flex-1 p-8 container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Desboard;
