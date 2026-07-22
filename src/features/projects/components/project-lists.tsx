import { Container, ContainerContent } from "@/components/elements/container";
import type { TRepositories } from "@/features/github";

import ProjectCard from "./project-card";

interface ProjectListsProps {
  projects: TRepositories[];
}

const FEATURED_COUNT = 2;

export default function ProjectLists({ projects }: ProjectListsProps) {
  const featured = projects.slice(0, FEATURED_COUNT);
  const compact = projects.slice(FEATURED_COUNT);

  return (
    <>
      <Container className="px-0 border-none md:px-0 xl:px-0 bg-foreground">
        <ContainerContent className="flex items-center justify-between p-6 border-background md:px-12 text-background border-x">
          <h3 className="text-2xl tracking-tighter uppercase font-heading md:text-3xl">
            TECHNICAL_REPOSITORY
          </h3>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-background/60 sm:inline">
            Filtered by: Excellence
          </span>
        </ContainerContent>
      </Container>

      <Container>
        <ContainerContent className="grid grid-cols-1 md:grid-cols-4 border-x">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="featured"
              showRightBorder={index < featured.length - 1}
            />
          ))}

          {compact.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + FEATURED_COUNT}
              variant="compact"
              showRightBorder={(index + 1) % 4 !== 0}
            />
          ))}
        </ContainerContent>
      </Container>
    </>
  );
}
