import { Metadata } from "next";

import PageHeading from "@/components/elements/page-heading";
import Container from "@/components/elements/container";
import About from "@/features/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "My personal background encompasses a diverse range of experiences and skills.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
  },
};

const PAGE_TITLE = "About";
const PAGE_DESCRIPTION = "A short story of me";

export default function AboutPage() {
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container>
    </>
  );
}
