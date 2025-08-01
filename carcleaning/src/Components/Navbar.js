import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/743/743007.png" // Replace with your logo
          alt="AXE Logo"
          className="h-8"
        />
        <span className="text-xl font-bold">
          <span className="text-yellow-400">AXE</span>MOBILE
        </span>
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-8 items-center text-base font-medium">
        <li className="text-yellow-400 font-bold cursor-pointer">Homepage</li>
        <li className="cursor-pointer hover:text-yellow-400 transition">About Us</li>
        <li className="cursor-pointer hover:text-yellow-400 transition">
          Services <span>▼</span>
        </li>
        <li className="cursor-pointer hover:text-yellow-400 transition">
          Pages <span>▼</span>
        </li>
        <li className="cursor-pointer hover:text-yellow-400 transition">Contact Us</li>
      </ul>

      {/* Button */}
      <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
        Make Appointment
      </button>
    </nav>
  );
};

export default Navbar;
