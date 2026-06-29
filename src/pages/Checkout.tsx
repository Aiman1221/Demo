import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  ChevronRight,
  CreditCard,
  MapPin,
  Package,
  ArrowLeft,
  UserPlus,
  LogIn,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLocationContext } from "../context/LocationContext";
import { useAuth } from "../context/AuthContext";
import attractive_botanical_bg from "../assets/images/attractive_botanical_bg_1781852734148.jpg";
import { getFallbackProductImage } from "../utils/imageFallback";

type CheckoutStep = "shipping" | "payment" | "success";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const { location } = useLocationContext();
  const { isLoggedIn, user, signup, login } = useAuth();
  const navigate = useNavigate();

  // Step state - if already logged in, show payment procedure immediately
  const [step, setStep] = useState<CheckoutStep>("shipping");

  // Registration & Shipping Form Fields
  const [authMode, setAuthMode] = useState<"signup" | "login">("signup");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Automatically advance to payment if user is already logged in
  useEffect(() => {
    if (isLoggedIn) {
      setStep("payment");
      if (user) {
        const parts = user.name.split(" ");
        setFormData((prev) => ({
          ...prev,
          firstName: parts[0] || "",
          lastName: parts.slice(1).join(" ") || "",
        }));
      }
    } else {
      setStep("shipping");
    }
  }, [isLoggedIn, user]);

  useEffect(() => {
    if (location && location.startsWith("PIN ")) {
      const pin = location.replace("PIN ", "");
      if (/^\d{5,6}$/.test(pin)) {
        setFormData((prev) => ({ ...prev, zipCode: pin }));
      }
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupAndShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === "signup") {
      if (signupName.trim() && signupEmail.trim()) {
        signup(signupName.trim(), signupEmail.trim());
        // Pre-fill shipping names
        const parts = signupName.trim().split(" ");
        setFormData((prev) => ({
          ...prev,
          firstName: parts[0] || "",
          lastName: parts.slice(1).join(" ") || "",
        }));
        setStep("payment");
        window.scrollTo(0, 0);
      }
    } else {
      if (signupEmail.trim()) {
        login(signupEmail.trim());
        setStep("payment");
        window.scrollTo(0, 0);
      }
    }
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    window.scrollTo(0, 0);
    clearCart();
  };

  if (cart.length === 0 && step !== "success") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <Package className="w-16 h-16 text-light-green-subtle mb-4" />
        <h2 className="text-2xl font-serif text-forest-dark mb-4">
          Your cart is empty
        </h2>
        <p className="text-neutral-500 mb-8 max-w-md">
          Looks like you haven't added anything to your cart yet. Let's find
          some beautiful plants for you.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-forest text-white px-8 py-3 rounded-full hover:bg-forest-dark transition-colors font-medium cursor-pointer"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-12 bg-cream">
      {/* Decorative Background Image */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-multiply transition-opacity duration-1000 z-0"
        style={{
          backgroundImage: `url(${attractive_botanical_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {step !== "success" && (
          <button
            onClick={() =>
              step === "payment" && !isLoggedIn
                ? setStep("shipping")
                : navigate(-1)
            }
            className="flex items-center text-neutral-500 hover:text-forest transition-colors mb-8 group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
        )}

        {/* Progress Steps */}
        {step !== "success" && (
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-white transition-colors duration-300 ${
                  step === "shipping" || step === "payment"
                    ? "bg-forest"
                    : "bg-neutral-300"
                }`}
              >
                1
              </div>
              <span
                className={`ml-3 font-medium ${
                  step === "shipping" ? "text-forest-dark" : "text-neutral-500"
                }`}
              >
                {isLoggedIn ? "Shipping" : "Account & Shipping"}
              </span>
            </div>
            <div className="w-16 sm:w-24 h-1 mx-4 sm:mx-6 flex items-center">
              <div
                className={`h-full w-full rounded-full transition-colors duration-300 ${
                  step === "payment"
                    ? "bg-forest text-forest"
                    : "bg-neutral-200"
                }`}
              />
            </div>
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-white transition-colors duration-300 ${
                  step === "payment" ? "bg-forest" : "bg-neutral-300"
                }`}
              >
                2
              </div>
              <span
                className={`ml-3 font-medium ${
                  step === "payment" ? "text-forest-dark" : "text-neutral-500"
                }`}
              >
                Payment
              </span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === "shipping" && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200"
                >
                  {!isLoggedIn ? (
                    /* Ask user to Sign Up if they have not */
                    <div>
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
                        <div className="w-12 h-12 bg-light-green-subtle rounded-full flex items-center justify-center text-forest">
                          <UserPlus className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-serif text-forest-dark font-semibold">
                            {authMode === "signup"
                              ? "Account Registration"
                              : "Sign In to Checkout"}
                          </h2>
                          <p className="text-sm text-neutral-500">
                            {authMode === "signup"
                              ? "Create an account to complete your purchase and explore payment details."
                              : "Sign in to your account to load your saved details."}
                          </p>
                        </div>
                      </div>

                      <form
                        onSubmit={handleSignupAndShippingSubmit}
                        className="space-y-5"
                      >
                        {authMode === "signup" && (
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">
                              Full Name
                            </label>
                            <input
                              required
                              type="text"
                              value={signupName}
                              onChange={(e) => setSignupName(e.target.value)}
                              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all placeholder:text-neutral-400"
                              placeholder="John Doe"
                            />
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">
                              Email Address
                            </label>
                            <input
                              required
                              type="email"
                              value={signupEmail}
                              onChange={(e) => setSignupEmail(e.target.value)}
                              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all placeholder:text-neutral-400"
                              placeholder="you@example.com"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">
                              Password
                            </label>
                            <input
                              required
                              type="password"
                              value={signupPassword}
                              onChange={(e) =>
                                setSignupPassword(e.target.value)
                              }
                              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all placeholder:text-neutral-400"
                              placeholder="••••••••"
                            />
                          </div>
                        </div>

                        {authMode === "signup" && (
                          <>
                            <div className="space-y-2 pt-2 border-t border-neutral-100">
                              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                                Shipping Information
                              </h3>
                              <label className="text-sm font-medium text-neutral-700">
                                Complete Address
                              </label>
                              <input
                                required
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                minLength={5}
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all placeholder:text-neutral-400"
                                placeholder="123 Plant Street, Apt 4B"
                              />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-700">
                                  City / District
                                </label>
                                <input
                                  required
                                  type="text"
                                  name="city"
                                  value={formData.city}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all placeholder:text-neutral-400"
                                  placeholder="New Delhi"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-700">
                                  Postal / ZIP Code
                                </label>
                                <input
                                  required
                                  type="text"
                                  name="zipCode"
                                  value={formData.zipCode}
                                  onChange={handleInputChange}
                                  pattern="^\d{6}$"
                                  title="Please enter exactly a 6-digit numerical ZIP code."
                                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all placeholder:text-neutral-400"
                                  placeholder="110001"
                                />
                              </div>
                            </div>
                          </>
                        )}

                        <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <p className="text-sm text-neutral-500 text-center sm:text-left">
                            {authMode === "signup" ? (
                              <>
                                Already have an account?{" "}
                                <button
                                  type="button"
                                  onClick={() => setAuthMode("login")}
                                  className="text-forest font-semibold hover:underline cursor-pointer"
                                >
                                  Log In
                                </button>
                              </>
                            ) : (
                              <>
                                Don't have an account yet?{" "}
                                <button
                                  type="button"
                                  onClick={() => setAuthMode("signup")}
                                  className="text-forest font-semibold hover:underline cursor-pointer"
                                >
                                  Sign Up
                                </button>
                              </>
                            )}
                          </p>
                          <button
                            type="submit"
                            className="w-full sm:w-auto bg-forest text-white px-8 py-3.5 rounded-xl hover:bg-forest-dark transition-colors font-medium flex items-center justify-center gap-2 shadow-md cursor-pointer"
                          >
                            {authMode === "signup"
                              ? "Sign Up & Continue"
                              : "Log In & Continue"}
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    /* Existing Shipping details Form but pre-filled for logged in users */
                    <div>
                      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-neutral-100">
                        <div className="w-12 h-12 bg-light-green-subtle rounded-full flex items-center justify-center text-forest">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-serif text-forest-dark font-semibold">
                            Shipping Details
                          </h2>
                          <p className="text-sm text-neutral-500">
                            Pre-filled with your registered name,{" "}
                            <span className="capitalize font-semibold text-forest-dark">
                              {user?.name}
                            </span>
                            .
                          </p>
                        </div>
                      </div>

                      <form
                        onSubmit={handleShippingSubmit}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">
                              First Name
                            </label>
                            <input
                              required
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              minLength={2}
                              maxLength={50}
                              pattern="^[A-Za-z\s]+$"
                              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">
                              Last Name
                            </label>
                            <input
                              required
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              minLength={2}
                              maxLength={50}
                              pattern="^[A-Za-z\s]+$"
                              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-neutral-700">
                            Complete Address
                          </label>
                          <input
                            required
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            minLength={5}
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all"
                            placeholder="123 Plant Street, Apt 4B"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">
                              City / District
                            </label>
                            <input
                              required
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all"
                              placeholder="New Delhi"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">
                              Postal / ZIP Code
                            </label>
                            <input
                              required
                              type="text"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              pattern="^\d{6}$"
                              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all"
                              placeholder="110001"
                            />
                          </div>
                        </div>
                        <div className="pt-6 mt-6 border-t border-neutral-100 flex justify-end">
                          <button
                            type="submit"
                            className="bg-forest text-white px-8 py-4 rounded-xl hover:bg-forest-dark transition-colors font-medium flex items-center gap-2 cursor-pointer"
                          >
                            Continue to Payment
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </motion.div>
              )}

              {step === "payment" && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200"
                >
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-neutral-100">
                    <div className="w-12 h-12 bg-light-green-subtle rounded-full flex items-center justify-center text-forest">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif text-forest-dark font-semibold">
                        Payment Details
                      </h2>
                      <p className="text-sm text-neutral-500">
                        Secure SSL-encrypted payment procedure
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-700">
                        Name on Card
                      </label>
                      <input
                        required
                        type="text"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        minLength={2}
                        maxLength={50}
                        pattern="^[A-Za-z\s]+$"
                        title="Please enter a valid name (alphabets only)."
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all shadow-sm"
                        placeholder={user ? user.name : "John Doe"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-700">
                        Card Number
                      </label>
                      <input
                        required
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        maxLength={19}
                        pattern="^[\d\s]{16,19}$"
                        title="Please enter a valid 16-digit card number."
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all tracking-widest font-mono placeholder:tracking-normal placeholder:font-sans shadow-sm"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">
                          Expiry Date
                        </label>
                        <input
                          required
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          maxLength={5}
                          pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                          title="Please enter a valid expiry date in MM/YY format."
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all shadow-sm"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">
                          CVV
                        </label>
                        <input
                          required
                          type="password"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          minLength={3}
                          maxLength={4}
                          pattern="^\d{3,4}$"
                          title="Please enter a valid 3 or 4 digit CVV."
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-forest focus:border-forest outline-none transition-all font-mono shadow-sm"
                          placeholder="•••"
                        />
                      </div>
                    </div>
                    <div className="pt-6 mt-6 border-t border-neutral-100 flex flex-col-reverse sm:flex-row gap-4 items-center justify-end">
                      <button
                        type="button"
                        onClick={() => setStep("shipping")}
                        className="text-neutral-500 hover:text-forest-dark font-medium px-4 py-2 cursor-pointer"
                      >
                        Back to shipping
                      </button>
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-forest text-white px-8 py-4 rounded-xl hover:bg-forest-dark transition-colors font-medium flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                      >
                        Place Order (₹{cartTotal})
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 sm:p-16 rounded-3xl shadow-sm border border-neutral-200 text-center flex flex-col items-center col-span-full mx-auto max-w-3xl w-full lg:col-span-3"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-forest-dark mb-4">
                    Order Placed Successfully!
                  </h2>
                  <p className="text-neutral-600 text-lg mb-8 max-w-lg mx-auto">
                    Thank you for your purchase,{" "}
                    {formData.firstName || user?.name || ""}. We've sent a
                    confirmation email with your order details. Your plants will
                    be shipped soon!
                  </p>
                  <div className="bg-neutral-50 rounded-2xl p-6 mb-8 inline-block text-left w-full max-w-md">
                    <h3 className="font-semibold text-forest-dark mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-3 text-sm text-neutral-600">
                      <div className="flex justify-between border-b border-neutral-200 pb-2">
                        <span>Order Number</span>
                        <span className="font-mono text-neutral-800">
                          #ORD-{Math.floor(Math.random() * 1000000)}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-200 pb-2">
                        <span>Shipping to</span>
                        <span className="text-neutral-800 text-right max-w-[200px] truncate">
                          {formData.address || "Main Street"},{" "}
                          {formData.city || "New Delhi"}
                        </span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="font-semibold">Total Paid</span>
                        <span className="font-bold text-forest-dark">
                          ₹{cartTotal}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/")}
                    className="bg-forest text-white px-8 py-4 rounded-xl font-semibold hover:bg-forest-dark transition-colors inline-block cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          {step !== "success" && (
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-200 sticky top-24">
                <h3 className="text-xl font-serif text-forest-dark font-semibold mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={`${item.name} - Houseplant ordered | Sprouto`}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          width={64}
                          height={64}
                                                    className="w-full h-full object-cover brightness-[1.01] contrast-[1.01]"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = getFallbackProductImage(item.name);
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-forest-dark text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <div className="font-semibold text-forest-dark">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-neutral-100 pt-4 space-y-3">
                  <div className="flex justify-between text-neutral-600 text-sm">
                    <span>Subtotal</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600 text-sm">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-forest-dark pt-3 border-t border-neutral-100">
                    <span>Total</span>
                    <span>₹{cartTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
