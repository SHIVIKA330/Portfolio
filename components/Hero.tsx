"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Code, Cpu, ShieldAlert, Sparkles, Terminal } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "Hackathon Builder",
  "TensorFlow Contributor",
  "Fintech × AI Builder",
  "Open Source Enthusiast",
];

const capabilities = [
  { icon: <Terminal size={14} />, label: "Next.js & TypeScript" },
  { icon: <Cpu size={14} />, label: "TensorFlow C API" },
  { icon: <Code size={14} />, label: "Supabase & Razorpay" },
  { icon: <ShieldAlert size={14} />, label: "AI Gestures & Vision" },
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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20 max-w-6xl mx-auto"
    >
      {/* Background Breathing Glow Orb - Positioned dynamically behind content */}
      <div className="absolute right-[10%] top-[25%] pointer-events-none z-0">
        <div className="glow-orb" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10"
      >
        {/* Left Column: Asymmetrical Heading and Tags */}
        <div className="lg:col-span-8 flex flex-col items-start text-left space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Minimal tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 font-mono text-[10px] uppercase tracking-widest">
              <Sparkles size={10} /> Currently Shipping In 2026
            </div>
            
            {/* Giant Title */}
            <h1
              className="font-display font-extrabold text-[#F0EFF8] leading-[0.9] tracking-tight cursor select-none"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              Shivika Jain
            </h1>

            {/* Typewriter role cycling */}
            <div className="h-8 flex items-center font-mono text-base md:text-lg font-medium text-mint-400 tracking-wide mt-2">
              {shouldReduceMotion ? (
                <span>→ Full-Stack Developer & AI Builder</span>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.25 }}
                  >
                    → {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              )}
            </div>
          </motion.div>

          {/* Thin horizontal editorial divider */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-xl h-[1px] bg-gradient-to-r from-border to-transparent"
          />

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-base md:text-lg max-w-xl leading-relaxed"
          >
            I build at the intersection of{" "}
            <span className="text-text-primary font-semibold hover:text-violet-400 transition-colors">fintech</span>,{" "}
            <span className="text-text-primary font-semibold hover:text-mint-400 transition-colors">AI</span>, and{" "}
            <span className="text-text-primary font-semibold hover:text-violet-400 transition-colors">social impact</span>.
            Solving real-world problems through robust full-stack software and open source contributions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-gradient-primary hover:opacity-95 text-bg-base font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(124,111,255,0.25)] hover:shadow-[0_0_30px_rgba(124,111,255,0.4)] cursor-pointer"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center border border-border hover:border-violet-500/50 hover:bg-bg-elevated/40 text-text-primary font-medium px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column: Handcrafted Terminal-Style Interactive Dashboard */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="bg-bg-surface border border-border rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
            {/* Subtle glow border */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
            
            {/* Window header */}
            <div className="flex items-center gap-2 mb-6 border-b border-border/40 pb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <span className="font-mono text-[10px] text-text-muted ml-4 select-none">
                capabilities.config.json
              </span>
            </div>

            {/* Core Capability Chips */}
            <div className="space-y-4">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  whileHover={shouldReduceMotion ? {} : { x: 6, borderColor: "rgba(124,111,255,0.3)" }}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-border/80 bg-bg-elevated/40 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="text-violet-400">
                    {cap.icon}
                  </div>
                  <span className="font-mono text-xs text-text-muted group-hover:text-text-primary transition-colors">
                    {cap.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Simulated mini stats line */}
            <div className="mt-8 pt-4 border-t border-border/40 flex justify-between items-center text-[10px] font-mono text-text-muted">
              <span>STATUS: READY</span>
              <span className="animate-pulse text-mint-400">● ACTIVE</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
