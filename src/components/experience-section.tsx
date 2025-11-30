"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export function ExperienceSection() {
  const experience = [
    {
      title: "Fullstack Engineer",
      company: "SubGuru – Data Purchasing & Bills App",
      period: "2024 - 2025 (Contract)",
      description: [
        "Built wallet and payment processing APIs with secure verification and webhook handling, reducing failed transactions by 35%.",
        "Integrated real-time updates from backend APIs, improving feature responsiveness and reducing user task completion time by 20%.",
        "Implemented transaction tracking and reconciliation logic, cutting data mismatches by 50%.",
        "Implemented forms, notifications, and dashboard components, enhancing usability and accessibility.",
      ],
    },    
    {
      title: "Team Lead & Fullstack Engineer",
      company: "Split-It – Expense Tracker App",
      period: "2025 (Contract)",
      description: [
        "Led a cross-functional team through sprints, ensuring on-time delivery of core features.",
        "Optimized backend APIs and database queries, improving response times by 40%.",
        "Built UI for expense creation, group management, and notifications, reducing user task time by 20%",
        "Designed expense splitting logic, real-time updates, and user invitation modules.",
        "Mentored junior developers, improving team productivity and code quality.",
      ],
    },
  ];
  

  return (
    <section className="py-20 px-4 bg-brand-light-gray/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-primary">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-l-4 border-l-transparent hover:border-l-accent"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-primary hover:text-accent transition-all duration-300">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="text-lg lg:text-4xl font-medium text-accent">
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{job.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
