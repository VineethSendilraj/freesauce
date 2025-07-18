import type { Resource } from '@/lib/types'

export const resources: Resource[] = [
  {
    id: 'firecrawl',
    name: 'Firecrawl',
    icon: 'https://firecrawl.dev/favicon.ico',
    value: '$100+',
    description: '20k free credits and full API access with educational email',
    tags: [
      { name: 'NEW', color: 'yellow', category: 'API Credits' },
      { name: 'API Credits', color: 'blue', category: 'API Credits' },
      { name: 'AI', color: 'purple', category: 'AI' },
      { name: 'Web Scraping', color: 'green', category: 'Web Development' }
    ],
    category: 'free-stuff',
    link: 'https://firecrawl.dev',
    isNew: true
  },
  {
    id: 'free-framer-pro',
    name: 'Free Framer Pro',
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0yMiA4SDE0VjE2SDIyTDE2IDIySDhWMTZIMTZWOEg4IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K',
    value: '$180',
    description: 'Framer is free for students! Just use your school email',
    tags: [
      { name: 'NEW', color: 'yellow', category: 'Design' },
      { name: 'Design', color: 'purple', category: 'Design' },
      { name: 'Web Development', color: 'blue', category: 'Web Development' },
      { name: 'Productivity', color: 'green', category: 'Productivity' }
    ],
    category: 'free-stuff',
    link: 'https://framer.com/pricing',
    isNew: true
  },
  {
    id: 'claude-credits',
    name: 'Claude Credits',
    icon: 'https://claude.ai/favicon.ico',
    value: '$50',
    description: 'Get free Claude AI credits for your projects',
    tags: [
      { name: 'API Credits', color: 'blue', category: 'API Credits' },
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: 'https://claude.ai'
  },
  {
    id: 'openai-credits',
    name: 'OpenAI Credits',
    icon: 'https://openai.com/favicon.ico',
    value: '$1000',
    description: 'Via Microsoft for Startups (Azure)',
    tags: [
      { name: 'API Credits', color: 'blue', category: 'API Credits' },
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: 'https://openai.com'
  },
  {
    id: 'free-cursor-pro',
    name: 'Free Cursor Pro (1 Year)',
    icon: 'https://cursor.sh/favicon.ico',
    value: '$240',
    description: 'Sign up with .edu email',
    tags: [
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: 'https://cursor.sh'
  },
  {
    id: 'google-veo-3',
    name: 'Google Veo 3 AI Video Generator',
    icon: 'https://www.google.com/favicon.ico',
    value: '$240/year',
    description: 'Free via Google AI Pro for students through finals 2026',
    tags: [
      { name: 'AI', color: 'purple', category: 'AI' },
      { name: 'Video Generation', color: 'red', category: 'Video Generation' },
      { name: 'Productivity', color: 'green', category: 'Productivity' }
    ],
    category: 'free-stuff',
    link: 'https://labs.google.com'
  },
  {
    id: 'screen-studio',
    name: 'Screen Studio',
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9InVybCgjZ3JhZGllbnQwXzFfMSkiLz4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTAiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MF8xXzEiIHgxPSIxNiIgeTE9IjAiIHgyPSIxNiIgeTI9IjMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM5MzMzRUEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkIyMUQ4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
    value: '$100+',
    description: '40% off with student email',
    tags: [
      { name: 'Productivity', color: 'green', category: 'Productivity' },
      { name: 'Video Creation', color: 'red', category: 'Video Creation' }
    ],
    category: 'free-stuff',
    link: 'https://screenstudio.lemonsqueezy.com'
  },
  {
    id: 'free-notion-plus',
    name: 'Free Notion Plus w/ AI',
    icon: 'https://www.notion.so/images/favicon.ico',
    value: '',
    description: 'Via Github Student Dev Pack',
    tags: [
      { name: 'Productivity', color: 'green', category: 'Productivity' },
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: 'https://notion.so'
  },
  {
    id: 'free-figma-pro',
    name: 'Free Figma Pro',
    icon: 'https://static.figma.com/app/icon/1/favicon.ico',
    value: '$144/year',
    description: 'Sign up with .edu email',
    tags: [
      { name: 'Design', color: 'purple', category: 'Design' },
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: 'https://figma.com'
  }
] 