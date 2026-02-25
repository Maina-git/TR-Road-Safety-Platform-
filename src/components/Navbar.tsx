import React from "react";
import { Link } from "react-router-dom";
import { Navlinks } from "../constants";
import { SiTrainerroad } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="w-full top-0 left-0 z-50 bg-white/80 shadow-md">
      <div className="w-[90%] md:w-[1100px] mx-auto h-[80px] flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer">
          <SiTrainerroad className="text-3xl text-blue-700" />
          <span className="font-bold text-xl text-blue-900">
            RoadSafe
          </span>
        </div>


        <div className="flex gap-8">
          {Navlinks.map((item) => {
            return (
              <Link
                key={item.id}
                to={item.href}
                className="relative font-semibold text-gray-600 hover:text-blue-700 transition duration-300">
                {item.title}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
