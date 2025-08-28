// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import { FaPeopleGroup } from 'react-icons/fa6';
// import { IoMdSettings } from 'react-icons/io';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// import 'swiper/css';
// import 'swiper/css/navigation';

// const cars = [
//   {
//     name: 'Koenigsegg',
//     type: 'Sport',
//     image: '/home/vehicals/eco.jpg',
//     price: 99,
//     fuel: '90L',
//     transmission: 'Manual',
//     seats: '2',
//   },
//   {
//     name: 'CR - V',
//     type: 'SUV',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     seats: '6',
//   },
//   {
//     name: 'MG ZX Excite',
//     type: 'Hatchback',
//     image: '/home/vehicals/eco.jpg',
//     price: 74,
//     fuel: '90L',
//     transmission: 'Manual',
//     seats: '2',
//   },
//   {
//     name: 'Koenigsegg',
//     type: 'Sport',
//     image: '/home/vehicals/eco.jpg',
//     price: 99,
//     fuel: '90L',
//     transmission: 'Manual',
//     seats: '2',
//   },
//   {
//     name: 'CR - V',
//     type: 'SUV',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     seats: '6',
//   },
// ];

// export default function HomePopularCars() {
//   return (
//     <section id="vechicals" className="bg-black py-12 lg:py-16 scroll-mt-7">
//       <div className="max-w-[1200px] mx-auto w-[90%]">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="flex-1 text-4xl lg:text-[48px] lg:leading-14 font-bold text-white">
//             Our Vehicles
//           </h1>
//           <div className="flex gap-4">
//             <button className="custom-prev-popular bg-gray-200 p-3 rounded-full">
//               <IoIosArrowBack size={19} />
//             </button>
//             <button className="custom-next-popular bg-gray-200 p-3 rounded-full">
//               <IoIosArrowForward size={19} />
//             </button>
//           </div>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           navigation={{
//             nextEl: '.custom-next-popular',
//             prevEl: '.custom-prev-popular',
//           }}
//           spaceBetween={20}
//           breakpoints={{
//             0: {
//               slidesPerView: 1.2,
//             },
//             640: {
//               slidesPerView: 2,
//             },
//             768: {
//               slidesPerView: 2.5,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {cars.map((car, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="bg-[#1a1a1a] rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full">
//                 {/* Car Image */}
//                 <div className="relative h-[300px] w-full">
//                   <Image
//                     src={car.image}
//                     alt={car.name}
//                     fill
//                     className="object-contain"
//                     sizes="100vw"
//                     priority={idx === 0}
//                   />
//                 </div>

//                 {/* Car Info */}
//                 <div className="mt-4 flex flex-col flex-1 p-4">
//                   <div className="mb-2">
//                     <h3 className="text-lg font-bold text-white">{car.name}</h3>
//                     <p className="text-sm text-gray-400">{car.type}</p>
//                   </div>

//                   <div className="flex justify-between text-base text-gray-300 border-t border-gray-700 pt-4 mt-auto">
//                     <div className="flex items-center gap-2">
//                       <IoMdSettings className="size-6" /> {car.transmission}
//                     </div>
//                     <div className="flex items-center font-bold text-white gap-2">
//                       <FaPeopleGroup className="size-6" /> {car.seats} person
//                     </div>
//                   </div>

//                   <div className="pb-2.5 pt-8">
//                     <button className="bg-transparent border w-full border-white text-white font-semibold px-6 py-1.5 cursor-pointer rounded hover:bg-white hover:text-blue-900 transition">
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// // }
// ================================

// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import { FaPeopleGroup } from 'react-icons/fa6';
// import { IoMdSettings } from 'react-icons/io';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// import 'swiper/css';
// import 'swiper/css/navigation';

// const cars = [
//   {
//     name: 'Koenigsegg',
//     type: 'Sport',
//     image: '/home/vehicals/eco.jpg',
//     price: 99,
//     fuel: '90L',
//     transmission: 'Manual',
//     Seater: '4',
//   },
//   {
//     name: 'CR - V',
//     type: 'SUV',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '6',
//   },
//   {
//     name: 'MG ZX Excite',
//     type: 'Hatchback',
//     image: '/home/vehicals/eco.jpg',
//     price: 74,
//     fuel: '90L',
//     transmission: 'Manual',
//     Seater: '8',
//   },
//   {
//     name: 'Koenigsegg',
//     type: 'Sport',
//     image: '/home/vehicals/eco.jpg',
//     price: 99,
//     fuel: '90L',
//     transmission: 'Manual',
//     Seater: '12',
//   },
//   {
//     name: 'CR - V',
//     type: 'SUV',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '20',
//   },
//   {
//     name: 'CR - V',
//     type: 'SUV',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '26',
//   },
// ];

// export default function HomePopularCars() {
//   return (
//     <section id="vechicals" className="bg-black py-12 lg:py-16 scroll-mt-7">
//       <div className="max-w-[1200px] mx-auto w-[90%]">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="flex-1 text-4xl lg:text-[48px] lg:leading-14 font-bold text-white">
//             Our Vehicles
//           </h1>
//           <div className="flex gap-4">
//             <button className="custom-prev-popular bg-gray-200 p-3 rounded-full">
//               <IoIosArrowBack size={19} />
//             </button>
//             <button className="custom-next-popular bg-gray-200 p-3 rounded-full">
//               <IoIosArrowForward size={19} />
//             </button>
//           </div>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           navigation={{
//             nextEl: '.custom-next-popular',
//             prevEl: '.custom-prev-popular',
//           }}
//           spaceBetween={20}
//           breakpoints={{
//             0: {
//               slidesPerView: 1.2,
//             },
//             640: {
//               slidesPerView: 2,
//             },
//             768: {
//               slidesPerView: 2.5,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {cars.map((car, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="bg-[#1a1a1a] rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full">
//                 {/* Car Image */}
//                 <div className="relative h-[300px] w-full">
//                   <Image
//                     src={car.image}
//                     alt={car.name}
//                     fill
//                     className="object-contain"
//                     sizes="100vw"
//                     priority={idx === 0}
//                   />
//                 </div>

//                 {/* Car Info */}
//                 <div className="mt-4 flex flex-col flex-1 p-4">
//                   <div className="mb-2">
//                     <h3 className="text-lg font-bold text-white">{car.name}</h3>
//                     <p className="text-sm text-gray-400">{car.type}</p>
//                   </div>

//                   <div className="flex justify-between text-base text-gray-300 border-t border-gray-700 pt-4 mt-auto">
//                     <div className="flex items-center gap-2">
//                       <IoMdSettings className="size-6" /> {car.transmission}
//                     </div>
//                     <div className="flex items-center font-bold text-white gap-2">
//                       <FaPeopleGroup className="size-6" /> {car.Seater} person
//                     </div>
//                   </div>

//                   <div className="pb-2.5 pt-8">
//                     <a
//                       href={`#price?seats=${car.Seater}`}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         const element = document.getElementById('price');
//                         if (element) {
//                           element.scrollIntoView({ behavior: 'smooth' });
//                         }
//                         const url = new URL(window.location.href);
//                         url.hash = '#price';
//                         url.searchParams.set('seats', car.Seater); // FIXED: was car.seats
//                         window.history.replaceState(null, '', url.toString());
//                       }}
//                       className="block bg-transparent border w-full text-center border-white text-white font-semibold px-6 py-1.5 cursor-pointer rounded hover:bg-white hover:text-blue-900 transition"
//                     >
//                       Book Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// ================ claude 9

// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import { FaPeopleGroup } from 'react-icons/fa6';
// import { IoMdSettings } from 'react-icons/io';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// import 'swiper/css';
// import 'swiper/css/navigation';

// const cars = [
//   {
//     name: 'Koenigsegg',
//     type: 'Sport',
//     image: '/home/vehicals/eco.jpg',
//     price: 99,
//     fuel: '90L',
//     transmission: 'Manual',
//     Seater: '4',
//   },
//   {
//     name: 'CR - V',
//     type: 'SUV',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '6',
//   },
//   {
//     name: 'MG ZX Excite',
//     type: 'Hatchback',
//     image: '/home/vehicals/eco.jpg',
//     price: 74,
//     fuel: '90L',
//     transmission: 'Manual',
//     Seater: '8',
//   },
//   {
//     name: 'Koenigsegg',
//     type: 'Sport',
//     image: '/home/vehicals/eco.jpg',
//     price: 99,
//     fuel: '90L',
//     transmission: 'Manual',
//     Seater: '12',
//   },
//   {
//     name: 'CR - V',
//     type: 'SUV',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '20',
//   },
//   {
//     name: 'CR - V',
//     type: 'SUV',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '26',
//   },
// ];

// export default function HomePopularCars() {
//   return (
//     <section id="vechicals" className="bg-black py-12 lg:py-16 scroll-mt-7">
//       <div className="max-w-[1200px] mx-auto w-[90%]">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="flex-1 text-4xl lg:text-[48px] lg:leading-14 font-bold text-white">
//             Our Vehicles
//           </h1>
//           <div className="flex gap-4">
//             <button className="custom-prev-popular bg-gray-200 p-3 rounded-full">
//               <IoIosArrowBack size={19} />
//             </button>
//             <button className="custom-next-popular bg-gray-200 p-3 rounded-full">
//               <IoIosArrowForward size={19} />
//             </button>
//           </div>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           navigation={{
//             nextEl: '.custom-next-popular',
//             prevEl: '.custom-prev-popular',
//           }}
//           spaceBetween={20}
//           breakpoints={{
//             0: {
//               slidesPerView: 1.2,
//             },
//             640: {
//               slidesPerView: 2,
//             },
//             768: {
//               slidesPerView: 2.5,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {cars.map((car, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="bg-[#1a1a1a] rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full">
//                 {/* Car Image */}
//                 <div className="relative h-[300px] w-full">
//                   <Image
//                     src={car.image}
//                     alt={car.name}
//                     fill
//                     className="object-contain"
//                     sizes="100vw"
//                     priority={idx === 0}
//                   />
//                 </div>

//                 {/* Car Info */}
//                 <div className="mt-4 flex flex-col flex-1 p-4">
//                   <div className="mb-2">
//                     <h3 className="text-lg font-bold text-white">{car.name}</h3>
//                     <p className="text-sm text-gray-400">{car.type}</p>
//                   </div>

//                   <div className="flex justify-between text-base text-gray-300 border-t border-gray-700 pt-4 mt-auto">
//                     <div className="flex items-center gap-2">
//                       <IoMdSettings className="size-6" /> {car.transmission}
//                     </div>
//                     <div className="flex items-center font-bold text-white gap-2">
//                       <FaPeopleGroup className="size-6" /> {car.Seater} person
//                     </div>
//                   </div>

//                   <div className="pb-2.5 pt-8">
//                     <a
//                       href={`#price?seats=${car.Seater}`}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         const element = document.getElementById('price');
//                         if (element) {
//                           element.scrollIntoView({ behavior: 'smooth' });
//                         }
//                         const url = new URL(window.location.href);
//                         url.hash = '#price';
//                         url.searchParams.set('seats', car.Seater); // FIXED: Now using car.Seater instead of car.seats
//                         window.history.replaceState(null, '', url.toString());
//                       }}
//                       className="block bg-transparent border w-full text-center border-white text-white font-semibold px-6 py-1.5 cursor-pointer rounded hover:bg-white hover:text-blue-900 transition"
//                     >
//                       Book Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
// ==============================

'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'swiper/css';
import 'swiper/css/navigation';

const cars = [
  {
    name: 'Koenigsegg',
    type: 'Sport',
    image: '/home/vehicals/eco.jpg',
    price: 99,
    fuel: '90L',
    transmission: 'Manual',
    Seater: '4',
  },
  {
    name: 'CR - V',
    type: 'SUV',
    image: '/home/vehicals/eco.jpg',
    price: 80,
    fuel: '80L',
    transmission: 'Manual',
    Seater: '6',
  },
  {
    name: 'MG ZX Excite',
    type: 'Hatchback',
    image: '/home/vehicals/eco.jpg',
    price: 74,
    fuel: '90L',
    transmission: 'Manual',
    Seater: '8',
  },
  {
    name: 'Koenigsegg',
    type: 'Sport',
    image: '/home/vehicals/eco.jpg',
    price: 99,
    fuel: '90L',
    transmission: 'Manual',
    Seater: '12',
  },
  {
    name: 'CR - V',
    type: 'SUV',
    image: '/home/vehicals/eco.jpg',
    price: 80,
    fuel: '80L',
    transmission: 'Manual',
    Seater: '20',
  },
  {
    name: 'CR - V',
    type: 'SUV',
    image: '/home/vehicals/eco.jpg',
    price: 80,
    fuel: '80L',
    transmission: 'Manual',
    Seater: '26',
  },
];

export default function HomePopularCars() {
  const handleBookNow = (seater) => {
    console.log('Book Now clicked for seater:', seater);

    // Scroll to the price section
    const element = document.getElementById('price');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Update URL with seats parameter
    const url = new URL(window.location.href);
    url.searchParams.set('seats', seater);
    url.hash = '#price';

    console.log('New URL will be:', url.toString());
    window.history.replaceState(null, '', url.toString());

    // Trigger a custom event to notify the form component
    window.dispatchEvent(
      new CustomEvent('seatsSelected', {
        detail: { seats: seater },
      })
    );
  };

  return (
    <section id="vechicals" className="bg-black py-12 lg:py-16 scroll-mt-7">
      <div className="max-w-[1200px] mx-auto w-[90%]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="flex-1 text-4xl lg:text-[48px] lg:leading-14 font-bold text-white">
            Our Vehicles
          </h1>
          <div className="flex gap-4">
            <button className="custom-prev-popular bg-gray-200 p-3 rounded-full">
              <IoIosArrowBack size={19} />
            </button>
            <button className="custom-next-popular bg-gray-200 p-3 rounded-full">
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
            nextEl: '.custom-next-popular',
            prevEl: '.custom-prev-popular',
          }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {cars.map((car, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#1a1a1a] rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full">
                {/* Car Image */}
                <div className="relative h-[300px] w-full">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority={idx === 0}
                  />
                </div>

                {/* Car Info */}
                <div className="mt-4 flex flex-col flex-1 p-4">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-white">{car.name}</h3>
                    <p className="text-sm text-gray-400">{car.type}</p>
                  </div>

                  <div className="flex justify-between text-base text-gray-300 border-t border-gray-700 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <IoMdSettings className="size-6" /> {car.transmission}
                    </div>
                    <div className="flex items-center font-bold text-white gap-2">
                      <FaPeopleGroup className="size-6" /> {car.Seater} person
                    </div>
                  </div>

                  <div className="pb-2.5 pt-8">
                    <button
                      onClick={() => handleBookNow(car.Seater)}
                      className="block bg-transparent border w-full text-center border-white text-white font-semibold px-6 py-1.5 cursor-pointer rounded hover:bg-white hover:text-blue-900 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
