"use client"

import { TemplatePage } from "@/components/template-page"

export function ResumeAutomationPage() {
  return (
    <TemplatePage
      eyebrow="n8n template / Resume automation"
      title="AI CV generation workflow"
      lede="Automate your job application process with AI-generated CVs and cover letters, tailored to each role and delivered to your inbox for review."
      templateSlug="resume-automation"
      templatePath="/templates/resume-automation.json"
      downloadName="resume-automation-workflow.json"
      tutorialUrl="https://youtu.be/W2fqwor0Spw"
      steps={[
        {
          title: "Input job details",
          body: "Submit job title, description, requirements, and company name through a Google Form linked to a spreadsheet.",
        },
        {
          title: "AI processing",
          body: "The workflow uses Gemini AI to analyze the job requirements and intelligently tailor your CV template from Google Docs to match the specific role.",
        },
        {
          title: "Review and send",
          body: "A tailored CV and AI-generated cover letter are created and sent to your email for human review before submission.",
        },
      ]}
      requirements={[
        <>
          <span className="text-foreground">Google OAuth client credentials</span> (for
          self-hosted n8n), or authenticate with your Google account on n8n cloud
        </>,
        <>
          <span className="text-foreground">A CV template in Google Docs</span> containing your
          experience and skills
        </>,
        <>
          <span className="text-foreground">A Google Form</span> linked to a Google Sheet for job
          submissions
        </>,
      ]}
    />
  )
}
