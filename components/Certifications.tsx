"use client";

import { motion } from "framer-motion";

const certData = [
  {
    icon: "🍃",
    name: "MongoDB Associate Developer",
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
    name: "Upcoming",
    issuer: "Next validation in progress",
    year: "—",
    isGhost: true,
  },
];

export default function Certifications() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="certifications" className="bg-bg-base text-text-primary py-24 px-6 md:px-12 border-t border-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="mb-16"
        >
          <span className="font-mono text-accent text-[10px] tracking-widest uppercase block">
            Recognition / 07
          </span>
          <h2 className="font-display font-light text-4xl mt-2">
            Credentials
          </h2>
        </motion.div>

        {/* Grid */}
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
              className={`min-w-[280px] md:min-w-0 snap-center flex-1 flex flex-col justify-between p-6 transition-colors duration-300 ${
                cert.isGhost
                  ? "border border-dashed border-border bg-transparent text-text-muted/40"
                  : "border border-border bg-bg-surface hover:border-border-hover"
              }`}
            >
              <div>
                {/* Icon */}
                <div
                  className={`w-9 h-9 rounded flex items-center justify-center text-base mb-6 ${
                    cert.isGhost
                      ? "bg-bg-surface border border-border text-text-muted/40"
                      : "bg-bg-base border border-border text-text-primary"
                  }`}
                >
                  {cert.icon}
                </div>

                {/* Title & Issuer */}
                <h3
                  className={`font-display font-medium text-lg leading-snug ${
                    cert.isGhost ? "text-text-muted/40" : "text-text-primary"
                  }`}
                >
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-text-muted mt-2 leading-relaxed">
                  {cert.issuer}
                </p>
              </div>

              {/* Year */}
              <div className="mt-8 pt-4 border-t border-border/60 flex justify-between items-center text-[9px] font-mono text-text-muted">
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
