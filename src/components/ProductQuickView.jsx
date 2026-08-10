import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Star, Heart, ShoppingBag, ShieldCheck } from 'lucide-react';
import { addToCart } from '../utils/cart';
import { useWishlist } from '../context/WishlistContext';

export default function ProductQuickView({ product, onClose }) {
  const navigate = useNavigate();
  
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : 'Free Size');
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : 'Default');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const isLiked = isInWishlist(product.id);

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-[#FFFDF9] rounded-2xl shadow-2xl overflow-hidden border border-[#E8D5C4] max-h-[90vh] overflow-y-auto animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#FAF8F5] hover:bg-[#4A154B] text-[#4A154B] hover:text-white rounded-full transition-colors shadow"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden bg-[#FAF8F5] aspect-[3/4] border border-[#E8D5C4]/60">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.discount && (
              <span className="absolute top-3 left-3 px-3 py-1 bg-[#5C0632] text-white text-xs font-bold uppercase rounded-full">
                {product.discount}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9B6B82] font-semibold">
                {product.categoryName}
              </span>
              <h2 className="font-serif-custom text-2xl sm:text-3xl font-bold text-[#4A154B] mt-1">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center text-[#D4AF37]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold ml-1 text-[#4A154B]">{product.rating}</span>
                </div>
                <span className="text-xs text-[#7A4C62]">({product.reviewsCount} verified reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-3 mt-4">
                <span className="text-2xl font-bold text-[#4A154B]">₹{product.price.toLocaleString()}</span>
                {product.oldPrice && (
                  <span className="text-base text-[#9B6B82] line-through font-normal">
                    ₹{product.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-xs text-[#5C524E] leading-relaxed mt-3">
                {product.description}
              </p>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#4A154B] block mb-2">
                    Select Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          selectedSize === size
                            ? 'bg-[#4A154B] text-white border-[#4A154B]'
                            : 'bg-white text-[#4A154B] border-[#E8D5C4] hover:border-[#4A154B]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#4A154B] block mb-2">
                    Color: <span className="font-normal capitalize">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, idx) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 text-xs font-medium rounded-full border transition-all ${
                          selectedColor === color
                            ? 'bg-[#F4DCD9] text-[#4A154B] border-[#4A154B] font-bold'
                            : 'bg-white text-[#5C524E] border-[#E8D5C4]'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-4 flex items-center space-x-4">
                <label className="text-xs font-bold uppercase tracking-wider text-[#4A154B]">
                  Qty:
                </label>
                <div className="flex items-center border border-[#E8D5C4] rounded-lg bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm font-bold text-[#4A154B] hover:bg-[#FAF8F5]"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm font-bold text-[#4A154B] hover:bg-[#FAF8F5]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#F4EBE2]">
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-3 bg-[#4A154B] hover:bg-[#5C0632] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  BUY NOW
                </button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3 rounded-xl border transition-all ${
                    isLiked
                      ? 'bg-[#5C0632] text-white border-[#5C0632]'
                      : 'bg-white text-[#4A154B] border-[#E8D5C4] hover:bg-[#FAF8F5]'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="text-[11px] text-[#7A4C62] flex items-center justify-center space-x-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Authentic Store Guarantee • Easy Exchange • Mahavir Enclave</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
