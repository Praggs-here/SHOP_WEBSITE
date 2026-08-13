import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-normal uppercase tracking-[0.25em] text-[#9B6B82]">
            TESTIMONIALS
          </span>
          <h2 className="font-serif-custom text-3xl sm:text-4xl font-normal text-[#4A154B]">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8D5C4]/60 shadow-sm flex flex-col justify-between relative group hover:border-[#D4AF37] transition-all"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-4 right-4" />
              
              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-[#D4AF37]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs text-[#5C524E] leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F4EBE2] flex justify-between items-end">
                <div>
                  <h4 className="text-xs font-normal text-[#4A154B]">{item.name}</h4>
                  <p className="text-[10px] text-[#7A4C62]">{item.location}</p>
                </div>
                <span className="text-[10px] text-[#9B6B82] italic">{item.productPurchased}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
