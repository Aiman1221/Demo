import React, { createContext, useContext, useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  rating?: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  buyNowProduct: Product | null;
  buyNowQuantity: number;
  openBuyNowModal: (product: Product) => void;
  closeBuyNowModal: () => void;
  setBuyNowQuantity: React.Dispatch<React.SetStateAction<number>>;
  proceedWithBuyNow: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [buyNowProduct, setBuyNowProduct] = useState<Product | null>(null);
  const [buyNowQuantity, setBuyNowQuantity] = useState<number>(1);

  const openBuyNowModal = (product: Product) => {
    // If product is already in cart, prefill its quantity, otherwise start at 1
    const existing = cart.find((item) => item.id === product.id);
    setBuyNowQuantity(existing ? existing.quantity : 1);
    setBuyNowProduct(product);
  };

  const closeBuyNowModal = () => {
    setBuyNowProduct(null);
  };

  const proceedWithBuyNow = () => {
    if (!buyNowProduct) return;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === buyNowProduct.id);
      if (existing) {
        return prev.map((item) =>
          item.id === buyNowProduct.id
            ? { ...item, quantity: buyNowQuantity }
            : item,
        );
      }
      return [...prev, { ...buyNowProduct, quantity: buyNowQuantity }];
    });
    setBuyNowProduct(null);
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        buyNowProduct,
        buyNowQuantity,
        openBuyNowModal,
        closeBuyNowModal,
        setBuyNowQuantity,
        proceedWithBuyNow,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
