"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto border-t border-border/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="flex flex-col items-center text-center gap-12"
      >
        {/* Header */}
        <div className="space-y-4">
          <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.2em] font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary">
            Let&apos;s build something.
          </h2>
          <div className="h-[1px] w-24 bg-gradient-primary mx-auto my-6" />
          <p className="text-text-muted text-base md:text-lg max-w-md leading-relaxed mx-auto">
            Open to hackathons, collaborations, internships, and interesting problems.
          </p>
        </div>

        {/* Social Icons with min 64px tap targets */}
        <div className="flex justify-center gap-6">
          <a
            href="mailto:shivikajain330@gmail.com"
            className="flex items-center justify-center w-16 h-16 rounded-full border border-border bg-bg-surface hover:bg-bg-elevated text-text-primary hover:text-violet-400 hover:border-violet-500/40 transition-all duration-300 shadow-sm"
            aria-label="Email Shivika Jain"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/shivikajain330/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full border border-border bg-bg-surface hover:bg-bg-elevated text-text-primary hover:text-violet-400 hover:border-violet-500/40 transition-all duration-300 shadow-sm"
            aria-label="View Shivika's LinkedIn Profile"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href="https://github.com/SHIVIKA330"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full border border-border bg-bg-surface hover:bg-bg-elevated text-text-primary hover:text-violet-400 hover:border-violet-500/40 transition-all duration-300 shadow-sm"
            aria-label="View Shivika's GitHub Profile"
          >
            <GithubIcon size={22} />
          </a>
        </div>

        {/* Minimalist Underlined Contact Form */}
        <form
          action="https://formspree.io/f/mqkrbjge" // Placeholder or actual Formspree ID
          method="POST"
          className="w-full max-w-lg text-left space-y-8 mt-4 bg-bg-surface/30 p-8 rounded-2xl border border-border/80 shadow-xl"
        >
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full bg-transparent border-b border-border/85 focus:border-violet-500 text-text-primary text-sm py-2 px-1 outline-none transition-colors placeholder:text-text-muted/40 font-sans"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-border/85 focus:border-violet-500 text-text-primary text-sm py-2 px-1 outline-none transition-colors placeholder:text-text-muted/40 font-sans"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="What would you like to build?"
              className="w-full bg-transparent border-b border-border/85 focus:border-violet-500 text-text-primary text-sm py-2 px-1 outline-none transition-colors resize-none placeholder:text-text-muted/40 font-sans leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-gradient-primary hover:opacity-95 text-bg-base font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-[0_0_12px_rgba(124,111,255,0.2)]"
            >
              Send Message
              <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
