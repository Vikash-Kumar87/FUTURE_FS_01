// src/components/Skills/Skills.jsx
import React, { useEffect, useRef, useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionNode);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-16 pb-16 font-sans bg-skills-gradient clip-path-custom sm:px-6 sm:py-20 sm:pb-20 md:px-[7vw] lg:px-[20vw]"
    >
      <div className="pointer-events-none absolute -left-28 top-24 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-cyan-400 to-violet-500"></div>
        <p className="mt-4 text-base font-semibold text-gray-400 sm:text-lg">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      <div className="relative flex flex-wrap justify-between gap-3 py-8 sm:py-10 lg:gap-5">
        {SkillsInfo.map((category, categoryIndex) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={11}
            tiltMaxAngleY={11}
            perspective={1000}
            scale={1.02}
            transitionSpeed={950}
            gyroscope={true}
            className={`skills-card mb-8 w-full rounded-2xl border border-slate-600/70 bg-[linear-gradient(145deg,rgba(15,23,42,0.92),rgba(30,41,59,0.72))] px-4 py-6 shadow-[0_0_26px_rgba(56,189,248,0.12)] backdrop-blur-md sm:mb-10 sm:w-[48%] sm:px-8 ${
              isVisible ? "skills-card-visible" : "skills-card-hidden"
            }`}
            style={{ animationDelay: `calc(var(--cinematic-stagger) * ${categoryIndex})` }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_88%_86%,rgba(167,139,250,0.18),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <h3 className="mb-5 text-center text-2xl font-semibold text-slate-200 sm:text-3xl">
              {category.title}
            </h3>

            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="skills-chip flex items-center justify-center space-x-2 rounded-3xl border border-slate-600 bg-slate-800/65 px-2 py-2 text-center"
                  style={{ transitionDelay: `${skillIndex * 35}ms` }}
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="h-6 w-6 sm:h-8 sm:w-8"
                  />
                  <span className="text-xs text-gray-300 sm:text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;