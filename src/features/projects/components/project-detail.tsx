"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  EyeIcon,
  StarIcon,
  GitForkIcon,
  GitBranchIcon,
  CircleDotIcon,
  ArrowLeftIcon,
  ArrowUpRightIcon,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Container, ContainerContent } from "@/components/elements/container";
import { formatDate, formatDateLong } from "@/utils/formatter";
import type { TDetailRepositories } from "@/features/github";
import { getRepositoryOgImage } from "@/features/og";
import { METADATA } from "@/constants/metadata";
import { cn } from "@/libs/utils";

import {
  formatRepoLabel,
  hasLiveDemo,
  formatMetric,
  TimelineItem,
  MetricItem,
} from "@/features/projects";

interface ProjectDetailPageProps {
  repo: TDetailRepositories;
}

export default function ProjectDetailPage({ repo }: ProjectDetailPageProps) {
  const label = formatRepoLabel(repo.name);
  const liveDemo = hasLiveDemo(repo.homepage);
  const topics = repo.topics ?? [];

  const metrics: MetricItem[] = useMemo(
    () => [
      {
        label: "Stars",
        value: formatMetric(repo.stargazers_count),
        icon: StarIcon,
      },
      { label: "Forks", value: formatMetric(repo.forks), icon: GitForkIcon },
      { label: "Watchers", value: formatMetric(repo.watchers), icon: EyeIcon },
      {
        label: "Open Issues",
        value: formatMetric(repo.open_issues),
        icon: CircleDotIcon,
      },
    ],
    [repo.stargazers_count, repo.forks, repo.watchers, repo.open_issues]
  );

  const timeline: TimelineItem[] = useMemo(
    () => [
      {
        label: "Created",
        dateTime: repo.created_at,
        absolute: formatDateLong(repo.created_at),
        relative: formatDate(repo.created_at),
      },
      {
        label: "Updated",
        dateTime: repo.updated_at,
        absolute: formatDateLong(repo.updated_at),
        relative: formatDate(repo.updated_at),
      },
      {
        label: "Last Push",
        dateTime: repo.pushed_at,
        absolute: formatDateLong(repo.pushed_at),
        relative: formatDate(repo.pushed_at),
      },
    ],
    [repo.created_at, repo.updated_at, repo.pushed_at]
  );

  return (
    <>
      {/* 01 — Location */}
      <Container>
        <ContainerContent className="col-span-4 border-x">
          <nav className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between md:px-12">
            <Breadcrumb>
              <BreadcrumbList className="font-mono uppercase tracking-[0.15em]">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/projects">Projects</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-mono uppercase tracking-[0.15em]">
                    {repo.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 min-h-11 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              <ArrowLeftIcon className="size-4" aria-hidden />
              Archive
            </Link>
          </nav>
        </ContainerContent>
      </Container>

      {/* 02 — Case study hero */}
      <Container>
        <ContainerContent className="grid grid-cols-1 col-span-4 md:grid-cols-4 border-x">
          <div className="col-span-1 p-6 md:col-span-3 md:p-12 md:border-r">
            <span className="block mb-6 modular-label md:mb-8">
              [ CASE_STUDY // {label} ]
            </span>
            <h1 className="mb-6 wrap-break-word font-heading text-[48px] uppercase leading-[0.85] tracking-tight md:mb-8 md:text-[88px] lg:text-[112px]">
              {repo.name}
            </h1>
            {repo.description ? (
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
                {repo.description}
              </p>
            ) : (
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
                Open-source work by {METADATA.authors.name}. Explore the
                repository for implementation details and recent activity.
              </p>
            )}
          </div>

          <aside className="flex flex-col justify-between col-span-1 gap-8 p-6 border-t md:border-t-0 md:p-12">
            <div className="space-y-6">
              <div>
                <span className="block mb-2 modular-label">Language</span>
                <span className="block font-mono text-sm uppercase">
                  {repo.language || "N/A"}
                </span>
              </div>
              <div>
                <span className="block mb-2 modular-label">Visibility</span>
                <span className="block font-mono text-sm uppercase">
                  {repo.visibility || "public"}
                </span>
              </div>
              <div>
                <span className="block mb-2 modular-label">Default Branch</span>
                <span className="inline-flex items-center gap-2 font-mono text-sm">
                  <GitBranchIcon className="size-3.5" aria-hidden />
                  {repo.default_branch || "main"}
                </span>
              </div>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              [ {METADATA.authors.role.toUpperCase()} ]
            </p>
          </aside>
        </ContainerContent>
      </Container>

      {/* 03 — Full-bleed preview */}
      <Container>
        <ContainerContent className="col-span-4 border-x">
          <figure className="group">
            <div className="relative w-full overflow-hidden aspect-video">
              <Image
                fill
                src={getRepositoryOgImage(repo.name, "16/9")}
                alt={`${repo.name} project preview by ${METADATA.authors.name}`}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
                unoptimized
              />
            </div>

            <figcaption className="flex flex-col gap-5 p-6 border-t md:flex-row md:items-center md:justify-between md:gap-8 md:px-12 md:py-8">
              <div className="min-w-0">
                <span className="block mb-1 modular-label">Preview</span>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Dynamic OG · 16:9
                </p>
              </div>

              <div className="flex w-full flex-col gap-2 sm:flex-row sm:w-auto sm:flex-wrap">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 min-h-11 px-5 font-mono text-xs tracking-widest uppercase transition-colors duration-200 border border-foreground/40 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground sm:w-auto"
                >
                  Source
                  <ArrowUpRightIcon className="size-3.5 shrink-0" aria-hidden />
                </Link>
                {liveDemo && (
                  <Link
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 min-h-11 px-5 font-mono text-xs tracking-widest uppercase transition-opacity duration-200 bg-foreground text-background hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 sm:w-auto"
                  >
                    Live Demo
                    <ArrowUpRightIcon
                      className="size-3.5 shrink-0"
                      aria-hidden
                    />
                  </Link>
                )}
              </div>
            </figcaption>
          </figure>
        </ContainerContent>
      </Container>

      {/* 04 — Metrics bento */}
      <Container>
        <ContainerContent className="grid grid-cols-2 col-span-4 md:grid-cols-4 border-x md:divide-x">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className={cn(
                  "flex flex-col gap-4 p-6 md:p-10 bg-background md:border-b-0",
                  index === 0 && "border-r border-b",
                  index === 1 && "border-b",
                  index === 2 && "border-r"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="modular-label">{metric.label}</span>
                  <Icon className="size-4 text-muted-foreground" aria-hidden />
                </div>
                <span className="font-heading text-4xl uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                  {metric.value}
                </span>
              </div>
            );
          })}
        </ContainerContent>
      </Container>

      {/* 05 — Stack + timeline */}
      <Container>
        <ContainerContent className="grid grid-cols-1 col-span-4 md:grid-cols-4 border-x divide-y md:divide-y-0 md:divide-x">
          <div className="col-span-1 p-6 md:col-span-2 md:p-12">
            <span className="block mb-6 modular-label md:mb-8">
              [ 02 // TECH_STACK ]
            </span>
            <h2 className="mb-6 font-heading text-3xl uppercase leading-none tracking-tight md:mb-8 md:text-5xl">
              Stack & Topics
            </h2>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Tags pulled from the repository metadata. These mark the primary
              languages, frameworks, and themes that shape this project.
            </p>
            {topics.length > 0 ? (
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Repository topics"
              >
                {topics.map((topic) => (
                  <li key={topic}>
                    <span className="inline-block px-3 py-2 font-mono text-[10px] uppercase tracking-wider border transition-colors duration-200 hover:bg-foreground hover:text-background">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                No topics published for this repository.
              </p>
            )}
          </div>

          <div className="col-span-1 p-6 md:col-span-2 md:p-12">
            <span className="block mb-6 modular-label md:mb-8">
              [ 03 // TIMELINE ]
            </span>
            <h2 className="mb-6 font-heading text-3xl uppercase leading-none tracking-tight md:mb-8 md:text-5xl">
              Activity
            </h2>
            <ol className="divide-y border-y">
              {timeline.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="modular-label shrink-0">{item.label}</span>
                  <div className="text-left sm:text-right">
                    <time
                      dateTime={item.dateTime}
                      className="block font-mono text-sm"
                    >
                      {item.absolute || "—"}
                    </time>
                    {item.relative && (
                      <span className="block mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        {item.relative}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </ContainerContent>
      </Container>

      {/* 06 — Actions */}
      <Container>
        <ContainerContent className="grid grid-cols-1 col-span-4 md:grid-cols-4 border-x divide-y md:divide-y-0 md:divide-x">
          <div className="col-span-1 p-6 md:col-span-2 md:p-12">
            <span className="block mb-4 modular-label">Repository</span>
            <p className="mb-2 font-mono text-sm break-all">{repo.full_name}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              {repo.owner?.login ? `Owner · ${repo.owner.login}` : "GitHub"}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 p-6 col-span-1 md:col-span-2 md:p-12 sm:flex-row sm:items-center">
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-12 px-6 font-mono text-xs tracking-widest uppercase transition-colors duration-200 border hover:border-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              View on GitHub
              <ArrowUpRightIcon className="size-3.5" aria-hidden />
            </Link>
            {liveDemo ? (
              <Link
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-12 px-6 font-mono text-xs tracking-widest uppercase transition-opacity duration-200 bg-foreground text-background hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
              >
                View live demo
                <ArrowUpRightIcon className="size-3.5" aria-hidden />
              </Link>
            ) : (
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 min-h-12 px-6 font-mono text-xs tracking-widest uppercase transition-colors duration-200 border hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                More projects
                <ArrowLeftIcon className="size-3.5 rotate-180" aria-hidden />
              </Link>
            )}
          </div>
        </ContainerContent>
      </Container>

      {/* 07 — Closing CTA */}
      <Container>
        <ContainerContent className="flex flex-col items-center justify-center gap-8 p-12 border-x md:p-24">
          <p className="modular-label text-foreground text-center">
            INTERESTED IN THE ENGINEERING BEHIND THIS?
          </p>
          <Link
            href={`mailto:${METADATA.authors.email}`}
            className="px-8 py-4 text-2xl tracking-tighter uppercase transition-all duration-300 border-2 border-foreground bg-foreground font-heading text-background hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 md:px-12 md:py-6 md:text-4xl"
          >
            Start a Conversation
          </Link>
        </ContainerContent>
      </Container>
    </>
  );
}
