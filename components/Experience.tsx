"use client";

import { motion, useReducedMotion } from "framer-motion";

const timelineData = [
  {
    date: "2026",
    title: "INTEGRTR × GLA Hackathon · Team 08",
    subtitle: "HR Synth Data Pipeline — TypeScript monorepo, 48hr sprint",
    isLatest: true,
  },
  {
    date: "2026",
    title: "DEVTrails × Guidewire Hackathon · Team TechnoTribe",
    subtitle: "OffShift — Parametric insurance, shipped in 24hr",
  },
  {
    date: "2026",
    title: "ET AI Hackathon 2026",
    subtitle: "Artha (ET Concierge) — NVIDIA Llama 3.1 70B",
  },
  {
    date: "2026",
    title: "Cognizant Technoverse Hackathon",
    subtitle: "BharatLedger — Fintech for informal workers",
  },
  {
    date: "2025",
    title: "GSSoC Ambassador (Pursuing)",
    subtitle: "GirlScript Summer of Code · GLA University campus",
  },
  {
    date: "2024",
    title: "Industrial Training — Full-Stack Java Development",
    subtitle: "KVCH via GLA University, Mathura",
  },
  {
    date: "2023–",
    title: "B.Tech Computer Science Engineering · Ongoing",
    subtitle: "GLA University, Mathura",
  },
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-border/30">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="mb-16"
      >
        <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.2em] font-semibold">
          JOURNEY
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-text-primary">
          Where I&apos;ve Been
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-border pl-6 md:pl-10 ml-2 md:ml-4 space-y-12">
        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center">
              {item.isLatest ? (
                <div className="relative flex h-4 w-4">
                  {/* Glowing ring animation */}
                  {!shouldReduceMotion && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  )}
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-violet-500 shadow-[0_0_12px_rgba(124,111,255,0.8)]"></span>
                </div>
              ) : (
                <span className="h-3.5 w-3.5 rounded-full bg-[#1A1A28] border-2 border-border group-hover:border-violet-500/50 transition-colors duration-300"></span>
              )}
            </div>

            {/* Content card */}
            <div className="bg-bg-surface/50 border border-border/80 hover:border-violet-500/20 p-5 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,111,255,0.04)]">
              <span className="inline-block text-xs font-mono font-semibold text-mint-400 mb-2">
                {item.date}
              </span>
              <h3 className="text-base md:text-lg font-display font-semibold text-text-primary group-hover:text-violet-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
