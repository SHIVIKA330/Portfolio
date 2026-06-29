"use client";

import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";

export default function Resume() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="resume" className="relative bg-bg-surface text-text-primary py-24 overflow-hidden border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-8"
      >
        <div>
          <span className="font-mono text-accent text-[10px] tracking-widest uppercase block">
            Curriculum Vitae / 08
          </span>
          <h2 className="font-display font-light text-4xl mt-2">
            Resume
          </h2>
        </div>

        <p className="text-text-muted text-sm md:text-base max-w-md leading-relaxed font-sans font-light">
          My complete academic background, hackathon shipping logs, and technical competencies are compiled in a single-page document.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-text-primary text-bg-base font-sans text-xs uppercase tracking-widest font-semibold px-8 py-3.5 hover:bg-accent hover:text-bg-base transition-colors duration-300"
          >
            <Download size={13} />
            Download PDF
          </a>
          <a
            href="https://www.linkedin.com/in/shivikajain330/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary px-8 py-3.5 transition-colors duration-300 font-sans text-xs uppercase tracking-widest font-semibold"
          >
            View LinkedIn
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Last updated */}
        <span className="text-[10px] font-mono text-text-faint mt-2 uppercase tracking-wider">
          Last updated: June 2026
        </span>
      </motion.div>
    </section>
  );
}
