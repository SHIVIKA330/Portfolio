"use client";

import { motion, useReducedMotion } from "framer-motion";

const certData = [
  {
    icon: "🍃",
    name: "MongoDB Associate Developer Certification",
    issuer: "MongoDB University",
    year: "2024",
    isGhost: false,
  },
  {
    icon: "☕",
    name: "Full-Stack Java Development",
    issuer: "Industrial Training · KVCH / GLA University",
    year: "2024",
    isGhost: false,
  },
  {
    icon: "✦",
    name: "Coming Soon",
    issuer: "Your next credential goes here",
    year: "—",
    isGhost: true,
  },
];

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto border-t border-border/30">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mb-16"
      >
        <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.2em] font-semibold">
          RECOGNITION
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-text-primary">
          Credentials
        </h2>
      </motion.div>

      {/* Grid: horizontal scroll on mobile, 3-col grid on desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none"
      >
        {certData.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={
              shouldReduceMotion || cert.isGhost
                ? {}
                : { scale: 1.02, borderColor: "rgba(124, 111, 255, 0.4)" }
            }
            className={`min-w-[280px] md:min-w-0 snap-center flex-1 flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 ${
              cert.isGhost
                ? "border-2 border-dashed border-border/60 bg-transparent text-text-muted"
                : "border border-border bg-bg-surface hover:shadow-[0_0_30px_rgba(124,111,255,0.06)]"
            }`}
          >
            <div>
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-6 ${
                  cert.isGhost
                    ? "bg-bg-elevated/20 border border-border/40 text-text-muted"
                    : "bg-bg-elevated border border-border text-text-primary"
                }`}
              >
                {cert.icon}
              </div>

              {/* Title & Issuer */}
              <h3
                className={`font-display font-bold text-base leading-snug ${
                  cert.isGhost ? "text-text-muted/65" : "text-text-primary"
                }`}
              >
                {cert.name}
              </h3>
              <p className="text-xs font-mono text-text-muted mt-2 leading-relaxed">
                {cert.issuer}
              </p>
            </div>

            {/* Year */}
            <div className="mt-8 pt-4 border-t border-border/20 flex justify-between items-center text-[10px] font-mono text-text-muted">
              <span>ISSUED</span>
              <span>{cert.year}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
