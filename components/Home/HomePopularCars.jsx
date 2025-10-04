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

// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import { FaPeopleGroup } from 'react-icons/fa6';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// import 'swiper/css';
// import 'swiper/css/navigation';

// const cars = [
//   {
//     name: 'Car',
//     type: 'sedan',
//     image: '/home/vehicals/eco.jpg',
//     price: 99,
//     fuel: '90L',
//     transmission: 'Manual',
//     Seater: '4',
//     decsprition : " "
//   },
//   {
//     name: 'Car',
//     type: 'SUV',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '7-6',
//   },
//   {
//     name: 'Tempo traveller',
//     type: 'Mini -Bus',
//     image: '/home/vehicals/eco.jpg',
//     price: 74,
//     fuel: '90L',
//     transmission: 'Manual',
//     Seater: '13',
//   },
//   {
//     name: 'tempo traveller',
//     type: 'Mini - Bus',
//     image: '/home/vehicals/eco.jpg',
//     price: 99,
//     fuel: '90L',
//     transmission: 'Manual',
//     Seater: '17',
//   },
//   {
//     name: 'Tempo traveller',
//     type: 'Mini - Bus',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '17 - 20',
//   },
//   {
//     name: 'Tempo traveller',
//     type: 'Bus',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '26',
//   },
//   {
//     name: 'Tempo traveller',
//     type: 'Bus',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '35 - 37',
//   },
//   {
//     name: 'Tempo traveller',
//     type: 'Bus',
//     image: '/home/vehicals/eco.jpg',
//     price: 80,
//     fuel: '80L',
//     transmission: 'Manual',
//     Seater: '45 - 47',
//   },
// ];

// export default function HomePopularCars() {
//   const handleBookNow = (seater) => {
//     console.log('Book Now clicked for seater:', seater);

//     // Scroll to the price section
//     const element = document.getElementById('price');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }

//     // Update URL with seats parameter
//     const url = new URL(window.location.href);
//     url.searchParams.set('seats', seater);
//     url.hash = '#price';

//     console.log('New URL will be:', url.toString());
//     window.history.replaceState(null, '', url.toString());

//     // Trigger a custom event to notify the form component
//     window.dispatchEvent(
//       new CustomEvent('seatsSelected', {
//         detail: { seats: seater },
//       })
//     );
//   };

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
//           // autoplay={{
//           //   delay: 3000,
//           //   disableOnInteraction: false,
//           // }}
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
//                   <div className=" flex justify-between text-base text-gray-300 border-t border-gray-700 pt-4 mt-auto">
//                     <div className="mb-2">
//                       <h3 className="text-lg font-bold text-white">
//                         {car.name}
//                       </h3>
//                       <p className="text-sm text-gray-400">{car.type}</p>
//                     </div>

//                     <div className="flex justify-between text-base text-gray-300  border-gray-700 ">
//                       <div className="flex items-center font-bold text-white gap-2">
//                         <FaPeopleGroup className="size-6" /> {car.Seater} person
//                       </div>
//                     </div>
//                   </div>

//                   <h2 className="text-gray-100 text-base font-medium mt-2 ">
//                     {/* 200 - per/km */}
//                     {car.perKm}
//                   </h2>

//                   <div className="text-gray-400 text-sm mt-4 flex-1">
//                     {car.decsprition}
//                   </div>

//                   <div className="pb-2.5 pt-8">
//                     <button
//                       onClick={() => handleBookNow(car.Seater)}
//                       className="block bg-transparent border w-full text-center border-white text-white font-semibold px-6 py-1.5 cursor-pointer hover:rounded-3xl transition-all duration-300 hover:bg-white hover:text-blue-900 "
//                     >
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
// ========================
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'swiper/css';
import 'swiper/css/navigation';

const cars = [
  {
    name: 'Sedan',
    type: 'Car',
    image: '/vechicals/car.jpg',
    transmission: 'Manual',
    Seater: '4',
    perKm: '₹12',
    realKm: '₹20',
    dapermit: 'NA',
    description:
      'Rent our 4-seater sedan for city rides, airport transfers, and business trips. This compact and fuel-efficient car ensures smooth driving, premium comfort, and reliable performance for short and long journeys.',
  },
  {
    name: 'SUV',
    type: 'Car',
    image: '/vechicals/suv.webp',
    transmission: 'Manual',
    Seater: '7-8',
    perKm: '₹15',
    realKm: '₹19',
    dapermit: 'NA',
    description:
      'Book a 7–8 seater SUV rental for family vacations, road trips, or group tours. Spacious interiors, powerful engine, and extra luggage space make it the best choice for comfort and adventure travel.',
  },
  {
    name: 'Tempo Traveller',
    type: 'Mini Bus',
    image: '/home/vehicals/eco.jpg',
    transmission: 'Manual',
    Seater: '13',
    perKm: '₹24',
    realKm: '₹30',
    dapermit: '1300',
    description:
      'Our 13-seater tempo traveller is ideal for small group tours, pilgrimages, or weekend getaways. Designed for comfort with spacious seating and reliable mileage, it’s perfect for long-distance journeys.',
  },
  {
    name: 'Tempo Traveller',
    type: 'Mini Bus',
    image: '/vechicals/17.webp',
    transmission: 'Manual',
    Seater: '17',
    perKm: '₹25',
    realKm: '₹32',
    dapermit: '1500',
    description:
      'Hire a 17 seater tempo traveller for school trips, weddings, and office tours. With roomy interiors, professional drivers, and budget-friendly pricing, it ensures a smooth ride for every occasion.',
  },
  {
    name: 'Tempo Traveller',
    type: 'Mini Bus',
    image: '/vechicals/20R.webp',
    transmission: 'Manual',
    Seater: '20',
    perKm: '₹27',
    realKm: '₹35',
    dapermit: '1500',
    description:
      'Hire a 20 seater tempo traveller for school trips, weddings, and office tours. With roomy interiors, professional drivers, and budget-friendly pricing, it ensures a smooth ride for every occasion.',
  },
  {
    name: 'Tempo Traveller',
    type: 'Bus',
    image: '/vechicals/26.webp',
    transmission: 'Manual',
    Seater: '26',
    perKm: '₹36',
    realKm: '₹40',
    dapermit: '1800',
    description:
      'The 26-seater tempo traveller is best for medium-sized groups traveling together. Comfortable seating, spacious legroom, and affordable rates make it ideal for corporate events and outstation journeys.',
  },
  {
    name: 'Eicher',
    type: 'Bus',
    image: '/vechicals/32.webp',
    transmission: 'Manual',
    Seater: '28-32',
    perKm: '₹40',
    realKm: '₹45',
    dapermit: '2000',
    description:
      'The 26-seater tempo traveller is best for medium-sized groups traveling together. Comfortable seating, spacious legroom, and affordable rates make it ideal for corporate events and outstation journeys.',
  },
  {
    name: 'Eicher',
    type: 'Bus',
    image: '/vechicals/37.webp',

    transmission: 'Manual',
    Seater: '33-35',
    perKm: '₹45',
    realKm: '₹49',
    dapermit: '2000',
    description:
      'Book a 33–35 seater bus rental for weddings, school trips, and group travel. With reliable performance, large capacity, and comfortable interiors, it’s the perfect choice for long journeys and events.',
  },
  {
    name: 'Eicher',
    type: 'Bus',
    image: '/vechicals/37.webp',

    transmission: 'Manual',
    Seater: '35-37',
    perKm: '₹50',
    realKm: '58',
    dapermit: '2200',
    description:
      'Book a 35–37 seater bus rental for weddings, school trips, and group travel. With reliable performance, large capacity, and comfortable interiors, it’s the perfect choice for long journeys and events.',
  },
  {
    name: 'Eicher',
    type: 'Bus',
    image: '/vechicals/49.png',
    transmission: 'Manual',
    Seater: '45-49',
    perKm: '₹60',
    realKm: '₹70',
    dapermit: '2500',
    description:
      'Our 45–47 seater bus rental is perfect for large groups, corporate travel, and long-distance tours. Equipped with professional drivers, spacious seating, and safe service, it ensures hassle-free journeys.',
  },
  {
    name: 'Eicher',
    type: 'Bus',
    image: '/vechicals/49.png',
    transmission: 'Manual',
    Seater: '58',
    perKm: '₹65',
    realKm: '₹73',
    dapermit: '25000',
    description:
      'Our 58 seater bus rental is perfect for large groups, corporate travel, and long-distance tours. Equipped with professional drivers, spacious seating, and safe service, it ensures hassle-free journeys.',
  },
];

export default function HomePopularCars() {
  const handleBookNow = (seater) => {
    console.log('Book Now clicked for seater:', seater);

    // Scroll to price section
    const element = document.getElementById('price');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Update URL
    const url = new URL(window.location.href);
    url.searchParams.set('seats', seater);
    url.hash = '#price';
    window.history.replaceState(null, '', url.toString());

    // Dispatch event
    window.dispatchEvent(
      new CustomEvent('seatsSelected', { detail: { seats: seater } })
    );
  };

  return (
    <section id="vechicals" className="bg-black py-12 lg:py-16 scroll-mt-7">
      <div className="max-w-[1200px] mx-auto w-[90%]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="flex-1 text-4xl lg:text-[48px] font-bold text-white">
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

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          // loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          navigation={{
            nextEl: '.custom-next-popular',
            prevEl: '.custom-prev-popular',
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cars.map((car, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#1a1a1a] rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full">
                {/* Image */}
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

                {/* Info */}
                <div className="mt-4 flex flex-col flex-1 p-4">
                  <div className="flex items-start justify-between border-t border-gray-700 pt-4 mt-auto">
                    <div className="">
                      <h3 className="text-lg font-bold text-white">
                        {car.name}
                      </h3>
                      <p className="text-sm text-gray-400">{car.type}</p>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-white">
                      <FaPeopleGroup className="size-6" /> {car.Seater} person
                    </div>
                  </div>

                  <div className="flex gap-3 items-start mt-6">
                    <h2 className="text-gray-100 text-lg font-bold ">
                      {car.perKm} / km
                    </h2>
                    <h2 className="text-gray-100 text-base font-semibold  line-through">
                      {car.realKm} / km
                    </h2>
                  </div>

                  <p className="text-gray-400 text-xs py-1 tooltip">
                    DA Permit : {car.dapermit}
                    <span className="tooltip-text">
                      DA Permit is a government-approved certificate that gives
                      a driver the authority to legally and safely operate
                      passengers in a commercial/rental vehicle.
                    </span>
                  </p>

                  <p className="text-gray-400 text-sm mt-2 flex-1 line-clamp-4">
                    {car.description}
                  </p>

                  <div className="pb-2.5 pt-8">
                    <button
                      onClick={() => handleBookNow(car.Seater)}
                      className="block border w-full text-center border-white text-white font-semibold px-6 py-1.5 cursor-pointer hover:rounded-3xl transition-all duration-300 hover:bg-white hover:text-blue-900"
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
