import type React from "react"
import type { Metadata } from "next"
import { Inter, Nunito } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata: Metadata = {
  title: "Michael Oyedepo - Software Engineer",
  description: "I help businesses build reliable web applications and automated systems that make work easier. Full-stack engineer with experience across scalable backends, clean React interfaces, and workflow automation.",
  openGraph: {
    title: "Michael Oyedepo - Software Engineer",
    description: "I help businesses build reliable web applications and automated systems that make work easier. Full-stack engineer with experience across scalable backends, clean React interfaces, and workflow automation.",
    url: "https://michaeloyedepo.dev",
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
    description: "I help businesses build reliable web applications and automated systems that make work easier. Full-stack engineer with experience across scalable backends, clean React interfaces, and workflow automation.",
    images: ["https://michaeloyedepo.dev/og-image.png", "/michael_oyedepo.png"],
    site: "@michaeloyedepo",
    creator: "@michaeloyedepo",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
