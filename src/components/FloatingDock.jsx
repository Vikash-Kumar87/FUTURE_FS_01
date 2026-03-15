import React from "react";
import { FiArrowUpRight, FiChevronUp, FiMessageCircle } from "react-icons/fi";

const FloatingDock = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
      <a
        href="#contact"
        className="group flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/75 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-semibold text-cyan-200 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-slate-800/90"
      >
        <FiMessageCircle className="text-base" />
        Contact
      </a>

      <div className="flex justify-end gap-2">
        <a
          href="https://github.com/Vikash-Kumar87?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-violet-400/40 bg-slate-900/75 p-2.5 sm:p-3 text-violet-200 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-slate-800/90"
          aria-label="Open GitHub"
        >
          <FiArrowUpRight className="text-lg" />
        </a>

        <button
          type="button"
          onClick={handleScrollTop}
          className="rounded-full border border-emerald-400/40 bg-slate-900/75 p-2.5 sm:p-3 text-emerald-200 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-slate-800/90"
          aria-label="Back to top"
        >
          <FiChevronUp className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default FloatingDock;
