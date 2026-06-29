import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Heart, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { getFallbackProductImage } from '../../utils/imageFallback';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WishlistDrawer({ isOpen, onClose }: WishlistDrawerProps) {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-cream shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-light-green-subtle">
              <h2 className="font-serif text-2xl font-semibold text-forest-dark flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" /> Your Wishlist
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-light-green-subtle rounded-full transition-colors text-forest-dark"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {wishlist.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-neutral-500 space-y-4">
                  <div className="w-24 h-24 bg-light-green-subtle rounded-full flex items-center justify-center text-red-500/80">
                    <Heart className="w-10 h-10" />
                  </div>
                  <p className="text-lg">Your wishlist is empty.</p>
                  <button
                    onClick={onClose}
                    className="text-forest hover:text-forest-dark font-medium underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {wishlist.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="h-24 w-24 rounded-lg overflow-hidden bg-light-green-subtle flex-shrink-0">
                        <img
                          src={item.image}
                          alt={`${item.name} - Houseplant item inside wishlist | Sprouto`}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          width={96}
                          height={96}
                                                    className="h-full w-full object-cover object-center brightness-[1.01] contrast-[1.01]"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = getFallbackProductImage(item.name);
                          }}
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-forest-dark">{item.name}</h3>
                            <button
                              onClick={() => removeFromWishlist(item.id)}
                              className="text-neutral-400 hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="mt-1 text-sm text-neutral-500">{item.category}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-semibold text-forest-dark">
                            ₹{item.price}
                          </span>
                          <button
                            onClick={() => {
                              addToCart(item);
                              removeFromWishlist(item.id);
                              onClose();
                              setIsCartOpen(true);
                            }}
                            className="p-2 bg-light-green-subtle text-forest hover:bg-forest hover:text-white rounded-md transition-colors"
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
