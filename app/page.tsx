"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contributions from "@/components/Contributions";
import Expertise from "@/components/Expertise";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function Home() {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["about", "projects", "experience", "expertise"].includes(hash)) {
        setActiveOverlay(hash);
        document.body.style.overflow = "hidden";
      } else {
        setActiveOverlay(null);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.body.style.overflow = "unset";
    };
  }, []);

  const closeOverlay = () => {
    // Revert URL hash to close overlay
    window.location.hash = "";
  };

  return (
    <main className="min-h-screen">
      {/* Slide 1: Hero */}
      <Hero />

      {/* Slide 2 & 3: Resume & Contact (Statically scrolled at bottom) */}
      <Resume />
      <Contact />

      {/* Fullscreen Overlay Panels */}
      <AnimatePresence>
        {activeOverlay && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="fixed inset-0 z-50 bg-bg-base/98 overflow-y-auto"
          >
            {/* Sticky Overlay Header */}
            <div className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg-base/80 border-b border-border py-4 px-6">
              <div className="max-w-5xl mx-auto flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
                  {activeOverlay === "expertise" ? "Skills" : activeOverlay} / Detail View
                </span>
                
                <button
                  onClick={closeOverlay}
                  className="font-mono text-[10px] text-text-muted hover:text-text-primary transition-colors flex items-center gap-1.5 uppercase tracking-widest px-3 py-1 border border-border hover:border-text-primary"
                >
                  <X size={11} />
                  Close
                </button>
              </div>
            </div>

            {/* Overlay Content */}
            <div className="w-full">
              {activeOverlay === "about" && <About />}
              {activeOverlay === "projects" && <Projects />}
              {activeOverlay === "experience" && <Experience />}
              {activeOverlay === "expertise" && (
                <div className="space-y-0">
                  <Expertise />
                  <Contributions />
                  <Certifications />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
