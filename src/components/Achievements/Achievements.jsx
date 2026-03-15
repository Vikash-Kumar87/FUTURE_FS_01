import React, { useEffect, useMemo, useRef, useState } from "react";
import { achievements, education, projects, SkillsInfo } from "../../constants";

const Achievements = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const [metricValues, setMetricValues] = useState({
    projects: 0,
    skills: 0,
    cgpa: 0,
    milestones: 0,
  });

  const targetMetrics = useMemo(() => {
    const cgpaText = education?.[0]?.grade || "0";
    const parsedCgpa = Number.parseFloat(cgpaText);
    const totalSkills = SkillsInfo.reduce(
      (count, section) => count + section.skills.length,
      0
    );

    return {
      projects: projects.length,
      skills: totalSkills,
      cgpa: Number.isNaN(parsedCgpa) ? 0 : parsedCgpa,
      milestones: achievements.length,
    };
  }, []);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) {
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

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const animateMetrics = (now) => {
      const progress = Math.min((now - start) / duration, 1);

      setMetricValues({
        projects: Math.floor(progress * targetMetrics.projects),
        skills: Math.floor(progress * targetMetrics.skills),
        cgpa: Number((progress * targetMetrics.cgpa).toFixed(2)),
        milestones: Math.floor(progress * targetMetrics.milestones),
      });

      if (progress < 1) {
        requestAnimationFrame(animateMetrics);
      }
    };

    requestAnimationFrame(animateMetrics);
  }, [isVisible, targetMetrics]);

  const toggleCardExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const metrics = [
    {
      id: "projects",
      label: "Projects",
      value: `${metricValues.projects}+`,
      color: "text-cyan-300",
    },
    {
      id: "skills",
      label: "Skills",
      value: `${metricValues.skills}+`,
      color: "text-violet-300",
    },
    {
      id: "cgpa",
      label: "CGPA",
      value: metricValues.cgpa.toFixed(2),
      color: "text-emerald-300",
    },
    {
      id: "milestones",
      label: "Milestones",
      value: `${metricValues.milestones}+`,
      color: "text-amber-300",
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07051c] px-4 py-16 font-sans sm:px-6 sm:py-20 md:px-[7vw] lg:px-[16vw]"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="mb-12 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-gradient-to-r from-cyan-400 to-violet-500"></div>
        <p className="mt-4 text-base sm:text-lg font-semibold text-slate-300">
          Key milestones from my learning, projects, and growth journey.
        </p>
      </div>

      <div className="mx-auto mb-12 sm:mb-14 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.id}
            style={{ animationDelay: `${index * 100}ms` }}
            className={`timeline-metric rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 text-center backdrop-blur-md ${
              isVisible ? "timeline-metric-visible" : "timeline-metric-hidden"
            }`}
          >
            <p className={`text-2xl sm:text-3xl font-extrabold ${metric.color}`}>{metric.value}</p>
            <p className="mt-2 text-xs font-semibold tracking-widest text-slate-400">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div
          className={`timeline-progress-line absolute left-4 top-0 w-px bg-gradient-to-b from-cyan-400/70 to-violet-500/70 sm:left-1/2 sm:-translate-x-1/2 ${
            isVisible ? "timeline-progress-line-visible" : "timeline-progress-line-hidden"
          }`}
        />

        {achievements.map((item, index) => (
          <article
            key={item.id}
            className={`relative mb-8 sm:mb-10 flex pl-7 sm:pl-0 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <span
              className={`absolute left-4 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-500 sm:left-1/2 ${
                isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
            />

            <div
              style={{ animationDelay: `${index * 120}ms` }}
              className={`timeline-card w-full rounded-2xl border border-slate-700/70 bg-[linear-gradient(145deg,rgba(15,23,42,0.88),rgba(30,41,59,0.72))] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/70 hover:shadow-[0_0_35px_rgba(124,58,237,0.32)] sm:w-[46%] ${
                isVisible ? "timeline-card-visible" : "timeline-card-hidden"
              } ${
                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(167,139,250,0.18),transparent_40%)]" />

              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan-400/40 bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {item.type}
                </span>
                <span className="text-sm font-semibold text-violet-300">
                  {item.year}
                </span>
              </div>

              <h3 className="relative text-xl font-bold text-white">{item.title}</h3>
              <p className="relative mt-3 text-sm leading-7 text-slate-300">
                {expandedCards[item.id] || item.description.length <= 120
                  ? item.description
                  : `${item.description.slice(0, 120)}...`}
              </p>

              {item.description.length > 120 && (
                <button
                  type="button"
                  onClick={() => toggleCardExpand(item.id)}
                  className="relative mt-3 text-xs font-semibold tracking-wide text-cyan-300 transition hover:text-cyan-200"
                >
                  {expandedCards[item.id] ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
