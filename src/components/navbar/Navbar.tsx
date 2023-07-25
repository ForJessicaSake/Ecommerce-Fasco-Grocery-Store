import { Link } from "react-router-dom";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineMail
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  return (
    <nav className="mx-auto container px-5 lg:px-10 py-5 z-50">
      <div className="justify-between items-center hidden lg:flex">
        <div className="flex items-center  justify-between">
          <Link to="/" className="text-3xl font-bold text-secondary">
            Fa<span className="text-primary">s</span>co
          </Link>
        </div>
        <input
          placeholder="Search here for all kinds of fruits..."
          className="w-80 rounded-md placeholder:text-sm shadow-md border-gray-100 p-2 border"
        />
        <ul className="flex items-center justify-between space-x-10 text-gray-600 cursor-pointer">
          <li>
            <a href="/#features" className="flex items-center">
              <AiOutlineShoppingCart className="mr-2" /> Cart
            </a>
          </li>
          <li>
            <a href="/#testimonials" className="flex items-center">
              <AiOutlineHeart className="mr-2" /> Wishlist
            </a>
          </li>
          <li>
            <a href="/#pricing" className="flex items-center">
              <BiUser className="mr-2" /> Account
            </a>
          </li>
          <li>
            <a href="/#contact" className="flex items-center">
              <AiOutlineMail className="mr-2" /> Contact
            </a>
          </li>
        </ul>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-secondary">
          Fa<span className="text-primary">s</span>co
        </Link>
        <ul
          onClick={() => setNav(!nav)}
          className={`absolute top-16 bg-blueShade items-center w-full left-0 py-10 text-secondary h-full ${
            nav ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col h-96 items-center justify-between">
            <li>
              <a href="/#features">Cart</a>
            </li>
            <li>
              <a href="/#testimonials">Wishlist</a>
            </li>
            <li>
              <a href="/#pricing">Blog</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li className="cursor-pointer bg-white text-background p-3 w-28 flex items-center justify-center rounded-full">
              <Link to="/signup">Sign up</Link>
            </li>
            <li className="cursor-pointer bg-black text-white  p-3 w-28 flex items-center justify-center rounded-full">
              <Link to="/login">Login</Link>
            </li>
          </div>
        </ul>
        <div className="lg:hidden block text-3xl" onClick={() => setNav(!nav)}>
          {!nav ? <CiMenuBurger /> : <TfiClose />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
