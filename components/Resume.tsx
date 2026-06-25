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
    <section id="resume" className="relative bg-retro-cream text-retro-dark py-24 overflow-hidden border-t-2 border-retro-dark">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.04] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8"
      >
        <div>
          <span className="font-mono text-retro-olive text-xs tracking-[0.2em] font-semibold">
            CURRICULUM VITAE // 08
          </span>
          <h2 className="font-serif font-bold text-4xl mt-2">
            Resume
          </h2>
        </div>

        {/* Hand-crafted Mock Resume Preview Card */}
        <motion.div
          whileHover={shouldReduceMotion ? {} : { y: -4 }}
          className="w-full max-w-md bg-retro-cream border-2 border-retro-dark rounded-2xl p-6 relative text-left group overflow-hidden transition-all duration-300 shadow-[6px_6px_0px_#FFA31A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          {/* Accent Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-retro-orange" />
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-serif font-bold text-xl text-retro-dark">Shivika Jain</h3>
              <p className="text-xs font-mono text-retro-orange">Full-Stack Developer</p>
            </div>
            <FileText className="text-retro-orange" size={24} />
          </div>

          {/* Skeleton Resume Fields */}
          <div className="space-y-4">
            <div>
              <div className="h-2 w-1/4 bg-retro-dark/15 rounded mb-2" />
              <div className="h-1.5 w-full bg-retro-dark/5 rounded mb-1" />
              <div className="h-1.5 w-5/6 bg-retro-dark/5 rounded" />
            </div>
            <div>
              <div className="h-2 w-1/3 bg-retro-dark/15 rounded mb-2" />
              <div className="h-1.5 w-full bg-retro-dark/5 rounded mb-1" />
              <div className="h-1.5 w-3/4 bg-retro-dark/5 rounded" />
            </div>
            <div>
              <div className="h-2 w-1/5 bg-retro-dark/15 rounded mb-2" />
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="h-3.5 w-12 bg-retro-dark/10 rounded-full" />
                <span className="h-3.5 w-16 bg-retro-dark/10 rounded-full" />
                <span className="h-3.5 w-10 bg-retro-dark/10 rounded-full" />
                <span className="h-3.5 w-14 bg-retro-dark/10 rounded-full" />
              </div>
            </div>
          </div>

          {/* Inner hover indicator */}
          <div className="absolute inset-0 bg-retro-dark/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="px-4 py-2 rounded-xl bg-retro-cream border-2 border-retro-dark text-xs font-mono text-retro-dark flex items-center gap-1.5 font-bold shadow-[2px_2px_0px_#111111]">
              Preview Mode <FileText size={14} />
            </span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-retro-dark hover:bg-retro-orange text-retro-cream hover:text-retro-dark border-2 border-retro-dark font-serif font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-[4px_4px_0px_#FFA31A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/shivikajain330/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-retro-dark text-retro-dark font-serif font-bold px-8 py-3.5 rounded-xl hover:bg-retro-dark hover:text-retro-cream transition-all duration-300"
          >
            View on LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Last updated */}
        <span className="text-xs font-mono text-retro-olive mt-2">
          Last updated: June 2026
        </span>
      </motion.div>
    </section>
  );
}
