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
    <section id="contributions" className="py-24 px-6 max-w-6xl mx-auto border-t border-border/30">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mb-12"
      >
        <span className="font-mono text-mint-400 text-[10px] uppercase tracking-[0.2em] font-semibold">
          OPEN SOURCE
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-text-primary">
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
          className="relative bg-bg-surface border border-border rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(124,111,255,0.08)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-text-muted font-mono text-sm">
                <GithubIcon size={16} className="text-violet-400" />
                <span>tensorflow / tensorflow</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary">
                Contributing to TensorFlow Lite&apos;s C API
              </h3>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                Diagnosed and patched memory error in{" "}
                <code className="text-mint-400 font-mono bg-bg-elevated px-1.5 py-0.5 rounded text-xs">
                  tf.raw_ops.ResourceSparseApplyAdagradV2
                </code>
                . Focused on C++ API stability, logging structures, and TF Lite runtime.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-bg-elevated text-text-primary text-xs font-mono">
                  🦈 Pull Shark
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-bg-elevated text-text-primary text-xs font-mono">
                  🎯 YOLO
                </span>
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <a
                href="https://github.com/tensorflow/tensorflow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-bg-elevated hover:bg-violet-500 hover:text-bg-base text-text-primary border border-border hover:border-violet-500 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
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
          <div className="bg-bg-surface border border-border rounded-2xl p-4 flex justify-center items-center overflow-hidden h-[210px] relative hover:border-violet-500/20 transition-all duration-300">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=SHIVIKA330&show_icons=true&theme=tokyonight&hide_border=true&bg_color=111118&title_color=7C6FFF&icon_color=00D9A5"
              alt="Shivika's Github Stats"
              width={450}
              height={195}
              unoptimized
              className="object-contain max-w-full"
            />
          </div>

          {/* Languages Widget */}
          <div className="bg-bg-surface border border-border rounded-2xl p-4 flex justify-center items-center overflow-hidden h-[210px] relative hover:border-violet-500/20 transition-all duration-300">
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=SHIVIKA330&layout=compact&theme=tokyonight&hide_border=true&bg_color=111118&title_color=7C6FFF"
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
          className="bg-bg-surface border border-border rounded-2xl p-6 flex items-start gap-4 hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,111,255,0.04)]"
        >
          <div className="p-3 bg-bg-elevated rounded-xl text-mint-400 shrink-0">
            <Award size={20} />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold text-mint-400 uppercase tracking-wider block">
              Ambassadorship
            </span>
            <h4 className="text-base md:text-lg font-display font-semibold text-text-primary mt-1">
              GSSoC Ambassador · GirlScript Summer of Code 2025
            </h4>
            <p className="text-sm text-text-muted mt-2 leading-relaxed">
              Driving open source culture, organizing events, and mentoring students at GLA University campus.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
