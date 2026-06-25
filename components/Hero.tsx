"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "Hackathon Builder",
  "TensorFlow Contributor",
  "Fintech × AI Builder",
  "Open Source Enthusiast",
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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-retro-green text-retro-cream overflow-hidden flex flex-col justify-between pt-32 pb-24 px-6 md:px-12 z-10"
    >
      {/* Background Dots Grid Overlay with Retro Green Accent */}
      <div className="absolute inset-0 bg-dots opacity-[0.03] pointer-events-none" />

      {/* Retro-Orange Spotlights */}
      <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-retro-orange/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[400px] h-[400px] rounded-full bg-retro-orange/5 blur-[80px] pointer-events-none" />

      {/* Repeating Outlined Background Text Rows drifting left and right */}
      <div className="absolute inset-0 flex flex-col justify-center space-y-12 select-none pointer-events-none opacity-5 z-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap font-serif text-8xl md:text-[10rem] text-stroke-cream leading-none"
        >
          SHIVIKA JAIN • FULL STACK DEVELOPER • HACKATHON BUILDER • SHIVIKA JAIN • FULL STACK DEVELOPER •
        </motion.div>
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap font-serif text-8xl md:text-[10rem] text-stroke-cream leading-none"
        >
          TENSORFLOW CONTRIBUTOR • FINTECH • AI VISION • TENSORFLOW CONTRIBUTOR • FINTECH • AI VISION •
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 my-auto"
      >
        {/* Left Column: Headline and Biography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
          <motion.div variants={itemVariants} className="space-y-3">
            {/* Hand-crafted Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-retro-orange/30 bg-retro-orange/5 text-retro-orange font-mono text-xs uppercase tracking-widest font-semibold">
              <Sparkles size={12} className="animate-pulse" />
              Currently Shipping In 2026
            </div>

            {/* Giant Elegant Serif Title */}
            <h1 className="font-serif text-6xl md:text-8xl xl:text-9xl leading-[0.9] tracking-tight">
              Shivika <br />
              <span className="text-retro-orange">Jain</span>
            </h1>

            {/* Typewriter role cycling */}
            <div className="h-8 flex items-center font-mono text-base md:text-lg text-retro-cream/90 tracking-wide mt-2 border-l-2 border-retro-orange pl-3">
              {shouldReduceMotion ? (
                <span>→ Full-Stack Developer & AI Builder</span>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    → {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              )}
            </div>
          </motion.div>

          {/* Thin separation line */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-xl h-[1px] bg-gradient-to-r from-retro-cream/20 via-retro-cream/10 to-transparent"
          />

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-retro-cream/80 text-base md:text-lg max-w-xl leading-relaxed font-sans"
          >
            I build at the intersection of{" "}
            <span className="text-retro-orange font-semibold hover:underline decoration-2 transition-all">fintech</span>,{" "}
            <span className="text-retro-orange font-semibold hover:underline decoration-2 transition-all">AI</span>, and{" "}
            <span className="text-retro-orange font-semibold hover:underline decoration-2 transition-all">social impact</span>.
            Solving real-world problems through robust full-stack software and open source contributions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-retro-orange text-retro-dark font-serif font-bold px-8 py-4 rounded-xl border-2 border-retro-dark shadow-[4px_4px_0px_#111111] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 cursor-pointer text-center"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 border-2 border-retro-cream text-retro-cream font-serif font-bold px-8 py-4 rounded-xl hover:bg-retro-cream hover:text-retro-green transition-all duration-300 cursor-pointer text-center"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column: Handcrafted Portrait Collage */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Asymmetric offset frame */}
          <div className="relative w-full max-w-[320px] aspect-[4/5] md:aspect-[3/4]">
            {/* Orange Offset Card behind the image */}
            <div className="absolute inset-0 bg-retro-orange border-2 border-retro-dark rounded-2xl translate-x-4 translate-y-4" />
            
            {/* Black border backdrop for contrast */}
            <div className="absolute inset-0 bg-retro-dark rounded-2xl translate-x-2 translate-y-2 border border-retro-cream/10" />

            {/* Actual Portrait Container */}
            <div className="absolute inset-0 bg-[#D4C3B3] border-2 border-retro-dark rounded-2xl overflow-hidden group">
              <Image
                src="/shivika-portrait.png"
                alt="Shivika Jain Portrait"
                fill
                priority
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              />
              
              {/* Overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-retro-dark/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Ticket-like overlay tag */}
              <div className="absolute bottom-4 left-4 bg-retro-dark/90 backdrop-blur-sm border border-retro-cream/10 text-retro-orange text-[9px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-retro-orange animate-pulse" />
                STATUS: IN LAB
              </div>
            </div>

            {/* Decorative retro star symbol */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-retro-cream border-2 border-retro-dark text-retro-orange rounded-full flex items-center justify-center text-sm font-bold shadow-[2px_2px_0px_#111111]">
              ✦
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Spin Badge (Scroll indicator) */}
      <div className="relative flex justify-center mt-8 lg:mt-0 z-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="relative w-24 h-24 flex items-center justify-center cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="transparent"
            />
            <text className="font-mono text-[7px] uppercase fill-retro-cream/70 tracking-[0.16em] font-bold">
              <textPath xlinkHref="#circlePath" startOffset="0%">
                scroll down • explore work • scroll down • explore work •
              </textPath>
            </text>
          </svg>
          <div className="w-10 h-10 rounded-full bg-retro-orange border-2 border-retro-dark flex items-center justify-center text-retro-dark font-bold hover:scale-110 transition-transform">
            ↓
          </div>
        </motion.div>
      </div>
    </section>
  );
}
