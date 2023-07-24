import React from "react";
import {
  CiFacebook,
  CiInstagram,
  CiYoutube,
  CiLocationOn,
} from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FiTwitter, FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { LuAlarmClock } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="lg:flex lg:justify-between grid grid-cols-1 sm:grid-cols-2 py-10 lg:py-20 gap-y-10 lg:gap-y-0 lg:px-10 px-5 mx-auto container">
      <div>
        <h1 className="text-3xl text-secondary font-semibold">Fasco</h1>
        <div className="flex space-x-5 text-xl py-5 cursor-pointer">
          <CiFacebook />
          <FiTwitter className="text-primary" />
          <CiInstagram />
          <CiYoutube />
          <FaWhatsapp />
        </div>
        <ul className="space-y-6 text-secondary font-medium cursor-pointer">
          <li className="flex items-center ">
            <FiPhoneCall className="mr-2 text-primary" /> (234) 893 124 1331
          </li>
          <li className="flex items-center">
            <AiOutlineMail className="mr-2 text-primary" /> Fesco@gmail.com
          </li>
          <li className="flex items-center">
            <CiLocationOn className="mr-2 text-xl text-primary" /> 123 Island Cray 1000
          </li>
          <li className="flex items-center">
            <LuAlarmClock className="mr-2 text-primary" />
            10:00-18:00, Mon - Sat
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-lg font-medium pb-3 text-secondary ">Company</h1>
        <ul className="space-y-5 text-gray-500 cursor-pointer">
          <li>About Us</li>
          <li>Services</li>
          <li>Case Studies</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h1 className="text-lg font-medium pb-3 text-secondary ">Account</h1>
        <ul className="space-y-5 text-gray-500 cursor-pointer">
          <li>Sign in</li>
          <li>View Cart</li>
          <li>My wishlist</li>
          <li>Track my Order</li>
          <li>Compare products</li>
        </ul>
      </div>
      <div>
        <h1 className="text-lg font-medium pb-3 text-secondary ">Download</h1>
        <ul className="space-y-5 text-gray-500 cursor-pointer">
          <li>From App Store or Google Play</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
