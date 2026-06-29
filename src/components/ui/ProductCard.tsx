import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Zap } from "lucide-react";
import { useCart, Product } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { motion } from "motion/react";
import { getFallbackProductImage } from "../../utils/imageFallback";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setIsCartOpen, openBuyNowModal } = useCart();
  const { addToWishlist, isInWishlist, setIsWishlistOpen } = useWishlist();
  const navigate = useNavigate();

  return (
    <motion.div className="bg-white/90 backdrop-blur-sm rounded-[2rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 active:scale-100 active:-translate-y-1 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/20 group flex flex-col cursor-default">
      <div className="relative aspect-[4/5] overflow-hidden m-2 rounded-t-[1.75rem] rounded-b-xl block">
        <Link to={`/products/${product.id}`} className="absolute inset-0 z-0">
          <img
            src={product.image}
            alt={`${product.name} - Premium ${product.category} for Indoor Gardening | Sprouto`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            width={400}
            height={500}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-[1.01] contrast-[1.01]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = getFallbackProductImage(product.name);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>
        <div className="absolute top-4 right-4 flex flex-col gap-2 md:translate-x-12 md:group-hover:translate-x-0 transition-transform duration-300 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToWishlist(product);
              setIsWishlistOpen(true);
            }}
            className={`h-11 w-11 bg-white rounded-full flex items-center justify-center shadow-md transition-colors ${isInWishlist(product.id) ? "text-red-500 bg-red-50" : "text-neutral-600 hover:text-red-500 hover:bg-red-50"}`}
            aria-label="Add to Wishlist"
          >
            <Heart
              className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-current" : ""}`}
            />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
              setIsCartOpen(true);
            }}
            className="h-11 w-11 bg-white rounded-full flex items-center justify-center text-neutral-600 hover:text-forest hover:bg-light-green-subtle shadow-md transition-colors"
            aria-label="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-4 left-4 z-10 flex flex-col items-start gap-1.5">
          <span className="bg-white/90 backdrop-blur-sm text-forest px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full pointer-events-none shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <Link
          to={`/products/${product.id}`}
          className="block mb-2 hover:text-forest transition-colors"
        >
          <h3 className="font-serif text-xl font-semibold text-forest-dark line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description ||
            "A beautiful plant perfect for your home or office."}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-forest-dark">
            ₹{product.price}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openBuyNowModal(product);
            }}
            className="flex items-center gap-2 bg-forest text-white hover:bg-forest-dark px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <Zap className="w-4 h-4" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
