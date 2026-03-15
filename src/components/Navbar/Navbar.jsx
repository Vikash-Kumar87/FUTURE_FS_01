import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "skills", "experience", "work", "education", "achievements"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-22% 0px -55% 0px",
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-[7vw] transition duration-300 md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.45)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4 text-white">
        {/* Logo */}
        <div className="cursor-pointer rounded-full border border-transparent px-2 py-1 text-lg font-semibold transition hover:border-violet-400/45 hover:bg-violet-500/10">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Vikash</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Kumar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/55 px-2 py-1.5 text-gray-300 backdrop-blur-md md:flex">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              style={{ animationDelay: `${index * 45}ms` }}
              className="animate-[fadeInUp_480ms_ease_forwards] opacity-0"
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative rounded-full px-4 py-2 text-[1.07rem] font-medium tracking-tight transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-violet-500/18 text-violet-200"
                    : "text-slate-200 hover:bg-cyan-400/10 hover:text-cyan-200"
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-1/2 h-[3px] w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                )}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden space-x-3 md:flex">
          <a
            href="https://github.com/Vikash-Kumar87?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700/80 bg-slate-900/55 p-2.5 text-gray-300 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/70 hover:text-violet-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vikash-kumar89?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700/80 bg-slate-900/55 p-2.5 text-gray-300 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/70 hover:text-violet-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden relative z-[70]">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer transition-transform duration-300 hover:rotate-90"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      <div
        className={`fixed inset-0 z-[55] bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.18),rgba(2,6,23,0.92))] backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed left-1/2 top-20 z-[60] w-[86%] max-w-sm -translate-x-1/2 rounded-3xl border border-slate-700/70 bg-[linear-gradient(160deg,rgba(15,23,42,0.92),rgba(30,27,75,0.82))] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.6)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-6 scale-95 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-2 py-2 text-gray-300">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`w-full text-center transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 45}ms` }}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative w-full rounded-xl px-4 py-2.5 text-2xl font-semibold tracking-tight transition ${
                  activeSection === item.id
                    ? "bg-violet-500/20 text-violet-200"
                    : "text-slate-200 hover:bg-cyan-400/10 hover:text-cyan-200"
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(56,189,248,0.9)] animate-pulse" />
                )}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-center gap-5 border-t border-slate-700/70 pt-4">
          <a
            href="https://github.com/Vikash-Kumar87?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 p-2.5 text-gray-300 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vikash-kumar89?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 p-2.5 text-gray-300 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;