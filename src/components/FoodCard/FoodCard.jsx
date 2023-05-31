import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
const handleAddToCart =item =>{
  console.log(item);
}

  return (
    <div>
      <div className="card w-96 shadow-xl bg-[#F3F3F3]">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 top-0 mt-4 mr-4 px-6">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-[#E8E8E8] hover:bg-[#111827] hover:text-[#BB8506] text-[#BB8506] border-b-4 hover:border-b-4 border-[#BB8506] hover:border-[#BB8506]">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
