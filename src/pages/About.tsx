import React from "react";
import { motion } from "motion/react";
import { Target, Zap, Users, ShieldCheck, Heart } from "lucide-react";
import { SEO } from "../components/layout/SEO";
import { getFallbackPageImage, getFallbackTeamImage } from "../utils/imageFallback";

import about_hero from "../assets/images/about_hero_1781760403233.jpg";
import our_story from "../assets/images/our_story_1781760418266.jpg";
import attractive_botanical_bg from "../assets/images/attractive_botanical_bg_1781852734148.jpg";

import anime_botanical_founder from "../assets/images/anime_botanical_founder_1781890544247.jpg";

const team = [
  {
    name: "AIMAN SIDDIQUI",
    role: "Founder",
    image: anime_botanical_founder,
  },
];

const values = [
  {
    icon: Heart,
    title: "Sustainability",
    desc: "Promoting environmentally responsible practices in everything we do.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    desc: "Delivering only the healthiest and most vibrant plants to your door.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Fostering a supportive network of plant lovers everywhere.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "Constantly improving our packaging and delivery for a better experience.",
  },
];

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Sprouto - Premium Online Plant Store",
    "description": "Learn more about Sprouto, founded by Aiman Siddiqui in 2022. Discover our mission to provide hand-picked healthy plants, sustainable packaging, and expert care support across India.",
    "publisher": {
      "@type": "Organization",
      "name": "Sprouto",
      "url": "https://sprouto.in"
    }
  };

  return (
    <div className="flex flex-col pb-24 relative min-h-screen">
      <SEO
        title="About Us | Sprouto Plant Store - Growing a Greener Future"
        description="Learn more about Sprouto, founded by Aiman Siddiqui in 2022. Discover our mission to provide hand-picked healthy plants, sustainable packaging, and expert care support across India."
        schema={schema}
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
        <section className="relative py-32 mb-16 bg-cream overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none">
            <img
              src={about_hero}
              alt="Sprouto Plant Studio background showing lush indoor green plants"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
              width={1200}
              height={600}
                            className="w-full h-full object-cover brightness-[1.01] contrast-[1.01]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = getFallbackPageImage("about_hero");
              }}
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-forest-dark via-forest to-forest-dark tracking-tight drop-shadow-sm pb-2"
            >
              Growing a Greener <br />
              <span className="italic font-light text-forest">
                Future with Indoor Plants
              </span>{" "}
              for Home
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-forest-dark/80 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              We believe in the power of plants to transform spaces and uplift
              lives.
            </motion.p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Our Story */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-3xl overflow-hidden relative"
            >
              <img
                src={our_story}
                alt="A beautiful collection of potted green plants representing our story at Sprouto"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                width={600}
                height={600}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 brightness-[1.01] contrast-[1.01]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getFallbackPageImage("our_story");
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-sm font-bold tracking-widest text-forest uppercase">
                Our Story
              </h2>
              <h3 className="text-4xl font-serif font-bold text-forest-dark">
                Bringing Nature into Your Living Space
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Sprouto was founded in 2022 with a clear mission: making plant
                parenting accessible, educational, and enjoyable for everyone. What started as a modest collection of green companions on a small apartment balcony has blossomed into India's premier online plant nursery.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Whether you want to buy healthy indoor plants or find low-maintenance options that are easy to care for, we are here to help. We carefully source our plants from conscious growers and use sustainable packaging to ensure that when you buy house plants online, bringing nature indoors doesn't harm the earth outdoors.
              </p>
            </motion.div>
          </section>

          {/* Mission & Vision */}
          <section className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-light-green-subtle p-10 rounded-3xl cursor-default"
            >
              <Target className="w-12 h-12 text-forest mb-6" />
              <h3 className="text-2xl font-serif font-bold text-forest-dark mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-700 text-lg">
                "To inspire greener lifestyles by providing healthy plants,
                expert guidance, and sustainable gardening solutions."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white border border-light-green-subtle p-10 rounded-3xl shadow-sm cursor-default"
            >
              <Zap className="w-12 h-12 text-forest mb-6" />
              <h3 className="text-2xl font-serif font-bold text-forest-dark mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-700 text-lg">
                "To become the most trusted online plant nursery where people can buy healthy plants online at affordable prices in India, while
                promoting environmental responsibility."
              </p>
            </motion.div>
          </section>

          {/* Values */}
          <section className="text-center">
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-widest text-forest uppercase mb-2">
                Why We Do It
              </h2>
              <h3 className="text-4xl font-serif font-bold text-forest-dark">
                Our Core Values
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    key={value.title}
                    className="bg-white p-8 rounded-2xl border border-light-green-subtle shadow-sm hover:shadow-lg hover:border-forest/30 transition-all cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-light-green/20 flex items-center justify-center text-forest mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-forest-dark mb-3">
                      {value.title}
                    </h4>
                    <p className="text-neutral-600">{value.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Founder */}
          <section className="mb-12">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-forest uppercase mb-2">
                The Visionary Behind Sprouto
              </h2>
              <h3 className="text-4xl font-serif font-bold text-forest-dark">
                Meet Our Founder
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h4 className="text-3xl font-serif font-bold text-forest-dark mb-1">
                  {team[0].name}
                </h4>
                <p className="text-forest text-lg font-medium mb-6">
                  {team[0].role}
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  As a passionate plant enthusiast, Aiman founded Sprouto with a
                  clear vision: to reconnect people with nature in their
                  everyday spaces. What started as a personal collection of rare
                  indoor plants for home quickly blossomed into a community-driven
                  online plant nursery aiming to share the joy of plant parenthood.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  With a strong belief in sustainable practices and mindful
                  living, Aiman curates each collection of indoor plants to ensure that every
                  plant not only looks beautiful but also actively enhances indoor air quality and brings natural vitality into your home.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group mx-auto max-w-sm w-full"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative bg-light-green-subtle shadow-lg">
                  <img
                    src={team[0].image}
                    alt={`${team[0].name} - Founder and Plant Curator of Sprouto`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    width={400}
                    height={533}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 brightness-[1.01] contrast-[1.01]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getFallbackTeamImage(team[0].name);
                    }}
                  />
                  <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/10 transition-colors duration-300" />
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
