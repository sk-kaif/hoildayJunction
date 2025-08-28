// 'use client';

// import { useEffect, useState, useCallback } from 'react';
// import { Calendar, Percent, Gift, Star, X } from 'lucide-react';
// import Image from 'next/image';

// const setWithExpiry = (key, value, ttlMs) => {
//   const now = new Date().getTime();
//   localStorage.setItem(key, JSON.stringify({ value, expiry: now + ttlMs }));
// };

// const getWithExpiry = (key) => {
//   const raw = localStorage.getItem(key);
//   if (!raw) return null;
//   try {
//     const obj = JSON.parse(raw);
//     if (new Date().getTime() > obj.expiry) {
//       localStorage.removeItem(key);
//       return null;
//     }
//     return obj.value;
//   } catch {
//     localStorage.removeItem(key);
//     return null;
//   }
// };

// export default function OfferPopup({
//   offer = {
//     image: '/default-offer.jpg', // <- put any image in /public
//     title: 'Holiday Special Discount',
//     subtitle: 'Save big on your next trip!',
//     description:
//       'Exclusive deals available for a limited time. Book today and enjoy premium services at the best prices.',
//     discount: '30%',
//     valid: 'Until Dec 31, 2025',
//     features: [
//       'Free cancellation',
//       '24/7 support',
//       'Luxury stay',
//       'No hidden fees',
//     ],
//   },
//   onViewAll,
//   storageKey = 'offerPopupSeen',
//   delayMs = 600,
//   snoozeDays = 30,
// }) {
//   const [open, setOpen] = useState(false);

//   // open once per user (respect snooze)
//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const seen = getWithExpiry(storageKey);
//     if (seen) return;

//     const t = setTimeout(() => setOpen(true), delayMs);
//     return () => clearTimeout(t);
//   }, [storageKey, delayMs]);

//   // lock scroll when open
//   useEffect(() => {
//     if (!open) return;
//     const original = document.body.style.overflow;
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = original;
//     };
//   }, [open]);

//   const close = useCallback(
//     (snooze = true) => {
//       if (snooze && typeof window !== 'undefined') {
//         setWithExpiry(storageKey, '1', snoozeDays * 24 * 60 * 60 * 1000);
//       }
//       setOpen(false);
//     },
//     [storageKey, snoozeDays]
//   );

//   // ✅ Protect against undefined offer
//   if (!open || !offer) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
//       aria-modal="true"
//       role="dialog"
//       aria-label="Special Offer"
//     >
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//         onClick={() => close(true)}
//       />

//       {/* Card */}
//       <div
//         className="
//         relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden
//         grid grid-cols-1 md:grid-cols-2
//       "
//       >
//         {/* Media */}
//         <div className="relative h-52 md:h-auto">
//           <Image
//             src={offer.image}
//             alt={offer.title}
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 50vw"
//             priority
//           />
//           <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-medium">
//             <Percent className="w-3.5 h-3.5" />
//             Save {offer.discount}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-5 sm:p-6 md:p-7 flex flex-col">
//           {/* Close */}
//           <button
//             onClick={() => close(true)}
//             className="absolute right-3 top-3 md:right-4 md:top-4 rounded-full p-2 hover:bg-gray-100 transition"
//             aria-label="Close"
//           >
//             <X className="w-5 h-5 text-gray-600" />
//           </button>

//           <div className="flex items-center gap-2 text-blue-700 text-xs font-semibold uppercase tracking-wide">
//             <Gift className="w-4 h-4" />
//             Limited Time Offer
//           </div>

//           <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
//             {offer.title}
//           </h3>
//           <p className="text-blue-700 font-medium text-sm mt-1">
//             {offer.subtitle}
//           </p>

//           <p className="text-gray-600 text-sm mt-3 leading-relaxed">
//             {offer.description}
//           </p>

//           <div className="mt-4 flex items-center text-gray-500 text-sm">
//             <Calendar className="w-4 h-4 mr-2" />
//             <span>Valid: {offer.valid}</span>
//           </div>

//           <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
//             {offer.features.slice(0, 4).map((f, i) => (
//               <div key={i} className="flex items-center text-sm text-gray-700">
//                 <span className="mr-2 inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
//                 {f}
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="mt-6 flex gap-3">
//             <button
//               onClick={() => {
//                 onViewAll?.();
//                 close(false); // don't snooze if navigating immediately
//               }}
//               className="flex-1 rounded-2xl bg-blue-600 text-white font-semibold py-2.5 hover:bg-blue-700 transition shadow-sm"
//             >
//               View All Offers
//             </button>
//             <button
//               onClick={() => close(true)}
//               className="rounded-2xl bg-gray-100 text-gray-800 font-medium px-4 py-2.5 hover:bg-gray-200 transition"
//             >
//               Not now
//             </button>
//           </div>

//           {/* Trust hint */}
//           <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
//             <Star className="w-3.5 h-3.5" />
//             Best deals—updated regularly
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import { useEffect, useState, useCallback } from 'react';
import { Calendar, Percent, Gift, Star, X } from 'lucide-react';
import Image from 'next/image';

// ✅ Session storage (no expiry needed, cleared when tab/browser closes)
const setSession = (key, value) => {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(key, value);
};

const getSession = (key) => {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem(key);
};

export default function OfferPopup({
  offer = {
    image: '/offerPopup.png',
    title: 'Holiday Special Discount',
    subtitle: 'Save big on your next trip!',
    description:
      'Exclusive deals available for a limited time. Book today and enjoy premium services at the best prices.',
    discount: '30%',
    valid: 'Until Dec 31, 2025',
    features: [
      'Free cancellation',
      '24/7 support',
      'Luxury stay',
      'No hidden fees',
    ],
  },
  onViewAll,
  storageKey = 'offerPopupSeenSession',
  delayMs = 600,
}) {
  const [open, setOpen] = useState(false);

  // open once per session
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = getSession(storageKey);
    if (seen) return;

    const t = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(t);
  }, [storageKey, delayMs]);

  // lock scroll when open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const close = useCallback(() => {
    if (typeof window !== 'undefined') {
      setSession(storageKey, '1'); // ✅ mark as seen for this session
    }
    setOpen(false);
  }, [storageKey]);

  if (!open || !offer) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Card */}
      <div
        className="
        relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden
        grid grid-cols-1 md:grid-cols-2
      "
      >
        {/* Media */}
        <div className="relative h-52 md:h-auto">
          <Image
            src={offer.image}
            alt={offer.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-medium">
            <Percent className="w-3.5 h-3.5" />
            Save {offer.discount}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 md:p-7 flex flex-col">
          <button
            onClick={close}
            className="absolute right-3 top-3 md:right-4 md:top-4 rounded-full p-2 hover:bg-gray-100 transition border-1 cursor-pointer border-gray-400"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex items-center gap-2 text-blue-700 text-xs font-semibold uppercase tracking-wide">
            <Gift className="w-4 h-4" />
            Limited Time Offer
          </div>

          <h3 className="hidden md:flex mt-2 text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {offer.title}
          </h3>
          <p className="hidden md:flex text-blue-700 font-medium text-sm mt-1">
            {offer.subtitle}
          </p>

          <p className="hidden md:flex text-gray-600 text-sm mt-3 leading-relaxed">
            {offer.description}
          </p>

          <div className="mt-4 flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Valid: {offer.valid}</span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-1">
            {offer.features.slice(0, 4).map((f, i) => (
              <div key={i} className="flex items-center text-sm text-gray-700">
                <span className="mr-2 inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {f}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 flex gap-3">
            <a
              href="#advertisnmentSection"
              onClick={() => {
                onViewAll?.();
                setOpen(false);
              }}
              className="text-center flex-1 rounded-2xl BlueBG  text-white font-semibold py-2.5 hover:bg-blue-700 transition shadow-sm"
            >
              View All Offers
            </a>
            <button
              onClick={close}
              className="cursor-pointer rounded-2xl bg-gray-100 text-gray-800 font-medium px-4 py-2.5 hover:bg-gray-200 transition"
            >
              Not now
            </button>
          </div>

          {/* <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
            <Star className="w-3.5 h-3.5" />
            Best deals—updated regularly
          </div> */}
        </div>
      </div>
    </div>
  );
}
