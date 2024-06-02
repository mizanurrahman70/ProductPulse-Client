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
    element:<AllProduct></AllProduct>
   },
   {
    path:'/revews',
    element:<RevewsFrom></RevewsFrom>
   },
   {
    path:'/productdetails/:id',
    element:<ProductDetals></ProductDetals>,
    loader:({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
   }
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

    ])

  }
]);

export default router;
