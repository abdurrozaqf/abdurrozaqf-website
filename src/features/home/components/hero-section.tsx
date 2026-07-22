import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container, ContainerContent } from "@/components/elements/container";
import { METADATA } from "@/constants/metadata";

export default function HeroSection() {
  return (
    <Container>
      <ContainerContent className="grid grid-cols-1 col-span-4 divide-x md:grid-cols-4 border-x">
        <div className="col-span-1 p-6 md:col-span-3 md:p-12">
          <span className="block mb-6 modular-label md:mb-8">
            [ 01 // HERO ]
          </span>
          <h1 className="mb-6 wrap-break-word font-heading text-[64px] uppercase leading-[0.85] tracking-tight md:mb-8 md:text-[100px] lg:text-[140px]">
            {METADATA.authors.name}
          </h1>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <span className="px-4 py-1 font-mono text-xs tracking-widest border w-fit text-muted-foreground border-muted-foreground">
              001/
            </span>
            <h2 className="font-heading text-3xl uppercase leading-none md:text-[64px] md:leading-15">
              {METADATA.authors.role}
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-end col-span-1 p-6 md:p-12">
          <Link
            href="/projects"
            className="flex flex-col items-center justify-center w-full gap-4 transition-all border-2 group aspect-square hover:bg-foreground hover:text-background"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              View Projects
            </span>
            <ArrowRight className="transition-transform size-10 group-hover:translate-x-2" />
          </Link>
        </div>
      </ContainerContent>
    </Container>
  );
}
