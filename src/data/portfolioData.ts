import { ServiceItem, ProjectItem, AchievementItem } from '../types/portfolio';

// Certificate images extracted from the provided PDF for Marquee Section
export const MARQUEE_CERTIFICATES_ROW_1 = [
  "/certificates/cert_11.png", // KVRSS Runner Up (Parkinson's Spoon)
  "/certificates/cert_13.png", // Macmillan Budding Scientist Grand Finale 2nd Prize
  "/certificates/cert_03.png", // nCrypt DPS Sushant Lok 1st Position
  "/certificates/cert_01.png", // Summer Fields Best Student in IT
  "/certificates/cert_23.png", // Macmillan Budding Scientist North Zone 1st Prize
  "/certificates/cert_26.png", // Intel & CBSE AI Appreciate
  "/certificates/cert_05.png", // NASO ISRO Olympiad
  "/certificates/cert_07.png", // Inter-House Animations 2nd Position
  "/certificates/cert_10.png", // CyferNode 4.0 Volunteer Appreciation
  "/certificates/cert_18.png", // Macmillan North Zone 2nd Prize
  "/certificates/cert_02.png", // Best Student with Innovation & IT Skills
];

export const MARQUEE_CERTIFICATES_ROW_2 = [
  "/certificates/cert_15.png", // Macmillan Grand Finale Finalist
  "/certificates/cert_27.png", // Intel & CBSE AI Aware
  "/certificates/cert_06.png", // Tech Fest Workshop Lead
  "/certificates/cert_25.png", // Code.org Hour of Code
  "/certificates/cert_12.png", // LogIQids 9th Rank Gurugram
  "/certificates/cert_17.png", // Prodigy Hunt Jr IIT Exam
  "/certificates/cert_09.png", // goCODR Level 1 Coding Program
  "/certificates/cert_16.png", // Jaipur History Festival Logo Design
  "/certificates/cert_20.png", // Ridge Valley STEM Expo
  "/certificates/cert_22.png", // Suncity Techtonik Movie Making
  "/certificates/cert_21.png", // St. Francis Photography & Film
  "/certificates/cert_14.png", // KVRSS Spark Awards Participation
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "kvrss-runner-up",
    number: "01",
    title: "SMART Self-Stabilizing Spoon — National Runner-Up",
    organization: "Dr. K. V. Rao Scientific Society (KVRSS SPARK 2024-25)",
    category: "Physics & Hardware Innovation (BHOUTIKAM)",
    badge: "National Runner-Up · SPARK Awards",
    year: "2024–2025 · Hyderabad",
    description:
      "Awarded National Runner-Up in the BHOUTIKAM (Physics) category at SPARK Innovation Awards 2024-25. Engineered a 3D-modeled self-stabilizing spoon featuring dual-axis gyroscopic PID control to counteract hand tremors in Parkinson's patients.",
    highlights: [
      "1st Runner-Up across national STEM finalists",
      "Real-time dual-axis PID gyroscopic stabilization with MPU6050",
      "Ergonomic custom 3D-modeled and printed physical enclosure",
      "Presented to leading scientists & researchers in Hyderabad",
    ],
    certificateImg: "/certificates/cert_11.png",
    secondaryImg: "/certificates/cert_14.png",
    tags: ["Physics", "3D CAD", "Arduino", "Gyroscopic PID", "Assistive Tech"],
    link: "https://github.com/LookWanted/parkinsons-spoon-Data",
  },
  {
    id: "macmillan-grand-finale-2025",
    number: "02",
    title: "Macmillan Budding Scientist Grand Finale — 2nd Prize",
    organization: "Powered by Springer Nature & IIT Delhi",
    category: "National Grand Finale · STEM Research",
    badge: "2nd Prize · Grand Finale",
    year: "February 2025 · IIT Delhi",
    description:
      "Secured Second Prize in the prestigious National Grand Finale of the Macmillan Budding Scientist 2024-25 competition, organized by Macmillan Education in association with Indian Institute of Technology (IIT) Delhi.",
    highlights: [
      "Second Prize at the national Grand Finale at IIT Delhi",
      "Rigorous scientific jury evaluation by IIT Delhi faculty & scientists",
      "Recognized for innovative applied STEM methodology & execution",
    ],
    certificateImg: "/certificates/cert_13.png",
    secondaryImg: "/certificates/cert_15.png",
    tags: ["Springer Nature", "IIT Delhi", "STEM Research", "Grand Finale"],
  },
  {
    id: "ncrypt-dps-first",
    number: "03",
    title: "1st Position in nCreate — nCrypt 2025",
    organization: "Delhi Public School (DPS) Sushant Lok, Gurugram",
    category: "Inter-School Tech Fest & Creative Tech",
    badge: "First Position · nCreate 2025",
    year: "October 2025",
    description:
      "Clinched 1st Position in the high-stakes 'nCreate' event at nCrypt 2025, one of Delhi NCR's premier inter-school technical symposiums, competing against top schools in creative development and technical design.",
    highlights: [
      "1st Position in competitive development & creative technology",
      "Time-bound UI/UX design and logic execution under live constraints",
      "Recognized by nCrypt tech jury for design polish and innovation",
    ],
    certificateImg: "/certificates/cert_03.png",
    tags: ["nCrypt 2025", "UI/UX", "Creative Dev", "DPS Sushant Lok"],
  },
  {
    id: "macmillan-north-zone-first",
    number: "04",
    title: "Macmillan Budding Scientist — 1st Prize North Zone",
    organization: "Springer Nature & Tryst, IIT Delhi",
    category: "Zonal Science & Innovation Championship",
    badge: "First Prize · North Zone",
    year: "2022–2023 · IIT Delhi",
    description:
      "Awarded First Prize across North Zone in Macmillan Budding Scientist 2022-23, powered by Springer Nature in association with Tryst, IIT Delhi, advancing to represent the zone at national forums.",
    highlights: [
      "First Prize in North Zone regional finals",
      "Collaborative research and scientific model presentation at Tryst, IIT Delhi",
      "Consistent recognition across multiple editions of the Budding Scientist initiative",
    ],
    certificateImg: "/certificates/cert_23.png",
    secondaryImg: "/certificates/cert_18.png",
    tags: ["First Prize", "Springer Nature", "Tryst IIT Delhi", "North Zone"],
  },
  {
    id: "summer-fields-best-it",
    number: "05",
    title: "Best Student in IT & Best Student with Innovation",
    organization: "Summer Fields School (DLF QEC Innovative Schools)",
    category: "Annual Institutional Honors",
    badge: "Best Student in IT (Class IX & VIII-A)",
    year: "2024–2025",
    description:
      "Conferred the prestigious Merit Certificate for 'Best Student in IT' (Class IX) and 'Best Student with Innovation & IT Skills' (Class VIII-A), recognizing exceptional technical leadership, programming capability, and creative problem-solving.",
    highlights: [
      "Awarded Best Student in IT for consecutive academic sessions",
      "Recognized by school Principal and Head of IT Department",
      "Demonstrated continuous mentorship and project contribution",
    ],
    certificateImg: "/certificates/cert_01.png",
    secondaryImg: "/certificates/cert_02.png",
    tags: ["Merit Award", "Innovation", "IT Leadership", "School Honors"],
  },
  {
    id: "intel-ai-for-all",
    number: "06",
    title: "Intel & CBSE 'AI For All' + Tech Fest Workshop Lead",
    organization: "Intel, Digital India & Summer Fields School",
    category: "AI Certification & Technical Mentorship",
    badge: "AI Appreciate & AI Aware · Intel",
    year: "2025",
    description:
      "Completed both the 'AI Appreciate' and 'AI Aware' stages of the national AI For All initiative by Intel, Digital India, and CBSE. Additionally, conducted hands-on technical workshops at school Tech Fests to introduce peers to modern tech tools.",
    highlights: [
      "Certified by Director Asia Pacific & Japan, Intel Partnerships",
      "Completed AI ethics, neural networks, and applications curriculum",
      "Led workshops at Summer Fields Tech Fest and volunteered for CyferNode 4.0",
    ],
    certificateImg: "/certificates/cert_26.png",
    secondaryImg: "/certificates/cert_27.png",
    tags: ["Intel", "Digital India", "AI For All", "CBSE", "Workshop Lead"],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "3D Modeling & CAD",
    description:
      "Creation of precision physical enclosures, mechanical assemblies, and high-impact 3D objects tailored for robotics, hardware devices, and digital visualizations.",
  },
  {
    number: "02",
    title: "Rendering & Lighting",
    description:
      "High-quality, photorealistic renders that showcase designs with custom lighting, realistic physical materials, and cinematic spatial depth.",
  },
  {
    number: "03",
    title: "Motion & Interactive Physics",
    description:
      "Dynamic animations, gyroscopic simulation, and motion graphics that bring life to prototypes, games, and spatial web experiences.",
  },
  {
    number: "04",
    title: "Embedded Systems & IoT",
    description:
      "Integrating hardware intelligence with Arduino, NodeMCU, gyroscopes, and custom firmware into cohesive end-to-end working devices.",
  },
  {
    number: "05",
    title: "Modern Web Engineering",
    description:
      "Designing clean, fluid, and conversion-focused web applications with React, TypeScript, Tailwind, and cutting-edge animation libraries.",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "parkinsons-spoon",
    number: "01",
    title: "Parkinson's Self-Stabilizing Spoon",
    category: "Hardware / 3D & Embedded",
    badge: "Runner-Up · KVRSS India (Physics)",
    badgeType: "award",
    description:
      "An Arduino-powered smart spoon with real-time gyroscopic stabilization to counteract hand tremors — engineered with embedded C++ control code and a custom 3D-modeled ergonomic enclosure, enabling Parkinson's patients to eat independently.",
    highlights: [
      "1st Runner-Up at KVRSS India Physics Category",
      "Real-time dual-axis PID gyroscopic stabilization",
      "Custom 3D-printed enclosure & lightweight ergonomic handle",
    ],
    tags: ["C++", "Arduino", "3D CAD & Modeling", "MPU6050 Gyro", "Control Systems"],
    col1Image1:
      "/projects/arduino_hero.jpg",
    col1Image2:
      "/projects/spoon_hero.jpg",
    col2Image:
      "/projects/spoon_hero.jpg",
    liveUrl: "https://github.com/LookWanted/parkinsons-spoon-Data",
    githubUrl: "https://github.com/LookWanted/parkinsons-spoon-Data",
  },
  {
    id: "collab-code-for-all",
    number: "02",
    title: "CollabCodeForAll",
    category: "Web App · Full Stack",
    badge: "Live · Real-Time Web",
    badgeType: "live",
    description:
      "A real-time collaborative coding platform designed for live pair programming and time-bound collaborative workflows. Features instant code synchronization, room management, syntax highlighting, and an ultra-responsive dark interface.",
    highlights: [
      "Built in a time-bound rapid development sprint",
      "Instant real-time multi-user code synchronization",
      "Seamless client-side state handling & low latency",
    ],
    tags: ["React", "JavaScript", "Real-Time Sync", "Tailwind CSS", "Vercel"],
    col1Image1:
      "/projects/collab_hero.jpg",
    col1Image2:
      "/projects/collab_hero.jpg",
    col2Image:
      "/projects/collab_hero.jpg",
    liveUrl: "https://collabcodeforall.vercel.app",
    githubUrl: "https://github.com/LookWanted",
  },
  {
    id: "dev98os",
    number: "03",
    title: "Dev98OS",
    category: "OS Simulation · Web",
    badge: "Live · Retro Desktop",
    badgeType: "live",
    description:
      "A fully interactive retro operating system simulation in the browser. Combines authentic late-90s UI paradigms, draggable window manager, taskbar navigation, system audio, and mini-applications with modern web technologies.",
    highlights: [
      "Custom multi-window management engine",
      "Interactive retro desktop icons, menus & sound cues",
      "Lightweight zero-dependency architecture",
    ],
    tags: ["JavaScript", "HTML/CSS", "System Architecture", "Retro UI", "Vercel"],
    col1Image1:
      "/projects/dev98os_hero.jpg",
    col1Image2:
      "/projects/dev98os_hero.jpg",
    col2Image:
      "/projects/dev98os_hero.jpg",
    liveUrl: "https://dev98os.vercel.app",
    githubUrl: "https://github.com/LookWanted",
  },
  {
    id: "grid-lock",
    number: "04",
    title: "Grid-Lock",
    category: "Interactive Game · Logic",
    badge: "Live · Game",
    badgeType: "live",
    description:
      "A minimalist, highly engaging spatial puzzle game built around pure geometric grid mechanics. Features smooth state transitions, intuitive keyboard/touch interactions, score systems, and challenging cognitive mechanics.",
    highlights: [
      "Dynamic matrix grid computation",
      "Zero-latency input detection and smooth CSS animations",
      "Cross-platform responsive puzzle controls",
    ],
    tags: ["JavaScript", "HTML/CSS", "Game Logic", "Grid UI", "Vercel"],
    col1Image1:
      "/projects/gridlock_hero.jpg",
    col1Image2:
      "/projects/gridlock_hero.jpg",
    col2Image:
      "/projects/gridlock_hero.jpg",
    liveUrl: "https://grid-lock-black.vercel.app",
    githubUrl: "https://github.com/LookWanted",
  },
  {
    id: "geometry-dash-vibe",
    number: "05",
    title: "Geometry Dash HTML Vibe",
    category: "Game Engine · Canvas",
    badge: "Live · Canvas Engine",
    badgeType: "live",
    description:
      "A fast-paced, rhythm-synchronized browser platformer recreation built from the ground up using HTML5 Canvas API. Features precise collision boxes, gravity scaling, responsive jump physics, dynamic obstacle rendering, and high-FPS loops.",
    highlights: [
      "Custom 60FPS Canvas physics loop",
      "AABB collision handling & level generation",
      "Dynamic soundtrack sync and particle effects",
    ],
    tags: ["JavaScript", "Canvas API", "Physics Engine", "Vercel", "Audio Sync"],
    col1Image1:
      "/projects/geodash_hero.jpg",
    col1Image2:
      "/projects/geodash_hero.jpg",
    col2Image:
      "/projects/geodash_hero.jpg",
    liveUrl: "https://geometry-dash-html-vibe.vercel.app",
    githubUrl: "https://github.com/LookWanted",
  },
  {
    id: "github-open-source",
    number: "06",
    title: "Robotics & Open-Source Lab",
    category: "17+ Repositories · STEM",
    badge: "17+ Repositories on GitHub",
    badgeType: "repo",
    description:
      "Seventeen public repositories spanning Arduino-based automated systems, NodeMCU IoT controllers, C++ embedded sensor drivers, mechanical 3D models, React prototypes, and browser-based games.",
    highlights: [
      "17+ active repositories on GitHub",
      "Embedded hardware, IoT & Web prototypes",
      "Hands-on STEM & Robotics engineering",
    ],
    tags: ["Embedded C++", "Arduino", "NodeMCU IoT", "3D CAD", "React", "Open Source"],
    col1Image1:
      "/projects/arduino_hero.jpg",
    col1Image2:
      "/projects/spoon_hero.jpg",
    col2Image:
      "/projects/arduino_hero.jpg",
    liveUrl: "https://github.com/LookWanted?tab=repositories",
    githubUrl: "https://github.com/LookWanted?tab=repositories",
  },
];

export const PERSONAL_INFO = {
  name: "Namish Dawar",
  tagline: "a 3d creator driven by crafting striking and unforgettable projects",
  email: "dawarnamish28@gmail.com",
  github: "https://github.com/LookWanted",
  instagram: "https://www.instagram.com/namish_dawar",
  discord: "namishhaha",
  discordUrl: "https://discord.com/users/namishhaha",
  website: "https://namishdawar.xyz",
  bio: "Hey — I'm Namish Dawar, a Class X student from Gurugram with a deep interest in robotics, embedded systems, 3D modeling, and modern web engineering. I build hands-on STEM and programming projects involving Arduino-based systems, NodeMCU IoT applications, and interactive web interfaces.",
};
