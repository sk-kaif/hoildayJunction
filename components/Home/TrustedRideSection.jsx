// components/TrustedRideSection.js
export default function TrustedRideSection() {
  return (
    <main id="about" className="scroll-mt-7 max-w-[1200px] mx-auto w-[90%] ">
      <section className="flex flex-col md:flex-row items-start md:justify-between md:gap-20 py-12 lg:py-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/trustedride.jpg"
            alt="TrustedRide vans in city"
            className="rounded-lg w-full object-cover shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl lg:text-[48px] lg:leading-14 font-bold pb-6">
            TrustedRide : Your <br className="hidden md:block" />
            Safe Simple Reliable
          </h2>
          <p className="text-gray-700 mb-8">
            TrustedRide has been serving the community for over a decade,
            committed to safety, punctuality, and customer satisfaction. Our
            mission is to deliver friendly, dependable transportation solutions
            for daily commutes, group travel, and long-distance tours, ensuring
            every journey is comfortable and secure.
          </p>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold">1500 $</div>
              <div className="text-gray-500 text-sm mt-1">
                Total Rides Completed
              </div>
            </div>
            {/* <div>
              <div className="text-2xl md:text-3xl font-bold">200000 $</div>
              <div className="text-gray-500 text-sm mt-1">
                Total Revenue Generated
              </div>
            </div> */}
            <div>
              <div className="text-2xl md:text-3xl font-bold">50 k+</div>
              <div className="text-gray-500 text-sm mt-1">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">10000 k+</div>
              <div className="text-gray-500 text-sm mt-1">
                Safe Journeys Delivered
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
