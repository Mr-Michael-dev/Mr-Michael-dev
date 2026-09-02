"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const projects = [
  {
    title: "QSR Operations SOP Assistant",
    description:
      "The QSR management team relied on scattered PDFs, WhatsApp messages, and shared drives for SOPs and training materials, forcing store managers to escalate basic operational questions. This created delays, inconsistent compliance, and productivity loss. I built a Retrieval-Augmented Generation agent that connects approved SOPs, manuals, and policies to a conversational interface. It delivers instant, context-aware answers grounded in official documents, reducing SOP lookup time by ~80%, cutting repeated escalations, and improving operational consistency.",
    tech: ["n8n", "AI Agent Development", "LLM Prompt Engineering", "API Integration", "Web Development"],
    images: [
      "/projects/qsr-sop-1.png",
      "/projects/qsr-sop-2.png",
      "/projects/qsr-sop-3.png",
      "/projects/qsr-sop-4.png",
    ],
  },
  {
    title: "AI Resume & Cover Letter Generator",
    description:
      "Job seekers often apply to multiple roles using generic resumes and cover letters, making applications less effective. Manually tailoring CVs for each job is slow, inconsistent, and error-prone. I built an AI-powered automation that generates job-specific resumes and cover letters from a single CV template. It monitors a Google Sheet for new roles, analyzes each job with an LLM, rewrites the CV, writes a cover letter, and emails everything for review, reducing manual effort by ~90% and scaling applications reliably fast.",
    tech: ["Google Workspace", "n8n", "Gmail", "Gemini"],
    images: ["/projects/resume-gen-1.png", "/projects/resume-gen-2.png"],
  },
]

export function AiAutomationSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({
    0: 0,
    1: 0,
  })
  const { ref, className } = useReveal<HTMLDivElement>()

  const handlePrevImage = (projectIndex: number, imageCount: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === 0 ? imageCount - 1 : prev[projectIndex] - 1,
    }))
  }

  const handleNextImage = (projectIndex: number, imageCount: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === imageCount - 1 ? 0 : prev[projectIndex] + 1,
    }))
  }

  return (
    <section id="automation" className="border-b border-rule">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-6 py-24 md:px-10 md:py-32 ${className}`}
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label md:sticky md:top-28">02 / AI &amp; Automation</p>
          </div>

          <div className="md:col-span-9">
            <h2 className="heading max-w-[22ch]">
              Systems that remove the manual work, not just describe it.
            </h2>
          </div>
        </div>

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
          {projects.map((project, projectIndex) => {
            const currentIndex = currentImageIndex[projectIndex] || 0
            const totalImages = project.images.length
            const imageFirst = projectIndex % 2 === 1

            return (
              <article
                key={project.title}
                className="grid gap-8 border-t border-rule pt-10 md:grid-cols-12 md:gap-10"
              >
                <div
                  className={`md:col-span-5 ${imageFirst ? "md:order-2" : ""}`}
                >
                  <p className="label">
                    Case {String(projectIndex + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl leading-snug md:text-[1.75rem]">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-6 font-mono text-[0.8125rem] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
                    {project.tech.join(" · ")}
                  </p>
                </div>

                <div className={`md:col-span-7 ${imageFirst ? "md:order-1" : ""}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-rule bg-surface">
                    <Image
                      src={project.images[currentIndex]}
                      alt={`${project.title}, screen ${currentIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>

                  {totalImages > 1 && (
                    <div className="mt-4 flex items-center justify-between">
                      <span className="label">
                        {String(currentIndex + 1).padStart(2, "0")} / {String(totalImages).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-5">
                        <button
                          type="button"
                          onClick={() => handlePrevImage(projectIndex, totalImages)}
                          className="text-muted-foreground transition-colors duration-200 hover:text-brand"
                          aria-label="Previous screenshot"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleNextImage(projectIndex, totalImages)}
                          className="text-muted-foreground transition-colors duration-200 hover:text-brand"
                          aria-label="Next screenshot"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
