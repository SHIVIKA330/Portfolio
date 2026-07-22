"use client";

import { motion } from "framer-motion";
import { GitPullRequest, Award, Shield, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function Contributions() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" as const },
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
            Open Source
          </span>
          <h2 className="font-display font-light text-4xl mt-2">
            Community & <span className="italic font-light">Contributions</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {/* Meshery (CNCF) Hero Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="relative bg-bg-surface border border-border p-6 md:p-8 transition-colors hover:border-border-hover"
          >
            <div className="relative z-10 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-text-muted font-mono text-[11px]">
                  <GithubIcon size={14} className="text-accent" />
                  <span>meshery / meshery (CNCF)</span>
                </div>
                <h3 className="text-xl font-display font-medium text-text-primary">
                  Cloud-Native Management & UI Contributions (Meshery)
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-sans font-light">
                  Active contributor to Meshery, the CNCF cloud-native management plane. Resolved UI component state management, code block copy button positioning, and frontend accessibility features across the platform.
                </p>
              </div>

              {/* Meshery PR Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-bg-base border border-border p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono text-accent font-semibold">PR #20790</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-border text-text-muted text-[8px] font-mono">
                        <Shield size={9} className="text-accent" /> MERGED
                      </span>
                    </div>
                    <p className="text-[11px] text-text-muted font-sans font-light">
                      Core feature and component enhancements in Meshery ecosystem.
                    </p>
                  </div>
                  <a
                    href="https://github.com/meshery/meshery/pull/20790"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-primary text-[10px] font-mono uppercase tracking-wider mt-3 hover:text-accent transition-colors"
                  >
                    View PR <GitPullRequest size={10} />
                  </a>
                </div>

                <div className="bg-bg-base border border-border p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono text-accent font-semibold">PR #20796</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-border text-text-muted text-[8px] font-mono">
                        <Shield size={9} className="text-accent" /> MERGED
                      </span>
                    </div>
                    <p className="text-[11px] text-text-muted font-sans font-light">
                      UI layout, bug fixes, and component refinements in Meshery codebase.
                    </p>
                  </div>
                  <a
                    href="https://github.com/meshery/meshery/pull/20796"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-primary text-[10px] font-mono uppercase tracking-wider mt-3 hover:text-accent transition-colors"
                  >
                    View PR <GitPullRequest size={10} />
                  </a>
                </div>

                <div className="bg-bg-base border border-border p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono text-accent font-semibold">PR #20809</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-border text-text-muted text-[8px] font-mono">
                        <Shield size={9} className="text-accent" /> MERGED
                      </span>
                    </div>
                    <p className="text-[11px] text-text-muted font-sans font-light">
                      Repositioned code block copy buttons, optimized window controls & UI clipboard interactions.
                    </p>
                  </div>
                  <a
                    href="https://github.com/meshery/meshery/pull/20809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-primary text-[10px] font-mono uppercase tracking-wider mt-3 hover:text-accent transition-colors"
                  >
                    View PR <GitPullRequest size={10} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TensorFlow Hero Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="relative bg-bg-surface border border-border p-6 md:p-8 transition-colors hover:border-border-hover"
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
                  I dug into the TensorFlow C++ source code to fix a memory leak in the{" "}
                  <code className="text-accent font-mono bg-bg-base border border-border px-1.5 py-0.5 rounded text-[10px]">
                    tf.raw_ops.ResourceSparseApplyAdagradV2
                  </code>
                   operation. It was a great exercise in understanding how large-scale C++ runtimes handle tensor allocations.
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
              <div key={idx} className="bg-bg-surface border border-border p-5 text-center">
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
            className="bg-bg-surface border border-border p-6 flex items-start gap-4 hover:border-border-hover transition-colors"
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
                I help run workshops on Git and open-source contributions for students at my college campus.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
