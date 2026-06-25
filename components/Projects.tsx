"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, GitFork, Sparkles, Activity, FileCheck, CheckCircle2, AlertTriangle } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { useState, useEffect } from "react";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [pulseState, setPulseState] = useState(0);

  // Simple cycle for mock interactive dashboards
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseState((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="bg-retro-dark text-retro-cream py-28 px-6 md:px-12 border-t-2 border-retro-dark relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.02] pointer-events-none" />

      {/* Retro Spotlight */}
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] rounded-full bg-retro-green/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-retro-orange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-retro-orange text-xs tracking-[0.25em] font-bold block">
            PORTFOLIO // 04
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl mt-2">
            Things I&apos;ve Shipped
          </h2>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* ========================================================================= */}
          {/* CARD 1: OFFSHIFT - FEATURED BENTO CARD (Spans 2 cols on md/lg) */}
          {/* ========================================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            className="md:col-span-2 bg-retro-green border-2 border-retro-cream/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-[6px_6px_0px_#FFA31A] relative overflow-hidden group min-h-[420px]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Project info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-retro-orange text-retro-dark border border-retro-dark shadow-[0_0_10px_rgba(255,163,26,0.2)]">
                    <Sparkles size={10} /> FEATURED PROJECT
                  </span>
                  <span className="text-[10px] font-mono text-retro-cream/60">DEVTrails × Guidewire &apos;26</span>
                </div>
                
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-retro-cream group-hover:text-retro-orange transition-colors">
                  OffShift
                </h3>
                <p className="text-xs font-mono text-retro-orange font-semibold tracking-wide">
                  Parametric income insurance for gig delivery workers
                </p>
                <p className="text-sm text-retro-cream/70 leading-relaxed font-sans font-medium">
                  Auto-payouts triggered by food delivery app outages (Downdetector API) and extreme weather disruptions. Zero claims processing overhead: payouts are fired instantly using Razorpay UPI endpoints.
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Next.js 14", "TypeScript", "Supabase", "Razorpay", "Claude API", "Upstash Redis"].map((tech) => (
                    <span key={tech} className="text-[9px] font-mono bg-retro-dark/50 border border-retro-cream/10 text-retro-cream/75 rounded-full px-2.5 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Simulated Live Payment Dashboard Visual */}
              <div className="lg:col-span-5 bg-retro-dark/60 border border-retro-cream/10 rounded-2xl p-4 font-mono text-[10px] text-retro-cream/60 space-y-3 h-full flex flex-col justify-between shadow-inner">
                <div className="flex justify-between items-center border-b border-retro-cream/10 pb-2">
                  <span className="flex items-center gap-1.5 text-retro-cream font-semibold">
                    <Activity size={10} className="text-retro-orange animate-pulse" /> LEDGER_FEED
                  </span>
                  <span className="text-[9px]">UPI_LIVE</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>OUTAGE DETECTED</span>
                    <span className="text-retro-orange font-bold">ZOMATO // DOWN</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>LOC: MATHURA UP</span>
                    <span className="text-retro-orange">TEMP: 43C</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-retro-cream/10 pt-2 text-retro-cream">
                    <span>PARAMETRIC PAYOUT</span>
                    <span className="font-semibold text-retro-orange">INR 350.00</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-retro-cream/10 text-[9px] text-retro-orange">
                  <span className="flex items-center gap-1"><CheckCircle2 size={10} /> TRANSACT_OK</span>
                  <span>TXN_8817293B</span>
                </div>
              </div>
            </div>

            {/* Card footer links */}
            <div className="flex justify-between items-center mt-8 pt-4 border-t border-retro-cream/10 relative z-10">
              <div className="flex items-center gap-3 text-xs font-mono text-retro-cream/60">
                <span className="flex items-center gap-1"><Star size={11} className="text-retro-orange fill-retro-orange/10" /> 3</span>
                <span className="flex items-center gap-1"><GitFork size={11} className="text-retro-orange" /> 2</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-retro-orange opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-semibold select-none">
                  → View Source
                </span>
                <div className="flex gap-2">
                  <a href="https://github.com/SHIVIKA330/OffShift" target="_blank" rel="noopener noreferrer" className="p-2 border border-retro-cream/20 hover:border-retro-orange rounded-xl bg-retro-dark/30 text-retro-cream/70 hover:text-retro-cream transition-colors">
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 2: PHISHING DETECTOR - Spans 1 col */}
          {/* ========================================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            className="bg-retro-cream text-retro-dark border-2 border-retro-dark rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-[6px_6px_0px_#FFA31A] relative overflow-hidden group min-h-[420px]"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-retro-olive uppercase tracking-wider block font-bold">Extension // 02</span>
              <h3 className="font-serif font-bold text-xl text-retro-dark group-hover:text-retro-orange transition-colors">
                Phishing Detector
              </h3>
              <p className="text-xs font-mono text-retro-orange font-semibold">Chrome Extension for real-time security</p>
              <p className="text-xs text-retro-dark/75 leading-relaxed font-sans font-medium">
                ML-powered URL and content classification engine running inside a Chrome extension popup context. Flags phishing threat payloads instantly as you browse.
              </p>

              {/* Mock browser address bar */}
              <div className="bg-retro-dark/5 border border-retro-dark/15 rounded-xl p-3.5 font-mono text-[9px] space-y-2 mt-4 shadow-inner text-retro-dark/65">
                <div className="flex items-center gap-2 bg-retro-cream border border-retro-dark/10 rounded px-2 py-1 truncate">
                  <span className="text-retro-orange font-extrabold animate-pulse">!</span>
                  <span className="truncate">http://verification-paypal-security.com</span>
                </div>
                <div className="flex justify-between items-center text-[8px] pt-1">
                  <span className="text-retro-orange font-semibold flex items-center gap-1"><AlertTriangle size={8} /> PAYLOAD_WARNING</span>
                  <span>RISK: 98%</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-4 border-t border-retro-dark/10">
              <div className="flex items-center gap-3 text-xs font-mono text-retro-dark/60">
                <span className="flex items-center gap-1"><Star size={11} className="text-retro-orange" /> 1</span>
              </div>
              <div className="flex gap-2">
                <a href="https://github.com/SHIVIKA330/Phishing-Detector" target="_blank" rel="noopener noreferrer" className="p-2 border border-retro-dark/20 hover:border-retro-orange rounded-xl bg-retro-dark/5 text-retro-dark/70 hover:text-retro-dark transition-colors">
                  <GithubIcon size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 3: ARTHA - FINANCIAL TWIN - Spans 1 col */}
          {/* ========================================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            className="bg-retro-green/30 border-2 border-retro-cream/10 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-[6px_6px_0px_#FFA31A] relative overflow-hidden group min-h-[420px]"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-retro-cream/50 uppercase tracking-wider">AI Agent // 03</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-retro-orange text-retro-dark font-bold">ET Hackathon &apos;26</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-retro-cream group-hover:text-retro-orange transition-colors">
                Artha — Financial Twin AI
              </h3>
              <p className="text-xs font-mono text-retro-orange font-semibold">Emotion-aware financial twin concierge</p>
              <p className="text-xs text-retro-cream/70 leading-relaxed font-sans font-medium">
                Built on NVIDIA Llama 3.1 70B. Features custom silence intelligence and emotion detection to dynamically adapt interaction timings to user vocal distress scores.
              </p>

              {/* Mock Audio Waveform Visualization */}
              <div className="flex items-center justify-between gap-1.5 h-12 px-4 bg-retro-dark/40 border border-retro-cream/10 rounded-xl mt-4 shadow-inner">
                {[0.4, 0.9, 0.2, 0.7, 0.5, 0.8, 0.3, 0.6, 0.4, 0.9, 0.2, 0.7, 0.5, 0.8, 0.3].map((val, i) => (
                  <span
                    key={i}
                    style={{ height: `${val * 100}%` }}
                    className={`w-[3px] rounded-full transition-all duration-500 ${
                      pulseState === 1 ? "bg-retro-orange" : "bg-retro-cream"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-4 border-t border-retro-cream/10 text-[9px] font-mono text-retro-cream/50">
              <span>NVIDIA API · LLAMA 3.1</span>
              <span className="text-retro-orange font-bold uppercase">HACKATHON DEV</span>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 4: CAREERSEED - Spans 1 col */}
          {/* ========================================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            className="bg-retro-green/30 border-2 border-retro-cream/10 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-[6px_6px_0px_#FFA31A] relative overflow-hidden group min-h-[420px]"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-retro-cream/50 uppercase tracking-wider block">Full-Stack // 04</span>
              <h3 className="font-serif font-bold text-xl text-retro-cream group-hover:text-retro-orange transition-colors">
                CareerSeed
              </h3>
              <p className="text-xs font-mono text-retro-orange font-semibold">Resume builder & matching finder</p>
              <p className="text-xs text-retro-cream/70 leading-relaxed font-sans font-medium">
                One-stop platform designed for freshers and laid-off professionals. Facilitates layout formatting, schema checks, and exports optimized resume PDFs instantly.
              </p>

              {/* Mock resume editor layout */}
              <div className="bg-retro-dark/40 border border-retro-cream/10 rounded-xl p-3.5 font-mono text-[9px] space-y-2 mt-4 shadow-inner text-retro-cream/50">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-retro-dark border border-retro-cream/15 flex items-center justify-center font-bold text-retro-orange">S</div>
                  <div>
                    <span className="block text-retro-cream font-bold text-[8px] leading-tight">Shivika Jain</span>
                    <span className="block text-[7px] text-retro-cream/40 leading-none">B.Tech CSE</span>
                  </div>
                </div>
                <div className="w-full h-1 bg-retro-cream/10 rounded" />
                <div className="w-5/6 h-1 bg-retro-cream/10 rounded" />
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-4 border-t border-retro-cream/10">
              <span className="text-[9px] font-mono text-retro-cream/50">PYTHON · STREAMLIT</span>
              <div className="flex gap-2">
                <a href="https://github.com/SHIVIKA330/CareerSeed" target="_blank" rel="noopener noreferrer" className="p-2 border border-retro-cream/20 hover:border-retro-orange rounded-xl bg-retro-dark/30 text-retro-cream/70 hover:text-retro-cream transition-colors">
                  <GithubIcon size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 5: WHATSAPP LOGISTICS BOT - Spans 1 col */}
          {/* ========================================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            className="bg-retro-cream text-retro-dark border-2 border-retro-dark rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-[6px_6px_0px_#FFA31A] relative overflow-hidden group min-h-[420px]"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-retro-olive uppercase tracking-wider block font-bold">Integrations // 05</span>
              <h3 className="font-serif font-bold text-xl text-retro-dark group-hover:text-retro-orange transition-colors">
                Logistics Bot
              </h3>
              <p className="text-xs font-mono text-retro-orange font-semibold">Technician dispatch update bot</p>
              <p className="text-xs text-retro-dark/75 leading-relaxed font-sans font-medium">
                Built for Jain Kante Wale. Features an operator dispatch board that updates tracking statuses and triggers automated client notifications via WhatsApp Cloud API.
              </p>

              {/* Mock chat thread bubble visual */}
              <div className="bg-retro-dark/5 border border-retro-dark/15 rounded-xl p-3 font-mono text-[8px] space-y-2 mt-4 shadow-inner text-retro-dark/70">
                <div className="bg-retro-cream border border-retro-dark/10 rounded-lg p-2 w-4/5">
                  Dispatching technician to loc A...
                </div>
                <div className="bg-retro-orange/15 border border-retro-orange/30 text-retro-dark rounded-lg p-2 w-4/5 ml-auto text-right font-semibold">
                  Status: DISPATCHED. ETA 25m.
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-4 border-t border-retro-dark/10">
              <span className="text-[9px] font-mono text-retro-olive font-extrabold">JS · WHATSAPP CLOUD API</span>
              <div className="flex gap-2">
                <a href="https://github.com/SHIVIKA330/whatsapp-logistics-bot" target="_blank" rel="noopener noreferrer" className="p-2 border border-retro-dark/20 hover:border-retro-orange rounded-xl bg-retro-dark/5 text-retro-dark/70 hover:text-retro-dark transition-colors">
                  <GithubIcon size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 6: BHARATLEDGER - Spans 1 col */}
          {/* ========================================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            className="bg-retro-green/30 border-2 border-retro-cream/10 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-[6px_6px_0px_#FFA31A] relative overflow-hidden group min-h-[420px]"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-retro-cream/50 uppercase tracking-wider">Fintech // 06</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-retro-orange text-retro-dark font-bold">Cognizant &apos;26</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-retro-cream group-hover:text-retro-orange transition-colors">
                BharatLedger
              </h3>
              <p className="text-xs font-mono text-retro-orange font-semibold">Credit & banking for informal workers</p>
              <p className="text-xs text-retro-cream/70 leading-relaxed font-sans font-medium">
                Fintech portal targeted at India&apos;s 450M+ informal sector workers, providing micro-lending metrics, credit history mapping, and digital banking access.
              </p>

              {/* Mock ledger data visual */}
              <div className="bg-retro-dark/40 border border-retro-cream/10 rounded-xl p-3.5 font-mono text-[9px] space-y-2 mt-4 shadow-inner text-retro-cream/50">
                <div className="flex justify-between items-center">
                  <span>CREDIT_INDEX</span>
                  <span className="text-retro-orange font-bold">780 / GOOD</span>
                </div>
                <div className="w-full bg-retro-dark h-1 rounded overflow-hidden">
                  <div className="bg-retro-orange h-full w-[80%]" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-4 border-t border-retro-cream/10 text-[9px] font-mono text-retro-cream/50">
              <span>NEXT.JS · SUPABASE</span>
              <span className="text-retro-orange font-bold uppercase">HACKATHON DEV</span>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 7: AI HAND GESTURE - Spans 1 col */}
          {/* ========================================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            className="bg-retro-green/30 border-2 border-retro-cream/10 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-[6px_6px_0px_#FFA31A] relative overflow-hidden group min-h-[420px]"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-retro-cream/50 uppercase tracking-wider block">Computer Vision // 07</span>
              <h3 className="font-serif font-bold text-xl text-retro-cream group-hover:text-retro-orange transition-colors">
                AI Hand Gesture
              </h3>
              <p className="text-xs font-mono text-retro-orange font-semibold">Real-time classification pipeline</p>
              <p className="text-xs text-retro-cream/70 leading-relaxed font-sans font-medium">
                Classifies manual hand configurations and sweeps in real-time. Employs a custom OpenCV input image preprocessing pipeline and feature extraction metrics.
              </p>

              {/* Mock mesh mapping grid */}
              <div className="grid grid-cols-6 gap-1 p-2 bg-retro-dark/40 border border-retro-cream/10 rounded-xl mt-4 h-16 shadow-inner relative overflow-hidden">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className={`border border-retro-cream/5 rounded-sm flex items-center justify-center text-[6px] transition-colors duration-500 ${
                      i === 7 || i === 8 || i === 13 || i === 14 ? "bg-retro-orange/20 border-retro-orange/30 text-retro-orange" : "text-transparent"
                    }`}
                  >
                    {i === 8 && "+"}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-4 border-t border-retro-cream/10">
              <span className="text-[9px] font-mono text-retro-cream/50">PYTHON · OPENCV</span>
              <div className="flex gap-2">
                <a href="https://github.com/SHIVIKA330/AI-hand-gesture" target="_blank" rel="noopener noreferrer" className="p-2 border border-retro-cream/20 hover:border-retro-orange rounded-xl bg-retro-dark/30 text-retro-cream/70 hover:text-retro-cream transition-colors">
                  <GithubIcon size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 8: HR SYNTH PIPELINE - Spans 1 col */}
          {/* ========================================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            className="bg-retro-cream text-retro-dark border-2 border-retro-dark rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-[6px_6px_0px_#FFA31A] relative overflow-hidden group min-h-[420px]"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-retro-olive uppercase tracking-wider font-bold">DevOps / QA // 08</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-retro-orange text-retro-dark font-bold">INTEGRTR &apos;26</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-retro-dark group-hover:text-retro-orange transition-colors">
                HR Synth Data Pipeline
              </h3>
              <p className="text-xs font-mono text-retro-orange font-semibold">Faker candidate generator & EIB loader</p>
              <p className="text-xs text-retro-dark/75 leading-relaxed font-sans font-medium">
                TypeScript monorepo built for the INTEGRTR hackathon. Automatically synthesizes mock candidate profiles, runs schema validations, and loads records to Workday EIBs.
              </p>

              {/* Mock JSON validation visual */}
              <div className="bg-retro-dark/5 border border-retro-dark/15 rounded-xl p-3.5 font-mono text-[8px] space-y-1 mt-4 shadow-inner text-retro-dark/60 overflow-hidden h-[62px]">
                <div className="text-retro-orange font-semibold flex items-center gap-1"><FileCheck size={8} /> candidate.schema.ok</div>
                <div>{`{`}</div>
                <div className="pl-3">{`"name": "Jane Doe",`}</div>
                <div className="pl-3">{`"role": "Synthesized",`}</div>
                <div>{`}`}</div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-4 border-t border-retro-dark/10 text-[9px] font-mono text-retro-olive font-extrabold">
              <span>TS · PLAYWRIGHT · WORKDAY EIB</span>
              <span className="text-retro-orange font-bold uppercase">HACKATHON DEV</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
