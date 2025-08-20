// 'use client';
// import React, { useState } from 'react';
// import tempoTravellerImage from '../../public/vechicals/tempo-traveller.jpg';
// import miniBusImage from '../../public/vechicals/mini-bus.jpg';
// import busImage from '../../public/vechicals/bus.jpg';
// import carImage from '../../public/vechicals/car.jpg';
// import Image from 'next/image';

// const vehicleOptions = [
//   {
//     id: 'tempo-traveller',
//     name: 'Tempo Traveller',
//     image: tempoTravellerImage,
//     seats: ['13', '17', '20', '26'],
//   },
//   {
//     id: 'mini-bus',
//     name: 'Mini Bus',
//     image: miniBusImage,
//     seats: ['27', '29', '32', '35'],
//   },
//   {
//     id: 'bus',
//     name: 'Bus',
//     image: busImage,
//     seats: ['37', '40', '45', '49'],
//   },
//   {
//     id: 'car',
//     name: 'Car',
//     image: carImage,
//     seats: ['4', '6', '7'],
//   },
// ];

// const VehicleCard = ({ vehicle }) => {
//   return (
//     <div className="group  bg-white border border-gray-200 hover:border-gray-500 rounded cursor-pointer overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg">
//       <div className="relative aspect-video overflow-hidden">

//         <Image
//           src={vehicle.image}
//           alt={vehicle.name}
//           layout="fill"
//           objectFit="cover"
//           className="transition-transform duration-300 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>
//       <div className="p-5">
//         <h3 className="text-lg font-semibold text-gray-800 mb-3">
//           {vehicle.name}
//         </h3>
//         <p className="text-sm font-medium text-gray-600 mb-1">Seats:</p>
//         <div className="flex flex-wrap gap-2 text-gray-500">
//           {vehicle.seats.map((seat, index) => (
//             <span key={index} className="text-sm font-medium">
//               {seat}
//               {index < vehicle.seats.length - 1 && (
//                 <span className="mx-1">|</span>
//               )}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ShuttleOptions = () => {
//   const [selectedOption, setSelectedOption] = useState('executive');

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-[1200px] mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">
//             Shuttle options available for your staff transportation
//           </h2>
//           {/* <div className="inline-flex mb-6 border rounded-lg overflow-hidden">
//             <button
//               onClick={() => setSelectedOption('basic')}
//               className={`px-6 py-2 text-sm font-medium transition-colors ${
//                 selectedOption === 'basic'
//                   ? 'bg-gray-800 text-white'
//                   : 'bg-white text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               Basic
//             </button>
//             <button
//               onClick={() => setSelectedOption('executive')}
//               className={`px-6 py-2 text-sm font-medium transition-colors ${
//                 selectedOption === 'executive'
//                   ? 'bg-gray-800 text-white'
//                   : 'bg-white text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               Executive
//             </button>
//           </div> */}
//           <p className="text-gray-500 max-w-xl mx-auto text-base">
//             <span className="text-gray-800 font-medium">Buses</span> with state
//             of the art engineering, comfort & features. Ideal for shuttle
//             services of corporate employees.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {vehicleOptions.map((vehicle) => (
//             <VehicleCard key={vehicle.id} vehicle={vehicle} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShuttleOptions;

'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'swiper/css';
import 'swiper/css/navigation';

import tempoTravellerImage from '../../public/vechicals/tempo-traveller.jpg';
import miniBusImage from '../../public/vechicals/mini-bus.jpg';
import busImage from '../../public/vechicals/bus.jpg';
import carImage from '../../public/vechicals/car.jpg';

const vehicleOptions = [
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    image: tempoTravellerImage,
    seats: ['13', '17', '20', '26'],
  },
  {
    id: 'mini-bus',
    name: 'Mini Bus',
    image: miniBusImage,
    seats: ['27', '29', '32', '35'],
  },
  {
    id: 'bus',
    name: 'Bus',
    image: busImage,
    seats: ['37', '40', '45', '49'],
  },
  {
    id: 'car',
    name: 'Car',
    image: carImage,
    seats: ['4', '6', '7'],
  },
];

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="group bg-white border border-gray-200 hover:border-gray-500 rounded cursor-pointer overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          {vehicle.name}
        </h3>
        <p className="text-sm font-medium text-gray-600 mb-1">Seats:</p>
        <div className="flex flex-wrap gap-2 text-gray-500">
          {vehicle.seats.map((seat, index) => (
            <span key={index} className="text-sm font-medium">
              {seat}
              {index < vehicle.seats.length - 1 && (
                <span className="mx-1">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ShuttleOptions = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center lg:mb-4">
          <h2 className="flex-1 text-4xl lg:text-[48px] lg:leading-14 font-bold">
            Shuttle options available for your transportation
          </h2>
        </div>

        <div className="flex pt-6 gap-6 md:gap-0 flex-col md:flex-row items-center justify-between mb-6">
          <p className="text-gray-500 max-w-xl text-base text-center md:text-left">
            <span className="text-gray-800  font-medium">Options</span> with
            state of the art engineering, comfort & features. Ideal for shuttle
            services of corporate employees.
          </p>
          <div className="flex gap-4">
            <button className="custom-prev-vehical bg-gray-200 p-3 rounded-full">
              <IoIosArrowBack size={19} />
            </button>
            <button className="custom-next-vehical bg-gray-200 p-3 rounded-full">
              <IoIosArrowForward size={19} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.custom-next-vehical',
            prevEl: '.custom-prev-vehical',
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
        >
          {vehicleOptions.map((vehicle) => (
            <SwiperSlide key={vehicle.id}>
              <VehicleCard vehicle={vehicle} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShuttleOptions;
