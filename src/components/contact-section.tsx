"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-purple-pink bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
          I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to
          say hi, feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-purple-pink hover:opacity-90 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <Link href="mailto:michael.oyedepo@gmail.com" target="_blank">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-gradient-start text-gradient-end hover:bg-gradient-purple-pink hover:text-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
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
