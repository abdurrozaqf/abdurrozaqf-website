import { FolderCodeIcon, GitForkIcon, StarIcon } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO } from "@/lib/constants/portfolio";
import type { Repositories } from "@/types/response";

export default function Repositories({ repos }: { repos: Repositories[] }) {
  return (
    <div className="grid grid-cols-1 gap-px p-px md:grid-cols-2 bg-foreground/20">
      {repos.length > 0 ? (
        <>
          {repos.map((repo) => {
            return (
              <Link
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 transition-colors cursor-pointer group bg-background/90 hover:bg-background/70 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FolderCodeIcon className="size-5" aria-hidden />
                  <span className="font-mono text-sm uppercase">
                    {repo.name}
                  </span>
                </div>
                <p className="mb-8 text-sm leading-5 text-muted-foreground line-clamp-2">
                  {repo.description || `Open-source work by ${PORTFOLIO.name}.`}
                </p>
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs">
                      {repo.primaryLanguage?.name || "Unknown"}
                    </span>
                  </div>
                  <div className="flex items-start gap-1">
                    <StarIcon className="size-3.5" aria-hidden />
                    <span className="font-mono text-xs">
                      {repo.stargazerCount}
                    </span>
                  </div>
                  <div className="flex items-start gap-1">
                    <GitForkIcon className="size-3.5" aria-hidden />
                    <span className="font-mono text-xs">{repo.forkCount}</span>
                  </div>
                </div>
                <ul className="flex flex-wrap items-center gap-2">
                  {repo.repositoryTopics.nodes.map((topic) => (
                    <li key={topic.topic.name}>
                      <span className="px-2 py-1 font-mono text-xs border border-foreground/20">
                        {topic.topic.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}

          {repos.length % 2 !== 0 && <div className="flex-1 bg-background" />}
        </>
      ) : (
        <div className="col-span-full bg-[#0a0a0a] p-8 font-mono text-xs uppercase text-muted-foreground">
          Repository data unavailable
        </div>
      )}
    </div>
  );
}
