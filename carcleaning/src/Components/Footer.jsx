import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* Left: Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.svg" alt="Cars Buddy Logo" className="h-10" />
            <span className="text-3xl font-bold">
              <span className="text-yellow-400">Cars</span>Buddy
            </span>
          </div>
          <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-xs">
            Providing Premium Car Detailing Services That Bring Out the Best in Your Vehicle, Ensuring a Showroom Shine Every Time.
          </p>
          <button className="w-full md:w-auto border border-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-white hover:text-black transition">
            Contact Us →
          </button>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-2xl font-semibold mb-2">Navigation</h4>
          <div className="h-px bg-gray-600 mb-4 w-24 md:w-4/5"></div>
          <ul className="space-y-3 text-lg text-gray-400">
            <li className="text-yellow-400 font-semibold">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
            <li className="hover:text-yellow-400 cursor-pointer">Gallery</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Right: Office & Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-10">
          <div>
            <h4 className="text-2xl font-semibold mb-2">Visit Our Office</h4>
            <div className="h-px bg-gray-600 mb-4 w-24 md:w-4/5"></div>
            <p className="text-lg text-gray-400 leading-relaxed">
              123 Serenity Lane, Blissfield, CA<br />
              90210, United States
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-2">Contact Info</h4>
            <div className="h-px bg-gray-600 mb-4 w-24 md:w-4/5"></div>
            <p className="text-lg text-gray-400 mb-2">(555) 123-4567</p>
            <p className="text-lg text-gray-400">Info@Yourmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-16 text-sm">
        Copyright © 2025 Widagdos. All Rights Reserved.
      </div>
    </footer>
  );
}