import { Metadata } from "next";

import Container from "@/components/elements/Container";

import { getGithubData } from "@/services/apis/github";
import { METADATA } from "@/common/constant/metadata";
import Home from "@/modules/home";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  description:
    "Welcome to my portfolio website. Here, you'll find a showcase of my work, skills, and experiences.",
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default async function HomPage() {
  // const githubData = await getGithubData();
  return (
    <>
      <Container data-aos="fade-left">
        <Home />
      </Container>
    </>
  );
}
