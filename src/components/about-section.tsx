"use client"

import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export function AboutSection() {
  const skills = [
    "Linux",
    "C",
    "TypeScript",
    "Express.js",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Flask",
    "SQL",
    "MongoDB",
    "Redis",
    "GitHub Actions",
    "Nginx",
    "DigitalOcean",
    "Git",
    "Tailwind CSS",
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-muted-foreground mb-4 hover:text-foreground transition-colors duration-300">
              I'm a passionate software engineer with over 2 years of experience building scalable web applications. 
              I enjoy working with modern technologies and solving complex problems that have a tangible impact.
            </p>
            <p className="text-muted-foreground mb-4 hover:text-foreground transition-colors duration-300">
              My expertise spans across frontend and backend development, with a strong focus on building scalable backend systemsReact. I thrive in fast-paced, collaborative environments where I can translate technical solutions into meaningful business value. I'm always eager to learn new technologies and share knowledge with the community.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Port Harcourt, NGN</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary hover:text-accent transition-all duration-300">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="hover:-translate-y-1 hover:shadow-md hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
