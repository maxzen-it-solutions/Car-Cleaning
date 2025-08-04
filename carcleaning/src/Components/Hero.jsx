import React from 'react'
import { motion } from "framer-motion";

function Hero() {
 return (
    <section className="relative bg-cover bg-center min-h-[90vh]" style={{ backgroundImage: "url('/Assests/Hero/hero_slider_bg_1.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white">
        {/* Heading and Button */}
        <motion.h1
  initial={{ x: -300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
  className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 max-w-3xl"
>
  Bring Back the New Car Feel with Our Professional Detailing
</motion.h1>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-6 py-3 rounded-full mb-14 transition">
          Let’s Get Started
        </button>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 bg-opacity-90 p-6 rounded-2xl shadow-lg">
            <h3 className="text-white text-xl font-bold mb-2">Advanced Detailing Technology</h3>
            <p className="text-gray-300">
              Our professional detailing restores your car’s original beauty, leaving it fresh, clean, and like new.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-90 p-6 rounded-2xl shadow-lg">
            <h3 className="text-white text-xl font-bold mb-2">Eco-Friendly Products</h3>
            <p className="text-gray-300">
              Experience that brand-new car feeling again with our expert detailing that revitalizes every inch.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-90 p-6 rounded-2xl shadow-lg">
            <h3 className="text-white text-xl font-bold mb-2">Satisfaction Guarantee</h3>
            <p className="text-gray-300">
              We bring back your car’s shine, comfort, and cleanliness through professional detailing services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero