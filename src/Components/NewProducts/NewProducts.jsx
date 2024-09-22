import React from "react";
import { Card } from "flowbite-react";

const newProducts = [
  {
    name: "Avocado Toast",
    image: "https://i.ibb.co.com/kBbggbX/cobb-salad-34.jpg",
    price: 7.99,
  },
  {
    name: "Chicken Caesar Wrap",
    image: "https://i.ibb.co.com/kBbggbX/cobb-salad-34.jpg",
    price: 6.99,
  },
  {
    name: "Berry Smoothie",
    image: "https://i.ibb.co.com/kBbggbX/cobb-salad-34.jpg",
    price: 4.99,
  },
  {
    name: "BBQ Ribs",
    image: "https://i.ibb.co.com/kBbggbX/cobb-salad-34.jpg",
    price: 12.99,
  },
  {
    name: "Margarita Pizza",
    image: "https://i.ibb.co.com/kBbggbX/cobb-salad-34.jpg",
    price: 9.99,
  },
  {
    name: "Beef Burger",
    image: "https://i.ibb.co.com/kBbggbX/cobb-salad-34.jpg",
    price: 8.49,
  },
];

const NewProducts = () => {
  return (
    <div>
        <h1 className="text-center text-2xl font-bold mt-10">New Arrivals</h1>
      <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-6">
        {newProducts.map((newProduct, index) => (
          <div
            key={index}
            className="card bg-base-100 image-full shadow-xl"
          >
            <figure>
              <img className=""
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Coming Soon.....</h2>
              <p>{newProduct.name}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Add Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
