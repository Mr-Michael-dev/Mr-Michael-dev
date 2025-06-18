"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, X, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-bounce-in">
          <Image
            src="/michael_oyedepo.png"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6 border-4 border-background shadow-lg hover:shadow-2xl hover:border-gradient-start transition-all duration-500"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-purple-pink bg-clip-text text-transparent animate-slide-in-left animation-delay-300">
          Michael Oyedepo
        </h1>
        <p className="text-xl md:text-2xl mb-6 bg-gradient-purple-pink-light bg-clip-text text-transparent font-semibold animate-slide-in-right animation-delay-500">
          Full Stack Software Engineer
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-700">
          Passionate about creating scalable web applications and solving complex problems. 2+ years of experience in
          modern web technologies and cloud platforms.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-zoom-in animation-delay-900">
          <Button
            asChild
            className="bg-gradient-purple-pink hover:opacity-90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Link href="#contact">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-gradient-start text-gradient-end hover:bg-gradient-purple-pink hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <Link href="/Michael_Oyedepo_Resume.pdf" download="Michael_Oyedepo_Resume.pdf">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Link>
          </Button>
        </div>
        <div className="flex justify-center gap-4 animate-slide-up animation-delay-1100">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-gradient-purple-pink hover:text-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <Link href="https://github.com/Mr-Michael-dev" target="_blank">
              <Github className="w-5 h-5 text-gradient-start" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-gradient-purple-pink hover:text-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <Link href="https://linkedin.com/in/michael-oyedepo" target="_blank">
              <Linkedin className="w-5 h-5 text-gradient-end" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-gradient-purple-pink hover:text-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <Link href="https://twitter.com/michealoyedepo" target="_blank">
              <X className="w-5 h-5 text-gradient-start" />
              <span className="sr-only">X (formerly Twitter)</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-gradient-purple-pink hover:text-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <Link href="mailto:alex@example.com">
              <Mail className="w-5 h-5 text-gradient-end" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-purple-pink rounded-full opacity-10 animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-purple-pink-light rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-purple-pink rounded-full opacity-10 animate-bounce-slow"></div>
    </section>
  )
}
