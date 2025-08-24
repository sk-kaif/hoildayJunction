'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const items = [
  { id: 1, src: '/vechicals/dummyGallery.png', category: '4 seater' },
  { id: 2, src: '/vechicals/dummyGallery.png', category: '6 seater' },
  { id: 3, src: '/vechicals/dummyGallery.png', category: '8 seater' },
  { id: 4, src: '/vechicals/dummyGallery.png', category: '14 seater' },
  { id: 5, src: '/vechicals/dummyGallery.png', category: '36 seater' },
  { id: 6, src: '/vechicals/dummyGallery.png', category: '41 seater' },
];

const Gallery = () => {
  const [selected, setSelected] = useState('All');
  const categories = ['All', ...new Set(items.map((i) => i.category))];

  const filtered =
    selected === 'All' ? items : items.filter((i) => i.category === selected);

  return (
    <div
      id="gallery"
      className="max-w-[1200px] mx-auto py-10 md:py-16 w-[90%] lg:h-[100vh] lg:scroll-mt-10 "
    >
      <section>
        <h2 className="text-[48px] leading-14 font-bold pb-6 text-cente text-center">
          Gallery
        </h2>

        {/* Stylish Tab Buttons */}
        <div className="flex justify-center  flex-wrap gap-3 mb-6 lg:mb-12 ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full text-base font-medium transition-all cursor-pointer
              ${
                selected === cat
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-white text-gray-800 border border-gray-500 hover:text-black'
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
          {filtered.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full aspect-square bg-gray-200">
                <Image
                  src={item.src}
                  alt={`${item.category} ${item.id}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Gallery;
