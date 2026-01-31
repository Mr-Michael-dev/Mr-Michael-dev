"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Eduplug - EdTech Blog Platform",
      description:
        "Built a MERN-based blogging platform with role-based access using JWT. Integrated Redis caching to improve performance and reduce DB queries. Led backend optimization and maintained thorough API documentation.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Redis"],
      github: "https://github.com/Mr-Michael-dev/EduPlug",
    },
    {
      title: "Simple Shell",
      description:
        "A custom Unix-like command-line shell written in C, supporting basic shell commands and process handling. Designed to mimic standard shell behavior on Ubuntu CLI.",
      tech: ["C", "Ubuntu CLI"],
      github: "https://github.com/Mr-Michael-dev/Shell_demo",
    },
    {
      title: "Edukid - EdTech Learning Platform",
      description:
        "Developed a Flask-based learning platform with video streaming and dynamic content search. Implemented secure user authentication using Flask Login and optimized backend architecture for improved server response.",
      tech: ["Flask", "Jinja2", "Bootstrap", "MySQL", "Redis"],
      github: "https://github.com/Mr-Michael-dev/Edukid",
    },
    {
      title: "Printf",
      description: "A custom printf function in C that replicates the standard printf functionality, supporting various format specifiers and flags. Designed to enhance understanding of variadic functions and string formatting in C.",
      tech: ["C", "Ubuntu CLI"],
      github: "https://github.com/Mr-Michael-dev/printf",
    },
  ];
  

  return (
    <section id="projects" className="py-20 px-4  bg-brand-light-gray/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-3xl">
            Here are some projects I'm proud of. Each demonstrates my approach to building reliable, scalable systems and solving real-world problems.
          </p>
        </div>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-l-4 border-l-transparent hover:border-l-accent"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl text-primary hover:text-accent transition-all duration-300 mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-foreground text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="shrink-0 hover:bg-secondary hover:text-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <Link href={project.github} target="_blank">
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub Repository</span>
                    </Link>
                  </Button>
                </div>
              </CardHeader>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
