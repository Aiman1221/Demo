import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  Recycle,
  Leaf,
  HeadphonesIcon,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ui/ProductCard";
import { Product } from "../context/CartContext";
import { HeroSlideshow } from "../components/ui/HeroSlideshow";
import { SEO } from "../components/layout/SEO";
import { getFallbackCategoryImage, getFallbackProductImage } from "../utils/imageFallback";

import hero_botanical_1 from "../assets/images/hero_botanical_1_1782566476797.jpg";
import hero_botanical_2 from "../assets/images/hero_botanical_2_1782566493304.jpg";
import hero_botanical_3 from "../assets/images/hero_botanical_3_1782566506242.jpg";

import hero_interior from "../assets/images/hero_interior_1781760270638.jpg";
import monstera_product from "../assets/images/best_monstera_prod_1782569004722.jpg";
import snake_plant_product from "../assets/images/best_snake_prod_1782569018625.jpg";
import peace_lily_product from "../assets/images/best_peace_lily_prod_1782569034817.jpg";
import jade_plant_product from "../assets/images/best_jade_prod_1782569050319.jpg";

import indoor_category from "../assets/images/category_indoor_1782568647704.jpg";
import succulent_category from "../assets/images/category_succulent_new_1782568702787.jpg";
import outdoor_category from "../assets/images/category_outdoor_new_1782568673875.jpg";
import flowering_category from "../assets/images/category_flowering_new_1782568715437.jpg";
import category_screaming from "../assets/images/category_screaming_new_1782568661370.jpg";
import category_hanging from "../assets/images/category_hanging_new_1782568687509.jpg";
import attractive_botanical_bg from "../assets/images/attractive_botanical_bg_1781852734148.jpg";
import premium_interior_plants from "../assets/images/premium_interior_plants_1781852749145.jpg";
import best_sellers_bg from "../assets/images/best_sellers_bg_1781856428137.jpg";
import why_choose_bg from "../assets/images/why_choose_bg_1781856442571.jpg";
import testimonials_bg from "../assets/images/testimonials_bg_1781856456268.jpg";

const heroImages = [
  hero_botanical_1,
  hero_botanical_2,
  hero_botanical_3,
];

const bestSellers: Product[] = [
  {
    id: "1",
    name: "Monstera Deliciosa",
    price: 899,
    category: "Indoor Plants",
    image: monstera_product,
  },
  {
    id: "2",
    name: "Snake Plant",
    price: 499,
    category: "Indoor Plants",
    image: snake_plant_product,
  },
  {
    id: "3",
    name: "Peace Lily",
    price: 699,
    category: "Flowering Plants",
    image: peace_lily_product,
  },
  {
    id: "4",
    name: "Jade Plant",
    price: 399,
    category: "Succulents",
    image: jade_plant_product,
  },
];

const categories = [
  {
    name: "Indoor Plants",
    image: indoor_category,
    desc: "Purify your indoor air",
  },
  {
    name: "Screaming Plants",
    image: category_screaming,
    desc: "Loud and proud",
  },
  {
    name: "Outdoor Plants",
    image: outdoor_category,
    desc: "Transform your garden",
  },
  {
    name: "Hanging Plants",
    image: category_hanging,
    desc: "Trailing beauties",
  },
  {
    name: "Succulents",
    image: succulent_category,
    desc: "Low maintenance beauties",
  },
  {
    name: "Flowering Plants",
    image: flowering_category,
    desc: "Add color to your life",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Hand-picked healthy plants",
  },
  {
    icon: Truck,
    title: "Fast & Safe Delivery",
    desc: "Secure packaging directly to you",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Packaging",
    desc: "100% sustainable materials",
  },
  { icon: Leaf, title: "Sustainably Sourced", desc: "Ethically grown plants" },
  {
    icon: HeadphonesIcon,
    title: "Plant Care Support",
    desc: "Expert guidance anytime",
  },
];

const reviews = [
  {
    name: "Priya Sharma",
    text: "The plants arrived healthy and beautifully packed. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    text: "My Monstera is thriving thanks to Sprouto's care guide.",
    rating: 5,
  },
];

export default function Home() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://sprouto.in/#organization",
      "name": "Sprouto",
      "url": "https://sprouto.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sprouto.in/assets/logo.png"
      },
      "description": "Shop healthy indoor plants, succulents, air-purifying plants, and garden plants online at Sprouto with expert support across India.",
      "foundingDate": "2022",
      "founders": [
        {
          "@type": "Person",
          "name": "Aiman Siddiqui"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@sprouto.in",
        "contactType": "customer service"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://sprouto.in/#website",
      "url": "https://sprouto.in",
      "name": "Sprouto",
      "description": "Premium Online Plant Store & Nursery in India",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://sprouto.in/products?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Store",
      "@id": "https://sprouto.in/#store",
      "name": "Sprouto",
      "image": "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=1200",
      "priceRange": "₹₹",
      "telephone": "+91-9999999999",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      }
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      <SEO
        title="Premium Plant Nursery | SPROUTO PLANT STUDIO"
        description="Discover healthy indoor plants for home at Sprouto, your trusted online plant nursery. Buy house plants online with fast, reliable plant home delivery."
        schema={schema}
      />
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-cream overflow-hidden">
        {/* Decorative Background Image */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-multiply transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${attractive_botanical_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-light-green/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[60%] bg-forest/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16 lg:py-24">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-forest/20 bg-forest/5 backdrop-blur-md"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-forest animate-pulse" />
                <span className="text-forest text-xs sm:text-sm font-semibold uppercase tracking-[0.15em]">
                  Sustainable Plant Studio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-black text-forest leading-[0.95] tracking-tight"
              >
                Buy House Plants Online &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-green to-forest italic font-light">
                  Indoor Plants for Home
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-neutral-800 max-w-lg leading-relaxed font-normal"
              >
                Transform your living space with our premium collection of
                sustainably sourced indoor and outdoor flora.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4"
              >
                <Link
                  to="/products"
                  className="w-full sm:w-auto bg-forest text-white px-8 py-4 rounded-full font-medium hover:bg-forest-dark hover:shadow-xl hover:shadow-forest/20 transition-all active:scale-95 flex items-center justify-center gap-3 group"
                >
                  Explore Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="w-full sm:w-auto group flex items-center justify-center gap-3 text-forest px-8 py-4 rounded-full font-medium hover:bg-forest/5 transition-colors"
                >
                  Our Story
                  <div className="w-8 h-[1px] bg-forest group-hover:w-12 transition-all" />
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center gap-6 pt-8 border-t border-forest/10 w-full cursor-pointer hover:bg-forest/5 p-4 rounded-xl transition-colors"
                onClick={() =>
                  document
                    .getElementById("testimonials")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-cream bg-light-green-subtle flex items-center justify-center overflow-hidden"
                    >
                      <User className="w-5 h-5 text-forest/50" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500 text-sm">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                  <span className="text-xs font-semibold text-forest-dark hover:text-forest transition-colors">
                    Loved by 10,000+ customers. Read reviews
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="w-full lg:w-1/2 relative group cursor-default"
            >
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-forest/5 transition-all duration-700 ease-out group-hover:shadow-[0_40px_80px_-20px_rgba(44,62,45,0.3)] group-hover:-translate-y-3 group-hover:scale-[1.02]">
                <HeroSlideshow images={heroImages} intervalDelay={5000} />
              </div>

              {/* Floating Element */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50 max-w-[200px] z-20 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-4"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-light-green/30 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-forest leading-tight">
                      100%
                    </p>
                    <p className="text-xs text-forest uppercase tracking-widest font-bold">
                      Organic
                    </p>
                  </div>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  Every plant is nurtured with sustainable and organic
                  practices.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Online Plant Nursery: Shop by Category
          </h2>
          <p className="text-neutral-700">
            Find the perfect green companion for every space at our premier online plant nursery. Discover beautiful indoor plants for home to elevate your living spaces.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={category.name}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/5] hover:shadow-2xl hover:-translate-y-2 active:scale-105 active:-translate-y-3 transition-all duration-500 ring-1 ring-forest/5"
            >
              <Link
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="block w-full h-full relative cursor-pointer group"
              >
                <img
                  src={category.image}
                  alt={`Explore our curated selection of ${category.name} - Sprouto Plant Studio`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  width={300}
                  height={375}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[1.01] contrast-[1.01]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getFallbackCategoryImage(category.name);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 text-left w-full">
                  <h3 className="text-2xl font-serif font-medium mb-3 text-white transform transition-transform duration-500 group-hover:-translate-y-1 drop-shadow-sm">
                    {category.name}
                  </h3>
                  <div className="overflow-hidden pt-1">
                    <p className="text-white font-medium tracking-[0.1em] text-xs uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-3 drop-shadow-md">
                      <span className="w-8 h-[2px] bg-white inline-block transition-all duration-700 delay-100 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                      <span className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {category.desc}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="relative px-4 sm:px-12 py-24 border-t border-forest/10 flex flex-col bg-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.2] mix-blend-multiply transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${best_sellers_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-forest mb-2">
                Buy Plants Online at Affordable Prices in India: Best Sellers
              </h2>
              <p className="text-neutral-600 text-sm hidden sm:block">
                Loved by plant parents everywhere. Buy healthy plants online in India at affordable prices with absolute confidence and top-tier freshness.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-cream transition-colors" aria-label="Previous Best Sellers">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-cream transition-colors" aria-label="Next Best Sellers">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-forest hover:text-forest-dark font-medium text-sm uppercase tracking-wider"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-multiply transition-opacity duration-1000 bg-cream"
          style={{
            backgroundImage: `url(${why_choose_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Plant Nursery Near Me: Why Choose Sprouto
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We're committed to providing you with the best plant shopping experience. If you are looking for a reliable plant nursery near me with convenient home delivery options, Sprouto is your perfect choice.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={feature.title}
                  className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white/90 backdrop-blur-sm shadow-sm border border-light-green-subtle/50 hover:border-light-green hover:shadow-2xl hover:-translate-y-2 active:scale-105 active:-translate-y-3 transition-all duration-500 ring-1 ring-forest/5 group cursor-default"
                >
                  <div className="w-16 h-16 rounded-full bg-light-green-subtle flex items-center justify-center text-forest mb-6 group-hover:scale-110 group-hover:bg-forest group-hover:text-white transition-all duration-500 shadow-md">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-forest-dark mb-3 transform transition-transform duration-500 group-hover:-translate-y-1">
                    {feature.title}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-sm text-neutral-600 opacity-80 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-center">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative bg-forest-dark py-24 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35] mix-blend-overlay transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${testimonials_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-t from-forest-dark/80 via-transparent to-forest-dark/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-12">
            Plant Home Delivery: What Our Customers Say
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
            {reviews.map((review, idx) => (
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                key={review.name}
                className="bg-forest/60 p-10 rounded-[2rem] flex-1 flex flex-col items-center text-center backdrop-blur-md border border-light-green/20 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 active:scale-105 active:-translate-y-3 transition-all duration-500 ring-1 ring-white/5 group cursor-default"
              >
                <div className="flex gap-1 mb-8 text-yellow-400 group-hover:scale-110 transition-transform duration-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-xl italic text-cream leading-relaxed mb-8 flex-grow opacity-90 group-hover:opacity-100 transition-opacity transform group-hover:-translate-y-1 duration-500">
                  "{review.text}"
                </p>
                <div className="overflow-hidden">
                  <h3 className="font-serif text-lg font-medium text-white transform transition-all duration-500 group-hover:-translate-y-1 flex items-center gap-3 justify-center">
                    <span className="w-6 h-[1px] bg-light-green inline-block scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                    {review.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-light-green rounded-3xl p-8 md:p-16 text-center shadow-xl relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-forest/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-dark mb-4">
              Plant Nursery Near Me: Instant Delivery & Updates
            </h2>
            <p className="text-forest-dark/80 max-w-xl mx-auto mb-8 text-lg">
              Subscribe to get expert advice on the best indoor plants, exclusive access to new arrivals, and convenient plant home delivery updates near you.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
              <input
                required
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-white border-0 rounded-full px-6 py-4 text-forest-dark placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-forest shadow-sm"
              />
              <button
                type="submit"
                className="bg-forest text-white px-8 py-4 font-semibold rounded-full hover:bg-forest-dark transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
