export const personal = {
  name: 'Alex Rivera',
  role: 'Full Stack Developer',
  tagline: 'Crafting digital experiences that are fast, beautiful, and built to last.',
  bio: `I'm a developer with 5+ years of experience building web applications from idea to production.
I specialize in creating clean, performant interfaces backed by solid architecture.
I care deeply about developer experience, code quality, and shipping things that matter.`,
  email: 'alex@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  location: 'Madrid, Spain · Remote',
  available: true,
};

export const projects = [
  {
    id: 1,
    title: 'Horizon Dashboard',
    description: 'Analytics platform with real-time data visualization, custom charts, and team collaboration features. Handles 50K+ daily active users.',
    image: '/portfolio/img/project-1.jpg',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    demo: 'https://horizon-demo.example.com',
    github: 'https://github.com/yourusername/horizon',
    featured: true,
  },
  {
    id: 2,
    title: 'Pulse E-commerce',
    description: 'High-performance storefront with Stripe payments, inventory management, and a headless CMS. Sub-1s page loads.',
    image: '/portfolio/img/project-2.jpg',
    tags: ['Next.js', 'Stripe', 'Sanity', 'Tailwind CSS'],
    demo: 'https://pulse-demo.example.com',
    github: 'https://github.com/yourusername/pulse',
    featured: true,
  },
  {
    id: 3,
    title: 'Relay API Gateway',
    description: 'Lightweight API gateway with rate limiting, request routing, and observability built-in. Written in Go for maximum performance.',
    image: '/portfolio/img/project-3.jpg',
    tags: ['Go', 'Docker', 'Prometheus', 'Nginx'],
    demo: 'https://relay-docs.example.com',
    github: 'https://github.com/yourusername/relay',
    featured: true,
  },
  {
    id: 4,
    title: 'Nomad CMS',
    description: 'Minimalist headless CMS for content teams. Markdown-first, git-backed, with a clean editing experience.',
    image: '/portfolio/img/project-4.jpg',
    tags: ['Astro', 'MDX', 'Cloudflare Workers'],
    demo: 'https://nomad-demo.example.com',
    github: 'https://github.com/yourusername/nomad',
    featured: false,
  },
  {
    id: 5,
    title: 'Verdant Design System',
    description: 'Component library and design tokens built for scale. Used across 3 internal products at a startup.',
    image: '/portfolio/img/project-5.jpg',
    tags: ['React', 'Storybook', 'Radix UI', 'Figma'],
    demo: 'https://verdant-storybook.example.com',
    github: 'https://github.com/yourusername/verdant',
    featured: false,
  },
  {
    id: 6,
    title: 'Whisper CLI',
    description: 'Terminal tool for summarizing meeting transcripts with AI. Integrates with Notion, Slack, and Google Calendar.',
    image: '/portfolio/img/project-6.jpg',
    tags: ['Python', 'OpenAI', 'Click', 'SQLite'],
    demo: 'https://whisper-docs.example.com',
    github: 'https://github.com/yourusername/whisper-cli',
    featured: false,
  },
];

export const skills = {
  frontend: [
    'React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS',
    'Framer Motion', 'Radix UI', 'GraphQL',
  ],
  backend: [
    'Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis',
    'REST APIs', 'Docker', 'AWS',
  ],
  tools: [
    'Git', 'GitHub Actions', 'Figma', 'Storybook',
    'Vercel', 'Cloudflare', 'Linear', 'Notion',
  ],
};

export const experience = [
  {
    company: 'Stripe',
    role: 'Senior Frontend Engineer',
    period: '2022 — Present',
    description: 'Led redesign of the Dashboard onboarding flow, reducing time-to-first-charge by 40%.',
  },
  {
    company: 'Vercel',
    role: 'Software Engineer',
    period: '2020 — 2022',
    description: 'Built and maintained core features of the deployment pipeline and preview environments.',
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: '2018 — 2020',
    description: 'Delivered 15+ projects for startups and agencies across Europe.',
  },
];
