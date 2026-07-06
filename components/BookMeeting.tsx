"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Video, ArrowUpRight } from "lucide-react";

const MEETING_URL = "https://calendar.app.google/dGuAHA5Rioajgie78";

export default function BookMeeting() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.1 },
    },
  };

  const features = [
    {
      icon: <Video size={14} />,
      label: "Google Meet",
      desc: "Virtual face-to-face",
    },
    {
      icon: <Clock size={14} />,
      label: "Flexible Slots",
      desc: "Pick a time that works",
    },
    {
      icon: <Calendar size={14} />,
      label: "Quick Setup",
      desc: "Instant calendar invite",
    },
  ];

  return (
    <section
      id="book-meeting"
      className="relative bg-bg-base text-text-primary py-28 px-6 md:px-12 border-t border-border overflow-hidden"
    >
      {/* Subtle gradient accent in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-accent text-[10px] tracking-widest uppercase block">
            Schedule
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-text-primary">
            Book a <span className="italic">Meeting</span>
          </h2>
          <p className="text-text-muted text-xs md:text-sm max-w-md leading-relaxed mx-auto pt-2 font-sans font-light">
            Want to discuss a project, collaboration, or opportunity? Schedule a
            quick video call with me via Google Meet.
          </p>
        </div>

        {/* Meeting Card */}
        <motion.div
          variants={cardVariants}
          className="max-w-lg mx-auto"
        >
          <div className="relative group">
            {/* Outer glow on hover */}
            <div className="absolute -inset-px bg-gradient-to-b from-accent/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            {/* Card */}
            <div className="relative bg-bg-surface border border-border p-8 md:p-10 space-y-8 transition-colors duration-300 group-hover:border-border-hover">
              {/* Google Meet Badge */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent/10 border border-accent/20">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-accent"
                    >
                      <path
                        d="M15.5 9.5L19.79 6.21C20.13 5.95 20.61 6.19 20.61 6.62V17.38C20.61 17.81 20.13 18.05 19.79 17.79L15.5 14.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="3.5"
                        y="6"
                        width="12"
                        height="12"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  {/* Pulse indicator */}
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full">
                    <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-text-muted block">
                    Video Call
                  </span>
                  <span className="text-text-primary font-sans text-sm font-medium">
                    Google Meet
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-2 py-3"
                  >
                    <div className="text-accent/70">{feature.icon}</div>
                    <span className="font-mono text-[9px] tracking-widest uppercase text-text-primary">
                      {feature.label}
                    </span>
                    <span className="text-text-muted text-[10px] font-sans">
                      {feature.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* CTA Button */}
              <div className="flex flex-col items-center gap-4">
                <a
                  href={MEETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full flex items-center justify-center gap-2.5 bg-text-primary text-bg-base font-sans text-xs uppercase tracking-widest font-semibold px-6 py-4 hover:bg-accent hover:text-bg-base transition-all duration-300"
                >
                  <Calendar size={13} />
                  Schedule a Call
                  <ArrowUpRight
                    size={13}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  />
                </a>
                <span className="text-[10px] font-mono text-text-faint tracking-wider uppercase">
                  Free · 30 min · No signup required
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
