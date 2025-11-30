"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-brand-light-gray/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-primary">
          Let's Work Together
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to
          say hi, feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <Link href="mailto:michael.oyedepo@gmail.com" target="_blank">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <Link href="https://linkedin.com/in/michael-oyedepo" target="_blank">
              <Linkedin className="w-4 h-4 mr-2" />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
