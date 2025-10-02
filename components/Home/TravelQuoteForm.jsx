// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Calendar } from 'lucide-react';

// const TravelQuoteForm = () => {
//   const [formData, setFormData] = useState({
//     name: '', // ✅ New
//     phone: '', // ✅ New
//     from: '',
//     to: '',
//     startDate: '',
//     returnDate: '',
//     tripType: 'round-trip',
//     acType: 'ac',
//     seats: '4',
//     agreeTerms: false,
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.agreeTerms) {
//       setSubmitStatus('Please agree to terms and conditions');
//       return;
//     }

//     if (!formData.from || !formData.to || !formData.startDate) {
//       setSubmitStatus('Please fill in all required fields');
//       return;
//     }

//     if (formData.tripType === 'round-trip' && !formData.returnDate) {
//       setSubmitStatus('Please select a return date for round trip');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus('');

//     try {
//       const emailjs = (await import('emailjs-com')).default;

//       await emailjs.send(
//         'service_dw68ald',
//         'template_ji6ilj6',
//         {
//           from: formData.from,
//           to: formData.to,
//           startDate: formData.startDate,
//           returnDate: formData.returnDate || 'N/A (One Way)',
//           tripType: formData.tripType,
//           acType: formData.acType.toUpperCase(),
//           seats: formData.seats,
//           message: `New travel quote request:
//           From: ${formData.from}
//           To: ${formData.to}
//           Seats: ${formData.seats} Seater
//           Start Date: ${formData.startDate}
//           Return Date: ${formData.returnDate || 'N/A (One Way)'}
//           Trip Type: ${formData.tripType}
//           Vehicle: ${formData.acType.toUpperCase()}`,
//         },
//         'Kt2gWv4iXUWqig7kG'
//       );

//       setSubmitStatus(
//         "Quote request submitted successfully! We'll contact you soon."
//       );

//       setFormData({
//         from: '',
//         to: '',
//         startDate: '',
//         returnDate: '',
//         tripType: 'round-trip',
//         acType: 'ac',
//         seats: '4',
//         agreeTerms: false,
//       });
//     } catch (error) {
//       console.error('EmailJS Error:', error);
//       setSubmitStatus(
//         'Something went wrong. Please check your internet connection and try again.'
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     const readSeatsFromURL = () => {
//       // Debug: Log the full URL and search params
//       console.log('Full URL:', window.location.href);
//       console.log('Search params:', window.location.search);
//       console.log('Hash:', window.location.hash);

//       // Try multiple ways to get the seats parameter
//       const urlParams = new URLSearchParams(window.location.search);
//       const selectedSeats = urlParams.get('seats');

//       console.log('Selected seats from URL:', selectedSeats);

//       if (selectedSeats) {
//         console.log('Setting seats to:', selectedSeats);
//         setFormData((prev) => ({ ...prev, seats: selectedSeats }));
//       }
//     };

//     // Read seats on component mount
//     readSeatsFromURL();

//     // Listen for custom seatsSelected event
//     const handleSeatsSelected = (event) => {
//       console.log('Custom event received:', event.detail);
//       if (event.detail?.seats) {
//         setFormData((prev) => ({ ...prev, seats: event.detail.seats }));
//       }
//     };

//     // Listen for browser back/forward navigation
//     const handlePopState = () => {
//       console.log('Popstate event - URL changed');
//       readSeatsFromURL();
//     };

//     // Add event listeners
//     window.addEventListener('seatsSelected', handleSeatsSelected);
//     window.addEventListener('popstate', handlePopState);

//     // Cleanup
//     return () => {
//       window.removeEventListener('seatsSelected', handleSeatsSelected);
//       window.removeEventListener('popstate', handlePopState);
//     };
//   }, []);

//   // Add another useEffect to periodically check the URL (temporary debug solution)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentUrl = window.location.href;
//       const urlParams = new URLSearchParams(window.location.search);
//       const seatsParam = urlParams.get('seats');

//       if (seatsParam && seatsParam !== formData.seats) {
//         console.log('Interval check found new seats:', seatsParam);
//         setFormData((prev) => ({ ...prev, seats: seatsParam }));
//       }
//     }, 500); // Check every 500ms

//     // Clean up after 5 seconds
//     const timeout = setTimeout(() => {
//       clearInterval(interval);
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   }, [formData.seats]);

//   useEffect(() => {
//     if (submitStatus.includes('successfully')) {
//       const timer = setTimeout(() => {
//         setSubmitStatus('');
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [submitStatus]);

//   return (
//     <div id="price" className="scroll-mt-5 min-h-screen BlueBG py-12 lg:py-16">
//       <div className="max-w-4xl mx-auto w-[90%]">
//         <div className="text-center mb-8">
//           <h1 className="text-[48px] leading-14 font-bold pb-3 text-white">
//             Get a Quote
//           </h1>
//           <p className="text-white">
//             You can also give us a call on{' '}
//             <a href="tel:8447748320" className="font-bold hover:underline">
//               8447748320
//             </a>
//           </p>
//         </div>

//         <div className="bg-white rounded-md shadow-lg p-6 md:p-8">
//           {/* Debug info - remove this in production */}
//           <div className="mb-4 p-2 bg-gray-100 rounded text-sm">
//             <p>
//               Debug: Current seats value: <strong>{formData.seats}</strong>
//             </p>
//             <p>
//               URL:{' '}
//               {typeof window !== 'undefined' ? window.location.href : 'N/A'}
//             </p>
//           </div>

//           {/* Trip Type */}
//           <div className="flex flex-wrap gap-4 mb-8">
//             <button
//               type="button"
//               onClick={() =>
//                 setFormData((prev) => ({ ...prev, tripType: 'round-trip' }))
//               }
//               className={`px-4 py-2 rounded-md font-medium transition-colors cursor-pointer ${
//                 formData.tripType === 'round-trip'
//                   ? 'bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               Round Trip
//             </button>
//             <button
//               type="button"
//               onClick={() =>
//                 setFormData((prev) => ({ ...prev, tripType: 'one-way' }))
//               }
//               className={`px-4 py-2 rounded-md font-medium transition-colors cursor-pointer ${
//                 formData.tripType === 'one-way'
//                   ? 'bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               One Way
//             </button>
//           </div>

//           <div className="space-y-6">
//             {/* From & To */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//               <div>
//                 <label
//                   htmlFor="from"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   From
//                 </label>
//                 <input
//                   type="text"
//                   id="from"
//                   name="from"
//                   value={formData.from}
//                   onChange={handleInputChange}
//                   placeholder="e.g. Mumbai, Maharashtra"
//                   className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="to"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   To
//                 </label>
//                 <input
//                   type="text"
//                   id="to"
//                   name="to"
//                   value={formData.to}
//                   onChange={handleInputChange}
//                   placeholder="e.g. Lonavala, Maharashtra"
//                   className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Dates */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//               <div>
//                 <label
//                   htmlFor="startDate"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Start Date
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="date"
//                     id="startDate"
//                     name="startDate"
//                     value={formData.startDate}
//                     onChange={handleInputChange}
//                     min={new Date().toISOString().split('T')[0]}
//                     className="w-full px-4 py-3 border border-gray-500 rounded-md  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                     required
//                   />
//                   {/* <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" /> */}
//                 </div>
//               </div>

//               {formData.tripType === 'round-trip' && (
//                 <div>
//                   <label
//                     htmlFor="returnDate"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Return Date
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="date"
//                       id="returnDate"
//                       name="returnDate"
//                       value={formData.returnDate}
//                       onChange={handleInputChange}
//                       min={
//                         formData.startDate ||
//                         new Date().toISOString().split('T')[0]
//                       }
//                       className="w-full px-4 py-3 border border-gray-500 rounded-md  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                       required={formData.tripType === 'round-trip'}
//                     />
//                     {/* <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" /> */}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Seat Dropdown */}
//             <div>
//               <label
//                 htmlFor="seats"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Select Number of Seats
//               </label>
//               <select
//                 id="seats"
//                 name="seats"
//                 value={formData.seats}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                 required
//               >
//                 <option value="4">4 Seater</option>
//                 <option value="6">6 Seater</option>
//                 <option value="8">8 Seater</option>
//                 <option value="12">12 Seater</option>
//                 <option value="20">20 Seater</option>
//                 <option value="26">26 Seater</option>
//               </select>
//             </div>

//             {/* AC/Non-AC */}
//             <div>
//               <p className="block text-sm font-medium text-gray-700 mb-3">
//                 Vehicle Type
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <label className="flex items-center cursor-pointer">
//                   <input
//                     type="radio"
//                     name="acType"
//                     value="ac"
//                     checked={formData.acType === 'ac'}
//                     onChange={handleInputChange}
//                     className="w-4 h-4 text-blue-600 border-gray-500 focus:ring-blue-500"
//                   />
//                   <span className="ml-2 text-gray-700 font-medium">AC</span>
//                 </label>
//                 <label className="flex items-center cursor-pointer">
//                   <input
//                     type="radio"
//                     name="acType"
//                     value="non-ac"
//                     checked={formData.acType === 'non-ac'}
//                     onChange={handleInputChange}
//                     className="w-4 h-4 text-blue-600 border-gray-500 focus:ring-blue-500"
//                   />
//                   <span className="ml-2 text-gray-700 font-medium">Non-AC</span>
//                 </label>
//               </div>
//             </div>

//             {/* Terms */}
//             <div className="flex items-start space-x-3">
//               <input
//                 type="checkbox"
//                 id="agreeTerms"
//                 name="agreeTerms"
//                 checked={formData.agreeTerms}
//                 onChange={handleInputChange}
//                 className="w-4 h-4 text-blue-600 border-gray-500 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
//               />
//               <label
//                 htmlFor="agreeTerms"
//                 className="text-sm text-gray-600 leading-relaxed"
//               >
//                 By confirming, you agree to our{' '}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Terms & Conditions
//                 </a>{' '}
//                 & give us consent to contact you via call, WhatsApp & email.
//               </label>
//             </div>

//             {/* Status */}
//             {/* {submitStatus && (
//               <div
//                 className={`p-4 rounded-md text-sm ${
//                   submitStatus.includes('successfully')
//                     ? 'bg-green-50 text-green-700 border border-green-200'
//                     : 'bg-red-50 text-red-700 border border-red-200'
//                 }`}
//               >
//                 {submitStatus}
//               </div>
//             )} */}

//             {/* Status Alert */}
//             {submitStatus && (
//               <div
//                 className={`fixed bottom-6 right-6 max-w-sm flex items-center gap-3 p-4 rounded-xl shadow-lg border transition-all transform
//       ${
//         submitStatus.includes('successfully')
//           ? 'bg-green-600 text-white border-green-700 animate-slide-in'
//           : 'bg-red-600 text-white border-red-700 animate-slide-in'
//       }`}
//               >
//                 {submitStatus.includes('successfully') ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 flex-shrink-0 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 flex-shrink-0 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}

//                 <p className="flex-1 font-medium">{submitStatus}</p>

//                 {/* Close button */}
//                 <button
//                   onClick={() => setSubmitStatus('')}
//                   className="ml-2 text-white hover:text-gray-200"
//                 >
//                   ✕
//                 </button>
//               </div>
//             )}

//             {/* Submit Button */}
//             <div className="pt-4">
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className={`w-full cursor-pointer py-4 px-6 rounded-md font-semibold text-white transition-all transform ${
//                   isSubmitting
//                     ? 'bg-gray-400 cursor-not-allowed'
//                     : 'BlueBG border-1 border-black shadow-lg hover:shadow-xl'
//                 }`}
//               >
//                 {isSubmitting ? 'Submitting...' : 'PROCEED'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelQuoteForm;
// ====================

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Calendar, CheckCircle, AlertCircle, X, Bus } from 'lucide-react';

// const TravelQuoteForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     from: '',
//     to: '',
//     startDate: '',
//     returnDate: '',
//     tripType: 'round-trip',
//     acType: 'ac',
//     seats: '4',
//     agreeTerms: false,
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.agreeTerms) {
//       setSubmitStatus('Please agree to terms and conditions');
//       return;
//     }

//     if (!formData.from || !formData.to || !formData.startDate) {
//       setSubmitStatus('Please fill in all required fields');
//       return;
//     }

//     if (formData.tripType === 'round-trip' && !formData.returnDate) {
//       setSubmitStatus('Please select a return date for round trip');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus('');

//     try {
//       const emailjs = (await import('emailjs-com')).default;

//       await emailjs.send(
//         'service_dw68ald',
//         'template_ji6ilj6',
//         {
//           name: formData.name,
//           phone: formData.phone,
//           from: formData.from,
//           to: formData.to,
//           startDate: formData.startDate,
//           returnDate: formData.returnDate || 'N/A (One Way)',
//           tripType: formData.tripType,
//           acType: formData.acType.toUpperCase(),
//           seats: formData.seats,
//           message: `New travel quote request:
//           From: ${formData.from}
//           To: ${formData.to}
//           Seats: ${formData.seats} Seater
//           Start Date: ${formData.startDate}
//           Return Date: ${formData.returnDate || 'N/A (One Way)'}
//           Trip Type: ${formData.tripType}
//           Vehicle: ${formData.acType.toUpperCase()}`,
//         },
//         'Kt2gWv4iXUWqig7kG'
//       );

//       // Show success modal instead of just a message
//       setShowSuccessModal(true);

//       // Reset form after successful submission
//       setFormData({
//         name: '',
//         phone: '',
//         from: '',
//         to: '',
//         startDate: '',
//         returnDate: '',
//         tripType: 'round-trip',
//         acType: 'ac',
//         seats: '4',
//         agreeTerms: false,
//       });
//     } catch (error) {
//       console.error('EmailJS Error:', error);
//       setSubmitStatus(
//         'Something went wrong. Please check your internet connection and try again.'
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     const readSeatsFromURL = () => {
//       try {
//         const urlParams = new URLSearchParams(window.location.search);
//         const selectedSeats = urlParams.get('seats');

//         if (selectedSeats) {
//           setFormData((prev) => ({ ...prev, seats: selectedSeats }));
//         }
//       } catch (error) {
//         console.warn('Error reading URL parameters:', error);
//       }
//     };

//     // Read seats on component mount
//     readSeatsFromURL();

//     // Listen for custom seatsSelected event
//     const handleSeatsSelected = (event) => {
//       if (event.detail?.seats) {
//         setFormData((prev) => ({ ...prev, seats: event.detail.seats }));
//       }
//     };

//     // Listen for browser back/forward navigation
//     const handlePopState = () => {
//       readSeatsFromURL();
//     };

//     // Add event listeners
//     window.addEventListener('seatsSelected', handleSeatsSelected);
//     window.addEventListener('popstate', handlePopState);

//     // Cleanup
//     return () => {
//       window.removeEventListener('seatsSelected', handleSeatsSelected);
//       window.removeEventListener('popstate', handlePopState);
//     };
//   }, []);

//   const closeSuccessModal = () => {
//     setShowSuccessModal(false);
//   };

//   return (
//     <div id="price" className="scroll-mt-5 min-h-screen BlueBG py-12 lg:py-16">
//       <div className="max-w-4xl mx-auto w-[90%]">
//         {/* <div className="text-center mb-8">
//           <h1 className="text-[48px] leading-14 font-bold pb-3 text-white">
//             Get a Quote
//           </h1>
//           <p className="text-white text-lg">
//             You can also give us a call on{' '}
//             <a
//               href="tel:8447748320"
//               className="font-bold hover:underline transition-colors"
//             >
//               8447748320
//             </a>
//           </p>
//         </div> */}

//         <div className="text-center mb-8">
//           <h1 className="text-[40px] md:text-[48px] leading-tight font-bold pb-3 text-white">
//             Get a Travel Quote
//           </h1>
//           <p className="text-white text-lg max-w-2xl mx-auto">
//             Book <strong>AC & Non-AC Cars, Tempo Travellers and Buses</strong>{' '}
//             for one-way or round-trip journeys. Get{' '}
//             <strong>affordable rental prices</strong> with instant travel quotes
//             and hassle-free booking. Perfect for{' '}
//             <strong>outstation trips, corporate travel, and group tours</strong>{' '}
//             anywhere in India. Call us at{' '}
//             <a
//               href="tel:8447748320"
//               className="font-bold hover:underline transition-colors"
//             >
//               8447748320
//             </a>{' '}
//             for quick assistance.
//           </p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="p-6 md:p-8">
//             {/* Debug info - remove this in production */}
//             <div className="hidden mb-6 p-3 bg-gray-50 rounded-lg text-sm border border-gray-100">
//               <p className="font-medium text-gray-700">Debug Info:</p>
//               <p>
//                 Current seats: <strong>{formData.seats}</strong>
//               </p>
//               <p>
//                 URL:{' '}
//                 {typeof window !== 'undefined' ? window.location.href : 'N/A'}
//               </p>
//             </div>

//             {/* Trip Type */}
//             <div className="flex flex-wrap gap-3 mb-8 justify-center">
//               <button
//                 type="button"
//                 onClick={() =>
//                   setFormData((prev) => ({ ...prev, tripType: 'round-trip' }))
//                 }
//                 className={`cursor-pointer px-6 py-3 hover:rounded-3xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
//                   formData.tripType === 'round-trip'
//                     ? // ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
//                       'tw-like rounded-3xl'
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 <span className="flex items-center">
//                   <svg
//                     className="w-5 h-5 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
//                     />
//                   </svg>
//                   Round Trip
//                 </span>
//               </button>
//               <button
//                 type="button"
//                 onClick={() =>
//                   setFormData((prev) => ({ ...prev, tripType: 'one-way' }))
//                 }
//                 className={`cursor-pointer px-6 py-3 hover:rounded-3xl  font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
//                   formData.tripType === 'one-way'
//                     ? 'tw-like rounded-3xl '
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 <span className="flex items-center">
//                   <svg
//                     className="w-5 h-5 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 7l5 5m0 0l-5 5m5-5H6"
//                     />
//                   </svg>
//                   One Way
//                 </span>
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/*Person Detail */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="from"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     <span className="flex items-center">
//                       <svg
//                         className="w-4 h-4 mr-1 text-gray-500"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                       </svg>
//                       Name
//                     </span>
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Enter your name"
//                     className="w-full px-4 py-3 border border-gray-300
//                   focus:rounded-2xl focus:ring-2 focus:ring-blue-500
//                   focus:border-transparent outline-none transition-all
//                   duration-200 placeholder-gray-400"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     <span className="flex items-center">
//                       <svg
//                         className="w-4 h-4 mr-1 text-gray-500"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
//                         />
//                       </svg>
//                       phone
//                     </span>
//                   </label>
//                   {/* Phone */}
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     placeholder="Enter phone number"
//                     className="w-full px-4 py-3 focus:rounded-2xl border
//                   border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500
//                   focus:border-transparent outline-none transition-all
//                   duration-200 placeholder-gray-400"
//                   />
//                 </div>
//               </div>

//               {/* From & To */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="from"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     <span className="flex items-center">
//                       <svg
//                         className="w-4 h-4 mr-1 text-gray-500"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                       </svg>
//                       Pickup Location
//                     </span>
//                   </label>
//                   {/* Pickup Location */}
//                   <input
//                     type="text"
//                     id="from"
//                     name="from"
//                     value={formData.from}
//                     onChange={handleInputChange}
//                     placeholder="Pickup location"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label
//                     htmlFor="to"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     <span className="flex items-center">
//                       <svg
//                         className="w-4 h-4 mr-1 text-gray-500"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
//                         />
//                       </svg>
//                       Drop-off Location
//                     </span>
//                   </label>
//                   {/* Drop-off Location */}
//                   <input
//                     type="text"
//                     id="to"
//                     name="to"
//                     value={formData.to}
//                     onChange={handleInputChange}
//                     placeholder="Drop-off location"
//                     className="w-full px-4 py-3 focus:rounded-2xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
//                   />
//                 </div>
//               </div>

//               {/* Dates */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="startDate"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     <span className="flex items-center">
//                       <Calendar className="w-4 h-4 mr-1 text-gray-500" />
//                       Start Date
//                     </span>
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="date"
//                       id="startDate"
//                       name="startDate"
//                       value={formData.startDate}
//                       onChange={handleInputChange}
//                       min={new Date().toISOString().split('T')[0]}
//                       className="w-full focus:rounded-2xl px-4 py-3  border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                       required
//                     />
//                     {/* <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" /> */}
//                   </div>
//                 </div>

//                 {formData.tripType === 'round-trip' && (
//                   <div className="space-y-2">
//                     <label
//                       htmlFor="returnDate"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       <span className="flex items-center">
//                         <Calendar className="w-4 h-4 mr-1 text-gray-500" />
//                         Return Date
//                       </span>
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="date"
//                         id="returnDate"
//                         name="returnDate"
//                         value={formData.returnDate}
//                         onChange={handleInputChange}
//                         min={
//                           formData.startDate ||
//                           new Date().toISOString().split('T')[0]
//                         }
//                         className="focus:rounded-2xl w-full px-4 py-3  border border-gray-300  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                         required={formData.tripType === 'round-trip'}
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Seat Dropdown */}
//               <div className="space-y-2">
//                 <label
//                   htmlFor="seats"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   <span className="flex items-center">
//                     {/* <svg
//                       className="w-4 h-4 mr-1 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                       />
//                     </svg> */}
//                     <Bus color="#6a7282 " className="mr-1" />
//                     Select Vehicle
//                   </span>
//                 </label>
//                 <select
//                   id="seats"
//                   name="seats"
//                   value={formData.seats}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
//                   required
//                 >
//                   <option value="4">4 Seater - Compact Car</option>
//                   <option value="6">6 Seater - SUV</option>
//                   <option value="8">8 Seater - Van</option>
//                   <option value="12">12 Seater - Tempo Traveller</option>
//                   <option value="20">20 Seater - Mini Bus</option>
//                   <option value="26">26 Seater - Executive Bus</option>
//                 </select>
//               </div>

//               {/* AC/Non-AC */}
//               <div className="space-y-3">
//                 <p className="block text-sm font-medium text-gray-700">
//                   <span className="flex items-center">
//                     <svg
//                       className="w-5 h-5 mr-1 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
//                       />
//                     </svg>
//                     Vehicle Type
//                   </span>
//                 </p>
//                 <div className="flex flex-wrap gap-6">
//                   <label className="flex items-center cursor-pointer group">
//                     <div
//                       className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
//                         formData.acType === 'ac'
//                           ? 'border-blue-500 bg-blue-500'
//                           : 'border-gray-300 group-hover:border-blue-300'
//                       }`}
//                     >
//                       {formData.acType === 'ac' && (
//                         <div className="w-2 h-2 bg-white rounded-full"></div>
//                       )}
//                     </div>
//                     <input
//                       type="radio"
//                       name="acType"
//                       value="ac"
//                       checked={formData.acType === 'ac'}
//                       onChange={handleInputChange}
//                       className="sr-only"
//                     />
//                     <span
//                       className={`ml-3 text-gray-700 font-medium transition-colors duration-200 ${
//                         formData.acType === 'ac'
//                           ? 'text-blue-600'
//                           : 'group-hover:text-gray-900'
//                       }`}
//                     >
//                       AC
//                     </span>
//                   </label>
//                   <label className="flex items-center cursor-pointer group">
//                     <div
//                       className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
//                         formData.acType === 'non-ac'
//                           ? 'border-blue-500 bg-blue-500'
//                           : 'border-gray-300 group-hover:border-blue-300'
//                       }`}
//                     >
//                       {formData.acType === 'non-ac' && (
//                         <div className="w-2 h-2 bg-white rounded-full"></div>
//                       )}
//                     </div>
//                     <input
//                       type="radio"
//                       name="acType"
//                       value="non-ac"
//                       checked={formData.acType === 'non-ac'}
//                       onChange={handleInputChange}
//                       className="sr-only"
//                     />
//                     <span
//                       className={`ml-3 text-gray-700 font-medium transition-colors duration-200 ${
//                         formData.acType === 'non-ac'
//                           ? 'text-blue-600'
//                           : 'group-hover:text-gray-900'
//                       }`}
//                     >
//                       Non-AC
//                     </span>
//                   </label>
//                 </div>
//               </div>

//               {/* Terms */}
//               <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
//                 <input
//                   type="checkbox"
//                   id="agreeTerms"
//                   name="agreeTerms"
//                   checked={formData.agreeTerms}
//                   onChange={handleInputChange}
//                   className="w-5 h-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label
//                   htmlFor="agreeTerms"
//                   className="text-sm text-gray-600 leading-relaxed"
//                 >
//                   By confirming, you agree to our{' '}
//                   <a
//                     href="#"
//                     className="text-blue-600 hover:underline font-medium transition-colors"
//                   >
//                     Terms & Conditions
//                   </a>{' '}
//                   & give us consent to contact you via call, WhatsApp & email
//                   for your quote.
//                 </label>
//               </div>

//               {/* Submit Button */}
//               <div className="pt-2">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full py-4 px-6 hover:rounded-3xl cursor-pointer  font-bold text-white transition-all duration-300 transform ${
//                     isSubmitting
//                       ? 'bg-gray-400 cursor-not-allowed'
//                       : 'BlueBG border-1 border-black shadow-lg hover:shadow-2xl  active:scale-95'
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <span className="flex items-center justify-center">
//                       <svg
//                         className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         ></path>
//                       </svg>
//                       Processing...
//                     </span>
//                   ) : (
//                     'GET YOUR QUOTE NOW'
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Error Message */}
//         {submitStatus && (
//           <div className="mt-4 mx-auto max-w-md">
//             <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center animate-fade-in">
//               <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
//               <p className="text-red-700 text-sm font-medium">{submitStatus}</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
//             <div className="p-6 text-center">
//               <div className="md:w-16 w-10 h-10 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle className="w-10 h-10 text-green-600" />
//               </div>

//               <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
//                 Quote Request Submitted!
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 Thank you for your interest in our transportation services.
//               </p>

//               <div className="bg-blue-50 rounded-lg p-4 mb-6">
//                 <p className="text-sm text-blue-800">
//                   <strong>What's next?</strong>
//                 </p>
//                 <ul className="text-sm text-blue-700 mt-2 space-y-1">
//                   <li>• Our team will contact you within 24 hours</li>
//                   <li>• We'll provide a competitive quote</li>
//                   <li>• Flexible booking options available</li>
//                 </ul>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button
//                   onClick={closeSuccessModal}
//                   className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
//                 >
//                   Close
//                 </button>
//                 <a
//                   href="tel:+919619657785"
//                   className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
//                 >
//                   <svg
//                     className="w-4 h-4 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                   Call Us Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes scale-in {
//           0% {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         @keyframes fade-in {
//           0% {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-scale-in {
//           animation: scale-in 0.3s ease-out;
//         }
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TravelQuoteForm;
// ===============================

// 'use client';

// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import { Calendar, CheckCircle, AlertCircle, X, Bus } from 'lucide-react';

// const TravelQuoteForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     from: '',
//     to: '',
//     startDate: '',
//     returnDate: '',
//     tripType: 'round-trip',
//     acType: 'ac',
//     seats: '4',
//     agreeTerms: false,
//   });

//   const [submitStatus, setSubmitStatus] = useState(null);

//   // Input handler
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   // Submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formData.name || !formData.phone) {
//       setSubmitStatus('Please enter your name and phone number');
//       return;
//     }
//     if (!formData.from || !formData.to || !formData.startDate) {
//       setSubmitStatus('Please fill in all required fields');
//       return;
//     }
//     if (formData.tripType === 'round-trip' && !formData.returnDate) {
//       setSubmitStatus('Please select a return date for round trips');
//       return;
//     }

//     try {
//       await emailjs.send(
//         'service_dw68ald', // ✅ your service ID
//         'template_ji6ilj6', // ✅ your template ID
//         {
//           name: formData.name,
//           phone: formData.phone,
//           from: formData.from,
//           to: formData.to,
//           startDate: formData.startDate,
//           returnDate: formData.returnDate || 'N/A (One Way)',
//           tripType: formData.tripType,
//           acType: formData.acType.toUpperCase(),
//           seats: formData.seats,
//           message: `New travel quote request:
//           Name: ${formData.name}
//           Phone: ${formData.phone}
//           From: ${formData.from}
//           To: ${formData.to}
//           Seats: ${formData.seats} Seater
//           Start Date: ${formData.startDate}
//           Return Date: ${formData.returnDate || 'N/A (One Way)'}
//           Trip Type: ${formData.tripType}
//           Vehicle: ${formData.acType.toUpperCase()}`,
//         },
//         'Kt2gWv4iXUWqig7kG' // ✅ your public key
//       );

//       setSubmitStatus('success');

//       // Reset form after success
//       setFormData({
//         name: '',
//         phone: '',
//         from: '',
//         to: '',
//         startDate: '',
//         returnDate: '',
//         tripType: 'round-trip',
//         acType: 'ac',
//         seats: '4',
//         agreeTerms: false,
//       });
//     } catch (error) {
//       console.error('EmailJS Error:', error);
//       setSubmitStatus('error');
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//         <Bus className="mr-2 h-6 w-6 text-blue-600" />
//         Get a Travel Quote
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-2 gap-4"
//       >
//         {/* Name */}
//         <div>
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             placeholder="Enter your name"
//             className="mt-1 block w-full border rounded-lg px-3 py-2"
//           />
//         </div>

//         {/* Phone */}
//         <div>
//           <label
//             htmlFor="phone"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Phone
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//             placeholder="Enter phone number"
//             className="mt-1 block w-full border rounded-lg px-3 py-2"
//           />
//         </div>

//         {/* Pickup */}
//         <div>
//           <label
//             htmlFor="from"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Pickup Location
//           </label>
//           <input
//             type="text"
//             id="from"
//             name="from"
//             value={formData.from}
//             onChange={handleInputChange}
//             required
//             placeholder="Pickup location"
//             className="mt-1 block w-full border rounded-lg px-3 py-2"
//           />
//         </div>

//         {/* Drop-off */}
//         <div>
//           <label
//             htmlFor="to"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Drop-off Location
//           </label>
//           <input
//             type="text"
//             id="to"
//             name="to"
//             value={formData.to}
//             onChange={handleInputChange}
//             required
//             placeholder="Drop-off location"
//             className="mt-1 block w-full border rounded-lg px-3 py-2"
//           />
//         </div>

//         {/* Start Date */}
//         <div>
//           <label
//             htmlFor="startDate"
//             className="block text-sm font-medium text-gray-700 flex items-center"
//           >
//             <Calendar className="mr-1 h-4 w-4 text-gray-500" />
//             Start Date
//           </label>
//           <input
//             type="date"
//             id="startDate"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full border rounded-lg px-3 py-2"
//           />
//         </div>

//         {/* Return Date */}
//         {formData.tripType === 'round-trip' && (
//           <div>
//             <label
//               htmlFor="returnDate"
//               className="block text-sm font-medium text-gray-700 flex items-center"
//             >
//               <Calendar className="mr-1 h-4 w-4 text-gray-500" />
//               Return Date
//             </label>
//             <input
//               type="date"
//               id="returnDate"
//               name="returnDate"
//               value={formData.returnDate}
//               onChange={handleInputChange}
//               min={formData.startDate}
//               required
//               className="mt-1 block w-full border rounded-lg px-3 py-2"
//             />
//           </div>
//         )}

//         {/* Trip Type */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Trip Type
//           </label>
//           <select
//             name="tripType"
//             value={formData.tripType}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border rounded-lg px-3 py-2"
//           >
//             <option value="round-trip">Round Trip</option>
//             <option value="one-way">One Way</option>
//           </select>
//         </div>

//         {/* Vehicle Type */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Vehicle Type
//           </label>
//           <select
//             name="acType"
//             value={formData.acType}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border rounded-lg px-3 py-2"
//           >
//             <option value="ac">AC</option>
//             <option value="non-ac">Non-AC</option>
//           </select>
//         </div>

//         {/* Seats */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Seats
//           </label>
//           <select
//             name="seats"
//             value={formData.seats}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border rounded-lg px-3 py-2"
//           >
//             <option value="4">4 Seater</option>
//             <option value="7">7 Seater</option>
//             <option value="12">12 Seater</option>
//             <option value="17">17 Seater</option>
//           </select>
//         </div>

//         {/* Agree Terms */}
//         <div className="md:col-span-2 flex items-center">
//           <input
//             type="checkbox"
//             id="agreeTerms"
//             name="agreeTerms"
//             checked={formData.agreeTerms}
//             onChange={handleInputChange}
//             className="h-4 w-4 text-blue-600 border-gray-300 rounded"
//             required
//           />
//           <label
//             htmlFor="agreeTerms"
//             className="ml-2 block text-sm text-gray-600"
//           >
//             I agree to the terms and conditions
//           </label>
//         </div>

//         {/* Submit Button */}
//         <div className="md:col-span-2">
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
//           >
//             Get Quote
//           </button>
//         </div>
//       </form>

//       {/* Status Messages */}
//       {submitStatus === 'success' && (
//         <div className="mt-4 flex items-center text-green-600">
//           <CheckCircle className="mr-2 h-5 w-5" />
//           Quote request sent successfully!
//         </div>
//       )}
//       {submitStatus === 'error' && (
//         <div className="mt-4 flex items-center text-red-600">
//           <AlertCircle className="mr-2 h-5 w-5" />
//           Something went wrong. Please try again.
//         </div>
//       )}
//       {typeof submitStatus === 'string' &&
//         submitStatus !== 'success' &&
//         submitStatus !== 'error' && (
//           <div className="mt-4 flex items-center text-yellow-600">
//             <AlertCircle className="mr-2 h-5 w-5" />
//             {submitStatus}
//           </div>
//         )}
//     </div>
//   );
// };

// export default TravelQuoteForm;
// =================
// =================
// =================
// =================

'use client';

import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const TravelQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '', // ✅ New
    phone: '', // ✅ New
    from: '',
    to: '',
    startDate: '',
    returnDate: '',
    tripType: 'round-trip',
    acType: 'ac',
    seats: '4',
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      setSubmitStatus('Please agree to terms and conditions');
      return;
    }

    if (
      !formData.name ||
      !formData.phone ||
      !formData.from ||
      !formData.to ||
      !formData.startDate
    ) {
      setSubmitStatus('Please fill in all required fields');
      return;
    }

    if (formData.tripType === 'round-trip' && !formData.returnDate) {
      setSubmitStatus('Please select a return date for round trip');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const emailjs = (await import('emailjs-com')).default;

      await emailjs.send(
        'service_dw68ald',
        'template_ji6ilj6',
        {
          name: formData.name, // ✅ New
          phone: formData.phone, // ✅ New
          from: formData.from,
          to: formData.to,
          startDate: formData.startDate,
          returnDate: formData.returnDate || 'N/A (One Way)',
          tripType: formData.tripType,
          acType: formData.acType.toUpperCase(),
          seats: formData.seats,
          message: `New travel quote request:
          From: ${formData.from}
          To: ${formData.to}
          Seats: ${formData.seats} Seater
          Start Date: ${formData.startDate}
          Return Date: ${formData.returnDate || 'N/A (One Way)'}
          Trip Type: ${formData.tripType}
          Vehicle: ${formData.acType.toUpperCase()}`,
        },
        'Kt2gWv4iXUWqig7kG'
      );

      setSubmitStatus(
        "Quote request submitted successfully! We'll contact you soon."
      );

      setFormData({
        from: '',
        to: '',
        startDate: '',
        returnDate: '',
        tripType: 'round-trip',
        acType: 'ac',
        seats: '4',
        agreeTerms: false,
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus(
        'Something went wrong. Please check your internet connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const readSeatsFromURL = () => {
      // Debug: Log the full URL and search params
      console.log('Full URL:', window.location.href);
      console.log('Search params:', window.location.search);
      console.log('Hash:', window.location.hash);

      // Try multiple ways to get the seats parameter
      const urlParams = new URLSearchParams(window.location.search);
      const selectedSeats = urlParams.get('seats');

      console.log('Selected seats from URL:', selectedSeats);

      if (selectedSeats) {
        console.log('Setting seats to:', selectedSeats);
        setFormData((prev) => ({ ...prev, seats: selectedSeats }));
      }
    };

    // Read seats on component mount
    readSeatsFromURL();

    // Listen for custom seatsSelected event
    const handleSeatsSelected = (event) => {
      console.log('Custom event received:', event.detail);
      if (event.detail?.seats) {
        setFormData((prev) => ({ ...prev, seats: event.detail.seats }));
      }
    };

    // Listen for browser back/forward navigation
    const handlePopState = () => {
      console.log('Popstate event - URL changed');
      readSeatsFromURL();
    };

    // Add event listeners
    window.addEventListener('seatsSelected', handleSeatsSelected);
    window.addEventListener('popstate', handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener('seatsSelected', handleSeatsSelected);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Add another useEffect to periodically check the URL (temporary debug solution)
  useEffect(() => {
    const interval = setInterval(() => {
      const currentUrl = window.location.href;
      const urlParams = new URLSearchParams(window.location.search);
      const seatsParam = urlParams.get('seats');

      if (seatsParam && seatsParam !== formData.seats) {
        console.log('Interval check found new seats:', seatsParam);
        setFormData((prev) => ({ ...prev, seats: seatsParam }));
      }
    }, 500); // Check every 500ms

    // Clean up after 5 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [formData.seats]);

  useEffect(() => {
    if (submitStatus.includes('successfully')) {
      const timer = setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <div id="price" className="scroll-mt-5 min-h-screen BlueBG py-12 lg:py-16">
      <div className="max-w-4xl mx-auto w-[90%]">
        <div className="text-center mb-8">
          <h1 className="text-[48px] leading-14 font-bold pb-3 text-white">
            Get a Quote
          </h1>
          <p className="text-white">
            You can also give us a call on{' '}
            <a href="tel:8447748320" className="font-bold hover:underline">
              8447748320
            </a>
          </p>
        </div>

        <div className="bg-white  shadow-lg p-6 md:p-8">
          {/* Debug info - remove this in production */}
          {/* <div className="mb-4 p-2 bg-gray-100  text-sm">
            <p>
              Debug: Current seats value: <strong>{formData.seats}</strong>
            </p>
            <p>
              URL:{' '}
              {typeof window !== 'undefined' ? window.location.href : 'N/A'}
            </p>
          </div> */}

          {/* Trip Type */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, tripType: 'round-trip' }))
              }
              className={`px-4 py-2  font-medium transition-colors cursor-pointer ${
                formData.tripType === 'round-trip'
                  ? 'bg-blue-500 text-white font-semibold px-6 py-3  shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Round Trip
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, tripType: 'one-way' }))
              }
              className={`px-4 py-2  font-medium transition-colors cursor-pointer ${
                formData.tripType === 'one-way'
                  ? 'bg-blue-500 text-white font-semibold px-6 py-3  shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              One Way
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-500  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543210"
                  className="w-full px-4 py-3 border border-gray-500  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* From & To */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label
                  htmlFor="from"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  From
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  placeholder="e.g. Mumbai, Maharashtra"
                  className="w-full px-4 py-3 border border-gray-500  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="to"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  To
                </label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  value={formData.to}
                  onChange={handleInputChange}
                  placeholder="e.g. Lonavala, Maharashtra"
                  className="w-full px-4 py-3 border border-gray-500  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-500   focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                  {/* <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" /> */}
                </div>
              </div>

              {formData.tripType === 'round-trip' && (
                <div>
                  <label
                    htmlFor="returnDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Return Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="returnDate"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      min={
                        formData.startDate ||
                        new Date().toISOString().split('T')[0]
                      }
                      className="w-full px-4 py-3 border border-gray-500   focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required={formData.tripType === 'round-trip'}
                    />
                    {/* <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" /> */}
                  </div>
                </div>
              )}
            </div>

            {/* Seat Dropdown */}
            <div>
              <label
                htmlFor="seats"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Number of Seats
              </label>
              <select
                id="seats"
                name="seats"
                value={formData.seats}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-500  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              >
                <option value="4">4 Seater</option>
                <option value="7-8">7 - 8 Seater</option>
                <option value="13">13 Seater</option>
                <option value="17">17 Seater</option>
                <option value="20">20 Seater</option>
                <option value="26">26 Seater</option>
                <option value="28-32">28 - 32 Seater</option>
                <option value="33-35">33 - 35 Seater</option>
                <option value="35-37">35 - 37 Seater</option>
                <option value="45-49">45 - 49 Seater</option>
                <option value="58">58 Seater</option>
              </select>
            </div>

            {/* AC/Non-AC */}
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-3">
                Vehicle Type
              </p>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="acType"
                    value="ac"
                    checked={formData.acType === 'ac'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700 font-medium">AC</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="acType"
                    value="non-ac"
                    checked={formData.acType === 'non-ac'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700 font-medium">Non-AC</span>
                </label>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-500 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
              />
              <label
                htmlFor="agreeTerms"
                className="text-sm text-gray-600 leading-relaxed"
              >
                By confirming, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </a>{' '}
                & give us consent to contact you via call, WhatsApp & email.
              </label>
            </div>

            {/* Status */}
            {/* {submitStatus && (
              <div
                className={`p-4 rounded-md text-sm ${
                  submitStatus.includes('successfully')
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {submitStatus}
              </div>
            )} */}

            {/* Status Alert */}
            {submitStatus && (
              <div
                className={`fixed bottom-6 right-6 max-w-sm flex items-center gap-3 p-4  shadow-lg border transition-all transform
      ${
        submitStatus.includes('successfully')
          ? 'bg-green-600 text-white border-green-700 animate-slide-in'
          : 'bg-red-600 text-white border-red-700 animate-slide-in'
      }`}
              >
                {submitStatus.includes('successfully') ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}

                <p className="flex-1 font-medium">{submitStatus}</p>

                {/* Close button */}
                <button
                  onClick={() => setSubmitStatus('')}
                  className="ml-2 text-white hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full cursor-pointer py-4 px-6  font-semibold text-white transition-all transform ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'BlueBG border-1 border-black shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'PROCEED'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelQuoteForm;
