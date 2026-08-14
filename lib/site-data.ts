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
  /**
   * Optional gallery of screenshots shown on the card. Each opens in a
   * lightbox. Drop images in /public and reference them here.
   */
  gallery?: { src: string; alt: string; caption?: string }[]
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
export const projects: Project[] = [
  {
    slug: "crewai-blog-writing-crew",
    title: "Build a Blog using Multi-AI Agent Collaboration with CrewAI",
    description:
      "A multi-agent AI workflow that automates the research, writing, and editing of blog posts. The project uses a sequential pipeline of specialized AI agents (Researcher, Writer, Editor, and Social Media Manager) to generate full articles and corresponding social media strategies.",
    problem:
      "Relying on a single prompt limits quality and control. A coordinated team of specialized agents can research, draft, edit, and promote content far more reliably than one generalist prompt.",
    technologies: ["Python", "CrewAI", "Google Gemini API", "uv (Package Manager)", "YAML"],
    status: "Completed",
    categories: ["AI", "Automation"],
    image: "/projects/crewai/09-running-agents.png",
    gallery: [
      {
        src: "/projects/crewai/01-crewai-cli-install.png",
        alt: "Terminal showing the crewai CLI installed with uv tool list",
        caption: "Installing the CrewAI CLI with uv (uv tool list confirms crewai v1.15.15).",
      },
      {
        src: "/projects/crewai/02-project-structure.png",
        alt: "Terminal listing the generated blog_writing_crew project structure",
        caption: "The scaffolded project structure: src, config (agents.yaml, tasks.yaml), crew.py, main.py, and tools.",
      },
      {
        src: "/projects/crewai/03-gemini-env.png",
        alt: ".env file setting MODEL to gemini/gemini-2.5-flash",
        caption: "Configuring the Google Gemini model via the .env file.",
      },
      {
        src: "/projects/crewai/04-agents-yaml.png",
        alt: "agents.yaml defining researcher, writer, and editor roles",
        caption: "agents.yaml — role, goal, and backstory for the Researcher, Writer, and Editor agents.",
      },
      {
        src: "/projects/crewai/05-tasks-yaml.png",
        alt: "tasks.yaml defining research, writing, and editing tasks",
        caption: "tasks.yaml — description, expected output, and assigned agent for each task.",
      },
      {
        src: "/projects/crewai/06-crew-py.png",
        alt: "crew.py wiring the BlogWritingCrew agents and tasks",
        caption: "crew.py — binding the YAML config to agents and tasks with a sequential process.",
      },
      {
        src: "/projects/crewai/07-main-py.png",
        alt: "main.py running the crew with topic inputs",
        caption: "main.py — the run() entry point that kicks off the crew with topic inputs.",
      },
      {
        src: "/projects/crewai/08-crew-py-social-manager.png",
        alt: "crew.py extended with a social media manager agent and task",
        caption: "Extending the crew with a Social Media Manager agent and a matching social_media_task.",
      },
      {
        src: "/projects/crewai/09-running-agents.png",
        alt: "Terminal showing the crew running through task completion and the editor's final answer",
        caption: "Running the crew — tasks complete in sequence and the Editor produces the final answer.",
      },
      {
        src: "/projects/crewai/10-output-folder.png",
        alt: "Output folder containing the generated future_AI_Agents.md blog post",
        caption: "The generated blog post saved to the output folder as future_AI_Agents.md.",
      },
      {
        src: "/projects/crewai/11-social-media-output.png",
        alt: "Generated social media content strategy markdown file",
        caption: "The Social Media Manager's output — a full YouTube growth content strategy in Markdown.",
      },
    ],
    learningOutcomes: [
      "Designed a sequential multi-agent pipeline where each agent passes its output as context to the next.",
      "Configured agents with distinct roles, goals, and backstories using reusable YAML configuration files.",
      "Connected YAML agent and task definitions to Python via matching method names in crew.py and main.py.",
      "Extended the crew with a Social Media Manager agent to generate Twitter threads and LinkedIn strategies.",
    ],
    featured: true,
  },
]

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
