import ContactSection from '@/components/global/ContactSection';
import FAQ from '@/components/global/FAQ';
import Gallery from '@/components/global/Gallery';
import Testimonials from '@/components/global/Testimonials';
import WhatsAppButton from '@/components/global/WhatsAppButton';
import HomeHero from '@/components/Home/HomeHero';
import HomeOurMission from '@/components/Home/HomeOurMission';
import HomeOurServices from '@/components/Home/HomeOurServices';
import HomePopularCars from '@/components/Home/HomePopularCars';
import TravelQuoteForm from '@/components/Home/TravelQuoteForm';
import TrustedRideSection from '@/components/Home/TrustedRideSection';
import ShuttleOptions from '@/components/Home/Vehicals';
import React from 'react';

const page = () => {
  return (
    <div>
      <HomeHero />
      <HomeOurMission />
      <HomeOurServices />
      <TrustedRideSection />
      <HomePopularCars />
      <Gallery />
      <TravelQuoteForm />

      <ShuttleOptions />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
};

export default page;
