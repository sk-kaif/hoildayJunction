import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted <span className="text-yellow-400">Ride Partner</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              We are committed to providing safe, reliable, and affordable
              transportation solutions for all your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
                Book Now & Save 15%
              </button>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <img
                src="https://hoilday-junction.vercel.app/trustedride.jpg"
                alt="TrustedRide vehicles"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Vehicles</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
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
