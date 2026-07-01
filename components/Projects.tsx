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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" as const },
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
          transition={{ duration: 0.25 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-[10px] tracking-widest uppercase block">
            Selected Work
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
            className="md:col-span-2 bg-bg-surface border border-border hover:border-border-hover p-6 md:p-8 flex flex-col justify-between transition-colors duration-300 min-h-[360px]"
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
                Gig workers lose money when apps crash or the weather gets dangerous. We built this during a 24-hour hackathon to pay them automatically using weather APIs and instant Razorpay transfers. I had to configure Supabase database triggers so that payments go out the second an outage is reported.
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
            className="bg-bg-surface border border-border hover:border-border-hover p-6 flex flex-col justify-between transition-colors duration-300 min-h-[360px]"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest block">Chrome Extension</span>
              <h3 className="font-display font-medium text-xl text-text-primary">
                Phishing Detector
              </h3>
              <p className="text-xs font-mono text-accent">Chrome Extension for real-time security</p>
              <p className="text-xs text-text-muted leading-relaxed font-sans font-light">
                A Chrome extension that stops you from opening malicious links. It uses a small, local machine learning model to read the page URL and domain details. I chose to bundle the model directly in the extension so it works offline and doesn&apos;t send user history to any external server.
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
              <a
                  href="https://demo-fishing.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={14} />
                </a>
            </div>
          </motion.div>

          {/* CARD 3: ET-CONCIERGE */}
          <motion.div
            variants={cardVariants}
            className="bg-bg-surface border border-border hover:border-border-hover p-6 flex flex-col justify-between transition-colors duration-300 min-h-[360px]"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">AI Agent</span>
                <span className="text-[9px] font-mono text-accent uppercase tracking-widest font-semibold border border-accent/20 px-2 py-0.2 bg-accent/5">ET Hack &apos;26</span>
              </div>
              <h3 className="font-display font-medium text-xl text-text-primary">
                ET-Concierge — Financial Twin AI
              </h3>
              <p className="text-xs font-mono text-accent">Emotion-aware financial twin concierge</p>
              <p className="text-xs text-text-muted leading-relaxed font-sans font-light">
                An AI financial assistant built for a hackathon. We noticed that voice bots often interrupt users when they pause to think. I implemented a voice activity detection system using Python that listens to the user&apos;s tone and silence duration before letting the Llama 3.1 model respond.
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
            className="md:col-span-2 bg-bg-surface border border-border hover:border-border-hover p-6 md:p-8 flex flex-col justify-between transition-colors duration-300 min-h-[360px]"
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
                A web store template I built. I wanted to see if I could make it run entirely serverless. I used Firestore for the product inventory and managed the cart state completely in localStorage. It uses a PHP mailer backend to handle contact submissions without a heavy database.
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
            className="bg-bg-surface border border-border hover:border-border-hover p-6 flex flex-col justify-between transition-colors duration-300 min-h-[360px]"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest block">Web Application</span>
              <h3 className="font-display font-medium text-xl text-text-primary">
                CareerSeed
              </h3>
              <p className="text-xs font-mono text-accent">Resume builder & matching finder</p>
              <p className="text-xs text-text-muted leading-relaxed font-sans font-light">
                A resume builder that generates clean PDFs. It helps college graduates format their text without breaking the page layout. I built it with Python and Streamlit so that users can fill out their details in a sidebar and watch the PDF update live.
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
