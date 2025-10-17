import React from "react";
import { FaHeart, FaRegCopyright, FaTrafficLight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-black via-gray-900 to-black text-gray-300 py-4 px-8 flex flex-col sm:flex-row justify-between items-center text-sm md:text-base">
      {/* Left side text */}
      <div className="flex items-center gap-2">
        <FaRegCopyright className="text-gray-400" />
        <span>
          {new Date().getFullYear()} | ERROR 404: RIGHTS NOT FOUND 🚫
        </span>
        <FaTrafficLight className="text-yellow-500 ml-1" />
      </div>

      {/* Right side text */}
      <div className="flex items-center gap-2 mt-2 sm:mt-0">
        <span>MADE WITH</span>
        <FaHeart className="text-red-500 animate-pulse" />
        <span>BY SAI SANTANU</span>
      </div>
    </footer>
  );
};

export default Footer;
