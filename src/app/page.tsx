import React from 'react';
import PromotionalBanner from './components/PromotionalBanner/PromotionalBanner';
import EventsSection from '@/sections/EventsSection/EventsSection';
import BenefitsSection from '@/sections/BenefitsSection/BenefitsSection';

const Home: React.FC = () => {
  return (
    <div style={{ marginTop: '60px' }}>
      <PromotionalBanner
        backgroundImage="/promotional-banner-example.png"
        title="Trueno en Concierto"
        date="22 de junio"
        venue="Teatro al Aire Libre"
        textColor="white"
      />
      <EventsSection /> 
      <BenefitsSection />
    </div>
  );
};

export default Home;
