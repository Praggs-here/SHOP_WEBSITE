import React from 'react';

export default function ContactCTA() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-serif-custom text-2xl sm:text-3xl font-bold text-[#4A154B]">Need Help Choosing?</h3>
        <p className="mt-3 text-sm text-[#5C524E]">Have a question about a product or collection? We're happy to help.</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="tel:9319325840" className="inline-flex items-center px-6 py-3 bg-[#4A154B] text-white rounded-full font-semibold text-sm hover:bg-[#5C0632] transition-colors">CHAT WITH US</a>
          <a href="/contact" className="inline-flex items-center px-6 py-3 bg-white border border-[#D9C8B4] text-[#4A154B] rounded-full font-semibold text-sm hover:bg-[#FFFDF9] transition-colors">CONTACT PAGE</a>
        </div>
      </div>
    </section>
  );
}
