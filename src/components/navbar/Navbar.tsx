import { Link } from "react-router-dom";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import Button from "../../micro/button/Button";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  return (
    <nav className="mx-auto container px-5 lg:px-10 py-5 z-50">
      <div className="justify-between items-center hidden lg:flex">
        <div className="flex items-center  justify-between">
          <Link to="/" className="text-3xl font-bold text-secondary">
            Fasco
          </Link>
        </div>
        <input placeholder="Search..." className="w-80 rounded-md p-2 border" />
        <ul className="flex items-center justify-between space-x-14 text-gray-600 cursor-pointer">
          <li>
            <a href="/#features">Cart</a>
          </li>
          <li>
            <a href="/#testimonials">Wishlist</a>
          </li>
          <li>
            <a href="/#pricing">Account</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-secondary">
          Fasco
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
