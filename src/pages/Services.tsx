import React from "react";
import { motion } from "motion/react";
import { 
  HeartPulse, 
  Sparkles, 
  Building2, 
  Calendar, 
  Smile, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { SEO } from "../components/layout/SEO";
import attractive_botanical_bg from "../assets/images/attractive_botanical_bg_1781852734148.jpg";
import { getFallbackServiceImage } from "../utils/imageFallback";

// Import local premium plant assets for services
import outdoor_category from "../assets/images/outdoor_category_1781760376251.jpg";
import blog_water_plants from "../assets/images/blog_water_plants_1781762432960.jpg";
import premium_interior_plants from "../assets/images/premium_interior_plants_1781852749145.jpg";
import our_story from "../assets/images/our_story_1781760418266.jpg";

export default function Services() {
  const servicesList = [
    {
      id: "landscaping",
      title: "Balcony & Garden Makeovers",
      icon: Sparkles,
      description: "Convert empty balconies, patios, and terrace areas into lush green sanctuaries. Our landscape architects design personalized layouts tailored to your sunlight conditions and space limitations.",
      benefits: [
        "Personalized CAD layouts and 3D visual concepts",
        "Curated selection of durable weather-resistant plants",
        "Eco-friendly, long-lasting premium planters",
        "Expert professional setup & complete cleanup"
      ],
      price: "Starts at ₹4,999",
      bgImage: getFallbackServiceImage("garden consultation")
    },
    {
      id: "doctor",
      title: "Plant Care & Doctor Consultations",
      icon: HeartPulse,
      description: "Are your plants looking a bit yellow, droopy, or suffering from pests? Get in-person or virtual consultations with our certified horticulturists to diagnose, treat, and rejuvenate your green friends.",
      benefits: [
        "Soil nutrition, moisture, and pH level audits",
        "Custom organic pest management and treatment formulas",
        "Personalized watering schedules & light adjustments",
        "Follow-up reports with precise care directions"
      ],
      price: "Starts at ₹499 / session",
      bgImage: getFallbackServiceImage("plant doctor")
    },
    {
      id: "corporate",
      title: "Corporate & Office Greenery",
      icon: Building2,
      description: "Boost employee morale, productivity, and indoor air quality with modern, low-maintenance office plants. We design, install, and manage corporate plantscapes of all scales.",
      benefits: [
        "Air-purifying plant collections verified by NASA research",
        "Minimalist aesthetic designs to match corporate interiors",
        "Flexible plants leasing or direct purchase options",
        "Weekly/Bi-weekly care & repotting visits included"
      ],
      price: "Custom quotation based on layout",
      bgImage: getFallbackServiceImage("corporate greenery")
    },
    {
      id: "maintenance",
      title: "Regular Maintenance & Repotting",
      icon: Calendar,
      description: "Leave the heavy lifting to us. Our friendly garden experts visit your home to repot root-bound plants, trim overgrown leaves, add organic fertilizers, and ensure perfect soil health.",
      benefits: [
        "Professional repotting with high-nutrient premium soil mixes",
        "Pruning, leaf polishing, and aesthetic training",
        "Slow-release organic vermicompost enrichment",
        "Complete safety checks for root health and pests"
      ],
      price: "Starts at ₹999 / visit",
      bgImage: getFallbackServiceImage("plant maintenance")
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Premium Plant Care & Garden Services",
    "provider": {
      "@type": "Organization",
      "name": "Sprouto",
      "url": "https://sprouto.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sprouto Services",
      "itemListElement": servicesList.map((srv, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": srv.title,
          "description": srv.description
        }
      }))
    }
  };

  return (
    <div className="flex flex-col pb-24 relative min-h-screen bg-cream overflow-hidden">
      <SEO
        title="Premium Plant & Gardening Services | Sprouto India"
        description="Transform your home or workplace with Sprouto's professional plant care services. We provide custom balcony makeovers, office landscaping, certified plant doctors, and expert repotting services."
        schema={schema}
      />

      {/* Decorative Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-multiply transition-opacity duration-1000 z-0"
        style={{
          backgroundImage: `url(${attractive_botanical_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Header section with H1 */}
      <section className="bg-forest-dark py-24 px-4 text-center text-white relative overflow-hidden shadow-lg z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-sans uppercase font-bold tracking-[0.25em] text-light-green mb-3 block"
          >
            Sprouto Garden Studio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black tracking-tight mb-6"
          >
            Premium Services & Plant Home Delivery Near Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed"
          >
            At Sprouto, we don't just deliver gorgeous live plants; we cultivate thriving spaces. Explore our personalized design, consultation, and maintenance packages.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-12 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm border border-forest/5 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:-translate-y-1 active:scale-100 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/15 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.bgImage} 
                      alt={`Professional ${service.title} - expert plant and garden care services | Sprouto`} 
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      width={600}
                      height={256}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[1.01] contrast-[1.01]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = getFallbackServiceImage(service.title);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-forest/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg">
                          <IconComponent className="w-6 h-6 animate-pulse-slow" />
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-white tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-neutral-600 mb-6 leading-relaxed text-[15px]">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <h3 className="text-xs font-bold text-forest uppercase tracking-widest mb-2">
                        What's Included:
                      </h3>
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-forest/5 bg-light-green-subtle/10 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                      Starting Price
                    </span>
                    <span className="text-lg font-bold text-forest-dark font-serif">
                      {service.price}
                    </span>
                  </div>
                  <a
                    href="mailto:support@sprouto.in?subject=Service Inquiry: "
                    className="flex items-center gap-2 bg-forest text-white hover:bg-forest-dark px-5 py-3 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="bg-white/80 backdrop-blur-md border-t border-b border-forest/5 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-light-green-subtle/50 rounded-full flex items-center justify-center text-forest mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-forest-dark mb-2">
                100% Organic & Safe
              </h3>
              <p className="text-sm text-neutral-600 max-w-xs leading-relaxed">
                We only use natural potting soil mixes, organic bio-fertilizers, and cold-pressed neem oils for pest control. Enjoy premium healthy plants delivered right to your home from our trusted nursery.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-light-green-subtle/50 rounded-full flex items-center justify-center text-forest mb-4">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-forest-dark mb-2">
                Certified Horticulturists
              </h3>
              <p className="text-sm text-neutral-600 max-w-xs leading-relaxed">
                Our plant experts provide professional guidance, ensuring your plants remain healthy, vibrant, and simple to maintain.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-light-green-subtle/50 rounded-full flex items-center justify-center text-forest mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-forest-dark mb-2">
                Post-Service Support
              </h3>
              <p className="text-sm text-neutral-600 max-w-xs leading-relaxed">
                Enjoy 15 days of free follow-up support to ask any questions about your plants' care, watering, and ongoing nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center relative z-10">
        <h3 className="text-3xl font-serif font-bold text-forest-dark mb-4">
          Need a Tailored Gardening Solution?
        </h3>
        <p className="text-neutral-600 mb-8 max-w-xl mx-auto leading-relaxed">
          From full corporate terrace design proposals to continuous regular maintenance schedules, write to us and we'll arrange a dedicated plant home delivery service for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:support@sprouto.in"
            className="bg-forest text-white hover:bg-forest-dark px-8 py-4 rounded-xl font-semibold transition-all shadow-md inline-block"
          >
            Email: support@sprouto.in
          </a>
          <a
            href="tel:+91-9999999999"
            className="bg-light-green-subtle text-forest hover:bg-forest hover:text-white px-8 py-4 rounded-xl font-semibold transition-all inline-block"
          >
            Call: +91 9999999999
          </a>
        </div>
      </section>
    </div>
  );
}
