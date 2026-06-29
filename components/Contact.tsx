"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const [focusFields, setFocusFields] = useState({ name: false, email: false, message: false });
  const [fieldValues, setFieldValues] = useState({ name: "", email: "", message: "" });

  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const isFieldActive = (name: "name" | "email" | "message") => {
    return focusFields[name] || fieldValues[name].length > 0;
  };

  return (
    <section id="contact" className="bg-bg-base text-text-primary py-28 px-6 md:px-12 border-t border-border relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="flex flex-col items-center text-center gap-12 max-w-4xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="space-y-4">
          <span className="font-mono text-accent text-[10px] tracking-widest uppercase block">
            Contact / 09
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-text-primary">
            Let&apos;s build something.
          </h2>
          <p className="text-text-muted text-xs md:text-sm max-w-md leading-relaxed mx-auto pt-2 font-sans font-light">
            Open to hackathons, collaborations, developer roles, and interesting problems.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="mailto:shivikajain330@gmail.com"
            className="flex items-center justify-center w-12 h-12 border border-border bg-bg-surface hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/shivikajain330/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 border border-border bg-bg-surface hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="https://github.com/SHIVIKA330"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 border border-border bg-bg-surface hover:border-text-primary text-text-muted hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
        </div>

        {/* Minimalist Contact Form */}
        <form
          action="https://formspree.io/f/mqkrbjge"
          method="POST"
          className="w-full max-w-lg text-left space-y-6 mt-4 bg-bg-surface border border-border p-8 md:p-10"
        >
          {/* Name Field */}
          <div className="relative flex flex-col pt-4">
            <label
              htmlFor="name"
              className={`absolute left-0 transition-all duration-300 font-mono text-[9px] uppercase tracking-widest pointer-events-none ${
                isFieldActive("name")
                  ? "-top-1 text-accent font-medium"
                  : "top-5 text-text-muted/65"
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
              className="w-full bg-transparent border-b border-border focus:border-accent text-text-primary text-xs py-2 px-0 outline-none transition-colors font-sans"
            />
          </div>

          {/* Email Field */}
          <div className="relative flex flex-col pt-4">
            <label
              htmlFor="email"
              className={`absolute left-0 transition-all duration-300 font-mono text-[9px] uppercase tracking-widest pointer-events-none ${
                isFieldActive("email")
                  ? "-top-1 text-accent font-medium"
                  : "top-5 text-text-muted/65"
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
              className="w-full bg-transparent border-b border-border focus:border-accent text-text-primary text-xs py-2 px-0 outline-none transition-colors font-sans"
            />
          </div>

          {/* Message Field */}
          <div className="relative flex flex-col pt-4">
            <label
              htmlFor="message"
              className={`absolute left-0 transition-all duration-300 font-mono text-[9px] uppercase tracking-widest pointer-events-none ${
                isFieldActive("message")
                  ? "-top-1 text-accent font-medium"
                  : "top-5 text-text-muted/65"
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
              className="w-full bg-transparent border-b border-border focus:border-accent text-text-primary text-xs py-2 px-0 outline-none transition-colors resize-none font-sans leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-text-primary text-bg-base font-sans text-xs uppercase tracking-widest font-semibold px-6 py-3.5 hover:bg-accent hover:text-bg-base transition-colors"
            >
              Send Message
              <Send size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
