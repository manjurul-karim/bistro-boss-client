import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mb-12 text-center">
      <p className="text-orange-500 text-lg py-4">---{subHeading}---</p>
      <div className="w-72 mx-auto">
        <hr />
        <hr />
        <hr />
      </div>
      <h3 className="text-2xl font-xl uppercase py-4">{heading}</h3>
      <div className="w-72 mx-auto">
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default SectionTitle;
