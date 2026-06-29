import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-base py-8 text-center text-[10px] text-text-muted font-mono uppercase tracking-widest">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © 2026 Shivika Jain · Built with Next.js
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/SHIVIKA330"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors hover:underline hover:underline-offset-4 decoration-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivikajain330/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors hover:underline hover:underline-offset-4 decoration-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
