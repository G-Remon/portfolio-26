export type Project = {
  slug: string;
  context: string;
  title: string;
  category: string[];
  summary: string;
  problem: string;
  role: string;
  constraints: string[];
  approach: string[];
  solution: string[];
  workflow: string[];
  visualEvidence: string[];
  tools: string[];
  result: string;
  learning: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const profile = {
  name: "Gerges Remon",
  email: "gergsremon26@gmail.com",
  phone: "01001016693",
  location: "Cairo, Egypt",
  resume: "https://drive.google.com/file/d/1M5xh7AB5blLfIV-7pTMxTPsqZ10xls_I/view?usp=sharing",
  github: "https://github.com/G-Remon",
  linkedin: "https://www.linkedin.com/in/gerges-remon-2625000n/",
};

export const projects: Project[] = [
  {
    slug: "business-productivity-system",
    title: "Business Productivity & Attendance System",
    category: ["Automation", "Business Systems", "Data"],
    summary: "A structured reporting workflow that turns recurring field updates into usable operational records.",
    context: "Built for a real engineering and construction-solutions environment. Screens and data are intentionally anonymized to protect internal information.",
    problem: "Weekly updates and attendance records needed a consistent structure that reduced repetitive manual entry and made management follow-up easier.",
    role: "Workflow analysis, information architecture, spreadsheet system design, Apps Script automation, and reporting logic.",
    constraints: ["Must use existing Google Workspace tools", "Must handle dynamic team sizes", "Requires zero technical training for field staff"],
    approach: [
      "Mapped the recurring reporting flow",
      "Standardized inputs and validation",
      "Separated collection, processing, and review",
      "Designed around future date and team changes"
    ],
    solution: [
      "Multi-day reporting workflow",
      "Automated row generation",
      "Attendance and absence classification",
      "Management-ready summary views"
    ],
    workflow: [
      "Field Staff input via Google Forms",
      "Apps Script processes and categorizes data",
      "Google Sheets centralizes operational records",
      "Automated summaries generate daily management views"
    ],
    visualEvidence: [
      "/assets/Screenshot 2026-09-02 000917.png"
    ],
    tools: ["Google Sheets", "Google Apps Script", "Google Forms"],
    result: "Centralized the workflow and reduced repetitive manual steps, creating a reusable reporting structure.",
    learning: "The strongest automation starts with understanding how people already work—not with writing the script first.",
    featured: true,
  },
  {
    slug: "monthly-performance-analytics",
    title: "Monthly Performance Analytics",
    category: ["Automation", "Data", "Business Systems"],
    summary: "A reporting layer for comparing recurring work, surfacing patterns, and improving review quality.",
    context: "An internal business system presented here at workflow level only; private numbers and business logic are excluded.",
    problem: "Operational records existed, but monthly comparison and recurring-project analysis required too much manual review and data formatting.",
    role: "Data structure, comparison logic, validation rules, reporting design, and dashboard refinement.",
    constraints: ["No external database available", "Must process dirty raw data from historical sheets", "Reviewers need read-only dashboard access"],
    approach: [
      "Defined meaningful monthly comparisons",
      "Handled duplicates and incomplete records",
      "Separated raw data from reporting",
      "Designed clear review states"
    ],
    solution: [
      "Monthly comparison views",
      "Data-quality controls",
      "Recurring work analysis",
      "Reusable reporting structure"
    ],
    workflow: [
      "Raw operational data exported to staging sheet",
      "Validation logic flags incomplete records",
      "Apps Script aggregates monthly totals",
      "Dashboard reflects corrected reporting"
    ],
    visualEvidence: [
      "/assets/Screenshot 2026-09-02 001006.png"
    ],
    tools: ["Google Sheets", "Apps Script", "Excel"],
    result: "Made recurring records easier to compare and improved record consistency across the team.",
    learning: "A dashboard is only reliable when the data-entry and validation layers are designed with equal care.",
    featured: true,
  },
  {
    slug: "data-and-power-bi",
    title: "Commercial Data Analysis",
    category: ["Data", "Business Systems"],
    summary: "An analytical dashboard built to track key performance indicators and answer specific commercial questions.",
    context: "Developed as an analytical case study using raw sales and operational data.",
    problem: "Raw data required cleaning and modeling before it could answer specific business questions about category performance and running totals.",
    role: "Data cleaning, Power Query processing, data modeling, DAX measure creation, and dashboard design.",
    constraints: ["Disparate raw data sources", "Need for clear visual hierarchy", "Performance constraints on large datasets"],
    approach: [
      "Extracted and cleaned raw CSV and Excel data",
      "Established a star schema data model",
      "Created DAX measures for KPIs",
      "Designed dashboard around key business questions"
    ],
    solution: [
      "Automated Power Query cleaning steps",
      "Relational data model",
      "Interactive KPI tracking dashboard",
      "Clear insights panel"
    ],
    workflow: [
      "Raw Data → Power Query (Cleaning)",
      "Data Model (Relationships)",
      "DAX (Measures)",
      "Power BI (Visualization)"
    ],
    visualEvidence: [
      // TODO: Add Power Query screenshot
      // TODO: Add Data model snippet
      // TODO: Add Power BI Dashboard screenshot
    ],
    tools: ["Excel", "Power Query", "Power BI", "DAX"],
    result: "Created a centralized view that makes recurring reviews easier and surfaces actionable category performance.",
    learning: "Clear data modeling is more important than complex visualization; a good model makes the dashboard simple to build.",
    featured: true,
  },
  {
    slug: "mawazin-al-sharq",
    title: "Mawazin Al-Sharq",
    category: ["Web"],
    summary: "A responsive real-estate web platform built around property discovery and clear user journeys.",
    context: "A freelance web project developed from requirements through launch.",
    problem: "The platform needed to present property information clearly and support fast search, filtering, and inquiry flows across devices.",
    role: "Front-end development, UI implementation, responsive behavior, API integration, and deployment.",
    constraints: ["Strict performance requirements", "Mobile-first priority for MENA region", "Fast iteration cycle"],
    approach: [
      "Translated requirements into page flows",
      "Built reusable property UI components",
      "Handled loading and API states",
      "Optimized layouts for mobile and desktop"
    ],
    solution: [
      "Property discovery interface",
      "Client-side search and filtering",
      "Responsive content hierarchy",
      "Production deployment via Vercel"
    ],
    workflow: [
      "User filters criteria",
      "React Query fetches matching properties",
      "UI updates optimistically",
      "Inquiry sent via integrated form"
    ],
    visualEvidence: [
      "/assets/Mawaazen image.png"
    ],
    tools: ["React", "Tailwind CSS", "React Query", "Swiper", "Vercel"],
    result: "Delivered a production website with reusable components and responsive property browsing.",
    learning: "Real product work requires balancing technical structure with the clarity users need to make decisions.",
    liveUrl: "https://www.mawazin-alsharq.com/",
    githubUrl: "https://github.com/G-Remon/mwazeen-elshark",
    featured: true,
  },
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    category: ["AI", "Web"],
    summary: "An AI-assisted web tool for reviewing resumes against specific job requirements.",
    context: "A web project exploring practical, transparent use of generative AI in a focused user workflow.",
    problem: "Candidates needed a clearer, structured way to identify gaps between a resume and a target job description without relying on generic advice.",
    role: "Front-end implementation, interaction design, responsive UI, and AI service integration.",
    constraints: ["API rate limiting", "Managing unpredictable LLM output", "Maintaining a fast UI during generation"],
    approach: [
      "Defined a simple input-to-feedback flow",
      "Structured the prompt to force scannable JSON responses",
      "Designed clear loading and feedback states",
      "Kept AI output framed as guidance rather than absolute truth"
    ],
    solution: [
      "Resume and job-description comparison tool",
      "Structured feedback UI",
      "Responsive interface",
      "AI-assisted recommendations"
    ],
    workflow: [
      "User uploads CV and Job Description",
      "React client sends structured prompt to API",
      "Claude Sonnet processes comparison",
      "UI parses and renders actionable feedback"
    ],
    visualEvidence: [
      "/assets/Ai resume image.png"
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Claude Sonnet", "REST API"],
    result: "Built a responsive workflow that presents AI-generated feedback in an understandable format.",
    learning: "AI becomes useful when its output is framed, reviewed, and presented around a specific decision.",
    liveUrl: "https://ai-analyzer-cv.vercel.app/",
    githubUrl: "https://github.com/G-Remon/ai-analyzer-cv",
    featured: false,
  },
  {
    slug: "corporate-visual-communication",
    title: "Corporate Visual Communication",
    category: ["Creative", "Business Systems"],
    summary: "Research-backed presentations, profiles, catalogues, and product content for technical audiences.",
    context: "Ongoing corporate work in construction chemicals, expansion joints, and interior solutions. Client-sensitive materials are not published.",
    problem: "Complex engineering products and company information needed clearer structure, stronger visual hierarchy, and consistent communication.",
    role: "Research, content architecture, business writing, visual direction, layout, and production.",
    constraints: ["Strict corporate brand guidelines", "Highly technical engineering vocabulary", "Multiple stakeholder approvals"],
    approach: [
      "Researched product and audience context",
      "Built an information hierarchy before designing",
      "Translated technical details into usable content",
      "Applied a consistent visual system"
    ],
    solution: [
      "Executive presentations",
      "Company profiles",
      "Product catalogues",
      "Technical social content"
    ],
    workflow: [
      "Information gathering from engineers",
      "Content architecture and drafting",
      "Visual layout in InDesign/PowerPoint",
      "Review and final publishing"
    ],
    visualEvidence: [
      // TODO: Add approved, non-confidential presentation layout
      // TODO: Add company profile example
    ],
    tools: ["PowerPoint", "InDesign", "Photoshop", "Generative AI"],
    result: "Created reusable communication formats for management, consultants, engineers, and digital audiences.",
    learning: "Technical communication works best when accuracy, audience context, and visual hierarchy are developed together.",
    featured: true,
  },
  {
    slug: "ecommerce-experience",
    title: "E-commerce Experience",
    category: ["Web"],
    summary: "A complete storefront interface covering product discovery, cart, and checkout flows.",
    context: "A front-end product project focused on application architecture and real API behavior.",
    problem: "Build a coherent online-shopping journey with live data, reusable UI, and reliable state management.",
    role: "Front-end architecture, UI development, API integration, state management, and responsive implementation.",
    constraints: ["Client-side state limits", "Simulating real checkout", "Handling API latency smoothly"],
    approach: [
      "Mapped the shopping journey",
      "Separated server and client state",
      "Built reusable product components",
      "Handled loading, error, and empty states"
    ],
    solution: [
      "Product browsing",
      "Cart management",
      "Checkout flow",
      "Responsive interaction patterns"
    ],
    workflow: [
      "User views product catalog",
      "Redux manages cart state locally",
      "React Query fetches details",
      "Responsive checkout simulation"
    ],
    visualEvidence: [
      "/assets/ecomerce image.png"
    ],
    tools: ["React", "Redux Toolkit", "React Query", "Tailwind CSS", "Vercel"],
    result: "Delivered a responsive application with reusable commerce components and end-to-end shopping flows.",
    learning: "Clear state boundaries make complex interfaces easier to maintain and easier for users to trust.",
    liveUrl: "https://ecommerce-2zg8.vercel.app/",
    githubUrl: "https://github.com/G-Remon/ecommerce",
    featured: false,
  }
];

export const capabilities = [
  { 
    title: "Business Automation", 
    description: "I map repetitive workflows and turn them into structured tools that support real operations.", 
    solves: "Reporting, attendance tracking, data entry, recurring administrative tasks", 
    tools: ["Apps Script", "Google Sheets", "Google Forms"] 
  },
  { 
    title: "Data & Analytics", 
    description: "I clean, structure, and analyze business data so it becomes easier to understand and act on.", 
    solves: "Data quality, KPI tracking, period comparison, executive reporting", 
    tools: ["Excel", "SQL", "Power BI", "Power Query"] 
  },
  { 
    title: "AI-Assisted Workflows", 
    description: "I use generative AI deliberately across research, content structuring, and production.", 
    solves: "Research synthesis, production support, drafting technical outlines", 
    tools: ["Prompt Engineering", "Claude", "ChatGPT"] 
  },
  { 
    title: "Content & Visual Communication", 
    description: "I connect business context with content systems, product storytelling, and corporate communication.", 
    solves: "Technical content formatting, marketing campaigns, product explanation", 
    tools: ["Content Strategy", "Copywriting", "Social Content"] 
  },
  { 
    title: "Corporate Presentations", 
    description: "I structure complex information into clear presentations, profiles, catalogues, and visual systems.", 
    solves: "Information hierarchy, executive communication, sales enablement", 
    tools: ["PowerPoint", "InDesign", "Photoshop"] 
  },
  { 
    title: "Web & Front-End Development", 
    description: "I build responsive digital interfaces with clean component structures and practical user journeys.", 
    solves: "Responsive websites, landing pages, custom product interfaces", 
    tools: ["React", "TypeScript", "Tailwind CSS", "Vercel"] 
  }
];
