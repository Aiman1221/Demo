import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  ChevronLeft,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { allProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useLocationContext } from "../context/LocationContext";
import { SEO } from "../components/layout/SEO";
import attractive_botanical_bg from "../assets/images/attractive_botanical_bg_1781852734148.jpg";
import { getFallbackProductImage } from "../utils/imageFallback";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen, openBuyNowModal } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist, setIsWishlistOpen } =
    useWishlist();
  const { location, setIsLocationOpen } = useLocationContext();

  const product = useMemo(() => allProducts.find((p) => p.id === id), [id]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-3xl font-serif text-forest-dark mb-4">
          Product Not Found
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="text-forest hover:underline"
        >
          Return to Products
        </button>
      </div>
    );
  }

  const isWished = isInWishlist(product.id);

  const handleBuyNow = () => {
    openBuyNowModal(product);
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": [product.image],
    "description": product.description || "A premium healthy plant from Sprouto nursery, perfect for your living room, balcony, or office space.",
    "sku": `SPROUTO-${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": "Sprouto"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "142"
    },
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Priyanka Sharma"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": `Beautiful and healthy ${product.name}! It arrived in perfect condition, super green and fresh, with secure and sustainable packaging. Very easy to take care of.`
    },
    "offers": {
      "@type": "Offer",
      "url": `https://sprouto.in/products/${product.id}`,
      "priceCurrency": "INR",
      "price": product.price,
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Sprouto"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sprouto.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://sprouto.in/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://sprouto.in/products/${product.id}`
      }
    ]
  };

  return (
    <div className="relative min-h-screen py-12 bg-cream">
      {/* Decorative Background Image */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.2] mix-blend-multiply transition-opacity duration-1000 z-0"
        style={{
          backgroundImage: `url(${attractive_botanical_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title={`Buy ${product.name} Online at Best Price in India | Sprouto`}
        description={`Get a fresh, healthy ${product.name} starting from ₹${product.price} at Sprouto. ${product.description || "Air-purifying live plants packed carefully in eco-friendly wraps with pan-India delivery."}`}
        ogImage={product.image}
        ogType="product"
        schema={[productSchema, breadcrumbSchema]}
      />
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-neutral-500 hover:text-forest transition-colors mb-8 group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square bg-light-green-subtle rounded-3xl overflow-hidden relative"
        >
          <img
            src={product.image}
            alt={`Close-up of a healthy, fresh ${product.name} (${product.category}) - Sprouto Premium Plants`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
            width={600}
            height={600}
                        className="w-full h-full object-cover object-center brightness-[1.01] contrast-[1.01]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = getFallbackProductImage(product.name);
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-2">
            <span className="text-sm font-semibold text-forest uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-4">
            {product.name}
          </h1>
          <div className="text-3xl font-bold text-forest-dark mb-8">
            ₹{product.price}
          </div>

          <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-6 p-4 bg-light-green/10 rounded-2xl border border-light-green/20">
            {product.name.toLowerCase().includes("jade") ? (
              <>
                <h3 className="text-md font-serif font-bold text-forest-dark mb-1">
                  Jade Plant Care Guide
                </h3>
                <p className="text-xs text-neutral-600">
                  This popular succulent is cherished for its beauty and low-maintenance needs. Provide bright light and avoid overwatering for healthy growth.
                </p>
              </>
            ) : product.category === "Indoor Plants" ? (
              <>
                <h3 className="text-md font-serif font-bold text-forest-dark mb-1">
                  Indoor Plant Care Tips
                </h3>
                <p className="text-xs text-neutral-600">
                  This low-maintenance houseplant is highly resilient, making it an excellent choice for beginners looking to beautify their living space and refresh indoor air.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-md font-serif font-bold text-forest-dark mb-1">
                  Nursery Plant Care & Delivery
                </h3>
                <p className="text-xs text-neutral-600">
                  Our live plants are carefully packed to ensure they arrive fresh and healthy. Water moderately and place in indirect sunlight for the best results.
                </p>
              </>
            )}
          </div>

          <div className="bg-light-green-subtle/20 border border-light-green-subtle rounded-2xl p-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <MapPin className="w-5 h-5 text-forest" />
              </div>
              <div className="flex-1">
                {location ? (
                  <>
                    <h3 className="text-sm font-semibold text-forest-dark mb-1">
                      Delivering to {location}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-2">In Stock</p>
                    <p className="text-sm font-medium text-forest-dark">
                      Estimated delivery:{" "}
                      {new Date(
                        Date.now() + 3 * 24 * 60 * 60 * 1000,
                      ).toDateString()}
                    </p>
                    <button
                      onClick={() => setIsLocationOpen(true)}
                      className="text-xs text-forest font-medium hover:underline mt-2"
                    >
                      Update Location
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="text-sm font-semibold text-forest-dark mb-1">
                      Check delivery availability
                    </h3>
                    <button
                      onClick={() => setIsLocationOpen(true)}
                      className="text-sm text-forest font-medium hover:underline"
                    >
                      Select your location
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => {
                addToCart(product);
                setIsCartOpen(true);
              }}
              className="flex-1 bg-light-green-subtle text-forest hover:bg-forest hover:text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-forest text-white hover:bg-forest-dark px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Buy Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                if (isWished) {
                  removeFromWishlist(product.id);
                } else {
                  addToWishlist(product);
                  setIsWishlistOpen(true);
                }
              }}
              className={`p-4 rounded-xl flex items-center justify-center transition-colors border ${isWished ? "bg-red-50 text-red-500 border-red-200" : "bg-white text-neutral-600 border-neutral-200 hover:border-forest hover:text-forest"}`}
            >
              <Heart className={`w-6 h-6 ${isWished ? "fill-current" : ""}`} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-forest-dark font-medium">
                <Truck className="w-5 h-5 text-forest" />
                Free Delivery
              </div>
              <p className="text-sm text-neutral-500">
                Orders over ₹999 qualify for free shipping.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-forest-dark font-medium">
                <Shield className="w-5 h-5 text-forest" />
                Safe Return
              </div>
              <p className="text-sm text-neutral-500">
                14-day return available if dead on arrival.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
