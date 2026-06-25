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
    title: "GSSoC Ambassador (Campus Liaison)",
    subtitle: "GirlScript Summer of Code · GLA University campus",
    location: "Remote / Campus",
  },
  {
    date: "2024",
    title: "Industrial Training — Full-Stack Java Development",
    subtitle: "KVCH via GLA University, Mathura",
    location: "Mathura Campus",
  },
  {
    date: "2023–Present",
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
    <section id="experience" className="bg-retro-cream text-retro-dark py-28 px-6 md:px-12 border-t-2 border-retro-dark relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.04] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mb-20"
        >
          <span className="font-mono text-retro-olive text-xs tracking-[0.25em] font-bold block">
            EXPERIENCE // 03
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl mt-2">
            Where I&apos;ve Been
          </h2>
        </motion.div>

        {/* Timeline Structure */}
        <div className="relative border-l-2 border-retro-dark pl-6 md:pl-10 ml-2 md:ml-6 space-y-12">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
              className="relative group"
            >
              {/* Timeline Diamond Star Indicator */}
              <div className="absolute -left-[33px] md:-left-[49px] top-4 w-4 h-4 bg-retro-orange border-2 border-retro-dark rotate-45 flex items-center justify-center shadow-[1px_1px_0px_#111111] group-hover:scale-125 transition-transform" />

              {/* Dynamic Card Container */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { x: 8 }}
                className={`border-2 border-retro-dark p-6 rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                  item.isLatest
                    ? "bg-retro-orange text-retro-dark shadow-[6px_6px_0px_#111111]"
                    : "bg-retro-cream hover:bg-retro-olive/10 shadow-[4px_4px_0px_#111111] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-retro-dark/20 text-[10px] font-mono font-bold select-none ${
                      item.isLatest ? "bg-retro-dark text-retro-cream" : "bg-retro-dark/5 text-retro-olive"
                    }`}>
                      <Calendar size={10} /> {item.date}
                    </span>
                    {item.isLatest && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-mono text-retro-dark font-extrabold uppercase tracking-wider animate-pulse">
                        <Sparkles size={8} /> Latest Hack
                      </span>
                    )}
                  </div>

                  <span className={`inline-flex items-center gap-1 text-[10px] font-mono ${
                    item.isLatest ? "text-retro-dark/85" : "text-retro-olive"
                  }`}>
                    <MapPin size={10} /> {item.location}
                  </span>
                </div>

                <h3 className={`text-lg md:text-xl font-serif font-bold ${
                  item.isLatest ? "text-retro-dark" : "text-retro-dark group-hover:text-retro-orange transition-colors"
                }`}>
                  {item.title}
                </h3>
                
                <p className={`text-sm mt-2 leading-relaxed font-sans font-medium ${
                  item.isLatest ? "text-retro-dark/85" : "text-retro-dark/75"
                }`}>
                  {item.subtitle}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
