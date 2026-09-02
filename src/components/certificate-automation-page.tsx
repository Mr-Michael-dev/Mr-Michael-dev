"use client"

import { TemplatePage } from "@/components/template-page"

export function CertificateAutomationPage() {
  return (
    <TemplatePage
      eyebrow="n8n template / Certificate automation"
      title="Certificate generation workflow"
      lede="Issue personalised certificates automatically, from a form submission to a PDF in the recipient's inbox, with no manual preparation or sending."
      templateSlug="certificate-automation"
      templatePath="/templates/certificate-automation.json"
      downloadName="certificate-automation-workflow.json"
      tutorialUrl="https://youtu.be/xK00kkmxH4E"
      steps={[
        {
          title: "Collect recipient details",
          body: "A Google Sheets trigger watches your form responses and picks up every new row, then validates that both a name and an email address were provided before going any further.",
        },
        {
          title: "Personalise the certificate",
          body: "Your Google Slides certificate template is copied for each recipient, and the {name} placeholder is replaced with their name, keeping your original design untouched.",
        },
        {
          title: "Export and deliver",
          body: "The personalised slide is exported as a PDF and emailed straight to the recipient through Gmail as an attachment.",
        },
      ]}
      requirements={[
        <>
          <span className="text-foreground">Google OAuth client credentials</span> (for
          self-hosted n8n), or authenticate with your Google account on n8n cloud, with Sheets,
          Drive, Slides and Gmail scopes
        </>,
        <>
          <span className="text-foreground">A certificate template in Google Slides</span> with a{" "}
          <span className="font-mono text-foreground">{"{name}"}</span> placeholder where the
          recipient&apos;s name should appear
        </>,
        <>
          <span className="text-foreground">A Google Form</span> linked to a Google Sheet,
          collecting the recipient&apos;s name and email address
        </>,
      ]}
    />
  )
}
