import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import NewArrivalsSection from '../components/NewArrivalsSection';
import PromotionBanner from '../components/PromotionBanner';
import CollectionsSection from '../components/CollectionsSection';
import WhyUs from '../components/WhyUs';
import StoreLocation from '../components/StoreLocation';
import Testimonials from '../components/Testimonials';
import BrandStory from '../components/BrandStory';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <CategoryGrid />
      <NewArrivalsSection />
      <PromotionBanner />
      <CollectionsSection />
      <BrandStory />
      <WhyUs />
      <StoreLocation />
      <Testimonials />
    </div>
  );
}
