import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <h1 className="logo text-2xl font-bold text-white tracking-wide cursor-pointer transition duration-300">
          MedGuide
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
