import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShieldCheck, Truck, RotateCcw, Check, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = products.find(p => p.id === id) || products[0];

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : 'Free Size');
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : 'Default');
  const [activeTab, setActiveTab] = useState('details');

  const isLiked = isInWishlist(product.id);

  const galleryButtonClass = (isActive) => `w-20 h-24 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
    isActive
      ? 'border-[#4A154B] ring-2 ring-[#4A154B]/20'
      : 'border-[#E8D5C4] opacity-70 hover:opacity-100'
  }`;

  const sizeButtonClass = (sz) => `px-4 py-2 text-xs font-bold rounded-xl border transition-all ${
    selectedSize === sz
      ? 'bg-[#4A154B] text-white border-[#4A154B] shadow-sm'
      : 'bg-white text-[#4A154B] border-[#E8D5C4] hover:border-[#4A154B]'
  }`;

  const colorButtonClass = (c) => `px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
    selectedColor === c
      ? 'bg-[#F4DCD9] text-[#4A154B] border-[#4A154B] font-bold'
      : 'bg-white text-[#5C524E] border-[#E8D5C4]'
  }`;

  const actionButtonClass = isLiked
    ? 'flex-1 p-4 rounded-xl border transition-all flex items-center justify-center bg-[#5C0632] text-white border-[#5C0632]'
    : 'flex-1 p-4 rounded-xl border transition-all flex items-center justify-center bg-white text-[#4A154B] border-[#E8D5C4] hover:bg-[#FAF8F5]';

  const tabButtonClass = (tab) => `pb-4 text-sm font-bold uppercase tracking-wider relative transition-colors ${
    activeTab === tab ? 'text-[#4A154B]' : 'text-[#7A4C62]'
  }`;

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setSelectedSize(product.sizes ? product.sizes[0] : 'Free Size');
      setSelectedColor(product.colors ? product.colors[0] : 'Default');
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  const isLiked = isInWishlist(product.id);

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .concat(products.filter(p => p.id !== product.id))
    .slice(0, 4);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-[#7A4C62] mb-8">
          <Link to="/" className="hover:text-[#4A154B]">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#4A154B]">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-[#4A154B]">{product.categoryName}</Link>
          <span>/</span>
          <span className="font-bold text-[#4A154B] line-clamp-1">{product.name}</span>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#FFFDF9] p-6 sm:p-10 rounded-3xl border border-[#E8D5C4] shadow-sm">
          
          {/* Left Gallery Images */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8D5C4]/60">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.discount && (
                <span className="absolute top-4 left-4 px-3.5 py-1 bg-[#5C0632] text-white text-xs font-bold uppercase rounded-full shadow">
                  {product.discount}
                </span>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={galleryButtonClass(activeImage === img)}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Specs & Purchase controls */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9B6B82]">
                RC JAIN'S • {product.categoryName}
              </span>
              <h1 className="font-serif-custom text-3xl sm:text-4xl font-bold text-[#4A154B]">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center text-[#D4AF37]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold ml-1 text-[#4A154B]">{product.rating}</span>
                </div>
                <span className="text-xs text-[#7A4C62]">({product.reviewsCount} customer reviews)</span>
                <span className="text-xs text-[#2E5A44] font-bold bg-[#E8F0EC] px-2 py-0.5 rounded-full">In Stock</span>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline space-x-4 pt-2">
                <span className="text-3xl font-bold text-[#4A154B]">₹{product.price.toLocaleString()}</span>
                {product.oldPrice && (
                  <span className="text-lg text-[#9B6B82] line-through font-normal">
                    ₹{product.oldPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xs font-bold text-[#5C0632]">Inclusive of all taxes</span>
              </div>

              <p className="text-sm text-[#5C524E] leading-relaxed pt-2">
                {product.description}
              </p>

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold uppercase tracking-wider text-[#4A154B]">
                      Select Size:
                    </label>
                    <span className="text-[#9B6B82] underline cursor-pointer">Size Guide</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={sizeButtonClass(sz)}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#4A154B] block">
                    Available Colors:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={colorButtonClass(c)}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-6 border-t border-[#F4EBE2]">
              <div className="flex">
                <button
                  onClick={() => toggleWishlist(product)}
                  className={actionButtonClass}
                  title="Wishlist"
                >
                  <Heart className={isLiked ? 'w-5 h-5 fill-current' : 'w-5 h-5'} />
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-4 text-[11px] text-[#7A4C62] text-center border-t border-[#F4EBE2]">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] mb-1" />
                  <span>100% Original</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-4 h-4 text-[#D4AF37] mb-1" />
                  <span>Fast Delhi NCR Delivery</span>
                </div>
                <div className="flex flex-col items-center">
                  <RotateCcw className="w-4 h-4 text-[#D4AF37] mb-1" />
                  <span>Easy Exchange</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Tabbed Specs Section */}
        <div className="mt-12 bg-[#FFFDF9] rounded-3xl border border-[#E8D5C4] p-6 sm:p-10 shadow-sm">
          <div className="flex border-b border-[#F4EBE2] space-x-8">
            <button
              onClick={() => setActiveTab('details')}
              className={tabButtonClass('details')}
            >
              Product Specifications
              {activeTab === 'details' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]"></span>}
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={tabButtonClass('care')}
            >
              Care & Fabric
              {activeTab === 'care' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]"></span>}
            </button>
          </div>

          <div className="pt-6 text-sm text-[#5C524E] leading-relaxed">
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p><strong className="text-[#4A154B]">Fabric:</strong> {product.fabric}</p>
                  <p><strong className="text-[#4A154B]">Fit / Silhouette:</strong> {product.fit}</p>
                  <p><strong className="text-[#4A154B]">Pattern / Print:</strong> {product.pattern}</p>
                </div>
                <div className="space-y-2">
                  <p><strong className="text-[#4A154B]">Occasion:</strong> {product.occasion}</p>
                  <p><strong className="text-[#4A154B]">Embroidery / Work:</strong> {product.work}</p>
                  <p><strong className="text-[#4A154B]">Boutique Location:</strong> Mahavir Enclave, Palam</p>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-2">
                <p><strong className="text-[#4A154B]">Care Instructions:</strong> {product.care}</p>
                <p>Keep garments stored in a moisture-free cover. For silk sarees and heavy zari lehengas, dry cleaning is strongly recommended to maintain luster.</p>
              </div>
            )}

          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-16 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9B6B82]">
              RECOMMENDED STYLES
            </span>
            <h2 className="font-serif-custom text-3xl font-bold text-[#4A154B] mt-1">
              YOU MAY ALSO LIKE
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
