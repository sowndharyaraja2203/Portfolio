// Portfolio Data Configuration for Sowndharya R
window.portfolioData = {
  profile: {
    initials: "SR",
    name: "SOWNDHARYA R",
    title: "Computer Science & Engineering Student",
    status: "Open to Opportunities",
    location: "Coimbatore, Tamil Nadu, India",
    phone: "+91 9385772998",
    cgpa: "9.07 / 10.0",
    college: "Dr. NGP Institute of Technology, Coimbatore",
    bio: "I am a third-year Computer Science and Engineering student with a passion for web development and creating user-friendly web applications. I enjoy building responsive websites using HTML, CSS, JavaScript, React.js, Java, Spring Boot, and modern web technologies, and I am eager to expand my skills through real-world projects and continuous learning.",
    email: "sowndharyaraja2203@gmail.com",
    github: "https://github.com/sowndharyaraja2203",
    linkedin: "https://linkedin.com/in/SowndharyaR",
    leetcode: "https://leetcode.com/u/sowndharyaraja2203",
    avatar: "./profile.jpeg",
    resumeUrl: "#resume"
  },

  stats: {
    commitsThisYear: 200,
    reposCount: 8,
    dsaSolved: 310,
    dsaBreakdown: {
      easy: 150,
      medium: 110,
      hard: 50
    }
  },

  orbitalSkills: {
    core: [
      { name: "React.js", ring: 1, angle: 0 },
      { name: "HTML5 & CSS3", ring: 1, angle: 72 },
      { name: "JavaScript (ES6)", ring: 1, angle: 144 },
      { name: "Responsive Web", ring: 1, angle: 216 },
      { name: "UI Components", ring: 1, angle: 288 }
    ],
    backend: [
      { name: "Java", ring: 2, angle: 0 },
      { name: "Spring Boot", ring: 2, angle: 60 },
      { name: "MySQL", ring: 2, angle: 120 },
      { name: "Node.js & Express", ring: 2, angle: 180 },
      { name: "Basic SQL", ring: 2, angle: 240 },
      { name: "MongoDB", ring: 2, angle: 300 }
    ],
    devopsAi: [
      { name: "Git & GitHub", ring: 3, angle: 0 },
      { name: "VS Code", ring: 3, angle: 60 },
      { name: "Postman", ring: 3, angle: 120 },
      { name: "Python", ring: 3, angle: 180 },
      { name: "DSA (Algorithms)", ring: 3, angle: 240 },
      { name: "IoT & OS / DBMS", ring: 3, angle: 300 }
    ]
  },

  projects: [
    {
      id: "code-quest",
      name: "CodeQuest",
      subtitle: "React.js | Java | Spring Boot | MySQL",
      icon: "terminal",
      color: "#6366f1",
      description: "Interactive coding and assessment platform built with React.js frontend and Java Spring Boot backend with MySQL database.",
      longDescription: "Developed a full-stack interactive coding and assessment platform using React.js for the frontend and Java Spring Boot for the backend. Integrated MySQL database schema for managing user accounts, quiz modules, problem submissions, and leaderboards via RESTful APIs.",
      tags: ["React.js", "Java", "Spring Boot", "MySQL", "RESTful APIs", "Full-Stack"],
      github: "https://github.com/sowndharyaraja2203/Code-Quest",
      demo: "https://code-quest-sound17.vercel.app/",
      architecture: ["React Component UI", "Spring Boot REST API", "MySQL Relational Schema", "Quiz & Assessment Engine"]
    },
    {
      id: "track-my-career",
      name: "Track My Career",
      subtitle: "Java | Web Technologies | Node.js | MongoDB",
      icon: "school",
      color: "#3b82f6",
      description: "Developed a career tracking platform to help students monitor their academic and professional progress.",
      longDescription: "Developed a career tracking platform to help students monitor their academic and professional progress. Implemented goal-setting and milestone tracking features with a clean web-based interface.",
      tags: ["Java", "HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/sowndharyaraja2203/skilllift",
      demo: "https://github.com/sowndharyaraja2203/skilllift",
      architecture: ["Academic Tracking", "Goal Setting", "Progress Monitor", "Clean Web UI"]
    },
    {
      id: "soil-neutralization",
      name: "Automatic Soil Neutralization System",
      subtitle: "IoT | pH Sensor",
      icon: "sensors",
      color: "#8b5cf6",
      description: "Utilized a pH sensor to continuously monitor soil pH levels and provide real-time data to users.",
      longDescription: "Utilized a pH sensor to continuously monitor soil pH levels and provide real-time data to users. Automated soil neutralization alerts to assist farmers in maintaining optimal crop growth conditions.",
      tags: ["IoT", "pH Sensor", "Hardware Automation", "Real-Time Telemetry"],
      github: "https://github.com/sowndharyaraja2203",
      demo: "https://github.com/sowndharyaraja2203",
      architecture: ["pH Sensor Module", "Real-Time Telemetry", "Neutralization Alert", "Optimal Growth Engine"]
    },
    {
      id: "smart-city-route-planner",
      name: "Smart City Route Planner",
      subtitle: "DSA | Java",
      icon: "alt_route",
      color: "#f59e0b",
      description: "Designed an efficient city route planning system using Data Structures & Algorithms concepts.",
      longDescription: "Designed an efficient city route planning system using Data Structures & Algorithms concepts. Applied graph traversal algorithms to compute optimal routes across city nodes.",
      tags: ["Java", "DSA", "Graph Algorithms", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/sowndharyaraja2203/smartcityrouteplanner",
      demo: "https://github.com/sowndharyaraja2203/smartcityrouteplanner",
      architecture: ["Graph Traversal", "Node Calculator", "Distance Estimator", "Interactive Route UI"]
    },
    {
      id: "hospital-appointment",
      name: "Hospital Appointment System",
      subtitle: "Web Technologies | Full-Stack",
      icon: "local_hospital",
      color: "#10b981",
      description: "Enables patients to register, log in, book appointments with doctors, and manage appointment history.",
      longDescription: "Online platform for booking and managing hospital appointments. Streamlines appointment booking, reducing waiting times and improving accessibility.",
      tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/sowndharyaraja2203/Hospital-Appointment",
      demo: "https://github.com/sowndharyaraja2203/Hospital-Appointment",
      architecture: ["Patient Login", "Doctor Listing", "Booking Engine", "History Portal"]
    }
  ],

  process: [
    {
      title: "Requirement Analysis",
      description: "Deconstructing real-world requirements, user needs, and algorithmic constraints before designing solutions."
    },
    {
      title: "UI/UX & Schema Design",
      description: "Crafting intuitive responsive layouts (React/HTML/CSS) and robust database models (MySQL/MongoDB)."
    },
    {
      title: "Algorithmic Development",
      description: "Writing clean, modular code with strong Data Structures & Algorithms logic, Spring Boot REST endpoints, and API integration."
    },
    {
      title: "Testing & Deployment",
      description: "Verifying edge cases, testing endpoints with Postman, managing version control with Git/GitHub, and deploying."
    }
  ],

  education: [
    {
      period: "2024 — 2028 (Expected)",
      degree: "B.E. Computer Science and Engineering",
      institution: "Dr. NGP Institute of Technology, Coimbatore",
      grade: "CGPA: 9.07 / 10.0"
    },
    {
      period: "2024",
      degree: "12th Standard — Kalaimagal Vidhyashram Matric Hr. Sec. School, Idappadi",
      institution: "Score: 88.8%",
      grade: ""
    },
    {
      period: "2022",
      degree: "10th Standard — Kalaimagal Vidhyashram Matric Hr. Sec. School, Idappadi",
      institution: "Score: 95.8%",
      grade: ""
    }
  ],

  experience: [
    {
      period: "15 Days Internship",
      role: "Web Development Intern",
      company: "Appin Technology, Coimbatore",
      description: "Gained hands-on experience in web development technologies including HTML and CSS. Worked on building and styling web pages, understanding real-world development workflows."
    }
  ],

  achievements: [
    {
      title: "24-Hour Hackathon",
      organization: "SNS College of Technology",
      icon: "emoji_events",
      badge: "Hackathon",
      description: "Participated in 24-Hour Hackathon at SNS College of Technology, building collaborative software solutions in an intensive time-constrained coding sprint."
    },
    {
      title: "NPTEL Certification",
      organization: "National Programme on Technology Enhanced Learning",
      icon: "workspace_premium",
      badge: "Certification",
      description: "Completed certification courses on NPTEL demonstrating dedication to continuous learning and advanced technical coursework."
    },
    {
      title: "Coursera Certification",
      organization: "Coursera",
      icon: "verified",
      badge: "Data Analysis",
      description: "Earned certification in Managing, Describing and Analysing Data, focusing on quantitative analytics and data-driven problem solving."
    },
    {
      title: "LeetCode Problem Solving",
      organization: "LeetCode",
      icon: "code",
      badge: "310+ Solved",
      description: "Solved 310+ problems on LeetCode across Easy, Medium, and Hard tiers, demonstrating consistent practice in Data Structures & Algorithms."
    },
    {
      title: "Paper Presentation",
      organization: "KPR Institute of Engineering and Technology",
      icon: "present_to_all",
      badge: "Symposium",
      description: "Presented technical research paper at national-level technical symposium at KPR Institute of Engineering and Technology."
    }
  ]
};