"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  
  // Custom states for premium input field float-up transitions
  const [focusFields, setFocusFields] = useState({ name: false, email: false, message: false });
  const [fieldValues, setFieldValues] = useState({ name: "", email: "", message: "" });

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const isFieldActive = (name: "name" | "email" | "message") => {
    return focusFields[name] || fieldValues[name].length > 0;
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-4xl mx-auto border-t border-border/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="flex flex-col items-center text-center gap-12"
      >
        {/* Header */}
        <div className="space-y-4">
          <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.25em] font-bold block">
            CONTACT // 04
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
            Let&apos;s build something.
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-md leading-relaxed mx-auto pt-2">
            Open to hackathons, collaborations, internships, and interesting problems.
          </p>
        </div>

        {/* Social Icons with min 64px tap targets */}
        <div className="flex justify-center gap-6">
          <a
            href="mailto:shivikajain330@gmail.com"
            className="flex items-center justify-center w-16 h-16 rounded-full border border-border bg-bg-surface hover:bg-bg-elevated text-text-primary hover:text-violet-400 hover:border-violet-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(124,111,255,0.02)] hover:shadow-[0_0_25px_rgba(124,111,255,0.08)]"
            aria-label="Email Shivika Jain"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shivikajain330/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full border border-border bg-bg-surface hover:bg-bg-elevated text-text-primary hover:text-violet-400 hover:border-violet-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(124,111,255,0.02)] hover:shadow-[0_0_25px_rgba(124,111,255,0.08)]"
            aria-label="View Shivika's LinkedIn Profile"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="https://github.com/SHIVIKA330"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full border border-border bg-bg-surface hover:bg-bg-elevated text-text-primary hover:text-violet-400 hover:border-violet-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(124,111,255,0.02)] hover:shadow-[0_0_25px_rgba(124,111,255,0.08)]"
            aria-label="View Shivika's GitHub Profile"
          >
            <GithubIcon size={20} />
          </a>
        </div>

        {/* Minimalist Underlined Contact Form with Floating Labels */}
        <form
          action="https://formspree.io/f/mqkrbjge" // Standard placeholder for custom user configurations
          method="POST"
          className="w-full max-w-lg text-left space-y-8 mt-4 bg-bg-surface/30 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-border/80 shadow-2xl relative"
        >
          {/* Top subtle highlight line */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

          {/* Name Field */}
          <div className="relative flex flex-col pt-4">
            <label
              htmlFor="name"
              className={`absolute left-0 transition-all duration-300 font-mono text-[9px] uppercase tracking-widest pointer-events-none ${
                isFieldActive("name")
                  ? "-top-1 text-mint-400 font-bold"
                  : "top-5 text-text-muted/60"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={fieldValues.name}
              onFocus={() => setFocusFields((prev) => ({ ...prev, name: true }))}
              onBlur={() => setFocusFields((prev) => ({ ...prev, name: false }))}
              onChange={(e) => setFieldValues((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full bg-transparent border-b border-border/80 focus:border-violet-500 text-text-primary text-sm py-2 px-0 outline-none transition-colors font-sans"
            />
          </div>

          {/* Email Field */}
          <div className="relative flex flex-col pt-4">
            <label
              htmlFor="email"
              className={`absolute left-0 transition-all duration-300 font-mono text-[9px] uppercase tracking-widest pointer-events-none ${
                isFieldActive("email")
                  ? "-top-1 text-mint-400 font-bold"
                  : "top-5 text-text-muted/60"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={fieldValues.email}
              onFocus={() => setFocusFields((prev) => ({ ...prev, email: true }))}
              onBlur={() => setFocusFields((prev) => ({ ...prev, email: false }))}
              onChange={(e) => setFieldValues((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full bg-transparent border-b border-border/80 focus:border-violet-500 text-text-primary text-sm py-2 px-0 outline-none transition-colors font-sans"
            />
          </div>

          {/* Message Field */}
          <div className="relative flex flex-col pt-4">
            <label
              htmlFor="message"
              className={`absolute left-0 transition-all duration-300 font-mono text-[9px] uppercase tracking-widest pointer-events-none ${
                isFieldActive("message")
                  ? "-top-1 text-mint-400 font-bold"
                  : "top-5 text-text-muted/60"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={fieldValues.message}
              onFocus={() => setFocusFields((prev) => ({ ...prev, message: true }))}
              onBlur={() => setFocusFields((prev) => ({ ...prev, message: false }))}
              onChange={(e) => setFieldValues((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full bg-transparent border-b border-border/80 focus:border-violet-500 text-text-primary text-sm py-2 px-0 outline-none transition-colors resize-none font-sans leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-gradient-primary hover:opacity-95 text-bg-base font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(124,111,255,0.2)] hover:shadow-[0_0_25px_rgba(124,111,255,0.4)]"
            >
              Send Message
              <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
