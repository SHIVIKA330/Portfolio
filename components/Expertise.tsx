"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "LANGUAGES",
    skills: ["Java", "Python", "TypeScript", "C++", "JavaScript", "SQL"],
  },
  {
    category: "FRONTEND",
    skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
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
    skills: ["Razorpay", "UPI", "WhatsApp API", "Open-Meteo", "Workday EIB"],
  },
];

export default function Expertise() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
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
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="expertise" className="bg-bg-surface backdrop-blur-sm text-text-primary py-24 px-6 md:px-12 border-t border-border relative overflow-hidden">
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
            Skills / 06
          </span>
          <h2 className="font-display font-light text-4xl mt-2">
            Technical Toolkit
          </h2>
        </motion.div>

        {/* Grid of Clusters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-bg-base/40 backdrop-blur-md border border-border p-6 flex flex-col gap-4 hover:border-border-hover transition-colors"
            >
              <span className="font-mono text-accent text-[10px] tracking-widest font-semibold uppercase">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-bg-surface text-text-muted border border-border rounded-full px-3 py-1 text-[11px] font-mono hover:text-text-primary hover:border-accent transition-colors cursor-default"
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
