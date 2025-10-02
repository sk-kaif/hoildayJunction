// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const items = [
//   { id: 1, src: '/holidayAssets/Frame8New.jpg', category: '4 seater' },
//   { id: 2, src: '/holidayAssets/resize.jpg', category: '6 seater' },
//   { id: 3, src: '/holidayAssets/figmaResize.jpg', category: '8 seater' },
//   { id: 4, src: '/vechicals/dummyGallery.png', category: '14 seater' },
//   { id: 5, src: '/vechicals/dummyGallery.png', category: '36 seater' },
//   { id: 6, src: '/vechicals/dummyGallery.png', category: '41 seater' },
// ];

// const Gallery = () => {
//   const [selected, setSelected] = useState('All');
//   const categories = ['All', ...new Set(items.map((i) => i.category))];

//   const filtered =
//     selected === 'All' ? items : items.filter((i) => i.category === selected);

//   return (
//     <div
//       id="gallery"
//       className="max-w-[1200px] mx-auto py-10 md:py-16 w-[90%] lg:h-[100vh] lg:scroll-mt-10 "
//     >
//       <section>
//         <h2 className="text-[48px] leading-14 font-bold pb-6 text-cente text-center">
//           Gallery
//         </h2>

//         {/* Stylish Tab Buttons */}
//         <div className="flex justify-center  flex-wrap gap-3 mb-6 lg:mb-12 ">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelected(cat)}
//               className={`px-4 py-2 rounded-full text-base font-medium transition-all cursor-pointer
//               ${
//                 selected === cat
//                   ? 'bg-blue-600 text-white shadow'
//                   : 'bg-white text-gray-800 border border-gray-500 hover:text-black'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           navigation
//           modules={[Navigation]}
//         >
//           {filtered.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div className="relative w-full aspect-square bg-gray-200">
//                 <Image
//                   src={item.src}
//                   alt={`${item.category} ${item.id}`}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </div>
//   );
// };

// export default Gallery;
// ======================================
// ======================================
// ======================================
// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { X } from 'lucide-react';

// const items = [
//   { id: 1, src: '/holidayAssets/Frame8New.jpg', category: '4 seater' },
//   { id: 2, src: '/holidayAssets/resize.jpg', category: '6 seater' },
//   { id: 3, src: '/holidayAssets/figmaResize.jpg', category: '8 seater' },
//   { id: 4, src: '/vechicals/dummyGallery.png', category: '14 seater' },
//   { id: 5, src: '/vechicals/dummyGallery.png', category: '36 seater' },
//   { id: 6, src: '/vechicals/dummyGallery.png', category: '41 seater' },
// ];

// const Gallery = () => {
//   const [selected, setSelected] = useState('All');
//   const [popupImg, setPopupImg] = useState(null);

//   const categories = ['All', ...new Set(items.map((i) => i.category))];

//   const filtered =
//     selected === 'All' ? items : items.filter((i) => i.category === selected);

//   return (
//     <div
//       id="gallery"
//       className="max-w-[1200px] mx-auto py-10 md:py-16 w-[90%] lg:scroll-mt-10 "
//     >
//       <section>
//         <h2 className="text-[36px] md:text-[48px] font-bold pb-6 text-center">
//           Gallery
//         </h2>

//         {/* Stylish Tab Buttons */}
//         <div className="flex justify-center flex-wrap gap-3 mb-6 lg:mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelected(cat)}
//               className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all cursor-pointer
//                 ${
//                   selected === cat
//                     ? 'bg-blue-600 text-white shadow-md'
//                     : 'bg-white text-gray-800 border border-gray-400 hover:text-black'
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           navigation
//           modules={[Navigation]}
//         >
//           {filtered.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div
//                 className="relative w-full aspect-square bg-gray-200 cursor-pointer group"
//                 onClick={() => setPopupImg(item.src)}
//               >
//                 <Image
//                   src={item.src}
//                   alt={`${item.category} ${item.id}`}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="group-hover:scale-105 transition-transform duration-300 rounded-xl"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* Popup Modal */}
//       {popupImg && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
//           <div className="relative max-w-3xl w-full">
//             <button
//               className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
//               onClick={() => setPopupImg(null)}
//             >
//               <X size={32} />
//             </button>
//             <div className="relative w-full h-[70vh] md:h-[80vh]">
//               <Image
//                 src={popupImg}
//                 alt="Popup"
//                 fill
//                 className="object-contain rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { X } from 'lucide-react';

// const items = [
//   { id: 1, src: '/holidayAssets/Frame8New.jpg', category: '4 seater' },
//   { id: 2, src: '/holidayAssets/resize.jpg', category: '6 seater' },
//   { id: 3, src: '/holidayAssets/figmaResize.jpg', category: '8 seater' },
//   { id: 4, src: '/vechicals/dummyGallery.png', category: '14 seater' },
//   { id: 5, src: '/vechicals/dummyGallery.png', category: '36 seater' },
//   { id: 6, src: '/vechicals/dummyGallery.png', category: '41 seater' },
// ];

// const Gallery = () => {
//   const [selected, setSelected] = useState('All');
//   const [popupData, setPopupData] = useState(null);

//   const categories = ['All', ...new Set(items.map((i) => i.category))];

//   const filtered =
//     selected === 'All' ? items : items.filter((i) => i.category === selected);

//   return (
//     <div
//       id="gallery"
//       className="max-w-[1200px] mx-auto py-10 md:py-16 w-[90%] lg:scroll-mt-10 "
//     >
//       <section>
//         <h2 className="text-[36px] md:text-[48px] font-bold pb-6 text-center">
//           Gallery
//         </h2>

//         {/* Stylish Tab Buttons */}
//         <div className="flex justify-center flex-wrap gap-3 mb-6 lg:mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelected(cat)}
//               className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all cursor-pointer
//               ${
//                 selected === cat
//                   ? 'bg-blue-600 text-white shadow-md'
//                   : 'bg-white text-gray-800 border border-gray-400 hover:text-black'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           navigation
//           modules={[Navigation]}
//         >
//           {filtered.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div
//                 className="relative w-full aspect-square bg-gray-200 cursor-pointer group"
//                 onClick={() =>
//                   setPopupData({ src: item.src, category: item.category })
//                 }
//               >
//                 <Image
//                   src={item.src}
//                   alt={`${item.category} ${item.id}`}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="group-hover:scale-105 transition-transform duration-300 rounded-xl"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* Popup Modal */}
//       {popupData && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
//           <div className="relative max-w-3xl w-full text-center">
//             {/* Close Button */}
//             <button
//               className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
//               onClick={() => setPopupData(null)}
//             >
//               <X size={32} />
//             </button>

//             {/* Image */}
//             <div className="relative w-full h-[39vh] md:h-[80vh]">
//               <Image
//                 src={popupData.src}
//                 alt="Popup"
//                 fill
//                 className="object-contain rounded-lg"
//               />
//             </div>

//             {/* Category Title */}
//             <h3 className="md:mt-4 text-lg md:text-xl font-semibold text-white">
//               {popupData.category}
//             </h3>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

// ========================

// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { X } from 'lucide-react';

// // const items = [
// //   { id: 1, src: '/holidayAssets/Frame8New.jpg', category: '4 seater' },
// //   { id: 2, src: '/holidayAssets/resize.jpg', category: '7 - 8 seater' },
// //   { id: 4, src: '/vechicals/dummyGallery.png', category: '13 seater' },
// //   { id: 5, src: '/vechicals/dummyGallery.png', category: '17 - 20 seater' },
// //   { id: 6, src: '/vechicals/dummyGallery.png', category: '26 seater' },
// //   { id: 7, src: '/vechicals/dummyGallery.png', category: '35 - 37 seater' },
// //   { id: 8, src: '/vechicals/dummyGallery.png', category: '45 - 47 seater' },
// // ];

// const Gallery = () => {
//   const [selected, setSelected] = useState('All');
//   const [popupData, setPopupData] = useState(null);

//   const categories = ['All', ...new Set(items.map((i) => i.category))];
//   const filtered =
//     selected === 'All' ? items : items.filter((i) => i.category === selected);

//   return (
//     <div
//       id="gallery"
//       className="max-w-[1200px] mx-auto py-10 md:py-16 w-[90%] lg:scroll-mt-10"
//     >
//       <section>
//         <h2 className="text-[36px] md:text-[48px] font-bold pb-6 text-center">
//           Gallery
//         </h2>

//         {/* Stylish Tab Buttons */}
//         <div className="flex justify-center flex-wrap gap-3 mb-6 lg:mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelected(cat)}
//               className={`px-4 py-2  text-sm md:text-base font-medium transition-all cursor-pointer
//               ${
//                 selected === cat
//                   ? 'bg-blue-600 text-white shadow-md'
//                   : 'bg-white text-gray-800 border border-gray-400 hover:text-black'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           navigation
//           modules={[Navigation]}
//         >
//           {filtered.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div
//                 className="relative w-full aspect-square bg-gray-200 cursor-pointer group hover:rounded-3xl transition-all duration-300 overflow-hidden"
//                 onClick={() =>
//                   setPopupData({ src: item.src, category: item.category })
//                 }
//               >
//                 {/* Image */}

//                 <Image
//                   src={item.src}
//                   alt={`${item.category} ${item.id}`}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="group-hover:scale-105 transition-transform duration-300"
//                 />

//                 {/* Overlay with text */}
//                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
//                   <p className="text-white text-sm md:text-base font-medium">
//                     Click to view
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* Popup Modal */}
//       {popupData && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
//           <div className="relative max-w-3xl w-full text-center">
//             {/* Close Button */}
//             <button
//               className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 bg-blue-600 rounded-full p-1 cursor-pointer"
//               onClick={() => setPopupData(null)}
//             >
//               <X size={26} />
//             </button>

//             {/* Image */}
//             <div className="relative w-full h-[39vh] md:h-[60vh]">
//               <Image
//                 src={popupData.src}
//                 alt="Popup"
//                 fill
//                 style={{ objectFit: 'contain' }}
//                 className="object-contain rounded-lg"
//               />
//             </div>

//             {/* Category Title */}
//             <h3 className="md:mt-4 text-lg md:text-xl font-semibold text-white">
//               {popupData.category}
//             </h3>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

// ===================
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { X } from 'lucide-react';

const galleryData = [
  {
    category: '4 seater',
    images: ['/holidayAssets/Frame8New.jpg'],
  },
  {
    category: '7 - 8 seater',
    images: ['/allresize/17Seater-1.jpg'],
  },
  {
    category: '13 seater',
    images: ['/allresize/17Seater-1.jpg'],
  },
  {
    category: '17 - 20 seater',
    images: [
      '/allresize/17Seater-1.jpg',
      '/allresize/20Seater-1.jpg',
      '/allresize/20Seater-2.jpg',
      '/allresize/20Seater-3.jpg',
    ],
  },
  {
    category: '26 seater',
    images: [
      '/allresize/20Seater-4.jpg',
      '/allresize/20Seater-5.jpg',
      '/allresize/20Seater-6.jpg',
      '/allresize/20Seater-7.jpg',
      '/allresize/20Seater-8.jpg',
    ],
  },
  {
    category: '35 - 37 seater',
    images: [
      '/allresize/30Seater-1.jpg',
      '/allresize/35Seater-2.jpg',
      '/allresize/40Seater-1.jpg',
      '/allresize/40Seater-2.jpg',
      '/allresize/40Seater-3.jpg',
    ],
  },
  {
    category: '45 - 47 seater',
    images: [
      '/allresize/30Seater-1.jpg',
      '/allresize/40Seater-4.jpg',
      '/allresize/40Seater-5.jpg',
      '/allresize/56Seater-1.jpg',
    ],
  },
];

const Gallery = () => {
  const [selected, setSelected] = useState('All');
  const [popupData, setPopupData] = useState(null);

  const categories = ['All', ...galleryData.map((c) => c.category)];

  // Filter images based on selected category
  const filteredImages =
    selected === 'All'
      ? galleryData.flatMap((cat) =>
          cat.images.map((src) => ({ src, category: cat.category }))
        )
      : galleryData
          .find((cat) => cat.category === selected)
          ?.images.map((src) => ({ src, category: selected })) || [];

  return (
    <div
      id="gallery"
      className="max-w-[1200px] mx-auto py-10 md:py-16 w-[90%] lg:scroll-mt-10"
    >
      <section>
        <h2 className="text-[36px] md:text-[48px] font-bold pb-6 text-center">
          Gallery
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-6 lg:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 text-sm md:text-base font-medium transition-all cursor-pointer ${
                selected === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-800 border border-gray-400 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          modules={[Navigation]}
        >
          {filteredImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full aspect-square bg-gray-200 cursor-pointer group hover:rounded-3xl transition-all duration-300 overflow-hidden"
                onClick={() =>
                  setPopupData({ src: item.src, category: item.category })
                }
              >
                <Image
                  src={item.src}
                  alt={item.category}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white text-sm md:text-base font-medium">
                    Click to view
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Popup Modal */}
      {popupData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative max-w-3xl w-full text-center">
            <button
              className="absolute top-[-20px] md:top-[-60px] right-2 text-white text-3xl hover:text-gray-300 bg-blue-600 rounded-full p-1 cursor-pointer"
              onClick={() => setPopupData(null)}
            >
              <X size={26} />
            </button>
            <div className="relative w-full h-[39vh] md:h-[60vh]">
              <Image
                src={popupData.src}
                alt="Popup"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="md:mt-4 text-lg md:text-xl font-semibold text-white">
              {popupData.category}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
