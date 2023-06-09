import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { BsTrash } from "react-icons/bs";
import { FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://bistro-boss-server-p5trylld3-manjurul-karim.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (user) => {
    console.log(user);
  };
  return (
    <div className="bg-[#F3F3F3] ">
      <Helmet>
        <title>Bistro | All Users</title>
      </Helmet>
      <div>
        <SectionTitle
          heading={"Manage All User"}
          subHeading={"How Many??"}
        ></SectionTitle>
      </div>
      <div className="w-full bg-[#FFFFFF] ">
        <h3 className="text-3xl font-semibold my-4">
          Total User : {users.length}
        </h3>

        <div className="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead style={{ backgroundColor: "#D1A054" }} className="thead">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin "
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="bg-[#D1A054] text-white btn btn-sm"
                        >
                          <FaUsers />
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user)}
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

export default AllUsers;
