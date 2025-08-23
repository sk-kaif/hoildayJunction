// import dummyBlogs from '@/utils/dummyBlogs';
// import BlogCard from '@/components/BlogCard';

// const BlogsPage = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-6">Our Blogs</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {dummyBlogs.map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;

'use client';

import dummyBlogs from '@/utils/dummyBlogs';
import BlogCard from '@/components/BlogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'swiper/css';
import 'swiper/css/navigation';

const BlogsPage = () => {
  return (
    <section className="py-10 md:py-16 bg-black">
      <div className="max-w-[1200px] mx-auto w-[90%] text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="flex-1 text-4xl md:text-[48px] md:leading-14 font-bold pb-5 md:pb-0 text-white">
            Our Blogs
          </h1>
          <div className="flex gap-4">
            <button className="custom-prev-blogs bg-gray-200 p-2 rounded-full">
              <IoIosArrowBack size={20} color="black" />
            </button>
            <button className="custom-next-blogs bg-gray-200 p-2 rounded-full">
              <IoIosArrowForward size={20} color="black" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          // loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.custom-next-blogs',
            prevEl: '.custom-prev-blogs',
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
              slidesPerView: 2.5,
            },
          }}
        >
          {dummyBlogs.map((blog, idx) => (
            <SwiperSlide key={idx}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogsPage;
