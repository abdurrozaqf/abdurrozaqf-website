import Link from "next/link";

import { Container, ContainerContent } from "@/components/elements/container";

export default function ProjectsCta() {
  return (
    <Container>
      <ContainerContent className="flex flex-col items-center justify-center gap-8 p-12 border-x md:p-24">
        <p className="modular-label text-foreground text-center">
          WANT TO SEE MORE TECHNICAL DEEP DIVES?
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 text-2xl tracking-tighter uppercase transition-all duration-300 border-2 border-foreground bg-foreground font-heading text-background hover:bg-background hover:text-foreground md:px-12 md:py-6 md:text-4xl"
        >
          Contact Me For Repository Access
        </Link>
      </ContainerContent>
    </Container>
  );
}
