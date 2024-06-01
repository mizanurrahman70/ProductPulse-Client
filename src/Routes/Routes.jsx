import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Components/Error";
import Login from "../Pages/Login";
import Home from "../Home/Home/Home";
import Regester from "../Pages/Regester/Regester";
import Desboard from "../Desboard/Desboard";
import ProductCard from "../Components/ProductCard";
import AddItem from "../Pages/Add Item/AddItem";


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
      }

    ])

  }
]);

export default router;
