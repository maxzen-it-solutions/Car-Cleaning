import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between z-50 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Cars Buddy" className="h-8 w-auto" />
          <span className="text-xl font-bold">
            <span className="text-yellow-400">Cars</span>Buddy
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-row space-x-6 font-medium text-base">
          <li className="text-yellow-400 font-bold cursor-pointer">Homepage</li>
          <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
          <li className="hover:text-yellow-400 cursor-pointer">Services ▼</li>
          <li className="hover:text-yellow-400 cursor-pointer">Pages ▼</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
        </ul>

        {/* Make Appointment Button - Desktop */}
        <button className="hidden md:block border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition font-semibold">
          Make Appointment
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <X className="text-yellow-400 h-7 w-7" />
            ) : (
              <Menu className="text-yellow-400 h-7 w-7" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 shadow-md"
          >
            {/* Header in mobile menu */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="Cars Buddy" className="h-8 w-auto" />
                <span className="text-xl font-bold">
                  <span className="text-yellow-400">Cars</span>Buddy
                </span>
              </div>
              <button onClick={toggleMenu}>
                <X className="text-yellow-400 h-7 w-7" />
              </button>
            </div>

            {/* Menu links */}
            <ul className="flex flex-col px-6 py-6 space-y-6 text-lg">
              <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
              <li className="hover:text-yellow-400 cursor-pointer">Services </li>
              <li className="hover:text-yellow-400 cursor-pointer">Gallery</li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
            </ul>

            {/* Make Appointment Button */}
            <div className="px-6">
              <button className="w-full border border-white px-5 py-3 rounded-full hover:bg-white hover:text-black transition font-semibold">
                Make Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;