import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Components/Error";
import Login from "../Pages/Login";
import Home from "../Home/Home/Home";
import Regester from "../Pages/Regester/Regester";
import Desboard from "../Desboard/Desboard";
import ProductCard from "../Components/ProductCard";
import AddItem from "../Pages/Add Item/AddItem";
import Myproduct from "../Pages/My product/Myproduct";
import ProductUpdate from "../Pages/product Update/ProductUpdate";
import ManageProduct from "../Desboard/Manage product/ManageProduct";
import ProductDetals from "../Pages/PRODUCT DETAILS/ProductDetals";
import AllProduct from "../Pages/All Product/AllProduct";
import RevewsFrom from "../Pages/Revews From/RevewsFrom";
import ReportedContent from "../Desboard/Reported Content/ReportedContent";
import ManageUers from "../Desboard/Manage Users/ManageUers";
import MyProfile from "../Desboard/My profile/MyProfile";
import ManageCoupon from "../Desboard/Manage coupon/ManageCoupon";
import Coupon from "../Components/Coupon";
import Payment from "../Desboard/Payment/Payment";
import CouponUpdate from "../Components/CouponUpdate";
import StatisticsPage from "../Desboard/Statistics Page/StatisticsPage";
import PrivateRoute from "../Ahuntication/Private Rout/PrivateRout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: ([
   {
    path:'/',
    element:<Home></Home>
   },
   {
    path:'/login',
    element:<Login></Login>
   },
   {
    path:'/regester',
    element:<Regester></Regester>
   },
   {
    path:'/all-product',
    element:<AllProduct></AllProduct>,
   
   },
   {
    path:'/revews',
    element:<PrivateRoute><RevewsFrom></RevewsFrom></PrivateRoute>
   },
   {
    path:'/productdetails/:id',
    element:<PrivateRoute><ProductDetals></ProductDetals></PrivateRoute>,
    loader:({ params }) => fetch(`http://localhost:5000/product-single/${params.id}`)
   },
  
    ]),
  },
  {
    path:'/desboard',
    element:<PrivateRoute><Desboard></Desboard></PrivateRoute>,
    errorElement:<Error></Error>,
    children:([
      {
        path:'/desboard/addItem',
      element:<PrivateRoute><AddItem></AddItem></PrivateRoute>
      },
      {
        path:'/desboard/my-profile',
      element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path:'/desboard/my-product',
      element:<PrivateRoute><Myproduct></Myproduct></PrivateRoute>
      },
      {
        path: '/desboard/product_update/:id',
        element: <PrivateRoute><ProductUpdate /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/product-single/${params.id}`)
      },
     
      {
        path: '/desboard/manage-product',
        element:<PrivateRoute><ManageProduct /></PrivateRoute> ,
        
      },
      {
        path: '/desboard/reported-content',
        element: <PrivateRoute><ReportedContent></ReportedContent></PrivateRoute>,
        
      },
      {
        path: "/desboard/manage-user",
        element:<PrivateRoute><ManageUers></ManageUers></PrivateRoute>,
        
      },
      {
        path: "/desboard/manage-coupon",
        element:<PrivateRoute><ManageCoupon></ManageCoupon></PrivateRoute>,
        
      },
      {
        path: "/desboard/coupon",
        element:<PrivateRoute><Coupon></Coupon></PrivateRoute>,
        
      },
      {
        path: "/desboard/payment",
        element:<PrivateRoute><Payment></Payment></PrivateRoute>,
        
      },
      {
        path: "/desboard/Statistics-Page",
        element:<PrivateRoute><StatisticsPage></StatisticsPage></PrivateRoute>,
        
      },
      {
        path:'/desboard/coupon-update/:id',
        element:<PrivateRoute><CouponUpdate></CouponUpdate></PrivateRoute>,
        loader:({ params }) => fetch(`http://localhost:5000/coupons/${params.id}`)
       }

    ])

  }
]);

export default router;
