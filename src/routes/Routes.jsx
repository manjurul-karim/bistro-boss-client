import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import PrivetRoute from "./PrivetRoute";
import Secrect from "../pages/Shared/Secrect/Secrect";
import DashBoard from "../Layout/DashBoard";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import Reservation from "../pages/DashBoard/Reservation/Reservation";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/DashBoard/ManageItems/ManageItems";
import Payment from "../pages/DashBoard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      // {
      //   path: 'order',
      //   element: <Order></Order>
      // },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "loader",
        element: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "secrect",
        element: (
          <PrivetRoute>
            <Secrect></Secrect>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashBoard></DashBoard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: 'paymenthistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
