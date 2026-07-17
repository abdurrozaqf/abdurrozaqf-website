import { Metadata } from "next";

import PageHeading from "@/components/elements/page-heading";
import Container from "@/components/elements/container";

import { getGithubRepositories } from "@/actions/github";
import { Repositories } from "@/types/response";
import Projects from "@/features/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "My projects have all been created by me",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/projects`,
  },
};

const PAGE_TITLE = "Projects";
const PAGE_DESCRIPTION =
  "Showcasing my projets and passion for technology, design, and problem-solving through code.";

export default async function ProjectPage() {
  const projectsData = await getProjets();
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects projectsData={projectsData} />
      </Container>
    </>
  );
}

async function getProjets(): Promise<Repositories[]> {
  const response = await getGithubRepositories();
  return response.data as Repositories[];
}
