import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px] font-[Cinzel]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" bg-slate-950 bg-opacity-50 mx-36 px-72 my-20 py-12">
            <h1 className="mb-5 text-4xl font-bold uppercase ">{title}</h1>
            <p className="mb-5 uppercase">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
