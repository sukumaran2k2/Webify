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
    id: 'luke-fashion',
    slug: 'luke-fashion',
    title: 'Luke Fashion',
    category: 'E-Commerce',
    desc: 'A fully responsive e-commerce frontend with product listings, cart management, and state managed via Redux. Built with TypeScript for type safety across every component.',
    content: `
      Luke Fashion is a modern, blazing-fast e-commerce frontend designed to demonstrate the power of React and Redux in a scalable environment. 
      It features a fully functional shopping cart, dynamic product filtering, and a seamless checkout simulation.
      
      We utilized CSS Modules for scoped styling, ensuring that component styles never leak, and TypeScript to enforce strict typing across our Redux store and component props.
    `,
    tech: ['React.js', 'Redux', 'TypeScript', 'CSS Modules'],
    emoji: '👗',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    image: '/luke-fashion-preview.png',
    link: 'https://luke-fashion.vercel.app/',
    github: '#',
    featured: true,
  },
  {
    id: 'Urban Nest',
    slug: 'urban-nest',
    title: 'Urban Nest',
    category: 'Web App',
    desc: 'A real estate platform for buying, selling, and renting properties. Features advanced search filters, property listings, and a modern, responsive interface.',
    content: `
      Urban Nest redefines how users search for their dream homes. By leveraging Next.js server-side rendering, we ensured lightning-fast load times and perfect SEO out of the box. 
      The advanced filtering system allows users to drill down by price, location, and amenities instantly.
      
      The UI is completely custom-built using Tailwind CSS, giving it a premium, modern feel that adapts perfectly to any device screen size.
    `,
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'LocalStorage'],
    emoji: '🏠',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/urbannest-preview.png',
    link: 'https://real-estate-landing-page-peach.vercel.app/',
    github: 'https://github.com/sukus-dev/Urban-Nest',
    featured: true,
  },
  {
    id: 'weather-app',
    slug: 'weather-app',
    title: 'Weather App',
    category: 'Web App',
    desc: 'Real-time weather application using the OpenWeatherMap API and browser Geolocation. Displays temperature, humidity, wind speed, and a 5-day forecast with dynamic icons.',
    content: `
      A sleek, highly interactive weather application that provides real-time data at a glance. By integrating the OpenWeatherMap API, the app delivers accurate current conditions and a 5-day forecast.
      
      It features geolocation to automatically detect the user's location upon load, and custom CSS3 animations that change based on the weather conditions.
    `,
    tech: ['React.js', 'OpenWeatherMap API', 'Geolocation', 'CSS3'],
    emoji: '🌤️',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '', // Needs a fallback if empty
    link: '#',
    github: '#',
    featured: false,
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
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'the-vibecods-story',
    title: 'The Vibecods Story: From Friends to a Modern AI Agency',
    excerpt: 'How a group of developers and digital marketers came together with a single mission: delivering lightning-fast, modern products powered by cutting-edge AI standards.',
    content: `
      Vibecods started as a simple conversation between friends who were frustrated with the slow, outdated paradigms of traditional web development. 
      We saw a gap in the market: businesses needed blazing-fast, modern websites, but they were often stuck dealing with slow agencies that relied on bloated WordPress templates.
      
      By combining our deep technical knowledge with our marketing expertise, we formed Vibecods. Our philosophy is simple: **Vibe Coding**. 
      We use advanced AI tools to write boilerplate, squash bugs, and optimize code at unprecedented speeds, allowing our human developers to focus entirely on architecture, user experience, and the "vibe" of the final product.
    `,
    date: 'May 15, 2026',
    readTime: '3 min read',
    tags: ['Our Story', 'Vibe Coding', 'AI Standards'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    slug: 'nextjs-15-optimizing',
    title: 'Next.js 15: Optimizing for the Edge and Beyond',
    excerpt: 'A deep dive into the latest Next.js features, focusing on Edge rendering, enhanced routing, and how we use it to build lightning-fast experiences.',
    content: `
      Next.js has revolutionized how we build React applications, and version 15 takes it to a whole new level. 
      At Vibecods, performance isn't just a metric; it's a feature. We extensively utilize the new Edge runtime to execute middleware and server components closer to the user, drastically reducing latency.
      
      In this article, we explore our standard boilerplate, how we handle caching strategies with the new App Router, and why we believe Server Components are the definitive future of the web.
    `,
    date: 'April 28, 2026',
    readTime: '7 min read',
    tags: ['Next.js', 'Performance', 'React'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    slug: 'designing-with-tailwind',
    title: 'Designing with Tailwind: From Chaos to Design Systems',
    excerpt: 'How we transitioned from scattered CSS files to a unified, scalable design system using Tailwind CSS and modern utility classes.',
    content: `
      Writing custom CSS for every component is a recipe for maintenance nightmares. Before Tailwind, our codebases were littered with disjointed class names and conflicting media queries.
      
      Tailwind CSS changed everything. By providing a strict set of utility classes, it forced us to think in terms of a unified design system. We no longer write arbitrary hex codes; we use our theme's color palette. We no longer guess margin sizes; we use a predefined spacing scale.
      
      Discover how our team migrated completely to utility-first CSS and how it sped up our development cycle by 40%.
    `,
    date: 'April 15, 2026',
    readTime: '4 min read',
    tags: ['UI/UX', 'Tailwind', 'Design'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
];
