export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  desc: string;
  content: string;
  tech: string[];
  emoji: string;
  gradient: string;
  image: string;
  link: string;
  github: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "luke-fashion",
    slug: "luke-fashion",
    title: "Luke Fashion",
    category: "E-Commerce",
    desc: "A fully responsive e-commerce frontend with product listings, cart management, and state managed via Redux. Built with TypeScript for type safety across every component.",
    content: `
      Luke Fashion is a modern, blazing-fast e-commerce frontend designed to demonstrate the power of React and Redux in a scalable environment. 
      It features a fully functional shopping cart, dynamic product filtering, and a seamless checkout simulation.
      
      We utilized CSS Modules for scoped styling, ensuring that component styles never leak, and TypeScript to enforce strict typing across our Redux store and component props.
    `,
    tech: ["React.js", "Redux", "TypeScript", "CSS Modules"],
    emoji: "👗",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    image: "/luke-fashion-preview.png",
    link: "https://luke-fashion.vercel.app/",
    github: "#",
    featured: true,
  },
  {
    id: "Urban Nest",
    slug: "urban-nest",
    title: "Urban Nest",
    category: "Web App",
    desc: "A real estate platform for buying, selling, and renting properties. Features advanced search filters, property listings, and a modern, responsive interface.",
    content: `
      Urban Nest redefines how users search for their dream homes. By leveraging Next.js server-side rendering, we ensured lightning-fast load times and perfect SEO out of the box. 
      The advanced filtering system allows users to drill down by price, location, and amenities instantly.
      
      The UI is completely custom-built using Tailwind CSS, giving it a premium, modern feel that adapts perfectly to any device screen size.
    `,
    tech: ["React.js", "Next.js", "Tailwind CSS", "LocalStorage"],
    emoji: "🏠",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: "/urbannest-preview.png",
    link: "https://real-estate-landing-page-peach.vercel.app/",
    github: "https://github.com/sukus-dev/Urban-Nest",
    featured: true,
  },
  {
    id: "weather-app",
    slug: "weather-app",
    title: "Weather App",
    category: "Web App",
    desc: "Real-time weather application using the OpenWeatherMap API and browser Geolocation. Displays temperature, humidity, wind speed, and a 5-day forecast with dynamic icons.",
    content: `
      A sleek, highly interactive weather application that provides real-time data at a glance. By integrating the OpenWeatherMap API, the app delivers accurate current conditions and a 5-day forecast.
      
      It features geolocation to automatically detect the user's location upon load, and custom CSS3 animations that change based on the weather conditions.
    `,
    tech: ["React.js", "OpenWeatherMap API", "Geolocation", "CSS3"],
    emoji: "🌤️",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    image: "", // Needs a fallback if empty
    link: "#",
    github: "#",
    featured: false,
  },
];

export interface Service {
  id: string;
  icon: string;
  title: string;
  desc: string;
  content: string;
  features: string[];
  gradient: string;
  color: string;
}

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    icon: "💻",
    title: "Web Development",
    desc: "Full-stack web apps built with Next.js, React, and Node.js. Fast, scalable, and production-ready.",
    content: `
      Build modern web applications with performance, reliability, and user experience in mind. Our Web Development service focuses on creating fast, accessible, and maintainable products.
      
      We provide end-to-end development including frontend architecture, backend APIs, database design, and deployment automation to ensure your app is ready for launch and growth.
    `,
    features: [
      "Next.js / React",
      "REST & GraphQL APIs",
      "PostgreSQL / MongoDB",
      "CI/CD Pipeline",
    ],
    gradient:
      "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.08))",
    color: "#6366f1",
  },
  {
    id: "ui-ux",
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces that delight users. From wireframes to interactive prototypes.",
    content: `
      Design experiences that are intuitive and beautiful. Our UI/UX service combines research, wireframing, visual design, and interaction patterns to create cohesive products.
      
      We prioritize usability, accessibility, and conversion to make sure every interface feels polished and performs across devices.
    `,
    features: [
      "Figma Design",
      "Design Systems",
      "Responsive Layouts",
      "Motion Design",
    ],
    gradient:
      "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(14,165,233,0.08))",
    color: "#06b6d4",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-Commerce",
    desc: "High-converting e-commerce stores with seamless checkout, inventory management, and analytics.",
    content: `
      Launch a digital storefront designed for conversion. Our E-Commerce service builds custom shopping experiences that are secure, scalable, and optimized for purchase flow.
      
      We integrate payment processing, product management, customer workflows, and analytics to help you sell more with less friction.
    `,
    features: [
      "Shopify / WooCommerce",
      "Payment Gateways",
      "Cart & Checkout",
      "SEO Optimized",
    ],
    gradient:
      "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.08))",
    color: "#22c55e",
  },
  {
    id: "seo",
    icon: "🔍",
    title: "SEO Optimization",
    desc: "Boost your search rankings with technical SEO, Core Web Vitals optimization, and content strategy.",
    content: `
      Improve search visibility and organic traffic with technical SEO and performance optimization. Our SEO service targets both speed and structure for better rankings.
      
      We focus on metadata, schema markup, page speed, and crawlability so your site appears more prominently in search results.
    `,
    features: [
      "Core Web Vitals",
      "Schema Markup",
      "Meta Optimization",
      "Site Speed",
    ],
    gradient:
      "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(251,146,60,0.08))",
    color: "#f59e0b",
  },
  {
    id: "api",
    icon: "🔌",
    title: "API Development",
    desc: "Robust REST and GraphQL APIs with authentication, rate limiting, and comprehensive documentation.",
    content: `
      Build dependable APIs that power your product. Our API Development service delivers scalable backend services with secure authentication and clean documentation.
      
      We support REST, GraphQL, and real-time endpoints so your app can connect to data safely and efficiently.
    `,
    features: ["REST & GraphQL", "JWT Auth", "Rate Limiting", "API Docs"],
    gradient:
      "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(244,63,94,0.08))",
    color: "#ec4899",
  },
  {
    id: "maintenance",
    icon: "🛡️",
    title: "Maintenance & Support",
    desc: "Ongoing care for your product – updates, bug fixes, monitoring, and performance improvements.",
    content: `
      Keep your product running smoothly over time with proactive maintenance and support. Our service includes monitoring, bug fixes, security updates, and performance tuning.
      
      We help teams stay secure and stable while continuously improving the experience for users.
    `,
    features: [
      "24/7 Monitoring",
      "Security Patches",
      "Performance Tuning",
      "Regular Updates",
    ],
    gradient:
      "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(167,139,250,0.08))",
    color: "#8b5cf6",
  },
];

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  variant?: "marketing" | "story" | "tech";
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "the-vibecods-story",
    title: "The Vibecods Story: From Friends to a Modern AI Agency",
    excerpt:
      "How a group of developers and digital marketers came together with a single mission: delivering lightning-fast, modern products powered by cutting-edge AI standards.",
    content: `
      Vibecods started as a simple conversation between friends who were frustrated with the slow, outdated paradigms of traditional web development. 

We saw a gap in the market: businesses needed blazing-fast, modern websites, but they were often stuck dealing with slow agencies that relied on bloated WordPress templates.
      
By combining our deep technical knowledge with our marketing expertise, we formed Vibecods. Our philosophy is simple: Vibe Coding. 
     
We use advanced AI tools to write boilerplate, squash bugs, and optimize code at unprecedented speeds, allowing our human developers to focus entirely on architecture, user experience, and the "vibe" of the final product.
    `,
    date: "May 15, 2026",
    readTime: "3 min read",
    tags: ["Our Story", "Vibe Coding", "AI Standards"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    slug: "nextjs-15-optimizing",
    title: "Next.js 15: Optimizing for the Edge and Beyond",
    excerpt:
      "A deep dive into the latest Next.js features, focusing on Edge rendering, enhanced routing, and how we use it to build lightning-fast experiences.",
    content: `
      Next.js has revolutionized how we build React applications, and version 15 takes it to a whole new level. 
      At Vibecods, performance isn't just a metric; it's a feature. We extensively utilize the new Edge runtime to execute middleware and server components closer to the user, drastically reducing latency.
      
      In this article, we explore our standard boilerplate, how we handle caching strategies with the new App Router, and why we believe Server Components are the definitive future of the web.
    `,
    date: "April 28, 2026",
    readTime: "7 min read",
    tags: ["Next.js", "Performance", "React"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
 
];
