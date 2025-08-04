import React from "react";
import Blog from "../Assests/blog_1.jpg";
import Blogtwo from "../Assests/blog_2.jpg"
import Blogthree from "../Assests/blog-show.jpg"

function Prices() {
  const Carwash = [
    {
      id: 1,
      wash: "Basic Wash",
      img: Blog,
      price: "₹299",
      discription: [
        "Exterior Hand Wash",
        "Rinse & Dry",
        "Tire Shine"
      ]
    },
    {
      id: 2,
      wash: "Deluxe Wash",
      img: Blogtwo,
      price: "₹699",
      discription: [
        "All Basic Wash services",
        "Interior Vacuuming",
         "Dashboard Wipe-down",
         "Window Cleaning (Inside & Out)"
      ]
    },
    {
      id: 3,
      wash: "Premium Detailing",
      img: Blogthree,
      price: "₹999",
      discription: [
        "All Basic Wash services",
        "Wax & Polish for Shine",
         "Deep Interior Cleaning",
         "Door Panel & Trim Dressing"
      ]
    }
  ];

  return (
    <div className="bg-black w-full">
      <div className="flex flex-col text-white gap-10 p-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="text-white font-bold text-4xl">PRICING</div>
          <div className="font-semibold text-2xl text-gray-400">
            Keep your car looking brand new with our professional car wash packages.
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-1 md:ml-32 lg:ml-14 lg:grid-cols-2 lg:gap-5 xl:grid-cols-3 md:justify-center animate-fadeLeft">
          {Carwash.map((cars) => (
            <div
              key={cars.id}
              className="md:w-96 md:h-96 card shadow-lg rounded bg-gray-800 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${cars.img})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded"></div>

              <div className="flex flex-col text-white p-5 justify-center items-center text-center gap-5 mt-6 relative z-10">
                <div className="text-xl md:text-3xl font-bold" style={{ fontFamily: "inter" }}>
                  {cars.wash}
                </div>
                <div className="text-base md:text-2xl font-bold">{cars.price}</div>
                <ul className="text-base md:text-lg font-semibold">
                  {cars.discription.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div>
                  <button className="bg-yellow-400 text-black text-sm md:text-base  md:w-36 px-2 py-2 font-semibold rounded-full">
                    Booking Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prices;
