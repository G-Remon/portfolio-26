export type Project = {
  slug: string;
  title: string;
  category: string[];
  summary: string;
  problem: string;
  role: string;
  tools: string[];

  image?: string;
  gallery?: string[];

  outcome: string;
  context: string;
  approach: string[];
  solution: string[];
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

  resume:
    "https://drive.google.com/file/d/1PbQVyRsOPHVaPBbXXsWC0LBOpDj1cwhi/view?usp=sharing",

  github: "https://github.com/G-Remon",

  linkedin: "https://www.linkedin.com/in/gergesremon",
};

export const projects: Project[] = [
  {
    slug: "business-productivity-system",

    title: "Business Productivity & Attendance System",

    category: [
      "Automation & Business Systems",
      "Data & Analytics",
    ],

    summary:
      "An automated operational system that transforms recurring field updates, attendance records, and productivity data into validated KPIs, monthly comparisons, and management-ready insights.",

    problem:
      "Field productivity, attendance, completed work, and recurring operational records were spread across manual workflows, making data collection, monthly comparison, validation, and performance review time-consuming.",

    role:
      "Workflow analysis, data architecture, Google Forms design, Apps Script automation, validation logic, monthly comparison design, KPI development, and management dashboard implementation.",

    tools: [
      "Google Sheets",
      "Google Apps Script",
      "Google Forms",
      "Workflow Automation",
      "Dashboard Design",
    ],

    image: "/assets/dashboard.png",

    gallery: [
      "/assets/dashboard.png",
      "/assets/attendas.png",
    ],

    outcome:
      "Built one connected workflow for collecting, processing, validating, comparing, and visualizing recurring operational data, making productivity and attendance performance easier to monitor over time.",

    context:
      "Built for a real engineering and construction-solutions environment. The portfolio presentation focuses on workflow architecture and reporting while protecting private employee, financial, operational, and proprietary business information.",

    approach: [
      "Mapped the complete reporting and attendance workflow",
      "Structured recurring operational data",
      "Standardized Google Forms data collection",
      "Connected Google Forms with Google Sheets",
      "Automated processing using Google Apps Script",
      "Built validation and data-quality controls",
      "Handled duplicate and incomplete records",
      "Created monthly performance comparison logic",
      "Built attendance and absence classification",
      "Separated raw data from management reporting",
      "Designed KPIs for productivity and operational review",
    ],

    solution: [
      "Google Forms data collection",
      "Apps Script workflow automation",
      "Automated record processing",
      "Productivity tracking",
      "Attendance and absence management",
      "Monthly performance comparison",
      "Data-quality and validation controls",
      "Recurring work analysis",
      "Employee performance ranking",
      "KPI dashboard",
      "Management-ready reporting views",
    ],

    learning:
      "Reliable analytics starts long before the dashboard. Strong data collection, automation, validation, and reporting layers must work together to produce trustworthy business insights.",

    featured: true,
  },

  {
    slug: "power-bi-dashboard",

    title: "Commercial Performance Dashboard",

    category: [
      "Data & Analytics",
    ],

    summary:
      "An analytical Power BI dashboard that transforms raw operational data into structured KPIs, interactive performance views, and decision-focused insights.",

    problem:
      "Raw operational and sales data needed cleaning, modeling, and visualization before it could reliably answer business questions about performance, categories, trends, and recurring KPIs.",

    role:
      "Data cleaning, Power Query transformation, relational data modeling, DAX measure creation, KPI design, analytical thinking, and dashboard development.",

    tools: [
      "Power BI",
      "Excel",
      "Power Query",
      "DAX",
      "Data Modeling",
    ],

    image: "/assets/power bi.png",

    outcome:
      "Created a centralized analytical view that makes recurring performance reviews easier and surfaces relevant trends and category-level insights.",

    context:
      "Developed as an analytical solution using operational data. Sensitive business figures and identifying information are anonymized in the portfolio presentation.",

    approach: [
      "Extracted and cleaned raw CSV and Excel data",
      "Handled missing and inconsistent records",
      "Built a relational data model",
      "Defined business-focused KPIs",
      "Created reusable DAX measures",
      "Designed the dashboard around key analytical questions",
    ],

    solution: [
      "Automated Power Query transformation pipeline",
      "Relational data model",
      "Reusable DAX measures",
      "Interactive KPI tracking",
      "Performance breakdown views",
      "Clear analytical dashboard structure",
    ],

    learning:
      "A strong data model matters more than visual complexity. When the structure is reliable, meaningful dashboards become easier to build, maintain, and understand.",

    featured: true,
  },

  {
    slug: "mawazin-al-sharq",

    title: "Mawazin Al-Sharq",

    category: [
      "Web & Front-End Development",
    ],

    summary:
      "A responsive real-estate web experience built around property discovery, clear navigation, reusable UI components, and practical user journeys.",

    problem:
      "The platform needed to present real-estate information clearly while supporting property browsing, filtering, inquiry flows, responsive layouts, and live data across different devices.",

    role:
      "Front-end development, UI implementation, responsive behavior, API integration, component architecture, and production deployment.",

    tools: [
      "React",
      "Tailwind CSS",
      "React Query",
      "Swiper",
      "Vercel",
    ],

    image: "/assets/mwazeen.png",

    outcome:
      "Delivered a production website with reusable components, responsive layouts, and structured property browsing designed around real user journeys.",

    context:
      "A freelance web project developed from requirements through implementation and production deployment.",

    approach: [
      "Translated business requirements into page flows",
      "Structured reusable React components",
      "Built property-focused UI patterns",
      "Integrated API-driven content",
      "Handled loading and asynchronous states",
      "Optimized layouts for mobile and desktop",
    ],

    solution: [
      "Responsive property discovery interface",
      "Property browsing experience",
      "Search and filtering",
      "Reusable React components",
      "Responsive content hierarchy",
      "Production deployment",
    ],

    learning:
      "Real product work requires balancing technical structure with the clarity users need to navigate information and make decisions.",

    liveUrl: "https://www.mawazin-alsharq.com/",

    githubUrl:
      "https://github.com/G-Remon/mwazeen-elshark",

    featured: true,
  },

  {
    slug: "ai-resume-analyzer",

    title: "AI Resume Analyzer",

    category: [
      "AI-Assisted Workflows",
      "Web & Front-End Development",
    ],

    summary:
      "An AI-assisted web application that evaluates resumes against job requirements and turns model output into structured, actionable feedback.",

    problem:
      "Candidates often struggle to identify the practical gaps between their resume and a target job description or understand which areas require improvement.",

    role:
      "Front-end implementation, interaction design, responsive UI, AI-service integration, feedback architecture, and output presentation.",

    tools: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Claude Sonnet",
      "REST API",
      "Generative AI",
    ],

    image: "/assets/ai_cv.png",

    outcome:
      "Built a responsive workflow that presents AI-generated resume feedback in a structured and understandable format instead of exposing raw model output directly to users.",

    context:
      "A web project exploring the practical and transparent use of generative AI within a focused recruitment-oriented workflow.",

    approach: [
      "Defined a simple resume-to-feedback journey",
      "Structured AI responses for easier scanning",
      "Designed clear score and feedback states",
      "Handled loading and asynchronous behavior",
      "Separated AI output into meaningful evaluation areas",
      "Framed model responses as guidance rather than absolute decisions",
    ],

    solution: [
      "Resume analysis workflow",
      "Job-description comparison",
      "Structured AI-generated feedback",
      "Scoring and evaluation interface",
      "Responsive dashboard",
      "AI-assisted recommendations",
    ],

    learning:
      "AI becomes genuinely useful when its output is structured, contextualized, and presented around a specific user decision instead of simply displaying generated text.",

    liveUrl:
      "https://ai-analyzer-cv.vercel.app/",

    githubUrl:
      "https://github.com/G-Remon/ai-analyzer-cv",

    featured: true,
  },

  {
    slug: "ecommerce-experience",

    title: "E-commerce Experience",

    category: [
      "Web & Front-End Development",
    ],

    summary:
      "A complete responsive storefront experience covering product discovery, categories, cart management, API-driven content, and checkout-related user flows.",

    problem:
      "The project required a coherent online shopping journey with live product data, reusable UI components, reliable state management, and responsive behavior across devices.",

    role:
      "Front-end architecture, UI development, API integration, state management, component design, and responsive implementation.",

    tools: [
      "React",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Vercel",
    ],

    image: "/assets/ecoo.png",

    outcome:
      "Delivered a responsive e-commerce application with reusable commerce components, structured application state, and end-to-end shopping interactions.",

    context:
      "A front-end product project focused on application architecture, reusable UI, API integration, and real-world state-management patterns.",

    approach: [
      "Mapped the main shopping journey",
      "Separated server and client state",
      "Built reusable product components",
      "Integrated dynamic product data",
      "Handled loading, error, and empty states",
      "Designed responsive shopping interactions",
    ],

    solution: [
      "Product browsing",
      "Product category navigation",
      "Cart management",
      "Shopping-state management",
      "Responsive product interface",
      "Checkout-related flow",
    ],

    learning:
      "Clear state boundaries and reusable components make complex product interfaces easier to maintain and easier for users to trust.",

    liveUrl:
      "https://ecommerce-2zg8.vercel.app/",

    githubUrl:
      "https://github.com/G-Remon/ecommerce",

    featured: false,
  },

  {
    slug: "games-discovery-platform",

    title: "Games Discovery Platform",

    category: [
      "Web & Front-End Development",
    ],

    summary:
      "A responsive game-discovery application for exploring, filtering, and navigating a large library of API-driven gaming content.",

    problem:
      "The interface needed to handle a large external dataset while giving users a fast and visually clear way to browse games across categories, platforms, and genres.",

    role:
      "Front-end architecture, UI development, external API integration, client-side filtering, component design, and responsive implementation.",

    tools: [
      "React",
      "JavaScript",
      "CSS",
      "REST API",
    ],

    image: "/assets/games.png",

    outcome:
      "Delivered an interactive content-heavy web experience that handles dynamic data and filtering while maintaining a responsive interface across different screen sizes.",

    context:
      "A front-end development project focused on external API integration, content discovery, filtering logic, and responsive UI patterns.",

    approach: [
      "Mapped the game-discovery user journey",
      "Built reusable game-card components",
      "Integrated external API data",
      "Implemented filtering logic",
      "Handled dynamic content states",
      "Optimized layouts across screen sizes",
    ],

    solution: [
      "Game discovery grid",
      "Genre filtering",
      "Platform filtering",
      "Detailed game views",
      "Dynamic API-driven content",
      "Responsive navigation",
    ],

    learning:
      "Content-heavy external APIs require careful handling of loading states, image behavior, filtering logic, and responsive rendering.",

    featured: false,
  },

  {
    slug: "construction-chemicals-catalogue",

    title: "iChem Construction Chemicals Catalogue",

    category: [
      "Design & Presentation",
    ],

    summary:
      "A structured technical product catalogue designed to organize complex construction-chemicals information into a clear, consistent, and professional communication system.",

    problem:
      "Technical product information was scattered and difficult for consultants, engineers, and clients to navigate, with no consistent visual hierarchy across categories and product specifications.",

    role:
      "Content architecture, editorial layout, visual hierarchy, technical information structuring, product presentation, and final print-ready production in Adobe InDesign.",

    tools: [
      "Adobe InDesign",
      "Editorial Design",
      "Content Strategy",
      "Technical Communication",
      "Print Production",
    ],

    image: "/assets/ichem.png",

    outcome:
      "Created a reusable technical communication format that makes products easier to navigate, understand, specify, and professionally present to engineering clients and consultants.",

    context:
      "Developed for a real engineering and construction-chemicals environment where product clarity and technical communication are important for both commercial and technical audiences.",

    approach: [
      "Categorized products by engineering application",
      "Structured technical product information",
      "Built a clear hierarchy for specifications",
      "Designed a consistent editorial grid",
      "Standardized product imagery",
      "Standardized tables and product layouts",
      "Balanced technical density with visual readability",
    ],

    solution: [
      "Comprehensive construction-chemicals catalogue",
      "Product category system",
      "Structured technical information",
      "Clear specification tables",
      "Consistent editorial language",
      "Reusable product-page structure",
      "Print and digital-ready formats",
    ],

    learning:
      "Technical communication works best when accuracy, audience context, information architecture, and visual hierarchy are developed together.",

    liveUrl:
      "https://drive.google.com/file/d/19Cu3tBWpp3r4APiH3sXwOGjOE29IFyfj/view?usp=sharing",

    featured: false,
  },

  {
    slug: "stc-company-profile",

    title: "STC Company Profile 2026",

    category: [
      "Design & Presentation",
    ],

    summary:
      "A professionally structured corporate profile designed to communicate STC’s construction expertise, capabilities, company story, growth journey, and brand positioning.",

    problem:
      "STC needed a stronger corporate presentation that could communicate its technical capabilities, services, business development, experience, and future direction in one consistent professional document.",

    role:
      "Content structuring, editorial design, visual hierarchy, corporate storytelling, page layout, timeline presentation, and final company-profile production.",

    tools: [
      "Adobe InDesign",
      "Editorial Design",
      "Content Strategy",
      "Corporate Communication",
      "Brand Presentation",
      "Print Production",
    ],

    image: "/assets/stc-profile.png",

    outcome:
      "Created a cohesive company profile that strengthens STC’s professional image and makes its experience, capabilities, values, services, and business direction easier to communicate to clients and partners.",

    context:
      "Developed for STC Specialized Trading & Construction Company within a real construction environment covering construction solutions, building chemicals, technical support, execution, and finishing activities.",

    approach: [
      "Defined the narrative structure of the company profile",
      "Organized company information into clear sections",
      "Built a consistent visual hierarchy",
      "Created a visual company-growth timeline",
      "Structured company vision, mission, and values",
      "Unified typography and imagery",
      "Balanced corporate storytelling with technical credibility",
    ],

    solution: [
      "Corporate introduction and positioning",
      "Company story",
      "Growth journey",
      "Visual company timeline",
      "Vision presentation",
      "Mission and values presentation",
      "Consistent editorial layout system",
      "Print and digital-ready corporate profile",
    ],

    learning:
      "A strong company profile is more than a collection of pages; it must turn business history, capabilities, positioning, and future direction into one clear and credible brand story.",

    liveUrl:
      "https://drive.google.com/file/d/10M04vTParh3PeH-r1r5OfjZTZ477v7Qs/view?usp=sharing",

    featured: true,
  },
  {
  slug: "ichem-product-marketing",

  title: "iChem B2B Product Marketing & Visual Communication",

  category: [
    "Content & Visual Communication",
    "Marketing"
  ],

  summary:
    "A B2B marketing and visual communication project created for iChem, transforming technical construction products into clear, engaging, and brand-consistent social media content for engineers, consultants, contractors, and clients.",

  problem:
    "iChem operates across highly technical construction and interior product categories, where product features, applications, and specifications can be difficult to communicate through conventional social media. The challenge was to make technical products visually engaging without losing credibility, clarity, or brand consistency.",

  role:
    "Marketing content planning, product positioning, creative direction, visual concept development, copy hierarchy, social media design, technical product communication, and campaign production.",

  tools: [
    "Content Strategy",
    "Adobe Photoshop",
    "Social Media Design",
    "AI-Assisted Visual Production",
    "Product Marketing",
    "Brand Communication"
  ],

  image: "/assets/1.jpeg",

  gallery: [
    "/assets/1.jpeg",
    "/assets/2.jpeg",
    "/assets/3.jpeg",
    "/assets/4.jpeg",
    "/assets/5.jpeg",
    "/assets/6.jpeg",
    "/assets/7.jpeg",
    "/assets/8.jpeg",
    "/assets/9.jpeg"
  ],

  outcome:
    "Created a repeatable visual marketing system that made iChem's technical products easier to recognize, understand, and communicate across digital channels while strengthening the consistency of the brand's B2B presence.",

  context:
    "Created for iChem Building Solutions in a real B2B engineering and construction environment. The work spans technical product communication, interior solutions, architectural products, and branded social media campaigns.",

  approach: [
    "Translated technical product information into audience-focused marketing messages",
    "Defined a clear visual hook for each product or application",
    "Balanced engineering credibility with strong social media presentation",
    "Built consistent layouts around iChem's visual identity",
    "Used product benefits and applications as the core of each creative concept",
    "Structured copy for fast scanning and clear information hierarchy",
    "Adapted visual concepts to different construction and interior product categories",
    "Maintained consistency while giving each product campaign its own visual character"
  ],

  solution: [
    "B2B social media product campaigns",
    "Technical product feature communication",
    "Expansion joint marketing creatives",
    "HPL partitions and accessories promotion",
    "Corian solution campaigns",
    "Raised floor marketing content",
    "Product performance and benefit-focused posts",
    "Application-based visual storytelling",
    "Consistent branded content system"
  ],

  learning:
    "Effective B2B engineering marketing is not about simplifying technical products until they lose meaning. The strongest communication keeps the technical value intact while translating it into clear benefits, strong visual hierarchy, and a message the target audience can understand quickly.",

  featured: true
},

  {
    slug: "weather-app",

    title: "Weather Forecast App",

    category: [
      "Web & Front-End Development",
    ],

    summary:
      "A responsive weather application that retrieves external forecast data and presents current conditions and multi-day information through a clean visual interface.",

    problem:
      "Users needed a fast and visually clear way to search locations and review current conditions and multi-day forecasts without unnecessary interface complexity.",

    role:
      "Front-end development, external API integration, UI design, dynamic-data handling, and responsive implementation.",

    tools: [
      "React",
      "JavaScript",
      "CSS",
      "Weather API",
    ],

    image: "/assets/weather.png",

    outcome:
      "Delivered a lightweight responsive weather application with dynamic forecast data, location search, and clear information hierarchy.",

    context:
      "A front-end project focused on consuming external APIs and presenting changing real-time data through a simple responsive interface.",

    approach: [
      "Designed a minimal UI around essential weather data",
      "Integrated a weather API",
      "Structured dynamic forecast content",
      "Built responsive desktop and mobile layouts",
      "Handled loading and API errors",
    ],

    solution: [
      "Current weather display",
      "Multi-day forecast",
      "Location-based search",
      "Dynamic API data",
      "Responsive interface",
    ],

    learning:
      "Dynamic external data requires careful attention to loading states, error handling, information hierarchy, and responsive presentation.",

    featured: false,
  },
];

export const capabilities = [
  {
    title: "Automation & Business Systems",

    description:
      "I analyze repetitive operational workflows and turn them into structured systems that reduce manual work and support real business processes.",

    solves:
      "Reporting, attendance, data collection, recurring tasks, workflow organization",

    tools: [
      "Google Apps Script",
      "Google Sheets",
      "Google Forms",
      "Workflow Automation",
    ],
  },

  {
    title: "Data & Analytics",

    description:
      "I clean, structure, model, and analyze business data so it becomes easier to understand, compare, visualize, and act on.",

    solves:
      "Data quality, KPI tracking, monthly comparison, dashboards, business reporting",

    tools: [
      "Excel",
      "SQL",
      "Power BI",
      "Power Query",
      "DAX",
    ],
  },

  {
    title: "AI-Assisted Workflows",

    description:
      "I use generative AI deliberately across research, analysis, ideation, content production, visual development, and focused digital workflows.",

    solves:
      "Research synthesis, AI-assisted analysis, production support, ideation, structured feedback",

    tools: [
      "Prompt Engineering",
      "AI Research",
      "Generative AI",
      "Image AI",
      "AI-Assisted Workflows",
    ],
  },

  {
    title: "Content & Visual Communication",

    description:
      "I connect business and technical context with content systems, product storytelling, corporate communication, and professional visual presentation.",

    solves:
      "Technical content, product explanation, campaigns, corporate communication",

    tools: [
      "Content Strategy",
      "Photoshop",
      "Social Content",
      "Visual Communication",
    ],
  },

  {
    title: "Design & Presentation",

    description:
      "I structure complex information into clear corporate profiles, catalogues, presentations, technical documents, and visual systems.",

    solves:
      "Information hierarchy, technical communication, executive presentation, editorial design",

    tools: [
      "Adobe InDesign",
      "PowerPoint",
      "Photoshop",
      "Editorial Design",
    ],
  },

  {
    title: "Web & Front-End Development",

    description:
      "I build responsive digital interfaces with reusable components, API integrations, structured application state, and practical user journeys.",

    solves:
      "Web applications, corporate websites, product interfaces, responsive user experiences",

    tools: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "React Query",
      "Vercel",
    ],
  },
];