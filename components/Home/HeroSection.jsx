import Image from 'next/image';
import React from 'react';
import HomeAnimatedText from './HomeAnimatedText';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted <span className="text-black">Ride Partner</span>
            </h1>
            <HomeAnimatedText />
            <p className="text-xl md:text-2xl py-5 mb-8 text-blue-100 leading-relaxed">
              We are committed to providing safe, reliable, and affordable
              transportation solutions for all your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#price"
                className="text-center md:text-left bg-yellow-400 text-gray-900 px-8 py-4  font-semibold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now & Save 15%
              </Link>
              <a
                href="tel:+919619657785"
                className="text-center md:text-left border-2 border-white text-white px-8 py-4  font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Call Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm p-2 md:p-8 border border-white/20 shadow-2xl">
              {/* <Image
                src="../public/holidayAssets/phoneHomeBg.jpg"
                alt="TrustedRide vehicles"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              /> */}
              <div className="w-full h-64 relative  ">
                <Image
                  // src="/holidayAssets/phoneHomeBg.jpg"
                  src="/holidayAssets/IMG-20250824-WA0011.jpg"
                  alt="TrustedRide vehicles"
                  fill
                  className="w-full h-48 md:h-64 object-cover  shadow-lg"
                />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/20  p-3">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="bg-white/20  p-3">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Vehicles</div>
                </div>
                <div className="bg-white/20  p-3">
                  <div className="text-2xl font-bold">5K+</div>
                  <div className="text-sm opacity-90">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
