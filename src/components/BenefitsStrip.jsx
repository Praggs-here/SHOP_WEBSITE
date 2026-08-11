import React from 'react';
import { ShieldCheck, CreditCard, Headphones, CheckCircle } from 'lucide-react';

export default function BenefitsStrip() {
  const items = [
    { icon: CheckCircle, title: 'Authentic Collections' },
    { icon: ShieldCheck, title: 'Quality Assured' },
    { icon: CreditCard, title: 'Secure Payments' },
    { icon: Headphones, title: 'Customer Support' }
  ];

  return (
    <section className="bg-[#FFFDF9] border-b border-[#E8D5C4]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 sm:py-8 text-center">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="flex items-center gap-3 justify-center">
                <div className="p-2 bg-white rounded-full shadow-sm text-[#4A154B]">
                  <Icon className="w-5 h-5 text-[#B38F38]" aria-hidden />
                </div>
                <div className="text-sm font-medium text-[#4A154B]">{it.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
