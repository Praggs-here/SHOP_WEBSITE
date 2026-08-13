import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, RotateCcw, Heart, Search } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlistItems } = useWishlist();

  // URL state sync
  const categoryParam = searchParams.get('category') || 'all';
  const isWishlistMode = searchParams.get('wishlist') === 'true';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSize, setSelectedSize] = useState('all');
  const [maxPrice, setMaxPrice] = useState(12000);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filterSectionClass = `lg:col-span-3 space-y-6 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`;
  const filterButtonClass = (isActive) => `w-full text-left px-3 py-1.5 rounded-lg text-xs font-normal transition-all ${
    isActive
      ? 'bg-[#4A154B] text-white font-normal'
      : 'text-[#5C524E] hover:bg-[#FAF8F5]'
  }`;
  const sizeFilterButtonClass = (isActive) => `px-2.5 py-1 text-xs font-normal rounded-lg border transition-all ${
    isActive
      ? 'bg-[#4A154B] text-white border-[#4A154B]'
      : 'bg-white text-[#5C524E] border-[#E8D5C4] hover:border-[#4A154B]'
  }`;

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const sizesList = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Free Size'];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    let result = isWishlistMode ? wishlistItems : [...products];

    // Search
    if (searchQuery && searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.categoryName.toLowerCase().includes(q));
    }

    // Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory || p.id === selectedCategory);
    }

    // Size Filter
    if (selectedSize !== 'all') {
      result = result.filter(p => p.sizes && p.sizes.includes(selectedSize));
    }

    // Price Filter
    result = result.filter(p => p.price <= maxPrice);

    // Sorting
    if (sortBy === 'price-asc') result.sort((a,b)=>a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a,b)=>b.price - a.price);
    else if (sortBy === 'name') result.sort((a,b)=>a.name.localeCompare(b.name));
    else if (sortBy === 'featured') result.sort((a,b)=> (b.isBestSeller?1:0) - (a.isBestSeller?1:0));

    return result;
  }, [selectedCategory, selectedSize, maxPrice, isWishlistMode, wishlistItems, searchQuery, sortBy]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedSize('all');
    setMaxPrice(12000);
    setSearchParams({});
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#7A4C62] mb-4">
          <Link to="/" className="hover:text-[#4A154B]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="font-normal text-[#4A154B]">Collections</Link>
        </div>

        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
          <span className="text-xs font-normal uppercase tracking-[0.25em] text-[#9B6B82]">
            {isWishlistMode ? 'SAVED FAVORITES' : 'EXPLORE CATALOG'}
          </span>
          <h1 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A154B]">
            {isWishlistMode ? 'YOUR WISHLIST' : 'WOMEN\'S ETHNIC STORE'}
          </h1>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-2"></div>
        </div>

        {/* Toolbar Bar */}
        <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-[#E8D5C4] shadow-sm mb-8 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden px-4 py-2 bg-[#FAF8F5] text-[#4A154B] border border-[#E8D5C4] text-xs font-normal rounded-xl flex items-center"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
          </button>
          <div className="w-full sm:w-1/2 flex items-center gap-2">
            <Search className="w-4 h-4 text-[#9B6B82]" />
            <input
              type="search"
              placeholder="Search products, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E8D5C4] rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30"
            />
          </div>

          <div className="w-full sm:w-1/2 flex items-center justify-end gap-3">
            <div className="text-xs font-normal text-[#7A4C62]">Showing <strong className="text-[#4A154B]">{filteredProducts.length}</strong> items</div>
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="text-sm bg-white border border-[#E8D5C4] rounded-full px-3 py-2">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Filter Sidebar (Desktop & Mobile Drawer) */}
          <div className={filterSectionClass}>
            <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D5C4] shadow-sm space-y-6 sticky top-24">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#F4EBE2]">
                <h3 className="font-serif-custom text-xl font-normal text-[#4A154B] flex items-center">
                  <Filter className="w-4 h-4 mr-2 text-[#D4AF37]" /> Filters
                </h3>
                <button
                  onClick={handleReset}
                  className="text-[11px] font-normal text-[#7A4C62] hover:text-[#5C0632] flex items-center"
                >
                  <RotateCcw className="w-3 h-3 mr-1" /> Reset
                </button>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-xs font-normal uppercase tracking-wider text-[#4A154B]">
                  Category
                </label>
                <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={filterButtonClass(selectedCategory === 'all')}
                  >
                    All Categories
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={filterButtonClass(selectedCategory === c.id)}
                    >
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="space-y-2 pt-4 border-t border-[#F4EBE2]">
                <label className="text-xs font-normal uppercase tracking-wider text-[#4A154B]">
                  Size
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {sizesList.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={sizeFilterButtonClass(selectedSize === s)}
                    >
                      {s === 'all' ? 'All Sizes' : s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-3 pt-4 border-t border-[#F4EBE2]">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-normal uppercase tracking-wider text-[#4A154B]">
                    Max Price
                  </label>
                  <span className="font-normal text-[#5C0632]">₹{maxPrice.toLocaleString()}</span>
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

            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-[#FFFDF9] rounded-2xl p-12 text-center border border-[#E8D5C4] space-y-4">
                <Heart className="w-12 h-12 text-[#9B6B82] mx-auto opacity-50" />
                <h3 className="font-serif-custom text-2xl font-normal text-[#4A154B]">
                  {isWishlistMode ? 'Your Wishlist is Empty' : 'No Outfits Match Your Filter Criteria'}
                </h3>
                <p className="text-xs text-[#7A4C62] max-w-sm mx-auto">
                  {isWishlistMode
                    ? 'Explore our catalog and click the heart icon on any outfit to save it for later.'
                    : 'Try broadening your price range, clearing size filters, or resetting category selections.'}
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#4A154B] text-white text-xs font-normal uppercase tracking-widest rounded-full shadow hover:bg-[#5C0632]"
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
