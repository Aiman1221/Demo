import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  Leaf,
  Search,
  User,
  Heart,
  Sprout,
  MapPin,
  Search as SearchIcon,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useLocationContext } from "../../context/LocationContext";
import { useAuth } from "../../context/AuthContext";
import { AnimatePresence, motion } from "motion/react";
import { CartDrawer } from "../cart/CartDrawer";
import { WishlistDrawer } from "../cart/WishlistDrawer";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();
  const { wishlistCount, isWishlistOpen, setIsWishlistOpen } = useWishlist();
  const { location, setLocation, isLocationOpen, setIsLocationOpen } =
    useLocationContext();
  const [tempLocation, setTempLocation] = useState("");
  const navigate = useNavigate();

  // Authentication Context & Local States
  const { isLoggedIn, user, login, signup, logout } = useAuth();
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [authName, setAuthName] = useState("");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-md border-b border-forest/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-forest to-light-green rounded-full shadow-md overflow-hidden">
                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/0 transition-colors duration-500"></div>
                <Sprout className="w-6 h-6 text-white relative z-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-black text-2xl text-forest tracking-tighter leading-none">
                  SPROUTO
                </span>
                <span className="text-[9px] font-sans uppercase font-bold tracking-[0.2em] text-forest mt-0.5">
                  Plant Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-forest ${
                      isActive
                        ? "text-forest border-b-2 border-forest pb-1"
                        : "text-neutral-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4 text-forest-dark">
              {/* Location Tracker */}
              <button
                onClick={() => setIsLocationOpen(true)}
                className="hidden lg:flex items-center gap-1.5 p-2 hover:bg-light-green-subtle rounded-xl transition-colors"
                aria-label="Location"
              >
                <MapPin className="w-5 h-5 text-forest" />
                <div className="flex flex-col text-left leading-tight mt-0.5">
                  <span className="text-[10px] text-neutral-500 font-medium">
                    Deliver to
                  </span>
                  <span className="text-sm font-semibold truncate max-w-[140px] text-forest-dark">
                    {location ? location : "Select location"}
                  </span>
                </div>
              </button>

              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`w-11 h-11 flex items-center justify-center hover:bg-light-green-subtle rounded-full transition-colors hidden sm:flex ${isSearchOpen ? "bg-light-green-subtle" : ""}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsAccountOpen(true)}
                className="w-11 h-11 flex items-center justify-center hover:bg-light-green-subtle rounded-full transition-colors hidden sm:flex"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
              <button
                className="w-11 h-11 flex items-center justify-center hover:bg-light-green-subtle rounded-full transition-colors relative"
                onClick={() => setIsWishlistOpen(true)}
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <button
                className="w-11 h-11 flex items-center justify-center hover:bg-light-green-subtle rounded-full transition-colors relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-forest rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                className="w-11 h-11 -mr-2 md:hidden flex items-center justify-center hover:bg-light-green-subtle rounded-full transition-colors relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Mobile Menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Dropdown */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-[72px] left-0 w-full bg-white border-b border-light-green-subtle shadow-sm z-40 overflow-hidden"
            >
              <form
                onSubmit={handleSearchSubmit}
                className="max-w-3xl mx-auto flex gap-3 p-4"
              >
                <input
                  type="text"
                  placeholder="Search for plants, pots, tools..."
                  className="w-full bg-light-green-subtle/50 rounded-full px-6 py-2.5 outline-none focus:ring-2 focus:ring-forest text-forest-dark"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-forest text-white px-6 py-2.5 rounded-full hover:bg-forest-dark transition-colors font-medium whitespace-nowrap"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-light-green-subtle bg-cream"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsLocationOpen(true);
                  }}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-forest-dark bg-light-green-subtle/30 hover:bg-light-green-subtle mb-2 border border-light-green-subtle"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-forest" />
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-[10px] text-neutral-500 font-medium">
                        Deliver to
                      </span>
                      <span className="text-sm font-semibold truncate max-w-[200px]">
                        {location ? location : "Select your location"}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-forest font-medium">
                    Change
                  </span>
                </button>
                <div className="px-3 py-2">
                  <form onSubmit={handleSearchSubmit} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-light-green-subtle/50 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-forest text-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="p-2 bg-forest text-white rounded-md hover:bg-forest-dark transition-colors"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </form>
                </div>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-md text-base font-medium ${
                        isActive
                          ? "bg-light-green-subtle text-forest"
                          : "text-neutral-600 hover:bg-light-green-subtle/50 hover:text-forest"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAccountOpen(true);
                  }}
                  className="w-full text-left flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium text-neutral-600 hover:bg-light-green-subtle/50 hover:text-forest"
                >
                  <User className="w-5 h-5" />
                  Sign In / Account
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />

      {/* Account Modal */}
      <AnimatePresence>
        {isLocationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setIsLocationOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl relative"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-serif font-bold text-forest-dark">
                  Choose your location
                </h2>
                <button
                  onClick={() => setIsLocationOpen(false)}
                  className="p-2 hover:bg-light-green-subtle rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-500" />
                </button>
              </div>

              <p className="text-neutral-600 mb-6 text-sm">
                Delivery options and delivery speeds may vary for different
                locations.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    setIsLocationOpen(false);
                    setIsAccountOpen(true);
                  }}
                  className="w-full bg-light-green-subtle/30 border border-light-green-subtle hover:bg-light-green-subtle text-forest-dark py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Sign in to see your addresses
                </button>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-neutral-500">
                      or enter a PIN code
                    </span>
                  </div>
                </div>

                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (tempLocation.trim()) {
                      setLocation(`PIN ${tempLocation.trim()}`);
                      setIsLocationOpen(false);
                    }
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter PIN code"
                    value={tempLocation}
                    onChange={(e) => setTempLocation(e.target.value)}
                    className="w-full border border-neutral-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all"
                    required
                    pattern="^[0-9]{5,6}$"
                    title="Please enter a valid 5 or 6 digit PIN code."
                  />
                  <button
                    type="submit"
                    className="bg-forest text-white px-6 py-2.5 rounded-xl font-medium hover:bg-forest-dark transition-colors whitespace-nowrap"
                  >
                    Apply
                  </button>
                </form>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-neutral-500">or</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setLocation("Current Location");
                    setIsLocationOpen(false);
                  }}
                  className="w-full bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-700 py-3 px-4 rounded-xl font-medium transition-colors flex items-center gap-3 justify-start"
                >
                  <MapPin className="w-5 h-5 text-forest" />
                  Use current location
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Account Modal */}
      <AnimatePresence>
        {isAccountOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setIsAccountOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl relative"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-forest-dark">
                  {isLoggedIn
                    ? "My Profile"
                    : authMode === "signup"
                      ? "Create Account"
                      : "Sign In"}
                </h2>
                <button
                  onClick={() => setIsAccountOpen(false)}
                  className="p-2 hover:bg-light-green-subtle rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-500" />
                </button>
              </div>

              {isLoggedIn ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-light-green-subtle/30 border border-light-green-subtle rounded-xl">
                    <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center text-white text-lg font-bold uppercase shadow-sm">
                      {user?.name?.[0] || "U"}
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest-dark text-lg capitalize">
                        {user?.name}
                      </h3>
                      <p className="text-sm text-neutral-500 break-all">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                      Membership Status
                    </div>
                    <p className="text-sm font-medium text-forest-dark flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-forest animate-pulse inline-block"></span>
                      Verified Sprouto Plant Collector
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsAccountOpen(false);
                    }}
                    className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-lg font-medium transition-colors border border-red-100"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-neutral-600 mb-6 text-sm">
                    {authMode === "signup"
                      ? "Create an account to track your orders, save plants, and check out faster."
                      : "Sign in to manage your orders, save your favorite plants, and check out faster."}
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (authMode === "signup") {
                        if (authName.trim() && authEmail.trim()) {
                          signup(authName.trim(), authEmail.trim());
                          setIsAccountOpen(false);
                          setAuthName("");
                          setAuthEmail("");
                          setAuthPassword("");
                        }
                      } else {
                        if (authEmail.trim()) {
                          login(authEmail.trim());
                          setIsAccountOpen(false);
                          setAuthEmail("");
                          setAuthPassword("");
                        }
                      }
                    }}
                    className="space-y-4"
                  >
                    {authMode === "signup" && (
                      <div>
                        <label className="block text-sm font-medium text-forest-dark mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={authName}
                          onChange={(e) => setAuthName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full border border-light-green-subtle bg-light-green-subtle/20 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all"
                        />
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-forest-dark mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full border border-light-green-subtle bg-light-green-subtle/20 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest-dark mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full border border-light-green-subtle bg-light-green-subtle/20 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all"
                      />
                    </div>
                    {authMode === "login" && (
                      <div className="flex justify-end">
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="text-xs text-forest hover:underline font-medium"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    )}
                    <button
                      type="submit"
                      className="w-full bg-forest text-white py-3 rounded-lg font-medium hover:bg-forest-dark transition-colors mt-2 shadow-md"
                    >
                      {authMode === "signup" ? "Sign Up" : "Sign In"}
                    </button>

                    <p className="text-center text-sm text-neutral-500 mt-4">
                      {authMode === "signup" ? (
                        <>
                          Already have an account?{" "}
                          <button
                            type="button"
                            onClick={() => setAuthMode("login")}
                            className="text-forest font-medium hover:underline focus:outline-none"
                          >
                            Sign in
                          </button>
                        </>
                      ) : (
                        <>
                          Don't have an account?{" "}
                          <button
                            type="button"
                            onClick={() => setAuthMode("signup")}
                            className="text-forest font-medium hover:underline focus:outline-none"
                          >
                            Sign up
                          </button>
                        </>
                      )}
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
