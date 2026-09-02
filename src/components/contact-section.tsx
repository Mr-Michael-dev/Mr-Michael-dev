"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

export function ContactSection() {
  const { ref, className } = useReveal<HTMLDivElement>()

  return (
    <section id="contact">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-6 py-24 md:px-10 md:py-32 ${className}`}
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label">04 / Contact</p>
          </div>

          <div className="md:col-span-9">
            <h2 className="heading max-w-[18ch]">
              Have something you&apos;d like built or automated?
            </h2>

            <p className="mt-6 max-w-[54ch] text-muted-foreground">
              I&apos;m open to new opportunities and interesting problems. The fastest way to
              reach me is email.
            </p>

            <Link
              href="mailto:michael.oyedepo@gmail.com"
              className="mt-12 inline-block break-all font-serif text-[clamp(1.5rem,4.5vw,2.75rem)] leading-tight underline decoration-brand decoration-1 underline-offset-[6px] transition-colors duration-200 hover:text-brand"
            >
              michael.oyedepo@gmail.com
            </Link>

            <div className="mt-12 border-t border-rule pt-6">
              <Link
                href="https://linkedin.com/in/michael-oyedepo"
                target="_blank"
                rel="noopener noreferrer"
                className="label group inline-flex items-center gap-1.5 transition-colors duration-200 hover:!text-brand"
              >
                Connect on LinkedIn
                <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
