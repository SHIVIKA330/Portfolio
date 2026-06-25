"use client";

import { motion, useReducedMotion } from "framer-motion";

const skillsData = [
  {
    category: "LANGUAGES",
    skills: ["Java", "Python", "TypeScript", "C++", "JavaScript", "SQL"],
  },
  {
    category: "FRONTEND",
    skills: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    category: "BACKEND",
    skills: ["Node.js", "Express", "REST APIs", "Java Spring"],
  },
  {
    category: "AI / ML",
    skills: ["TensorFlow", "OpenCV", "Claude API", "NVIDIA API", "Llama 3.1"],
  },
  {
    category: "DATABASES",
    skills: ["Supabase", "PostgreSQL", "MongoDB", "Upstash Redis"],
  },
  {
    category: "DEVOPS & TOOLS",
    skills: ["Git", "GitHub", "Vercel", "Render", "Playwright", "Linux"],
  },
  {
    category: "INTEGRATIONS",
    skills: ["Razorpay", "UPI", "WhatsApp Cloud API", "Open-Meteo", "Workday EIB"],
  },
];

export default function Expertise() {
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
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="expertise" className="bg-retro-cream text-retro-dark py-24 px-6 md:px-12 border-t-2 border-retro-dark relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.04] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="mb-16"
        >
          <span className="font-mono text-retro-olive text-xs tracking-[0.2em] font-semibold">
            ABILITIES // 06
          </span>
          <h2 className="font-serif font-bold text-4xl mt-2">
            What I Work With
          </h2>
        </motion.div>

        {/* Grid of Clusters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-retro-cream border-2 border-retro-dark p-6 rounded-2xl flex flex-col gap-4 shadow-[4px_4px_0px_#111111] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300"
            >
              <span className="font-mono text-retro-olive text-xs tracking-[0.2em] font-bold">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-retro-dark text-retro-cream border border-retro-dark rounded-full px-3.5 py-1.5 text-xs font-mono hover:bg-retro-orange hover:text-retro-dark transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
