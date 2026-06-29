import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sprout } from "lucide-react";

interface PuzzleLogoLoaderProps {
  onComplete: () => void;
}

export const PuzzleLogoLoader: React.FC<PuzzleLogoLoaderProps> = ({
  onComplete,
}) => {
  const [stage, setStage] = useState<
    "assembling" | "joined" | "revealingText" | "completed"
  >("assembling");

  useEffect(() => {
    // Stage transition timers
    const joinTimer = setTimeout(() => {
      setStage("joined");
    }, 1800); // Assemble pieces for 1.8s

    const textTimer = setTimeout(() => {
      setStage("revealingText");
    }, 2600); // Show text 0.8s after joining

    const completeTimer = setTimeout(() => {
      setStage("completed");
      setTimeout(onComplete, 600); // Allow exit animations to finish
    }, 4500); // General transition completes after 4.5s

    return () => {
      clearTimeout(joinTimer);
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Framer Motion spring transition for organic movement
  const springConfig = { type: "spring", stiffness: 60, damping: 15 };

  // Definition of puzzle piece animations
  // Each piece will fly in from a specific corner, with a rotating offset representing misaligned puzzle pieces
  const pieces = [
    {
      id: "top-left",
      initial: { x: -200, y: -200, rotate: -45, opacity: 0 },
      animate:
        stage !== "assembling"
          ? { x: 0, y: 0, rotate: 0, opacity: 1 }
          : { x: -15, y: -15, rotate: -15, opacity: 0.9 },
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Top-left quadrant
      bgGradient: "from-forest to-forest-dark/80",
    },
    {
      id: "top-right",
      initial: { x: 200, y: -200, rotate: 45, opacity: 0 },
      animate:
        stage !== "assembling"
          ? { x: 0, y: 0, rotate: 0, opacity: 1 }
          : { x: 15, y: -15, rotate: 15, opacity: 0.9 },
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Top-right quadrant
      bgGradient: "from-forest/90 to-light-green",
    },
    {
      id: "bottom-left",
      initial: { x: -200, y: 200, rotate: -35, opacity: 0 },
      animate:
        stage !== "assembling"
          ? { x: 0, y: 0, rotate: 0, opacity: 1 }
          : { x: -15, y: 15, rotate: -12, opacity: 0.9 },
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Bottom-left quadrant
      bgGradient: "from-forest-dark to-light-green-subtle/80",
    },
    {
      id: "bottom-right",
      initial: { x: 200, y: 200, rotate: 35, opacity: 0 },
      animate:
        stage !== "assembling"
          ? { x: 0, y: 0, rotate: 0, opacity: 1 }
          : { x: 15, y: 15, rotate: 12, opacity: 0.9 },
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Bottom-right quadrant
      bgGradient: "from-light-green to-forest",
    },
  ];

  return (
    <AnimatePresence>
      {stage !== "completed" && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-cream flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle nature-inspired grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#2c3e2d_0.08rem,transparent_0.08rem)] [background-size:1.5rem_1.5rem] opacity-[0.04]" />

          {/* Glowing background bloom */}
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{
              opacity:
                stage === "joined" || stage === "revealingText" ? 0.6 : 0.2,
            }}
            className="absolute w-[400px] h-[400px] rounded-full bg-light-green filter blur-[80px] -z-10 mix-blend-multiply"
          />

          <div className="relative flex flex-col items-center">
            {/* Puzzle Assembly Container */}
            <div className="relative w-44 h-44 mb-10 flex items-center justify-center">
              {/* Outer orbit rings to emphasize focal dynamic */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
                animate={{ scale: 1, opacity: 0.15, rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-56 h-56 border-2 border-dashed border-forest rounded-full"
              />
              <motion.div
                initial={{ scale: 1.1, opacity: 0, rotate: 360 }}
                animate={{ scale: 1, opacity: 0.08, rotate: 0 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border border-forest rounded-full"
              />

              {/* Puzzle Pieces layout */}
              <div className="grid grid-cols-2 gap-2 w-36 h-36">
                {pieces.map((p, index) => (
                  <motion.div
                    key={p.id}
                    initial={p.initial}
                    animate={p.animate}
                    transition={springConfig}
                    className={`relative w-full h-full bg-gradient-to-br ${p.bgGradient} rounded-2xl shadow-lg border border-white/20`}
                    style={{
                      // Custom puzzle clip path mask effect simulating jigsaw interlocking connectors
                      borderRadius:
                        p.id === "top-left"
                          ? "2.5rem 0.75rem 0.75rem 0.75rem"
                          : p.id === "top-right"
                            ? "0.75rem 2.5rem 0.75rem 0.75rem"
                            : p.id === "bottom-left"
                              ? "0.75rem 0.75rem 0.75rem 2.5rem"
                              : "0.75rem 0.75rem 2.5rem 0.75rem",
                    }}
                  >
                    {/* Interior stylized puzzle connector shapes */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <div className="w-8 h-8 rounded-full border-2 border-white" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center joined Sprout Icon - pops when completely joined */}
              <AnimatePresence>
                {(stage === "joined" || stage === "revealingText") && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0, rotate: 180, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 12,
                      delay: 0.1,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Integrated badge lock animation overlay */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute w-40 h-40 bg-gradient-to-br from-forest to-light-green rounded-full shadow-2xl border border-white/20 -z-10"
                    />
                    <div className="w-36 h-36 bg-gradient-to-br from-forest to-light-green rounded-full shadow-2xl flex items-center justify-center border border-white/30">
                      <Sprout className="w-20 h-20 text-white drop-shadow-[0_4px_10px_rgba(44,62,45,0.4)]" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sprouto branding typography fade in */}
            <div className="h-16 flex flex-col items-center">
              <AnimatePresence>
                {(stage === "revealingText" || stage === "joined") && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                  >
                    {/* Beautifully paired display & tracking typography */}
                    <h1 className="font-serif font-black text-4xl text-forest tracking-wider leading-none mb-1">
                      SPROUTO
                    </h1>
                    <p className="text-xs font-sans uppercase font-extrabold tracking-[0.25em] text-forest/70">
                      Plant Studio
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Minimalist interactive jigsaw status message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === "assembling" ? 0.6 : 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-mono text-forest/60 tracking-widest uppercase mt-4"
            >
              Assembling elements...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
