import type { Resource } from '@/lib/types'

export const resources: Resource[] = [
  {
    id: 'firecrawl',
    name: 'Firecrawl',
    icon: '🔥',
    value: '$100+',
    description: '20k free credits and full API access with educational email',
    tags: [
      { name: 'NEW', color: 'yellow', category: 'API Credits' },
      { name: 'API Credits', color: 'blue', category: 'API Credits' },
      { name: 'AI', color: 'purple', category: 'AI' },
      { name: 'Web Scraping', color: 'green', category: 'Web Development' }
    ],
    category: 'free-stuff',
    link: '#',
    isNew: true
  },
  {
    id: 'free-framer-pro',
    name: 'Free Framer Pro',
    icon: '🎨',
    value: '$180',
    description: 'Framer is free for students! Just use your school email',
    tags: [
      { name: 'NEW', color: 'yellow', category: 'Design' },
      { name: 'Design', color: 'purple', category: 'Design' },
      { name: 'Web Development', color: 'blue', category: 'Web Development' },
      { name: 'Productivity', color: 'green', category: 'Productivity' }
    ],
    category: 'free-stuff',
    link: '#',
    isNew: true
  },
  {
    id: 'claude-credits',
    name: 'Claude Credits',
    icon: '🤖',
    value: '$50',
    description: 'Get free Claude AI credits for your projects',
    tags: [
      { name: 'API Credits', color: 'blue', category: 'API Credits' },
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: '#'
  },
  {
    id: 'free-landing-page-builder',
    name: 'Free Landing Page Builder',
    icon: '🚀',
    value: '',
    description: 'Free landing page builder :)',
    tags: [
      { name: 'NEW', color: 'yellow', category: 'Web Development' },
      { name: 'Web Infrastructure', color: 'blue', category: 'Web Infrastructure' },
      { name: 'Startups', color: 'orange', category: 'Startups' }
    ],
    category: 'free-stuff',
    link: '#',
    isNew: true
  },
  {
    id: 'openai-credits',
    name: 'OpenAI Credits',
    icon: '🧠',
    value: '$1000',
    description: 'Via Microsoft for Startups (Azure)',
    tags: [
      { name: 'API Credits', color: 'blue', category: 'API Credits' },
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: '#'
  },
  {
    id: 'free-cursor-pro',
    name: 'Free Cursor Pro (1 Year)',
    icon: '💻',
    value: '$240',
    description: 'Sign up with .edu email',
    tags: [
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: '#'
  },
  {
    id: 'google-veo-3',
    name: 'Google Veo 3 AI Video Generator',
    icon: '🎬',
    value: '$240/year',
    description: 'Free via Google AI Pro for students through finals 2026',
    tags: [
      { name: 'AI', color: 'purple', category: 'AI' },
      { name: 'Video Generation', color: 'red', category: 'Video Generation' },
      { name: 'Productivity', color: 'green', category: 'Productivity' }
    ],
    category: 'free-stuff',
    link: '#'
  },
  {
    id: 'screen-studio',
    name: 'Screen Studio',
    icon: '📹',
    value: '$100+',
    description: '40% off with student email',
    tags: [
      { name: 'Productivity', color: 'green', category: 'Productivity' },
      { name: 'Video Creation', color: 'red', category: 'Video Creation' }
    ],
    category: 'free-stuff',
    link: '#'
  },
  {
    id: 'free-notion-plus',
    name: 'Free Notion Plus w/ AI',
    icon: '📝',
    value: '',
    description: 'Via Github Student Dev Pack',
    tags: [
      { name: 'Productivity', color: 'green', category: 'Productivity' },
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: '#'
  },
  {
    id: 'free-figma-pro',
    name: 'Free Figma Pro',
    icon: '🎨',
    value: '$144/year',
    description: 'Sign up with .edu email',
    tags: [
      { name: 'Design', color: 'purple', category: 'Design' },
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: '#'
  }
] 