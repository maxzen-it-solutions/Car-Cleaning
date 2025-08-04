// import React from "react";
// import { motion } from "framer-motion";
// import heroBg from '../assets/contactbg1.jpg'; 
// import sideimg from '../assets/hero/side.jpg'
// import sideimg2 from '../assets/hero/side2.jpg'
// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

// const steps = [
//   {
//     step: '01.',
//     title: 'Book Your Appointment',
//     desc: `Choose the detailing service that best fits your needs and schedule an appointment at your convenience.
//            You can book online, call us, or visit our location. We’ll confirm your booking and provide any necessary preparation details.`,
//   },
//   {
//     step: '02.',
//     title: 'We Detail Your Car',
//     desc: `Our professional detailers will carefully clean, restore, and protect your vehicle using high-quality products and techniques.`,
//   },
//   {
//     step: '03.',
//     title: 'Enjoy the Shine',
//     desc: `Once your car is detailed, you’ll experience a finish that looks as good as new. Enjoy the refreshed look and feel of your vehicle.`,
//   },
// ];

// export default function AboutUs() {
//     const [activeIndex, setActiveIndex] = useState(0);
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInView({ triggerOnce: true });

//   useEffect(() => {
//     if (inView && count < 90) {
//       let start = 0;
//       const end = 90;
//       const duration = 1500; // total time in ms
//       const increment = end / (duration / 20); // update every 20ms

//       const counter = setInterval(() => {
//         start += increment;
//         if (start >= end) {
//           start = end;
//           clearInterval(counter);
//         }
//         setCount(Math.floor(start));
//       }, 20);
//     }
//   }, [inView]);

//   return (
//     <div className="bg-black text-white">
//       {/* Hero Section */}
//       <div className="bg-cover bg-center min-h-[70vh] py-20 px-6 md:px-24" style={{ backgroundImage: `url(${heroBg})` }}>
//         <div className="text-center">
//           <h1 className="text-7xl font-bold mb-2">About Us</h1> <br />
//           <p className="text-md text-white-400">
//             <span className=" font-bold text-xl text-yellow-400">Home</span> / About Us
//           </p>
//         </div>
//       </div>

       


// <section className="bg-black text-white py-20 px-6 ">
//   <div className="grid grid-cols-12 items-start gap-4">
//     {/* Left Text Content */}
//     <div className="col-span-12 md:col-span-9">
//       <h3 className="text-left font-bold uppercase text-sm md:text-base tracking-widest text-gray-400 mb-3">
//         Know Us More
//       </h3>

//        <motion.h2
//   initial={{ opacity: 0, x: -100 }} // Start from left
//   whileInView={{ opacity: 1, x: 0 }} // Move to original position
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
//   className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
// >
//  Enhancing Your <span className="text-yellow-400">Driving Experience</span> <br />
//         with Professional Car Detailing &amp; <br />
//         Maintenance
// </motion.h2>

  
//     </div>

//     {/* Right Button */}
//     <div className="col-span-12 md:col-span-3 flex md:justify-end mt-4 md:mt-14">
//       <a
//         href="/contact"
//         className="inline-block bg-yellow-400 text-black font-semibold text-base md:text-lg px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition duration-300"
//       >
//         Let's Get In Touch
//       </a>
//     </div>
//   </div>

//   <br />

//   {/* Features & Image Side-by-Side */}
//   <div className="grid md:grid-cols-2 gap-12 items-center">
//     {/* Feature Content List */}
//     <div>
//       <p className="text-left text-gray-400 text-base md:text-xl leading-relaxed">
//         Experience smoother, more enjoyable driving with expert car detailing 
//         and maintenance that keeps your vehicle clean, protected, and running at its best.
//       </p>

//       <br />

//       {[
//         {
//           title: 'Passion For Perfection, Commitment To Quality',
//           text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
//         },
//         {
//           title: 'Bringing New Life To Your Car, One Detail At A Time',
//           text: 'Morbi quis sapien commodo, convallis mi quis, pharetra dui. Nam finibus mi ligula, nec consequat felis pretium vel mauris.',
//         },
//         {
//           title: 'Your Car Deserves The Best – We Make It Happen',
//           text: 'Integer lacinia consectetur leo, sed egestas neque lobortis nec. Vestibulum mattis, eget bibendum massa.',
//         },
//       ].map((item, index) => (
//         <div key={index}>
//           <div className="flex items-start">
//             <div className="text-lg font-bold bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded shadow mr-4">
//               {`0${index + 1}`}
//             </div>
//             <div>
//               <h4 className="text-left font-semibold text-white text-lg md:text-xl mb-2">
//                 {item.title}
//               </h4>
//               <p className="text-left text-gray-400 text-sm md:text-base leading-relaxed">
//                 {item.text}
//               </p>
//             </div>
//           </div>
//           {index < 2 && <hr className="my-6 border-gray-500" />}
//         </div>
//       ))}
//     </div>

//     {/* Image */}
//     <div>
//       <img src={sideimg} alt="Car Detailing" className="w-full object-cover rounded-xl shadow-xl" />
//     </div>
//   </div>
// </section>

// <section className="bg-[#1A1A1A] text-white px-6 md:px-15 py-20">
//   <div className="grid md:grid-cols-3 gap-12 items-start">

//     {/* Left side: 90% block */}
//     <div className="flex flex-col justify-between h-full">
//       <h3 className="text-gray-400 font-bold uppercase tracking-widest text-base xl:text-lg mb-4">
//         Why Choose Us?
//       </h3>


          

//       <div className="mt-auto">
//          <div ref={ref}>
//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-7xl md:text-8xl font-bold text-yellow-400"
//       >
//         {count}%
//       </motion.h1>
//     </div>
//         <p className="mt-6 text-base md:text-lg text-gray-300 font-medium leading-relaxed">
//           <span className="font-semibold text-white">Many have felt the pleasure</span> of our service and many have entrusted their vehicles to us
//         </p>
//       </div>
//     </div>

//     {/* Right side */}
//     <div className="md:col-span-2">

//       {/* Animated Heading */}
//       <motion.h2
//   initial={{ opacity: 0, x: -100 }} // Start from left
//   whileInView={{ opacity: 1, x: 0 }} // Move to original position
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
//   className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
// >
//   Unmatched Quality, Precision, And<br />
//   <span className="text-yellow-400">Care for Your Car</span>
// </motion.h2>


//       {/* Tagline & Description */}
//       <div className="grid md:grid-cols-4 gap-8 mb-12">
//         <div className="col-span-1 text-left text-white text-2xl md:text-3xl font-semibold leading-snug">
//           Excellence <br /> in Every <br /> Detail
//         </div>
//         <p className="col-span-3 text-left text-gray-400 text-base md:text-xl leading-relaxed">
//           We deliver unmatched quality, precision, and care in every car detailing service we provide. From meticulous cleaning to expert polishing, every detail is handled with professionalism to ensure your vehicle looks its absolute best.
//         </p>
//       </div>

//       {/* Animated Feature Grid */}
//       <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
//         {[
//           {
//             num: "01",
//             title: "Professional Expertise",
//             desc: "Our skilled detailers use top-quality products and techniques to ensure the best results for your vehicle.",
//           },
//           {
//             num: "02",
//             title: "Premium Quality Products",
//             desc: "We only use high-grade, eco-friendly detailing products that are safe for your car and the environment.",
//           },
//           {
//             num: "03",
//             title: "Attention To Detail",
//             desc: "We focus on every inch of your vehicle, delivering a flawless finish that exceeds expectations.",
//           },
//           {
//             num: "04",
//             title: "Customer Satisfaction Guaranteed",
//             desc: "We prioritize your satisfaction, offering personalized service and outstanding results every time.",
//           },
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="text-yellow-400 font-bold text-base md:text-lg mb-2">{item.num}</div>
//             <hr className="border-gray-600 mb-4" />
//             <h4 className="font-semibold text-white text-lg md:text-xl mb-2">{item.title}</h4>
//             <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </div>
// </section>






// <section className="bg-black text-white py-24 px-6 md:px-20 ">
//   {/* Heading */}
//   <motion.div
//     initial={{ opacity: 0, scale: 0.95 }}
//     whileInView={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//     className="text-center mb-20"
//   >
//     <h3 className="text-gray-400 font-bold uppercase tracking-widest text-base xl:text-lg mb-4">
//       Customer Reviews
//     </h3>
//     <h2 className="text-5xl xl:text-6xl font-bold leading-tight">
//       Customer <span className="text-yellow-400">Experiences</span> <br />
//       That Speak For Themselves
//     </h2>
//   </motion.div>

//   {/* Reviews Grid */}
//   <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
//     {[
//       {
//         text: "Absolutely incredible service! My car looks brand new inside and out. The attention to detail was phenomenal. I couldn’t be happier with the results. Highly recommend!",
//         name: "Raul Axios",
//         role: "Auto Dealer",
//         img: "https://axemobile.widagdos.net/images/team/6Team20.jpg",
//         anim: { x: -100 },
//       },
//       {
//         text: "Absolutely incredible service! My car looks brand new inside and out. The attention to detail was phenomenal. I couldn’t be happier with the results. Highly recommend!",
//         name: "Taki Wanabe",
//         role: "Vintage Car Owner",
//         img: "https://axemobile.widagdos.net/images/team/6Team16.jpg",
//         anim: { y: 100 },
//       },
//       {
//         text: "This is the best detailing service I’ve ever had. My car looks immaculate, and it feels like I’m driving a completely different vehicle. I’ll be a loyal customer from now on!",
//         name: "Akio Mirfaq",
//         role: "Car Owner",
//         img: "https://axemobile.widagdos.net/images/team/6Team17.jpg",
//         anim: { x: 100 },
//       },
//       {
//         text: "I’ve used many car detailing services before, but this one exceeded my expectations. The team was professional, friendly, and did an amazing job on my vehicle. It looks flawless!",
//         name: "Ubeid Una",
//         role: "Car Owner",
//         img: "https://axemobile.widagdos.net/images/team/6Team9.jpg",
//         anim: { x: -100 },
//       },
//       {
//         text: "The service here is outstanding. The team took extra care in detailing my car, and the results are nothing short of amazing. I will definitely return for regular maintenance!",
//         name: "Hafsha Jasmine",
//         role: "Auto Dealer",
//         img: "https://axemobile.widagdos.net/images/team/6Team2.jpg",
//         anim: { y: 100 },
//       },
//       {
//         text: "From the moment I walked in, I knew I was in good hands. The staff was knowledgeable and friendly, and they did an incredible job on my car. It’s spotless, inside and out!",
//         name: "Olivia Seamo",
//         role: "Car Collector",
//         img: "https://axemobile.widagdos.net/images/team/6Team4.jpg",
//         anim: { x: 100 },
//       },
//     ].map((review, index) => (
//       <motion.div
//         key={index}
//         initial={{ ...review.anim, opacity: 0 }}
//         whileInView={{ x: 0, y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: index * 0.1 }}
//         viewport={{ once: true }}
//         className="bg-zinc-900 min-h-[380px] min-w-[320px] p-10 xl:p-4 rounded-md shadow-lg transition-all duration-300"
//       >
//         <p className="mb-10 text-xl text-gray-200 leading-relaxed">{review.text}</p>
//         <div className="flex items-center gap-5">
//           <img
//             src={review.img}
//             alt={review.name}
//             className="w-16 h-16 rounded-full object-cover border border-gray-700"
//           />
//           <div>
//             <h4 className="font-bold text-xl">{review.name}</h4>
//             <p className="text-sm text-gray-400">{review.role}</p>
//           </div>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </section>



//  <section className="bg-[#1A1A1A] text-white py-20 px-6 md:px-15">
//       <div className="grid grid-cols-12 items-start gap-4">
//         {/* Heading */}
//         <div className="col-span-12 md:col-span-9">
//           <h3 className="text-left font-bold uppercase text-sm md:text-base tracking-widest text-gray-400 mb-3">
//             How It Works
//           </h3>
//                     <motion.h2
//             initial={{ opacity: 0, x: -100 }} // Start from left
//             whileInView={{ opacity: 1, x: 0 }} // Move to original position
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
//           >
//             Obtain Your Car's History <br />
//             <span className="text-white-400">In Just Three Easy Steps.</span>
//           </motion.h2>

          
//           <a
//             href="/contact"
//             className="inline-block bg-yellow-400 text-black font-semibold text-base md:text-lg px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition duration-300"
//           >
//             Let's Get In Touch
//           </a>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
//         {/* Steps Accordion */}
//         <div>
//           {steps.map((item, index) => (
//             <div key={index}>
//               <div
//                 className="flex items-start cursor-pointer group"
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <div className="text-lg font-bold text-gray-400 w-10 h-10 flex items-center justify-center rounded shadow mr-4">
//                   {item.step}
//                 </div>
//                 <div>
//                   <h4 className="text-left font-semibold text-gray-100 text-lg md:text-xl mb-2 group-hover:text-yellow-400">
//                     {item.title}
//                   </h4>
//                   {activeIndex === index && (
//                     <p className="text-left text-gray-400 text-sm md:text-base leading-relaxed">
//                       {item.desc}
//                     </p>
//                   )}
//                 </div>
//               </div>
//               {index < steps.length - 1 && (
//                 <hr className="my-4 border-gray-600" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Image with Overlay */}
//         <div className="relative rounded-xl overflow-hidden shadow-xl">
//           <img
//             src={sideimg2}
//             alt="Car Detailing"
//             className="w-full h-full object-cover rounded-xl max-h-[500px]"
//           />
//             <motion.div
//   initial={{ opacity: 0, y: 50 }}       // Start slightly below
//   whileInView={{ opacity: 1, y: 0 }}    // Animate to normal position
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
//   className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white px-6 py-4 rounded-lg max-w-[85%]"
// >
//   <p className="text-base md:text-lg leading-snug font-medium">
//     “Your car deserves more than a quick wash. Our detailing services
//     are designed to go the extra mile, restoring its beauty and
//     protecting it from the elements, so it continues to turn heads
//     wherever you go.”
//   </p>
// </motion.div>

          

//         </div>
//       </div>
//     </section>


//                <section className="relative z-10 py-16 px-4 bg-gradient-to-br from-black via-zinc-900 to-black text-white">
//       <div className="max-w-4xl mx-auto text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-12 shadow-2xl">
        
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl font-extrabold mb-6 text-white-400"
//         >
//           Your Car's Best Look Is Just One Detail Away
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="text-xl md:text-2xl mb-8 text-white/90"
//         >
//           Book Your Detailing Today! And Get <span className="text-yellow-400 font-bold">30% Cut Off</span>
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-yellow-400 text-black font-bold py-3 px-10 rounded-full text-lg transition duration-300 shadow-lg hover:bg-yellow-300"
//         >
//           Booking Now
//         </motion.button>
        
//       </div>
//       </section>
//     </div>
//   );
// }
//---------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import heroBg from '../assets/contactbg1.jpg'; 
// import sideimg from '../assets/hero/side.jpg'
// import sideimg2 from '../assets/hero/side2.jpg'

// const steps = [
//   {
//     step: '01.',
//     title: 'Book Your Appointment',
//     desc: `Choose the detailing service that best fits your needs and schedule an appointment at your convenience.
//            You can book online, call us, or visit our location. We’ll confirm your booking and provide any necessary preparation details.`,
//   },
//   {
//     step: '02.',
//     title: 'We Detail Your Car',
//     desc: `Our professional detailers will carefully clean, restore, and protect your vehicle using high-quality products and techniques.`,
//   },
//   {
//     step: '03.',
//     title: 'Enjoy the Shine',
//     desc: `Once your car is detailed, you’ll experience a finish that looks as good as new. Enjoy the refreshed look and feel of your vehicle.`,
//   },
// ];

// export default function AboutUs() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInView({ triggerOnce: true });

//   useEffect(() => {
//     if (inView && count < 90) {
//       let start = 0;
//       const end = 90;
//       const duration = 1500;
//       const increment = end / (duration / 20);
//       const counter = setInterval(() => {
//         start += increment;
//         if (start >= end) {
//           start = end;
//           clearInterval(counter);
//         }
//         setCount(Math.floor(start));
//       }, 20);
//     }
//   }, [inView]);

//   return (
//     <div className="bg-black text-white">
//       {/* Hero Section */}
//       <div className="bg-cover bg-center min-h-[70vh] py-20 px-6 md:px-24" style={{ backgroundImage: `url(${heroBg})` }}>
//         <div className="text-center">
//           <h1 className="text-7xl font-bold mb-2">About Us</h1>
//           <p className="text-md text-white-400">
//             <span className="font-bold text-xl text-yellow-400">Home</span> / About Us
//           </p>
//         </div>
//       </div>

//       {/* Know Us More Section */}
//       <section className="bg-black text-white py-20 px-6">
//         <div className="grid grid-cols-12 items-start gap-4">
//           <div className="col-span-12 md:col-span-9">
//             <h3 className="uppercase font-bold text-sm md:text-base text-gray-400 mb-3">Know Us More</h3>

//             {/* Responsive Heading Variants */}
//             <motion.h2
//               initial={{ opacity: 0, x: -100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
//             >
//               <div className="sm:block md:hidden lg:hidden xl:hidden">
//                 Enhance Your <span className="text-yellow-400">Experience</span> 
//               </div>
//               <div className="sm:hidden md:block lg:hidden xl:hidden">
//                 Enhance Your <span className="text-yellow-400">Experience</span> 
//               </div>
//               <div className="sm:hidden md:hidden lg:block xl:block">
//                 Enhancing Your <span className="text-yellow-400">Driving Experience</span> <br />
//                 with Professional Car Detailing &amp; <br />
//                 Maintenance
//               </div>
//             </motion.h2>
//           </div>

//           {/* CTA Button */}
//           <div className="col-span-12 md:col-span-3 flex md:justify-end mt-4 md:mt-14">
//             {/* Desktop */}
//             <a
//               href="/contact"
//               className="sm:hidden md:hidden lg:block xl:block inline-block bg-yellow-400 text-black font-semibold text-base md:text-lg px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition duration-300"
//             >
//               Let’s Get In Touch
//             </a>
//             {/* Tablet */}
//             <a
//               href="/contact"
//               className="sm:hidden md:block lg:hidden xl:hidden inline-block bg-yellow-400 text-black font-semibold text-base px-6 py-3 rounded-full"
//             >
//               Contact Us 
//             </a>
//             {/* Mobile */}
//             <a
//               href="/contact"
//               className="sm:block md:hidden lg:hidden xl:hidden inline-block bg-yellow-400 text-black font-semibold text-base px-5 py-2 rounded-full"
//             >
//               Contact Us 
//             </a>
//           </div>
//         </div>

//         {/* Side-by-side image and features */}
//         <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
//           <div>
//             <p className="text-left text-gray-400 text-base md:text-xl leading-relaxed">
//               Experience smoother, more enjoyable driving with expert car detailing and maintenance that keeps your vehicle clean, protected, and running at its best.
//             </p>

//             <br />

//             {[...Array(3)].map((_, index) => {
//               const titles = [
//                 "Passion For Perfection, Commitment To Quality",
//                 "Bringing New Life To Your Car, One Detail At A Time",
//                 "Your Car Deserves The Best – We Make It Happen",
//               ];
//               const texts = [
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//                 "Morbi quis sapien commodo, convallis mi quis...",
//                 "Integer lacinia consectetur leo, sed egestas neque...",
//               ];
//               return (
//                 <div key={index}>
//                   <div className="flex items-start">
//                     <div className="text-lg font-bold bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded shadow mr-4">
//                       {`0${index + 1}`}
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-white text-lg md:text-xl mb-2">{titles[index]}</h4>
//                       <p className="text-gray-400 text-sm md:text-base leading-relaxed">{texts[index]}</p>
//                     </div>
//                   </div>
//                   {index < 2 && <hr className="my-6 border-gray-500" />}
//                 </div>
//               );
//             })}
//           </div>

//           <div>
//             <img src={sideimg} alt="Car Detailing" className="w-full object-cover rounded-xl shadow-xl" />
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="bg-[#1A1A1A] text-white px-6 md:px-15 py-20">
//         <div className="grid md:grid-cols-3 gap-12 items-start">
//           <div className="flex flex-col justify-between h-full">
//             <h3 className="text-gray-400 font-bold uppercase tracking-widest text-base xl:text-lg mb-4">Why Choose Us?</h3>

//             <div className="mt-auto">
//               <div ref={ref}>
//                 <motion.h1
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1 }}
//                   className="text-7xl md:text-8xl font-bold text-yellow-400"
//                 >
//                   {count}%
//                 </motion.h1>
//               </div>
//               <p className="mt-6 text-base md:text-lg text-gray-300 font-medium leading-relaxed">
//                 <span className="font-semibold text-white">Many have felt the pleasure</span> of our service and many have entrusted their vehicles to us
//               </p>
//             </div>
//           </div>

//           <div className="md:col-span-2">
//             <motion.h2
//               initial={{ opacity: 0, x: -100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
//             >
//               Unmatched Quality, Precision, And <br />
//               <span className="text-yellow-400">Care for Your Car</span>
//             </motion.h2>

//             <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
//               {[
//                 ["01", "Professional Expertise", "Our skilled detailers use top-quality products and techniques..."],
//                 ["02", "Premium Quality Products", "We only use high-grade, eco-friendly detailing products..."],
//                 ["03", "Attention To Detail", "We focus on every inch of your vehicle, delivering..."],
//                 ["04", "Customer Satisfaction Guaranteed", "We prioritize your satisfaction, offering personalized service..."],
//               ].map(([num, title, desc], index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="text-yellow-400 font-bold text-base md:text-lg mb-2">{num}</div>
//                   <hr className="border-gray-600 mb-4" />
//                   <h4 className="font-semibold text-white text-lg md:text-xl mb-2">{title}</h4>
//                   <p className="text-gray-400 text-sm md:text-base leading-relaxed">{desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* The rest of the sections (Customer Reviews, Steps, Final CTA) can be structured the same way */}
//       {/* Add responsive wrappers around major content blocks as needed */}

//       {/* Final Call To Action */}
//       <section className="relative z-10 py-16 px-4 bg-gradient-to-br from-black via-zinc-900 to-black text-white">
//         <div className="max-w-4xl mx-auto text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-12 shadow-2xl">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-4xl md:text-5xl font-extrabold mb-6 text-white-400"
//           >
//             Your Car's Best Look Is Just One Detail Away
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-xl md:text-2xl mb-8 text-white/90"
//           >
//             Book Your Detailing Today! And Get <span className="text-yellow-400 font-bold">30% Cut Off</span>
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-yellow-400 text-black font-bold py-3 px-10 rounded-full text-lg transition duration-300 shadow-lg hover:bg-yellow-300"
//           >
//             Booking Now
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroBg from '../assets/contactbg1.jpg'; 
import sideimg from '../assets/hero/side.jpg'
import sideimg2 from '../assets/hero/side2.jpg'

const steps = [
  {
    step: '01.',
    title: 'Book Your Appointment',
    desc: `Choose the detailing service that best fits your needs and schedule an appointment at your convenience.
           You can book online, call us, or visit our location. We’ll confirm your booking and provide any necessary preparation details.`,
  },
  {
    step: '02.',
    title: 'We Detail Your Car',
    desc: `Our professional detailers will carefully clean, restore, and protect your vehicle using high-quality products and techniques.`,
  },
  {
    step: '03.',
    title: 'Enjoy the Shine',
    desc: `Once your car is detailed, you’ll experience a finish that looks as good as new. Enjoy the refreshed look and feel of your vehicle.`,
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && count < 90) {
      let start = 0;
      const end = 90;
      const duration = 1500;
      const increment = end / (duration / 20);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 20);
    }
  }, [inView]);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center min-h-[70vh] py-20 px-6 md:px-24"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">About Us</h1>
          <br />
          <p className="text-md text-white-400">
            <span className="font-bold text-xl text-yellow-400">Home</span> / About Us
          </p>
        </div>
      </div>

      {/* Know Us More Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="grid grid-cols-12 items-start gap-4">
          <div className="col-span-12 md:col-span-9">
            <h3 className="uppercase font-bold text-sm md:text-base text-gray-400 mb-3">
              Know Us More
            </h3>
            {/* Responsive Heading Variants */}
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-bold mb-6 leading-tight"
            >
              {/* Mobile */}
              <span className="sm:block md:hidden lg:hidden xl:hidden text-2xl">
                Enhance Your <span className="text-yellow-400">Experience</span>
              </span>
              {/* Tablet */}
              <span className="sm:hidden md:block lg:hidden xl:hidden text-3xl">
                Enhance Your <span className="text-yellow-400">Driving Experience</span>
              </span>
              {/* Desktop/Laptop */}
              <span className="sm:hidden md:hidden lg:block xl:block text-3xl md:text-5xl">
                Enhancing Your <span className="text-yellow-400">Driving Experience</span> <br />
                with Professional Car Detailing &amp; <br />
                Maintenance
              </span>
            </motion.h2>
          </div>

          {/* CTA Button */}
          <div className="col-span-12 md:col-span-3 flex md:justify-end mt-4 md:mt-14">
            {/* Desktop/Laptop */}
            <a
              href="/contact"
              className="sm:hidden md:hidden lg:block xl:block inline-block bg-yellow-400 text-black font-semibold text-base md:text-lg px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition duration-300"
            >
              Let’s Get In Touch
            </a>
            {/* Tablet */}
            <a
              href="/contact"
              className="sm:hidden md:block lg:hidden xl:hidden inline-block bg-yellow-400 text-black font-semibold text-base px-6 py-3 rounded-full"
            >
              Contact Us
            </a>
            {/* Mobile */}
            <a
              href="/contact"
              className="sm:block md:hidden lg:hidden xl:hidden inline-block bg-yellow-400 text-black font-semibold text-base px-5 py-2 rounded-full"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Side-by-side image and features */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <p className="text-left text-gray-400 text-base md:text-xl leading-relaxed">
              Experience smoother, more enjoyable driving with expert car detailing and maintenance that keeps your vehicle clean, protected, and running at its best.
            </p>
            <br />
            {[
              {
                title: 'Passion For Perfection, Commitment To Quality',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
              },
              {
                title: 'Bringing New Life To Your Car, One Detail At A Time',
                text: 'Morbi quis sapien commodo, convallis mi quis, pharetra dui. Nam finibus mi ligula, nec consequat felis pretium vel mauris.',
              },
              {
                title: 'Your Car Deserves The Best – We Make It Happen',
                text: 'Integer lacinia consectetur leo, sed egestas neque lobortis nec. Vestibulum mattis, eget bibendum massa.',
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-start">
                  <div className="text-lg font-bold bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded shadow mr-4">
                    {`0${index + 1}`}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg md:text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.text}</p>
                  </div>
                </div>
                {index < 2 && <hr className="my-6 border-gray-500" />}
              </div>
            ))}
          </div>
          <div>
            <img src={sideimg} alt="Car Detailing" className="w-full object-cover rounded-xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#1A1A1A] text-white px-6 md:px-15 py-20">
        <div className="grid md:grid-cols-3 gap-12 items-start">
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
                  className="text-5xl sm:text-7xl md:text-8xl font-bold text-yellow-400"
                >
                  {count}%
                </motion.h1>
              </div>
              <p className="mt-6 text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                <span className="font-semibold text-white">Many have felt the pleasure</span> of our service and many have entrusted their vehicles to us
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
            >
              Unmatched Quality, Precision, And <br />
              <span className="text-yellow-400">Care for Your Car</span>
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 text-left text-white text-xl md:text-3xl font-semibold leading-snug">
                Excellence <br /> in Every <br /> Detail
              </div>
              <p className="col-span-3 text-left text-gray-400 text-base md:text-xl leading-relaxed">
                We deliver unmatched quality, precision, and care in every car detailing service we provide. From meticulous cleaning to expert polishing, every detail is handled with professionalism to ensure your vehicle looks its absolute best.
              </p>
            </div>
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
                  <div className="text-yellow-400 font-bold text-base md:text-lg mb-2">{item.num}</div>
                  <hr className="border-gray-600 mb-4" />
                  <h4 className="font-semibold text-white text-lg md:text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
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
              <p className="mb-10 text-xl text-gray-200 leading-relaxed">{review.text}</p>
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

      {/* How It Works Section */}
      <section className="bg-[#1A1A1A] text-white py-20 px-6 md:px-15">
        <div className="grid grid-cols-12 items-start gap-4">
          {/* Heading */}
          <div className="col-span-12 md:col-span-9">
            <h3 className="text-left font-bold uppercase text-sm md:text-base tracking-widest text-gray-400 mb-3">
              How It Works
            </h3>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight"
            >
              Obtain Your Car's History <br />
              <span className="text-white-400">In Just Three Easy Steps.</span>
            </motion.h2>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-black font-semibold text-base md:text-lg px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition duration-300"
            >
              Let's Get In Touch
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          {/* Steps Accordion */}
          <div>
            {steps.map((item, index) => (
              <div key={index}>
                <div
                  className="flex items-start cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="text-lg font-bold text-gray-400 w-10 h-10 flex items-center justify-center rounded shadow mr-4">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-left font-semibold text-gray-100 text-lg md:text-xl mb-2 group-hover:text-yellow-400">
                      {item.title}
                    </h4>
                    {activeIndex === index && (
                      <p className="text-left text-gray-400 text-sm md:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <hr className="my-4 border-gray-600" />
                )}
              </div>
            ))}
          </div>
          {/* Image with Overlay */}
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src={sideimg2}
              alt="Car Detailing"
              className="w-full h-full object-cover rounded-xl max-h-[500px]"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white px-6 py-4 rounded-lg max-w-[85%]"
            >
              <p className="text-base md:text-lg leading-snug font-medium">
                “Your car deserves more than a quick wash. Our detailing services
                are designed to go the extra mile, restoring its beauty and
                protecting it from the elements, so it continues to turn heads
                wherever you go.”
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Call To Action */}
      <section className="relative z-10 py-16 px-4 bg-gradient-to-br from-black via-zinc-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-12 shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white-400"
          >
            Your Car's Best Look Is Just One Detail Away
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90"
          >
            Book Your Detailing Today! And Get <span className="text-yellow-400 font-bold">30% Cut Off</span>
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black font-bold py-3 px-10 rounded-full text-lg transition duration-300 shadow-lg hover:bg-yellow-300"
          >
            Booking Now
          </motion.button>
        </div>
      </section>
      </div>


          );
        }