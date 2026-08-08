import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { announcementData } from '../data/announcement';

export default function AnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user dismissed popup in current session
    const isDismissed = sessionStorage.getItem('om_divine_announcement_dismissed');
    if (!isDismissed && announcementData.active) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700); // Gentle 700ms entrance
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('om_divine_announcement_dismissed', 'true');
  };

  const handleAction = () => {
    handleClose();
    navigate(announcementData.buttonLink);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl overflow-hidden border border-[#E8D5C4] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 p-2 bg-[#FAF8F5]/80 hover:bg-[#4A154B] text-[#4A154B] hover:text-white rounded-full transition-all duration-200 shadow"
          aria-label="Close Announcement"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Graphic */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
          <img
            src={announcementData.image}
            alt="New Season Arrivals"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A154B]/90 via-[#4A154B]/40 to-transparent flex items-end p-6">
            <span className="inline-flex items-center px-3 py-1 bg-[#D4AF37] text-[#4A154B] text-xs font-bold tracking-widest uppercase rounded-full shadow">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> {announcementData.offerTag}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7A4C62]">
            {announcementData.subtitle}
          </span>
          <h2 className="font-serif-custom text-2xl sm:text-3xl font-bold text-[#4A154B] tracking-tight">
            {announcementData.title}
          </h2>
          <p className="text-sm text-[#5C524E] leading-relaxed max-w-md mx-auto">
            {announcementData.description}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleAction}
              className="w-full sm:w-auto px-6 py-3 bg-[#4A154B] hover:bg-[#5C0632] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md flex items-center justify-center group"
            >
              <span>{announcementData.buttonText}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleClose}
              className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#7A4C62] hover:text-[#4A154B] transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
