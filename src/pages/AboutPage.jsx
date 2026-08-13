import React from 'react';
import StoreLocation from '../components/StoreLocation';
import { Sparkles, MapPin, Phone, Heart, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9B6B82]">
            OUR STORY & HERITAGE
          </span>
          <h3 className="font-serif-custom text-4xl sm:text-5xl font-bold text-[#4A154B]">
            RC Jain's
          </h3>
          <h1 className="font-serif-custom text-4xl sm:text-5xl font-bold text-[#4A154B]">
            OM DIVINE INSPIRATIONS
          </h1>
          <p className="font-serif-custom italic text-lg text-[#C5A059]">
            "Where Tradition meets Trends"
          </p>
          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto my-4"></div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FFFDF9] p-8 sm:p-12 rounded-3xl border border-[#E8D5C4] shadow-sm mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center px-3.5 py-1 bg-[#F4DCD9] text-[#4A154B] text-xs font-bold uppercase tracking-widest rounded-full">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> THE ETHNIC STORE
            </div>
            
            <h2 className="font-serif-custom text-3xl font-bold text-[#4A154B] leading-tight">
              Bringing Together Indian Ethnic Tradition & Modern Women's Fashion
            </h2>

            <p className="text-sm text-[#5C524E] leading-relaxed">
              <strong>OM DIVINE INSPIRATIONS</strong> is a premier women's clothing store located in Mahavir Enclave, Palam, New Delhi. Created with a vision to celebrate Indian ethnic fashion while embracing modern trends, our boutique serves as a destination for women looking for authenticity, style, and comfort.
            </p>

            <p className="text-sm text-[#5C524E] leading-relaxed">
              We specialize exclusively in ladies and women's apparel. Our wide collection includes handcrafted silk and cotton sarees, festive bridal and partywear lehengas, embroidered 3-piece salwar suits, everyday and designer kurtis, one-piece floral dresses, matching co-ord sets, exclusive dupattas, readymade blouses, flared sharara suits, and plus-size fashion from XL to 4XL.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F4EBE2]">
              <div>
                <h4 className="text-xs font-bold text-[#4A154B] uppercase tracking-wider">Store Address</h4>
                <p className="text-xs text-[#7A4C62] mt-1">RZF-1/303, Street No 2, Mahavir Enclave, Palam, New Delhi - 110045</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#4A154B] uppercase tracking-wider">Contact Phone</h4>
                <p className="text-xs text-[#7A4C62] mt-1">+91 9319325840</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5]">
              <img
                src="/images/hero_banner.png"
                alt="OM DIVINE INSPIRATIONS Boutique"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A154B]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">New Delhi Boutique</span>
                <h3 className="font-serif-custom text-2xl font-bold">R. C. Jain's Ethnic Boutique</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Store Location Section */}
        <StoreLocation />

      </div>
    </div>
  );
}
