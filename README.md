# Abdur Rozaq F

Personal website and portfolio built with Next.js. Showcase selected projects, GitHub contribution activity, skills, and background — with a clean, responsive layout and dark/light theme support.

[Live Demo](https://codur.dev/) · [Quick Start](#getting-started) · [Features](#features) · [Structure](#project-structure)

---

## Features

- **Animated introduction** — Typewriter-style hero with role and bio on the homepage
- **GitHub contributions** — Interactive contribution calendar with stats, fetched via GitHub GraphQL
- **Skills showcase** — Dual-direction marquee of tech stacks with icons
- **Project gallery** — Curated list of repositories pulled from GitHub
- **Project detail pages** — Per-repo overview with tech stack, screenshots, and source links
- **About page** — Personal summary with animated paragraphs
- **Contact page** — Social media links for quick reach-out
- **Dark / light mode** — System-aware theme toggle with circular transition
- **Responsive layout** — Mobile-first design with Tailwind CSS
- **SEO ready** — Open Graph metadata, sitemap, robots.txt, and web manifest

## Tech Stack

| Category      | Technology                                                |
| ------------- | --------------------------------------------------------- |
| Framework     | [Next.js 16](https://nextjs.org/) (App Router)            |
| Language      | [TypeScript](https://www.typescriptlang.org/) + React 19  |
| Styling       | [Tailwind CSS 4](https://tailwindcss.com/)                |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + Radix UI            |
| Data Fetching | [TanStack React Query](https://tanstack.com/query)        |
| HTTP Client   | [Axios](https://axios-http.com/)                          |
| Animation     | [Framer Motion](https://www.framer.com/motion/)           |
| Scroll FX     | [AOS](https://michalsnik.github.io/aos/)                  |
| State         | [Zustand](https://zustand-demo.pmnd.rs/)                  |
| Icons         | [Lucide React](https://lucide.dev/) + React Icons         |
| Deploy        | [OpenNext](https://opennext.js.org/) + Cloudflare Workers |

## Architecture

Feature-based layout: routes stay thin in `app/`, page UI lives in `features/`, shared UI in `components/`, and shared helpers in `lib/`, `hooks/`, and `types/`.

Import direction: `app` → `features` → `components` → `hooks` → `lib`.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for principles, naming conventions, and data flow.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or later
- [npm](https://www.npmjs.com/) (or yarn / pnpm)
- A [GitHub personal access token](https://github.com/settings/tokens) with `read:user` and `repo` scopes

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/abdurrozaqf/abdurrozaqf-website.git
cd abdurrozaqf-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

   Copy `.env.example` to `.env.local` and fill in your credentials:

| Variable                      | Description                                        |
| ----------------------------- | -------------------------------------------------- |
| `NEXT_PUBLIC_DOMAIN`          | Production site URL (used for SEO canonical links) |
| `NEXT_PUBLIC_GITHUB_BASE_URL` | GitHub API base URL (`https://api.github.com`)     |
| `GITHUB_TOKEN`                | GitHub personal access token (Bearer)              |

Example:

```env
NEXT_PUBLIC_GITHUB_BASE_URL=https://api.github.com
GITHUB_TOKEN=your_github_personal_access_token
NEXT_PUBLIC_DOMAIN=https://codur.dev
```

4. **Start the development server**

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | Start Next.js development server                 |
| `npm run build`      | Production build (Next.js + OpenNext Cloudflare) |
| `npm run start`      | Serve the local Next.js production build         |
| `npm run lint`       | Run ESLint                                       |
| `npm run preview`    | Build and preview on Cloudflare locally          |
| `npm run deploy`     | Build and deploy to Cloudflare Workers           |
| `npm run upload`     | Build and upload worker without full deploy flow |
| `npm run cf-typegen` | Generate Cloudflare env TypeScript types         |

## Project Structure

```
abdurrozaqf-website/
├── public/                     # Static assets & project screenshots
├── src/
│   ├── actions/                # Server actions (GitHub data fetching)
│   ├── app/                    # Next.js App Router pages & metadata
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   │   └── [slug]/         # Project detail page
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Homepage
│   │   ├── manifest.ts
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── elements/           # Shared UI building blocks
│   │   ├── layout/             # Navbar, footer, page shell
│   │   └── ui/                 # shadcn/ui primitives
│   ├── features/               # Feature modules (isolated by domain)
│   │   ├── about/
│   │   ├── contact/
│   │   ├── dashboard/          # GitHub contributions widget
│   │   ├── home/
│   │   └── projects/
│   ├── hooks/                  # Shared hooks & React Query keys
│   │   └── query-keys/
│   ├── lib/                    # Shared utilities & config
│   │   ├── api/                # Legacy / unused API client stubs
│   │   ├── constants/          # Menu, metadata, stacks, GitHub queries
│   │   ├── mocks/              # Mock data (about summary, etc.)
│   │   ├── axios.ts            # GitHub Axios clients
│   │   ├── formatter.ts
│   │   ├── motion.ts
│   │   ├── response.ts
│   │   └── utils.ts            # cn() helper (shadcn)
│   ├── providers/              # App, React Query, and theme providers
│   ├── styles/                 # Global CSS & theme transition
│   ├── types/                  # Shared TypeScript types
│   └── proxy.ts
├── components.json             # shadcn/ui configuration
├── open-next.config.ts         # OpenNext Cloudflare config
├── wrangler.jsonc              # Cloudflare Workers config
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

GitHub data is fetched through Axios helpers (`src/lib/axios.ts`) and server actions (`src/actions/github.ts`). Key integrations include:

- **GraphQL** `contributionsCollection` — Contribution calendar for the homepage dashboard
- **GraphQL** `repositories` — Filtered list of curated public repositories
- **REST** `GET /repos/{owner}/{repo}` — Detailed metadata for individual project pages

Server components prefetch homepage and project data; client components use React Query where interactive caching is needed.

## Deployment

The app targets [Cloudflare Workers](https://workers.cloudflare.com/) via [OpenNext](https://opennext.js.org/cloudflare).

1. Set the same environment variables (`GITHUB_TOKEN`, `NEXT_PUBLIC_GITHUB_BASE_URL`, `NEXT_PUBLIC_DOMAIN`) in your Cloudflare project.
2. Preview locally, then deploy:

```bash
npm run preview
npm run deploy
```

You can still run a plain Next.js production server locally with `npm run build` and `npm run start` if needed.

## Acknowledgments

- Data powered by the [GitHub API](https://docs.github.com/en/rest)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Author

**Abdur Rozaqi** — [GitHub](https://github.com/abdurrozaqf)

---

Built with Next.js, Tailwind CSS, and shadcn/ui.
