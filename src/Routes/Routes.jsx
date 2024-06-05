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
    element:<RevewsFrom></RevewsFrom>
   },
   {
    path:'/productdetails/:id',
    element:<ProductDetals></ProductDetals>,
    loader:({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
   },
  
    ]),
  },
  {
    path:'/desboard',
    element:<Desboard></Desboard>,
    errorElement:<Error></Error>,
    children:([
      {
        path:'/desboard/addItem',
      element:<AddItem></AddItem>
      },
      {
        path:'/desboard/my-profile',
      element:<MyProfile></MyProfile>
      },
      {
        path:'/desboard/my-product',
      element:<Myproduct></Myproduct>
      },
      {
        path: '/desboard/product_update/:id',
        element: <ProductUpdate />,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
     
      {
        path: '/desboard/manage-product',
        element: <ManageProduct />,
        
      },
      {
        path: '/desboard/reported-content',
        element: <ReportedContent></ReportedContent>,
        
      },
      {
        path: "/desboard/manage-user",
        element:<ManageUers></ManageUers>,
        
      },
      {
        path: "/desboard/manage-coupon",
        element:<ManageCoupon></ManageCoupon>,
        
      },
      {
        path: "/desboard/coupon",
        element:<Coupon></Coupon>,
        
      },
      {
        path: "/desboard/payment",
        element:<Payment></Payment>,
        
      },
      {
        path: "/desboard/Statistics-Page",
        element:<StatisticsPage></StatisticsPage>,
        
      },
      {
        path:'/desboard/coupon-update/:id',
        element:<CouponUpdate></CouponUpdate>,
        loader:({ params }) => fetch(`http://localhost:5000/coupons/${params.id}`)
       }

    ])

  }
]);

export default router;
