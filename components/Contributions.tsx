"use client";

import { motion } from "framer-motion";
import { GitPullRequest, Award, Shield, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function Contributions() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const gitMetrics = [
    { label: "Pull Requests", value: "15+" },
    { label: "Commits Shipped", value: "280+" },
    { label: "OSS Repositories", value: "08" },
    { label: "Target Org", value: "TensorFlow" },
  ];

  return (
    <section id="contributions" className="bg-bg-base/40 backdrop-blur-sm text-text-primary py-24 px-6 md:px-12 border-t border-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="mb-12"
        >
          <span className="font-mono text-accent text-[10px] tracking-widest uppercase block">
            Open Source / 05
          </span>
          <h2 className="font-display font-light text-4xl mt-2">
            Community & Contributions
          </h2>
        </motion.div>

        <div className="space-y-6">
          {/* TensorFlow Hero Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="relative bg-bg-surface backdrop-blur-md border border-border p-6 md:p-8 transition-colors hover:border-border-hover"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-2 text-text-muted font-mono text-[11px]">
                  <GithubIcon size={14} className="text-accent" />
                  <span>tensorflow / tensorflow</span>
                </div>
                <h3 className="text-xl font-display font-medium text-text-primary">
                  Contributing to TensorFlow Lite&apos;s C API
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-sans font-light">
                  Diagnosed and patched memory error in{" "}
                  <code className="text-accent font-mono bg-bg-base border border-border px-1.5 py-0.5 rounded text-[10px]">
                    tf.raw_ops.ResourceSparseApplyAdagradV2
                  </code>
                  . Focused on C++ API stability, logging structures, and TF Lite runtime.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border bg-bg-base text-text-muted text-[9px] font-mono">
                    <Shield size={10} className="text-accent" /> PR MERGED
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border bg-bg-base text-text-muted text-[9px] font-mono">
                    <Cpu size={10} className="text-accent" /> TENSORFLOW CORE
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex items-center">
                <a
                  href="https://github.com/tensorflow/tensorflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-text-primary text-bg-base font-sans text-xs uppercase tracking-widest font-semibold px-5 py-3 hover:bg-accent hover:text-bg-base transition-colors"
                >
                  View Source
                  <GitPullRequest size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Typographic GitHub Stats Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {gitMetrics.map((metric, idx) => (
              <div key={idx} className="bg-bg-surface backdrop-blur-md border border-border p-5 text-center">
                <span className="font-display font-light text-2xl text-text-primary block">
                  {metric.value}
                </span>
                <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* GSSoC Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="bg-bg-surface backdrop-blur-md border border-border p-6 flex items-start gap-4 hover:border-border-hover transition-colors"
          >
            <div className="p-2.5 bg-bg-base border border-border text-accent shrink-0">
              <Award size={16} />
            </div>
            <div>
              <span className="text-[9px] font-mono font-medium text-accent uppercase tracking-widest block">
                Ambassadorship
              </span>
              <h4 className="text-base font-display font-medium text-text-primary mt-1">
                GSSoC Ambassador · GirlScript Summer of Code 2025
              </h4>
              <p className="text-xs text-text-muted mt-2 font-sans font-light leading-relaxed">
                Driving open source culture, organizing events, and mentoring students at GLA University campus.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
