# Biniyam Samuel Yaya — Portfolio Architecture and Implementation Plan

**Status:** Phases 1–4 implemented and validated  
**Scope:** Hero, About, skills, project showcase, typed content, production metadata, branding, and responsive/accessibility foundations. Experience, education display, certifications, and contact functionality remain deferred.

## 1. Repository assessment

The repository uses the Next.js App Router under `src/app`, Tailwind CSS 4, strict TypeScript, and the `@/*` alias. The package manifest pins Next.js 16.4.5 and React/React DOM 19.3.0; these remain unchanged. The page is composed from Server Components and typed local data. The dark design tokens and system font stacks live in `src/app/globals.css`; no UI or animation dependencies are used. `next.config.ts` retains its existing cache/partial-prefetch and Turbopack settings. Portfolio data is separated across profile, skills, projects, experience, education, and certification modules.

The approved direction is a premium, dark engineering portfolio with balanced software and hardware emphasis, delivered as a single page at `/`. It does not assume a backend, CMS, authentication, analytics, or contact-form service. Avoid adding dependencies until a specific requirement cannot be met well with platform and React primitives.

## 2. Product requirements

### Product goal

Present Biniyam as an electrical and computer engineering student focused on computer engineering, full-stack development, PCB design, embedded systems, robotics, IoT, networking, and cloud technology. Help recruiters, collaborators, and engineering peers understand his interests, demonstrated work, education, and ways to make contact.

### Audiences and key outcomes

- **Recruiters and internship reviewers:** quickly understand the candidate's focus, education, verified experience, and strongest projects.
- **Engineering peers and collaborators:** inspect project context, personal contribution, tools, design decisions, and current status.
- **General visitors:** navigate comfortably on mobile and desktop and find a direct contact route.

### Functional requirements

1. **Hero and introduction:** name, concise role/discipline statement, clear project/contact calls to action, and restrained motion or an engineering-inspired visual.
2. **About:** a short first-person or editorial introduction grounded in the supplied profile; do not invent biography, location, or claims.
3. **Technical skills:** grouped skills (for example, software, hardware/embedded, networking/cloud) populated only with tools or competencies Biniyam confirms. The supplied profile is not a verified tool inventory.
4. **Featured projects:** represent all six named projects: RentVision; Inter-Networking of Multiple Institutions; Short-Range FM Transmitter and Receiver; Harvard Architecture Mini Computer; Four-Way Traffic Light Controller; Agricultural Quadcopter Drone research. Cards link to an accessible detail dialog or an in-page detail view. Include a concise overview, status, contribution, technologies, and media only when verified. Agricultural Quadcopter Drone must be clearly labeled ongoing research until its status is confirmed. Do not imply completion, deployment, results, or individual ownership without evidence.
5. **Experience and internships:** render only confirmed roles, organizations, dates, and responsibilities. If no information is supplied, omit entries and use a discreet editorial placeholder only if approved; do not publish fabricated sample experience.
6. **Education:** include the verified Electrical and Computer Engineering program and Computer Engineering specialization; request institution, dates, and expected graduation before displaying them.
7. **Certifications:** show only confirmed credentials, issuer, and date; omit the section's entries if no evidence is provided.
8. **Contact:** offer verified email and/or professional profile links. No custom submission backend is required for v1; a mail link is a sufficient baseline.

### Quality requirements

- Responsive from narrow mobile screens through wide desktop; usable with keyboard and touch.
- Accessible semantic structure, visible focus, sufficient contrast, reduced-motion support, and an accessible project detail interaction.
- Search and social metadata, meaningful title/description, canonical URL when domain is known, Open Graph image when supplied, and crawlable server-rendered page content.
- Fast initial rendering; keep the route server-rendered and hydrate only the interactive navigation/project detail controls.
- Maintainable content separated from presentation, typed data, reusable section primitives, and no fabricated personal claims.

### Out of scope for v1

Multi-route project case studies, a CMS, API/database, contact form processing, authentication, analytics, theme switcher, localization, and complex 3D/particle effects. Reassess only if the approved product direction requires them.

## 3. System architecture

### Runtime and rendering

Use the existing Next.js App Router and a single `src/app/page.tsx` route composed from server components. Keep static portfolio content in typed local modules so it can be rendered at build/request time without a data service. The root layout owns document language, font variables, global styles, and site-wide metadata. Use Next Metadata API in `layout.tsx` for base metadata and page-level metadata in the route if useful. Prefer `next/image` for real supplied project images and local assets under `public/images/`; do not depend on remote image hosts unless the source and configuration are intentionally established.

Use client components only where interaction requires browser state: mobile navigation toggle and project detail dialog. Project cards and all static sections remain server components. Pass serializable project data to the client interaction boundary; avoid turning the whole page into a client component. A semantic `<dialog>` controlled with React state or native dialog methods is appropriate if focus placement, Escape dismissal, focus restoration, and background scroll behavior are handled correctly. If that interaction proves disproportionately complex, use a disclosure/anchor pattern rather than adding a modal library.

### Data flow

Separated typed modules under `src/data/` (manually curated source of truth) → server-rendered section components. No fetch layer or client-side state is needed for the static portfolio. Keep uncertain content absent or clearly marked for review. Add URLs only after they are confirmed and validated.

### Architectural decisions

- **Single page first:** the requested sections form a coherent profile and are naturally navigable by anchors. Dedicated project routes can be added later if case studies justify them.
- **Server by default:** static content benefits from SEO, smaller client JavaScript, and straightforward accessibility. Isolate interactivity rather than opting the route into client rendering.
- **Typed content module:** gives repeatable card/detail rendering and guards against missing required fields while avoiding a CMS for six projects.
- **CSS/Tailwind primitives:** Tailwind 4 is already configured; use its utilities plus a small token layer in `globals.css`. Avoid a component library and animation dependency for this scope.
- **Progressive enhancement:** navigation anchors and project content should remain meaningful without animation; interaction enhances access to details.
- **Truthful status model:** encode project status explicitly (`completed`, `in-progress`, `research`, `planned` only where confirmed). Status is editorial data, not inferred from a title.

## 4. Component hierarchy

```text
RootLayout (src/app/layout.tsx)
└── HomePage (src/app/page.tsx, Server Component)
    ├── SkipLink
    ├── SiteHeader (Server Component)
    │   ├── BrandLink
    │   └── ResponsiveNavigation (CSS responsive layout)
    ├── main
    │   ├── HeroSection
    │   ├── AboutSection
    │   ├── SkillsSection
    │   ├── ProjectsSection
    │   │   ├── ProjectCard (Server Component)
    │   │   └── ProjectDetails (native `<details>` disclosure)
    │   ├── ExperienceSection
    │   ├── EducationSection
    │   ├── CertificationsSection
    │   └── ContactSection
    └── SiteFooter
```

Reusable presentational building blocks may include `SectionHeading`, `TagList`, `StatusBadge`, `SocialLink`, and `ProjectMedia`. Keep these small and introduce them only where reused. Do not build an abstraction layer for a one-off visual.

## 5. Proposed folder structure

```text
src/
  app/
    layout.tsx                 # Root document, fonts, metadata
    page.tsx                   # Server-rendered portfolio composition
    globals.css                # Tailwind import, tokens, base and motion rules
    icon.svg                   # Optional, after brand asset is approved
  components/
    layout/
      site-header.tsx
      site-footer.tsx
      skip-link.tsx
    sections/
      hero-section.tsx
      about-section.tsx
      skills-section.tsx
      projects-section.tsx
      experience-section.tsx
      education-section.tsx
      certifications-section.tsx
      contact-section.tsx
    projects/
      project-card.tsx
    ui/
      section-heading.tsx
      status-badge.tsx
      tag-list.tsx
  data/
    profile.ts                 # Typed, verified profile and public links
    skills.ts                  # Typed skill groups
    projects.ts                # Typed project records and category assignments
    experience.ts              # Typed, verified experience entries
    education.ts               # Typed, verified education entries
    certifications.ts          # Typed, verified credentials
  types/
    portfolio.ts               # Shared domain types if data module grows
public/
  images/
    projects/                   # Approved, optimized project media
docs/
  portfolio-architecture.md
```

This is a target structure, not a request to create these implementation files now. Given the small one-route scope, folders can be introduced incrementally as implementation proceeds.

## 6. Design system proposal

### Approved visual direction

Premium dark editorial engineering aesthetic: near-black canvas, white primary typography, muted secondary text, and a restrained electric teal accent. Balance software and hardware content and visuals. Use a quiet grid, fine rules, or schematic-inspired line work as decoration, never as a substitute for project photography or diagrams. Keep surfaces mostly flat; reserve elevated panels for project cards and dialog content. Avoid excessive animation.

### Tokens (initial proposal, to tune during implementation)

| Token | Proposed value | Use |
| --- | --- | --- |
| Canvas | `#090D12` | Near-black page background |
| Surface | `#111821` | Cards and dialog |
| Surface raised | `#17212C` | Hover/focus emphasis |
| Text | `#F2F5F7` | Headings and primary content |
| Muted text | `#A5B0BB` | Supporting content; verify contrast |
| Accent | `#55D6C2` | Restrained electric teal for links and indicators |
| Border | `#26323D` | Dividers and card edges |
| Focus | `#B8F7E9` | Visible keyboard focus |

All color pairs must be checked for WCAG AA contrast in context; adjust muted text/accent if necessary. Encode palette, spacing, radii, and type scale as CSS custom properties and expose relevant values through Tailwind 4 `@theme` where useful.

### Typography and layout

Use a system font stack for editorial sans-serif and monospace roles to avoid a build-time dependency on external font downloads. Use a clear display scale for the hero, readable body measure (roughly 60–75 characters), and monospaced text sparingly for technical labels. Use a centered max-width container, fluid section spacing, and a responsive project grid (one column on small screens, two or three at wider widths). Avoid fixed heights that clip translated or enlarged content.

### Motion and interaction

Keep hero motion subtle (short entrance/opacity/transform, or a CSS-drawn ambient detail), avoid continuous motion, and provide `prefers-reduced-motion: reduce` rules. Prefer CSS transitions over a motion library. Cards need clear hover and keyboard-focus states, with the same information and action available to both. Dialog must close via Escape and an explicit close button; keep focus contained/restored and label it accessibly. Avoid hover-only discovery.

## 7. Data architecture and content governance

Suggested domain types:

```ts
type ProjectStatus = "completed" | "in-progress" | "research";

type Project = {
  id: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  period?: string;                 // only verified dates
  role?: string;                   // personal contribution, confirmed
  technologies: string[];          // verified tools/materials
  details?: string[];              // design/process/outcome, evidenced
  image?: { src: string; alt: string };
  links?: { label: string; href: string }[];
};
```

Keep content in maintainable, separated typed data files rather than a single growing portfolio blob: `src/data/profile.ts`, `src/data/skills.ts`, `src/data/projects.ts`, `src/data/experience.ts`, `src/data/education.ts`, and `src/data/certifications.ts`. Put shared domain types in `src/types/portfolio.ts` when reused across modules. Optional fields should be omitted when unknown. Avoid empty strings, dummy links, numeric proficiency ratings, and unverified dates. Do not put private contact details in public data without explicit selection. Content modules are introduced incrementally in the applicable implementation phase; Phase 1 currently needs no project/content data module.

### Project categories

Every future project record may be assigned one or more of these approved categories:

1. Software Engineering
2. Hardware & PCB Design
3. Embedded Systems & IoT
4. Robotics & Drone Technology
5. Networking & Infrastructure
6. Networking / AI (project-specific classification used for AI Network Guardian; the skill taxonomy remains the original five groups)

### Current project records

The current public project data includes the following records. Preserve only the supplied or repository-verified claims; keep personal role, dates, outcomes, and media flagged for review where not confirmed.

| Project | Safe initial editorial treatment |
| --- | --- |
| [Internship Linkage Management System](https://github.com/binicode-ai/internship-linkage-management-system) | README/source confirm a web system for students, universities, and companies, with portals, internship posting, application tracking, evaluation, and complaint/communication flows. Listed stack: Node.js, Express.js, PostgreSQL, EJS, JavaScript, CSS3. |
| [AI Network Guardian](https://github.com/binicode-ai/ai-network-guardian) | Source confirms ping/DNS telemetry collection, PostgreSQL storage, FastAPI endpoints, a React/Vite/Recharts dashboard, and threshold-based alert rules. Dependencies include FastAPI, psycopg, python-dotenv, Uvicorn, React, Vite, and Recharts. No AI/ML model or AI/ML dependency was found in inspected source/dependency files; do not claim AI-driven detection. |
| Inter-Networking of Multiple Institutions | Preserve supplied title; clarify scope, topology, role, and implementation before describing results. |
| Harvard Architecture Mini Computer | Preserve supplied title; confirm implementation, instruction set, tools, and status. |
| Four-Way Traffic Light Controller | Preserve supplied title; confirm hardware/simulation, controller behavior, and completion. |
| Agricultural Quadcopter Drone research | Label as research/ongoing only if confirmed; otherwise show the supplied research framing and ask for current status. |

The source review found the Internship Linkage README feature/technology lists alongside corresponding Express routes, EJS views, and PostgreSQL schema. The AI Network Guardian repository contains collector, alerting, storage, API, dashboard, and tests modules. Its only test file is a database initialization smoke script; no feature or alert-rule test suite was found. No deployment state or measured results are asserted.

The profile supplied for this plan supports describing areas of study and interest. It does not identify particular programming languages, PCB tools, cloud providers, institutions, internships, certificates, dates, or quantified achievements.

## 8. Implementation roadmap

### Phase 0 — Content verification and approval

Collect/approve: preferred name and exact hero statement; education institution and dates; skill/tool inventory; per-project status, contribution, technologies, evidence, and images; experience/internships; certifications; public email/social URLs; preferred domain and profile photo/brand assets. Mark research status and ongoing work explicitly. Agree on which empty sections should be omitted versus shown with a contact-oriented note.

### Phase 1 — Foundation

Replace starter metadata and sample page composition; retain existing Next configuration; establish design tokens/base styles; add semantic page landmarks, skip link, navigation, and section IDs. Confirm server-component boundaries.

### Phase 2 — Content and sections

Add typed portfolio data and section components in the requested order. Add verified project cards, status labels, and details. Build education, experience, certification sections from confirmed data, omitting unsupported records.

### Phase 3 — Interaction and visual refinement

Add responsive navigation and project details interaction, restrained hero/card motion, responsive layout, supplied media, and error-free empty/optional states. Respect reduced motion and keyboard interaction.

### Phase 4 — Metadata and release readiness (implemented)

Configured title/description, canonical URL, Open Graph and X metadata, a generated branded 1200×630 preview image, SVG monogram favicon, `robots.txt`, and `sitemap.xml`. The page has no project photography or client-side image loading. The existing configuration was preserved; Next's production output still notes its configured `agentFeedback` experiment.

Architecture approval has been granted. Phases 1–4 are implemented. Wait for approval before any further implementation.

### Phase 1 implementation boundary

Phase 1 implemented global design tokens/CSS foundation, root metadata, responsive site header/navigation, skip link, professional responsive hero, semantic page structure, and accessibility/reduced-motion support. The hero identity is “Biniyam Samuel Yaya”, “Computer Engineer | Full-Stack Developer”, and “Software Engineering | PCB Design | Embedded Systems | Robotics | IoT”.

### Phase 2 implementation boundary and result


Phase 2 adds About, skills focus groups, project cards with native accessible details disclosures, and separated typed profile/skills/projects/experience/education/certification data modules. Skills distinguish professional focus from interests. Experience and certification arrays are empty because no entries were provided. Education data includes only the supplied program and specialization; institution and dates remain absent.

### Phase 3 implementation boundary and result

Phase 3 removes the RentVision and short-range FM project records from the public portfolio data and replaces them with the repository-verified Internship Linkage Management System and AI Network Guardian records, each linking directly to GitHub. AI Network Guardian's card documents that inspected source implements threshold-based alerts and that no AI/ML model or dependency was found. The remaining four supplied projects are preserved. The project grid, card hierarchy, responsive navigation, detail disclosures, focus/active/hover states, and section transitions were refined with CSS; native disclosures and Server Components remain in use. No dependencies or Next.js configuration were changed.

## 9. Testing and quality strategy

During implementation, validate in layers without adding a test framework unless needed:

- **Static checks:** run the existing ESLint script and TypeScript/Next build checks after implementation; fix warnings that reflect real defects.
- **Responsive review:** inspect representative narrow mobile, tablet, and desktop widths; verify no overflow, clipped controls, or unreadably dense project cards.
- **Accessibility review:** keyboard-only path through navigation, native disclosure summaries, and repository links; visible focus; heading/landmark hierarchy; accessible names; reduced-motion mode; contrast; 200% zoom and reflow. Use automated axe checks if an existing tool or approved workflow is available; otherwise do not add a dependency solely for this plan.
- **SEO/content:** inspect rendered title/description, social metadata, canonical link when configured, heading structure, crawlable content, link destinations, and image alt text. Ensure no placeholder or invented claims ship.
- **Browser behavior:** verify anchor navigation, responsive navigation layout, native disclosure keyboard operation, external repository links, and operation with JavaScript disabled (core reading/navigation should remain available).
- **Performance:** inspect production build output and browser network/runtime behavior; keep client JS limited to interactive islands and optimize supplied media.
- **Regression:** ensure the existing project build/config remains intact, obsolete project records are absent, the four retained projects remain, and Phase 3 does not introduce client-only UI or unsupported claims.

## 10. Open content decisions

These do not block architectural approval, but need resolution before the related content is published:

1. What are the verified institution, program dates, and graduation status?
2. Which skills, languages, hardware platforms, EDA tools, networking/cloud tools, and frameworks should be listed?
3. For every project, what is its current status, your contribution, collaborators, tools, dates, key design decisions, evidence, and approved public links/media?
4. What internships or other experience and certifications can be listed, with issuer/organization and dates?
5. Which email and professional/social links should be public, and is a domain known?
6. Should experience/certification sections be hidden when empty, or retained with a brief contact-oriented treatment?

## 11. Approval checkpoint

Phases 1–4 are implemented and validated with the existing lint and production build scripts; package versions and `next.config.ts` were not changed. The generated HTML was checked for canonical, Open Graph, X card, and icon metadata. The page contains no client components or project image requests. Keyboard paths, heading levels, reduced-motion CSS, responsive breakpoints, and primary text contrast were reviewed from source; no browser screenshot tool was available for viewport-based visual inspection. A first-party source/config scan found no secret-like values or local `.env` files. Wait for approval before further implementation.
