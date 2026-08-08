import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  const freeShippingThreshold = 1999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const deliveryFee = cartTotal > 0 && remainingForFreeShipping > 0 ? 99 : 0;
  const grandTotal = cartTotal + deliveryFee;

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center space-x-2 text-xs text-[#7A4C62] mb-6">
          <Link to="/" className="hover:text-[#4A154B]">Home</Link>
          <span>/</span>
          <span className="font-bold text-[#4A154B]">Shopping Bag</span>
        </div>

        <h1 className="font-serif-custom text-3xl sm:text-4xl font-bold text-[#4A154B] mb-8">
          YOUR SHOPPING BAG ({cartItems.length})
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-[#FFFDF9] rounded-3xl p-12 text-center border border-[#E8D5C4] space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-[#FAF8F5] rounded-full flex items-center justify-center border border-[#E8D5C4] mx-auto">
              <ShoppingBag className="w-8 h-8 text-[#9B6B82]" />
            </div>
            <h2 className="font-serif-custom text-2xl font-bold text-[#4A154B]">
              Your shopping bag is waiting for something beautiful.
            </h2>
            <p className="text-xs text-[#7A4C62] max-w-md mx-auto">
              Explore our latest collection of sarees, ready-made suits, kurtis, dresses, and fusion co-ords.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-3.5 bg-[#4A154B] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow hover:bg-[#5C0632] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>CONTINUE SHOPPING</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.itemKey}
                  className="bg-[#FFFDF9] p-4 sm:p-6 rounded-2xl border border-[#E8D5C4] shadow-sm flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 relative"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-32 object-cover rounded-xl border border-[#E8D5C4]"
                  />

                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <span className="text-[10px] font-bold uppercase text-[#7A4C62]">
                      {item.categoryName}
                    </span>
                    <h3 className="font-serif-custom text-lg font-bold text-[#4A154B]">
                      {item.name}
                    </h3>
                    
                    <div className="text-xs text-[#7A4C62] flex justify-center sm:justify-start space-x-3">
                      <span>Size: <strong className="text-[#4A154B]">{item.selectedSize}</strong></span>
                      <span>Color: <strong className="text-[#4A154B]">{item.selectedColor}</strong></span>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start space-x-4 pt-2">
                      <div className="flex items-center border border-[#E8D5C4] rounded-lg bg-white">
                        <button
                          onClick={() => updateQuantity(item.itemKey, -1)}
                          className="px-3 py-1 text-sm font-bold text-[#4A154B]"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.itemKey, 1)}
                          className="px-3 py-1 text-sm font-bold text-[#4A154B]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.itemKey)}
                        className="text-xs text-[#9B6B82] hover:text-[#5C0632] font-semibold flex items-center"
                      >
                        <Trash2 className="w-3.5 h-3.5 mr-1" /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-bold text-[#4A154B]">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D5C4] shadow-sm space-y-6 sticky top-24">
                <h3 className="font-serif-custom text-xl font-bold text-[#4A154B] pb-3 border-b border-[#F4EBE2]">
                  Order Summary
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-[#7A4C62]">
                    <span>Bag Subtotal</span>
                    <span className="font-bold text-[#4A154B]">₹{cartTotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-[#7A4C62]">
                    <span>Estimated Shipping</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-[#4A154B] pt-3 border-t border-[#F4EBE2]">
                    <span>Grand Total</span>
                    <span>₹{grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 bg-[#4A154B] hover:bg-[#5C0632] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>CHECKOUT AS GUEST</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-[11px] text-[#7A4C62] text-center flex items-center justify-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Guest Shopping • No Registration Needed</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
