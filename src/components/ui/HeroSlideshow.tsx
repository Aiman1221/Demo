import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getFallbackPageImage } from '../../utils/imageFallback';

interface HeroSlideshowProps {
  images: string[];
  intervalDelay?: number;
}

export function HeroSlideshow({ images, intervalDelay = 5000 }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalDelay);
    return () => clearInterval(interval);
  }, [images.length, intervalDelay]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0.5, y: 0.5 }); // Reset to center
  };

  // Convert mouse position to translation:
  // When cursor is at extreme right (x=1), xOffset should be negative (move image left to reveal right edge if scaled)
  // We'll scale the image by 1.1 on hover, which gives 10% overflow.
  // Translation range: from -5% to 5% (to stay within the 1.1 scale boundaries without showing background)
  const scale = isHovering ? 1.1 : 1.0;
  const xOffset = isHovering ? (mousePosition.x - 0.5) * -5 : 0;
  const yOffset = isHovering ? (mousePosition.y - 0.5) * -5 : 0;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-neutral-100"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            src={images[currentIndex]}
            alt={`Sprouto Indoor Plant Studio Showcase - Slide ${currentIndex + 1} of ${images.length}`}
            className="w-full h-full object-cover select-none brightness-[1.02] contrast-[1.02] saturate-[1.01]"
            fetchPriority={currentIndex === 0 ? "high" : "auto"}
            decoding="async"
            referrerPolicy="no-referrer"
            animate={{
              scale,
              x: `${xOffset}%`,
              y: `${yOffset}%`
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 30,
              mass: 0.5
            }}
                        onError={(e) => {
              const keys = ["hero_interior", "about_hero", "why_choose_bg", "best_sellers_bg", "testimonials_bg"];
              const key = keys[currentIndex % keys.length];
              (e.target as HTMLImageElement).src = getFallbackPageImage(key);
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
