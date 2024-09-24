import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>All Products</a>
            </li>
            <li>
              <a>History</a>
            </li>
          </ul>
        </div>
        <p className="text-3xl font-bold text-red-600 cursor-pointer">
          Tomato.
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-8">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>All Products</a>
          </li>
          <li>
            <a>History</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-7">
        <div>
          <CiSearch className="text-3xl font-semibold"/>
        </div>
        <div>
          <FaShoppingCart className="text-3xl font-semibold "/>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm z-10 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
