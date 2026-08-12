import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { WishlistProvider } from './context/WishlistContext';

import Navbar from './components/Navbar';
import AnnouncementPopup from './components/AnnouncementPopup';
import SearchOverlay from './components/SearchOverlay';
import Footer from './components/Footer';

// The core App component renders the site shell with routing, global overlays, and shared wishlist state.

import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import ProductDetails from './pages/ProductDetails';
import CollectionsPage from './pages/CollectionsPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top helper component
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <WishlistProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#2C221E] font-sans antialiased selection:bg-[#E8D5C4] selection:text-[#4A154B]">
          
          {/* Announcement Modal on Site Load */}
          <AnnouncementPopup />

          {/* Global Navbar */}
          <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

          {/* Main View Router */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Floating Overlays */}
          <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

          {/* Global Footer */}
          <Footer />

        </div>
      </Router>
    </WishlistProvider>
  );
}
