'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  'School Bus Services',
  'Corporate Pickup & Drop',
  'Car & Bus Rentals',
  'Long Distance Trips',
];

export default function HomeHero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <main className="bg-gradient-to-br from-blue-900 to-blue-600 text-white px-6">
      <section className="max-w-[1200px] mx-auto w-90%  min-h-screen flex flex-col justify-center items-center ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4"
        >
          Your Trusted Ride Partner
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl font-mono h-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {displayedText}
          <span className="border-r-2 border-white ml-1 animate-pulse" />
        </motion.p>

        {/* 👇 New buttons block */}
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: 2, duration: 1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="tel:+919876543210"
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
        </motion.div>

        <motion.div
          className="mt-12 max-w-2xl text-center text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p>
            We are committed to providing safe, reliable, and affordable
            transportation solutions for all your needs.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
