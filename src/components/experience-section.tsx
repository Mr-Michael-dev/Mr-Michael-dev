"use client"

import { useReveal } from "@/hooks/use-reveal"

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
  

  const { ref, className } = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="border-b border-rule">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-6 py-24 md:px-10 md:py-32 ${className}`}
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label md:sticky md:top-28">Experience</p>
          </div>

          <div className="md:col-span-9">
            <ol>
              {experience.map((job) => (
                <li
                  key={job.company}
                  className="grid gap-4 border-t border-rule py-10 last:border-b md:grid-cols-12 md:gap-6"
                >
                  <div className="md:col-span-4">
                    <p className="label">{job.period}</p>
                    <h3 className="mt-3 font-serif text-xl leading-snug md:text-2xl">
                      {job.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{job.company}</p>
                  </div>

                  <ul className="space-y-3 md:col-span-8">
                    {job.description.map((item) => (
                      <li
                        key={item}
                        className="max-w-[62ch] border-l border-rule pl-4 text-sm leading-relaxed text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
