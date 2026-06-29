import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Sprout,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-neutral-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-light-green to-white rounded-full shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-forest/10 group-hover:bg-forest/0 transition-colors duration-500"></div>
                <Sprout className="w-7 h-7 text-forest-dark relative z-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-black text-3xl text-white tracking-tighter leading-none mb-1">
                  SPROUTO
                </span>
                <span className="text-[10px] font-sans uppercase font-bold tracking-[0.2em] text-light-green">
                  Plant Studio
                </span>
              </div>
            </Link>
            <p className="text-neutral-300 max-w-xs">
              Grow Happiness, One Plant at a Time. Bringing nature into your
              home with premium, sustainably sourced plants.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                aria-label="Follow Sprouto on Instagram"
                className="p-2 rounded-full bg-forest text-white hover:bg-light-green hover:text-forest-dark transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Follow Sprouto on Facebook"
                className="p-2 rounded-full bg-forest text-white hover:bg-light-green hover:text-forest-dark transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Follow Sprouto on Twitter"
                className="p-2 rounded-full bg-forest text-white hover:bg-light-green hover:text-forest-dark transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/track"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products?category=Indoor%20Plants"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Indoor Plants
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Outdoor%20Plants"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Outdoor Plants
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Succulents"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Succulents
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Flowering%20Plants"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Flowering Plants
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  All Plants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-neutral-300 mb-4">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <form
              className="flex flex-col gap-2 relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                maxLength={25}
                pattern="[a-zA-Z0-9@]+"
                title="Only letters, numbers, and @ are allowed"
                className="bg-forest border border-light-green/20 rounded-full px-4 py-3 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-light-green"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-light-green text-forest-dark px-4 font-medium rounded-full hover:bg-white transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-forest flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-300">
          <p>© 2026 Sprouto. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              onClick={() => window.scrollTo(0, 0)}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              onClick={() => window.scrollTo(0, 0)}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/shipping"
              onClick={() => window.scrollTo(0, 0)}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Shipping Policy
            </Link>
            <Link
              to="/returns"
              onClick={() => window.scrollTo(0, 0)}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Return Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
