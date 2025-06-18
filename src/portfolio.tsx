"use client"

import { ThemeToggle } from "./components/theme-toggle"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { ExperienceSection } from "./components/experience-section"
import { ProjectsSection } from "./components/projects-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
