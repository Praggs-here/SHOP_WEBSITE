import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function NewArrivalsSection() {
  const newProducts = products.filter(p => p.isNew || p.isBestSeller).slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9B6B82] flex items-center justify-center md:justify-start">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[#D4AF37]" /> FRESH IN STORE & ONLINE
            </span>
            <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A154B]">
              NEW ARRIVALS
            </h2>
            <p className="text-sm text-[#5C524E] max-w-lg">
              Explore our latest summer dresses, printed kurtis, embroidered suits, and art silk sarees.
            </p>
          </div>

          <Link
            to="/shop?sort=newest"
            className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest text-[#4A154B] hover:text-[#B38F38] inline-flex items-center justify-center md:justify-start"
          >
            <span>VIEW ALL NEW ARRIVALS</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
