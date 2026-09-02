"use client"

import { useReveal } from "@/hooks/use-reveal"

const facts = [
  {
    label: "Focus",
    value: "Backend systems, React interfaces, workflow automation",
  },
  {
    label: "Also",
    value: "Community advocate and mentor",
  },
]

export function AboutSection() {
  const { ref, className } = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="border-b border-rule">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-6 py-24 md:px-10 md:py-32 ${className}`}
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label md:sticky md:top-28">03 / About</p>
          </div>

          <div className="md:col-span-9">
            <div className="grid gap-12 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-8">
                <p className="max-w-[62ch] font-serif text-xl leading-relaxed md:text-2xl">
                  I&apos;m a software engineer focused on building reliable, scalable web
                  applications and automated workflows that help people and teams work
                  smarter. I work across the stack, from backend systems and APIs to clean,
                  intuitive frontend interfaces.
                </p>

                <p className="mt-8 max-w-[62ch] text-muted-foreground">
                  My strengths include designing secure backend architectures, building
                  React/TypeScript interfaces, and connecting tools through workflow
                  automation. I enjoy turning real problems into solutions that reduce manual
                  work, improve performance, and support business goals. I also share what I
                  learn as a community advocate and mentor, helping others grow in their
                  technical journey.
                </p>
              </div>

              <dl className="md:col-span-4">
                {facts.map((fact) => (
                  <div key={fact.label} className="border-t border-rule py-5 first:border-t-0 first:pt-0 md:first:border-t md:first:pt-5">
                    <dt className="label">{fact.label}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
