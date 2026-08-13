import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export default function StoreLocation() {
  const storeAddress = "RZF-1/303, Street No 2, Mahavir Enclave, Palam, New Delhi - 110045";
  const phone = "9319325840";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeAddress)}`;

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E8D5C4]/40" id="store-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-normal uppercase tracking-[0.25em] text-[#9B6B82]">
                AUTHENTIC NEW DELHI BOUTIQUE
              </span>
              <h2 className="font-serif-custom text-3xl sm:text-4xl font-normal text-[#4A154B] mt-1">
                VISIT OUR STORE
              </h2>
              <div className="w-16 h-[2px] bg-[#D4AF37] my-3"></div>
              <p className="text-sm text-[#5C524E]">
                Experience our full range of Sarees, Lehengas, Suits, Kurtis, and Plus Size ethnic fashion in person. Our boutique specialists are ready to welcome you.
              </p>
            </div>

            <div className="space-y-4 bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D5C4] shadow-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-normal uppercase text-[#4A154B] tracking-wider">Address</h4>
                  <p className="text-sm text-[#5C524E] font-normal leading-relaxed mt-0.5">
                    {storeAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-[#F4EBE2]">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-normal uppercase text-[#4A154B] tracking-wider">Phone / WhatsApp</h4>
                  <a href={`tel:${phone}`} className="text-sm font-normal text-[#4A154B] hover:text-[#B38F38] transition-colors">
                    +91 {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-[#F4EBE2]">
                <Clock className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-normal uppercase text-[#4A154B] tracking-wider">Store Hours</h4>
                  <p className="text-sm text-[#5C524E]">Open Daily: 10:30 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`tel:${phone}`}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#4A154B] hover:bg-[#5C0632] text-white text-xs font-normal uppercase tracking-widest rounded-full transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>CALL US</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#FFFDF9] hover:bg-[#F5F0EB] text-[#4A154B] border border-[#D9C8B4] text-xs font-normal uppercase tracking-widest rounded-full transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Visual Map Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFFDF9] bg-[#E8D5C4]/30 h-[360px] sm:h-[420px] flex flex-col justify-between p-6">
              {/* Map Mock Graphics */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#4A154B_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="bg-[#FFFDF9] px-4 py-2 rounded-xl shadow border border-[#E8D5C4]">
                  <span className="text-[10px] uppercase font-normal text-[#7A4C62] block">DELHI BOUTIQUE</span>
                  <span className="font-serif-custom text-base font-normal text-[#4A154B]">Mahavir Enclave, Palam</span>
                </div>
                <span className="px-3 py-1 bg-[#4A154B] text-white text-[10px] font-normal rounded-full uppercase tracking-wider">
                  VISIT US TODAY
                </span>
              </div>

              {/* Pin Accent */}
              <div className="relative z-10 my-auto text-center">
                <div className="w-16 h-16 bg-[#4A154B] text-[#D4AF37] rounded-full mx-auto flex items-center justify-center shadow-2xl animate-bounce border-2 border-[#D4AF37]">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-serif-custom text-xl font-normal text-[#4A154B] mt-3">
                  OM DIVINE INSPIRATIONS
                </h3>
                <p className="text-xs text-[#5C524E] font-normal max-w-xs mx-auto mt-1">
                  Street No 2, Mahavir Enclave, Palam
                </p>
              </div>

              <div className="relative z-10 text-center">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-[#4A154B] hover:bg-[#5C0632] text-white text-xs font-normal uppercase tracking-widest rounded-full shadow"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
