import { Container, ContainerContent } from "@/components/elements/container";

interface ProjectsHeaderProps {
  projectCount: number;
}

export default function ProjectsHeader({ projectCount }: ProjectsHeaderProps) {
  const year = new Date().getFullYear();
  const paddedCount = projectCount.toString().padStart(2, "0");

  return (
    <Container>
      <ContainerContent className="grid grid-cols-1 col-span-4 divide-y md:grid-cols-4 md:divide-x md:divide-y-0 border-x">
        <div className="col-span-1 p-6 md:col-span-3 md:p-12">
          <span className="block mb-6 modular-label md:mb-8">
            [ 00 // INDEX ]
          </span>
          <h1 className="mb-6 font-heading text-[64px] uppercase leading-[0.85] tracking-tight md:mb-8 md:text-[100px] lg:text-[120px]">
            PROJECTS
          </h1>
          <p className="max-w-2xl pl-6 text-lg leading-relaxed border-l-2 border-foreground text-muted-foreground md:text-xl">
            Building digital experiences with precision. A curated collection of
            technical explorations focusing on high-performance interfaces,
            brutalist aesthetics, and seamless user interaction.
          </p>
        </div>

        <div className="flex flex-col justify-end col-span-1 p-6 text-left md:p-12 md:text-right">
          <div className="space-y-1">
            <span className="block modular-label">Index / {year}</span>
            <span className="block modular-label text-foreground">
              Selected Works ({paddedCount})
            </span>
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
}
