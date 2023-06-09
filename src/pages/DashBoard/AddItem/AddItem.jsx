import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your item has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full ">
      <Helmet>
        <title>Bistro | Add Item</title>
      </Helmet>

      <SectionTitle
        heading={"Add An item"}
        subHeading={"Whats New"}
      ></SectionTitle>
      <div className="w-3/4 mx-auto px-6  bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold">Receipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex gap-4 ">
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>

              <select
                defaultValue="pick one"
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>pick one</option>
                <option>salad</option>
                <option>pizza</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </div>
            <div className="form-control flex-grow ">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                type="Number"
                placeholder="Type here"
                className="input input-bordered "
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Recipie Details*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-lg h-36 "
              {...register("recipe", { required: true })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Item Image*</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register("image", { required: true })}
            />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <button
            className="btn btn-sm mt-4 bg-gradient-to-r from-amber-800 to-amber-500 "
            type="submit"
          >
            Add Item <ImSpoonKnife />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
