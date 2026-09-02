"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Reveals an element once, the first time it is in view.
 *
 * Elements already within the viewport on mount (first paint, or after the
 * browser jumps to a #anchor) are revealed immediately from their measured
 * position; anything further down waits for the IntersectionObserver.
 * `prefers-reduced-motion` and the no-JS fallback are handled in CSS.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const isInView = () => {
      const rect = node.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      // Any part of the element within the viewport, with a small bottom margin
      return rect.top < viewportHeight * 0.92 && rect.bottom > 0
    }

    if (isInView() || typeof IntersectionObserver === "undefined") {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, revealed, className: revealed ? "reveal reveal-visible" : "reveal" }
}
