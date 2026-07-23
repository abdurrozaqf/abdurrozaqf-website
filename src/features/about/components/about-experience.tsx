import { Container, ContainerContent } from "@/components/elements/container";
import about from "@/data/about.json";

import ExperienceItem from "./experience-item";

export default function AboutExperience() {
  return (
    <Container>
      <ContainerContent className="grid grid-cols-1 col-span-4 divide-y md:grid-cols-4 border-x md:divide-y-0 md:divide-x">
        <div className="col-span-1 p-6 bg-muted/20 md:p-12">
          <span className="block mb-6 modular-label md:mb-8">
            [ 03 // TRACK RECORD ]
          </span>
          <h2 className="mb-4 text-3xl uppercase font-heading md:text-4xl">
            EXPERIENCE
          </h2>
        </div>

        <div className="col-span-1 divide-y md:col-span-3">
          {about.experience.map((role) => (
            <ExperienceItem
              key={`${role.company}-${role.period}`}
              title={role.title}
              company={role.company}
              period={role.period}
              current={role.current}
              description={role.description}
              tags={role.tags}
            />
          ))}
        </div>
      </ContainerContent>
    </Container>
  );
}
