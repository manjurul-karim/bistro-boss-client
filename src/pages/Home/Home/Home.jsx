import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className=" ">
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
      <div className="w-[600px] h-[300px] mx-auto   bg-green-600 shadow-green-600">
        <div className="flex  justify-center h-full  content-center items-center">
          <p className=" w-[120px] h-[120px] bg-red-600 rounded-full  shadow-inner"> </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
