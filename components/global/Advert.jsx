// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Calendar, Gift, Percent, Star, Clock, MapPin } from 'lucide-react';

// const Advert = () => {
//   const [currentOffer, setCurrentOffer] = useState(0);
//   const [adminMode, setAdminMode] = useState(false);
//   const [offers, setOffers] = useState([
//     {
//       id: 1,
//       title: 'Weekend Getaway Special',
//       subtitle: 'Enjoy 25% off on all weekend trips',
//       description:
//         'Book your Friday to Sunday journeys and save big on our premium shuttle services. Perfect for family outings and weekend adventures.',
//       type: 'weekend',
//       discount: '25%',
//       valid: 'Fridays, Saturdays & Sundays',
//       image: 'https://placehold.co/600x400/1e40af/ffffff?text=Weekend+Special',
//       features: [
//         '25% Discount',
//         'Free Wi-Fi',
//         'Complimentary Water',
//         'Priority Booking',
//       ],
//       highlighted: true,
//     },
//     {
//       id: 2,
//       title: 'Holiday Season Package',
//       subtitle: 'All-inclusive holiday travel deals',
//       description:
//         'Make your holiday season memorable with our special packages for family gatherings, shopping trips, and festive events across the city.',
//       type: 'holiday',
//       discount: '20%',
//       valid: 'Dec 15 - Jan 5',
//       image: 'https://placehold.co/600x400/dc2626/ffffff?text=Holiday+Season',
//       features: [
//         '20% Savings',
//         'Decorated Vehicles',
//         'Holiday Music',
//         'Extended Hours',
//       ],
//       highlighted: false,
//     },
//     {
//       id: 3,
//       title: 'Summer Vacation Special',
//       subtitle: 'Travel smart this summer season',
//       description:
//         'Beat the heat with our air-conditioned fleet and special summer packages for family vacations, beach trips, and summer getaways.',
//       type: 'seasonal',
//       discount: '30%',
//       valid: 'June - August',
//       image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Summer+Vacation',
//       features: ['30% Off', 'AC Vehicles', 'Sun Shades', 'Cool Refreshments'],
//       highlighted: false,
//     },
//   ]);

//   const [newOffer, setNewOffer] = useState({
//     title: '',
//     subtitle: '',
//     description: '',
//     type: 'weekend',
//     discount: '',
//     valid: '',
//     image: '',
//   });

//   const offerTypes = [
//     { value: 'weekend', label: 'Weekend Offer', icon: Calendar },
//     { value: 'holiday', label: 'Holiday Offer', icon: Gift },
//     { value: 'seasonal', label: 'Seasonal Offer', icon: Sun },
//     { value: 'special', label: 'Special Offer', icon: Star },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentOffer((prev) => (prev + 1) % offers.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [offers.length]);

//   const addNewOffer = () => {
//     if (newOffer.title && newOffer.discount) {
//       const offer = {
//         id: Date.now(),
//         ...newOffer,
//         image:
//           newOffer.image ||
//           `https://placehold.co/600x400/6366f1/ffffff?text=${newOffer.type}+Offer`,
//         highlighted: false,
//       };
//       setOffers([...offers, offer]);
//       setNewOffer({
//         title: '',
//         subtitle: '',
//         description: '',
//         type: 'weekend',
//         discount: '',
//         valid: '',
//         image: '',
//       });
//     }
//   };

//   const deleteOffer = (id) => {
//     if (offers.length > 1) {
//       setOffers(offers.filter((offer) => offer.id !== id));
//       if (currentOffer >= offers.length - 1) {
//         setCurrentOffer(Math.max(0, currentOffer - 1));
//       }
//     }
//   };

//   const OfferCard = ({ offer, isActive, isAdmin }) => (
//     <div
//       className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform ${
//         isActive ? 'scale-105 z-10' : 'scale-95 opacity-60'
//       } hover:scale-100`}
//     >
//       <div className="relative">
//         <img
//           src={offer.image}
//           alt={offer.title}
//           className="w-full h-64 object-cover"
//         />
//         <div className="absolute top-4 right-4">
//           <span
//             className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
//               offer.type === 'weekend'
//                 ? 'bg-blue-600'
//                 : offer.type === 'holiday'
//                   ? 'bg-red-600'
//                   : offer.type === 'seasonal'
//                     ? 'bg-amber-500'
//                     : 'bg-purple-600'
//             }`}
//           >
//             {offer.type.toUpperCase()}
//           </span>
//         </div>
//         {offer.highlighted && (
//           <div className="absolute top-4 left-4">
//             <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
//               <Star className="w-3 h-3 mr-1" /> HOT
//             </span>
//           </div>
//         )}
//       </div>

//       <div className="p-6">
//         <div className="flex items-center justify-between mb-2">
//           <h3 className="text-2xl font-bold text-gray-800">{offer.title}</h3>
//           <span className="text-3xl font-bold text-blue-600">
//             {offer.discount}
//           </span>
//         </div>

//         <p className="text-blue-600 font-semibold text-sm mb-3">
//           {offer.subtitle}
//         </p>

//         <p className="text-gray-600 mb-4 text-sm leading-relaxed">
//           {offer.description}
//         </p>

//         <div className="flex items-center text-gray-500 text-sm mb-4">
//           <Calendar className="w-4 h-4 mr-2" />
//           <span>Valid: {offer.valid}</span>
//         </div>

//         <div className="mb-4">
//           <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
//           <div className="grid grid-cols-2 gap-2">
//             {offer.features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center text-sm text-gray-600"
//               >
//                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
//                 {feature}
//               </div>
//             ))}
//           </div>
//         </div>

//         {isAdmin && (
//           <button
//             onClick={() => deleteOffer(offer.id)}
//             className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-semibold"
//           >
//             Remove Offer
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className=" bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       {/* Header */}

//       {/* Hero Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Special Offers & Promotions
//           </h1>
//           <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
//             Discover our exclusive deals for weekends, holidays, and seasonal
//             events. Save on premium transportation services for all your travel
//             needs.
//           </p>

//           {/* Admin Panel */}
//           {adminMode && <AdminPanel />}

//           {/* Offers Carousel */}
//           <div className="relative max-w-6xl mx-auto">
//             <div className="flex justify-center mb-8">
//               {offers.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentOffer(index)}
//                   className={`w-3 h-3 rounded-full mx-1 transition-colors duration-200 ${
//                     index === currentOffer ? 'bg-blue-600' : 'bg-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>

//             <div className="relative h-96">
//               {offers.map((offer, index) => (
//                 <div
//                   key={offer.id}
//                   className={`absolute inset-0 transition-opacity duration-500 ${
//                     index === currentOffer ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 >
//                   <OfferCard
//                     offer={offer}
//                     isActive={index === currentOffer}
//                     isAdmin={adminMode}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // Car icon component (since we can't import from lucide-react in this context)
// const Car = ({ className }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//     />
//   </svg>
// );

// const Phone = ({ className }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//     />
//   </svg>
// );

// const Sun = ({ className }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//     />
//   </svg>
// );

// export default Advert;
// 'use client';
// import React, { useState } from 'react';
// import { Calendar, Gift, Star, Sun } from 'lucide-react';

// const Advert = () => {
//   const [adminMode, setAdminMode] = useState(false);
//   const [offers, setOffers] = useState([
//     {
//       id: 1,
//       title: 'Weekend Getaway Special',
//       subtitle: 'Enjoy 25% off on all weekend trips',
//       description:
//         'Book your Friday to Sunday journeys and save big on our premium shuttle services. Perfect for family outings and weekend adventures.',
//       type: 'weekend',
//       discount: '25%',
//       valid: 'Fridays, Saturdays & Sundays',
//       image: 'https://placehold.co/600x400/1e40af/ffffff?text=Weekend+Special',
//       features: [
//         '25% Discount',
//         'Free Wi-Fi',
//         'Complimentary Water',
//         'Priority Booking',
//       ],
//       highlighted: true,
//     },
//     {
//       id: 2,
//       title: 'Holiday Season Package',
//       subtitle: 'All-inclusive holiday travel deals',
//       description:
//         'Make your holiday season memorable with our special packages for family gatherings, shopping trips, and festive events across the city.',
//       type: 'holiday',
//       discount: '20%',
//       valid: 'Dec 15 - Jan 5',
//       image: 'https://placehold.co/600x400/dc2626/ffffff?text=Holiday+Season',
//       features: [
//         '20% Savings',
//         'Decorated Vehicles',
//         'Holiday Music',
//         'Extended Hours',
//       ],
//       highlighted: false,
//     },
//     {
//       id: 3,
//       title: 'Summer Vacation Special',
//       subtitle: 'Travel smart this summer season',
//       description:
//         'Beat the heat with our air-conditioned fleet and special summer packages for family vacations, beach trips, and summer getaways.',
//       type: 'seasonal',
//       discount: '30%',
//       valid: 'June - August',
//       image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Summer+Vacation',
//       features: ['30% Off', 'AC Vehicles', 'Sun Shades', 'Cool Refreshments'],
//       highlighted: false,
//     },
//   ]);

//   const deleteOffer = (id) => {
//     setOffers(offers.filter((offer) => offer.id !== id));
//   };

//   const OfferCard = ({ offer, isAdmin }) => (
//     <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
//       <img
//         src={offer.image}
//         alt={offer.title}
//         className="w-full h-64 object-cover"
//       />

//       <div className="p-6">
//         <div className="flex items-center justify-between mb-2">
//           <h3 className="text-2xl font-bold text-gray-800">{offer.title}</h3>
//           <span className="text-3xl font-bold text-blue-600">
//             {offer.discount}
//           </span>
//         </div>

//         <p className="text-blue-600 font-semibold text-sm mb-3">
//           {offer.subtitle}
//         </p>

//         <p className="text-gray-600 mb-4 text-sm leading-relaxed">
//           {offer.description}
//         </p>

//         <div className="flex items-center text-gray-500 text-sm mb-4">
//           <Calendar className="w-4 h-4 mr-2" />
//           <span>Valid: {offer.valid}</span>
//         </div>

//         <div className="mb-4">
//           <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
//           <div className="grid grid-cols-2 gap-2">
//             {offer.features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center text-sm text-gray-600"
//               >
//                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
//                 {feature}
//               </div>
//             ))}
//           </div>
//         </div>

//         {isAdmin && (
//           <button
//             onClick={() => deleteOffer(offer.id)}
//             className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-semibold"
//           >
//             Remove Offer
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//           Special Offers & Promotions
//         </h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Discover our exclusive deals for weekends, holidays, and seasonal
//           events. Save on premium transportation services for all your travel
//           needs.
//         </p>
//       </div>

//       {/* Grid layout instead of carousel */}
//       <div className="max-w-[1200px] mx-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {offers.map((offer) => (
//           <OfferCard key={offer.id} offer={offer} isAdmin={adminMode} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Advert;
// 'use client';
// import React, { useState } from 'react';
// import { Calendar } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Advert = () => {
//   const [adminMode, setAdminMode] = useState(false);
//   const [offers, setOffers] = useState([
//     {
//       id: 1,
//       title: 'Weekend Getaway Special',
//       subtitle: 'Enjoy 25% off on all weekend trips',
//       description:
//         'Book your Friday to Sunday journeys and save big on our premium shuttle services. Perfect for family outings and weekend adventures.',
//       type: 'weekend',
//       discount: '25%',
//       valid: 'Fridays, Saturdays & Sundays',
//       image: 'https://placehold.co/600x400/1e40af/ffffff?text=Weekend+Special',
//       features: [
//         '25% Discount',
//         'Free Wi-Fi',
//         'Complimentary Water',
//         'Priority Booking',
//       ],
//       highlighted: true,
//     },
//     {
//       id: 2,
//       title: 'Holiday Season Package',
//       subtitle: 'All-inclusive holiday travel deals',
//       description:
//         'Make your holiday season memorable with our special packages for family gatherings, shopping trips, and festive events across the city.',
//       type: 'holiday',
//       discount: '20%',
//       valid: 'Dec 15 - Jan 5',
//       image: 'https://placehold.co/600x400/dc2626/ffffff?text=Holiday+Season',
//       features: [
//         '20% Savings',
//         'Decorated Vehicles',
//         'Holiday Music',
//         'Extended Hours',
//       ],
//       highlighted: false,
//     },
//     {
//       id: 3,
//       title: 'Summer Vacation Special',
//       subtitle: 'Travel smart this summer season',
//       description:
//         'Beat the heat with our air-conditioned fleet and special summer packages for family vacations, beach trips, and summer getaways.',
//       type: 'seasonal',
//       discount: '30%',
//       valid: 'June - August',
//       image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Summer+Vacation',
//       features: ['30% Off', 'AC Vehicles', 'Sun Shades', 'Cool Refreshments'],
//       highlighted: false,
//     },
//   ]);

//   const deleteOffer = (id) => {
//     setOffers(offers.filter((offer) => offer.id !== id));
//   };

//   const OfferCard = ({ offer, isAdmin }) => (
//     <div className="bg-white rounded-2xl shadows-sm border border-gray-500 overflow-hidden  transition-all duration-300">
//       <img
//         src={offer.image}
//         alt={offer.title}
//         className="w-full h-64 object-cover"
//       />

//       <div className="p-6">
//         <div className="flex items-center justify-between mb-2">
//           <h3 className="text-2xl font-bold text-gray-800">{offer.title}</h3>
//           <span className="text-3xl font-bold text-blue-600">
//             {offer.discount}
//           </span>
//         </div>

//         <p className="text-blue-600 font-semibold text-sm mb-3">
//           {offer.subtitle}
//         </p>

//         <p className="text-gray-600 mb-4 text-sm leading-relaxed">
//           {offer.description}
//         </p>

//         <div className="flex items-center text-gray-500 text-sm mb-4">
//           <Calendar className="w-4 h-4 mr-2" />
//           <span>Valid: {offer.valid}</span>
//         </div>

//         <div className="mb-4">
//           <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
//           <div className="grid grid-cols-2 gap-2">
//             {offer.features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center text-sm text-gray-600"
//               >
//                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
//                 {feature}
//               </div>
//             ))}
//           </div>
//         </div>

//         {isAdmin && (
//           <button
//             onClick={() => deleteOffer(offer.id)}
//             className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-semibold"
//           >
//             Remove Offer
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//           Special Offers & Promotions
//         </h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Discover our exclusive deals for weekends, holidays, and seasonal
//           events. Save on premium transportation services for all your travel
//           needs.
//         </p>
//       </div>

//       {/* Swiper Slider instead of grid */}
//       <div className="max-w-[1200px] mx-auto w-[90%]">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {offers.map((offer) => (
//             <SwiperSlide key={offer.id}>
//               <OfferCard offer={offer} isAdmin={adminMode} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Advert;
'use client';
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Advert = () => {
  const [adminMode, setAdminMode] = useState(false);
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: 'Weekend Getaway Special',
      subtitle: 'Enjoy 25% off on all weekend trips',
      description:
        'Book your Friday to Sunday journeys and save big on our premium shuttle services. Perfect for family outings and weekend adventures.',
      type: 'weekend',
      discount: '25%',
      valid: 'Fridays, Saturdays & Sundays',
      image: 'https://placehold.co/600x400/1e40af/ffffff?text=Weekend+Special',
      features: [
        '25% Discount',
        'Free Wi-Fi',
        'Complimentary Water',
        'Priority Booking',
      ],
      highlighted: true,
    },
    {
      id: 2,
      title: 'Holiday Season Package',
      subtitle: 'All-inclusive holiday travel deals',
      description:
        'Make your holiday season memorable with our special packages for family gatherings, shopping trips, and festive events across the city.',
      type: 'holiday',
      discount: '20%',
      valid: 'Dec 15 - Jan 5',
      image: 'https://placehold.co/600x400/dc2626/ffffff?text=Holiday+Season',
      features: [
        '20% Savings',
        'Decorated Vehicles',
        'Holiday Music',
        'Extended Hours',
      ],
      highlighted: false,
    },
    {
      id: 3,
      title: 'Summer Vacation Special',
      subtitle: 'Travel smart this summer season',
      description:
        'Beat the heat with our air-conditioned fleet and special summer packages for family vacations, beach trips, and summer getaways.',
      type: 'seasonal',
      discount: '30%',
      valid: 'June - August',
      image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Summer+Vacation',
      features: ['30% Off', 'AC Vehicles', 'Sun Shades', 'Cool Refreshments'],
      highlighted: false,
    },
  ]);

  const deleteOffer = (id) => {
    setOffers(offers.filter((offer) => offer.id !== id));
  };

  const OfferCard = ({ offer, isAdmin }) => (
    <div className="bg-white  overflow-hidden border border-gray-500 transition-all duration-300">
      <img
        src={offer.image}
        alt={offer.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-800">{offer.title}</h3>
          <span className="text-3xl font-bold text-blue-600">
            {offer.discount}
          </span>
        </div>

        <p className="text-blue-600 font-semibold text-sm mb-3">
          {offer.subtitle}
        </p>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {offer.description}
        </p>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Valid: {offer.valid}</span>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
          <div className="grid grid-cols-2 gap-2">
            {offer.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-gray-600"
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {isAdmin && (
          <button
            onClick={() => deleteOffer(offer.id)}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-semibold"
          >
            Remove Offer
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section
      id="advertisnmentSection"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Special Offers & Promotions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our exclusive deals for weekends, holidays, and seasonal
          events. Save on premium transportation services for all your travel
          needs.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-[1200px] mx-auto w-[90%]">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <OfferCard offer={offer} isAdmin={adminMode} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Advert;

//
// 'use client';
// import React, { useState } from 'react';
// import {
//   Calendar,
//   Star,
//   Heart,
//   Trash2,
//   ArrowLeft,
//   ArrowRight,
// } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const Advert = () => {
//   const [adminMode, setAdminMode] = useState(false);
//   const [offers, setOffers] = useState([
//     {
//       id: 1,
//       title: 'Weekend Getaway Special',
//       subtitle: 'Enjoy 25% off on all weekend trips',
//       description:
//         'Book your Friday to Sunday journeys and save big on our premium shuttle services. Perfect for family outings and weekend adventures.',
//       type: 'weekend',
//       discount: '25%',
//       valid: 'Fridays, Saturdays & Sundays',
//       image: 'https://placehold.co/600x400/1e40af/ffffff?text=Weekend+Special',
//       features: [
//         '25% Discount',
//         'Free Wi-Fi',
//         'Complimentary Water',
//         'Priority Booking',
//       ],
//       highlighted: true,
//     },
//     {
//       id: 2,
//       title: 'Holiday Season Package',
//       subtitle: 'All-inclusive holiday travel deals',
//       description:
//         'Make your holiday season memorable with our special packages for family gatherings, shopping trips, and festive events across the city.',
//       type: 'holiday',
//       discount: '20%',
//       valid: 'Dec 15 - Jan 5',
//       image: 'https://placehold.co/600x400/dc2626/ffffff?text=Holiday+Season',
//       features: [
//         '20% Savings',
//         'Decorated Vehicles',
//         'Holiday Music',
//         'Extended Hours',
//       ],
//       highlighted: false,
//     },
//     {
//       id: 3,
//       title: 'Summer Vacation Special',
//       subtitle: 'Travel smart this summer season',
//       description:
//         'Beat the heat with our air-conditioned fleet and special summer packages for family vacations, beach trips, and summer getaways.',
//       type: 'seasonal',
//       discount: '30%',
//       valid: 'June - August',
//       image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Summer+Vacation',
//       features: ['30% Off', 'AC Vehicles', 'Sun Shades', 'Cool Refreshments'],
//       highlighted: false,
//     },
//   ]);

//   const deleteOffer = (id) => {
//     setOffers(offers.filter((offer) => offer.id !== id));
//   };

//   const OfferCard = ({ offer, isAdmin }) => (
//     <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
//       <div className="relative">
//         <img
//           src={offer.image}
//           alt={offer.title}
//           className="w-full h-64 sm:h-72 object-cover"
//         />
//         {offer.highlighted && (
//           <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
//             HOT DEAL
//           </div>
//         )}
//         {isAdmin && (
//           <button
//             onClick={() => deleteOffer(offer.id)}
//             className="absolute top-4 right-4 bg-red-500/90 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
//             aria-label="Delete offer"
//           >
//             <Trash2 size={20} />
//           </button>
//         )}
//         <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-sm">
//           <span className="text-2xl font-bold">{offer.discount}</span>
//           <span className="ml-1 text-sm">OFF</span>
//         </div>
//       </div>

//       <div className="p-6">
//         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
//           <div>
//             <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
//               {offer.title}
//             </h3>
//             <p className="text-blue-600 font-semibold text-sm sm:text-base">
//               {offer.subtitle}
//             </p>
//           </div>
//           <div className="flex items-center mt-2 sm:mt-0">
//             <Star className="w-4 h-4 text-yellow-400 fill-current" />
//             <span className="text-xs text-gray-500 ml-1">4.9 ★</span>
//           </div>
//         </div>

//         <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">
//           {offer.description}
//         </p>

//         <div className="flex items-center text-gray-500 text-sm mb-5">
//           <Calendar className="w-4 h-4 mr-2" />
//           <span>Valid: {offer.valid}</span>
//         </div>

//         <div className="mb-6">
//           <h4 className="font-semibold text-gray-800 mb-3 text-sm">
//             Includes:
//           </h4>
//           <div className="grid grid-cols-2 gap-2">
//             {offer.features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center text-xs sm:text-sm text-gray-600 p-2 bg-gray-50 rounded-lg"
//               >
//                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
//                 {feature}
//               </div>
//             ))}
//           </div>
//         </div>

//         {isAdmin && (
//           <div className="flex justify-end">
//             <button
//               onClick={() => deleteOffer(offer.id)}
//               className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-semibold"
//             >
//               Remove Offer
//             </button>
//           </div>
//         )}

//         {!isAdmin && (
//           <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md">
//             Book Now
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <section
//       id="advertisnmentSection"
//       className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50"
//     >
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//           Special Offers & Promotions
//         </h1>
//         <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//           Discover our exclusive deals for weekends, holidays, and seasonal
//           events. Save on premium transportation services for all your travel
//           needs.
//         </p>

//         {/* Admin toggle button */}
//         {typeof window !== 'undefined' && (
//           <div className="mt-8 flex justify-center">
//             <button
//               onClick={() => setAdminMode(!adminMode)}
//               className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 adminMode
//                   ? 'bg-red-500 text-white shadow-lg'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               {adminMode ? 'Exit Admin Mode' : 'Enter Admin Mode'}
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Swiper Slider */}
//       <div className="max-w-7xl mx-auto w-full px-4">
//         <Swiper
//           modules={[Pagination, Autoplay, Navigation]}
//           spaceBetween={20}
//           slidesPerView={1}
//           pagination={{ clickable: true, dynamicBullets: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           loop={true}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="my-8"
//         >
//           {offers.map((offer) => (
//             <SwiperSlide key={offer.id}>
//               <OfferCard offer={offer} isAdmin={adminMode} />
//             </SwiperSlide>
//           ))}

//           {/* Custom navigation buttons */}
//           <div className="swiper-button-prev absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-10">
//             <ArrowLeft size={20} />
//           </div>
//           <div className="swiper-button-next absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-10">
//             <ArrowRight size={20} />
//           </div>
//         </Swiper>
//       </div>

//       {/* Mobile-friendly call-to-action */}
//       <div className="max-w-7xl mx-auto mt-16 px-4 text-center">
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Ready to save on your next trip?
//           </h2>
//           <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
//             Join thousands of satisfied customers who've already taken advantage
//             of our exclusive offers.
//           </p>
//           <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
//             Book Your Deal Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Advert;
