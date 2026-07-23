import Image from "next/image";
import Link from "next/link";

import { Container, ContainerContent } from "@/components/elements/container";
import type { TRepositories } from "@/features/github";
import { getRepositoryOgImage } from "@/features/og";
import { cn } from "@/libs/utils";

interface Props {
  featuredProject: TRepositories | undefined;
  secondaryProjects: TRepositories[] | undefined;
}

export default function ProjectsSection({
  featuredProject,
  secondaryProjects,
}: Props) {
  const FEATURED_LABEL = featuredProject?.name
    .replace(/[-\s]/g, "_")
    .toUpperCase();

  return (
    <>
      <Container className="px-0 border-none md:px-0 xl:px-0 bg-foreground">
        <ContainerContent className="flex items-center justify-between p-6 border-background md:px-12 text-background border-x">
          <h3 className="text-2xl tracking-tighter uppercase font-heading md:text-3xl">
            Selected Works / Projects
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-widest">
            Archive 01-03
          </span>
        </ContainerContent>
      </Container>

      <Container>
        <ContainerContent className="grid grid-cols-1 divide-y md:divide-y-0 md:divide-x md:grid-cols-4 border-x">
          <Link
            href={featuredProject?.url ?? "#"}
            className="flex flex-col flex-1 w-full col-span-1 divide-y md:col-span-2"
          >
            <div className="flex flex-col flex-1 p-6 md:p-8">
              <span className="block mb-6 tracking-tighter modular-label">
                {/* {`[ ${featuredProject.id} // ${featuredProject.name} ]`} */}
                {`[ 05 // ${FEATURED_LABEL} ]`}
              </span>
              <h4 className="mb-4 text-3xl uppercase font-heading md:text-4xl">
                {featuredProject?.name}
              </h4>
              <p className="max-w-sm mb-8 text-muted-foreground">
                {featuredProject?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProject?.repositoryTopics.nodes.map((topic) => (
                  <span
                    key={topic.topic.name}
                    className="px-2 py-1 font-mono text-xs border border-muted-foreground/20"
                  >
                    {topic.topic.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative w-full h-auto overflow-hidden aspect-video">
              <Image
                src={getRepositoryOgImage(featuredProject?.name ?? "", "16/9")}
                alt={featuredProject?.name ?? "Featured Project"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>
          </Link>

          <div className="flex flex-col w-full col-span-1 divide-y md:col-span-2">
            {secondaryProjects?.map((project, index) => {
              const label = project.name.replace(/[-\s]/g, "_").toUpperCase();

              return (
                <Link
                  key={project.id}
                  href={project.url}
                  className={cn(
                    "grid flex-1 w-full grid-cols-1 xl:grid-cols-2"
                  )}
                >
                  <div className="flex flex-col justify-between p-6 border-b md:p-8 xl:border-r xl:border-b-0">
                    <div>
                      <span className="block mb-4 tracking-tighter modular-label">
                        {/* {`[ ${project.id} // ${project.name} ]`} */}
                        {`[ 0${index + 6} // ${label} ]`}
                      </span>
                      <h4 className="mb-2 text-2xl uppercase font-heading">
                        {project.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.repositoryTopics.nodes.map((topic) => (
                        <span
                          key={topic.topic.name}
                          className="px-2 py-1 font-mono text-xs border border-muted-foreground/20"
                        >
                          {topic.topic.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative hidden overflow-hidden aspect-square min-h-45 xl:block">
                    <Image
                      src={getRepositoryOgImage(project.name, "1/1")}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      unoptimized
                    />
                  </div>
                  <div className="relative block overflow-hidden aspect-video xl:hidden">
                    <Image
                      src={getRepositoryOgImage(project.name, "16/9")}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      unoptimized
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </ContainerContent>
      </Container>
    </>
  );
}
