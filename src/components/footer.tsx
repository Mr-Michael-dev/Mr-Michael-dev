"use client"

import Link from "next/link"

const social = [
  { label: "GitHub", href: "https://github.com/Mr-Michael-dev" },
  { label: "LinkedIn", href: "https://linkedin.com/in/michael-oyedepo" },
  { label: "X", href: "https://twitter.com/michealoyedepo" },
  { label: "Email", href: "mailto:michael.oyedepo@gmail.com" },
]

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="label">&copy; 2026 Michael Oyedepo</p>
        <ul className="flex flex-wrap items-center gap-6">
          {social.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="label transition-colors duration-200 hover:!text-brand"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
