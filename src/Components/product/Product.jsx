import React from "react";
import { HiOutlinePlus } from "react-icons/hi";

const products = [
  {
    name: "Caesar Salad",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 5.99,
    rating: 4.5,
    description:
      "Crisp romaine lettuce with parmesan, croutons, and Caesar dressing.",
  },
  {
    name: "Chicken Roll",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 3.99,
    rating: 4.2,
    description:
      "Grilled chicken wrapped in a soft roll with veggies and sauces.",
  },
  {
    name: "Chocolate Cake",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 6.5,
    rating: 4.8,
    description:
      "Rich, moist chocolate cake topped with smooth chocolate ganache.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/5B2Vr02/pexels-ash-craig-122861-376464.jpg",
    price: 7.99,
    rating: 4.6,
    description:
      "Creamy Alfredo sauce over fettuccine pasta with parmesan and parsley.",
  },
  // ... (Add the rest of the products here)
];

const Product = () => {
  return (
    <div className=" mt-10">
      <h1 className="text-3xl font-bold text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
        {products.map((aProduct, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={aProduct.image} alt={aProduct.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{aProduct.name}</h2>
              <p>{aProduct.description}</p>
              <div className="flex justify-between">
                <p className="font-bold">Price: ${aProduct.price}</p>
                <p className="font-bold">Rating: {aProduct.rating} ⭐</p>
              </div>
              <div className="card-actions justify-end">
                <div className="bg-blue-600 p-3 rounded-full">
                  <HiOutlinePlus className="text-2xl font-bold text-white"/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
