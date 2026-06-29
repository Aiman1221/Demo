import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from "lucide-react";
import hero_interior from "../assets/images/hero_interior_1781760270638.jpg";
import attractive_botanical_bg from "../assets/images/attractive_botanical_bg_1781852734148.jpg";
import { SEO } from "../components/layout/SEO";
import { getFallbackPageImage } from "../utils/imageFallback";

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Standard delivery via our trusted courier partners usually takes 3-5 business days within major cities, and 5-7 days for other regions.",
  },
  {
    q: "Do you provide plant care instructions?",
    a: "Yes! Every plant order comes with a detailed physical care card. You can also access our digital care guides on our blog or contact our support.",
  },
  {
    q: "What is your return policy for plants?",
    a: "If your plant arrives dead or heavily damaged, please email us a photo within 24 hours of delivery and we will send a free replacement. We cannot accept returns on healthy plants.",
  },
  {
    q: "Do you accept bulk orders for events or offices?",
    a: 'Absolutely. We offer special pricing for corporate gifting and bulk orders. Please use the contact form and select "Bulk Inquiry" as the subject.',
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="flex flex-col pb-24 relative min-h-screen">
      <SEO
        title="Contact Us & FAQs | Sprouto Plant Nursery India"
        description="Get in touch with Sprouto. Find answers to common questions about plant delivery across India, custom bulk orders, eco-friendly packaging, and plant care support."
        schema={faqSchema}
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
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mb-16 px-4">
          <div className="absolute inset-0 -z-10">
            <img
              src={hero_interior}
              alt="Sprouto Plant Studio Showroom showing a beautiful interior display of organic houseplants"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
              width={1200}
              height={400}
                            className="w-full h-full object-cover brightness-[1.01] contrast-[1.01]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = getFallbackPageImage("hero_interior");
              }}
            />
            <div className="absolute inset-0 bg-forest-dark/70" />
          </div>
          <div className="max-w-4xl mx-auto text-center z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight"
            >
              Plant Nursery Near Me: Let's Grow Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/90 max-w-2xl mx-auto"
            >
              Have a question about your order, need plant care advice, or just
              want to say hi? We're here for you.
            </motion.p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-md border border-light-green-subtle/50 hover:border-light-green hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/20">
                <h3 className="text-2xl font-serif font-bold text-forest-dark mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-light-green-subtle p-3 rounded-full text-forest shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-dark mb-1">
                        Address
                      </h4>
                      <p className="text-neutral-600">
                        123 Green Valley Road,
                        <br />
                        New Delhi, India 110001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-light-green-subtle p-3 rounded-full text-forest shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-dark mb-1">Phone</h4>
                      <a
                        href="tel:+919876543210"
                        className="text-neutral-600 hover:text-forest transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-light-green-subtle p-3 rounded-full text-forest shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-dark mb-1">Email</h4>
                      <a
                        href="mailto:hello@sprouto.com"
                        className="text-neutral-600 hover:text-forest transition-colors"
                      >
                        hello@sprouto.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-light-green-subtle p-3 rounded-full text-forest shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-dark mb-1">
                        Business Hours
                      </h4>
                      <p className="text-neutral-600">
                        Mon–Sat: 9 AM–7 PM
                        <br />
                        Sun: 10 AM–5 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-light-green-subtle rounded-[2.5rem] h-64 overflow-hidden border border-light-green-subtle/50 hover:border-light-green hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/20 relative group">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Location map of Sprouto Plant Studio in New Delhi, India"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  width={600}
                  height={256}
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 brightness-[1.01] contrast-[1.01]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getFallbackPageImage("attractive_botanical_bg");
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-4 py-2 rounded-full shadow-md font-semibold text-forest flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-5 h-5" /> View on Google Maps
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-md border border-light-green-subtle/50 hover:border-light-green hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/20">
              <h3 className="text-3xl font-serif font-bold text-forest-dark mb-8">
                Send us a Message
              </h3>
              {isSubmitted ? (
                <div className="bg-light-green-subtle/50 text-forest-dark p-6 rounded-2xl border border-light-green-subtle flex flex-col items-center justify-center text-center space-y-4">
                  <div className="bg-white p-4 rounded-full text-green-500 shadow-sm">
                    <Send className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-neutral-600">
                      Thank you for reaching out. Our team will assist you with your indoor plant purchases and delivery inquiries within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-semibold text-forest-dark"
                        htmlFor="name"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        minLength={2}
                        maxLength={50}
                        pattern="^[A-Za-z\s\-]+$"
                        title="Please enter a valid name (letters only)."
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-neutral-50 border border-light-green-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-semibold text-forest-dark"
                        htmlFor="email"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-neutral-50 border border-light-green-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-semibold text-forest-dark"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        pattern="^\+?[0-9\s\-\(\)]{10,20}$"
                        title="Please enter a valid phone number (e.g., +91 98765 43210)"
                        placeholder="+91"
                        className="w-full px-4 py-3 bg-neutral-50 border border-light-green-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-semibold text-forest-dark"
                        htmlFor="subject"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-50 border border-light-green-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-neutral-600 appearance-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Order Status">Order Status</option>
                        <option value="Plant Care Advice">
                          Plant Care Advice
                        </option>
                        <option value="Bulk Order Inquiry">
                          Bulk Order Inquiry
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-semibold text-forest-dark"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      minLength={10}
                      maxLength={1000}
                      title="Please enter a message between 10 and 1000 characters."
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 bg-neutral-50 border border-light-green-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-forest text-white px-8 py-4 rounded-xl font-semibold hover:bg-forest-dark transition-all flex items-center justify-center gap-2 w-full sm:w-auto mt-4"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-24 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-forest-dark mb-4">
                Plant Home Delivery Near Me: Frequently Asked Questions
              </h2>
              <p className="text-neutral-600">
                Find quick answers to common questions about our online plant nursery services and green deliveries.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/10 ${openFaq === idx ? "border-forest shadow-md" : "border-light-green-subtle/50 hover:border-light-green"}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between font-semibold text-forest-dark text-left"
                  >
                    <span className="text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-forest transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === idx ? "auto" : 0,
                      opacity: openFaq === idx ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-neutral-600 leading-relaxed border-t border-light-green/20 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
