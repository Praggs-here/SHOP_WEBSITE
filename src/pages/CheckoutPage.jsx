import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Truck, ArrowLeft, CheckCircle, CreditCard, Banknote, Smartphone } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    pincode: '110045',
    city: 'New Delhi',
    paymentMethod: 'cod',
    notes: ''
  });

  const deliveryFee = cartTotal > 1999 ? 0 : 99;
  const grandTotal = cartTotal + deliveryFee;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }

    const orderId = `ODI-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    const orderDetails = {
      orderId,
      customer: formData,
      items: cartItems,
      totalAmount: grandTotal,
      date: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    clearCart();
    navigate('/order-confirmed', { state: { orderDetails } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#FAF8F5] min-h-screen py-16 text-center">
        <h2 className="font-serif-custom text-2xl font-bold text-[#4A154B]">Your bag is empty</h2>
        <Link to="/shop" className="mt-4 inline-block px-6 py-3 bg-[#4A154B] text-white text-xs font-bold uppercase rounded-full">
          Browse Outfits
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center space-x-2 text-xs text-[#7A4C62] mb-6">
          <Link to="/" className="hover:text-[#4A154B]">Home</Link>
          <span>/</span>
          <Link to="/cart" className="hover:text-[#4A154B]">Cart</Link>
          <span>/</span>
          <span className="font-bold text-[#4A154B]">Guest Checkout</span>
        </div>

        <h1 className="font-serif-custom text-3xl sm:text-4xl font-bold text-[#4A154B] mb-8">
          GUEST CHECKOUT
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Checkout Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact & Shipping Details Card */}
            <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D5C4] shadow-sm space-y-4">
              <h3 className="font-serif-custom text-xl font-bold text-[#4A154B] pb-3 border-b border-[#F4EBE2] flex items-center justify-between">
                <span>1. Shipping & Delivery Address</span>
                <span className="text-xs font-normal text-[#2E5A44] bg-[#E8F0EC] px-2.5 py-0.5 rounded-full font-bold">Guest Mode</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-[#4A154B] block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sunita Sharma"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E8D5C4] rounded-xl text-xs text-[#4A154B] focus:outline-none focus:border-[#4A154B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-[#4A154B] block mb-1">
                    Phone Number (for SMS updates) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E8D5C4] rounded-xl text-xs text-[#4A154B] focus:outline-none focus:border-[#4A154B]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-[#4A154B] block mb-1">
                  Delivery Street Address *
                </label>
                <textarea
                  name="address"
                  required
                  rows="2"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House / Flat No., Street, Landmark"
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E8D5C4] rounded-xl text-xs text-[#4A154B] focus:outline-none focus:border-[#4A154B]"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-[#4A154B] block mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E8D5C4] rounded-xl text-xs text-[#4A154B] focus:outline-none focus:border-[#4A154B]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-[#4A154B] block mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E8D5C4] rounded-xl text-xs text-[#4A154B] focus:outline-none focus:border-[#4A154B]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D5C4] shadow-sm space-y-4">
              <h3 className="font-serif-custom text-xl font-bold text-[#4A154B] pb-3 border-b border-[#F4EBE2]">
                2. Select Payment Option
              </h3>

              <div className="space-y-3">
                <label className={`p-4 rounded-xl border flex items-center space-x-3 cursor-pointer transition-all ${
                  formData.paymentMethod === 'cod' ? 'bg-[#F4DCD9]/40 border-[#4A154B]' : 'bg-[#FAF8F5] border-[#E8D5C4]'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="accent-[#4A154B]"
                  />
                  <Banknote className="w-5 h-5 text-[#4A154B]" />
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#4A154B] block">Cash on Delivery / Pay at Store</span>
                    <span className="text-[11px] text-[#7A4C62]">Pay when order arrives or when picked up at Mahavir Enclave store</span>
                  </div>
                </label>

                <label className={`p-4 rounded-xl border flex items-center space-x-3 cursor-pointer transition-all ${
                  formData.paymentMethod === 'upi' ? 'bg-[#F4DCD9]/40 border-[#4A154B]' : 'bg-[#FAF8F5] border-[#E8D5C4]'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                    className="accent-[#4A154B]"
                  />
                  <Smartphone className="w-5 h-5 text-[#4A154B]" />
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#4A154B] block">UPI / Google Pay / PhonePe</span>
                    <span className="text-[11px] text-[#7A4C62]">Instant payment QR code generated at confirmation</span>
                  </div>
                </label>

                <label className={`p-4 rounded-xl border flex items-center space-x-3 cursor-pointer transition-all ${
                  formData.paymentMethod === 'card' ? 'bg-[#F4DCD9]/40 border-[#4A154B]' : 'bg-[#FAF8F5] border-[#E8D5C4]'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="accent-[#4A154B]"
                  />
                  <CreditCard className="w-5 h-5 text-[#4A154B]" />
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#4A154B] block">Credit / Debit Card</span>
                    <span className="text-[11px] text-[#7A4C62]">Visa, MasterCard, RuPay cards accepted</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Order Summary & Submit Button */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D5C4] shadow-sm space-y-6 sticky top-24">
              <h3 className="font-serif-custom text-xl font-bold text-[#4A154B] pb-3 border-b border-[#F4EBE2]">
                Order Items ({cartItems.length})
              </h3>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item.itemKey} className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-3">
                      <img src={item.image} alt="" className="w-12 h-14 object-cover rounded-lg border" />
                      <div>
                        <h5 className="font-bold text-[#4A154B] line-clamp-1">{item.name}</h5>
                        <p className="text-[10px] text-[#7A4C62]">Size: {item.selectedSize} | Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-[#4A154B]">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs pt-4 border-t border-[#F4EBE2]">
                <div className="flex justify-between text-[#7A4C62]">
                  <span>Items Subtotal</span>
                  <span className="font-bold text-[#4A154B]">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#7A4C62]">
                  <span>Delivery Charge</span>
                  <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#4A154B] pt-3 border-t border-[#F4EBE2]">
                  <span>Total Amount</span>
                  <span>₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#4A154B] hover:bg-[#5C0632] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>PLACE ORDER NOW</span>
              </button>

              <div className="text-[11px] text-[#7A4C62] text-center flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>R. C. Jain's Store Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
