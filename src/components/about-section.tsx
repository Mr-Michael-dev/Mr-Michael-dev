"use client"

import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export function AboutSection() {
  const skills = [
    "Linux",
    "TypeScript",
    "Express.js",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "MongoDB",
    "Redis",
    "GitHub Actions",
    "Nginx",
    "DigitalOcean",
    "Git",
    "Tailwind CSS",
    "n8n",
    "AppScripts"
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-primary">
          About Me
        </h2>
        <div className=" items-center">
          <div>
            <p className="text-base md:text-lg lg:text-xl text-foreground mb-4">
              I'm a software engineer focused on building reliable, scalable web applications and automated workflows that help people and teams work smarter. 
              I work across the stack, from backend systems and APIs to clean, intuitive frontend interfaces.
            </p>

            <p className="text-base md:text-lg lg:text-xl text-foreground mb-4">
              My strengths include designing secure backend architectures, building React/TypeScript interfaces, and connecting tools through workflow automation. 
              I enjoy turning real problems into solutions that reduce manual work, improve performance, and support business goals.  
              I also share what I learn as a community advocate and mentor, helping others grow in their technical journey.
            </p>

            {/* <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-base md:text-lg">Port Harcourt, NGN</span>
            </div> */}
          </div>
          {/* <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-primary hover:text-accent transition-all duration-300">
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
          </div> */}
        </div>
      </div>
    </section>
  )
}
