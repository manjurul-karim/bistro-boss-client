import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div className="pt-12">
      {title && (
        <Cover img={img} title={title} description={description}></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        {" "}
        <div className=" flex justify-center ">
          <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">
            Order Your Favourite Food
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
