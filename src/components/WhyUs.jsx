import React from 'react';
import { Sparkles, Layers, Heart, ShieldCheck, Crown } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: Crown,
      title: "Authentic Ethnic Fashion",
      description: "Curated styles inspired by Indian traditions, featuring genuine zari work, pure cottons, and rich art silks."
    },
    {
      icon: Layers,
      title: "Wide Variety",
      description: "From sarees, lehengas, and 3-piece suits to modern dresses, readymade blouses, and fusion co-ords."
    },
    {
      icon: Heart,
      title: "Plus Sizes Available",
      description: "Thoughtfully cut ethnic fashion available in XL, XXL, 3XL, and 4XL to flatter every woman with grace."
    },
    {
      icon: ShieldCheck,
      title: "Quality & Style",
      description: "Thoughtfully selected fabrics and hand-inspected garments designed for durability and exquisite fit."
    },
    {
      icon: Sparkles,
      title: "Tradition Meets Trends",
      description: "Classic Indian heritage drapes reimagined with contemporary cuts for the modern fashion-conscious woman."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#E8D5C4]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-normal uppercase tracking-[0.25em] text-[#9B6B82]">
            THE BOUTIQUE EXPERIENCE
          </span>
          <h2 className="font-serif-custom text-3xl sm:text-4xl font-normal text-[#4A154B]">
            WHY OM DIVINE INSPIRATIONS?
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-3"></div>
          <p className="text-sm text-[#5C524E]">
            Combining traditional boutique craftsmanship with modern online convenience in New Delhi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8D5C4]/60 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/40 flex items-center justify-center text-[#4A154B] group-hover:bg-[#4A154B] group-hover:text-[#D4AF37] transition-colors mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-custom text-lg font-normal text-[#4A154B] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5C524E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
