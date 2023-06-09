import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  //   reduce
  const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);

  //    delete function
  const handleClick = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://bistro-boss-server-p5trylld3-manjurul-karim.vercel.app/carts/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-4/5 mx-auto">
      <Helmet>
        <title>Bistro | My Cart</title>
      </Helmet>

      <SectionTitle
        subHeading={"My Cart"}
        heading={"Wanna Add More?"}
      ></SectionTitle>
      <div className="bg-white p-6">
        <div className="flex justify-between gap-8 font-[Cinzel] font-semibold uppercase mb-6">
          <h3 className="text-3xl">Total Items: {cart.length}</h3>
          <h3 className="text-3xl">Total Price : $ {total}</h3>
          <Link to="/dashboard/payment">
            <button className="btn bg-[#D1A054] border-0 btn-sm">PAY</button>
          </Link>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full mx-auto">
              {/* head */}
              <thead className="thead ">
                <tr className="bg-[#D1A054]">
                  <th>#</th>
                  <th>Item Picture</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        onClick={() => handleClick(item)}
                        className="btn btn-sm bg-red-600 "
                      >
                        <BsTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
