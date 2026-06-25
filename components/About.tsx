"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-border/30">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
      >
        {/* Left Column: Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div>
            <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.2em] font-semibold">
              ABOUT ME
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-text-primary">
              Solving real problems with systems thinking.
            </h2>
          </div>

          <div className="text-text-muted space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              CS student at GLA University, Mathura. I ship full-stack products for hackathons,
              contribute to TensorFlow core, and solve real problems for gig workers, fintech
              users, and communities.
            </p>
            <p>
              I think in systems, design in sprints, and deploy on Render. My passion lies in
              building tools that empower people and bridging the gap between developers and open source.
            </p>
          </div>

          <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-4 sm:gap-12">
            <div>
              <span className="block text-xs font-mono text-text-muted uppercase">Currently</span>
              <span className="text-text-primary text-sm font-semibold mt-1 block">
                B.Tech CSE · GLA University
              </span>
            </div>
            <div>
              <span className="block text-xs font-mono text-text-muted uppercase">Focused on</span>
              <span className="text-text-primary text-sm font-semibold mt-1 block">
                Fintech · AI · Social Impact
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Stat Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {statCards.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              className="bg-bg-surface border border-border rounded-2xl p-6 flex flex-col justify-center transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,111,255,0.06)]"
            >
              <span className="font-display font-bold text-4xl md:text-5xl bg-gradient-primary bg-clip-text text-transparent select-none">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </span>
              <span className="text-xs font-mono text-text-muted mt-2 tracking-wider uppercase font-semibold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GitHub Achievements Row */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center gap-4 text-sm"
      >
        <span className="font-mono text-xs text-text-muted uppercase tracking-wider font-semibold">
          GitHub Achievements:
        </span>
        <div className="flex gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-bg-surface text-text-primary text-xs font-medium">
            🦈 Pull Shark
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-bg-surface text-text-primary text-xs font-medium">
            🎯 YOLO
          </span>
        </div>
      </motion.div>
    </section>
  );
}
