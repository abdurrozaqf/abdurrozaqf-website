# Abdur Rozaq F

Personal website and portfolio built with Next.js. Showcase selected projects, GitHub contribution activity, skills, and background — with a clean, responsive layout and dark/light theme support.

[Live Demo](https://abdurrozaqf.codur.workers.dev/) · [Quick Start](#getting-started) · [Features](#features) · [Structure](#project-structure)

---

## Features

- **Animated introduction** — Typewriter-style hero with role and bio on the homepage
- **GitHub contributions** — Interactive contribution calendar with stats, fetched via GitHub GraphQL
- **Skills showcase** — Dual-direction marquee of tech stacks with icons
- **Project gallery** — Curated list of repositories pulled from GitHub
- **Project detail pages** — Per-repo overview with tech stack, screenshots, and source links
- **About page** — Personal summary with animated paragraphs
- **Contact page** — Social media links for quick reach-out
- **Dark / light mode** — System-aware theme toggle via `next-themes`
- **Responsive layout** — Mobile-first design with Tailwind CSS
- **SEO ready** — Open Graph metadata, sitemap, robots.txt, and web manifest

## Tech Stack

| Category      | Technology                                         |
| ------------- | -------------------------------------------------- |
| Framework     | [Next.js 15](https://nextjs.org/) (App Router)     |
| Language      | [TypeScript](https://www.typescriptlang.org/)      |
| Styling       | [Tailwind CSS 4](https://tailwindcss.com/)         |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + Radix UI     |
| Data Fetching | [TanStack React Query](https://tanstack.com/query) |
| HTTP Client   | [Axios](https://axios-http.com/)                   |
| Animation     | [Framer Motion](https://www.framer.com/motion/)    |
| Scroll FX     | [AOS](https://michalsnik.github.io/aos/)           |
| State         | [Zustand](https://zustand-demo.pmnd.rs/)           |
| Icons         | [Lucide React](https://lucide.dev/) + React Icons  |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or later
- [npm](https://www.npmjs.com/) (or yarn / pnpm)
- A [GitHub personal access token](https://github.com/settings/tokens) with `read:user` and `repo` scopes

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/abdurrozaqf/abdurrozaq-website
cd abdurrozaq-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

   Copy `.env.example` to `.env.local` and fill in your credentials:

| Variable                      | Description                                         |
| ----------------------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_GITHUB_BASE_URL` | GitHub REST API base URL (`https://api.github.com`) |
| `NEXT_PUBLIC_GITHUB_TOKEN`    | GitHub personal access token (Bearer)               |
| `NEXT_PUBLIC_DOMAIN`          | Production site URL (used for SEO canonical links)  |

Example:

```env
NEXT_PUBLIC_GITHUB_BASE_URL=https://api.github.com
NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token
NEXT_PUBLIC_DOMAIN=https://abdurrozaqf.abdurrozaqf-dev.workers.dev
```

4. **Start the development server**

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start development server   |
| `npm run build` | Create a production build  |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Project Structure

```
abdurrozaqf-website/
├── public/                  # Static assets & project screenshots
├── src/
│   ├── action/              # Server actions (GitHub data fetching)
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── projects/
│   │   │   └── [slug]/      # Project detail page
│   │   ├── layout.tsx
│   │   ├── page.tsx         # Homepage
│   │   ├── manifest.ts
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── common/
│   │   ├── constant/        # Menu, metadata, stacks, repos, GitHub queries
│   │   ├── mocks/           # Mock data (summary, etc.)
│   │   └── types/           # Shared TypeScript types
│   ├── components/
│   │   ├── elements/        # Reusable UI elements (cards, marquee, …)
│   │   ├── layouts/         # Navbar, footer, page shell
│   │   └── ui/              # shadcn/ui primitives
│   ├── hooks/               # React Query hooks & shared utilities
│   ├── libs/                # Axios helpers, response utils
│   ├── modules/             # Feature modules (home, projects, about, …)
│   ├── providers/           # React Query, theme providers
│   ├── services/
│   │   └── apis/            # Axios client & API configs
│   ├── styles/              # Global CSS
│   └── utils/               # Formatters, motion helpers
├── components.json          # shadcn/ui configuration
└── package.json
```

## Routes

| Path               | Description                                    |
| ------------------ | ---------------------------------------------- |
| `/`                | Homepage with intro, contributions, and skills |
| `/projects`        | Curated GitHub project gallery                 |
| `/projects/[slug]` | Single project detail with tech stack & links  |
| `/about`           | Personal background and contact info           |
| `/contact`         | Social media links                             |

## API Integration

GitHub data is fetched through a centralized Axios instance (`src/libs/axios.helper.ts`) and server actions (`src/action/github.ts`). Key integrations include:

- **GraphQL** `contributionsCollection` — Contribution calendar for the homepage dashboard
- **GraphQL** `repositories` — Filtered list of curated public repositories
- **REST** `GET /repos/{owner}/{repo}` — Detailed metadata for individual project pages

Server components prefetch homepage and project data; client components use React Query where interactive caching is needed.

## Deployment

The app is optimized for deployment on [Vercel](https://vercel.com/). Set the same environment variables in your hosting provider's dashboard before deploying.

```bash
npm run build
npm run start
```

## Acknowledgments

- Data powered by the [GitHub API](https://docs.github.com/en/rest)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Author

**Abdur Rozaqi** — [GitHub](https://github.com/abdurrozaqf)

---

Built with Next.js, Tailwind CSS, and shadcn/ui.
