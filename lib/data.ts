// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Shivani Mittal",
  email: "shivanimittal1705@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivani-mittal-745a272a7",
  linkedinLabel: "linkedin.com/in/shivani-mittal-745a272a7",
  github: "https://github.com/shivanimittal17",
  githubLabel: "github.com/shivanimittal17",
  resume: "/Shivani-Mittal-Resume.pdf",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "featured", label: "Featured" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "5", label: "Projects" },
  { value: "3.16", label: "CGPA (out of 4)" },
  { value: "3", label: "Hackathons" },
  { value: "3", label: "Positions of Responsibility" },
];

export const aboutParagraphs = [
  "Computer Engineering undergraduate (2023–2027) with a strong foundation in cybersecurity, data engineering and software development. I am proficient in Python, SQL, Java and web technologies.",
  "My projects cover a login honeypot with brute-force detection, an AWS pipeline that diagnoses application faults with Gemini, a Python and React digital forensics platform, an Android hotel booking app built on MVVM, and an AI-powered personal finance app.",
  "In summer 2026 I interned as a Data Engineer at Celebal Technologies, where I worked on Python and SQL and explored the Databricks ecosystem, including Lakebase and Databricks Apps.",
  "Outside coursework I have been a finalist in the OpenAI Hackathon and the LYB Mumbai Hackathon 2026, and I have held leadership roles with ACM-W and the Entrepreneurship Cell.",
];

export const experience = {
  role: "Data Engineer Intern",
  org: "Celebal Technologies",
  dates: "May 2026 – Aug 2026",
  bullets: [
    "Strengthened Python and SQL skills through data manipulation exercises, query development and hands-on technical learning.",
    "Explored the Databricks ecosystem, including Lakebase and Databricks Apps, to understand data workflows and application development.",
    "Completed Databricks Partner Academy modules on Lakebase + Apps Go-to-Market and Selling Genie to Business Users, gaining exposure to data platforms and AI-powered analytics.",
  ],
};

export const skillGroups = [
  { title: "Programming", items: ["C", "C++", "Java", "Python", "JavaScript", "SQL", "R"] },
  {
    title: "AI & Data Engineering",
    items: ["TensorFlow", "Keras", "OpenCV", "Computer Vision", "Deep Learning", "Transfer Learning", "Databricks"],
  },
  {
    title: "Development",
    items: ["Node.js", "React.js", "Next.js", "Android Studio", "Firebase", "MVVM", "AWS Cloud Architecting"],
  },
  { title: "Databases", items: ["MySQL", "Oracle SQL", "SQLite", "Firestore", "Supabase"] },
  {
    title: "Cybersecurity",
    items: ["Flask", "Authentication Systems", "Honeypot Systems", "Brute Force Detection", "Risk Scoring"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Pandas", "Matplotlib", "MATLAB", "Excel"],
  },
];

export const softSkills = [
  "Leadership",
  "Problem Solving",
  "Analytical Thinking",
  "Team Collaboration",
  "Communication",
  "Adaptability",
];

export const featured = {
  year: "2026",
  title: "TRACE-X: Explainable Digital Forensics & Anti-Forensic Detection System",
  description:
    "A digital forensics platform built with Python, FastAPI and React. It reconstructs event timelines, detects suspicious patterns, correlates evidence using graphs and generates explainable investigation reports, so an investigator can see why each finding was raised.",
  primaryTags: ["Python", "FastAPI", "React"],
  tags: ["Digital Forensics", "Anti-Forensic Detection", "Explainability"],
  steps: [
    { title: "Reconstruct timelines", text: "Rebuilds the order of events from the evidence." },
    { title: "Detect suspicious patterns", text: "Flags activity that looks abnormal or covers tracks." },
    { title: "Correlate evidence", text: "Links related findings together in a graph." },
    { title: "Explain the findings", text: "Generates investigation reports that show their reasoning." },
  ],
};

export const projects = [
  {
    title: "Honeypot Login Monitoring System",
    year: "2026",
    text: "A Flask-based login honeypot with SQLite logging, brute-force detection, risk scoring and an analytics dashboard.",
    tags: ["Flask", "SQLite", "Brute-force Detection", "Risk Scoring", "Analytics Dashboard"],
  },
  {
    title: "RootLens",
    year: "2026",
    text: "An AI-powered cloud incident detection and diagnosis system. An AWS pipeline detects application faults, diagnoses likely causes and displays incidents on a real-time dashboard.",
    tags: ["AWS Lambda", "CloudWatch", "EventBridge", "Gemini"],
  },
  {
    title: "PaisaPilot",
    year: "2026",
    text: "An AI-powered personal finance app with expense tracking, budgeting, ML-based transaction categorisation, spending forecasts, anomaly detection and a RAG-based chatbot.",
    tags: ["Machine Learning", "Forecasting", "Anomaly Detection", "RAG Chatbot"],
  },
  {
    title: "TravelMate",
    year: "2025",
    text: "An Android hotel booking app built with Java and Firebase using MVVM, with authentication, bookings, reviews and real-time room availability.",
    tags: ["Java", "Firebase", "Android Studio", "MVVM"],
  },
];

export const publication = {
  title: "PaisaPilot",
  status: "Accepted",
  text: "Research paper on PaisaPilot, accepted at a conference for publication in Springer Proceedings.",
  tags: ["Springer Proceedings", "Personal Finance", "Machine Learning"],
};

export const education = [
  {
    title: "B.Tech in Computer Engineering",
    dates: "2023 – 2027",
    sub: "MPSTME, NMIMS University",
    detail: "CGPA: 3.16 / 4.00",
  },
  {
    title: "Seedling Modern Public School, Udaipur",
    dates: "2022 – 2023",
    detail: "CBSE: 67.8%",
  },
  {
    title: "St. Mary's Convent Senior Secondary School, Udaipur",
    dates: "2020 – 2021",
    detail: "CBSE: 85.8%",
  },
];

export const certifications = [
  { title: "Managing Projects with AI", issuer: "Coursera", date: "Sep 2026" },
  { title: "Ethical Hacker", issuer: "Cisco Networking Academy", date: "Sep 2026" },
  { title: "AWS Academy Graduate: Cloud Architecting", issuer: "AWS Academy", date: "Oct 2026" },
  { title: "Python Course for Beginners", issuer: "Scaler", date: "May 2024" },
  { title: "Databricks Lakebase + Apps Go-to-Market", issuer: "Databricks Partner Academy" },
  { title: "Databricks Selling Genie to Business Users", issuer: "Databricks Partner Academy" },
];

export const hackathons = [
  { title: "Finalist", org: "OpenAI Hackathon" },
  { title: "Semi-Finalist", org: "Vguard Hackathon" },
  { title: "Finalist", org: "LYB Mumbai Hackathon 2026" },
];

export const leadership = [
  { title: "Sub Head, Digital Creatives", org: "ACM-W", date: "Feb 2025 – Jan 2026" },
  { title: "Senior Executive", org: "Colloquium (Entrepreneurship Cell)", date: "Nov 2024 – Apr 2025" },
  { title: "Executive", org: "Social Impact", date: "Feb 2024 – Apr 2024" },
  { title: "Volunteer", org: "Tara Sansthan", date: "May 2024 – Jun 2024" },
];
