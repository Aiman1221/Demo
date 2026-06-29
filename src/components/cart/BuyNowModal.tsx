import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Minus, Plus, ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { motion, AnimatePresence } from "motion/react";
import { getFallbackProductImage } from "../../utils/imageFallback";

export const BuyNowModal: React.FC = () => {
  const {
    buyNowProduct,
    buyNowQuantity,
    setBuyNowQuantity,
    closeBuyNowModal,
    proceedWithBuyNow,
  } = useCart();
  const navigate = useNavigate();

  if (!buyNowProduct) return null;

  const handleDecrease = () => {
    if (buyNowQuantity > 1) {
      setBuyNowQuantity(buyNowQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setBuyNowQuantity(buyNowQuantity + 1);
  };

  const handleProceed = () => {
    proceedWithBuyNow();
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBuyNowModal}
          className="absolute inset-0 bg-forest-dark/40 backdrop-blur-md"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl border border-light-green-subtle/50 overflow-hidden z-10 p-8"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-forest-dark">
              Quantity Details
            </h2>
            <button
              onClick={closeBuyNowModal}
              className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Product card inside modal */}
          <div className="flex gap-4 items-center bg-light-green-subtle/20 border border-light-green-subtle/50 p-4 rounded-3xl mb-6">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0">
              <img
                src={buyNowProduct.image}
                alt={`${buyNowProduct.name} - ${buyNowProduct.category} selected for purchase | Sprouto`}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                width={80}
                height={80}
                                className="w-full h-full object-cover brightness-[1.01] contrast-[1.01]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getFallbackProductImage(buyNowProduct.name);
                }}
              />
            </div>
            <div>
              <span className="text-xs font-semibold text-forest uppercase tracking-wider">
                {buyNowProduct.category}
              </span>
              <h3 className="font-serif font-semibold text-forest-dark text-lg line-clamp-1">
                {buyNowProduct.name}
              </h3>
              <p className="text-forest font-bold">₹{buyNowProduct.price}</p>
            </div>
          </div>

          {/* Quantity selection section */}
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-neutral-500 mb-3">
              How many would you like to purchase?
            </p>
            <div className="inline-flex items-center gap-6 bg-neutral-50 border border-neutral-100 px-5 py-3 rounded-2xl shadow-inner">
              <button
                type="button"
                onClick={handleDecrease}
                disabled={buyNowQuantity <= 1}
                className={`p-2 rounded-xl transition-all active:scale-90 ${
                  buyNowQuantity <= 1
                    ? "text-neutral-300 cursor-not-allowed"
                    : "text-forest hover:bg-light-green-subtle hover:text-forest-dark cursor-pointer shadow-sm bg-white"
                }`}
              >
                <Minus className="w-5 h-5" />
              </button>

              <span className="text-2xl font-bold font-mono text-forest-dark min-w-[2.5rem]">
                {buyNowQuantity}
              </span>

              <button
                type="button"
                onClick={handleIncrease}
                className="p-2 rounded-xl text-forest hover:bg-light-green-subtle hover:text-forest-dark transition-all active:scale-95 cursor-pointer shadow-sm bg-white"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Total display */}
          <div className="flex justify-between items-center py-4 border-t border-neutral-100 mb-6 font-medium">
            <span className="text-neutral-500">Order Total</span>
            <span className="text-2xl font-bold text-forest-dark font-mono">
              ₹{buyNowProduct.price * buyNowQuantity}
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleProceed}
              className="w-full bg-forest text-white py-4 px-6 rounded-2xl font-semibold hover:bg-forest-dark transition-all shadow-md hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
            >
              Proceed to Checkout
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={closeBuyNowModal}
              className="w-full py-3.5 px-6 rounded-2xl text-neutral-500 hover:text-neutral-800 font-medium hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
