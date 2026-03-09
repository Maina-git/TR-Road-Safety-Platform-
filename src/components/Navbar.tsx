import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navlinks } from "../constants";
import { SiTrainerroad } from "react-icons/si";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full top-0 left-0 z-50 transition-all duration-500
      ${scrolled ? "bg-black shadow-lg fixed" : "bg-white/80"}
      `}>
      <div className="w-[90%] md:w-275 mx-auto h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <SiTrainerroad className={`text-3xl ${scrolled ? "text-white" : "text-blue-700"}`} />
          <span className={`font-bold text-xl ${scrolled ? "text-white" : "text-blue-900"}`}>
            RoadSafe
          </span>
        </div>

        <div className="flex gap-8 items-center">
          {Navlinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                to={item.href}
                className={`flex items-center gap-2 font-semibold transition duration-300
                ${scrolled ? "text-white hover:text-blue-400" : "text-gray-600 hover:text-blue-700"}
                `}>
                <Icon className="text-lg"/>
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;













