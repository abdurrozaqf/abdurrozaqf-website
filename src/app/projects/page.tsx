import { Metadata } from "next";

import PageHeading from "@/components/elements/PageHeading";
import Container from "@/components/elements/Container";

import { getRepositories } from "@/services/apis/github";
import Projects from "@/modules/projects";
import { Repositories } from "@/common/types/response";

export const metadata: Metadata = {
  title: "Projects | Abdur Rozaq F",
  description: "My All Projects",
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
  const response = await getRepositories();
  return response;
}
