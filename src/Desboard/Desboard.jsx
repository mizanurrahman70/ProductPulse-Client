import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";


const Desboard = () => {
  const [isAdmin, isModerator] = useAdmin();

  return (
    <div className="flex container mx-auto">
      <div className="w-64 min-h-screen bg-[#25AE7A]">
        <div>
          <h1 className="text-2xl text-white text-center">ProductPulse</h1>
         
        </div>
        <ul className="menu space-y-2">
         
          {isAdmin  ? (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/desboard/my-profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/desboard/addItem">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/desboard/my-product">My Products</NavLink>
              </li>{" "}
              <li>
                <NavLink to="/desboard/manage-product">
                  Product Review Queue
                </NavLink>
              </li>
              <li>
                <NavLink to="/desboard/reported-content">
                  Reported Contents
                </NavLink>
              </li>
              <li>
                <NavLink to="/desboard/Statistics-Page">
                  Statistics Page
                </NavLink>
              </li>
              <li>
                <NavLink to="/desboard/manage-user">Manage Users</NavLink>
              </li>
              <li>
                <NavLink to="/desboard/manage-coupon">Manage Coupon</NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/desboard/my-profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/desboard/addItem">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/desboard/my-product">My Products</NavLink>
              </li>
            </>
          )}
           {isModerator ? (
            <>
              <li>
                <NavLink to="/desboard/manage-product">
                  Product Review Queue
                </NavLink>
              </li>
              <li>
                <NavLink to="/desboard/reported-content">
                  Reported Contents
                </NavLink>
              </li>
            </>
          ) : (
            <>
           
            </>
          )}

          {/* modaretot  */}

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
