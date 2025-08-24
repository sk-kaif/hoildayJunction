import HomeAnimatedText from './HomeAnimatedText';

export default function HomeHero() {
  return (
    <main className="BlueBG text-white px-6">
      <section className="max-w-[1200px] mx-auto w-90%  min-h-screen flex flex-col justify-center items-center ">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Your Trusted Ride Partner
        </h1>

        <HomeAnimatedText />

        {/* 👇 New buttons block */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+919619657785"
            className=" text-center bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Call Us
          </a>
          <a
            href="#price"
            className="text-center bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition"
          >
            Get a Price
          </a>
        </div>

        <div className="mt-12 max-w-2xl text-center text-lg md:text-xl">
          <p>
            We are committed to providing safe, reliable, and affordable
            transportation solutions for all your needs.
          </p>
        </div>
      </section>
    </main>
  );
}
