"use client";

import Image from "next/image";
import Link from "next/link";

import type { TRepositories } from "@/features/github";
import { getRepositoryOgImage } from "@/features/og";
import { MotionDiv } from "@/libs/motion";
import { cn } from "@/libs/utils";

interface ProjectCardProps {
  project: TRepositories;
  index: number;
  variant?: "featured" | "compact";
  showRightBorder?: boolean;
}

function formatIndex(index: number): string {
  return (index + 1).toString().padStart(2, "0");
}

export default function ProjectCard({
  project,
  index,
  variant = "compact",
  showRightBorder = false,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const topics = project.repositoryTopics.nodes.slice(0, isFeatured ? 3 : 2);
  const label = project.name.replace(/[-\s]/g, "_").toUpperCase();
  const href = `/projects/${project.name}`;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col border-b",
        isFeatured ? "col-span-1 md:col-span-2" : "col-span-1",
        showRightBorder && "md:border-r"
      )}
    >
      <Link
        href={href}
        className="group project-card flex flex-col flex-1 divide-y"
      >
        <div className="flex flex-col flex-1 p-6 md:p-8">
          <span
            className={cn(
              "block modular-label",
              isFeatured ? "mb-6" : "mb-4"
            )}
          >
            {`[ ${formatIndex(index)} // ${label} ]`}
          </span>

          <h4
            className={cn(
              "uppercase font-heading transition-transform duration-300 group-hover:translate-x-2.5",
              isFeatured
                ? "mb-4 text-3xl md:text-4xl"
                : "mb-2 text-xl md:text-2xl"
            )}
          >
            {project.name}
          </h4>

          {isFeatured ? (
            <>
              <p className="max-w-sm mb-8 text-sm leading-relaxed text-muted-foreground">
                {project.description ?? "No description available."}
              </p>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic.topic.name}
                    className="px-2 py-1 font-mono text-[10px] uppercase border-2 border-foreground"
                  >
                    {topic.topic.name}
                  </span>
                ))}
                {project.primaryLanguage?.name && topics.length === 0 && (
                  <span className="px-2 py-1 font-mono text-[10px] uppercase border-2 border-foreground">
                    {project.primaryLanguage.name}
                  </span>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-wrap gap-2 mb-4">
                {topics.map((topic) => (
                  <span
                    key={topic.topic.name}
                    className="px-2 py-0.5 font-mono text-[9px] uppercase border-2 border-foreground"
                  >
                    {topic.topic.name}
                  </span>
                ))}
                {project.primaryLanguage?.name && topics.length === 0 && (
                  <span className="px-2 py-0.5 font-mono text-[9px] uppercase border-2 border-foreground">
                    {project.primaryLanguage.name}
                  </span>
                )}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {project.description ?? "No description available."}
              </p>
            </>
          )}
        </div>

        <div
          className={cn(
            "relative w-full overflow-hidden",
            isFeatured ? "aspect-video" : "aspect-square"
          )}
        >
          <Image
            src={getRepositoryOgImage(
              project.name,
              isFeatured ? "16/9" : "1/1"
            )}
            alt={project.name}
            fill
            className="object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0"
            sizes={
              isFeatured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 25vw"
            }
            unoptimized
          />
        </div>
      </Link>
    </MotionDiv>
  );
}
