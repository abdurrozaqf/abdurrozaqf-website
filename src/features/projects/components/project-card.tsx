import Image from "next/image";
import Link from "next/link";

import type { TRepositories } from "@/features/github";
import { getRepositoryOgImage } from "@/features/og";
import { cn } from "@/libs/utils";

interface ProjectCardProps {
  project: TRepositories;
  index: number;
  variant?: "featured" | "compact";
}

function formatIndex(index: number): string {
  return (index + 1).toString().padStart(2, "0");
}

export default function ProjectCard({
  index,
  project,
  variant = "compact",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const topics = project.repositoryTopics.nodes.slice(0, isFeatured ? 3 : 2);
  const label = project.name.replace(/[-\s]/g, "_").toUpperCase();
  const href = `/projects/${project.name}`;

  return (
    <li
      className={cn(
        "flex flex-col",
        isFeatured ? "col-span-1 md:col-span-2" : "col-span-1"
      )}
    >
      <Link href={href} className="flex flex-col flex-1 group">
        <div className="flex flex-col flex-1 p-6 border-b md:p-8">
          <span
            className={cn(
              "block modular-label tracking-tighter",
              isFeatured ? "mb-6" : "mb-4"
            )}
          >
            {`[ ${formatIndex(index)} // ${label} ]`}
          </span>

          <h4
            className={cn(
              "uppercase font-heading transition-transform duration-300",
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
                    className="px-2 py-1 font-mono text-[10px] uppercase border"
                  >
                    {topic.topic.name}
                  </span>
                ))}
                {project.primaryLanguage?.name && topics.length === 0 && (
                  <span className="px-2 py-1 font-mono text-[10px] uppercase border">
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
                    className="px-2 py-0.5 font-mono text-[9px] uppercase border"
                  >
                    {topic.topic.name}
                  </span>
                ))}
                {project.primaryLanguage?.name && topics.length === 0 && (
                  <span className="px-2 py-0.5 font-mono text-[9px] uppercase border">
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

        <div className={cn("relative w-full overflow-hidden aspect-video")}>
          <Image
            src={getRepositoryOgImage(project.name, "16/9")}
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
    </li>
  );
}
