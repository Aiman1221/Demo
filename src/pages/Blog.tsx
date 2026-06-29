import React, { useState } from "react";
import { motion } from "motion/react";
import { Search, ArrowRight, Calendar, ArrowLeft } from "lucide-react";
import { SEO } from "../components/layout/SEO";
import { getFallbackBlogImage, getFallbackPageImage } from "../utils/imageFallback";

import blog_easy_indoor from "../assets/images/blog_easy_indoor_plants_1781762411867.jpg";
import blog_water_plants from "../assets/images/blog_water_plants_1781762432960.jpg";
import hero_interior from "../assets/images/hero_interior_1781760270638.jpg";
import balcony_garden from "../assets/images/our_story_1781760418266.jpg";
import greenhouse_summer from "../assets/images/about_hero_1781760403233.jpg";
import attractive_botanical_bg from "../assets/images/attractive_botanical_bg_1781852734148.jpg";

const articles = [
  {
    id: 1,
    title: "10 Easy Indoor Plants for Beginners: Indoor Plant Easy to Take Care Of",
    excerpt:
      "Starting your plant journey? These resilient green companions are almost impossible to kill and look great in any space.",
    content:
      "Starting your plant journey? These resilient green companions are almost impossible to kill and look great in any space. \n\n1. Snake Plant: A hardy plant that thrives in low light and irregular watering.\n2. ZZ Plant: Known for its waxy, smooth leaves that reflect sunlight.\n3. Pothos: Perfect for hanging baskets and easy to propagate.",
    image: getFallbackBlogImage("10 easy indoor plants"),
    date: "June 12, 2026",
    category: "Plant Care",
  },
  {
    id: 2,
    title: "How to Water Your Plants Correctly: Jade Plant Care & Lucky Bamboo Plant Care",
    excerpt:
      'Overwatering is the number one cause of plant death. Learn the simple "soak and dry" method to keep your leafy friends thriving.',
    content:
      'Overwatering is the number one cause of plant death. Learn the simple "soak and dry" method to keep your leafy friends thriving.\n\nThe golden rule of watering is: when in doubt, wait. Check the top 2 inches of soil with your finger before watering. If it feels dry, it\'s time to give them a drink.',
    image: getFallbackBlogImage("how to water your plants"),
    date: "June 05, 2026",
    category: "Guides",
  },
  {
    id: 3,
    title: "Benefits of Having Plants at Home",
    excerpt:
      "From air purification to stress reduction, discover the scientific benefits of bringing nature into your living space.",
    content:
      "From air purification to stress reduction, discover the scientific benefits of bringing nature into your living space. \n\nStudies show that interacting with indoor plants can lower physiological and psychological stress. Plus, some plants naturally filter out indoor air pollutants.",
    image: getFallbackBlogImage("benefits of having plants"),
    date: "May 28, 2026",
    category: "Wellness",
  },
  {
    id: 4,
    title: "Creating a Balcony Garden on a Budget",
    excerpt:
      "Transform your tiny outdoor space into a lush oasis without breaking the bank using these clever DIY ideas and resilient plants.",
    content:
      "Transform your tiny outdoor space into a lush oasis without breaking the bank using these clever DIY ideas and resilient plants.\n\nUse recycled containers, try seed-starting exchanges with neighbors, and focus on fast-growing vines to maximize your vertical space.",
    image: getFallbackBlogImage("creating a balcony garden"),
    date: "May 20, 2026",
    category: "Outdoor",
  },
  {
    id: 5,
    title: "Seasonal Plant Care Guide: Summer Edition",
    excerpt:
      "As temperatures rise, your plants need extra attention. Follow this guide to prevent sunburn and dehydration during hot months.",
    content:
      "As temperatures rise, your plants need extra attention. Follow this guide to prevent sunburn and dehydration during hot months.\n\nIncrease humidity, keep plants away from direct A/C drafts, and water early in the morning so they can stay hydrated during the hottest parts of the day.",
    image: getFallbackBlogImage("seasonal plant care guide"),
    date: "May 15, 2026",
    category: "Seasonal",
  },
  {
    id: 6,
    title: "Best Small Trees for Apartments",
    excerpt:
      "Want a dramatic look in a small space? Try these apartment-friendly indoor trees that add vertical interest.",
    content:
      "Want a dramatic look in a small space? Try these apartment-friendly indoor trees that add vertical interest.\n\nFicus Audrey and Money Tree are excellent choices that are relatively easy to care for and won't outgrow standard ceiling heights too quickly.",
    image: getFallbackBlogImage("best small trees for apartments"),
    date: "May 10, 2026",
    category: "Guides",
  },
];

const categories = [
  "All",
  "Plant Care",
  "Guides",
  "Wellness",
  "Outdoor",
  "Seasonal",
];

export default function Blog() {
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
    null,
  );

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedArticles = showAllArticles
    ? filteredArticles
    : filteredArticles.slice(0, 4);

  const selectedArticle = articles.find((a) => a.id === selectedArticleId);

  const seoTitle = selectedArticle
    ? `${selectedArticle.title} | Sprouto Plant Blog`
    : "Plant Care Tips, DIY Guides & Green Living Blog | Sprouto";

  const seoDesc = selectedArticle
    ? selectedArticle.excerpt
    : "Cultivate your plant parent skills with Sprouto's green living blog. Learn easy watering techniques, benefits of indoor plants, low light tips, and balcony garden ideas.";

  const blogSchema = selectedArticle 
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": selectedArticle.title,
        "description": selectedArticle.excerpt,
        "image": selectedArticle.image,
        "datePublished": "2026-06-12",
        "author": {
          "@type": "Person",
          "name": "Sprouto Plant Expert"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sprouto",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sprouto.in/assets/logo.png"
          }
        }
      }
    : {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Plant Care Tips & Green Living Blog | Sprouto",
        "description": seoDesc,
        "publisher": {
          "@type": "Organization",
          "name": "Sprouto"
        },
        "blogPost": articles.map(art => ({
          "@type": "BlogPosting",
          "headline": art.title,
          "description": art.excerpt,
          "image": art.image
        }))
      };

  return (
    <div className="flex flex-col pb-24 relative min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDesc}
        schema={blogSchema}
        ogImage={selectedArticle ? selectedArticle.image : undefined}
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
              alt="Sprouto plant studio blog background showing decorative home gardens"
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
              Plant Care Tips & Green Living Guide
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/90 max-w-2xl mx-auto"
            >
              Discover expert advice on plant care, find easy-to-grow houseplants, and explore premium gardening tips from our online nursery to create a vibrant, green lifestyle.
            </motion.p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0 space-y-10 lg:sticky lg:top-24 self-start lg:order-1">
              {/* Search */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-light-green-subtle/50 hover:border-light-green hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/20">
                <h3 className="font-serif text-xl font-bold text-forest-dark mb-4">
                  Search
                </h3>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full bg-light-green-subtle/30 border border-light-green/30 rounded-full pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-light-green-subtle/50 hover:border-light-green hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/20">
                <h3 className="font-serif text-xl font-bold text-forest-dark mb-4">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {categories.map((cat, idx) => (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`flex items-center justify-between w-full group ${selectedCategory === cat ? "text-forest font-semibold" : "text-neutral-600 hover:text-forest"}`}
                      >
                        <span>{cat}</span>
                        <span
                          className={`text-xs py-1 px-2 rounded-full transition-colors ${selectedCategory === cat ? "bg-light-green text-forest-dark" : "bg-light-green-subtle group-hover:bg-light-green/50 text-forest"}`}
                        >
                          {idx === 0
                            ? articles.length
                            : articles.filter(
                                (a) => cat === "All" || a.category === cat,
                              ).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-light-green-subtle/50 hover:border-light-green hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/20">
                <h3 className="font-serif text-xl font-bold text-forest-dark mb-6">
                  Popular Posts
                </h3>
                <div className="space-y-6">
                  {[articles[1], articles[2], articles[4]].map((post) => (
                    <div
                      key={`popular-${post.id}`}
                      onClick={() => setSelectedArticleId(post.id)}
                      className="flex gap-4 group cursor-pointer"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-light-green-subtle flex-shrink-0">
                        <img
                          src={post.image}
                          alt={`Popular plant care article: ${post.title}`}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          width={80}
                          height={80}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-[1.01] contrast-[1.01]"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = getFallbackBlogImage(post.title);
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-dark text-sm mb-1 group-hover:text-forest transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-neutral-400">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:order-2">
              {selectedArticle ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl p-8 border border-light-green-subtle"
                >
                  <button
                    onClick={() => setSelectedArticleId(null)}
                    className="flex items-center gap-2 text-forest hover:text-forest-dark mb-6 font-medium transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to Articles
                  </button>
                  <div className="overflow-hidden rounded-2xl mb-8">
                    <img
                      src={selectedArticle.image}
                      alt={`Detailed view for: ${selectedArticle.title}`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      width={800}
                      height={400}
                                            className="w-full max-h-[500px] object-cover rounded-2xl brightness-[1.01] contrast-[1.01]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = getFallbackBlogImage(selectedArticle.title);
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                    <span className="bg-light-green-subtle text-forest px-3 py-1 rounded-full font-semibold uppercase tracking-wider text-xs">
                      {selectedArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {selectedArticle.date}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-dark mb-6">
                    {selectedArticle.title}
                  </h2>
                  <div className="prose prose-lg prose-forest max-w-none text-neutral-600 whitespace-pre-wrap">
                    {selectedArticle.content}
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayedArticles.length > 0 ? (
                      displayedArticles.map((article, idx) => (
                        <motion.article
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (idx % 2) * 0.1 }}
                          key={article.id}
                          className={
                            idx === 0
                              ? "md:col-span-2 group cursor-pointer bg-white/95 backdrop-blur-sm rounded-[2.5rem] p-6 shadow-sm border border-light-green-subtle/50 hover:border-light-green hover:shadow-2xl hover:-translate-y-2 active:scale-100 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/20 flex flex-col justify-between h-full"
                              : "group cursor-pointer bg-white/95 backdrop-blur-sm rounded-[2.5rem] p-6 shadow-sm border border-light-green-subtle/50 hover:border-light-green hover:shadow-2xl hover:-translate-y-2 active:scale-100 transition-all duration-500 ring-1 ring-forest/5 hover:ring-forest/20 flex flex-col justify-between h-full"
                          }
                          onClick={() => setSelectedArticleId(article.id)}
                        >
                          <div>
                            <div
                              className={`overflow-hidden rounded-2xl mb-6 bg-light-green-subtle relative ${idx === 0 ? "aspect-[2/1] md:aspect-[3/1]" : "aspect-[4/3]"}`}
                            >
                              <img
                                src={article.image}
                                alt={`Article about ${article.title} - Plant care tips and guide`}
                                loading="lazy"
                                decoding="async"
                                referrerPolicy="no-referrer"
                                width={idx === 0 ? 800 : 400}
                                height={idx === 0 ? 400 : 300}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[1.01] contrast-[1.01]"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = getFallbackBlogImage(article.title);
                                }}
                              />
                              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-forest px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
                                {article.category}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-600 mb-3">
                              <Calendar className="w-4 h-4" /> {article.date}
                            </div>
                            <h2
                              className={`font-serif font-bold text-forest-dark mb-3 group-hover:text-forest transition-colors ${idx === 0 ? "text-3xl" : "text-2xl"}`}
                            >
                              {article.title}
                            </h2>
                            <p className="text-neutral-600 mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>
                          </div>
                          <div>
                            <button className="flex items-center gap-2 text-forest font-semibold group-hover:gap-3 transition-all mt-2">
                              Read More <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.article>
                      ))
                    ) : (
                      <div className="md:col-span-2 text-center py-20 text-neutral-600">
                        No articles found matching your criteria.
                      </div>
                    )}
                  </div>
                  {filteredArticles.length > 4 && (
                    <div className="mt-12 flex justify-center">
                      <button
                        onClick={() => setShowAllArticles(!showAllArticles)}
                        className="bg-light-green-subtle text-forest hover:bg-forest hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
                      >
                        {showAllArticles
                          ? "Show Less Articles"
                          : "Load More Articles"}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
