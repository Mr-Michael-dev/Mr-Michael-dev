"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Home, Youtube, CheckCircle } from "lucide-react"
import Link from "next/link"

export function CertificateAutomationPage() {
  const [downloadCount, setDownloadCount] = useState(0)
  const [hasDownloaded, setHasDownloaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch current download count
    fetchDownloadCount()
  }, [])

  const fetchDownloadCount = async () => {
    try {
      const response = await fetch("/api/downloads?template=certificate-automation")
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
      const incrementResponse = await fetch("/api/downloads?template=certificate-automation", {
        method: "POST",
      })

      if (incrementResponse.ok) {
        const data = await incrementResponse.json()
        setDownloadCount(data.count)
        setHasDownloaded(true)
      }

      // Trigger download
      const response = await fetch("/templates/certificate-automation.json")
      const fileData = await response.json()
      const element = document.createElement("a")
      element.setAttribute(
        "href",
        "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fileData, null, 2))
      )
      element.setAttribute("download", "certificate-automation-workflow.json")
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
            Certificate Generation Workflow
          </h1>
          <p className="text-lg text-foreground">
            Issue personalised certificates automatically — from a form submission to a PDF in the recipient&apos;s inbox.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">How It Works</CardTitle>
            <CardDescription>
              This workflow removes the manual work of preparing and mailing certificates to event attendees, trainees, or volunteers.
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
                  <h3 className="font-semibold text-lg text-primary mb-2">Collect Recipient Details</h3>
                  <p className="text-foreground">
                    A Google Sheets trigger watches your form responses and picks up every new row, then validates that both a name and an email address were provided before going any further.
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
                  <h3 className="font-semibold text-lg text-primary mb-2">Personalise the Certificate</h3>
                  <p className="text-foreground">
                    Your Google Slides certificate template is copied for each recipient, and the <strong>{"{name}"}</strong> placeholder is replaced with their name — keeping your original design untouched.
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
                  <h3 className="font-semibold text-lg text-primary mb-2">Export & Deliver</h3>
                  <p className="text-foreground">
                    The personalised slide is exported as a PDF and emailed straight to the recipient through Gmail as an attachment — no manual sending required.
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
                  <strong>Google OAuth Client Credentials</strong> (for self-hosted n8n) or authenticate with your Google account (n8n cloud) — Sheets, Drive, Slides, and Gmail scopes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  <strong>Certificate Template in Google Slides</strong> with a <strong>{"{name}"}</strong> placeholder where the recipient&apos;s name should appear
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  <strong>Google Form</strong> linked to a Google Sheet, collecting the recipient&apos;s name and email address
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
            <a href="https://youtu.be/xK00kkmxH4E" target="_blank" rel="noopener noreferrer">
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
                  Thank you for downloading! Check your downloads folder for <strong>certificate-automation-workflow.json</strong>
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
