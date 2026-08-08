import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Sparkles, Phone, MapPin, ShoppingBag, Home } from 'lucide-react';

export default function OrderConfirmedPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;

  const mockOrderId = orderDetails?.orderId || `ODI-2026-${Math.floor(10000 + Math.random() * 90000)}`;

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-16 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 border border-[#E8D5C4] shadow-xl text-center space-y-6">
          
          <div className="w-20 h-20 bg-[#F4DCD9] text-[#4A154B] rounded-full mx-auto flex items-center justify-center border-2 border-[#D4AF37] shadow-inner animate-scale-up">
            <CheckCircle className="w-10 h-10 text-[#4A154B]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> SUCCESSFUL GUEST ORDER
            </span>
            <h1 className="font-serif-custom text-3xl sm:text-4xl font-bold text-[#4A154B]">
              ORDER CONFIRMED ✨
            </h1>
            <p className="font-serif-custom italic text-lg text-[#C5A059]">
              "Thank you for shopping with OM DIVINE INSPIRATIONS."
            </p>
          </div>

          <div className="inline-block px-6 py-3 bg-[#FAF8F5] border border-[#E8D5C4] rounded-2xl">
            <span className="text-xs text-[#7A4C62] block font-medium">Order Confirmation Number</span>
            <span className="font-serif-custom text-2xl font-bold text-[#4A154B] tracking-wider">{mockOrderId}</span>
          </div>

          {/* Details Summary */}
          {orderDetails && (
            <div className="text-left bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8D5C4]/60 space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-[#F4EBE2]">
                <span className="text-xs font-bold uppercase text-[#4A154B]">Customer: {orderDetails.customer.fullName}</span>
                <span className="text-xs font-bold text-[#5C0632]">Total: ₹{orderDetails.totalAmount.toLocaleString()}</span>
              </div>

              <div className="text-xs text-[#5C524E] space-y-1">
                <p><strong>Phone:</strong> {orderDetails.customer.phone}</p>
                <p><strong>Address:</strong> {orderDetails.customer.address}, {orderDetails.customer.city} - {orderDetails.customer.pincode}</p>
                <p><strong>Payment Method:</strong> {orderDetails.customer.paymentMethod === 'cod' ? 'Cash on Delivery / Pay at Store' : 'Online Payment'}</p>
              </div>

              <div className="pt-3 border-t border-[#F4EBE2] space-y-2">
                <span className="text-[11px] font-bold text-[#7A4C62] uppercase block">Ordered Outfits:</span>
                {orderDetails.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs text-[#4A154B]">
                    <span>• {item.name} ({item.selectedSize}) x {item.quantity}</span>
                    <span className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Store Info Reminder */}
          <div className="p-4 bg-[#4A154B] text-white rounded-2xl text-xs space-y-1">
            <p className="font-bold text-[#D4AF37] uppercase">R. C. Jain's OM DIVINE INSPIRATIONS</p>
            <p>RZF-1/303, Street No 2, Mahavir Enclave, Palam, New Delhi - 110045</p>
            <p>For order queries or delivery assistance, call: <strong>9319325840</strong></p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#4A154B] hover:bg-[#5C0632] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>RETURN TO HOME</span>
            </Link>

            <Link
              to="/shop"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FFFDF9] hover:bg-[#F5F0EB] text-[#4A154B] border border-[#D9C8B4] text-xs font-bold uppercase tracking-widest rounded-full shadow-sm transition-all flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              <span>CONTINUE SHOPPING</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
