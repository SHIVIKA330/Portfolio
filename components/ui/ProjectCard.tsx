"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Star, GitFork, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  title: string;
  oneLine: string;
  body: string;
  stack: string[];
  github?: string;
  live?: string;
  stats?: { stars?: number; forks?: number };
  badge?: string;
  isFeatured?: boolean;
}

export default function ProjectCard({
  title,
  oneLine,
  body,
  stack,
  github,
  live,
  stats,
  badge,
  isFeatured = false,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              scale: 1.02,
              y: -5,
              borderColor: "rgba(124, 111, 255, 0.4)",
            }
      }
      className={`group relative flex flex-col justify-between bg-bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,111,255,0.12)] h-full overflow-hidden`}
    >
      {/* Glow Effect Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-mint-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Top Header Row (Title, Badges) */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-violet-400 transition-colors flex items-center gap-2">
              {title}
              {isFeatured && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-violet-500/20 text-violet-400 border border-violet-500/30 shadow-[0_0_10px_rgba(124,111,255,0.2)]">
                  <Sparkles size={10} /> FEATURED
                </span>
              )}
            </h3>
            <span className="text-xs font-medium text-mint-400 font-sans tracking-wide">
              {oneLine}
            </span>
          </div>

          {/* Badges / Tech list indicator */}
          {badge && (
            <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-bg-elevated text-text-muted border border-border select-none">
              {badge}
            </span>
          )}
        </div>

        {/* Description body */}
        <p className="text-sm text-text-muted leading-relaxed mb-6 font-sans">
          {body}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {stack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono bg-bg-elevated/70 text-text-muted border border-border/50 rounded-full px-2.5 py-0.5 hover:border-violet-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Footer Row (Stats & Links) */}
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/30 z-10">
        {/* Repository Stats */}
        <div className="flex items-center space-x-3 text-xs font-mono text-text-muted">
          {stats?.stars !== undefined && (
            <span className="flex items-center gap-1 hover:text-text-primary transition-colors">
              <Star size={12} className="text-violet-400 fill-violet-400/20" />
              {stats.stars}
            </span>
          )}
          {stats?.forks !== undefined && (
            <span className="flex items-center gap-1 hover:text-text-primary transition-colors">
              <GitFork size={12} className="text-mint-400" />
              {stats.forks}
            </span>
          )}
        </div>

        {/* Call to action label and external icons */}
        <div className="flex items-center gap-4">
          {/* Slide-in View Project Label on Hover */}
          {!shouldReduceMotion && (github || live) && (
            <span className="text-xs font-mono text-violet-400 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-semibold select-none">
              → View Project
            </span>
          )}

          {/* Links */}
          <div className="flex items-center gap-2.5">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary p-1.5 rounded-lg hover:bg-bg-elevated transition-colors border border-border/50 hover:border-border"
                aria-label={`View ${title} source on GitHub`}
              >
                <GithubIcon size={16} />
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary p-1.5 rounded-lg hover:bg-bg-elevated transition-colors border border-border/50 hover:border-border"
                aria-label={`View ${title} live demo`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
