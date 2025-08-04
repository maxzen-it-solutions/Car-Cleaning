import React from 'react'
import Background from "../Assests/commpagesbg.jpg";

function Yourcars() {
  return (
    <div
      class="h-96 bg-cover md:bg-cover bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div class="text-center flex flex-col justify-center items-center gap-5">
        <h1 class="text-xl md:text-3xl xl:text-4xl lg:text-4xl font-bold text-white drop-shadow-lg">
          Your Car’s Best Look Is Just One Detail Away
        </h1>
        <div class="text-xl md:text-2xl font-bold text-white drop-shadow-lg">Book Your Detailing Today! And <p className='text-yellow-500'>Get 30% Cut Off</p></div>
        <button class="bg-yellow-400 text-black text-base md:text-xl md:w-44 px-2 py-2 text-semibold rounded-full">
            Booking Now
      </button>
      </div>

    </div>
  )
}

export default Yourcars