'use client';

import React, { useState, useEffect } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    city_name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError('');

    try {
      const emailjs = (await import('emailjs-com')).default;

      await emailjs.send(
        'service_dw68ald', // replace with your service ID
        'template_0a8koj5', // replace with your template ID
        {
          ...formData,
          subject: 'New Contact Submission from Website',
        },
        'Kt2gWv4iXUWqig7kG' // replace with your public key
      );

      setSent(true);
      setFormData({
        first_name: '',
        city_name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  return (
    <main id="contact" className="scroll-mt-7 BlueBG">
      <div className="max-w-[1200px] mx-auto w-[90%] py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="bg-white rounded-md  shadow-lg px-7 pt-7 pb-10">
            {/* <h2 className="text-3xl font-bold mb-4">Contact us</h2>
            <p className="mb-4 text-gray-700">
              Let us know how we can help. No question is too small. Thank you!
            </p> */}

            <div className="text-center mb-4">
              <h1 className="text-[48px] leading-14 font-bold pb-3 ">
                Contact us
              </h1>
              <p className="">
                You can also give us a call on{' '}
                <a href="tel:8447748320" className="font-bold hover:underline">
                  8447748320
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4  rounded-md  ">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
                />
                <input
                  name="city_name"
                  type="text"
                  required
                  placeholder="City Name"
                  value={formData.city_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
                />
              </div>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full cursor-pointer py-4 px-6 rounded-md font-semibold text-white transition-all transform   ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'BlueBG border-1 border-black shadow-lg hover:shadow-xl'
                }`}
              >
                {loading ? 'Sending...' : 'SUBMIT'}
              </button>
              {sent && (
                <p className="text-green-600 mt-2">
                  Your message has been sent!
                </p>
              )}
              {error && <p className="text-red-600 mt-2">{error}</p>}
            </form>
          </div>

          {/* Keep your right map & contact info as-is */}
          <div className="space-y-6">
            {/* Google Map Embed */}
            <div className="w-full h-64 md:h-80 rounded overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.050251897845!2d-98.63114978488303!3d29.480672755292274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf52f56b01325%3A0xf3ad70f3cd1b4c78!2s2903%20Larkwood%20Dr%2C%20San%20Antonio%2C%20TX%2078209%2C%20USA!5e0!3m2!1sen!2sin!4v1668274247082!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-white">
              <div>
                <p>
                  <strong>Siggi Ragnar</strong> (Managing Partner)
                </p>
                <a
                  href="mailto:siggi@motodiscovery.com"
                  className="text-black text-base"
                >
                  siggi@motodiscovery.com
                </a>
                <br />
                <a href="tel:+12108492082">+(210) 849 2082</a>
              </div>
              <div>
                <p>
                  <strong>Anna Heichelheim</strong> (Office Manager)
                </p>
                <a
                  href="mailto:anna@motodiscovery.com"
                  className="text-black text-base"
                >
                  anna@motodiscovery.com
                </a>
                <br />
                <a href="tel:+12108492084">+(210) 849-2084</a>
              </div>
              <div>
                <p>
                  <strong>Skip Mascorro</strong> (Founder)
                </p>
                <a
                  href="mailto:skip@motodiscovery.com"
                  className="text-black text-base"
                >
                  skip@motodiscovery.com
                </a>
                <br />
                <a href="tel:+12105578471">+(210) 557-8471</a>
              </div>
              <div>
                <p>
                  <strong>MotoDiscovery</strong>
                </p>
                <p>
                  2903 Larkwood Dr.
                  <br />
                  San Antonio, TX 78209 USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
