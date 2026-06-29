import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { getFallbackProductImage } from '../../utils/imageFallback';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

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
                <ShoppingBag className="w-5 h-5" /> Your Cart
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-light-green-subtle rounded-full transition-colors text-forest-dark"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-neutral-500 space-y-4">
                  <div className="w-24 h-24 bg-light-green-subtle rounded-full flex items-center justify-center text-forest">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <p className="text-lg">Your cart is empty.</p>
                  <button
                    onClick={onClose}
                    className="text-forest hover:text-forest-dark font-medium underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cart.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="h-24 w-24 rounded-lg overflow-hidden bg-light-green-subtle flex-shrink-0">
                        <img
                          src={item.image}
                          alt={`${item.name} - Houseplant item inside cart | Sprouto`}
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
                              onClick={() => removeFromCart(item.id)}
                              className="text-neutral-400 hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="mt-1 text-sm text-neutral-500">{item.category}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-light-green rounded-md">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-forest hover:bg-light-green-subtle transition-colors rounded-l-md"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium text-forest-dark">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-forest hover:bg-light-green-subtle transition-colors rounded-r-md"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="font-semibold text-forest-dark">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-light-green-subtle bg-white">
                <div className="flex justify-between text-base font-medium text-forest-dark mb-4">
                  <p>Subtotal</p>
                  <p>₹{cartTotal}</p>
                </div>
                <p className="text-sm text-neutral-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    navigate("/checkout");
                  }}
                  className="w-full bg-forest text-white px-6 py-4 rounded-full font-medium hover:bg-forest-dark transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
