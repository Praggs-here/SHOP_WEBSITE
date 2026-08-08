import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function PromotionBanner() {
  const categoriesList = [
    "T-Shirts", "Cool Shirts", "One-Piece Dresses", "Short Kurtis", "2 Pc Sets", "3 Pc Suits", "Co-ord Sets", "Cotton Sarees"
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-[#4A154B] via-[#5C0632] to-[#3A0826] text-[#FAF8F5] relative overflow-hidden my-8 sm:my-12 shadow-xl">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 text-center lg:text-left space-y-4">
            <div className="inline-flex items-center px-3 py-1 bg-[#D4AF37] text-[#4A154B] text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> SEASONAL PROMOTION
            </div>

            <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              SUMMER ARRIVALS
            </h2>

            <p className="text-base sm:text-lg text-[#F4DCD9] italic font-serif-custom">
              "Fresh styles. Vibrant colours. Effortless fashion."
            </p>

            {/* List of Featured Items */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-2 max-w-2xl">
              {categoriesList.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium rounded-lg text-[#FAF8F5]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <Link
              to="/shop?sort=newest"
              className="inline-flex items-center px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A059] text-[#4A154B] text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <span>SHOP SUMMER COLLECTION</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
