import { getGithubOverview } from "@/features/github";

import ProjectsHeader from "./projects-header";
import ProjectLists from "./project-lists";
// import ProjectsCta from "./projects-cta";

const SELECTED_WORKS_LIMIT = 6;

export default async function ProjectsPage() {
  const overview = await getGithubOverview();

  if (!overview?.data) {
    return null;
  }

  const projects = overview.data.repositories.slice(0, SELECTED_WORKS_LIMIT);

  return (
    <>
      <ProjectsHeader projectCount={projects.length} />
      <ProjectLists projects={projects} />
      {/* <ProjectsCta /> */}
    </>
  );
}
