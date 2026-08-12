import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, ShoppingBag } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#4A154B]/10 text-[#4A154B] mx-auto mb-8">
          <span className="text-3xl font-bold">404</span>
        </div>
        <h1 className="font-serif-custom text-4xl sm:text-5xl font-bold text-[#4A154B] mb-4">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#5C524E] max-w-2xl mx-auto mb-8 leading-relaxed">
          The page you are looking for doesn’t exist yet, or the link may be wrong. Let’s get you back to something beautiful.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4A154B] text-white font-bold uppercase tracking-[0.18em] hover:bg-[#5C0632] transition-all"
          >
            <Home className="w-4 h-4" /> Home
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#4A154B] text-[#4A154B] font-bold uppercase tracking-[0.18em] hover:bg-[#FAF8F5] transition-all"
          >
            <ShoppingBag className="w-4 h-4" /> Shop Catalogue
          </Link>
        </div>
        <div className="mt-10 text-xs uppercase tracking-[0.25em] text-[#9B6B82] font-semibold">
          <span className="inline-flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" /> Explore the latest collections, curated just for you.
          </span>
        </div>
      </div>
    </div>
  );
}
