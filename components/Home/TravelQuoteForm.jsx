'use client';

import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const TravelQuoteForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    startDate: '',
    returnDate: '',
    tripType: 'round-trip',
    acType: 'ac',
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

    if (!formData.from || !formData.to || !formData.startDate) {
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
      // Import EmailJS dynamically
      const emailjs = (await import('emailjs-com')).default;

      await emailjs.send(
        'service_dw68ald',
        'template_ji6ilj6',
        {
          from: formData.from,
          to: formData.to,
          startDate: formData.startDate,
          returnDate: formData.returnDate || 'N/A (One Way)',
          tripType: formData.tripType,
          acType: formData.acType.toUpperCase(),
          message: `New travel quote request:
          
From: ${formData.from}
To: ${formData.to}
Start Date: ${formData.startDate}
Return Date: ${formData.returnDate || 'N/A (One Way)'}
Trip Type: ${formData.tripType}
Vehicle: ${formData.acType.toUpperCase()}
          `,
        },
        'Kt2gWv4iXUWqig7kG'
      );

      setSubmitStatus(
        "Quote request submitted successfully! We'll contact you soon."
      );

      // Reset form
      setFormData({
        from: '',
        to: '',
        startDate: '',
        returnDate: '',
        tripType: 'round-trip',
        acType: 'ac',
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
    if (submitStatus.includes('successfully')) {
      const timer = setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <div id="price" className="scroll-mt-5 min-h-screen BlueBG  py-12 lg:py-16">
      <div className="max-w-4xl mx-auto w-[90%]">
        {/* Header */}
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

        {/* Form Container */}
        <div className="bg-white rounded-md  shadow-lg p-6 md:p-8">
          {/* Trip Type Toggle */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, tripType: 'round-trip' }))
              }
              className={`px-4 py-2 rounded-md font-medium transition-colors cursor-pointer ${
                formData.tripType === 'round-trip'
                  ? 'bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md  transition'
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
              className={`px-4 py-2 rounded-md font-medium transition-colors cursor-pointer ${
                formData.tripType === 'one-way'
                  ? 'bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md  transition'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              One Way
            </button>
          </div>

          <div className="space-y-6">
            {/* Location Fields */}
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
                  className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
                  className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Date Fields */}
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
                    className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
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
                      className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
                      required={formData.tripType === 'round-trip'}
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
              )}
            </div>

            {/* AC/Non-AC Selection */}
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

            {/* Terms Checkbox */}
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

            {/* Status Message */}
            {submitStatus && (
              <div
                className={`p-4 rounded-md text-sm ${
                  submitStatus.includes('successfully')
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {submitStatus}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full cursor-pointer py-4 px-6 rounded-md font-semibold text-white transition-all transform   ${
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
