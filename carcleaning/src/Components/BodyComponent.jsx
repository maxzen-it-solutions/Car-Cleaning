import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { FaUser, FaFolder } from "react-icons/fa";

import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import image from "../assets/image.png";
import bg from "../assets/bg.jpg";

function BodyComponent() {
  const ref = useRef(null);
  const [count, setCount] = useState(90); // You can animate this if needed

  return (
    <div>
      {/* Hero Section */}
     <section className="relative bg-black text-white py-20 px-6 md:px-20 overflow-hidden">
  {/* Responsive Background Image */}
  
  <div
    className="absolute inset-0 bg-no-repeat bg-center mt-[35rem]  bg-cover brightness-110 pointer-events-none z-0 bg-responsive-position"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "contain",
      backgroundPosition: " top bottom ", 
    }}
  />
  <style>
    {`
      @media (min-width: 768px) {
        .bg-responsive-position {
          background-position: bottom center !important;
        }
      }
    `}
  </style>
  


<div className="relative z-10 max-w-screen-xl mx-auto">
          {/* About Section */}
          <div className="grid md:grid-cols-[150px_1fr] gap-8 items-start mb-24">
            <div>
              <h5 className="text-sm uppercase text-gray-400 tracking-wider mt-2">
                About Us
              </h5>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Our Commitment to Providing Premium Car Detailing Services That{" "}
                <span className="text-yellow-400">
                  Bring Out the Best in Your Vehicle, Ensuring a Showroom Shine
                  Every Time
                </span>
              </h2>
            </motion.div>
            <div className="h-px bg-gray-600 w-32 mb-6 ml-44"></div> 
            <p className="text-lg text-gray-300 leading-relaxed text-left max-w-4xl mb-15 ml-32">
              We are committed to delivering premium car detailing services that
              bring out the very best in your vehicle. With meticulous attention
              to every detail, we ensure your car is cleaned, restored, and
              maintained to the highest standards. Our goal is not just to make
              your car look clean, but to give it a showroom-quality shine that
              turns heads.
            </p>
          </div>
  <div className="text-center mb-28">
            <h4 className="text-gray-400 uppercase tracking-wider text-sm mb-2">
              Our Top Solution
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Car Detailing Solutions for <br />
              <span className="text-white">A Flawless Finish</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience comprehensive car detailing solutions designed to
              restore, protect, and enhance your vehicle’s appearance. Our
              expert team ensures every surface is treated with precision,
              delivering a flawless finish that looks and feels like new.
            </p>
          </div>

  {/* Card Grid Section */}
  <div className="max-w-screen-xl mx-auto mt-[13rem] px-6 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Exterior Detailing",
          desc: "Thorough cleaning, polishing, and waxing to restore your car’s shine and protect its paint.",
          animation: { x: -100, opacity: 0 },
          classes: "lg:col-start-1 lg:row-start-1",
        },
        {
          title: "Interior Detailing",
          desc: "Deep cleaning of seats, carpets, dashboard, and all interior surfaces for a fresh, spotless cabin.",
          animation: { y: 100, opacity: 0 },
          classes: "lg:col-start-2 lg:row-start-2",
        },
        {
          title: "Paint Correction",
          desc: "Removing swirl marks, scratches, and oxidation to bring back a flawless, mirror-like finish.",
          animation: { y: 100, opacity: 0 },
          classes: "lg:col-start-3 lg:row-start-2",
        },
        {
          title: "Ceramic Coating",
          desc: "Long-lasting protection against dirt, UV rays, and water spots while enhancing gloss.",
          animation: { x: 100, opacity: 0 },
          classes: "lg:col-start-4 lg:row-start-1",
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          initial={card.animation}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`relative bg-[#1a1a1a] p-6 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 ${card.classes}`}
        >
          {/* Yellow arrow circle */}
          <div className="absolute -top-5 left-5 w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center shadow-xl">
            <span className="text-lg font-bold">→</span>
          </div>

          {/* Card content */}
          <h3 className="text-white text-lg font-semibold mb-2">
            {card.title}
          </h3>
          <p className="text-lg text-gray-300 mb-4">{card.desc}</p>
          <a href="#" className="text-white font-semi-bold underline">
            Read More
          </a>
        </motion.div>
      ))}
    </div>
  </div>
  </div>
</section>


      {/* Customer Reviews Section */}
      <section className="bg-black text-white py-24 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-gray-400 font-bold uppercase tracking-widest text-base xl:text-lg mb-4">
            Customer Reviews
          </h3>
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight">
            Customer <span className="text-yellow-400">Experiences</span> <br />
            That Speak For Themselves
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
          {[
            {
              text: "Absolutely incredible service! My car looks brand new inside and out. The attention to detail was phenomenal. I couldn’t be happier with the results. Highly recommend!",
              name: "Raul Axios",
              role: "Auto Dealer",
              img: "https://axemobile.widagdos.net/images/team/6Team20.jpg",
              anim: { x: -100 },
            },
            {
              text: "Absolutely incredible service! My car looks brand new inside and out. The attention to detail was phenomenal. I couldn’t be happier with the results. Highly recommend!",
              name: "Taki Wanabe",
              role: "Vintage Car Owner",
              img: "https://axemobile.widagdos.net/images/team/6Team16.jpg",
              anim: { y: 100 },
            },
            {
              text: "This is the best detailing service I’ve ever had. My car looks immaculate, and it feels like I’m driving a completely different vehicle. I’ll be a loyal customer from now on!",
              name: "Akio Mirfaq",
              role: "Car Owner",
              img: "https://axemobile.widagdos.net/images/team/6Team17.jpg",
              anim: { x: 100 },
            },
            {
              text: "I’ve used many car detailing services before, but this one exceeded my expectations. The team was professional, friendly, and did an amazing job on my vehicle. It looks flawless!",
              name: "Ubeid Una",
              role: "Car Owner",
              img: "https://axemobile.widagdos.net/images/team/6Team9.jpg",
              anim: { x: -100 },
            },
            {
              text: "The service here is outstanding. The team took extra care in detailing my car, and the results are nothing short of amazing. I will definitely return for regular maintenance!",
              name: "Hafsha Jasmine",
              role: "Auto Dealer",
              img: "https://axemobile.widagdos.net/images/team/6Team2.jpg",
              anim: { y: 100 },
            },
            {
              text: "From the moment I walked in, I knew I was in good hands. The staff was knowledgeable and friendly, and they did an incredible job on my car. It’s spotless, inside and out!",
              name: "Olivia Seamo",
              role: "Car Collector",
              img: "https://axemobile.widagdos.net/images/team/6Team4.jpg",
              anim: { x: 100 },
            },
          ].map((review, index) => (
            <motion.div
              key={index}
              initial={{ ...review.anim, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 min-h-[380px] min-w-[320px] p-10 xl:p-4 rounded-md shadow-lg transition-all duration-300"
            >
              <p className="mb-10 text-xl text-gray-200 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-5">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border border-gray-700"
                />
                <div>
                  <h4 className="font-bold text-xl">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-[#1A1A1A] text-white px-6 md:px-15 py-20">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left side: 90% block */}
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-gray-400 font-bold uppercase tracking-widest text-base xl:text-lg mb-4">
              Why Choose Us?
            </h3>

            <div className="mt-auto">
              <div ref={ref}>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-7xl md:text-8xl font-bold text-yellow-400"
                >
                  {count}%
                </motion.h1>
              </div>
              <p className="mt-6 text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                <span className="font-semibold text-white">
                  Many have felt the pleasure
                </span>{" "}
                of our service and many have entrusted their vehicles to us
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="md:col-span-2">
            {/* Animated Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -100 }} // Start from left
              whileInView={{ opacity: 1, x: 0 }} // Move to original position
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
            >
              Unmatched Quality, Precision, And
              <br />
              <span className="text-yellow-400">Care for Your Car</span>
            </motion.h2>

            {/* Tagline & Description */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 text-left text-white text-2xl md:text-3xl font-semibold leading-snug">
                Excellence <br /> in Every <br /> Detail
              </div>
              <p className="col-span-3 text-left text-gray-400 text-base md:text-xl leading-relaxed">
                We deliver unmatched quality, precision, and care in every car
                detailing service we provide. From meticulous cleaning to expert
                polishing, every detail is handled with professionalism to
                ensure your vehicle looks its absolute best.
              </p>
            </div>

            {/* Animated Feature Grid */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                {
                  num: "01",
                  title: "Professional Expertise",
                  desc: "Our skilled detailers use top-quality products and techniques to ensure the best results for your vehicle.",
                },
                {
                  num: "02",
                  title: "Premium Quality Products",
                  desc: "We only use high-grade, eco-friendly detailing products that are safe for your car and the environment.",
                },
                {
                  num: "03",
                  title: "Attention To Detail",
                  desc: "We focus on every inch of your vehicle, delivering a flawless finish that exceeds expectations.",
                },
                {
                  num: "04",
                  title: "Customer Satisfaction Guaranteed",
                  desc: "We prioritize your satisfaction, offering personalized service and outstanding results every time.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-yellow-400 font-bold text-base md:text-lg mb-2">
                    {item.num}
                  </div>
                  <hr className="border-gray-600 mb-4" />
                  <h4 className="font-semibold text-white text-lg md:text-xl mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.p
              className="text-sm text-gray-400 uppercase tracking-wider mb-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Pricing Plan
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Choose the Perfect Detailing Package for Your Car
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Discover the ideal detailing package tailored to your car’s needs
              and condition. Whether you're looking for a quick refresh or a
              full restoration, our options are designed to deliver exceptional
              results and long-lasting protection.
            </motion.p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic",
                time: "1.5 – 2 Hours",
                price: "$299.99",
                desc: "Designed for regular maintenance, keeping your car clean and fresh.",
                features: [
                  "Exterior hand wash & wax",
                  "Interior vacuum & dusting",
                  "Windows cleaning (inside & out)",
                  "Tire cleaning & shine",
                  "Light interior wipe-down",
                ],
              },
              {
                title: "Premium",
                time: "2 – 3 Hours",
                price: "$499.99",
                desc: "A deep clean inside and out, perfect for cars needing extra attention.",
                features: [
                  "Everything in the Basic Plan",
                  "Deep interior cleaning (seats & carpets)",
                  "Clay bar treatment for paint smoothness",
                  "Engine bay cleaning",
                  "High-quality polish & wax",
                ],
              },
              {
                title: "Ultimate",
                time: "4 – 7 Hours",
                price: "$999.99",
                desc: "Perfect clean like a new car, service for cars needing more extra attention.",
                features: [
                  "Everything in the Premium Plan",
                  "Paint correction (removes swirl marks & scratches)",
                  "Ceramic coating for long-term protection",
                  "Leather conditioning & treatment",
                  "Headlight restoration",
                ],
              },
            ].map((plan, index) => {
              const initialMotion =
                index === 0
                  ? { opacity: 0, x: -60 }
                  : index === 1
                  ? { opacity: 0, y: 60 }
                  : { opacity: 0, x: 60 };

              return (
                <motion.div
                  key={plan.title}
                  initial={initialMotion}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#1A1A1A] p-6 rounded-2xl shadow-md"
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {plan.title}
                    </h3>
                    <span className="text-xs bg-gray-800 px-3 py-1 rounded-md text-white">
                      Estimated Time: {plan.time}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-1">Start With</p>
                    <h4 className="text-4xl font-bold text-yellow-400">
                      {plan.price}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-6">{plan.desc}</p>

                  {/* Button */}
                  <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-300 transition-all">
                    Choose This Plan
                  </button>

                  {/* Features */}
                  <div className="mt-8 bg-[#222] bg-opacity-60 p-5 rounded-xl border border-gray-700">
                    <h5 className="text-md text-white font-semibold mb-4">
                      Feature :
                    </h5>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-gray-300"
                        >
                          <FaCheck className="text-yellow-400 mr-2 mt-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full h-80 flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-60 z-0"
          style={{
            backgroundImage: `url(${bg})`, // Make sure you have imported your image above
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Your Car’s Best Look Is Just One Detail Away
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-200 text-lg sm:text-xl mb-8"
          >
            Book Your Detailing Today! And Get{" "}
            <span className="text-yellow-400 font-semibold">30% Cut Off</span>
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // onClick={() => navigate("/contact")}
            className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full text-lg shadow-md hover:bg-yellow-300 transition-all duration-300"
          >
            Booking Now
          </motion.button>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-4 md:px-10">
        <div className="text-center mb-12">
          <motion.p
            className="text-gray-400 text-sm tracking-widest uppercase"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Blogs & Articles
          </motion.p>

          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Expert Tips & Insights for Car Enthusiasts
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card Template */}
          {[
            {
              src: card1,
              title: "The Ultimate Guide To Engine Cleaning",
              category: "Cleaning",
            },
            {
              src: card2,
              title: "Essential Car Maintenance Tips for Longevity",
              category: "Maintenance",
            },
            {
              src: card3,
              title: "Protecting Your Car Paint from Sun Damage",
              category: "Protection",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group bg-[#111] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 "
            >
              <div className="overflow-hidden">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-74 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-yellow-400 cursor-pointer">
                  {card.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-yellow-400" /> H. Jasmine
                  </span>
                  <span className="flex items-center gap-1">
                    <FaFolder className="text-yellow-400" /> {card.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Keeping your car in top shape requires more than just
                  occasional washing. Regular car detailing...
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BodyComponent;
