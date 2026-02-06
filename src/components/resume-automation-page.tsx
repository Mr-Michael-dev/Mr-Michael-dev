"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Home, Youtube, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ResumeAutomationPage() {
  const [downloadCount, setDownloadCount] = useState(0)
  const [hasDownloaded, setHasDownloaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch current download count
    fetchDownloadCount()
  }, [])

  const fetchDownloadCount = async () => {
    try {
      const response = await fetch("/api/downloads")
      const data = await response.json()
      setDownloadCount(data.count || 0)
      setIsLoading(false)
    } catch (error) {
      console.error("Failed to fetch download count:", error)
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    try {
      // Increment counter on server
      const incrementResponse = await fetch("/api/downloads", {
        method: "POST",
      })

      if (incrementResponse.ok) {
        const data = await incrementResponse.json()
        setDownloadCount(data.count)
        setHasDownloaded(true)
      }

      // Trigger download
      const response = await fetch("/templates/resume-automation.json")
      const fileData = await response.json()
      const element = document.createElement("a")
      element.setAttribute(
        "href",
        "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fileData, null, 2))
      )
      element.setAttribute("download", "resume-automation-workflow.json")
      element.style.display = "none"
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            AI CV Generation Workflow
          </h1>
          <p className="text-lg text-foreground">
            Automate your job application process with AI-powered CV and cover letter generation.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">How It Works</CardTitle>
            <CardDescription>
              This workflow streamlines your job search by automatically tailoring your CV for each opportunity.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">Input Job Details</h3>
                  <p className="text-foreground">
                    Submit job title, description, requirements, and company name through a Google Form linked to a spreadsheet.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">AI Processing</h3>
                  <p className="text-foreground">
                    The workflow uses Gemini AI to analyze the job requirements and intelligently tailor your CV template from Google Docs to match the specific role.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">Review & Send</h3>
                  <p className="text-foreground">
                    A tailored CV and AI-generated cover letter are created and sent to your email for human review before submission.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Requirements Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  <strong>Google OAuth Client Credentials</strong> (for self-hosted n8n) or authenticate with your Google account (n8n cloud)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  <strong>CV Template in Google Docs</strong> containing your experience and skills
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  <strong>Google Form</strong> linked to a Google Sheet for job submissions
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Button
            onClick={handleDownload}
            size="lg"
            className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Template
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <a href="https://youtu.be/W2fqwor0Spw" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-4 h-4 mr-2" />
              Setup Tutorial
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Download Success Message */}
        {hasDownloaded && (
          <Card className="bg-green-50 border-green-200 mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800">
                  Thank you for downloading! Check your downloads folder for <strong>resume-automation-workflow.json</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Download Stats */}
        <Card className="bg-muted">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Total Downloads</p>
              <p className="text-3xl font-bold text-primary">
                {isLoading ? "..." : downloadCount}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {downloadCount === 1 ? "person has" : "people have"} used this template
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
