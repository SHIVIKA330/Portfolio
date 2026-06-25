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
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto border-t border-border/30">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.25em] font-bold block">
          PORTFOLIO // 02
        </span>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-2 text-text-primary">
          Things I&apos;ve Shipped
        </h2>
      </motion.div>

      {/* Asymmetric Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* ========================================================================= */}
        {/* CARD 1: OFFSHIFT - FEATURED BENTO CARD (Spans 2 cols on md/lg) */}
        {/* ========================================================================= */}
        <motion.div
          variants={cardVariants}
          whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: "rgba(124,111,255,0.4)" }}
          className="md:col-span-2 bg-bg-surface border border-border rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_50px_rgba(124,111,255,0.15)] relative overflow-hidden group min-h-[420px]"
        >
          {/* Accent glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Project info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-violet-500/20 text-violet-400 border border-violet-500/30 shadow-[0_0_10px_rgba(124,111,255,0.1)]">
                  <Sparkles size={10} /> FEATURED PROJECT
                </span>
                <span className="text-[10px] font-mono text-text-muted">DEVTrails × Guidewire &apos;26</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary group-hover:text-violet-400 transition-colors">
                OffShift
              </h3>
              <p className="text-xs font-mono text-mint-400 font-semibold tracking-wide">
                Parametric income insurance for gig delivery workers
              </p>
              <p className="text-sm text-text-muted leading-relaxed font-sans">
                Auto-payouts triggered by food delivery app outages (Downdetector API) and extreme weather disruptions. Zero claims processing overhead: payouts are fired instantly using Razorpay UPI endpoints.
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["Next.js 14", "TypeScript", "Supabase", "Razorpay", "Claude API", "Upstash Redis"].map((tech) => (
                  <span key={tech} className="text-[9px] font-mono bg-bg-elevated/70 border border-border/80 text-text-muted rounded-full px-2.5 py-0.5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated Live Payment Dashboard Visual (Innovative Highlight) */}
            <div className="lg:col-span-5 bg-bg-base/60 border border-border/80 rounded-2xl p-4 font-mono text-[10px] text-text-muted space-y-3 h-full flex flex-col justify-between shadow-inner">
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                <span className="flex items-center gap-1.5 text-text-primary font-semibold">
                  <Activity size={10} className="text-mint-400 animate-pulse" /> LEDGER_FEED
                </span>
                <span className="text-[9px]">UPI_LIVE</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-text-muted">
                  <span>OUTAGE DETECTED</span>
                  <span className="text-[#FF5F56]">ZOMATO // DOWN</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>LOC: MATHURA UP</span>
                  <span className="text-mint-400">TEMP: 43C</span>
                </div>
                <div className="flex justify-between items-center border-t border-border/20 pt-2 text-text-primary">
                  <span>PARAMETRIC PAYOUT</span>
                  <span className="font-semibold text-mint-400">INR 350.00</span>
                </div>
              </div>

              {/* Progress visual */}
              <div className="pt-2 flex items-center justify-between border-t border-border/20 text-[9px] text-mint-400">
                <span className="flex items-center gap-1"><CheckCircle2 size={10} /> TRANSACT_OK</span>
                <span>TXN_8817293B</span>
              </div>
            </div>
          </div>

          {/* Card footer links */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-border/40 relative z-10">
            <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
              <span className="flex items-center gap-1"><Star size={11} className="text-violet-400 fill-violet-400/10" /> 3</span>
              <span className="flex items-center gap-1"><GitFork size={11} className="text-mint-400" /> 2</span>
            </div>
            <div className="flex items-center gap-4">
              {!shouldReduceMotion && (
                <span className="text-xs font-mono text-violet-400 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-semibold select-none">
                  → View Project
                </span>
              )}
              <div className="flex gap-2">
                <a href="https://github.com/SHIVIKA330/OffShift" target="_blank" rel="noopener noreferrer" className="p-2 border border-border/80 hover:border-border rounded-xl bg-bg-elevated/40 text-text-muted hover:text-text-primary transition-colors">
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
          whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: "rgba(124,111,255,0.4)" }}
          className="bg-bg-surface border border-border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,111,255,0.1)] relative overflow-hidden group min-h-[420px]"
        >
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Extension // 02</span>
            <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-violet-400 transition-colors">
              Phishing Detector
            </h3>
            <p className="text-xs font-mono text-mint-400 font-semibold">Chrome Extension for real-time security</p>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              ML-powered URL and content classification engine running inside a Chrome extension popup context. Flags phishing threat payloads instantly as you browse.
            </p>

            {/* Mock browser address bar (Interactive Visual Element) */}
            <div className="bg-bg-base/60 border border-border/80 rounded-xl p-3.5 font-mono text-[9px] space-y-2 mt-4 shadow-inner">
              <div className="flex items-center gap-2 bg-bg-surface border border-border/40 rounded px-2 py-1 text-text-muted truncate">
                <span className="text-[#FF5F56] font-extrabold animate-pulse">!</span>
                <span className="truncate">http://verification-paypal-security.com</span>
              </div>
              <div className="flex justify-between items-center text-[8px] pt-1">
                <span className="text-[#FF5F56] font-semibold flex items-center gap-1"><AlertTriangle size={8} /> PAYLOAD_WARNING</span>
                <span className="text-text-muted">RISK: 98%</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-border/40">
            <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
              <span className="flex items-center gap-1"><Star size={11} className="text-violet-400 fill-violet-400/10" /> 1</span>
            </div>
            <div className="flex gap-2">
              <a href="https://github.com/SHIVIKA330/Phishing-Detector" target="_blank" rel="noopener noreferrer" className="p-2 border border-border/80 hover:border-border rounded-xl bg-bg-elevated/40 text-text-muted hover:text-text-primary transition-colors">
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
          whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: "rgba(124,111,255,0.4)" }}
          className="bg-bg-surface border border-border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,111,255,0.1)] relative overflow-hidden group min-h-[420px]"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">AI Agent // 03</span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-400">ET Hackathon &apos;26</span>
            </div>
            <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-violet-400 transition-colors">
              Artha — Financial Twin AI
            </h3>
            <p className="text-xs font-mono text-mint-400 font-semibold">Emotion-aware financial twin concierge</p>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              Built on NVIDIA Llama 3.1 70B. Features custom silence intelligence and emotion detection to dynamically adapt interaction timings to user vocal distress scores.
            </p>

            {/* Mock Audio Waveform Visualization */}
            <div className="flex items-center justify-between gap-1.5 h-12 px-4 bg-bg-base/60 border border-border/80 rounded-xl mt-4 shadow-inner">
              {[0.4, 0.9, 0.2, 0.7, 0.5, 0.8, 0.3, 0.6, 0.4, 0.9, 0.2, 0.7, 0.5, 0.8, 0.3].map((val, i) => (
                <span
                  key={i}
                  style={{ height: `${val * 100}%` }}
                  className={`w-[3px] rounded-full transition-all duration-500 ${
                    pulseState === 1 ? "bg-mint-400" : "bg-violet-500"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-border/40 text-[9px] font-mono text-text-muted">
            <span>NVIDIA API · LLAMA 3.1</span>
            <span className="text-mint-400 font-bold uppercase">HACKATHON DEV</span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 4: CAREERSEED - Spans 1 col */}
        {/* ========================================================================= */}
        <motion.div
          variants={cardVariants}
          whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: "rgba(124,111,255,0.4)" }}
          className="bg-bg-surface border border-border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,111,255,0.1)] relative overflow-hidden group min-h-[420px]"
        >
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Full-Stack // 04</span>
            <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-violet-400 transition-colors">
              CareerSeed
            </h3>
            <p className="text-xs font-mono text-mint-400 font-semibold">Resume builder & matching finder</p>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              One-stop platform designed for freshers and laid-off professionals. Facilitates layout formatting, schema checks, and exports optimized resume PDFs instantly.
            </p>

            {/* Mock resume editor layout */}
            <div className="bg-bg-base/60 border border-border/80 rounded-xl p-3.5 font-mono text-[9px] space-y-2 mt-4 shadow-inner">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-bg-elevated border border-border/40 flex items-center justify-center font-bold text-violet-400">S</div>
                <div>
                  <span className="block text-text-primary font-bold text-[8px] leading-tight">Shivika Jain</span>
                  <span className="block text-[7px] text-text-muted leading-none">B.Tech CSE</span>
                </div>
              </div>
              <div className="w-full h-1 bg-border/40 rounded" />
              <div className="w-5/6 h-1 bg-border/40 rounded" />
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-border/40">
            <span className="text-[9px] font-mono text-text-muted">PYTHON · STREAMLIT</span>
            <div className="flex gap-2">
              <a href="https://github.com/SHIVIKA330/CareerSeed" target="_blank" rel="noopener noreferrer" className="p-2 border border-border/80 hover:border-border rounded-xl bg-bg-elevated/40 text-text-muted hover:text-text-primary transition-colors">
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
          whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: "rgba(124,111,255,0.4)" }}
          className="bg-bg-surface border border-border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,111,255,0.1)] relative overflow-hidden group min-h-[420px]"
        >
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Integrations // 05</span>
            <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-violet-400 transition-colors">
              Logistics Bot
            </h3>
            <p className="text-xs font-mono text-mint-400 font-semibold">Technician dispatch & update bot</p>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              Built for Jain Kante Wale. Features an operator dispatch board that updates tracking statuses and triggers automated client notifications via WhatsApp Cloud API.
            </p>

            {/* Mock chat thread bubble visual */}
            <div className="bg-bg-base/60 border border-border/80 rounded-xl p-3 font-mono text-[8px] space-y-2 mt-4 shadow-inner">
              <div className="bg-bg-surface/50 border border-border/40 rounded-lg p-2 text-text-muted w-4/5">
                Dispatching technician to loc A...
              </div>
              <div className="bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-lg p-2 w-4/5 ml-auto text-right">
                Status: DISPATCHED. ETA 25m.
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-border/40">
            <span className="text-[9px] font-mono text-text-muted">JS · WHATSAPP CLOUD API</span>
            <div className="flex gap-2">
              <a href="https://github.com/SHIVIKA330/whatsapp-logistics-bot" target="_blank" rel="noopener noreferrer" className="p-2 border border-border/80 hover:border-border rounded-xl bg-bg-elevated/40 text-text-muted hover:text-text-primary transition-colors">
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
          whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: "rgba(124,111,255,0.4)" }}
          className="bg-bg-surface border border-border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,111,255,0.1)] relative overflow-hidden group min-h-[420px]"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Fintech // 06</span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-400">Cognizant &apos;26</span>
            </div>
            <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-violet-400 transition-colors">
              BharatLedger
            </h3>
            <p className="text-xs font-mono text-mint-400 font-semibold">Credit & banking for informal workers</p>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              Fintech portal targeted at India&apos;s 450M+ informal sector workers, providing micro-lending metrics, credit history mapping, and digital banking access.
            </p>

            {/* Mock ledger data visual */}
            <div className="bg-bg-base/60 border border-border/80 rounded-xl p-3.5 font-mono text-[9px] space-y-2 mt-4 shadow-inner">
              <div className="flex justify-between items-center text-text-muted">
                <span>CREDIT_INDEX</span>
                <span className="text-mint-400 font-bold">780 / GOOD</span>
              </div>
              <div className="w-full bg-bg-elevated h-1 rounded overflow-hidden">
                <div className="bg-mint-400 h-full w-[80%]" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-border/40 text-[9px] font-mono text-text-muted">
            <span>NEXT.JS · SUPABASE</span>
            <span className="text-mint-400 font-bold uppercase">HACKATHON DEV</span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 7: AI HAND GESTURE - Spans 1 col */}
        {/* ========================================================================= */}
        <motion.div
          variants={cardVariants}
          whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: "rgba(124,111,255,0.4)" }}
          className="bg-bg-surface border border-border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,111,255,0.1)] relative overflow-hidden group min-h-[420px]"
        >
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Computer Vision // 07</span>
            <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-violet-400 transition-colors">
              AI Hand Gesture
            </h3>
            <p className="text-xs font-mono text-mint-400 font-semibold">Real-time classification pipeline</p>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              Classifies manual hand configurations and sweeps in real-time. Employs a custom OpenCV input image preprocessing pipeline and feature extraction metrics.
            </p>

            {/* Mock mesh mapping grid (Innovative visual) */}
            <div className="grid grid-cols-6 gap-1 p-2 bg-bg-base/60 border border-border/80 rounded-xl mt-4 h-16 shadow-inner relative overflow-hidden">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className={`border border-border/30 rounded-sm flex items-center justify-center text-[6px] transition-colors duration-500 ${
                    i === 7 || i === 8 || i === 13 || i === 14 ? "bg-violet-500/10 border-violet-500/30 text-violet-400" : "text-transparent"
                  }`}
                >
                  {i === 8 && "+"}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-border/40">
            <span className="text-[9px] font-mono text-text-muted">PYTHON · OPENCV</span>
            <div className="flex gap-2">
              <a href="https://github.com/SHIVIKA330/AI-hand-gesture" target="_blank" rel="noopener noreferrer" className="p-2 border border-border/80 hover:border-border rounded-xl bg-bg-elevated/40 text-text-muted hover:text-text-primary transition-colors">
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
          whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: "rgba(124,111,255,0.4)" }}
          className="bg-bg-surface border border-border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,111,255,0.1)] relative overflow-hidden group min-h-[420px]"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">DevOps / QA // 08</span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-400">INTEGRTR &apos;26</span>
            </div>
            <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-violet-400 transition-colors">
              HR Synth Data Pipeline
            </h3>
            <p className="text-xs font-mono text-mint-400 font-semibold">Faker candidate generator & EIB loader</p>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              TypeScript monorepo built for the INTEGRTR hackathon. Automatically synthesizes mock candidate profiles, runs schema validations, and loads records to Workday EIBs.
            </p>

            {/* Mock JSON validation visual */}
            <div className="bg-bg-base/60 border border-border/80 rounded-xl p-3.5 font-mono text-[8px] space-y-1 mt-4 shadow-inner text-text-muted overflow-hidden h-[62px]">
              <div className="text-mint-400 flex items-center gap-1"><FileCheck size={8} /> candidate.schema.ok</div>
              <div>{`{`}</div>
              <div className="pl-3">{`"name": "Jane Doe",`}</div>
              <div className="pl-3">{`"role": "Synthesized",`}</div>
              <div>{`}`}</div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-border/40 text-[9px] font-mono text-text-muted">
            <span>TS · PLAYWRIGHT · WORKDAY EIB</span>
            <span className="text-mint-400 font-bold uppercase">HACKATHON DEV</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
