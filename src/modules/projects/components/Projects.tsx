import ProjectLists from "./ProjectLists";

interface ProjectsProps {
  projectsData: any;
}

export default function Projects({ projectsData }: ProjectsProps) {
  return (
    <>
      <ProjectLists data={projectsData} />
    </>
  );
}
