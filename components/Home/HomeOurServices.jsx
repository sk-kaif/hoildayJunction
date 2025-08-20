'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'swiper/css';
import 'swiper/css/navigation';

const expertiseData = [
  {
    id: 1,
    title: 'Safe School Bus Services',
    image: '/home/school-bus.webp',
  },
  {
    id: 2,
    title: 'Corporate Employee Transport',
    image: '/home/corporate-transport.webp',
  },
  {
    id: 3,
    title: 'Flexible Car and Bus Rentals',
    image: '/home/car-rental.webp',
  },
  {
    id: 4,
    title: 'Exciting Long-Distance Tours',
    image: '/home/long-tour.webp',
  },
];

const HomeOurServices = () => {
  return (
    <div
      id="services"
      className="relative scroll-mt-4 w-full bg-black lg:min-h-screen lg:flex justify-center items-center"
    >
      <section className="max-w-[1200px] mx-auto w-[90%] py-12 lg:py-16">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="flex-1 text-4xl md:text-[48px] md:leading-14 font-bold pb-5 md:pb-0 text-white">
            Our Expertise
          </h2>
          <div className="flex gap-4">
            <button className="cursor-pointer custom-prev-services bg-gray-200 p-3 rounded-full">
              <IoIosArrowBack size={19} />
            </button>
            <button className="cursor-pointer custom-next-services bg-gray-200 p-3 rounded-full">
              <IoIosArrowForward size={19} />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.custom-next-services',
            prevEl: '.custom-prev-services',
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
              slidesPerView: 4,
            },
          }}
          className="swiper-container"
        >
          {expertiseData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group text-center rounded overflow-hidden shadow-lg bg-gray-900 cursor-pointer transform transition-transform duration-300 hover:scale-105 h-[400px] flex flex-col">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-semibold px-4 py-4 text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default HomeOurServices;
