import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

// ProductCard displays a single product tile with image, category label, rating, price, and wishlist button.

export default function ProductCard({ product }) {
  if (!product) return null;

  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  const isLiked = isInWishlist(product.id);

  const wishlistButtonClass = isLiked
    ? 'absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 z-10 shadow-sm bg-[#5C0632] text-white'
    : 'absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 z-10 shadow-sm bg-white/80 text-[#4A154B] hover:bg-white hover:scale-110';

  const heartIconClass = `w-4 h-4 ${isLiked ? 'fill-current' : ''}`;

  const badgeNewClass = 'px-2.5 py-1 bg-[#4A154B] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow';
  const badgeDiscountClass = 'px-2.5 py-1 bg-[#5C0632] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow';

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') handleNavigate();
  };

  return (
      <div
        role="button"
        tabIndex={0}
        onClick={handleNavigate}
        onKeyDown={onKeyDown}
        className="group relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#E8D5C4]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
      >
        {/* Top Image Box */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF8F5] p-3 flex items-center justify-center">
            <Link to={`/product/${product.id}`} className="block w-full h-full flex items-center justify-center" aria-hidden>
              <img
                src={product.image}
                alt={product.name}
                className="w-[90%] h-[90%] object-cover object-center rounded-[1rem] mx-auto transform group-hover:scale-[1.03] transition-transform duration-700 shadow-sm"
                loading="lazy"
              />
            </Link>

            {/* Quick actions overlay (appears on hover / focus) */}
            <div className="absolute inset-0 flex items-end justify-center p-3 pointer-events-none">
              <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-auto w-full flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2 border border-[#E8D5C4] shadow">
                  <Link to={`/product/${product.id}`} onClick={(e)=>e.stopPropagation()} className="text-sm font-semibold text-[#4A154B]">View</Link>
                </div>
              </div>
            </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-1 z-10">
            {product.isNew && (
              <span className={badgeNewClass}>
                NEW
              </span>
            )}
            {product.discount && (
              <span className={badgeDiscountClass}>
                {product.discount}
              </span>
            )}
          </div>

          {/* Top Right Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={wishlistButtonClass}
            title="Add to Wishlist"
            aria-label="Wishlist"
          >
            <Heart className={heartIconClass} />
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
