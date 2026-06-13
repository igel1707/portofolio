export const portfolioData = {
  name: "PRIGEL KUSUMAWARDANI",
  titles: ["Associate Project Manager", "System Analyst"],
  contact: {
    location: "Malang, East Java",
    phone: "+62 857-0877-9694",
    email: "prigelkusumawardani@gmail.com",
    linkedin: "https://linkedin.com/in/prigel-kusumawardani/",
    github: "https://github.com/", // Placeholder from md
  },
  summary: "High-achieving Informatics student (GPA 3.98/4.00) at Universitas Brawijaya with a proven track record in bridging technical engineering with strategic management and human-centered design. I specialize in turning complex, ambiguous problems into structured, actionable, and scalable digital solutions by leveraging AI-fluency (NotebookLM) and data-driven reporting. Committed to maintaining high standards of delivery and operational excellence through cross-functional team leadership.",
  skills: [
    {
      category: "Project Management",
      items: ["Agile/Scrum Methodologies", "Sprint Prioritization", "Stakeholder Coordination", "Monitoring & Timeline Management", "MoM Documentation", "Risk Mitigation", "Jira", "GitLab Issue Boards"]
    },
    {
      category: "System Analysis",
      items: ["Requirement Engineering (BRD/FRD/SRS)", "Gap Analysis (NotebookLM)", "Business Process Modeling (BPMN)", "UML Modeling", "Database Design", "SQL", "API Documentation (Swagger)"]
    },
    {
      category: "UI/UX Design",
      items: ["Design Thinking", "User Research", "Journey Mapping", "Information Architecture", "High-Fidelity Prototyping (Figma)", "Usability Testing (Maze)", "Visual Design"]
    },
    {
      category: "Tools",
      items: [
        { name: "Jira", use: "Agile project tracking, sprint planning, and issue management for cross-functional teams." },
        { name: "GitLab", use: "CI/CD monitoring and tracking technical progress via issue boards." },
        { name: "Figma", use: "Crafting high-fidelity prototypes, user flows, and design systems." },
        { name: "NotebookLM", use: "Leveraging AI for deep-dive requirement analysis and gap identification." },
        { name: "Microsoft Excel", use: "Advanced data tracking, Gantt charts, and custom project analytics." },
        { name: "Miro & Draw.io", use: "Collaborative brainstorming and UML/BPMN system modeling." },
        { name: "Postman & Swagger", use: "API testing, documentation, and technical logic validation." },
        { name: "Bizagi", use: "Formal business process modeling (BPMN) and workflow optimization." }
      ]
    }
  ],
  experience: [
    {
      role: "Associate Project Manager Intern",
      company: "PT Digdaya Olah Teknologi Indonesia",
      logo: "/pt-digdaya-logo.svg",
      period: "Feb 2026 – Present",
      description: "Leading end-to-end delivery of 4 concurrent technology projects with cross-functional teams.",
      highlights: [
        {
          title: "Agile Leadership & Cross-Functional Coordination",
          points: [
            "Lead Daily Stand-Ups (DSU) for 2 high-priority projects.",
            "Support 3 Project Managers in orchestrating workflows for 5–10 cross-functional members.",
            "Facilitate Sprint Retrospectives by documenting action points and process improvements.",
            "Bridge and onboard new intern and staff members."
          ]
        },
        {
          title: "Timeline Management & Progress Monitoring",
          points: [
            "Develop and manage dynamic Gantt charts, maintaining ~95% on-time milestone delivery rate.",
            "Perform daily progress audits via GitLab issue boards.",
            "Implement functional tracking systems in spreadsheets using custom formulas.",
            "Brief technical teams on updated schedules and critical-path tasks."
          ]
        },
        {
          title: "Requirement Engineering & System Architecture",
          points: [
            "Support Requirement Gathering (RG) processes and capture business logic into MoM.",
            "Translate complex needs into structured Blueprints and FSD, reducing rework by 30%.",
            "Perform deep-dive analysis on requirements using NotebookLM.",
            "Analyze UI/UX improvement opportunities based on client feedback."
          ]
        },
        {
          title: "Stakeholder Engagement & Administrative Quality Assurance",
          points: [
            "Direct end-to-end User Acceptance Testing (UAT) sessions, accelerating bug resolution by 25%.",
            "Maintain stakeholder transparency via data-driven weekly and monthly reports.",
            "Manage formal project handovers and prepare BAST documentation."
          ]
        }
      ]
    },
    {
      role: "Teaching Assistant (Asisten Praktikum)",
      company: "Universitas Brawijaya",
      period: "Aug 2025 – Dec 2025",
      points: [
        "System Analysis & Design: Mentored 50+ students in mastering requirement analysis and UML modeling.",
        "User Experience Design: Guided 24 students in applying Design Thinking principles and Figma prototyping."
      ]
    }
  ],
  projects: [
    {
      name: "CoWorkEase",
      tagline: "Coworking Space Booking Platform",
      description: "Designed full C4 Architecture (C1-C4), developed a backend PoC using NestJS, and documented REST API endpoints using Swagger."
    },
    {
      name: "Zenro",
      tagline: "AI-Powered Mental Wellbeing Assistant",
      description: "Designed end-to-end flow from onboarding to weekly insights. Conducted user research, created personas/journey maps, and validated designs through usability testing."
    },
    {
      name: "Movease",
      tagline: "Movie Ticketing App",
      description: "Defined and prioritized features using the MoSCoW method. Designed a mood-based filtering system."
    },
    {
      name: "FindIt",
      tagline: "Campus Lost-and-Found",
      description: "Built a centralized web platform for standardizing lost item reporting. Developed information architecture and user flows."
    },
    {
      name: "EcoMate",
      tagline: "Recycling Assistant",
      description: "Analyzed two-sided journeys for users and waste collectors. Used the Crazy 8 method for layout ideation and built interactive prototypes."
    }
  ],
  achievements: [
    "2nd Place Winner, GIDHUB 2025 National UI/UX Competition",
    "Staff of the Month, HMDTIF Information & Communication Division (Jul 2024)",
    "Oracle Academy Certified: Database Design & Database Programming with SQL",
    "Strong Academic Achievement, maintaining a consistent GPA of 3.98/4.00"
  ],
  education: [
    {
      school: "Universitas Brawijaya",
      degree: "Bachelor of Informatics Engineering",
      period: "Aug 2023 – Present (Expected 2027)",
      gpa: "3.98 / 4.00",
      coursework: ["System Analysis & Design", "Software Engineering", "SOA", "UX Design", "Design Patterns"]
    },
    {
      school: "SMA Negeri 2 Lumajang",
      degree: "Natural Sciences",
      period: "2020 – 2023"
    }
  ]
};
