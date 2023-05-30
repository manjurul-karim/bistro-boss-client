import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        // {
        //   path: 'order',
        //   element: <Order></Order>
        // },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'loader',
          element: <LoadingSpinner></LoadingSpinner>
        }
    ]
  },
]);
