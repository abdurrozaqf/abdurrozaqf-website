import { Container, ContainerContent } from "@/components/elements/container";
import about from "@/data/about.json";

export default function AboutStory() {
  return (
    <Container>
      <ContainerContent className="grid grid-cols-1 col-span-4 md:grid-cols-4 border-x">
        <div className="col-span-1 p-6 md:p-12 md:border-r">
          <span className="block mb-6 modular-label md:mb-8">
            [ 02 // ORIGINS ]
          </span>
          <h2 className="mb-4 text-3xl uppercase font-heading md:text-4xl">
            THE STORY
          </h2>
        </div>

        <div className="flex flex-col col-span-1 gap-8 p-6 md:col-span-3 md:p-12">
          <p className="max-w-3xl text-xl leading-relaxed md:text-2xl">
            {about.story.lead}
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {about.story.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
}
