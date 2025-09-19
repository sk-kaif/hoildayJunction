import Advert from '@/components/global/Advert';
import ContactSection from '@/components/global/ContactSection';
import FAQ from '@/components/global/FAQ';
import Gallery from '@/components/global/Gallery';
import OfferPopup from '@/components/global/OfferPopup';
import Testimonials from '@/components/global/Testimonials';
import WhatsAppButton from '@/components/global/WhatsAppButton';
import HeroSection from '@/components/Home/HeroSection';
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
      {/* <HeroSection /> */}
      <OfferPopup />
      <HomeHero />
      <HomePopularCars />
      <ShuttleOptions />

      <TravelQuoteForm />
      <HomeOurMission />

      <Gallery />
      <Testimonials />
      <TrustedRideSection />
      <FAQ />
      <Advert />

      <WhatsAppButton />
      {/* <HomeOurServices /> */}
    </div>
  );
};

export default page;
