"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const timelineData = [
  {
    date: "2026",
    title: "INTEGRTR × GLA Hackathon · Team 08",
    subtitle: "HR Synth Data Pipeline — TypeScript monorepo, 48hr sprint",
    location: "GLA University",
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
  const headerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="experience" className="bg-bg-surface backdrop-blur-sm text-text-primary py-28 px-6 md:px-12 border-t border-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mb-20"
        >
          <span className="font-mono text-accent text-[10px] tracking-widest uppercase block">
            Experience / 04
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl mt-2">
            Journey & Shippings
          </h2>
        </motion.div>

        {/* Timeline Structure */}
        <div className="relative border-l border-border pl-6 md:pl-10 ml-2 md:ml-6 space-y-10">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[45px] top-4 w-2.5 h-2.5 bg-accent rounded-full transition-transform group-hover:scale-125" />

              {/* Minimalist Card Container */}
              <div className="border border-border bg-bg-base/20 backdrop-blur-md p-6 transition-colors duration-300 hover:border-border-hover">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-bg-surface text-text-muted font-mono text-[9px]">
                    <Calendar size={10} /> {item.date}
                  </span>

                  <span className="inline-flex items-center gap-1 font-mono text-[9px] text-text-faint uppercase tracking-wider">
                    <MapPin size={10} /> {item.location}
                  </span>
                </div>

                <h3 className="text-lg font-display font-medium text-text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-text-muted mt-2 font-sans font-light leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
