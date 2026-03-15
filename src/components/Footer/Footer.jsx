
import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = footerRef.current;
    if (!node) {
      return;
    }

    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 650);

    if (!("IntersectionObserver" in window)) {
      return () => clearTimeout(fallbackTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer ref={footerRef} className="text-white px-4 py-8 sm:px-6 md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className={`text-xl font-semibold text-purple-500 ${isVisible ? "cinematic-item-visible" : "cinematic-item-hidden"}`}>Vikash Kumar</h2>

        {/* Navigation Links - Responsive */}
        <nav
          className={`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 ${
            isVisible ? "cinematic-item-visible" : "cinematic-item-hidden"
          }`}
          style={{ animationDelay: "var(--cinematic-stagger)" }}
        >
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="my-1 text-sm sm:text-base hover:text-purple-500"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div
          className={`mt-6 flex flex-wrap justify-center gap-4 ${
            isVisible ? "cinematic-item-visible" : "cinematic-item-hidden"
          }`}
          style={{ animationDelay: "calc(var(--cinematic-stagger) * 2)" }}
        >
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/15ac27SJ7v/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vikash-kumar89?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=nxxs2fk" },
            
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p
          className={`text-sm text-gray-400 mt-6 ${
            isVisible ? "cinematic-item-visible" : "cinematic-item-hidden"
          }`}
          style={{ animationDelay: "calc(var(--cinematic-stagger) * 3)" }}
        >
          © 2026 Vikash Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
