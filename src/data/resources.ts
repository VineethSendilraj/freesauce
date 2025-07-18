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
    link: 'https://www.firecrawl.dev/student-program',
    isNew: true
  },
  {
    id: 'free-framer-pro',
    name: 'Free Framer Pro',
    icon: '/framer.png',
    value: '$180',
    description: 'Framer is free for students! Just use your school email',
    tags: [
      { name: 'NEW', color: 'yellow', category: 'Design' },
      { name: 'Design', color: 'purple', category: 'Design' },
      { name: 'Web Development', color: 'blue', category: 'Web Development' },
      { name: 'Productivity', color: 'green', category: 'Productivity' }
    ],
    category: 'free-stuff',
    link: 'https://www.framer.com/students/?dub_id=mXpTb4ulA4qL1oH1#signup',
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
    link: 'https://www.anthropic.com/contact-sales/for-student-builders'
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
    link: 'https://screen.studio/license/request-educational-discount?aff=9mm0pn'
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
    link: 'https://education.github.com/pack'
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
    link: 'https://www.figma.com/education/'
  },
  {
    id: 'free-domains-name',
    name: 'Free Domains (Name.com)',
    icon: 'https://www.name.com/favicon.ico',
    value: '',
    description: '.live, .software, .studio, etc. free domains',
    tags: [
      { name: 'Startups', color: 'purple', category: 'Startups' },
      { name: 'Web Infrastructure', color: 'blue', category: 'Web Infrastructure' }
    ],
    category: 'free-stuff',
    link: 'https://education.github.com/pack'
  },
  {
    id: 'free-domain-namecheap',
    name: 'Free Domain (Namecheap)',
    icon: 'https://www.namecheap.com/favicon.ico',
    value: '',
    description: '.me only, free with Github Student Dev Pack',
    tags: [
      { name: 'NEW', color: 'yellow', category: 'Web Infrastructure' },
      { name: 'Web Infrastructure', color: 'blue', category: 'Web Infrastructure' },
      { name: 'Startups', color: 'purple', category: 'Startups' }
    ],
    category: 'free-stuff',
    link: 'https://www.namecheap.com'
  },
  {
    id: 'free-heroku-hosting',
    name: 'Free Heroku Hosting (2 Years)',
    icon: 'https://www.heroku.com/favicon.ico',
    value: '$312',
    description: '2 years of hosting via Github Student Dev Pack',
    tags: [
      { name: 'Web Infrastructure', color: 'blue', category: 'Web Infrastructure' },
      { name: 'Startups', color: 'purple', category: 'Startups' }
    ],
    category: 'free-stuff',
    link: 'https://education.github.com/pack'
  },
  {
    id: 'free-perplexity-pro',
    name: 'Free Perplexity Pro (1 Month)',
    icon: 'https://www.perplexity.ai/favicon.ico',
    value: '$20',
    description: 'Sign up with .edu email',
    tags: [
      { name: 'AI', color: 'purple', category: 'AI' },
      { name: 'Productivity', color: 'green', category: 'Productivity' }
    ],
    category: 'free-stuff',
    link: 'https://plex.it/referrals/QN77I92B'
  },
  {
    id: 'microsoft-for-startups',
    name: 'Microsoft for Startups',
    icon: 'https://www.microsoft.com/favicon.ico',
    value: '',
    description: 'Azure credits & startup support',
    tags: [
      { name: 'API Credits', color: 'blue', category: 'API Credits' },
      { name: 'AI', color: 'purple', category: 'AI' },
      { name: 'Startups', color: 'orange', category: 'Startups' },
      { name: 'Web Infrastructure', color: 'blue', category: 'Web Infrastructure' }
    ],
    category: 'free-stuff',
    link: 'https://www.microsoft.com/en-us/startups/ai'
  },
  {
    id: 'github-student-pack',
    name: 'Github Student Developer Pack',
    icon: 'https://github.githubassets.com/favicons/favicon.png',
    value: '',
    description: 'A collection of tools free for students',
    tags: [
      { name: 'API Credits', color: 'blue', category: 'API Credits' },
      { name: 'AI', color: 'purple', category: 'AI' },
      { name: 'Startups', color: 'orange', category: 'Startups' },
      { name: 'Web Infrastructure', color: 'blue', category: 'Web Infrastructure' }
    ],
    category: 'free-stuff',
    link: 'https://education.github.com/pack'
  },
  {
    id: 'digitalocean-gpu-credits',
    name: 'DigitalOcean GPU Credits',
    icon: '/DigitalOcean Icon.png',
    value: '$10,000',
    description: 'Sign up via Hatch program',
    tags: [
      { name: 'GPU', color: 'orange', category: 'AI' },
      { name: 'Web Infrastructure', color: 'blue', category: 'Web Infrastructure' },
      { name: 'AI', color: 'purple', category: 'AI' }
    ],
    category: 'free-stuff',
    link: 'https://sammydigitalocean.typeform.com/to/tZXAmt?typeform-source=www.digitalocean.com'
  },
  {
    id: 'amazon-aws-credits',
    name: 'Amazon AWS Credits',
    icon: 'https://aws.amazon.com/favicon.ico',
    value: '$10k+',
    description: "$300 without a website, up to $100k if you have a website. Say you're 'self-funded'",
    tags: [
      { name: 'NEW', color: 'yellow', category: 'API Credits' },
      { name: 'API Credits', color: 'blue', category: 'API Credits' },
      { name: 'Web Infrastructure', color: 'blue', category: 'Web Infrastructure' },
      { name: 'Startups', color: 'orange', category: 'Startups' }
    ],
    category: 'free-stuff',
    link: 'https://aws.amazon.com/free/offers/'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    icon: 'https://elevenlabs.io/favicon.ico',
    value: '$55',
    description: '3 months free with Github Student Dev Pack',
    tags: [
      { name: 'NEW', color: 'yellow', category: 'AI' },
      { name: 'AI', color: 'purple', category: 'AI' },
      { name: 'Voice Generation', color: 'orange', category: 'Video Generation' }
    ],
    category: 'free-stuff',
    link: 'https://www.aiengineerpack.com/'
  },
  {
    id: 'z-fellows',
    name: 'Z Fellows',
    icon: '/Zfellows.jpeg',
    value: '$10,000',
    description: '$10k grant & fellowship for young entrepreneurs',
    tags: [
      { name: 'Fellowship', color: 'purple', category: 'Startups' },
      { name: 'Grant', color: 'green', category: 'Startups' },
      { name: 'Mentorship', color: 'orange', category: 'Productivity' }
    ],
    category: 'fellowship',
    link: 'https://www.zfellows.com/'
  },
  {
    id: 'neo-scholars',
    name: 'Neo Scholars',
    icon: '/Neo Logo.svg',
    value: '$25,000',
    description: 'Fellowship & grant for CS students',
    tags: [
      { name: 'Fellowship', color: 'purple', category: 'Startups' },
      { name: 'Grant', color: 'green', category: 'Startups' },
      { name: 'Mentorship', color: 'orange', category: 'Productivity' }
    ],
    category: 'fellowship',
    link: 'https://neo.com/scholars'
  },
  {
    id: 'afore-capital-grants',
    name: 'Afore Capital Grants',
    icon: '/Afore.jpeg',
    value: '$1,000',
    description: '$1,000 non-dilutive grant',
    tags: [
      { name: 'Fellowship', color: 'purple', category: 'Startups' },
      { name: 'Grant', color: 'green', category: 'Startups' },
      { name: 'Mentorship', color: 'orange', category: 'Productivity' }
    ],
    category: 'fellowship',
    link: 'https://grants.afore.vc/'
  },
  {
    id: 'superteam-crypto-grants',
    name: 'Superteam Crypto Grants',
    icon: '/Superteam Image.jpg',
    value: 'up to $10k',
    description: 'Grants for building crypto apps (dApps)',
    tags: [
      { name: 'NEW', color: 'yellow', category: 'Startups' },
      { name: 'Fellowship', color: 'purple', category: 'Startups' },
      { name: 'Grant', color: 'green', category: 'Startups' },
      { name: 'Crypto', color: 'blue', category: 'Startups' }
    ],
    category: 'fellowship',
    link: 'https://earn.superteam.fun/grants'
  }
] 