import React from "react";
import { BsCart3, BsFillBagFill } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaHome,
  FaRegCalendarAlt,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import useCart from "../hooks/useCart";
import { ImSpoonKnife } from "react-icons/im";
import { AiOutlineBars } from "react-icons/ai";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // TODO : Load Data from the server to havr dynamic is Admin based on data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div>
      <div className="drawer drawer-mobile bg-[#F3F3F3] ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>

        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 text-base-content ">
            <div className=" font-[Cinzel] pl-4 ">
              <h3 className="uppercase text-2xl font-bold">Bistro Boss</h3>
              <h5 className="tracking-[0.45em]">Restrautrent</h5>
            </div>
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="adminhome">
                    <FaHome />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="additem">
                    <ImSpoonKnife />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="manageitems">
                    <AiOutlineBars />
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="mycart">
                    <FaBook />
                    Manage Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink to="allusers">
                    <FaUsers />
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="userhome">
                    <FaHome />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="reservation">
                    <FaRegCalendarAlt />
                    reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="paymenthistory">
                    <FaWallet />
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="mycart">
                    <BsCart3 />
                    My cart
                    <span className="badge badge-secondary">
                      +{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <div>
              <hr />
              <hr />
            </div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FiMenu /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <BsFillBagFill></BsFillBagFill> Order
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
