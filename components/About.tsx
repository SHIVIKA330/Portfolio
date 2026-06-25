"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Target, Mail, MapPin, Calendar, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

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
    { label: "OSS Contribs", end: 2, suffix: "+" },
    { label: "Shipped", end: 3, suffix: "+" },
  ];

  const educationTimeline = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "GLA University, Mathura",
      period: "2023 - 2027",
      details: "Focusing on data structures, algorithms, and full-stack systems. Shippings at university technical hackathons.",
    },
    {
      degree: "Java Industrial Training",
      institution: "KVCH via GLA University",
      period: "Summer 2024",
      details: "Hands-on implementation of enterprise Java runtime structures, MVC architecture, and DB models.",
    },
  ];

  return (
    <section id="about" className="bg-retro-cream text-retro-dark py-28 px-6 md:px-12 border-t-2 border-retro-dark relative overflow-hidden">
      {/* Background grid details */}
      <div className="absolute inset-0 bg-dots opacity-[0.04] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Biography & Headline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-retro-olive text-xs tracking-[0.25em] font-bold block">
                BIOGRAPHY // 01
              </span>
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Hello, I&apos;m Shivika.
              </h2>
              <p className="font-serif text-xl text-retro-olive italic">
                Building systems, designing sprints.
              </p>
            </div>

            {/* Custom Thick Separator Line */}
            <div className="h-[2px] w-full bg-retro-dark/15" />

            <div className="space-y-6 text-retro-dark/90 text-base md:text-lg leading-relaxed font-sans font-medium">
              <p>
                I am a Computer Science student at GLA University, Mathura. Rather than building static sites, I focus on shipping high-performance full-stack applications at hackathons and contributing patches to the TensorFlow core runtime.
              </p>
              <p>
                My design principles favor clean, structural layouts, robust APIs, and meaningful micro-interactions that bridge the gap between complex software backend engineering and high-fidelity interfaces.
              </p>
            </div>

            {/* Core Focus Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-retro-dark/10">
              <div className="flex flex-col gap-1 bg-retro-olive/10 p-4 border border-retro-dark/10 rounded-xl">
                <span className="text-[10px] font-mono text-retro-olive uppercase tracking-wider font-bold">University Address</span>
                <span className="text-retro-dark text-sm font-semibold flex items-center gap-1.5 mt-1">
                  <MapPin size={14} className="text-retro-orange" /> GLA University · Mathura, UP
                </span>
              </div>
              <div className="flex flex-col gap-1 bg-retro-olive/10 p-4 border border-retro-dark/10 rounded-xl">
                <span className="text-[10px] font-mono text-retro-olive uppercase tracking-wider font-bold">Core Focus</span>
                <span className="text-retro-dark text-sm font-semibold flex items-center gap-1.5 mt-1">
                  <BookOpen size={14} className="text-retro-orange" /> Fintech · AI Vision · Social Impact
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile/Contact Block & Stats */}
          <div className="lg:col-span-5 space-y-8">
            {/* Dark Contact Box with Retro Orange Offset Shadow */}
            <div className="relative">
              {/* Offset Shadow */}
              <div className="absolute inset-0 bg-retro-orange border-2 border-retro-dark rounded-2xl translate-x-3 translate-y-3" />
              
              {/* Core Dark Card */}
              <div className="relative bg-retro-dark text-retro-cream border-2 border-retro-dark p-6 md:p-8 rounded-2xl space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-retro-cream">Contact Information</h3>
                  <p className="font-mono text-[10px] text-retro-cream/60 uppercase tracking-widest mt-1">Direct Details</p>
                </div>
                
                <div className="space-y-3 font-mono text-xs text-retro-cream/80">
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-retro-orange" />
                    <span>shivikajain330@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-retro-orange" />
                    <span>GLA University Campus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={14} className="text-retro-orange" />
                    <span>Availability: 2026 Developer</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-retro-cream/10">
                  <a
                    href="mailto:shivikajain330@gmail.com"
                    className="p-2 border border-retro-cream/20 hover:border-retro-orange hover:text-retro-orange rounded-xl bg-retro-cream/5 transition-colors"
                    aria-label="Email Shivika"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href="https://github.com/SHIVIKA330"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-retro-cream/20 hover:border-retro-orange hover:text-retro-orange rounded-xl bg-retro-cream/5 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shivikajain330/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-retro-cream/20 hover:border-retro-orange hover:text-retro-orange rounded-xl bg-retro-cream/5 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((stat, idx) => (
                <div key={idx} className="relative group">
                  {/* Offset Shadow */}
                  <div className="absolute inset-0 bg-retro-dark border border-retro-dark rounded-xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200" />
                  
                  <div className="relative bg-retro-cream border-2 border-retro-dark rounded-xl p-5 flex flex-col justify-center transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 duration-200">
                    <span className="font-serif font-bold text-4xl text-retro-dark">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </span>
                    <span className="text-[10px] font-mono text-retro-olive mt-2 tracking-wider uppercase font-extrabold">
                      {stat.label}
                    </span>
                  </div>
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
          className="mt-24 pt-16 border-t-2 border-retro-dark/10"
        >
          <div className="mb-12">
            <span className="font-mono text-retro-olive text-xs tracking-[0.25em] font-bold block">
              EDUCATION TIMELINE // 02
            </span>
            <h3 className="font-serif font-bold text-3xl mt-2">
              Academic Background
            </h3>
          </div>

          <div className="relative border-l-2 border-retro-dark pl-6 md:pl-10 ml-2 md:ml-4 space-y-10">
            {educationTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Diamond Star Indicator */}
                <div className="absolute -left-[33px] md:-left-[49px] top-1.5 w-4 h-4 bg-retro-orange border-2 border-retro-dark rotate-45 flex items-center justify-center shadow-[1px_1px_0px_#111111] group-hover:scale-125 transition-transform" />
                
                <div className="bg-retro-cream border border-retro-dark/20 hover:border-retro-dark p-6 rounded-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-retro-dark/10 bg-retro-dark/5 text-retro-olive text-[10px] font-mono font-bold">
                      {item.period}
                    </span>
                    <span className="font-mono text-[10px] text-retro-olive font-extrabold">{item.institution}</span>
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-serif font-bold text-retro-dark group-hover:text-retro-orange transition-colors">
                    {item.degree}
                  </h4>
                  
                  <p className="text-sm text-retro-dark/70 mt-2 font-sans font-medium leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Achievements Tray */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 pt-8 border-t border-retro-dark/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-xs text-retro-olive uppercase tracking-widest block font-bold">
              ACHIEVEMENTS // GITHUB
            </span>
            <span className="text-xs text-retro-dark/60 block">
              Recognitions earned in open source contributions and pull requests.
            </span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Pull Shark */}
            <div className="group flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-retro-dark bg-retro-cream hover:bg-retro-orange transition-colors duration-300 shadow-[3px_3px_0px_#111111]">
              <div className="p-2 bg-retro-dark rounded-lg text-retro-orange">
                <ShieldCheck size={18} />
              </div>
              <div>
                <span className="block text-xs font-bold text-retro-dark">
                  Pull Shark
                </span>
                <span className="block text-[9px] font-mono text-retro-dark/60 uppercase">PR Merges</span>
              </div>
            </div>

            {/* YOLO */}
            <div className="group flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-retro-dark bg-retro-cream hover:bg-retro-orange transition-colors duration-300 shadow-[3px_3px_0px_#111111]">
              <div className="p-2 bg-retro-dark rounded-lg text-retro-orange">
                <Target size={18} />
              </div>
              <div>
                <span className="block text-xs font-bold text-retro-dark">
                  YOLO
                </span>
                <span className="block text-[9px] font-mono text-retro-dark/60 uppercase">Direct Merges</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
