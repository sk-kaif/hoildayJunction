// components/TrustedRideSection.js
export default function TrustedRideSection() {
  return (
    <main id="about" className="scroll-mt-7 max-w-[1200px] mx-auto w-[90%] ">
      <section className="flex flex-col md:flex-row items-start md:items-center md:justify-between md:gap-20 py-12 lg:py-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/trustedride.jpg"
            alt="TrustedRide vans in city"
            className=" w-full object-cover shadow-lg"
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
          <p className="text-gray-700 mb-8">
            At <strong>Holidays Junction</strong>, we believe every journey
            should be safe, comfortable, and memorable. With years of trusted
            service, our transportation solutions are designed for individuals,
            families, and corporate groups who value reliability and
            convenience. Whether you are planning a weekend getaway, family
            function, or long-distance travel, we offer affordable{' '}
            <strong>tempo traveller</strong> rentals and
            <strong> bus rent</strong> options tailored to your needs.
          </p>

          <p className="text-gray-700 mb-8">
            From daily commutes to customized <strong>outdoor planning</strong>,
            our team ensures timely service, clean vehicles, and professional
            drivers. HolidaysJunction is the one-stop destination for group
            tours, weddings, events, and holiday packages, making sure your
            travel experience remains stress-free and enjoyable.
          </p>

          <p className="text-gray-700 mb-8">
            Choose <strong>Holidays Junction</strong> for dependable
            <strong> tempo traveller</strong> bookings, luxury{' '}
            <strong>bus rent</strong>, and smooth{' '}
            <strong>outdoor planning</strong> solutions across India. Our
            mission is simple – to provide safe, friendly, and affordable
            transportation that gives you peace of mind and unforgettable travel
            moments.
          </p>
        </div>
      </section>
    </main>
  );
}
