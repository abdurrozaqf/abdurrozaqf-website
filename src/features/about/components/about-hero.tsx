import Image from "next/image";

import { Container, ContainerContent } from "@/components/elements/container";
import about from "@/data/about.json";

export default function AboutHero() {
  return (
    <Container>
      <ContainerContent className="grid grid-cols-1 col-span-4 md:grid-cols-4 border-x">
        <div className="col-span-1 p-6 md:col-span-3 md:p-12 md:border-r">
          <span className="block mb-6 modular-label md:mb-8">
            [ 01 // PHILOSOPHY ]
          </span>
          <h1 className="mb-6 font-heading text-[48px] uppercase leading-[0.85] tracking-tight md:mb-8 md:text-[80px] lg:text-[100px]">
            ENGINEERING
            <br />
            <span className="text-muted-foreground">PHILOSOPHY</span>
          </h1>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">
            {/* {`[ EST. ${about.established} / ${about.specialty.toUpperCase()} ]`} */}
            {`[ ${about.specialty.toUpperCase()} ]`}
          </div>
        </div>

        <div className="relative hidden overflow-hidden grayscale contrast-125 md:block md:col-span-1 min-h-64">
          <Image
            src={about.portrait}
            alt="Engineer portrait"
            fill
            className="object-cover"
            sizes="25vw"
            priority
          />
        </div>
      </ContainerContent>
    </Container>
  );
}
