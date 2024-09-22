import React from "react";

const CategoryData = [
  {
    label: "Salad",
    image:
      "https://i.ibb.co/DRgx2MB/mini-triple-chocolate-buttermilk-pound-cakes-sl-6cbd067ceaca4862b08004aad39017c0.jpg",
    description:
      "This classic Cobb Salad has crispy bacon, chicken, hard boiled eggs, green onions, avocados, juicy.",
  },
  {
    label: "Rolls",
    image:
      "https://i.ibb.co/DRgx2MB/mini-triple-chocolate-buttermilk-pound-cakes-sl-6cbd067ceaca4862b08004aad39017c0.jpg",
    description:
      "This Sri Lankan-style mutton roll recipe from chef Peter Kuruvita wraps potatoes, lamb mince, mint...",
  },
  {
    label: "Rolls",
    image:
      "https://i.ibb.co/DRgx2MB/mini-triple-chocolate-buttermilk-pound-cakes-sl-6cbd067ceaca4862b08004aad39017c0.jpg",
    description:
      "This Sri Lankan-style mutton roll recipe from chef Peter Kuruvita wraps potatoes, lamb mince, mint...",
  },
  {
    label: "Rolls",
    image:
      "https://i.ibb.co/DRgx2MB/mini-triple-chocolate-buttermilk-pound-cakes-sl-6cbd067ceaca4862b08004aad39017c0.jpg",
    description:
      "This Sri Lankan-style mutton roll recipe from chef Peter Kuruvita wraps potatoes, lamb mince, mint...",
  },
  {
    label: "Rolls",
    image:
      "https://i.ibb.co/DRgx2MB/mini-triple-chocolate-buttermilk-pound-cakes-sl-6cbd067ceaca4862b08004aad39017c0.jpg",
    description:
      "This Sri Lankan-style mutton roll recipe from chef Peter Kuruvita wraps potatoes, lamb mince, mint...",
  },
  {
    label: "Rolls",
    image:
      "https://i.ibb.co/DRgx2MB/mini-triple-chocolate-buttermilk-pound-cakes-sl-6cbd067ceaca4862b08004aad39017c0.jpg",
    description:
      "This Sri Lankan-style mutton roll recipe from chef Peter Kuruvita wraps potatoes, lamb mince, mint...",
  },
  {
    label: "Rolls",
    image:
      "https://i.ibb.co/DRgx2MB/mini-triple-chocolate-buttermilk-pound-cakes-sl-6cbd067ceaca4862b08004aad39017c0.jpg",
    description:
      "This Sri Lankan-style mutton roll recipe from chef Peter Kuruvita wraps potatoes, lamb mince, mint...",
  },
  {
    label: "Rolls",
    image:
      "https://i.ibb.co/DRgx2MB/mini-triple-chocolate-buttermilk-pound-cakes-sl-6cbd067ceaca4862b08004aad39017c0.jpg",
    description:
      "This Sri Lankan-style mutton roll recipe from chef Peter Kuruvita wraps potatoes, lamb mince, mint...",
  },
  // Add the other items as needed...
];

const Menu = () => {
  return (
    <div className="mt-10">
        <h1 className="text-3xl font-bold text-center mb-9">Product Categories</h1>
      <div className="flex justify-between">
        {CategoryData.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.label}
              className="w-28 rounded-full"
            />
            <h2 className="text-xl text-center mt-2">{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
