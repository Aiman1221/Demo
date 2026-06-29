import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { SEO } from "../components/layout/SEO";
import { getFallbackPageImage } from "../utils/imageFallback";
import { 
  Shield, 
  FileText, 
  Truck, 
  RefreshCw, 
  HelpCircle, 
  MapPin, 
  CheckCircle2, 
  Lock, 
  Calendar, 
  Clock 
} from "lucide-react";

// Import local premium plant assets for dynamic rendering
import about_hero from "../assets/images/about_hero_1781760403233.jpg";
import our_story from "../assets/images/our_story_1781760418266.jpg";
import premium_interior_plants from "../assets/images/premium_interior_plants_1781852749145.jpg";
import why_choose_bg from "../assets/images/why_choose_bg_1781856442571.jpg";
import blog_easy_indoor from "../assets/images/blog_easy_indoor_plants_1781762411867.jpg";
import attractive_botanical_bg from "../assets/images/attractive_botanical_bg_1781852734148.jpg";

export default function InfoPage() {
  const location = useLocation();
  const path = location.pathname.substring(1); // remove leading slash

  // Format title from path (e.g. "privacy-policy" -> "Privacy Policy")
  const title = path.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  // Dynamic SEO descriptions
  const descriptions: Record<string, string> = {
    faq: "Read frequently asked questions about Sprouto. Find answers on plant care cards, delivery timelines, bulk inquiries, and nursery policies.",
    shipping: "Sprouto Shipping & Delivery Policies. Get healthy live plants delivered safely across India in premium eco-friendly, secure packaging.",
    returns: "Sprouto Plant Replacement & Return Policy. Learn about our 24-hour fresh delivery guarantee and replacement terms for transit-damaged plants.",
    privacy: "Sprouto Privacy Policy. Understand how we protect your personal account details, shipping addresses, and payment transactions securely.",
    terms: "Sprouto Terms of Service and Conditions. Read our policies on online ordering, live nursery shipments, and general use guidelines.",
    track: "Track your Sprouto plant order. View real-time shipment status and estimated delivery time for your healthy green companions."
  };

  const seoDescription = descriptions[path] || `Learn more about our ${title.toLowerCase()} policies and plant nursery guidelines at Sprouto.`;

  // Map each path to a highly relevant local picture and descriptive icon
  const pageDetails: Record<string, { image: string; alt: string; icon: React.ComponentType<any> }> = {
    shipping: {
      image: why_choose_bg,
      alt: "Safe plant delivery and eco-friendly packaging setup at Sprouto Nursery",
      icon: Truck
    },
    returns: {
      image: our_story,
      alt: "Beautiful and healthy green house plants collection showing high quality",
      icon: RefreshCw
    },
    privacy: {
      image: premium_interior_plants,
      alt: "A clean, modern, and secure indoor plant setup in a living room",
      icon: Shield
    },
    terms: {
      image: about_hero,
      alt: "Sprouto organic plant nursery and greenhouse background",
      icon: FileText
    },
    faq: {
      image: blog_easy_indoor,
      alt: "Easy to maintain house plants and plant care tips",
      icon: HelpCircle
    },
    track: {
      image: why_choose_bg,
      alt: "Sprouto parcel packaging and safe delivery details",
      icon: MapPin
    }
  };

  const activePage = pageDetails[path] || {
    image: premium_interior_plants,
    alt: "Beautiful organic house plants from Sprouto Plant Studio",
    icon: CheckCircle2
  };

  const PageIcon = activePage.icon;

  // Rich formatted content for each path
  const contentSections: Record<string, Array<{ heading: string; text: string }>> = {
    shipping: [
      {
        heading: "Pan-India Secure Shipping",
        text: "We ship fresh, healthy live plants to over 20,000+ pin codes across India. Our nurseries prepare and package orders with maximum caution to prevent any damage during transit."
      },
      {
        heading: "Innovative Eco-Friendly Packaging",
        text: "Each plant is cocooned in a proprietary, biodegradable hexagonal mesh wrap that retains soil moisture and ensures proper airflow. Pots are secured firmly inside heavy-duty recycled corrugated cardboard boxes."
      },
      {
        heading: "Delivery Timelines & Cost",
        text: "All orders above ₹999 are eligible for free shipping. For orders below ₹999, a nominal delivery fee of ₹99 is charged. Major metros receive orders within 3-5 business days, while other locations take 5-7 business days."
      },
      {
        heading: "Real-Time Courier Tracking",
        text: "As soon as your green companions leave our greenhouse, you will receive an SMS and email notification containing a tracking link so you can monitor the transit in real-time."
      }
    ],
    returns: [
      {
        heading: "24-Hour Freshness Guarantee",
        text: "Our highest priority is ensuring your plants arrive in absolute pristine health. If a plant arrives severely damaged, droopy, or dead on arrival, we will send a free replacement immediately."
      },
      {
        heading: "Simple Replacement Process",
        text: "Simply take 2-3 clear photos or a short video of the damaged plant in its original packaging within 24 hours of delivery and email them to support@sprouto.in. Our team will verify the case and dispatch a fresh replacement."
      },
      {
        heading: "Return of Non-Plant Items",
        text: "For non-live products such as planters, soil mixes, watering cans, or accessories, we offer a 14-day refund or replacement policy. Items must be unused and in their original packaging."
      },
      {
        heading: "No Return of Healthy Live Plants",
        text: "Because plants are delicate living organisms that degrade under stressful travel conditions, we cannot accept returns on healthy plants that match the description and order details."
      }
    ],
    privacy: [
      {
        heading: "Data Protection & Privacy Policy",
        text: "We respect your digital privacy. Sprouto is fully committed to protecting your personal coordinates, billing information, and browsing history. Your personal details are never sold or rented to third parties."
      },
      {
        heading: "Information We Collect",
        text: "When you browse our plant shop, register an account, or order plants, we collect necessary personal details such as your full name, shipping address, contact phone number, and email address."
      },
      {
        heading: "Secure Payment Security",
        text: "All online payment transactions are processed through highly secure, 256-bit SSL encrypted industry-leading payment gateways. We never store or have access to your raw credit/debit card numbers or passwords."
      },
      {
        heading: "Use of Cookies",
        text: "We use cookies to save your active shopping cart items, remember your region and postal code, and deliver a personalized botanical shopping experience."
      }
    ],
    terms: [
      {
        heading: "Terms of Service Agreement",
        text: "Welcome to Sprouto. By accessing our platform, purchasing our plants, or booking our horticultural services, you agree to be bound by our general terms of service and delivery guidelines."
      },
      {
        heading: "Horticultural and Live Plant Variation",
        text: "Please note that plants are natural living entities. There will always be natural variations in size, leaf count, variegation, and floral stage from the idealized pictures shown on our website."
      },
      {
        heading: "Order Cancellation Policy",
        text: "You can cancel any plant order free of charge within 12 hours of placing it, as long as it has not yet been processed or packed at our nurseries. Please email support@sprouto.in to request cancellation."
      },
      {
        heading: "Limitation of Liability",
        text: "Sprouto shall not be liable for any subsequent decline in a plant's health due to improper watering, lack of appropriate light, or pest infestations once the 15-day care support window has closed."
      }
    ],
    faq: [
      {
        heading: "Do you ship healthy plants to my doorstep?",
        text: "Yes! Sprouto provides reliable, nationwide delivery of fresh and healthy indoor/outdoor plants in India, complete with safe eco-friendly packaging and immediate plant care support."
      },
      {
        heading: "How do I care for my plants after they arrive?",
        text: "Every single plant order from Sprouto comes with a beautifully illustrated physical care instruction card. You can also visit our blog or consult with our plant doctor experts for any questions regarding watering or lighting."
      },
      {
        heading: "What are the easiest plants for beginners?",
        text: "Our recommended easy-care indoor plants are the Snake Plant, ZZ Plant, Jade Plant, and Golden Pothos. They are highly resilient, require low water, and thrive beautifully in standard indoor environments."
      }
    ],
    track: [
      {
        heading: "Check Shipment Status",
        text: "You can track the live shipping status of your plant order by clicking on the link sent via SMS and email immediately after dispatch. Most orders arrive within 3-5 business days."
      },
      {
        heading: "Track by Order ID",
        text: "For instant tracking, please type your Order ID (#ORD-XXXXXX) into our support contact form or email our logistics team directly at support@sprouto.in for prompt responses."
      }
    ]
  };

  const sections = contentSections[path] || [
    {
      heading: `Sprouto ${title} Guidelines`,
      text: "At Sprouto, we are committed to providing premium, hand-picked healthy plants, sustainable packaging, and exceptional care support. We aim to foster a community of happy plant parents across India."
    },
    {
      heading: "Contact Support",
      text: "If you have any specific questions regarding our guidelines, nursery policies, or delivery terms, please feel free to reach out to our dedicated plant care team via our Contact page or email us directly at support@sprouto.in."
    }
  ];

  return (
    <div className="flex flex-col pb-24 relative min-h-screen bg-cream">
      <SEO
        title={`${title} | Sprouto Plant Nursery - Growing a Greener Future`}
        description={seoDescription}
      />
      
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

      <div className="relative z-10 w-full flex flex-col">
        {/* Banner Hero */}
        <section className="relative py-20 mb-12 bg-forest-dark overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
            <img
              src={activePage.image}
              alt={activePage.alt}
              loading="eager"
              referrerPolicy="no-referrer"
                            className="w-full h-full object-cover brightness-75"
              onError={(e) => {
                const imgKey = path === "faq" ? "why_choose_bg" : path;
                (e.target as HTMLImageElement).src = getFallbackPageImage(imgKey);
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 to-forest-dark/90" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-light-green/20 backdrop-blur-md border border-light-green/30 flex items-center justify-center text-light-green mx-auto mb-2"
            >
              <PageIcon className="w-8 h-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-black text-white tracking-tight drop-shadow-sm"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto uppercase tracking-widest font-semibold"
            >
              Sprouto Organic Plant Nursery India
            </motion.p>
          </div>
        </section>

        {/* Main Content Split Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-sm border border-light-green-subtle/50 space-y-8"
            >
              {sections.map((section, index) => (
                <div key={index} className="space-y-3 group border-b border-neutral-100 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-light-green-subtle/40 flex items-center justify-center text-forest flex-shrink-0">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-forest-dark group-hover:text-forest transition-colors">
                      {section.heading}
                    </h2>
                  </div>
                  <p className="text-neutral-600 leading-relaxed pl-11 text-[15px]">
                    {section.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Right Picture Column */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 lg:sticky lg:top-24 space-y-6"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg border border-light-green-subtle relative group bg-light-green-subtle">
                <img
                  src={activePage.image}
                  alt={activePage.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[1.01] contrast-[1.01]"
                  onError={(e) => {
                    const imgKey = path === "faq" ? "why_choose_bg" : path;
                    (e.target as HTMLImageElement).src = getFallbackPageImage(imgKey);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white text-left space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-light-green/95 text-forest-dark text-xs font-bold rounded-full uppercase tracking-wider">
                      <Leaf className="w-3.5 h-3.5" /> Hand-picked Live Plants
                    </div>
                    <h3 className="text-xl font-serif font-semibold drop-shadow-sm">
                      Premium Botanical Standard
                    </h3>
                    <p className="text-neutral-200 text-xs leading-relaxed max-w-xs">
                      Our plants are continuously nurtured inside specialized environmental greenhouses to guarantee optimum root system and foliage health.
                    </p>
                  </div>
                </div>
              </div>

              {/* Safe Checkout Badges */}
              <div className="bg-white p-6 rounded-3xl border border-light-green-subtle/50 shadow-sm flex items-center justify-around gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Lock className="w-6 h-6 text-forest mb-2" />
                  <span className="text-[10px] font-bold text-forest uppercase tracking-widest block">SSL Secured</span>
                  <span className="text-xs text-neutral-500">Safe Transactions</span>
                </div>
                <div className="h-8 w-[1px] bg-neutral-200" />
                <div className="flex flex-col items-center">
                  <Truck className="w-6 h-6 text-forest mb-2" />
                  <span className="text-[10px] font-bold text-forest uppercase tracking-widest block">Safe Shipping</span>
                  <span className="text-xs text-neutral-500">Transit Protected</span>
                </div>
                <div className="h-8 w-[1px] bg-neutral-200" />
                <div className="flex flex-col items-center">
                  <Calendar className="w-6 h-6 text-forest mb-2" />
                  <span className="text-[10px] font-bold text-forest uppercase tracking-widest block">Care Support</span>
                  <span className="text-xs text-neutral-500">15-Day Experts Help</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple Helper Leaf Icon
function Leaf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
      <path d="M9 22v-4H5" />
    </svg>
  );
}
