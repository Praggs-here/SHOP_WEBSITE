import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data/categories';

export default function CategoryGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9B6B82]">
            OUR SPECIALTY CATEGORIES
          </span>
          <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A154B]">
            EXPLORE OUR COLLECTIONS
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-3"></div>
          <p className="text-sm sm:text-base text-[#5C524E]">
            Handpicked Indian ethnic wear & contemporary women's fashion for every occasion and style.
          </p>
        </div>

        {/* 12 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8D5C4]/60 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E8D5C4]/20">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A154B]/80 via-[#4A154B]/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#FFFDF9]/90 backdrop-blur-sm text-[#4A154B] text-[10px] font-bold tracking-wider uppercase rounded-full border border-[#D4AF37]/30 shadow-sm">
                    {cat.itemCount}
                  </span>
                </div>

                {/* Top Right Arrow */}
                <div className="absolute top-3 right-3 p-2 bg-[#FFFDF9]/80 backdrop-blur-sm text-[#4A154B] rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Card Content */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-[#FFFDF9]">
                <div>
                  <h3 className="font-serif-custom text-lg sm:text-xl font-bold text-[#4A154B] group-hover:text-[#B38F38] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#7A4C62] line-clamp-2 mt-1 font-normal">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#F4EBE2] flex items-center justify-between text-xs font-bold text-[#4A154B] uppercase tracking-wider group-hover:text-[#B38F38]">
                  <span>Explore Styles</span>
                  <span className="text-[#D4AF37]">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
