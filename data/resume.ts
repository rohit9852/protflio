export const profile = {
  name: "Rohit Prasad Kushwaha",
  role: "Senior Software Engineer",
  location: "Bengaluru, India",
  email: "rohitprasadkushwaha10@gmail.com",
  phone: "+91 94301 56815",
  linkedin: "https://www.linkedin.com/in/rohit-prasad-kushwaha/",
  summary:
    "Results-driven Senior Software Engineer with 5+ years of experience building high-scale full-stack applications across edtech and SaaS. Expertise in frontend & backend architecture, real-time systems, and performance optimization — improving performance by 28% and scaling platforms to 200K+ MAU and 10K+ DAU.",
};

export const metrics = [
  { value: "+28%", label: "Platform performance" },
  { value: "200K+", label: "Monthly active users" },
  { value: "10K+", label: "Daily active users" },
  { value: "+42%", label: "Bookings via SEO" },
];

export const experience = [
  {
    company: "Upgrad",
    location: "Bengaluru, India",
    title: "Senior Software Engineer",
    period: "Apr 2026 – Present",
    current: true,
    bullets: [
      "Leading a team of full-stack engineers, driving architecture decisions and delivering scalable full-stack platforms (GraphQL).",
      "Mentoring engineers, conducting code reviews, and establishing best practices to improve team productivity and code quality.",
      "Driving frontend strategy and collaborating with cross-functional teams to align technical solutions with business goals.",
    ],
  },
  {
    company: "Upgrad",
    location: "Bengaluru, India",
    title: "Software Engineer — 2",
    period: "Jul 2023 – Mar 2026",
    bullets: [
      "Delivered scalable React.js / Next.js platforms supporting 80K+ MAU.",
      "Improved platform performance by 28% using AWS caching, lazy loading, and code-splitting.",
      "Scaled TTS learning platform from 1K to 10K+ DAU via real-time audio-text sync pipeline using AWS S3 and Lambda.",
      "Built referral and payment systems driving 32% user growth and improving transaction reliability by 20%.",
      "Optimized large file rendering (PDF / EPUB) using virtualization and incremental parsing.",
      "Increased engineering efficiency by 20% through Firebase monitoring, Cypress testing, and GenAI-based automation.",
    ],
  },
  {
    company: "Kafqa",
    location: "India",
    title: "Software Engineer — 2",
    period: "Jul 2022 – Jul 2023",
    bullets: [
      "Led frontend development for CRM dashboards using React, Django REST, and PostgreSQL.",
      "Improved payment success rates by 20% through multi-gateway integration (Razorpay, Paytm, Nimbbl, ShopSe).",
      "Increased engagement by 30% and reduced bounce rate by 25% via A/B testing and UX improvements.",
      "Achieved 95%+ test coverage using Jest and React Testing Library.",
      "Built internal scheduling and batch systems improving operational efficiency.",
    ],
  },
  {
    company: "Kafqa",
    location: "India",
    title: "Software Engineer — 1",
    period: "Aug 2021 – Jul 2022",
    bullets: [
      "Built high-concurrency scheduling engine using Spring MVC for scalable booking systems.",
      "Increased bookings by 42% via frontend optimization and SEO improvements.",
      "Developed responsive UI modules and secure authentication flows aligned with accessibility standards.",
    ],
  },
  {
    company: "Toppr",
    location: "India",
    title: "Software Engineer",
    period: "Aug 2020 – Feb 2021",
    bullets: [
      "Developed real-time chat and pricing modules using Next.js, Redux, and WebSockets to enhance user interaction.",
      "Collaborated with backend teams to design and integrate REST APIs for seamless frontend-backend communication.",
    ],
  },
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  school: "Parul Institute of Engineering and Technology",
  location: "Gujarat, India",
  period: "Jun 2016 – Jun 2020",
  gpa: "8.13",
};

export const skills: Record<string, string[]> = {
  Frontend: ["React.js", "Next.js (SSR/CSR)", "TypeScript", "Redux Toolkit", "Redux Saga / Thunk", "Context API"],
  "Styling / UI": ["Tailwind CSS", "SCSS", "Styled Components", "Material UI", "Responsive Design", "Web Accessibility"],
  "Backend & APIs": ["Spring Boot", "Spring MVC", "Node.js", "Express", "Django REST", "GraphQL", "REST API Design"],
  Testing: ["Cypress", "Jest", "React Testing Library", "JUnit"],
  "Cloud & DevOps": ["AWS (EC2, S3, Lambda)", "Firebase", "Vercel", "Google Cloud", "CI/CD", "Git", "Bash"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  Architecture: ["Microservices", "Scalable Systems", "Caching (Redis/CDN)", "Load Balancing", "Indexing"],
  "AI & Productivity": ["Cursor AI", "ChatGPT", "GenAI", "Prompt Engineering"],
};

export const marqueeSkills = [
  "React.js", "Next.js", "TypeScript", "GraphQL", "Node.js", "Spring Boot",
  "AWS Lambda", "PostgreSQL", "Redis", "WebSockets", "Microservices",
  "Redux Toolkit", "Cypress", "Jest", "Firebase", "Django REST", "Tailwind",
  "Performance", "A/B Testing", "GenAI",
];

export const projects = [
  {
    name: "Lite Trading App",
    type: "Personal Project",
    description:
      "Real-time trading application streaming live market data via WebSockets with low-latency rendering. Scalable Redux Toolkit state for high-frequency price updates, secure Google OAuth + biometric login (Face ID / Fingerprint), and buy/sell order workflows with optimised UI rendering under rapid data changes.",
    stack: ["WebSocket", "React.js", "Redux Toolkit", "Google OAuth"],
  },
];

export const certifications = [{ name: "React Basics", issuer: "Coursera", year: "2026" }];

export const awards = [
  { name: "Top Performer", issuer: "Upgrad", year: "2024" },
  { name: "Top Impact Raising Award", issuer: "Upgrad", year: "2025" },
];

export const volunteering = [{ role: "Campus Ambassador", org: "InterviewBit" }];

export const publications = [
  { title: "Chronic Kidney Disease Prediction by Machine Learning", venue: "Conference", year: "2020" },
];
