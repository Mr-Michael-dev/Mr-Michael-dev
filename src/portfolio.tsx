"use client"

import { SiteHeader } from "./components/site-header"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { ProjectsSection } from "./components/projects-section"
import { AiAutomationSection } from "./components/ai-automation-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AiAutomationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
