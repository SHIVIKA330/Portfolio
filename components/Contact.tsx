"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  
  // Custom states for input field float-up transitions
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
    <section id="contact" className="bg-retro-dark text-retro-cream py-28 px-6 md:px-12 border-t-2 border-retro-dark relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.02] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="flex flex-col items-center text-center gap-12 max-w-4xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="space-y-4">
          <span className="font-mono text-retro-orange text-xs tracking-[0.25em] font-bold block">
            CONTACT // 09
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-retro-cream">
            Let&apos;s build something.
          </h2>
          <p className="text-retro-cream/70 text-base md:text-lg max-w-md leading-relaxed mx-auto pt-2 font-sans font-medium">
            Open to hackathons, collaborations, internships, and interesting problems.
          </p>
        </div>

        {/* Social Icons with min 64px tap targets */}
        <div className="flex justify-center gap-6">
          <a
            href="mailto:shivikajain330@gmail.com"
            className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-retro-cream/10 bg-retro-green hover:bg-retro-orange text-retro-cream hover:text-retro-dark hover:border-retro-dark transition-all duration-300 shadow-[3px_3px_0px_#FFA31A]"
            aria-label="Email Shivika Jain"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shivikajain330/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-retro-cream/10 bg-retro-green hover:bg-retro-orange text-retro-cream hover:text-retro-dark hover:border-retro-dark transition-all duration-300 shadow-[3px_3px_0px_#FFA31A]"
            aria-label="View Shivika's LinkedIn Profile"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="https://github.com/SHIVIKA330"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-retro-cream/10 bg-retro-green hover:bg-retro-orange text-retro-cream hover:text-retro-dark hover:border-retro-dark transition-all duration-300 shadow-[3px_3px_0px_#FFA31A]"
            aria-label="View Shivika's GitHub Profile"
          >
            <GithubIcon size={20} />
          </a>
        </div>

        {/* Minimalist Contact Form with Floating Labels */}
        <form
          action="https://formspree.io/f/mqkrbjge"
          method="POST"
          className="w-full max-w-lg text-left space-y-8 mt-4 bg-retro-green border-2 border-retro-cream/15 p-8 md:p-10 rounded-3xl shadow-[6px_6px_0px_#FFA31A] relative"
        >
          {/* Top subtle highlight line */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-retro-orange/30 to-transparent" />

          {/* Name Field */}
          <div className="relative flex flex-col pt-4">
            <label
              htmlFor="name"
              className={`absolute left-0 transition-all duration-300 font-mono text-[9px] uppercase tracking-widest pointer-events-none ${
                isFieldActive("name")
                  ? "-top-1 text-retro-orange font-bold"
                  : "top-5 text-retro-cream/50"
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
              className="w-full bg-transparent border-b-2 border-retro-cream/10 focus:border-retro-orange text-retro-cream text-sm py-2 px-0 outline-none transition-colors font-sans"
            />
          </div>

          {/* Email Field */}
          <div className="relative flex flex-col pt-4">
            <label
              htmlFor="email"
              className={`absolute left-0 transition-all duration-300 font-mono text-[9px] uppercase tracking-widest pointer-events-none ${
                isFieldActive("email")
                  ? "-top-1 text-retro-orange font-bold"
                  : "top-5 text-retro-cream/50"
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
              className="w-full bg-transparent border-b-2 border-retro-cream/10 focus:border-retro-orange text-retro-cream text-sm py-2 px-0 outline-none transition-colors font-sans"
            />
          </div>

          {/* Message Field */}
          <div className="relative flex flex-col pt-4">
            <label
              htmlFor="message"
              className={`absolute left-0 transition-all duration-300 font-mono text-[9px] uppercase tracking-widest pointer-events-none ${
                isFieldActive("message")
                  ? "-top-1 text-retro-orange font-bold"
                  : "top-5 text-retro-cream/50"
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
              className="w-full bg-transparent border-b-2 border-retro-cream/10 focus:border-retro-orange text-retro-cream text-sm py-2 px-0 outline-none transition-colors resize-none font-sans leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-retro-orange text-retro-dark border-2 border-retro-dark font-serif font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-[3px_3px_0px_#111111] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
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
