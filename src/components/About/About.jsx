import React, { useEffect, useMemo, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/vikash.png.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeBadgeIndex, setActiveBadgeIndex] = useState(0);
  const [isBadgePaused, setIsBadgePaused] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [isTouchMode, setIsTouchMode] = useState(false);
  const [viewportType, setViewportType] = useState("desktop");
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [photoDepth, setPhotoDepth] = useState({ x: 0, y: 0, z: 30, scale: 1.03 });

  const techBadges = useMemo(
    () => [
      'React JS',
      'Tailwind CSS',
      'Java',
      'Spring Boot',
      'Firebase',
      'MongoDB',
      'Machine Learning',
      'NLP',
    ],
    []
  );

  const particles = useMemo(() => {
    let particleCount = viewportType === "mobile" ? 10 : viewportType === "tablet" ? 16 : 24;
    if (isLowPowerMode) {
      particleCount = viewportType === "mobile" ? 4 : viewportType === "tablet" ? 7 : 10;
    }

    return Array.from({ length: particleCount }, (_, index) => ({
        id: index,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: isLowPowerMode ? 2 + Math.random() * 2 : 2 + Math.random() * 4,
        duration: isLowPowerMode ? 8 + Math.random() * 6 : 5 + Math.random() * 7,
        delay: Math.random() * 3,
      }));
  }, [isLowPowerMode, viewportType]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateViewportType = () => {
      if (window.innerWidth < 768) {
        setViewportType("mobile");
        return;
      }

      if (window.innerWidth < 1024) {
        setViewportType("tablet");
        return;
      }

      setViewportType("desktop");
    };

    updateViewportType();
    window.addEventListener('resize', updateViewportType);

    return () => window.removeEventListener('resize', updateViewportType);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const detectCapabilities = () => {
      const lowCoreCount = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
      const touchDevice = window.matchMedia('(hover: none)').matches;
      setIsTouchMode(touchDevice);
      setIsLowPowerMode(mediaQuery.matches || lowCoreCount || touchDevice);
    };

    detectCapabilities();
    mediaQuery.addEventListener('change', detectCapabilities);
    window.addEventListener('resize', detectCapabilities);

    return () => {
      mediaQuery.removeEventListener('change', detectCapabilities);
      window.removeEventListener('resize', detectCapabilities);
    };
  }, []);

  useEffect(() => {
    if (isBadgePaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveBadgeIndex((prev) => (prev + 1) % techBadges.length);
    }, 1700);

    return () => clearInterval(interval);
  }, [isBadgePaused, techBadges.length]);

  const handleMouseMove = (event) => {
    if (viewportType === "mobile") {
      return;
    }

    if (event.clientY < 88) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  const rotatingBadges = [0, 1, 2].map(
    (offset) => techBadges[(activeBadgeIndex + offset) % techBadges.length]
  );

  const handlePhotoMove = (event) => {
    if (isTouchMode) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    const moveX = (relativeX - 0.5) * 16;
    const moveY = (relativeY - 0.5) * 16;

    setPhotoDepth({
      x: moveX,
      y: moveY,
      z: 42,
      scale: 1.06,
    });
  };

  const resetPhotoDepth = () => {
    setPhotoDepth({ x: 0, y: 0, z: 30, scale: 1.03 });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden px-[7vw] py-8 font-sans mt-2 md:mt-4 lg:mt-6 md:px-[7vw] lg:px-[20vw]"
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-52 w-52 rounded-full bg-violet-500/25 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-80 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(56, 189, 248, ${isLowPowerMode ? 0.06 : viewportType === 'mobile' ? 0.08 : viewportType === 'tablet' ? 0.12 : 0.16}), rgba(5, 4, 20, 0) ${viewportType === 'mobile' ? 28 : 34}%)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="hero-particle"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col-reverse items-center justify-between gap-10 rounded-3xl border border-slate-800/70 bg-slate-900/35 p-6 backdrop-blur-sm md:flex-row md:p-10">
        {/* Left Side */}
        <div className={`md:w-1/2 text-center md:text-left mt-8 md:mt-0 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-emerald-300">
            AVAILABLE FOR FREELANCE AND INTERNSHIP
          </div>

          <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Hi, I am
          </h1>
          <h2 className="mb-4 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Vikash Kumar
          </h2>
          <h3 className="mb-4 text-xl font-semibold leading-tight text-[#8245ec] sm:text-2xl md:text-3xl">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  'Fullstack Developer',
                  'AI/ML Enthusiast',
                  'CSE Undergraduate',
                  'Web Developer',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          <div
            className="mb-6 flex min-h-11 flex-wrap items-center justify-center gap-2 md:justify-start"
            onMouseEnter={() => setIsBadgePaused(true)}
            onMouseLeave={() => setIsBadgePaused(false)}
            onClick={() => {
              if (isTouchMode) {
                setIsBadgePaused((prev) => !prev);
              }
            }}
          >
            {rotatingBadges.map((badge, index) => (
              <span
                key={`${badge}-${index}`}
                className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-500 ${
                  index === 0
                    ? 'hero-badge-active border-cyan-300/60 bg-cyan-400/20 text-cyan-100'
                    : 'border-slate-600 bg-slate-800/70 text-slate-300'
                }`}
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="mb-10 mt-8 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-lg">
            I build <span className="font-semibold text-cyan-200">fast, scalable web experiences</span> with
            modern frontend and backend stacks. My focus is blending
            <span className="font-semibold text-violet-200"> AI-driven ideas</span> with clean engineering so products feel smart,
            useful, and production-ready from day one.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="https://drive.google.com/file/d/1ZmrJuQ4lBBIXMuibmD3zcCeXKHNNDpD-/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-3 text-sm font-bold tracking-wide text-white shadow-[0_0_28px_rgba(139,92,246,0.55)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(139,92,246,0.8)]"
            >
              DOWNLOAD CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-400/10 px-8 py-3 text-sm font-bold tracking-wide text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/20"
            >
              LET US TALK
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className={`md:w-1/2 flex justify-center md:justify-end transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Tilt
            className="hero-avatar-ring h-52 w-52 overflow-hidden rounded-full border-4 border-violet-700/80 sm:h-64 sm:w-64 md:h-[30rem] md:w-[30rem]"
            tiltMaxAngleX={viewportType === 'mobile' ? 10 : 24}
            tiltMaxAngleY={viewportType === 'mobile' ? 10 : 24}
            perspective={1200}
            scale={viewportType === 'mobile' ? 1.03 : 1.08}
            transitionSpeed={1400}
            gyroscope={true}
            glareEnable={true}
            glareMaxOpacity={viewportType === 'mobile' ? 0.14 : 0.32}
            glareColor="#7dd3fc"
            glarePosition="all"
            trackOnWindow={viewportType !== 'mobile'}
            onMouseMove={handlePhotoMove}
            onMouseLeave={resetPhotoDepth}
          >
            <img
              src={profileImage}
              alt="Vikash Kumar"
              className="hero-photo-3d h-full w-full rounded-full object-cover drop-shadow-[0_14px_40px_rgba(56,189,248,0.25)]"
              style={{
                transform: `translate3d(${photoDepth.x}px, ${photoDepth.y}px, ${photoDepth.z}px) scale(${photoDepth.scale})`,
              }}
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
