'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Corporate Manager',
    image: '/clientsphotos/gen1.svg',
    quote:
      'SimplyTrip made our team outing hassle-free. The bus was on time, clean, and the driver was super friendly.',
    bgColor: 'bg-purple-400',
  },
  {
    name: 'Sanya Kapoor',
    role: 'Wedding Planner',
    image: '/clientsphotos/lady1.svg',
    quote:
      'I’ve coordinated with many transport services, but SimplyTrip truly stands out. Seamless and professional.',
    bgColor: 'bg-indigo-400',
  },
  {
    name: 'Ravi Sharma',
    role: 'School Principal',
    image: '/clientsphotos/gen2.svg',
    quote:
      'Their school transportation is punctual and safe. Our parents trust SimplyTrip completely.',
    bgColor: 'bg-violet-500',
  },
  {
    name: 'Neha Verma',
    role: 'Event Coordinator',
    image: '/clientsphotos/lady2.svg', // Add this image in your public folder
    quote:
      'SimplyTrip made organizing our events so much easier. The service is reliable and the staff is very courteous.',
    bgColor: 'bg-pink-400',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-[48px] leading-14 font-bold pb-3">
          What Client Says
        </h2>
        <p className="mt-4 mb-7 max-w-2xl mx-auto text-base text-gray-300">
          Our clients consistently appreciate our professionalism, timely
          delivery, and dedication to quality. Their feedback inspires us to
          keep improving and delivering exceptional experiences every time.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <div className="bg-white  shadow-sm overflow-hidden text-black h-full flex flex-col min-h-[340px]">
                {/* Header with Gradient */}
                <div className="BlueBG h-[120px] relative">
                  {/* <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 -bottom-10 transform -translate-x-1/2 object-cover"
                  /> */}
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 -bottom-10 transform -translate-x-1/2 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="pt-14 pb-6 px-6 text-center flex flex-col flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{t.role}</p>
                  <hr className="mb-4 border-gray-200" />

                  {/* Clamp quote to 4 lines max */}
                  <p className="text-gray-600 text-sm italic line-clamp-4">
                    <span className="text-xl text-gray-400 mr-1">❝</span>
                    {t.quote}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
