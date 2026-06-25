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
    <section id="certifications" className="bg-retro-dark text-retro-cream py-24 px-6 md:px-12 border-t-2 border-retro-dark relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.02] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="mb-16"
        >
          <span className="font-mono text-retro-orange text-xs tracking-[0.2em] font-semibold">
            RECOGNITION // 07
          </span>
          <h2 className="font-serif font-bold text-4xl mt-2">
            Credentials
          </h2>
        </motion.div>

        {/* Grid: horizontal scroll on mobile, 3-col grid on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none"
        >
          {certData.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion || cert.isGhost
                  ? {}
                  : { y: -4 }
              }
              className={`min-w-[280px] md:min-w-0 snap-center flex-1 flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 ${
                cert.isGhost
                  ? "border-2 border-dashed border-retro-cream/20 bg-transparent text-retro-cream/40"
                  : "border-2 border-retro-cream/10 bg-retro-green shadow-[4px_4px_0px_#FFA31A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              }`}
            >
              <div>
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-6 ${
                    cert.isGhost
                      ? "bg-retro-cream/5 border border-retro-cream/10 text-retro-cream/40"
                      : "bg-retro-dark border border-retro-cream/15 text-retro-cream"
                  }`}
                >
                  {cert.icon}
                </div>

                {/* Title & Issuer */}
                <h3
                  className={`font-serif font-bold text-lg leading-snug ${
                    cert.isGhost ? "text-retro-cream/40" : "text-retro-cream"
                  }`}
                >
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-retro-cream/60 mt-2 leading-relaxed">
                  {cert.issuer}
                </p>
              </div>

              {/* Year */}
              <div className="mt-8 pt-4 border-t border-retro-cream/10 flex justify-between items-center text-[10px] font-mono text-retro-cream/50">
                <span>ISSUED</span>
                <span>{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
