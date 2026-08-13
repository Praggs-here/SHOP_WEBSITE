import React from 'react';
import CollectionsSection from '../components/CollectionsSection';
import CategoryGrid from '../components/CategoryGrid';

export default function CollectionsPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-normal uppercase tracking-[0.25em] text-[#9B6B82]">
          LOOKBOOKS & THEMES
        </span>
        <h1 className="font-serif-custom text-4xl sm:text-5xl font-normal text-[#4A154B] mt-2">
          FEATURED ETHNIC COLLECTIONS
        </h1>
        <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto my-4"></div>
        <p className="text-sm text-[#5C524E] max-w-xl mx-auto">
          Explore curated ethnic edits thoughtfully assembled for weddings, festive Pujas, summer daily wear, and extended plus sizes.
        </p>
      </div>

      <CollectionsSection />
      <CategoryGrid />
    </div>
  );
}
