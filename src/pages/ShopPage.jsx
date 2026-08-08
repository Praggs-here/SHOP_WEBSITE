import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, RotateCcw, Search, Sparkles, Heart } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlistItems } = useWishlist();

  // URL state sync
  const categoryParam = searchParams.get('category') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';
  const isWishlistMode = searchParams.get('wishlist') === 'true';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [maxPrice, setMaxPrice] = useState(12000);
  const [sortBy, setSortBy] = useState(sortParam);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setSortBy(sortParam);
  }, [sortParam]);

  const sizesList = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Free Size'];
  const colorsList = ['all', 'Pink', 'Blue', 'Green', 'Yellow', 'Red', 'Maroon', 'Beige', 'White', 'Gold'];

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    let result = isWishlistMode ? wishlistItems : [...products];

    // Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory || p.id === selectedCategory);
    }

    // Size Filter
    if (selectedSize !== 'all') {
      result = result.filter(p => p.sizes && p.sizes.includes(selectedSize));
    }

    // Color Filter
    if (selectedColor !== 'all') {
      result = result.filter(p => p.colors && p.colors.includes(selectedColor));
    }

    // Price Filter
    result = result.filter(p => p.price <= maxPrice);

    // Sort Logic
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedSize, selectedColor, maxPrice, sortBy, isWishlistMode, wishlistItems]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedSize('all');
    setSelectedColor('all');
    setMaxPrice(12000);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9B6B82]">
            {isWishlistMode ? 'SAVED FAVORITES' : 'EXPLORE CATALOG'}
          </span>
          <h1 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A154B]">
            {isWishlistMode ? 'YOUR WISHLIST' : 'WOMEN\'S ETHNIC STORE'}
          </h1>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-2"></div>
        </div>

        {/* Toolbar Bar */}
        <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-[#E8D5C4] shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden px-4 py-2 bg-[#FAF8F5] text-[#4A154B] border border-[#E8D5C4] text-xs font-bold rounded-xl flex items-center"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
            </button>
            
            <span className="text-xs font-bold text-[#7A4C62]">
              Showing <strong className="text-[#4A154B]">{filteredProducts.length}</strong> items
            </span>
          </div>

          <div className="flex items-center space-x-4 w-full sm:w-auto justify-end">
            <label className="text-xs font-bold text-[#4A154B] whitespace-nowrap">Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-[#FAF8F5] border border-[#E8D5C4] rounded-xl text-xs font-semibold text-[#4A154B] focus:outline-none focus:border-[#4A154B]"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Best Rated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Filter Sidebar (Desktop & Mobile Drawer) */}
          <div className={`lg:col-span-3 space-y-6 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D5C4] shadow-sm space-y-6 sticky top-24">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#F4EBE2]">
                <h3 className="font-serif-custom text-xl font-bold text-[#4A154B] flex items-center">
                  <Filter className="w-4 h-4 mr-2 text-[#D4AF37]" /> Filters
                </h3>
                <button
                  onClick={handleReset}
                  className="text-[11px] font-bold text-[#7A4C62] hover:text-[#5C0632] flex items-center"
                >
                  <RotateCcw className="w-3 h-3 mr-1" /> Reset
                </button>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#4A154B]">
                  Category
                </label>
                <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-[#4A154B] text-white font-bold'
                        : 'text-[#5C524E] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex justify-between ${
                        selectedCategory === c.id
                          ? 'bg-[#4A154B] text-white font-bold'
                          : 'text-[#5C524E] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="space-y-2 pt-4 border-t border-[#F4EBE2]">
                <label className="text-xs font-bold uppercase tracking-wider text-[#4A154B]">
                  Size
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {sizesList.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-all ${
                        selectedSize === s
                          ? 'bg-[#4A154B] text-white border-[#4A154B]'
                          : 'bg-white text-[#5C524E] border-[#E8D5C4] hover:border-[#4A154B]'
                      }`}
                    >
                      {s === 'all' ? 'All Sizes' : s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-3 pt-4 border-t border-[#F4EBE2]">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold uppercase tracking-wider text-[#4A154B]">
                    Max Price
                  </label>
                  <span className="font-bold text-[#5C0632]">₹{maxPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="12000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#4A154B] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#7A4C62]">
                  <span>₹500</span>
                  <span>₹12,000+</span>
                </div>
              </div>

              {/* Color Filter */}
              <div className="space-y-2 pt-4 border-t border-[#F4EBE2]">
                <label className="text-xs font-bold uppercase tracking-wider text-[#4A154B]">
                  Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {colorsList.map((col) => (
                    <button
                      key={col}
                      onClick={() => setSelectedColor(col)}
                      className={`px-3 py-1 text-xs font-medium rounded-full border transition-all ${
                        selectedColor === col
                          ? 'bg-[#F4DCD9] text-[#4A154B] font-bold border-[#4A154B]'
                          : 'bg-white text-[#5C524E] border-[#E8D5C4]'
                      }`}
                    >
                      {col === 'all' ? 'All Colors' : col}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-[#FFFDF9] rounded-2xl p-12 text-center border border-[#E8D5C4] space-y-4">
                <Heart className="w-12 h-12 text-[#9B6B82] mx-auto opacity-50" />
                <h3 className="font-serif-custom text-2xl font-bold text-[#4A154B]">
                  {isWishlistMode ? 'Your Wishlist is Empty' : 'No Outfits Match Your Filter Criteria'}
                </h3>
                <p className="text-xs text-[#7A4C62] max-w-sm mx-auto">
                  {isWishlistMode
                    ? 'Explore our catalog and click the heart icon on any outfit to save it for later.'
                    : 'Try broadening your price range, clearing size filters, or resetting category selections.'}
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#4A154B] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow hover:bg-[#5C0632]"
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
