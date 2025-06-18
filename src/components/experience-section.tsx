"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export function ExperienceSection() {
  const experience = [
    {
      title: "Fullstack Engineer",
      company: "SubGuru – Data Purchasing & Bills App",
      period: "2024 - Present",
      description: [
        "Architected a Telegram bot that works with a Telegram mini-app.",
        "Engineered payment integration and wallet systems for seamless user transactions.",
        "Built robust transaction tracking and reporting features.",
      ],
    },    
    {
      title: "Team Lead & Fullstack Engineer",
      company: "Split-It – Expense Tracker App",
      period: "2025 (Contract)",
      description: [
        "Led a cross-functional team through sprints, ensuring on-time delivery of core features.",
        "Architected and implemented expense splitting logic, real-time updates, and user invitation modules.",
        "Mentored junior developers, improving team productivity and code quality.",
      ],
    },
  ];
  

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-purple-pink bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-l-4 border-l-transparent hover:border-l-gradient-start"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl hover:bg-gradient-purple-pink hover:bg-clip-text hover:text-transparent transition-all duration-300">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium bg-gradient-purple-pink-light bg-clip-text text-transparent">
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 text-gradient-start" />
                    <span>{job.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
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
