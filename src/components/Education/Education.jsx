import React, { useEffect, useRef, useState } from "react";
import { education } from "../../constants";

const Education = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-16 font-sans bg-skills-gradient clip-path-custom-3 sm:px-6 sm:py-20 md:px-[7vw] lg:px-[16vw]"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-12 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

      {/* Section Title */}
      <div className="relative text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className={`absolute sm:left-1/2 left-5 transform -translate-x-1/2 sm:translate-x-0 w-1 h-full bg-gradient-to-b from-cyan-300/80 via-violet-400/60 to-transparent transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-30"}`}></div>

        {/* Education Cards */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-start sm:items-center mb-12 sm:mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute sm:left-1/2 left-5 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center z-10 transition-all duration-500 ${
                isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Education Content Box */}
            <div
              className={`education-card w-[calc(100%-2rem)] sm:w-full sm:max-w-md mt-14 sm:mt-0 ml-8 sm:ml-0 p-5 sm:p-8 rounded-2xl border border-slate-600/70 bg-[linear-gradient(145deg,rgba(15,23,42,0.92),rgba(30,41,59,0.72))] backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition duration-300 hover:scale-[1.02] hover:border-violet-400/70 hover:shadow-[0_0_35px_rgba(124,58,237,0.35)] ${
                isVisible ? "education-card-visible" : "education-card-hidden"
              } ${
                index % 2 === 0 ? "sm:ml-20" : "sm:mr-20"
              }`}
              style={{ animationDelay: `calc(var(--cinematic-stagger) * ${index})` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_88%_84%,rgba(167,139,250,0.16),transparent_45%)]" />

              <div className="relative flex items-center gap-4">
                <div className="w-20 h-14 sm:w-24 sm:h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-xs sm:text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              <p className="relative mt-4 text-cyan-200 font-semibold">Grade: {edu.grade}</p>
              <p className="relative mt-2 text-sm sm:text-base text-gray-300 leading-7">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
