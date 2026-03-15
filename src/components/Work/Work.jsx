import React, { useEffect, useMemo, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { projects } from "../../constants";

const Work = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
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

  const availableTags = useMemo(() => {
    const uniqueTags = new Set();
    projects.forEach((project) => {
      project.tags.forEach((tag) => uniqueTags.add(tag));
    });
    return ["All", ...Array.from(uniqueTags).slice(0, 10)];
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesTag =
        activeTag === "All" || project.tags.includes(activeTag);

      if (!normalizedQuery) {
        return matchesTag;
      }

      const projectText = `${project.title} ${project.description} ${project.tags.join(" ")}`.toLowerCase();
      return matchesTag && projectText.includes(normalizedQuery);
    });
  }, [activeTag, searchQuery]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-black px-4 py-16 font-sans sm:px-6 sm:py-20 md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      <div className="mb-10 rounded-2xl border border-slate-700/70 bg-[linear-gradient(145deg,rgba(15,23,42,0.9),rgba(30,41,59,0.7))] p-4 backdrop-blur-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, tech, or keyword"
            className="w-full md:max-w-md rounded-xl border border-slate-600 bg-[#111827] px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
          />
          <p className="text-sm text-slate-300">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                activeTag === tag
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-200"
                  : "border-slate-600 bg-slate-800/80 text-slate-300 hover:border-slate-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-7 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={900}
            transitionSpeed={1200}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#7c3aed"
            glarePosition="all"
            className={`group project-card ${isVisible ? "project-card-visible" : "project-card-hidden"}`}
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleOpenModal(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleOpenModal(project);
                }
              }}
              className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gray-900/95 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-400/60 hover:shadow-[0_0_38px_rgba(124,58,237,0.4)]"
            >
              <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(167,139,250,0.22),transparent_45%)]" />
              </div>

              <div className="relative p-4">
                <img
                  src={project.image}
                  alt={project.title || "Project Image"}
                  className="h-48 w-full rounded-xl object-cover"
                />
              </div>

              <div className="relative p-5 sm:p-6">
                <h3 className="mb-2 text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 pt-4 text-gray-400 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-1 text-xs font-semibold text-violet-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/70 p-6 text-center text-slate-300">
          No projects found for your current search/filter.
        </div>
      )}

      {/* Modal Section */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl overflow-y-auto rounded-xl border border-slate-700 bg-[linear-gradient(145deg,rgba(15,23,42,0.95),rgba(30,41,59,0.86))] shadow-2xl max-h-[92vh]">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="rounded-md px-2 text-white text-3xl font-bold transition hover:bg-violet-500/20 hover:text-violet-200"
                aria-label="Close Modal"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title || "Project"}
                  className="w-full max-h-[400px] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm lg:text-base">
                  {selectedProject.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-1 text-xs font-semibold text-violet-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-xl font-semibold text-sm lg:text-lg"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl font-semibold text-sm lg:text-lg"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
