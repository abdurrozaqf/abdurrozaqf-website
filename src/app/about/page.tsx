import { Metadata } from "next";

import PageHeading from "@/components/elements/PageHeading";
import Container from "@/components/elements/Container";
import About from "@/modules/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "My personal background encompasses a diverse range of experiences and skills.",
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

const PAGE_TITLE = "About";
const PAGE_DESCRIPTION = "A short story of me";

interface AboutPageProps {}

export default function AboutPage({}: AboutPageProps) {
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container>
    </>
  );
}
