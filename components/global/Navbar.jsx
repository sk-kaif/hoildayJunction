'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">
            <a href="/">MySite</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Service
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#vechicals" className="text-gray-700 hover:text-blue-600">
              Vehicles
            </a>

            <a
              href="#price"
              className="text-white shadow-sm rounded-3xl hover:text-black bg-blue-600 py-1.5 px-3"
            >
              Price
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 ">
              Gallery
            </a>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-600 ">
              Blogs
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-800 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-lg font-semibold text-blue-600">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 space-y-4">
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Service
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#vechicals"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Vehicles
          </a>
          <a
            href="#price"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Price
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600 "
          >
            Gallery
          </a>
          <Link
            href="/Link"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600 "
          >
            Gallery
          </Link>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Background overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
