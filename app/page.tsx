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

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("about");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["about", "projects", "experience", "expertise"].includes(hash)) {
        setActiveTab(hash);
        const container = document.getElementById("dynamic-content");
        if (container) {
          setTimeout(() => {
            container.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const tabs = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "expertise", label: "Skills" },
  ];

  return (
    <main className="min-h-screen">
      {/* Slide 1: Hero */}
      <Hero />

      {/* Dynamic Content Panel Container */}
      <div id="dynamic-content" className="w-full">
        {/* Tab Selector */}
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-8 flex flex-wrap gap-4 md:gap-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                window.location.hash = `#${tab.id}`;
                setActiveTab(tab.id);
              }}
              className={`font-mono text-xs uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-accent text-text-primary font-semibold"
                  : "border-transparent text-text-muted hover:text-text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Selected Viewport */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <About />
              </motion.div>
            )}

            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <Projects />
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <Experience />
              </motion.div>
            )}

            {activeTab === "expertise" && (
              <motion.div
                key="expertise"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <Expertise />
                <Contributions />
                <Certifications />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Slide 2 & 3: Resume & Contact (Statically scrolled at bottom) */}
      <Resume />
      <Contact />
    </main>
  );
}
