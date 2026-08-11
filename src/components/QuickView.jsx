import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

export default function QuickView() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      const id = e.detail && e.detail.productId;
      if (id) {
        const p = products.find(x => x.id === id);
        setProduct(p || null);
        setOpen(true);
      }
    };
    window.addEventListener('quickview', handler);
    return () => window.removeEventListener('quickview', handler);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={()=>setOpen(false)} />
      <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-serif-custom text-lg font-bold text-[#4A154B]">{product.name}</h3>
          <button aria-label="Close Quick View" onClick={()=>setOpen(false)} className="p-2 text-[#4A154B]"><X className="w-5 h-5"/></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <div className="rounded-lg overflow-hidden bg-[#FAF8F5] flex items-center justify-center">
            <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
          </div>
          <div className="space-y-4">
            <div className="text-2xl font-bold text-[#4A154B]">₹{product.price.toLocaleString()}</div>
            <p className="text-sm text-[#5C524E]">{product.description}</p>
            {product.sizes && (
              <div className="text-xs">
                <div className="font-bold text-[#4A154B]">Sizes:</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.sizes.map(s => <span key={s} className="px-2 py-1 border rounded text-xs">{s}</span>)}
                </div>
              </div>
            )}
            <div className="pt-4">
              <Link to={`/product/${product.id}`} className="inline-block px-4 py-2 bg-[#4A154B] text-white rounded-full font-semibold">View Full Product</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
