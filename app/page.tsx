import { Hero } from "@/components/home/hero"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { SkillsPreview } from "@/components/home/skills-preview"
import { TransitionSection } from "@/components/home/transition-section"
import { FinalCta } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <TransitionSection />
      <FinalCta />
    </>
  )
}
