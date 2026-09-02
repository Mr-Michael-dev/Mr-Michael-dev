"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const stack = [
  "TypeScript",
  "Node.js",
  "NestJS",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "n8n",
  "Docker",
  "GitHub Actions",
  "Linux",
  "Nginx",
  "Shell",
]

const actions = [
  { label: "Get in touch", href: "#contact" },
  { label: "View work", href: "#work" },
  { label: "Résumé (PDF)", href: "/Michael_Oyedepo_Resume.pdf", download: true },
]

export function HeroSection() {
  const { ref, className } = useReveal<HTMLDivElement>()

  return (
    <section className="border-b border-rule">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-6 py-20 md:px-10 md:py-32 ${className}`}
      >
        <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-10">
          <div className="md:col-span-8">
            <p className="label">Michael Oyedepo · Software Engineer</p>

            <h1 className="text-5xl font-bold mt-7">
              I build products and automations that take the{" "}
              <em className="font-serif italic text-brand">busywork</em> off people’s
              plates.
            </h1>

            <p className="mt-9 max-w-[54ch] text-muted-foreground">
              Backend-focused engineer who also ships clean user interfaces when the job
              needs it. I turn manual, repetitive processes into systems that hold up in
              production.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  {...(action.download ? { download: true } : {})}
                  className="link group inline-flex items-center gap-1.5 text-sm"
                >
                  {action.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-brand transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="relative mx-auto aspect-square w-44 overflow-hidden rounded-3xl border border-rule md:mx-0 md:ml-auto md:w-full md:max-w-[240px]">
              <Image
                src="/michael_oyedepo.png"
                alt="Michael Oyedepo"
                fill
                priority
                sizes="(max-width: 768px) 176px, 240px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-rule pt-6 md:mt-28">
          <p className="label mb-3">Stack</p>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground">
            {stack.join("  ·  ")}
          </p>
        </div>
      </div>
    </section>
  )
}
