import type React from "react"
import type { Metadata } from "next"
import { Inter, Nunito } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata: Metadata = {
  title: "Michael Oyedepo - Software Engineer",
  description: "A software engineer with hands-on experience building backend systems, full-stack applications and automating workflows.",
  openGraph: {
    title: "Michael Oyedepo - Software Engineer",
    description: "A software engineer with hands-on experience building backend systems, full-stack applications and automating workflows.",
    url: "https://michaeloyedepo.com",
    siteName: "Michael Oyedepo",
    images: [
      {
        url: "/michael_oyedepo.png",
        width: 1200,
        height: 630,
        alt: "Michael Oyedepo - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Oyedepo - Software Engineer",
    description: "A software engineer with hands-on experience building backend systems, full-stack applications and automating workflows.",
    images: ["https://michaeloyedepo.com/og-image.png", "/michael_oyedepo.png"],
    site: "@michaeloyedepo",
    creator: "@michaeloyedepo",
  },
  icons: {
    icon: "/michael_oyedepo.png",
    apple: "/michael_oyedepo.png",
    shortcut: "/michael_oyedepo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${nunito.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
