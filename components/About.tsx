"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Target } from "lucide-react";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function CountUp({ end, suffix = "", duration = 1.2 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [shouldReduceMotion, end]);

  useEffect(() => {
    if (!hasAnimated || shouldReduceMotion) return;
    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    const totalMilliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMilliseconds / endValue), 30);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasAnimated, end, duration, shouldReduceMotion]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const statCards = [
    { label: "Repos", end: 9, suffix: "+" },
    { label: "Hackathons", end: 5, suffix: "+" },
    { label: "OSS Contributions", end: 2, suffix: "+" },
    { label: "Products Deployed", end: 3, suffix: "+" },
  ];

  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto border-t border-border/30">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
      >
        {/* Left Column: Biography (Spans 7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.25em] font-bold block">
              BIOGRAPHY // 01
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight text-text-primary">
              Building systems, designing sprints.
            </h2>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-border via-border/50 to-transparent" />

          <div className="text-text-muted space-y-6 text-base md:text-lg leading-relaxed font-sans">
            <p>
              I am a Computer Science student at GLA University, Mathura. Rather than building static sites, I focus on shipping high-performance full-stack applications at hackathons and contributing patches to the TensorFlow core runtime.
            </p>
            <p>
              My design principles favor clean, structural grid layouts, robust APIs, and meaningful micro-interactions that bridge the gap between complex software backend engineering and high-fidelity interfaces.
            </p>
          </div>

          {/* Quick Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border/35">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Education</span>
              <span className="text-text-primary text-sm font-semibold">
                B.Tech Computer Science · GLA University
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Core Focus</span>
              <span className="text-text-primary text-sm font-semibold">
                Fintech · AI / Machine Vision · Social Impact
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Glassmorphic Grid (Spans 5 cols) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {statCards.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={shouldReduceMotion ? {} : { y: -4, borderColor: "rgba(124,111,255,0.3)" }}
              className="bg-bg-surface/40 backdrop-blur-md border border-border/80 rounded-2xl p-6 flex flex-col justify-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,111,255,0.06)] relative overflow-hidden group"
            >
              {/* Subtle accent corner highlight */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-violet-500/10 to-transparent pointer-events-none" />
              
              <span className="font-display font-extrabold text-5xl bg-gradient-primary bg-clip-text text-transparent select-none">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </span>
              <span className="text-[10px] font-mono text-text-muted mt-3 tracking-widest uppercase font-semibold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GitHub Achievements Area - Remapped as a detailed glowing tray */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-1 text-center md:text-left">
          <span className="font-mono text-[10px] text-mint-400 uppercase tracking-widest block font-bold">
            ACHIEVEMENTS // GITHUB
          </span>
          <span className="text-xs text-text-muted block">
            Recognitions earned in open source contributions and pull requests.
          </span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Pull Shark */}
          <div className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-bg-surface/50 hover:border-violet-500/35 hover:shadow-[0_0_20px_rgba(124,111,255,0.08)] transition-all duration-300">
            <div className="p-2 bg-bg-elevated rounded-lg text-violet-400">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span className="block text-xs font-semibold text-text-primary group-hover:text-violet-400 transition-colors">
                Pull Shark
              </span>
              <span className="block text-[10px] font-mono text-text-muted uppercase">PR Merges</span>
            </div>
          </div>

          {/* YOLO */}
          <div className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-bg-surface/50 hover:border-mint-500/35 hover:shadow-[0_0_20px_rgba(0,217,165,0.08)] transition-all duration-300">
            <div className="p-2 bg-bg-elevated rounded-lg text-mint-400">
              <Target size={18} />
            </div>
            <div>
              <span className="block text-xs font-semibold text-text-primary group-hover:text-mint-400 transition-colors">
                YOLO
              </span>
              <span className="block text-[10px] font-mono text-text-muted uppercase">Direct Merges</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
