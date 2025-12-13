# Design Guidelines: Professional Developer Portfolio

## Design Approach
**System-Based Approach** drawing inspiration from Linear's clean, content-focused aesthetic combined with modern portfolio best practices. This is a professional developer CV site requiring clarity, credibility, and efficient information presentation.

## Core Design Principles
1. **Content Hierarchy First**: Information architecture drives visual decisions
2. **Professional Minimalism**: Clean, distraction-free presentation
3. **Scannable Structure**: Easy navigation through dense professional content
4. **Credibility Through Clarity**: No gimmicks, let credentials speak

---

## Typography System

**Font Families** (via Google Fonts):
- Primary: Inter (headings and UI elements)
- Secondary: JetBrains Mono (code/technical references, optional accent)

**Type Scale**:
- Hero Name: text-5xl md:text-7xl, font-bold
- Section Headings: text-3xl md:text-4xl, font-bold
- Subsection Titles: text-xl md:text-2xl, font-semibold
- Job Titles/Roles: text-lg font-medium
- Body Text: text-base
- Meta Info: text-sm
- Technical Tags: text-xs uppercase tracking-wide

---

## Layout System

**Spacing Units**: Use Tailwind units of **4, 6, 8, 12, 16, 24** consistently
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24
- Element gaps: gap-4, gap-6, gap-8

**Container Strategy**:
- Max width: max-w-6xl mx-auto
- Section padding: px-6 md:px-8
- Full-width sections with inner containers

**Grid System**:
- Skills grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Experience timeline: Single column with left-aligned content
- Two-column layout for desktop where appropriate (Education details, Contact info)

---

## Component Library

### 1. Header/Hero Section
- Fixed or sticky navigation (minimal height)
- Hero: Full-width section with name, title, brief tagline
- Social links row (GitHub, LinkedIn, HackerRank, etc.) with icons
- Smooth scroll navigation to sections
- **No large hero image** - focus on typography and clean layout

### 2. Navigation
- Desktop: Horizontal nav links (inline flex)
- Mobile: Hamburger menu (slide-in or dropdown)
- Active section indicator (border-bottom or subtle highlight)
- Icons: Use Heroicons via CDN

### 3. Section Headers
- Left-aligned section title with accent line or number
- Optional short description below title
- Consistent margin-bottom before content

### 4. Education Section
- Institution cards with degree, dates, coursework list
- Graduation project callouts (bordered or subtle background treatment)
- Two-column on desktop: institution info | coursework details

### 5. Experience Timeline
- Left-aligned chronological layout
- Company/role headers with date ranges
- Expandable project details with bullet points
- Achievement badges or highlights (government support, partnerships)
- Subtle connecting line for timeline feel (border-left on container)

### 6. Skills & Qualifications
- Multi-column grid (4 columns on desktop, 2 on tablet, 1 on mobile)
- Grouped by category (Frontend, Backend, Tools, etc.)
- Clean tag-style presentation or simple list items
- Consistent spacing between categories

### 7. References Section
- Card-based layout (if references provided)
- Or simple text list with contact information
- Professional, minimal design

### 8. Contact/About Section
- Two-column: Contact links | Brief bio or availability statement
- Icon + link pairs for each social/contact method
- Email as prominent CTA button
- Footer-style treatment at bottom

### 9. Footer
- Simple copyright and last updated date
- Link back to top
- Minimal additional navigation if needed

---

## Visual Rhythm & Polish

**Spacing Consistency**:
- Section vertical padding: py-16 md:py-24
- Inter-element spacing: mb-6 to mb-12
- Card/component internal padding: p-6 md:p-8

**Borders & Dividers**:
- Subtle section dividers where helpful (1px, low opacity)
- Card borders: border with subtle radius (rounded-lg)
- Accent lines for section headers (border-l-4 or border-b-2)

**Interactive States**:
- Links: Underline on hover, smooth transition
- Cards: Subtle lift or border highlight on hover
- Buttons: Standard scale/opacity changes
- No elaborate animations - keep professional

**Responsive Breakpoints**:
- Mobile: Single column, full-width cards
- Tablet (md:): Two-column grids, optimized spacing
- Desktop (lg:): Multi-column grids, generous whitespace

---

## Content Strategy

**Above the Fold**: Name, title, key social links, immediate navigation access

**Section Order**:
1. Hero (Name/Title)
2. About & Contact (brief intro)
3. Experience (most recent first)
4. Skills & Qualifications
5. Education
6. References
7. Footer

**Information Density**: Balance comprehensive CV content with breathing room - generous line-height (leading-relaxed), strategic use of whitespace between sections

---

## Icons
Use **Heroicons** (outline style) via CDN for all icons:
- Social media icons
- Navigation icons
- Section decorative elements
- External link indicators

---

## Accessibility
- Semantic HTML structure (header, nav, main, section, footer)
- Skip to content link
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Focus visible states on all interactive elements
- Proper heading hierarchy (h1 → h6)