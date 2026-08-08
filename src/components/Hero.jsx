import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-6 pb-12 sm:pt-12 sm:pb-20 border-b border-[#E8D5C4]/40">
      {/* Decorative Gold Glow Accents */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#E8D5C4]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F4DCD9]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 sm:space-y-8 animate-slide-up">
            <div className="inline-flex items-center px-4 py-1.5 bg-[#FFFDF9] border border-[#D4AF37]/50 rounded-full text-[#4A154B] text-xs font-semibold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" /> Authentic Women's Ethnic Boutique
            </div>

            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#9B6B82] uppercase block">
                R. C. Jain's OM DIVINE INSPIRATIONS
              </span>
              <h1 className="font-serif-custom text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#4A154B] leading-[1.15]">
                WHERE TRADITION <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#C5A059]">MEETS TRENDS</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#5C524E] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover elegant ethnic wear, contemporary styles and timeless fashion for every occasion. From royal silk sarees and festive lehengas to fusion co-ords and comfortable plus-size outfits.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/shop"
                className="w-full sm:w-auto px-8 py-4 bg-[#4A154B] hover:bg-[#5C0632] text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center group"
              >
                <span>SHOP COLLECTION</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/shop?sort=newest"
                className="w-full sm:w-auto px-8 py-4 bg-[#FFFDF9] hover:bg-[#F5F0EB] text-[#4A154B] border border-[#D9C8B4] text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm flex items-center justify-center"
              >
                <span>EXPLORE NEW ARRIVALS</span>
              </Link>
            </div>

            {/* Micro Feature Badges */}
            <div className="pt-6 border-t border-[#E8D5C4]/60 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <span className="font-serif-custom text-xl sm:text-2xl font-bold text-[#4A154B]">100%</span>
                <p className="text-[11px] text-[#7A4C62] uppercase tracking-wider font-medium">Authentic Quality</p>
              </div>
              <div>
                <span className="font-serif-custom text-xl sm:text-2xl font-bold text-[#4A154B]">XL to 4XL</span>
                <p className="text-[11px] text-[#7A4C62] uppercase tracking-wider font-medium">Plus Sizes Available</p>
              </div>
              <div>
                <span className="font-serif-custom text-xl sm:text-2xl font-bold text-[#4A154B]">New Delhi</span>
                <p className="text-[11px] text-[#7A4C62] uppercase tracking-wider font-medium">Mahavir Enclave</p>
              </div>
            </div>
          </div>

          {/* Right Image Showcase Gallery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Featured Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFDF9] group">
                <img
                  src="/images/hero_banner.png"
                  alt="R. C. Jain's OM DIVINE INSPIRATIONS Ethnic Fashion"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A154B]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Festive Spotlight</span>
                  <h3 className="font-serif-custom text-2xl font-bold">Royal Silk & Zari Weaves</h3>
                </div>
              </div>

              {/* Floating Secondary Fashion Card */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-[#FFFDF9] p-3 rounded-2xl shadow-xl border border-[#E8D5C4] max-w-[180px] sm:max-w-[220px] hidden sm:block">
                <div className="relative rounded-xl overflow-hidden h-28 mb-2">
                  <img
                    src="/images/kurti_collection.png"
                    alt="Cotton Kurtis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs font-bold text-[#4A154B]">Cotton & Fusion Kurtis</p>
                <p className="text-[10px] text-[#7A4C62]">Everyday & Party Wear</p>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#4A154B] text-[#FAF8F5] p-4 rounded-2xl shadow-xl border border-[#D4AF37]/50 text-center">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block font-bold">R. C. JAIN'S</span>
                <span className="font-serif-custom text-lg font-bold">ETHNIC STORE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
