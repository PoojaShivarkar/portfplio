export const projects = [
  {
    title: "🧭 Findigoo",
    subtitle: "Booking & Management Platform",
    role: "Full Stack Developer",
    tech: ["Node.js", "Express", "Next.js", "TypeScript", "MongoDB", "Prisma", "Tailwind", "Zustand"],
    description: "A destination booking marketplace for water parks, resorts, farmhouses, and agro-tourism experiences across India.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200",
    tags: ["MERN", "Marketplace", "Fintech"],
    contributions: [
      "Built a full-stack MERN application with scalable architecture",
      "Implemented authentication, listings, reviews, and Razorpay payments",
      "Developed responsive UI using Tailwind and Flowbite React",
      "Managed global state using Zustand",
      "Led sprint planning, deployments, and code reviews",
      "Mentored junior developers"
    ],
    liveUrl: "https://findigoo.com/",
    githubUrl: "#",
    links: [
      { label: "Client App", url: "https://findigoo.com/" },
      { label: "Admin Dashboard", url: "https://findigoo.com/", restricted: "Admin access restricted" }
    ],
    restricted: "Admin access restricted"
  },
  {
    title: "📊 SWFI",
    subtitle: "Marketing Platform & UI System",
    role: "Frontend / Full Stack Developer",
    tech: ["React", "Node.js", "TypeScript", "Storybook", "SASS"],
    description: "Platform providing financial research and global event engagement for institutional clients.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tags: ["Fintech", "UI Library", "Migration"],
    contributions: [
      "Contributed to feature enhancements and issue resolution on production platforms",
      "Maintained and improved marketing and informational pages",
      "Migrated legacy frontend (Pug, Knockout.js) to React-based architecture",
      "Built a reusable UI component library using React, TypeScript, SASS (mixins)",
      "Published internal npm packages for shared components",
      "Integrated Stripe subscription system",
      "Added validation (Yup) and unit testing (Jest)"
    ],
    liveUrl: "https://www.swfinstitute.org/",
    githubUrl: "#",
    links: [
      { label: "SWF Institute", url: "https://www.swfinstitute.org/" },
      { label: "SWFI.com", url: "https://www.swfi.com/" }
    ]
  },
  {
    title: "🌍 Global Wealth Conference",
    subtitle: "Event Platform",
    role: "Frontend Developer",
    tech: ["React", "Tailwind", "Framer Motion"],
    description: "Premium event platform for high-net-worth individuals and global leaders.",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=1200",
    tags: ["Events", "Premium UI", "Responsive"],
    contributions: [
      "Built responsive landing pages for event promotion",
      "Developed UI components for speakers, schedules, and galleries",
      "Ensured branding consistency and cross-device responsiveness"
    ],
    liveUrl: "https://gwc.events/leadership/",
    githubUrl: "#"
  },
  {
    title: "📈 Foster CRM",
    subtitle: "Lead Management Platform",
    role: "Full Stack Developer",
    tech: ["Java", "Angular"],
    description: "Lead management platform for tracking leads and campaign workflows.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    tags: ["CRM", "Enterprise", "Java"],
    contributions: [
      "Built CRM features for lead tracking and campaign workflows",
      "Developed an advanced email campaign module with segmentation and scheduling",
      "Improved campaign personalization features"
    ],
    liveUrl: "https://crm.neurosparkworks.com/",
    githubUrl: "#",
    restricted: "Login required"
  },
  {
    title: "🌐 Concept Tutorials",
    subtitle: "Educational Platform",
    role: "Frontend Developer",
    tech: ["HTML", "CSS Modules"],
    description: "Educational platform providing tutorials and learning resources.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200",
    tags: ["Education", "UX", "Responsive"],
    contributions: [
      "Built responsive web pages with a clean and simple UI",
      "Developed contact forms to enable user interaction"
    ],
    liveUrl: "https://concepttutorials.co.in/",
    githubUrl: "#"
  },
  {
    title: "📚 MRF Library Management System",
    subtitle: "Enterprise Library Solution",
    role: "Backend Developer",
    tech: ["Java", "Spring Boot", "MySQL", "Angular"],
    description: "A comprehensive library management system for managing books, members, and transactions.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200",
    tags: ["Enterprise", "Backend", "Java"],
    contributions: [
      "Developed secure and scalable REST APIs for core library modules",
      "Designed efficient database schemas for performance and reliability",
      "Optimized queries to improve system speed",
      "Collaborated with frontend and QA teams for smooth delivery"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "💰 Digital Gold Investment Platform",
    subtitle: "Fintech Investment Solution",
    role: "Full Stack Developer",
    tech: ["Node.js", "Express", "React", "React Native", "TypeScript", "MongoDB", "Prisma", "PhonePe Gateway"],
    description: "Digital gold investment platform that allows users to securely buy, sell, and manage gold investments. The platform focuses on making gold investing simple, accessible, and goal-driven through a clean digital experience.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200",
    tags: ["Fintech", "Investment", "Gold"],
    contributions: [
      "Worked as a full-stack developer, contributing across both product and technical areas",
      "Designed UI/UX flows using Figma and Visily",
      "Built core features for the admin platform with the team",
      "Took ownership of sprint planning and acted as Scrum facilitator (Jira)",
      "Contributed to testing and overall delivery quality"
    ],
    architecture: "Built a full-stack MERN application using Node.js, Express, React, React Native, TypeScript, MongoDB, Prisma and PhonePe gateway. Developed two main systems: Client Application for users to invest and manage gold, and Admin Platform for managing investment plans, users, and transactions.",
    features: [
      {
        title: "Gold Investment Management",
        description: "Enabled users to buy, sell, and track digital gold with real-time price tracking and portfolio visibility."
      },
      {
        title: "Investment Plans",
        description: "Created flexible plans including one-time, recurring, and goal-based savings. Allowed users to define financial goals and track progress."
      },
      {
        title: "Payments Integration",
        description: "Integrated multiple payment options including UPI, cards, and net banking via PhonePe gateway for secure transaction flow."
      },
      {
        title: "Notifications & Alerts",
        description: "Built a notification system for price updates, milestones, and market changes with customizable alerts."
      },
      {
        title: "User Experience",
        description: "Designed a responsive and intuitive interface across devices, focusing on simplifying complex financial actions."
      }
    ],
    challengesSolutions: [
      {
        challenge: "Handling real-time price updates",
        solution: "Designed efficient data flow to keep pricing accurate without impacting performance."
      },
      {
        challenge: "Complex investment workflows",
        solution: "Simplified user journeys for recurring and goal-based investments."
      },
      {
        challenge: "Admin system complexity",
        solution: "Built structured tools for managing plans, users, and transactions efficiently."
      },
      {
        challenge: "Payment reliability",
        solution: "Ensured smooth handling of transaction states and edge cases."
      }
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "📱 Sustainable Development App",
    subtitle: "Social Networking & ESG Platform",
    role: "Full Stack / Mobile Developer",
    tech: ["React Native", "Node.js", "TypeScript", "Firebase", "Turborepo"],
    description: "A cross-platform mobile application focused on sustainable development. It brings together users, organizations, and communities to connect, share ESG content, and collaborate in real time.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    tags: ["Mobile", "Social", "Sustainability"],
    contributions: [
      "Contributed to feature development across mobile and backend",
      "Participated in sprint planning, testing, and delivery tracking",
      "Supported and mentored junior developers",
      "Collaborated closely with the team on releases and deployments",
      "Took ownership of build generation and deployment readiness"
    ],
    problem: "Sustainability initiatives are often fragmented. Communities lack a unified space to connect, real-time interaction is missing in most ESG platforms, and content is scattered across different services.",
    architecture: "Built using React Native, Node.js, TypeScript, and Firebase. Adopted a monorepo architecture using Turborepo to manage shared code across services, ensuring scalability and consistent performance across Android and iOS.",
    features: [
      {
        title: "Real-Time Communication First",
        description: "Implemented real-time chat and instant notifications for engagement, ensuring smooth syncing of messages and updates."
      },
      {
        title: "Networking & Connections",
        description: "Built a connection system for users to discover and connect with like-minded individuals, focusing on meaningful engagement."
      },
      {
        title: "Content & ESG Layer",
        description: "Enabled users to create and share posts related to sustainability, structured to support ESG-focused discussions."
      },
      {
        title: "Multi-Service Platform",
        description: "Integrated marketplace features and combined multiple services into a single, central hub for sustainability."
      },
      {
        title: "Performance & Scalability",
        description: "Used Turborepo to manage shared code, reducing duplication and improving development speed across platforms."
      }
    ],
    challengesSolutions: [
      {
        challenge: "Handling real-time features at scale",
        solution: "Optimized data flow and used Firebase for efficient real-time updates without impacting performance."
      },
      {
        challenge: "Managing multiple features in one app",
        solution: "Structured modules clearly and used monorepo for better organization of chat, posts, and marketplace."
      },
      {
        challenge: "Cross-platform performance",
        solution: "Focused on optimized components and efficient state handling to ensure smooth experience on Android and iOS."
      },
      {
        challenge: "Fast development vs code quality",
        solution: "Reviewed and refined AI-generated code before production use to maintain high engineering standards."
      }
    ],
    impact: [
      "Created a unified platform for sustainability-focused users",
      "Enabled real-time collaboration and communication",
      "Improved development speed through monorepo architecture",
      "Delivered a scalable foundation for adding new services"
    ],
    learnings: [
      "Real-time systems require careful planning around performance and data flow",
      "Monorepo architecture can significantly improve team efficiency when managed well",
      "Mobile UX needs to stay simple even when features grow",
      "AI tools are powerful, but require strong engineering judgment"
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
];
