"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function AiAutomationSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({
    0: 0,
    1: 0,
  })

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
        "Job seekers often apply to multiple roles using generic resumes and cover letters, making applications less effective. Manually tailoring CVs for each job is slow, inconsistent, and error-prone. I built an AI-powered automation that generates job-specific resumes and cover letters from a single CV template. It monitors a Google Sheet for new roles, analyzes each job with an LLM, rewrites the CV, writes a cover letter, and emails everything for review—reducing manual effort by ~90% and scaling applications reliably fast.",
      tech: ["Google Workspace", "n8n", "Gmail", "Gemini"],
      images: [
        "/projects/resume-gen-1.png",
        "/projects/resume-gen-2.png",
        // "/projects/resume-gen-3.png",
        // "/projects/resume-gen-4.png",
      ],
    },
  ]

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
    <section className="py-20 px-4 bg-gradient-brand-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            AI & Workflow Automation
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-3xl">
            Intelligent automation solutions that transform business processes, reduce manual work, and scale operations reliably.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, projectIndex) => {
            const currentIndex = currentImageIndex[projectIndex] || 0
            const totalImages = project.images.length

            return (
              <Card
                key={projectIndex}
                className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-l-4 border-l-transparent hover:border-l-accent overflow-hidden"
              >
                {/* Image Carousel */}
                <div className="relative bg-muted overflow-hidden h-80 md:h-96 group">
                  <Image
                    src={project.images[currentIndex]}
                    alt={`${project.title} - Image ${currentIndex + 1}`}
                    fill
                    className="object-cover transition-opacity duration-500"
                    priority={projectIndex === 0 && currentIndex === 0}
                  />

                  {/* Navigation Arrows (visible on hover) */}
                  {totalImages > 1 && (
                    <>
                      <button
                        onClick={() => handlePrevImage(projectIndex, totalImages)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleNextImage(projectIndex, totalImages)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Dot Indicators (visible on hover) */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        {project.images.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [projectIndex]: dotIndex,
                              }))
                            }
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              dotIndex === currentIndex
                                ? "bg-white w-6"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                            aria-label={`Go to image ${dotIndex + 1}`}
                          />
                        ))}
                      </div>

                      {/* Image Counter */}
                      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {currentIndex + 1} / {totalImages}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle className="text-2xl text-primary hover:text-accent transition-all duration-300 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-foreground text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Tech Badges */}
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-brand-cool-gray text-primary hover:bg-secondary hover:text-primary hover:-translate-y-1 hover:shadow-sm transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Thumbnail Grid */}
                {totalImages > 1 && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-4 gap-2">
                      {project.images.map((image, thumbIndex) => (
                        <button
                          key={thumbIndex}
                          onClick={() =>
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [projectIndex]: thumbIndex,
                            }))
                          }
                          className={`relative h-16 rounded overflow-hidden border-2 transition-all duration-300 ${
                            thumbIndex === currentIndex
                              ? "border-accent shadow-md"
                              : "border-muted hover:border-accent/50"
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Thumbnail ${thumbIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
