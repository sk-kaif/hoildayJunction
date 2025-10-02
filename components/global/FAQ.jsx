'use client';
import { useState, useRef } from 'react';

const faqs = [
  {
    question: 'How do I rent a bus?',
    answer:
      'You can rent a bus by visiting our website, selecting your preferred vehicle, and filling out the booking form. Our team will then assist you with the confirmation.',
  },
  {
    question: 'How many vehicles can I book at once?',
    answer: (
      <>
        You can book buses for requirements of any size. We’ve handled large
        requirements like corporate events, weddings & group outstation trips.{' '}
        <strong>
          You can choose to hire Tempo travellers, mini buses, coaches and cars.
        </strong>{' '}
        You can know more about the car & bus rental options by visiting the{' '}
        <a href="/vehicles" className="text-blue-600 underline">
          our vehicles
        </a>{' '}
        page.
      </>
    ),
  },
  {
    question: 'What are SimplyTrip’s payment terms?',
    answer:
      'We accept online payments, bank transfers, and partial advance payments. Full payment is required before trip commencement.',
  },
  {
    question: 'Can I reschedule my trip?',
    answer:
      'Yes, you can reschedule your trip by contacting our support team. Rescheduling is subject to availability.',
  },
  {
    question: 'How are the KM’s calculated?',
    answer:
      'KMs are calculated from the garage and back to the garage after the trip ends.',
  },

  {
    question: 'Can I reschedule my trip?',
    answer:
      'Yes, you can reschedule your trip by contacting our support team. Rescheduling is subject to availability.',
  },
  {
    question: 'How are the KM’s calculated?',
    answer:
      'KMs are calculated from the garage and back to the garage after the trip ends.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // 👈 Open first item by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className=" bg-black text-white">
      <section className="max-w-3xl w-[90%] mx-auto  py-10 md:py-16 bg-black text-white">
        <h1 className="text-[48px] leading-14 font-bold pb-3 text-center">
          FAQ
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Booking / Reservations
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentRef = useRef(null);

            return (
              <div
                key={index}
                className="border-b border-gray-200 space-y-4  transition-all"
              >
                <button
                  className="w-full text-left flex  md:pb-4 cursor-pointer justify-between items-start font-medium text-lg"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-45 text-blue-600'
                        : 'rotate-0 text-gray-600'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>

                <div
                  ref={contentRef}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen
                      ? `${contentRef.current?.scrollHeight}px`
                      : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="mt-2 text-white text-sm md:text-base pr-4 mb-4 md:pb-0">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
