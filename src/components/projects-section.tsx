"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const projects = [
  {
    title: "VoltaCheck: Solar Advisory Web App",
    description:
      "Built a full-stack platform that lets Nigerian homeowners verify solar installer quotes before paying, from appliance-based sizing to an automated PDF report with cost breakdown and red flags. Handled the assessment engine, Paystack/Flutterwave checkout, and Puppeteer-generated reports stored on Cloudflare R2.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "TypeORM", "Puppeteer", "Docker"],
    href: "https://voltacheck.app",
  },
  {
    title: "School Management API",
    description:
      "Built a RESTful API for managing schools, classrooms and students with JWT-based role access, letting superadmins oversee schools while admins manage their own classrooms and students. Designed a dynamic module routing layer with a manager pattern combining controller and service logic, backed by Redis caching and Swagger docs. Covered core flows with 127 unit tests and centralized error handling.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "Swagger"],
    href: "https://github.com/Mr-Michael-dev/school-management-api",
  },
  {
    title: "Eduplug: EdTech Blog Platform",
    description:
      "Built a MERN-based blogging platform with role-based access using JWT. Integrated Redis caching to improve performance and reduce DB queries. Led backend optimization and maintained thorough API documentation.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redis"],
    href: "https://github.com/Mr-Michael-dev/EduPlug",
  },
  {
    title: "Simple Shell",
    description:
      "A custom Unix-like command-line shell written in C, supporting basic shell commands and process handling. Designed to mimic standard shell behavior on Ubuntu CLI.",
    tech: ["C", "Ubuntu CLI"],
    href: "https://github.com/Mr-Michael-dev/Shell_demo",
  },
  {
    title: "Printf",
    description:
      "A custom printf function in C that replicates the standard printf functionality, supporting various format specifiers and flags. Designed to enhance understanding of variadic functions and string formatting in C.",
    tech: ["C", "Ubuntu CLI"],
    href: "https://github.com/Mr-Michael-dev/printf",
  },
]

export function ProjectsSection() {
  const { ref, className } = useReveal<HTMLDivElement>()

  return (
    <section id="work" className="border-b border-rule">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-6 py-24 md:px-10 md:py-32 ${className}`}
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label md:sticky md:top-28">01 / Selected work</p>
          </div>

          <div className="md:col-span-9">
            <h2 className="heading max-w-[20ch]">
              Projects built to be read, maintained and trusted.
            </h2>

            <ul className="mt-14">
              {projects.map((project, index) => (
                <li
                  key={project.href}
                  className="group relative grid gap-3 border-t border-rule py-8 last:border-b md:grid-cols-12 md:gap-6"
                >
                  <span className="label md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="md:col-span-7">
                    {/* Stretched link: the whole row is clickable. */}
                    <h3 className="font-serif text-2xl">
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-brand"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-3 max-w-[62ch] text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-start justify-between gap-6 md:col-span-4">
                    <p className="font-mono text-[0.8125rem] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
                      {project.tech.join(" · ")}
                    </p>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
