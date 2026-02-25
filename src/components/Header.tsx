import React from "react";

interface Props {
  title: string;
  center?: boolean;
}

const Header = ({ title, center = false }: Props) => {
  return (
    <div className={`mb-6 ${center ? "text-center" : "text-left"}`}>
      
      {/* Small Tagline */}
      <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
        RoadSafety Authority
      </span>

      {/* Main Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
        {title}
      </h1>

      {/* Decorative Line */}
      <div
        className={`mt-3 h-1 w-16 bg-blue-700 rounded ${
          center ? "mx-auto" : ""
        }`}
      ></div>
    </div>
  );
};

export default Header;
