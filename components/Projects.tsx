"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "./ui/ProjectCard";

const projectsData = [
  {
    title: "OffShift",
    oneLine: "Parametric income insurance for gig delivery workers",
    body: "Auto-payouts triggered by food delivery app outages (Downdetector) and weather disruptions — no claim forms, instant UPI transfer. Built for DEVTrails × Guidewire 2026.",
    stack: ["Next.js 14", "TypeScript", "Supabase", "Razorpay", "Claude API", "Upstash Redis", "Open-Meteo"],
    github: "https://github.com/SHIVIKA330/OffShift",
    stats: { stars: 3, forks: 2 },
    isFeatured: true,
  },
  {
    title: "CareerSeed",
    oneLine: "Resume builder and opportunity finder for freshers",
    body: "One-stop platform for job seekers and laid-off professionals to build resumes from scratch or enhance existing ones.",
    stack: ["Python", "Streamlit"],
    github: "https://github.com/SHIVIKA330/CareerSeed",
  },
  {
    title: "WhatsApp Logistics Bot",
    oneLine: "Automated complaint & technician dispatch via WhatsApp",
    body: "Built for Jain Kante Wale. Operator dashboard allocates technicians and fires automated WhatsApp updates to customers.",
    stack: ["JavaScript", "Node.js", "WhatsApp Cloud API"],
    github: "https://github.com/SHIVIKA330/whatsapp-logistics-bot",
  },
  {
    title: "Phishing Detector",
    oneLine: "Chrome extension for real-time phishing detection",
    body: "ML-powered URL and content analysis — detects phishing attacks live as you browse. Flags threats before you click.",
    stack: ["Python", "Chrome Extension API"],
    github: "https://github.com/SHIVIKA330/Phishing-Detector",
    stats: { stars: 1 },
  },
  {
    title: "AI Hand Gesture",
    oneLine: "Real-time hand gesture recognition",
    body: "Classifies hand gestures in real-time using Python + OpenCV computer vision pipeline.",
    stack: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/SHIVIKA330/AI-hand-gesture",
  },
  {
    title: "BharatLedger",
    oneLine: "Fintech platform for informal workers — credit & banking",
    body: "Built for Cognizant Technoverse Hackathon (Banking/Lending & Credit track). Targets India's 450M+ informal workers excluded from formal credit.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    badge: "Hackathon Project",
  },
  {
    title: "Artha — Financial Twin AI",
    oneLine: "Emotion-aware financial advisor on NVIDIA Llama 3.1 70B",
    body: "Built for ET AI Hackathon 2026. Features silence intelligence and emotion detection — knows when to speak and when to wait.",
    stack: ["Next.js", "TypeScript", "NVIDIA API", "Llama 3.1 70B"],
    badge: "Hackathon Project",
  },
  {
    title: "HR Synth Data Pipeline",
    oneLine: "Synthetic HR data generator + Workday EIB loader",
    body: "TypeScript monorepo for INTEGRTR × GLA Hackathon 2026 (Team 08). Faker-based candidate generation, schema validation, Workday EIB integration via Playwright.",
    stack: ["TypeScript", "Node.js", "Faker.js", "Playwright", "Workday EIB"],
    badge: "Hackathon Project",
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-border/30">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionHeaderVariants}
        className="mb-12"
      >
        <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.2em] font-semibold">
          MY WORK
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-text-primary">
          Things I&apos;ve Shipped
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            oneLine={project.oneLine}
            body={project.body}
            stack={project.stack}
            github={project.github}
            stats={project.stats}
            badge={project.badge}
            isFeatured={project.isFeatured}
          />
        ))}
      </motion.div>
    </section>
  );
}
