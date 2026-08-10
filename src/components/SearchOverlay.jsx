import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const popularTags = [
    'Saree', 'Kurti', 'Lehenga', 'Suit', 'Dress', 'Dupatta', 'Co-ord', 'Blouse', 'Sharara', 'Plus Size'
  ];

  const matchesSearchQuery = (product) => {
    const lowerQuery = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowerQuery) ||
      product.categoryName.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    );
  };

  const searchResults = query.trim() ? products.filter(matchesSearchQuery) : [];

  const handleSelectProduct = (id) => {
    onClose();
    navigate(`/product/${id}`);
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="bg-[#FFFDF9] border-b border-[#E8D5C4] shadow-xl p-4 sm:p-6 w-full max-w-4xl mx-auto rounded-b-3xl">
        
        {/* Top Header Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F4EBE2]">
          <span className="text-xs uppercase tracking-widest text-[#7A4C62] font-bold">
            SEARCH OM DIVINE INSPIRATIONS
          </span>
          <button
            onClick={onClose}
            className="p-2 text-[#4A154B] hover:bg-[#FAF8F5] rounded-full transition-colors"
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative my-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#9B6B82]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sarees, kurtis, lehengas, suits, dresses, dupattas..."
            className="w-full pl-14 pr-10 py-4 bg-[#FAF8F5] border border-[#E8D5C4] rounded-2xl text-base text-[#4A154B] placeholder-[#9B6B82] focus:outline-none focus:border-[#4A154B] focus:ring-1 focus:ring-[#4A154B]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#7A4C62] hover:text-[#4A154B]"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Popular Category Chips */}
        <div className="flex flex-wrap items-center gap-2 py-2">
          <span className="text-xs font-bold text-[#4A154B] mr-2 flex items-center">
            <Tag className="w-3.5 h-3.5 mr-1 text-[#D4AF37]" /> Popular:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 bg-[#FAF8F5] hover:bg-[#F4DCD9] text-[#4A154B] text-xs font-semibold rounded-full border border-[#E8D5C4] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Container */}
        {query.trim() && (
          <div className="mt-6 max-h-96 overflow-y-auto space-y-3 pt-4 border-t border-[#F4EBE2]">
            <span className="text-xs font-bold text-[#7A4C62] uppercase tracking-wider block">
              Found {searchResults.length} matching items
            </span>

            {searchResults.length === 0 ? (
              <div className="py-8 text-center text-[#5C524E]">
                <p className="text-sm font-medium">No outfits found matching "{query}".</p>
                <p className="text-xs text-[#9B6B82] mt-1">Try searching for Saree, Kurti, Salwar Suit, Lehenga, or Dress.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {searchResults.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p.id)}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-[#FAF8F5] hover:bg-[#F4DCD9]/40 border border-[#E8D5C4]/60 cursor-pointer transition-all"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-14 h-18 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <span className="text-[10px] uppercase font-bold text-[#7A4C62]">
                        {p.categoryName}
                      </span>
                      <h4 className="text-xs font-bold text-[#4A154B] line-clamp-1">{p.name}</h4>
                      <p className="text-xs font-bold text-[#5C0632] mt-1">₹{p.price.toLocaleString()}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
