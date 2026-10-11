export interface Highlight {
  value: string
  label: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface ExperienceEntry {
  organisation: string
  role: string
  dates: string
  location?: string
  description: string
  points: string[]
  /** Entries with published: false are never shown on the site. */
  published: boolean
}

export interface Certification {
  name: string
  issuer: string
  date?: string
  credentialId?: string
  /** Only a real verification page. Leave empty if none. */
  url?: string
  /** Image or PDF of the certificate in /public, e.g. 'certificates/python.jpg'. */
  file?: string
  published: boolean
}

export interface Project {
  title: string
  context: string
  description: string
  problem: string
  implementation: string[]
  workflow: string[]
  tags: string[]
  /** Path to a real screenshot in /public, e.g. 'projects/attendance.png'. Leave empty if none. */
  screenshot?: string
  screenshotAlt?: string
  repoUrl?: string
  demoUrl?: string
}
