import { TMappedGithubOverview } from "@/features/github";

import ProjectsHeader from "./projects-header";
import ProjectLists from "./project-lists";

const SELECTED_WORKS_LIMIT = 6;

interface Props {
  overview?: TMappedGithubOverview | null;
}

export default async function ProjectsPage({ overview }: Props) {
  const projects = overview?.repositories.slice(0, SELECTED_WORKS_LIMIT) ?? [];

  return (
    <>
      <ProjectsHeader projectCount={projects.length} />
      {projects.length > 0 && <ProjectLists projects={projects} />}
      {/* <ProjectsCta /> */}
    </>
  );
}
