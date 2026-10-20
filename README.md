<div align="center">

# rahim<span style="color:#a3e635">.</span>

**Full Stack Web Developer — Portfolio Website**

A modern, neon-themed portfolio built with Next.js 16, React 19 and Tailwind CSS v4.
Dark glassmorphism, animated reveals, and a custom gradient monogram — fully static, fast, and accessible.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green)](#license)

</div>

---

## ✨ Features

- **Modern neon design** — dark glassmorphism, gradient accents and soft glows
- **Custom logo & favicon** — gradient "R" monogram, SVG favicon scales to any size
- **Resume page** — print-friendly, built from centralized site data
- **Project showcase** — cards with screenshots, hover zoom and stack badges
- **Animated UI** — scroll reveals, floating avatar, skill marquee, pulse glows
- **Responsive** — mobile sheet menu, fluid grids, optimized images
- **Accessible** — semantic markup, focus rings, `prefers-reduced-motion` support
- **Static & fast** — every route prerendered at build time

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Hero, stats, featured projects, skill marquee |
| `/projects` | Full project grid with images and links |
| `/experience` | Career timeline with current-role highlight |
| `/resume` | Printable resume — skills, experience, projects |
| `/about` | Bio, photo, quick facts and tech stack tabs |
| `/contact` | Contact form and links |

## 🛠 Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack, Cache Components) |
| UI | React 19, shadcn/ui (Base UI), lucide-react |
| Styling | Tailwind CSS v4, CSS-first theme tokens |
| Extras | React Compiler, Geist fonts |

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/rahim-codes/portfolio-website.git
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## 🗂 Project Structure

```
portfolio-website/
├── public/
│   ├── photo.jpg              # Profile photo
│   ├── projects/              # Project screenshots & covers
│   └── ...
└── src/
    ├── app/                   # App Router pages (routes)
    │   ├── icon.svg           # Logo favicon
    │   ├── globals.css        # Theme tokens & custom utilities
    │   └── ...
    ├── components/
    │   ├── layout/            # Navbar, footer
    │   ├── sections/          # Hero, etc.
    │   ├── ui/                # shadcn/ui primitives
    │   ├── logo.js            # Gradient monogram logo
    │   ├── project-card.js    # Project card with image
    │   └── ...
    └── lib/
        ├── data/site.js       # ⭐ All site content — edit me
        └── utils.js
```

## ✏️ Customize

All content lives in **`src/lib/data/site.js`** — update:

- `site` — name, role, bio, email, social links, photo
- `projects` — title, description, stack, `image` path, links
- `experience` — roles, periods, summaries
- `skillGroups` / `marqueeSkills` — tech skills
- `navLinks` / `stats` / `quickFacts` — navigation & misc

Add project images to `public/projects/` and reference them via the `image` field.

## 📸 Screenshots

Drop your screenshots into `public/projects/` (Len Den Tracker and Vault Manager are already wired up; the rest use themed SVG covers).

## 📄 License

MIT — feel free to use this as a starting point for your own portfolio.

---

<div align="center">
  Built with <a href="https://nextjs.org">Next.js</a> · Designed & developed by <b>Abdur Rahim</b>
</div>
