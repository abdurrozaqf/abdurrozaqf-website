import Image from "next/image";
import Link from "next/link";

import { Container, ContainerContent } from "@/components/elements/container";

import type { TDetailRepositories } from "@/features/github";
import { getRepositoryOgImage } from "@/features/og";
import { METADATA } from "@/constants/metadata";

interface ProjectDetailPageProps {
  repo: TDetailRepositories;
}

export default function ProjectDetailPage({ repo }: ProjectDetailPageProps) {
  return (
    <>
      <Container>
        <ContainerContent className="grid grid-cols-1 col-span-4 md:grid-cols-4 border-x">
          <div className="col-span-1 p-6 md:col-span-3 md:p-12">
            <span className="block mb-6 modular-label md:mb-8">
              [ PROJECT // {repo.name.toUpperCase().replace(/[-\s]/g, "_")} ]
            </span>
            <h1 className="mb-6 font-heading text-[64px] uppercase leading-[0.85] tracking-tight md:mb-8 md:text-[100px] lg:text-[120px]">
              {repo.name}
            </h1>
            {repo.description && (
              <p className="max-w-2xl pl-6 text-lg leading-relaxed border-l-2 border-foreground text-muted-foreground md:text-xl">
                {repo.description}
              </p>
            )}
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {/* Built by {METADATA.authors.name}, {METADATA.authors.role}. View
              the source on GitHub or explore more work in the projects archive. */}
              {repo.topics?.join(", ")}
            </p>
          </div>

          <div className="flex flex-col justify-end col-span-1 p-6 text-left md:p-12 md:text-right">
            <div className="space-y-1">
              <span className="block modular-label">Language</span>
              <span className="block font-mono text-sm">
                {repo.language || "N/A"}
              </span>
            </div>
          </div>
        </ContainerContent>
      </Container>

      <Container>
        <ContainerContent className="grid grid-cols-1 col-span-4 md:grid-cols-4 border-x">
          <div className="relative w-full col-span-1 md:col-span-3 aspect-video">
            <Image
              src={getRepositoryOgImage(repo.name, "16/9")}
              alt={`${repo.name} project preview by ${METADATA.authors.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 75vw"
              priority
              unoptimized
            />
          </div>

          <div className="flex flex-col gap-6 p-6 col-span-1 md:p-12">
            <div>
              <span className="block mb-2 modular-label">Stars</span>
              <span className="font-mono text-lg">
                {repo.stargazers_count?.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="block mb-2 modular-label">Forks</span>
              <span className="font-mono text-lg">
                {repo.forks?.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="block mb-2 modular-label">Watchers</span>
              <span className="font-mono text-lg">
                {repo.watchers?.toLocaleString()}
              </span>
            </div>
            <div className="mt-auto flex flex-col w-fit mx-auto gap-2">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={repo.html_url}
                className="inline-block px-6 py-3 font-mono text-xs tracking-widest uppercase transition-colors bg-foreground text-background hover:opacity-80 text-nowrap"
              >
                View on GitHub
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={repo.homepage}
                className="inline-block px-6 py-3 font-mono text-xs tracking-widest uppercase transition-colors bg-foreground text-background hover:opacity-80 text-nowrap"
              >
                View live demo
              </Link>
            </div>
          </div>
        </ContainerContent>
      </Container>
    </>
  );
}
