import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "react-awesome-button/dist/styles.css";
import './Featured.css'
const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-8 bg-slate-500 bg-opacity-50 ">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center   pb-20 pt-6 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10  text-white">
          <p>Aug 20, 2023</p>
          <p className="uppercase ">Where Can i Get Some?</p>
          <p className="my-4" >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            iure enim pariatur, distinctio ratione ipsa iste nemo quibusdam
            adipisci, non officiis modi laboriosam vel amet similique, nesciunt
            nobis? Inventore aspernatur nostrum quis aliquid molestias,
            obcaecati provident exercitationem? Velit, sit quos. Natus provident
            vitae id ipsum repudiandae at, sint mollitia molestias!
          </p>
         <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
