import Link from "next/link";

import DownloadCvButton from "./download-cv-button";

import { Container, ContainerContent } from "@/components/elements/container";
import { SOCIAL_MEDIA } from "@/constants/social-media";

const CTA_SOCIALS = SOCIAL_MEDIA.filter((social) =>
  ["Github", "Linkedin"].includes(social.title),
).map((social) => ({
  label: social.title === "Github" ? "GH" : "LI",
  href: social.href,
}));

export default function AboutCta() {
  return (
    <Container className="bg-foreground text-background border-background">
      <ContainerContent className="grid grid-cols-1 col-span-4 md:grid-cols-4 border-x border-background">
        <div className="col-span-1 p-6 md:col-span-3 md:p-12 md:border-r border-background">
          <h2 className="font-heading text-[48px] uppercase leading-[0.85] md:text-[64px] lg:text-[80px]">
            WANT TO SEE THE
            <br />
            TECH SPECS?
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center col-span-1 gap-6 p-6 md:p-12">
          <DownloadCvButton />
          <div className="flex gap-6">
            {CTA_SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest border-b border-background pb-0.5 transition-opacity hover:opacity-70"
              >
                {social.label}
              </Link>
            ))}
            <Link
              href="mailto:rozaqa27@gmail.com"
              className="font-mono text-[10px] uppercase tracking-widest border-b border-background pb-0.5 transition-opacity hover:opacity-70"
            >
              EM
            </Link>
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
}
