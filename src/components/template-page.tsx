"use client"

import { useState, useEffect, type ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export type TemplateStep = {
  title: string
  body: ReactNode
}

export type TemplatePageProps = {
  /** Mono breadcrumb, e.g. "Templates / Certificate automation" */
  eyebrow: string
  title: string
  lede: string
  /** Counter key registered in src/app/api/downloads/route.ts */
  templateSlug: string
  /** Path of the workflow JSON under /public */
  templatePath: string
  /** Filename offered to the browser */
  downloadName: string
  steps: TemplateStep[]
  requirements: ReactNode[]
  tutorialUrl?: string
}

export function TemplatePage({
  eyebrow,
  title,
  lede,
  templateSlug,
  templatePath,
  downloadName,
  steps,
  requirements,
  tutorialUrl,
}: TemplatePageProps) {
  const [downloadCount, setDownloadCount] = useState(0)
  const [hasDownloaded, setHasDownloaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch current download count
    const fetchDownloadCount = async () => {
      try {
        const response = await fetch(`/api/downloads?template=${templateSlug}`)
        const data = await response.json()
        setDownloadCount(data.count || 0)
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to fetch download count:", error)
        setIsLoading(false)
      }
    }

    fetchDownloadCount()
  }, [templateSlug])

  const handleDownload = async () => {
    try {
      // Increment counter on server
      const incrementResponse = await fetch(`/api/downloads?template=${templateSlug}`, {
        method: "POST",
      })

      if (incrementResponse.ok) {
        const data = await incrementResponse.json()
        setDownloadCount(data.count)
        setHasDownloaded(true)
      }

      // Trigger download
      const response = await fetch(templatePath)
      const fileData = await response.json()
      const element = document.createElement("a")
      element.setAttribute(
        "href",
        "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fileData, null, 2))
      )
      element.setAttribute("download", downloadName)
      element.style.display = "none"
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Link
              href="/"
              className="label group inline-flex items-center gap-1.5 transition-colors duration-200 hover:!text-brand"
            >
              <ArrowLeft className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Back to portfolio
            </Link>
          </div>

          <article className="md:col-span-9">
            <p className="label">{eyebrow}</p>

            <h1 className="mt-6 font-serif text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.05] tracking-[-0.025em]">
              {title}
            </h1>

            <p className="mt-8 max-w-[58ch] text-muted-foreground">{lede}</p>

            {/* Actions */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download template
              </Button>

              {tutorialUrl && (
                <Link
                  href={tutorialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link group inline-flex items-center gap-1.5 text-sm"
                >
                  Watch the setup tutorial
                  <ArrowUpRight className="h-3.5 w-3.5 text-brand transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              )}

              <span className="label">
                {isLoading ? "..." : downloadCount} download{downloadCount === 1 ? "" : "s"}
              </span>
            </div>

            {hasDownloaded && (
              <p className="mt-8 border-l border-brand pl-4 font-mono text-sm leading-relaxed text-muted-foreground">
                Saved as <span className="text-foreground">{downloadName}</span>. Import it into
                n8n via <span className="text-foreground">Workflows → Import from file</span>.
              </p>
            )}

            {/* How it works */}
            <section className="mt-20">
              <p className="label">How it works</p>
              <ol className="mt-8">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="grid gap-3 border-t border-rule py-8 last:border-b md:grid-cols-12 md:gap-6"
                  >
                    <span className="label md:col-span-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="md:col-span-11">
                      <h2 className="font-serif text-xl leading-snug md:text-2xl">
                        {step.title}
                      </h2>
                      <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Requirements */}
            <section className="mt-20">
              <p className="label">Requirements</p>
              <ul className="mt-8">
                {requirements.map((requirement, index) => (
                  <li
                    key={index}
                    className="border-t border-rule py-5 text-sm leading-relaxed text-muted-foreground last:border-b"
                  >
                    {requirement}
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
