/**
 * ============================================================================
 *  SITE DATA — single source of truth for editable content.
 * ============================================================================
 *  Rossler: update your details here. Almost everything on the site reads
 *  from this file, so you rarely need to touch the page components.
 *
 *  Quick edit guide:
 *    - Personal info & social links ....... `profile`
 *    - Résumé download link ............... `profile.resumeUrl` (see note below)
 *    - Skill categories & badges .......... `skillCategories`
 *    - Projects ........................... `projects` (add objects to the array)
 *    - Work experience .................... `experiences`
 *    - Education & certifications ......... `education`, `certifications`
 *    - Contact form destination email ..... `profile.email` + CONTACT_TO env var
 * ============================================================================
 */

export const profile = {
  name: "Rossler Boquiren",
  shortName: "Rossler B.",
  title: "AI Engineering Student and Aspiring AI Developer",
  location: "Montréal, Québec, Canada",
  email: "rgkaboquiren@gmail.com",
  linkedin: "https://www.linkedin.com/in/rgkboquiren/",
  github: "https://github.com/RosslerGKBoquiren",
  youtube: "https://www.youtube.com/@ImJasonBruce",
  currentRole: "Lead Station Attendant at Air Canada",
  currentlyLearning: "Data Engineering and AI Engineering",
  /**
   * RÉSUMÉ: when your résumé is ready, drop the PDF into the `public/` folder
   * (e.g. public/rossler-boquiren-resume.pdf) and set the path here, e.g.
   *   resumeUrl: "/rossler-boquiren-resume.pdf"
   * Leaving this null keeps the "Résumé Coming Soon" disabled button.
   */
  resumeUrl: null as string | null,
}

export type SkillStatus = "current" | "developing"

export type SkillCategory = {
  title: string
  description: string
  skills: { name: string; status?: SkillStatus }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Languages I'm building fluency in.",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "Java" },
      { name: "C#" },
      { name: "PHP" },
    ],
  },
  {
    title: "Web Development",
    description: "Building for the browser.",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: ".NET" },
    ],
  },
  {
    title: "AI and Generative AI",
    description: "Exploring how intelligent systems can help people.",
    skills: [
      { name: "Artificial Intelligence" },
      { name: "Generative AI" },
      { name: "Prompt Engineering", status: "developing" },
      { name: "LangChain", status: "developing" },
      { name: "Hugging Face", status: "developing" },
    ],
  },
  {
    title: "Business Process Automation",
    description: "Making everyday work simpler and faster.",
    skills: [
      { name: "Business Process Automation" },
      { name: "Workflow Automation" },
      { name: "Productivity Automation" },
    ],
  },
  {
    title: "Databases and Data",
    description: "Working with data end to end.",
    skills: [
      { name: "SQL" },
      { name: "Data Engineering" },
      { name: "Data Analysis" },
    ],
  },
  {
    title: "Technical Design",
    description: "From my architecture and design studies.",
    skills: [
      { name: "CAD" },
      { name: "Revit" },
      { name: "SketchUp" },
      { name: "Sustainable Architecture" },
    ],
  },
  {
    title: "Media Production",
    description: "Telling stories with video.",
    skills: [
      { name: "Video Production" },
      { name: "Video Editing" },
      { name: "Content Creation" },
      { name: "YouTube Content Development" },
    ],
  },
]

/** Skill categories shown as a preview on the home page. */
export const homeSkillPreview = [
  "Programming",
  "Web Development",
  "AI and Generative AI",
  "Business Process Automation",
  "Databases and Data",
  "Technical Design",
  "Video Production",
]

export type ProjectStatus = "In progress" | "Completed" | "Planned"

export type ProjectCategory =
  | "AI"
  | "Software Development"
  | "Automation"
  | "Data"
  | "Web Development"
  | "Other"

export type Project = {
  slug: string
  title: string
  description: string
  problem: string
  technologies: string[]
  status: ProjectStatus
  categories: ProjectCategory[]
  githubUrl?: string
  demoUrl?: string
  /** Path to an image in /public, or null for a placeholder. */
  image?: string | null
  learningOutcomes: string[]
  featured?: boolean
}

/**
 * PROJECTS
 * --------
 * Add a new project by copying the example object below and filling it in.
 * Set `featured: true` to surface it on the home page.
 * Leave this array empty to show the polished "coming soon" empty state.
 *
 * Example (kept commented so no fake work is displayed):
 *
 *   {
 *     slug: "example-project",
 *     title: "Example Project",
 *     description: "A short summary of what the project does.",
 *     problem: "The real-world problem this project solves.",
 *     technologies: ["Python", "LangChain"],
 *     status: "In progress",
 *     categories: ["AI", "Automation"],
 *     githubUrl: "https://github.com/RosslerGKBoquiren/example",
 *     demoUrl: "https://example.com",
 *     image: null,
 *     learningOutcomes: ["What I learned building it."],
 *     featured: true,
 *   },
 */
export const projects: Project[] = []

export const projectCategories: ProjectCategory[] = [
  "AI",
  "Software Development",
  "Automation",
  "Data",
  "Web Development",
  "Other",
]

export type Experience = {
  role: string
  company: string
  period: string
  responsibilities: string[]
  transferableSkills: string[]
}

export const experiences: Experience[] = [
  {
    role: "Lead Station Attendant",
    company: "Air Canada",
    period: "2022 – Present",
    responsibilities: [
      "Developed junior station attendants through structured mentoring and knowledge transfer, increasing team efficiency.",
      "Expedited equipment repairs and streamlined operations, reducing downtime and helping prevent delays.",
      "Coordinated with planners, ground operations, and multiple departments to support seamless cargo-handling processes.",
      "Verified cargo shipments against safety regulations and maintained operational standards that protect end-user safety.",
      "Operated diverse equipment, including forklifts, tractors, and tugs, while adapting to changing schedules and operational demands.",
    ],
    transferableSkills: [
      "Team leadership",
      "Training and mentoring",
      "Process optimization",
      "Cross-functional collaboration",
      "Safety and compliance",
      "Adaptability",
      "Operational problem-solving",
      "User impact mindset",
    ],
  },
  {
    role: "Financial Security Advisor",
    company: "World Financial Group of Canada",
    period: "2016 – 2026",
    responsibilities: [
      "Generated more than $50,000 in sales commissions and consistently ranked among the top 10% of performers.",
      "Promoted to Marketing Director in 2018 after exceeding performance targets and contributing to 20% team revenue growth.",
      "Developed personalized financial strategies based on individual client needs and risk profiles.",
      "Assessed complex client requirements and delivered comprehensive solutions focused on long-term client satisfaction.",
    ],
    transferableSkills: [
      "Client communication",
      "Needs analysis",
      "Problem-solving",
      "Leadership",
      "Performance management",
      "Personalized solution design",
      "Relationship building",
    ],
  },
]

export type EducationEntry = {
  program: string
  detail?: string
  institution: string
  period: string
  status?: "In progress" | "Completed"
}

export const education: EducationEntry[] = [
  {
    program: "Bachelor of Arts in General Studies",
    detail: "Concentration in Project Management",
    institution: "University of the People",
    period: "Expected graduation: 2028",
    status: "In progress",
  },
  {
    program: "Diploma in Software Development",
    institution: "Herzing College",
    period: "2025",
    status: "Completed",
  },
  {
    program: "Diploma in Sustainable Architecture",
    institution: "Herzing College",
    period: "2023",
    status: "Completed",
  },
]

export type Certification = {
  name: string
  provider: string
  status: "In progress" | "Completed"
}

export const certifications: Certification[] = [
  {
    name: "Data Engineering certification",
    provider: "DataCamp",
    status: "In progress",
  },
  {
    name: "AI Engineering certification",
    provider: "DataCamp",
    status: "In progress",
  },
]

export const personalInterests = [
  "Autism awareness",
  "Train videos and train spotting",
  "Family life",
  "Photography and videography",
  "Video production",
  "Learning and professional development",
]
