# Michael Oyedepo Portfolio — Brand & UI Guide

**Version:** 2.0
**Last updated:** September 2026
**Audience:** Developers and contributors

Version 2.0 keeps the Deep Blue / Warm Amber brand palette but sets it in an editorial system: warm paper, Deep Blue ink, Amber as a restrained accent, serif display type, and hairline rules instead of shadowed cards. Nunito, the tinted gradients, the pill badges and the entrance animations are gone.

---

## 1. Principles

- **Typography carries the page.** Hierarchy comes from size, weight and space — not colour fills or boxes.
- **Rules, not cards.** Content is separated by 1px hairlines. No drop shadows, no glassmorphism, no blur panels.
- **One accent, used sparingly.** Warm Amber appears on links, hover states and small arrows. Never as a large fill — that is what made the previous version read as childish.
- **Asymmetry over centring.** A mono label sits in the left columns; content occupies the right.
- **Motion is almost absent.** One reveal-on-scroll, and colour transitions. Nothing bounces, spins or floats.

---

## 2. Colour

Defined as HSL custom properties in [src/app/globals.css](src/app/globals.css) and exposed through [tailwind.config.ts](tailwind.config.ts).

| Token | Light | Dark | Use |
|---|---|---|---|
| `background` | `#FAF9F6` warm paper | `#0C1C2B` deep navy | Page ground |
| `surface` | `#F3F1EC` | `#12283B` | Image frames, subtle raised blocks |
| `foreground` | `#0A2540` **Deep Blue** | `#ECEAE4` cream | Body text and headings — 14.5:1 / 13.9:1 |
| `muted-foreground` | `#56616F` blue-grey | `#94A3B8` **Cool Grey** | Secondary text — 5.9:1 / 6.8:1 |
| `rule` | `#DEDBD3` | `#1B3550` | Every hairline and border |
| `brand` | `#9C6100` deep amber | `#F6A32F` **Warm Amber** | Links, hover, underlines, arrows |

**On the two ambers.** `#F6A32F` on warm paper is 1.9:1 — unreadable, and the old guide itself listed that pairing under "avoid". Light mode therefore uses the same hue darkened to `#9C6100` (4.8:1); dark mode uses the true brand amber, which reaches 8.5:1 on navy. Both read as amber; only the light one is deepened enough to be legible.

`primary` is Deep Blue in light mode and Warm Amber in dark, so the single primary button on a view is always a brand fill. `accent` is deliberately a **neutral surface** — it exists for Radix component hover states and must not be used for the amber; use `brand` for that.

**Rules**

- Never fill a large area with `brand`.
- Never introduce a gradient, tinted section background, or shadow.
- Sections are separated by `border-b border-rule`, not by alternating background colours.
- Check contrast ≥ 4.5:1 before adding any new colour pairing.

---

## 3. Typography

Loaded with `next/font/google` in [src/app/layout.tsx](src/app/layout.tsx) — no `@import`, no render-blocking stylesheet.

| Role | Family | Tailwind | Notes |
|---|---|---|---|
| Display | **Newsreader** 400/500 + italic | `font-serif` | h1–h3, pull quotes, large email link |
| Body & UI | **Inter** 400/500 | `font-sans` | Default on `<body>` |
| Micro-label | **JetBrains Mono** 400/500 | `font-mono` | Section numbers, metadata, tech lists |

**Helper classes** (defined in `globals.css`):

- `.display` — hero headline, `clamp(2.75rem, 7vw, 5.5rem)`, tight tracking.
- `.heading` — section headline, `clamp(1.75rem, 3.5vw, 2.75rem)`.
- `.label` — uppercase mono, 11px, `0.14em` tracking, muted. Section numbers and metadata.
- `.link` — text link with a brand-coloured underline.

Body copy is capped at `max-w-[62ch]`; ledes at `max-w-[54ch]`.

```tsx
<p className="label">01 / Selected work</p>
<h2 className="heading max-w-[20ch]">Projects built to be read and maintained.</h2>
<p className="mt-6 max-w-[62ch] text-muted-foreground">Body copy.</p>
```

---

## 4. Layout

```tsx
<section id="work" className="border-b border-rule">
  <div className="mx-auto max-w-page px-6 py-24 md:px-10 md:py-32">
    <div className="grid gap-10 md:grid-cols-12">
      <div className="md:col-span-3">
        <p className="label md:sticky md:top-28">01 / Section</p>
      </div>
      <div className="md:col-span-9">{/* content */}</div>
    </div>
  </div>
</section>
```

- Page width: `max-w-page` (1180px). Gutters: `px-6 md:px-10`.
- Vertical rhythm: `py-24 md:py-32` per section.
- Header offset for anchors is handled by `scroll-padding-top` on `html`.

---

## 5. Components

**List rows (replaces cards).** Projects, steps and requirements are `<li>` elements with `border-t border-rule` and `last:border-b`. On hover the title and trailing `↗` take `text-brand`. No lift, no shadow.

**Buttons** — [src/components/ui/button.tsx](src/components/ui/button.tsx)

| Variant | Appearance | Use |
|---|---|---|
| `default` | Ink fill, paper text | One primary action per view |
| `outline` | Hairline rule, transparent | Secondary action |
| `secondary` | Surface fill | Rare, low emphasis |
| `ghost` | Bare text | Icon buttons, carousel arrows |
| `link` | Underlined text | Inline navigation |

**Badges** — mono, uppercase, 2px radius, hairline border, transparent fill. In practice most tech lists are rendered as a plain mono string joined with `·` rather than badge elements.

**Icons** — lucide-react at `h-3.5 w-3.5` (inline) or `h-4 w-4` (standalone), muted by default, `text-brand` on hover.

---

## 6. Motion

One utility, `.reveal` / `.reveal-visible`, driven by [src/hooks/use-reveal.ts](src/hooks/use-reveal.ts):

```tsx
const { ref, className } = useReveal<HTMLDivElement>()
return <div ref={ref} className={`... ${className}`}>…</div>
```

Fade plus a 12px rise over 500ms, fired once when the element enters the viewport, disabled under `prefers-reduced-motion`. Everything else is a 200ms colour or border transition. Do not add entrance animations, hover lifts, or looping effects.

---

## 7. Accessibility

- `muted-foreground` on `background`: 5.9:1 light, 6.8:1 dark. `brand` on `background`: 4.8:1 light, 8.5:1 dark — safe for normal-size link text in both themes.
- Focus is a 2px `brand` outline with 3px offset, set globally on `:focus-visible`.
- Icon-only controls carry `aria-label` (theme toggle, carousel arrows).
- Every section is a landmark with an `id` matching the header navigation.

---

## 8. File map

```
src/
├── app/
│   ├── layout.tsx                    Fonts, theme provider, metadata
│   ├── globals.css                   Tokens, base type, .label/.display/.heading, .reveal
│   ├── page.tsx
│   ├── resume-automation/page.tsx
│   ├── certificate-automation/page.tsx
│   └── api/downloads/route.ts        Per-template download counters
├── components/
│   ├── site-header.tsx               Sticky nav + theme toggle
│   ├── hero-section.tsx
│   ├── projects-section.tsx          01 / Selected work
│   ├── ai-automation-section.tsx     02 / AI & Automation
│   ├── about-section.tsx             03 / About
│   ├── contact-section.tsx           04 / Contact
│   ├── experience-section.tsx        Restyled, not currently mounted
│   ├── footer.tsx
│   ├── template-page.tsx             Shared layout for both n8n template pages
│   └── ui/                           Radix primitives (button, card, badge restyled)
├── hooks/use-reveal.ts
└── portfolio.tsx                     Section order
```

---

## 9. Checklist for new work

- [ ] Uses `background` / `foreground` / `muted-foreground` / `rule` / `brand` — no hard-coded hex
- [ ] Headings are `font-serif`; labels and metadata are `.label`
- [ ] Separation comes from hairlines, never shadows or tinted panels
- [ ] `brand` appears only on links, hover states and small marks
- [ ] Only motion is `.reveal` and 200ms colour transitions
- [ ] Verified in light and dark, at 375px / 768px / 1440px
- [ ] Contrast ≥ 4.5:1
