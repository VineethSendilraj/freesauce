export interface Tag {
  name: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow'
  category: 'API Credits' | 'AI' | 'Design' | 'Productivity' | 'Web Development' | 'Web Infrastructure' | 'Startups' | 'Video Generation' | 'Video Creation'
}

export interface Resource {
  id: string
  name: string
  icon: string
  value: string
  description: string
  tags: Tag[]
  category: 'free-stuff' | 'fellowship' | 'all'
  link: string
  isNew?: boolean
}

export type CategoryFilter = 'all' | 'free-stuff' | 'fellowships' 