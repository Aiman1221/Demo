/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { LocationProvider } from "./context/LocationContext";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/layout/ScrollToTop";
import { BuyNowModal } from "./components/cart/BuyNowModal";
import { PuzzleLogoLoader } from "./components/ui/PuzzleLogoLoader";

// Lazy-loaded pages for code splitting and speed optimization
const About = React.lazy(() => import("./pages/About"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Services = React.lazy(() => import("./pages/Services"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Contact = React.lazy(() => import("./pages/Contact"));
const InfoPage = React.lazy(() => import("./pages/InfoPage"));

export default function App() {
  const [showLoader, setShowLoader] = useState(() => {
    // Only show on the very first full-website load in this session
    const hasLoaded = sessionStorage.getItem("sprouto_intro_loaded");
    return !hasLoaded;
  });

  const handleLoaderComplete = () => {
    sessionStorage.setItem("sprouto_intro_loaded", "true");
    setShowLoader(false);
  };

  return (
    <AuthProvider>
      <LocationProvider>
        <WishlistProvider>
          <CartProvider>
            {showLoader && (
              <PuzzleLogoLoader onComplete={handleLoaderComplete} />
            )}
            <BrowserRouter>
              <ScrollToTop />
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <BuyNowModal />
                <main className="flex-grow">
                  <React.Suspense
                    fallback={
                      <div className="min-h-[60vh] flex items-center justify-center bg-white">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-10 h-10 border-4 border-forest border-t-transparent rounded-full animate-spin"></div>
                          <p className="text-sm font-medium text-neutral-500 animate-pulse">Growing beautiful pages...</p>
                        </div>
                      </div>
                    }
                  >
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:id" element={<ProductDetail />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/faq" element={<InfoPage />} />
                      <Route path="/track" element={<InfoPage />} />
                      <Route path="/privacy" element={<InfoPage />} />
                      <Route path="/terms" element={<InfoPage />} />
                      <Route path="/shipping" element={<InfoPage />} />
                      <Route path="/returns" element={<InfoPage />} />
                    </Routes>
                  </React.Suspense>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </CartProvider>
        </WishlistProvider>
      </LocationProvider>
    </AuthProvider>
  );
}
