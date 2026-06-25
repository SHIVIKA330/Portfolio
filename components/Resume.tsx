"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, FileText, ArrowUpRight } from "lucide-react";

export default function Resume() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="resume" className="relative py-24 overflow-hidden border-t border-border/30">
      {/* Background Radial Gradient Strip */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,111,255,0.03),transparent_60%)] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8"
      >
        <div>
          <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.2em] font-semibold">
            CURRICULUM VITAE
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-text-primary">
            Resume
          </h2>
        </div>

        {/* Hand-crafted Mock Resume Preview Card */}
        <motion.div
          whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
          className="w-full max-w-md bg-bg-surface border border-border rounded-2xl p-6 shadow-2xl relative text-left group overflow-hidden transition-all duration-300 hover:border-violet-500/20"
        >
          {/* Subtle design accents */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-display font-bold text-lg text-text-primary">Shivika Jain</h3>
              <p className="text-xs font-mono text-mint-400">Full-Stack Developer</p>
            </div>
            <FileText className="text-violet-400" size={24} />
          </div>

          {/* Skeleton Resume Fields */}
          <div className="space-y-4">
            <div>
              <div className="h-2 w-1/4 bg-bg-elevated rounded mb-2" />
              <div className="h-1.5 w-full bg-bg-elevated/50 rounded mb-1" />
              <div className="h-1.5 w-5/6 bg-bg-elevated/50 rounded" />
            </div>
            <div>
              <div className="h-2 w-1/3 bg-bg-elevated rounded mb-2" />
              <div className="h-1.5 w-full bg-bg-elevated/50 rounded mb-1" />
              <div className="h-1.5 w-3/4 bg-bg-elevated/50 rounded" />
            </div>
            <div>
              <div className="h-2 w-1/5 bg-bg-elevated rounded mb-2" />
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="h-3 w-12 bg-bg-elevated rounded-full" />
                <span className="h-3 w-16 bg-bg-elevated rounded-full" />
                <span className="h-3 w-10 bg-bg-elevated rounded-full" />
                <span className="h-3 w-14 bg-bg-elevated rounded-full" />
              </div>
            </div>
          </div>

          {/* Inner hover indicator */}
          <div className="absolute inset-0 bg-bg-base/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="px-4 py-2 rounded-xl bg-bg-elevated border border-border text-xs font-mono text-text-primary flex items-center gap-1.5">
              Preview Mode <FileText size={14} />
            </span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-gradient-primary hover:opacity-95 text-bg-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(124,111,255,0.2)] hover:shadow-[0_0_25px_rgba(124,111,255,0.4)]"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/shivikajain330/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-border hover:border-violet-500/50 hover:bg-bg-elevated/40 text-text-primary font-medium px-8 py-3.5 rounded-full transition-all duration-300"
          >
            View on LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Last updated */}
        <span className="text-xs font-mono text-text-muted mt-2">
          Last updated: June 2026
        </span>
      </motion.div>
    </section>
  );
}
