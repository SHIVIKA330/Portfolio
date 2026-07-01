"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-bg-base text-text-primary flex flex-col justify-between pt-36 pb-16 px-6 md:px-12 z-10"
    >
      <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 md:space-y-12"
        >
          {/* Label Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-medium">
              Shivika Jain — CS Student & Developer
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl"
          >
            Building things that work—from APIs to TensorFlow PRs.
          </motion.h1>

          {/* Tagline Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-base md:text-lg max-w-xl leading-relaxed font-sans"
          >
            I&apos;m a computer science student at GLA University. Right now, I&apos;m focused on writing clean backend code, hacking on mobile/web projects with Next.js and Supabase, and trying to get more code merged into TensorFlow.
          </motion.p>

          {/* Action Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 items-center pt-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-text-primary text-bg-base font-sans text-xs uppercase tracking-widest font-semibold px-6 py-3.5 hover:bg-accent hover:text-bg-base transition-colors duration-300"
            >
              Explore Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="text-xs font-mono uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors py-2 border-b border-border hover:border-text-primary"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Bottom Page Indicator */}
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center text-[10px] font-mono text-text-faint tracking-widest border-t border-border pt-6">
        <span>LOC // MATHURA, UP</span>
        <button
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-text-primary transition-colors uppercase cursor-pointer"
        >
          SCROLL DOWN ↓
        </button>
      </div>
    </section>
  );
}
