import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Heart } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#4A154B] text-[#FAF8F5] pt-16 pb-8 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#FAF8F5]/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-normal">
                RC Jain's
              </span>
              <span className="font-serif-custom text-2xl lg:text-3xl font-normal tracking-tight text-white">
                OM DIVINE INSPIRATIONS
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#F4DCD9] font-normal">
                The Ethnic Store
              </span>
              <span className="font-serif-custom italic text-sm text-[#D4AF37] mt-1">
                "Where Tradition meets Trends"
              </span>
            </div>

            <p className="text-xs text-[#F4DCD9]/80 leading-relaxed max-w-sm">
              Your premier destination for women's ethnic clothing in New Delhi. Specializing in designer silk sarees, bridal lehengas, 3-piece suit sets, kurtis, dresses, and extended plus-size fashion.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://instagram.com/om_divine_inspirations20"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#4A154B] rounded-full transition-all"
                title="Follow @om_divine_inspirations20 on Instagram"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/om.divine.inspirations"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#4A154B] rounded-full transition-all"
                title="Follow Om Divine Inspirations on Facebook"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Shop Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-normal uppercase tracking-widest text-[#D4AF37]">
              SHOP CATEGORIES
            </h4>
            <ul className="space-y-2 text-xs text-[#F4DCD9]/90">
              <li><Link to="/shop" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop?category=sarees" className="hover:text-white transition-colors">Sarees</Link></li>
              <li><Link to="/shop?category=lehengas" className="hover:text-white transition-colors">Lehengas</Link></li>
              <li><Link to="/shop?category=suits" className="hover:text-white transition-colors">Suits & Salwar Sets</Link></li>
              <li><Link to="/shop?category=kurtis" className="hover:text-white transition-colors">Kurtis & Tunics</Link></li>
              <li><Link to="/shop?category=dresses" className="hover:text-white transition-colors">One-Piece Dresses</Link></li>
              <li><Link to="/shop?category=coords" className="hover:text-white transition-colors">Co-ord Sets</Link></li>
              <li><Link to="/shop?category=dupattas" className="hover:text-white transition-colors">Exclusive Dupattas</Link></li>
              <li><Link to="/shop?category=plus-size" className="hover:text-white font-normal text-[#D4AF37] transition-colors">Plus Size Collection (XL-4XL)</Link></li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Store Info */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-normal uppercase tracking-widest text-[#D4AF37]">
              BOUTIQUE INFO
            </h4>
            <ul className="space-y-2 text-xs text-[#F4DCD9]/90">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Visit Store</Link></li>
              <li><Link to="/shop?wishlist=true" className="hover:text-white transition-colors">Saved Wishlist</Link></li>
            </ul>
          </div>

          {/* Col 4: Store Location & Phone */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-normal uppercase tracking-widest text-[#D4AF37]">
              STORE LOCATION
            </h4>
            <div className="space-y-2 text-xs text-[#F4DCD9]/90">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>RZF-1/303, Street No 2, Mahavir Enclave, Palam, New Delhi - 110045</span>
              </p>
              <p className="flex items-center pt-1">
                <Phone className="w-4 h-4 mr-2 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:9319325840" className="font-normal text-white hover:text-[#D4AF37] transition-colors">
                  +91 9319325840
                </a>
              </p>
              <div className="pt-2 text-[11px] text-[#D4AF37] italic">
                Instagram: @om_divine_inspirations20<br />
                Facebook: Om Divine Inspirations
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4DCD9]/70 space-y-4 sm:space-y-0">
          <p>© 2026 OM DIVINE INSPIRATIONS. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
