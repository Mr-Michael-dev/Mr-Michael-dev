"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Eduplug - EdTech Blog Platform",
      description:
        "Built a MERN-based blogging platform with role-based access using JWT. Integrated Redis caching to improve performance and reduce DB queries. Led backend optimization and maintained thorough API documentation.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Redis"],
      github: "https://github.com/Mr-Michael-dev/EduPlug",
      demo: "https://eduplug.onrender.com/",
    },
    {
      title: "Simple Shell",
      description:
        "A custom Unix-like command-line shell written in C, supporting basic shell commands and process handling. Designed to mimic standard shell behavior on Ubuntu CLI.",
      tech: ["C", "Ubuntu CLI"],
      github: "https://github.com/Mr-Michael-dev/Shell_demo",
      demo: "#",
    },
    {
      title: "Edukid - EdTech Learning Platform",
      description:
        "Developed a Flask-based learning platform with video streaming and dynamic content search. Implemented secure user authentication using Flask Login and optimized backend architecture for improved server response.",
      tech: ["Flask", "Jinja2", "Bootstrap", "MySQL", "Redis"],
      github: "https://github.com/Mr-Michael-dev/Edukid",
      demo: "#",
    },
    {
      title: "Printf",
      description: "A custom printf function in C that replicates the standard printf functionality, supporting various format specifiers and flags. Designed to enhance understanding of variadic functions and string formatting in C.",
      tech: ["C", "Ubuntu CLI"],
      github: "https://github.com/Mr-Michael-dev/printf",
      demo: "#",
    },
  ];
  

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-purple-pink bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col border-2 border-transparent bg-gradient-to-r from-gradient-start to-gradient-end p-[1px] rounded-lg hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 transition-all duration-700 group"
            >
              <div className="bg-card rounded-lg p-6 flex flex-col h-full">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center justify-between text-gradient-start group-hover:bg-gradient-purple-pink group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:bg-gradient-purple-pink hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={project.github} target="_blank">
                          <Github className="w-4 h-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:bg-gradient-purple-pink hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="w-4 h-4" />
                          <span className="sr-only">Live Demo</span>
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end p-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gradient-start text-gradient-end hover:bg-gradient-purple-pink hover:text-white hover:-translate-y-1 hover:shadow-sm transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
