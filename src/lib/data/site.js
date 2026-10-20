export const site = {
  name: "Abdur Rahim",
  username: "rahim-codes",
  role: "Full Stack Web Developer",
  tagline: "I build scalable, end-to-end web applications.",
  bio: "A passionate Full Stack Web Developer building scalable and user-friendly web applications. I work across the stack — crafting clean, responsive interfaces with React and Next.js, and building reliable APIs with Node.js, Express and MongoDB.",
  location: "Dhaka, Narayangonj",
  email: "rahimvi414@gmail.com",
  github: "https://github.com/rahim-codes",
  linkedin: "https://www.linkedin.com/in/rahim-codes", // TODO: replace with your real LinkedIn URL
  photo: "/photo.jpg",
  resume: "/resume",
  availableFor: "Internships & Full-time Full Stack roles",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "33+", label: "Public repos" },
  { value: "8+", label: "Featured builds" },
  { value: "3+", label: "Years coding" },
  { value: "100%", label: "Commitment" },
];

export const skillGroups = [
  {
    name: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
  },
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "npm", "Chrome DevTools"],
  },
];

export const marqueeSkills = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "REST APIs",
  "Git",
  "GitHub",
  "Vercel",
];

export const projects = [
  {
    title: "Len Den Tracker",
    description:
      "A web app to track lends and dues — add entries, monitor balances and settle up with a clean dashboard. (Description placeholder — edit in src/lib/data/site.js)",
    stack: ["JavaScript", "React", "Vercel"],
    image: "/projects/len-den-tracker.png",
    live: "https://len-den-tracker.vercel.app",
    repo: "https://github.com/rahim-codes/len-den-tracker",
    featured: true,
  },
  {
    title: "Vault Manager",
    description:
      "A secure vault-style manager app for organizing and managing your records with a polished, modern UI. (Description placeholder — edit in src/lib/data/site.js)",
    stack: ["JavaScript", "React", "Vercel"],
    image: "/projects/vault-manager.png",
    live: "https://vault-manager-hazel.vercel.app",
    repo: "https://github.com/rahim-codes/vault-manager",
    featured: true,
  },
  {
    title: "Bazar Dor",
    description:
      "An e-commerce storefront built with TypeScript — product browsing, cart flows and a responsive layout. (Description placeholder — edit in src/lib/data/site.js)",
    stack: ["TypeScript", "React"],
    image: "/projects/bazar-dor.svg",
    live: null,
    repo: "https://github.com/rahim-codes/bazar-dor",
    featured: true,
  },
  {
    title: "Fit Log",
    description:
      "A fitness logging app to track workouts and progress over time, built with TypeScript. (Description placeholder — edit in src/lib/data/site.js)",
    stack: ["TypeScript", "React"],
    image: "/projects/fit-log.svg",
    live: null,
    repo: "https://github.com/rahim-codes/fit-log",
    featured: false,
  },
  {
    title: "Dev-Stack",
    description:
      "A developer-focused project exploring modern web stacks and tooling with TypeScript. (Description placeholder — edit in src/lib/data/site.js)",
    stack: ["TypeScript", "React"],
    image: "/projects/dev-stack.svg",
    live: null,
    repo: "https://github.com/rahim-codes/Dev-Stack",
    featured: false,
  },
  {
    title: "Zap Shift Client",
    description:
      "Client application for a parcel / shift service — booking flows and tracking UI. (Description placeholder — edit in src/lib/data/site.js)",
    stack: ["JavaScript", "React"],
    image: "/projects/zap-shift-client.svg",
    live: null,
    repo: "https://github.com/rahim-codes/zap-shift-client",
    featured: false,
  },
  {
    title: "DevConf 2026",
    description:
      "A static conference landing page built with hand-crafted HTML & CSS, deployed on GitHub Pages. (Description placeholder — edit in src/lib/data/site.js)",
    stack: ["HTML", "CSS"],
    image: "/projects/devconf-2026.svg",
    live: "https://rahim-codes.github.io/DevConf-2026",
    repo: "https://github.com/rahim-codes/DevConf-2026",
    featured: false,
  },
];

// TODO: replace these placeholder entries with your real internships / jobs / education
export const experience = [
  {
    role: "Full Stack Developer (Personal Projects)",
    org: "Self-directed",
    period: "2024 — Present",
    summary:
      "Designing and shipping end-to-end applications — from React/Next.js front ends to Node.js, Express and MongoDB APIs — including e-commerce storefronts and finance trackers.",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    current: true,
  },
  {
    role: "Freelance Web Developer",
    org: "Independent",
    period: "2023 — 2024",
    summary:
      "Built and deployed responsive websites for small clients, focusing on performance, accessibility and clean hand-off. (Placeholder — replace with your real experience.)",
    tags: ["HTML", "CSS", "JavaScript"],
    current: false,
  },
  {
    role: "Web Development (Learning Journey)",
    org: "Self-taught & Online Courses",
    period: "2022 — 2023",
    summary:
      "Completed structured courses in HTML, CSS, JavaScript and React, then expanded into full-stack development with Node.js, Express and MongoDB. (Placeholder — replace with your real education/certifications.)",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    current: false,
  },
];

export const quickFacts = [
  { label: "Location", value: "Dhaka, Narayangonj" },
  { label: "Role", value: "Full Stack Web Developer" },
  { label: "Availability", value: "Open to internships & jobs" },
  { label: "Github", value: "@rahim-codes" },
];
