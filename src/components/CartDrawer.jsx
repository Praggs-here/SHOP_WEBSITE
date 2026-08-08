import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 1999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] shadow-2xl border-l border-[#E8D5C4] flex flex-col justify-between animate-slide-up">
          
          {/* Top Header */}
          <div className="p-6 border-b border-[#F4EBE2] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#4A154B]" />
              <h2 className="font-serif-custom text-xl font-bold text-[#4A154B]">Your Shopping Bag</h2>
              <span className="text-xs bg-[#F4DCD9] text-[#4A154B] px-2 py-0.5 rounded-full font-bold">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#4A154B] hover:bg-[#FAF8F5] rounded-full transition-colors"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          {cartItems.length > 0 && (
            <div className="px-6 py-3 bg-[#FAF8F5] border-b border-[#E8D5C4]/60 text-xs">
              {remainingForFreeShipping === 0 ? (
                <p className="font-bold text-[#2E5A44] text-center">
                  ✨ Congratulations! You unlocked Free Delhi NCR Delivery!
                </p>
              ) : (
                <p className="text-[#5C524E] text-center">
                  Add <span className="font-bold text-[#4A154B]">₹{remainingForFreeShipping.toLocaleString()}</span> more for Free Delivery
                </p>
              )}
              <div className="w-full h-1.5 bg-[#E8D5C4] rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-full bg-[#D4AF37] transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-[#FAF8F5] rounded-full flex items-center justify-center border border-[#E8D5C4]">
                  <ShoppingBag className="w-8 h-8 text-[#9B6B82]" />
                </div>
                <h3 className="font-serif-custom text-xl font-bold text-[#4A154B]">
                  Your shopping bag is waiting for something beautiful.
                </h3>
                <p className="text-xs text-[#7A4C62] max-w-xs">
                  Browse our handcrafted sarees, ready-made suits, kurtis, and designer outfits.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-[#4A154B] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow hover:bg-[#5C0632] transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.itemKey}
                  className="flex space-x-4 p-3 bg-[#FAF8F5] rounded-xl border border-[#E8D5C4]/60 relative"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded-lg border border-[#E8D5C4]"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-bold text-[#4A154B] line-clamp-1 pr-6">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.itemKey)}
                          className="text-[#9B6B82] hover:text-[#5C0632] p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-[11px] text-[#7A4C62] mt-1 space-x-2">
                        <span>Size: <strong className="text-[#4A154B]">{item.selectedSize}</strong></span>
                        <span>Color: <strong className="text-[#4A154B]">{item.selectedColor}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F4EBE2]">
                      <div className="flex items-center border border-[#E8D5C4] rounded-lg bg-white">
                        <button
                          onClick={() => updateQuantity(item.itemKey, -1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#4A154B]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.itemKey, 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#4A154B]"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#4A154B]">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#FFFDF9] border-t border-[#E8D5C4] space-y-4">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[#7A4C62]">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#4A154B]">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#7A4C62]">
                  <span>Estimated Delivery</span>
                  <span>{remainingForFreeShipping === 0 ? 'FREE' : '₹99'}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#4A154B] pt-2 border-t border-[#F4EBE2]">
                  <span>Total Amount</span>
                  <span>₹{(cartTotal + (remainingForFreeShipping === 0 ? 0 : 99)).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-[#4A154B] hover:bg-[#5C0632] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>PROCEED TO GUEST CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-[#7A4C62] text-center flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Guest Checkout • No Login Required • Store Pickup Available</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
