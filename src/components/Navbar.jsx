import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, Menu, X, Phone, MapPin, User } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { wishlistCount } = useWishlist();

  const navContainerClass = isScrolled
    ? 'w-full transition-all duration-300 bg-[#FFFDF9]/95 backdrop-blur-md shadow-md py-3'
    : 'w-full transition-all duration-300 bg-[#FFFDF9] border-b border-[#E8D5C4]/40 py-4';

  const navLinkClass = (isActive) => `text-sm tracking-wider font-medium transition-all relative py-1 ${
    isActive ? 'text-[#4A154B] font-semibold' : 'text-[#4A3F3B] hover:text-[#4A154B]'
  }`;

  const utilityButtonClass = 'p-2 text-[#4A154B] hover:text-[#B38F38] transition-colors relative';

  const mobileLinkClass = 'text-base font-medium text-[#4A3F3B] hover:text-[#4A154B] hover:pl-2 transition-all py-1 border-b border-[#F4EBE2]';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links for desktop and mobile views.
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop Catalogue', path: '/shop' },
    { name: 'New Arrivals', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About Boutique', path: '/about' },
  ];

  const getIsActiveLink = (path) => {
    return location.pathname === path ||
      (path.includes('?') && location.search.includes(path.split('?')[1]));
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#4A154B] text-[#FAF8F5] text-xs py-2 px-4 text-center tracking-wide font-medium flex justify-between items-center max-w-7xl mx-auto hidden sm:flex">
        <div className="flex items-center space-x-4 text-xs opacity-90">
          <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-[#D4AF37]" /> Mahavir Enclave, Palam, New Delhi</span>
          <a href="tel:9319325840" className="flex items-center hover:text-[#D4AF37] transition-colors"><Phone className="w-3 h-3 mr-1 text-[#D4AF37]" /> 9319325840</a>
        </div>
        <div className="font-serif-custom italic text-sm text-[#F4DCD9]">
          Om Divine Inspirations — Where Tradition meets Trends
        </div>
        <div className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
          Plus Sizes Available • XL to 4XL
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav className={navContainerClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#4A154B] hover:text-[#B38F38] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo / Brand Header */}
          <Link to="/" className="flex flex-col items-center lg:items-start text-center lg:text-left group">
            <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#7A4C62] uppercase font-semibold">
              RC Jain's
            </span>
            <span className="font-serif-custom text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#4A154B] leading-tight group-hover:text-[#B38F38] transition-colors">
              OM DIVINE INSPIRATIONS
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[#9B6B82] uppercase font-medium">
              The Ethnic Store
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = getIsActiveLink(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={navLinkClass(isActive)}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Utilities (Search, Wishlist, Call Store) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#4A154B] hover:text-[#B38F38] transition-colors relative"
              title="Search products"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/shop?wishlist=true"
              className="p-2 text-[#4A154B] hover:text-[#B38F38] transition-colors relative"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#5C0632] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <a
              href="tel:9319325840"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 bg-[#4A154B] hover:bg-[#5C0632] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-sm"
              title="Call Boutique Store"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#D4AF37]" />
              <span>Call Store</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFDF9] border-t border-[#E8D5C4]/60 px-4 pt-3 pb-6 animate-slide-up mt-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-[#4A3F3B] hover:text-[#4A154B] hover:pl-2 transition-all py-1 border-b border-[#F4EBE2]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 flex flex-col space-y-2 text-xs text-[#7A4C62]">
                <p className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-[#D4AF37]" /> Mahavir Enclave, Palam, New Delhi</p>
                <a href="tel:9319325840" className="flex items-center text-[#4A154B] font-semibold"><Phone className="w-3.5 h-3.5 mr-1 text-[#D4AF37]" /> Call Us: 9319325840</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
