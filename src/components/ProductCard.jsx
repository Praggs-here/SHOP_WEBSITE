import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isLiked = isInWishlist(product.id);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
      <div className="group relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#E8D5C4]/60 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full">
        {/* Top Image Box */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF8F5] p-3 flex items-center justify-center">
          <Link to={`/product/${product.id}`} className="block w-full h-full flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-[90%] h-[90%] object-cover object-center rounded-[1rem] mx-auto transform group-hover:scale-[1.03] transition-transform duration-700 shadow-sm"
              loading="lazy"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-1 z-10">
            {product.isNew && (
              <span className="px-2.5 py-1 bg-[#4A154B] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow">
                NEW
              </span>
            )}
            {product.discount && (
              <span className="px-2.5 py-1 bg-[#5C0632] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow">
                {product.discount}
              </span>
            )}
          </div>

          {/* Top Right Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 z-10 shadow-sm ${
              isLiked
                ? 'bg-[#5C0632] text-white'
                : 'bg-white/80 text-[#4A154B] hover:bg-white hover:scale-110'
            }`}
            title="Add to Wishlist"
            aria-label="Wishlist"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>

        </div>

        {/* Product Details Section */}
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-center justify-between text-xs text-[#7A4C62] mb-1">
              <span className="uppercase tracking-wider font-semibold text-[10px]">
                {product.categoryName}
              </span>
              <div className="flex items-center text-[#D4AF37]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-[11px] font-bold text-[#4A154B] ml-1">{product.rating}</span>
              </div>
            </div>

            <Link to={`/product/${product.id}`}>
              <h3 className="font-serif-custom text-base font-bold text-[#4A154B] line-clamp-1 group-hover:text-[#B38F38] transition-colors">
                {product.name}
              </h3>
            </Link>
          </div>

          <div className="mt-3 pt-3 border-t border-[#F4EBE2] flex items-center justify-between">
            <div className="flex items-baseline space-x-2">
              <span className="text-base font-bold text-[#4A154B]">₹{product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <span className="text-xs text-[#9B6B82] line-through">
                  ₹{product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}
