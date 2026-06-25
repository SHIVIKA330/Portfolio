import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-retro-cream/10 bg-retro-dark py-8 text-center text-sm text-retro-cream/50 font-mono">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © 2026 Shivika Jain · Built with Next.js + ☕
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/SHIVIKA330"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-retro-orange transition-colors hover:underline hover:underline-offset-4 decoration-retro-orange/50"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivikajain330/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-retro-orange transition-colors hover:underline hover:underline-offset-4 decoration-retro-orange/50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
