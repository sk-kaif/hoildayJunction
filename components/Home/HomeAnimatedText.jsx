'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  'School Bus Contracts',
  'Corporate Pickup & Drop',
  'Car & Bus Rentals',
  'Long Distance Trips',
];

const HomeAnimatedText = () => {
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
    <div>
      <motion.p
        className="text-2xl md:text-3xl font-mono h-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {displayedText}
        <span className="border-r-2 border-white ml-1 animate-pulse" />
      </motion.p>
    </div>
  );
};

export default HomeAnimatedText;
