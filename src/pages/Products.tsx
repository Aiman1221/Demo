import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { ProductCard } from "../components/ui/ProductCard";
import { allProducts } from "../data/products";
import attractive_botanical_bg from "../assets/images/attractive_botanical_bg_1781852734148.jpg";
import { SEO } from "../components/layout/SEO";
import { getFallbackPageImage } from "../utils/imageFallback";

const categories = [
  "All",
  "Indoor Plants",
  "Outdoor Plants",
  "Succulents",
  "Flowering Plants",
  "Decorative Plants",
  "Screaming Plants",
  "Hanging Plants",
];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low"];

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSort, setSelectedSort] = useState("Featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(1500);

  useEffect(() => {
    const categoryQueryParam = searchParams.get("category");
    if (categoryQueryParam) {
      setSelectedCategory(categoryQueryParam);
    }
    const searchQueryParam = searchParams.get("search");
    if (searchQueryParam !== null) {
      setSearchTerm(searchQueryParam);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = allProducts;

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    result = result.filter((p) => p.price <= priceRange);

    if (selectedSort === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchTerm, selectedCategory, selectedSort, priceRange]);

  const seoTitle = selectedCategory !== "All"
    ? `Buy ${selectedCategory} Online in India | Sprouto Nursery`
    : "Buy Live Plants Online India | Indoor & Garden Plants Store";

  const seoDesc = selectedCategory !== "All"
    ? `Shop premium, hand-picked ${selectedCategory.toLowerCase()} online at Sprouto. Get clean air-purifying foliage and healthy plants delivered safe across India.`
    : "Explore healthy indoor plants, cheap plants online, and beautiful house plants at Sprouto. Buy premium plants online with secure plant home delivery.";

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": seoTitle,
    "description": seoDesc,
    "url": `https://sprouto.in/products?category=${encodeURIComponent(selectedCategory)}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": filteredProducts.length,
      "itemListElement": filteredProducts.slice(0, 15).map((p, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://sprouto.in/products/${p.id}`,
        "name": p.name,
        "image": p.image
      }))
    }
  };

  return (
    <div className="relative min-h-screen bg-cream">
      <SEO
        title={seoTitle}
        description={seoDesc}
        schema={collectionSchema}
      />
      {/* Decorative Background Image */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.25] mix-blend-multiply transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${attractive_botanical_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Abstract Background Elements */}
      <div className="fixed top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-light-green/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[60%] bg-forest/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Header with Background Image */}
        <div className="relative rounded-[2.5rem] overflow-hidden mb-12 bg-forest shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1466692476877-36680e805361?q=75&w=1200&auto=format&fit=crop"
            alt="Curated organic houseplant collection in a beautifully illuminated greenhouse - Sprouto Plant Studio"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
            width={1200}
            height={400}
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 hover:opacity-80 transition-opacity duration-700 brightness-[1.01] contrast-[1.01]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = getFallbackPageImage("about_hero");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/80 to-transparent pointer-events-none" />

          <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-white mb-6 drop-shadow-md tracking-tight">
                Buy House Plants Online <br className="hidden md:block" />
                <span className="text-light-green italic font-light">
                  & Indoor Plants
                </span>
              </h1>
              <p className="text-white/90 text-xl font-medium leading-relaxed max-w-xl">
                Browse our hand-picked selection of beautiful plants online to
                help you buy healthy plants online in India at affordable prices, complete with reliable home delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-4 w-full md:w-auto"
            >
              <div className="relative w-full md:w-80 shadow-2xl rounded-full group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-forest w-5 h-5 transition-colors group-focus-within:text-forest-dark" />
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-14 pr-6 py-4 bg-white/95 backdrop-blur-md text-forest-dark placeholder:text-neutral-500 rounded-full focus:outline-none focus:ring-4 focus:ring-light-green/50 border-0 w-full font-medium transition-all shadow-inner"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center justify-between w-full bg-white p-4 rounded-xl border border-light-green-subtle shadow-sm"
          >
            <span className="font-semibold flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" /> Filters
            </span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Sidebar Filters */}
          <div
            className={`lg:w-64 flex-shrink-0 space-y-6 lg:sticky lg:top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8 scrollbar-hide flex flex-col ${isFilterOpen ? "block" : "hidden lg:flex"}`}
          >
            {/* Categories */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-light-green-subtle">
              <h3 className="font-bold text-forest-dark mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="w-4 h-4 text-forest focus:ring-forest border-gray-300 rounded"
                    />
                    <span
                      className={`text-sm ${selectedCategory === category ? "font-semibold text-forest" : "text-neutral-600 group-hover:text-forest"}`}
                    >
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-light-green-subtle">
              <h3 className="font-bold text-forest-dark mb-4">
                Max Price: ₹{priceRange}
              </h3>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-light-green rounded-lg appearance-none cursor-pointer accent-forest"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-2">
                <span>₹100</span>
                <span>₹2000</span>
              </div>
            </div>

            {/* Sort By */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-light-green-subtle">
              <h3 className="font-bold text-forest-dark mb-4">Sort By</h3>
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="w-full text-left bg-light-green-subtle/30 border border-light-green-subtle text-forest-dark text-sm rounded-lg focus:ring-forest focus:border-forest p-3 flex justify-between items-center transition-colors hover:bg-light-green-subtle/50"
                >
                  <span>{selectedSort}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isSortOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isSortOpen && (
                  <div className="mt-2 flex flex-col space-y-1 bg-white border border-light-green-subtle rounded-lg p-2 shadow-md mb-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedSort(option);
                          setIsSortOpen(false);
                        }}
                        className={`text-left px-3 py-2 text-sm rounded-md transition-colors ${
                          selectedSort === option
                            ? "bg-forest text-white font-medium"
                            : "text-forest-dark hover:bg-light-green/30"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-light-green-subtle border-dashed">
                <h3 className="text-2xl font-serif text-neutral-400">
                  No plants found matching your criteria.
                </h3>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setPriceRange(1500);
                  }}
                  className="mt-4 text-forest hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
