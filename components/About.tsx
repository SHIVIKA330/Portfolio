"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, BookOpen, ShieldCheck, Target } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const stats = [
    { label: "Repositories", value: "09+" },
    { label: "Hackathons Completed", value: "05+" },
    { label: "OSS Contributions", value: "02+" },
    { label: "Projects Shipped", value: "03+" },
  ];

  const educationTimeline = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "GLA University, Mathura",
      period: "2023 - 2027",
      details: "Focusing on data structures, algorithms, and full-stack systems. Active in university hackathons.",
    },
    {
      degree: "Java Industrial Training",
      institution: "KVCH via GLA University",
      period: "Summer 2024",
      details: "Hands-on implementation of enterprise Java runtimes, MVC architecture, and database schemas.",
    },
  ];

  return (
    <section id="about" className="bg-bg-surface backdrop-blur-sm text-text-primary py-28 px-6 md:px-12 border-t border-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Biography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-accent text-[10px] tracking-widest uppercase block">
                Biography / 01
              </span>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-tight">
                About Shivika
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-accent/40" />

            <div className="space-y-6 text-text-muted text-sm md:text-base leading-relaxed font-sans font-light">
              <p>
                I am a Computer Science student at GLA University, Mathura. Rather than building static sites, I focus on shipping high-performance full-stack applications at hackathons and contributing patches to the TensorFlow core runtime.
              </p>
              <p>
                My design principles favor clean, structural layouts, robust APIs, and meaningful micro-interactions that bridge the gap between complex software backend engineering and high-fidelity interfaces.
              </p>
            </div>

            {/* Core Focus Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border/60">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest block">University</span>
                <span className="text-text-primary text-xs font-medium flex items-center gap-1.5 mt-1">
                  <MapPin size={12} className="text-accent" /> GLA University · Mathura, UP
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest block">Core Focus</span>
                <span className="text-text-primary text-xs font-medium flex items-center gap-1.5 mt-1">
                  <BookOpen size={12} className="text-accent" /> Fintech · AI Vision · Social Impact
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Info Panel & Stats */}
          <div className="lg:col-span-5 space-y-10">
            {/* Minimalist Contact Card */}
            <div className="border border-border bg-bg-base/40 backdrop-blur-md p-6 md:p-8 space-y-6">
              <div>
                <h3 className="font-display font-medium text-lg text-text-primary">Contact Details</h3>
                <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest block mt-1">Direct inquiries</span>
              </div>
              
              <div className="space-y-3 font-mono text-[11px] text-text-muted">
                <div className="flex items-center gap-3">
                  <Mail size={12} className="text-accent" />
                  <span>shivikajain330@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={12} className="text-accent" />
                  <span>GLA University Campus</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={12} className="text-accent" />
                  <span>Available: 2026 Developer</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <a
                  href="mailto:shivikajain330@gmail.com"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={14} />
                </a>
                <a
                  href="https://github.com/SHIVIKA330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivikajain330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={14} />
                </a>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="border border-border p-4 bg-bg-base/20 backdrop-blur-md">
                  <span className="font-display font-light text-3xl text-text-primary block">
                    {stat.value}
                  </span>
                  <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block mt-1.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 pt-16 border-t border-border"
        >
          <div className="mb-12">
            <span className="font-mono text-accent text-[10px] tracking-widest uppercase block">
              Timeline / 02
            </span>
            <h3 className="font-display font-light text-2xl md:text-3xl mt-2">
              Academic Background
            </h3>
          </div>

          <div className="relative border-l border-border pl-6 md:pl-10 ml-2 space-y-10">
            {educationTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Minimalist Dot Indicator */}
                <div className="absolute -left-[31px] md:-left-[45px] top-2 w-2 h-2 bg-accent rounded-full transition-transform group-hover:scale-125" />
                
                <div className="border border-border/60 hover:border-border p-6 bg-bg-base/10 backdrop-blur-md transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-border bg-bg-surface text-text-muted font-mono text-[9px]">
                      {item.period}
                    </span>
                    <span className="font-mono text-[9px] text-text-faint font-semibold uppercase tracking-wider">{item.institution}</span>
                  </div>
                  
                  <h4 className="text-base font-display font-medium text-text-primary group-hover:text-accent transition-colors">
                    {item.degree}
                  </h4>
                  
                  <p className="text-xs text-text-muted mt-2 font-sans font-light leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Achievements */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-[9px] text-accent uppercase tracking-widest block font-medium">
              Recognition / GitHub
            </span>
            <span className="text-[11px] text-text-muted block font-sans">
              Earned badge structures in open source contributions and pull requests.
            </span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-3 px-4 py-2 border border-border bg-bg-surface">
              <ShieldCheck size={14} className="text-accent" />
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">PR Merges</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 border border-border bg-bg-surface">
              <Target size={14} className="text-accent" />
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">YOLO Merges</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
