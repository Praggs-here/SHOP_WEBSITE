import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { collections } from '../data/collections';

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-normal uppercase tracking-[0.25em] text-[#9B6B82]">
              CURATED EDITS & LOOKBOOKS
            </span>
            <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A154B]">
              Explore Our Collection
            </h2>
            <p className="text-sm text-[#5C524E] max-w-lg">
              Discover elegant styles for every celebration, occasion, and everyday moment.
            </p>
          </div>

          <Link
            to="/collections"
            className="mt-4 md:mt-0 text-xs font-normal uppercase tracking-widest text-[#4A154B] hover:text-[#B38F38] inline-flex items-center justify-center md:justify-start"
          >
            <span>VIEW ALL EDITS</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((item, idx) => (
            <Link
              key={item.id}
              to={`/shop?category=${item.filterCategory}`}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-[#FFFDF9] border border-[#E8D5C4]/60 flex flex-col h-[380px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A154B]/90 via-[#4A154B]/40 to-transparent"></div>

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#D4AF37] text-[#4A154B] text-[10px] font-normal tracking-widest uppercase rounded-full shadow">
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-2">
                <span className="text-[11px] text-[#F4DCD9] tracking-wider font-normal uppercase block">
                  {item.subtitle}
                </span>
                <h3 className="font-serif-custom text-2xl font-normal leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#FAF8F5]/90 line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center text-xs font-normal text-[#D4AF37] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
