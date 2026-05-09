import { Project, Skill, Certification, BlogPost, Experience } from './types';

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'OAuth', category: 'Backend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vite', category: 'DevOps' },
  { name: 'Netlify', category: 'DevOps' },
  { name: 'Render', category: 'DevOps' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aurèle Grand Hotel PMS',
    description: 'A comprehensive property management system for hotels, featuring real-time booking flows, guest folio generation, administrative dashboards, and third-party integrations for smart room controls.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    link: '#',
    github: '#',
  },
  {
    id: '2',
    title: 'DriveX',
    description: 'A premium car rental web application featuring an AI-powered recommendation engine, real-time admin telemetry, and a secure, streamlined booking flow.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80',
    link: '#',
    github: '#',
  },
  {
    id: '3',
    title: 'Eventix',
    description: 'A production-ready event management platform with Google OAuth integration, secure user session management, and a seamless frontend-to-backend architecture.',
    tags: ['React', 'Express', 'MongoDB', 'OAuth'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    link: '#',
    github: '#',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: '#',
    icon: 'Cloud',
  },
  {
    id: 'c2',
    title: 'Meta Front-End Developer Professional',
    issuer: 'Meta',
    date: '2023',
    link: '#',
    icon: 'Layout',
  },
  {
    id: 'c3',
    title: 'Google Data Analytics Professional',
    issuer: 'Google',
    date: '2022',
    link: '#',
    icon: 'BarChart',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Architecting for Scalability in Node.js',
    excerpt: 'Deep dive into event-driven architecture and how to handle millions of concurrent connections.',
    date: 'Oct 24, 2023',
    readTime: '8 min read',
    category: 'Engineering',
    image: 'https://picsum.photos/seed/blog1/600/400',
  },
  {
    id: 'b2',
    title: 'The Future of Web Rendering',
    excerpt: 'Exploring the transition from SSR to RSC and what it means for the developer experience.',
    date: 'Nov 12, 2023',
    readTime: '6 min read',
    category: 'Insights',
    image: 'https://picsum.photos/seed/blog2/600/400',
  },
  {
    id: 'b3',
    title: 'Optimizing PostgreSQL Queries',
    excerpt: 'Practical tips for indexing, partitioning, and explaining plans to find performance bottlenecks.',
    date: 'Dec 05, 2023',
    readTime: '10 min read',
    category: 'Database',
    image: 'https://picsum.photos/seed/blog3/600/400',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    company: 'Freelance & Independent Projects',
    role: 'Full Stack Engineer',
    period: '2023 - Present',
    description: [
      'Architected and developed complex web applications including comprehensive hotel management systems and event platforms.',
      'Integrated third-party services such as Google OAuth, secure payment gateways, and AI recommendation engines.',
      'Deployed full-stack applications using modern CI/CD practices across Netlify and Render platforms.'
    ],
  },
  {
    id: 'e2',
    company: 'Open Source & API Development',
    role: 'Backend Developer',
    period: '2022 - 2023',
    description: [
      'Designed and built robust RESTful APIs using Node.js, Express, and MongoDB.',
      'Implemented strict schema validation, secure authentication, and complex data querying architectures.',
      'Optimized database performance for high-volume record management and retrieval.'
    ],
  },
];
