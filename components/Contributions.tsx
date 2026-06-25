"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Award, GitPullRequest } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function Contributions() {
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
    <section id="contributions" className="bg-retro-dark text-retro-cream py-24 px-6 md:px-12 border-t-2 border-retro-dark relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.02] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="mb-12"
        >
          <span className="font-mono text-retro-orange text-xs tracking-[0.2em] font-semibold">
            OPEN SOURCE // 05
          </span>
          <h2 className="font-serif font-bold text-4xl mt-2">
            Open Source
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* TensorFlow Hero Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
            className="relative bg-retro-green border-2 border-retro-cream/15 rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-300 shadow-[4px_4px_0px_#FFA31A]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-retro-orange/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-2 text-retro-cream/60 font-mono text-sm">
                  <GithubIcon size={16} className="text-retro-orange" />
                  <span>tensorflow / tensorflow</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-retro-cream">
                  Contributing to TensorFlow Lite&apos;s C API
                </h3>
                <p className="text-sm md:text-base text-retro-cream/70 leading-relaxed font-sans font-medium">
                  Diagnosed and patched memory error in{" "}
                  <code className="text-retro-orange font-mono bg-retro-dark/50 px-2 py-0.5 rounded text-xs">
                    tf.raw_ops.ResourceSparseApplyAdagradV2
                  </code>
                  . Focused on C++ API stability, logging structures, and TF Lite runtime.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-retro-cream/10 bg-retro-dark/30 text-retro-cream text-xs font-mono">
                    🦈 Pull Shark
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-retro-cream/10 bg-retro-dark/30 text-retro-cream text-xs font-mono">
                    🎯 YOLO
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex items-center">
                <a
                  href="https://github.com/tensorflow/tensorflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-retro-orange hover:bg-retro-cream text-retro-dark border-2 border-retro-dark font-serif font-bold px-6 py-3 rounded-xl transition-all duration-300 text-sm shadow-[2px_2px_0px_#111111] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  View on GitHub
                  <GitPullRequest size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* GitHub Stats Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Stats Widget */}
            <div className="bg-retro-green/20 border-2 border-retro-cream/15 rounded-2xl p-4 flex justify-center items-center overflow-hidden h-[210px] relative hover:border-retro-orange/30 transition-all duration-300 shadow-[4px_4px_0px_#FFA31A]">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=SHIVIKA330&show_icons=true&theme=tokyonight&hide_border=true&bg_color=111111&title_color=FFA31A&icon_color=FFA31A&text_color=F6F4EB"
                alt="Shivika's Github Stats"
                width={450}
                height={195}
                unoptimized
                className="object-contain max-w-full"
              />
            </div>

            {/* Languages Widget */}
            <div className="bg-retro-green/20 border-2 border-retro-cream/15 rounded-2xl p-4 flex justify-center items-center overflow-hidden h-[210px] relative hover:border-retro-orange/30 transition-all duration-300 shadow-[4px_4px_0px_#FFA31A]">
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=SHIVIKA330&layout=compact&theme=tokyonight&hide_border=true&bg_color=111111&title_color=FFA31A&icon_color=FFA31A&text_color=F6F4EB"
                alt="Shivika's Top Languages"
                width={380}
                height={195}
                unoptimized
                className="object-contain max-w-full"
              />
            </div>
          </motion.div>

          {/* GSSoC Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
            className="bg-retro-green/30 border-2 border-retro-cream/15 rounded-2xl p-6 flex items-start gap-4 hover:border-retro-orange/30 transition-all duration-300 shadow-[4px_4px_0px_#FFA31A]"
          >
            <div className="p-3 bg-retro-dark rounded-xl text-retro-orange shrink-0">
              <Award size={20} />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-retro-orange uppercase tracking-wider block">
                Ambassadorship
              </span>
              <h4 className="text-base md:text-lg font-serif font-bold text-retro-cream mt-1">
                GSSoC Ambassador · GirlScript Summer of Code 2025
              </h4>
              <p className="text-sm text-retro-cream/70 mt-2 font-sans font-medium leading-relaxed">
                Driving open source culture, organizing events, and mentoring students at GLA University campus.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
