import React from "react";
import { Helmet } from "react-helmet";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import Cover from "../../Shared/Cover/cover";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import { Parallax } from "react-parallax";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our menu"}
        description="Would you like to try a Dish?"
      ></Cover>
      {/* Offered Menu Item */}

      <SectionTitle
        heading={"todays offers"}
        subHeading={"Don't miss"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu item */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        img={dessertImg}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae distinctioa eum delectus ipsum odit dolor tempore nemo magnam tenetur."
        }
      ></MenuCategory>
     
      {/* pizza menu */}
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        img={pizzaImg}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae distinctioa eum delectus ipsum odit dolor tempore nemo magnam tenetur."
        }
      ></MenuCategory>
      
      {/* salad menmu */}
      <MenuCategory
        items={salad}
        title={"salads"}
        img={saladImg}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae distinctioa eum delectus ipsum odit dolor tempore nemo magnam tenetur."
        }
      ></MenuCategory>
     
      {/* soup menu */}
      <MenuCategory
        items={soup}
        title={"soups"}
        img={soupImg}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae distinctioa eum delectus ipsum odit dolor tempore nemo magnam tenetur."
        }
      ></MenuCategory>
     
    </div>
  );
};

export default Menu;
