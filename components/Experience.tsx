"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Calendar, MapPin } from "lucide-react";

const timelineData = [
  {
    date: "2026",
    title: "INTEGRTR × GLA Hackathon · Team 08",
    subtitle: "HR Synth Data Pipeline — TypeScript monorepo, 48hr sprint",
    location: "GLA University",
    isLatest: true,
  },
  {
    date: "2026",
    title: "DEVTrails × Guidewire Hackathon · Team TechnoTribe",
    subtitle: "OffShift — Parametric insurance, shipped in 24hr",
    location: "DEVTrails Hub",
  },
  {
    date: "2026",
    title: "ET AI Hackathon 2026",
    subtitle: "Artha (ET Concierge) — NVIDIA Llama 3.1 70B",
    location: "ET Online",
  },
  {
    date: "2026",
    title: "Cognizant Technoverse Hackathon",
    subtitle: "BharatLedger — Fintech for informal workers",
    location: "Cognizant Hub",
  },
  {
    date: "2025",
    title: "GSSoC Ambassador (Pursuing)",
    subtitle: "GirlScript Summer of Code · GLA University campus",
    location: "Remote / Campus Liaison",
  },
  {
    date: "2024",
    title: "Industrial Training — Full-Stack Java Development",
    subtitle: "KVCH via GLA University, Mathura",
    location: "Mathura Campus",
  },
  {
    date: "2023–",
    title: "B.Tech Computer Science Engineering · Ongoing",
    subtitle: "GLA University, Mathura",
    location: "Mathura, UP",
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
    <section id="experience" className="py-28 px-6 max-w-6xl mx-auto border-t border-border/30">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="mb-20"
      >
        <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.25em] font-bold block">
          EXPERIENCE // 03
        </span>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-2 text-text-primary">
          Where I&apos;ve Been
        </h2>
      </motion.div>

      {/* Timeline Structure */}
      <div className="relative border-l border-border/60 pl-8 md:pl-12 ml-2 md:ml-6 space-y-12">
        {/* Glow track effect */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-violet-500/30 via-mint-400/20 to-transparent pointer-events-none" />

        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
            className="relative group"
          >
            {/* Timeline Connector Pin */}
            <div className="absolute -left-[41px] md:-left-[57px] top-2 flex items-center justify-center">
              {item.isLatest ? (
                <div className="relative flex h-5 w-5">
                  {!shouldReduceMotion && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500/60 opacity-75"></span>
                  )}
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-violet-500 shadow-[0_0_15px_rgba(124,111,255,0.7)] border border-violet-400/40"></span>
                </div>
              ) : (
                <span className="h-4 w-4 rounded-full bg-bg-base border border-border/80 group-hover:border-violet-500/50 group-hover:shadow-[0_0_8px_rgba(124,111,255,0.4)] transition-all duration-300"></span>
              )}
            </div>

            {/* Dynamic Card Container */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { x: 8 }}
              className="bg-bg-surface/30 backdrop-blur-sm border border-border/80 p-6 rounded-2xl transition-all duration-300 hover:border-violet-500/20 hover:bg-bg-surface/60 hover:shadow-[0_0_40px_rgba(124,111,255,0.05)] relative overflow-hidden group"
            >
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-violet-500/5 to-transparent pointer-events-none" />
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/80 bg-bg-elevated/40 text-mint-400 text-[10px] font-mono font-bold select-none">
                    <Calendar size={10} /> {item.date}
                  </span>
                  {item.isLatest && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono text-violet-400 font-bold uppercase tracking-wider animate-pulse">
                      <Sparkles size={8} /> Active
                    </span>
                  )}
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-text-muted">
                  <MapPin size={10} /> {item.location}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-display font-bold text-text-primary group-hover:text-violet-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-sm text-text-muted mt-2 leading-relaxed font-sans font-medium">
                {item.subtitle}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
