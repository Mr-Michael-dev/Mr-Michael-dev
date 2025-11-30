# 🎨 Michael Oyedepo Portfolio - Brand Style Guide

**Version:** 1.0  
**Last Updated:** November 2025  
**Audience:** Developers, Product Designers, Contributors

---

## 📋 Table of Contents

1. [Brand Overview](#brand-overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [UI Components](#ui-components)
5. [Layout & Spacing](#layout--spacing)
6. [Interactive Elements](#interactive-elements)
7. [Dark Mode Implementation](#dark-mode-implementation)
8. [Accessibility](#accessibility)
9. [Code Examples](#code-examples)
10. [Common Patterns](#common-patterns)

---

## Brand Overview

### Mission

Create a professional, modern portfolio that showcases expertise as a full-stack software engineer with a cohesive, memorable brand identity.

### Brand Values

- **Professional:** Clean, modern, and polished
- **Trustworthy:** Consistent, reliable design patterns
- **Accessible:** Inclusive and readable for all users
- **Modern:** Contemporary design with smooth interactions

---

## Color Palette

### Primary Colors

| Color Name     | Hex Code  | RGB                 | HSL                  | Usage                                                     |
| -------------- | --------- | ------------------- | -------------------- | --------------------------------------------------------- |
| **Deep Blue**  | `#0A2540` | `rgb(10, 37, 64)`   | `209.9° 82.9% 23.1%` | Primary headings, buttons, main CTAs, text hierarchy      |
| **Warm Amber** | `#F6A32F` | `rgb(246, 163, 47)` | `45.3° 87.3% 59.2%`  | Accent highlights, links, hover states, secondary buttons |

### Supporting Neutrals

| Color Name     | Hex Code  | RGB                  | HSL                  | Usage                                                 |
| -------------- | --------- | -------------------- | -------------------- | ----------------------------------------------------- |
| **Light Gray** | `#F5F7FA` | `rgb(245, 247, 250)` | `217.2° 13.3% 97.0%` | Soft section backgrounds, card backgrounds            |
| **Cool Gray**  | `#94A3B8` | `rgb(148, 163, 184)` | `215.4° 16.3% 58.6%` | Borders, muted text, disabled states, secondary icons |
| **Dark Slate** | `#1E293B` | `rgb(30, 41, 59)`    | `217.2° 32.6% 17.5%` | Primary body text, foreground content                 |
| **White**      | `#FFFFFF` | `rgb(255, 255, 255)` | `0° 0% 100%`         | Card backgrounds, text on dark backgrounds            |

### Color Application Guide

```
┌─────────────────────────────────────────┐
│        LIGHT MODE (Default)             │
├─────────────────────────────────────────┤
│ Background:    White (#FFFFFF)          │
│ Text:          Dark Slate (#1E293B)     │
│ Primary:       Deep Blue (#0A2540)      │
│ Accent:        Warm Amber (#F6A32F)     │
│ Borders:       Cool Gray (#94A3B8)      │
│ Muted Text:    Cool Gray (#94A3B8)      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│        DARK MODE (Variant)              │
├─────────────────────────────────────────┤
│ Background:    Dark Slate (#1E293B)     │
│ Text:          White (#FFFFFF)          │
│ Primary:       Warm Amber (#F6A32F)     │
│ Accent:        Warm Amber (#F6A32F)     │
│ Borders:       Cool Gray (70% opacity)  │
│ Muted Text:    Cool Gray (#94A3B8)      │
└─────────────────────────────────────────┘
```

### Color Usage Rules

✅ **DO:**

- Use Deep Blue for primary text and main CTAs
- Use Warm Amber for highlights, links, and hover states
- Use Light Gray for section backgrounds
- Use Cool Gray for borders and muted content
- Maintain adequate contrast ratios (WCAG AA minimum 4.5:1)

❌ **DON'T:**

- Mix old purple/pink gradients with new brand colors
- Use Deep Blue and Warm Amber at equal prominence
- Apply colors without semantic meaning
- Use colors that reduce accessibility

---

## Typography

### Font Families

| Usage         | Font   | Weight          | Size        | LineHeight |
| ------------- | ------ | --------------- | ----------- | ---------- |
| **Headings**  | Inter  | 600 (Semi-Bold) | 24px - 48px | 1.2        |
| **Body Text** | Nunito | 400 (Regular)   | 14px - 18px | 1.5        |
| **Buttons**   | Inter  | 500 (Medium)    | 14px - 16px | 1.5        |
| **Captions**  | Nunito | 400 (Regular)   | 12px - 13px | 1.4        |

### Font Import

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap");
```

### Typography Scale

```
h1: 48px (text-6xl) - Page titles, hero headlines
h2: 36px (text-3xl) - Section titles
h3: 24px (text-xl)  - Subsection titles
h4: 20px (text-lg)  - Card titles
p:  16px (text-base) - Body text
sm: 14px (text-sm)  - Secondary text
xs: 12px (text-xs)  - Captions, labels
```

### Tailwind Typography Classes

```tsx
// Headings - Always use Inter via Tailwind
<h1 className="text-4xl md:text-6xl font-bold text-primary">
<h2 className="text-3xl font-bold text-primary">
<h3 className="text-xl font-semibold text-primary">

// Body - Uses Nunito by default
<p className="text-base text-foreground">
<span className="text-sm text-muted-foreground">
```

---

## UI Components

### Buttons

#### Primary Button (Deep Blue)

**Use when:** Main CTA, primary action

```tsx
<Button asChild>
  <Link href="/action">
    <Icon className="w-4 h-4 mr-2" />
    Primary Action
  </Link>
</Button>
```

- Background: Deep Blue (#0A2540)
- Text: White
- Hover: Lift up 2px, add shadow
- Focus: Ring with Deep Blue

#### Secondary Button (Warm Amber)

**Use when:** Alternative action, emphasis needed

```tsx
<Button variant="secondary" asChild>
  <Link href="/action">
    <Icon className="w-4 h-4 mr-2" />
    Secondary Action
  </Link>
</Button>
```

- Background: Warm Amber (#F6A32F)
- Text: Dark Slate
- Hover: Lift up 2px, add shadow

#### Outline Button

**Use when:** Tertiary action, less emphasis

```tsx
<Button variant="outline" asChild>
  <Link href="/action">View Details</Link>
</Button>
```

- Border: Cool Gray
- Background: Transparent
- Text: Dark Slate
- Hover: Warm Amber background

#### Ghost Button

**Use when:** Icon-only, minimal emphasis

```tsx
<Button variant="ghost" size="icon">
  <Github className="w-5 h-5 text-primary" />
</Button>
```

- Background: Transparent
- Text: Primary color
- Hover: Warm Amber background

### Cards

#### Standard Card

```tsx
<Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-l-4 border-l-transparent hover:border-l-accent">
  <CardHeader>
    <CardTitle className="text-primary">Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

**Card Properties:**

- Background: White (Light) / Dark Slate (Dark)
- Border: Cool Gray (default), Warm Amber on hover (left border)
- Border Left: 4px accent on hover
- Shadow: Elevation on hover
- Translate: -2px up on hover

### Badges

```tsx
<Badge variant="secondary">Skill Name</Badge>
```

- Background: Warm Amber
- Text: Dark Slate
- Hover: Lift up 1px, add shadow

### Section Backgrounds

```tsx
// Light background section
<section className="py-20 px-4 bg-brand-light-gray/50">
  {/* Content */}
</section>

// White/default background
<section className="py-20 px-4">
  {/* Content */}
</section>
```

---

## Layout & Spacing

### Spacing Scale

```
0:   0px    (margin: 0)
1:   4px    (p-1, m-1)
2:   8px    (p-2, m-2)
4:   16px   (p-4, m-4)
6:   24px   (p-6, m-6)
8:   32px   (p-8, m-8)
12:  48px   (p-12, m-12)
20:  80px   (py-20)
```

### Section Padding

```tsx
// Standard section
className = "py-20 px-4";

// Inside container
className = "max-w-4xl mx-auto";
className = "max-w-6xl mx-auto";
```

### Gap/Spacing Between Elements

```tsx
// Small gap
gap - 2; // 8px between items

// Medium gap
gap - 4; // 16px between items

// Large gap
gap - 8; // 32px between items

// Vertical spacing
mb - 4; // margin-bottom 16px
mb - 8; // margin-bottom 32px
```

---

## Interactive Elements

### Hover States

All interactive elements should have smooth transitions:

```tsx
className = "hover:shadow-lg hover:-translate-y-2 transition-all duration-300";
```

**Standard Hover Behavior:**

- Lift: `-translate-y-1` or `-translate-y-2`
- Shadow: `hover:shadow-lg` or `hover:shadow-xl`
- Duration: `duration-300` (smooth, not too fast)

### Animations

| Animation                | Duration | Use Case                        |
| ------------------------ | -------- | ------------------------------- |
| `animate-bounce-in`      | 800ms    | Component entrance, hero images |
| `animate-slide-in-left`  | 800ms    | Text entrance from left         |
| `animate-slide-in-right` | 800ms    | Text entrance from right        |
| `animate-slide-up`       | 600ms    | Element entrance from bottom    |
| `animate-zoom-in`        | 600ms    | Element scale entrance          |
| `animate-fade-in`        | 800ms    | Fade entrance                   |

### Animation Delays

```tsx
// Stagger animations for multi-element entrance
animation - delay - 300; // 300ms
animation - delay - 500; // 500ms
animation - delay - 700; // 700ms
animation - delay - 900; // 900ms
animation - delay - 1100; // 1100ms
```

### Transition Timing

```
Fast:      duration-200  (200ms)   - Microinteractions
Normal:    duration-300  (300ms)   - Standard interactions
Smooth:    duration-500  (500ms)   - Card/section interactions
Extended:  duration-700  (700ms)   - Complex animations
```

---

## Dark Mode Implementation

### CSS Variables (Light Mode)

```css
:root {
  --primary: 209.9 82.9% 23.1%; /* Deep Blue */
  --secondary: 45.3 87.3% 59.2%; /* Warm Amber */
  --muted: 217.2 13.3% 97%; /* Light Gray */
  --muted-foreground: 215.4 16.3% 58.6%; /* Cool Gray */
  --accent: 45.3 87.3% 59.2%; /* Warm Amber */
  --foreground: 217.2 32.6% 17.5%; /* Dark Slate */
  --background: 0 0% 100%; /* White */
  --border: 215.4 16.3% 90%; /* Cool Gray Light */
}
```

### CSS Variables (Dark Mode)

```css
.dark {
  --primary: 45.3 87.3% 59.2%; /* Amber as primary */
  --secondary: 209.9 82.9% 28.1%; /* Deep Blue lighter */
  --muted: 217.2 13.3% 30%;
  --muted-foreground: 215.4 16.3% 70%;
  --accent: 45.3 87.3% 59.2%; /* Amber */
  --foreground: 0 0% 100%; /* White */
  --background: 217.2 32.6% 17.5%; /* Dark Slate */
  --border: 217.2 13.3% 25%;
}
```

### Dark Mode Toggle Component

```tsx
// Located at: src/components/theme-toggle.tsx
<Button
  variant="outline"
  size="icon"
  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
  className="fixed top-4 right-4 z-50 rounded-full border-2 border-primary hover:bg-accent hover:text-primary transition-all duration-300"
>
  {resolvedTheme === "dark" ? (
    <Sun className="h-[1.2rem] w-[1.2rem] text-accent" />
  ) : (
    <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
  )}
</Button>
```

---

## Accessibility

### Color Contrast

All text must meet WCAG AA standards (4.5:1 minimum for normal text):

✅ **Approved Combinations:**

- Deep Blue (#0A2540) on White: 11.5:1 ✓
- Dark Slate (#1E293B) on White: 12.6:1 ✓
- White on Deep Blue: 11.5:1 ✓
- Dark Slate on Light Gray: 8.2:1 ✓

❌ **Avoid:**

- Warm Amber (#F6A32F) on Light Gray (insufficient contrast)
- Cool Gray on Light Gray (insufficient contrast)

### Text Color Rules

```tsx
// Primary body text - always use text-foreground
<p className="text-foreground">Content</p>

// Secondary/muted text
<span className="text-muted-foreground">Secondary</span>

// Never use text on text without contrast check
```

### Interactive Elements

- All buttons must have visible focus states
- Use `focus-visible:ring-2 focus-visible:ring-ring` for focus indicators
- Hover states should be obvious and consistent
- Icon-only buttons must have `aria-label`

### Semantic HTML

```tsx
// Use semantic headings
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

// Use semantic links
<Link href="/path">Descriptive link text</Link>

// Use semantic lists
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

---

## Code Examples

### Complete Section Component Example

```tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExampleSection() {
  return (
    <section className="py-20 px-4 bg-brand-light-gray/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Section Title
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Component */}
          <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-l-4 border-l-transparent hover:border-l-accent">
            <CardHeader>
              <CardTitle className="text-primary">Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                This is body text using the correct typography and colors.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
```

### Color Token Usage

```tsx
// Using Tailwind CSS classes with brand colors
<div>
  {/* Text Colors */}
  <h1 className="text-primary">Primary Heading</h1>
  <p className="text-foreground">Main text</p>
  <span className="text-muted-foreground">Secondary text</span>

  {/* Background Colors */}
  <div className="bg-brand-light-gray">Light background</div>
  <div className="bg-accent">Accent background</div>

  {/* Border Colors */}
  <div className="border-2 border-brand-cool-gray">Cool gray border</div>
  <div className="border-l-4 border-l-accent">Accent left border</div>

  {/* Button Colors */}
  <Button className="bg-primary text-white">Primary Button</Button>
  <Button className="bg-secondary">Secondary Button</Button>
</div>
```

### Responsive Grid Example

```tsx
{/* Grid layouts follow these patterns */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards automatically stack on mobile, 2 cols on tablet, 3 on desktop */}
</div>

<div className="grid md:grid-cols-2 gap-8">
  {/* Standard 2-column grid */}
</div>
```

---

## Common Patterns

### Hero Section Pattern

```tsx
<section className="relative py-20 px-4 bg-gradient-brand-subtle overflow-hidden">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
      Main Heading
    </h1>
    <p className="text-xl md:text-2xl mb-6 text-accent font-semibold">
      Subheading
    </p>
    <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
      Body text describing the section.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Button>Primary Action</Button>
      <Button variant="secondary">Secondary Action</Button>
    </div>
  </div>
</section>
```

### Card Grid Pattern

```tsx
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center text-primary">
      Section Title
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <Card
          key={item.id}
          className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-l-4 border-l-transparent hover:border-l-accent"
        >
          <CardHeader>
            <CardTitle className="text-primary">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
```

### Info Box Pattern

```tsx
<div className="flex items-center gap-2 text-muted-foreground">
  <Icon className="w-4 h-4 text-accent" />
  <span>{content}</span>
</div>
```

### Badge/Skill Tag Pattern

```tsx
<div className="flex flex-wrap gap-2">
  {skills.map((skill) => (
    <Badge
      key={skill}
      variant="secondary"
      className="hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
    >
      {skill}
    </Badge>
  ))}
</div>
```

---

## Implementation Checklist

When adding new components or sections:

- [ ] All text uses appropriate color tokens (primary, foreground, muted-foreground)
- [ ] Headings use Deep Blue (`text-primary`)
- [ ] Body text uses Dark Slate (`text-foreground`)
- [ ] Muted text uses Cool Gray (`text-muted-foreground`)
- [ ] Links and CTAs use Warm Amber (`text-accent`) or Deep Blue
- [ ] Buttons follow brand button patterns
- [ ] Cards include hover effects with lift and shadow
- [ ] Interactive elements have smooth transitions (`duration-300`)
- [ ] Section backgrounds alternate between white and Light Gray
- [ ] Typography follows Inter (headings) and Nunito (body) patterns
- [ ] Component is tested in both light and dark modes
- [ ] Contrast ratios meet WCAG AA standards (4.5:1 minimum)
- [ ] No old purple/pink colors are used
- [ ] Animations use approved keyframes and durations

---

## File Structure Reference

```
src/
├── app/
│   ├── layout.tsx              (Font setup)
│   ├── globals.css             (Brand colors, animations)
│   └── page.tsx                (Main page)
├── components/
│   ├── ui/                      (Radix UI components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── hero-section.tsx         (Hero section)
│   ├── about-section.tsx        (About section)
│   ├── experience-section.tsx   (Experience section)
│   ├── projects-section.tsx     (Projects section)
│   ├── contact-section.tsx      (Contact section)
│   ├── footer.tsx               (Footer)
│   ├── theme-provider.tsx       (Theme context)
│   └── theme-toggle.tsx         (Dark mode toggle)
├── lib/
│   └── utils.ts                 (Utility functions)
└── styles/
    └── globals.css              (Global styles)

tailwind.config.ts              (Tailwind configuration)
```

---

## Future Updates

### When to Update This Guide

- New color is added to the palette
- Typography scale changes
- New button variants are introduced
- Component patterns change significantly
- Brand guidelines evolve

### Versioning

Keep version updates at the top of this file:

```
Version 1.0 - Initial brand setup
Version 1.1 - Add new patterns
Version 2.0 - Major redesign
```

---

## Support & Questions

For questions about brand implementation:

1. **Check this guide first** - Most answers are here
2. **Review existing components** - Look at similar implementations
3. **Test in both modes** - Always verify light/dark mode
4. **Run accessibility checker** - Ensure WCAG compliance
5. **Get design review** - Ask for feedback before merging

---

**Last Updated:** November 2025  
**Maintained By:** Development Team  
**Next Review:** Q2 2026
