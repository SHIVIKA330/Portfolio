"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="bg-bg-base/40 backdrop-blur-sm text-text-primary py-28 px-6 md:px-12 border-t border-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-[10px] tracking-widest uppercase block">
            Portfolio / 03
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl mt-2">
            Selected <span className="italic font-light">Works</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* CARD 1: OFFSHIFT - FEATURED CARD (Spans 2 cols) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 bg-bg-surface backdrop-blur-md border border-border hover:border-border-hover p-6 md:p-8 flex flex-col justify-between transition-colors duration-300 min-h-[360px]"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block text-[9px] font-mono text-accent uppercase tracking-widest border border-accent/30 px-2.5 py-0.5 bg-accent/5">
                  Featured Project
                </span>
                <span className="text-[10px] font-mono text-text-muted">DEVTrails × Guidewire &apos;26</span>
              </div>
              
              <h3 className="font-display font-medium text-2xl md:text-3xl text-text-primary">
                OffShift
              </h3>
              <p className="text-xs font-mono text-accent">
                Parametric income insurance for gig delivery workers
              </p>
              <p className="text-sm text-text-muted leading-relaxed font-sans font-light">
                Auto-payouts triggered by food delivery app outages and extreme weather disruptions. Zero claims processing overhead: payouts are fired instantly using Razorpay UPI endpoints.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4">
              {["Next.js", "TypeScript", "Supabase", "Razorpay API", "Upstash"].map((tech) => (
                <span key={tech} className="text-[9px] font-mono text-text-muted bg-bg-base border border-border px-2 py-0.5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/60">
              <div className="flex items-center gap-3 text-[11px] font-mono text-text-muted">
                <span className="flex items-center gap-1"><Star size={11} className="text-accent" /> 3 stars</span>
                <span className="flex items-center gap-1"><GitFork size={11} /> 2 forks</span>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/SHIVIKA330/OffShift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href="https://offshift-9iok.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: PHISHING DETECTOR */}
          <motion.div
            variants={cardVariants}
            className="bg-bg-surface backdrop-blur-md border border-border hover:border-border-hover p-6 flex flex-col justify-between transition-colors duration-300 min-h-[360px]"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest block">Extension / 02</span>
              <h3 className="font-display font-medium text-xl text-text-primary">
                Phishing Detector
              </h3>
              <p className="text-xs font-mono text-accent">Chrome Extension for real-time security</p>
              <p className="text-xs text-text-muted leading-relaxed font-sans font-light">
                ML-powered URL and content classification engine running inside a Chrome extension popup context. Flags phishing threat payloads instantly as you browse.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4">
              {["JavaScript", "ML Engine", "Chrome API"].map((tech) => (
                <span key={tech} className="text-[9px] font-mono text-text-muted bg-bg-base border border-border px-2 py-0.5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/60">
              <div className="text-[11px] font-mono text-text-muted flex items-center gap-1">
                <Star size={11} className="text-accent" /> 1 star
              </div>
              <a
                href="https://github.com/SHIVIKA330/Phishing-Detector"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon size={14} />
              </a>
            </div>
          </motion.div>

          {/* CARD 3: ET-CONCIERGE */}
          <motion.div
            variants={cardVariants}
            className="bg-bg-surface backdrop-blur-md border border-border hover:border-border-hover p-6 flex flex-col justify-between transition-colors duration-300 min-h-[360px]"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">AI Agent / 03</span>
                <span className="text-[9px] font-mono text-accent uppercase tracking-widest font-semibold border border-accent/20 px-2 py-0.2 bg-accent/5">ET Hack &apos;26</span>
              </div>
              <h3 className="font-display font-medium text-xl text-text-primary">
                ET-Concierge — Financial Twin AI
              </h3>
              <p className="text-xs font-mono text-accent">Emotion-aware financial twin concierge</p>
              <p className="text-xs text-text-muted leading-relaxed font-sans font-light">
                Built on NVIDIA Llama 3.1 70B. Features custom silence intelligence and emotion detection to dynamically adapt interaction timings to user vocal distress scores.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4">
              {["Python", "NVIDIA API", "Llama 3.1"].map((tech) => (
                <span key={tech} className="text-[9px] font-mono text-text-muted bg-bg-base border border-border px-2 py-0.5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/60">
              <span className="text-[10px] font-mono text-text-muted">NVIDIA & Llama 70B</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/SHIVIKA330/ET-Concierge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href="https://et-concierge.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: QUINT BEAUTY - FEATURED CARD (Spans 2 cols) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 bg-bg-surface backdrop-blur-md border border-border hover:border-border-hover p-6 md:p-8 flex flex-col justify-between transition-colors duration-300 min-h-[360px]"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block text-[9px] font-mono text-accent uppercase tracking-widest border border-accent/30 px-2.5 py-0.5 bg-accent/5">
                  Featured Project
                </span>
                <span className="text-[10px] font-mono text-text-muted">Serverless E-Commerce &apos;26</span>
              </div>
              
              <h3 className="font-display font-medium text-2xl md:text-3xl text-text-primary">
                Quint Beauty
              </h3>
              <p className="text-xs font-mono text-accent">
                Serverless E-Commerce Platform
              </p>
              <p className="text-sm text-text-muted leading-relaxed font-sans font-light">
                Scripted a modular client-side shopping cart with localStorage persistence and built a contact form pathway backed by a custom PHP mailer. Backed by serverless Firestore data structures.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4">
              {["Firebase", "Firestore", "JavaScript", "HTML/CSS", "PHP Mailer", "Git"].map((tech) => (
                <span key={tech} className="text-[9px] font-mono text-text-muted bg-bg-base border border-border px-2 py-0.5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/60">
              <div className="flex items-center gap-3 text-[11px] font-mono text-text-muted">
                <span className="flex items-center gap-1"><Star size={11} className="text-accent" /> 2 stars</span>
                <span className="flex items-center gap-1"><GitFork size={11} /> 1 fork</span>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/SHIVIKA330/quintbeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href="https://quintbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARD 5: CAREERSEED */}
          <motion.div
            variants={cardVariants}
            className="bg-bg-surface backdrop-blur-md border border-border hover:border-border-hover p-6 flex flex-col justify-between transition-colors duration-300 min-h-[360px]"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest block">Full-Stack / 05</span>
              <h3 className="font-display font-medium text-xl text-text-primary">
                CareerSeed
              </h3>
              <p className="text-xs font-mono text-accent">Resume builder & matching finder</p>
              <p className="text-xs text-text-muted leading-relaxed font-sans font-light">
                One-stop platform designed for freshers and laid-off professionals. Facilitates layout formatting, schema checks, and exports optimized resume PDFs instantly.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4">
              {["Python", "Streamlit", "PDF Kit"].map((tech) => (
                <span key={tech} className="text-[9px] font-mono text-text-muted bg-bg-base border border-border px-2 py-0.5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/60">
              <span className="text-[10px] font-mono text-text-muted">Python & Streamlit</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/SHIVIKA330/CareerSeed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href="https://careerseed.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
