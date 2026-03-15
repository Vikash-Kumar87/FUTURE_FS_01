// Skills Section Logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressLogo from './assets/tech_logo/express.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mcLogo from './assets/tech_logo/mc.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logos
import webverseLogo from './assets/company_logo/ram.png';
import agcLogo from './assets/company_logo/webdev.png';

// Education Section Logos
import bsaLogo from './assets/education_logo/cutm.png';
import bssLogo from './assets/education_logo/bss_logo.png';
import vpsLogo from './assets/education_logo/school_logo.png';

// Project Section Logos
import alumniLogo from './assets/work_logo/Screenshot 2026-03-14 142406.png';
import mentalHealthLogo from './assets/work_logo/Screenshot 2026-03-14 142430.png';
import treeLogo from './assets/work_logo/Screenshot 2026-03-14 142459.png';
import videoCallLogo from './assets/work_logo/Screenshot 2026-03-14 142638.png';
import readingLogo from './assets/work_logo/Screenshot 2026-03-14 142701.png';
import coursePlannerLogo from './assets/work_logo/Screenshot 2026-03-14 142840.png';
import githubProfileLogo from './assets/work_logo/github.png';
import imageSearchLogo from './assets/work_logo/image.png';
import todoLogo from './assets/work_logo/todo.png';
import weatherLogo from './assets/work_logo/weather.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressLogo },
      { name: 'Spring Boot', logo: springbootLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Machine Learning', logo: mcLogo },
      { name: 'NLP', logo: mcLogo },
      { name: 'AI Chatbots', logo: mcLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'REST APIs', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "AI and Web Development Collaborator",
    company: "Academic and Collaborative Projects",
    date: "2025 - Present",
    desc: "Collaborated with peers on AI and web development projects, improving teamwork and technical problem-solving skills. Actively explored emerging technologies such as Artificial Intelligence, Machine Learning, and modern web frameworks.",
    skills: ["React JS", "Tailwind CSS", "Java", "Spring Boot", "Firebase", "Machine Learning", "NLP"],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Sustainability Initiative Participant",
    company: "Extracurricular Activities",
    date: "2024 - Present",
    desc: "Participated in environmental sustainability initiatives and tree plantation awareness activities. Demonstrated leadership and responsibility while managing academic and collaborative project tasks.",
    skills: ["Leadership", "Collaboration", "Project Management", "Communication", "Problem Solving"],
  },
];

export const education = [
  {
    id: 1,
    img: bsaLogo,
    school: "CUTM, Paralakhemundi, Odisha",
    date: "Sept 2023 - Aug 2027",
    grade: "8.02 CGPA",
    desc: "Currently pursuing B.Tech in Computer Science from CUTM, Paralakhemundi, Odisha.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 2,
    img: bssLogo,
    school: "B.S.S. College, Supaul",
    date: "Apr 2021 - Mar 2023",
    grade: "63.8%",
    desc: "Completed Class 12 education from B.S.S. College under BSEB, with Physics, Chemistry, and Mathematics.",
    degree: "BSEB (XII) - PCM",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "S.D.S.K.B. +2 High School, Hardi Chaughara, Supaul",
    date: "Apr 2019 - Mar 2021",
    grade: "75.2%",
    desc: "Completed Class 10 education from S.D.S.K.B. High School under BSEB, with Science and Computer Applications.",
    degree: "BSEB (X) - Science with Computer Application",
  },
];

export const projects = [
  {
    id: 6,
    title: "CareerSaathi",
    description: "A web platform built to connect career counselors    npx update-browserslist-db@latest    npx update-browserslist-db@latest    npx update-browserslist-db@latest and students through a shared community experience.",
    image: alumniLogo,
    tags: ["React JS", "Web App", "Community Platform"],
    github: "https://github.com/Vikash-Kumar87/ALUMNI/tree/main/alumni-platform",
    webapp: "https://alumni-brown.vercel.app/",
  },
  {
    id: 7,
    title: "Mental Health App",
    description: "An AI-powered mental health support app that helps users with guidance and supportive interactions.",
    image: mentalHealthLogo,
    tags: ["React JS", "Firebase", "NLP", "Machine Learning"],
    github: "https://github.com/Vikash-Kumar87/MentalHealth-App",
    webapp: "https://mental-health-app-76e61.web.app/",
  },
  {
    id: 8,
    title: "Tree",
    description: "A sustainability-focused platform that promotes tree plantation awareness and participation.",
    image: treeLogo,
    tags: ["React JS", "Tailwind CSS", "Machine Learning"],
    github: "https://github.com/Vikash-Kumar87/Tree",
    webapp: "https://tree-wy7f.vercel.app/",
  },
  {
    id: 11,
    title: "Course Planner AI",
    description: "An AI-based course planning platform that helps users generate personalized learning paths.",
    image: coursePlannerLogo,
    tags: ["React JS", "AI", "Java", "Spring Boot"],
    github: "https://github.com/VIKASH206/course-planner-ai",
    webapp: "https://course-planner-ai-swart.vercel.app",
  },
  {
    id: 1,
    title: "GitHub Profile Search",
    description: "A React-based web app that lets users search any GitHub profile using a username. It displays profile details like avatar, bio, repos, followers, and more using the GitHub API. Clean, responsive UI with real-time data fetching.",
    image: githubProfileLogo,
    tags: ["React JS", "Node.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vikash-Kumar87/Github-Profile-Search-APP",
    webapp: "https://github-profile-search-app-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Image Search App",
    description: "A React-based image search app that uses an external API to fetch and display images based on user queries.",
    image: imageSearchLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vikash-Kumar87/Image-Search-App-main",
    webapp: "https://image-search-app-main-eta.vercel.app/",
  },
  {
    id: 10,
    title: "Video Calling App",
    description: "A real-time video calling web application for seamless online communication.",
    image: videoCallLogo,
    tags: ["React JS", "WebRTC", "Video Call", "Vercel"],
    github: "https://github.com/Vikash-Kumar87/video_calling",
    webapp: "https://video-calling-l5fi.vercel.app/",
  },
  {
    id: 9,
    title: "Reading App",
    description: "A reading-focused web app with authentication flow and user-friendly interface.",
    image: readingLogo,
    tags: ["React JS", "Authentication", "Web App"],
    github: "https://github.com/Vikash-Kumar87/Readingapp",
    webapp: "https://readingapp-sigma.vercel.app/register",
  },
  {
    id: 3,
    title: "Weather App",
    description: "An NPM-based weather app built with React and Node.js that provides accurate weather information using public APIs.",
    image: weatherLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/Vikash-Kumar87/weather-App",
    webapp: "https://weather-app-sgpl.vercel.app/",
  },
  {
    id: 4,
    title: "ToDo App",
    description: "A Chrome extension for managing daily tasks. Built with JavaScript, it allows users to set reminders and stay productive.",
    image: todoLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/Vikash-Kumar87/Todo-App",
    webapp: "https://todo-app-ten-jet-44.vercel.app/",
  },
];

export const achievements = [
  {
    id: 1,
    year: "2026",
    title: "Portfolio 2.0 Launch",
    description:
      "Redesigned and deployed a modern personal portfolio with interactive sections, EmailJS contact flow, and performance-focused UI updates.",
    type: "Product",
  },
  {
    id: 2,
    year: "2025",
    title: "AI + Web Collaborative Projects",
    description:
      "Built AI-infused project prototypes with peers and delivered full-stack features using React, Firebase, and Java-based services.",
    type: "Collaboration",
  },
  {
    id: 3,
    year: "2024",
    title: "Open Source and GitHub Growth",
    description:
      "Published and maintained multiple public repositories, improving project documentation, code organization, and reusable components.",
    type: "Community",
  },
  {
    id: 4,
    year: "2024",
    title: "Academic Performance Milestone",
    description:
      "Maintained strong academic performance in Computer Science while balancing practical software projects and extracurricular initiatives.",
    type: "Academic",
  },
];
