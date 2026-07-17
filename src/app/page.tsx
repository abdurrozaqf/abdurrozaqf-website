import { Metadata } from "next";

import Container from "@/components/elements/container";
import { METADATA } from "@/lib/constants/metadata";
import Home from "@/features/home";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  description:
    "Welcome to my portfolio website. Here, you'll find a showcase of my work, skills, and experiences.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN,
  },
};

export default async function HomPage() {
  return (
    <>
      <Container data-aos="fade-left">
        <Home />
      </Container>
    </>
  );
}
