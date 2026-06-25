"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "Hackathon Builder",
  "TensorFlow Contributor",
  "Fintech × AI Builder",
  "Open Source Enthusiast",
];

const floatingChips = [
  { label: "Next.js", top: "18%", left: "12%", delay: 0 },
  { label: "TypeScript", top: "24%", right: "12%", delay: 0.8 },
  { label: "Java", top: "42%", left: "6%", delay: 1.5 },
  { label: "Python", top: "52%", right: "8%", delay: 2.3 },
  { label: "Supabase", bottom: "22%", left: "10%", delay: 3.1 },
  { label: "TensorFlow", bottom: "28%", right: "14%", delay: 1.2 },
  { label: "OpenCV", bottom: "12%", left: "22%", delay: 2.7 },
  { label: "Claude API", bottom: "14%", right: "26%", delay: 0.4 },
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20"
    >
      {/* Background Breathing Glow Orb */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="glow-orb" />
      </div>

      {/* Floating Skill Chips (desktop only) */}
      {!shouldReduceMotion &&
        floatingChips.map((chip, idx) => (
          <motion.div
            key={idx}
            style={{
              position: "absolute",
              top: chip.top,
              left: chip.left,
              right: chip.right,
              bottom: chip.bottom,
            }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: chip.delay,
            }}
            className="hidden lg:block z-10 px-4 py-2 rounded-full border border-border bg-bg-elevated/40 backdrop-blur-sm text-text-muted hover:border-violet-500/50 hover:text-text-primary transition-colors duration-300 font-mono text-xs cursor-default select-none shadow-sm"
          >
            {chip.label}
          </motion.div>
        ))}

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-3xl flex flex-col items-center gap-6"
      >
        {/* Name with blinking cursor */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold text-[#F0EFF8] leading-none cursor select-none"
          style={{ fontSize: "clamp(3.2rem, 8.5vw, 6.8rem)" }}
        >
          Shivika Jain
        </motion.h1>

        {/* Typewriter role cycling */}
        <motion.div
          variants={itemVariants}
          className="h-8 flex items-center justify-center font-mono text-lg md:text-xl font-medium tracking-wide text-mint-400"
        >
          {shouldReduceMotion ? (
            <span>→ Full-Stack Developer & AI Builder</span>
          ) : (
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                → {roles[currentRoleIndex]}
              </motion.span>
            </AnimatePresence>
          )}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-text-muted text-base md:text-lg max-w-xl leading-relaxed"
        >
          I build at the intersection of{" "}
          <span className="text-text-primary font-medium">fintech</span>,{" "}
          <span className="text-text-primary font-medium">AI</span>, and{" "}
          <span className="text-text-primary font-medium">social impact</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 bg-gradient-primary hover:opacity-95 text-bg-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(124,111,255,0.3)] hover:shadow-[0_0_30px_rgba(124,111,255,0.5)] cursor-pointer"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center border border-border hover:border-violet-500/50 hover:bg-bg-elevated/40 text-text-primary font-medium px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Floating Skill Chips (mobile/tablet flex layout) */}
        <motion.div
          variants={itemVariants}
          className="lg:hidden flex flex-wrap justify-center gap-2 mt-8 max-w-md"
        >
          {floatingChips.map((chip, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-full border border-border bg-bg-elevated/40 text-text-muted font-mono text-[11px]"
            >
              {chip.label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Pulse Chevron Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none hidden md:block"
      >
        <ChevronDown className="text-text-muted" size={28} />
      </motion.div>
    </section>
  );
}
