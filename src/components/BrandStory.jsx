import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif-custom text-3xl sm:text-4xl font-bold text-[#4A154B]">A Legacy of Ethnic Elegance</h2>
            <p className="mt-4 text-base text-[#5C524E] max-w-xl">
              OM DIVINE INSPIRATIONS curates thoughtful ethnic wear that blends traditional craftsmanship with wearable silhouettes. We offer sarees, lehengas, suits, kurtis, and plus-size options crafted for comfort, ceremony and everyday grace.
            </p>
            <div className="mt-6">
              <Link to="/about" className="inline-block px-6 py-3 bg-[#4A154B] text-white rounded-full font-semibold text-sm hover:bg-[#5C0632] transition-colors">DISCOVER OUR STORY</Link>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md bg-[#FFFDF9] p-4">
            <img src="/images/hero_banner.png" alt="Boutique display at OM DIVINE INSPIRATIONS" className="w-full h-64 object-cover object-center rounded-lg" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
